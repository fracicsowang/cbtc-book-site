---
title: "Phantom Train Detection: A Failure Mode No Vendor Talks About"
slug: phantom-train-detection
description: "How Communications-Based Train Control systems detect false train reports — the inverse of the fixed-block phantom-occupancy problem — and why this failure mode deserves more procurement attention than it gets."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: technical
tags: [CBTC, phantom train, phantom occupancy, failure mode, ATP, ZC, integrity, signaling]
primary_keyword: "CBTC phantom train detection"
secondary_keywords: ["CBTC failure mode", "phantom train CBTC", "false train report CBTC", "CBTC integrity check", "Zone Controller occupancy validation"]
related_chapters: [3, 4, 5, 9]
internal_links: ["/blog/onboard-side-of-cbtc-vobc", "/blog/cbtc-heartbeat-cycle", "/blog/communication-loss-fallback"]
og_image: "/blog/img/phantom-train-detection.png"
read_time: "10 min"
---

Every CBTC vendor presentation includes a slide on phantom occupancy — the fixed-block failure mode where a track-circuit relay sticks closed and reports a train that is not there. CBTC eliminates that failure mode by removing track circuits from the safety-critical loop. What no vendor presentation usually includes is the inverse failure mode that CBTC introduces: the phantom train. A Zone Controller (ZC) that receives and trusts a position report from a train that is not actually where the report says — because of a software fault, a corrupted message, a synchronized sensor failure, or an adversarial injection — has built its track-occupancy model on a fiction. The fiction translates into wider Movement Authorities (MAs) than the actual track state warrants, which is a safety hazard CBTC architectures address with multiple layers of defense, but which deserves more procurement attention than it typically gets.

## Why phantom train is a failure mode worth naming

The CBTC architecture rests on a single inversion: trains report their own positions, and wayside controllers trust the reports. The inversion is what enables moving block, ±2 to ±5 meter localization, and the headway gains the business case is built on. The cost of the inversion is that the architecture has no physical sense of train presence in the legacy track-circuit sense — there is no resistive loop in the rail measuring whether anything is shunting it. The phantom train is the consequence: if a position report is wrong, the wayside has limited independent ways to detect the error.

The probability of a phantom train event is low. The consequence, if it propagated through to an MA, would be high. This is exactly the profile of a Tolerable Hazard Rate (THR) calculation, and it is exactly why CBTC architectures engineer multiple defense layers around the inversion. This article is for the signaling engineer, ATP architect, system integrator, and Independent Safety Assessor who need to understand the phantom train failure modes and the layers that catch them. The defense-in-depth pattern is documented across Chapters 3, 4, 5, and 9 of *Communications-Based Train Control*, Volume 1, and is the foundation of any credible CBTC safety case.

## The mechanisms that produce phantom trains

A phantom train can arise from at least four mechanism families.

The first is **a corrupted position report in transit**. A radio-link bit error, a network glitch, or a malformed packet could in principle produce a position report that the ZC parses with values far from reality. CBTC protocols defend against this with cyclic redundancy checks (CRC), sequence numbering, and message authentication codes — the report has to validate cryptographically and sequentially before the ZC processes it. A corrupted report fails one of these checks and is rejected. (For the heartbeat protocol structure, see [The Heartbeat Cycle: 200 ms That Keep Modern Metros Safe](/blog/cbtc-heartbeat-cycle).)

The second is **a Vehicle On-Board Controller (VOBC) localization failure that the onboard logic does not detect**. If the Kalman filter integrating tachometer, Doppler, and balise data produces a wrong estimate — and the redundant safety processors do not catch the error through 2-out-of-3 voting or 2-out-of-2 comparison — the train transmits a confidently wrong position. The defense is the redundancy architecture itself: independent processors running diverse implementations of the same logic, with hardware voting that cannot be fooled by software fault. (For the VOBC redundancy and voting architecture, see [The Onboard Side of CBTC: Inside the VOBC](/blog/onboard-side-of-cbtc-vobc).)

The third is **an adversarial injection** — a message that did not originate from a legitimate train but was crafted to look like one. Cybersecurity defense layers (covered in Chapter 6 of the manuscript) protect against this through cryptographic authentication of every report, mutual authentication between train and wayside, and intrusion detection on the wayside backbone. The phantom train scenario is one of the standard threat models a CBTC cybersecurity assessment addresses.

The fourth is **a stale or replayed message** — a legitimate report from a previous cycle that arrives late or is replayed by an attacker. Defense layers include timestamp freshness checks, sequence number validation, and bounded message-acceptance windows that reject reports outside the expected cycle.

[FIGURE: Phantom train threat model diagram showing the four mechanism families (corrupted report, undetected VOBC localization failure, adversarial injection, stale or replayed message) with the corresponding defense layers (CRC and sequence numbering, redundancy and voting, cryptographic authentication, timestamp freshness).
Source: new figure to be generated.
Caption: "Phantom train mechanisms and the defense layers that catch them. The architecture pattern is defense in depth — no single layer is sufficient."]

