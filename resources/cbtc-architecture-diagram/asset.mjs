// CBTC Architecture Diagram — the flagship free asset.
// Ships as PDF, SVG and PNG so it can go straight into a deck, a spec, or a
// classroom slide without redrawing.

import { architectureSvg } from "./diagram.mjs";

export default {
  slug: "cbtc-architecture-diagram",
  title: "CBTC Architecture Diagram",
  kicker: "System architecture",
  subtitle:
    "The three physical tiers, the IEC 62290 system boundary, and the interfaces that actually move project schedules — on one sheet.",
  description:
    "Free CBTC architecture diagram (PDF, SVG, PNG): central ATS, wayside zone controllers and interlocking, onboard VOBC with ATP and ATO, and the external systems outside the IEC 62290 boundary.",
  keywords: [
    "CBTC architecture diagram",
    "CBTC system architecture",
    "ATP ATO ATS",
    "zone controller",
    "VOBC",
    "IEC 62290 system boundary",
    "CBTC block diagram",
    "moving block signaling diagram",
  ],
  version: "v1.0",
  updated: "September 2026",
  updatedISO: "2026-09-01",
  publishedISO: "2026-09-01",
  page: { format: "Letter", landscape: true },
  fitBody: true,
  bookRef: "Volume 1, Chapter 3 — CBTC System Architecture Overview",

  lede:
    "Most CBTC block diagrams in circulation are either a vendor's marketing cut or a redrawn " +
    "textbook figure with the interfaces left out. This one draws the boundary explicitly: what is " +
    "inside the IEC 62290 system, what is outside it, and what has to be written into an Interface " +
    "Control Document before anyone signs.",

  whatsInside: [
    "All three physical tiers — central ATS, wayside zone controllers and interlocking, onboard VOBC — with the real subsystem breakdown inside each.",
    "The ATP / ATO nesting drawn as it actually is: ATO drives inside the envelope ATP defines, never outside it.",
    "Movement Authority and position reporting labeled with real timing (refreshed every 200–500 ms over the DCS).",
    "Zone-controller handoff at the zone boundary, and balise placement for absolute position reference.",
    "The six external systems that sit outside the boundary behind an ICD — the usual source of schedule slip.",
    "Vector SVG, so you can recolor it or pull pieces into your own slides.",
  ],

  landingBody: `
      <h2 class="res-h2">The boundary is the point</h2>
      <p>
        Per IEC 62290, the CBTC system comprises ATP, ATO and ATS &mdash; and nothing else.
        Platform screen doors, the interlocking, SCADA, passenger information, fare collection and
        the depot are all external infrastructure reached through defined interfaces. That distinction
        looks academic on a diagram and is anything but in a project: interface scope, not core CBTC
        function, is the leading cause of the delays that make the trade press.
      </p>
      <p>
        The dashed column on the right of this sheet exists to make that visible in a design review.
        If a bidder's architecture drawing does not separate those systems, or the RFP has no Interface
        Control Document naming message formats, latency budgets, failure modes and acceptance
        criteria for each one, the risk has not been priced &mdash; it has been deferred.
      </p>
      <h2 class="res-h2">Authority runs one way</h2>
      <p>
        ATP &gt; ATO &gt; ATS, without exception. ATS is advisory and non-safety-critical (SIL 0): it
        proposes timetable targets and route requests. ATO optimizes against those targets but only
        inside the speed-versus-distance envelope ATP maintains. When they conflict, ATP applies the
        brake and wins. Every box and arrow on this diagram is arranged to make that hierarchy
        readable at a glance.
      </p>`,

  files: [
    {
      name: "cbtc-architecture-diagram-v1.pdf",
      label: "Download PDF",
      ext: "pdf",
      mime: "application/pdf",
      size: "",
    },
    {
      name: "cbtc-architecture-diagram-v1.svg",
      label: "Vector SVG",
      ext: "svg",
      mime: "image/svg+xml",
      size: "",
    },
    {
      name: "cbtc-architecture-diagram-v1.png",
      label: "High-res PNG",
      ext: "png",
      mime: "image/png",
      size: "",
    },
  ],

  sourceNote:
    'Drawn for <em>Communications-Based Train Control</em>, Volume 1, Chapter 3, by ' +
    "Chunjun (Francisco) Wang. Subsystem decomposition and the system boundary follow IEC 62290; " +
    "Movement Authority refresh rates and zone lengths reflect current deployment practice as " +
    "documented in the manuscript.",

  // The print body is the diagram itself, scaled to the printable width.
  // No wrapper element: the SVG has to be a direct child of .doc-inner so its
  // max-height:100% resolves against a parent with a definite height. Its
  // intrinsic size is stripped so it scales to whatever the sheet leaves it.
  printBody: architectureSvg().replace(/ width="\d+" height="\d+"/, ""),
};
