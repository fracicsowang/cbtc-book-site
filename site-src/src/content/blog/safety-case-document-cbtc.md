---
title: "The Safety Case Document: What's Inside, How It's Reviewed"
slug: safety-case-document-cbtc
description: "The CBTC safety case is the structured argument that a system can achieve its safety objectives. This post explains the four pillars, the lifecycle stages, the key deliverables, and how the Independent Safety Assessor reviews it."
date: 2026-07-17
author: "Chunjun (Francisco) Wang"
category: standards
tags: [safety case, EN 50129, Independent Safety Assessor, CBTC safety, hazard log]
primary_keyword: "CBTC safety case"
secondary_keywords: ["safety case document", "Independent Safety Assessor", "EN 50129 safety case", "CBTC hazard log", "preliminary safety case"]
related_chapters: [2, 12]
internal_links: ["/blog/v-model-lifecycle-safety-critical-train-control", "/blog/sil-4-rail-signaling-what-it-means", "/blog/fta-sso-cbtc-approval-pathway"]
og_image: "/blog/img/safety-case-document-cbtc.png"
related_chapters_v: [2, 12]
read_time: "10 min"
---

A SIL 4 ATP subsystem safety case for a typical US CBTC project is, physically, a multi-volume document running to several hundred pages, supported by design files, formal analyses, test reports, and traceability matrices that may run to tens of thousands of pages of supporting evidence. That is what every major CBTC procurement at MTA, BART, WMATA, SFMTA, MARTA, or HART eventually produces, and that is what every State Safety Oversight reviewer eventually examines before the system enters revenue service. The safety case is not a regulatory approval document in the European sense — the Federal Transit Administration does not stamp it — but it is the structured argument on which everything from the SSO authorization to the agency's insurance coverage to the post-incident litigation defense depends. This post explains what is inside a CBTC safety case, how it is built across the project lifecycle, and how the Independent Safety Assessor reviews it.

## Why this matters for procurement

The safety case is a procurement deliverable, not just a safety engineering document. Its scope, structure, and evidence depth are negotiated in the contract; its review by the Independent Safety Assessor consumes 0.5 to 1.5 percent of the CBTC contract value; and its completeness gates revenue service authorization. A procurement that does not specify the safety case structure leaves the supplier to define it, and the supplier's definition will not always match what the State Safety Oversight reviewer or the agency's safety officer expects. This post is for the program manager structuring the deliverables list, the consulting engineer reviewing the supplier's safety plan, and the agency safety officer who will ultimately defend the case to the SSO.

## The four pillars

EN 50129 — the CENELEC standard for Safety Related Electronic Systems for Signalling — defines the safety case as a structured argument with four pillars:

Scope. The boundary of what the safety case covers. For a CBTC system, this typically includes the onboard Vehicle On-Board Controller and its interfaces, the wayside Zone Controller and its interfaces, the Data Communication System integrity, the safety-related portions of the central ATS, and the integration with adjacent systems (interlocking, rolling stock, power). The scope statement is the first thing the Independent Safety Assessor reads, because it determines what the rest of the case is responsible for.

Claims. Specific safety assertions the system is designed to satisfy. Typical claims include the Tolerable Hazard Rate at the system level (for example, "the system shall not allow a Signal Passed at Danger more frequently than once per 10⁹ train movements"), the Safety Integrity Level assignments per function, and specific functional claims (for example, "the train will apply emergency brake within X milliseconds of detecting an overspeed condition").

Arguments. The reasoning that supports each claim. This is where the case explains, for example, why the chosen architecture (2-out-of-2 voting, diverse software, Independent Safety Assessment of the safety logic) achieves the SIL 4 claim. The argument is the bridge from claim to evidence; without explicit arguments, the evidence becomes a heap rather than a structured case.

Evidence. The test data, design analyses, formal proofs, and operational data that support each argument. Evidence includes Failure Mode and Effects Analysis reports, Fault Tree Analysis quantifications, formal verification outputs, factory acceptance test reports, site integration test reports, and operational logs. (For the lifecycle that produces this evidence, see [The V-Model Lifecycle for Safety-Critical Train Control](/blog/v-model-lifecycle-safety-critical-train-control).)

Each safety claim must trace to one or more arguments, which must trace to specific evidence. The traceability is what makes the case auditable. A safety case in which the trace from claim to evidence is broken is a safety case the assessor will return for rework.

![The safety case rests on four pillars supported by a stack of structured deliverables produced across the V-model lifecycle.](/figures/fig_12_04_safety_case_structure.png)
*<small>The safety case rests on four pillars supported by a stack of structured deliverables produced across the V-model lifecycle.</small>*

## The three lifecycle stages

The safety case is not a single document delivered at the end of the project. It evolves across three stages, each tied to a project lifecycle phase:

Preliminary Safety Case (Generic). This is the supplier's standard architecture safety case for the CBTC platform across all deployments. It covers the generic system architecture, known failure modes, baseline SIL assignments, and the safety-design decisions inherent to the platform. A vendor like Siemens, Alstom, Thales/Hitachi, or Hitachi Rail STS will have a Generic Safety Case for their core CBTC platform that has been certified at the platform level. The Generic case is the starting point for the project-specific work.

Applicable Safety Case (Site-Specific). This is the project-specific safety case that takes the Generic case and applies it to the specific site, with site-specific track geometry, operational rules, integration interfaces, and rolling stock characteristics. The Applicable case identifies which Generic claims still apply, which require site-specific re-analysis, and which new claims are introduced by the site-specific design. The Applicable case is the document the SSO reviews most heavily.

Operational Safety Case. After commissioning, the safety case evolves with operational data. Failure rate estimates that were originally based on FMEA quantification get refined with actual revenue-service data; SIL allocation may be adjusted based on demonstrated performance; new hazards identified through operations are added to the Hazard Log. The Operational case is a living document over the system lifetime.

## The supporting deliverables

The safety case proper rests on a stack of supporting deliverables, each of which has its own format, ownership, and review process:

The Safety Plan. The project's safety governance document, defining the safety lifecycle, the roles and responsibilities, the risk acceptance criteria, the hazard analysis methodology, and the document approval pathway. The Safety Plan is typically delivered in the early design phase and becomes the contractual basis for safety work.

The Hazard Log. The authoritative record of every identified hazard, with its severity classification, its frequency assessment, its mitigation measures, the residual risk after mitigation, and the evidence that the mitigation works. The Hazard Log is a living document updated continuously across the project. When the supplier, integrator, and agency maintain separate Hazard Logs, the project loses traceability; one of the recurring causes of late-stage safety rework is Hazard Log fragmentation.

The Safety Requirements Specification. The safety requirements that flow from the hazard analysis. Each safety requirement is allocated to a specific function (and from there, to a specific subsystem and a specific component). The Safety Requirements Specification is the bridge from the Hazard Log to the design specification.

Safety Analysis reports. Preliminary Hazard Analysis (PHA) at concept stage, System and Subsystem Hazard Analysis at detailed design, Failure Mode and Effects Analysis on critical components, Fault Tree Analysis on top-level events, Hazard and Operability study (HAZOP) for procedures and human factors, Operational and Support Hazard Analysis for run-time and maintenance scenarios. Each technique addresses a different facet of the hazard space. (For the SIL framework that anchors these analyses, see [SIL 4 in Rail Signaling: What It Actually Means](/blog/sil-4-rail-signaling-what-it-means).)

The Safety Case Report. The final structured document that pulls scope, claims, arguments, and evidence together into a single case for the system as delivered.

## Hazard analysis techniques

The safety case is supported by multiple hazard analysis techniques, each applied at the lifecycle phase it suits best:

PHA at concept stage produces a rapid, qualitative inventory of hazards and risk ranking that guides architecture and SIL allocation.

System Hazard Analysis (SHA) and Subsystem Hazard Analysis (SSHA) apply structured question-based methods to each major system as the design matures. They are typically required at 60 percent design completion in US practice.

FMEA examines every credible hardware failure mode (stuck-bit, intermittent loss, data corruption) and assesses severity, occurrence frequency, and detection probability. The product identifies which modes warrant design mitigation.

FTA is top-down and quantitative, beginning with a catastrophic top event (for example, "Unintended train acceleration") and working backward to identify the combinations of failures that could cause it. FTA is particularly suited to validating redundancy: if the analysis shows that no single failure can cause the top event, the redundancy is doing its job.

HAZOP is a team-based technique where multi-disciplinary participants walk through the design line by line, asking guided "what if?" questions. HAZOP excels at capturing human-factors and operational-procedure hazards that purely engineering-focused techniques can miss.

Operational and Support Hazard Analysis (O&SHA) addresses the run-time and maintenance environment: what hazards arise from operator actions, maintenance activities, degraded-mode operations, and exceptional events. O&SHA is typically required pre-revenue service.

## The Independent Safety Assessor

The Independent Safety Assessor (ISA) is the external specialist who reviews the safety case and certifies the supplier's and integrator's hazard analyses and risk claims. Independence is contractually defined: the ISA is hired by the agency, not the supplier; the ISA has not been part of the design team; and the ISA has authority to block a transition between project phases if the hazard analysis is incomplete.

US-active ISA firms include TÜV SÜD and TÜV Rheinland (German certifiers with global scope), Ricardo (UK-based, strong in railway systems), Mott MacDonald (UK-based, significant US transit experience), Bureau Veritas (France-based, global), and Intertek (UK-based, diverse certifications). Cost typically ranges from 0.5 percent to 1.5 percent of the CBTC contract value, with the ISA effort front-loaded: 60 percent during design phases, 30 percent during pre-commissioning testing, 10 percent during operations preparation. An ISA that joins late, after the design is locked, is nearly worthless; the most expensive ISA mistakes are found early, and a late-engaged ISA cannot find them in time to influence the design.

