#!/usr/bin/env python3
"""
reconcile.py — Apply global text fixes to the 100-article blog corpus:

  1. Fix the 6 broken internal-link slugs identified in _FLEET_SUMMARY.md.
  2. Standardize cross-fleet factual formulations (L Line dates, MA cycle time,
     VOBC redundancy, Hitachi/Thales acquisition status, Honolulu opening date).

Run:  python3 reconcile.py            # dry-run (shows planned changes)
      python3 reconcile.py --apply    # write changes to disk

Use grep before/after to verify:
    grep -rn "old-slug-here" blog-drafts/
"""

import re, os, sys
from pathlib import Path
from collections import defaultdict

_CANDIDATES = [
    Path("/Users/chunjun/CBTC_book_site"),
    Path("/sessions/determined-awesome-davinci/mnt/CBTC_book_site"),
]
BASE = next((p for p in _CANDIDATES if p.exists()), None) or _CANDIDATES[0]
DRAFTS = BASE / "blog-drafts"
DRY_RUN = "--apply" not in sys.argv

# ──────────────────────────────────────────────────────────────────
# 1. BROKEN INTERNAL-LINK SLUGS  (Fleet Summary §"Internal link graph")
# ──────────────────────────────────────────────────────────────────
SLUG_FIXES = [
    # (broken_path, correct_path)
    ("/blog/cbtc-l-line-110-second-headway",      "/blog/l-line-110-second-headway"),
    ("/blog/cbtc-operating-modes",                "/blog/operating-modes-cbtc-normal-restricted-manual-failure"),
    ("/blog/from-goa-2-to-goa-4-prerequisites",   "/blog/goa-2-to-goa-4-prerequisites"),
    ("/blog/goa-0-to-4-explained",                "/blog/goa-0-4-explained-grades-of-automation"),
    ("/blog/hidden-cost-of-cbtc-vendor-lock-in",  "/blog/hidden-cost-of-cbtc-vendor-lockin"),
    ("/blog/why-door-operation-bottleneck",       "/blog/door-operation-bottleneck-high-frequency-service"),
]

# ──────────────────────────────────────────────────────────────────
# 2. CROSS-FLEET FACTUAL STANDARDIZATIONS
#    Each entry: pattern (regex or literal), canonical replacement, note.
#    LEFT INTENTIONALLY CONSERVATIVE — only changes that are unambiguous typos
#    or strict synonyms. Substantive editorial changes (e.g., "is the L Line
#    date 2009 or 2017?") are left for the author to decide and are NOT
#    auto-applied here.
# ──────────────────────────────────────────────────────────────────

# Conservative-by-default: only smart-quote normalization (SSG-safe).
# Currency formatting changes ($X million → $XM) would alter author voice;
# they are listed here but commented out. Uncomment to opt in.
TEXT_FIXES = [
    # (pattern, replacement, note, regex_flag)

    # Smart-quote → ASCII (SSG markdown parsers can render either, but
    # ASCII is safer for grep/sed and matches the rest of the book.)
    ("’", "'", "smart-quote → ASCII apostrophe", False),
    ("“", '"', "smart-quote → ASCII double-quote (open)", False),
    ("”", '"', "smart-quote → ASCII double-quote (close)", False),

    # OPT-IN: currency formatting consistency. Uncomment if you want
    # $340 million → $340M everywhere (changes voice slightly toward casual).
    # (r"\bUS\$([0-9])",         r"$\1",   "Drop 'US' prefix on $",  True),
    # (r"\$([0-9]+) million\b",  r"$\1M",  "$X million → $XM",       True),
    # (r"\$([0-9]+) billion\b",  r"$\1B",  "$X billion → $XB",       True),
]


def main():
    if not DRAFTS.exists():
        print(f"ERROR: {DRAFTS} not found"); sys.exit(1)

    md_files = [f for f in sorted(DRAFTS.glob("*.md")) if not f.name.startswith("_")]
    if not md_files:
        print("No .md files to process"); sys.exit(0)

    slug_hits = defaultdict(int)
    text_hits = defaultdict(int)

    for md_file in md_files:
        text = md_file.read_text()
        new_text = text

        # 1. Slug replacements (literal)
        for old, new in SLUG_FIXES:
            count = new_text.count(old)
            if count:
                slug_hits[old] += count
                new_text = new_text.replace(old, new)

        # 2. Text normalizations
        for entry in TEXT_FIXES:
            pat, rep, note, is_regex = entry
            if is_regex:
                hits = len(re.findall(pat, new_text))
                if hits:
                    text_hits[note] += hits
                    new_text = re.sub(pat, rep, new_text)
            else:
                hits = new_text.count(pat)
                if hits:
                    text_hits[note] += hits
                    new_text = new_text.replace(pat, rep)

        if new_text != text and not DRY_RUN:
            md_file.write_text(new_text)
            print(f"  [OK ] {md_file.name}")

    # Report
    print()
    print("=" * 60)
    print(f"Mode: {'DRY-RUN (use --apply to write)' if DRY_RUN else 'APPLIED'}")
    print()
    print("--- Slug fixes ---")
    if not slug_hits:
        print("  (none found)")
    else:
        for old, n in slug_hits.items():
            new = next(p[1] for p in SLUG_FIXES if p[0] == old)
            print(f"  {n:3d}× {old}")
            print(f"     →  {new}")
    print()
    print("--- Text normalizations ---")
    if not text_hits:
        print("  (none found)")
    else:
        for note, n in text_hits.items():
            print(f"  {n:3d}× {note}")

    print()
    print("--- Items NOT auto-fixed (author decision needed) ---")
    print("  • L Line full revenue date — author must pick canonical (2009 vs other)")
    print("  • Honolulu Skyline opening date — confirm against HART website")
    print("  • Manuscript Cityflo 650 vs Trainguard MT for L Line — fix in book itself")
    print("  • Thales / Hitachi acquisition close status — confirm 2024 close")
    print("  • MA cycle time canonical value — pilot vs operations cluster diverge")
    print("  • VOBC redundancy 2oo2 vs 2oo3 — confirm against manuscript baseline")


if __name__ == "__main__":
    main()
