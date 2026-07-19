---
title: "The Movement Authority Concept: How a CBTC Train Decides How Far to Go"
slug: movement-authority-concept
description: "Movement Authority in CBTC explained: what's inside an MA message, how the wayside computes it, how the train enforces it, and what happens when it expires."
date: 2026-07-11
author: "Chunjun (Francisco) Wang"
category: definitional
tags: [Movement Authority, CBTC, ATP, Zone Controller, VOBC, end of authority]
primary_keyword: "Movement Authority CBTC"
secondary_keywords: ["CBTC Movement Authority explained", "MA end of authority", "how CBTC computes MA", "Movement Authority message", "CBTC braking curve"]
related_chapters: [3, 4, 5]
internal_links: ["/blog/what-is-cbtc-2026-guide", "/blog/atp-ato-ats-triad", "/blog/what-is-a-zone-controller"]
og_image: "/blog/img/movement-authority-concept.png"
read_time: "10 min"
---

Every 500 milliseconds, a CBTC train operating on the L Line receives a fresh signed message from the wayside Zone Controller. The message is short — a few hundred bytes — and it answers exactly one question: how far forward, and at what speed profile, may this train proceed before it must receive a new authorization? That message is the Movement Authority. Every other piece of CBTC's safety architecture — the SIL 4 onboard processor, the redundant radio, the balise localization, the moving-block computation, the braking curve enforcement — exists to compute, transmit, validate, and execute the Movement Authority correctly. If you understand the MA, you understand the entire control loop. This post explains what is inside an MA, how the wayside computes it, how the train enforces it, and what happens when it expires.

## Why the MA is the central abstraction

For procurement engineers and program managers, the Movement Authority is the single most important concept in CBTC. It is the artifact the standards reference, the artifact the safety case must defend, and the artifact whose timing and content set the achievable headway of the line. Vendors compete on how often they update it, how reliably they deliver it, and how tightly they enforce it. An RFP that does not specify MA cycle time, message integrity, and end-of-authority behavior is an RFP that has not specified the system. This post is for the engineer who needs to understand what they are actually buying when they buy CBTC.

## What is inside an MA

A Movement Authority is a short, cryptographically authenticated message issued by the wayside Zone Controller to a specific identified train. It contains four kinds of information.

The end-of-authority point is the absolute track position, expressed in the system's coordinate space (typically a route-and-offset format such as "Route 14L, kilometer post 23.462"), beyond which the train is not permitted to travel. The end-of-authority point is the boundary the onboard ATP enforces. If the train approaches it without receiving a new authority that extends further, ATP commands the brake.

The speed profile is a list of location-speed pairs that describe the maximum permitted speed at each point along the authorized distance. The profile reflects civil speed restrictions (curves, switches, station approaches), temporary speed restrictions (work zones, emergency limits), and the deceleration curve required to stop at the end-of-authority point. The onboard ATP supervises actual train speed against the profile every cycle.

The validity window is the time horizon over which the authority remains valid. A typical MA validity is 30 to 60 seconds; if the train has not received a new authority before the validity expires, the existing authority lapses and ATP commands brake. The validity window is the architectural mechanism that prevents stale authorities from being honored after a communication failure.

The integrity envelope is the set of cryptographic and structural protections that confirm the message is authentic and uncorrupted. Movement Authorities carry message authentication codes, sequence numbers (to prevent replay attacks and detect missing messages), and cyclic redundancy checks (to detect bit errors). The onboard ATP rejects any MA that fails these checks.

## How the wayside computes an MA

Each Zone Controller, every cycle, computes a fresh MA for every train inside its territory. The computation is the heart of the moving-block architecture.

The Zone Controller knows the position, speed, and declared braking performance of every train in its zone, reported via the most recent position uplink. It knows the state of every interlocking — switch positions, locked routes, signal aspects — through its interface with the electronic interlocking system. It knows civil and temporary speed restrictions through its database of track infrastructure. It knows the boundary of its territory and how the adjacent Zone Controller is operating.

For each train, the Zone Controller calculates the end-of-authority point as the minimum of four candidate distances: the position of the rear of the train ahead, minus a safety margin; the next switch or junction whose route is not yet locked; the next civil or temporary speed restriction beyond the train's current state; and the boundary of the Zone Controller's territory. The minimum of these four sets the end-of-authority point. The Zone Controller then computes a deceleration curve from current speed to a stop at the end-of-authority point and packages the result as an MA.

The cycle time of this computation is critical. Most US deployments target a 500-millisecond MA update cycle. Shorter cycles (250 ms in some advanced deployments) enable tighter headways because fresher position data permits smaller safety margins. Longer cycles (1 second) reduce wayside processing burden but require larger margins and produce larger achievable headways.

![Each MA cycle: ingest position reports, compute end-of-authority and speed profile, sign and transmit.](/figures/fig_03_04_heartbeat_cycle.png)
*<small>Each MA cycle: ingest position reports, compute end-of-authority and speed profile, sign and transmit.</small>*

## How the train enforces an MA

The onboard Vehicle On-Board Controller receives the Movement Authority over the Data Communication System radio link and runs a sequence of checks before honoring it.

The first check is structural. Does the message parse? Does it carry valid sequence numbers and cryptographic signatures? Is it intended for this train identifier? Is it newer than the most recently received MA? Any failure here causes the message to be discarded; the train continues operating on its previous authority.

