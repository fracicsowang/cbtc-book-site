---
title: "Tokyo Metro vs Beijing Metro: Two Approaches to High-Density Operation"
slug: tokyo-metro-vs-beijing-metro-high-density
description: "A practitioner read of two of the world's largest urban metro networks: Tokyo's incremental, ATC-anchored, low-CBTC modernization, and Beijing's CBTC-by-default expansion across 27 lines and roughly 800 route-kilometers. What this means for US transit agencies choosing between the two strategies."
date: 2026-06-08
author: "Chunjun (Francisco) Wang"
category: international-benchmarks
tags: [CBTC, Tokyo Metro, Beijing Subway, ATC, JR East, Mitsubishi, CRSC, international, comparative]
primary_keyword: "Tokyo Metro vs Beijing Metro CBTC"
secondary_keywords: ["Tokyo Metro signaling ATC", "Beijing Subway CBTC scale", "Asian metro CBTC comparison", "high-density metro signaling", "Tokyo train control modernization"]
related_chapters: [11, 16]
internal_links: ["/blog/chinese-metro-cbtc-50-cities", "/blog/london-underground-4lm-largest-cbtc-retrofit", "/blog/cbtc-vs-traditional-signaling-8-differences"]
og_image: "/blog/img/tokyo-metro-vs-beijing-metro-high-density.png"
read_time: "11 min"
---

In 2024, Tokyo Metro Co., Ltd., the larger of Tokyo's two principal underground operators, ran a network of 9 lines and approximately 195 route-kilometers carrying about 6.5 million daily passenger-trips at peak headways as tight as 110 seconds (33 trains per hour) on the Marunouchi and Tozai Lines. In the same year, the Beijing Subway operated 27 lines and approximately 800 route-kilometers carrying around 10 million daily trips, with Communications-Based Train Control (CBTC) deployed on most lines and several operating at Grade of Automation 4 (GoA 4). The two systems are similar in passenger volume and similar in operational ambition. They are profoundly different in how they have approached signaling modernization. Tokyo Metro has incrementally retained and refreshed Automatic Train Control (ATC) — the Japanese cab-signaling family that predates CBTC — with selective CBTC pilots; Beijing Subway has built CBTC into virtually every new line for more than a decade and pushed selected lines to GoA 4. Neither approach is universally correct. Both are reasonable responses to different institutional contexts. The comparison is informative for US transit agencies precisely because it shows that the same operational outcome — high-density urban metro at 30-plus trains per hour — is achievable through two very different signaling modernization paths.

This post is a practitioner's walk through how Tokyo and Beijing got to the same operational result on different technology stacks, and what that comparison means for the US.

## What Tokyo did

Tokyo's signaling history is long and conservative. The Marunouchi Line opened in 1954 with conventional fixed-block; the Hibiya Line opened in 1961; the Tozai Line in 1964. Each line received progressive ATC upgrades from the late 1960s onward, evolving through what is locally referred to as ATC-2, ATC-6, ATC-10, and similar designations — a family of cab-signaling and Automatic Train Protection (ATP) systems specific to Japanese metro practice. By the 2000s, most Tokyo Metro lines were operating on modern variants of ATC with continuous speed code transmission, ATO under driver supervision, and headways in the 110- to 150-second range during peak periods.

Tokyo Metro has piloted CBTC on selected lines. The Marunouchi Line received a CBTC overlay to support automated cleaning and storage operations and to enable selective driverless turnback procedures. JR East's Yamanome Line and several Toei Subway lines have evaluated CBTC on a phased basis. But the strategic posture of Tokyo Metro and JR East has not been a wholesale migration to CBTC. The reasoning is structural: ATC works, headway capacity has been sufficient against actual passenger demand, fleet refresh cycles have been long, and the institutional knowledge of ATC across operations and maintenance is deep.

