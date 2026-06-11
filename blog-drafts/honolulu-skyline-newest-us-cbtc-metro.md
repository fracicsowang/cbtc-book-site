---
title: "Honolulu Skyline (HART): The Newest US Metro Built on CBTC"
slug: honolulu-skyline-newest-us-cbtc-metro
description: "An engineer's read of the Honolulu Skyline — the first US metro to operate at Grade of Automation 4 from opening day, Hitachi Rail STS CBTC, June 2023 launch, and what greenfield US deployment teaches every other agency contemplating modernization."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: agency-case-studies
tags: [CBTC, Honolulu Skyline, HART, GoA 4, greenfield, Hitachi Rail STS, US transit]
primary_keyword: "Honolulu Skyline CBTC"
secondary_keywords: ["HART Honolulu CBTC", "Honolulu Skyline GoA 4", "Hitachi Rail Honolulu", "newest US metro CBTC", "Honolulu rail transit"]
related_chapters: [8, 10, 15]
internal_links: ["/blog/jfk-airtrain-cbtc-driverless", "/blog/vancouver-skytrain-lessons-for-us", "/blog/nyc-mta-l-line-cbtc-25-years"]
og_image: "/blog/img/honolulu-skyline-newest-us-cbtc-metro.png"
read_time: "12 min"
---

The Honolulu Authority for Rapid Transportation (HART) opened the first phase of the Honolulu Skyline elevated guideway in June 2023. With 21 stations and 20.2 miles of mainline when the full project completes, the Honolulu Skyline represents a watershed moment in United States Communications-Based Train Control (CBTC) history: it is the first transit system in the United States to operate at Grade of Automation 4 (GoA 4, fully unattended operation) from its opening day. Vendor Hitachi Rail STS supplied the CBTC platform. The system enables real-time train-to-wayside communication, automatic train operation, dwell time optimization, and headway control as low as 90 seconds. Initial operational data from 2023 to 2025 shows mean time between failures (MTBF) for the signaling system in the range of 10,000 to 15,000 vehicle-miles, consistent with international benchmarks for mature CBTC systems. The total project cost — including guideway, vehicles, signaling, and systems integration — totaled approximately $4.5 to $6 billion across the full project scope including design, land, and contingency. This article reads what the Honolulu Skyline opening actually means for US transit and why the precedent it set is the most consequential US CBTC milestone of the past decade.

## Why Honolulu matters more than its size suggests

Honolulu is not a large transit market. The Skyline serves a metropolitan area with population substantially smaller than New York, San Francisco, Washington, or Atlanta. Initial operational ridership is below the demand curve that justifies the system's headway capability. Yet the Honolulu Skyline opening shifted the US transit modernization landscape in ways that no peer agency's announcement has matched.

Three reasons. First, it is the first US transit system to operate at GoA 4 in revenue service from opening day. Every prior US GoA 4 deployment is an airport people mover (JFK AirTrain, SFO AirTrain, Atlanta Skytrain, Dulles AeroTrain, others) or a non-transit-authority isolated system (Las Vegas Monorail, Miami Metromover). Honolulu is the first urban transit agency under FTA jurisdiction to operate GoA 4 at revenue service. (For the closest precedent, see [JFK AirTrain: How CBTC Works on a Driverless Airport System](/blog/jfk-airtrain-cbtc-driverless), which describes the airport context that established US GoA 4 precedent before Honolulu extended it to urban transit.)

Second, it demonstrates that the institutional, regulatory, and labor friction that has slowed US GoA 4 adoption can be solved in a US transit context. Federal, state, and local regulatory frameworks accommodated fully unattended operation. Labor negotiations, while complex, did not indefinitely delay the project. A modern CBTC system was designed for GoA 4 from inception and delivered on operational performance benchmarks consistent with international precedents. The Vancouver SkyTrain operational record across the border (40-plus years of GoA 4) had been available as evidence for decades; Honolulu translated that evidence into a US revenue-service deployment.

Third, the system has become a touchstone reference for other US agencies. WMATA, SEPTA, CTA, and the next generation of US transit agencies considering CBTC modernization all now cite Honolulu in their procurement deliberations. The institutional risk of contemplating GoA 4 capability in any new US transit procurement is meaningfully lower in 2026 than it was in 2022, and Honolulu is the principal reason.

## What the Skyline opened with

The Skyline is an elevated guideway system running through the south Oahu corridor. The full project scope is 20.2 miles of mainline across 21 stations, with phased deployment. The Phase 1 opening in June 2023 covered approximately 11 miles and 9 stations from East Kapolei to Aloha Stadium. Subsequent phases will extend the line to downtown Honolulu and ultimately to Ala Moana Center, with completion targeted later in the 2020s.