## Layer 1: protocol integrity

The first defense layer is protocol integrity at the message level. Manuscript Chapter 3.4 documents that wayside-to-train MA messages are protected by cryptographic authentication, sequence numbering, and CRC; the same protections apply to train-to-wayside position reports. A position report that fails CRC is corrupted and is dropped. A report with an out-of-sequence number is replayed or stale and is dropped. A report that fails authentication did not originate from the claimed train and is dropped.

The protocol integrity layer is invisible during normal operation — it just rejects the small fraction of reports that fail validation, with no operational consequence. It becomes visible during diagnostic events: a wayside fault log that shows a sustained burst of CRC failures or sequence-number gaps is the first evidence of an intermittent hardware fault, an interference source, or an adversarial attempt.

## Layer 2: plausibility checks at the Zone Controller

The second defense layer is plausibility checking at the ZC. Even a position report that passes CRC, sequence, and authentication has to be plausible against the ZC's prior view of the line. Three plausibility tests catch most phantom trains.

**Position continuity**. A train that reported position X at t-1 cannot suddenly be reporting position X+1000 at t. The maximum credible position change between heartbeats is bounded by the maximum train speed times the cycle period, plus a margin for radio jitter. A position change beyond that bound triggers the report rejection.

**Speed continuity**. The reported speed has to be plausible against the previous report's speed and the train's certified maximum acceleration and deceleration. A train reporting 80 km/h at t-1 and 0 km/h at t has either applied emergency brake or transmitted a fault.

**Track presence**. The reported position has to lie on the track database. A position report claiming the train is at a coordinate that is not on any track segment is invalid. The ZC's track database is the authoritative reference; reports that violate it are rejected.

These checks do not eliminate the phantom train risk, because a sufficiently sophisticated attack or an unusually correlated fault could produce reports that pass plausibility. But the checks raise the bar substantially, and routine sensor faults or corrupted messages are rejected at this layer.

## Layer 3: cross-checking through track-circuit overlay

The third defense layer is the cross-check against an independent occupancy detection mechanism. Manuscript Chapter 4.2 documents that track circuits are optional in CBTC — but many US deployments retain them precisely for this kind of cross-check. The Chicago Red Line CBTC project, for example, retained track circuits despite full CBTC deployment, citing broken-rail detection and fallback positioning. The L Line and 7 Line retain track-circuit infrastructure for non-CBTC fleet support and for cross-validation.

When track circuits are present, the ZC can cross-check CBTC position reports against track-circuit occupancy. A train reporting a position over a track-circuit segment that is also showing occupancy is consistent. A train reporting a position over a track-circuit segment that is reporting unoccupied is suspicious — either the track circuit is faulted (a fixed-block phantom occupancy), the position report is faulty (a CBTC phantom train), or the train is stalled at the boundary.

The cross-check is a powerful defense layer where it is available. Standalone CBTC deployments without track circuits (Paris RATP Line 14, several greenfield airport people-movers) cannot use this layer. They rely on the protocol integrity and plausibility-check layers plus tighter independent monitoring of the localization stack.

## Layer 4: behavioral monitoring at the ATS

The fourth layer is statistical and behavioral monitoring at the central Automatic Train Supervision (ATS) level. The ATS sees the aggregate train-position picture across the entire line, including the relationships between trains. Phantom train events tend to produce statistical anomalies: a train whose position trajectory does not align with neighboring trains, a train whose reported speed pattern diverges from typical operational behavior, or a train identifier that does not match the dispatched roster.

The ATS is non-vital (SIL 0); it cannot make safety-critical decisions on its own. But it can flag anomalies for dispatcher attention, log them for offline forensic review, and feed them into predictive-maintenance loops that catch degraded VOBCs before they fail. (For the ATS architecture and its relationship to the safety-critical loop, see Chapter 7 of the manuscript.)

## Layer 5: design-time hazard analysis

The fifth layer is not runtime defense; it is design-time analysis. Manuscript Chapter 12.4 documents that CBTC vital functions are required to be SIL 4 with a Tolerable Hazard Rate of 10⁻⁹ per hour. The phantom train is one of the canonical hazards a CBTC Failure Mode and Effects Analysis (FMEA) and Fault Tree Analysis (FTA) have to address. The FMEA enumerates every credible failure mode of the VOBC, DCS, ZC, and protocol stack, assigns severity, occurrence, and detection ratings, and identifies the modes that warrant design mitigation. The FTA traces the catastrophic top event ("ZC issues an MA based on a phantom train, leading to collision") backward through fault combinations to identify which simultaneous failures could produce the event.

The Independent Safety Assessor (ISA) reviews the FMEA and FTA, validates the SIL allocation against the THR, and challenges the design assumptions. A safety case that does not explicitly address the phantom train hazard is incomplete; one that documents how each defense layer contributes to the THR allocation is what the FTA Project Management Oversight Contractor (PMOC) and the State Safety Oversight (SSO) program review.

## What gets specified, what gets engineered

