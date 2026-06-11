---
title: "Evaluating CBTC Bids: The 12 Criteria That Matter"
slug: evaluating-cbtc-bids-12-criteria
description: "A scoring rubric for US transit agencies evaluating Communications-Based Train Control bids — the 12 criteria that experienced procurement teams weight, with rationale and sample question language."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: procurement
tags: [CBTC, bid evaluation, RFP, procurement, US transit, FTA, best-value]
primary_keyword: "evaluating CBTC bids"
secondary_keywords: ["CBTC bid evaluation criteria", "CBTC RFP scoring", "CBTC vendor evaluation", "best-value CBTC procurement", "CBTC proposal evaluation"]
related_chapters: [12, 15]
internal_links: ["/blog/cbtc-rfp-vendor-lockin", "/blog/cbtc-scope-of-work-template", "/blog/rfp-red-flags-vendor-responses"]
og_image: "/blog/img/evaluating-cbtc-bids-12-criteria.png"
read_time: "11 min"
---

When BART issued its draft Train Control Modernization Program (TCMP) RFP in 2014 and held multiple industry forums before the final issuance, the public record of what the procurement team was looking for was already on the table. The technical approach mattered most, the past performance record mattered next, the management and schedule were scored carefully, and price was weighted lower than any of those — but not so low that it could be ignored. The contract was awarded to Hitachi Rail STS in early 2018 at approximately $798 million. The structure of that evaluation — best-value rather than low-bid, with technical and past-performance dominance over price — has become the standard for US Communications-Based Train Control (CBTC) procurements. This post lays out the 12 criteria that experienced US transit procurement teams use, the typical weight each receives, and the sample question language that elicits useful information rather than vendor marketing.

## Why best-value, not low-bid

A CBTC procurement is not a commodity purchase. The lowest-priced bid in a CBTC competition is regularly the bid with the most aggressive schedule assumptions, the thinnest contingency, and the most ambitious assumptions about legacy interface complexity. The lowest bid wins the contract; the resulting project produces the change orders. US transit agencies have therefore migrated almost universally to best-value selection, where technical, experience, management, and price are weighted in roughly the proportions 40 to 50 percent technical, 20 to 25 percent past performance, 15 to 20 percent management and schedule, and 20 to 30 percent price. This piece is for the procurement officer, the program manager, and the technical evaluation team building the scoring rubric. It assumes familiarity with the [vendor-neutral RFP structure](/blog/cbtc-rfp-vendor-lockin) and the [scope-of-work template](/blog/cbtc-scope-of-work-template). The depth lives in Chapter 12 of *Communications-Based Train Control*, Volume 2.

## The 12 criteria

The categories below represent the recurring evaluation criteria across recent US CBTC procurements. The percentages are typical weights; agencies tune them to project specifics. Criteria 1 through 6 are technical, 7 and 8 are past performance, 9 and 10 are management and schedule, and 11 and 12 are commercial.

### 1. System architecture and IEEE 1474 compliance (8 to 12 percent)

Does the proposed architecture meet IEEE 1474.1, 1474.2, 1474.3, and 1474.4 in measurable terms? A useful evaluation question: "Provide a compliance matrix mapping each IEEE 1474.1 functional and performance requirement to the corresponding subsystem in the proposed architecture, with cited evidence (test report, prior project, simulation result) for each compliance claim."

Bids that quote IEEE 1474 compliance as a single sentence — "the system is IEEE 1474.1 compliant" — without a line-by-line matrix tend to fail this criterion. Bids that provide the matrix and identify the specific deviations or interpretations they have applied score highly, even if some deviations exist, because the deviations are visible and can be discussed.

### 2. Safety case and SIL 4 evidence (8 to 12 percent)

How does the proposed system achieve SIL 4 certification per IEC 61508 for vital functions? Useful question: "Identify the prior CBTC deployments where the proposed Vehicle On-Board Controller (VOBC) and Zone Controller (ZC) have achieved SIL 4 type approval. Provide the issuing notified body, the year of issue, the scope of approval, and any current or pending modifications that would affect the certification."

