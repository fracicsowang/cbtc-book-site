#!/usr/bin/env python3
"""
apply_section7_fixes.py — One-shot script that applies the §7 reconciliation
decisions across /blog-drafts/. Each fix is an explicit (file, before, after,
reason) tuple. The script reports every change applied (or skipped because
the pattern wasn't found) so the author can audit.

Decisions applied (per author 2026-05-09):
  #1: L Line capacity → "24 to 29 trains per hour" / "24 to 29 tph"
  #2: Honolulu Skyline → "June 2023" (only where bare "2023" near Skyline)
  #4: Thales/Hitachi acquisition → "in 2024" (replace "through 2024 to 2025")
  #5: "MA cycle" disambiguation → "MA refresh interval" where it referred to
      the 1-3 sec long cycle (heartbeat cycle = 500ms-1s stays)

Items #3 (Cityflo 650), #6 (VOBC 2oo3), #7-#10: no changes needed — corpus
already consistent.

Usage:
    python3 apply_section7_fixes.py --dry      # show diffs without writing
    python3 apply_section7_fixes.py            # apply all fixes
"""
from __future__ import annotations
import argparse
import sys
from pathlib import Path
from dataclasses import dataclass

ROOT = Path(__file__).resolve().parent.parent
DRAFTS = ROOT / "blog-drafts"


@dataclass
class Fix:
    file: str
    before: str
    after: str
    reason: str


