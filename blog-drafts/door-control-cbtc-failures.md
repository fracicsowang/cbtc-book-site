---
title: "Door Control in CBTC: The Unglamorous System That Causes the Most Failures"
slug: door-control-cbtc-failures
description: "Why door faults dominate the CBTC service-disruption log: the door enable interlock, the obstacle-detection chain, the brake-traction handoff, and the operating profile that turns 99.9-percent reliable doors into a service-affecting bottleneck on a 90-second-headway line."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: technical
tags: [CBTC, door control, dwell time, ATO, ATP, reliability, US transit]
primary_keyword: "CBTC door control"
secondary_keywords: ["train door fault", "CBTC dwell time", "door enable interlock", "PSD interlock", "platform stopping accuracy"]
related_chapters: [4, 5, 8]
internal_links: ["/blog/onboard-side-of-cbtc-vobc", "/blog/vital-vs-non-vital-functions-cbtc", "/blog/atp-ato-ats-triad"]
og_image: "/blog/img/door-control-cbtc-failures.png"
read_time: "10 min"
---

A CBTC engineer who reviews the service-disruption log of a busy urban metro line sees a striking pattern: the safety-critical signaling subsystems — Zone Controllers, VOBCs, Movement Authorities, the radio link itself — collectively account for fewer service incidents than the doors. Door faults are the largest single source of unscheduled delay on most CBTC lines. The trains brake on time, the ATP enforces the envelope, the radio holds up — and a stuck door at one platform spreads two minutes of delay through the entire line within four station stops because the headway is tight enough that no train has the slack to absorb it. This article is the engineer-to-engineer treatment of why that happens, how the door control system actually works in a Communications-Based Train Control deployment, and what an agency can specify in the procurement to bound the operational consequences.

## Why the doors deserve their own discussion

Doors are unglamorous. They are not in the safety case headline. They are not what wins or loses the technical evaluation. They are mechanical actuators driven by motors, controlled by relays and PLCs that are mostly older than the CBTC retrofit. And they are the place where the CBTC system meets the passenger most directly — every door cycle is a passenger interaction at every station, on every train, on every trip.

Reliability mathematics works against doors precisely because of how often they cycle. A train with eight doors per car, six cars per train, on a 90-second-headway line operating 16 hours a day cycles its doors approximately 18,000 times per train per day. A door subsystem with 99.9 percent reliability per cycle produces about 18 fault events per train per day. Most of those are recoverable in seconds. The minority that require the operator to intervene, the train to be held, or the door to be cut out from service is a non-trivial source of operational disruption. (For why the resulting dwell-time variance compounds at high-frequency service, see [Why Door Operation Is the Bottleneck in High-Frequency Service](/blog/door-operation-bottleneck-high-frequency-service), the operations-cluster article.)

This post is for the systems engineer responsible for door integration on a CBTC retrofit, the operations engineer reading the daily disruption report, or the procurement specialist deciding how aggressive to be on door reliability and integration scope.

## The door control architecture in a CBTC system

The door control architecture has three logical layers: the **vital permission layer**, the **non-vital command layer**, and the **field execution layer**.

The vital permission layer is the function inside the Vehicle On-Board Controller (VOBC) that decides whether doors *may* open. The decision rests on three interlocked conditions: train speed is zero (verified by tachometer and accelerometer cross-checks), train position is at a designated platform stop within the berthing tolerance (typically ±30 cm), and no other inhibition (emergency, maintenance, override) is active. When all three conditions are satisfied, the VOBC asserts a "doors may open" permission. This permission is SIL 4 in essentially every CBTC architecture; the safety case treats unsafe door release as a passenger-fatality scenario.

The non-vital command layer is the application logic that decides which side opens, when to close, what the dwell time should be, and how to coordinate with the Platform Screen Door (PSD) controller if present. This logic is typically SIL 0 to SIL 2 and lives in the Train Management System (TMS) computer, which receives the vital permission from the VOBC and adds operational context — left side or right side based on platform geometry, dwell time based on the ATS schedule, asymmetric door handling for partial-train platforms.

The field execution layer is the physical door system itself: motor, control panel, position sensors, obstacle-detection sensors, locking mechanism. On most US transit retrofits this layer is the inherited rolling-stock design, often with components that predate the CBTC project by ten to twenty years. The field layer is rarely SIL-certified; safety is achieved by the upstream vital permission, with the field layer trusted only to follow the command and report status.

This three-layer architecture matches the canonical vital/non-vital partition discussed in [Vital vs Non-Vital Functions in CBTC: Where the Safety Boundary Lives](/blog/vital-vs-non-vital-functions-cbtc).

## Why door faults dominate the service-disruption log

Five mechanisms account for most door-related service disruption.

