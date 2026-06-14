---
title: "Overlay CBTC vs Greenfield CBTC: Migration Tradeoffs"
slug: overlay-vs-greenfield-cbtc
description: "How overlay and greenfield CBTC deployments differ in cost, schedule, risk, and operational envelope — and the migration trade-offs that determine which path fits a given US transit corridor."
date: 2026-06-14
author: "Chunjun (Francisco) Wang"
category: comparative
tags: [overlay CBTC, greenfield CBTC, brownfield retrofit, CBTC migration, US transit]
primary_keyword: "overlay vs greenfield CBTC"
secondary_keywords: ["overlay CBTC", "greenfield CBTC", "CBTC retrofit", "brownfield CBTC", "CBTC cutover"]
related_chapters: [3, 10]
internal_links: ["/blog/cbtc-vs-traditional-signaling-8-differences"]
og_image: "/blog/img/overlay-vs-greenfield-cbtc.png"
read_time: "10 min"
---

When the New York City Metropolitan Transportation Authority awarded the L Line CBTC contract to Siemens Transportation Systems in 1999, the procurement specification asked for an overlay deployment: the new Communications-Based Train Control (CBTC) system would be installed on top of the existing fixed-block infrastructure, with the legacy track circuits and signal heads kept in place as a fallback. Twenty-four years later, when the Honolulu Authority for Rapid Transportation opened the Skyline metro in June 2023, the CBTC system was greenfield: every wayside cabinet, balise, and access point was installed in a guideway built specifically to accommodate it. The overlay vs greenfield CBTC choice does not reduce to a budget comparison; it is a categorical decision about which kinds of risk the agency wants to absorb, which operational envelope the project can sustain, and which kinds of regret the agency is most willing to live with. This article walks through the trade-offs that drive that decision and the migration patterns that have actually worked in US deployments.

## Two deployment archetypes, very different risk profiles

A greenfield CBTC deployment installs the system into infrastructure that does not yet exist or has been built specifically to host it. Fleet, wayside cabinets, balises, antennas, control center, and operational procedures are all new. There is no legacy system to integrate with, no cutover sequence to manage, and no operational continuity to preserve while construction is underway. The Honolulu Skyline (HART) is the canonical recent US example; Vancouver SkyTrain's 1985 opening was the original North American greenfield CBTC deployment. Greenfield projects can move in roughly straight lines from design through commissioning to revenue service without the operational complications that dominate brownfield work.

An overlay or brownfield CBTC deployment installs the system onto a revenue-service railroad whose legacy signaling cannot be turned off until the new system is fully proven. The L Line, the 7 Line, Queens Boulevard, and the BART Train Control Modernization Program are all overlay deployments. The new equipment must coexist with the legacy track circuits, signal heads, and interlocking logic for years; mixed-fleet operation must be supported during the transition; the cutover must be staged so that a failure in CBTC does not strand trains in revenue service. The integration scope is several times larger than greenfield, the schedule is longer, and the risk surface is substantially broader.

The two archetypes are not a continuum. They sit on opposite sides of a categorical fork that drives cost, schedule, fleet strategy, and procurement specifications.

## Cost: greenfield is cheaper, but US procurement rarely has the option

The capital cost gap between greenfield and overlay CBTC is large. The manuscript references put greenfield CBTC in the range of $15 to $25 million per 10 km when included as part of a new line construction. Overlay CBTC, depending on the corridor's age and complexity, runs substantially higher; the L Line's roughly $48 million per kilometer reflected the integration cost of inserting CBTC into a dense urban environment with full revenue service running. The BART TCMP, awarded in 2018 for 131 route-kilometers of brownfield retrofit, has a multi-billion-dollar program scope that reflects the cost of replacing a 50-year-old automated system in place.

The cost differential has three sources. The first is the engineering effort required to integrate two control systems that must coexist for years. Interface specifications, mode-transition logic, mixed-fleet operation, and rollback procedures all have to be designed, tested, and certified. The second is the cutover labor itself, which proceeds in nights and weekends rather than continuously. The third is the operational disruption cost; even when revenue service continues, the cutover work imposes service patterns (single-tracking, weekend closures, reduced frequencies) that have an opportunity cost the agency absorbs. Greenfield projects have none of these.

