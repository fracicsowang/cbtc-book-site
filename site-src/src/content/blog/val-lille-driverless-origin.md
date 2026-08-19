---
title: "VAL Driverless Metro: How Lille Ran the World's First Automated Line in 1983"
slug: val-lille-driverless-origin
description: "How the VAL driverless metro opened in Lille in 1983 as the world's first fully automated urban rapid-transit line, why its wayside automatic control was not modern radio CBTC, and what its 40-year head start says about US driverless transit."
date: 2026-08-19
author: "Chunjun (Francisco) Wang"
category: international-benchmarks
tags: [CBTC, VAL, Lille Metro, driverless, GoA 4, Matra, Siemens Mobility, international]
primary_keyword: "VAL driverless metro"
secondary_keywords: ["Lille VAL system", "world's first automated metro", "Matra VAL technology", "rubber-tyred driverless metro", "GoA 4 automated metro history"]
related_chapters: [8, 11]
internal_links: ["/blog/goa-0-4-explained-grades-of-automation", "/blog/driverless-operations-worldwide-goa-4", "/blog/paris-metro-line-14-driverless-showcase"]
og_image: "/blog/img/val-lille-driverless-origin.png"
read_time: "11 min"
---

On 25 April 1983, a short rubber-tyred train pulled out of a station on the eastern edge of Lille with no driver aboard and no cab to seat one in. The line it inaugurated — the VAL system linking Villeneuve-d'Ascq to central Lille — is widely credited as the world's first fully automated urban metro, the original VAL driverless metro to carry the public under genuinely unattended operation. Forty years before an American city would place a single revenue train under fully driverless control on an urban metro line, a mid-sized French industrial region built one from nothing, ran it without a driver in the cab, and turned an operating profit within six years. For a US transit engineer, Lille is the cleanest early proof that unattended train operation is not a recent aspiration but a technology old enough to collect a pension.

## Why a 40-year-old French metro belongs in a US engineer's reference set

American practice tends to benchmark train control against London's Underground modernization, against Paris, and against the slow brownfield resignaling of New York and the San Francisco Bay Area. Lille rarely enters that conversation, and the omission is worth correcting. The Lille VAL system is the earliest large-scale demonstration that fully unattended operation — no driver, no attendant in the leading car — is a proven, buyable capability rather than an unproven claim, one that has moved commuters safely and profitably since the Reagan administration. It also sharpens a distinction that US vendor marketing tends to blur: driverless operation and modern radio-based Communications-Based Train Control (CBTC) are related but separate ideas, and Lille achieved the first entirely without the second. For an engineer or program manager weighing a domestic Grade of Automation 4 (GoA 4) business case, understanding how a system reached unattended operation in 1983, and with what technology, is a useful correction to the reflex that treats driverless metros as an invention of the past decade.

## The VAL driverless metro: what Lille actually built

The story begins not with a transit agency but with a laboratory. In 1971, Professor Robert Gabillard at the University of Lille began studying the electromagnetic and control problems of automatically guided vehicles, and by 1973 a prototype was running on a test track at Lezennes on the outskirts of the city. The industrial partner was Matra, the French aerospace and defense group, which turned the university concept into a product line branded VAL — Véhicule Automatique Léger, or "automatic light vehicle," a name later fitted over the original project label, Villeneuve-d'Ascq à Lille.

What opened on 25 April 1983 was a full urban metro, not a novelty shuttle. Line 1 ran on a segregated, grade-separated guideway with rubber-tyred two-car trains drawing 750-volt direct current from side contact bars, reaching about 80 km/h and running at headways as short as 60 seconds. Every station had platform screen doors — the glass walls with sliding gates that most US riders would not encounter for decades — because unattended operation demands a physical barrier between the crowd and the guideway. The network grew into two lines totaling roughly 45 km and 60 stations; Line 2, built out in stages through 2000, became at 32 km the longest single automated route in the world. The system has run at an operating profit since 1989.

Two qualifications keep the "world's first" claim honest. Kobe's Port Island Line — the Port Liner — opened in 1981 and is the earlier driverless urban system, but it is classed as automated guideway transit (AGT), a people-mover format closer to an airport circulator than to a heavy urban metro. Lille's distinction is narrower and more defensible: it was the first fully automated, driverless line built and operated as a city's principal rapid-transit metro. The [grades-of-automation framework](/blog/goa-0-4-explained-grades-of-automation) that later codified this as GoA 4 did not exist in 1983; Lille is one of the reference cases the standards were written around.

## Wayside automatic control, not radio CBTC

