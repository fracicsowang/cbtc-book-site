---
title: "Sydney Metro CBTC: How Australia Built Its First Driverless Railway"
slug: sydney-metro-cbtc
description: "How Sydney Metro CBTC — Alstom Urbalis 400, driverless since 2019 — became Australia's first automated metro, and what US agencies can and cannot copy."
date: 2026-08-15
author: "Chunjun (Francisco) Wang"
category: international-benchmarks
tags: [CBTC, Sydney Metro, driverless, GoA 4, Alstom Urbalis 400, Metropolis, international]
primary_keyword: "Sydney Metro CBTC"
secondary_keywords: ["Sydney Metro driverless", "Alstom Urbalis 400", "Australia's first driverless metro", "GoA 4 metro Australia", "Sydney Metro Metropolis trains"]
related_chapters: [8, 11]
internal_links: ["/blog/dubai-metro-cbtc-driverless-network", "/blog/goa-0-4-explained-grades-of-automation", "/blog/driverless-operations-worldwide-goa-4"]
og_image: "/blog/img/sydney-metro-cbtc.png"
read_time: "11 min"
---

On 26 May 2019, a six-car train pulled out of Tallawong station in Sydney's north-west with no driver in the cab and no cab at all, and a continent whose passenger railways had run under human drivers for more than a century and a half had its first fully automated metro. The Sydney Metro CBTC system that made the departure possible — an Alstom Urbalis 400 deployment running at Grade of Automation 4 (GoA 4), the unattended level — did in a single opening what no American transit agency has yet accomplished on a full line: place driverless trains into daily revenue service at metro scale. For a United States engineer, Sydney rewards study for a reason Dubai does not. It is not a clean-sheet greenfield, and the parts of it that were hardest to build are exactly the parts an American agency would have to build too.

## Why a US engineer should study Sydney Metro CBTC

