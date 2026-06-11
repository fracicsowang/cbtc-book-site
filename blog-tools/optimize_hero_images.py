#!/usr/bin/env python3
"""
optimize_hero_images.py — Resize + recompress hero PNGs for the web.

gpt-image-1 returns 1536x1024 PNGs at ~2 MB each. Cards display ~320 px
wide and article banners ~720 px wide; serving the full 1536 px PNG
wastes bandwidth and inflates the GitHub Pages repo.

This script:
  - Resizes /blog-images/hero/<slug>.png to 1200x800 (still bigger than
    OG card 1200x630 and bigger than 2x retina display target — leaves
    headroom but cuts file size by ~3x)
  - Saves a compressed PNG to /site-src/public/img/<slug>-hero.png
  - Reports total size before/after

Idempotent: safe to re-run.

Usage:
    python3 optimize_hero_images.py
    python3 optimize_hero_images.py --max-width 1200    # override target
    python3 optimize_hero_images.py --webp              # also write .webp
"""
from __future__ import annotations
import argparse
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "blog-images" / "hero"
DST = ROOT / "site-src" / "public" / "img"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--max-width", type=int, default=1200,
                    help="resize so width <= this (default 1200)")
    args = ap.parse_args()

    from PIL import Image

    DST.mkdir(parents=True, exist_ok=True)
    pngs = sorted(SRC.glob("*.png"))
    if not pngs:
        print("No hero PNGs in blog-images/hero/")
        return 1

    before_total = 0
    after_total = 0
    for src in pngs:
        before_total += src.stat().st_size
        img = Image.open(src)
        if img.mode != "RGB":
            img = img.convert("RGB")

        w, h = img.size
        if w > args.max_width:
            new_h = round(h * args.max_width / w)
            img = img.resize((args.max_width, new_h), Image.LANCZOS)

        # Hero illustrations are flat-color editorial graphics: a 256-color
        # adaptive palette is visually indistinguishable but ~5x smaller.
        # MEDIANCUT picks palette via histogram; FLOYDSTEINBERG dithers
        # gradients smoothly.
        img = img.quantize(
            colors=256,
            method=Image.Quantize.MEDIANCUT,
            dither=Image.Dither.FLOYDSTEINBERG,
        )

        out = DST / f"{src.stem}-hero.png"
        img.save(out, format="PNG", optimize=True)
        after_total += out.stat().st_size

    def mb(n: int) -> str:
        return f"{n / (1024 * 1024):.1f} MB"

    print(f"Optimized {len(pngs)} hero images")
    print(f"  Before: {mb(before_total)}")
    print(f"  After:  {mb(after_total)}")
    print(f"  Savings: {(1 - after_total / before_total) * 100:.0f}%")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
