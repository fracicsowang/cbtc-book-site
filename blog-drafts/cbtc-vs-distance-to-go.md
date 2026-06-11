---
title: "CBTC vs Distance-to-Go: Two Philosophies of Authority"
slug: cbtc-vs-distance-to-go
description: "How CBTC's continuous Movement Authority differs from distance-to-go cab-signaling enforcement, and why the architectural distinction matters more than the headline capacity numbers."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: comparative
tags: [CBTC, distance-to-go, cab signaling, train control, authority, ATC]
primary_keyword: "CBTC vs distance-to-go"
secondary_keywords: ["distance-to-go signaling", "cab signaling vs CBTC", "movement authority", "ATC vs CBTC", "speed code enforcement"]
related_chapters: [1, 3]
internal_links: ["/blog/movement-authority-concept", "/blog/moving-block-explained", "/blog/what-is-cbtc-2026-guide"]
og_image: "/blog/img/cbtc-vs-distance-to-go.png"
read_time: "10 min"
---

In the 1970s, the New York City Transit Authority installed cab-signaling systems on portions of its A Division that gave the train operator a calculated distance-to-go target rather than a static speed code. The system told the operator how far the train could travel before the next deceleration was required. It enforced a continuous braking curve toward that target, applied the brakes if the operator missed, and updated the target as the train ahead moved or as conditions changed. To anyone reading the original IEEE 1474 documents two decades later, the distance-to-go architecture looked striking: half the vocabulary of CBTC, half the architecture, and a fraction of the cost. The CBTC vs distance-to-go question therefore comes up in almost every modernization conversation. The honest answer is that the two systems share a philosophical lineage but represent fundamentally different procurement decisions. This article explains how each one works, where they overlap, and why the choice between them is not a continuum but a categorical fork.

## Two philosophies, one shared family tree

Both CBTC and distance-to-go cab-signaling descend from the same conceptual ancestor: the recognition that wayside-displayed signal aspects are a coarse way to enforce safe separation. The traditional fixed-block signal told the operator only that the next block was clear, occupied, or approach-to-occupied. A red, yellow, or green aspect carried a fixed implication for speed and a fixed implication for the next aspect. Distance-to-go was the first major refinement of that paradigm: instead of a discrete aspect, the cab display would show a continuously updated target distance and target speed, and onboard equipment would enforce the resulting deceleration profile.

CBTC, formalized in IEEE 1474.1 in the early 2000s, took the next step. Distance-to-go cab-signaling still relies on track circuits to detect train presence; the wayside infers train position from circuit occupancy, and the distance-to-go target is bounded by the next signal at danger or the next track-circuit-defined endpoint. CBTC drops the inferential model entirely. The train reports its own position to the wayside (to roughly one-to-two-meter accuracy via tachometer plus balise plus Doppler), and the wayside computes a Movement Authority bounded by the actual position of the train ahead, not by a fixed track-circuit boundary. The shared ancestor is enforced continuous deceleration; the divergence is in how the endpoint of the authority is defined.

## How distance-to-go actually works

A distance-to-go cab-signaling system exchanges information with the train through inductive coupling in the running rails (or through trackside transponders in newer deployments). The wayside encodes the next limiting condition into a distance and a target speed. Onboard equipment receives the encoded message, interprets it against the train's known braking performance, computes the deceleration profile required to reach the target speed at the target distance, and enforces it through automatic train control logic that applies penalty braking if the operator fails to comply.

The architectural elements are recognizable to anyone who has read about CBTC. There is an onboard processor that supervises the speed against a calculated profile. There is a wayside that updates the target. There is a continuously enforced braking curve. There is a fail-safe behavior on loss of input. What is missing, and what makes the system fundamentally different, is high-resolution train position. The wayside knows that a train is somewhere within a track-circuit block, not where it is within that block. The distance-to-go target is conservatively bounded to the entrance of the occupied block ahead, not to the actual rear of the train ahead. The capacity ceiling that fixed-block signaling imposed is therefore largely preserved, even though the deceleration profile inside that ceiling is enforced more smoothly and more reliably.

