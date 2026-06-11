---
title: "Phoenix, Seattle, Denver: Why Their LRTs Avoided CBTC"
slug: phoenix-seattle-denver-lrt-no-cbtc
description: "A practitioner read of why Valley Metro Rail (Phoenix), Sound Transit Link (Seattle), and the Regional Transportation District (Denver) chose conventional cab signaling and at-grade operation over Communications-Based Train Control. The arithmetic is operational profile and right-of-way, not technology."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: agency-case-studies
tags: [CBTC, light rail, LRT, Phoenix, Seattle, Denver, Valley Metro, Sound Transit, RTD, US transit]
primary_keyword: "US light rail CBTC"
secondary_keywords: ["why LRT does not use CBTC", "Phoenix Valley Metro signaling", "Seattle Sound Transit Link signaling", "Denver RTD light rail signaling", "light rail train control"]
related_chapters: [1, 8, 10]
internal_links: ["/blog/when-cbtc-is-a-bad-investment", "/blog/cbtc-vs-traditional-signaling-8-differences", "/blog/cbtc-roi-calculation"]
og_image: "/blog/img/phoenix-seattle-denver-lrt-no-cbtc.png"
read_time: "10 min"
---

In 2008, Phoenix opened its first 20 miles of Valley Metro Rail at-grade light rail service. In 2009, Seattle opened the initial Central Link segment of Sound Transit Link light rail. In 1994, the Regional Transportation District (RTD) in Denver opened its first 5.3-mile light rail starter line, which has since grown into a 113-mile network. None of these systems uses Communications-Based Train Control (CBTC). All three operate on cab-signaling, line-of-sight, and traffic-signal-coordinated train control, with grade crossings, mixed-traffic operation in some corridors, and headways measured in tens of trains per day rather than tens of trains per hour. The reason is not that the agencies could not afford CBTC, did not understand it, or were technologically conservative. The reason is that CBTC would not have helped them, and would have cost them money they could spend more usefully elsewhere.

This post is a practitioner's walk through the operating-profile arithmetic that distinguishes a CBTC-appropriate corridor from a non-CBTC-appropriate corridor, using Phoenix, Seattle, and Denver as the three cleanest US examples on the wrong side of that line.

## Why operating profile, not technology, decides

CBTC's value proposition is not "modern signaling." It is the elimination of fixed-block headway floors on a corridor where headway is the binding capacity constraint. On a heavy-rail metro running 25 to 30 trains per hour at 90-second headways, the difference between fixed-block and moving-block operation is the difference between 18 trains per hour and 30 trains per hour — a near-doubling of capacity that is structurally impossible without continuous Movement Authority computation. On a light rail line running six to eight trains per hour with grade crossings, that capacity gain is mathematically unavailable. Headway on an at-grade LRT is paced by the longest grade-crossing cycle, the longest dwell at the busiest station, and the longest signal-priority window with the local traffic department, not by the moving-block ceiling.

The L Line in New York shipped CBTC because the fixed-block ceiling at four-minute headways was the binding constraint on capacity. Valley Metro Rail in Phoenix runs 12-minute peak headways; Sound Transit Link runs at headways that vary from 6 minutes in the central corridor to 15 minutes on outer segments; RTD's Denver light rail network runs headways of 7 to 15 minutes by line and time of day. None of these systems is paced by signaling. They are paced by ridership demand, traffic intersection capacity, and operations budget. (For a deeper read on when CBTC adds value, see [When CBTC Is a Bad Investment: 5 Operating Profiles That Don't Fit](/blog/when-cbtc-is-a-bad-investment).)

## Phoenix: Valley Metro Rail and the at-grade reality

Valley Metro Rail in Phoenix is a 28.2-mile at-grade light rail system that opened in December 2008 and has since extended through Mesa, Tempe, and downtown Phoenix. The corridor runs largely on a dedicated right-of-way with traffic-signal-protected grade crossings, automatic train operation in segments, and conventional cab signaling. The system carries approximately 40,000 weekday riders pre-pandemic, recovering through 2024. Peak headways are 12 minutes; off-peak headways are 20 minutes.

The signal architecture is conventional: line-of-sight operation in mixed-traffic segments, fixed-block on dedicated right-of-way, and traffic-signal-priority integration with the City of Phoenix Streets Department and the City of Mesa transportation departments at every grade crossing. There is no CBTC infrastructure, no Movement Authority computation by zone controllers, and no need for either. The capacity ceiling on Valley Metro Rail is set by the grade crossings, not the trains. A CBTC retrofit would deliver no headway improvement because the grade crossings would still be there, would still require fixed minimum cycle times, and would still pace the corridor.

