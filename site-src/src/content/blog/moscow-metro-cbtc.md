---
title: "Moscow Metro CBTC: 90-Second Headways and the Supplier-Substitution Test"
slug: moscow-metro-cbtc
description: "How Moscow Metro CBTC modernization delivered 90-second headways on domestic train control, why the Big Circle Line is being prepared for GoA 4, and what US agencies can read from Russia's supplier-substitution response after Western vendors withdrew in 2022."
date: 2026-08-27
author: "Chunjun (Francisco) Wang"
category: international-benchmarks
tags: [CBTC, Moscow Metro, Big Circle Line, NIIAS, moving block, GoA 2, Russia, signalling, international]
primary_keyword: "Moscow Metro CBTC"
secondary_keywords: ["Moscow Metro signalling", "Big Circle Line CBTC", "NIIAS moving block", "Russia metro automation", "GoA 2 driver-operated metro"]
related_chapters: [8, 11]
internal_links: ["/blog/tokyo-metro-vs-beijing-metro-high-density", "/blog/goa-0-4-explained-grades-of-automation", "/blog/chinese-metro-cbtc-50-cities"]
og_image: "/blog/img/moscow-metro-cbtc.png"
read_time: "11 min"
---

On 1 March 2023, Moscow closed a ring. The Bolshaya Koltsevaya Line — the Big Circle Line — closed into a continuous loop of roughly 70 kilometers and became the longest metro ring line in the world, surpassing Beijing's circle line for the title. What earns an engineer's attention is not the civil achievement but the operating target behind it: a railway that already turns trains at 90-second intervals on some lines, run by a full workforce of drivers, on train control systems that had been quietly rebuilt with domestic suppliers. Moscow Metro CBTC modernization is a study in two things a US transit engineer rarely gets to see together — extreme-frequency operation at scale, and what happens to a signalling program when its Western vendors walk away.

## What Moscow Metro CBTC modernization actually looks like

The Moscow Metro belongs on a US engineer's benchmark list for reasons that have nothing to do with politics. It is one of the busiest metros on earth, and it runs a service intensity that most American agencies treat as aspirational, using a signalling estate that mixes Soviet-era cab signalling with modern domestic train control rather than a single off-the-shelf Western Communications-Based Train Control (CBTC) product. Two comparisons make it instructive. The first is throughput: Moscow demonstrates what 90-second headways demand of the train control layer and the operating organization. The second is resilience: the network kept modernizing its signalling and rolling stock after 2022 by leaning on domestic suppliers, which turns an abstract worry about vendor lock-in into a live case study. One clarification matters throughout. The Moscow Metro proper is driver-operated — generally Grade of Automation 2 (GoA 2), automatic train operation under a driver — and is not the unattended GoA 4 seen in Dubai or Copenhagen. The unmanned experiments most often quoted belong to a separate railway, the Moscow Central Circle, run by Russian Railways.

## A network built for extreme frequency

