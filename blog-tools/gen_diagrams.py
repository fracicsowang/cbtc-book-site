#!/usr/bin/env python3
"""
gen_diagrams.py — For each manifest entry bucketed as "diagram" or
"map", emit a Mermaid source file and (if mmdc is installed) compile
to SVG.

Mermaid is the right tool for ~52 of the 91 figures because it:
  - Renders deterministically from text source (no AI image lottery).
  - Lets us version-control diagram source.
  - Pre-renders to SVG at build time → static HTML output.
  - Allows cbtcbook.com brand colors via theme variables.

This MVP emits a *placeholder Mermaid source* per figure with the
caption embedded. Articles with a figure can render it as a clear
"diagram coming" tile. A future LLM pass will fill in real Mermaid
node graphs from each article body. The pipeline is in place.

Usage:
    python3 gen_diagrams.py
    python3 gen_diagrams.py --render     # also call `mmdc` to produce SVG
    python3 gen_diagrams.py --list       # list which figures need diagrams
"""
from __future__ import annotations
import argparse
import json
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "blog-tools" / "image_manifest.json"
OUT_DIR = ROOT / "blog-images" / "diagrams"
MMD_DIR = ROOT / "blog-images" / "diagrams" / "src"

# Mermaid theme variables tuned to cbtcbook.com brand
THEME_INIT = """%%{init: {
  'theme': 'base',
  'themeVariables': {
    'primaryColor': '#0A1628',
    'primaryTextColor': '#F4EFE6',
    'primaryBorderColor': '#D4A84B',
    'lineColor': '#1A1A1A',
    'secondaryColor': '#F4EFE6',
    'tertiaryColor': '#D4A84B',
    'fontFamily': 'IBM Plex Sans, system-ui, sans-serif'
  }
}}%%
"""

PLACEHOLDER_TEMPLATE = """{theme}
flowchart TB
    subgraph note["{slug} · Figure {figure}"]
        d["<b>{short_desc}</b><br/><br/><i>{caption_short}</i><br/><br/><small>diagram pending — see article body</small>"]
    end
    classDef ph fill:#F4EFE6,stroke:#D4A84B,color:#0A1628,font-size:13px
    class d ph
"""


def short(text: str, n: int) -> str:
    """Truncate without splitting words mid-line; escape quotes for Mermaid."""
    text = (text or "").replace('"', "'").replace("\n", " ")
    return text if len(text) <= n else text[: n - 1].rsplit(" ", 1)[0] + "…"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--list", action="store_true",
                    help="list diagram figures without writing files")
    ap.add_argument("--render", action="store_true",
                    help="invoke `mmdc` to compile .mmd → .svg")
    ap.add_argument("--force", action="store_true",
                    help="overwrite existing diagrams")
    args = ap.parse_args()

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    MMD_DIR.mkdir(parents=True, exist_ok=True)
    entries = [e for e in json.loads(MANIFEST.read_text())
               if e["bucket"] in ("diagram", "map")]

    if args.list:
        for e in entries:
            print(f"  [{e['bucket']:7s}] {e['slug']:55s} fig{e['figure']}")
        print(f"\n{len(entries)} diagrams/maps")
        return 0

    written = skipped = 0
    for e in entries:
        mmd_path = MMD_DIR / f"{e['slug']}-fig{e['figure']}.mmd"
        if mmd_path.exists() and not args.force:
            skipped += 1
            continue
        mmd_path.write_text(PLACEHOLDER_TEMPLATE.format(
            theme=THEME_INIT,
            slug=e["slug"],
            figure=e["figure"],
            short_desc=short(e["description"], 80),
            caption_short=short(e["caption"], 100),
        ), encoding="utf-8")
        written += 1

    print(f"gen_diagrams: wrote {written} .mmd, skipped {skipped} (existing).")

    if args.render:
        mmdc = shutil.which("mmdc")
        if not mmdc:
            print("⚠️  `mmdc` not on PATH. Install with: npm i -g @mermaid-js/mermaid-cli")
            return 0
        rendered = 0
        for mmd_path in sorted(MMD_DIR.glob("*.mmd")):
            svg_path = OUT_DIR / (mmd_path.stem + ".svg")
            if svg_path.exists() and not args.force:
                continue
            try:
                subprocess.run(
                    [mmdc, "-i", str(mmd_path), "-o", str(svg_path),
                     "-b", "transparent"],
                    check=True, capture_output=True
                )
                rendered += 1
            except subprocess.CalledProcessError as ex:
                print(f"  render failed for {mmd_path.name}: "
                      f"{ex.stderr.decode(errors='replace')[:200]}")
        print(f"gen_diagrams: rendered {rendered} SVGs to {OUT_DIR.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
