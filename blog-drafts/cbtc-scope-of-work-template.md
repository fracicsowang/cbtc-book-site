---
title: "CBTC Scope of Work: A Template for US Transit Agencies"
slug: cbtc-scope-of-work-template
description: "A working CBTC scope-of-work outline for US transit agencies, with the section structure, deliverables, and specifying language an FTA-fundable procurement actually needs."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: procurement
tags: [CBTC, scope of work, RFP, procurement, US transit, FTA, IEEE 1474]
primary_keyword: "CBTC scope of work"
secondary_keywords: ["CBTC SOW template", "CBTC RFP technical specification", "CBTC procurement specification", "CBTC functional requirements", "FTA CBTC procurement"]
related_chapters: [2, 12, 15]
internal_links: ["/blog/cbtc-rfp-vendor-lockin", "/blog/evaluating-cbtc-bids-12-criteria", "/blog/cbtc-procurement-cost-drivers"]
og_image: "/blog/img/cbtc-scope-of-work-template.png"
read_time: "11 min"
---

A US transit agency drafting a Communications-Based Train Control (CBTC) Request for Proposals does not start with a blank page. The structure is close to fixed, the deliverables are largely standardized by IEEE 1474 and Federal Transit Administration (FTA) practice, and the boundary disputes are predictable. What varies is the engineering specificity each agency brings to the technical sections — and the contractual fences it builds around them. This article lays out a working scope-of-work outline that has held up across recent US procurements, identifies the sections where specifying language matters most, and flags the sections where agencies habitually under-invest. It is not legal advice, and it is not a downloadable template that fits every agency. It is a checklist that experienced procurement teams use as a self-audit before publishing.

## Why a CBTC SOW deserves its own architecture

Most public-procurement scopes of work follow a generic body: definitions, scope, deliverables, schedule, acceptance, warranty. A CBTC scope of work cannot. The system spans onboard equipment installed across an aging fleet, wayside infrastructure embedded in a brownfield right-of-way, central supervision integrated with legacy operations control, and a multi-year cutover executed during nights and weekends with paying passengers on board the day before. Each of those work streams has its own deliverables, acceptance gates, and interface documentation. A scope of work that treats CBTC as one undifferentiated system invites change orders that average 15 to 25 percent of contract value over the project lifecycle. A scope that decomposes the system the way the V-Model engineering plan and the Independent Safety Assessor will eventually decompose it — onboard, wayside, communication, central, integration, testing, cutover — produces a procurement that bidders can price honestly and the agency can manage. This piece is for the program manager and the procurement attorney drafting the document together. It assumes familiarity with the [IEEE 1474 framework](/blog/what-is-cbtc-2026-guide) and the [vendor landscape](/blog/cbtc-rfp-vendor-lockin).

## Section 1: Definitions and acronyms

Trivial in appearance, decisive in disputes. The definitions section establishes the agency's preferred terminology — VOBC versus OBCU, Zone Controller versus Radio Block Controller, Movement Authority versus Limit of Movement Authority — and binds the contractor to use those terms consistently across all submittals. Reference IEEE 1474.1 and IEC 62290-1 explicitly. State that where a term is defined in both the agency's glossary and an industry standard, the agency's definition governs for contract-interpretation purposes but the standard applies for technical performance. This sentence alone has saved several agencies several million dollars in change-order disputes.

## Section 2: Project description and scope boundary

The scope-boundary section is the part of the SOW that change orders attack first. It must answer four questions in writing.

What route-mileage is included, station by station, with track diagrams attached as appendices.

What rolling stock is included, train type by train type, with car counts, age, and prior modification history.

What civil and structural work is in scope, including any required tunnel modifications, station platform adjustments, antenna mounting, or cable-tray installations — and which civil work is explicitly out of scope and will be performed by others under separate contracts.

What legacy systems remain in service during and after cutover, including any signaling, interlocking, communications, power, or operational subsystems with which the CBTC system must interface.

The fourth question is the one most often shortchanged. A brownfield CBTC retrofit is not just about the new system; it is about the legacy system the new system has to coexist with for the duration of the cutover. Agencies that under-specify legacy interface scope discover, twelve months into design, that they own a major systems-integration problem they had assumed the contractor would solve.

[FIGURE: Annotated track schematic showing in-scope route, out-of-scope yard segments, interface boundaries with legacy interlockings, and station-platform modifications, color-coded by responsible party.
Source: new figure to be generated.
Caption: "A scope-boundary diagram drawn into the SOW prevents 60 percent of the boundary disputes that drive CBTC change orders."]

## Section 3: Functional and performance requirements

This is the heart of the SOW. Reference IEEE 1474.1 as the procurement floor and write each performance requirement in measurable terms. A useful template structure:

**Capacity and headway**: minimum sustainable trains per hour per direction at peak; minimum sustainable headway under defined operational scenarios; minimum dwell time the system must support without capacity degradation.

**Safety**: SIL 4 certification per IEC 61508 for vital functions; SIL allocation by function; tolerable hazard rate at the system level.

