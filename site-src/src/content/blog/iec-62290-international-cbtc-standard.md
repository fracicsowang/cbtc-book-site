---
title: "IEC 62290: The International Counterpart to IEEE 1474"
slug: iec-62290-international-cbtc-standard
description: "IEC 62290 is the international CBTC framework that defines functional architecture and the Grades of Automation. This post explains where it overlaps with IEEE 1474, where it diverges, and why US procurements increasingly cite both."
date: 2026-05-20
author: "Chunjun (Francisco) Wang"
category: standards
tags: [IEC 62290, CBTC standards, GoA, Grades of Automation, IEC 62290-1, IEC 62290-2]
primary_keyword: "IEC 62290"
secondary_keywords: ["IEC 62290 GoA framework", "IEEE 1474 vs IEC 62290", "international CBTC standard", "Grades of Automation GoA", "IEC 62290-1 functional architecture"]
related_chapters: [2, 8]
internal_links: ["/blog/ieee-1474-1-performance-based-standard", "/blog/goa-0-4-explained-grades-of-automation", "/blog/atp-ato-ats-triad"]
og_image: "/blog/img/iec-62290-international-cbtc-standard.png"
read_time: "9 min"
---

When the Régie Autonome des Transports Parisiens opened Métro Line 14 in October 1998 as the world's first modern unattended driverless metro, the procurement language Île-de-France Mobilités used was not IEEE 1474. It was IEC 62290. Twenty-five years later, when the Singapore Land Transport Authority procures a new line, when Madrid Metro retrofits an existing one, and when an increasing number of US transit agencies write their CBTC specifications, IEC 62290 is in the document — sometimes alongside IEEE 1474, sometimes alone. Understanding where IEC 62290 fits, what it actually requires, and why its Grades of Automation framework has become the global lingua franca for automation level matters for any US engineer or procurement manager whose vendor list includes Alstom, Siemens, Thales, or Hitachi.

## Why this matters for procurement

IEEE 1474.1 is the dominant US performance specification, but it says relatively little about functional architecture and almost nothing about automation level. IEC 62290 fills exactly those gaps. A US procurement that cites IEEE 1474 alone leaves the supplier to interpret the agency's automation intent — usually in the supplier's commercial favor. A procurement that cites both standards in their proper roles closes that ambiguity. This post is for the consulting engineer drafting a scope of work, the agency program manager evaluating vendor proposals, and the Federal Transit Administration reviewer who needs to read both frameworks fluently.

## IEC 62290-1: functional architecture and system scope

The first part of the IEC 62290 series, first published in 2007 and updated since, establishes the functional requirements, system architecture, and terminology for urban guided transport management and command-control systems. Where IEEE 1474.1 is performance-oriented (headway, availability, response time, accuracy), IEC 62290-1 is structurally oriented. It defines the CBTC system boundary in terms of three functional layers and forces a procurement to be explicit about each.

The three layers are the Automatic Train Protection layer (the safety-critical core), the Automatic Train Operation layer (the non-safety-critical driving automation), and the Automatic Train Supervision layer (the central operations control). (For the practical implications of this triad, see [ATP, ATO, ATS: The Three-Layer Triad of Modern Train Control](/blog/atp-ato-ats-triad).)

The standard establishes Safety Integrity Level requirements aligned with IEC 61508 functional safety. The ATP layer is required to be SIL 3 or SIL 4; in practice, virtually every modern deployment implements ATP at SIL 4. The ATO and ATS layers are typically SIL 0 to SIL 2, because their failures cannot directly cause an unsafe condition — ATP catches every safety violation. This top-down decomposition is what allows a procurement to specify "ATP at SIL 4, ATO at SIL 1" and have a global vendor understand exactly what is being asked for.

## The Grades of Automation framework

IEC 62290-1's most influential contribution is the Grades of Automation (GoA) classification. This is the framework — five tiers, GoA 0 through GoA 4 — that defines the responsibility allocation between driver, attendant, automation system, and central control across critical operational functions. The framework is now the international standard vocabulary; European, Asian, and Australian agencies use it without ambiguity, and US procurements have been moving toward it.

