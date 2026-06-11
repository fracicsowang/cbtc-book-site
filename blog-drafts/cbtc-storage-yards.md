---
title: "CBTC in Storage Yards: Why It's a Different Engineering Problem"
slug: cbtc-storage-yards
description: "Yards and depots are where CBTC architectures struggle: low speeds, high track density, mixed manual and automated movements, weak radio coverage, and a dispatcher-driven authority model that does not look like mainline operation. An engineer's treatment of the yard problem and the design patterns that work."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: technical
tags: [CBTC, yard, depot, storage, non-CBTC, mode transitions, US transit]
primary_keyword: "CBTC yard"
secondary_keywords: ["CBTC depot", "non-CBTC mode yard", "yard mainline handoff", "yard signaling", "storage track signaling"]
related_chapters: [3, 9]
internal_links: ["/blog/operating-modes-cbtc-normal-restricted-manual-failure", "/blog/wayside-equipment-layout-antennas-cabinets-cables", "/blog/atp-ato-ats-triad"]
og_image: "/blog/img/cbtc-storage-yards.png"
read_time: "10 min"
---

A transit agency's storage yard is where the math of Communications-Based Train Control (CBTC) breaks down. The mainline assumptions — trains spaced at predictable headways, moving at sustained speeds, on geometry the system has surveyed and modeled, with continuous radio coverage — do not hold. Yards are dense lattices of switches with hundreds of meters of curved trackwork; speeds are 15 to 25 mph in main yard routes and 5 to 10 mph in switching areas; trains move under operator control with hand signals and walking spotters; radio coverage is fragmented by cuts, structures, and overhead crane equipment; and the authority for each movement comes from the yard dispatcher's voice radio, not from a Movement Authority computed by a Zone Controller. Most US CBTC retrofits explicitly exclude the yard from CBTC scope and operate yards in non-CBTC mode. This article explains why that decision is usually correct, what the engineering tradeoffs look like, and what an agency should specify in the mainline-yard handoff that is the most service-affecting interface in the operational architecture.

## Why the mainline assumptions don't apply

CBTC was designed for a specific operating profile: revenue-service trains, on a designed alignment, with continuous radio coverage and a safety case that depends on bounded sensor uncertainty. The mainline profile has four characteristics that yards systematically violate.

**Speed predictability**. Mainline trains operate at known speeds with cycle-time-bounded ATO control. Yard trains operate at variable speeds determined by operator judgment, hand-signaled by spotters, with frequent stops and reversals. The braking-curve mathematics that governs the mainline ATP envelope (covered in [Inside the CBTC Braking Curve: How Safe Stopping Distance Is Calculated](/blog/cbtc-braking-curve)) is calibrated against speeds and adhesion conditions that are typical of revenue service; yard speeds and the sustained low-speed manual operation invalidate the calibration.

**Geometry density**. Mainline track is a sequence of relatively long straight and curved segments with widely-spaced switches. Yards are dense switch lattices: ten to twenty switches per kilometer, with track centers two to three meters apart, ladder tracks, crossovers, and storage tracks branching off at frequent intervals. The wayside infrastructure required to bring this geometry under SIL 4 ATP — beacons, Object Controllers, switch-position sensors with their cabinet — multiplies the per-kilometer cost by a factor that does not match the train-traffic density.

**Radio coverage**. Yards are typically covered by maintenance buildings, washing facilities, overhead cranes, and other structures that block or refract Wi-Fi signals. Achieving the >99 percent coverage the CBTC safety case assumes requires more access points per kilometer than a tunnel, with denser overlap, and the structures themselves are unstable from the radio-engineering perspective: a crane moves and the propagation map shifts. (See [Wayside Equipment Layout: Antennas, Cabinets, and Cable Routes](/blog/wayside-equipment-layout-antennas-cabinets-cables) for the propagation budget the mainline assumes.)

**Operating model**. The mainline operating model is "ATP enforces the envelope, ATO drives the train, ATS coordinates the line." The yard operating model is "the yard dispatcher authorizes each movement by voice radio, and the operator drives the train under hand signals." Imposing the mainline model on yard operations would forbid most of the work yard staff actually do — coupling and uncoupling cars, moving trains under maintenance personnel direction, towing failed trains, conducting brake tests in restricted areas. The mainline model assumes that authority comes from a central system. The yard model assumes that authority comes from a person.

## The two architectural choices

Faced with the yard problem, agencies converge on one of two architectural choices.

