---
title: "Milan Metro Driverless: The M5 and M4, Two GoA 4 Lines a Decade Apart"
slug: milan-metro-m4-m5-driverless
description: "How the Milan Metro driverless network — the M5 Lilla line of 2013 and the M4 Blue line to Linate airport of 2024 — built two GoA 4 systems a decade apart on one Ansaldo STS to Hitachi Rail CBTC lineage, and what US transit agencies should take from ATM's operator model."
date: 2026-08-25
author: "Chunjun (Francisco) Wang"
category: international-benchmarks
tags: [CBTC, Milan Metro, M4, M5, driverless, GoA 4, Hitachi Rail, Ansaldo STS, ATM]
primary_keyword: "Milan Metro driverless"
secondary_keywords: ["Milan M5 driverless metro", "Milan M4 metro Hitachi Rail", "Ansaldo STS CBTC", "ATM Milano metro operator", "GoA 4 metro Milan"]
related_chapters: [8, 11]
internal_links: ["/blog/copenhagen-metro-driverless", "/blog/driverless-operations-worldwide-goa-4", "/blog/goa-0-4-explained-grades-of-automation"]
og_image: "/blog/img/milan-metro-m4-m5-driverless.png"
read_time: "11 min"
---

On 10 February 2013 a four-car train pulled out of Bignami station on the northern edge of Milan with no driver and no cab, and Italy's financial capital joined the small club of cities running unattended metros. Eleven years later, on 12 October 2024, a second fully automated line reached all the way across the city to Linate airport. The Milan Metro driverless network now spans two lines built a decade apart, on one signaling lineage, run by an operator that has quietly become one of Europe's most experienced runners of Grade of Automation 4 (GoA 4) railways.

## Why Milan belongs in a US engineer's benchmark set

American agencies tend to benchmark against London, Paris, and their own peers, and those comparisons live elsewhere on this site. Milan earns a place for a narrower reason. It is one of the few cities that built two separate driverless lines in two different decades, using the same underlying Communications-Based Train Control (CBTC) technology family and the same national supplier, while a single municipal operator absorbed the operating know-how and then exported it abroad. That combination lets an engineer separate three things that US projects usually tangle together: the maturity of the technology, the difficulty of the civil and integration work, and the competence of the entity that runs the railway after the ribbon is cut. Milan is a useful case precisely because it shows those three variables moving independently.

## The M5 Lilla line: Milan's first driverless metro

The M5, branded the Lilla (lilac) line, was Milan's first driverless service. The opening section between Bignami and Zara entered revenue service on 10 February 2013; the Zara to Garibaldi FS segment followed on 1 March 2014; and the westward extension to San Siro Stadio opened on 29 April 2015, bringing the line to roughly 12.8 kilometers and 19 stations. From the first day it ran at GoA 4 — unattended train operation, no driver and no attendant in the leading car — with full-height platform screen doors at every station to enforce the platform-edge separation that unattended running requires.

The signaling and automation came from Ansaldo STS, Italy's domestic CBTC supplier, and Railway Technology notes that the M5 system was based on the automation Ansaldo STS had already put into service on the Copenhagen Metro. That detail matters more than it first appears, and it recurs later in this piece. The rolling stock came from AnsaldoBreda, the Italian trainbuilder that later became part of Hitachi Rail, in the four-car articulated configuration marketed as the Meneghino. The CBTC continuously determines each train's position, exchanges data with wayside controllers, and computes the moving-block braking authority that supports a design headway near 90 seconds, with day-to-day operation running at a longer interval.

The M5 was delivered not by the city directly but through a concession company, Metro 5 SpA — a joint venture whose members included Ansaldo STS, the contractor Astaldi, the operator ATM, Torno, Alstom, and AnsaldoBreda. This public-private structure, with the extension to San Siro reported at roughly €872 million and part-financed by the national infrastructure ministry and the municipality, is a different procurement animal from the design-bid-build capital programs that dominate US transit. It bundled build, systems, and a long operating concession into one commercial vehicle, which is one reason the line was delivered and automated on a schedule an American brownfield project rarely matches.


## The M4 Blue line: a turnkey airport connection

The M4, the Blue line, is the newer and more instructive of the two. It opened in phases: the first segment from Dateo to Linate airport entered service on 26 November 2022; the extension to San Babila in the historic center followed on 4 July 2023; and the full line to the San Cristoforo FS terminus in the southwest opened on 12 October 2024, completing a 15.2-kilometer, 21-station, entirely underground crossing of the city. The airport connection is the headline: Webuild, which led the construction consortium with ATM, reports the run from Linate to the San Babila core taking about 12 minutes, a figure any US airport-rail planner will read with some envy.

