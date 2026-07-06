---
title: "PATH and Newark: The Forgotten US CBTC Deployments"
slug: path-newark-forgotten-us-cbtc
description: "An honest read of three under-discussed northeastern US transit systems on the train control modernization pathway: the Port Authority Trans-Hudson (PATH) hybrid FRA jurisdiction, the PATCO Speedline's GoA 1 advisory CBTC, and the Newark City Subway light rail."
date: 2026-07-06
author: "Chunjun (Francisco) Wang"
category: agency-case-studies
tags: [CBTC, PATH, PATCO, Newark, US transit, FRA jurisdiction, light rail]
primary_keyword: "PATH PATCO Newark CBTC"
secondary_keywords: ["PATH train control", "PATCO Speedline CBTC", "Newark City Subway signaling", "northeastern US transit modernization", "FRA hybrid regulation"]
related_chapters: [2, 10, 12]
internal_links: ["/blog/cbtc-vs-ptc-us-commuter-rail-vs-metro", "/blog/wmata-cbtc-aspirations", "/blog/marta-atlanta-cbtc-underdog"]
og_image: "/blog/img/path-newark-forgotten-us-cbtc.png"
read_time: "11 min"
---

The northeastern US transit landscape contains three systems that almost never appear in mainstream Communications-Based Train Control (CBTC) coverage. The Port Authority Trans-Hudson (PATH) heavy-rail transit network connects New York and New Jersey across 13.8 miles, serves approximately 250,000 weekday riders pre-pandemic, and operates under Federal Railroad Administration (FRA) jurisdiction — making its train control story structurally distinct from any FTA-regulated metro. The Port Authority Transit Corporation (PATCO) Speedline runs 14.2 miles between Philadelphia and southern New Jersey at Grade of Automation 1 (GoA 1) with CBTC advisory functions, a posture closer to advanced automatic train control than to full CBTC. The Newark City Subway operates light rail service in northern New Jersey on legacy infrastructure that has not yet entered modernization. None of these systems is a marquee CBTC deployment. All three are interesting precisely because they are forgotten — and because their modernization decisions over the next decade will shape what train control modernization looks like for systems that do not fit cleanly into either the FRA mainline or FTA transit boxes.

## Why these three systems are worth a careful read

The L Line, the 7 Line, BART's TCMP, the SFMTA Muni TCUP, and the Honolulu Skyline are all clean cases. Each operates squarely under FTA jurisdiction. Each fits the IEEE 1474 standard set without ambiguity. Each has been studied extensively in published procurement documentation, manuscript treatment, and trade press. (For the regulatory framework that defines those clean cases, see [CBTC vs PTC: Why US Commuter Rail Picked One and US Metro Picked the Other](/blog/cbtc-vs-ptc-us-commuter-rail-vs-metro).)

PATH, PATCO, and Newark are not clean cases. PATH operates as heavy-rail rapid transit under FRA jurisdiction — a hybrid regulatory posture shared with the Staten Island Railway and a small number of other US systems. PATCO operates with CBTC advisory features under traditional ATC architecture rather than full moving-block CBTC. The Newark City Subway operates as light rail on infrastructure that pre-dates most US transit modernization vintages.

The institutional gap matters because the next wave of US transit modernization will not all fit cleanly into the L Line or BART model. Hybrid jurisdiction systems, partial-CBTC GoA 1 systems, and legacy light rail systems all face train control modernization decisions in the 2025-to-2035 window. Reading PATH, PATCO, and Newark seriously is therefore reading the institutional edge cases that will determine how US train control modernization handles the systems that do not fit the dominant model.

## PATH: heavy-rail transit under FRA jurisdiction

The Port Authority Trans-Hudson operates between Newark, Hoboken, and lower and midtown Manhattan across the Hudson River. The network is heavy-rail rapid transit by every operational measure — third-rail electrified, dedicated right-of-way, high-frequency service — but it is regulated by the Federal Railroad Administration rather than the Federal Transit Administration. The reason is historical: PATH and its predecessor Hudson and Manhattan Railroad have operated under FRA jurisdiction since the regulatory frameworks were established in the early twentieth century, and the Port Authority's operational coordination with mainline rail has reinforced the classification.

