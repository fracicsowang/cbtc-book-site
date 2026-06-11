---
title: "London Underground 4LM: The Largest CBTC Retrofit in the World"
slug: london-underground-4lm-largest-cbtc-retrofit
description: "A practitioner read of Transport for London's Four Lines Modernisation Programme — the multi-decade Communications-Based Train Control retrofit covering the Circle, District, Hammersmith & City, and Metropolitan lines, awarded to Thales in 2014. What this means for US transit agencies retrofitting century-old infrastructure."
date: 2026-05-13
author: "Chunjun (Francisco) Wang"
category: international-benchmarks
tags: [CBTC, London Underground, 4LM, Four Lines Modernisation, Thales SelTrac, Transport for London, international, retrofit]
primary_keyword: "London Underground 4LM CBTC"
secondary_keywords: ["Four Lines Modernisation Thales", "London Tube CBTC retrofit", "Sub-Surface Lines CBTC", "TfL signaling modernization", "world's largest CBTC retrofit"]
related_chapters: [11, 12, 15]
internal_links: ["/blog/nyc-mta-l-line-cbtc-25-years", "/blog/cbtc-projects-over-budget"]
og_image: "/blog/img/london-underground-4lm-largest-cbtc-retrofit.png"
read_time: "11 min"
---

In August 2015, Transport for London (TfL) signed a £760 million signaling contract with Thales — now part of Hitachi Rail — for what the agency had named the Four Lines Modernisation Programme, or 4LM: a complete Communications-Based Train Control (CBTC) retrofit of the Circle, District, Hammersmith & City, and Metropolitan lines of the London Underground. The four lines together comprise about 40 percent of the London Underground network by route-kilometers and operate over 310 kilometers (193 miles) of track, using infrastructure that in places dates to 1863. The award followed a 2014 procurement decision by TfL to re-tender the program after an earlier 2011 contract with Bombardier had been cancelled. The 4LM is the largest single CBTC retrofit award in the world by route-kilometers and by contract value, and it is a project that every US transit agency contemplating multi-line modernization on aging infrastructure should study before issuing its own RFP.

This post is a practitioner's walk through the 4LM story — what it is, what makes it the largest, what TfL learned from cancelling the first contract, and what the lessons mean for US agencies on the equivalent problem.

## What 4LM actually covers

The Sub-Surface Lines (SSL) of the London Underground are the older, larger-bore tunnels constructed before the deep-tube lines: the Metropolitan (opened 1863), the Circle (1884), the District (1868), and the Hammersmith & City (1864 — although the modern operating identity dates from the 1990 service split). The four services share track across substantial portions of central London, interlock at multiple junctions, and operate the largest fleet of any TfL line group: 191 S-Stock trains delivered between 2010 and 2017 by Bombardier (now Alstom). The service runs roughly 40 percent of all London Underground passenger-journeys.

The pre-4LM signaling on these lines was a layered accumulation of fixed-block infrastructure spanning multiple eras: lever frame interlockings dating to the 1920s in places, route-relay interlockings from the 1960s and 1970s, and two-aspect and four-aspect color-light signals layered on top. Practical capacity through central London was approximately 24 trains per hour. The 4LM target is 32 trains per hour through the central core — an approximately 33 percent throughput gain — together with major reliability and performance improvements.

The 4LM scope encompasses a complete CBTC overlay across all four lines: zone controllers along the route, full track-to-train Wi-Fi-band radio infrastructure, replacement of the legacy interlocking framework with a modern Automatic Train Supervision (ATS) layer, integration of the Thales SelTrac CBTC system with the existing S-Stock fleet (which had been delivered with provision for CBTC retrofit), full Automatic Train Operation (ATO) under driver supervision, and migration of the legacy signaling to fallback status during cutover. (For the broader pattern, see Overlay CBTC vs Greenfield CBTC: Migration Tradeoffs.)

## The 2011 cancellation and the 2014 re-tender

The 4LM is the second TfL procurement attempt for this scope. The first contract was awarded to Bombardier Transportation in 2011 for approximately £354 million on a different signaling architecture (CITYFLO 650). By 2013, the program had encountered substantial schedule and integration difficulties, and TfL and Bombardier mutually terminated the contract in December 2013 with both parties acknowledging that the original technical approach was not converging on a deliverable system within the contracted scope. TfL took back the program management, re-tendered the work in 2014, and awarded the new contract to Thales in 2015 on the SelTrac platform, with a substantially revised scope, increased contingency, and a longer overall delivery schedule.

