---
title: "Kuala Lumpur Driverless Metro: The Kelana Jaya Line and MRT, From 1998 to Today"
slug: kuala-lumpur-kelana-jaya-driverless
description: "How the Kuala Lumpur driverless metro grew from the Kelana Jaya Line's 1998 SelTrac debut to two GoA 4 MRT lines on Alstom CITYFLO 650 — and what US transit engineers can and cannot borrow from it."
date: 2026-08-17
author: "Chunjun (Francisco) Wang"
category: international-benchmarks
tags: [CBTC, Kuala Lumpur, Kelana Jaya Line, MRT, driverless, GoA 4, SelTrac, CITYFLO 650, international]
primary_keyword: "Kuala Lumpur driverless metro"
secondary_keywords: ["Kelana Jaya Line CBTC", "MRT Kajang Line driverless", "MRT Putrajaya Line", "SelTrac CBTC Kuala Lumpur", "CITYFLO 650 GoA 4"]
related_chapters: [8, 11]
internal_links: ["/blog/vancouver-skytrain-lessons-for-us", "/blog/goa-0-4-explained-grades-of-automation", "/blog/dubai-metro-cbtc-driverless-network"]
og_image: "/blog/img/kuala-lumpur-kelana-jaya-driverless.png"
read_time: "11 min"
---

On 1 September 1998, a two-car train slid out of a station on the newly opened PUTRA Light Rail Transit line in Kuala Lumpur with no driver in the leading car and no cab for one to sit in — the opening move in what would grow into the largest Kuala Lumpur driverless metro network in Southeast Asia. It was five years before Singapore opened its first driverless heavy-metro line and a full 18 years before an American transit agency placed a single revenue train under Communications-Based Train Control on a brownfield subway. What began that day as one line has become, nearly three decades later, three fully automated lines, two distinct CBTC lineages, and more than 150 route-kilometers of unattended operation carrying well over a million and a half riders on a normal weekday.

## Why Kuala Lumpur's driverless metro belongs in a US engineer's benchmark set

The United States tends to benchmark its train control against London, Paris, and its own agencies, and those comparisons are covered elsewhere on this site. Kuala Lumpur earns a place in the set for a specific reason: it is one of the few cities that has run Grade of Automation 4 (GoA 4) — unattended train operation — continuously and at scale since the late 1990s, and it did so twice, with two different vendors and two different technology families, on greenfield alignments free of the legacy signaling estate that dominates every American project. For a US engineer or program manager weighing whether driverless operation is a mature, buyable technology or an experiment, Malaysia offers close to 30 years of evidence rather than a marketing brochure. This piece walks through what Kuala Lumpur actually built, where the three lines differ, and which lessons survive translation into a domestic business case.

## The Kelana Jaya Line: driverless since 1998, on Innovia ART and SelTrac

The line now called Kelana Jaya opened in phases beginning in September 1998 as the PUTRA LRT, and it was the first fully automated, driverless rail system in Malaysia and among the earliest in Southeast Asia. Today it runs roughly 46.4 kilometers with 37 stations — 31 elevated, one at grade, and five underground — under the operation of Rapid Rail, a subsidiary of the state infrastructure owner Prasarana Malaysia.

Two engineering choices from that original procurement still define the line. The first is the rolling stock: Bombardier — since 2021 part of Alstom — supplied Innovia ART vehicles, later supplemented by Innovia Metro 300 cars, propelled not by conventional rotary traction motors but by linear induction motors reacting against an aluminum reaction rail laid between the running rails. That propulsion choice is the same Advanced Rapid Transit lineage that runs Vancouver's SkyTrain, a connection explored in [Vancouver SkyTrain: Automation Lessons for US Transit](/blog/vancouver-skytrain-lessons-for-us), and it gives the Kelana Jaya Line steep-grade capability and simple, contactless propulsion at the cost of a specialized vehicle no other Malaysian line shares.

The second choice is the signaling. The Kelana Jaya Line runs on SelTrac CBTC, the moving-block product originally developed under Alcatel, later carried by Thales, and now — following Hitachi Rail's 2023 acquisition of Thales's ground transportation business — under Hitachi. This matters because it separates two things that casual readers conflate: the vehicles are Bombardier/Alstom Innovia, but the train control that makes them driverless is the SelTrac family, not Alstom's own CITYFLO. The line has therefore carried unattended trains through a two-vendor split — one supplier's cars, another's brain — for its entire service life, at maximum operating speeds around 80 kilometers per hour and, in its earlier specification, a design headway historically cited near 90 seconds.


## The MRT lines: CITYFLO 650 and a decade of driverless heavy metro