The honest answer for US transit, however, is that greenfield CBTC is rarely available. New US metro lines are exceedingly rare; most CBTC procurement decisions involve existing revenue-service infrastructure that cannot be closed. The Honolulu Skyline is the exception; the New York City, San Francisco, Washington DC, Boston, Atlanta, and Philadelphia procurement environments are all brownfield. The cost penalty of overlay deployment is, for most US agencies, the cost of doing CBTC at all.

![The overlay premium is roughly 2-to-3 times the equipment cost, driven primarily by integration and cutover.](/figures/fig_14_01_lifecycle_cost_stack.png)
*<small>The overlay premium is roughly 2-to-3 times the equipment cost, driven primarily by integration and cutover.</small>*

## Schedule: the cutover is the real long pole

Greenfield CBTC schedules are bounded by the underlying construction project. Once the guideway is ready, the CBTC system can be commissioned in a defined window with revenue service starting on a single date. Honolulu Skyline opened the first segment in 2023; the schedule was driven by civil construction and rolling-stock delivery, not by signaling integration.

Overlay CBTC schedules are bounded by cutover. The L Line's deployment timeline (1999 award, 2006 partial revenue, 2009 full revenue under CBTC, plus continued tuning into the late 2010s) reflects the reality that brownfield retrofits proceed in stages. Each stage requires extensive testing in mixed-mode operation, validation that the legacy fallback continues to function, and procedural training for operations staff. The cutover is not a single event; it is a multi-year sequence with each step gated by demonstrated reliability of the previous step.

The lesson from US overlay deployments is that the schedule risk lives in the cutover, not in the equipment. Vendor schedule slippage on the equipment side is recoverable; cutover schedule slippage compounds because each stage depends on the previous one. Procurement specifications should require the vendor to commit to cutover-stage durations, not just equipment-delivery dates, and should include incentives that reward demonstrated cutover performance rather than nominal commissioning milestones.

## Mixed fleet, mixed mode, and the engineering pain of overlay

The single hardest engineering problem in overlay CBTC is mixed-fleet operation during the transition. The L Line had a relatively easy version of this problem because the R143 and R160 fleets were both delivered with factory-installed Siemens Trainguard MT VOBCs; the legacy fixed-block system had to support those CBTC-equipped trains, but the fleet was homogeneous on the CBTC side.

Many other US deployments are not so lucky. The 7 Line and Queens Boulevard have inherited fleet diversity that complicates the transition. The BART TCMP must operate across multiple car classes whose performance envelopes differ; the wayside computes its braking-curve safety margins against the worst-case envelope, which limits the achievable headway during the cutover period. Mixed-mode operation (some trains under CBTC, others under the legacy fallback) requires the wayside to maintain two parallel safety cases for the same physical infrastructure.

Greenfield deployments avoid this entirely. The fleet is delivered factory-equipped to a single specification; the wayside computes against a known performance envelope; mixed-mode operation does not arise during commissioning because there is no legacy mode to mix with.

## Operational continuity and the dispatcher's view

Overlay deployments must preserve operational continuity throughout the transition. Riders cannot be told that the line is closed for two years while the signaling is replaced; revenue service has to continue, on a schedule that is at most modestly degraded. This creates a constraint that shapes every aspect of the deployment: the cutover sequence, the test windows, the dispatcher procedures, the operations control center configuration, and the workforce training plan.

Greenfield deployments have a simpler operational story. The dispatcher, operations staff, and maintenance team are trained on the new system before opening day; there is no need to maintain dual proficiency in legacy and CBTC procedures. The first revenue-service days are the system's natural operational state, not a transitional one.

