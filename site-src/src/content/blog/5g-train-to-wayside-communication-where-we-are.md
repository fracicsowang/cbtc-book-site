---
title: "5G in Train-to-Wayside Communication: Where We Actually Are"
slug: 5g-train-to-wayside-communication-where-we-are
description: "An honest 2026 assessment of 5G, 5G-R, FRMCS, LTE-R, and private LTE for CBTC train-to-wayside communication. What is in production, what is in pilot, and what the credible US migration path actually looks like."
date: 2026-05-23
author: "Chunjun (Francisco) Wang"
category: trends
tags: [5G CBTC, FRMCS, 5G-R, LTE-R, private LTE rail, CBRS transit, train-to-wayside communication, US transit radio]
primary_keyword: "5G in CBTC"
secondary_keywords: ["FRMCS US transit", "LTE-R CBTC", "5G train control", "private LTE transit", "CBRS rail signaling", "train-to-wayside 5G"]
related_chapters: [6, 15]
internal_links: ["/blog/what-is-cbtc-2026-guide", "/blog/wifi-vs-lte-r-train-wayside", "/blog/the-2030-cbtc-landscape-5-predictions"]
og_image: "/blog/img/5g-train-to-wayside-communication-where-we-are.png"
read_time: "10 min"
---

The year 2026 is when 5G in transit started to mean something more specific than "next-generation cellular." Vendor roadmaps have published dates, several US transit agencies have completed feasibility studies, the European Future Railway Mobile Communication System program has crossed from specification into reference implementation, and the Citizens Broadband Radio Service has moved from experimental status into operational deployments at WMATA, MTA, and BART. None of this means that US CBTC train-to-wayside communication has crossed over to 5G in revenue service. Most US CBTC is still on 802.11n and 802.11ac Wi-Fi at 2.4 and 5 GHz, and most of it will remain there for the rest of this decade. But the picture is no longer the abstract one it was three years ago, and an agency or vendor planning a CBTC procurement in 2026 needs to understand the migration paths well enough to write the radio specification correctly. This post is the honest 2026 status check: what is in production, what is in pilot, what the credible US migration paths look like, and what is hype.

## The starting point: where we actually are

The vast majority of US CBTC systems in revenue service in 2026 use IEEE 802.11 Wi-Fi as the train-to-wayside radio. The dominant standards are 802.11n (Wi-Fi 4, deployed widely in mid-2010s systems) and 802.11ac (Wi-Fi 5, the typical choice for new and recent deployments). The frequency bands are the unlicensed Industrial, Scientific, and Medical (ISM) bands at 2.4 GHz and 5 GHz, with most modern deployments using 5 GHz as the primary control channel and 2.4 GHz as backup or for non-safety-critical traffic.

The architecture is well-understood. Access points are deployed in linear arrays along the guideway, spaced 150 to 350 meters in tunnels and 250 to 500 meters at-grade, with 10 to 20 percent overlap between adjacent access points to support seamless handover. Standard IEEE 802.11r fast-roaming techniques reduce handover latency to 50 to 150 milliseconds, which fits inside the 250-millisecond safety-critical handover window that CBTC ATP enforces. The data volumes are modest: a single train requires roughly 5 to 50 kilobits per second for position reports and control commands, and even a Zone Controller managing 30 trains generates only 5 to 20 megabits per second of total CBTC traffic.

This architecture has worked. The L Line, the 7 Line, the Honolulu Skyline, the active Queens Boulevard deployment, BART's Train Control Modernization Program, and SFMTA's Muni upgrade all sit on Wi-Fi-based CBTC, and the operational performance is acceptable. The known weaknesses are well-documented: ISM-band contention, vulnerability to interference from passenger devices and neighboring networks, and the need for dense access-point networks. (For the architecture and the comparison with predecessors, see [What Is Communications-Based Train Control (CBTC)? A 2026 Plain-English Guide](/blog/what-is-cbtc-2026-guide).)

## The European push: FRMCS

The most credible 5G-for-rail program in 2026 is the European Future Railway Mobile Communication System. FRMCS is a 5G-based platform developed under the Union Internationale des Chemins de fer leadership in partnership with the European Telecommunications Standards Institute and 3GPP. It is built on 3GPP Release 17 and later, and it incorporates 5G New Radio, network slicing, ultra-reliable low-latency communications targeting air-interface latencies below 1 millisecond at 99.999 percent reliability, and mission-critical push-to-talk and data services. Its primary purpose is to replace GSM-R, the second-generation cellular technology that has run European mainline radio communications since the late 1990s and is reaching end-of-life around 2030.

