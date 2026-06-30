---
title: "Operating Modes in CBTC: Normal, Restricted, Manual, Failure"
slug: operating-modes-cbtc-normal-restricted-manual-failure
description: "The four primary CBTC operating modes — Normal, Restricted Manual, Non-CBTC bypass, and Failure — explained with the transition logic, capacity penalties, and US operational record that govern each one."
date: 2026-06-10
author: "Chunjun (Francisco) Wang"
category: operations
tags: [CBTC operating modes, restricted manual, bypass mode, degraded operation, failure mode, US transit]
primary_keyword: "CBTC operating modes"
secondary_keywords: ["CBTC normal mode", "restricted manual mode", "CBTC bypass mode", "CBTC failure mode", "CBTC mode transitions"]
related_chapters: [9, 8, 13]
internal_links: ["/blog/atp-ato-ats-triad", "/blog/degraded-mode-ladder-cbtc", "/blog/phantom-occupancy-service-delays"]
og_image: "/blog/img/operating-modes-cbtc-normal-restricted-manual-failure.png"
read_time: "11 min"
---

In 2018, an L Line train holding at the platform at First Avenue stopped responding to its Automatic Train Operation commands. The Vehicle On-Board Controller (VOBC) had detected an internal diagnostic fault on its ATO subsystem while the safety-critical Automatic Train Protection logic continued to run cleanly. The train did not need to evacuate, the line did not need to shut down, and the dispatcher did not need to order a slow-speed emergency procedure. What happened instead is what should happen in every well-designed CBTC system: the train transitioned automatically to Restricted Manual mode, the operator took manual throttle and brake under continuous ATP supervision, the dispatcher accepted the slightly opened headway, and revenue service continued. Approximately 25 minutes later, after a remote VOBC reset, the train returned to Normal mode at the next station. This is the operating-mode envelope at work — and it is one of the most underappreciated parts of any CBTC procurement.

## Why operating modes deserve their own conversation

A CBTC system is not a single behavior. It is a state machine that defines four primary operating modes — Normal, Restricted Manual, Non-CBTC bypass, and total Failure — and the structured transitions between them. The mode envelope determines what happens when a piece of equipment fails, when a maintenance window opens, when a train enters a yard, or when a fleet contains both CBTC-equipped and legacy cars. It governs how much capacity the line gives up under each fault category, how long an operator can hold the cab without getting tired, and what the safety case has to prove in the worst credible failure. An RFP that specifies the Normal-mode performance without specifying the degraded-mode envelope is an RFP that has only addressed the easy half of the problem.

This post is for the program manager, the operations director, and the systems integrator who needs to understand what each mode actually does, what it costs in capacity, and what triggers transitions between them. It draws on Chapter 9 of *Communications-Based Train Control* and on the operational record of US deployments where each mode has been exercised in revenue service.

## Normal mode: ATP and ATO together

Normal mode is the steady-state in which all subsystems are healthy. The wayside Zone Controller is generating Movement Authorities every 500 milliseconds to one second, the train's VOBC is computing speed envelopes against those authorities every 50 to 100 milliseconds, the Data Communication System is delivering messages with round-trip latency under 500 milliseconds, and the Automatic Train Operation layer is driving the train under the ATP envelope.

Performance in Normal mode is what the procurement was justified on. Headways of 90 to 150 seconds, on-time performance of 97 to 99 percent within a two- to three-minute window, energy consumption 15 to 30 percent below pre-CBTC baselines, dwell variance reduced by half or more compared with manual operation. The MTA L Line's Normal-mode operation, with Siemens Trainguard MT, runs at 24 to 29 trains per hour and 98 to 99 percent on-time performance. (For the underlying ATP-ATO-ATS architecture that defines what each layer does in Normal mode, see [ATP, ATO, ATS: The Three-Layer Triad of Modern Train Control](/blog/atp-ato-ats-triad).)

Normal mode is also the state every other mode is trying to return to. Mode design is not about thriving in degradation; it is about preserving safety in degradation while creating the shortest credible path back to Normal.

## Restricted Manual: ATP active, ATO inactive

Restricted Manual mode is the workhorse degraded-operation mode in modern CBTC. The driver takes manual throttle and brake. The Automatic Train Operation system is offline. The Automatic Train Protection layer remains fully active and continues to enforce the speed envelope, the Movement Authority, and the overspeed brake response.