Sydney belongs in a US reference set precisely because it is a hybrid rather than a pure clean-sheet project. Dubai, examined in [Dubai Metro: How CBTC Runs the World's Longest Driverless Network](/blog/dubai-metro-cbtc-driverless-network), is the cleanest large-scale greenfield GoA 4 case available — a system with no legacy signaling to overlay and no cutover to negotiate — and its lessons, while genuine, are structurally out of reach for an agency that must resignal a railroad while it carries passengers. Sydney is a different animal. Its automated core was assembled from three kinds of alignment at once: new tunnel bored specifically for driverless metro, a former double-deck heavy-rail line stripped out and rebuilt to single-deck metro standard, and, from 2024 onward, the conversion of an operating suburban corridor into metro. That mixture sits far closer to the problem a US property actually faces than anything in the Gulf, where every stake was driven into empty desert.

The Sydney Metro CBTC program therefore functions as something rare in the international literature: a controlled study of driverless metro that includes, rather than excludes, the brownfield conversion problem. An engineer building a business case for GoA 4 on an existing American corridor cannot honestly cite Dubai's schedule, because Dubai never had to take a line out of service and give it back rebuilt. Sydney did exactly that, twice, and the friction it encountered — including a Bankstown-line conversion that slipped into 2026 — is more instructive than any greenfield success. This piece treats Sydney as the benchmark it is: proof that unattended operation is mature technology, paired with a candid record of what conversion actually costs in time and disruption.

## The system: Alstom Urbalis 400, driverless from day one

The Sydney Metro network runs on Alstom's Urbalis 400 Communications-Based Train Control (CBTC) system, the same product family — under various generational designations — that governs automated lines across Asia, Europe, and the Americas. From revenue day one the metro operated at GoA 4: no driver, no attendant in the leading car, and full-height platform screen doors at every station to enforce the platform-edge separation that unattended operation requires. The CBTC continuously determines each train's position independent of track circuits, exchanges data with wayside equipment, and computes the moving-block braking authority that lets one train follow another far more closely than a fixed-block system would permit. None of that stack is exotic to a US engineer; it is the same IEEE 1474-shaped functional architecture, sitting at the top of the five-grade automation ladder codified in IEC 62290, that is described in [GoA 0–4 Explained: The Five Grades of Train Automation](/blog/goa-0-4-explained-grades-of-automation). What distinguishes Sydney is not the presence of these functions but the completeness with which they were deployed on the opening day of revenue service rather than phased in over years, as the incremental American overlay projects have generally done.

The rolling stock is the Alstom Metropolis, and the first tranche comprised 22 six-car trainsets built at Alstom's plant in Sri City, in the Indian state of Andhra Pradesh, then shipped to Sydney for testing and commissioning. The trains run at a normal service speed near 100 km/h against a design speed of roughly 120 km/h, draw traction power at 1,500 V DC, and carry the continuous walk-through interior and wide double doors that high-frequency metro dwell times demand. What is worth underscoring for an American audience is not any single component but the integration: the vital onboard processor, the train-to-wayside radio, the platform screen doors, and the central Automatic Train Supervision were specified as one system, by one authority, and delivered under a signaling supplier that also delivered the fleet. The interface risk that consumes US brownfield schedules — where the vehicle contract, the systems contract, and the civil contract meet at a boundary no single party owns — was substantially internalized inside a single delivery structure.

## The network: from a converted rail link to a 113-kilometer plan

The line that opened in 2019 ran 36 km with 13 stations, from Tallawong through Epping to Chatswood, and was branded the Metro North West Line before the network adopted its M1 designation. Even that first segment was not uniformly greenfield: the alignment from Epping to Chatswood was a former double-deck heavy-rail line rebuilt for single-deck driverless metro, a distinction that matters and that the next section takes up in detail. In November 2019, Alstom was contracted to extend the system south under Sydney Harbour and through the central business district, supplying 23 additional six-car Metropolis trains and the Urbalis 400 CBTC for the extension, a tranche that brought the committed fleet to 45 sets.

The first stage of that extension, Sydney Metro City, opened on 19 August 2024, carrying the automated line from Chatswood beneath the harbour and the central business district to Sydenham across a new tunneled segment with seven new stations. The remaining stage converts the existing T3 Bankstown suburban line — some 11 stations of operating double-deck railway — to metro standard, with revenue service scheduled for 2026 after a conversion window that was extended more than once. Taken together with lines under construction, the operator describes a network built toward roughly 113 kilometers of metro and 46 stations across four lines. For a US reader the useful figure is not the eventual total but the shape of the growth: a greenfield core, extended by tunnel, then knitted into converted legacy corridors rather than replacing them wholesale.


## The conversion problem Dubai never had

The most transferable lesson in Sydney is buried in a segment that rarely makes the headlines. The Epping-to-Chatswood link had opened in 2009 as a conventional double-deck heavy-rail line; within a decade it was closed, gutted, and reopened in May 2019 rebuilt as single-deck driverless metro, complete with platform screen doors and Urbalis 400 CBTC. That is not a greenfield story. It is the story of taking a working piece of railroad out of service, rebuilding its platforms and systems to a fundamentally different operating concept, and returning it as GoA 4 — the precise maneuver a US agency contemplates when it studies converting a lightly used commuter branch to automated metro.

The Bankstown-line conversion sharpens the point further, because that corridor was not a lightly used branch but an in-service suburban line, and its conversion has been the program's hardest scheduling problem. Closing an operating railway, substituting buses for its riders, rebuilding every platform for level boarding and screen doors, cutting over the signaling to CBTC, and re-certifying the safety case across the new boundary is exactly the work that turns US resignaling programs into decade-long capital efforts. Sydney's experience is candid on this score: the Sydenham-to-Bankstown conversion slipped from its earlier targets into 2026, and the disruption to existing riders during the shutdown was real and politically costly. During the shutdown the affected riders were carried on replacement buses while every platform was rebuilt for level boarding and screen doors, a mitigation that is standard practice but never cheap and never popular. That friction is the lesson, not a footnote to it. It demonstrates, on a system that otherwise executed driverless metro cleanly, that the expensive and schedule-dominating variable is almost never the CBTC technology and almost always the conversion of a live corridor. An American engineer who cites Sydney as evidence that GoA 4 is buyable is correct; one who cites Sydney's greenfield stages to argue that conversion is quick has read only half the record.

## Operations and capacity: four minutes now, two by design

At opening the network ran a peak headway of four minutes in each direction, equivalent to roughly 15 trains per hour, but the design intent was always higher. The Urbalis 400 CBTC, the platform screen doors, and the civil infrastructure were dimensioned for an ultimate headway of two minutes — 30 trains per hour — under the central business district, and the eight-car train length toward which the six-car sets and stations were sized carries a design capacity on the order of 1,539 customers. At that ultimate configuration the automated core is engineered for something near 46,170 passengers per hour per direction, against a stated target on the order of 40,000 customers per hour comparable to major metros worldwide. The gap between the four-minute service at opening and the two-minute design ceiling is deliberate headroom: the moving-block CBTC allows capacity to be added by tightening headway as demand grows, without new tunnel.


![Sydney Metro opened at a four-minute peak headway but the Alstom Urbalis 400 CBTC was built for a two-minute headway — 30 trains per hour, roughly 46,000 passengers per hour per direction.](/blog/img/sydney-metro-cbtc-fig1.png)
*<small>Sydney Metro opened at a four-minute peak headway but the Alstom Urbalis 400 CBTC was built for a two-minute headway — 30 trains per hour, roughly 46,000 passengers per hour per direction.</small>*



![Sydney Metro: greenfield and converted corridors, all GoA 4 on Alstom Urbalis 400.](/blog/img/sydney-metro-cbtc-fig2.svg)
*<small>Sydney Metro: greenfield and converted corridors, all GoA 4 on Alstom Urbalis 400.</small>*


Driverless, as always, is a claim about the train and not about the system. Sydney Metro operates under the government sponsor with operations and maintenance contracted to a private operator — a consortium led by Hong Kong's MTR — running a conventional control center, roving station staff, and maintenance crews on the discipline any GoA 4 network requires. Unattended train operation removes the driver from the cab; it does not remove people from the safety case. The full-height platform screen doors, the obstacle and derailment detection, and a control center that can address passengers and dispatch staff to any train are the engineered substitutes for the driver's eyes, and each is a capital and operating cost that a business case must carry from the first budget. Sydney sits unambiguously in the genuine-GoA-4 column alongside the reference cases surveyed in [Driverless Operations Worldwide: Who's GoA 4, Who's Faking It](/blog/driverless-operations-worldwide-goa-4), and its record since 2019 is a useful counter to the American reflex of treating unattended operation as unproven.

## What this means in practice

- **Sydney proves the technology and prices the conversion.** Its driverless service since 2019 confirms that GoA 4 CBTC is mature and buyable, while its Epping-Chatswood and Bankstown conversions document, on the same system, how much time and disruption converting a live corridor actually consumes.
- **The conversion segments are the transferable part.** Unlike Dubai's pure greenfield, Sydney rebuilt operating heavy-rail lines into driverless metro, which is the maneuver most relevant to a US agency weighing automation of an existing corridor.
- **Platform screen doors and detection are part of the price.** Any US GoA 4 aspiration inherits the full-height platform-door and obstacle-detection cost that Sydney built in from the first station; it is not an optional later add-on.
- **Design for the headway you will need, not the one you open with.** Sydney opened at four minutes but built the CBTC and civil works for a two-minute headway, buying future capacity without future tunnel — a sequencing discipline US business cases often omit.
- **Single-authority delivery shrinks interface risk.** Procuring fleet and signaling together, under one delivery structure, internalized the vehicle-systems-civil boundary that most often drives US schedule and cost overruns.

## Where to go next

This post is an 11-minute case study. The full treatment of international CBTC benchmarks and their relevance to US deployment decisions lives in Chapter 11 ("International Benchmarks with US Relevance") of *Communications-Based Train Control*, Volume 2: Operations, Deployment & Economics ([Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 11 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch11.pdf) for the comparative benchmark tables and the greenfield-versus-conversion cost framework.

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Deployment & Economics*. Independent. ISBN 979-8-258-54528-2. — [Chapter 11, "International Benchmarks with US Relevance"]
- Railway Gazette International. *Driverless metro line opens in Sydney*. [railwaygazette.com](https://www.railwaygazette.com/metro/driverless-metro-line-opens-in-sydney/48605.article)
- Alstom. (2019). *Alstom to supply driverless trains and digital signalling system for Sydney Metro extension to City and Southwest*. [alstom.com](https://www.alstom.com/press-releases-news/2019/11/alstom-supply-driverless-trains-and-digital-signalling-system-sydney-metro-extension-city-and-southwest)
- Sydney Metro. *About Sydney Metro*. [sydneymetro.info](https://www.sydneymetro.info/about)
- International Railway Journal. *Sydney's first metro line a revolution for Australian transport*. [railjournal.com](https://www.railjournal.com/in_depth/sydneys-first-metro-line-australian-transport/)
- Urban Transport Magazine. *Australia's first metro system opened in Sydney*. [urban-transport-magazine.com](https://www.urban-transport-magazine.com/en/australias-first-metro-system-opened-in-sydney/)
- Railway-News. *Sydney to Get 23 Additional Alstom Metropolis Trains*. [railway-news.com](https://railway-news.com/23-alstom-metropolis-trains-sydney/)
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
