---
title: "CBTC Glossary: 50 Terms Every Transit Engineer Should Know"
slug: cbtc-glossary-50-terms
description: "A practical CBTC glossary of 50 terms every US transit engineer should be able to define on a whiteboard, organized by subsystem and grounded in IEEE 1474 and IEC 62290."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: definitional
tags: [CBTC, glossary, signaling vocabulary, IEEE 1474, IEC 62290, US transit]
primary_keyword: "CBTC glossary"
secondary_keywords: ["CBTC terms", "CBTC vocabulary", "CBTC acronyms", "moving block terms", "signaling glossary"]
related_chapters: [1, 3, 4, 5]
internal_links: ["/blog/what-is-cbtc-2026-guide", "/blog/atp-ato-ats-triad", "/blog/what-is-a-zone-controller"]
og_image: "/blog/img/cbtc-glossary-50-terms.png"
read_time: "10 min"
---

A few years ago, a US transit agency procurement officer pulled three vendor proposals off her desk and circled, in red ink, every term she could not confidently define. The pile of circled words filled a notebook page. Movement Authority, Zone Controller, balise, GoA 2, SIL 4, FRMCS, EULYNX, hot standby, end-of-authority, phantom occupancy. Her engineering staff used the words fluently. Her board did not. The procurement evaluation was paused for two weeks while the team built a glossary the entire selection committee could read. Half a billion dollars of capital depended on a shared vocabulary. This CBTC glossary is built for the same audience: program managers, board members, software engineers crossing into rail, and consultants who have been told that Communications-Based Train Control (CBTC) is "moving-block signaling" and need fifty more words to actually use that sentence.

## How to use this glossary

Treat the entries below as a working reference, not an academic dictionary. Each entry includes a one-sentence definition, the engineering significance, and where the term shows up in a typical US procurement. When two terms are commonly confused (ATP and ATO, fixed block and moving block, PTC and CBTC), the entries cross-reference each other. The glossary is organized by subsystem rather than alphabetically, because that is how the words appear in practice: when an RFP starts describing the Data Communication System, six related terms follow within the same paragraph. Read by section, and the vocabulary builds itself. For a deeper plain-English overview, start with the [What Is CBTC guide](/blog/what-is-cbtc-2026-guide) and then return here.

## Core CBTC subsystems

**Communications-Based Train Control (CBTC)**. The IEEE 1474.1 definition: a continuous automatic train control system that uses high-resolution train location determination independent of track circuits, continuous high-capacity bidirectional train-to-wayside data communications, and onboard and wayside processors capable of implementing vital functions. In US procurement, the term is the procurement floor; specifying "CBTC" without referencing IEEE 1474.1 leaves the agency exposed to vendor reinterpretation.

**Automatic Train Protection (ATP)**. The safety-critical onboard subsystem that supervises train movement against the latest Movement Authority and applies the emergency brake if the train would otherwise exceed it. ATP is mandatory at every Grade of Automation, must be SIL 4 certified, and cannot be overridden by the driver.

**Automatic Train Operation (ATO)**. The driving-automation layer that commands traction and braking under ATP supervision. ATO handles station-stopping accuracy, energy-optimized cruising, and door-enable signals. It is not safety-critical; it operates strictly inside the envelope ATP draws.

**Automatic Train Supervision (ATS)**. The control-room layer that supervises the entire railway: timetable execution, dispatching, regulation, route setting through interlockings, and operator displays. Advisory to ATP and ATO. (For the full hierarchy, see [ATP, ATO, ATS: The Three-Layer Triad of Modern Train Control](/blog/atp-ato-ats-triad).)

**Zone Controller (ZC)**. Wayside computer that owns one geographic zone (typically two to five kilometers), tracks every train inside it, generates Movement Authorities, and hands off to neighbor zone controllers at boundaries. Each ZC is redundant in 2-out-of-2 or 2-out-of-3 configuration.

**Vehicle On-Board Controller (VOBC)**. Train-resident vital computer that runs ATP supervision, ATO commands, balise reading, odometry fusion, and DCS communication. Often the single most expensive electronic unit on a CBTC train; manuscript figures put each VOBC in the $200,000 to $400,000 range.

**Data Communication System (DCS)**. The wireless network that carries train-to-wayside data. Most US CBTC deployments use 2.4 GHz or 5 GHz IEEE 802.11 spread-spectrum radio with overlapping access points; some newer systems pilot LTE-R or private 5G.

**Movement Authority (MA)**. The signed promise from the wayside to a single train: "you may proceed up to point X at speed Y." Refreshed every 200 to 500 milliseconds in modern deployments. The MA is the single most important data object in CBTC.

**End-of-Authority (EoA)**. The point on the track at which a Movement Authority terminates. ATP enforces a braking curve that brings the train to a stop short of the EoA under any worst-case combination of grade, brake performance, and reaction time.

**Heartbeat**. A periodic health-check message exchanged between train and wayside (and between redundant processors). Loss of heartbeat for a defined interval (typically two to five seconds for the link, milliseconds for processor-internal heartbeats) triggers a defined fallback.