The implication for train control modernization is significant. PATH is required to comply with Positive Train Control (PTC) under the Rail Safety Improvement Act of 2008 and 49 CFR Part 236 Subpart I, the same statutory framework that governs Class I freight railroads, Amtrak, and US commuter rail operators. PATH implemented PTC across its network during the deployment window leading up to the December 31, 2020 federal compliance deadline. The agency's PTC architecture is structurally distinct from CBTC: it uses a vendor-developed PTC system architecture appropriate to FRA mandates, not the IEEE 1474-based moving-block architecture that defines US transit CBTC.

This places PATH in an unusual posture. Operationally, the system delivers high-frequency rapid-transit service that resembles FTA-regulated metros. Regulatorily and architecturally, the system is a PTC deployment, not a CBTC deployment. The agency could in principle pursue CBTC capabilities — moving-block separation, higher capacity, lower headways — but doing so within an FRA jurisdiction creates regulatory complexity that no peer agency has yet navigated at scale.

The forgotten-CBTC framing for PATH is therefore: the agency is not absent from train control modernization; it is participating in PTC modernization rather than CBTC modernization. Whether PATH ever transitions to full CBTC depends on regulatory and operational decisions that have not been resolved publicly as of 2026.


![PATH, PATCO, and the Newark City Subway: three forgotten northeastern systems on distinct modernization pathways.](/blog/img/path-newark-forgotten-us-cbtc-fig1.svg)
*<small>PATH, PATCO, and the Newark City Subway: three forgotten northeastern systems on distinct modernization pathways.</small>*


## PATCO Speedline: GoA 1 with CBTC advisory

The Port Authority Transit Corporation operates the PATCO Speedline between Philadelphia (Center City) and Lindenwold, New Jersey, across 14.2 miles and 13 stations. The system opened in 1969 with an early Automatic Train Operation system that, for its era, was technologically advanced. Over its operating life, PATCO has been progressively modernized.

The relevant manuscript chapter on Grades of Automation places PATCO in the GoA 1 row with CBTC advisory features — operationally meaning that automatic train protection (ATP) enforces speed and separation, the train operator drives manually, and CBTC-style position and authority advisory information may be available without full moving-block authority generation. This posture is distinct from the GoA 2 deployments dominant on most US transit CBTC (operators monitor while ATO drives), and it is also distinct from full GoA 4 unattended operation (no operator). The PATCO architecture is a hybrid that delivers ATP enforcement and operational advisory benefits without the capacity gains that full moving-block CBTC would provide.

Whether PATCO's posture should be called "CBTC" is partly a definitional question. IEEE 1474 defines performance and functional requirements for CBTC; whether a system meets those requirements at a given GoA level is a verification matter. PATCO's installed base mixes legacy ATC architecture with selectively modernized communication and advisory functions. The system is operationally safer and more reliable than equivalent unmodernized 1969-vintage signaling, but it is not a full moving-block CBTC deployment.

The forgotten-CBTC framing for PATCO is: the system is partially modernized, operationally stable, and at a decision point about whether to undertake full CBTC modernization or to continue selective improvement on the existing architecture. The capital arithmetic at PATCO's scale (14.2 miles, mid-sized agency) is similar to the arithmetic discussed in the [MARTA Atlanta CBTC article](/blog/marta-atlanta-cbtc-underdog). The decision is real, the procurement window is open, and the agency's choice will signal what comparable systems do.

## Newark City Subway: legacy light rail without modernization

The Newark City Subway is an NJ Transit light rail line operating between Newark Penn Station and Bloomfield, New Jersey, on infrastructure that includes both subway and surface segments. The line operates with legacy signaling appropriate to its light-rail classification. As of 2026, the system is not in active CBTC modernization procurement.

The relevant manuscript characterization places NJ Transit's light rail and mainline operations in the GoA 0 territory of the Grades of Automation framework — line-of-sight or basic ATP, with limited or no automation. This is the standard posture for older light rail systems in the United States and reflects the structural difference between heavy-rail rapid transit modernization economics and light rail modernization economics.

Light rail does not benefit from CBTC at the same rate that heavy-rail rapid transit does. The ridership densities are typically lower; the line-haul capacity ceilings are usually not the binding operational constraint; the surface-running segments impose CBTC engineering challenges that grade-separated subway operation does not. The Muni TCUP precedent — covered separately as part of the [SFMTA TCUP article](/blog/sfmta-muni-tcup-2024-rfp) — demonstrates that hybrid grade-separated-and-surface CBTC is operationally feasible, but the procurement justification at SFMTA's network scale and density does not transfer cleanly to smaller light rail systems like the Newark City Subway.