The result is that Tokyo runs one of the highest-throughput metro networks in the world without a wholesale CBTC migration. Tokyo Metro's published reliability metrics — frequently cited in UITP comparative studies as best-in-class globally — reflect not the signaling technology specifically but the institutional discipline of preventive maintenance, station dwell management, and fleet operations. ATC is the platform; the operational excellence is procedural.

## What Beijing did

Beijing's signaling history is much shorter and substantially more aggressive. The original Beijing Subway Line 1 opened in 1969 with conventional fixed-block. Capacity expansion in the 1980s and 1990s was modest. The acceleration began in the mid-2000s, when the Beijing Subway entered a 15-year program of construction and modernization that, by 2024, had expanded the network from approximately 160 route-kilometers to approximately 800 route-kilometers across 27 lines.

The signaling baseline for this expansion was CBTC. From Line 4 (opened 2009 with Thales CBTC) and Line 5 (opened 2007 with Bombardier CBTC) onward, CBTC has been the default specification for new line construction in Beijing. By 2024, more than 24 of Beijing Subway's 27 lines operated on CBTC. The Yanfang Line (S1, opened December 2017) was the first commercial GoA 4 deployment on a Chinese metro line; subsequent lines including the Daxing Airport Express, Lines 19 and 11, and the Capital International Airport Express have operated at GoA 4 from inception. (For the broader Chinese metro CBTC pattern, see [Chinese Metro CBTC: 50 Cities, 11,000+ Route-km, in 25 Years](/blog/chinese-metro-cbtc-50-cities).)

The vendor landscape on Beijing Subway has shifted in parallel. Early CBTC contracts went to foreign vendors — Thales, Bombardier, Alstom, Siemens. From approximately 2012 onward, domestic Chinese vendors — China Railway Signal & Communication (CRSC), CASCO (Alstom-Shanghai joint venture), and Beijing Traffic Control Technology (TCT) — have taken progressively larger market share. By the late 2010s, domestic suppliers accounted for the majority of new CBTC line awards in Beijing. (See Chapter 16 of *Communications-Based Train Control* (Volume 2) for the comparative procurement analysis.)


<figure class="blog-figure blog-figure--table">
  <table class="blog-table">
    <thead>
      <tr><th>Attribute</th><th>Tokyo Metro</th><th>Beijing Subway</th></tr>
    </thead>
    <tbody>
      <tr><td>Route-kilometers</td><td>195</td><td>800</td></tr>
      <tr><td>Lines</td><td>9</td><td>27</td></tr>
      <tr><td>Peak Headway</td><td>110s (Marunouchi)</td><td>—</td></tr>
      <tr><td>Daily Passenger-Trips</td><td>6.5 million</td><td>10 million</td></tr>
      <tr><td>Signaling System</td><td>ATC with CBTC pilots</td><td>CBTC on most lines</td></tr>
      <tr><td>Grade of Automation</td><td>—</td><td>GoA 4 on several lines</td></tr>
    </tbody>
  </table>
  <figcaption class="blog-figure__caption">Same operational outcome at urban scale; profoundly different signaling modernization paths.</figcaption>
</figure>


## What the two systems share

Three things are worth saying about what Tokyo and Beijing have in common, before reading too much into their differences.

First, both achieve **comparable peak throughput** in operational practice — 30-plus trains per hour — although by different means. Tokyo's 33 tph on the Tozai Line is achieved through aggressive station dwell management and an ATC-based architecture; Beijing's 30-plus tph on Lines 4 and 14 is achieved through CBTC moving block. The end-state is similar. The path is different.

Second, both systems are **operationally professional, not merely technologically modern**. Reliability and on-time performance metrics on both networks reflect institutional discipline — preventive maintenance, fleet quality, station dwell management, dispatching practice. Neither system is a story about technology saving the operator. Both are stories about technology being deployed in support of an operator that already runs trains well.

