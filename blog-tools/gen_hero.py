#!/usr/bin/env python3
"""
gen_hero.py — Optional hero/concept image generation via OpenAI's
image API. The current 91-figure manifest contains 0 entries
classified as "hero" — but this script is in place so the pipeline
is complete the moment we want one.

Important: per HANDOFF §5/§9, image-gen models invent labels and
mislabel arrows on technical schematics. We use this only for
DECORATIVE / hero / concept art, never for technical content.

Configuration (in repo-root .env, both names accepted):
    OPEN_API_KEY=sk-...        # user's variable name in this project
    OPENAI_API_KEY=sk-...      # canonical name (also accepted)
    OPENAI_IMAGE_MODEL=gpt-image-2     # default, override if needed
    OPENAI_IMAGE_SIZE=1024x1024        # default

Usage:
    python3 gen_hero.py --slug what-is-cbtc-2026-guide --figure 1 \\
        --prompt "Editorial hero: a CBTC train at dusk, ..."
    python3 gen_hero.py --list-hero      # list manifest entries needing hero
"""
from __future__ import annotations
import argparse
import base64
import json
import os
import sys
from pathlib import Path

THIS = Path(__file__).resolve()
sys.path.insert(0, str(THIS.parent))
from openai_helper import ensure_canonical_key  # noqa: E402

ROOT = THIS.parent.parent
MANIFEST = ROOT / "blog-tools" / "image_manifest.json"
OUT_DIR = ROOT / "blog-images" / "hero"

DEFAULT_MODEL = os.environ.get("OPENAI_IMAGE_MODEL", "gpt-image-2")
DEFAULT_SIZE = os.environ.get("OPENAI_IMAGE_SIZE", "1024x1024")


def generate_one(slug: str, figure: int, prompt: str,
                 model: str, size: str, force: bool) -> int:
    if not ensure_canonical_key():
        print("ERROR: no OpenAI key found. Add OPEN_API_KEY=... to .env",
              file=sys.stderr)
        return 1
    try:
        from openai import OpenAI
    except ImportError:
        print("ERROR: `pip3 install openai` first.", file=sys.stderr)
        return 1

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out_path = OUT_DIR / f"{slug}-fig{figure}.png"
    if out_path.exists() and not force:
        print(f"skip (exists): {out_path.relative_to(ROOT)}")
        return 0

    client = OpenAI()
    print(f"generating {slug} fig{figure} via {model}…")
    try:
        resp = client.images.generate(
            model=model, prompt=prompt, size=size, n=1
        )
    except Exception as ex:
        print(f"ERROR: image API call failed: {ex}", file=sys.stderr)
        return 1

    # The OpenAI SDK returns either a URL or base64. Support both.
    item = resp.data[0]
    if getattr(item, "b64_json", None):
        out_path.write_bytes(base64.b64decode(item.b64_json))
    elif getattr(item, "url", None):
        import urllib.request
        urllib.request.urlretrieve(item.url, out_path)
    else:
        print("ERROR: unexpected image response shape", file=sys.stderr)
        return 1
    print(f"wrote {out_path.relative_to(ROOT)}")
    return 0


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--slug", help="article slug")
    ap.add_argument("--figure", type=int, help="figure number")
    ap.add_argument("--prompt", help="image prompt (free-form)")
    ap.add_argument("--model", default=DEFAULT_MODEL)
    ap.add_argument("--size", default=DEFAULT_SIZE)
    ap.add_argument("--list-hero", action="store_true",
                    help="list manifest entries already classified as hero")
    ap.add_argument("--force", action="store_true")
    args = ap.parse_args()

    if args.list_hero:
        entries = [e for e in json.loads(MANIFEST.read_text())
                   if e["bucket"] == "hero"]
        if not entries:
            print("0 hero figures in manifest. None needed for first launch.")
            return 0
        for e in entries:
            print(f"  {e['slug']:55s} fig{e['figure']}: "
                  f"{e['description'][:60]}")
        return 0

    if not (args.slug and args.figure and args.prompt):
        ap.error("--slug, --figure, --prompt required (or use --list-hero)")
    return generate_one(args.slug, args.figure, args.prompt,
                        args.model, args.size, args.force)


if __name__ == "__main__":
    raise SystemExit(main())