Manuscript Chapter 13 and the procurement piece on [CBTC RAMS Requirements: What to Specify, What to Leave to the Supplier](/blog/cbtc-rams-requirements) frame the procurement decision. Three things should be specified explicitly in any modern CBTC RFP regarding phantom train defense.

**First**, the protocol integrity requirements: CRC, sequence numbering, and authentication on every position report and every MA. The cryptographic strength should match the deployment context (NIST-approved primitives, key lengths consistent with current standards).

**Second**, the plausibility checks at the ZC level: position continuity, speed continuity, and track-presence checks as minimum requirements, with additional checks at the supplier's discretion. The agency should require the supplier to document the plausibility check thresholds and the response to threshold violation.

**Third**, the cross-check architecture: whether the deployment retains track circuits for CBTC position cross-check, runs a Standalone CBTC architecture that omits the track-circuit layer, or uses an alternative independent occupancy mechanism. The choice has implications for the safety case structure and the THR allocation.

What is left to the supplier: the specific authentication algorithms, the plausibility-check thresholds, the FMEA and FTA methodology, and the safety architecture that delivers the specified THR. These are the engineering judgments that distinguish vendors and that the ISA validates.

## Operational implications and degraded-mode behavior

When the phantom train defense layers detect an anomaly, the system has to choose a response. Three responses are common in modern CBTC implementations.

**The conservative response** is to drop the suspect report and continue with the previous position estimate. The cost is a small increase in position uncertainty for one cycle; the benefit is operational continuity if the anomaly was a transient.

**The intermediate response** is to mark the train as degraded and require a sequence of consistent reports before restoring normal operation. The train continues operating but at increased safety margins, and the dispatcher is notified.

**The aggressive response** is to invoke the safe stopping protocol — apply service brake to bring the train to a controlled stop within its last valid MA and require human intervention before resuming. This is the response when the anomaly looks systemic rather than transient (multiple consecutive failures, simultaneous fault patterns, or anomaly types that the safety case ranks as high-severity).

The choice of response is a system-design decision that the safety case has to defend. The safety case argues that the response is appropriate given the THR allocation and the operational context.

## Practical takeaways

- The phantom train is the inverse of the fixed-block phantom occupancy. It is a low-probability, high-consequence failure mode that the CBTC architecture addresses through defense in depth, not through a single mechanism.
- Five defense layers operate together: protocol integrity (CRC, sequence, authentication), ZC plausibility checks (position, speed, track presence), cross-check against track circuits or alternative occupancy mechanisms where available, behavioral monitoring at the ATS, and design-time hazard analysis (FMEA, FTA, SIL 4 allocation).
- Standalone CBTC deployments lose one defense layer (the track-circuit cross-check) and have to compensate through tighter localization stack monitoring and stronger plausibility checks. The choice between Overlay and Standalone has phantom-train safety-case implications.
- A modern CBTC RFP should specify protocol integrity requirements and plausibility-check minimums explicitly, leave the algorithms and thresholds to the supplier, and require the supplier to address phantom train hazards in the FMEA and FTA deliverables.
- The supplier's safety case has to explicitly enumerate the phantom train hazard and document how each defense layer contributes to the THR allocation. A safety case silent on this hazard is incomplete.

## Where to go next

This post is a 10-minute walkthrough of a failure mode that deserves more procurement attention. The depth on safety architecture, FMEA, FTA, and the SIL 4 framework lives in Chapter 12 (Project Lifecycle) section 12.4 of *Communications-Based Train Control*, Volume 2, and the underlying onboard and wayside architecture lives in Chapters 3, 4, and 5 of Volume 1 ([Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 12 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch12.pdf) for the safety case structure.

For the heartbeat cycle and protocol layer that house the first two defense layers, see [The Heartbeat Cycle: 200 ms That Keep Modern Metros Safe](/blog/cbtc-heartbeat-cycle). For the related question of what trains do when communication fails, see [Communication-Loss Fallback: How Trains Behave When the Radio Drops](/blog/communication-loss-fallback).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 1: Foundations & Technical Architecture*. Independent. ISBN 979-8-258-54295-3. — Chapter 3, "CBTC System Architecture Overview"; Chapter 4, "Onboard Equipment"; Chapter 5, "Wayside Equipment"; Chapter 9, "Operating Modes."
- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Deployment & Economics*. Independent. ISBN 979-8-258-54295-3. — Chapter 12, "Project Lifecycle," section 12.4.
- IEEE Standards Association. *IEEE Std 1474.1: Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- International Electrotechnical Commission. *IEC 62443: Industrial communication networks — Network and system security*.
- CENELEC. *EN 50129: Railway applications — Safety related electronic systems for signalling*.
- Federal Transit Administration. (2016). *FTA Report No. 0045: Communications-Based Train Control (CBTC) Technology*. [transit.dot.gov](https://www.transit.dot.gov/)
- National Transportation Safety Board. *Rail Accident Investigations*. [ntsb.gov](https://www.ntsb.gov/)