Third, both systems have developed **strong domestic vendor capability** over multi-decade horizons. Tokyo's signaling vendors are predominantly Japanese (Mitsubishi, Hitachi Rail, Toshiba, Kyosan), with Western vendors playing supporting roles on specific projects. Beijing's signaling vendor base has shifted from Western (Thales, Bombardier, Alstom, Siemens) to predominantly domestic (CRSC, CASCO, TCT) over roughly fifteen years. In both cases, the operating agencies have an institutional preference for domestic suppliers for reasons that include lifecycle support, language and cultural fit, and national industrial policy.

## Where the two systems differ

The structural differences between Tokyo's and Beijing's modernization paths come down to four factors.

First, **growth rate**. Beijing added approximately 640 route-kilometers of new metro between 2005 and 2024 — averaging roughly 32 kilometers of new construction per year. Tokyo Metro and JR East together added a small fraction of that pace. CBTC was the natural platform for Beijing's greenfield construction because the green-field cost differential between CBTC and modernized fixed-block is small, the operational benefits are real, and the procurement scale supported the development of a domestic CBTC supplier industry. Tokyo's modernization has been overwhelmingly brownfield refresh; the cost-benefit calculus on a brownfield migration to CBTC, with deep ATC institutional knowledge already in place, is materially different.

Second, **regulatory framework**. China's coordinated national standards (GB/T codes administered by MOHURD/TC290), industry guidelines (T/CAMET series), and five-year-planning vehicles enabled rapid scale-up of CBTC across multiple cities. Japan's regulatory framework, while equally rigorous, is more conservative about technology change on operating revenue networks and has accommodated incremental ATC evolution as the default modernization path.

Third, **labor and operational structure**. Tokyo Metro and JR East have not pursued widespread driverless operation. The operating culture and labor agreements assume driver-supervised operation; ATC supports this efficiently, and there has been no strategic reason to push toward GoA 4. Beijing has selectively adopted GoA 4 on specific lines (Yanfang, Daxing Airport, Lines 11 and 19) where the labor framework and operational profile fit; on most lines it operates at GoA 2.

Fourth, **vendor industrial policy**. China's deliberate cultivation of a domestic CBTC industry — through joint ventures, technology transfer requirements, and procurement preference — produced a market structure in which domestic vendors could supply CBTC at scale. Japan's vendor ecosystem in metro signaling has been domestically dominated for decades, but on the ATC family rather than CBTC.

## Why this matters for US transit agencies

The Tokyo–Beijing contrast is informative for US transit agencies in three specific ways. (See [London Underground 4LM: The Largest CBTC Retrofit in the World](/blog/london-underground-4lm-largest-cbtc-retrofit) for the European brownfield reference point.)

First, **the operational outcome matters more than the technology label**. Tokyo's 33 tph on ATC and Beijing's 30-plus tph on CBTC produce similar passenger experience. US transit agencies should specify operational targets — peak headway, on-time performance, reliability, energy efficiency — and let the technology choice follow from the corridor profile and the institutional context.