FIXES: list[Fix] = [
    # ── #1: L Line capacity standardization ──────────────────────────
    Fix(
        "cbtc-wrong-solution-mainline-freight.md",
        "L Line achieving roughly 26 to 29 trains per hour",
        "L Line achieving roughly 24 to 29 trains per hour",
        "#1: L Line capacity → 24-29 tph",
    ),
    Fix(
        "cbtc-glossary-50-terms.md",
        "from approximately 20 TPHPD on the legacy system to 26 to 29 TPHPD post-cutover",
        "from approximately 20 TPHPD on the legacy system to 24 to 29 TPHPD post-cutover",
        "#1: L Line capacity → 24-29 tph",
    ),
    Fix(
        "cbtc-vs-traditional-signaling-8-differences.md",
        "The L Line, the US flagship, sustains 26 trains per hour with peaks near 29.",
        "The L Line, the US flagship, sustains 24 to 29 trains per hour.",
        "#1: L Line capacity → 24-29 tph (canonical)",
    ),
    Fix(
        "cbtc-vs-traditional-signaling-8-differences.md",
        "L Line capacity rose from approximately 20 to 26-plus trains per hour after CBTC commissioning, with no civil works.](/figures/fig_01_08_nyc_l_line_capacity.png)",
        "L Line capacity rose from approximately 20 to 29 trains per hour after CBTC commissioning, with no civil works.](/figures/fig_01_08_nyc_l_line_capacity.png)",
        "#1: L Line capacity caption → 20→29 tph range",
    ),
    Fix(
        "cbtc-vs-traditional-signaling-8-differences.md",
        "*<small>L Line capacity rose from approximately 20 to 26-plus trains per hour after CBTC commissioning, with no civil works.</small>*",
        "*<small>L Line capacity rose from approximately 20 to 29 trains per hour after CBTC commissioning, with no civil works.</small>*",
        "#1: L Line capacity caption text → 20→29 tph range",
    ),
    Fix(
        "moving-block-explained.md",
        "the L Line moved from roughly 20 to 26-plus trains per hour per direction",
        "the L Line moved from roughly 20 to 29 trains per hour per direction",
        "#1: L Line capacity in moving-block article → 20→29 tph",
    ),
    Fix(
        "what-is-cbtc-2026-guide.md",
        "The L Line, post-CBTC, sustains 26 trains per hour and has demonstrated peaks closer to 29.",
        "The L Line, post-CBTC, sustains 24 to 29 trains per hour in revenue operation.",
        "#1: L Line capacity in cluster ① flagship → 24-29 tph range",
    ),

    # ── #2: Honolulu Skyline opening date → June 2023 ────────────────
    Fix(
        "cbtc-vs-ptc-us-commuter-rail-vs-metro.md",
        "the Honolulu Skyline (GoA 4, opened 2023)",
        "the Honolulu Skyline (GoA 4, opened June 2023)",
        "#2: Honolulu Skyline date → June 2023",
    ),
    Fix(
        "goa-0-4-explained-grades-of-automation.md",
        "Honolulu's Skyline (2023)",
        "Honolulu's Skyline (June 2023)",
        "#2: Honolulu Skyline date → June 2023",
    ),
    Fix(
        "the-2030-cbtc-landscape-5-predictions.md",
        "the Honolulu Skyline (HART)",
        "the Honolulu Skyline (HART, opened June 2023)",
        "#2: Honolulu Skyline date → annotate June 2023 on first mention",
    ),

    # ── #4: Thales/Hitachi acquisition → "in 2024" ───────────────────
    Fix(
        "the-2030-cbtc-landscape-5-predictions.md",
        "Hitachi Rail STS completed its acquisition of Thales Ground Transportation Systems through 2024 to 2025",
        "Hitachi Rail STS completed its acquisition of Thales Ground Transportation Systems in 2024",
        "#4: Thales/Hitachi acquisition close → in 2024 (regulatory close April 2024)",
    ),

    # ── #5: MA cycle disambiguation in latency article ───────────────
    # The "heartbeat cycle = 500ms-1s" framing is canonical. The
    # end-to-end-latency article uses "MA cycle = 1-3 seconds" to mean
    # the longer regeneration interval, which conflicts. Rename to "MA
    # refresh interval" so terminology is unambiguous.
    Fix(
        "end-to-end-latency-cbtc.md",
        "The MA cycle in most deployments runs at 1 to 3 seconds because the MA is regenerated periodically rather than synchronously to position reports — the application-layer cycle is decoupled from the message-transit latency. The end-to-end loop from \"train moves\" to \"train acts on updated MA reflecting that move\" is therefore typically the MA cycle (1 to 3 seconds) plus the round-trip latency (about 370 ms typical), or roughly 1.4 to 3.4 seconds.",
        "The MA refresh interval in most deployments runs at 1 to 3 seconds because the MA is regenerated periodically rather than synchronously to position reports — the application-layer cycle is decoupled from the message-transit latency. The end-to-end loop from \"train moves\" to \"train acts on updated MA reflecting that move\" is therefore typically the MA refresh interval (1 to 3 seconds) plus the round-trip latency (about 370 ms typical), or roughly 1.4 to 3.4 seconds.",
        "#5: disambiguate MA cycle (1-3 s) → MA refresh interval; heartbeat cycle stays 500ms-1s",
    ),
    Fix(
        "end-to-end-latency-cbtc.md",
        "The MA cycle (1 to 3 seconds) is decoupled from the round-trip latency",
        "The MA refresh interval (1 to 3 seconds) is decoupled from the round-trip latency",
        "#5: disambiguate MA cycle term in second occurrence",
    ),
]


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry", action="store_true",
                    help="report what would change without writing")
    args = ap.parse_args()

    by_file: dict[str, list[Fix]] = {}
    for fx in FIXES:
        by_file.setdefault(fx.file, []).append(fx)

    applied = skipped = 0
    for fname, fixes in by_file.items():
        path = DRAFTS / fname
        if not path.exists():
            print(f"❌ NOT FOUND: {fname}", file=sys.stderr)
            for fx in fixes:
                skipped += 1
            continue
        text = path.read_text(encoding="utf-8")
        new_text = text
        local_applied: list[Fix] = []
        local_skipped: list[Fix] = []
        for fx in fixes:
            if fx.before in new_text:
                new_text = new_text.replace(fx.before, fx.after, 1)
                local_applied.append(fx)
            else:
                local_skipped.append(fx)

        if local_applied:
            print(f"\n📝 {fname}")
            for fx in local_applied:
                print(f"   ✓ {fx.reason}")
                applied += 1
        if local_skipped:
            for fx in local_skipped:
                print(f"   ⚠ skip (pattern not found): {fx.reason}")
                skipped += 1

        if local_applied and not args.dry:
            path.write_text(new_text, encoding="utf-8")

    print(f"\n{'─' * 60}")
    print(f"Applied: {applied}   Skipped: {skipped}   "
          f"Mode: {'DRY' if args.dry else 'WRITE'}")
    return 0 if skipped == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
