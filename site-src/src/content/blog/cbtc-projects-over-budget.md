---
title: "Why CBTC Projects Run 30%+ Over Budget — and How to Prevent It"
slug: cbtc-projects-over-budget
description: "An engineer-honest look at why US CBTC projects routinely overrun their initial budgets, with the cost-driver categories that the FTA Project Management Oversight Contractor sees in every retrospective."
date: 2026-05-26
author: "Chunjun (Francisco) Wang"
category: procurement
tags: [CBTC, cost overrun, project management, US transit, FTA, BART, MTA]
primary_keyword: "CBTC project overrun"
secondary_keywords: ["CBTC over budget", "CBTC cost overrun", "transit signaling project delay", "CBTC schedule slippage", "BART TCMP cost"]
related_chapters: [12, 14]
internal_links: ["/blog/cbtc-procurement-cost-drivers", "/blog/cbtc-lifecycle-cost-30-year-model"]
og_image: "/blog/img/cbtc-projects-over-budget.png"
read_time: "10 min"
---

The MTA's L Line was originally tendered to Siemens Transportation Systems in 1999 with a contract value of approximately $340 million and a target revenue date in the early 2000s. Full-line revenue operation was eventually achieved in 2009 — and even after that, integration work continued for years. BART's Train Control Modernization Program was awarded to Hitachi Rail STS in early 2018 at approximately $798 million, scheduled for revenue service ready in 2021; the actual completion has slipped multiple years and the program has accrued change orders into the hundreds of millions. Honolulu Skyline, originally projected at around $5 billion, has reported total project costs that have escalated substantially over its lifecycle. The pattern is durable enough across recent US CBTC programs that program managers, FTA Project Management Oversight Contractors, and rating agencies now treat 30 percent or greater cost growth as the base case rather than the exception. This post explains why — not in defense of any specific overrun, but as a working set of cost-driver categories that the next agency to issue a CBTC procurement can use to bound its own risk.

## Why this pattern keeps repeating

Communications-Based Train Control (CBTC) projects share a small set of structural features that make budget honesty exceptionally hard. They are 5 to 8 year programs in which the requirements baseline is set 18 to 24 months before any meaningful integration work begins. They are executed in operating brownfield environments where every track-access window is nights and weekends. They depend on a global supplier base of four to five tier-1 vendors whose products were largely designed for European and Asian deployments and require US-specific adaptation. They are subject to FTA, State Safety Oversight, Independent Safety Assessor, and Project Management Oversight Contractor reviews that each have legitimate veto power over revenue cutover. And the safety case — the structured argument that the system can be operated safely under defined conditions — is the gating deliverable that, in practice, determines schedule. This post is for the program manager, the deputy general manager for capital programs, the chief financial officer, and the board member who will be asked, in year three of the project, to approve the first major change order. The depth lives in Chapter 12 of *Communications-Based Train Control*, Volume 2; this is the field-tested checklist of where the money goes.

## Driver 1: under-specified scope at procurement

The single largest source of overrun on US CBTC projects is scope that was not specified, in writing, at the time of contract award. The pattern is consistent. The agency issues a Design-Build RFP with a functional specification aligned to IEEE 1474.1. Bidders price what is in writing. The contract is awarded. Twelve to eighteen months into design, the agency and the contractor jointly discover that the legacy interlocking interface is more complex than the specification described, that the existing track database has discrepancies the new system cannot tolerate, that platform clearances differ from the as-built drawings, that the rolling stock has undocumented prior modifications. Each discovery becomes a change order. Change orders on US brownfield CBTC projects routinely accumulate to 15 to 25 percent of contract value before substantial completion.

The mitigation is unromantic: invest more in the feasibility and pre-procurement phase. A defensible feasibility study takes 4 to 8 months and costs $150K to $400K to produce, including legacy as-built verification, track-database audits, and rolling-stock survey. This investment is far smaller than the cost of poor decisions made without it. (For the structure of a feasibility study, see [CBTC Procurement: Cost Drivers Beyond the Sticker Price](/blog/cbtc-procurement-cost-drivers).)

## Driver 2: optimistic cutover assumptions

Cutover — the transition from legacy signaling to CBTC — is the highest-risk event in the project lifecycle. It is also the phase that program plans most consistently underestimate. Big Bang cutovers are rare on US brownfield systems for good reason; almost every US deployment uses a phased-segment or fleet-phased approach. The L Line cutover on the Canarsie corridor was executed in three geographic segments over multiple years with weekend and holiday closures. BART's Train Control Modernization Program is structured as a fleet-phased rollout over multiple years.

