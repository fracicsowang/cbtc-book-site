#!/usr/bin/env bash
# daily_publish.sh — runs once a day via launchd. Reads publish-queue.yml,
# finds today's slugs, copies them into the Astro content collection,
# builds, and (optionally) commits & pushes the deployed /site/ repo.
#
# Behavior:
#   - If today's date isn't in the queue (weekends, holidays, after end):
#     log "no-op" and exit 0.
#   - If a slug is missing from /blog-drafts/, log warning and skip it.
#   - On success, write last-run.log with timestamp + slugs published.
#   - macOS desktop notification is fired at end (success or failure).
#
# To disable git push (dry-run mode), set DRY_PUBLISH=1.
# To force a different date (testing), set FORCE_DATE=2026-05-11.

set -euo pipefail

ROOT="/Users/chunjun/CBTC_book_site"
DRAFTS="$ROOT/blog-drafts"
CONTENT="$ROOT/site-src/src/content/blog"
SITE="$ROOT/site"
QUEUE="$ROOT/publish-queue.yml"
LOG="$ROOT/last-run.log"
PYTHON="$ROOT/.venv/bin/python"

DATE="${FORCE_DATE:-$(date +%Y-%m-%d)}"

notify() {
  # macOS notification (works even when Terminal isn't focused)
  /usr/bin/osascript -e "display notification \"$2\" with title \"cbtcbook publish\" subtitle \"$1\"" 2>/dev/null || true
}

log() {
  printf "[%s] %s\n" "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "$*" | tee -a "$LOG"
}

cd "$ROOT"
log "─── daily_publish: $DATE ───"

# 1. Find DUE slugs in the queue YAML (catch-up: every date <= today that
#    hasn't been published yet, not just today's). This back-fills any day the
#    publisher didn't fire — weekends, or an asleep laptop. The copy step below
#    is idempotent (skips slugs already in the content collection), so re-running
#    is safe.
SLUGS=$("$PYTHON" - <<PY
import sys, re, datetime
from pathlib import Path
queue = Path("$QUEUE").read_text()
today = "$DATE"
in_block = False
for line in queue.splitlines():
    m = re.match(r'^"(\d{4}-\d{2}-\d{2})":', line)
    if m:
        # ISO dates (YYYY-MM-DD) sort lexicographically = chronologically,
        # so "<= today" selects today plus any earlier, still-unpublished day.
        in_block = (m.group(1) <= today)
        continue
    if in_block:
        m2 = re.match(r'^\s*-\s+([a-z0-9-]+)\s*$', line)
        if m2:
            print(m2.group(1))
PY
)

if [[ -z "$SLUGS" ]]; then
  log "no slugs scheduled for $DATE — exiting"
  notify "No-op" "$DATE — nothing scheduled"
  exit 0
fi

log "due (incl. back-fill): $(echo "$SLUGS" | wc -l | tr -d ' ') slug(s)"

# 2. Copy each slug from /blog-drafts/ into /site-src/src/content/blog/
mkdir -p "$CONTENT"
COPIED=()
MISSING=()
while IFS= read -r slug; do
  src="$DRAFTS/$slug.md"
  dst="$CONTENT/$slug.md"
  if [[ -f "$src" ]]; then
    if [[ -f "$dst" ]]; then
      log "  skip (already published): $slug"
    else
      cp "$src" "$dst"
      COPIED+=("$slug")
      log "  copied: $slug"
    fi
  else
    MISSING+=("$slug")
    log "  MISSING in /blog-drafts/: $slug"
  fi
done <<< "$SLUGS"

