---
title: "SFMTA Muni Train Control Upgrade: What the 2024 RFP Reveals"
slug: sfmta-muni-tcup-2024-rfp
description: "An engineer's read of San Francisco Muni's Train Control Upgrade Project (TCUP): the 1998 Alcatel SelTrac legacy, the 2018 Hitachi Rail STS contract, the Central Subway live testbed, and what the procurement teaches mixed-mode operators."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: agency-case-studies
tags: [CBTC, SFMTA, Muni, TCUP, Hitachi SelTrac, mixed-mode, light rail]
primary_keyword: "SFMTA Muni TCUP"
secondary_keywords: ["SFMTA Muni CBTC", "Muni Metro train control upgrade", "Hitachi SelTrac SFMTA", "Central Subway CBTC", "mixed-mode CBTC"]
related_chapters: [10, 12, 15]
internal_links: ["/blog/bart-train-control-modernization-timeline", "/blog/cbtc-rfp-vendor-lockin", "/blog/cbtc-vs-traditional-signaling-8-differences"]
og_image: "/blog/img/sfmta-muni-tcup-2024-rfp.png"
read_time: "11 min"
---

In 1998, Alcatel — now part of the Thales Group, since acquired by Hitachi Rail — deployed what was at the time one of the earliest functional implementations of CBTC-like technology in the United States on the San Francisco Municipal Transportation Agency's (SFMTA) Muni Metro system. Twenty years later, in 2018, the SFMTA awarded Hitachi Rail STS — operating then under the AnsaldoSTS brand — the Train Control Upgrade Project (TCUP) contract to replace that legacy system across all 71 miles of the Muni Metro network. The Central Subway extension opened in November 2022 with production Hitachi Communications-Based Train Control (CBTC) running from day one. By 2024, with the Market Street Subway and K/T Line in active deployment phases, the SFMTA's procurement and capital documents (including procurements that surfaced in the 2024 capital cycle) reveal a project structure that other US agencies with hybrid grade-separated-and-surface networks should study carefully. This post reads what the TCUP procurement and deployment status actually says about retrofit complexity on mixed-mode operations, single-vendor procurement on a complex network, and what San Francisco's experience means for agencies considering similar projects.

## Why Muni Metro is a distinctive US CBTC case

The SFMTA operates one of the most operationally complex rapid transit systems in the United States — a 71-mile hybrid network that combines underground subway infrastructure with at-grade surface streetcar operations. Muni Metro serves nine rapid transit lines (J Church, K Ingleside/T Third, L Taraval, M Ocean View, N Judah, S Castro, plus the Central Subway and heritage streetcar lines) at average daily ridership between 100,000 and 150,000 passengers in pre-pandemic baseline. The network's distinctive character comes from its operational design. Unlike traditional subway systems that isolate rail operations in tunnels, Muni Metro requires vehicles to seamlessly transition between grade-separated subway segments — notably the Market Street Subway and the new Central Subway — and surface-running streetcar operations on city streets.