**Obstacle detection re-cycling**. Modern train doors include a pressure-sensitive edge or a photoelectric obstacle sensor that aborts a closing cycle if a passenger or object is detected. The aborted cycle re-opens the door and waits 3 to 5 seconds before re-attempting close. On a 90-second-headway line during peak crowding, an obstacle re-cycle event at a busy platform routinely consumes 15 to 30 seconds beyond scheduled dwell. With six cars carrying eight doors each, the probability of *no* re-cycle during a busy peak dwell is uncomfortably low.

**Door cut-out for stuck-open faults**. When a door fails to close after the operator's permitted retry attempts, the train operator (in GoA 1 or GoA 2 service) cuts that door out of service to permit departure. Cutting out one door in a six-car train is operationally acceptable for the rest of the trip but reduces capacity on the affected door and is reported as a service incident.

**Lost door enable due to position fault**. The vital permission depends on accurate position. A localization fault that puts the train outside the ±30 cm berthing tolerance withholds the door enable. The train sits at the platform with doors closed until the localization is recovered, the train re-berths, or the operator overrides the interlock under explicit authorization. Localization faults of this kind are rare per cycle but, multiplied by the cycle count, account for a measurable share of incidents.

**PSD-train-door synchronization faults**. On lines with Platform Screen Doors, the train doors and the PSD doors must open and close in coordinated sequence within tens of milliseconds. A timing mismatch — the PSD reports door-open before the train door has cleared its locking mechanism, or the train door begins closing before the PSD confirms its closure — triggers a safety-state transition that holds the train at the platform until the conflict is resolved by maintenance.

**Communication faults on the train management bus**. The TMS bus carrying the door commands between the VOBC, the door controllers, and the operator's cab display is typically MVB or Ethernet. A bus glitch that drops a door-state message can cause the door system to enter a wait state until the next valid heartbeat. Recovery is automatic but the dwell extension is not.

[FIGURE: Door control architecture diagram showing the VOBC vital permission layer (SIL 4) feeding into the TMS non-vital command layer (SIL 0–2), which drives the field door controller, with feedback paths from door position sensors, obstacle sensors, PSD interface, and the operator's cab control. Annotations show which signals are vital and which are non-vital.
Source: new figure to be generated.
Caption: "The vital permission gates the action; the non-vital command layer adds operational context; the field layer executes. Each layer has its own failure modes."]

## The dwell-time math

Door operation drives dwell time, and dwell time drives achievable headway. A passenger metro at 90-second headway typically allocates 25 to 45 seconds of station dwell. The dwell breaks into open-doors, passenger boarding/alighting, and close-doors phases. The open-doors phase is short — 1.5 to 3 seconds for the door cycle plus the synchronization with the PSD if present. The passenger phase is the largest variable contribution and is dominated by passenger flow and platform geometry. The close-doors phase, including any obstacle re-cycle, is the hardest to bound.

A typical close-doors budget at 90-second headway:
- Door close command issued: 0 ms
- Door reaches mostly-closed: 1.5 to 2.5 seconds
- Door fully closed and locked: 2.0 to 3.0 seconds
- Departure permission asserted by VOBC: 2.5 to 3.5 seconds

An obstacle re-cycle during the close cycle adds 5 to 8 seconds (re-open, wait, re-attempt). One re-cycle per dwell on average across a busy platform extends average dwell by 5 to 8 percent, which on a tight schedule cascades into the next train's arrival.

The structural problem is that close-doors variance is driven by passenger behavior, not by signaling performance. The CBTC system can be perfect and the doors will still re-cycle. The mitigation is mechanical and operational rather than electronic: aggressive sensor calibration, conservative obstacle-detection thresholds, and dispatcher-driven dwell discipline at the busiest platforms.

## What an RFP should specify

A CBTC procurement that wants to bound door-related operational risk should require the supplier to address four specific items.

**Door interface specification with explicit timing budgets**. The interface between VOBC and the existing door controllers must be specified with timing tolerances: maximum acceptable close-cycle time, maximum acceptable re-cycle time, maximum acceptable obstacle-detection latency. The supplier's offering should commit to numbers, not to qualitative descriptions.

**Vital permission scope explicitly defined**. The procurement should be explicit about what conditions the vital permission layer checks. "Train at standstill" is not a complete specification. Acceptable specifications enumerate the speed threshold, the time-at-zero requirement, the position tolerance, and the platform-side determination logic. (See [Vital vs Non-Vital Functions in CBTC: Where the Safety Boundary Lives](/blog/vital-vs-non-vital-functions-cbtc) for why the partition matters.)

**PSD synchronization protocol with explicit failure modes**. If the line has or will have Platform Screen Doors, the synchronization protocol between train doors and PSDs must specify the fault response: what happens when train door reports closed but PSD reports open, what happens when PSD door reports open but train door reports faulted, what happens to ATO departure permission in each case.

