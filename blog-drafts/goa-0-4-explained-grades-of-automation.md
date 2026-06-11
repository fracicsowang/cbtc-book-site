---
title: "GoA 0–4 Explained: The Five Grades of Train Automation"
slug: goa-0-4-explained-grades-of-automation
description: "GoA 0 through GoA 4 is the international framework that defines who does what in train operation. This post explains each level, the responsibility allocation, the safety implications, and where US transit deployments actually sit."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: operations
tags: [GoA, Grades of Automation, GoA 4, GoA 2, IEC 62290, train automation]
primary_keyword: "GoA grades of automation"
secondary_keywords: ["GoA 0 to GoA 4", "Grades of Automation IEC 62290", "GoA 2 transit", "GoA 4 driverless metro", "responsibility allocation matrix"]
related_chapters: [8]
internal_links: ["/blog/iec-62290-international-cbtc-standard", "/blog/goa-2-to-goa-4-prerequisites", "/blog/atp-ato-ats-triad"]
og_image: "/blog/img/goa-0-4-explained-grades-of-automation.png"
read_time: "10 min"
---

In October 1998, the Régie Autonome des Transports Parisiens opened Paris Métro Line 14 with no driver in the cab and no attendant on the train. Twenty-eight years later, more than 70 lines in over 40 cities operate at the same automation level, carrying close to 3 billion passenger-journeys annually. None of those lines is in the continental United States. The JFK AirTrain (2003), Miami's Metromover (1986), the Las Vegas Monorail (2004), and Honolulu's Skyline (June 2023) are the small US contingent at this end of the spectrum, and each is an automated people mover or new-build urban rail rather than a retrofit of legacy metro infrastructure. The reason is not technology — modern CBTC platforms can deliver any level — but the responsibility allocation each level encodes, and the labor, regulatory, and capital trade-offs each allocation implies. The Grades of Automation framework defined in IEC 62290 makes those trade-offs explicit, in a vocabulary that procurement documents, labor agreements, and regulatory submissions can all reference unambiguously.

## Why this matters for procurement

GoA is not a technical specification; it is a responsibility allocation framework. Every CBTC procurement that says "we want driverless" without naming a GoA level has not actually specified what the agency wants. Every labor negotiation that bargains around "automation" without naming a GoA level is bargaining without a vocabulary. Every safety case that addresses "automatic operation" without naming a GoA level is incomplete. This post is for the program manager structuring a procurement, the agency executive negotiating with labor, and the consulting engineer translating between vendor proposals and stakeholder expectations.

## The five levels

IEC 62290-1 defines five Grades of Automation, GoA 0 through GoA 4. Each level allocates responsibility for six critical operational functions across four roles: driver (D), attendant (A), automation system (Auto, meaning ATP or ATO), and central operations control (C). The six functions are setting the train in motion, stopping the train, door closure, obstacle and collision detection, operation during disruption, and passenger evacuation. The standard's responsibility matrix is the source of truth for what each level actually means.

GoA 0: On-Sight Train Operation. The driver has full control of all train movement and protective functions. There is no Automatic Train Protection. The driver relies on wayside signals, line-of-sight, and signaling rules. Modern usage is rare on new metro or urban rail; some legacy regional rail and freight branches still operate this way.

GoA 1: Non-Automated Train Operation with ATP. The driver manually controls the train under ATP supervision. ATP enforces speed restrictions and signal aspects. The driver still drives; ATP catches violations. This is the dominant level on commuter rail and on older metro lines retrofitted with ATP. WMATA has historically operated primarily at GoA 1; portions of BART have operated at GoA 1 with plans to migrate.

GoA 2: Semi-Automatic Train Operation. ATO controls train movement, acceleration, and braking under ATP supervision and driver supervision. The driver approves departure, controls doors, and intervenes in exceptions. This is the dominant deployment globally and in the US. The MTA L Line, the 7 Line, the Queens Boulevard CBTC, and the planned BART Train Control Modernization Program all target GoA 2.

GoA 3: Driverless Train Operation. ATO operates the train without a driver in the cab. An attendant remains onboard for passenger assistance and emergency response, but does not drive in normal operation. GoA 3 is rare worldwide and very rare in the US; the labor and capital trade-offs typically favor either GoA 2 (preserve the driver) or GoA 4 (eliminate onboard staff entirely).