Here precision matters, because the temptation to call Lille "the first CBTC metro" is strong and wrong. Modern CBTC, as defined by IEEE 1474, computes each train's position continuously and independently of track circuits, exchanges that position with wayside zone controllers over a radio data network, and calculates a moving-block braking authority that trails the train like a shadow. The original VAL did none of that. Its automation rested on fixed-block signaling with wayside sensing: the guideway was divided into blocks, train presence and speed were detected by equipment built into the permanent way, and a central control computer managed spacing and timetable adherence, receiving a status report from each train roughly every two seconds. The trains carried automatic protection and operation equipment, but the safety logic lived substantially in the wayside and the control center, not in a radio-linked negotiation between a train-borne processor and a zone controller.

That difference is not pedantry. It sets the ceiling on capacity and flexibility. Fixed blocks impose a minimum train separation defined by the block layout rather than by a continuously computed braking distance, which is why VAL's short 60-second headway was achieved with brief, frequent, lightweight trains rather than with the moving-block density that radio CBTC later delivered. Lille proved that a line could be driverless without being moving-block; the two capabilities arrived a generation apart. When US agencies specify CBTC today, they are buying the radio moving-block layer that Lille never had, laid on top of the unattended-operation concept that Lille established. Keeping the two ideas distinct is essential to reading any driverless-metro history correctly, and it is the same separation drawn in [Driverless Operations Worldwide: Who Is GoA 4, Who Is Faking It](/blog/driverless-operations-worldwide-goa-4). Framing 1983 VAL as the ancestor of CBTC is accurate; calling it CBTC is not.


## From Matra to Siemens: how the VAL template traveled

Once Lille demonstrated that the format worked, VAL became an export product, and its deployment map is a useful atlas of where driverless made early commercial sense. ORLYVAL, the automated link to Orly airport in Paris, opened in 1991. Toulouse opened Line A in 1993 and Line B in 2007, becoming a two-line VAL city like Lille. Taipei's Muzha Line — now the Wenhu, or Brown, Line — opened in 1996 using the larger VAL 256 vehicles. Rennes, one of the smallest cities in the world to build a metro, opened its VAL line in 2002. Turin brought the format to Italy in 2006 with the VAL 208, the first driverless metro on the Italian peninsula. Paris added CDGVAL at Charles de Gaulle airport in 2007, and the rubber-tyred driverless metro format later reached South Korea at Uijeongbu in 2012.

The corporate lineage tracked the technology. Siemens took a half stake in Matra's transport arm in 1995, forming Matra Transport International, then acquired the company outright in 2001 and folded it into what is now Siemens Mobility. The Matra VAL technology that began in a Lille university laboratory is therefore marketed today by the same vendor that competes for US CBTC contracts — a continuity worth remembering when a Siemens driverless reference is cited in a domestic procurement. Lille itself is now re-fleeting: in 2025 the network ordered new automated trains from Siemens Mobility and Alstom to replace the original 1983-generation vehicles, closing a loop four decades long.

## The American chapter: VAL ran in Chicago and Jacksonville

The United States is not absent from the VAL story — it simply kept the technology at the airport curb rather than in the city. Jacksonville, Florida, opened a VAL 256 line in 1989 as the core of its downtown Skyway people mover, then closed that segment in 1996 and rebuilt the system as a monorail; the two original VAL cars were sold to Chicago. There they joined the Airport Transit System at O'Hare, a VAL 256 shuttle that opened in 1993, ran until 2019, and was rebuilt with different equipment before reopening in 2021. Both were genuine driverless VAL installations on American soil, contemporaneous with Toulouse and Taipei.

The pattern is telling. When the format that Lille pioneered reached the United States, it arrived as an automated people mover — an airport circulator shuttling travelers between terminals and parking decks — not as urban mass transit. The technology cleared American safety review, ran unattended for years, and drew no particular controversy, precisely because it was confined to a closed airport environment rather than a public street grid. That containment is the quiet backdrop to the larger question.

## The driverless idea is 40 years old — what took the United States so long

Not until 30 June 2023 did a US city open a fully driverless, GoA 4 urban metro carrying the general public: Honolulu's Skyline, built by Hitachi Rail on an elevated guideway — the country's first true unattended, GoA 4 urban railway. Roughly 40 years separated it from Lille.

