---
title: "From GoA 2 to GoA 4: Prerequisites Most Agencies Underestimate"
slug: goa-2-to-goa-4-prerequisites
description: "Moving from GoA 2 to GoA 4 is more than a software upgrade. This post walks through the platform screen doors, obstacle detection, redundancy, yard automation, and labor work most agencies underestimate when they propose driverless operation."
date: 2026-05-21
author: "Chunjun (Francisco) Wang"
category: operations
tags: [GoA 4, GoA 2 to GoA 4, driverless metro, platform screen doors, unattended train operation, GoA upgrade]
primary_keyword: "GoA 2 to GoA 4"
secondary_keywords: ["GoA 4 prerequisites", "driverless metro requirements", "platform screen doors CBTC", "GoA 4 retrofit", "unattended train operation requirements"]
related_chapters: [8]
internal_links: ["/blog/goa-0-4-explained-grades-of-automation", "/blog/iec-62290-international-cbtc-standard", "/blog/safety-case-document-cbtc"]
og_image: "/blog/img/goa-2-to-goa-4-prerequisites.png"
read_time: "10 min"
---

When a US transit agency announces it is "studying GoA 4," what comes next is usually a procurement-friendly slide deck describing labor savings of 30 to 50 percent, headway compression to 90 seconds, and 24/7 service economics that the agency cannot achieve at GoA 2. What comes after that, when the agency engages a real engineering team to build the case, is a much longer list of prerequisites — physical, organizational, regulatory, and labor — that the procurement-friendly slide deck did not mention. Honolulu Skyline could specify GoA 4 from inception because Skyline is greenfield. The MTA, BART, WMATA, SFMTA, and CTA cannot. Their existing fleets, stations, yards, and labor agreements are GoA 2 artifacts, and the path from GoA 2 to GoA 4 is not a software upgrade. This post walks through the prerequisites most agencies underestimate when they pitch the GoA 4 business case.

## Why this matters for procurement

The GoA 2 to GoA 4 upgrade conversation typically starts in the agency's strategic planning function and lands in the procurement function several years later, after the engineering scope has been defined. Agencies that engage the engineering scope honestly at the front end produce realistic schedules and budgets. Agencies that do not face cost growth and schedule slippage that can derail the project. This post is for the agency executive evaluating the GoA 4 case, the procurement officer building the scope of work, and the consulting engineer who has been asked to validate the schedule. (For the GoA framework itself, see [GoA 0–4 Explained: The Five Grades of Train Automation](/blog/goa-0-4-explained-grades-of-automation).)

## Prerequisite 1: Platform screen doors at every station

Platform Screen Doors (PSDs) are the single most important physical prerequisite for GoA 4 on a metro system. Without an attendant onboard, there is no human to observe or prevent passenger falls and platform-edge intrusions. PSDs eliminate the platform-to-track gap entirely, removing the hazard at its source. Every operating GoA 4 mainline metro globally — Paris, Singapore, Copenhagen, Dubai, Honolulu Skyline — uses PSDs. There are essentially no exceptions.

Full-height PSDs (2.4 to 3.0 meters, extending the full platform length) are strongly preferred over half-height PSDs. Half-height versions can be acceptable on shorter lines with very high obstacle detection confidence and CCTV oversight, but they are not the default.

The cost is significant. Industry references put PSDs at roughly $50,000 to $100,000 per door set, with 8 to 12 sets per station on a typical metro line. Retrofitting PSDs onto an existing station with platform geometry that was not designed for them adds further cost: structural reinforcement, platform edge modification, accessibility compliance, and historic preservation review where applicable. A reasonable order-of-magnitude figure for retrofit PSD on a US legacy metro station is in the multi-million-dollar range per station; multiplied across a 30-station line, the PSD program alone can be a $100 million to $300 million capital line item.