Where the M5 spread its systems across a consortium, the M4 concentrated them. Hitachi Rail delivered the line as an integrated turnkey systems package — the driverless trains, the CBTC signaling, the third rail, the telecommunications, the platform screen doors, the SCADA supervisory system, the depot equipment, and the fare and access-control systems. Hitachi Rail contracted 47 four-car driverless trains, built largely at its Reggio Calabria plant in southern Italy, running at GoA 4 on 750-volt DC third rail. The whole line was costed at roughly €1.7 billion and financed through a mix of national grant, municipal funds, and private investment under an ATM-Webuild structure.

The engineering lesson in the M4 is the value of a single systems integrator owning the interfaces. On a brownfield US resignaling, the boundaries between the signaling supplier, the car builder, the platform-door vendor, and the communications contractor are where schedule and cost leak away, because each interface is a contract, a specification argument, and a finger-pointing opportunity. Milan's M4 internalized most of those boundaries inside one supplier's scope, which is the same structural advantage a greenfield turnkey buys — discussed in the Dubai and Copenhagen cases elsewhere on this site — applied here to a dense, fully underground, city-center line.

## Two Milan Metro driverless lines, one CBTC lineage

The most useful thing about studying the Milan Metro driverless lines together is that they trace to one signaling bloodline. The M5 was signaled by Ansaldo STS. Hitachi acquired a controlling stake in Ansaldo STS in 2015 and folded it into Hitachi Rail, so when the same company delivered the M4's CBTC a decade later, it was the corporate and technical descendant of the M5 supplier. The trains follow the same thread: AnsaldoBreda built the M5 fleet and became part of Hitachi Rail, which then built the M4 fleet at the same southern-Italian manufacturing base.

For a US engineer, this continuity is the clean part of the Milan story. It shows a national supplier taking a CBTC platform proven on one driverless line and, through a decade of consolidation, carrying it onto a second and larger one. The functional architecture underneath is the same IEEE 1474-shaped stack described in [GoA 0-4 Explained: The Five Grades of Train Automation](/blog/goa-0-4-explained-grades-of-automation) — vital onboard processor, radio, wayside zone controllers, central automatic train supervision, moving-block authority. What changed between 2013 and 2024 was not the concept of CBTC but the packaging around it: from a multi-party concession consortium on the M5 to a single-integrator turnkey on the M4. The technology was mature in both eras; the commercial and integration model is where the two lines actually differ.

## The operator model: ATM as an exportable competency

The part of the Milan story most relevant to the United States is not the signaling at all. It is the operator. Azienda Trasporti Milanesi (ATM) runs the entire Milan network — five lines, two of them driverless — and in the process has built a discipline for operating GoA 4 that it now sells abroad. Through its subsidiary Metro Service A/S, ATM has operated the driverless Copenhagen Metro since 2008, including the M1 and M2 lines, the 15.5-kilometer M3 Cityringen ring that opened in 2019, and the later M4 branch. Through THEMA SA, a joint venture with the French group Egis, ATM has run the first driverless metro line in Greece, in Thessaloniki, since 2024 under an 11-year contract reported at around €250 million.

There is a neat symmetry here worth noting. ATM had been operating the driverless Copenhagen Metro since 2008, and the M5's Ansaldo STS automation was itself based on the Copenhagen system — so Milan's first driverless line borrowed both a proven technology reference and, in its operator, an organization that had already learned to run unattended trains abroad before it ran them at home.

