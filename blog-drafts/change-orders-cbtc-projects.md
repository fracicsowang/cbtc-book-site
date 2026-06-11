---
title: "Change Orders on CBTC Projects: Why They Happen, How to Bound Them"
slug: change-orders-cbtc-projects
description: "Why Communications-Based Train Control contracts grow 15 to 30 percent through change orders — and the contract, configuration management, and design-review mechanisms that bound the growth."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: procurement
tags: [CBTC, change orders, contract, configuration management, US transit, project management]
primary_keyword: "CBTC change orders"
secondary_keywords: ["CBTC contract changes", "CBTC scope creep", "CBTC engineering change request", "CBTC site data CM", "transit signaling change orders"]
related_chapters: [12, 14]
internal_links: ["/blog/cbtc-projects-over-budget", "/blog/cbtc-scope-of-work-template", "/blog/negotiating-performance-guarantees-cbtc"]
og_image: "/blog/img/change-orders-cbtc-projects.png"
read_time: "10 min"
---

The Bay Area Rapid Transit (BART) Train Control Modernization Program (TCMP) was awarded to Hitachi Rail STS in January 2020 at approximately $798 million on a Design-Build basis. The contract carried liquidated damages of $150,000 per calendar day for missing Revenue Service Ready, capped at $50 million. As of multiple program updates since, the original $798 million has been escalated by change orders accompanying scope adjustments, schedule extensions, and integration discoveries — a pattern manuscript Chapter 12.6 documents and that is consistent with how Communications-Based Train Control (CBTC) contracts behave on US brownfield retrofits. Change orders are the mechanism by which a fixed-price contract absorbs the difference between what the parties knew at contract execution and what they discover during execution. They are not pathological. Uncontained, they are how a $500 million project becomes a $700 million project.

## Why change orders are the procurement attorney's longest conversation

A typical US brownfield CBTC project absorbs 15 to 30 percent change-order growth against original contract value. The growth is not equally distributed: a small number of high-value change orders typically account for the majority of the dollar growth, while a larger number of routine change orders account for the schedule erosion. The change-order mechanism is also the single most common source of post-project disputes between the agency, the vendor, and the Federal Transit Administration (FTA) Project Management Oversight Contractor (PMOC). This article is for the program manager, deputy general manager for capital, contract attorney, and Owner's Engineer who must allocate change-order risk before contract execution and govern change-order process during execution. Depth lives in Chapter 12 of *Communications-Based Train Control*, Volume 2.

## Where change orders come from: six recurring categories

Manuscript Chapter 12 and US procurement experience identify six recurring change-order categories. Naming them at contract execution is the first step toward bounding them.

The first category is **site data and configuration management failures**. Manuscript Chapter 12.3 references how track design changes after CBTC data finalization have caused delays on multiple US projects. If the agency provides the integrator with civil track geometry, switch positions, and grade profiles that diverge from what the integrator finds during site walks and dynamic testing, every divergence becomes a change order. Site data CM is often overlooked during procurement and emerges as a top change-order driver during site integration testing.

The second category is **legacy interlocking and signaling interface discoveries**. The CBTC vendor designs to the legacy interlocking specification the agency provides. If the actual interlocking has undocumented modifications, custom relay logic, or maintenance-driven configuration drift, the integration work the vendor priced is not the integration work the project actually requires. Change orders absorb the gap.

The third category is **rolling stock interface discoveries**. The Vehicle On-Board Controller (VOBC) is designed against a published rolling-stock interface specification. Real fleets have car-by-car variation: traction inverter versions, brake control evolution, door system retrofits, cab geometry differences. The agency that procured CBTC against an idealized fleet specification finds that fleet retrofit takes longer and costs more on a per-car basis than the proposal assumed.

The fourth category is **specification changes from the agency**. Operational planning evolves over a 5 to 8 year project. New service patterns, modified dwell-time targets, additional grade-crossing requirements, or revised cybersecurity standards arrive after the contract is executed. These changes are legitimate; they are still change orders.

The fifth category is **regulatory and standards updates**. The Build America, Buy America (BABA) implementation guidance has evolved. State Safety Oversight (SSO) requirements have evolved. The IEC 62443 cybersecurity standard application to CBTC is still maturing. A standards update mid-project is a change order if the contract did not foresee it.

The sixth category is **construction interface and schedule conflicts**. Civil construction packages, traction power upgrades, station modernization, and platform-edge work all interact with CBTC installation. A delay in the platform edge package that pushes back CBTC installation creates standby costs that the CBTC contract absorbs through change orders.

[FIGURE: Change-order taxonomy showing the six recurring categories with typical dollar magnitude (small, medium, large) and typical timing (design phase, site integration, dynamic testing, post-RSR).
Source: new figure to be generated.
Caption: "Change orders cluster into six recurring categories. Naming them at contract execution is the first step toward bounding them."]

