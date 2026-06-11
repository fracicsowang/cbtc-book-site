---
title: "CBTC RAMS Requirements: What to Specify, What to Leave to the Supplier"
slug: cbtc-rams-requirements
description: "How US transit agencies specify Reliability, Availability, Maintainability, and Safety in a Communications-Based Train Control RFP without locking themselves into one vendor's analysis methodology — and where the supplier should be left to engineer."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: procurement
tags: [CBTC, RAMS, EN 50126, reliability, availability, maintainability, safety, US transit, RFP]
primary_keyword: "CBTC RAMS requirements"
secondary_keywords: ["EN 50126 CBTC", "CBTC reliability availability maintainability safety", "MTBF specification CBTC", "CBTC FMEA", "RAMS deliverables CBTC"]
related_chapters: [12, 13]
internal_links: ["/blog/negotiating-performance-guarantees-cbtc", "/blog/cbtc-rfp-vendor-lockin", "/blog/cbtc-scope-of-work-template"]
og_image: "/blog/img/cbtc-rams-requirements.png"
read_time: "10 min"
---

When the New York Metropolitan Transportation Authority (MTA) procured the L Line Communications-Based Train Control (CBTC) system from Siemens beginning in 1999, the Reliability, Availability, Maintainability, and Safety (RAMS) requirements were specified in language a 1990s electrical engineering team would recognize: SIL 4 for vital functions, system availability above 99.5 percent, and Mean Time Between Failures (MTBF) targets at the subsystem level. Twenty-six years later, the language and the standards have evolved — EN 50126-1 has displaced earlier RAMS frameworks across most US transit RFPs, IEC 61508 grounds the SIL allocation, and the FMEA, FTA, and HAZOP techniques manuscript Chapter 12.4 catalogs are now expected deliverables rather than optional analyses. The question every RFP author still faces is the same: which RAMS parameters does the agency specify outright, and which does the agency leave to the supplier to engineer against a performance specification?

## Why RAMS specification is a competitive-leverage decision

A US transit agency drafting a CBTC procurement faces a structural choice on every RAMS parameter. Specify too prescriptively and the agency closes off vendor competition: only suppliers using the agency's chosen methodology can credibly bid. Specify too loosely and the agency cedes the engineering judgment that defines the system's actual reliability and availability profile to the supplier — which means the agency cannot defend the headway or capacity assumptions in the business case during Federal Transit Administration (FTA) Project Management Oversight Contractor (PMOC) review. The procurement art is in deciding which parameters to specify as numerical floors, which to specify as methodology requirements, and which to leave open. This post is for the program manager, procurement attorney, Owner's Engineer, and Independent Safety Assessor (ISA) drafting and reviewing the RAMS section of a CBTC RFP. The depth lives in Chapter 12 (Project Lifecycle) and Chapter 13 (Performance Criteria) of *Communications-Based Train Control*, Volume 2.

## The RAMS framework: EN 50126-1 as the procurement foundation

EN 50126-1 is the European standard that defines the RAMS lifecycle for railway applications. Although the FTA does not formally mandate EN 50126-1, manuscript Chapter 12.3 documents that EN 50126-1 (along with EN 50128 for software and EN 50129 for hardware) is the de facto US reference. Most major US CBTC procurements since the mid-2000s have specified compliance with EN 50126-1 as a procurement floor, and the testing and commissioning phases mapped to the V-Model that Chapter 12.3 describes are aligned with the EN 50126-1 lifecycle.

EN 50126-1 frames RAMS as a lifecycle program, not a single document. The supplier is expected to deliver RAMS analyses at preliminary design, critical design, and pre-Revenue Service Ready (RSR), with each delivery refining the analyses and incorporating data from the prior design phase. A procurement that specifies EN 50126-1 compliance is procuring a methodology and a series of deliverables, not a single MTBF number.

![RAMS is a lifecycle discipline mapped to the V-model. Each deliverable is required at a specific design milestone.](/figures/fig_02_03_v_model_lifecycle.png)
*<small>RAMS is a lifecycle discipline mapped to the V-model. Each deliverable is required at a specific design milestone.</small>*

## Reliability: what to specify, what to leave open

Reliability is the parameter most often misspecified in US CBTC RFPs. The temptation is to specify a single MTBF number — "the Vehicle On-Board Controller (VOBC) shall have an MTBF of at least 50,000 hours" — and treat it as a contractual commitment.

The problem is that MTBF without a defined failure-mode taxonomy and operational profile is unenforceable. A vendor can credibly claim 50,000 hours MTBF using one taxonomy and another vendor 30,000 hours using a stricter taxonomy that counts more event types as failures. The two numbers are not comparable. The agency that specifies only the MTBF number gets neither the reliability the business case depends on nor the ability to compare bids.

