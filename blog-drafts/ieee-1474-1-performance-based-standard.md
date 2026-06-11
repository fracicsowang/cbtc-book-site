---
title: "IEEE 1474.1 Explained: Why It's Performance-Based, Not Prescriptive"
slug: ieee-1474-1-performance-based-standard
description: "IEEE 1474.1 is the cornerstone US CBTC standard. It mandates what a CBTC system must do — headway, safety, availability, response time — and leaves how to suppliers. This post explains the intent, the implications, and the procurement traps."
date: 2026-05-09
author: "Chunjun (Francisco) Wang"
category: standards
tags: [IEEE 1474, IEEE 1474.1, CBTC standards, performance based, FTA, US transit]
primary_keyword: "IEEE 1474.1"
secondary_keywords: ["IEEE 1474 explained", "performance based standard CBTC", "IEEE 1474 vs IEC 62290", "CBTC procurement standard", "IEEE 1474 compliance"]
related_chapters: [2, 12]
internal_links: ["/blog/iec-62290-international-cbtc-standard", "/blog/cbtc-rfp-vendor-lockin", "/blog/cbtc-vs-ptc-us-commuter-rail-vs-metro"]
og_image: "/blog/img/ieee-1474-1-performance-based-standard.png"
read_time: "9 min"
---

In the late 1990s, when New York City Transit, the Chicago Transit Authority, and Washington Metro were all preparing to commit serious capital to Communications-Based Train Control, the engineers writing the procurement specifications faced a recurring problem: the technology was moving faster than any single agency could specify. Radio architectures, localization methods, and onboard computer designs were diverging across vendors. A specification written in Siemens-style language risked excluding Alstom; a specification written around inductive-loop transmission risked locking out radio-based competitors before the radio products had matured. The Institute of Electrical and Electronics Engineers' Rail Transportation Standards Committee responded with IEEE 1474.1: a standard that defines what a CBTC system must accomplish, not how it must accomplish it. The decision to make the cornerstone US CBTC standard performance-based rather than prescriptive shaped the next twenty-five years of US procurement, and it still trips up agencies that read it as a checklist.

## Why this matters for procurement

IEEE 1474.1 is the standard that virtually every US transit agency cites in CBTC RFPs. Understanding what it actually requires — and what it deliberately leaves to the supplier — is the difference between an RFP that produces a competitive bid and one that produces a single qualified vendor with no competitive pressure on price. This post is for the program manager, the consulting engineer drafting a scope of work, and the FTA reviewer who needs to evaluate a compliance claim. It is also for any procurement reader who has wondered why a 200-page standard reference does not actually tell the supplier which radio frequency to use.

## The performance-based design choice

When IEEE Std 1474.1 was first published in 1999 and revised in 2004, its authors made an explicit architectural decision: the standard would prescribe outcomes, not implementations. This is the same philosophical stance the Federal Aviation Administration takes with airworthiness regulations, and the same one ISO takes with quality management. In a field where the underlying technology is changing — and where rigid prescription would have frozen the 1990s state of the art into a 2026 procurement — performance-based standards age more gracefully than prescriptive ones.

The practical structure of IEEE 1474.1 reflects this choice. The standard defines:

- A precise vocabulary (Communications-Based Train Control, Automatic Train Protection, Automatic Train Operation, Automatic Train Supervision, Movement Authority).
- Quantitative performance thresholds for headway, safety, availability, response time, and positional accuracy.
- Functional requirements (continuous or intermittent Movement Authority communication, on-board autonomy in the event of communication loss, emergency braking, interoperability messaging).
- Safety integrity expectations consistent with the ATP-as-SIL-4 norm.

It does not define which radio frequency to use, which positioning method (balise plus tachometer plus Doppler, GPS, or pure beacon-based) to deploy, which programming language the safety logic must use, or which architectural topology (centralized server plus dumb VOBC versus distributed VOBC plus thin Zone Controller) the supplier must follow. Those are design decisions. The standard expects the supplier to make them.

## What IEEE 1474.1 mandates

The standard's mandates are best read as performance budgets that the system, however configured, must satisfy.