The trigger for Restricted Manual is almost always a fault that affects ATO without compromising ATP. The most common cases are a VOBC ATO subsystem fault, a temporary loss of the wireless data link that prevents ATO from receiving precise position updates while leaving ATP's last-known-safe-state envelope valid for a short timeout window, and operator-requested manual control during yard movements or training. The MTA L Line reports that Restricted Manual events account for less than 2 percent of revenue train-hours; about 70 percent of those are VOBC ATO subsystem faults, about 25 percent are degraded communications, and the remainder are deliberate operator-initiated transitions.

Operationally, Restricted Manual costs capacity. The maximum permitted speed under RM on the L Line is 25 mph, against a Normal-mode revenue speed of 50 mph. Headways open from 2 to 3 minutes to 3 to 4 minutes. Capacity drops 20 to 25 percent during sustained RM operation. Platform stops become driver-judged within roughly a meter of the marker, against ATO's 0.3-meter precision, which means doors may not align cleanly with platform screen doors where those are installed. The Driver Machine Interface in RM mode displays the ATP speed envelope, the Movement Authority distance, the brake feedback, and an obvious mode indicator, but the driver carries the cognitive load of stopping and accelerating against that envelope without ATO assistance.

Restricted Manual is the mode that allows a CBTC line to keep running through ATO faults rather than evacuating passengers and pulling trains. The capacity penalty is real and visible in the schedule, but it is preferable to the alternative.

## Non-CBTC bypass: ATP off, legacy or dispatcher authority on

Non-CBTC bypass mode, sometimes called fallback mode, is the operating state in which CBTC protection is fully unavailable on the affected territory. ATP is offline or inhibited. The wireless data path is not used for movement authority. Train spacing is governed by whichever fallback exists: legacy fixed-block wayside signaling on overlay deployments, dispatcher-issued voice authorities in yards or on standalone CBTC corridors that retain no legacy signaling, or hand signals plus track possession permits in maintenance windows.

The trigger is almost always a more serious fault: total CBTC system unavailability across a corridor, sustained loss of communications beyond the system's recovery window (typically 30 minutes to 2 hours depending on operating rules), or environmental conditions — heavy snow, flooding, severe electromagnetic interference — that compromise both onboard sensors and wayside equipment.

Capacity in bypass mode collapses. On overlay systems with retained legacy signaling, headways open from 2 to 3 minutes to 5 to 6 minutes, and revenue speed drops to whatever the legacy signaling allows (40 mph on the L Line in bypass). System capacity falls 35 to 60 percent. On standalone corridors with dispatcher-only authorization, capacity falls 60 to 80 percent and yard-style speed limits (15 to 25 mph) prevail until the legacy authority can be re-established or CBTC restored. (For the failure cascade that determines when bypass becomes the right answer, see [The Degraded-Mode Ladder: How Service Survives Equipment Faults](/blog/degraded-mode-ladder-cbtc).)

Two design choices govern how survivable bypass mode is. The first is whether the deployment is overlay or standalone. Overlay CBTC retains legacy fixed-block signaling beneath the moving-block CBTC layer; the legacy signals continue to govern train separation when CBTC is unavailable. Standalone CBTC has no such fallback; bypass operation collapses to dispatcher voice authority, which is operationally expensive and capacity-restrictive. NYC's L Line, 7 Line, and Queens Boulevard segments are all overlay deployments for exactly this reason. The second is the design of the yard-to-mainline boundary, where bypass-mode rules govern continuously inside the yard and CBTC rules govern on the mainline; the boundary handoff procedures are addressed in detail in Chapter 9 of the manuscript.

![The CBTC mode state machine. Transitions are designed to preserve safety in every direction; only Withdrawn Service is a one-way exit.](/figures/fig_09_01_mode_state_machine.png)
*<small>The CBTC mode state machine. Transitions are designed to preserve safety in every direction; only Withdrawn Service is a one-way exit.</small>*

## Failure modes and the withdrawn-service envelope

A failure mode in this taxonomy is the state in which the affected train cannot remain in revenue service even at degraded performance. The trigger is a safety-critical fault — a brake system anomaly, a confirmed VOBC ATP fault, a door interlock failure that cannot be cleared, a confirmed loss of position localization beyond the dead-reckoning recovery window — that takes the train out of any safe operating envelope.