Kuala Lumpur's second and third automated lines came from a different program entirely — the Klang Valley Mass Rapid Transit, delivered by the government-owned MRT Corporation with the MMC-Gamuda joint venture as project delivery partner — and they moved the city from medium-capacity LRT to full heavy-metro scale.

The MRT Kajang Line, originally the Sungai Buloh-Kajang alignment, opened in two phases: the northern section on 16 December 2016 and the full line through to Kajang on 17 July 2017. It runs roughly 47 kilometers with 31 stations, of which about 9.5 kilometers and seven stations sit underground beneath the city center. Siemens, in a local consortium, supplied 58 four-car Inspiro trainsets, and Bombardier — again, now Alstom — provided the CITYFLO 650 CBTC system that operates the line at GoA 4, driverless and controlled from an operations center at Sungai Buloh. Reported maximum operating speeds reach roughly 100 kilometers per hour in the tunneled central section.

The MRT Putrajaya Line, originally the Sungai Buloh-Serdang-Putrajaya alignment, followed a decade later: Phase 1 opened on 16 June 2022 and Phase 2 on 16 March 2023. At about 57.7 kilometers — some 13.5 of them underground — with roughly 36 stations, it is the longest of the three lines and the longest driverless line in the country. Its rolling stock breaks the pattern: rather than Siemens Inspiro, the line runs 49 four-car trainsets supplied by the HAP consortium built around Hyundai Rotem. The signaling, however, holds the pattern — Alstom delivered the CITYFLO 650 CBTC and the onboard equipment across the fleet, again at GoA 4 from the Sungai Buloh control center. Two heavy-metro lines, two different train builders, one common train-control platform is a procurement structure US agencies rarely achieve.

Because both MRT lines share the CITYFLO 650 platform and a single operations center campus at Sungai Buloh, the second line inherited a proven signaling baseline rather than a first-of-type system, which is one reason the Putrajaya Line moved from Phase 1 to a fully commissioned underground core in roughly nine months. That kind of reuse — the same train-control product, the same central control philosophy, extended to a new alignment — is precisely the compounding benefit a US agency forfeits when each line is competed and integrated as an isolated program.

## Three lines, three procurements, one automation philosophy

Set side by side, the three lines tell a consistent story told with different components. Each was built greenfield, each reached unattended GoA 4 from its opening day, and each separated the vehicle contract from the signaling contract rather than buying a single bundled turnkey system. The technology families differ — SelTrac on the Kelana Jaya Line, CITYFLO 650 on both MRT lines — but the operating concept is identical: continuous train-to-wayside data, moving-block braking authority, platform-edge protection, and a central control center standing in for the driver's judgment. What Kuala Lumpur demonstrates is not that one vendor's product is superior, a claim this site never makes, but that a city can standardize on the operating concept while deliberately keeping its supplier base plural.

[FIGURE: Bar chart of the three Kuala Lumpur driverless lines by route length in kilometers, labeled by opening year. DATA: Kelana Jaya Line (1998) = 46.4; MRT Kajang Line (2017) = 47; MRT Putrajaya Line (2023) = 57.7. Caption: "About 151 route-kilometers of GoA 4 driverless operation across three lines and two CBTC lineages, built greenfield over 25 years."]

The scale is not trivial. The Kelana Jaya Line carried roughly 89.6 million passengers in 2025, the Kajang Line about 92.7 million, and the Putrajaya Line about 55.7 million, for combined weekday ridership comfortably above 750,000 boardings — figures that place Kuala Lumpur's automated network among the busier driverless systems anywhere, and well ahead of any US metro operating at GoA 4 today.

## What driverless does and does not remove

Unattended operation is a statement about the train, not about the system, and Kuala Lumpur illustrates the distinction cleanly. Removing the driver did not remove the people: all three lines run conventional control centers, roving station staff, and maintenance crews on the discipline any GoA 4 network requires, and the framework for classifying exactly what "driverless" means at each grade is laid out in [GoA 0-4 Explained: The Five Grades of Train Automation](/blog/goa-0-4-explained-grades-of-automation). The functions a driver used to perform — watching the platform, judging when to close doors, spotting an obstruction ahead — are redistributed onto engineered subsystems: platform-edge protection, closed-circuit monitoring, and a control center able to speak to passengers and dispatch staff to any train. Those subsystems are capital and operating costs, and any honest business case has to carry them rather than assume the driver's salary simply disappears.

The lines also differ in how completely they enforce the platform edge, and that difference is instructive. The two MRT lines were built with platform screen doors as standard, the full platform-edge protection that a modern GoA 4 heavy-metro line is expected to carry. The older Kelana Jaya Line is not uniform: it introduced platform screen doors at its underground stations, but its elevated stations were not originally built with full platform-edge doors, and the line ran unattended for years relying on other measures at those platforms. For a US engineer, that is a useful data point — platform screen doors are a strong expectation for new GoA 4 systems and a large line item in any business case, but the Kelana Jaya Line is a reminder that the automation itself and the platform-door retrofit are separable programs, sequenced by budget and by station type rather than delivered as a single indivisible package.

