---
title: "How to Write a CBTC RFP That Doesn't Lock You Into One Vendor"
slug: cbtc-rfp-vendor-lockin
description: "A practical framework for US transit agencies drafting a Communications-Based Train Control procurement that preserves competition for the next 30 years. Drawn from twenty years of US deployment experience."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: procurement
tags: [CBTC, RFP, procurement, vendor neutrality, US transit, IEEE 1474, BABA]
primary_keyword: "CBTC RFP"
secondary_keywords: ["CBTC procurement", "vendor lock-in CBTC", "supplier-agnostic CBTC specification", "CBTC scope of work", "open architecture CBTC"]
related_chapters: [12, 14, 15]
internal_links: ["/blog/cbtc-scope-of-work-template", "/blog/evaluating-cbtc-bids-12-criteria", "/blog/hidden-cost-of-cbtc-vendor-lockin"]
og_image: "/blog/img/cbtc-rfp-vendor-lockin.png"
read_time: "10 min"
---

In 2018, when San Francisco's Municipal Transportation Agency began drafting the Train Control Upgrade Project specification for its Muni Metro, the procurement team faced a question every major US transit agency now asks: how does a buyer write a Communications-Based Train Control (CBTC) Request for Proposals that preserves the option to bring in a second supplier — for a future line extension, a midlife refresh, or a competitive maintenance bid — twenty years from now? The answer is not a single clause. It is a coherent set of contractual mechanisms layered onto a performance-based specification that takes IEEE 1474 as a floor and adds enforceable interface, escrow, and licensing obligations. Agencies that get this right pay a small premium upfront and recover it many times over the asset's life. Agencies that do not pay a 10 to 25 percent lifetime cost premium for the privilege of having tied themselves to a single supplier on day one.

## Why this matters for the next 30 years

A CBTC project is not a procurement event. It is a 30-year operating relationship with whichever vendor's onboard controller, zone controller, and central supervision logic an agency selects. Once trains have been retrofitted with that vendor's Vehicle On-Board Controller (VOBC), maintainers trained on that vendor's diagnostic tools, spares inventoried for that vendor's circuit boards, and Interface Control Documents written against that vendor's protocol stack, the cost of switching at year 12 — or even adding a second vendor on the next line — becomes prohibitive. This article is for the program manager, the deputy general manager for capital programs, the FTA grants officer, and the procurement attorney who all have to sign the same Request for Proposals. It explains what a vendor-neutral CBTC RFP actually contains, how each clause is enforced, and where US agencies have made expensive mistakes since the L Line procurement in 1999. The depth lives in Volume 2 of *Communications-Based Train Control*; this post is the procurement-desk summary.

## The three sources of lock-in

Lock-in does not come from buying a CBTC system. It comes from buying a CBTC system without contracting around three specific surfaces.

The first is **interface opacity**. Every CBTC architecture has internal boundaries — between the VOBC and the zone controller, between the zone controller and the interlocking, between the central Automatic Train Supervision (ATS) and the wayside. If those boundaries are documented only in the supplier's internal engineering archives, no other supplier can connect to them. A second-line procurement five years later faces a binary choice: pay the incumbent whatever they ask, or rip out the deployed equipment and start over.

The second is **intellectual property capture**. CBTC's safety-critical software (the Automatic Train Protection logic in particular) is the supplier's most valuable asset. If the contract grants only an operational license, with no source-code escrow, no patent commitments, and no rights to commission third-party maintenance, the agency is renting the safety case. If the supplier exits the market, gets acquired, or simply chooses not to support the platform after year 15, the agency is stranded.

The third is **operational embedding**. Maintainer training, simulator software, diagnostic tooling, and spare-parts inventories all accumulate around whichever supplier delivers the first contract. This is the lock-in that no clause in the RFP fully prevents — but the right specification minimizes it by mandating standardized data formats, open APIs for non-vital subsystems, and modular spare-parts strategies that do not depend on a single supplier's part numbers.

## Foundation: an IEEE 1474.1 performance-based specification

The first procurement decision is the language of the specification itself. Prescriptive specifications state how the contractor shall implement the system: "The VOBC shall use the Siemens SpeedGoat processor." Performance specifications state what outcome the system shall achieve: "The Automatic Train Protection function shall issue a Movement Authority within 2 seconds of a request, under all defined operating conditions, demonstrated to SIL 4 per IEC 61508." The first locks competition out before the first proposal is opened. The second invites multiple vendors to compete on how they meet a measurable target.

IEEE 1474.1 is the US foundation. It defines CBTC functionally: continuous automatic train control, high-resolution train location independent of track circuits, continuous bidirectional train-to-wayside data communication, and onboard and wayside vital processors. The 1474.2 communications, 1474.3 quality assurance, and 1474.4 functional allocation companions extend that definition. Every modern US CBTC RFP should specify IEEE 1474 compliance as a procurement floor and use the standard's vocabulary in the technical requirements section. (For the deeper picture, see [What Is Communications-Based Train Control (CBTC)? A 2026 Plain-English Guide](/blog/what-is-cbtc-2026-guide).)

