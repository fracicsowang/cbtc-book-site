---
title: "Phantom Occupancy and Why It Causes Service Delays"
slug: phantom-occupancy-service-delays
description: "Phantom occupancy in CBTC explained: how legacy track-circuit detection creates virtual trains the zone controller cannot see, why it forces conservative Movement Authorities, and how it cuts mainline capacity by up to 30 percent."
date: 2026-06-20
author: "Chunjun (Francisco) Wang"
category: operations
tags: [phantom occupancy, mixed-fleet operation, overlay CBTC, track circuit, NYC MTA, capacity, US transit]
primary_keyword: "phantom occupancy"
secondary_keywords: ["phantom train CBTC", "mixed-fleet CBTC", "overlay CBTC capacity", "track circuit failure CBTC", "legacy fleet CBTC"]
related_chapters: [9, 5, 13]
internal_links: ["/blog/operating-modes-cbtc-normal-restricted-manual-failure", "/blog/headway-optimization-beyond-theoretical-minimum"]
og_image: "/blog/img/phantom-occupancy-service-delays.png"
read_time: "10 min"
---

In the early years of the L Line CBTC retrofit, MTA dispatchers occasionally watched the central display show a train that was not there. A short stretch of track in the Canarsie segment would light up with phantom occupancy — the legacy track circuit reporting an unequipped train present, the zone controller dutifully creating a virtual train object, every CBTC train downstream backing off its Movement Authority by the conservative legacy-fleet margin — and then the indication would clear after maintenance found a wet rail joint or a failed insulated joint bond. While the indication held, mainline capacity on that segment had dropped by a quarter, on-time performance suffered, and riders saw delays they had no way to explain. Phantom occupancy is one of the least understood failure modes in operational CBTC, and on overlay deployments — which is most US deployments — it is the single largest source of routine, unexplained capacity loss.

## Two phantoms, one name

The literature uses "phantom occupancy" and "phantom train" almost interchangeably, but they refer to two related but distinct phenomena. Phantom occupancy is a fixed-block failure mode: a track circuit reports occupancy when no train is present. The cause is usually electrical — a wet ballast section that creates a parallel resistance path, a failed insulated joint, a broken bond wire, a corroded relay contact — and the consequence in legacy signaling is straightforward: the next train is held until the indication clears.

Phantom train is the CBTC analogue: the zone controller carries a train object in its database that has no real-world counterpart. In a pure standalone CBTC system this is rare, because the zone controller's train objects are created by handshake with onboard VOBCs and removed when those VOBCs hand off or terminate cleanly. The path from rare to common in operational CBTC runs through overlay deployments, where legacy track-circuit detection and CBTC moving-block detection are designed to coexist, and where the failure modes of each layer can become phantom trains in the other. (For the broader CBTC architecture context, see What Is a Zone Controller? CBTC's Wayside Brain Explained.)

This post explains both, why they matter, and how procurement and design choices control how often they happen.

## Why overlay CBTC creates phantom trains

Most US CBTC deployments are overlay, meaning the new CBTC system is installed on top of retained legacy fixed-block signaling rather than replacing it. Overlay is the conservative choice for two reasons. First, legacy fleets — older rolling stock without CBTC onboard equipment — can continue to operate under legacy signal authority on the same track until the fleet is fully replaced. Second, the legacy signaling provides a Non-CBTC bypass mode when CBTC is unavailable, which means the line can keep running through CBTC outages at reduced capacity rather than evacuating. (For the bypass mode mechanics, see [Operating Modes in CBTC: Normal, Restricted, Manual, Failure](/blog/operating-modes-cbtc-normal-restricted-manual-failure).)

The cost of overlay is that the zone controller has to reason about two populations of trains at once. CBTC-equipped trains report their position continuously through the wireless data link, and the zone controller knows their speed, length, and braking characteristics with high confidence. Legacy trains do not report. The zone controller learns about them indirectly: a legacy track circuit reports occupancy, and the zone controller infers that a non-communicating train is somewhere within that section.