**Localization**: required position accuracy and confidence bound; balise spacing constraints; speed and slip/slide tolerance.

**Communication**: minimum availability of the data communication system; maximum end-to-end latency for Movement Authority delivery; recovery time after radio link loss.

**Interface to legacy systems**: protocols, signal levels, fault-handling behavior, and acceptance criteria for each named legacy interface.

**Operating modes**: required behavior in normal, restricted, manual, and degraded modes per Chapter 9-style operating-mode taxonomy.

**Cybersecurity**: alignment with Transportation Security Administration (TSA) Security Directive 1580 and NIST SP 800-82 Rev. 3; specified attack-surface boundaries; required incident-response capabilities.

Each requirement gets a unique identifier, a verification method (analysis, inspection, demonstration, test), and a traceability link to a downstream test case. The agency's Program Management Consultant will eventually maintain a Requirements Traceability Matrix linking every one of these to a verification record. The SOW should require the contractor to support that traceability throughout design and testing, and to deliver a final compliance matrix at acceptance.

## Section 4: Deliverables and design reviews

A US CBTC project has a predictable cadence of design and engineering deliverables. The SOW should enumerate them by name, by phase, and by acceptance criterion. The minimum set:

**Concept of Operations (CONOPS)** — the operational scenarios the system must support, signed by the agency before detailed design begins.

**System Requirements Specification** — the IEEE 1474.1-aligned functional and performance requirements, traced to the CONOPS.

**System Architecture and Allocation** — how the contractor allocates requirements to onboard, wayside, central, and communication subsystems.

**Interface Control Documents** — one per subsystem boundary, per the agency's enumerated list (see [How to Write a CBTC RFP That Doesn't Lock You Into One Vendor](/blog/cbtc-rfp-vendor-lockin) for the standard list).

**Preliminary Design Review (PDR)** package and **Critical Design Review (CDR)** package — with formally documented review minutes, action items, and resolutions.

**Safety Plan, Hazard Log, FMEA, FTA, HAZOP, and Safety Case Report** — each with explicit Independent Safety Assessor (ISA) review milestones.

**Test Plans, Test Procedures, and Test Reports** — for Factory Acceptance Test (FAT), Site Integration Test (SIT), Dynamic Testing, Shadow Running, Parallel Operations, and Revenue Service Demonstration.

**Configuration Management Plan, Cybersecurity Plan, Training Plan, and O&M Documentation Set**.

For each deliverable, specify the format (editable file types, not PDFs only), the review and approval timeline (typically 30 to 45 days for major submittals), and the consequences of late delivery (typically liquidated damages keyed to milestone-payment hold-back, not termination).

## Section 5: Testing and commissioning

Testing is the most consistently underestimated section of a CBTC scope of work. A useful structure follows the V-Model phases and ties each phase to a measurable exit criterion.

**Factory Acceptance Testing (FAT)** at the vendor's lab: 6 to 12 weeks, with the agency's signal engineering team and Program Management Consultant in attendance. Functional coverage of the generic baseline at 60 to 90 percent, with documented test results and pre-agreed acceptance criteria signed before test execution begins.

**Site Integration Testing (SIT)** on the agency's track: typically 12 to 20 weekends on a mid-size line, scoped against legacy interlocking, power supply, Track-side Interface Unit, and ATS integration. The SOW should explicitly specify the work-window definition (Friday evening to Monday morning; nights only; full-line shutdown weekends) and which party is responsible for track access, work zone protection, and revenue-service restoration.

**Dynamic Testing** with non-revenue trains: 4 to 8 weeks for a mid-size line, structured as static, low-speed linear, multi-zone, high-speed, multi-train, emergency, and degraded-mode scenarios.

**Shadow Running**: industry practice for US brownfield deployments is 6 to 12 months. Specify the data-collection and reporting cadence, the criteria for promoting to Parallel Operations, and the agency's right to extend Shadow Running based on observed defect rates.

**Parallel Operations and Revenue Service Demonstration**: typically 2 to 8 weeks for Parallel Operations and 2 to 4 weeks for RSD, again with specified entry and exit criteria.

The testing section also specifies the FTA Project Management Oversight Contractor (PMOC) System Integration Review (SIR) gate — a go/no-go decision point before revenue cutover — and binds the contractor to support the PMOC review.

[FIGURE: Side-by-side comparison of testing-phase scope and duration on an under-specified SOW (FAT, SIT, integration, RSD lumped into "Testing") versus a properly decomposed SOW (FAT, SIT, Dynamic, Shadow, Parallel, RSD as distinct phases with separate exit criteria).
Source: new figure to be generated.
Caption: "Decomposing testing into V-Model phases at the SOW stage prevents schedule compression that 'Testing' as a single line item invites."]

## Section 6: Cutover and revenue service entry

Cutover is the highest-risk event in the entire project lifecycle, and the SOW is the place to establish which strategy the agency intends — Big Bang, phased segment, fleet-phased, or function-phased — and what each requires of the contractor. Recent US brownfield deployments overwhelmingly use phased-segment cutover; greenfield lines such as Honolulu Skyline have used Big Bang. The L Line (Canarsie) used a phased-segment approach with 3 to 4 day weekend and holiday closures; BART's Train Control Modernization Program plans a fleet-phased rollout over multiple years.

