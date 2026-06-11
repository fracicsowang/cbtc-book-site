#!/usr/bin/env python3
"""
wire_figures.py — Replace [FIGURE: …] placeholders in published article
markdown with actual figure markup, and copy the figure files into the
Astro public/ directory so they ship with the build.

Operates on /site-src/src/content/blog/*.md (the *published* copies),
not /blog-drafts/. This keeps the drafts clean and lets us re-wire on
each publish without losing source-of-truth.

Behavior per bucket:
  table    → inline the HTML from blog-images/tables/<slug>-figN.html
             directly into the markdown
  diagram  → copy SVG to site-src/public/img/<slug>-figN.svg, replace
             placeholder with ![caption](/blog/img/<slug>-figN.svg)
  map      → same as diagram (Mermaid SVG)
  chart    → same as diagram but PNG
  reuse    → leave existing /figures/fig_*.png reference untouched

Usage (called by daily_publish.sh):
    python3 wire_figures.py             # all published articles
    python3 wire_figures.py --slug X    # one slug only
    python3 wire_figures.py --check     # report what would change
"""
from __future__ import annotations
import argparse
import json
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "blog-tools" / "image_manifest.json"
CONTENT = ROOT / "site-src" / "src" / "content" / "blog"
PUBLIC_IMG = ROOT / "site-src" / "public" / "img"
IMAGES = ROOT / "blog-images"


# Match a [FIGURE: ...] block — multi-line, balanced brackets accepted lossily.
FIGURE_RE = re.compile(r"\[FIGURE:[^\]]*?\]", re.DOTALL)


def manifest_by_slug() -> dict[str, list[dict]]:
    by_slug: dict[str, list[dict]] = {}
    for e in json.loads(MANIFEST.read_text()):
        by_slug.setdefault(e["slug"], []).append(e)
    for slug in by_slug:
        by_slug[slug].sort(key=lambda e: e["figure"])
    return by_slug


def figure_replacement(slug: str, fig_num: int, manifest_entries: list[dict],
                       check_only: bool = False) -> str | None:
    """Build the markup that replaces a [FIGURE: …] placeholder."""
    entries = [e for e in manifest_entries if e["figure"] == fig_num]
    if not entries:
        return None  # no manifest entry → leave placeholder untouched
    e = entries[0]
    caption = (e.get("caption") or "").rstrip(".") + "."
    bucket = e["bucket"]

    if bucket == "table":
        html_file = IMAGES / "tables" / f"{slug}-fig{fig_num}.html"
        if not html_file.exists():
            return None
        html = html_file.read_text(encoding="utf-8").rstrip()
        return f"\n{html}\n"

    if bucket in ("diagram", "map"):
        svg_file = IMAGES / "diagrams" / f"{slug}-fig{fig_num}.svg"
        if not svg_file.exists():
            return None
        target = PUBLIC_IMG / f"{slug}-fig{fig_num}.svg"
        if not check_only:
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(svg_file, target)
        alt = caption.replace('"', "'")
        return (f"\n![{alt}](/blog/img/{slug}-fig{fig_num}.svg)\n"
                f"*<small>{caption}</small>*\n")

    if bucket == "chart":
        png_file = IMAGES / "charts" / f"{slug}-fig{fig_num}.png"
        if not png_file.exists():
            return None
        target = PUBLIC_IMG / f"{slug}-fig{fig_num}.png"
        if not check_only:
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(png_file, target)
        alt = caption.replace('"', "'")
        return (f"\n![{alt}](/blog/img/{slug}-fig{fig_num}.png)\n"
                f"*<small>{caption}</small>*\n")

    if bucket == "reuse":
        # Existing book figure — already wired by map-figures.py (the prior
        # tool that converted [FIGURE: …] referencing existing fig_NN_NN_*.png
        # to <img> tags). Leave any remaining placeholders alone.
        return None

    return None


def wire_one(md_path: Path, by_slug: dict[str, list[dict]],
             check_only: bool) -> tuple[int, int]:
    slug = md_path.stem
    entries = by_slug.get(slug, [])
    if not entries:
        return (0, 0)

    text = md_path.read_text(encoding="utf-8")
    placeholders = list(FIGURE_RE.finditer(text))
    if not placeholders:
        return (0, 0)

    # Replace placeholders in order: 1st [FIGURE:] in body = figure 1, etc.
    # Walk backward so byte offsets stay valid as we splice.
    replaced = 0
    for i, m in enumerate(reversed(placeholders), 1):
        fig_num = len(placeholders) - i + 1  # forward number
        repl = figure_replacement(slug, fig_num, entries, check_only)
        if repl is None:
            continue
        text = text[:m.start()] + repl + text[m.end():]
        replaced += 1

    if replaced and not check_only:
        md_path.write_text(text, encoding="utf-8")

    return (replaced, len(placeholders) - replaced)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--slug", help="single slug (default: all published)")
    ap.add_argument("--check", action="store_true",
                    help="report changes without writing")
    args = ap.parse_args()

    by_slug = manifest_by_slug()

    if not CONTENT.exists():
        print(f"WARN: no content dir at {CONTENT.relative_to(ROOT)} "
              "— nothing published yet", file=sys.stderr)
        return 0

    if args.slug:
        files = [CONTENT / f"{args.slug}.md"]
        if not files[0].exists():
            print(f"ERROR: {files[0]} not in published content", file=sys.stderr)
            return 1
    else:
        files = sorted(CONTENT.glob("*.md"))

    total_repl = total_skip = 0
    for f in files:
        repl, skip = wire_one(f, by_slug, args.check)
        if repl or skip:
            mark = "(check)" if args.check else "wired"
            print(f"  {f.stem}: {mark} {repl}, untouched {skip}")
        total_repl += repl
        total_skip += skip

    print(f"\nTotal: replaced {total_repl} placeholders across {len(files)} "
          f"file(s); {total_skip} placeholders had no matching figure")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