The zone controller cannot ignore the indication. If a legacy train is real, the safety case requires the zone controller to assume the worst credible interpretation: that the train occupies the entire detected section, that it is traveling at maximum mainline speed, and that it has an unpredictable deceleration profile. Movement Authorities for any CBTC train approaching that section are calculated against those assumptions, which means a much larger separation buffer than the precise CBTC-to-CBTC case requires. On the NYC 7 Line, the manuscript reports that a 10 percent legacy presence reduces achievable capacity from 26 to 28 trains per hour to 18 to 22; a 25 percent legacy presence reduces it to 14 to 18. Phantom occupancy — track-circuit indications that do not correspond to a real train — produces the same conservatism without the offsetting traffic; the line gives up capacity for a train that does not exist.

## The four common causes of phantom indications

Phantom occupancy in operational service comes from four distinct sources, and the procurement countermeasures for each are different.

The first source is track-circuit electrical faults. Wet rail joints, ballast contamination from oil or ferrous dust, failed insulated joint bonds, corroded relay contacts, and water intrusion into trackside cabinets all produce false occupancy indications on legacy track circuits. These are maintenance-driven; their frequency tracks the age and condition of the legacy infrastructure beneath the CBTC overlay. Agencies with older legacy track circuit plant — much of the NYC system, parts of the Chicago L, parts of the SEPTA Broad Street and Market-Frankford lines — see higher phantom occupancy rates than agencies with newer infrastructure.

The second source is axle counter failures at critical merge and junction points. Axle counters are point detectors that count axles into and out of a section; if the counter miscounts, the section can register as occupied indefinitely until the count is manually reset. Modern axle counters are more reliable than the relay-based track circuits they replace, but they are not immune; the manuscript references a documented incident on the 7 Line in which an axle counter failure produced phantom occupancy that reduced capacity for 18 minutes before the maintenance team could reset it.

The third source is environmental. Heavy snow, flooding, lightning strikes, and severe electromagnetic interference can all cause spurious detection events. These tend to be transient and to clear when the environmental cause clears, but during the event the zone controller has no way to tell a real train from a weather artifact.

The fourth source is software inconsistency at the boundary between the legacy fixed-block detection layer and the CBTC zone controller. The interface between the two is implemented through a dedicated module, and that module can carry stale state if a track circuit indication clears in the field but the message is dropped or delayed on its way to the zone controller. This is the rarest of the four causes but the hardest to diagnose because it leaves no track-side evidence.

![A phantom occupancy on a legacy track circuit forces the zone controller to assume a non-communicating train is present. The CBTC train downstream loses Movement Authority and slows.](/figures/fig_09_06_phantom_occupancy.png)
*<small>A phantom occupancy on a legacy track circuit forces the zone controller to assume a non-communicating train is present. The CBTC train downstream loses Movement Authority and slows.</small>*

## Why phantom occupancy is operationally invisible to passengers

A signal failure in legacy signaling is observable: the train stops at a red signal until the indication clears. Phantom occupancy in CBTC is much subtler. The zone controller does not stop the affected CBTC train; it gives the train a shorter Movement Authority and the train slows or pauses to comply. Riders perceive a slow run or a brief stop between stations. The line stays open, the schedule slips, and the cause does not propagate to the public information system because the symptom is intermittent and the root cause is not what dispatchers see on their primary screens.

This is why phantom occupancy is so under-reported in agency-public communications and so over-represented in the operational frustrations of the CBTC engineers and dispatchers who run the system. The capacity loss is real — 20 to 30 percent on the affected segment for the duration of the indication — and the cumulative impact across a year of intermittent indications is meaningful, but no single passenger journey shows the cause cleanly enough to drive the political will for the maintenance investment that would reduce it.

## What procurement and design can do about it

