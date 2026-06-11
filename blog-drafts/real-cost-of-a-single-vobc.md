---
title: "The Real Cost of a Single VOBC: A 2026 Breakdown"
slug: real-cost-of-a-single-vobc
description: "What a single Vehicle On-Board Controller actually costs a US transit agency, broken down across hardware, integration, certification, and lifecycle — with the per-cab and per-fleet figures procurement teams need."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: procurement
tags: [CBTC, VOBC, onboard equipment, procurement, US transit, fleet retrofit]
primary_keyword: "VOBC cost"
secondary_keywords: ["VOBC price", "CBTC onboard cost", "Vehicle On-Board Controller cost", "VOBC retrofit cost", "CBTC fleet cost"]
related_chapters: [4, 14]
internal_links: ["/blog/onboard-side-of-cbtc-vobc", "/blog/cbtc-procurement-cost-drivers", "/blog/cbtc-lifecycle-cost-30-year-model"]
og_image: "/blog/img/real-cost-of-a-single-vobc.png"
read_time: "9 min"
---

A US transit agency planning a 100-car CBTC fleet retrofit will allocate roughly $25 million to $45 million for onboard equipment alone. That figure surprises board members and capital-program officers who expected onboard hardware to be a small line item compared to wayside infrastructure and zone controllers. The Vehicle On-Board Controller (VOBC) is a SIL 4 safety-certified embedded computer with redundant processors, ruggedized industrial packaging, and sensor stacks that include tachometers, Doppler radar, balise readers, and inertial measurement. Per-cab installed cost runs $250K to $450K — and the certified hardware itself is only the largest of several line items. This post breaks down the per-VOBC cost across the four categories that procurement teams actually have to budget: hardware, integration engineering, certification and recertification, and lifecycle support.

## Why per-VOBC economics matter