The technology platform is Hitachi Rail STS CBTC. The selection reflects Hitachi's accumulated GoA 4 deployment experience — most directly through the SelTrac platform that originated with Vancouver SkyTrain in 1985 and has now operated across 400-plus route-kilometers globally including Toronto, Dubai, London Underground, and Hong Kong MTR. The Hitachi Rail STS US engineering presence in Coppell, Texas and Pittsburgh, Pennsylvania supported domestic manufacturing and engineering capability for the project, important for FTA Buy America compliance and federal funding eligibility.

The CBTC architecture provides continuous train-to-wayside communication, allowing the wayside zone controllers to compute Movement Authorities at high frequency and issue them to vehicles in moving-block separation. The 90-second headway capability is structural to the architecture; whether the system operates at that headway in practice depends on demand, dwell time, terminal turnaround, and operational discipline rather than on the CBTC envelope itself.

The vehicles are GoA 4 from inception. There is no operator cabin. Trains operate autonomously within the CBTC envelope, with platform screen doors at every station providing platform-edge protection that no operator is observing and responding to. Central control facility supervision provides remote monitoring and emergency-response capability. Passenger emergency communication systems and onboard cameras provide the human-in-the-loop channels that GoA 4 systems use to handle exceptional events.

[FIGURE: Honolulu Skyline route map showing Phase 1 opened June 2023 (East Kapolei to Aloha Stadium) plus subsequent phases extending to downtown Honolulu and Ala Moana Center, with Hitachi Rail STS CBTC architectural elements (zone controllers, central control facility, platform screen doors). Source: new figure to be generated. Caption: "Honolulu Skyline phased deployment with full GoA 4 CBTC architecture from opening day."]

## What the operational data shows

Initial operational data from 2023 to 2025 shows mean time between failures for the signaling system in the range of 10,000 to 15,000 vehicle-miles. This is consistent with international benchmarks for mature CBTC systems and substantially higher than typical US legacy signaling systems in equivalent operating contexts. On-time performance has been high through the early operating period. System availability has been high. The platform screen door integration has worked as designed, and the absence of operator-on-train has not produced operational issues distinct from the international GoA 4 fleet.

Ridership during the early operating period has been below long-term forecast levels. This is not unusual for newly-opened transit systems and reflects the time required for ridership to build as transit-oriented development proceeds, transfer connections mature, and rider habits adapt. Ridership trajectory does not affect the operational and engineering case the Skyline establishes; the system is delivering on its CBTC and GoA 4 capability commitments, and ridership is a separate concern that will resolve over the operating decade.

## How a greenfield GoA 4 differs from a brownfield retrofit

The Honolulu Skyline is greenfield. The system did not exist before the project; there is no installed base of legacy infrastructure, no operator-position workforce being displaced, no fixed-block fallback being maintained in parallel. Every comparable US transit CBTC project — the L Line, the 7 Line, BART, SFMTA, eventual WMATA and SEPTA work — is a brownfield retrofit on a system that has been operating for decades. (For the brownfield retrofit comparison, see [NYC MTA L Line CBTC: 25 Years of Lessons](/blog/nyc-mta-l-line-cbtc-25-years).)

Greenfield deployment removes substantial categories of project risk and cost. The capital cost premium that brownfield retrofit imposes — testing during 24/7 service, mixed-fleet integration, legacy interface engineering, parallel maintenance of two signal systems, operator labor agreement displacement — does not apply. The schedule premium that brownfield retrofit imposes — extended testing windows, phased commissioning, stabilization period after revenue service — is also reduced. The Skyline opened approximately on its targeted opening window with operating costs and outcomes consistent with international greenfield GoA 4 benchmarks, not with US brownfield retrofit benchmarks.

This is the critical interpretive frame. Honolulu is the proof that greenfield US transit CBTC at GoA 4 works. It is not the proof that brownfield US transit CBTC at GoA 4 works. Brownfield GoA 4 retrofit on existing US transit lines remains an unsolved procurement problem as of 2026, and the institutional, labor, and engineering challenges are real.

## What Honolulu signals for the next decade of US transit

The Honolulu Skyline opening has catalyzed discussion at board tables and in planning offices across the US. The system demonstrates that GoA 4 is technically and operationally feasible in the United States, that federal, state, and local regulatory frameworks can accommodate fully unattended operation, that labor negotiations need not indefinitely delay high-automation projects, and that a modern CBTC system can be designed for GoA 4 from inception in a US procurement context.

Three downstream effects of the Honolulu precedent are already visible.

[FIGURE: Comparison matrix of Honolulu Skyline (greenfield, 2023, GoA 4, Hitachi Rail STS) against the four prior US transit-modernization archetypes — L Line (brownfield retrofit, 2009, GoA 2, Siemens), 7 Line (brownfield retrofit, 2018, GoA 2, Thales), BART TCMP (full-replacement retrofit, in deployment, GoA 2, Hitachi), Baltimore Metro (single-line bundled, 2023–2026, GoA 2, Hitachi). Source: new figure to be generated. Caption: "Honolulu Skyline establishes a fifth US transit-modernization archetype: greenfield GoA 4 from inception."]