Better practice is to specify three things and leave the supplier to engineer the rest. **First**, the failure-mode taxonomy: which events count as failures (vital function loss, service-affecting downtime, latent fault, soft fault). **Second**, the operational profile: the duty cycle, environmental conditions, and operating hours per year against which MTBF is measured. **Third**, the MTBF predictions and field-measured MTBF tolerance: predicted MTBF for each major subsystem at preliminary design, with a defined tolerance (typically 70 to 80 percent of predicted) that field-measured MTBF must achieve over the performance guarantee period.

What to leave to the supplier: the specific reliability allocation across components within a subsystem, the choice of redundancy architecture (2-out-of-2 versus 2-out-of-3, hot standby versus cold standby), and the specific Failure Mode and Effects Analysis (FMEA) methodology — provided the methodology meets EN 50126-1 expectations.

## Availability: specify the calculation, not just the percentage

Manuscript Chapter 13 references availability targets typically in the range of 99.5 to 99.9 percent. As with the companion procurement piece on [Negotiating Performance Guarantees in a CBTC Contract](/blog/negotiating-performance-guarantees-cbtc), the parameter that matters is the calculation method, not the percentage.

The RFP should specify five things on availability. **Boundary**: at the system level, the subsystem level (VOBC, Zone Controller, Data Communication System, Automatic Train Supervision), or per-train level. **Definition**: service-affecting only (downtime that delays revenue trains) versus function-loss (any time a function is unavailable). **Carve-outs**: which planned maintenance windows, force majeure events, and Owner-caused outages are excluded. **Measurement window**: monthly, quarterly, or annual. **Consequence**: which retention or liquidated-damage mechanism applies if the target is missed.

What to leave to the supplier: the redundancy strategy that delivers the specified availability, the sparing strategy, the Mean Time To Restore (MTTR) at the component level, and the maintenance procedure design — provided the supplier delivers a documented Reliability Block Diagram and Availability Analysis at preliminary design that the Owner's Engineer can audit against the specified target.

## Maintainability: specify access, leave the procedures open

Maintainability is the parameter most useful to specify in operational rather than analytical terms. The agency lives with the maintenance burden for 30 years; the supplier engineers around what the agency specifies as accessible.

Specify three operational requirements. **First**, MTTR targets at the line-replaceable unit level: 30 minutes for in-cab VOBC modules, 4 hours for wayside Zone Controller modules, 24 hours for major subsystem replacement. **Second**, diagnostic access: every safety-critical and service-critical fault shall be identifiable through a documented diagnostic procedure executable by an agency maintenance technician without supplier remote support. **Third**, sparing strategy: the supplier shall deliver a recommended spares list at critical design with quantities sized to defined target service levels, and the agency reserves the right to procure spares from third-party suppliers upon supplier validation.

Leave to the supplier: the specific failure detection and fault isolation algorithms, the diagnostic tooling design, and the maintenance procedure documentation — provided the deliverables align with the agency-specified MTTR, diagnostic access, and sparing requirements.

## Safety: where the agency must specify, and where it cannot

Safety is the parameter where the agency has the least flexibility and the most need for specification rigor. Manuscript Chapter 12.4 identifies that vital CBTC functions — Movement Authority calculation, brake intervention enforcement, train position validation, on-board safety logic — are almost always Safety Integrity Level 4 (SIL 4) per EN 50129, with a Tolerable Hazard Rate (THR) of 10⁻⁹ per hour. Less critical functions are SIL 1 or non-vital.

The RFP should specify five safety requirements. **First**, SIL allocation per function: which functions require SIL 4, which require SIL 3 or below, and which are non-vital. **Second**, THR allocation methodology: how the system-level safety target (typically expressed as collision frequency or hazard frequency per train-kilometer) is allocated across CBTC subsystems and external system contributions. **Third**, the hazard analysis techniques required at each design milestone: Preliminary Hazard Analysis at concept, System Hazard Analysis and FMEA at preliminary design, Fault Tree Analysis and HAZOP at critical design, Operational and Support Hazard Analysis pre-RSR. **Fourth**, the Independent Safety Assessor (ISA) requirements: contractual independence, technical independence, scope of review, and authority to block transitions. **Fifth**, the Safety Case structure: Generic Safety Case, Applicable Safety Case, and Operational Safety Case as defined in EN 50129.

What the agency cannot specify: the supplier's specific safety architecture, the diverse software implementation strategy, or the proprietary safety algorithms that distinguish vendors. Those are the supplier's engineering judgment, validated by the ISA against the agency-specified SIL allocation and hazard analyses.

## RAMS deliverables and the procurement schedule

Manuscript Chapter 12.4 documents that ISA cost is typically 0.5 to 1.5 percent of contract value, with 60 percent of effort during design (months 6 to 18), 30 percent during pre-commissioning testing (months 24 to 30), and 10 percent during operations preparation. The RAMS deliverable schedule mirrors this pattern.