![Distance-to-go is bounded by the block ahead; CBTC's Movement Authority is bounded by the lead train itself.](/figures/fig_01_06_movement_authority.png)
*<small>Distance-to-go is bounded by the block ahead; CBTC's Movement Authority is bounded by the lead train itself.</small>*

## How CBTC redefines the endpoint

CBTC's Movement Authority is the same concept as distance-to-go in principle but a different object in practice. The wayside Zone Controller continuously tracks the position of every train in its territory to roughly one-to-two-meter accuracy. It computes the safe-braking-distance buffer behind each train, accounting for that train's speed, the worst-case grade, the worst-case brake-effort fall-off, and a margin for system uncertainty. It generates a Movement Authority for the successor train that ends at the front of that buffer (in other words, just short of the lead train's actual rear plus the worst-case stopping distance). It transmits the authority to the train every 200 to 500 milliseconds through a digital data channel, typically IEEE 802.11 radio. The train's onboard ATP enforces the resulting braking curve.

Two architectural commitments in this paragraph make CBTC categorically different from distance-to-go. The first is that the wayside knows the actual position of every train, not just which block each train is in. The second is that the data channel is bidirectional and continuous; the train reports its own position and integrity status, and the wayside replies with an updated authority. Distance-to-go is unidirectional in the safety-critical path; the train receives but does not report. CBTC closes the loop, and the closing of the loop is what unlocks the moving-block paradigm. (For the deeper mechanics of MA generation, see [The Movement Authority Concept](/blog/movement-authority-concept).)

## Capacity, cost, and the procurement fork

Distance-to-go's capacity ceiling, in practice, sits roughly where high-quality fixed-block signaling sits, perhaps with a five-to-ten-percent uplift from smoother braking-curve enforcement and reduced operator-induced variability. A line that achieves 22 to 24 trains per hour under fixed block can typically reach 24 to 26 under distance-to-go cab-signaling, all else equal. CBTC's moving-block architecture, with high-resolution position knowledge and continuous bidirectional updates, delivers headlines closer to 30 to 35 trains per hour on lines with favorable geometry; the L Line's 26 sustained and 29 peak demonstrate the achievable range on a real US revenue line.

The cost differential is similarly categorical. Distance-to-go can frequently be implemented as an upgrade to existing cab-signaling infrastructure with relatively modest civil work; the wayside investment is incremental, the onboard investment is moderate, and the integration scope is bounded. Manuscript figures put a typical fixed-block-and-cab-signaling capital cost in the $8 to $15 million per 10 km range. CBTC requires the full data communication system, redundant Zone Controllers, a balise inventory, fleet-wide VOBCs, and integration with the operations control center; the manuscript range for CBTC capital is $15 to $25 million per 10 km, with brownfield retrofits substantially higher. The L Line retrofit's roughly $48 million per kilometer reflected the integration complexity of inserting CBTC into a dense urban environment with full revenue service running.

The procurement fork is therefore not "how much capacity does the agency want" but "what is the agency willing to spend, what is the corridor's demand profile, and what is the strategic intent." A line with modest peak demand, long signal blocks, and no near-term pressure to reach driverless operation can be served well by distance-to-go cab-signaling. A line approaching saturation, with terminal turnaround engineered for tight headways, and a strategic intent to eventually reach GoA 4 or to support fully automated operation, requires CBTC. The two systems are not rungs on the same ladder; they are two different ladders.

## Why some agencies still pick distance-to-go

US transit history has several examples of agencies that selected distance-to-go cab-signaling over CBTC for specific reasons that remain valid in 2026 for some corridors. The first reason is fleet age. An agency facing a 20-year-old fleet with a large remaining service life, no factory CBTC equipment, and a constrained capital plan can implement distance-to-go enforcement with fleet retrofits that are far less invasive than CBTC retrofits. The second is operating profile. Lines with low peak ridership, long terminal layovers, or extended single-track sections may not gain meaningful capacity from CBTC even if it is technically feasible; the marginal value of moving-block separation is small when the line is dwell-time-limited or schedule-padded for other reasons.

The third is the institutional capacity to absorb a major program. CBTC procurement, integration, and cutover require a project team that the agency has rarely run before; distance-to-go upgrades are smaller, more bounded, and less likely to consume the agency's executive attention for a decade. An agency that has multiple competing priorities (fleet replacement, station accessibility, traction-power renewal) may rationally defer CBTC and bridge with distance-to-go for one capital cycle.

The fourth is regulatory and corridor characteristics. Lines that share track with mainline rail under FRA jurisdiction, or corridors that are explicitly multimodal, may face institutional barriers to CBTC that distance-to-go cab-signaling does not trigger. (The US regulatory split is unpacked in [CBTC vs PTC: Why US Commuter Rail Picked One and US Metro Picked the Other](/blog/cbtc-vs-ptc-us-commuter-rail-vs-metro).)

[FIGURE: Decision flowchart comparing distance-to-go and CBTC across capacity demand, fleet age, capital availability, GoA target, and regulatory context, with terminal recommendations for each branch. Source: new figure to be generated. Caption: "The CBTC vs distance-to-go decision is categorical, not continuous; specific corridor characteristics drive the right answer."]

## What the architectural distinction means for safety

Both systems can, in principle, be designed to SIL 4 standards. Distance-to-go cab-signaling on most modern deployments meets the same software-safety lifecycle requirements (IEC 62279 / EN 50128) as CBTC. Both prevent the classic Signal Passed at Danger event by enforcing a continuous deceleration profile rather than relying on operator interpretation of a discrete aspect. The safety case differs in what each system can demonstrate, not in the safety integrity level of its individual subsystems.

CBTC's safety case rests on continuous bidirectional supervision: the wayside knows where every train is, the train reports its own integrity, and the loss of either input triggers a defined fallback within milliseconds. Distance-to-go cab-signaling's safety case rests on the inferential track-circuit detection of train presence, the operator's continuous compliance with the displayed target, and the onboard enforcement that catches non-compliance. Both are safe in production. Distance-to-go's failure modes are more familiar (track-circuit phantom occupancies, broken bonds, relay drift); CBTC's are different but not necessarily more numerous (DCS interference, balise read failure, localization drift). Agencies should not treat distance-to-go as inherently less safe; they should treat it as a different safety case with different residual risks.

## What this means in practice

- The CBTC vs distance-to-go choice is categorical, not a slider. Decide based on capacity need, GoA intent, fleet condition, and capital constraints, not on technology aesthetics.
- Distance-to-go cab-signaling can extend the useful life of a fixed-block line by 10 to 20 years and is a defensible procurement when the demand profile does not require moving-block capacity.
- CBTC's Movement Authority is a different object than distance-to-go's target distance; the high-resolution train position and the continuous bidirectional channel are the architectural commitments, not the deceleration enforcement.
- A multi-line agency may rationally run both: distance-to-go on lower-demand lines, CBTC on capacity-constrained corridors. The two systems do not need to be uniform across an agency.
- If the strategic intent is to reach GoA 4 (fully unattended operation) within the planning horizon, distance-to-go is not a stepping stone; it is a different path. Plan accordingly.

## Where to go next

This post is a comparison overview. The full treatment of train control evolution, including the technical lineage from time-interval methods through cab-signaling and into CBTC, lives in Chapter 1 ("The Evolution of Train Control") and Chapter 3 ("CBTC System Architecture Overview") of *Communications-Based Train Control* ([Volume 1 on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 1 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch01.pdf)

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 1: Foundations & Technical Architecture*. Independent. ISBN 979-8-258-54295-3. — Chapter 1, "The Evolution of Train Control"; Chapter 3, "CBTC System Architecture Overview."
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- International Electrotechnical Commission. *IEC 62290-1: Railway applications — Urban guided transport management and command/control systems*.
- International Electrotechnical Commission. *IEC 61508: Functional Safety of Electrical/Electronic/Programmable Electronic Safety-related Systems*.
- Federal Transit Administration. *State Safety Oversight Program*. [transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight](https://www.transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight)
- MTA New York City Transit. *Communications-Based Train Control Status Update*. [new.mta.info/project/communications-based-train-control-cbtc](https://new.mta.info/project/communications-based-train-control-cbtc)
