---
title: "Thales SelTrac vs Hitachi (Ansaldo) ATC: Procurement Implications"
slug: seltrac-vs-hitachi-procurement
description: "How the 2024 Hitachi Rail acquisition of Thales Ground Transportation Systems collapsed SelTrac and the legacy Ansaldo ATC product into one vendor portfolio, and what that means for US transit procurement decisions."
date: 2026-05-15
author: "Chunjun (Francisco) Wang"
category: comparative
tags: [Thales SelTrac, Hitachi Rail, Ansaldo STS, CBTC vendors, procurement]
primary_keyword: "SelTrac vs Hitachi"
secondary_keywords: ["Thales SelTrac CBTC", "Hitachi Rail STS", "Ansaldo CBTC", "BART Hitachi", "CBTC vendor consolidation"]
related_chapters: [10, 15]
internal_links: ["/blog/trainguard-mt-vs-urbalis-architecture"]
og_image: "/blog/img/seltrac-vs-hitachi-procurement.png"
read_time: "10 min"
---

For four decades, Thales SelTrac was the reference point for driverless metro operation in North America. Vancouver SkyTrain's 1985 opening, Toronto's deployment on Line 4, and the Detroit People Mover ran on the platform that began life as Standard Elevator Company's automated train control before becoming UTDC, then Bombardier, then Thales. In April 2024, Hitachi Rail closed its acquisition of Thales Ground Transportation Systems, folding SelTrac into a portfolio that already included the Ansaldo STS heritage CBTC product line that runs the Bay Area Rapid Transit Train Control Modernization Program. The SelTrac vs Hitachi procurement question, which used to mean "two competing vendors with different reference operational histories," now means "one vendor with two product lines and a strategic decision to make about how to converge them." This article unpacks what the consolidation actually changes and what it leaves the same, oriented to US transit agency procurement teams whose next CBTC RFP will land into this new market structure.

## The 2024 consolidation in plain terms

Hitachi Rail acquired Thales Ground Transportation Systems for approximately $1.7 billion, with regulatory close in April 2024 (subject to the divestitures the European Commission required). The transaction added the SelTrac platform and its global installed base, including 400-plus route-kilometers across Vancouver, Toronto, Dubai, the London Underground Jubilee and Northern lines, and Hong Kong MTR, to a Hitachi Rail signaling business that had been built around the legacy Ansaldo STS portfolio (which Hitachi acquired in 2015) and the Ansaldo CBTC product running on BART.

The market implication is that the United States now has effectively five independent tier-1 CBTC suppliers (Siemens, Alstom, Hitachi Rail, Mitsubishi, and CRSC, the last of which is essentially excluded by Buy America in practice). Where a 2018 procurement might have produced four genuinely independent bids, a 2026 procurement is likely to produce three. Hitachi Rail now owns both the SelTrac and the Ansaldo product lines and is unlikely to bid them against each other. The procurement question for an agency considering Hitachi Rail is not "SelTrac or Ansaldo" but "which of Hitachi Rail's two product lines is right for this corridor, and what is the agency's path if Hitachi Rail eventually consolidates them onto a single platform?"

## Where SelTrac came from and what it does well

SelTrac's strongest claim to procurement attention is its operational lineage on driverless metros. Vancouver SkyTrain has run unattended (GoA 4) revenue service continuously since December 1985. That is now four decades of operating data, accumulated incident history, and procedural maturity in cold-weather, mixed at-grade-and-elevated North American conditions. Toronto, London Jubilee and Northern, Hong Kong, and Dubai add additional decades of GoA 4 and GoA 2 deployment under different operating cultures.

The platform's architectural signature is its emphasis on robust degraded-mode behavior. SelTrac's design philosophy, built across multiple corporate ownerships, prioritized predictable behavior under partial communication loss, partial sensor failure, and access-point fade. Reference operators consistently report that the platform's degraded modes are well-defined and well-rehearsed, which matters for revenue lines that cannot afford long recovery times after a fault. SelTrac also has a long operational history in inductive-loop CBTC predating the IEEE 1474 era; modern releases use IEEE 802.11 radio, but the platform's architectural memory of inductive-loop deployments shows up in how the wayside layout is designed.

For US procurement, SelTrac's reference list is most useful as evidence on three questions that any agency contemplating GoA 4 has to answer: how does the platform behave on opening day, how does it behave a decade in, and how does it behave when something goes wrong on a Tuesday afternoon. Vancouver, Toronto, and Hong Kong supply data on all three.

## Where Ansaldo (now Hitachi) came from and what it does well

The Ansaldo STS heritage product, now marketed as Hitachi Rail CBTC, has a different strength. It is anchored in mainline signaling history (Ansaldo was for decades a major European signaling supplier) and brings stronger native integration with mainline-rail standards, including ETCS, than most metro-only platforms. This pedigree shows up in deployments where CBTC must coexist with existing main-line systems, in mixed-jurisdiction corridors, and in metros where the agency anticipates eventual integration with regional rail.

The platform's flagship US deployment is the BART Train Control Modernization Program (TCMP), awarded to what was then Hitachi Rail STS in 2018. The TCMP is the largest active US CBTC implementation: 131 route-kilometers of brownfield retrofit on a 50-year-old system that pioneered automated train control before modern CBTC standards existed. The contract has produced extensive published lessons on cutover staging, mixed-fleet operation, and the integration challenges of inheriting an automated-but-pre-CBTC infrastructure. The BART project's progress through the mid-2020s, including the schedule pressures that have characterized it, is itself part of the procurement-relevant evidence.

For US agencies, the Hitachi (Ansaldo) heritage is most persuasive when the corridor in question shares characteristics with BART: long, brownfield, automated-but-aging, with cutover constraints that demand a vendor comfortable replacing a working but obsolete system in place.