![The CBTC reference architecture: VOBC and ATP onboard, ZC and ATS wayside, DCS in between.](/figures/fig_03_02_end_to_end_architecture.png)
*<small>The CBTC reference architecture: VOBC and ATP onboard, ZC and ATS wayside, DCS in between.</small>*

## Signaling and operational concepts

**Fixed block**. Traditional signaling: the track is divided into fixed-length sections (blocks), each occupied by at most one train. The successor train cannot enter a block until the predecessor has fully cleared it. Capacity is bounded by block length.

**Moving block**. CBTC's defining concept. A continuously calculated buffer is placed around each train, sized to current speed, train braking performance, and the position of the train ahead. Capacity is bounded by physics and dwell, not by infrastructure granularity.

**Block (in CBTC context)**. A short virtual segment, typically 100 to 200 meters, used for position references and balise placement; not the unit of train separation, which is the moving block.

**Headway**. The time between successive trains at a fixed point. Primary CBTC capacity metric. Modern CBTC achieves sustained headways near 90 to 110 seconds where mature fixed-block tops out around 120 to 150 seconds.

**Trains per hour per direction (TPHPD)**. The throughput equivalent of headway. The L Line's CBTC retrofit raised peak throughput from approximately 20 TPHPD on the legacy system to 24 to 29 TPHPD post-cutover.

**Braking curve**. The deceleration profile ATP enforces from current speed to the EoA. The curve accounts for grade, brake-effort fall-off, traction motor cutoff, and the worst-case reaction time of every component in the chain.

**Safe braking distance**. The worst-case distance from current speed to a full stop given grade, brake performance, and reaction time. Drives the moving-block buffer.

**Phantom occupancy**. A false track-circuit detection of a train that is not there. A fixed-block failure mode caused by ballast contamination, broken bonds, or relay drift. CBTC eliminates phantom occupancy because it does not rely on track circuits for separation.

**Phantom train**. A false CBTC train detection produced by a localization fault, a stuck balise, or a corrupted message. The CBTC equivalent failure mode worth knowing about.

**Wrong-side failure**. Any failure that produces a less-restrictive output than the input warrants. The category that safety cases must drive to a probability below 10⁻⁹ per hour.

**Right-side failure**. A failure that produces a more-restrictive output than warranted (an unnecessary brake application, a falsely occupied block). Service-affecting but not safety-critical.

## Localization and onboard sensing

**Localization**. The train's continuous knowledge of its own position, achieved by sensor fusion: wheel tachometer plus Doppler radar plus balise-reset corrections. Modern CBTC trains know their position to roughly one to two meters at all times.

**Tachometer**. Wheel-rotation sensor providing relative odometry. Cheap, robust, and accurate to about ±0.5 percent over a journey, but accumulates drift and is fooled by wheel slip and slide.

**Doppler radar**. Train-mounted radar that measures ground speed independent of the wheel. Corrects tachometer drift caused by slip-slide events. Industry references put accuracy near ±0.2 m/s.

**Balise**. A passive trackside transponder that gives the VOBC an absolute position fix when the train passes over it. Resets accumulated tachometer drift. Typically deployed every 200 to 500 meters, denser at terminals and junctions.

**Beacon**. Used interchangeably with balise in much US literature; the IEC term is balise. ETCS practice and most CBTC vendor documentation prefer balise. (See [How CBTC Trains Know Where They Are](/blog/how-cbtc-trains-know-where-they-are).)

**Driver-Machine Interface (DMI)**. The cab display that shows the driver the current MA, target speed, distance to EoA, and active operating mode. The single most-touched piece of CBTC equipment in revenue service.

**Front-of-train marker**. The reference point used for position reports and EoA calculations. In a married-pair consist, the front of the lead car. The location of the marker matters: a 30-meter offset between consist conventions can change apparent capacity.

![CBTC localization fuses tachometer, Doppler, and balise inputs into a single one-to-two-meter position estimate.](/figures/fig_04_02_train_localization.png)
*<small>CBTC localization fuses tachometer, Doppler, and balise inputs into a single one-to-two-meter position estimate.</small>*

## Standards and safety

**IEEE 1474**. The dominant US CBTC standards family. 1474.1 (Performance and Functional Requirements), 1474.2 (Communications), 1474.3 (Implementation), and 1474.4 (Test). 1474.1 is the procurement floor for any agency writing "CBTC" in an RFP.

**IEC 62290**. The international CBTC framework. Defines GoA grades and a reference architecture. Used worldwide; most non-US specifications cite it directly.

**Grades of Automation (GoA 0 through GoA 4)**. The IEC 62290 framework for responsibility allocation. GoA 0 is line-of-sight manual; GoA 1 is manual under ATP supervision; GoA 2 (most US deployments) keeps a driver but automates traction and braking; GoA 3 has staff onboard but no driver; GoA 4 is unattended train operation.