The system response is structured. The affected train is brought to a controlled stop using whatever residual brake authority remains. Passengers are evacuated to the nearest safe location, typically the next station, under attendant or operator supervision and OCC coordination. The train is moved out of the revenue corridor, either under tow or under heavily restricted manual control with a maintenance escort. The dispatcher reroutes downstream service around the affected segment and absorbs the capacity hit until the train is clear and the segment can be returned to Normal.

A line-wide Failure event — total CBTC unavailability with no overlay legacy fallback — is the worst credible operational scenario short of an actual collision. The procedure converges on Non-CBTC bypass for the corridor while the maintenance team works on restoration, with reduced speed (10 to 15 mph in some properties), strictly dispatcher-authorized movement, and continuous radio contact between every train and the OCC. Mature CBTC operators publish target recovery times: under 5 minutes for communication loss, under 1 minute for an automatic Zone Controller failover, under 30 minutes for a manual Zone Controller restart, and under 60 minutes to clear a single failed train from the corridor.

The safety case for any CBTC procurement has to address every credible failure scenario, define which mode the system enters, prove that the entry transition itself does not introduce new hazards, and specify the recovery path back to Normal. (For the specific failure mode that legacy fleets create on overlay CBTC lines, see [Phantom Occupancy and Why It Causes Service Delays](/blog/phantom-occupancy-service-delays).)

## Mode transitions are where most of the safety case lives

Mode transitions — Normal to Restricted Manual on an ATO fault, Restricted Manual to Normal after a VOBC reset, Restricted Manual to bypass on an ATP fault, bypass back to Restricted Manual after legacy signal restoration — are the moments of elevated risk in CBTC operation. The control authority changes hands. Any gap or inconsistency in that handoff is where unsafe conditions are created.

A well-designed mode transition has three properties. First, it is automatic where possible: the system detects the fault, transitions itself, and notifies the operator rather than waiting for human reaction time. Automatic transition is what allows ATP to maintain Safety Integrity Level 4 compliance through a fault. Second, it is annunciated: the Driver Machine Interface displays the new mode prominently, with audible and visual alerts, and the operator must acknowledge within 10 to 30 seconds or the train holds. Third, it is reversible: a transition into a degraded mode does not require destructive action that prevents the system from recovering once the underlying fault clears.

The procurement implication is straightforward. The RFP has to specify the credible faults, the mode the system enters under each, the operator interface during the transition, and the recovery path back. An RFP that specifies the Normal-mode performance without enumerating the mode envelope leaves the most operationally relevant decisions to the vendor's discretion.

## What this means in practice

- CBTC is not a single behavior; it is a state machine. Normal, Restricted Manual, Non-CBTC bypass, and Failure are all part of the same procurement, and each has its own performance envelope, capacity penalty, and safety case.
- Restricted Manual is the workhorse degraded mode. ATP stays active, the operator drives manually, capacity drops 20 to 25 percent, and the line keeps running. RM accounts for under 2 percent of revenue train-hours on a mature deployment.
- Overlay CBTC retains legacy fixed-block signaling beneath the moving-block CBTC layer, providing a usable bypass mode at 5- to 6-minute headway. Standalone CBTC collapses bypass to dispatcher voice authority and is expensive to operate in failure.
- Mode transitions are where most of the safety case lives. Specify automatic detection, annunciated handoff, operator acknowledgment, and reversibility in every credible fault path.
- Procurement should make the mode envelope explicit. RFP language that defines Normal performance without enumerating degraded-mode behavior gives the vendor latitude that the agency will pay for in service incidents later.

## Where to go next

This post is an 11-minute summary. The full treatment lives in Chapter 9 of *Communications-Based Train Control* (Volume 2): [Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ) · [Download Chapter 9 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch09.pdf)

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Lifecycle, and US Deployment*. Independent. ISBN 979-8-258-54295-3. — Chapter 9, "Operating Modes and Mode Transitions."
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- International Electrotechnical Commission. *IEC 61508: Functional Safety of Electrical/Electronic/Programmable Electronic Safety-related Systems*.
- CENELEC. *EN 50126: Railway Applications — Specification and Demonstration of Reliability, Availability, Maintainability and Safety (RAMS)*.
- MTA New York City Transit. *L Line CBTC Operations and Performance Reports*. [new.mta.info](https://new.mta.info/)
- BART. *Train Control Modernization Program*. [bart.gov/about/projects/tcmp](https://www.bart.gov/about/projects/tcmp)
- American Public Transportation Association. *Standards for Communications-Based Train Control (CBTC) Systems*.