The capital math reinforces the operational logic. The most recent published US CBTC retrofit cost benchmarks run $15 million to $25 million per 10 kilometers of capital investment, not counting fleet retrofit; Valley Metro Rail's 28.2 miles would imply a CBTC capital cost in the range of $70 million to $115 million in 2024 dollars, plus fleet integration. Against an operational gain of zero — because grade crossings, not signal blocks, set capacity — the return on investment is negative.

## Seattle: Sound Transit Link's hybrid right-of-way

Sound Transit Link in Seattle is a different case. Link runs 33 route miles as of 2025, with the 1 Line in service from Northgate through downtown Seattle to Angle Lake, the 2 Line opening in stages on the Eastside, and continuing extensions through Federal Way, Lynnwood, and Tacoma. Link is hybrid right-of-way: tunneled in downtown Seattle (the Downtown Seattle Transit Tunnel, originally built for joint bus and rail operation), elevated along several segments, at-grade on Martin Luther King Jr. Way South in southeast Seattle, and at-grade on the Eastside extension. Headways are six minutes peak in the central core, ten minutes off-peak, and longer on the outer segments.

Link uses conventional cab signaling with Automatic Train Protection (ATP) and Automatic Train Operation (ATO) in the tunneled and elevated segments, and line-of-sight operation in the at-grade Rainier Valley segment. The system does not use CBTC. The reason is the same operational arithmetic as Phoenix: capacity is paced by the at-grade Rainier Valley segment, where grade crossings on Martin Luther King Jr. Way South set the cycle time. CBTC on the tunnel and elevated segments would not improve through-running headway because the at-grade segment would still gate the schedule.

A second factor specific to Seattle is the right-of-way mix. CBTC requires continuous radio coverage, dense wayside infrastructure, and a defined safety case for every operating environment on the line. The cost of certifying CBTC on a hybrid corridor that mixes tunnel, elevated, and at-grade segments is materially higher than on a uniform corridor. Sound Transit's procurement decisions through the 1 Line and 2 Line have reflected this: cab signaling, augmented with conventional ATP and ATO, delivers operational adequacy at a lower lifecycle cost than CBTC would on the same corridor mix.

[FIGURE: Side-by-side schematic showing the operational profile differences. Heavy-rail metro corridor (e.g., NYC L Line) with 90-second headways, 30 tph, fully grade-separated, homogeneous fleet, paced by signaling. Light rail corridor (e.g., Sound Transit Link) with 6-minute headways, 10 tph, hybrid tunnel/elevated/at-grade right-of-way, paced by grade crossings and ridership. Source: new figure to be generated. Caption: "CBTC value depends on the binding capacity constraint. On LRT corridors, signaling is rarely the constraint."]

## Denver: RTD's at-grade light rail and a long planning horizon

The Regional Transportation District in Denver operates the largest US light rail network outside the Northeast Corridor: 113 route miles across the C, D, E, F, H, R, and W Lines, plus the L commuter rail line. The original 5.3-mile starter line opened in 1994; the network expanded through the 2000s and 2010s under the FasTracks program. Like Valley Metro Rail and Sound Transit Link, RTD light rail uses conventional cab signaling, fixed-block train control, and at-grade operation through downtown Denver, the Auraria campus, and major suburban corridors. Headways are 7 to 15 minutes by line and time of day.

The interesting part of the RTD case is that the agency has, on multiple occasions in capital planning, evaluated CBTC for specific corridors and elected not to proceed. The W Line west corridor, the I-225 corridor, and the proposed downtown rail loop all surfaced CBTC options in feasibility studies. In each case, the operational profile — peak headways no shorter than 7 minutes, grade-separated only in part, mixed fleet of Siemens SD-100 and SD-160 cars from successive procurements — produced the same answer: the capacity gain from CBTC was not large enough to justify the capital outlay against alternative uses of the same dollars (station accessibility upgrades, fleet replacement, FasTracks completion).

This is the practitioner-honest version of the argument that gets simplified in news coverage as "Denver chose to stay with old technology." It did not. It chose to allocate capital to what would actually move the operational needle on its corridor, given its operating profile. (See [Why CBTC Projects Run 30%+ Over Budget](/blog/cbtc-projects-over-budget) for the related budgeting reality.)

## What this means for US transit agencies