A defensible RAMS deliverable schedule for a US brownfield CBTC project specifies: Preliminary Hazard Analysis and RAMS Plan at month 3 to 6; System Hazard Analysis and FMEA at preliminary design (month 9 to 12); Fault Tree Analysis, HAZOP, RAMS predictions, and Safety Case Generic at critical design (month 15 to 18); Operational and Support Hazard Analysis, Reliability Block Diagram, Availability Analysis, and Safety Case Applicable at pre-RSR (month 30 to 36); and Safety Case Operational, field-measured MTBF and availability data, and updated FMEA in the 12 to 24 months after RSR.

Each deliverable should be a contract milestone with payment release tied to ISA acceptance. RAMS deliverables that are not tied to milestones become best-effort documents; deliverables tied to milestones become engineering commitments.

![RAMS deliverables tied to milestones with ISA acceptance gates produce engineering commitments. RAMS without milestone linkage produces best-effort documents.](/figures/fig_12_04_safety_case_structure.png)
*<small>RAMS deliverables tied to milestones with ISA acceptance gates produce engineering commitments. RAMS without milestone linkage produces best-effort documents.</small>*

## What to specify, what to leave to the supplier: the summary table

| RAMS dimension | Specify in the RFP | Leave to the supplier |
|---|---|---|
| Reliability | Failure-mode taxonomy; operational profile; MTBF predictions and field tolerance; FMEA delivery milestones | Specific component reliability allocation; redundancy architecture choice; diverse software implementation |
| Availability | Boundary, definition, carve-outs, measurement window, consequence | Redundancy strategy; sparing strategy; component MTTR; maintenance procedure design |
| Maintainability | MTTR targets at LRU level; diagnostic access requirement; sparing strategy structure | Fault detection algorithms; diagnostic tooling design; maintenance procedure documentation |
| Safety | SIL allocation per function; THR allocation methodology; hazard analysis techniques per milestone; ISA requirements; Safety Case structure | Safety architecture; diverse software implementation; proprietary safety algorithms |

The procurement leverage the agency preserves with this division: comparable bids on the parameters that matter most to the business case, while leaving the engineering judgment that distinguishes vendors as the dimension where they actually compete. The agency that specifies everything down to the redundancy architecture has eliminated competition; the agency that specifies nothing has accepted whatever reliability the lowest-cost bidder can engineer. The middle is where defensible procurement happens.

## Practical takeaways

- Specify EN 50126-1 compliance as the procurement floor; require RAMS deliverables at preliminary design, critical design, and pre-RSR milestones with ISA acceptance gates.
- On reliability, specify failure-mode taxonomy and operational profile alongside any MTBF numerical target. MTBF without taxonomy and profile is not enforceable.
- On availability, specify boundary, definition, carve-outs, measurement window, and consequence. The 99.5 percent target produces 10x different downtime tolerances depending on these parameters.
- On maintainability, specify operational requirements (MTTR at LRU level, diagnostic access, sparing strategy structure). Leave the supplier to engineer the procedures and tooling.
- On safety, specify SIL allocation, THR methodology, hazard analysis techniques per milestone, ISA scope, and Safety Case structure. Do not specify the safety architecture; let the ISA validate the supplier's architecture against the specified targets.

## Where to go next

This post is a 10-minute RAMS specification primer. The full safety assurance and performance criteria treatment lives in Chapter 12 (Project Lifecycle) and Chapter 13 (Performance Criteria) of *Communications-Based Train Control* ([Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 12 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch12.pdf) for the safety case and ISA framework.

For the contract negotiation that converts RAMS specifications into enforceable performance guarantees, see [Negotiating Performance Guarantees in a CBTC Contract](/blog/negotiating-performance-guarantees-cbtc). For the broader RFP architecture that the RAMS section sits within, see [How to Write a CBTC RFP That Doesn't Lock You Into One Vendor](/blog/cbtc-rfp-vendor-lockin).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Deployment & Economics*. Independent. ISBN 979-8-258-54295-3. — Chapter 12, "Project Lifecycle," sections 12.3 and 12.4.
- Wang, C. (2026). *Communications-Based Train Control, Volume 1: Foundations & Technical Architecture*. Independent. ISBN 979-8-258-54295-3. — Chapter 13, "Performance Criteria."
- CENELEC. *EN 50126-1: Railway applications — The Specification and Demonstration of Reliability, Availability, Maintainability and Safety (RAMS), Part 1: Generic RAMS Process*.
- CENELEC. *EN 50128: Railway applications — Communication, signalling and processing systems — Software for railway control and protection systems*.
- CENELEC. *EN 50129: Railway applications — Safety related electronic systems for signalling*.
- International Electrotechnical Commission. *IEC 61508: Functional Safety of Electrical/Electronic/Programmable Electronic Safety-related Systems*.
- IEEE Standards Association. *IEEE Std 1474.1: Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- Federal Transit Administration. *State Safety Oversight Program*. [transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight](https://www.transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight)