Onboard CAPEX is 12 to 18 percent of total CBTC project cost — substantial but not the largest single category. What makes per-VOBC cost worth analyzing separately is that it scales with fleet size, not with route-mileage, and it varies enormously with rolling-stock age and prior modification history. A 100-car retrofit on aging fleets costs more per cab than a 200-car retrofit on uniform new procurement. A single-cab-equipped consist (typical NYC subway) costs differently from a dual-cab-equipped consist (typical commuter rail). And the per-VOBC cost shows up again every 15 to 20 years in the form of midlife refresh, with type-approval recertification timelines that are not compressible. This piece is for the procurement officer, the rolling-stock chief mechanical officer, and the program manager building the fleet-side budget. It assumes familiarity with [the VOBC's role in the CBTC architecture](/blog/onboard-side-of-cbtc-vobc). The numbers below are drawn from manuscript Chapter 4 and Chapter 14, and reflect industry-standard ranges for US procurement in 2026.

## The five hardware components

A single VOBC installation on a single train cab includes five integrated hardware blocks.

**VOBC processor and safety-certified firmware.** The vital computer itself: redundant processors (typically dual-channel 2-out-of-2 voting, sometimes triple-channel 2-out-of-3), ruggedized industrial packaging, real-time operating system, and SIL 4 certified firmware. Per-cab range: $80K to $120K.

**Radio antenna and modem.** The onboard side of the Data Communication System: 2.4 GHz or 5 GHz spread-spectrum modem, antenna installation, RF cable routing, RF isolation from other onboard radio systems. Some newer deployments specify LTE-R or private 5G modems, which run higher. Per-cab range: $15K to $25K.

**Odometry and inertial sensors.** Tachometer (wheel-rotation sensor) on at least one wheelset, Doppler radar for ground speed, optional inertial measurement unit, and a balise reader for absolute position fixes from trackside transponders. Sensor brands include Sick, Leuze, and equivalents. Per-cab range: $20K to $40K.

**Cab display and human-machine interface (DMI).** A 7-inch or larger color touchscreen showing speed profile, Movement Authority, system status, and operator advisory messages. Includes installation in the existing cab console, integration with the operator's other displays, and lighting/heat/vibration ruggedization. Per-cab range: $25K to $50K.

**Vehicle integration engineering.** The labor of designing the wiring harness, cabling, mounting, traction interface, braking interface, door control interface, and HVAC interface; integrating the VOBC software with the agency's existing rolling stock control architecture; and conducting factory acceptance testing on a sample car. This is where per-cab cost varies most. Per-cab range: $40K to $60K for uniform new fleets; $100K to $200K for aging fleets with multiple sub-types and undocumented prior modifications.

The total per-cab installed cost from these five categories: $250K to $450K, with the lower bound for new uniform fleets and the upper bound for aged retrofit fleets.

[FIGURE: Stacked bar chart of per-VOBC cost components — processor and firmware, radio modem, sensors, DMI, integration engineering — with the cost ranges for a new uniform fleet versus an aged retrofit fleet.
Source: new figure to be generated.
Caption: "Per-VOBC cost varies more with fleet uniformity than with vendor selection. Aged retrofit fleets can cost two to three times new uniform fleets per cab."]

## The certification overhead

Hardware is roughly 60 to 75 percent of the per-VOBC cost. The remainder is the certification overhead that turns commercial industrial computing hardware into a SIL 4 vital safety system.

**Initial type approval.** SIL 4 type approval per IEC 61508 is awarded to a specific product configuration by a specific notified body — TÜV SÜD, Ricardo Rail, RINA, or similar. The approval covers the VOBC hardware, the firmware, the safety case, and the documented operating envelope. Type approval cost on a new VOBC product runs into the millions of dollars and is amortized across the supplier's fleet of customers; for a US agency procuring a previously-certified VOBC, the cost shows up as a per-unit overhead allocation rather than as a discrete line item.

**Site-specific safety case.** The supplier's certified VOBC is approved as a generic product. Each agency's specific deployment — track geometry, civil speed limits, station platform geometry, operational rules, communication architecture — requires a site-specific safety case that adapts the generic certification. This safety case work is typically managed under the soft-cost engineering line item, not the per-VOBC line item, but the cost is real (3 to 6 percent of CAPEX for the Independent Safety Assessor and Verification & Validation work).

**Verification, validation, and Independent Safety Assessor review.** Each VOBC installation goes through factory acceptance testing, site integration testing, and dynamic testing as part of the V-Model verification program. The per-cab share of this testing labor is captured in the integration engineering line item but worth flagging separately because it is the portion of cost most often compressed when project schedules slip.

**Configuration management of site-specific data.** Each VOBC carries site-specific configuration data: the track database, the civil speed restrictions, the platform locations, the dwell time targets, and the safety parameters. Maintaining configuration management of that data across a fleet of 100 to 400 cabs over a 30-year lifecycle is a substantial recurring cost.

## What the supplier's bid does and does not include

The CBTC supplier's bid for onboard equipment typically includes:

- VOBC hardware, firmware, and standard sensor stack
- Radio modem and antenna
- Cab display
- Standard wiring harness design
- Factory acceptance testing on a sample car
- Initial training for agency maintainers

The supplier's bid typically does not include:

- The full retrofit installation labor across the entire fleet (this is often a separate Davis-Bacon-controlled labor procurement)
- Civil work for antenna mounting, cabling routing through the car body, or modifications to the existing cab console
- Specialty modifications for non-uniform fleets (each car sub-type may require a unique integration design)
- Site-specific safety case work (this is typically the agency's Independent Safety Assessor's scope)
- Davis-Bacon prevailing-wage premium on installation labor
- Build America, Buy America domestic content premium on hardware

These four to six excluded categories typically add 30 to 50 percent to the supplier's onboard equipment bid. An agency budgeting only the supplier's quote understates the all-in onboard cost by roughly that margin.

[FIGURE: Side-by-side bar comparison of supplier-quoted onboard CAPEX versus all-in onboard CAPEX, with the gap broken into installation labor, civil work, fleet-specific modifications, safety case, Davis-Bacon premium, and BABA premium.
Source: new figure to be generated.
Caption: "The supplier's onboard equipment bid is typically 60 to 75 percent of the all-in onboard CAPEX on a US brownfield retrofit."]

## The midlife refresh

A VOBC has a useful service life of 15 to 20 years before processor end-of-life and spare-parts exhaustion drive obsolescence. The replacement is not optional — the original processors will not be available, third-party board-level repair eventually ages out, and cybersecurity baselines that the original VOBC was certified against will have moved on. Budget 15 to 20 percent of original onboard CAPEX for a midlife refresh, which on a 100-car fleet at $250K to $450K per cab translates to $4M to $9M of fleet refresh cost in approximately year 15 to year 20.

The procurement timeline for the refresh is 18 to 24 months because of type-approval recertification, even when the agency is procuring the same supplier's successor VOBC product. Agencies that plan refresh procurements only 12 months ahead of the replacement window discover, partway through, that the recertification cannot be compressed.

The honest planning rule: schedule the refresh procurement 30 months ahead of the planned replacement window. Budget the refresh in the agency's 30-year capital plan, not as an unplanned event in the year it occurs. Set aside a 2 to 3 percent of CAPEX annual obsolescence fund through the early operating years to smooth the refresh cash-flow event.

## How fleet age moves the per-cab number

The single largest sensitivity in per-VOBC cost is fleet age and uniformity. Three illustrative scenarios:

**Scenario A: 100 new cars, single sub-type, fresh build.** Integration engineering cost is at the low end ($40K to $60K per cab). Installation labor is included in the new build. Per-cab installed CAPEX runs $250K to $300K.

**Scenario B: 100 cars, two sub-types, midlife refurbishment retrofit, prior CBTC-readiness in design.** Integration engineering cost is moderate ($60K to $100K per cab). Installation labor under Davis-Bacon adds 30 to 50 percent. Per-cab installed CAPEX runs $300K to $400K.

**Scenario C: 100 cars, three or more sub-types, aging fleet, no prior CBTC-readiness.** Integration engineering cost is high ($100K to $200K per cab). Installation labor under Davis-Bacon and PLAs adds 40 to 60 percent. Significant per-cab variation depending on the specific sub-type. Per-cab installed CAPEX runs $400K to $600K, with outliers higher.

NYC's MTA encountered Scenario C costs on the L Line and the 7 Line; uniform fleet-size assumptions in the original procurement budgets did not match the actual fleet variation discovered during integration engineering. The lesson — pre-procurement fleet survey — is a small dollar investment ($150K to $300K typically) that prevents Scenario C cost surprises from becoming change orders.

## Practical takeaways

- Budget $250K to $450K per cab for a uniform new fleet. Budget $400K to $600K per cab for an aged retrofit fleet with multiple sub-types.
- Decompose the per-VOBC budget into the five hardware blocks (processor, radio, sensors, DMI, integration) plus the four exclusions from the supplier's bid (installation labor, civil work, safety case, BABA/Davis-Bacon premiums).
- Conduct a pre-procurement fleet survey for $150K to $300K. This investment prevents change orders that typically cost 5 to 10 percent of the onboard CAPEX line.
- Plan the midlife refresh in the 30-year capital plan. Budget 15 to 20 percent of original onboard CAPEX in approximately year 15 to year 20.
- Schedule the refresh procurement 30 months ahead of the replacement window. Type approval recertification timelines are not compressible.
- Maintain a 2 to 3 percent annual obsolescence fund to smooth the refresh cash-flow event.

## Where to go next

This piece is the per-cab budget walkthrough. The full onboard-architecture treatment lives in Chapter 4 (Onboard Equipment) of *Communications-Based Train Control*, Volume 1 ([Volume 1 on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)) and the lifecycle cost treatment in Chapter 14 of Volume 2. [Download Chapter 4 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch04.pdf).

For the architectural picture, see [The Onboard Side of CBTC: Inside the VOBC](/blog/onboard-side-of-cbtc-vobc). For the all-in budget context, see [CBTC Procurement: Cost Drivers Beyond the Sticker Price](/blog/cbtc-procurement-cost-drivers) and [CBTC Lifecycle Cost: A 30-Year Model Walk-Through](/blog/cbtc-lifecycle-cost-30-year-model).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 1: Foundations & Technical Architecture*. Independent. ISBN 979-8-258-54295-3. — Chapter 4, "Onboard Equipment."
- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Deployment & Economics*. Independent. — Chapter 14, "Lifecycle Costs and Economic Justification."
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- International Electrotechnical Commission. *IEC 61508: Functional Safety of Electrical/Electronic/Programmable Electronic Safety-related Systems*.
- Federal Transit Administration. *Build America, Buy America Act Implementation Guidance*. [transit.dot.gov/BuyAmerica](https://www.transit.dot.gov/buyamerica)
- US Department of Labor. *Davis-Bacon and Related Acts*. [dol.gov/agencies/whd/government-contracts/construction](https://www.dol.gov/agencies/whd/government-contracts/construction)
- MTA New York City Transit. *Communications-Based Train Control Status Update*. [new.mta.info/project/communications-based-train-control-cbtc](https://new.mta.info/project/communications-based-train-control-cbtc)
