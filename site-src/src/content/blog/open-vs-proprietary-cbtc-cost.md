---
title: "Open Architecture vs Proprietary CBTC: A Real-World Cost Analysis"
slug: open-vs-proprietary-cbtc-cost
description: "How open architecture and proprietary CBTC procurement strategies compare on lifecycle cost, vendor lock-in exposure, and the contract terms that actually move the numbers in US transit deployments."
date: 2026-07-12
author: "Chunjun (Francisco) Wang"
category: comparative
tags: [CBTC procurement, open architecture, proprietary CBTC, vendor lock-in, lifecycle cost]
primary_keyword: "open vs proprietary CBTC"
secondary_keywords: ["CBTC open architecture", "CBTC vendor lock-in", "EULYNX CBTC", "OCORA", "interface control documents"]
related_chapters: [12, 15]
internal_links: ["/blog/trainguard-mt-vs-urbalis-architecture"]
og_image: "/blog/img/open-vs-proprietary-cbtc-cost.png"
read_time: "10 min"
---

The promise of open-architecture Communications-Based Train Control (CBTC) is straightforward: write the procurement so that the agency does not become a hostage to a single vendor's product roadmap, spare-parts catalog, and license terms. The reality of open-architecture CBTC is messier. Plug-and-play interchangeability at the safety-critical level is not realistic in the next decade because validation and type-approval requirements bind components to vendor-specific designs. What is realistic, and what European programs (EULYNX, OCORA, and the broader Reference CCS Architecture under Shift2Rail) have demonstrated, is interchangeability at non-safety boundaries and substantial reduction in lock-in cost over a 30-year asset lifecycle. Industry references put the lock-in cost premium at 10 to 25 percent over an asset's life. The open vs proprietary CBTC procurement question is therefore not "can we achieve full interchangeability" but "which contractual mechanisms actually move the numbers, and which ones are theatre."

## What proprietary CBTC actually means in 2026

A proprietary CBTC procurement is one where a single vendor supplies the integrated stack: onboard equipment, wayside controllers, the Data Communication System, the ATS workstation, the development environment, and the engineering services that integrate all of them. The interfaces between subsystems are vendor-specific, the source code is vendor-owned, and the hardware specifications are vendor-controlled. The agency owns the deployed infrastructure but does not own the technical means to extend, modify, or replace it without vendor cooperation.

This is not a pejorative description. Proprietary CBTC is the standard procurement model for most US transit agencies and most CBTC deployments globally. The advantages are real: a single vendor is accountable for the integrated system, the safety case is unified, and the integration scope is bounded. The L Line, the 7 Line, the BART TCMP, and Honolulu Skyline are all proprietary procurements in this sense. Each agency has a primary vendor (Siemens, Hitachi Rail, in those cases) that owns the entire CBTC stack.

The disadvantage of pure proprietary procurement is the lock-in cost over time. The agency that wants to extend the deployment to a new line, integrate a third-party predictive-maintenance platform, or run a competitive procurement for replacement equipment finds that the proprietary interfaces make alternatives impractical. The vendor's pricing power on the second contract is substantially higher than on the first. Over a 30-year asset lifecycle, the cumulative cost of that pricing asymmetry is the lock-in premium.

## What open-architecture CBTC actually means

Open-architecture CBTC is not a single product; it is a procurement strategy built around a set of contractual mechanisms. The European programs are the most mature reference points. EULYNX defines standardized interfaces between Interlocking and Control Logic and supporting subsystems (point machines, signals, axle counters, Radio Block Centers); OCORA addresses the onboard side, defining a modular reference architecture for ATP and ATO systems; the Reference CCS Architecture (RCA) unifies them conceptually under Shift2Rail. Together, these initiatives are pushing European mainline rail toward genuine multi-vendor interoperability at the support-systems level, with full safety-critical interchangeability remaining out of reach for the next decade.

The US transit market has no functional equivalent of EULYNX or OCORA for CBTC. Instead, US agencies have developed compensatory procurement strategies that approximate openness through contract terms rather than through standardized interfaces. The mechanisms that have actually moved the lock-in numbers in US deployments are a defined set, none of which are theoretical:

**Interface Control Documents (ICDs)**. Comprehensive documentation of every subsystem boundary, with the contract specifying that the documentation is delivered, maintained, and accessible to the agency for the life of the asset. The ICD becomes the technical contract that governs how data flows between subsystems. Without ICDs, an agency cannot evaluate whether a third-party integration is feasible.

**Source-code escrow**. The vendor deposits the source code for safety-critical software with a third-party escrow agent, with release triggered by defined events (vendor bankruptcy, abandonment of the product line, sustained failure to meet support obligations). The agency does not get access to the code under nominal conditions; it gets the option to take possession if the vendor disappears. Escrow does not eliminate lock-in but it caps the catastrophic-loss tail.

**Royalty-free patent licensing**. The vendor commits to grant royalty-free, perpetual licenses for interface patents. This prevents the vendor from using patent claims to block third-party integrations or to charge premium pricing for follow-on contracts.

**Modular procurement packages**. The agency awards separate contracts for onboard (VOBC), wayside (Zone Controller and interlocking), and Operations Control Center systems, with the agency assuming the role of system integrator. This is organizationally demanding and is rare in US procurement, but it materially reduces vendor dominance over the integrated stack.

**Framework agreements with multiple qualified suppliers**. The agency pre-qualifies multiple vendors and runs follow-on procurements among the qualified set. New York City Transit's deliberate multi-vendor strategy across the L Line, 7 Line, and Queens Boulevard is the most-cited US example. (Detailed in Single-Vendor vs Multi-Vendor CBTC: NYC's Lessons Learned.)

**Open APIs for non-safety integrations**. The vendor commits to expose standardized REST or OPC UA APIs from the ATS to the agency's enterprise systems (asset management, predictive maintenance, customer information, crew scheduling). Non-safety integrations are where most of the post-deployment cost lives; open APIs prevent the vendor from charging integration premiums for routine connections.


![Open architecture in US CBTC is a stack of procurement mechanisms, not a single specification.](/blog/img/open-vs-proprietary-cbtc-cost-fig1.svg)
*<small>Open architecture in US CBTC is a stack of procurement mechanisms, not a single specification.</small>*


## What each mechanism actually costs the vendor and saves the agency

Every open-architecture mechanism carries a cost the vendor will price into the bid. Understanding which mechanisms cost the vendor what is the foundation of negotiating the right balance.

ICDs are inexpensive for a vendor to deliver but expensive to maintain over a 30-year asset life. The cost shows up in change-management overhead; every interface change must be documented, reviewed, and re-issued. Vendors typically price ICDs at single-digit percentages of contract value but resist commitments that obligate them to maintain documentation for legacy revisions. Specify maintenance obligations, not just initial-delivery obligations.

Source-code escrow is inexpensive for vendors to provide but creates legal complexity around what triggers release and what the agency may do with released code. Most vendors resist broad release triggers; reasonable triggers (bankruptcy, three-year sustained support failure, formal product discontinuation) are typically negotiable. Escrow agents charge modest annual fees that the agency or the vendor can absorb.

Royalty-free patent licensing is the mechanism vendors resist most strongly because it limits future revenue streams. Negotiate it carefully and specifically; "all interface patents" is too broad, "the patents listed in Schedule X" is too narrow. The middle ground is a defined scope (interfaces required for the integrations the agency contemplates) and a defined commitment (perpetual, royalty-free, irrevocable).

Modular procurement is expensive for the agency, not the vendor. The agency takes on integration risk that the vendor would otherwise own. NYC's experience with multi-vendor procurement is that the savings are real but require an agency engineering team capable of acting as system integrator. Most US agencies do not have that capability in-house and would have to build it or contract it.

Framework agreements with multiple suppliers cost the agency in pre-qualification effort but create competitive pressure on the second and subsequent procurements. The savings from competitive pressure typically outweigh the pre-qualification cost on programs with three or more contracts in the pipeline.

Open APIs for non-safety integrations are inexpensive for the vendor to deliver and have substantial agency value. Modern ATS systems are increasingly built on platforms that expose APIs natively; the procurement specification need only require what the platform already supports. This is the cheapest open-architecture mechanism with the highest payoff.

## What the cumulative cost analysis shows

Industry references put the lock-in premium of a fully proprietary CBTC procurement at 10 to 25 percent of total lifecycle cost. The savings from a well-structured open-architecture procurement are typically in the same range, with the actual realized savings dependent on which mechanisms the agency negotiates and uses.