**Door cut-out and degraded-operation procedures**. The supplier must document the procedures for individual door cut-out, train-level door inhibit, and the corresponding operator interface. The agency should review these procedures with operations staff before contract award; if the cut-out procedure requires the operator to leave the cab to manipulate a hardware key in the saloon, the operational disruption is larger than the cut-out itself.

## The operational levers an agency actually has

Door reliability is not infinite. Once the supplier's specifications are met, the agency has three levers.

**Aggressive obstacle-detection calibration**. The pressure-sensitive edges and photoelectric sensors on each door require periodic calibration to maintain consistent threshold behavior. Sensors that drift produce more re-cycles. A maintenance program that calibrates sensors quarterly rather than annually reduces re-cycle frequency at modest cost.

**Dwell-time discipline**. The most effective short-term lever on door-related delays is operational, not technical: dispatcher-driven dwell-time targets at busy platforms, with the dispatcher empowered to flag platforms that need staff intervention to clear doorways. This is a coordination problem between ATS, station staff, and operations. (For how the dispatcher workstation is structured to support this, see [ATS Dispatcher Workstation: What It Looks Like in 2026](/blog/ats-dispatcher-workstation-2026).)

**Mid-life door-system refresh**. The door subsystem is the rolling-stock component most likely to benefit from a non-CBTC mid-life refresh. Replacing 1990s-era door controllers with modern controllers — better diagnostics, shorter close cycles, better obstacle-detection sensors — reduces fault rates by 30 to 50 percent in published agency case studies. The refresh is a rolling-stock project, not a CBTC project, but the operational benefit lands on the CBTC line.

## Practical takeaways

- Doors are the dominant source of CBTC service disruption on high-frequency lines, not because the door subsystems are unreliable per cycle but because they cycle so often that even 99.9 percent reliability produces several recoverable faults per train per day.
- The door control architecture in CBTC has three layers: SIL 4 vital permission in the VOBC, non-vital command logic in the TMS, and the field execution layer in the existing door system. Specifying each layer's scope and interface explicitly is the most important RFP discipline.
- Five failure mechanisms account for most service disruption: obstacle re-cycling, door cut-outs, lost door enable from position faults, PSD-train synchronization faults, and TMS bus glitches. Each has a specific mitigation.
- Close-doors variance, dominated by passenger-driven obstacle re-cycles, is the hardest dwell component to bound. The mitigation is mechanical and operational rather than electronic: sensor calibration, conservative thresholds, and dispatcher-driven dwell discipline.
- A door procurement specification that includes timing budgets, vital permission scope, PSD synchronization fault modes, and degraded-operation procedures bounds operational risk in a way that qualitative specifications do not.
- Mid-life door-controller refresh is a separately-budgeted rolling-stock project that delivers most of its benefit to the CBTC line. Agencies should include door modernization in their fleet plan rather than expecting the CBTC retrofit to absorb door reliability problems.

## Where to go next

This post is a 10-minute summary. The full treatment of CBTC onboard equipment including the door enable interlock, ATO precision stopping, and platform integration lives in Chapter 4 and Chapter 5 of *Communications-Based Train Control* ([Volume 1 on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 4 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch04.pdf).

For the onboard side of the vital permission layer, see [The Onboard Side of CBTC: Inside the VOBC](/blog/onboard-side-of-cbtc-vobc). For where door control sits in the broader vital/non-vital architecture, see [Vital vs Non-Vital Functions in CBTC: Where the Safety Boundary Lives](/blog/vital-vs-non-vital-functions-cbtc). For the three-layer functional model that contextualizes the door interlock, see [ATP, ATO, ATS: The Three-Layer Triad of Modern Train Control](/blog/atp-ato-ats-triad).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 1: Foundations & Technical Architecture*. Independent. ISBN 979-8-258-54295-3. — Chapter 4, "Onboard Equipment"; Chapter 5, "Wayside Equipment," section 5.4.
- IEEE Standards Association. *IEEE Std 1474.1: Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- International Electrotechnical Commission. *IEC 62290: Railway applications — Urban guided transport management and command/control systems*.
- US Access Board. *Americans with Disabilities Act Accessibility Guidelines for Transportation Vehicles*. [access-board.gov](https://www.access-board.gov/)
- Federal Transit Administration. *Transit Cooperative Research Program reports on dwell time and station performance*. [trb.org/TCRP](https://www.trb.org/TCRP)
- MTA New York City Transit. *Communications-Based Train Control Status Update*. [new.mta.info/project/communications-based-train-control-cbtc](https://new.mta.info/project/communications-based-train-control-cbtc)
- BART. *Train Control Modernization Program*. [bart.gov/about/projects/tcmp](https://www.bart.gov/about/projects/tcmp)
- CENELEC. *EN 50129: Railway applications — Safety related electronic systems for signalling*.