The second check is plausibility. Is the end-of-authority point ahead of the train's current position? Is the speed profile monotonic where it should be? Is the validity window in the future? Are the speed restrictions within the train's certified operating envelope? Implausible MAs are discarded and the wayside is notified.

If the MA passes both checks, the VOBC adopts it. The onboard ATP module computes a continuous speed envelope between the train's current position and the end-of-authority point, accounting for the speed profile, the train's current speed, the train's declared braking performance, and a small engineering safety margin. The envelope is recomputed every 50 to 100 milliseconds.

The Automatic Train Operation module, if active, drives the train to follow a target speed profile that stays comfortably inside the ATP envelope. ATO is the layer that delivers smooth station stops and energy-efficient operation; it operates strictly inside the envelope ATP has drawn. (For the layered relationship, see [ATP, ATO, ATS: The Three-Layer Triad of Modern Train Control](/blog/atp-ato-ats-triad).)

If at any cycle the train's actual speed approaches the ATP envelope, the ATP module commands the service brake. If actual speed crosses the envelope, ATP commands the emergency brake. The brake commands bypass the operator entirely; there is no ability to override.

## What happens when an MA is about to expire

An MA's validity is bounded. If the train's onboard clock approaches the end of the validity window without a fresh MA arriving, the architecture has to decide what to do. The behavior is not improvised; it is defined by the safety case.

If a new MA arrives before validity expires (the normal case), the train adopts the new authority and continues. If a new MA does not arrive, the onboard ATP applies the service brake within a configurable timeout (typically 3 to 5 seconds before validity expires) and brings the train to a controlled stop within the existing end-of-authority point. The train waits, communicates its degraded state to the wayside, and resumes only when a fresh MA can be received and validated.

This behavior — graceful service-brake stop within the last valid authority — is what makes CBTC tolerant of brief communication interruptions. The system does not panic when one MA is delayed. It panics only when MAs stop arriving for long enough that the existing one is about to expire.

## Why the MA cycle time drives headway

The capacity advantage of moving block over fixed block comes from the safe-following margin shrinking as the lead train accelerates and growing as it slows. The shorter the MA cycle, the more frequently the wayside can re-issue authority that reflects the lead train's current state, and the smaller the position-uncertainty margin built into the computation.

In practice, a 500-ms cycle CBTC system on a metro line can support 80- to 90-second headways. A 250-ms cycle can push toward 70-second headways. A 1-second cycle floors at perhaps 100 seconds. The cycle time interacts with localization accuracy, radio reliability, and station dwell time to determine the achievable peak frequency.

This is why the MA cycle time is one of the procurement specifications worth specifying explicitly. It is not just a technical detail; it is the architectural parameter that determines whether the line can run 24 trains per hour or 30. (For the full headway picture, see [Moving Block Explained: Why It Replaced Fixed Block](/blog/moving-block-explained).)

## Failure modes worth understanding

Three MA failure modes appear in deployment.

The first is a corrupted or unauthenticated MA. The onboard ATP rejects it; the train continues on its previous authority; the wayside is notified. If the corruption persists across multiple cycles, the train eventually hits the previous-MA validity window and applies the brake. This is correct behavior; the architecture refuses to honor messages it cannot verify.

The second is an MA that ends prematurely — typically because the train ahead reported an unexpected position, the Zone Controller reduced the safe-following distance accordingly, and the new end-of-authority falls behind where the following train would have proceeded. The onboard ATP responds by computing a new deceleration curve and applying brakes if necessary. This is also correct behavior; conservative authority shrinkage is preferable to unsafe extension.

The third is the absence of an MA at zone handover. As a train approaches a Zone Controller boundary, the current Zone Controller and the next one must coordinate to ensure continuous authority across the boundary. (For the handover protocol, see [What Is a Zone Controller? CBTC's Wayside Brain Explained](/blog/what-is-a-zone-controller).) If handover fails, the train applies the brake at the boundary; service is degraded but safe.

## Practical takeaways

- The Movement Authority is the central abstraction in CBTC. Every safety mechanism exists to compute, transmit, validate, and enforce it correctly.
- An MA contains end-of-authority, speed profile, validity window, and integrity envelope. Specify all four explicitly in any RFP.
- MA cycle time (typically 250 to 500 ms in modern deployments) is a key architectural parameter. It directly influences achievable headway.
- The onboard ATP rejects malformed or implausible MAs and continues on the previous authority until validity expires. This is what makes the system tolerant of brief communication failures.
- Validity expiration triggers a controlled service-brake stop within the last valid authority. The system never honors a stale MA.

## Where to go next

This post is a 10-minute summary. The full treatment lives in [Chapter 3 — CBTC System Architecture Overview] and [Chapter 5 — Wayside Equipment] of *Communications-Based Train Control* ([Volume 1 on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 5 slides (free PDF →)](https://cbtcbook.com/slides/cbtc_ch05.pdf)

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 1: Foundations & Technical Architecture*. Independent. ISBN 979-8-258-54295-3. — Chapter 3, "CBTC System Architecture Overview"; Chapter 5, "Wayside Equipment."
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- IEEE Standards Association. *IEEE Std 1474.3: Standard for CBTC System Design and Functional Allocations*.
- International Electrotechnical Commission. *IEC 62290-2: Railway applications — Functional requirements specification*.
- CENELEC. *EN 50129: Railway applications — Communication, signalling and processing systems — Safety related electronic systems for signalling*.
- MTA New York City Transit. *L Line CBTC Performance Documentation*. [new.mta.info](https://new.mta.info/)