**Non-CBTC yard with a mainline-yard interface**. The yard runs without CBTC under its existing operating rules: voice-radio dispatching, hand signals, portable signs, track-possession permits, and operator visual judgment. The mainline is CBTC-equipped, and the boundary between the two is a defined handoff zone — typically the last switch before the yard ladder, or a designated crossover at the yard throat. This is the dominant choice in US deployments. The L Line, the 7 Line, the Queens Boulevard segments, BART's planned modernization, the Honolulu Skyline, and most other US CBTC deployments treat yards as out-of-scope.

**Yard CBTC with adapted parameters**. A small minority of deployments — typically driverless airport people-mover systems and some greenfield Asian metros — extend CBTC into the yard with modified parameters: lower speed limits, shorter beacon spacing, restricted operating modes, and explicit interlocks against unauthorized human entry. This is feasible but it requires the yard itself to be designed for it from the outset, with controlled access (no manual personnel on track during automated movements), simplified geometry, and the operational discipline to enforce the access controls. JFK AirTrain operates this way; almost no US transit yard does.

The retrofit reality is that yard CBTC is rarely worth the cost on existing US transit infrastructure. The yard is typically a brownfield that was not designed for automated operation, the operating model would have to change, and the labor model rests on yard workers having access to the trackside in a way the safety case for automated operation does not permit.

## What "non-CBTC mode" actually means

A train in non-CBTC mode (sometimes called Restricted Manual or simply Manual) operates without CBTC supervision but is not without supervision entirely. The pattern in US deployments is consistent.

The **VOBC remains powered and active**. It logs the train's movements, monitors odometry, and continues to enforce certain low-speed safety functions (overspeed protection at the configured non-CBTC speed limit, rollback protection on grades). It does not enforce a Movement Authority because no MA is being issued.

The **operator drives manually** with the throttle and brake controls. The DMI may display the current speed, the active operating mode, and any local restrictions, but the operator's authority comes from the yard dispatcher's radio call, not from the DMI.

The **yard dispatcher authorizes each movement** by voice radio. The authorization is recorded in the dispatcher's log and confirmed by the operator's read-back. The dispatcher coordinates with track-possession permits, with maintenance personnel positions, and with other movements in the yard. This is conventional yard dispatching and predates CBTC by decades.

The **legacy yard signaling**, where present, continues to operate. Many US yards have wayside signals, switch-position indicators, and route-locking interlockings that pre-date the CBTC mainline retrofit. These remain in service for yard operations and provide the mechanical-electrical safety layer the operator relies on.

The **speed limit is restricted**. Non-CBTC yard speeds typically cap at 15 mph in switching areas, 25 mph on long straight yard routes, and 35 mph at most on the few yards with extended approach geometry. The VOBC enforces the cap.

[FIGURE: Yard architecture schematic showing the boundary between CBTC mainline and non-CBTC yard, with the handoff zone at the yard throat, the yard dispatcher's radio coverage, the legacy yard signaling, and the CBTC infrastructure (access points, beacons, ZC) terminating at the boundary.
Source: new figure to be generated.
Caption: "Most US deployments excise the yard from CBTC scope. The interesting engineering is in the handoff at the yard throat."]

## The mainline-yard handoff

The handoff between mainline CBTC and yard non-CBTC operation is the most service-affecting interface in many CBTC deployments. A train exiting the mainline must transition out of CBTC supervision; a train entering the mainline must establish CBTC position lock and re-enter ATP control before being released to revenue service. Both transitions are bounded by physical infrastructure and by procedural steps.

**Mainline-to-yard exit**. The train approaches the yard throat under CBTC supervision. The Zone Controller has issued an MA that ends at or before the boundary. The train operator, coordinating with the yard dispatcher, requests entry to the yard. The CBTC system terminates the MA at the boundary; the train comes to a stop or proceeds into the yard at the non-CBTC speed limit; the yard dispatcher takes verbal authority for subsequent movements. The CBTC ATS records the train as having exited revenue service.

**Yard-to-mainline entry**. The yard dispatcher releases the train from yard custody at the entry boundary. The train must establish CBTC position lock — typically by passing over a beacon at the boundary that initializes the VOBC's odometry to a known position. Until position lock is established, the train operates at the configured initialization speed (typically 10 mph or slower). After position lock, the VOBC reports its position to the wayside ZC, which begins issuing MAs and adds the train to ATS supervision. The train is then released to revenue service speed.

The handoff procedures are the most common source of operational errors in non-CBTC-yard architectures. An operator who proceeds into the yard before the MA is properly terminated, or who attempts revenue service before position lock is established, triggers safe-state interventions that delay service. A well-specified handoff includes mechanical confirmation (the boundary beacon), procedural confirmation (the dispatcher's voice authorization with read-back), and ATS-side state-machine confirmation (the train's mode in ATS reflects the operational reality).