The credible FRMCS timeline projects initial commercial deployments on mainline European railways beginning in 2026 to 2028, with broader transition through 2030 and substantially complete adoption by 2035 to 2040. The reason FRMCS matters to US transit agencies is not direct adoption — FRMCS is targeted at European mainline rail rather than US transit — but indirect influence. Engineering expertise and software frameworks developed for FRMCS are propagating into the civilian-specification 5G products that vendors are developing for US transit. A US transit agency specifying a new CBTC system in 2027 or later will encounter vendors offering FRMCS-derived equipment as a near-standard option for new deployments.

## The US-specific obstacle: spectrum

The US has no rail-specific spectrum allocation comparable to Europe's 1900 MHz FRMCS band. The 220 MHz band used for Positive Train Control on freight and commuter rail is heavily encumbered by I-ETMS, does not provide the bandwidth or latency needed for continuous CBTC communications, and is not accessible to transit agencies for new allocations. FirstNet, the AT&T-operated nationwide public safety network in the 700 MHz band, is reserved for public safety and is not available for routine rail operational use.

The practical pathways for US transit agencies pursuing cellular-grade radio are three.

The first is Citizens Broadband Radio Service. CBRS, authorized under the 2016 Spectrum Modernization Act, operates in the 3.5 GHz band under a three-tier access model. Federal incumbents (military radar and fixed satellite earth stations) retain priority. Priority Access License holders enjoy secondary exclusive rights over defined geographic areas under annual licenses. General Authorized Access users operate on a best-effort basis. Several US transit agencies — WMATA, MTA, and BART notably — have obtained CBRS Priority Access Licenses and deployed private LTE networks. These deployments have so far been used for workforce communications, asset tracking, and operational technology, not for safety-critical train control. The migration from these non-safety uses to CBTC-grade safety-critical service remains under evaluation, with key open questions on whether CBRS Quality of Service guarantees can satisfy SIL 4 safety requirements, how to handle spectrum relinquishment if a federal incumbent activates, and how to obtain regulatory approval from the FCC and FTA for CBRS-dependent safety functions.

The second is sub-6 GHz licensed spectrum obtained through direct FCC auctions or partnerships with commercial carriers. This pathway has been less common in transit because commercial carriers prioritize their retail mobile broadband customers and are reluctant to guarantee Quality of Service to competing services. Some agencies have explored arrangements where they own or lease spectrum and operate it through a neutral network operator.

The third is millimeter-wave 5G, above 24 GHz. This pathway is unlikely for train control because of the severe propagation limitations in tunnels and at distance. Millimeter wave may serve high-capacity backhaul or station passenger Wi-Fi in some deployments, but the train-to-wayside primary channel is unlikely to use it.

[FIGURE: WLAN to 5G-R migration pathway diagram showing the three credible US transit paths: hybrid (WLAN primary, LTE/5G secondary), LTE-R or 5G-R overlay, and full replacement (greenfield only).
Source: existing book figure fig_15_04_5g_migration.png.
Caption: "The credible US transit migration paths from Wi-Fi-based CBTC to LTE-R or 5G-R communication, with timelines projected by vendor roadmaps as of 2026."]

## The credible US migration paths

Three migration paths are credible for US transit CBTC over 2026 to 2032. The naming and the rough timing are consistent with current vendor roadmaps.

### Hybrid (most likely near-term, 2026 to 2032)

The most likely near-term US deployment pattern is hybrid: primary CBTC safety channels remain on Wi-Fi, while secondary backup channels, non-safety operational telemetry, video traffic, and emerging advanced functions migrate to private LTE or early-stage 5G. This minimizes disruption, reduces migration risk, and lets agencies build operational expertise with cellular technology before committing critical safety functions to it. Most of the WMATA, MTA, and BART CBRS deployments in 2026 are in this category. The non-safety side is on LTE; the safety side is still on Wi-Fi.

This pattern is appropriate for an agency that is in the middle of a Wi-Fi-based CBTC deployment, that has just procured Wi-Fi infrastructure with a 15- to 20-year asset life, or that is risk-averse on the safety-critical migration. It is the path of least disruption.

