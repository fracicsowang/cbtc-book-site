---
title: "Why Door Operation Is the Bottleneck in High-Frequency Service"
slug: door-operation-bottleneck-high-frequency-service
description: "On a high-frequency CBTC line, the limiting constraint is rarely the signaling system. It is the door cycle. Here is why door operation dominates dwell, where the engineering levers actually are, and what to specify in the procurement."
date: 2026-07-18
author: "Chunjun (Francisco) Wang"
category: operations
tags: [door operation, dwell time, CBTC capacity, platform screen doors, high-frequency service, US transit]
primary_keyword: "door operation high-frequency service"
secondary_keywords: ["CBTC door cycle", "platform screen doors capacity", "metro dwell time door", "door interface VOBC", "level boarding metro"]
related_chapters: [13, 4, 8]
internal_links: ["/blog/headway-optimization-beyond-theoretical-minimum", "/blog/driverless-operation-engineering-labor-public-acceptance"]
og_image: "/blog/img/door-operation-bottleneck-high-frequency-service.png"
read_time: "10 min"
---

The Hudson Yards extension of the NYC 7 Line opened in September 2014 with one feature unique in the New York subway system: full-height platform screen doors at the terminal station. The doors were not specified for capacity; they were specified to climate-control the platform and to address a specific safety concern in a deep-bored station with limited evacuation paths. But after revenue service began, an operational pattern emerged that the procurement team had not fully anticipated. Dwell at Hudson Yards was measurably faster than dwell at comparable stations elsewhere on the 7 Line. The platform screen doors were saving about 5 to 8 seconds per stop. On a line operating at 24 to 26 trains per hour, that is between two and three additional trains per hour of capacity, recovered from the door cycle alone. Door operation is the most underappreciated capacity lever on a high-frequency CBTC line, and on the lines where it has been engineered well, it is the difference between hitting the design tph and missing it by a quarter.

## Why door operation dominates dwell

Dwell time is the single largest variable component of headway, and door operation is the single largest variable component of dwell. The manuscript's Chapter 13 treatment of dwell lists five governing factors: passenger loading (the dominant term, proportional to occupancy and destination diversity), door width and count (wider or more doors reduce dwell), platform curvature (curved platforms add door-to-platform gap and sill height variability), ridership mix (peak direction is much slower than reverse-peak), and platform-to-floor level boarding. Four of those five govern how passengers move across the door threshold; one governs how many passengers are moving. The door is where dwell happens. (For where dwell sits in the broader theoretical-to-achievable headway gap, see [Headway Optimization: Beyond the Theoretical Minimum](/blog/headway-optimization-beyond-theoretical-minimum).)

On a high-frequency line — under 120-second headway, over 28 trains per hour — every additional second of dwell variance translates directly into a dropped train per hour somewhere in the schedule. Headway recovery from a long-dwell station has to come out of running time on the next segment, and on a line operating near capacity, there is no slack to absorb. The door cycle therefore controls the achievable tph, not just the dwell at the station where it happens.

This is why the highest-frequency lines globally — Paris Métro Line 14 at 85-second peak headway, Singapore North-South at 100-second peak — are universally equipped with platform screen doors, level boarding, and wide-door rolling stock. Without those, the door cycle becomes the binding constraint and the rest of the system's capacity is wasted.

## What the door cycle actually contains

A passenger looking at a stopped train sees doors open and doors close. The train control system sees a more elaborate sequence, and most of the engineering investment lives in the parts the passenger does not see.

The cycle begins before the train stops. The Vehicle On-Board Controller computes a deceleration profile that targets the platform stop marker within roughly 30 centimeters under ATO control, accounting for current speed, gradient, and brake performance. The Automatic Train Protection layer supervises the deceleration against a continuous speed envelope to the stop point. A precision stop within tolerance is a precondition for the next phase; an undershoot or overshoot of more than half a meter forces the operator to creep the train forward, adding 5 to 10 seconds to the cycle. Precision stop is a CBTC capability; the manuscript's L Line case study reports that ATO precision stopping reduced platform gap inconsistency and door-alignment complaints by 45 percent compared to manual operation.