The cancellation cost TfL several years of program time and approximately £85 million in committed expenditures that had to be written off, but the 2015 re-procurement on the Thales SelTrac platform has, by 2024, delivered Stage 1 (Hammersmith & City and Circle line core) into revenue service, with subsequent stages in active commissioning. The 4LM's published target for full revenue service across all four lines is 2027, with the cumulative program cost approaching £1 billion when integration, fleet upgrade, and station works are fully accounted.

The re-tender story is the single most cited US-relevant lesson from 4LM. (Compare [Why CBTC Projects Run 30%+ Over Budget](/blog/cbtc-projects-over-budget).) An agency that signs a fixed-price CBTC contract on a complex retrofit scope and discovers mid-program that the technical approach will not converge has two options: spend the additional time and money to make it converge, or terminate and re-procure. TfL chose to terminate. The re-tender added years to the schedule. It also produced a project that, by 2024, was actually delivering — which the original program path likely would not have.

## Why 4LM is genuinely harder than NYC

It is tempting for US readers to compare 4LM to the New York City Transit (NYCT) CBTC program. Both are multi-line, brownfield retrofits on heavily used legacy networks. The comparison is informative but misleading on three points.

First, age. The Sub-Surface Lines include track and structures dating to the 1860s. The deepest legacy infrastructure on the L Line is from the 1920s. The 4LM had to engineer wayside antenna placement, traction-power isolation, and electromagnetic compatibility against infrastructure that predates the entire concept of electronic interlocking by more than 50 years. (See [NYC MTA L Line CBTC: 25 Years of Lessons](/blog/nyc-mta-l-line-cbtc-25-years) for the NYCT reference case.)

Second, shared track. The four lines share track in central London across the Circle, with the District feeding in at multiple junctions and the Hammersmith & City overlaid on the Circle. A zone controller in central London handles four services with different stopping patterns and different terminal sequences. The L Line and the 7 Line in New York operate as discrete branches by design.

Third, operating environment. The Sub-Surface Lines operate at-grade and surface for substantial portions of their outer routes (the Metropolitan runs to Aylesbury Vale, well into the suburban country), with overhead-line electrification and traction interfaces that differ from the third-rail tube tunnels. The CBTC has to operate consistently across a wider range of physical environments than any US heavy-rail metro retrofit.


![4LM is the largest CBTC retrofit ever awarded by route-kilometers, and the underlying infrastructure is the oldest.](/blog/img/london-underground-4lm-largest-cbtc-retrofit-fig1.svg)
*<small>4LM is the largest CBTC retrofit ever awarded by route-kilometers, and the underlying infrastructure is the oldest.</small>*


## What 4LM is delivering