The delay was not technological. The hardware to run a metro without a driver existed, was certified, and was operating in revenue service on three continents — and, as O'Hare and Jacksonville showed, inside the United States itself — while American cities were still debating whether to attempt it. The obstacles were the familiar American ones: the dominance of brownfield systems, where a driverless overlay must be retrofitted onto legacy signaling and legacy labor agreements; the fragmentation of funding, procurement, and safety oversight across federal, state, and local authorities; and an institutional caution that treats unattended operation as a hazard to be avoided rather than a mature option to be evaluated. Countries that built greenfield lines — France with Lille and later [Paris Métro Line 14](/blog/paris-metro-line-14-driverless-showcase), Canada with Vancouver's SkyTrain in 1985 — reached driverless operation early because they were not fighting their own history. The lesson Lille offers a US program manager is not that America was slow to invent driverless transit; it is that America was slow to deploy a capability it had already proven it could run.


![Driverless urban rail arrived in the early 1980s; the first fully automated US urban metro, Honolulu's Skyline, did not open until 2023 — roughly four decades after Lille.](/blog/img/val-lille-driverless-origin-fig1.png)
*<small>Driverless urban rail arrived in the early 1980s; the first fully automated US urban metro, Honolulu's Skyline, did not open until 2023 — roughly four decades after Lille.</small>*



![The VAL family: pre-CBTC driverless metros, from Lille (1983) outward.](/blog/img/val-lille-driverless-origin-fig2.svg)
*<small>The VAL family: pre-CBTC driverless metros, from Lille (1983) outward.</small>*


## What this means in practice

- **Driverless predates radio CBTC by a generation.** Lille ran unattended in 1983 on fixed-block wayside control, not moving-block radio CBTC. When evaluating any "driverless" claim, separate the automation grade (GoA 4) from the train-control technology (fixed block versus radio moving block); the two are independent variables.
- **Do not call 1983 VAL "CBTC."** VAL established the driverless operating template, but its control architecture is the ancestor of modern CBTC, not an instance of it. That precision protects the credibility of any technical brief or procurement document.
- **Platform screen doors are original equipment, not an add-on.** Lille built full platform-edge barriers in 1983 because unattended operation requires them. Any US GoA 4 aspiration inherits that cost from the first design sketch.
- **The United States has already run VAL.** Driverless VAL circulators operated at O'Hare and in Jacksonville for years without incident, which undercuts the argument that unattended operation is untested in the American regulatory environment; what was untested was the urban application, not the technology.
- **The bottleneck was institutional, not technical.** Honolulu's 2023 Skyline shows the capability was always available for purchase; the 40-year gap reflects brownfield constraints, split procurement, and oversight caution rather than any limitation of the driverless idea itself.

## Where to go next

This post is an 11-minute case study. The full treatment of international driverless benchmarks and their relevance to US deployment decisions lives in Chapter 11 ("International Benchmarks with US Relevance") of *Communications-Based Train Control*, Volume 2: Operations, Deployment & Economics ([Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 11 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch11.pdf) for the comparative benchmark tables.

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Deployment & Economics*. Independent. ISBN 979-8-258-54528-2. — [Chapter 11, "International Benchmarks with US Relevance"]
- Railway Technology. *Lille VAL, France*. [railway-technology.com](https://www.railway-technology.com/projects/lille_val/)
- City Monitor. *Lille had Europe's first fully automated Metro system. It opened in 1983*. [citymonitor.ai](https://citymonitor.ai/transport/lille-had-europe-s-first-fully-automated-metro-system-it-opened-1983-3856)
- Siemens Mobility. *VAL automated people mover systems*. [mobility.siemens.com](https://www.mobility.siemens.com/global/en/portfolio/rolling-stock/val-systems.html)
- Railway Gazette International. *Lille orders automated light metro trains*. [railwaygazette.com](https://www.railwaygazette.com/urban/2025/10/22/lille-orders-automated-light-metro-trains/)
- Lagardère. *Siemens increases its stake in Matra Transport International*. [lagardere.com](https://www.lagardere.com/en/press-release/siemens-increases-its-stake-in-matra-transport-international/)
- Hitachi Rail. *US's first fully autonomous urban railway system, built by Hitachi Rail, opens in Honolulu*. [hitachi.com](https://www.hitachi.com/en-us/press/us-first-fully-autonomous-urban-railway-system-built-by-hitachi-rail-opens-in-honolulu/)
- Railway Age. *"Skyline" Opens in Honolulu*. [railwayage.com](https://www.railwayage.com/passenger/rapid-transit/skyline-opens-in-honolulu/)
- American Society of Civil Engineers. *Siemens VAL Solution in Torino — The First Driverless Metro in Italy*. [ascelibrary.org](https://ascelibrary.org/doi/10.1061/40766%28174%2967)
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