First, new US transit lines and major extensions are increasingly specifying GoA 4 capability from inception. The procurement option is now demonstrably executable. Specific lines under consideration include New York's Second Avenue Subway phases beyond Phase 1 (which opened with CBTC-ready infrastructure in 2017), the Dallas DART D2 Subway in long-range planning, and various airport extensions and new transit-oriented developments.

Second, the institutional risk premium that US transit had been paying on GoA 4 procurement consideration has decreased. Boards that previously viewed GoA 4 as an institutional risk too large to undertake without precedent now have the precedent. FTA, state safety oversight agencies, and regional regulators have a domestic implementation to reference rather than relying on international benchmarks.

Third, vendor positioning has shifted. Hitachi Rail STS's win at Honolulu, BART, and SFMTA has established the vendor as the dominant US CBTC supplier for new and full-replacement work. Siemens retains incumbency on the MTA portfolio. Alstom retains the Muni Metro CITYFLO heritage and a strong North American manufacturing footprint. The competitive landscape has consolidated around three primary vendors with US transit CBTC deployment records, plus Wabtec for PTC-CBTC convergence work.

## What other US transit agencies should take from Honolulu

Five direct lessons transfer to US procurement decisions.

First, greenfield GoA 4 deployment is operationally executable in the US. The Skyline's opening establishes the existence proof that prior to 2023 was only available internationally (Vancouver, Paris, Singapore, Dubai) or in airport APM contexts. New lines and major extensions should evaluate GoA 4 from inception, not as an aspirational late-life upgrade.

Second, single-vendor procurement is appropriate for greenfield projects of this scale. Honolulu's Hitachi Rail STS contract is a single-vendor procurement, and the integration outcomes have been favorable. The lifecycle premium that single-vendor procurement imposes is bounded and frequently worth the integration-risk reduction.

Third, platform screen door integration is critical-path infrastructure for GoA 4. Every operational US GoA 4 deployment has PSDs. Procurement that targets GoA 4 capability without specifying PSD design from project inception is procuring a partially capable system.

Fourth, regulatory pathways for GoA 4 in US transit are now established. FTA, state safety oversight agencies, and regional regulators have processed Honolulu's deployment. Subsequent agencies will face less institutional friction.

Fifth, the labor partnership for GoA 4 in US transit is solvable in greenfield contexts. The Honolulu negotiation provides a partial template; brownfield GoA 4 retrofit on existing US transit lines will require additional labor partnership work that no precedent yet provides.

## Practical takeaways for US transit agencies

- Specify GoA 4 capability from project inception on new lines and major extensions. The Honolulu existence proof, combined with the operational record from JFK AirTrain and Vancouver SkyTrain, supports the procurement decision.
- Plan platform screen door integration from project inception for any GoA 4 procurement. PSD retrofit on legacy platforms is a critical-path cost driver; PSD inclusion in initial design is substantially cheaper.
- Use the Honolulu Hitachi Rail STS contract as a procurement reference for greenfield single-vendor CBTC deployment. Both the vendor selection and the contract structure transfer to comparable agencies.
- Begin labor partnership engagement 5-to-10 years before a GoA 4 procurement on a brownfield network. The Honolulu greenfield context did not face the installed-base displacement problem; brownfield GoA 4 retrofit will.
- Track the Skyline operational data over the next decade as the principal US empirical reference for GoA 4 reliability, availability, and cost arithmetic. International data informs procurement; US-domestic data is now available as well.

## Where to go next

This post is a 12-minute summary. The full treatment lives in Chapter 8 ("Grades of Automation") and Chapter 10 ("CBTC in the United States") of *Communications-Based Train Control* (Volume 2). [Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ). [Download Chapter 10 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch10.pdf).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: US Deployment, Procurement & Future Directions*. Independent. ISBN 979-8-258-54295-3. — Chapter 8, "Grades of Automation"; Chapter 10, "CBTC in the United States" (Section 10.6, Honolulu Skyline); Chapter 15, "Vendor Landscape."
- Honolulu Authority for Rapid Transportation. *Honolulu Skyline Project*. [honolulutransit.org](https://www.honolulutransit.org/)
- Hitachi Rail. *SelTrac CBTC Platform*. [hitachirail.com](https://www.hitachirail.com/)
- Federal Transit Administration. *Capital Investment Grants Program*. [transit.dot.gov/CIG](https://www.transit.dot.gov/CIG)
- Federal Transit Administration. *State Safety Oversight Program*. [transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight](https://www.transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight)
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- International Electrotechnical Commission. *IEC 62290-1: Railway applications — Urban guided transport management and command/control systems*.
