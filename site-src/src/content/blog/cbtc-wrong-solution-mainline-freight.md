---
title: "Why CBTC Is the Wrong Solution for Mainline Freight"
slug: cbtc-wrong-solution-mainline-freight
description: "An honest 2026 explanation of why Communications-Based Train Control is not deployed on US mainline freight, why Positive Train Control was the right answer for that market, and what the regulatory and economic reasons are likely to keep the boundary in place."
date: 2026-06-02
author: "Chunjun (Francisco) Wang"
category: trends
tags: [CBTC vs PTC, mainline freight, US freight rail, FRA regulation, I-ETMS, Class I freight, train control freight]
primary_keyword: "CBTC freight"
secondary_keywords: ["CBTC mainline freight", "why CBTC not freight", "PTC freight rail", "I-ETMS Class I", "FRA train control mandate", "freight train control US"]
related_chapters: [1, 2, 15]
internal_links: ["/blog/what-is-cbtc-2026-guide"]
og_image: "/blog/img/cbtc-wrong-solution-mainline-freight.png"
read_time: "10 min"
---

A reasonable question, when a transit-curious software engineer or a policy reader first encounters US train control, is why Communications-Based Train Control runs the New York City Subway and the Bay Area Rapid Transit but not the BNSF, the Union Pacific, the CSX, or the Norfolk Southern. The answer is not that the freight railroads have failed to adopt the better technology. The answer is that CBTC and Positive Train Control answer different questions, the freight network's question is the one PTC answers, and the regulatory and economic structure of US freight rail is unlikely to change in a way that would make CBTC the right answer instead. This post lays out the case explicitly. The conclusion is not that CBTC is bad or that PTC is good; it is that the right tool depends on what you are trying to do, and the freight network's problem is structurally different from the metro problem.

## The split that defines US train control

The single most important fact about US train control is the regulatory split between the Federal Railroad Administration and the Federal Transit Administration. The FRA owns mainline freight, intercity passenger rail, and most commuter rail operating on shared or owned mainline track. The FTA owns rapid transit, light rail, and other urban passenger systems. The two regulators have different statutes, different standards, different funding mechanisms, and different histories of accident response. Everything else in the CBTC-versus-PTC discussion follows from this split. (For the regulator-by-regulator breakdown, see CBTC vs PTC: Why US Commuter Rail Picked One and US Metro Picked the Other.)

PTC is the train control technology the FRA mandated. The mandate flows from the Rail Safety Improvement Act of 2008, signed into law a few weeks after the September 2008 Chatsworth collision in California killed 25 people. The Act required Class I freight railroads, Amtrak, and most US commuter rail operators on FRA-regulated corridors to implement PTC by the original 2015 deadline. After several extensions, the final implementation deadline was December 31, 2020, by which most regulated railroads had completed deployment across approximately 57,000 route-miles of track. The vast majority of those deployments use Interoperable Electronic Train Management System, an architecture developed primarily by Wabtec and standardized for cross-railroad operation.

CBTC is the train control technology US transit agencies have adopted by choice rather than by mandate. The FTA does not require CBTC. It funds modernization through Capital Investment Grants and reviews safety through the State Safety Oversight framework, but no federal statute compels a transit agency to deploy CBTC. The agencies that have done so — NYCT, BART, WMATA, SFMTA, MARTA, HART — have done so to gain capacity, not to comply with a mandate. The deployment cadence is voluntary, the funding is partial federal partial local, and each agency proceeds at its own pace.

The freight question is fundamentally a safety-overlay question. The transit question is fundamentally a capacity-and-modernization question. CBTC and PTC were designed for these different questions, and the answer that fits one does not fit the other.

## What the US freight network actually needs

The US Class I freight network is the largest by route-miles in the world. BNSF, CSX, Norfolk Southern, Union Pacific, Canadian National, and Canadian Pacific Kansas City together operate over 130,000 route-miles of mainline track across North America. Operations are dominated by long, heavy trains — typical freight consists run 6,000 to 18,000 feet, weigh 10,000 to 20,000 tons, and operate at speeds from 25 to 70 miles per hour depending on track class and corridor. Network density is low: typical mainline traffic is 20 to 60 trains per day, far below the 600-plus trains per day that a busy CBTC metro line carries.