Stations with curved platforms, stations with substandard platform width, and stations with historic preservation constraints can be effectively unbuildable for PSD retrofit without major reconstruction. Many of the older US metro stations (parts of the NYC subway system, Chicago's elevated stations, parts of the BART network) fall into one or more of these categories. (For why this drives the safety case, see [The Safety Case Document: What's Inside, How It's Reviewed](/blog/safety-case-document-cbtc).)

## Prerequisite 2: Onboard and trackside obstacle detection

Without a driver in the cab, the system must detect obstacles automatically. This requires layered sensing:

Onboard sensing typically includes forward-looking cameras with computer vision, LiDAR for range and 3D mapping, radar for poor-visibility detection, and ultrasonic or short-range sensors for close obstacle detection. Each technology has different strengths; production GoA 4 systems use sensor fusion across multiple modalities to reduce false positives and false negatives.

Trackside sensing typically includes CCTV with video analytics covering platforms, stations, and yards; trespasser detection on non-fenced segments; and crossover and switch monitoring at junctions.

The combined sensor program is engineered to detect a fallen object on the track ahead, an unauthorized person in the right-of-way, an animal, or a piece of debris with enough warning time for the train to brake to a stop. The performance target — typical industry references suggest detection range on the order of 100 meters or more for the relevant speed range — drives sensor selection and placement.

Sensor health monitoring runs continuously, with self-test and diagnostics that take a sensor offline if it cannot be trusted. Redundancy is the rule: a single sensor failure cannot disable obstacle detection.

## Prerequisite 3: Onboard redundancy uplift

GoA 2 systems typically operate Vehicle On-Board Controllers in 2-out-of-2 (2oo2) voting or simplex with monitoring. GoA 4 typically demands 2-out-of-3 (2oo3) voting, in which three independent processing channels each run the safety logic and the system votes on each control cycle.

The architecture matters because of the failure modes it admits. Under 2oo2, a disagreement between channels forces a safe state; the train brakes. Under 2oo3, the system continues operating with two healthy channels even after one fails, which is what allows GoA 4 to maintain availability without dropping into a degraded mode every time a single channel hiccups. The cost is in the hardware and certification effort: three channels rather than two, with corresponding effort in software diversity, voting logic, and Independent Safety Assessment scope.

The fleet implication is that the existing GoA 2 train fleet may not have the onboard architecture to support GoA 4 without a significant onboard rebuild. Procurements that pitch a "GoA 2 to GoA 4 upgrade path" often understate the fleet investment required.

## Prerequisite 4: Yard automation

GoA 4 requires that trains move themselves from yard to revenue service and back without human crew aboard. This means the yard, not just the mainline, must be CBTC-equipped, with automated stabling, automated coupling and uncoupling where applicable, automated wash and inspection interfaces, and automated pre-departure diagnostics that confirm the train is fit for service.

Many US transit yards were not built for any of this. Yards typically have at-grade level crossings, mixed traffic with maintenance vehicles, and infrastructure designed around human operators in the cab. Retrofitting CBTC to a yard adds capital cost in the same range as retrofitting CBTC to a mainline, and yard retrofits are sometimes harder because yard track geometry is more complex and shop infrastructure must be coordinated.

A pragmatic alternative is yard tele-operation: human operators in a remote control center drive the trains in the yard while ATO handles mainline operation. This compromises the labor savings but preserves the operational viability. Several international GoA 4 deployments use yard tele-operation either as a long-term arrangement or as an interim step.

## Prerequisite 5: OCC redesign and staffing

The Operations Control Center (OCC) is the operational hub for any CBTC system, but its role expands substantially at GoA 4. The OCC operator becomes the "virtual driver" for incidents that an onboard staff member would otherwise handle: passenger emergencies, door obstructions, security incidents, fire alarms, and degraded operations.

The OCC must be equipped with real-time CCTV from every train and station, telemetry dashboards covering speed and door status across the fleet, automated emergency response tools (remote door control, train hold, emergency stop), and direct integration with fire dispatch, ambulance, and transit police. The OCC operator workload changes: fewer routine dispatch decisions, more exception handling, longer attention spans for low-frequency high-stakes events.

The staffing model and the training program must match. GoA 4 OCC operators typically receive substantially more training than GoA 2 dispatchers, including emergency response, de-escalation, and remote intervention scenarios. The cost of building and staffing a GoA 4 OCC is real, and it offsets some of the labor savings from removing onboard crews. Net labor savings remain positive — usually substantially so — but the offset is part of an honest business case.

[FIGURE: GoA 4 prerequisite stack showing physical infrastructure (platform screen doors, obstacle detection, yard automation), system capabilities (2oo3 redundancy, automated emergency procedures, OCC tooling), and organizational capabilities (labor agreement, OCC staffing, regulatory pathway, vendor confidence).
Source: existing book figure fig_08_04_goa4_prerequisites.png.
Caption: "GoA 4 is a stack of physical, system, and organizational prerequisites, not a software switch."]

## Prerequisite 6: Labor agreement

The labor prerequisite is at least as consequential as the physical ones, and it has no engineering substitute. US transit operators are unionized, primarily through TWU and ATU locals, with collective bargaining agreements that specify staffing levels and work rules. Moving to GoA 4 reduces or eliminates train operator positions; the union's response shapes the project.

The agencies that have moved to GoA 4 successfully — Honolulu in particular — have done so either because they were greenfield (no incumbent operator workforce to transition) or because they negotiated labor agreements that included retraining, redeployment to OCC and station roles, attrition-based workforce reduction, or generous separation packages. The agreements typically take 12 to 24 months to negotiate. They cannot be improvised at the end of a procurement; they must be negotiated alongside it, often before procurement begins.

Several US agencies have studied GoA 4 and concluded that the labor work was prohibitive within their political and contractual context. That is a legitimate conclusion. Pretending the labor work is trivial, then discovering halfway through the project that it is not, is the recipe for a stalled project.

## Prerequisite 7: Regulatory and SSO pathway

The Federal Transit Administration does not mandate or prohibit any GoA level. The State Safety Oversight agency reviews each project on its own. For agencies that have only deployed GoA 2 in the past, the GoA 4 review is a new pathway: new safety case structure, new operational hazard analysis, new degraded mode analysis with no onboard crew, new emergency response procedures.

The SSO timeline for first-time GoA 4 review at an agency typically extends 6 to 12 months beyond the equivalent GoA 2 timeline. Agencies that have already deployed GoA 4 (or are doing so concurrently) benefit from the precedent; agencies that are first-time face the full review burden. Engaging the SSO at the concept stage of GoA 4 planning is essential.

The Independent Safety Assessor scope also expands. The safety case must explicitly address the absence of onboard crew, the failure modes of the obstacle detection sensor stack, and the response time for emergency situations that would otherwise involve human onboard intervention. ISA effort on a first-time GoA 4 case is typically 30 to 50 percent higher than on an equivalent GoA 2 case.

## Prerequisite 8: Vendor capability and reference systems

Not every CBTC vendor has delivered GoA 4. Alstom (Paris RATP, Copenhagen, Singapore, Lisbon), Siemens (multiple European systems), Thales / Hitachi Rail (London, Bangkok), and Hitachi Rail STS (Honolulu) have substantial GoA 4 reference portfolios. Other vendors have GoA 2 platforms with declared GoA 4 capability but limited operational reference base.

For a US agency, "we can do GoA 4" from a vendor is not equivalent to "we have delivered GoA 4 in your climate, your regulatory environment, and your operational context." The agency should ask for specific reference systems, ideally including site visits and conversations with the operating agencies, before accepting a GoA 4 capability claim. The Buy America compliance constraint adds another filter: the vendor must have or be able to establish US manufacturing and assembly to satisfy 49 CFR Part 661 on an FTA-funded project.

## Prerequisite 9: Public communication and acceptance

The Honolulu Skyline experience suggests that US ridership adapts to GoA 4 quickly when the service is reliable and the emergency response is clearly explained. The political acceptance work is less about the riders and more about the elected officials, the boards, and the labor stakeholders who must endorse the project.

Agencies that have moved successfully invest in transparent public communication: how the system works, what happens in an emergency, who is responsible for what. Agencies that have stalled tend to have allowed the conversation to be framed as "no one will be on the train" without the corresponding explanation of "but here is who is responsible and how response works." The framing matters.

## What the agency keeps, what changes

Through all of this, the architectural separation between ATP, ATO, and ATS does not change. ATP still provides the safety floor, still operates at SIL 4, still cannot be overridden. ATO still drives the train within the ATP envelope. ATS still supervises the line from the OCC. (For the architectural triad, see [ATP, ATO, ATS: The Three-Layer Triad of Modern Train Control](/blog/atp-ato-ats-triad).)

What changes at GoA 4 is the responsibility allocation around that architecture: the driver and attendant roles disappear from the train and are replaced by automation, OCC operators, station staff, and security. The technical architecture that supports GoA 2 is the foundation; GoA 4 builds on top of it.

## Practical takeaways

- GoA 2 to GoA 4 is not a software upgrade. The prerequisites are physical (PSDs, obstacle detection, yard automation), system-level (2oo3 redundancy, OCC tooling), organizational (labor agreement, OCC staffing), and regulatory (SSO pathway, ISA scope expansion).
- Platform Screen Doors at every station are the dominant physical cost. Retrofit PSD on a US legacy metro is in the multi-million-dollars-per-station range.
- The fleet implication of moving from 2oo2 to 2oo3 onboard redundancy is significant. A "GoA 4 upgrade path" without fleet investment is incomplete.
- Yard automation is its own capital project. Yard tele-operation is a viable interim solution but does not capture the full GoA 4 labor benefit.
- Labor agreement is at least as consequential as engineering. Successful US GoA 4 deployments have either been greenfield or have negotiated labor terms covering retraining, redeployment, attrition, or separation.
- First-time GoA 4 review at an agency adds 6 to 12 months to the SSO pathway and 30 to 50 percent to ISA effort. Engaging the SSO at concept stage is essential.

## Where to go next

This post is a brief summary. The full treatment lives in Chapter 8 of *Communications-Based Train Control* ([Volume 2 on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 8 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch08.pdf)

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Deployment, Operations & Strategy*. Independent. ISBN 979-8-258-54295-3. — Chapter 8, "Grades of Automation"; Chapter 12, "Project Lifecycle and Delivery."
- International Electrotechnical Commission. *IEC 62290-1: Railway applications — Urban guided transport management and command/control systems — Part 1: System principles and fundamental concepts*.
- International Association of Public Transport (UITP). *World Report on Metro Automation*. [uitp.org](https://www.uitp.org/)
- Honolulu Authority for Rapid Transportation (HART). *Skyline Project Information*. [honolulutransit.org](https://www.honolulutransit.org/)
- RATP. *Métro Line 1 and Line 14 Operations*. [ratp.fr](https://www.ratp.fr/)
- Singapore Land Transport Authority. *Driverless Operations on the North-South and East-West Lines*. [lta.gov.sg](https://www.lta.gov.sg/)
- Federal Transit Administration. *State Safety Oversight Program*. [transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight](https://www.transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight)