Five points follow from the Phoenix–Seattle–Denver pattern that any US transit agency contemplating CBTC for an LRT corridor should think about explicitly.

First, **headway is not the only capacity metric, but it is the only metric CBTC moves**. If the corridor's binding capacity constraint is grade crossings, fleet size, station dwell, or operating budget, CBTC will not change peak throughput. The capital expenditure (CAPEX) will be real; the throughput gain will be zero or near-zero.

Second, **light rail and heavy rail are different products**. Light rail in the US is, by design, lower capital cost, lower capacity, and more politically tractable than heavy rail. The technology stack reflects that: cab signaling, line-of-sight in mixed traffic, traffic-signal priority. CBTC belongs on heavy rail metros where capacity is the binding constraint and grade separation is total. (See [CBTC vs Traditional Signaling: 8 Concrete Differences](/blog/cbtc-vs-traditional-signaling-8-differences) for the broader comparison.)

Third, **right-of-way mix penalizes CBTC**. A corridor that mixes tunneled, elevated, and at-grade segments multiplies the cost of CBTC certification, radio coverage, and wayside infrastructure without a proportional capacity gain. Agencies with hybrid corridors should price CBTC against the highest-cost segment, not the average.

Fourth, **the airport people-mover precedent is not the LRT precedent**. The JFK AirTrain, the Denver International Airport train, and the Hartsfield–Jackson Skytrain all use CBTC at Grade of Automation 4 (GoA 4) because they are short, fully grade-separated, captive-audience, high-frequency systems where labor cost and capacity are the binding constraints. None of those conditions apply to a regional LRT network.

Fifth, **the right benchmark for an LRT modernization is not CBTC; it is contemporary cab signaling with traffic-signal priority and onboard Automatic Train Protection**. Several US LRT agencies have modernized signaling and onboard control without ever specifying CBTC, and have achieved measurable reliability and on-time-performance gains. The arithmetic of [CBTC ROI calculation](/blog/cbtc-roi-calculation) on an LRT corridor produces honest negative numbers, and it should.

[FIGURE: Decision matrix for transit agencies evaluating CBTC for a corridor. Rows: peak headway, grade separation, fleet homogeneity, capacity binding constraint, lifecycle cost ratio. Columns: Heavy-rail metro / LRT primarily grade-separated / LRT primarily at-grade / Streetcar. Cell shading indicates CBTC suitability from green (clear yes) to red (clear no). Source: new figure to be generated derived from Chapter 1 manuscript Figure 1.9. Caption: "The CBTC suitability decision is structural, and most US LRT corridors fall outside the green zone."]

## Practical takeaways for US transit agencies

- Run the binding-constraint analysis before issuing a CBTC RFP. If grade crossings, fleet, dwell, or budget pace the corridor, CBTC will not deliver the capacity gain the business case projects.
- Treat heavy-rail and light-rail signaling as different problems. The Paris Métro Line 14 and the Denver C Line are not in the same conversation.
- Price CBTC against the most-constrained right-of-way segment on a hybrid corridor, not against the average. The cost surface is non-linear.
- Use airport people-mover deployments (JFK, DIA, ATL) as evidence for GoA 4 viability in the abstract, not as a case for CBTC on regional LRT.
- Reconsider every five years. As ridership grows, grade separation expands, or operations costs change, the CBTC business case can move from negative to positive on the same corridor — but the threshold is structural, not aspirational.

## Where to go next

This post is a 10-minute summary. The full treatment of US CBTC deployment scope, including which systems CBTC fits and which it does not, lives in Chapter 10 ("CBTC in the United States") of *Communications-Based Train Control* (Volume 2). [Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ). [Download Chapter 10 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch10.pdf).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: US Deployment, Procurement & Future Directions*. Independent. ISBN 979-8-258-54295-3. — Chapter 10, "CBTC in the United States" (Section 10.6 on emerging projects and US LRT context).
- Valley Metro Rail. *Annual Performance Report*. [valleymetro.org](https://www.valleymetro.org)
- Sound Transit. *Light Rail Service Plan and Capital Program*. [soundtransit.org](https://www.soundtransit.org)
- Regional Transportation District (RTD). *FasTracks Program and Light Rail Operations*. [rtd-denver.com](https://www.rtd-denver.com)
- Federal Transit Administration. *National Transit Database*. [transit.dot.gov/ntd](https://www.transit.dot.gov/ntd)
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- American Public Transportation Association (APTA). *Light Rail Transit Operations and Performance Reports*. [apta.com](https://www.apta.com)