The safety problem the freight network needed to solve in 2008 was not a capacity problem. It was a specific class of accidents — train-to-train collisions caused by signal violations, over-speed derailments at curves and special-trackwork, incursions into work zones, and movements through misaligned switches. The Rail Safety Improvement Act named these four accident classes explicitly and required PTC to prevent them.

PTC's design intent matches the problem. PTC is a safety overlay. The train operates under existing fixed-block signaling rules, the operator drives manually, and PTC intervenes only when an unsafe condition is about to occur — a missed signal, an over-speed approach, an unauthorized work-zone entry. PTC does not change the basic operating model of the freight railroad. It does not replace the existing signaling system; it sits alongside it as an enforcement layer. Capacity is unchanged or, in most deployments, slightly reduced because of conservative enforcement margins.

Operationally, PTC is a good fit for freight. A freight train running 20 trains per day on a 200-mile corridor does not need continuous Movement Authority updates and does not benefit much from headway compression. What it needs is a reliable enforcement layer that prevents the rare but consequential accident class that the Rail Safety Improvement Act targeted. PTC delivers that, and the deployment record across the past five years confirms it.

## What CBTC was designed for

CBTC was designed for the metro problem, which is different in almost every dimension.

The metro problem is dominated by capacity. A busy NYC subway line runs 25 to 30 trains per hour per direction, with peak hours that push the limits of the fixed-block signaling that the system inherited from the 1930s. The capacity gain that CBTC delivers — typically 20 to 40 percent over fixed-block, with the L Line achieving roughly 24 to 29 trains per hour where the previous fixed-block system delivered around 20 — is the structural justification for the deployment. The capacity gain comes from the moving-block architecture: CBTC computes a continuously updated braking-curve buffer around each train rather than reserving track sections in fixed-length blocks, and the moving-block geometry permits much shorter following distances at the same safety margin. (For the foundation, see [What Is Communications-Based Train Control (CBTC)? A 2026 Plain-English Guide](/blog/what-is-cbtc-2026-guide).)

Metro operations also support the architecture. Metro trains are short (eight to ten cars typically), light (under 1,000 tons), high-acceleration, high-deceleration, and operate in a dedicated right-of-way with no shared infrastructure with other operators. The radio coverage problem is bounded — a metro line is 10 to 30 miles long with well-known geometry, dense access-point installation in tunnels and stations is feasible, and the operating speeds (40 to 70 miles per hour typically) are slow enough that the handover-latency budget is comfortable.

The cost basis is also different. CBTC capital costs run $15 to $40 million per route-mile for brownfield retrofit; the freight network's 130,000 route-miles would cost trillions of dollars to retrofit at this rate. The metro economics work because the 30-year capital amortization is supported by very high passenger volumes per route-mile; the freight economics do not because the train volumes per route-mile are far lower.


<figure class="blog-figure blog-figure--table">
  <table class="blog-table">
    <thead>
      <tr><th>Attribute</th><th>US Freight</th><th>US Metro</th></tr>
    </thead>
    <tbody>
      <tr><td>Train Length</td><td>6,000 to 18,000 feet</td><td>8 to 10 cars</td></tr>
      <tr><td>Train Weight</td><td>10,000 to 20,000 tons</td><td>Under 1,000 tons</td></tr>
      <tr><td>Trains per Day</td><td>20 to 60</td><td>600+</td></tr>
      <tr><td>Speed</td><td>25 to 70 mph</td><td>40 to 70 mph</td></tr>
      <tr><td>Network Density</td><td>Low</td><td>High</td></tr>
      <tr><td>Control Technology</td><td>PTC</td><td>CBTC</td></tr>
      <tr><td>Primary Focus</td><td>Safety</td><td>Capacity</td></tr>
    </tbody>
  </table>
  <figcaption class="blog-figure__caption">The US freight and US metro networks differ on every operational dimension that drives train control technology choice.</figcaption>