The cost driver in cutover is **parallel operations**: the period during which CBTC-equipped and legacy-signaling trains coexist on the same line. Parallel operations require dual maintenance organizations, dual training programs, dual spare-parts inventories, and active inter-system coordination. They suppress the capacity benefits the agency is paying for. They extend OPEX by 10 to 20 percent during the transition. And they can extend across multiple fiscal years if the rolling stock retrofit slips behind the wayside cutover.

Agencies that bound this risk write the cutover strategy into the SOW with explicit phase definitions, require a Cutover Plan as a contract deliverable, and budget for parallel operations in the OPEX baseline rather than treating it as a one-time charge.

## Driver 3: testing schedule compression

Testing typically consumes 25 to 35 percent of project schedule on a CBTC program — and is the single most common target of schedule compression when the program runs late. The compression usually targets Shadow Running and degraded-mode test coverage, the two phases that produce the most evidence at operational scale.

US best practice for brownfield CBTC is 6 to 12 months of Shadow Running before revenue cutover. The L Line shadow-ran for approximately 8 months. Programs that compress Shadow Running to 2 to 4 months in pursuit of a scheduled revenue date almost always pay for it later — in post-revenue-service incidents, in extended warranty claims, in unscheduled service disruptions that erode the public trust the project was meant to build. The 7 Line CBTC project, the BART TCMP, and others have all encountered post-cutover defect discovery that was traceable to compressed test windows.

The mitigation is cultural as much as contractual. The Cutover Plan should specify shadow-running entry and exit criteria — a minimum number of train movements logged, a maximum defect rate, specific degraded-mode scenarios exercised — and the agency should reserve the right at the System Integration Review gate to defer cutover without contractual penalty. Without that contractual protection, schedule pressure overrides engineering judgment every time.


![Cost growth on US CBTC projects is rarely a single failure. It accumulates across seven recurring driver categories.](/blog/img/cbtc-projects-over-budget-fig1.png)
*<small>Cost growth on US CBTC projects is rarely a single failure. It accumulates across seven recurring driver categories.</small>*


## Driver 4: BABA and Davis-Bacon premiums

The Build America, Buy America (BABA) requirements for FTA-funded projects mandate a minimum 70 percent domestic content for manufactured products and 90 percent for steel and iron. For CBTC, this means signaling equipment, antennas, fiber backbone, and enclosures must be assembled domestically with US-sourced components. Industry premiums of 5 to 15 percent over international market prices are typical. Davis-Bacon prevailing wage requirements add another 30 to 50 percent to installation and commissioning labor on federally funded projects. Project Labor Agreements (PLAs) on top can add 10 to 20 percent to installation costs.

These costs are not surprises in the abstract — every US transit procurement officer knows BABA exists. The cost driver is treating them as fixed constants in the budget rather than as adjustable line items that compound. A 10 percent BABA premium on $30 to $50 million of equipment CAPEX adds $3 to $7.5 million. A 40 percent Davis-Bacon premium on $8 to $15 million of labor adds $3.2 to $6 million. A 15 percent PLA premium on top compounds the labor figure further. The honest budget bakes the premium into each subcomponent's price, not into a single contingency line item.

## Driver 5: Independent Safety Assessor and SSO timeline

Safety assurance is the non-negotiable gate for revenue cutover. The Independent Safety Assessor (ISA) — typically a firm such as TÜV SÜD, Ricardo Rail, or RINA — reviews the safety case across the project lifecycle. ISA cost is typically 0.5 to 1.5 percent of the CBTC contract value, with 60 percent of effort during design (months 6 to 18), 30 percent during pre-commissioning testing (months 24 to 30), and 10 percent during operations preparation. An ISA engaged late, after design is locked, is nearly worthless.

State Safety Oversight (SSO) approval, separately, can extend project schedules by 12 to 24 months. The New York State SSOA's review of the L Line CBTC took approximately 18 months and involved quarterly design reviews. Agencies that schedule SSO engagement in the back half of the project, treating it as an approval activity rather than an integrated review, typically encounter schedule slippage that ripples through the entire critical path.

The mitigation is to engage both ISA and SSO from concept stage, build their review milestones into the Master Project Schedule, and budget their fees as a project-overhead line item rather than treating them as soft costs that get squeezed when the budget tightens.

## Driver 6: site-specific data and configuration management

CBTC software has two layers: the generic baseline that the supplier brings to the procurement (the same software that is running on metros in Beijing, Paris, or Toronto), and the site-specific configuration data that adapts that baseline to the agency's track geometry, civil speed restrictions, station platform locations, switch positions, and operational rules. The site-specific data layer is the part that produces the most late-stage integration surprises.