The scale sets the context. The Moscow Metro opened in 1935 and today runs 16 lines and more than 300 stations across roughly 535 route-kilometers, placing it among the 10 longest metro systems in the world and making it the busiest in Europe and the busiest outside Asia ([Railway Technology](https://www.railway-technology.com/projects/moscow-metro/)). On an average weekday it carries about 7.5 million passengers, a figure that has topped 9 million on record days. Trains reach a top speed near 100 kilometers per hour, and the busiest lines are scheduled at peak intervals of roughly 90 seconds.

That last number is the one worth sitting with. A 90-second headway is close to the practical floor for a metro that stops at platforms, dwells for boarding, and must hold a safe braking distance behind the train ahead. American agencies rarely operate below two to three minutes even on their strongest trunk lines, and closing that gap is the entire economic argument for resignaling. Moscow reaches it not through driverless automation but through a combination of train control, platform discipline, and dense operating practice — the same throughput-versus-frequency dynamic examined in [Tokyo vs Beijing: How Two Metros Run the World's Densest Service](/blog/tokyo-metro-vs-beijing-metro-high-density). The lesson for a US program manager is that the headway is delivered by the signalling and the operating organization together, and that unattended operation is a separate question from raw capacity.


## The signalling estate: from Soviet ALS-ARS to domestic moving block

Most of the Moscow Metro still runs on a domestic system called ALS-ARS — automatic locomotive signalling with automatic speed regulation — a cab-signalling and automatic train protection arrangement rooted in Soviet practice and, on some lines, dating back decades. It is a fixed-block system in the classical sense: the track is divided into sections, and the onboard equipment enforces a speed profile based on how many sections ahead are clear. It is robust and well understood, and it is the reason the metro achieved high frequency long before radio-based train control existed.

The modernization layer is where the CBTC story lives. Russian Railways' signalling institute, NIIAS, has developed radio-based train control — described in the technical literature as an ARS-R architecture that adds a radio channel for train-to-wayside data and continuous train localization on top of the automatic speed regulation heritage ([IEEE Xplore](https://ieeexplore.ieee.org/document/581399/)). The most concrete deployment came on the original Circle Line, the Koltsevaya Line (Line 5), a 19.3-kilometer ring whose signalling equipment in places dated to the 1950s and permitted no more than 32 trains per hour, an interval of one minute 53 seconds. At the beginning of 2023, a modern domestic computer-based train control system entered service on that line and cut the interval to 90 seconds, a figure its operators describe as a record among the world's metros ([RollingStock](https://rollingstockworld.com/lrv/reducing-intervals-in-the-metro-the-case-of-the-moscow-metro-circle-line/)). The work was delivered through the signalling division of the domestic 1520 Group.

The functional architecture is not exotic to a US engineer — continuous localization, wayside data exchange, and an enforced braking authority are the same IEEE 1474-shaped stack described elsewhere on this site. What is distinctive is the sourcing. Moscow did not buy a turnkey Western CBTC line to reach that headway; it modernized an aging fixed-block ring with a domestically built system, and it did so on a line carrying passengers.


![A domestic system, not an imported CBTC line, cut the Koltsevaya Line interval from 113 seconds to 90 — the headway gain that resignaling is supposed to buy.](/blog/img/moscow-metro-cbtc-fig1.png)
*<small>A domestic system, not an imported CBTC line, cut the Koltsevaya Line interval from 113 seconds to 90 — the headway gain that resignaling is supposed to buy.</small>*



![Moscow's driver-operated network and its Big Circle Line, on domestic control.](/blog/img/moscow-metro-cbtc-fig2.svg)
*<small>Moscow's driver-operated network and its Big Circle Line, on domestic control.</small>*


## The Big Circle Line and the road to GoA 4

The Big Circle Line (Line 11) is the showpiece. Built in stages from the late 2010s, with its first section opening in 2018, it closed into a full loop on 1 March 2023 at roughly 70 kilometers and 31 stations, taking the record for the longest metro ring line in the world ([International Railway Journal](https://www.railjournal.com/passenger/metros/big-circle-line-completed-in-moscow/); [The Moscow Times](https://www.themoscowtimes.com/2023/03/02/in-photos-moscow-metro-inaugurates-worlds-longest-circle-line-a80376)). Today it runs with drivers, like the rest of the network.

The automation roadmap is explicit and worth reading precisely, because it is a clean example of a brownfield line moving toward unattended operation on a published schedule. Under the announced plan, an automated train enters regular service without passengers at the end of 2026, passenger testing begins in 2027, and the entire line fleet — 94 trains — converts to automated operation by 2030. The trains are being fitted with automatic train operation, computer vision, and LiDAR sensors in the cabs, and every station is receiving a track-intrusion detection system developed by a Moscow research center; the plan holds the 90-second peak interval rather than trading frequency for automation ([RailwayPro](https://www.railwaypro.com/wp/russia-is-set-to-have-its-first-fully-automated-metro-line/)).

The distinction between where the line is and where it is headed is exactly the one US agencies wrestle with, and it is worth being disciplined about it. The Big Circle Line today is GoA 2 with a target of GoA 4; it is not driverless now, and the presence of LiDAR and cameras in a staffed cab is the signature of a line being instrumented for a later transition rather than one already running unattended. The full framework for these grades — and why GoA 2 and GoA 4 are separated by an operational chasm, not a software toggle — is set out in [GoA 0-4 Explained: The Five Grades of Train Automation](/blog/goa-0-4-explained-grades-of-automation). Reaching GoA 4 on a line that carries passengers today is a harder problem than opening a greenfield driverless metro, because the platform-edge protection, obstacle detection, and control-center capability have to be added to a running railway.

## 2022 sanctions and the supplier-substitution response

The most transferable part of the Moscow story for a US audience is what happened to the supply base. The common assumption is that Western sanctions in 2022 stripped the metro of its signalling vendors overnight. The reality is more textured, and the texture is the useful part.

On the signalling side, the Western footprint had already been localized years earlier. Bombardier Transportation had run a Russian signalling joint venture since 1996 that delivered systems proven on the Moscow Central Circle and worked with NIIAS on train control for Moscow's rail rings; at the start of 2019 that venture was renamed 1520 Signal Ltd. and continued as a domestic company ([GlobeNewswire](https://www.globenewswire.com/news-release/2016/05/18/1506228/0/en/Bombardier-Celebrates-20th-Anniversary-of-Russian-Joint-Venture.html)). It was 1520 Group that then delivered the Koltsevaya Line upgrade in 2023. In other words, the entity that modernized the metro's signalling was, by the time sanctions arrived, already Russian.

Siemens was the more visible casualty, but its Moscow urban-rail role was concentrated in rolling stock rather than in the metro's running-line train control: a metro-car design partnership and the localization of the Lastochka regional train through a manufacturing joint venture. In May 2022 Siemens announced it would wind down its Russian business, taking roughly €600 million in impairments and charges, most of it against its rail (Mobility) division ([Railway Gazette International](https://www.railwaygazette.com/business/siemens-to-exit-the-russian-market/61608.article)). The metro absorbed the exit by continuing with domestic rolling stock from Metrovagonmash and by relying on NIIAS and 1520 for train control.

The engineering read here is neutral and specific. A network with a domestic signalling supplier and a domestic carbuilder weathered a vendor withdrawal that would have stalled a program dependent on a single foreign source. That is not an endorsement of any policy; it is the same structural argument this site makes about vendor lock-in, and it rhymes with how China built a domestic CBTC industry across dozens of cities rather than depending on imports, described in [Chinese Metro CBTC: How 50 Cities Built the World's Largest Automated Network](/blog/chinese-metro-cbtc-50-cities). For a US agency, the point is that supply-base concentration is a risk to be priced into a procurement, and a credible second source is worth paying for.

## The Moscow Central Circle: how far domestic automation has gone

The unmanned headlines that circulate about Moscow almost always come from the Moscow Central Circle, and keeping it separate from the metro is essential to reading the picture correctly. The Central Circle is a 54-kilometer orbital line operated by Russian Railways, not by the Moscow Metro company, using Lastochka electric multiple units and carrying on the order of half a million passengers a day. It has been NIIAS's testbed for domestic high-grade automation.

The progression is documented. Testing of GoA 3 operation began around 2020, with a driver removed from the cab but an attendant retained ([International Railway Journal](https://www.railjournal.com/signalling/emu-operates-at-goa-3-on-moscow-central-circle/)). By March 2023, a single operator remotely supervised two Lastochka trains at once, and NIIAS reported certification of its automatic train operation and obstacle-detection software, with the first unmanned Lastochka carrying passengers reported in 2024. This is the domestic capability that makes the Big Circle Line's 2030 GoA 4 target credible rather than aspirational — the obstacle detection, computer vision, and control-center software have been exercised on a live orbital railway next door.

The caveat is the same one that disciplines every driverless claim: the Central Circle is a separate railway, and its automation status does not transfer to the metro's 16 lines, which remain driver-operated. Treating the two as one system overstates how much of the Moscow network is unattended today, and understates how much deliberate, staged work the metro's own GoA 4 program still has ahead of it.

## What this means in practice

- **A 90-second headway is a signalling-plus-operations achievement, not a driverless one.** Moscow reaches metro capacity that US agencies chase while keeping drivers in the cab, which is a reminder that the throughput case for resignaling stands on its own, independent of automation ambitions.
- **The metro is GoA 2, not GoA 4.** The driver-operated network and the unmanned Moscow Central Circle are different railways; conflating them, or citing Moscow as a driverless benchmark, invites a false comparison in a US business case.
- **A domestic supply base absorbed a vendor withdrawal.** The signalling program continued after 2022 because it was already served by a domestic supplier (1520, formerly the Bombardier joint venture) and a domestic carbuilder — a concrete illustration of why supply-base concentration belongs in a US procurement risk register.
- **Brownfield GoA 4 is a staged, multi-year build.** The Big Circle Line's published path — no-passenger automation in 2026, passenger tests in 2027, full conversion by 2030 — is what it actually takes to bring an operating passenger line to unattended operation, and it is a more honest US template than any greenfield metro.
- **Legacy and modern can coexist.** Moscow runs Soviet ALS-ARS, a modern domestic system, and an automation program simultaneously, which is closer to the real US condition than a single-generation network and worth studying for that reason.

## Where to go next

This post is an 11-minute case study. The full treatment of international CBTC benchmarks and their relevance to US deployment decisions lives in Chapter 11 ("International Benchmarks with US Relevance") of *Communications-Based Train Control*, Volume 2: Operations, Deployment & Economics ([Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 11 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch11.pdf) for the comparative benchmark tables and the GoA framework.

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Deployment & Economics*. Independent. ISBN 979-8-258-54528-2. — [Chapter 11, "International Benchmarks with US Relevance"]
- Railway Technology. *Moscow Metro*. [railway-technology.com](https://www.railway-technology.com/projects/moscow-metro/)
- International Railway Journal. *Big Circle Line completed in Moscow*. [railjournal.com](https://www.railjournal.com/passenger/metros/big-circle-line-completed-in-moscow/)
- The Moscow Times. *In Photos: Moscow Metro Inaugurates 'World's Longest' Circle Line* (2 March 2023). [themoscowtimes.com](https://www.themoscowtimes.com/2023/03/02/in-photos-moscow-metro-inaugurates-worlds-longest-circle-line-a80376)
- RailwayPro. *Russia is set to have its first fully automated metro line*. [railwaypro.com](https://www.railwaypro.com/wp/russia-is-set-to-have-its-first-fully-automated-metro-line/)
- RollingStock. *Reducing intervals in the metro: the case of the Moscow Metro Circle Line*. [rollingstockworld.com](https://rollingstockworld.com/lrv/reducing-intervals-in-the-metro-the-case-of-the-moscow-metro-circle-line/)
- Railway Gazette International. *Siemens to exit the Russian market* (2022). [railwaygazette.com](https://www.railwaygazette.com/business/siemens-to-exit-the-russian-market/61608.article)
- GlobeNewswire / Bombardier Transportation. *Bombardier Celebrates 20th Anniversary of Russian Joint Venture* (2016). [globenewswire.com](https://www.globenewswire.com/news-release/2016/05/18/1506228/0/en/Bombardier-Celebrates-20th-Anniversary-of-Russian-Joint-Venture.html)
- International Railway Journal. *EMU operates at GoA 3 on Moscow Central Circle*. [railjournal.com](https://www.railjournal.com/signalling/emu-operates-at-goa-3-on-moscow-central-circle/)
- IEEE Xplore. *Development of the communications-based train control system for Moscow Metro*. [ieeexplore.ieee.org](https://ieeexplore.ieee.org/document/581399/)
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