By 2024, 4LM Stage 1 had entered revenue service on the Hammersmith & City and Circle line core, and Stage 2 (covering the District line west of Earl's Court and the Metropolitan line) was in commissioning. The published TfL targets include 32 trains per hour through the central core (against approximately 24 pre-CBTC), substantially improved on-time performance and reliability, energy savings in the 10–15 percent range from optimized speed profiles under ATO, and full migration to ATS-based dispatch from the legacy control room infrastructure.

The 4LM also produces something more durable than the operational metrics: a refreshed institutional capability. TfL has now built and retained an in-house CBTC engineering team that managed the cancellation, re-procurement, and execution of the largest brownfield CBTC retrofit in the world. That capability is increasingly visible in how TfL specifies, oversees, and delivers other modernization programs across the Underground, the Elizabeth Line, and the surface network.

## What this means for US transit agencies

Five points follow from 4LM that US transit agencies with multi-line CBTC ambitions should price into their planning explicitly.

First, **the largest brownfield CBTC retrofits are multi-decade programs, and the budget should reflect that**. TfL's 4LM is on a 12-plus year delivery from 2014 procurement to 2027 full revenue service, after losing roughly four years to the cancelled 2011 contract. Any US agency contemplating retrofit across multiple connected lines should plan for the calendar in two-decade units, not single-program units.

Second, **a fixed-price CBTC contract on a complex retrofit scope with unproven technical convergence is the single highest-risk procurement structure**. The TfL–Bombardier termination in 2013 is the canonical case study for this. The lesson is not "do not procure fixed-price." The lesson is that the agency must invest in upfront technical de-risking — including independent technical review, vendor demonstration on representative track, and explicit cost-plus phasing for the highest-uncertainty integration work — before committing to a fixed-price baseline. (See Chapter 12 of *Communications-Based Train Control* (Volume 2) for the project lifecycle treatment.)

Third, **in-house owner engineering capability is the structural difference between programs that recover from procurement crises and programs that do not**. TfL retained in-house program management throughout, took the 2013 termination decision quickly, and re-tendered with a substantially refined scope. The agencies that have outsourced CBTC program management to a single integrator without retaining internal review capacity have struggled when the integrator's approach hits trouble.

Fourth, **fleet readiness is a CBTC milestone, not an adjacent program**. The S-Stock fleet was delivered between 2010 and 2017 with provision for CBTC retrofit, which materially reduced the fleet integration risk on 4LM Stage 1 and beyond. US agencies that procure rolling stock without explicit CBTC-readiness specification pay the integration cost later, and the cost is real.

Fifth, **the operational gain of 33 percent throughput on the SSL central core is a defensible target, but it is the realistic ceiling on a brownfield corridor with shared track**. Marketing-grade claims of 50-percent or 100-percent capacity gains are achievable on greenfield CBTC (Singapore MRT North-East Line, Paris Métro Line 14) but rarely on brownfield retrofits with mixed services. US agencies setting capacity targets for retrofit programs should anchor on the 4LM 33-percent figure as the international reference, not the L Line near-doubling figure (which depended on a homogeneous fleet and a discrete branch).


![Multi-line brownfield CBTC retrofits run on multi-decade calendars. 4LM is the largest, and the schedule shows it.](/blog/img/london-underground-4lm-largest-cbtc-retrofit-fig2.svg)
*<small>Multi-line brownfield CBTC retrofits run on multi-decade calendars. 4LM is the largest, and the schedule shows it.</small>*


## Practical takeaways for US transit agencies

- Treat any multi-line brownfield CBTC retrofit as a 15-to-25 year program, not a single project. The 4LM calendar is the realistic reference.
- Invest in upfront technical de-risking — independent review, vendor demonstration on representative track, cost-plus phasing for the riskiest integration work — before committing to a fixed-price baseline.
- Retain in-house CBTC program management capability of at least 20–40 full-time staff for a network of 4LM-scale ambition. Outsourcing all technical decision-making to a single system integrator is the most common failure mode on programs of this size.
- Specify CBTC-readiness in rolling stock procurements regardless of the CBTC schedule. Fleet that arrives un-ready costs the program more than fleet that arrives early.
- Anchor capacity targets on 30-to-35 percent throughput gain for brownfield retrofits with shared track. The L Line near-doubling is a branch-line ceiling, not a network ceiling.

## Where to go next

This post is an 11-minute summary. The full treatment of international CBTC benchmarks, including 4LM and the broader London Underground story, lives in Chapter 11 ("International Benchmarks with US Relevance") of *Communications-Based Train Control* (Volume 2). [Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ). [Download Chapter 11 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch11.pdf).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: US Deployment, Procurement & Future Directions*. Independent. ISBN 979-8-258-54295-3. — Chapter 11, "International Benchmarks with US Relevance" (Section 11.2 on London Underground and Crossrail).
- Transport for London. *Four Lines Modernisation Programme*. [tfl.gov.uk](https://tfl.gov.uk)
- Transport for London. *Investment Programme: Sub-Surface Lines Upgrade*. [tfl.gov.uk/corporate/about-tfl/what-we-do/london-underground/upgrade-plans](https://tfl.gov.uk/corporate/about-tfl/what-we-do/london-underground/upgrade-plans)
- Railway Gazette International. *Coverage of TfL Four Lines Modernisation, 2014–2024*. [railwaygazette.com](https://www.railwaygazette.com)
- International Railway Journal (IRJ). *London Underground 4LM Reporting*. [railjournal.com](https://www.railjournal.com)
- Hitachi Rail. *SelTrac CBTC Platform*. [hitachirail.com](https://www.hitachirail.com)
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- UITP (International Association of Public Transport). *Observatory of Automated Metros*. [uitp.org](https://www.uitp.org)