Reuse of a previously certified safety case, with site-specific adaptation rather than fresh certification from scratch, dramatically reduces schedule risk. A bid that quotes a hypothetical SIL 4 path without prior issued certifications carries far higher risk than a bid pointing to operational deployments at scale.

### 3. Capacity and headway performance (6 to 10 percent)

What sustainable headway can the system achieve under defined operational scenarios? Useful question: "Provide a headway calculation for the agency's track geometry and service profile (Appendix X), with stated assumptions about dwell time, train acceleration and braking performance, civil speed limits, and turnback constraints. Identify the dominant bottleneck."

The MTA L Line, post-CBTC, sustains 24 to 29 trains per hour per direction depending on operational conditions. The Paris Métro Line 1 (RATP), with GoA 4 and CBTC plus simultaneous fleet and infrastructure modernization, sustains 42 trains per hour at 1 minute 55 seconds headway. US brownfield procurements commonly target 27 to 30 tph as the structural cap. Bids that promise dramatically higher numbers without identifying the corresponding infrastructure investments are over-promising.

### 4. Communication architecture and cybersecurity (5 to 8 percent)

What is the proposed Data Communication System (DCS) — 2.4/5 GHz WLAN, LTE-R, private 5G, hybrid? How does the cybersecurity architecture align with TSA Security Directive 1580 and NIST SP 800-82 Rev. 3? Useful question: "Describe the proposed DCS spectrum strategy, including coverage planning methodology, redundancy, handover latency, and degraded-mode behavior. Identify the cybersecurity architecture, including network segmentation, encryption, authentication, intrusion detection, and incident response."

The US has no dedicated rail spectrum equivalent to Europe's FRMCS allocation. Agencies pursuing cellular-grade radio must operate over CBRS Priority Access Licenses, leased commercial spectrum, or unlicensed ISM bands. Bids that promise migration to a future 5G-R standard without identifying a current-spectrum operating mode are deferring risk.

### 5. Onboard equipment, fleet retrofit, and integration (5 to 8 percent)

How will the proposed VOBC integrate with the agency's existing rolling stock? Useful question: "For each rolling stock type in the agency's fleet (Appendix Y), identify the integration scope (cabinets, cabling, interfaces with traction, braking, doors, HVAC, passenger information), the typical retrofit duration per car, and any rolling stock modifications required."

This is the section where prior project experience matters most. A bid that describes the retrofit scope car-type by car-type, with prior reference projects on similar fleets, is making a credible commitment. A bid that quotes a single global integration figure is making an estimate.

### 6. Interface management and ICDs (4 to 6 percent)

What is the proposed approach to Interface Control Documents and the agency's right to use them? Useful question: "Identify each subsystem boundary in the proposed architecture and provide a sample ICD for one boundary (e.g., VOBC-to-DCS, or ZC-to-interlocking). Describe the contractor's commitment to maintain ICDs throughout the project lifecycle and to deliver them as agency property at acceptance."

Bids that resist ICD ownership transfer or that scope ICDs as internal engineering documents (rather than contract deliverables) signal future lock-in cost.

[FIGURE: Radar chart comparing two hypothetical CBTC bids across the 12 evaluation criteria, with weighted scores summed to a final best-value rating.
Source: new figure to be generated.
Caption: "Best-value scoring across 12 criteria distinguishes proposals that low-bid scoring would treat as identical."]

### 7. Past performance — comparable CBTC deployments (10 to 15 percent)

What CBTC deployments has the contractor delivered, on what scale, in what regulatory and operational environments? Useful question: "Identify the most recent five CBTC revenue-service deployments by the proposed contractor and joint-venture partners, with project size (route-km, fleet count, station count), original contracted value, final actual cost (with change-order percentage), original scheduled revenue date, actual revenue date, and a contactable agency reference."

