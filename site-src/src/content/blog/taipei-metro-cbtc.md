---
title: "Taipei Metro CBTC: Three Driverless Generations on One Network"
slug: taipei-metro-cbtc
description: "How Taipei Metro CBTC spans three driverless generations — Matra VAL, Bombardier CITYFLO 650, and Ansaldo/Hitachi — and what its mid-life vendor swap teaches US brownfield resignaling."
date: 2026-08-24
author: "Chunjun (Francisco) Wang"
category: international-benchmarks
tags: [CBTC, Taipei Metro, Wenhu line, driverless, GoA 4, CITYFLO 650, VAL, international]
primary_keyword: "Taipei Metro CBTC"
secondary_keywords: ["Wenhu line driverless", "CITYFLO 650 Taipei", "Taipei Circular Line CBTC", "Matra VAL Taipei", "GoA 4 medium-capacity metro"]
related_chapters: [8, 11]
internal_links: ["/blog/val-lille-driverless-origin", "/blog/goa-0-4-explained-grades-of-automation", "/blog/dubai-metro-cbtc-driverless-network"]
og_image: "/blog/img/taipei-metro-cbtc.png"
read_time: "11 min"
---

On 28 March 1996, Taipei opened its first metro line and did something no American transit agency has done on any line in the three decades since: it carried paying passengers with no driver in the cab from the very first revenue train. That line, the rubber-tyred Muzha Line, ran on French Matra VAL technology whose driverless lineage traces back to Lille. The history of Taipei Metro CBTC is therefore not the story of one system but of three, laid down across a quarter century by three different suppliers, on a network that deliberately mixes fully unattended operation with conventional driver-operated service. For a US engineer weighing a resignaling program, Taipei is one of the most instructive case studies in the world, because it has already lived through the exact problem American agencies fear most: changing train-control vendors under a line that is already running driverless.

## Why a US engineer should read the Taipei signalling map

The instinct in the United States is to benchmark against London and Paris, and those comparisons are covered elsewhere on this site. Taipei earns a separate look for a specific reason. It is not a single-technology showcase; it is a working laboratory of automation choices made line by line. The medium-capacity Wenhu Line runs fully driverless. The four high-capacity trunk lines run with drivers. A newer orbital line, the Circular Line, was built greenfield as driverless from a third vendor. And in 2009 Taipei did something almost no other network has attempted at scale: it ripped out the proprietary automated control on a live driverless line and replaced it with a modern Communications-Based Train Control (CBTC) system while the old fleet kept carrying passengers. That transition, and the pain it caused, is the part every US resignaling program should study. Taken together, the network holds three separate GoA 4 CBTC pedigrees and a large GoA 2 trunk, which makes it one of the few metros where an engineer can compare greenfield automation, a mid-life vendor swap, and a deliberate decision to keep drivers, all inside a single fare system.

## The Muzha Line: driverless in 1996, before it was CBTC

Construction on the Muzha Line began in December 1988, and after a run of delays — lightning strikes, control-system faults, and vehicle fires during testing pushed the opening back by years — revenue service started on 28 March 1996 between Taipei Zoo and Zhongshan Junior High School. The rolling stock was the Matra VAL256, a rubber-tyred medium-capacity vehicle built by Matra, whose transit business later became part of Siemens, together with GEC-Alsthom. Some 51 two-car sets, 102 cars in total, were delivered between 1989 and 1993.

The important engineering point is that the Muzha Line was driverless but not CBTC. VAL — the acronym stands for a light automatic vehicle concept first proven on the Lille metro, the subject of [VAL and Lille: Where Driverless Metro Actually Started](/blog/val-lille-driverless-origin) — achieved Grade of Automation 4 (GoA 4), unattended train operation, using a proprietary fixed-block automated control system, not the moving-block radio CBTC that the industry standardized on later. Taipei in 1996 proved that a city with no prior heavy-rail tradition could operate a fully automated metro. It did so with a closed, single-supplier technology that would, a decade later, become a liability when the network needed to grow and the original vendor relationship had soured after a 1997 contract dispute.


## The Wenhu rebuild: changing train-control vendors under a live driverless line

By the mid-2000s Taipei wanted to extend the Muzha Line north through Neihu, and the closed VAL system could not simply be lengthened at will. The city contracted Bombardier — whose rail-signalling portfolio is now part of Alstom — to supply the Neihu extension, and the scope tells the whole story. Bombardier delivered 101 two-car Innovia APM 256 sets, 202 cars, and installed its CITYFLO 650 moving-block CBTC to replace the original fixed-block automated control across the entire line. Critically, the contract also required retrofitting the 102 existing Matra VAL256 cars so that old and new fleets could run under one CBTC on the same track.