What IEEE 1474 does not do is prescribe interchangeable internal interfaces. That gap is the agency's responsibility to fill in the contract.

[FIGURE: Layered diagram showing the four lock-in defense layers — performance-based specification at the foundation, then mandatory Interface Control Documents, then IP and source-code provisions, then modular procurement strategy, then operational standards.
Source: new figure to be generated.
Caption: "Four contractual layers that, used together, reduce CBTC vendor lock-in to a manageable residual."]

## Mandatory Interface Control Documents

The single most important non-IEEE clause in a vendor-neutral CBTC RFP is the requirement that the vendor produce, deliver, and continuously maintain Interface Control Documents for every subsystem boundary. An ICD is the formal contract between two subsystems: it specifies message formats, timing, error handling, fault behaviors, and physical interface requirements precisely enough that a different vendor could build a compliant component on the other side.

An effective RFP enumerates the ICDs the agency requires. The minimum set for a US transit CBTC project includes the VOBC-to-DCS interface, the DCS-to-zone-controller interface, the zone-controller-to-interlocking interface, the zone-controller-to-zone-controller handover interface, the ATS-to-zone-controller interface, the VOBC-to-traction interface, the VOBC-to-braking interface, the VOBC-to-door-control interface, and the system-to-passenger-information interface. Each ICD becomes a contract deliverable with its own acceptance criteria.

Specifying language that has worked: "The Contractor shall develop, deliver, and maintain throughout the warranty period an Interface Control Document for each subsystem boundary listed in Appendix X. Each ICD shall specify physical layer, data link layer, message format, timing, fault detection and reporting, and recovery behavior in sufficient detail that a third-party supplier could implement a functionally equivalent subsystem on the other side of the interface. ICDs shall be delivered in editable formats and shall be the property of the Owner upon acceptance, subject only to the Contractor's retained intellectual property rights."

The MTA's deliberate multi-vendor strategy across the L Line (Siemens), the 7 Line (Thales SelTrac, now Hitachi Rail), and Queens Boulevard (Siemens) has rested on enforced ICDs at the central ATS layer. The friction of that approach is real — three vendors, three sets of training, three diagnostic toolchains — but the negotiating leverage on every subsequent procurement has been preserved.

## Intellectual property and source-code escrow

Performance specifications and ICDs solve the technical interoperability problem. Source-code escrow and IP licensing solve the supplier-survival problem.

A vendor-neutral CBTC RFP requires three things in the IP clauses. **First**, source-code escrow for all safety-critical software, deposited with a neutral third party (Iron Mountain, NCC Group, EscrowTech), with release triggers that include vendor bankruptcy, cessation of product support, material breach of maintenance obligations, and acquisition by an entity the agency reasonably objects to. **Second**, royalty-free, perpetual, transferable licenses on all interface patents — the patents that cover how the vendor's subsystems talk to each other. Without this, an agency that escrows the source code still cannot legally use the protocols. **Third**, complete and current documentation of the build environment, third-party software dependencies, and qualification test suites. Source code without the means to compile, test, and recertify it is a binder of paper.

A clean specifying clause: "The Contractor shall deposit complete source code, build instructions, qualification test suites, and dependency manifests for all safety-critical and vital software with a third-party escrow agent acceptable to the Owner. Release triggers shall include (a) Contractor petition under Chapter 7 or Chapter 11 of the US Bankruptcy Code, (b) cessation of product support announced or de facto, (c) acquisition of the Contractor by an entity not approved by the Owner in advance, and (d) material breach of maintenance obligations not cured within 90 days. Upon a release event, the Owner shall have a perpetual, royalty-free, transferable, sublicensable license to use, modify, and have modified the released materials for any purpose related to the Owner's transit operations."

This language does not eliminate lock-in. It establishes a credible exit option — and that option, by itself, is the strongest source of negotiating leverage the agency will ever have over the incumbent vendor.

## Modular procurement and Buy America

Some agencies go further: they unbundle the CBTC procurement into separate contracts for the onboard, wayside, and central systems, taking on the systems-integrator role themselves. This is the European procurement model. It is organizationally demanding — the agency must staff a competent internal integration team, typically with a Program Management Consultant from WSP, AECOM, HNTB, STV, or Jacobs as the engineering arm — but it gives the strongest possible competitive leverage on every subsequent procurement. NYC's MTA has approached its multi-vendor strategy through bundled-per-line contracts; BART chose a single Design-Build award to Hitachi Rail STS in 2018 for the Train Control Modernization Program. Both are defensible. The choice depends on the agency's internal engineering capacity.