Track design changes after CBTC data finalization have caused delays on multiple US projects. A platform extension, a switch relocation, a signal-aspect change, or a discrepancy between the agency's GIS database and the as-built track configuration can each invalidate weeks of CBTC configuration work. The mitigation is rigorous configuration management of site-specific data from the project's first day, with a Change Control Board that includes the contractor, the agency's signal engineering team, the agency's civil engineering team, and the ISA. CM costs are typically 2 to 4 percent of project budget; agencies that under-invest there pay multiples of that figure in rework.

## Driver 7: training, OPEX ramp, and the year-3 surprise

CBTC OPEX runs higher than legacy signaling OPEX during the first 5 to 10 years of operation, before condition-based maintenance and staff competency mature. Brownfield CBTC deployments typically require 1.2 to 1.6 times the signal maintenance staff of the legacy system during years 1 to 5. Software support and OEM contracts run 8 to 15 percent of original software CAPEX annually. Cybersecurity monitoring under TSA Security Directive 1580 adds $500K to $1.5M annually for a 100 to 300 mile system.

These OPEX figures are not budget overruns in the strict sense — they are the steady-state cost of operating a CBTC system. But agencies that build a budget around the expected long-run OPEX (closer to legacy plus a modest premium) get blindsided by the year-3 financial reality. Honest CAPEX budgets specify the expected 10-year OPEX trajectory and the dual-system parallel-operations costs separately, so the total program cost the board approves matches the total program cost the agency actually pays.

![CBTC OPEX runs higher in years 1 through 10 than legacy signaling, then flattens. Legacy OPEX rises sharply in the final decade. The crossover is the economic case.](/figures/fig_14_01_lifecycle_cost_stack.png)
*<small>CBTC OPEX runs higher in years 1 through 10 than legacy signaling, then flattens. Legacy OPEX rises sharply in the final decade. The crossover is the economic case.</small>*

## Practical takeaways

- Invest the $150K to $400K in a feasibility study before procurement. Most cost overruns trace to scope decisions that should have been made in feasibility but were instead deferred into change orders.
- Specify the cutover strategy in the SOW. Budget for parallel operations as a 10 to 20 percent OPEX premium during the transition, not as a one-time line item.
- Reserve the contractual right to defer cutover at the System Integration Review gate. Schedule pressure overrides engineering judgment otherwise.
- Bake BABA and Davis-Bacon premiums into each subcomponent budget line, not into a single contingency reserve.
- Engage ISA and SSO from concept stage and build their reviews into the Master Project Schedule. Budget 0.5 to 1.5 percent of contract value for ISA.
- Establish rigorous configuration management for site-specific data on day one. Track changes are the single biggest source of late-stage rework.
- Build the year-1 to year-10 OPEX ramp into the program budget that the board approves, with parallel-operations costs called out as a separate line.

## Where to go next

This piece is the field-tested checklist. The full lifecycle treatment lives in Chapter 12 (Project Lifecycle) and Chapter 14 (Lifecycle Costs and Economic Justification) of *Communications-Based Train Control*, Volume 2 ([Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 12 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch12.pdf).

For the procurement-side counterpart, see [CBTC Procurement: Cost Drivers Beyond the Sticker Price](/blog/cbtc-procurement-cost-drivers). For the 30-year financial picture, see [CBTC Lifecycle Cost: A 30-Year Model Walk-Through](/blog/cbtc-lifecycle-cost-30-year-model).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Deployment & Economics*. Independent. ISBN 979-8-258-54295-3. — Chapter 12, "Project Lifecycle"; Chapter 14, "Lifecycle Costs and Economic Justification."
- Federal Transit Administration. *Project Management Oversight Program*. [transit.dot.gov](https://www.transit.dot.gov/)
- Federal Transit Administration. *Build America, Buy America Act Implementation Guidance*. [transit.dot.gov/BuyAmerica](https://www.transit.dot.gov/buyamerica)
- Federal Transit Administration. (2016). *FTA Report No. 0045: Communications-Based Train Control (CBTC) Technology*. [transit.dot.gov](https://www.transit.dot.gov/)
- Bay Area Rapid Transit. *Train Control Modernization Program*. [bart.gov/about/projects/cbtc](https://www.bart.gov/about/projects/cbtc)
- MTA New York City Transit. *Communications-Based Train Control Status Update*. [new.mta.info/project/communications-based-train-control-cbtc](https://new.mta.info/project/communications-based-train-control-cbtc)
- Honolulu Authority for Rapid Transportation. *Skyline Project Overview*. [honolulutransit.org](https://www.honolulutransit.org/)
- Transportation Security Administration. *Security Directive 1580-23-01: Rail Cybersecurity*. [tsa.gov](https://www.tsa.gov/)