### LTE-R or 5G-R overlay (emerging, 2028 to 2035)

The more ambitious path is a dedicated LTE-R or 5G-R network fully supporting CBTC signaling, train protection, and Automatic Train Operation, with Wi-Fi retained as cold backup or phased out entirely. This requires VOBC redesign at the radio interface, safety-standard validation, and cybersecurity certification. Several US transit agencies — MTA, WMATA, Denver — have authorized feasibility studies. Major vendors (Siemens, Hitachi Rail STS) have announced product-development timelines targeting 2027 to 2029 for LTE-R or 5G-R CBTC reference designs.

This pattern is appropriate for an agency that is at the start of a new CBTC procurement cycle and willing to specify cellular-grade radio as a primary requirement. The risk premium is real — the technology is newer, the certification is in progress, and the vendor product portfolios are not yet fully mature — but the long-term operational benefits (handover performance, interference resilience, native QoS, cybersecurity primitives) are significant.

### Full replacement (unlikely before 2030 for installed base, standard for new build)

The third path is full replacement of Wi-Fi with native 5G-NR or FRMCS-derived radio from the start. This is the expected pattern for greenfield automated people movers, new metro lines, and next-generation systems commissioned after 2030. For brownfield retrofits of existing CBTC installations, full replacement is unlikely before 2030 because the installed Wi-Fi infrastructure has remaining asset life and the cutover risk is high.

## What URLLC, network slicing, and beam-forming actually buy

Several 5G capabilities are credibly different from Wi-Fi and matter for CBTC.

Ultra-Reliable Low-Latency Communications targets air-interface latency of 1 millisecond or less and reliability of 99.999 percent. This is a qualitative leap from Wi-Fi handover latencies (50 to 150 ms in well-tuned 802.11r deployments) and traditional LTE latencies (50 to 100 ms). For CBTC, the 250-millisecond safety-critical handover window is comfortably met by both Wi-Fi and 5G; the URLLC advantage is in headroom rather than in basic feasibility.

Network slicing is more transformative in principle. A single physical 5G infrastructure can support multiple logical network instances with isolated resource pools, QoS guarantees, and service level agreements. A transit agency could operate a mission-critical train-control slice, a secondary non-safety operational slice, and a passenger connectivity slice on shared infrastructure without cross-talk. The catch is that network slicing in production deployments is still maturing, and the misconfiguration risk is real — cross-slice attacks are a credible threat in the security literature.

Massive MIMO and beam-forming improve spectral efficiency and propagation range. Preliminary European measurements suggest 5G-NR coverage with four to eight times the range of comparable Wi-Fi access points. For at-grade and elevated transit, this could meaningfully reduce access-point density and capital cost. For tunnel deployments, the gains are smaller because the tunnel geometry constrains propagation regardless of the radio technology.

## The cybersecurity layer changes

Migration from Wi-Fi to IP-based cellular infrastructure expands the attack surface. A 5G CBTC network connects to a broader ecosystem: carrier networks, cloud platforms, remote operations centers, third-party SaaS providers. The expanded surface requires layered security architecture.

5G introduces useful security primitives. Subscriber Concealed Identifier obscures permanent device identity during authentication. Authenticated Key Management for Applications enables application-layer security from lower-layer authentication. Enhanced encryption and mutual authentication are stronger than Wi-Fi defaults. The countervailing risks are network slicing misconfiguration, the expanded attack surface from Software-Defined Networking and Network Function Virtualization components, and the dependency on cloud-connected infrastructure that complicates the safety case.

The relevant guidance — TSA Security Directives 1580 and 1582, NIST SP 800-82 Revision 3, and the emerging rail-specific standards under development by IEC and APTA — emphasizes zero-trust architecture: assume no implicit trust, verify every connection, enforce least privilege, maintain continuous monitoring. These principles apply regardless of the underlying radio technology, but the migration to cellular infrastructure makes them more consequential.

## What an agency procuring in 2026 should do

Several practical steps are credible for an agency starting a CBTC procurement in 2026.