The cutover section binds the contractor to supply a Cutover Plan as a contract deliverable, with rehearsal procedures, rollback procedures, communication protocols, and operational coordination plans. It also specifies the agency's right to defer cutover at the SIR gate based on objective criteria — defect counts, shadow-running anomaly rates, training completion percentages — without contractual penalty to the agency.

## Section 7: Buy America, training, and O&M handover

Three sections that frequently appear at the back of an SOW deserve more attention than they typically get.

**Buy America / BABA compliance** requires a detailed compliance plan with line-item domestic content percentages, US assembly and component sourcing documentation, and the agency's right to audit supplier invoices throughout the contract. The 70 percent manufactured-product threshold and 90 percent steel-and-iron threshold are both binding for FTA-funded projects.

**Training** binds the contractor to deliver classroom and on-the-job training for operators (20 to 40 classroom hours plus 30 to 60 on-the-job hours), controllers and dispatchers (30 to 50 classroom hours, 20 to 40 simulator hours), maintenance technicians (40 to 80 hours classroom and hands-on), and management awareness (4 to 8 hours). It specifies course curricula, instructor qualifications, simulator availability, and refresher training cadence.

**O&M handover and warranty** typically extends 2 to 3 years post-Revenue Service Ready, with 3 to 5 percent of contract value held in retention against availability, MTBF, and MTTR performance targets. The SOW should specify the warranty performance targets in measurable terms and the cure-period and retention-claim procedures.

## What to leave out (deliberately)

Two categories of content do not belong in the SOW. **Vendor product specifics** — model numbers, processor part numbers, brand-name protocol stacks — bias the procurement and undermine the performance-based specification. **Operations philosophy details** that the contractor has no visibility into — internal labor agreements, agency-internal change-management procedures, inter-departmental escalation paths — belong in the agency's project management plan, not in the contract that binds the supplier.

A good rule: the SOW should specify what the system does and what evidence the agency will accept that it does it. Anything more is procurement creep.

## Practical takeaways

- Decompose the SOW the way the V-Model and the Independent Safety Assessor will eventually decompose the project: onboard, wayside, communication, central, integration, testing, cutover.
- Define the scope boundary in writing with track diagrams and station-by-station schedules. Specify in-scope, out-of-scope, and legacy-interface work explicitly.
- Write performance requirements with unique identifiers, measurable acceptance criteria, and verification methods. IEEE 1474 is the floor.
- Enumerate every deliverable and design review by name. Format (editable), review timeline (30 to 45 days for major submittals), and late-delivery consequences (milestone-payment hold-back) all in the SOW.
- Decompose testing into V-Model phases (FAT, SIT, Dynamic, Shadow, Parallel, RSD) with phase-by-phase exit criteria. Bind the contractor to the FTA PMOC System Integration Review gate.
- Specify the cutover strategy and rights to defer cutover at the SIR gate. Big Bang for greenfield, phased for brownfield, almost always.
- Treat Buy America, training, and warranty O&M as full SOW sections, not back-of-document boilerplate.

## Where to go next

This article is a template walk-through. Chapter 12 of *Communications-Based Train Control*, Volume 2: Operations, Deployment & Economics ([Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)) treats each phase in detail with US case-study references. [Download Chapter 12 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch12.pdf).

For the bid-evaluation rubric that the SOW supports, see [Evaluating CBTC Bids: The 12 Criteria That Matter](/blog/evaluating-cbtc-bids-12-criteria). For the contract-side counterpart on vendor lock-in, see [How to Write a CBTC RFP That Doesn't Lock You Into One Vendor](/blog/cbtc-rfp-vendor-lockin).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Deployment & Economics*. Independent. ISBN 979-8-258-54295-3. — Chapter 12, "Project Lifecycle"; Chapter 14, "Lifecycle Costs and Economic Justification."
- IEEE Standards Association. *IEEE Std 1474.1, 1474.2, 1474.3, 1474.4: Communications-Based Train Control Standards*.
- Federal Transit Administration. (2016). *FTA Report No. 0045: Communications-Based Train Control (CBTC) Technology*. [transit.dot.gov](https://www.transit.dot.gov/)
- Federal Transit Administration. *Project Management Oversight Program*. [transit.dot.gov/regulations-and-guidance/safety/project-management-oversight](https://www.transit.dot.gov/)
- Federal Transit Administration. *Build America, Buy America Act Implementation Guidance*. [transit.dot.gov/BuyAmerica](https://www.transit.dot.gov/buyamerica)
- International Electrotechnical Commission. *IEC 62290-1: Railway applications — Urban guided transport management and command/control systems*.
- Bay Area Rapid Transit. *Train Control Modernization Program*. [bart.gov/about/projects/cbtc](https://www.bart.gov/about/projects/cbtc)
- Honolulu Authority for Rapid Transportation. *Skyline Project Overview*. [honolulutransit.org](https://www.honolulutransit.org/)