GoA 4: Unattended Train Operation. ATO operates the train with no permanent staff onboard. All routine and most exceptional operation is automated; emergency response is handled remotely from the operations control center, with station staff and security responding as needed. JFK AirTrain, Miami Metromover, Honolulu Skyline, Paris Métro Lines 1 and 14, Singapore MRT North-South Line and East-West Line, Copenhagen Metro, Dubai Metro, and a growing list of Asian and European lines operate at GoA 4. (For the international standard's framing, see [IEC 62290: The International Counterpart to IEEE 1474](/blog/iec-62290-international-cbtc-standard).)

![The IEC 62290-1 responsibility matrix is the international standard for unambiguously specifying automation level.](/figures/fig_08_01_goa_responsibility_matrix.png)
*<small>The IEC 62290-1 responsibility matrix is the international standard for unambiguously specifying automation level.</small>*

## What GoA does not measure

A point that procurement documents routinely get wrong: GoA does not measure safety. A GoA 4 system with SIL 4 ATP is no less safe than a GoA 2 system with SIL 4 ATP. The GoA classification describes the staffing model and the human-intervention points; the safety is provided by ATP, which is SIL 4 across all levels at which it is present. (For the SIL framework, see [SIL 4 in Rail Signaling: What It Actually Means](/blog/sil-4-rail-signaling-what-it-means).)

Conflating GoA with safety leads to two common mistakes. First, agencies argue against higher GoA on the grounds that "more automation is less safe," when the opposite is generally the case — automated systems do not fatigue, do not get distracted, and do not miss signals. Second, agencies argue for higher GoA on the grounds that "automation eliminates accidents," when the actual safety mechanism is ATP, not ATO. ATP is what catches the unsafe condition; ATO is what optimizes operation within the ATP envelope. (For the architectural separation, see [ATP, ATO, ATS: The Three-Layer Triad of Modern Train Control](/blog/atp-ato-ats-triad).)

## Why GoA 2 dominates in the US

The vast majority of deployed US CBTC operates at GoA 2. The reasons are operational and political rather than technical:

Labor union and collective bargaining context. US transit operators are unionized, primarily through TWU (Transport Workers Union) and ATU (Amalgamated Transit Union) locals. Union agreements stipulate staffing levels, work rules, and job classifications. GoA 2 preserves the operator role while delivering most of the operational benefits of CBTC; GoA 3 and GoA 4 face union opposition that has, on multiple occasions, slowed or blocked higher-automation procurements.

Regulatory familiarity. The Federal Transit Administration, the State Safety Oversight agencies, and the agency safety organizations have mature review pathways for GoA 2. GoA 3 and GoA 4 require new pathway interpretation, additional risk assessment, and longer SSO review. The schedule premium on higher GoA is real even when the technical capability is in hand.

Capital cost differential. GoA 4 requires Platform Screen Doors at every station, more comprehensive obstacle detection, higher-redundancy onboard architecture (typically 2-out-of-3 voting), and yard automation. The capital premium over GoA 2 is typically 15 to 25 percent. The labor cost savings amortize that premium over the long run, but the up-front capital is harder to fund.

Public and political acceptance. Boards and elected officials in most US jurisdictions are more comfortable explaining "automatic with a human operator" than "no human onboard." Surveys consistently show that US riders are receptive to higher GoA once they experience it (Honolulu Skyline's public acceptance has been strong since opening), but the political work to get there is substantial.

The result is that GoA 2 has been the pragmatic equilibrium in US transit CBTC for the past decade. Whether that equilibrium holds for the next decade is the open question.

## The operational benefits at GoA 2

The performance gains from GoA 2 — well-documented across MTA L Line, 7 Line, BART pilot data, and SFMTA Muni TCUP — are the basis of the business case at this level:

- Energy savings of approximately 10 to 15 percent versus manual driving, attributable to ATO's optimized coast profiles and consistent acceleration.
- Schedule adherence improvement from typical manual ranges of plus or minus 5 to 10 percent to typical ATO ranges of plus or minus 1 to 2 percent.
- Dwell time variability reduction of 50 to 65 percent, enabling the headway compression that drives the capacity gain.
- Precision station stopping to within approximately 30 centimeters of the platform marker, improving dwell efficiency and door alignment.
- On-time performance improvements that have been measured at 99 percent on CBTC L Line operation.

These are the gains that justify the GoA 2 capital investment in most US procurements.

## The frontier: GoA 4

The economics shift at GoA 4. Labor cost reduction of 30 to 50 percent of total operating expense is the dominant gain, with secondary gains in 24/7 service economics (no shift premium for off-peak operation), service reliability (automation does not call in sick), and the ability to run very short headways (60 to 90 seconds, beyond what manual operation can sustain).

The barriers are the labor, regulatory, and capital factors named above, plus brownfield retrofit complexity. Most US metro systems are 50 to 80 years old. Retrofitting GoA 4 onto legacy stations with platform geometry, accessibility constraints, and historic preservation considerations is harder and more expensive than building greenfield. Honolulu Skyline could specify GoA 4 from inception because Skyline is greenfield. NYC, Chicago, Boston, and SF face substantially harder retrofit problems.

Globally, the GoA 4 footprint continues to grow. Singapore's North-South Line and East-West Line conversions, the Paris Métro Line 1 conversion, the Copenhagen Metro Cityringen extension, and Dubai's full-network GoA 4 deployment are the high-profile examples of the past decade. London Underground's planned Piccadilly, Bakerloo, and Jubilee Line modernizations are the most-watched upcoming retrofits. (For the prerequisites US agencies underestimate when planning the GoA 2 to GoA 4 path, see [From GoA 2 to GoA 4: Prerequisites Most Agencies Underestimate](/blog/goa-2-to-goa-4-prerequisites).)

## GoA 3 and why it is rare

GoA 3 — driverless with onboard attendant — exists as a formal level but is operationally uncommon. The cost-benefit case is unfavorable: the capital cost of full automation is nearly the same as GoA 4, but the labor cost of an onboard attendant captures only a fraction of the GoA 4 labor savings. Agencies that consider GoA 3 typically consider it as a stepping stone toward GoA 4, with the attendant role gradually narrowing as the system matures and trust accumulates.

Some international operators that nominally run at GoA 4 (Paris Métro Line 14, Singapore MRT, Toulouse VAL) actually deploy attendants for passenger service even though no attendant is required for safe operation. This is a staffing choice within GoA 4, not a downgrade to GoA 3. The distinction matters in procurement: the safety case for GoA 4 with optional attendants is cleaner than the safety case for GoA 3 with required attendants.

## Specifying GoA in an RFP

A procurement that specifies GoA correctly looks like:

"The CBTC system shall comply with IEC 62290-1 and shall support Grade of Automation 2 per IEC 62290-1 Table 1 at revenue service launch. The system shall be designed and equipped to support upgrade to Grade of Automation 3 or Grade of Automation 4 subject to a separate agency decision and a corresponding safety case revision. The supplier shall identify the additional infrastructure, onboard equipment, and operational measures required for the upgrade path in the technical proposal."

That language picks the launch GoA explicitly, leaves the upgrade decision separate (because it is a labor-relations and capital decision, not a technical decision), and asks the supplier to disclose the upgrade scope. Procurements that specify only "GoA 2 or higher" leave the supplier to interpret the agency's intent, which never produces the procurement the agency actually wants.

## Practical takeaways

- The Grades of Automation framework allocates responsibility across six operational functions and four roles. It is defined in IEC 62290-1 and is the international standard vocabulary for automation level.
- GoA does not measure safety. ATP at SIL 4 provides the safety floor across all relevant levels. GoA describes staffing and human-intervention; SIL describes hazard rate.
- US transit operates predominantly at GoA 2 because of labor union context, regulatory familiarity, capital cost differential, and political acceptance. GoA 4 in the US is concentrated in airport people movers and a few greenfield deployments (Honolulu Skyline being the leading example).
- GoA 3 is rare globally because its cost-benefit profile is unfavorable: the capital is close to GoA 4, but the labor savings are far smaller.
- Specify GoA explicitly in procurement. "Driverless" and "automatic" are ambiguous; "GoA 2 with upgrade path to GoA 3 or 4" is unambiguous.

## Where to go next

This post is a brief summary. The full treatment lives in Chapter 8 of *Communications-Based Train Control* ([Volume 2 on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 8 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch08.pdf)

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Deployment, Operations & Strategy*. Independent. ISBN 979-8-258-54295-3. — Chapter 8, "Grades of Automation."
- International Electrotechnical Commission. *IEC 62290-1: Railway applications — Urban guided transport management and command/control systems — Part 1: System principles and fundamental concepts*.
- International Association of Public Transport (UITP). *World Report on Metro Automation*. [uitp.org](https://www.uitp.org/)
- MTA New York City Transit. *L Line CBTC Project Documentation*. [new.mta.info](https://new.mta.info/)
- Honolulu Authority for Rapid Transportation (HART). *Skyline Project Information*. [honolulutransit.org](https://www.honolulutransit.org/)
- RATP. *Métro Line 14 Operations*. [ratp.fr](https://www.ratp.fr/)
- Singapore Land Transport Authority. *MRT North-South and East-West Line Renewal*. [lta.gov.sg](https://www.lta.gov.sg/)