Once the train is stopped and stationary, the VOBC runs a berthing detection routine: velocity must be below threshold (typically 0.05 m/s) for at least 2 seconds, position must match the platform marker within tolerance, no conflicting movements may be active in adjacent tracks, and the train consist must be confirmed in the correct alignment with the platform door pattern. The routine completes in well under a second; if any check fails, doors are inhibited and the operator is alerted.

Berthing confirmed, the VOBC issues the door-enable signal. The train doors begin their open cycle. Pneumatic door systems on US heavy rail typically take 3 to 5 seconds from open command to fully open. Where platform screen doors are installed, the wayside door controller commands the PSDs in synchronization with the train doors; the manuscript notes that a synchronized PSD-train door cycle saves 2 to 4 seconds compared to sequential cycles by eliminating the worst-case cumulative open time.

Then the dwell itself begins. Passengers alight, then board. Passenger flow is governed by door width, door count, passenger density on the platform and in the train, and the boarding discipline of the riders. A two-door, narrow-door car can take 30 to 45 seconds at full peak loading; a four-door, wide-door car can take 20 to 25 seconds for the same load.

Door close is operator-initiated on most US GoA 2 deployments. The operator visually inspects the platform, presses the close-doors button on the Driver Machine Interface, and the door cycle begins. Pneumatic systems take 3 to 5 seconds to cycle closed. Door-edge pressure sensors detect obstructions and trigger a re-open if a passenger or object is caught; multiple re-open events extend the cycle by 5 to 10 seconds each. Once doors are confirmed closed and locked by redundant position sensors, the VOBC requests a new Movement Authority from the Zone Controller and the train departs.

The full sequence — precision stop, berthing, door open, dwell, door close, depart — typically consumes 35 to 60 seconds at a busy urban station. The dwell portion (passenger loading) is 50 to 70 percent of that. Every other portion is engineering-controllable.


![Dwell as the dispatcher sees it. The 25-second passenger phase is governed by physics; the 16 seconds around it are gove.](/blog/img/door-operation-bottleneck-high-frequency-service-fig1.svg)
*<small>Dwell as the dispatcher sees it. The 25-second passenger phase is governed by physics; the 16 seconds around it are gove.</small>*


## Why doors cause more incidents than signaling

Door faults are not just a capacity issue; they are the leading cause of in-service incidents on operational CBTC lines. A door interlock failure that prevents the train from departing, a door obstruction that triggers repeated re-open cycles, a door-position sensor anomaly that produces a "doors not closed" indication when the doors are physically closed, a passenger pulling an emergency cord because their bag is caught — all of these present operationally as "the train is not moving" and consume dispatcher and operator attention disproportionate to their root cause.

The manuscript's Chapter 4 treatment of the VOBC notes that door fault detection is a leading source of in-service incidents on CBTC lines and that many failure modes that look like signaling issues are actually door interface issues. The traction interface, the brake interface, the door interface, and the Train Management System interface together form the small network of vital and non-vital connections between the VOBC and the train's existing systems, and the door interface is where retrofit projects spend a disproportionate share of their integration effort. (For the broader VOBC-to-train integration picture, see The Onboard Side of CBTC: Inside the VOBC.)

The implication is that door system reliability is part of the CBTC capacity case, not a separate rolling-stock concern. A line with 99.5 percent door cycle reliability spends a measurable fraction of its operating day in door-fault recovery; a line with 99.95 percent reliability does not. The procurement language for the VOBC-door interface, for the door obstruction detection, and for the door-fault recovery procedure shapes that reliability number directly.

## The four engineering levers

Four engineering decisions, each made well before the first revenue train, govern how much of the door cycle the line gets back.

The first is platform screen doors. PSDs add 5 to 8 seconds of dwell saving per stop on a busy line by enabling earlier door opening, eliminating draft-related door-cycle delays, and synchronizing the train-door and platform-door cycles. They also eliminate a class of safety incidents (passenger falls, intrusions, debris on track) that drives part of the operational reserve. The capital cost is $50,000 to $100,000 per door set per station; on a 21-station line, that is $10 to $20 million depending on door specification. On a high-frequency line operating at or above 28 tph, the capacity recovered through PSDs typically pays back faster than any other dwell-reduction investment.