This is where the practical difference between vendors shows. Siemens has 25 years of operational history on Paris Line 14 and US deployments on NYCT Line 7 and the L Line. Hitachi Rail (formerly Thales) traces its SelTrac platform to Vancouver SkyTrain's 1985 opening, with 400+ route-km deployed globally and the BART TCMP underway. Alstom's Urbalis platform has 300+ km of deployments including Singapore NEL, Milan M5, and London DLR; the legacy Bombardier CITYFLO 650 platform is on Muni Metro. Each has a different track record on US brownfield retrofit, and the procurement evaluation should make those differences visible.

### 8. Past performance — schedule and cost record (5 to 10 percent)

How has the contractor performed on schedule and cost on prior CBTC deployments? Useful question: "For each of the prior five deployments named under criterion 7, provide the schedule slippage from contracted RSR date to actual RSR date and the change-order percentage of original contract value. If schedule or cost performance was below industry norms, identify the contributing factors and the corrective actions taken."

The honesty of this answer matters more than the absolute numbers. Every tier-1 CBTC vendor has experienced schedule and cost overruns on at least one major deployment. A bid that acknowledges past overruns and identifies what changed since is more credible than a bid that claims a perfect record.

### 9. Project management organization and governance (4 to 6 percent)

Who, by name and resume, will lead the project for the contractor? Useful question: "Identify the contractor's proposed Program Director, Systems Engineering Lead, Safety Manager, Test Manager, and Cutover Lead, with each individual's resume, prior CBTC project experience, percentage of time committed to this project, and the commitment period (years 1 to 3, 1 to 5, full lifecycle)."

A team that can identify five named senior individuals with prior CBTC operational experience and full-time commitment for the duration is a substantive bid. A team that proposes "to be named" or part-time involvement is a higher-risk bid.

### 10. Schedule realism and critical-path analysis (6 to 10 percent)

Does the proposed schedule reflect realistic CBTC deployment timelines? Useful question: "Provide a Master Project Schedule with the critical path identified, including procurement, design, factory acceptance test, site integration test, dynamic testing, shadow running, parallel operations, and revenue service demonstration. Identify the assumptions underlying the schedule and the risks the contractor has flagged."

US brownfield CBTC deployments typically span 5 to 8 years from procurement to revenue service. A bid promising 3 years for a major brownfield retrofit is not credible. A bid promising 10 years is conservative — but the agency should evaluate why. Schedule compression is the leading cause of testing-phase shortcuts, which produce post-revenue defects that the agency pays for in service disruptions.

### 11. Price and pricing structure (15 to 25 percent)

Is the proposed price reasonable for the scope? Useful question: "Provide a fixed-price bid with detailed line-item breakdown by the six CAPEX categories (onboard, wayside, communication, central, engineering, testing). Provide separate pricing for warranty period extensions (year 4, year 5) and for performance-based maintenance contracts (years 3 through 10)."

Best-value scoring evaluates price for reasonableness against an independent engineer's estimate, not against the lowest bid. A price 20 percent below the independent estimate is a flag, not an asset — it suggests aggressive assumptions that will surface as change orders. A price within 10 percent of the independent estimate is reasonable.

### 12. Buy America compliance and US footprint (4 to 6 percent)

How does the contractor's proposed sourcing meet BABA's 70 percent manufactured-product domestic content threshold? Useful question: "Provide a detailed Buy America compliance plan with line-item domestic content percentages for each major subsystem, identification of US assembly facilities, and the contractor's history of FTA Buy America audits with any prior compliance findings."

All tier-1 vendors maintain US manufacturing capacity (Siemens in Sacramento and New Jersey; Hitachi Rail in Coppell and Pittsburgh; Alstom in Rochester, Hornell, and Plattsburgh; Wabtec across multiple US facilities). The compliance question is not whether the supplier can comply but how compliance affects pricing and schedule.