The cost-benefit math, in approximate terms, looks like this. A typical 10-mile US CBTC retrofit might run $300 to $500 million in capital, with another $40 to $55 million in operating and maintenance cost over 30 years. A 15 percent lock-in premium on the cumulative cost (capital plus 30-year O&M) is therefore roughly $50 to $80 million per line in present-value terms. The procurement effort to negotiate ICDs, escrow, patent licensing, and open APIs is in the single-digit millions; the modular-procurement effort is substantially higher but usually only justified at multi-line or program scale.

The rough rule of thumb that emerges is that the cheap open-architecture mechanisms (ICDs, escrow, patent licensing, open APIs) pay for themselves on every CBTC procurement above a moderate threshold. The expensive mechanisms (modular procurement, agency-as-integrator) pay for themselves only on multi-line programs where the agency has the capability and the scale to absorb the integration risk.

## What does not work as advertised

Two things that sound like open-architecture mechanisms but do not actually move the lock-in numbers deserve mention.

First, "open standards" claims that are not accompanied by ICDs are largely theatre. A vendor that says its system is built on IEEE 1474.1 and IEEE 802.11 is making a true statement that does not, by itself, enable third-party integration. The functional standards define what the system does, not how its internal interfaces are structured. Procurement specifications that require "open standards compliance" without specifying ICDs, escrow, and patent licensing are buying brochure language, not openness.

Second, claims of "modular product architecture" without contractual modularity are similarly incomplete. A vendor that markets a modular product is describing its internal engineering practices, not its commitment to allow third-party module substitution. Contractual modularity (the agency's right to procure individual modules from different vendors) requires the procurement to specify it explicitly. (For broader procurement context, see the trade-off between platform architecture and procurement strategy in [Trainguard MT vs Urbalis: Architecture Compared](/blog/trainguard-mt-vs-urbalis-architecture).)


![Some open-architecture mechanisms have high payoff at low cost; others require substantial agency capability to realize.](/blog/img/open-vs-proprietary-cbtc-cost-fig2.svg)
*<small>Some open-architecture mechanisms have high payoff at low cost; others require substantial agency capability to realize.</small>*


## What this means in practice

- Treat open architecture as a stack of procurement mechanisms, not a single specification. Each mechanism has a different cost and a different payoff.
- The cheap mechanisms (ICDs, source-code escrow, royalty-free patent licensing, open APIs for non-safety integrations) pay for themselves on almost every US CBTC procurement above moderate scale. Specify them.
- The expensive mechanisms (modular procurement, agency-as-integrator) pay for themselves only on multi-line programs where the agency has substantial integration capability. Most US agencies are not in this position.
- "Open standards" claims that are not accompanied by ICDs are theatre. Specify the ICDs.
- "Modular product architecture" claims that are not accompanied by contractual modularity are similarly incomplete. Specify the contractual rights.
- The lock-in premium of fully proprietary procurement is real and material (10 to 25 percent of lifecycle cost). The procurement effort to mitigate it is small relative to the savings.

## Where to go next

This post is a procurement-strategy overview. The full treatment of CBTC procurement, including detailed RFP language, contract terms, and case studies, lives in Chapter 12 ("Procurement and RFP Strategy") and Chapter 15 ("Vendor Landscape and Technology Trends") of *Communications-Based Train Control* ([Volume 2 on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 12 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch12.pdf)

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Deployment, Economics, and the Future*. Independent. ISBN 979-8-258-54295-3. — Chapter 12, "Procurement and RFP Strategy"; Chapter 14, "CBTC Lifecycle Cost"; Chapter 15, "Vendor Landscape and Technology Trends."
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- EULYNX Consortium. *EULYNX Initiative — Standardised Interfaces for Signalling Subsystems*. [eulynx.eu](https://eulynx.eu/)
- European Commission, Shift2Rail Joint Undertaking. *Reference CCS Architecture (RCA) Programme Deliverables*. [shift2rail.org](https://shift2rail.org/)
- Federal Transit Administration. *Capital Investment Grants Program*. [transit.dot.gov/CIG](https://www.transit.dot.gov/CIG)
- MTA New York City Transit. *Communications-Based Train Control Status Update*. [new.mta.info/project/communications-based-train-control-cbtc](https://new.mta.info/project/communications-based-train-control-cbtc)
