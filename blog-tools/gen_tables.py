#!/usr/bin/env python3
"""
gen_tables.py — Read image_manifest.json, for each entry bucketed as
"table", emit a styled HTML <table> snippet to blog-images/tables/<slug>-fig<N>.html.

The HTML table draws from the figure's structured description by
calling Claude (or a future LLM helper) — but for the first pass we
emit a *template skeleton* with the description as a comment, leaving
the table body for the author or a follow-up LLM pass to fill in.

This is intentional: tables here represent technical content
(comparison matrices, decision matrices, summary tables). Auto-
generating their cells from a one-line description risks
hallucinating numbers — the very failure mode the HANDOFF warned
about for image-gen models. Instead, we ship a structured skeleton
the author/agent fills in with manuscript-grounded data.

Output is a self-contained HTML fragment that the Astro layout
pulls in via {tableHtml} unescaped. Visual styling matches the
cbtcbook.com brand (navy/amber/cream).

Usage:
    python3 gen_tables.py            # generate skeletons
    python3 gen_tables.py --list     # just list which slugs need tables
"""
from __future__ import annotations
import argparse
import html
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "blog-tools" / "image_manifest.json"
OUT_DIR = ROOT / "blog-images" / "tables"

TEMPLATE = """<!--
  {slug}, Figure {figure}
  Bucket: table
  Description: {description}
  Caption: {caption}
  Source hint: {source_hint}

  TODO: replace the rows below with real data drawn from the manuscript
  or cited public sources. Do NOT invent numbers — the template ships
  with placeholder rows so the article still renders during the build.
-->
<figure class="blog-figure blog-figure--table">
  <table class="blog-table">
    <caption class="blog-table__caption">{caption_safe}</caption>
    <thead>
      <tr><th>Column 1</th><th>Column 2</th><th>Column 3</th></tr>
    </thead>
    <tbody>
      <tr><td>—</td><td>—</td><td>—</td></tr>
      <tr><td>—</td><td>—</td><td>—</td></tr>
      <tr><td>—</td><td>—</td><td>—</td></tr>
    </tbody>
  </table>
  <figcaption class="blog-figure__caption">{caption_safe}</figcaption>
</figure>
"""


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--list", action="store_true",
                    help="list table figures without writing files")
    ap.add_argument("--force", action="store_true",
                    help="overwrite existing skeletons")
    args = ap.parse_args()

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    entries = [e for e in json.loads(MANIFEST.read_text()) if e["bucket"] == "table"]

    if args.list:
        for e in entries:
            print(f"  {e['slug']:55s} fig{e['figure']}: {e['description'][:60]}")
        print(f"\n{len(entries)} tables")
        return 0

    written = skipped = 0
    for e in entries:
        out = OUT_DIR / f"{e['slug']}-fig{e['figure']}.html"
        if out.exists() and not args.force:
            skipped += 1
            continue
        out.write_text(TEMPLATE.format(
            slug=e["slug"],
            figure=e["figure"],
            description=e["description"],
            caption=e["caption"],
            source_hint=e["source_hint"],
            caption_safe=html.escape(e["caption"]),
        ), encoding="utf-8")
        written += 1
    print(f"gen_tables: wrote {written}, skipped {skipped} (existing). "
          f"Out: {OUT_DIR.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