Second, **brownfield modernization in a deep institutional knowledge environment can defensibly stay on the existing signaling family**. Tokyo Metro is the largest example. In the US context, this is the implicit logic behind the slower pace of CBTC migration on systems where the legacy automatic train control architecture (BART's original 1972 ATC, the Washington Metropolitan Area Transit Authority (WMATA) legacy system) has decades of institutional knowledge attached. The case for CBTC retrofit in those contexts is real but is not automatic; it depends on whether capacity is the binding constraint and on whether the lifecycle cost of refresh on the legacy platform exceeds the cost of migration. (See [CBTC vs Traditional Signaling: 8 Concrete Differences](/blog/cbtc-vs-traditional-signaling-8-differences) for the comparative framework.)

Third, **the Beijing pattern is not a US-transferable cost benchmark, but it is a transferable institutional pattern**. Chinese CBTC capital costs run $0.8 to $1.5 million per route-kilometer for greenfield deployment; US brownfield retrofit costs run $4 to $8 million per route-kilometer. The cost differential is structural and not closeable by US procurement reform. What is transferable is the institutional pattern: developing in-house owner engineering capability, standardizing CBTC specifications across multiple lines, and procuring at scale to encourage competition. Each is achievable in the US context.


![Two reasonable answers to the same problem. Each reflects the institutional context that produced it.](/blog/img/tokyo-metro-vs-beijing-metro-high-density-fig2.svg)
*<small>Two reasonable answers to the same problem. Each reflects the institutional context that produced it.</small>*


## What this means for US transit agencies

Five points follow from the Tokyo–Beijing contrast that any US transit agency with multi-line modernization ambitions should think about explicitly.

First, **specify operational outcomes, not technology platforms, in the strategic plan**. The board-level commitment should be to peak headway, on-time performance, energy efficiency, and rider experience. The technology selection should follow from the corridor analysis.

Second, **brownfield refresh on a legacy automatic train control platform is a defensible alternative to CBTC retrofit if institutional knowledge is deep and capacity is not the binding constraint**. Tokyo Metro is the international existence proof. In the US, this is the BART, WMATA, and Massachusetts Bay Transportation Authority (MBTA) decision space, not a settled question.

Third, **CBTC by default is the right answer for greenfield**. Beijing's twenty-year pattern, Singapore's GoA 4 portfolio, Paris Line 14, and Honolulu Skyline all support this. Any new US heavy-rail metro line should specify CBTC at GoA 2 or GoA 4 from inception unless a structural reason argues otherwise.

Fourth, **build the in-house engineering capability before committing to the technology decision**. Tokyo Metro, LTA, RATP, and Beijing Subway all retain large in-house signaling and operations teams. The technology decisions are made and supervised by people with decades of operational depth.

Fifth, **the Beijing scale-up is a procurement and industrial-policy story, not just a technology story**. US agencies that want to capture even a fraction of the cost reduction visible in Beijing should structure procurement to encourage multi-line standardization, multi-vendor competition, and vendor commitment to long-term US support — not chase any single architectural feature.

## Practical takeaways for US transit agencies

- Specify operational outcomes (peak headway, on-time performance, reliability, energy efficiency) in the strategic plan; let the technology selection follow.
- Treat brownfield refresh on a legacy ATC platform as a defensible alternative to CBTC retrofit in deep-institutional-knowledge contexts where capacity is not the binding constraint.
- Specify CBTC at GoA 2 or GoA 4 from inception for greenfield US heavy-rail metro projects.
- Retain in-house signaling and operations engineering capability of sufficient depth to make and supervise the technology decision independently of any vendor.
- Structure procurement at the network or program level, not the line level, to capture the cost-reduction effects of standardization, multi-vendor competition, and long-term support.

## Where to go next

This post is an 11-minute summary. The full treatment of the Tokyo–Beijing comparative and broader US-China comparative analysis lives in Chapter 11 ("International Benchmarks with US Relevance") and Chapter 16 ("US–China Comparative Perspectives") of *Communications-Based Train Control* (Volume 2). [Buy on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ). [Download Chapter 11 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch11.pdf).

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: US Deployment, Procurement & Future Directions*. Independent. ISBN 979-8-258-54295-3. — Chapter 11 (Section 11.3 on Beijing and Shanghai Metro) and Chapter 16 (Sections 16.1–16.3 on US-China comparative).
- Tokyo Metro Co., Ltd. *Annual Report and Operational Statistics*. [tokyometro.jp/en](https://www.tokyometro.jp/en)
- Beijing Subway. *Annual Operating Report*. [bjsubway.com](https://www.bjsubway.com)
- UITP (International Association of Public Transport). *Observatory of Automated Metros and World Metro Figures*. [uitp.org](https://www.uitp.org)
- Railway Gazette International. *Tokyo and Beijing Metro Reporting*. [railwaygazette.com](https://www.railwaygazette.com)
- International Railway Journal (IRJ). *Asian Metro Coverage*. [railjournal.com](https://www.railjournal.com)
- China Association of Metros (CAMET). *Industry Reports and T/CAMET Standards*. [camet.org.cn](https://www.camet.org.cn)
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