</figure>


## Why CBTC architecture does not fit freight

Several specific reasons explain why CBTC, even if the regulatory and economic frame were different, would not be the right architecture for US mainline freight.

The continuous-communication requirement is a poor fit for a 130,000-route-mile network. CBTC depends on near-continuous bidirectional radio between trains and wayside, with Movement Authority updates every 500 milliseconds to a few seconds. Coverage of the freight network at this density would require an order-of-magnitude expansion of wayside radio infrastructure — access points every 250 to 500 meters across the entire network. PTC's episodic communication model, with position reports and authorities exchanged a few times per minute, fits the network density and the train-per-day cadence far better. The 220 MHz licensed band that PTC uses provides the long-range, low-data-rate coverage that the architecture needs.

The moving-block geometry buys little on a low-density network. The fundamental capacity gain from moving block — shorter following distances, no fixed-block waste — matters when trains are running every two to three minutes. When trains are running every 30 to 60 minutes on a 200-mile freight corridor, the fixed-block waste is operationally irrelevant. The capacity ceiling of the freight network is bounded by yard throughput, terminal handling, crew availability, and locomotive utilization, not by signal-spacing geometry.

The brake performance assumptions are different. CBTC's safe-braking-distance computation assumes electric multiple-unit metro trains with high deceleration rates and well-characterized brake performance. A 15,000-ton freight consist with a mile-long air-brake propagation delay is a different physics problem; the moving-block buffer would be much larger, the safety margins more conservative, and the capacity gain much smaller. The current PTC braking-enforcement logic is calibrated to the freight physics; CBTC's enforcement logic is calibrated to the metro physics.

The interoperability requirements are different. The US freight network is fundamentally interoperable: a train interchanged from BNSF to CSX must operate seamlessly across both railroads' territory. PTC's I-ETMS architecture was designed for this interoperability — the same equipment, the same protocols, the same back-office services run on every Class I railroad's PTC territory. CBTC has no equivalent interoperability standard. The major CBTC vendors — Siemens, Alstom, Hitachi Rail STS, the legacy Thales SelTrac platform — produce products that are similar in function but proprietary in protocol, and the interoperability standards that European EULYNX and OCORA initiatives are building have not reached US transit, let alone US freight. Imposing CBTC on a network that requires cross-railroad interoperability would require an interoperability standard that does not yet exist.

## The Caltrain CBOSS lesson

The case study that most clearly demonstrates the difficulty of imposing CBTC-like capability on a PTC-regulated corridor is the Caltrain CBOSS program (2010 to 2015). Caltrain attempted to build a system simultaneously satisfying FRA PTC requirements and providing CBTC-like capacity benefits. The program encountered significant vendor coordination challenges, schedule slippage, and cost overruns; Caltrain eventually abandoned CBOSS in favor of conventional I-ETMS PTC paired with rail electrification. The technical lesson — that hybrid CBTC-PTC systems require a single vendor with full responsibility or exceptional governance maturity, neither of which CBOSS achieved — is well-documented in the rail engineering literature and is referenced as cautionary precedent in current discussions of next-generation train control.

The CBOSS lesson does not say that CBTC-on-mainline is impossible. It says that pioneering a hybrid system without a proven vendor reference design is high-risk and that the integration challenges of certifying a moving-block layer alongside PTC compliance are substantial. Subsequent vendor product evolution — Siemens, Alstom, and Hitachi Rail STS have each begun modularizing their PTC and CBTC portfolios — has reduced but not eliminated these challenges.

## The narrow corner where convergence is plausible

Convergence between CBTC-style moving block and US PTC is plausible only in narrow contexts.

The most credible candidates are high-density commuter rail trunk lines approaching saturation: Long Island Rail Road and Metro-North on their Manhattan trunk approaches, Caltrain on the Peninsula, perhaps Metra Rock Island. These corridors have train volumes (200 to 400 trains per day) closer to metro than to freight, are FRA-regulated because they share track with freight or operate on FRA-jurisdiction corridors, and face capacity constraints that fixed-block PTC cannot relieve. A moving-block overlay or a hybrid PTC-CBTC system on these specific corridors is technically plausible.