**SIL 4 (Safety Integrity Level 4)**. The highest IEC 61508 level: tolerable hazardous failure rate below 10⁻⁹ per hour. Required for ATP and for any vital wayside function. SIL 4 software is developed under IEC 62279 / EN 50128 and demands formal methods, full requirements traceability, and independent verification.

**RAMS**. Reliability, Availability, Maintainability, Safety. The combined performance metric set that any CBTC contract specifies in numeric form. Negotiating RAMS targets is a subject in itself.

**FTA (Federal Transit Administration)**. US federal regulator and funder for transit, including all metro CBTC projects. Source of Capital Investment Grants (CIG) and the Buy America requirements.

**FRA (Federal Railroad Administration)**. US federal regulator for mainline rail. Owns Positive Train Control, not CBTC. The FTA/FRA distinction matters constantly in shared-corridor projects. (For the regulatory split, see [CBTC vs PTC](/blog/cbtc-vs-ptc-us-commuter-rail-vs-metro).)

**State Safety Oversight (SSO)**. The FTA-mandated state agency that reviews transit safety and approves any new CBTC line for revenue service. The SSO sign-off is the last gate before opening day.

**APTA (American Public Transportation Association)**. The US transit industry association; publishes voluntary CBTC standards (notably the APTA RT-CBTC documents) that complement IEEE 1474.

## Procurement, lifecycle, and project terms

**CAPEX / OPEX**. Capital expenditure (initial purchase plus installation) and operating expenditure (maintenance, power, support). The CBTC business case sits at the intersection of both.

**Total Cost of Ownership (TCO)**. The 30-year lifecycle cost. The right comparison frame for any CBTC procurement; sticker-price comparisons mislead.

**Greenfield**. A new line built from scratch. Easier and cheaper than retrofit; the integration risk drops substantially.

**Brownfield**. An existing, revenue-generating line being upgraded. The hard case. Cutover staging dominates the schedule.

**Cutover**. The planned transition from old signaling to new CBTC. The single highest-risk phase of any retrofit. Most cost and schedule blowups happen here.

**Resignaling**. Replacing existing signaling with CBTC on an in-service line. Synonymous with brownfield retrofit in current US usage.

**Overlay**. A CBTC system installed alongside legacy signaling, allowing fallback to the legacy system if CBTC fails. The L Line was deployed as an overlay; the legacy track circuits remained available for years after CBTC went into revenue.

**Capital Investment Grant (CIG)**. The FTA program that funds most major US CBTC retrofits. New Starts, Core Capacity, and Small Starts variants apply depending on project type.

**Build America, Buy America (BABA)**. The 2021 federal domestic-content requirement that affects almost every CBTC procurement. Industry references put the cost premium for compliance in the 5 to 15 percent range.

**Hot standby / Cold standby**. Redundancy modes. Hot standby is a redundant subsystem in continuous operation, ready to take over within milliseconds. Cold standby is powered off until needed, with a longer recovery time. CBTC vital subsystems are hot-standby by default.

**Fail-safe**. Designed so that any failure leaves the system in a safe state, typically with the emergency brake applied. The non-negotiable architectural property of CBTC.

## Practical takeaways

- Treat IEEE 1474.1 and IEC 62290 as the procurement floor and the international counterpart, respectively. Specify both.
- The ATP / ATO / ATS hierarchy is the most-confused part of the vocabulary. Internalize it before the first vendor meeting.
- The DCS / VOBC / ZC trio is where most of the capital and most of the integration risk live.
- Localization is sensor fusion, not GPS. Anyone who writes "GPS-based CBTC" without context is either describing a non-revenue feasibility study or has the architecture wrong.
- Cutover dominates brownfield project risk. The vocabulary above is most useful when used to read the cutover plan with appropriate skepticism.

## Where to go next

This glossary is a 10-minute working reference. The full treatment, with worked examples and procurement language, lives in *Communications-Based Train Control* ([Volume 1 on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 1 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch01.pdf)

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 1: Foundations & Technical Architecture*. Independent. ISBN 979-8-258-54295-3. — Chapter 1, "The Evolution of Train Control"; Chapter 3, "CBTC System Architecture Overview"; Chapter 4, "Onboard Equipment"; Chapter 5, "Wayside Equipment."
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- International Electrotechnical Commission. *IEC 62290-1: Railway applications — Urban guided transport management and command/control systems — Part 1: System principles and fundamental concepts*.
- International Electrotechnical Commission. *IEC 61508: Functional Safety of Electrical/Electronic/Programmable Electronic Safety-related Systems*.
- American Public Transportation Association. *APTA Rail Transit Standards Program*. [apta.com/research-technical-resources/standards](https://www.apta.com/research-technical-resources/standards/)
- Federal Transit Administration. *State Safety Oversight Program*. [transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight](https://www.transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight)
- Federal Transit Administration. *Build America, Buy America Act Implementation Guidance*. [transit.dot.gov/buyamerica](https://www.transit.dot.gov/buyamerica)