[FIGURE: Stacked bar chart of typical CBTC bid evaluation weights for a US brownfield procurement (Technical 40-50%, Past Performance 20-25%, Management 15-20%, Price 20-30%) with breakdown into the 12 criteria.
Source: new figure to be generated.
Caption: "Typical US CBTC bid evaluation weights — best-value, not low-bid, drives every recent major procurement."]

## What the evaluation does not score

Two categories that bidders sometimes try to use for differentiation deserve no scoring weight in a vendor-neutral evaluation.

**Vendor brochures and product names**: bidders frequently emphasize platform marketing — Trainguard MT, SelTrac, Urbalis. The evaluation should not score the marketing; it should score the demonstrated performance of those platforms on prior comparable deployments.

**Future technology promises**: 5G-R, FRMCS, virtual coupling, AI-assisted dispatch. Each is real and developing. None is a deployable safety-critical technology in 2026 for US transit CBTC. A bid that promises future capabilities should be scored on what is contractually delivered at revenue service, not on what the vendor's roadmap projects.

## Practical takeaways

- Use best-value scoring with weights approximately 40 to 50 percent technical, 20 to 25 percent past performance, 15 to 20 percent management and schedule, 20 to 30 percent price. Tune for the specific procurement.
- Score system architecture against an IEEE 1474 compliance matrix, not against vendor marketing. Require evidence for each claim.
- Score safety on prior issued SIL 4 type approvals with named notified bodies, not on hypothetical certification paths.
- Score past performance on five named prior deployments with contactable references, not on aggregate marketing claims.
- Score schedule realism against the 5 to 8 year industry baseline. A 3-year promise on a brownfield retrofit is a flag.
- Score price against an independent engineer's estimate. A price 20 percent below the estimate signals aggressive assumptions.
- Do not score vendor brochures or future-technology roadmaps. Score what is contractually delivered at revenue service.

## Where to go next

This piece is the rubric structure. The full procurement and evaluation treatment lives in Chapter 12 (Project Lifecycle) and Chapter 15 (Vendor Landscape) of *Communications-Based Train Control*, Volume 2 ([Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 12 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch12.pdf).

For the vendor-neutral RFP structure that this evaluation supports, see [How to Write a CBTC RFP That Doesn't Lock You Into One Vendor](/blog/cbtc-rfp-vendor-lockin). For the warning signs in vendor responses, see [RFP Red Flags: 8 Vendor Responses That Should Worry You](/blog/rfp-red-flags-vendor-responses).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Deployment & Economics*. Independent. ISBN 979-8-258-54295-3. — Chapter 12, "Project Lifecycle"; Chapter 15, "Vendor Landscape and Technology Trends."
- IEEE Standards Association. *IEEE Std 1474.1, 1474.2, 1474.3, 1474.4: Communications-Based Train Control Standards*.
- International Electrotechnical Commission. *IEC 61508: Functional Safety of Electrical/Electronic/Programmable Electronic Safety-related Systems*.
- Federal Transit Administration. (2016). *FTA Report No. 0045: Communications-Based Train Control (CBTC) Technology*. [transit.dot.gov](https://www.transit.dot.gov/)
- Federal Transit Administration. *Build America, Buy America Act Implementation Guidance*. [transit.dot.gov/BuyAmerica](https://www.transit.dot.gov/buyamerica)
- Bay Area Rapid Transit. *Train Control Modernization Program*. [bart.gov/about/projects/cbtc](https://www.bart.gov/about/projects/cbtc)
- MTA New York City Transit. *Communications-Based Train Control Status Update*. [new.mta.info/project/communications-based-train-control-cbtc](https://new.mta.info/project/communications-based-train-control-cbtc)
- Transportation Security Administration. *Security Directive 1580-23-01: Rail Cybersecurity*. [tsa.gov](https://www.tsa.gov/)
