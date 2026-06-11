#!/usr/bin/env python3
"""
gen_charts.py — For each manifest entry bucketed as "chart", emit a
placeholder PNG bar chart styled with cbtcbook.com brand colors.

A future LLM pass can replace the placeholder with real data once it
extracts numbers from the article body. For now, the chart shipped is
a clearly-marked placeholder (not a fabricated bar chart with fake
numbers — that would be a content-integrity failure).

Usage:
    python3 gen_charts.py
    python3 gen_charts.py --list
"""
from __future__ import annotations
import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "blog-tools" / "image_manifest.json"
OUT_DIR = ROOT / "blog-images" / "charts"

# cbtcbook.com palette
NAVY = "#0A1628"
AMBER = "#D4A84B"
CREAM = "#F4EFE6"
CHAR = "#1A1A1A"


def make_placeholder(out_path: Path, title: str, caption: str) -> bool:
    try:
        import matplotlib.pyplot as plt
        import matplotlib.patches as patches
    except ImportError:
        print("⚠️  matplotlib not installed. `pip3 install matplotlib`")
        return False

    fig, ax = plt.subplots(figsize=(10, 5.5), dpi=140, facecolor=CREAM)
    ax.set_facecolor(CREAM)

    # Wrap title and caption manually so they fit
    def wrap(text: str, width: int) -> str:
        words = text.split()
        lines, line = [], ""
        for w in words:
            if len(line) + len(w) + 1 > width:
                lines.append(line)
                line = w
            else:
                line = (line + " " + w).strip()
        if line:
            lines.append(line)
        return "\n".join(lines)

    ax.text(0.5, 0.78, wrap(title, 70), transform=ax.transAxes,
            ha="center", va="center", fontsize=16, fontweight="bold",
            color=NAVY, family="serif")
    ax.text(0.5, 0.45, wrap(caption, 80), transform=ax.transAxes,
            ha="center", va="center", fontsize=11, color=CHAR, style="italic")
    ax.text(0.5, 0.18, "chart pending — see article body for figures",
            transform=ax.transAxes, ha="center", va="center",
            fontsize=9, color="#777")

    # Decorative amber underline beneath the title
    ax.add_patch(patches.Rectangle((0.30, 0.65), 0.40, 0.012,
                                   transform=ax.transAxes,
                                   facecolor=AMBER, edgecolor="none"))
    ax.set_xticks([]); ax.set_yticks([])
    for spine in ax.spines.values():
        spine.set_edgecolor(AMBER); spine.set_linewidth(2)
    fig.tight_layout()
    fig.savefig(out_path, facecolor=CREAM, bbox_inches="tight")
    plt.close(fig)
    return True


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--list", action="store_true")
    ap.add_argument("--force", action="store_true")
    args = ap.parse_args()

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    entries = [e for e in json.loads(MANIFEST.read_text()) if e["bucket"] == "chart"]

    if args.list:
        for e in entries:
            print(f"  {e['slug']:55s} fig{e['figure']}: {e['description'][:60]}")
        print(f"\n{len(entries)} charts")
        return 0

    written = skipped = 0
    for e in entries:
        out = OUT_DIR / f"{e['slug']}-fig{e['figure']}.png"
        if out.exists() and not args.force:
            skipped += 1
            continue
        ok = make_placeholder(out,
                              title=e["description"][:120],
                              caption=e["caption"][:200])
        if not ok:
            return 1
        written += 1
    print(f"gen_charts: wrote {written}, skipped {skipped}. "
          f"Out: {OUT_DIR.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
