---
title: "Barcelona Metro L9 Driverless: Europe's Longest Automated Line and Its Megaproject Bill"
slug: barcelona-metro-l9-l10-driverless
description: "How the Barcelona Metro L9 driverless line — a Siemens Trainguard MT GoA 4 deployment threaded through single-bore tunnels 80 meters deep — became Europe's longest automated metro, and what US transit agencies can and cannot learn from its airport link, schedule, and tripled budget."
date: 2026-08-16
author: "Chunjun (Francisco) Wang"
category: international-benchmarks
tags: [CBTC, Barcelona Metro, L9, L10, driverless, GoA 4, Siemens Trainguard MT, international]
primary_keyword: "Barcelona Metro L9 driverless"
secondary_keywords: ["Siemens Trainguard MT Barcelona", "L9 Sud airport metro", "GoA 4 unattended metro", "Barcelona L9 L10 automated", "Europe's longest driverless metro line"]
related_chapters: [8, 11]
internal_links: ["/blog/goa-0-4-explained-grades-of-automation", "/blog/why-madrid-has-more-cbtc-lines-than-us", "/blog/driverless-operations-worldwide-goa-4"]
og_image: "/blog/img/barcelona-metro-l9-l10-driverless.png"
read_time: "11 min"
---

A traveler clearing customs at Barcelona-El Prat Airport follows the metro signs, steps into a high-speed lift, and drops the height of a 20-story building to a platform carved nearly 60 meters into the bedrock. The train that pulls in behind a wall of glass doors has no cab, no driver, and no attendant. This is the Barcelona Metro L9 driverless line — specifically its southern branch, L9 Sud — and it has been running unattended since it opened to the airport in 2016. For a US transit engineer, the interesting part is not that the train drives itself. Communications-Based Train Control (CBTC) at that grade of automation is a mature, purchasable product. The interesting part is everything around it: the deepest tunnels in the network, a budget that tripled, and a line that still does not connect to itself.

## Why the Barcelona Metro L9 driverless line belongs in a US benchmark set

American agencies reflexively benchmark against London, Paris, and their own peers, and those comparisons appear elsewhere on this site. Barcelona earns its place for two reasons that cut in opposite directions. First, lines L9 and L10 are a clean example of Grade of Automation 4 (GoA 4) — full unattended train operation — delivered at scale by a mainstream supplier on a mainstream signaling platform, evidence that the technology is neither exotic nor experimental. Second, the civil program wrapped around that signaling is a case study in how a megaproject's cost, schedule, and governance can overwhelm the technology entirely. A US program manager who studies only the automation misses the more expensive and more transferable lesson, which lives in the concrete, the depth, and the funding structure.

## The system: Siemens Trainguard MT, unattended from the platform up

The Generalitat de Catalunya's infrastructure arm awarded Siemens the train control contract in 2003, and the line entered service in December 2009 running Siemens Trainguard MT, a wireless CBTC system, at GoA 4 — driverless, unattended operation with no staff aboard the train. Central supervision runs on the Siemens VICOS operations control platform, which dispatches, monitors, and recovers trains across the network from a single control center. The rolling stock is a fleet of 50 steel-wheeled Alstom 9000 series trainsets, each five cars long, and every station is fitted with full-height platform screen doors so that the platform edge is physically sealed until a train has berthed and aligned.

None of that architecture would surprise an engineer who has read [GoA 0–4 Explained: The Five Grades of Train Automation](/blog/goa-0-4-explained-grades-of-automation). The CBTC continuously localizes each train independent of track circuits, exchanges movement authorities with wayside controllers, and computes the moving-block braking curve that lets one train safely follow another. Trains run at a maximum speed near 80 kilometers per hour and hold an average commercial speed around 37 kilometers per hour once station dwells and the deep-station lift transfers are counted. The network was dimensioned for a design capacity on the order of 330,000 passengers per day and roughly 165 million per year, and the moving-block CBTC is what makes that throughput achievable on a two-track railway without the driver-reaction margins that fixed-block signaling has to reserve.

What matters for a benchmark is that Barcelona bought this capability from the catalog in 2003 and has operated it in daily revenue service for more than 15 years. The signaling was never the hard part. The vital onboard controller, the train-to-wayside radio, the platform screen doors, and the central supervision were specified as one system for a line that would run unattended from its first revenue day, so the integration burden that dominates a US brownfield resignaling — grafting new CBTC onto legacy interlockings while trains keep running — never applied here. Barcelona bought a greenfield automation package and installed it as one.