Specify the radio technology with the right level of vendor flexibility. A specification that mandates 802.11ac forecloses future migration; a specification that mandates 5G-NR forces the agency into a small set of vendors with immature product portfolios. The middle path is to specify the performance characteristics (handover latency, reliability, capacity, coverage) and require the vendor to document the migration path from the proposed initial radio to LTE-R or 5G-R over the system's 20- to 30-year asset life.

Require open documentation of the radio interface to the VOBC. The lifecycle radio change is more feasible if the VOBC has a documented and replaceable radio interface; it is less feasible if the radio is integrated into the safety-critical path in a way that requires recertification on every change.

Plan for the cybersecurity architecture upfront, not as a bolt-on. The TSA SD 1580 and 1582 baseline applies regardless of radio choice; the cellular migration makes the SD requirements more consequential. The agency that builds zero-trust architecture from procurement is in a better position than the agency that retrofits it later.

Engage with the FCC and the FTA early on CBRS-dependent paths. CBRS-based safety-critical CBTC is feasible in principle but requires regulatory engagement to clear the SIL 4 questions and the spectrum-relinquishment procedures. The agencies that have moved fastest on CBRS for non-safety uses are also the ones that have engaged the regulators earliest. (For the longer-arc projection, see [The 2030 CBTC Landscape: 5 Predictions](/blog/the-2030-cbtc-landscape-5-predictions).)

## What this means in practice

- US CBTC train-to-wayside communication in 2026 is predominantly 802.11n and 802.11ac Wi-Fi at 2.4 and 5 GHz, with most deployments expected to remain on this baseline through 2028 to 2030.
- The European FRMCS program is the most credible 5G-for-rail effort and projects initial commercial deployments in 2026 to 2028. Its primary US relevance is indirect: FRMCS-derived engineering and software propagate into civilian 5G products available to US transit.
- The US lacks rail-specific spectrum. The credible cellular pathways are CBRS at 3.5 GHz (where WMATA, MTA, and BART have obtained Priority Access Licenses for non-safety uses), sub-6 GHz licensed spectrum, and direct carrier partnerships. Millimeter wave is unlikely for train control.
- Three migration paths are credible: hybrid (Wi-Fi primary, LTE/5G secondary; the most likely near-term path), LTE-R or 5G-R overlay (emerging, 2028 to 2035), and full replacement (unlikely for installed base before 2030, expected for new builds after 2030).
- 5G's most differentiated capabilities for CBTC are URLLC (latency and reliability headroom), network slicing (logical isolation on shared infrastructure), and massive MIMO (range and capital-cost reduction). Each has practical caveats.
- Cybersecurity expectations rise with the cellular migration. TSA SD 1580/1582 and NIST SP 800-82 Rev 3 are the operative frameworks, and zero-trust architecture is the design baseline.

## Where to go next

This post is a 10-minute briefing. The full discussion of the radio architecture, the 5G migration pathway, and the cybersecurity implications lives in Chapters 6 and 15 of *Communications-Based Train Control* (Volumes 1 and 2): [Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 1: Foundations & Technical Architecture* and *Volume 2: Operations, Lifecycle & US Deployment*. Independent. ISBN 979-8-258-54295-3. — Chapter 6, "Communication Systems"; Chapter 15, "Vendor Landscape and Technology Trends."
- 3GPP. *Release 17 specifications for 5G New Radio and URLLC*. [3gpp.org](https://www.3gpp.org/)
- International Union of Railways (UIC). *Future Railway Mobile Communication System (FRMCS) program*. [uic.org](https://uic.org/)
- Federal Communications Commission. *Citizens Broadband Radio Service (CBRS) at 3.5 GHz*. [fcc.gov](https://www.fcc.gov/)
- IEEE Standards Association. *IEEE 802.11n, 802.11ac, 802.11r — Wireless LAN standards*.
- Transportation Security Administration. *Security Directives 1580 and 1582 — Rail and Transit Cybersecurity*.
- National Institute of Standards and Technology. *NIST Special Publication 800-82 Revision 3: Guide to Operational Technology (OT) Security*.
- Washington Metropolitan Area Transit Authority. *CBRS and Operational Technology Reports*. [wmata.com](https://www.wmata.com/)
- Metropolitan Transportation Authority (NY). *Capital Program documentation*. [new.mta.info](https://new.mta.info/)
- Bay Area Rapid Transit. *Train Control Modernization Program Status Reports*. [bart.gov](https://www.bart.gov/)