Phantom occupancy is partly a maintenance problem and partly a design problem, and the procurement language can address both.

The first lever is detection redundancy at critical points. Specifying redundant detection — two track circuits in parallel, or a track circuit plus an axle counter, at junctions, terminals, and pocket tracks — means that a single detection failure does not produce a phantom indication. The zone controller's interface logic accepts the section as clear if either detection layer reports clear, with a confirmation timer to prevent flicker. The capital cost is modest; the capacity benefit is meaningful.

The second lever is automated phantom-occupancy validity checks. The zone controller can be programmed to flag any phantom occupancy indication that persists for longer than the system's headway time. A real legacy train transiting a section will clear it in under the headway time; a persistent indication is much more likely to be a fault than a real train. After a configurable threshold (typically 3 minutes), the system raises a maintenance alert and, in some implementations, allows a dispatcher-authorized override to release the section.

The third lever is mixed-fleet retirement planning. The deepest fix is to remove the cause, which means retiring the legacy fleet and removing the track-circuit interface from the routine operating envelope. The MTA has been retrofitting remaining legacy cars on its CBTC lines with the goal of full CBTC fleet status by 2026 to 2028 according to its public plans. Once the legacy fleet is gone, the zone controller can be reconfigured to treat all track-circuit indications as faults rather than possible trains, and the phantom-occupancy capacity penalty disappears.

The fourth lever is RFP language for the legacy interface itself. Specifying the message rate, the failure detection logic, the stale-state timeout, and the dispatcher override pathway in the procurement avoids the situation in which the vendor implements the legacy interface as an afterthought and the operational team discovers the gaps in the first year of revenue service. Mixed-fleet operation is the hardest CBTC operational case, and the interface to legacy detection is where the hardest problems live. (For the capacity arithmetic that determines how much phantom occupancy actually costs, see [Headway Optimization: Beyond the Theoretical Minimum](/blog/headway-optimization-beyond-theoretical-minimum).)

## What this means in practice

- Phantom occupancy is a routine source of capacity loss on overlay CBTC deployments. A 20 to 30 percent capacity reduction on the affected segment for the duration of the indication is typical, and the cumulative annual impact is non-trivial.
- The four common causes are track-circuit electrical faults, axle counter failures at merge points, environmental events, and stale state at the legacy-to-CBTC interface. Each has a different countermeasure.
- Detection redundancy at critical points (track circuit plus axle counter, or two track circuits in parallel) closes the single-point failure that creates most phantom indications at junctions and terminals.
- Automated validity checks — flagging any phantom occupancy that persists beyond the system's headway time — turn the indication from a silent capacity penalty into a maintenance ticket.
- The deepest fix is mixed-fleet retirement. Once the legacy fleet is gone, the legacy track-circuit interface can be retired, and the phantom-occupancy capacity penalty disappears.
- Specify the legacy interface in the RFP. Message rate, failure detection logic, stale-state timeout, and dispatcher override should be in the procurement, not left to vendor discretion.

## Where to go next

This post is a 10-minute summary. The full treatment of phantom occupancy and mixed-fleet operation lives in Chapter 9 of *Communications-Based Train Control* (Volume 2): [Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ) · [Download Chapter 9 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch09.pdf)

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Lifecycle, and US Deployment*. Independent. ISBN 979-8-258-54295-3. — Chapter 9, "Operating Modes and Mode Transitions"; Chapter 5, "Wayside Equipment."
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- American Public Transportation Association. *Standards for Communications-Based Train Control (CBTC) Systems*.
- MTA New York City Transit. *L Line and 7 Line CBTC Operations Documentation*. [new.mta.info](https://new.mta.info/)
- Federal Transit Administration. *State Safety Oversight Program Standard*. [transit.dot.gov](https://www.transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight)
- Transit Cooperative Research Program. *TCRP Report 163: Transit Capacity and Quality of Service Manual*. Transportation Research Board.