## The tunnel: a single bore, two decks, and 80 meters of depth

The civil design is where Barcelona diverges sharply from anything a US agency has built. Rather than boring the conventional pair of parallel single-track tunnels, the L9 and L10 corridor was driven as a single large-diameter bore roughly 12 meters across — 11.95 meters, to be exact — with the two running tracks stacked one directly above the other on separate decks inside the same tube. The idea was to shrink the surface footprint through a dense, already-built city: one wide tunnel demands a narrower band of subsurface property rights and fewer street-level disruptions than two tunnels side by side.

That choice drove the line deep. Sections of the bore run as much as 80 meters below the surface, and some station platforms sit as deep as 60 meters, reached by banks of high-capacity lifts rather than the escalator cascades US riders expect. The result is the deepest line in the Barcelona network and one of the deepest metros in Europe. The engineering is genuinely impressive, but it is also a warning label. Deep stations mean expensive vertical circulation, complex ventilation and emergency egress, longer passenger access times, and a tunneling campaign whose cost is far less predictable than cut-and-cover or shallow bored construction. Depth bought a smaller surface footprint at the price of nearly everything else.


## The airport link: L9 Sud and the 2016 opening

The stretch that gives the line its international profile is L9 Sud, which opened on 12 February 2016 and connects both terminals of Barcelona-El Prat Airport to Zona Universitària on the western edge of the city. The branch adds close to 20 kilometers and 15 stations, all step-free, and the launch pushed roughly 30 kilometers of the network into GoA 4 unattended service in one stroke. An airport rider today boards a driverless train at Aeroport T1, and trains run on a headway near seven minutes with an end-to-end run of about 32 minutes.

For a US audience, the airport connection is the part that stings. Few American airport rail links run at anything close to GoA 4, and fewer still were delivered as a seamless extension of an existing automated line rather than as a bespoke people-mover procured separately. Barcelona treated the airport as one more set of stations on an already-driverless line, so the extension inherited the same Trainguard MT signaling, the same platform screen doors, and the same control center — no new safety case for a standalone system, no separate operator, no orphaned technology. That integration discipline, more than the airport glamour, is the thing worth copying.

## The megaproject bill: from €2.25 billion to €6.5 billion

The uncomfortable number is the budget. The L9/L10 program was originally costed at roughly €2.25 billion and expected to reach full completion around 2014. The estimate has since climbed to about €6.5 billion — nearly triple the original figure — with completion of the central section now pushed toward the end of this decade. The European Investment Bank has financed a large tranche of the work, on the order of €1.3 billion, which is one reason the project survived the overruns at all.

The overrun has a structural signature that US readers will recognize from their own megaprojects: deep and geologically variable tunneling, dozens of individually architected deep stations, and a construction program that outlasted multiple political and budget cycles. The most visible symptom is that the line still does not connect. Rather than one continuous route, L9 and L10 operate today as four disconnected segments — L9 Nord and L10 Nord in the north, L9 Sud and L10 Sud in the south — because the central trunk beneath the dense core of Barcelona, the most expensive segment to build, remains unfinished. The two lines were designed to share that central spine; until it is bored and fitted out, riders crossing the city must transfer to other lines.

Governance sits underneath the cost story. The infrastructure is owned by the Catalan regional government through its transport-infrastructure entity, while day-to-day operation is contracted to Transports Metropolitans de Barcelona (TMB). That split between a regional owner-funder and a metropolitan operator shaped how the project was financed, staged, and stalled — a reminder that in Spain, as [in the analysis of why Madrid Metro has more CBTC route than the entire United States](/blog/why-madrid-has-more-cbtc-lines-than-us), the institutional structure around the signaling often decides more than the signaling itself.