The trade-off is in opening-day risk. Greenfield deployments have no legacy fallback; if CBTC has an issue on opening day, there is no fixed-block system to revert to. Overlay deployments retain the legacy fallback for years, which provides operational insurance during the cutover and shakedown periods. Honolulu Skyline opened with a system that had no analog fallback; the project's risk management plan accordingly invested heavily in pre-revenue-service testing and validation. The L Line opened with the legacy fixed-block system available, which provided real-world insurance during the post-cutover stabilization period.

## Migration patterns that have worked in US deployments

Three migration patterns dominate US overlay CBTC experience.

The first is the segmental cutover, exemplified by the L Line and the 7 Line. The line is divided into segments; CBTC is commissioned segment by segment, with each segment moving from fixed-block to mixed-mode to full CBTC over a defined window. The legacy infrastructure remains available throughout. This pattern minimizes operational disruption but extends the schedule.

The second is the parallel-running cutover, used in some BART TCMP segments. The CBTC system runs in shadow mode (computing Movement Authorities and recording what it would have done) while the legacy system retains operational control. Comparison of CBTC outputs against legacy outputs is used to validate the new system before granting it operational authority. This pattern has the lowest residual risk but is the most expensive because both systems run concurrently for an extended period.

The third is the single-event cutover, used when the legacy system is too far gone to maintain dual operation. This is rare in US transit because of the operational risk; it requires the agency to accept that legacy operation cannot continue past a defined date and that CBTC must be ready by that date with no fallback. Single-event cutovers have been used in some greenfield-adjacent contexts (when an existing line is fully reconstructed) but rarely in pure overlay deployments. (For a deeper look at how the L Line specifically handled its transition, see How CBTC Lets the L Line Run a Train Every 110 Seconds.)

![Three migration patterns dominate US overlay CBTC, each trading cost against residual risk.](/figures/fig_03_05_overlay_vs_standalone.png)
*<small>Three migration patterns dominate US overlay CBTC, each trading cost against residual risk.</small>*

## What this means in practice

- Treat overlay vs greenfield as a categorical fork, not a budget slider. The decision drives cost, schedule, fleet strategy, and procurement specifications.
- Greenfield CBTC is the cheaper, faster, lower-risk option but is rarely available in US transit. Most procurement decisions are between flavors of overlay.
- The cost premium of overlay over greenfield is concentrated in integration engineering and cutover labor, not in equipment. RFP cost evaluations should price these separately.
- Cutover schedule risk dominates; the equipment-delivery schedule is secondary. Procurement specifications should commit the vendor to demonstrated cutover-stage durations.
- Mixed-fleet operation during the transition is the hardest engineering problem in overlay deployment. Specify it explicitly; do not assume the vendor will handle it implicitly.
- Choose the migration pattern (segmental, parallel-running, single-event) based on the corridor's risk tolerance, fleet condition, and cutover budget. Each pattern has different residual risk profiles.

## Where to go next

This post is a deployment-strategy overview. The full treatment of CBTC migration, including detailed cutover playbooks and US case studies, lives in Chapter 10 ("CBTC in the United States") and Chapter 14 ("CBTC Lifecycle Cost") of *Communications-Based Train Control* ([Volume 2 on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 10 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch10.pdf)

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Deployment, Economics, and the Future*. Independent. ISBN 979-8-258-54295-3. — Chapter 10, "CBTC in the United States"; Chapter 3, "CBTC System Architecture Overview"; Chapter 14, "CBTC Lifecycle Cost."
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- MTA New York City Transit. *Communications-Based Train Control Status Update*. [new.mta.info/project/communications-based-train-control-cbtc](https://new.mta.info/project/communications-based-train-control-cbtc)
- Bay Area Rapid Transit District. *Train Control Modernization Program*. [bart.gov/about/projects/cad](https://www.bart.gov/about/projects/cad)
- Honolulu Authority for Rapid Transportation. *Skyline Project Overview*. [honolulutransit.org](https://www.honolulutransit.org/)
- Federal Transit Administration. *Capital Investment Grants Program*. [transit.dot.gov/CIG](https://www.transit.dot.gov/CIG)