The realistic timeline is the 2030s. Vendor product portfolios are still modularizing. The European FRMCS radio standardization has not propagated into US deployments. The FRA has not opened a rulemaking on next-generation train control. The Rail Safety Improvement Act provides the regulatory framework for PTC, not for moving-block overlays. The probable trajectory is incremental enhancement through 2030, first production deployments of hybrid systems on selected commuter corridors in 2030 to 2040, and broader convergence — if it happens at all — in 2040 to 2050. (For the longer-arc projection, see The 2030 CBTC Landscape: 5 Predictions.)

The freight network proper is a different conversation. A 130,000-route-mile freight network with 20 to 60 trains per day per corridor, interoperable across multiple Class I carriers, with mile-long heavy consists and no FRA mandate for capacity-driven train control, is unlikely to deploy CBTC under any plausible scenario this decade or next. PTC will continue to be the right answer for the freight network's problem because PTC was designed for that problem. Replacing it would require a different problem.

## What this means in practice

- The US train control split is regulatory and economic, not technological. The FRA owns freight and most commuter rail; the FTA owns transit. PTC was mandated by the Rail Safety Improvement Act of 2008 after the Chatsworth collision; CBTC is voluntary and capacity-driven.
- The US freight network's problem is preventing four named accident classes (train-to-train collision, over-speed derailment, work-zone incursion, misaligned switch) on a 130,000-route-mile, low-density, interoperable network with long heavy trains. PTC's safety-overlay architecture is a good fit for this problem.
- The metro network's problem is capacity gain on dense, dedicated-right-of-way, short-train, high-frequency lines. CBTC's moving-block architecture is a good fit for this problem and not for the freight problem.
- Specific architectural mismatches keep CBTC out of mainline freight: continuous-communication coverage costs, capacity gain that does not buy much on low-density routes, brake performance physics that differs from EMU metros, and interoperability requirements without a CBTC interoperability standard.
- The Caltrain CBOSS program (2010 to 2015) demonstrated the integration risk of hybrid PTC-CBTC systems and is the cautionary precedent for any future attempt.
- Convergence is plausible only on a narrow set of high-density commuter rail trunk lines, on a 2030s to 2040s timeline, and only with vendor product maturity and regulatory engagement that does not yet exist in 2026.

## Where to go next

This post is a 10-minute briefing. The full discussion of the US regulatory split, the I-ETMS architecture, the CBOSS case study, and the convergence drivers lives in Chapter 15 of *Communications-Based Train Control* (Volume 2): [Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Lifecycle & US Deployment*. Independent. ISBN 979-8-258-54295-3. — Chapter 15, "Vendor Landscape and Technology Trends."
- Federal Railroad Administration. *Positive Train Control (PTC) Program Overview*. [railroads.dot.gov/program-areas/safety/ptc](https://railroads.dot.gov/program-areas/safety/ptc)
- Federal Railroad Administration. *49 CFR Part 236 Subpart I — Positive Train Control Systems*. [ecfr.gov](https://www.ecfr.gov/)
- Rail Safety Improvement Act of 2008. *Public Law 110-432*. [congress.gov](https://www.congress.gov/)
- National Transportation Safety Board. *Chatsworth Collision Investigation Report (RAR-10/01)*. [ntsb.gov](https://www.ntsb.gov/)
- Federal Transit Administration. *Capital Investment Grants Program*. [transit.dot.gov/CIG](https://www.transit.dot.gov/CIG)
- IEEE Standards Association. *IEEE Std 1474.1: Communications-Based Train Control Standards*.
- Caltrain. *CBOSS Program Documentation and Lessons Learned*. [caltrain.com](https://www.caltrain.com/)
- Association of American Railroads. *Class I Railroad PTC Implementation Reports*. [aar.org](https://www.aar.org/)