Briefly, the levels are:

- GoA 0: on-sight manual operation; no Automatic Train Protection.
- GoA 1: manual driving with ATP supervision; the driver drives, ATP enforces.
- GoA 2: Semi-Automatic Train Operation; ATO drives under ATP supervision, the driver supervises and handles exceptions. This is the dominant US deployment.
- GoA 3: Driverless Train Operation; no driver in the cab, but an attendant onboard for passenger service and emergency response.
- GoA 4: Unattended Train Operation; no staff onboard at all. Examples include JFK AirTrain, Honolulu Skyline, and Paris Métro Lines 1 and 14.

A critical point that procurement documents routinely get wrong: GoA does not measure safety. A GoA 4 system with SIL 4 ATP is no less safe than a GoA 2 system with SIL 4 ATP. GoA describes the staffing and human-intervention model, not the hazard rate. Conflating the two leads to confused safety arguments and confused labor negotiations. (For the prerequisites that take an agency from GoA 2 to GoA 4, see [From GoA 2 to GoA 4: Prerequisites Most Agencies Underestimate](/blog/goa-2-to-goa-4-prerequisites).)

![IEC 62290-1's responsibility matrix is the international standard for specifying automation level.](/figures/fig_08_01_goa_responsibility_matrix.png)
*<small>IEC 62290-1's responsibility matrix is the international standard for specifying automation level.</small>*

## IEC 62290-2 and the onboard / wayside split

IEC 62290-2, published in phases starting in 2015, decomposes the functional requirements into onboard subsystems (centered on the Onboard Controller, equivalent to the VOBC in US terminology) and wayside subsystems (centered on the Automatic Train Control Centre, equivalent to the Zone Controller in US terminology). This decomposition is the foundation for the safety case structure: each side must achieve SIL 4 independently, and the interface between them — the Data Communication System carrying Movement Authority and position reports — must satisfy specific timing and availability requirements (typically sub-second latency, 99.99 percent or better availability).

This is also where IEC 62290-2 anchors the train-side and wayside-side architecture decisions that the safety assessor will examine. Vendors typically segregate vital from non-vital logic at this layer, using architectural patterns and tool qualification appropriate to the SIL target.

## How IEC 62290 differs from IEEE 1474

The two standards address overlapping but distinct concerns. The complementary relationship is best understood as follows:

IEEE 1474 says: "the system must achieve 90-second headway with 99.5 percent availability, position to within one meter, respond within two seconds." It is a performance budget.

IEC 62290 says: "the system must execute ATP at SIL 4 and support GoA 2 (or 3, or 4) with the responsibility allocation defined in IEC 62290-1 Table 1." It is an architecture and automation specification.

Both are needed during procurement. An RFP that cites only IEEE 1474 is silent on automation level; an RFP that cites only IEC 62290 is silent on the headway and availability the agency expects. Mature US procurements in the 2020s — including modernization specifications from BART, MTA, and SFMTA — cite both, with each playing its proper role.

The other major divergence is in regulatory anchoring. IEEE 1474 is anchored in the Federal Transit Administration's safety assurance practices and is referenced in FTA guidance. IEC 62290 is anchored in CENELEC notified-body certification practice in Europe and is referenced in the TSI (Technical Specifications for Interoperability) for European urban rail. In the US, IEC 62290 is voluntary; in much of the world, it is effectively mandatory.

## Why US agencies increasingly cite IEC 62290

Three forces are driving IEC 62290 adoption in US specifications.

First, the vendor base is global. Siemens Trainguard MT, Alstom Urbalis (including the legacy Bombardier CITYFLO 650 platform), Thales SelTrac (now part of Hitachi Rail), and Hitachi Rail STS all develop their CBTC products to IEC 62290 because the European, Singapore, and Middle East markets demand it. Specifying IEC 62290 in a US RFP aligns the agency's request with what the global supplier base actually builds.

Second, the GoA framework is unambiguous. "Driverless" and "automatic" mean different things to different stakeholders; "GoA 3" means exactly one thing. As US agencies engage labor unions, boards, and the public on automation strategy, the GoA vocabulary prevents the kind of misunderstanding that derails projects.

Third, the international precedent is now extensive. As of 2025, GoA 4 is operating on more than 70 lines in over 40 cities. When a US agency cites IEC 62290 GoA 4 in its specification, it is referencing an installed base of engineering experience that any global vendor can match.

## What IEC 62290 does not cover

IEC 62290 is not a complete specification on its own. Among the dimensions it does not address in depth:

- Specific performance thresholds (headway numbers, availability percentages). These are agency-specific and typically anchored to IEEE 1474.1 in US procurements.
- Cybersecurity. IEC 62443 is the relevant rail-applicable cybersecurity standard, layered on top.
- Software lifecycle. EN 50128 governs the software development practices.
- Hardware safety case. EN 50129 governs the safety-related electronic systems documentation.
- Total cost of ownership and maintenance. These are agency-specific and outside any train-control standard.

The pragmatic approach is to treat IEC 62290 as the architecture and automation backbone, IEEE 1474.1 as the performance backbone, and the relevant CENELEC or IEC standards (61508, 62279/EN 50128, EN 50129, 62443) as the safety and security backbones.

## Procurement language that works

A procurement clause that uses IEC 62290 well looks like this in concept (the actual contract language is more elaborate): "The CBTC system shall comply with IEEE 1474.1 (performance and functional requirements) as the baseline performance specification. The system architecture shall conform to IEC 62290-1, with the Automatic Train Protection function implemented at Safety Integrity Level 4 per IEC 61508 and EN 50129. The system shall support Grade of Automation 2 per IEC 62290-1 Table 1 at revenue-service launch, with provision for upgrade to Grade of Automation 3 or 4 subject to the agency's separate decision and a corresponding safety case revision."

That language closes the architecture ambiguity, names the SIL target unambiguously, picks the GoA level, and leaves room for future automation upgrade without forcing it. (For the contractual nuances of automation upgrade paths, see [How to Write a CBTC RFP That Doesn't Lock You Into One Vendor](/blog/cbtc-rfp-vendor-lockin).)

## Practical takeaways

- IEC 62290 is the international CBTC framework. It defines the ATP/ATO/ATS architecture and the GoA classification.
- The Grades of Automation framework (GoA 0 to GoA 4) is the standard global vocabulary for automation level. Use it instead of "automatic" or "driverless," which are ambiguous.
- IEC 62290 and IEEE 1474 are complementary, not competing. IEEE 1474 specifies performance; IEC 62290 specifies architecture and automation level.
- US procurements increasingly cite both standards because the global vendor base builds to IEC 62290 by default and US agencies want IEEE 1474 performance accountability.
- IEC 62290 does not cover everything. Cybersecurity (IEC 62443), software (EN 50128), and the safety case (EN 50129) need their own standards in any complete specification.

## Where to go next

This post is a brief summary. The full treatment lives in Chapter 2 of *Communications-Based Train Control* ([Volume 1 on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 2 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch02.pdf)

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 1: Foundations & Technical Architecture*. Independent. ISBN 979-8-258-54295-3. — Chapter 2, "Standards, Regulations, and the US Framework"; Chapter 8, "Grades of Automation."
- International Electrotechnical Commission. *IEC 62290-1: Railway applications — Urban guided transport management and command/control systems — Part 1: System principles and fundamental concepts*.
- International Electrotechnical Commission. *IEC 62290-2: Railway applications — Urban guided transport management and command/control systems — Part 2: Functional requirements specification*.
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- International Association of Public Transport (UITP). *World Report on Metro Automation*. [uitp.org](https://www.uitp.org/)
- Federal Transit Administration. (2016). *FTA Report No. 0045: Communications-Based Train Control (CBTC) Technology*. [transit.dot.gov](https://www.transit.dot.gov/)