The Neihu section opened on 4 July 2009, the day the Wenshan (former Muzha) section was cut over to CITYFLO 650, and the combined line was renamed the Wenhu Line on 8 October 2009. The cutover did not go smoothly. Within days the line suffered service-halting failures — on 10 July 2009 operations were suspended for roughly a full day — and the first three months brought repeated malfunctions as two fundamentally different vehicle designs were forced to interoperate under a single moving-block control system. Bringing the legacy VAL fleet fully back into CBTC-managed service was not a weekend task; the retrofit ran about 17 months, and all 51 legacy sets were not restored to service until December 2010.

Today the Wenhu Line is a mature GoA 4 operation: roughly 25.1 km, 24 stations, rubber-tyred, running unattended under CITYFLO 650 at up to about 70 km/h, and carrying on the order of 140,000 passengers on an average day as of 2022. It is also, by now, the only line anywhere still operating the VAL256 vehicle — a small monument to how long a mixed fleet can persist after a vendor transition.

## The high-capacity backbone: driver-operated by deliberate choice

It would be a mistake to read Taipei as an all-driverless network. The four steel-wheel trunk lines that carry most of the city's ridership — Tamsui-Xinyi, Songshan-Xindian, Zhonghe-Xinlu, and Bannan — are high-capacity metros run with a driver in the cab. The Tamsui section opened on 28 March 1997 and the Bannan Line on 24 December 1999, and both use six-car trains, formed as two three-car units, seating and standing far more passengers than the medium-capacity Wenhu vehicles at up to roughly 1,672 people per train. On the operator's own description, these trains are "operated by a train driver with the guidance of the signal system," which places them squarely at Grade of Automation 2 (GoA 2): automatic train operation with a driver who supervises, closes the doors, and initiates departure.

This is a design decision, not a shortfall. The distinction between GoA 2 and GoA 4 is treated in [GoA 0-4 Explained: The Five Grades of Train Automation](/blog/goa-0-4-explained-grades-of-automation), and Taipei made the split cleanly along capacity and civil-works lines. Full unattended operation demands full-height platform screen doors, comprehensive intrusion and obstacle detection, and a control center able to substitute for the driver's eyes at every train — capital that Taipei chose to build into its rubber-tyred and orbital lines while retrofitting only partial platform-edge doors on the high-capacity trunk. The Bannan Line still achieves tight performance within GoA 2, running minimum headways near 135 seconds and moving up to about 39,000 passengers per hour per direction at peak. Automation grade and throughput are not the same axis, and Taipei is a clean demonstration of that. Keeping drivers on the trunk lines also preserved a simpler safety case and avoided fitting full-height platform doors along more than 50 km of the busiest, most constrained stations in the network — a trade every US agency implicitly makes when it scopes a resignaling as GoA 2 rather than GoA 4.

## The Circular Line: a greenfield GoA 4 contract from Ansaldo and Hitachi

Taipei's third automation generation arrived from a third supplier. In April 2009 the New Taipei City Department of Rapid Transit Systems (DORTS) awarded a turnkey contract worth about €334 million for the first phase of the orbital Circular Line to a consortium of Ansaldo STS and AnsaldoBreda, both now part of Hitachi Rail. Ansaldo STS took roughly €220 million to supply the electrical and mechanical systems, including the CBTC radio signalling and driverless technology, while AnsaldoBreda supplied 17 four-car trains for about €114 million, built in Reggio Calabria and given final assembly in Taiwan.

Phase one entered service on 31 January 2020: about 15.4 km from Dapinglin to New Taipei Industrial Park, with 14 stations — 13 elevated and one underground. It runs GoA 4 CBTC from the first day, with trains carrying up to about 650 passengers at up to 80 km/h, and it is operated by New Taipei Metro Corporation rather than the Taipei Rapid Transit Corporation that runs the older lines. In other words, Taipei's newest driverless line is a clean greenfield GoA 4 deployment of the kind examined in [Dubai Metro: How CBTC Runs the World's Longest Driverless Network](/blog/dubai-metro-cbtc-driverless-network) — single authority, single turnkey contract, no legacy signalling to overlay — and it reached unattended service without the integration drama that defined the Wenhu rebuild 11 years earlier.