## How change orders compound: the schedule mechanic

Change orders do not just add cost. They add schedule, and the schedule cost compounds. Manuscript Chapter 12.5 references that Testing and Commissioning typically consumes 25 to 35 percent of project schedule and is the single most common target of schedule compression. A change order that adds two months of design work and one month of integration retesting often adds three months to the critical path, not three.

The mechanic is straightforward. CBTC integration testing depends on weekend track-access windows that are scheduled 12 to 18 months in advance. A two-month design-phase change order does not just push the design two months; it can push the entire site integration testing campaign into a different season, with different weather, different track-access patterns, and different revenue-service constraints. The schedule extension is rarely linear with the change-order scope.

The cost of schedule extension is not just the cost of running the project longer. It is also the standby cost of contractor staff held on assignment, the ongoing Owner's Engineer fees, the Independent Safety Assessor (ISA) re-engagement, and the deferred benefit-side revenue from delayed Revenue Service Ready. A 12-month schedule extension on a $500 million project commonly carries $30 million to $60 million of standby and deferred-benefit cost — a number that does not appear on the change-order itself but does appear in the agency's all-in delivered cost.

## The configuration management discipline that bounds change orders

Manuscript Chapter 12.3 names Configuration Management (CM) as the discipline that prevents site-data drift, rolling-stock interface drift, and specification drift from becoming change orders. Three CM mechanisms matter most.

First, **bidirectional requirements traceability**. Tools like IBM DOORS, Jama, or Polarion link every system requirement to the higher-level requirement it implements and to the lower-level component requirement it decomposes into. When a stakeholder requirement changes — a new dwell-time target, for example — the traceability tool surfaces every component requirement that depends on it. The agency negotiating a change order with full traceability knows exactly what scope and engineering hours the change requires; the agency without traceability negotiates against the vendor's estimate.

Second, **Interface Control Document (ICD) ownership and version control**. Manuscript Chapter 12.3 references that lack of clear ICDs is a frequent source of late integration issues. ICDs are the formal contract between subsystems. ICDs that are versioned, change-controlled, and signed by both parties at design milestones make interface drift visible early; ICDs that exist as informal documents make interface drift invisible until site integration testing exposes it as a change order.

Third, **site-specific data CM**. Track geometry data, switch positions, grade profiles, balise locations, and station-stopping coordinates are the site-specific data the CBTC system depends on. Manuscript Chapter 12.3 calls site-specific data CM "often overlooked and a significant source of late-stage issues." The CM discipline is unglamorous: maintain a master site-data baseline, version every change, route every change through a Change Control Board, and audit the integrator's data against the baseline before each design milestone. Done well, site-data CM eliminates the largest single change-order category. Done poorly, it generates change orders through the entire site integration testing window.

## The Change Control Board: governance that bounds change-order scope

The Change Control Board (CCB) is the governance body that reviews proposed Engineering Change Requests (ECRs), assesses impact, and approves or rejects each change. Manuscript Chapter 12.3 documents that effective CCB membership includes the Owner, the prime contractor, the integrator, the safety engineer, and the project manager.

The CCB's discipline is to ask three questions on every ECR: what is the technical justification, what is the cost and schedule impact, and what is the safety impact? An ECR that lacks any of the three should not be approved. An ECR that has all three documented and signed becomes the basis for a change order with defensible scope.

The most common CCB failure modes are identifiable in advance. The CCB that rubber-stamps every vendor-initiated ECR is not governing; it is recording. The CCB that lacks safety-engineer participation approves changes whose safety impact is unassessed; those changes resurface during the safety-case review with retrofit cost. The CCB that meets monthly when changes are arriving weekly creates a backlog that the project absorbs as contingency.

A high-functioning CCB meets weekly during integration phases, has a documented rule set for emergency changes that can be approved between meetings, and reports change-order cumulative dollar value to the agency executive sponsor monthly. The cumulative number is the discipline: when the CCB sees a $40 million change-order total at month 18 against a $500 million contract, it is at 8 percent against a typical 15 to 30 percent industry pattern, and it knows what discipline the next 36 months require.

## Pricing change orders: not-to-exceed, time-and-material, or fixed

Each individual change order has its own commercial structure. The three patterns US agencies use are fixed-price, not-to-exceed, and time-and-material.

**Fixed-price** change orders work when the scope is well-defined: a specific software change, a documented interface modification, a discrete additional balise installation. The vendor accepts the cost risk; the agency accepts the schedule risk if the change extends. Fixed-price change orders are preferable when scope is bounded and the vendor has data to price the work.

**Not-to-exceed (NTE)** change orders cap vendor billing at a defined ceiling. If the vendor delivers under the cap, the agency pays the actual cost. If the vendor exceeds the cap, the vendor absorbs the overrun. NTE works for moderately defined scopes where the vendor cannot price firmly but the agency wants exposure capped.