Build America, Buy America (BABA) is the other procurement constraint that shapes vendor choice. Federal capital funding triggers a domestic content threshold of at least 70 percent for manufactured products and 90 percent for steel and iron. For CBTC, this practically means that signaling equipment, communication antennas, fiber backbones, and enclosures must be assembled domestically with US-sourced components. Industry premiums of roughly 5 to 15 percent over international market prices are typical. Agencies should require, as part of the proposal, a detailed BABA compliance plan with line-item domestic content percentages and a US assembly footprint, and should reserve the right to audit supplier invoices throughout the contract.

[FIGURE: Decision tree for agency procurement structure choice — bundled single-vendor Design-Build vs. unbundled multi-package owner-integrated, with BABA compliance gates and Program Management Consultant role at each branch.
Source: new figure to be generated.
Caption: "Bundled and unbundled CBTC procurement each preserve different forms of competitive leverage. The right answer depends on the agency's internal engineering capacity."]

## Open APIs for everything that is not safety-critical

Inside a CBTC system, a clean line separates the SIL 4 vital functions (Movement Authority calculation, brake intervention, train position validation) from the non-vital surrounding subsystems (asset management, predictive maintenance, customer information, energy management, dashboard reporting). Vital functions cannot yet be plug-and-play interchangeable: validation, type approval, and the safety case all foreclose that. Non-vital functions are a different question. They should be required to expose open Application Programming Interfaces — REST or OPC UA, with documented schemas and authentication — so the agency can build, buy, or replace passenger-information dashboards, predictive-maintenance analytics, energy-monitoring tools, and operations dashboards on a competitive basis.

A simple specifying sentence: "All non-safety-critical operational data produced or consumed by the CBTC system, including train position telemetry, equipment health, energy consumption, and Automatic Train Supervision events, shall be made available through documented REST or OPC UA application programming interfaces, with full schema documentation and a non-discriminatory authentication framework." This is the layer where multi-vendor interoperability is already practical, and it is the layer where most of the day-to-day operational value of CBTC data actually lives.

## Practical takeaways

- Specify IEEE 1474 as the procurement floor and write the technical requirements in performance language ("the system shall issue a Movement Authority within 2 seconds") rather than prescriptive language ("the system shall use Vendor X processor").
- Enumerate every required Interface Control Document in an appendix to the RFP. Make them contract deliverables with their own acceptance criteria. Own them upon acceptance.
- Require source-code escrow with explicit, enforceable release triggers, plus perpetual royalty-free patent licensing on every interface the agency will ever need to use.
- Decide deliberately between bundled (single Design-Build) and unbundled (owner-integrated) procurement based on the agency's internal engineering capacity. Bundle if you must; unbundle if you can.
- Mandate open APIs for every non-vital subsystem. The vital safety case is the part that locks in; the operational data layer does not have to.
- Audit BABA compliance line by line through the project. The 5 to 15 percent BABA premium is the price of admission to FTA capital funding; non-compliance can withhold the grant.

## Where to go next

This post is a procurement-desk summary. The full lifecycle treatment lives in Chapter 12 (Project Lifecycle) and Chapter 15 (Vendor Landscape) of *Communications-Based Train Control*, Volume 2: Operations, Deployment & Economics ([Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 12 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch12.pdf) for the design-review and ICD framework slides.

For the companion procurement piece on writing the technical statement of work itself, see [CBTC Scope of Work: A Template for US Transit Agencies](/blog/cbtc-scope-of-work-template). For how the lock-in cost actually compounds over a 30-year asset life, see [Hidden Cost of CBTC Vendor Lock-In (and How to Avoid It)](/blog/hidden-cost-of-cbtc-vendor-lockin).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Deployment & Economics*. Independent. ISBN 979-8-258-54295-3. — Chapter 12, "Project Lifecycle"; Chapter 15, "Vendor Landscape and Technology Trends."
- IEEE Standards Association. *IEEE Std 1474.1, 1474.2, 1474.3, 1474.4: Communications-Based Train Control Standards*.
- Federal Transit Administration. *Capital Investment Grants Program*. [transit.dot.gov/CIG](https://www.transit.dot.gov/CIG)
- Federal Transit Administration. *Build America, Buy America Act Implementation Guidance*. [transit.dot.gov/BuyAmerica](https://www.transit.dot.gov/buyamerica)
- Federal Transit Administration. (2016). *FTA Report No. 0045: Communications-Based Train Control (CBTC) Technology*. [transit.dot.gov](https://www.transit.dot.gov/)
- MTA New York City Transit. *Communications-Based Train Control Status Update*. [new.mta.info/project/communications-based-train-control-cbtc](https://new.mta.info/project/communications-based-train-control-cbtc)
- San Francisco Municipal Transportation Agency. *Train Control Upgrade Project*. [sfmta.com/projects/train-control-upgrade-project](https://www.sfmta.com/projects/train-control-upgrade-project)
- Bay Area Rapid Transit. *Train Control Modernization Program*. [bart.gov/about/projects/cbtc](https://www.bart.gov/about/projects/cbtc)
