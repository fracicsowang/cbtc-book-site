#!/usr/bin/env python3
"""
classify_images.py — Parse blog-drafts/_IMAGES_TODO.md and bucket each
figure into one of: table, diagram, chart, map, hero.

The other gen_*.py scripts read the JSON output to know which figures
they should produce.

Usage:
    python3 classify_images.py            # writes blog-tools/image_manifest.json
    python3 classify_images.py --print    # also prints a per-bucket summary
"""
from __future__ import annotations
import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TODO_FILE = ROOT / "blog-drafts" / "_IMAGES_TODO.md"
MANIFEST_FILE = Path(__file__).resolve().parent / "image_manifest.json"


# Keyword rules — order matters: first match wins. Intentionally
# conservative; ambiguous cases default to "diagram" (Mermaid) which is
# the most flexible Graphviz-style fallback.
RULES: list[tuple[str, list[str]]] = [
    # Charts: clear visual encoding of numeric data
    ("chart", [
        "bar chart",
        "stacked bar",
        "stacked-bar",
        "radar chart",
        "scatter",
        "line chart",
        "histogram",
        "salary",  # always shown as bar chart
        "cost growth",
        "cumulative deployment",
        "headway demonstration timeline",
    ]),
    # Maps: real-world geography or named transit lines on a route
    ("map", [
        "network map",
        "route map",
        "system map",
        "metro system map",
        "scope schematic showing the four lines",
        "global goa 4 metro map",
        "map of the united states",
        "track schematic",
        "skytrain network",
        "honolulu skyline route",
        "jfk airtrain network",
    ]),
    # Tables: matrix-y, comparison-y, taxonomy-y content
    ("table", [
        "comparison table",
        "comparison matrix",
        "decision matrix",
        "summary matrix",
        "side-by-side comparison",
        "snapshot",
        "snapshot matrix",
        "summary table",
        "skill-transfer matrix",
        "skill map",
        "skill matrix",
        "reading-list flowchart",  # actually best as a structured table
        "taxonomy",
        "five-prediction summary",
        "comparison of operational metrics",
        "comparison of factors",
        "comparison of testing-phase",
        "side-by-side bar comparison",  # acts like a table for our purposes
        "bid evaluation weights",  # narrow table is clearer than chart
    ]),
    # Diagrams: everything else schematic — architecture, flow, decision tree
    ("diagram", [
        "architecture diagram",
        "architectural comparison",
        "block diagram",
        "schematic",
        "flowchart",
        "decision tree",
        "decision flowchart",
        "stack diagram",
        "layered diagram",
        "layered procurement",
        "layer diagram",
        "tier diagram",
        "topology",
        "threat model",
        "boundary diagram",
        "partition diagram",
        "performance budget map",
        "spectrum",
        "checklist diagram",
        "annotated breakdown",
        "annotated definition",
        "deployment plan",
        "migration pathway",
        "standards stack",
        "zone-and-conduit",
        "prerequisite stack",
        "wayside layout",
        "yard architecture",
        "skill map",
    ]),
]


def parse_todo(md: str) -> list[dict]:
    """Extract one entry per (article_slug, figure_n) pair."""
    entries: list[dict] = []
    current_slug = None
    current_fig = None
    desc = src = caption = ""

    def flush():
        nonlocal desc, src, caption, current_fig
        if current_slug and current_fig:
            entries.append({
                "slug": current_slug,
                "figure": current_fig,
                "description": desc.strip(),
                "source_hint": src.strip(),
                "caption": caption.strip(),
            })
        desc = src = caption = ""

    for raw in md.splitlines():
        line = raw.rstrip()
        if line.startswith("## ") and line.endswith(".md"):
            flush()
            current_slug = line[3:].removesuffix(".md").strip()
            current_fig = None
        elif m := re.match(r"\*\*Figure (\d+)\*\*", line):
            flush()
            current_fig = int(m.group(1))
        elif line.startswith("- **Description**:"):
            desc = line.split(":", 1)[1].strip()
        elif line.startswith("- **Source hint**:"):
            src = line.split(":", 1)[1].strip()
        elif line.startswith("- **Caption**:"):
            caption = line.split(":", 1)[1].strip()
    flush()
    return entries


def classify(description: str) -> str:
    d = description.lower()
    for bucket, keywords in RULES:
        for kw in keywords:
            if kw in d:
                return bucket
    return "diagram"  # safe fallback


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--print", action="store_true",
                    help="print per-bucket summary after writing manifest")
    args = ap.parse_args()

    if not TODO_FILE.exists():
        print(f"ERROR: {TODO_FILE} not found", file=sys.stderr)
        return 1

    md = TODO_FILE.read_text(encoding="utf-8")
    entries = parse_todo(md)
    for e in entries:
        e["bucket"] = classify(e["description"])

    # Reuse-existing-figure detection: source_hint says "existing book figure ..."
    for e in entries:
        if "existing book figure" in e["source_hint"].lower():
            m = re.search(r"(fig_\d+_\d+_[a-z0-9_]+\.png)", e["source_hint"])
            if m:
                e["existing_figure"] = m.group(1)
                e["bucket"] = "reuse"

    MANIFEST_FILE.write_text(
        json.dumps(entries, indent=2, ensure_ascii=False), encoding="utf-8"
    )

    counts: dict[str, int] = {}
    for e in entries:
        counts[e["bucket"]] = counts.get(e["bucket"], 0) + 1

    print(f"Wrote {MANIFEST_FILE.relative_to(ROOT)} ({len(entries)} entries)")
    if args.print:
        print("\nPer-bucket counts:")
        for bucket in ("table", "diagram", "chart", "map", "hero", "reuse"):
            n = counts.get(bucket, 0)
            print(f"  {bucket:8s}: {n:3d}")
        print(f"  {'TOTAL':8s}: {sum(counts.values()):3d}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