The ISA's scope of work includes reviewing the Safety Plan and governance, challenging the Hazard Log, reviewing FMEA / FTA / HAZOP reports, verifying SIL allocations, witnessing key test milestones, and issuing an independent Safety Assessment Report.

## The interaction with the SSO

The safety case is the agency's argument to the State Safety Oversight reviewer. The SSO does not author the safety case; the supplier and the agency do, with ISA verification. The SSO reads the case as part of its review of the agency's Public Transportation Agency Safety Plan and the project's Safety Risk Assessment. The SSO may request additional analysis, witness specific tests, or require operational validation before authorizing revenue service. (For the SSO pathway, see [FTA State Safety Oversight (SSO): The CBTC Approval Pathway](/blog/fta-sso-cbtc-approval-pathway).)

The relationship is one of layered review. The supplier produces the safety case; the integrator validates it within the project context; the ISA conducts independent assessment; the agency safety organization conducts its own review; the SSO reviews the agency's review. Each layer adds value when each is properly resourced and engaged at the right time. The most common safety case failures are not analytical errors caught in late review; they are missing pieces — analyses not performed, evidence not generated, traceability not maintained — that are discovered too late to remedy without schedule slip.

## Common safety case failures

Recurring failure modes in US CBTC safety cases include:

Late-started safety work. Hazard analysis beginning at 70 to 80 percent design completion is too late. Architecture is fixed, interfaces are locked, and hazard mitigations require costly redesign. The remedy is to start the PHA at concept stage and let the analysis mature alongside the design.

Missing degraded-mode analysis. Operational and Support Hazard Analysis is sometimes deferred or under-scoped. The Singapore Joo Koon LRT collision in 2017 is a frequently cited example of a failure mode that escaped operational hazard analysis: a single Zone Controller failure combined with a particular operational scenario produced an unsafe state that the safety case had not contemplated. The remedy is to scope O&SHA broadly enough to cover real degraded operations, not just the design intent.

Hazard Log governance failure. When the supplier, the integrator, and the agency maintain separate Hazard Logs that do not reconcile, updates become chaotic and the safety case loses its single source of truth. The remedy is contractual clarity: a single authoritative Hazard Log, with a defined update process and a defined review cadence.

Generic-to-Site-Specific gap. A CBTC platform certified for one country assumes operating rules that may not hold elsewhere. The Applicable Safety Case is supposed to identify and address these gaps; when it is treated as a checkbox exercise rather than a substantive site-specific analysis, gaps survive into operations.

## Practical takeaways

- The safety case rests on four pillars: scope, claims, arguments, evidence. Each claim must trace to arguments, which must trace to evidence. Broken traces fail the case.
- The safety case evolves across three stages: Preliminary (Generic), Applicable (Site-Specific), and Operational. The Applicable case is what the SSO reviews most heavily.
- Supporting deliverables include the Safety Plan, the Hazard Log, the Safety Requirements Specification, multiple Safety Analysis reports (PHA, SHA/SSHA, FMEA, FTA, HAZOP, O&SHA), and the final Safety Case Report.
- The Independent Safety Assessor must be engaged early. ISA cost is 0.5 to 1.5 percent of contract value; 60 percent of effort is in design phases. Late-engaged ISAs cannot find what they need to find in time.
- Common failure modes are late-started safety work, weak degraded-mode analysis, fragmented Hazard Log governance, and superficial Generic-to-Site-Specific gap analysis. Each has a known remedy.

## Where to go next

This post is a brief summary. The full treatment lives in Chapter 12 of *Communications-Based Train Control* ([Volume 2 on Amazon](https://www.amazon.com/dp/B0GYHLYQZZ)). [Download Chapter 12 slides (free PDF)](https://cbtcbook.com/slides/cbtc_ch12.pdf)

## Sources

- Wang, C. (2026). *Communications-Based Train Control, Volume 2: Deployment, Operations & Strategy*. Independent. ISBN 979-8-258-54295-3. — Chapter 12, "Project Lifecycle and Delivery"; Chapter 2, "Standards, Regulations, and the US Framework."
- CENELEC. *EN 50129: Railway Applications — Safety Related Electronic Systems for Signalling*.
- CENELEC. *EN 50126: Railway Applications — Specification and Demonstration of RAMS*.
- CENELEC. *EN 50128: Railway Applications — Software for Railway Control and Protection Systems*.
- International Electrotechnical Commission. *IEC 61508: Functional Safety of Electrical/Electronic/Programmable Electronic Safety-related Systems*.
- IEEE Standards Association. *IEEE Std 1474.3: Standard for Safety Assurance in Communications-Based Train Control (CBTC) Systems*.
- Federal Transit Administration. *State Safety Oversight Program*. [transit.dot.gov](https://www.transit.dot.gov/regulations-and-guidance/safety/state-safety-oversight)