The second is level boarding. Eliminating the platform-to-floor gap saves 5 to 8 seconds per stop by removing the wheelchair boarding delay and reducing elderly passenger boarding time. It also unlocks ADA compliance margins that many older US lines do not currently meet. Achieving level boarding requires coordinated platform-rebuilding and rolling-stock specification, which is expensive, but the capacity benefit compounds with the PSD benefit and the ADA compliance benefit pays for a meaningful share of it.

The third is door width and door count. Wide doors and four-door cars (versus narrow doors or two-door cars) save 10 or more seconds per stop on crowded lines by parallelizing the boarding flow. This is a rolling-stock specification decision made when the fleet is procured; once the fleet is in service, retrofitting door geometry is rarely economical. The procurement implication is that fleet specifications and CBTC specifications have to be developed together, not in separate procurement tracks.

The fourth is operational discipline. Platform announcements, clear-aisle markings, staff-managed boarding flow at major interchanges, and "let them off first" signage save 2 to 3 seconds on average. The investment is small; the cumulative annual capacity recovery is meaningful. Lines that operate well above 28 tph almost universally invest in this layer; lines that do not consume the equivalent capacity in dwell variance.

## The driverless dimension

On GoA 4 deployments, the door cycle architecture changes in a specific way. There is no operator to visually inspect the platform and initiate door close; the system has to do it. Door obstruction detection has to be more conservative because there is no human to override it. Passenger emergency communication has to be more robust because there is no attendant onboard. Platform screen doors are not optional; they are a prerequisite of the safety case.

The capacity result is mixed. On a well-designed GoA 4 system with PSDs and tight obstruction-detection timing, the door cycle is faster and more consistent than on an attended line. Paris Line 14, Singapore North-South, and Honolulu Skyline all run sub-90-second cycles in revenue service. On a poorly designed GoA 4 system with conservative obstruction timeouts and slow PSD-to-train synchronization, the door cycle is slower, and the capacity advantage of full automation is eroded by the dwell penalty. (For the broader engineering envelope of driverless operation, see [Driverless Operation: Engineering, Labor, and Public Acceptance](/blog/driverless-operation-engineering-labor-public-acceptance).)

## What this means in practice

- The door cycle is the binding constraint on high-frequency CBTC service, not the signaling system. A line operating at or above 28 tph has its capacity gated by door operation more than by Movement Authority calculation.
- Door operation is also the leading source of in-service incidents on operational CBTC lines. Door-fault recovery consumes operational reserve disproportionate to root-cause severity.
- Four engineering levers govern how much of the door cycle the line recovers: platform screen doors (5 to 8 sec saved), level boarding (5 to 8 sec saved), wide doors and door count (10-plus sec saved on crowded lines), and operational discipline (2 to 3 sec saved on average).
- Most of these levers live outside the CBTC procurement scope. Platform modifications, rolling-stock specification, and operations practices have to be coordinated with the signaling project to actually realize the capacity the CBTC business case promised.
- On GoA 4 deployments, the door architecture is non-optional. PSDs, robust obstruction detection, and synchronized PSD-train door cycles are prerequisites; design them well and the capacity advantage of full automation holds, design them poorly and the dwell penalty eats the gain.

## Where to go next

This post is a 10-minute summary. The full treatment of dwell, door operation, and capacity lives in Chapter 13 and Chapter 4 of *Communications-Based Train Control* (Volume 2): [Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ) · [Download Chapter 13 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch13.pdf)

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Lifecycle, and US Deployment*. Independent. ISBN 979-8-258-54295-3. — Chapter 13, "Performance Criteria and Capacity Analysis"; Chapter 4, "Onboard Equipment."
- Transit Cooperative Research Program. *TCRP Report 163: Transit Capacity and Quality of Service Manual*. Transportation Research Board.
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- MTA New York City Transit. *L Line and 7 Line CBTC Performance Reports*. [new.mta.info](https://new.mta.info/)
- RATP. *Métro Line 1 and Line 14 Operating Statistics*. [ratp.fr](https://www.ratp.fr/)
- SMRT Corporation Singapore. *North-South Line Driverless Operation Implementation*. [smrt.com.sg](https://www.smrt.com.sg/)
- American Public Transportation Association. *Standards for Communications-Based Train Control (CBTC) Systems*.