Headway and capacity. The standard defines a safe braking distance and the consequent minimum headway. Compliant CBTC systems on US rapid transit routinely achieve 60 to 120 second headways, depending on vehicle length, brake performance, and track geometry. This range is what makes CBTC the right answer for capacity-constrained urban lines: legacy fixed-block enforces 180 to 300 second headways on the same alignment.

Safety. The Automatic Train Protection function must not permit unsafe train movement due to system failures. The acceptable hazard rate is set per the FTA's Safety Assurance Framework and aligns with Safety Integrity Level 4 in the IEC 61508 / EN 50129 framework — typically 10⁻⁹ to 10⁻⁸ dangerous failures per hour. (For the SIL framework itself, see [SIL 4 in Rail Signaling: What It Actually Means](/blog/sil-4-rail-signaling-what-it-means).)

Availability. The system must achieve operational availability that makes daily revenue service viable, typically in the 99 percent range, expressed as mean time between failures and mean time to repair. The standard does not pick the number; it requires the agency to specify and the supplier to demonstrate.

Response time. ATP must reduce a train's Movement Authority within bounded latency when conditions change — typically a few seconds for non-emergency adjustments, much faster for emergency interventions.

Accuracy. Train position must be determined within a defined envelope, typically on the order of one meter for modern systems. The standard does not specify which sensors to use; it specifies the accuracy.

On-board autonomy. If communication with the wayside is lost, the train must enforce the most restrictive of (a) the most recent Movement Authority, (b) the worst-case speed for the current track segment, and (c) a distance-based safety envelope from on-board odometry. This is the requirement that prevents a radio-based CBTC system from becoming a runaway train when the radio drops.

[FIGURE: Performance budget map showing IEEE 1474.1 mandates on the left (headway, safety, availability, response time, accuracy, on-board autonomy) and supplier design choices on the right (radio band, positioning method, redundancy topology, software language, architectural distribution).
Source: new figure to be generated.
Caption: "IEEE 1474.1 mandates performance outcomes; the supplier owns the design decisions that produce them."]

## What IEEE 1474.1 does not mandate

The standard's deliberate silences are as important as its mandates.

Communication technology. Inductive loops, free-space radio at 2.4 or 5 GHz, licensed cellular, and emerging private 5G are all permitted as long as the system meets the performance budget. The standard does not pick.

Localization technology. Tachometer plus Doppler radar plus balise reset, GPS-augmented positioning in open-air sections, and other sensor fusion approaches are all acceptable. The performance threshold is positional accuracy, not which sensor produced it.

Hardware and software architecture. Whether ATP runs on a centralized wayside server with thin onboard agents or on distributed onboard controllers with thin wayside infrastructure is a supplier decision. The 2-out-of-2 versus 2-out-of-3 hardware voting topology is also a supplier decision.

Specific safety methodology. IEEE 1474.3 (the safety assurance companion to 1474.1) requires that hazard analysis be conducted and documented, but does not mandate Failure Mode and Effects Analysis over Fault Tree Analysis or Hazard and Operability study. The supplier picks the technique appropriate to each phase.

This silence is the standard working as designed. Agencies that read IEEE 1474.1 expecting it to tell the vendor which radio to install are misreading the standard's intent. The agency must specify the radio if the agency cares which radio is installed.

## What this means for an RFP

The most common procurement mistake is to issue an RFP that says, in effect, "the system shall comply with IEEE 1474.1," and stop there. That language is necessary but insufficient. The standard establishes a common technical baseline; it does not, by itself, draw the boundary between vendor responsibility and agency responsibility on the dimensions the standard leaves open.

A procurement that uses IEEE 1474.1 well typically supplements it with additional specifications addressing:

- Cybersecurity. IEEE 1474 historically deferred to IEEE 1686 and now increasingly to IEC 62443. (For the rail-specific reading of IEC 62443, see [Cybersecurity Standards: IEC 62443 in Rail Signaling Context](/blog/iec-62443-cybersecurity-rail-signaling).)
- Communication architecture. If the agency requires LTE-R or has an existing radio band that constrains the choice, that is an agency decision and must be in the spec.
- Integration with adjacent systems. PTC interfaces on shared trackage, interlocking signal interfaces, fare collection, and security systems are out of scope for IEEE 1474.1 and must be addressed separately.
- Asset management and maintenance. Spare parts strategy, maintenance interval requirements, and total-cost-of-ownership terms are out of scope and must be specified.
- Operational training and change management. The standard says nothing about how operators and dispatchers will be trained or how the agency will transition from legacy to CBTC. (For the procurement implications, see [How to Write a CBTC RFP That Doesn't Lock You Into One Vendor](/blog/cbtc-rfp-vendor-lockin).)

Specifying IEEE 1474.1 compliance without supplementing it on these dimensions does not protect the agency; it transfers the unspecified decisions to the supplier, who will make them in the supplier's commercial interest.

## What "compliant" actually means

Compliance with IEEE 1474.1 is typically demonstrated through a combination of design analysis, factory acceptance testing, and revenue-service validation. The structure is:

1. The supplier maps each IEEE 1474.1 performance requirement to one or more specific design features and test cases.
2. Factory acceptance testing demonstrates that the design features deliver the performance at the laboratory level.
3. Site integration testing demonstrates the same on the actual railway.
4. An Independent Safety Assessor reviews the safety-related portion of the compliance evidence.
5. The agency, with FTA awareness and State Safety Oversight engagement, accepts the demonstration before revenue service.

The supplier's compliance claim is not self-certifying. It is a testable assertion that the agency, the consultant engineer, and the State Safety Oversight reviewer all examine. (For the SSO pathway specifically, see [FTA State Safety Oversight (SSO): The CBTC Approval Pathway](/blog/fta-sso-cbtc-approval-pathway).)

## Where IEEE 1474.1 sits in the broader standards stack

IEEE 1474.1 is one component of a broader US standards stack:

- IEEE 1474.1 — Performance and Functional Requirements (the cornerstone).
- IEEE 1474.2 — User Interface (Driver Machine Interface) requirements.
- IEEE 1474.3 — System Assurance and verification and validation framework.
- IEEE 1474.4 — Operation and Maintenance.

For functional architecture and Grades of Automation, US procurements increasingly cite IEC 62290 alongside IEEE 1474. For software lifecycle, EN 50128 is the de facto reference. For safety-related electronic systems, EN 50129 is the de facto reference, and IEC 61508 sits beneath both as the foundational functional safety standard. IEEE 1474.1 is the performance baseline; the others fill in the architecture, the software, and the safety case.

## Practical takeaways

- IEEE 1474.1 is performance-based by design. It mandates outcomes (headway, safety, availability, response time, accuracy, on-board autonomy) and leaves implementation to the supplier.
- The standard's silences are deliberate. Communication frequency, positioning sensors, hardware voting topology, and software language are supplier decisions unless the agency specifies them separately.
- An RFP that cites IEEE 1474.1 alone is incomplete. Cybersecurity, communication architecture, adjacent-system integration, maintenance, and training all need separate specifications.
- Compliance is demonstrated through design analysis, factory and site testing, and Independent Safety Assessor review — not by self-certification.
- IEEE 1474.1 is the cornerstone but not the whole stack. IEC 62290, EN 50128, EN 50129, and IEC 61508 each cover dimensions IEEE 1474.1 does not.

## Where to go next

This post is a brief summary. The full treatment lives in Chapter 2 of *Communications-Based Train Control* ([Volume 1 on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 2 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch02.pdf)

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 1: Foundations & Technical Architecture*. Independent. ISBN 979-8-258-54295-3. — Chapter 2, "Standards, Regulations, and the US Framework."
- IEEE Standards Association. *IEEE Std 1474.1: Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements*.
- IEEE Standards Association. *IEEE Std 1474.3: Standard for Safety Assurance in Communications-Based Train Control (CBTC) Systems*.
- Federal Transit Administration. (2016). *FTA Report No. 0045: Communications-Based Train Control (CBTC) Technology*. [transit.dot.gov](https://www.transit.dot.gov/)
- International Electrotechnical Commission. *IEC 62290-1: Railway applications — Urban guided transport management and command/control systems*.
- American Public Transportation Association. *APTA Recommended Practices for Rail Transit Vehicle Inspection and Maintenance*. [apta.com](https://www.apta.com/)