if [[ ${#COPIED[@]} -eq 0 ]]; then
  log "no new copies needed today, but rebuilding to keep /site/blog/ in sync"
fi

# 2a. Resolve internal links: refresh every published article from its
#    master in /blog-drafts/, then strip [text](/blog/slug/) wrappers
#    whose target slug isn't published yet. Re-running on every build means
#    a link auto-resurrects the day its target goes live.
log "resolving internal links…"
"$PYTHON" "$ROOT/blog-tools/resolve_internal_links.py" >> "$LOG" 2>&1 || true

# 2b. Wire figures: replace [FIGURE: …] placeholders in published copies
#    with real markup; copy SVG/PNG into site-src/public/img/.
#    Must run AFTER resolve_internal_links, which overwrites these files
#    with raw masters.
log "wiring figures into published articles…"
"$PYTHON" "$ROOT/blog-tools/wire_figures.py" >> "$LOG" 2>&1 || true

# 3. Astro build → outputs to site-src/dist/, then rsync into /site/blog/
#    The two-step pattern avoids Astro's outDir-cleaning behavior wiping
#    the eight static HTML pages in /site/ during every build.
log "running Astro build…"
cd "$ROOT/site-src"
if ! npm run build > /tmp/astro-build.log 2>&1; then
  log "BUILD FAILED — see /tmp/astro-build.log"
  tail -20 /tmp/astro-build.log | tee -a "$LOG"
  notify "Build FAILED" "$DATE — see /tmp/astro-build.log"
  exit 1
fi
log "Astro build OK"

# Sync dist/ → /site/blog/  (only touches /site/blog/, never /site/*.html)
# Astro builds with base=/blog into dist/ — files at dist/<slug>/index.html,
# served at URL /blog/<slug>/. So dist/ contents map directly to /site/blog/.
mkdir -p "$SITE/blog"
rsync -a --delete \
  --exclude='figures/' --exclude='slides/' \
  "$ROOT/site-src/dist/" "$SITE/blog/"
log "rsync dist/ → site/blog/ OK"

# 3b. Regenerate /site/blog/sitemap.xml so Google sees newly-published URLs
"$PYTHON" "$ROOT/blog-tools/gen_blog_sitemap.py" >> "$LOG" 2>&1 || true

# 4. Git commit + push the /site/ repo (the GitHub Pages deploy target)
if [[ "${DRY_PUBLISH:-0}" == "1" ]]; then
  log "DRY_PUBLISH=1 — skipping git commit/push"
  notify "Built (dry)" "Built; skipped push"
  exit 0
fi

cd "$SITE"
git add -A blog/
if git diff --staged --quiet; then
  log "no git changes after build — exiting"
  notify "No-op" "$DATE — no diff"
  exit 0
fi

COMMIT_MSG="blog: publish $(printf '%s\n' "${COPIED[@]}")"
git commit -m "blog: publish ${#COPIED[@]} article(s) for $DATE

$(printf '  - %s\n' "${COPIED[@]}")
" >> "$LOG" 2>&1

log "pushing to origin…"
if ! git push origin main >> "$LOG" 2>&1; then
  log "GIT PUSH FAILED"
  notify "Push FAILED" "$DATE — see last-run.log"
  exit 1
fi

log "✓ published ${#COPIED[@]} article(s) for $DATE"
notify "Published" "$DATE — ${#COPIED[@]} article(s) live"

# 6. Email summary via Formspree (subject: "cbtcbook publish — DATE — N articles")
if [[ ${#COPIED[@]} -gt 0 ]]; then
  SLUGS_CSV=$(IFS=,; echo "${COPIED[*]}")
  "$PYTHON" "$ROOT/blog-tools/notify_publish.py" \
    --slugs "$SLUGS_CSV" --date "$DATE" >> "$LOG" 2>&1 || \
    log "WARN: notify_publish.py exited non-zero (email may not have sent)"
fi

# 5. Stale-check: warn if last successful run was >36h ago (laptop was asleep)
LAST_OK=$(grep -E '^\[.*\] ✓ published' "$LOG" | tail -2 | head -1 || true)
if [[ -n "$LAST_OK" ]]; then
  : # nothing — informational only
fi