The forgotten-CBTC framing for the Newark City Subway and comparable light rail systems is: full CBTC modernization is not the appropriate procurement question for most of them at most procurement points. Selective signaling improvement, modernization of station equipment, and rolling stock renewal are typically the higher-value capital investments. CBTC enters the conversation when ridership density rises to the point where line-haul capacity becomes constraining, which has not occurred at most legacy US light rail systems.

## What these three forgotten systems teach the broader US ecosystem


<figure class="blog-figure blog-figure--table">
  <table class="blog-table">
    <thead>
      <tr><th>System</th><th>Jurisdiction</th><th>Automation Level</th><th>Modernization Pathway</th></tr>
    </thead>
    <tbody>
      <tr><td>PATH</td><td>FRA</td><td>—</td><td>PTC compliance</td></tr>
      <tr><td>PATCO Speedline</td><td>—</td><td>GoA 1 with CBTC advisory</td><td>Partial modernization</td></tr>
      <tr><td>Newark City Subway</td><td>—</td><td>GoA 0</td><td>Legacy signaling</td></tr>
    </tbody>
  </table>
  <figcaption class="blog-figure__caption">Train control modernization pathway depends on regulatory jurisdiction, ridership density, and network characteristics.</figcaption>
</figure>


The lesson from reading PATH, PATCO, and the Newark City Subway carefully is that US train control modernization is not a single pathway. It is at least four pathways operating in parallel.

Pathway one is FTA-regulated heavy-rail transit CBTC retrofit (the L Line, the 7 Line, BART, SFMTA, eventual WMATA and SEPTA work). This is the dominant US CBTC narrative and the one most published documentation covers.

Pathway two is FRA-regulated heavy-rail transit PTC compliance (PATH and Staten Island Railway). This is structurally a PTC story rather than a CBTC story, and it operates under a different regulatory framework, vendor base, and architectural pattern.

Pathway three is partial-modernization GoA 1 systems (PATCO, MARTA partial, and a substantial fraction of mid-sized US transit). This is a defensible operating posture that may evolve toward full CBTC over the next 10 to 20 years or may continue with selective modernization.

Pathway four is light rail and lower-density transit (Newark, much of NJ Transit light rail, the smaller Sun Belt LRT systems) where full CBTC modernization is generally not the appropriate procurement question.

Reading all four pathways together produces a more accurate picture of US train control modernization than the L Line / BART / Honolulu spotlight does on its own. The forgotten systems are not absent from the story; they are participating in different chapters of it.

## Practical takeaways

- PATH operates as FRA-regulated heavy-rail transit and is participating in train control modernization through PTC rather than CBTC. The hybrid jurisdictional posture means CBTC is not directly applicable without regulatory innovation.
- PATCO's GoA 1 with CBTC advisory posture is a stable operating reality at a real mid-sized US transit system, not a deficiency. The full-CBTC modernization decision remains open.
- The Newark City Subway and comparable light rail systems generally face capital priorities — fleet renewal, station accessibility, expansion — that rank above full CBTC modernization. This is appropriate, not negligence.
- US train control modernization is at least four parallel pathways (FTA-CBTC, FRA-PTC, partial-modernization, light-rail-non-CBTC). Discussion that treats CBTC as the universal answer misreads the actual installed base.
- For analysts and procurement professionals, reading the forgotten systems carefully is prerequisite to accurate forecasting of US train control modernization trajectories.

## Where to go next

This post is an 11-minute summary. The full treatment lives in Chapter 2 ("Standards and Regulations") and Chapter 10 ("CBTC in the United States") of *Communications-Based Train Control* (Volume 2). [Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ). [Download Chapter 2 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch02.pdf).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: US Deployment, Procurement & Future Directions*. Independent. ISBN 979-8-258-54295-3. — Chapter 2, "Standards and Regulations" (GoA framework table); Chapter 8, "Grades of Automation"; Chapter 10, "CBTC in the United States."
- Port Authority of New York and New Jersey. *PATH Capital Plan and Modernization*. [panynj.gov/path](https://www.panynj.gov/path)
- Port Authority Transit Corporation (PATCO). *Capital Improvement Program*. [ridepatco.org](http://www.ridepatco.org/)
- NJ Transit. *Newark Light Rail*. [njtransit.com](https://www.njtransit.com/)
- Federal Railroad Administration. *49 CFR Part 236 Subpart I — Positive Train Control Systems*. [ecfr.gov](https://www.ecfr.gov/)
- Federal Transit Administration. *State Safety Oversight Program*. [transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight](https://www.transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight)
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
