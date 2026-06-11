#!/usr/bin/env python3
"""
gen_hero_cards.py — Generate per-article hero card images via OpenAI's
gpt-image-1 (the 2026 successor to DALL-E 3).

These images serve TWO purposes:
  1. Card thumbnails on /blog/ landing and /blog/category/<cat>/ pages
  2. OG share-card images (LinkedIn / X / Slack link previews)

Per HANDOFF §5/§9 caution: image-gen models invent labels and arrows
when asked for technical schematics. We use this ONLY for editorial /
decorative hero art that supplements (does not replace) the figures
inside articles.

Output: PNG at 1536x1024 (closest gpt-image-1 size to OG 1200x630).
Saved to:
  /blog-images/hero/<slug>.png       (working copy)
  /site-src/public/img/<slug>-hero.png  (Astro picks up at build time)

Usage:
  python3 gen_hero_cards.py --slug what-is-cbtc-2026-guide   # one
  python3 gen_hero_cards.py --published-only                  # only what's in content/
  python3 gen_hero_cards.py --all                             # all 100 drafts
  python3 gen_hero_cards.py --dry --slug X                    # show prompt
"""
from __future__ import annotations
import argparse
import base64
import json
import os
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

THIS = Path(__file__).resolve()
sys.path.insert(0, str(THIS.parent))
from openai_helper import ensure_canonical_key  # noqa: E402

ROOT = THIS.parent.parent
DRAFTS = ROOT / "blog-drafts"
CONTENT = ROOT / "site-src" / "src" / "content" / "blog"
OUT_HERO = ROOT / "blog-images" / "hero"
OUT_PUBLIC = ROOT / "site-src" / "public" / "img"

# OpenAI's text-to-image model. The user's spec called it "gpt-image-2";
# the canonical SDK model name is "gpt-image-1" (released 2025). If the
# account has access to a newer name, override via env.
DEFAULT_MODEL = os.environ.get("OPENAI_IMAGE_MODEL", "gpt-image-1")
DEFAULT_SIZE = "1536x1024"  # closest landscape size to OG 1200x630
DEFAULT_QUALITY = "medium"  # gpt-image-1 supports low/medium/high


# ─── Prompt construction ────────────────────────────────────────────

# Per-cluster scene direction. Keeps each cluster's hero coherent without
# making them all identical.
CLUSTER_SCENE = {
    "definitional": "abstract train silhouette merging into geometric "
                    "signal-flow patterns",
    "comparative": "split-screen abstract composition of two distinct "
                    "signaling architectures, side by side",
    "procurement": "stylized abstract document with seal, gavel, or "
                    "interlocking puzzle pieces representing contract structure",
    "technical": "abstract architectural diagram of nodes and connections, "
                    "circuit-board geometry with depth",
    "agency-case-studies": "abstract metropolitan skyline silhouette with "
                    "subway-line geometry threading through",
    "international": "abstract globe or world-map fragment with metro-line "
                    "geometry, multi-region composition",
    "standards": "abstract folded document, embossed seal, or stacked "
                    "regulatory layers in geometric form",
    "operations": "abstract control-room composition, dashboard glyphs, "
                    "operational rhythm geometry",
    "career": "abstract career-path geometry, skills network, professional "
                    "growth motif",
    "trends": "abstract horizon line with future-tech geometry, sunrise "
                    "or trajectory composition",
}

# Map the actual category strings used in frontmatter to scene keys.
CATEGORY_TO_SCENE = {
    "definitional": "definitional",
    "comparative": "comparative",
    "procurement": "procurement",
    "technical": "technical",
    "agency-case-studies": "agency-case-studies",
    "us-agency": "agency-case-studies",
    "us-agencies": "agency-case-studies",
    "international": "international",
    "standards": "standards",
    "operations": "operations",
    "goa": "operations",
    "career": "career",
    "trends": "trends",
}


def read_frontmatter(slug: str) -> dict | None:
    p = DRAFTS / f"{slug}.md"
    if not p.exists():
        return None
    text = p.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return None
    fm_block, _, _ = text[3:].partition("---")  # frontmatter is BEFORE the closing ---
    out: dict = {}
    for line in fm_block.splitlines():
        m = re.match(r"^([a-z_]+):\s*(.+)$", line)
        if not m:
            continue
        k, v = m.group(1), m.group(2).strip()
        if v.startswith('"') and v.endswith('"'):
            v = v[1:-1]
        out[k] = v
    return out


def build_prompt(title: str, category: str) -> str:
    scene_key = CATEGORY_TO_SCENE.get(category.lower(), "definitional")
    scene = CLUSTER_SCENE[scene_key]
    # The article title is intentionally NOT included in the prompt —
    # gpt-image-1 will render it as visible text in the image otherwise,
    # especially when the title contains proper nouns like vendor names.
    # Instead we describe the topic through the scene direction only.
    return (
        f'A wordless editorial hero illustration for a serious engineering publication. '
        f'Style: minimalist flat illustration with subtle geometric depth, '
        f'in the visual register of MIT Technology Review or Reuters editorial graphics. '
        f'Strict color palette: deep navy (#0A1628) for primary forms, '
        f'warm amber (#D4A84B) for accents and highlights, '
        f'soft cream (#F4EFE6) for the background. '
        f'Composition: {scene}. '
        f'CRITICAL: absolutely no text, no letters, no numbers, no captions, no labels, '
        f'no vendor names, no product names, no logos, no watermarks, no signage of any kind '
        f'visible anywhere in the image. No human faces. No realistic photography. '
        f'Calm, authoritative, editorial — never dramatic or sci-fi.'
    )