## What a US agency can and cannot borrow

The temptation is to read Kuala Lumpur's schedule and unit costs into a domestic project, and that is exactly the comparison to resist. Every one of these three lines was built greenfield, procured under a single national authority, and delivered without the brownfield cutovers, split civil-systems-vehicle interface risk across dozens of packages, and multi-year public-comment and federal-funding cycles that shape American capital programs. Those enabling conditions do not transfer, and citing Malaysia's timelines in a US business case invites a false comparison of the same kind flagged in the analysis of the [Dubai Metro's greenfield driverless network](/blog/dubai-metro-cbtc-driverless-network).

What does transfer is narrower and more durable. First, GoA 4 is demonstrably mature: three Kuala Lumpur lines have run unattended for a combined total well past 50 line-years, which is evidence, not aspiration. Second, a plural supplier base is achievable — Kuala Lumpur ran two vehicle builders and two signaling families across three lines without forcing a single-vendor lock, the kind of outcome US procurement teams say they want and rarely structure for. Third, the United States is now beginning to walk this path itself: Honolulu's Skyline, opened in 2023, is the first fully driverless GoA 4 metro to enter service in an American city, which makes the Kuala Lumpur record less an exotic overseas curiosity than a preview of an operating model the Federal Transit Administration (FTA) and its grantees will increasingly evaluate. The technology was never the obstacle. The institutional structure around it is.

## What this means in practice

- **Kuala Lumpur is a long-run proof, not a template.** Nearly 30 years of continuous GoA 4 service across three lines shows the driverless technology is mature and buyable; the barriers in the United States are brownfield integration, split contracts, and institutional cadence, not the CBTC itself.
- **Vehicle vendor and signaling vendor are separable decisions.** The Kelana Jaya Line pairs Alstom/Bombardier Innovia vehicles with SelTrac train control, and the two MRT lines pair two different train builders with a common CITYFLO 650 platform — a reminder that GoA 4 does not require a single bundled turnkey supplier.
- **Platform screen doors are a sequenced program, not an all-or-nothing gate.** The Kelana Jaya Line ran driverless with platform doors underground and none at some elevated stations, so a US agency can plan automation and platform-edge protection as related but separately budgeted efforts.
- **Do not import the schedule or the unit cost.** Greenfield, single-authority procurement produced Kuala Lumpur's timelines; a US brownfield resignaling carries costs and delays those numbers do not capture.
- **Watch Honolulu as the domestic reference.** With Skyline now the first US GoA 4 metro, the questions Kuala Lumpur answered in the 1990s and 2010s are becoming live American procurement questions rather than international trivia.

## Where to go next

This post is an 11-minute case study. The full treatment of international CBTC benchmarks and their relevance to US deployment decisions lives in Chapter 11 ("International Benchmarks with US Relevance") of *Communications-Based Train Control*, Volume 2: Operations, Deployment & Economics ([Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 11 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch11.pdf) for the comparative benchmark tables.

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Deployment & Economics*. Independent. ISBN 979-8-258-54528-2. — [Chapter 11, "International Benchmarks with US Relevance"]
- Wikipedia. *Kelana Jaya line*. [en.wikipedia.org/wiki/Kelana_Jaya_line](https://en.wikipedia.org/wiki/Kelana_Jaya_line)
- Wikipedia. *Kajang line*. [en.wikipedia.org/wiki/Kajang_line](https://en.wikipedia.org/wiki/Kajang_line)
- Wikipedia. *Putrajaya Line*. [en.wikipedia.org/wiki/Putrajaya_Line](https://en.wikipedia.org/wiki/Putrajaya_Line)
- Alstom. (2023). *Alstom delivers complete signalling system and on-board signalling equipment for Malaysia's MRT Putrajaya Line*. [alstom.com](https://www.alstom.com/press-releases-news/2023/3/alstom-delivers-complete-signalling-system-and-board-signalling-equipment-malaysias-mrt-putrajaya-line)
- Railway Technology. *Sungai Buloh-Kajang (SBK) Line*. [railway-technology.com](https://www.railway-technology.com/projects/sungai-buloh-line/)
- International Railway Journal. *Services begin on Kuala Lumpur's MRT Putrajaya Line Phase 2*. [railjournal.com](https://www.railjournal.com/passenger/metros/services-begin-on-kuala-lumpurs-mrt-putrajaya-line-phase-2/)
- MRT Corporation Malaysia. *Kajang Line* and *Putrajaya Line* project pages. [mymrt.com.my](https://www.mymrt.com.my/)
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