[FIGURE: Bar chart of the four in-service automated segments of Barcelona's L9/L10 by route length in kilometers, illustrating that the network runs as disconnected stubs rather than one continuous line. DATA: L9 Nord (2009-2010)=11.1, L10 Nord (2010)=5.6, L9 Sud (2016)=19.6, L10 Sud (2018-2021)=8.5. Caption: "Four disconnected GoA 4 segments opened across a dozen years; the central trunk that would join L9 and L10 through the city core is still unbuilt."]

[FIGURE: Schematic of the barcelona metro l9 l10 driverless network — automated lines with grade of automation and CBTC supplier. Source: Mermaid diagram. Caption: "Barcelona L9/L10: disconnected GoA 4 segments on Siemens Trainguard MT."]

## What actually transfers to a US agency

The value of Barcelona to an American engineer is in separating what generalizes from what does not. Three threads are worth pulling apart.

The signaling generalizes cleanly. Siemens Trainguard MT at GoA 4, with VICOS supervision and platform screen doors, has run driverless revenue service in Barcelona for more than 15 years, and comparable Siemens, Alstom, Thales, and Hitachi systems run unattended metros across Europe and Asia. The maturity question that dominates US procurement debates — is GoA 4 really ready — was answered in the field years ago, a point developed further in [Driverless Operations Worldwide: Who Is GoA 4, and Who Is Faking It](/blog/driverless-operations-worldwide-goa-4). By aggregate route length, L9 is frequently cited as Europe's longest driverless metro line, a claim Siemens made at the 2016 opening, though the qualifier matters: the length is a design and network figure, and the line runs today as separate segments rather than one continuous driverless sweep.

The civil and financial program does not generalize. The single-bore double-deck tunnel, the 80-meter depths, the tripled budget, and the decade of slippage are products of Barcelona's geology, urban density, and regional-versus-metropolitan funding structure. A US agency that cites Barcelona's automation as proof of feasibility is on solid ground; one that cites Barcelona's cost or schedule as a planning benchmark is comparing against a project whose cost drivers it does not share and cannot import.

The integration discipline is the part US agencies should actively study. Barcelona extended a homogeneous automated line to the airport without spinning up a separate system, a separate operator, or a separate safety case — the opposite of the fragmented, one-off approach that produces stranded people-movers and incompatible extensions. That discipline is a management choice, not a geographic accident, and it is available to any agency willing to hold the line on a single platform and a single operating concept.

## What this means in practice

- **The automation is settled; the civil works are the risk.** Barcelona proves GoA 4 CBTC is buyable and durable, but its tripled budget and unfinished trunk show that tunneling, depth, and station complexity — not signaling — decide whether a driverless metro is delivered on time and on cost.
- **Do not benchmark cost or schedule against L9/L10.** The single-bore double-deck design and 80-meter depths are specific to Barcelona's density and geology; importing its per-kilometer numbers into a US business case invites a false comparison.
- **Platform screen doors and deep-station access are part of the GoA 4 price.** Any US agency pursuing unattended operation inherits the full-height platform-door cost, and any deep alignment inherits expensive lifts, ventilation, and egress that lengthen passenger access time.
- **Integration discipline is copyable; geology is not.** Barcelona's airport extension reused one signaling platform, one control center, and one operator — a management choice a US agency can replicate to avoid stranded, standalone airport systems.
- **Watch the governance seam.** A split between a regional owner-funder and a metropolitan operator shaped how L9/L10 was staged and stalled; US agencies with analogous state-versus-local funding splits should plan for the same friction.

## Where to go next

This post is an 11-minute case study. The full treatment of international CBTC benchmarks and their relevance to US deployment decisions lives in Chapter 11 ("International Benchmarks with US Relevance") of *Communications-Based Train Control*, Volume 2: Operations, Deployment & Economics ([Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 11 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch11.pdf) for the comparative benchmark tables and the GoA 4 readiness checklist.

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Operations, Deployment & Economics*. Independent. ISBN 979-8-258-54528-2. — [Chapter 11, "International Benchmarks with US Relevance"]
- Siemens. *Europe's longest driverless subway in Barcelona goes into operation*. [press.siemens.com](https://press.siemens.com/global/en/pressrelease/europes-longest-driverless-subway-barcelona-goes-operation)
- Transports Metropolitans de Barcelona. *Automated metro lines — which lines*. [tmb.cat](https://www.tmb.cat/en/get-to-know-tmb/transport-network-improvements/automated-metro/which-lines)
- Railway Technology. *Barcelona Metro Line 9*. [railway-technology.com](https://www.railway-technology.com/projects/barcelona-metro-line-9/)
- Barcelona Metropolitan. *The big dig: Barcelona's metro line 9*. [barcelona-metropolitan.com](https://www.barcelona-metropolitan.com/features/the-big-dig-barcelonas-metro-line-9/)
- Catalan News. *Barcelona El Prat Airport to be connected by metro by early 2016*. [catalannews.com](https://www.catalannews.com/business/item/barcelona-el-prat-airport-to-be-connected-by-metro-by-early-2016)
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