This mixed-mode operation is the technical signature of the entire TCUP program. Other US agencies — Boston's MBTA Green Line, Los Angeles Metro's certain corridors, Pittsburgh, parts of the Cleveland Rapid Transit — share aspects of mixed-mode operation but none at the scale or complexity of Muni Metro. (For comparison with the harder full-replacement case at BART across the bay, see [BART Train Control Modernization: Why It's Taking This Long](/blog/bart-train-control-modernization-timeline).) The distinction matters because CBTC engineering for grade-separated subway is well understood; CBTC engineering for at-grade surface running, with traffic interaction, pedestrians, and visibility constraints, is genuinely harder and not as broadly demonstrated.

## The 1998 Alcatel SelTrac legacy and why it had to go

The 1998 SelTrac deployment enabled automatic train protection, speed regulation, and dwell time management on Muni Metro for over two decades. By 2015–2020 the system exhibited classic lifecycle patterns of aging control systems: spare parts sourcing became increasingly difficult and expensive, vendor support narrowed, and the technology could not efficiently accommodate new fleet vehicles or emerging operational requirements. The system's design also could not fully support the planned Central Subway extension, which required modern CBTC architecture from day one.

The lesson here is generalizable across the US transit signaling installed base. Late-1990s and early-2000s automated train control systems are now in their fourth or fifth decade. They were originally specified for 30-year lifecycles and are reaching the end. Maintenance cost rises non-linearly toward end-of-life. Vendor support contracts become more expensive and less responsive. Spare parts inventories run down. The decision to replace is not driven by technology envy; it is driven by maintainability arithmetic and by the operational requirements of new infrastructure (in Muni's case, the Central Subway extension) that the legacy system could not accommodate.

## The 2018 Hitachi Rail STS contract and TCUP scope

In 2018 the SFMTA issued a competitive procurement for a system-wide control system replacement. Hitachi Rail STS was awarded the TCUP contract to deliver a modern CBTC system encompassing all 71 miles of the Muni Metro network. The contract value was approximately $195 to $220 million, including design, hardware, software, and commissioning. The technology platform is Hitachi SelTrac CBTC: modern IP-based Wi-Fi communication, automatic train protection (ATP), automatic train operation (ATO) capability, and architectural compatibility with future Grade of Automation 2 operations.

The contract is a single-vendor procurement, which is a deliberate strategic choice. Single-vendor procurement reduces integration risk relative to a multi-vendor strategy. It also reduces competitive pressure on future contracts and increases vendor lock-in over the system lifecycle, the well-documented 10-to-25 percent lifecycle premium for which the New York MTA's multi-vendor strategy is the counterpoint. (For the procurement-side mitigations available within a single-vendor contract, see [How to Write a CBTC RFP That Doesn't Lock You Into One Vendor](/blog/cbtc-rfp-vendor-lockin).)

The contract's deployment structure is phased rather than big-bang. Phase 1, the Central Subway extension, entered revenue service November 2022. Phase 2 covers the Market Street Subway, with deployment running 2023 to 2024. Phase 3 covers the Twin Peaks Tunnel and the K/T Line through 2024 to 2025. Phase 4 covers the surface lines (J, L, M, N, S) through 2025 to 2026. Phase 5, system-wide commissioning and optimization, is targeted for 2026 to 2028.

[FIGURE: SFMTA TCUP five-phase deployment plan, with Central Subway live since November 2022, Market Street Subway and K/T Line in active deployment, and surface lines and system-wide commissioning targeted through 2028. Source: new figure to be generated. Caption: "SFMTA TCUP phased deployment from Central Subway through full system commissioning."]

## The Central Subway live testbed

The Central Subway extension opened to revenue service on November 2, 2022. It is uniquely positioned in the TCUP program as the first Muni Metro operation deployed under modern Hitachi CBTC from inception. The 1.7-mile extension added three new stations and serves as a live testbed for the new control system operating in a mixed-mode environment.

This is an unusual project structure and worth examining for any agency contemplating phased CBTC deployment. The Central Subway gave the SFMTA and Hitachi a production-grade live operating environment for the new platform before the harder phases — Market Street Subway resignaling on a 24/7 operating line, and the surface segments with their distinctive engineering challenges — needed to begin. Operational data from 2023 to 2025 has informed system tuning, integration issue resolution, and operator training requirements before the program's higher-risk phases entered revenue service.

The cost of the Central-Subway-as-testbed approach is that it requires the new infrastructure to exist before the testbed can run. Most US agencies do not have a new line opening conveniently as the first phase of a system-wide signaling replacement. The SFMTA's structural advantage was timing: Central Subway construction and TCUP procurement aligned. Other agencies — WMATA, SEPTA — face the harder problem of validating new CBTC architecture on existing operating lines without the testbed luxury.

## The mixed-mode operation engineering challenge

Hitachi SelTrac's deployment on Muni faces a distinctive technical challenge. The system must accommodate both grade-separated subway operation, where conventional CBTC methods apply, and at-grade surface streetcar operation. In subway tunnels, vehicle position is determined by odometry and wayside beacons with high precision. On surface streets, CBTC systems must contend with outdoor Wi-Fi propagation, moving obstacles (vehicles, pedestrians, cyclists), and crossing traffic.

Muni's approach, informed by international CBTC deployments on hybrid systems including Vancouver SkyTrain's surface segments and the Paris Métro Line 14 surface extensions, employs zoned speed control in surface areas with stricter safety margins than underground operation. The control system integrates traffic signal coordination and crossing detection logic, ensuring that surface-running vehicles operate conservatively when track-side conditions introduce uncertainty.

The fleet integration story is similarly mixed. Not all Muni Metro vehicles are CBTC-ready from the factory. The Siemens LRV4 fleet, introduced from 2017 onward, includes onboard hardware for CBTC operation. The older Breda LRVs — purchased in the 1990s and serving since — require retrofit kits. A subset of Breda vehicles may operate under legacy cab signaling or semi-automatic train operation modes while the CBTC retrofit fleet ramps up. This interim mixed-fleet operation complicates dispatch, crew training, and maintenance scheduling. Full system capability requires that all vehicles in service meet CBTC operational standards.

## The 2024 capital cycle and what current procurement reveals

By 2024, the SFMTA's published procurement and capital planning documents reveal three substantive program updates that other agencies should note.

First, budget pressure has driven the program total upward. Inflation in construction, materials, and engineering services drove costs upward through the 2020-to-2022 supply chain disruption period. Current projections approach $220 million-plus for full system deployment, at the upper end of the original contract range. The SFMTA is not unique in this trajectory; nearly every US transit capital program contracted in 2018-to-2019 has experienced similar inflation pressure.

Second, the schedule has extended. Full system commissioning, originally targeted within the 2026-to-2028 band, is now realistically late 2027 or 2028, reflecting revised schedule management. The extension is moderate by US transit standards and reflects ordinary commissioning discovery rather than fundamental program failure.

Third, the labor relations track has held. Integration of new control systems requires extensive operator and maintenance training through TWU Local 250-A, the transit workers' union. The SFMTA has maintained workable relations through the deployment phases reached so far, which is a meaningful procurement-program asset.

## What other agencies can learn from TCUP

[FIGURE: Comparison of SFMTA TCUP single-vendor structure versus the MTA multi-vendor approach, showing tradeoffs in integration risk, lifecycle premium, and procurement flexibility. Source: new figure to be generated. Caption: "Single-vendor (SFMTA) versus multi-vendor (MTA) procurement structures impose different lifecycle tradeoffs."]

The TCUP program offers four lessons that transfer directly to peer US agencies considering CBTC modernization on hybrid or mixed-mode networks.

First, retrofit complexity dominates schedule on hybrid networks. Working on a live, operating system necessitates careful staging and testing. Each phased segment must pass exhaustive commissioning before revenue service handoff, limiting the pace of deployment. Surface operation in particular requires engineering and validation that grade-separated-only programs do not face.

Second, single-vendor procurement is a defensible strategic choice for agencies with constrained engineering resources. The SFMTA cannot field the kind of multi-vendor integration team the MTA maintains; single-vendor procurement reduces that overhead. The lifecycle premium is real but bounded.

Third, time a new line opening to validate the new CBTC platform if program timing permits. The Central Subway live testbed approach is unusual but powerful. Agencies cannot manufacture this opportunity, but where it exists naturally — alongside an extension or a new branch — it should be used.

Fourth, plan the fleet retrofit as critical path. The Breda retrofit and the LRV4 integration determine when the surface phases can reach full CBTC operation. A signaling project that ignores the fleet retrofit timeline will deliver a partially capable system in revenue service.

## Practical takeaways

- Single-vendor procurement is appropriate for agencies with constrained integration capacity. Accept the 10-to-25 percent lifecycle premium and use Interface Control Documents and source-code escrow to mitigate lock-in.
- Mixed-mode operation requires CBTC engineering that grade-separated-only programs do not. Specify the surface-running safety margins, traffic-signal interaction, and obstacle-detection requirements in the RFP, not in change orders.
- Use new infrastructure as a live testbed where program timing permits. The Central Subway approach reduces risk on subsequent phases at zero schedule cost.
- Plan fleet retrofit as a critical-path program element, not as a separate procurement. Signaling timelines and rolling stock retrofit timelines must align.
- Carry 15-to-25 percent cost contingency on contracted values and 24-to-36-month schedule contingency on full-program timelines. The 2024 cost-and-schedule pressure on TCUP is the operating norm, not an exception.

## Where to go next

This post is an 11-minute summary. The full treatment lives in Chapter 10 ("CBTC in the United States") of *Communications-Based Train Control* (Volume 2), with vendor and procurement context in Chapters 12 and 15. [Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ). [Download Chapter 10 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch10.pdf).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: US Deployment, Procurement & Future Directions*. Independent. ISBN 979-8-258-54295-3. — Chapter 10, "CBTC in the United States" (Section 10.4, SFMTA Muni TCUP); Chapter 15, "Vendor Landscape."
- San Francisco Municipal Transportation Agency. *Train Control Upgrade Project (TCUP)*. [sfmta.com/projects/train-control-upgrade-project-tcup](https://www.sfmta.com/projects/train-control-upgrade-project-tcup)
- San Francisco Municipal Transportation Agency. *Central Subway Project*. [sfmta.com/projects/central-subway-project](https://www.sfmta.com/projects/central-subway-project)
- Federal Transit Administration. *Capital Investment Grants Program*. [transit.dot.gov/CIG](https://www.transit.dot.gov/CIG)
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- Hitachi Rail. *SelTrac CBTC Platform*. [hitachirail.com](https://www.hitachirail.com/)