## What an RFP should specify

A CBTC procurement that wants to control yard-related operational risk should require the supplier to address four specific items.

**Yard scope explicitly excluded or included**. The default assumption should be excluded. If yard CBTC is in scope, the procurement should specify which yards, which tracks within each yard, which operating modes are permitted, and what the safety case looks like in terms specific enough that the supplier can price the work realistically.

**Handoff infrastructure at the yard boundary**. The boundary beacon, the access-point coverage at the boundary, the wayside signal arrangements, and the geometry of the handoff zone all must be specified. The handoff zone is not a point; it is typically 100 to 300 meters of track where the train transitions between operating modes.

**Handoff procedures with explicit failure modes**. What happens when the boundary beacon is missing or damaged? What happens when the radio coverage at the boundary is weak? What happens when ATS state and physical reality disagree (the train is in the yard but ATS thinks it is on the mainline)? Each failure mode needs a procedural answer.

**Yard dispatcher integration with ATS**. The yard dispatcher's voice radio is not part of CBTC, but the yard dispatcher's positions display and the train-in-yard state must integrate with ATS so that the OCC dispatcher can see the operational picture. (See [ATS Dispatcher Workstation: What It Looks Like in 2026](/blog/ats-dispatcher-workstation-2026) for the OCC side.)

## Practical takeaways

- Storage yards are a different engineering problem from mainline CBTC. The mainline assumptions about speed, geometry, radio coverage, and operating model do not hold in yards, and applying mainline architectures to yards produces systems that are expensive, fragile, and operationally awkward.
- The dominant US deployment choice is to exclude the yard from CBTC scope and operate the yard in non-CBTC mode under voice-radio dispatching with legacy signaling. The choice is correct for most retrofit projects.
- Non-CBTC mode is not unsupervised. The VOBC remains active and enforces low-speed envelopes; the yard dispatcher provides verbal authority; legacy yard signaling provides the mechanical-electrical safety layer. The architecture is simpler than mainline CBTC but it is still safety-engineered.
- The mainline-yard handoff is the most service-affecting interface in the non-CBTC-yard architecture. Specifying the handoff zone, the boundary beacon, the procedures, and the ATS integration is more important than specifying anything else about the yard.
- A few applications justify yard CBTC: driverless airport people-movers, greenfield metros designed for automation, and specialized installations where access controls can prevent humans on track during automated movement. These are minority cases and they typically require the yard itself to be designed for automated operation from the start.
- Procurement language should default the yard to excluded scope, with explicit boundary specifications and handoff procedures. Including the yard implicitly, without engineering analysis, is a recipe for late-project change orders.

## Where to go next

This post is a 10-minute summary. The full treatment of CBTC operating modes, including yard operations and mode transitions, lives in Chapter 9 of *Communications-Based Train Control* ([Volume 1 on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 9 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch09.pdf).

For the operating-mode framework that classifies non-CBTC mode, see [Operating Modes in CBTC: Normal, Restricted, Manual, Failure](/blog/operating-modes-cbtc-normal-restricted-manual-failure). For why the wayside layout assumptions do not extend into yards, see [Wayside Equipment Layout: Antennas, Cabinets, and Cable Routes](/blog/wayside-equipment-layout-antennas-cabinets-cables). For the three-layer functional architecture that the yard partially exits, see [ATP, ATO, ATS: The Three-Layer Triad of Modern Train Control](/blog/atp-ato-ats-triad).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 1: Foundations & Technical Architecture*. Independent. ISBN 979-8-258-54295-3. — Chapter 3, "CBTC System Architecture Overview"; Chapter 9, "Operating Modes."
- IEEE Standards Association. *IEEE Std 1474.1: Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- International Electrotechnical Commission. *IEC 62290: Railway applications — Urban guided transport management and command/control systems*.
- Federal Transit Administration. *State Safety Oversight Program*. [transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight](https://www.transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight)
- American Public Transportation Association. *Standards for Rail Transit Operations*. [apta.com/research-technical-resources/standards](https://www.apta.com/research-technical-resources/standards)
- MTA New York City Transit. *L Line CBTC Project Documentation*. [new.mta.info](https://new.mta.info/)
- BART. *Train Control Modernization Program*. [bart.gov/about/projects/tcmp](https://www.bart.gov/about/projects/tcmp)
- Honolulu Authority for Rapid Transportation. *Skyline Operations*. [honolulutransit.org](https://www.honolulutransit.org/)