![SelTrac and the legacy Ansaldo product enter the consolidated Hitachi Rail portfolio with very different reference histories.](/figures/fig_10_05_bart_tcmp_phases.png)
*<small>SelTrac and the legacy Ansaldo product enter the consolidated Hitachi Rail portfolio with very different reference histories.</small>*

## What consolidation does to the bid environment

The procurement implications of the merger are concrete. First, the number of genuinely independent tier-1 bids on a US procurement has narrowed. An agency writing an RFP that names "SelTrac or equivalent" and "Ansaldo or equivalent" as comparable options now finds both inside one vendor envelope. The competitive pressure that used to come from playing the two against each other is gone.

Second, Hitachi Rail must decide whether to maintain both product lines indefinitely, converge them, or position them for different market segments. As of 2026, the company's public posture is that both platforms remain available; SelTrac for greenfield driverless metros and selective brownfield retrofits, the Ansaldo-heritage CBTC for mainline-adjacent and large brownfield corridors. That is a defensible market segmentation, but US agencies should treat it as the company's current view, not a permanent commitment. A procurement that depends on a specific product line being supported through 2055 should require explicit contractual commitment to that effect, including spare-parts availability, software-update maintenance, and source-code escrow.

Third, the merger is a useful occasion for any agency considering its multi-vendor posture. New York City Transit's deliberate multi-vendor strategy across the L Line (Siemens), 7 Line (Thales SelTrac, now Hitachi Rail SelTrac), and Queens Boulevard (Siemens) was always a deliberate trade of operational complexity for reduced lock-in. The Hitachi acquisition does not undo that strategy on the 7 Line; the platform still exists, the spares still flow, and the engineering team that has owned the deployment did not change names overnight. But the 7 Line is now sourced from the same global vendor that runs the BART program. Agencies that constructed their multi-vendor strategy based on three independent global vendors should re-examine whether two is sufficient and what their plan looks like if a future merger leaves only one.

## Architectural differences worth pricing in

Setting aside the corporate consolidation, the two product lines retain architectural differences that shape integration risk over a 30-year lifecycle.

SelTrac's wayside architecture is relatively centralized, with Zone Controllers owning multi-kilometer territories. The platform's onboard equipment has an evolutionary lineage that shows in the form factor; SelTrac VOBC enclosures have shrunk substantially over four decades but the architectural core has been continuously certified, which matters for the safety case. The platform's localization stack is conventional: tachometer plus optional Doppler plus balise resets, with the antenna geometry specific to SelTrac balises and not interchangeable with other vendors' units.

The Ansaldo-heritage CBTC, particularly in the BART configuration, integrates more directly with mainline-rail style track geometry and signaling overlays. The wayside controllers are designed to interface with existing track-circuit-based legacy systems for cutover staging; the architecture reflects assumptions about long, geometrically variable corridors. The localization stack is similar in principle to SelTrac's but with vendor-specific balises.

The procurement implication is the same lock-in surface that applies to every CBTC platform: once the wayside balise inventory and onboard antenna geometry are committed, the agency is committed for the life of the asset. A multi-vendor agency now finds itself maintaining multiple balise inventories per line if it has procured both Hitachi product lines. (The general lock-in dynamics live in the future article on Hidden Cost of CBTC Vendor Lock-In; the multi-vendor lessons live in Single-Vendor vs Multi-Vendor CBTC: NYC's Lessons Learned.)

## What this means in practice

- Stop treating SelTrac and Hitachi (Ansaldo) CBTC as independent bidders. They are one vendor's two product lines.
- Evaluate Hitachi Rail proposals against the specific reference deployment that is most analogous to the agency's corridor: SelTrac for greenfield driverless and Vancouver-style cold-weather operation, the Ansaldo-heritage product for long brownfield retrofits resembling BART.
- Specify spare-parts, software-update, and source-code-escrow commitments by product line, not by vendor. A vendor commitment to "support the platform" does not bind the company to maintain both product lines if it eventually converges them.
- Re-examine the multi-vendor strategy. If three independent global vendors are now two-and-a-half (Siemens, Alstom, Hitachi Rail with two product lines), the strategic logic of single-vs-multi-vendor decisions has shifted.
- Reference-site visits matter even more after consolidation. Visit Vancouver, BART, and at least one other operator under the new corporate ownership to understand how the company is integrating support and engineering.

## Where to go next

This post is a procurement orientation. The full treatment of CBTC vendor selection, contract structure, and lifecycle commitments lives in Chapter 12 ("Procurement and RFP Strategy") and Chapter 15 ("Vendor Landscape and Technology Trends") of *Communications-Based Train Control* ([Volume 2 on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 15 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch15.pdf)

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Deployment, Economics, and the Future*. Independent. ISBN 979-8-258-54295-3. — Chapter 15, "Vendor Landscape and Technology Trends"; Chapter 10, "CBTC in the United States."
- Hitachi Rail. *Acquisition of Thales Ground Transportation Systems*. [hitachirail.com/news](https://www.hitachirail.com/news/)
- Bay Area Rapid Transit District. *Train Control Modernization Program*. [bart.gov/about/projects/cad](https://www.bart.gov/about/projects/cad)
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- TransLink. *SkyTrain System Information*. [translink.ca/about-us/about-translink/our-history](https://www.translink.ca/about-us/about-translink/our-history)
- MTA New York City Transit. *Communications-Based Train Control Status Update*. [new.mta.info/project/communications-based-train-control-cbtc](https://new.mta.info/project/communications-based-train-control-cbtc)
- Federal Transit Administration. *Build America, Buy America Act Implementation Guidance*. [transit.dot.gov/buyamerica](https://www.transit.dot.gov/buyamerica)
