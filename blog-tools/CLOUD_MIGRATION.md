# Cloud migration runbook — move daily blog publishing off the Mac

**Goal:** the blog should publish one article every calendar day, on time,
whether or not any laptop is awake. Today it depends on a macOS LaunchAgent
(`com.cbtcbook.dailypublish`) that (a) only fired Mon–Fri and (b) didn't
back-fill missed days, so the Sat 2026-05-23 and Sun 2026-05-24 articles were
dropped. This runbook replaces that with a GitHub Actions workflow that runs in
GitHub's cloud.

> **Why this can't be done from the Cowork sandbox:** the sandbox has no write
> credentials to GitHub and can't change repo settings. Every step below runs
> **on your Mac** (Terminal + browser) — or hand this file to Claude Code,
> which has push access on the Mac and can execute + verify it.

---

## What's already prepared (committed-ready, in the working tree)

| File | Purpose |
|------|---------|
| `.github/workflows/daily-publish.yml` | Cloud cron (13:00 UTC daily) + a manual "Run workflow" button. |
| `blog-tools/ci_publish.py` | Linux/CI port of `daily_publish.sh` — same content steps, no git/notify, with **catch-up** (publishes every queue date ≤ today that isn't live yet). |
| `.gitignore` (root) | Keeps `cbtcbook/` (manuscript), `cbtcreference/` (copyrighted PDFs), `.venv/`, `node_modules/`, secrets **out** of the public repo. |
| `blog-tools/daily_publish.sh` | Also patched with the same catch-up logic, so the Mac path is safe in the interim. |

---

## One decision before you start: drafts become public

The cloud build needs `blog-drafts/` in the repo (that's where `ci_publish.py`
pulls each day's article from). Since `fracicsowang/cbtc-book-site` is a
**public** repo, **all 100 drafts become readable in the repo** the moment you
push — including the ~80 not yet published on the site. The rendered site is
unaffected (only published articles appear), and raw `.md` in a repo won't
outrank your canonical pages for SEO. For a solo marketing blog this is normal.

If you'd rather keep unpublished drafts private, use the **two-repo option** at
the bottom instead.

---

## Steps (run on the Mac)

### 0. Back up
```bash
cd /Users/chunjun/CBTC_book_site
cp -R site/.git /tmp/cbtc-git-backup     # so you can restore the old repo state
```

### 1. Move the git root up from `site/` to the project root
The repo currently *is* the `site/` folder. We move `.git` up one level so the
repo contains the whole project (source + drafts + tools + the static site).
```bash
cd /Users/chunjun/CBTC_book_site
mv site/.git ./.git
```

### 2. Review what will be committed — **do not skip this**
```bash
git add -A
git status
```
Confirm the list does **NOT** contain `cbtcbook/`, `cbtcreference/`, `.venv/`,
`site-src/node_modules/`, `site-src/dist/`, `.env`, or `last-run.log`.
It **should** show your `site/*` files moving into `site/` (renames) plus new
`site-src/`, `blog-drafts/`, `blog-tools/`, `.github/`, `publish-queue.yml`.

Optional clutter you may also want to ignore (internal docs / large sources):
`AGENTS.md`, `BLOG_OPERATIONS.md`, `HANDOFF.md`, `SESSION_LOG_*.md`,
`cbtcbook-blog-*.md`, `pptx/`, `codex-video-lab/`, `blog-images/`. Add any of
these to `.gitignore` then re-run `git add -A` before committing.

### 3. Commit + push
```bash
git commit -m "chore: move git root to project root; add cloud daily-publish workflow"
git push
```
The remote and your stored credentials are preserved in `.git/config`, so this
pushes to the same `fracicsowang/cbtc-book-site` repo.

### 4. Switch Pages to deploy via Actions
In the browser: **repo ▸ Settings ▸ Pages ▸ Build and deployment ▸ Source** →
change **"Deploy from a branch"** to **"GitHub Actions"**. The custom domain
(`cbtcbook.com`) is preserved by the `CNAME` file inside `site/`, which the
workflow uploads as part of the Pages artifact. (If the domain field clears,
re-enter `cbtcbook.com` and keep "Enforce HTTPS" on.)

### 5. Trigger the first run manually
**Actions ▸ "Daily blog publish" ▸ Run workflow ▸ Run.**
Watch the `build` job log. `ci_publish.py` will publish any backlog (if you
haven't already done the Mac backfill) and deploy. Green check = live.

### 6. Verify
```bash
curl -sI https://cbtcbook.com/blog/moving-block-explained/ | head -1   # expect 200
```
Also open `https://cbtcbook.com/blog/` and confirm the newest articles appear
and the 8 static pages (home, volumes, slides, etc.) are intact.

### 7. Turn off the Mac LaunchAgent (so it doesn't double-publish)
Only after the cloud run is confirmed working:
```bash
launchctl unload -w ~/Library/LaunchAgents/com.cbtcbook.dailypublish.plist
launchctl list | grep cbtcbook    # expect no output
```

---

## Daily operation after migration
Nothing to do. At ~13:00 UTC the workflow copies the day's queued article into
the content collection, builds, commits the publish state back, and deploys.
To add/reorder/pause articles, edit `publish-queue.yml` and push — the next run
picks it up. To publish immediately, hit **Run workflow**.

Two GitHub quirks worth knowing: scheduled runs can be delayed up to ~15 min
under load (the catch-up logic makes this harmless), and GitHub auto-disables
scheduled workflows after **60 days with no repo activity** — the daily
auto-commits keep it alive, so this won't trigger in practice.

---

## Rollback
The current live site stays up until a new deploy succeeds. To fully revert:
```bash
cd /Users/chunjun/CBTC_book_site
git reset --hard <pre-migration-commit>   # the commit before step 3
mv .git site/.git                          # put the repo root back under site/
```
Then set **Settings ▸ Pages ▸ Source** back to **Deploy from a branch → main /
(root)**, and reload the LaunchAgent (`launchctl load -w ...`).

---

## Alternative: keep drafts private (two repos)
If unpublished drafts must not be public:
1. Create a **private** repo `cbtc-book-source` holding `site-src/`,
   `blog-drafts/`, `blog-tools/`, `publish-queue.yml`.
2. In a Personal Access Token (repo scope), store it as a secret
   `PAGES_DEPLOY_TOKEN` in the private repo.
3. The workflow there builds, then pushes only the built `site/blog/` output to
   the public `cbtc-book-site` repo using that token; Pages keeps deploying
   from the public repo's branch as it does today.

This keeps drafts private at the cost of managing two repos and a token. For a
solo author the single-public-repo path above is simpler and usually fine.