# ─── Generation ─────────────────────────────────────────────────────

def generate_one(slug: str, model: str, size: str, quality: str,
                 dry: bool, force: bool) -> str:
    fm = read_frontmatter(slug)
    if not fm:
        return f"✗ no frontmatter for {slug}"
    title = fm.get("title", slug)
    category = fm.get("category", "definitional")
    prompt = build_prompt(title, category)

    out_path = OUT_HERO / f"{slug}.png"
    public_path = OUT_PUBLIC / f"{slug}-hero.png"

    if dry:
        return f"DRY {slug}: {prompt[:120]}…"

    if out_path.exists() and not force:
        # still copy to public/ in case it wasn't there
        if not public_path.exists():
            import shutil
            public_path.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(out_path, public_path)
        return f"skip exists {slug}.png"

    if not ensure_canonical_key():
        return f"✗ no OpenAI key for {slug}"

    try:
        from openai import OpenAI
    except ImportError:
        return f"✗ openai SDK not installed"

    client = OpenAI()
    # Rate-limit-aware retry: OpenAI image API on Tier 1 is 5 IPM. We
    # retry up to 5 times with exponential backoff on 429 / connection
    # errors. On final failure, return a clear marker so the caller
    # can re-run --force later for just the failed slugs.
    resp = None
    last_err = ""
    for attempt in range(5):
        try:
            resp = client.images.generate(
                model=model, prompt=prompt, size=size, quality=quality, n=1,
            )
            break
        except Exception as ex:
            last_err = str(ex)[:200]
            msg = last_err.lower()
            # Retry on rate-limit / transient connection errors only
            if "rate" in msg or "429" in msg or "timeout" in msg or "connection" in msg:
                wait = 30 * (2 ** attempt)  # 30, 60, 120, 240, 480 seconds
                time.sleep(wait)
                continue
            # Non-retryable error (auth, content policy, bad request, etc.)
            return f"✗ API failed for {slug}: {last_err}"
    if resp is None:
        return f"✗ API failed (after retries) for {slug}: {last_err}"

    item = resp.data[0]
    out_path.parent.mkdir(parents=True, exist_ok=True)
    public_path.parent.mkdir(parents=True, exist_ok=True)

    if getattr(item, "b64_json", None):
        out_path.write_bytes(base64.b64decode(item.b64_json))
    elif getattr(item, "url", None):
        import urllib.request
        urllib.request.urlretrieve(item.url, out_path)
    else:
        return f"✗ unexpected response shape for {slug}"

    # Copy into Astro public/ for the build
    import shutil
    shutil.copy2(out_path, public_path)
    return f"✓ {slug}.png"


# ─── Driver ─────────────────────────────────────────────────────────

def list_slugs(args) -> list[str]:
    if args.slug:
        return [args.slug]
    if args.published_only:
        return sorted(p.stem for p in CONTENT.glob("*.md")) if CONTENT.exists() else []
    if args.all:
        return sorted(p.stem for p in DRAFTS.glob("*.md")
                      if not p.stem.startswith("_"))
    return []


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--slug")
    ap.add_argument("--published-only", action="store_true",
                    help="only slugs already in /site-src/src/content/blog/")
    ap.add_argument("--all", action="store_true",
                    help="all 100 drafts (~$4 at gpt-image-1 medium quality)")
    ap.add_argument("--model", default=DEFAULT_MODEL)
    ap.add_argument("--size", default=DEFAULT_SIZE)
    ap.add_argument("--quality", default=DEFAULT_QUALITY,
                    choices=["low", "medium", "high"])
    ap.add_argument("--workers", type=int, default=2,
                    help="parallel API calls; default 2 to stay under Tier-1 rate limits")
    ap.add_argument("--delay", type=float, default=2.0,
                    help="seconds to sleep between submissions (default 2)")
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--dry", action="store_true")
    args = ap.parse_args()

    slugs = list_slugs(args)
    if not slugs:
        print("Specify --slug X, --published-only, or --all", file=sys.stderr)
        return 1

    print(f"Hero cards: {len(slugs)} slug(s), model={args.model}, "
          f"size={args.size}, quality={args.quality}, dry={args.dry}")
    started = time.time()
    futs = {}
    with ThreadPoolExecutor(max_workers=args.workers) as ex:
        # Submit with a small inter-submission delay so we don't burst
        # the API limit when the pool starts up.
        for s in slugs:
            f = ex.submit(generate_one, s, args.model, args.size,
                          args.quality, args.dry, args.force)
            futs[f] = s
            if not args.dry:
                time.sleep(args.delay)
        for i, fut in enumerate(as_completed(futs), 1):
            line = fut.result()
            ts = time.strftime("%H:%M:%S")
            print(f"[{ts}] [{i:3d}/{len(slugs)}] {line}")

    print(f"\nDone in {time.time() - started:.1f}s")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