This is the point US agencies most often miss. Unattended operation removes the driver from the train; it does not remove people from the railway, and it demands an operating organization fluent in a control-center discipline that most American heavy-rail agencies have never had to build. The reference case for how ATM developed that fluency is Copenhagen, examined in [Copenhagen Metro: Two Decades of Driverless That Milan's Operator Runs](/blog/copenhagen-metro-driverless), and the broader question of who genuinely operates at GoA 4 is treated in [Driverless Operations Worldwide: Who Is GoA 4, and Who Is Faking It](/blog/driverless-operations-worldwide-goa-4). Milan sits firmly in the genuine column on both counts — it operates two driverless lines at home and exports the capability to two other countries. That the same operator built the competency at home and then won competitive contracts to run other cities' automated metros is the exportable asset, and it is one a US region cannot buy along with a CBTC contract. It has to be grown.

## What a US agency can and cannot copy

Milan is not a template an American agency can lift wholesale, and the reasons are the familiar ones. The M4's single-integrator turnkey and the M5's concession consortium both depend on procurement structures that US federal and state rules, labor agreements, and Buy America / Build America, Buy America (BABA) content requirements shape differently. A domestic project cannot simply hand one supplier the trains, signaling, doors, telecoms, and fare systems and expect the same interface economics, because the contracting environment fragments scope by design. Nor can a US region import ATM's fifteen-plus years of GoA 4 operating experience by writing it into a specification.

What does transfer is the analytical separation Milan makes visible. The M5 and M4 demonstrate that the CBTC technology for unattended operation has been buyable and mature for well over a decade, from a supplier that carried one platform across two projects. The M4 shows what concentrating systems integration inside a single scope does for interface risk. And the operator story shows that running a driverless railway is a distinct competency, separate from procuring one, that has to be built and staffed rather than purchased. A US agency weighing GoA 4 should read those three findings as three separate line items in its business case, not as one bundled promise.

[FIGURE: Grouped bar chart comparing Milan's two driverless lines on route length and station count. DATA: M5 Lilla (complete 2015) route-km = 12.8, stations = 19; M4 Blue (complete 2024) route-km = 15.2, stations = 21. Caption: "Milan's two GoA 4 lines, built a decade apart on one Ansaldo STS to Hitachi Rail CBTC lineage: about 28 route-km and 40 stations of driverless metro under a single operator."]

[FIGURE: Schematic of the milan metro m4 m5 driverless network — automated lines with grade of automation and CBTC supplier. Source: Mermaid diagram. Caption: "Milan's two GoA 4 lines on one Ansaldo STS to Hitachi Rail lineage."]

## What this means in practice

- **Separate the three variables.** Milan lets an engineer read technology maturity, integration difficulty, and operator competence as independent factors. US business cases that treat GoA 4 as one bundled decision lose that clarity.
- **Single-integrator scope buys interface economics.** The M4's turnkey delivery — trains, CBTC, third rail, platform doors, telecoms, SCADA, depot, and fare systems from one supplier — internalized the boundaries that leak schedule and cost on split US contracts. The structural benefit is real even where BABA rules make it hard to replicate.
- **The operator is not in the CBTC contract.** ATM's fifteen-plus years running driverless metros at home and abroad is a grown asset, not a purchased one. A US region adopting GoA 4 must plan to build a control-center operating discipline it likely does not yet have.
- **One vendor lineage lowers second-project risk.** The M4 reused a CBTC family proven on the M5, from the supplier that absorbed the original vendor. Continuity of platform and supplier across a decade is a risk reducer worth valuing in procurement.
- **Airport rail is a schedule prize, not a technology one.** The 12-minute Linate-to-center run is a civil-alignment and operating-model outcome. The driverless technology enabling it was already ordinary by 2022.

## Where to go next

This post is an 11-minute case study. The full treatment of international CBTC benchmarks and their relevance to US deployment decisions lives in Chapter 11 ("International Benchmarks with US Relevance") of *Communications-Based Train Control*, Volume 2: Operations, Deployment & Economics ([Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 11 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch11.pdf) for the comparative benchmark tables.

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Deployment & Economics*. Independent. ISBN 979-8-258-54528-2. — [Chapter 11, "International Benchmarks with US Relevance"]
- International Railway Journal. *Milan opens first driverless metro line*. [railjournal.com](https://www.railjournal.com/passenger/metros/milan-opens-first-driverless-metro-line/)
- Railway Technology. *Milan Metro Line 5 Extension*. [railway-technology.com](https://www.railway-technology.com/projects/milan-metro-line-5/)
- Hitachi Rail. *Milan Line 4 — driverless trains*. [hitachirail.com](https://www.hitachirail.com/products-and-solutions/rolling-stock/driverless-trains/milan-line-4/)
- Urban Transport Magazine. *Driverless automatic operation: extension of Milan's M4 metro*. [urban-transport-magazine.com](https://www.urban-transport-magazine.com/en/driverless-automatic-operation-extension-of-milans-m4-metro/)
- Webuild Group. *From Linate Airport to downtown Milan in 12 minutes on the new M4 metro line*. [webuildgroup.com](https://www.webuildgroup.com/en/media/press-notes/webuild-m4-metro-line-san-babila-tricolore-opening-linate-airport-downtown-milan-12-minutes/)
- ATM International. *Public transport and automated metro operations*. [atminternational.com](https://atminternational.com/)
- Egis Group. *First automated metro in Greece run by ATM Milan and Egis (Thessaloniki)*. [egis-group.com](https://www.egis-group.com/all-news/first-automated-metro-in-greece-run-by-atm-milan-and-egis)
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