**Time-and-material (T&M)** change orders bill at agreed labor rates and pass through material cost. T&M is appropriate for genuinely exploratory scope — a discovery during integration testing, a forensics investigation of an intermittent failure — where neither party can credibly price the work. T&M without a cap is the riskiest structure for the agency; T&M with a cap is functionally an NTE.

The CCB should specify the pricing structure for each ECR, document the rationale, and audit completed change orders against initial pricing assumptions. Patterns of fixed-price change orders that systematically run under their fixed price suggest the vendor is pricing for risk; patterns of NTE change orders that systematically reach the cap suggest the cap is too generous or the scope was too narrow.

[FIGURE: Change-order pricing decision tree showing scope-clarity axis vs. risk-allocation axis, with fixed-price, NTE, and T&M positioned in the appropriate quadrants.
Source: new figure to be generated.
Caption: "Pricing structure should match scope clarity. Fixed-price for bounded scope; NTE for moderately defined scope; T&M with caps for genuinely exploratory scope."]

## The contractual mechanisms that bound change-order growth

Three contractual mechanisms used together typically bound change-order growth in the 8 to 15 percent range, well below the industry-typical 15 to 30 percent.

The first is **a defined change-order budget allowance** in the original contract — typically 10 to 15 percent of base contract value — with a documented process for authorization within and beyond the allowance. This puts the agency's exposure on the table at the start of the project and creates a structural incentive to govern within the allowance.

The second is **a formal scope-of-work appendix that names the categories the vendor's bid does and does not cover**. (For the structure, see [CBTC Scope of Work: A Template for US Transit Agencies](/blog/cbtc-scope-of-work-template).) Categories the bid covers cannot be re-priced as change orders. Categories the bid does not cover are explicit; the agency knows where to budget contingency.

The third is **performance guarantees that reduce the post-RSR change-order incentive**. (For the structure, see [Negotiating Performance Guarantees in a CBTC Contract](/blog/negotiating-performance-guarantees-cbtc).) When 24 months of retention sit at risk against availability and headway demonstration, the vendor has a strong incentive to address the underlying issues during integration rather than negotiating change orders to defer them.

## Practical takeaways

- Name the six recurring change-order categories at contract execution: site data and CM failures, legacy interlocking discoveries, rolling stock interface discoveries, agency specification changes, regulatory updates, construction interface conflicts. Allocate contingency by category.
- Treat configuration management as a procurement deliverable, not a project-management afterthought. Bidirectional requirements traceability, ICD version control, and site-specific data CM together bound the largest change-order categories.
- Stand up a Change Control Board with documented membership, weekly cadence during integration phases, and monthly cumulative reporting to the agency executive sponsor. The CCB is the governance structure; without it, change orders cluster at the worst possible time.
- Specify pricing structure on each Engineering Change Request: fixed-price for bounded scope, not-to-exceed for moderately defined scope, time-and-material with caps for exploratory scope. Audit the structures against actual change-order outcomes.
- Set a defined change-order budget allowance in the original contract — 10 to 15 percent of base contract value — and govern against the allowance rather than absorbing growth one ECR at a time.

## Where to go next

This post is a 10-minute change-order primer. The full project lifecycle treatment lives in Chapter 12 of *Communications-Based Train Control*, Volume 2: Operations, Deployment & Economics ([Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 12 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch12.pdf) for the systems engineering and configuration management framework.

For the systematic look at how change orders accumulate into 30+ percent overruns, see [Why CBTC Projects Run 30%+ Over Budget — and How to Prevent It](/blog/cbtc-projects-over-budget). For the scope-of-work structure that bounds change-order categories, see [CBTC Scope of Work: A Template for US Transit Agencies](/blog/cbtc-scope-of-work-template).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Deployment & Economics*. Independent. ISBN 979-8-258-54295-3. — Chapter 12, "Project Lifecycle," sections 12.3 and 12.5.
- IEEE Standards Association. *IEEE Std 1474.1: Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- CENELEC. *EN 50126-1: Railway applications — The Specification and Demonstration of Reliability, Availability, Maintainability and Safety (RAMS)*.
- Federal Transit Administration. *Project Management Oversight Program*. [transit.dot.gov/funding/grant-programs/capital-investments/project-management-oversight](https://www.transit.dot.gov/)
- Federal Transit Administration. *Build America, Buy America Act Implementation Guidance*. [transit.dot.gov/BuyAmerica](https://www.transit.dot.gov/buyamerica)
- Bay Area Rapid Transit. *Train Control Modernization Program*. [bart.gov/about/projects/cbtc](https://www.bart.gov/about/projects/cbtc)
- MTA New York City Transit. *Communications-Based Train Control Status Update*. [new.mta.info/project/communications-based-train-control-cbtc](https://new.mta.info/project/communications-based-train-control-cbtc)