![Two of Taipei's lines run fully driverless (GoA 4, about 40 route-km combined) alongside a larger driver-operated high-capacity backbone (GoA 2).](/blog/img/taipei-metro-cbtc-fig1.png)
*<small>Two of Taipei's lines run fully driverless (GoA 4, about 40 route-km combined) alongside a larger driver-operated high-capacity backbone (GoA 2).</small>*



![Taipei runs two driverless GoA 4 lines beside a driver-operated high-capacity backbone.](/blog/img/taipei-metro-cbtc-fig2.svg)
*<small>Taipei runs two driverless GoA 4 lines beside a driver-operated high-capacity backbone.</small>*


## What the Taipei Metro CBTC record teaches US brownfield resignaling

The single most transferable lesson is the Wenhu conversion, because it is the closest international analogue to what a US agency faces when it changes train-control vendors on an operating line. New York City Transit, San Francisco's BART, and the Washington Metropolitan Area Transit Authority are all resignaling routes that must keep carrying passengers throughout, often with mixed fleets during multi-year transitions. Taipei ran that experiment in 2009 and paid the tuition: swapping a proprietary fixed-block automated system for a modern moving-block CBTC, while forcing two incompatible vehicle generations to interoperate under it, produced months of instability and a fleet retrofit that stretched beyond a year.

None of that was a failure of CBTC as a technology. The Wenhu Line has since run reliably for more than 15 years, and the greenfield Circular Line reached GoA 4 on schedule. The risk concentrated exactly where it concentrates in every US brownfield program — at the seams: the interface between old and new rolling stock, the cutover from legacy control to CBTC on a revenue line, and the re-certification of a safety case that now has to cover a mixed fleet. Taipei also underlines a point US agencies often blur: driverless is a decision made per line against capacity and civil constraints, not a single network-wide switch. A metropolitan system can rationally run GoA 4 on some lines and GoA 2 on others, and Taipei has done exactly that for more than two decades.

## What this means in practice

- **The vendor transition is the hard part, not the CBTC.** Taipei's 2009 Wenhu cutover shows that mature moving-block CBTC is buyable and reliable in steady state; the schedule and reliability risk lives in the mixed-fleet interoperability and the live-line cutover, which is precisely the US brownfield condition.
- **Budget for the mixed-fleet retrofit explicitly.** Taipei needed roughly 17 months to bring its legacy VAL fleet fully back under the new CBTC. A US resignaling business case that assumes a clean, fast fleet transition is understating the hardest line item.
- **Driverless is not free, and Taipei priced it honestly.** GoA 4 on the Wenhu and Circular lines carries full platform screen doors and detection; the high-capacity trunk lines stayed GoA 2 with only partial platform-edge doors. The automation grade followed the capital the network was willing to spend per line.
- **Automation grade and throughput are separate axes.** The driver-operated Bannan Line moves up to about 39,000 passengers per hour per direction at roughly 135-second headways, a reminder that GoA 4 is chosen for labor and operating-model reasons, not because GoA 2 cannot deliver capacity.
- **Greenfield still beats brownfield.** The Circular Line reached GoA 4 with far less trouble than the Wenhu rebuild, for the same structural reasons a new US line is easier than a resignaling — one authority, one turnkey contract, and no legacy control to overlay.

## Where to go next

This post is an 11-minute case study. The full treatment of international CBTC benchmarks and their relevance to US deployment and resignaling decisions lives in Chapter 11 ("International Benchmarks with US Relevance") of *Communications-Based Train Control*, Volume 2: Operations, Deployment & Economics ([Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 11 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch11.pdf) for the comparative benchmark tables.

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Deployment & Economics*. Independent. ISBN 979-8-258-54528-2. — [Chapter 11, "International Benchmarks with US Relevance"]
- Taipei Rapid Transit Corporation. *Metro Service — Network and Systems*. [english.metro.taipei](https://english.metro.taipei/cp.aspx?n=E6F97A6FF9935E98&s=46C82585DF5AD507)
- Department of Rapid Transit Systems, Taipei City Government. *Network — Completed MRT Routes*. [english.dorts.gov.taipei](https://english.dorts.gov.taipei/News_Content.aspx?n=F5C47899DE0D7088&s=761F1E2163C50391)
- Railway Gazette International. *Taipei Circular Line driverless train unveiled*. [railwaygazette.com](https://www.railwaygazette.com/taipei-circular-line-driverless-train-unveiled/43073.article)
- International Railway Journal. *Taipei launches fully-automated metro line*. [railjournal.com](https://www.railjournal.com/passenger/metros/taipei-launches-fully-automated-metro-line/)
- Hitachi Rail STS (formerly Ansaldo STS). *Ansaldo STS receives EUR 220 million order for Taipei Metro*. [sts.hitachirail.com](http://sts.hitachirail.com/en/press-releases/ansaldo-sts-receives-eur-220-million-order-taipei-metro)
- Hitachi Rail. *Taipei — driverless metro (Circular Line)*. [hitachirail.com](https://www.hitachirail.com/products-and-solutions/rolling-stock/driverless-trains/taipei/)
- Railway Gazette International. *Taipei Circular Line kicks off*. [railwaygazette.com](https://www.railwaygazette.com/taipei-circular-line-kicks-off/33882.article)
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
