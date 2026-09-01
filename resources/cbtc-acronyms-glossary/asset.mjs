// CBTC Acronyms & Glossary — the 200-term reference.

import { GROUPS } from "./terms.mjs";

const COUNT = GROUPS.reduce((n, g) => n + g.terms.length, 0);

const body = GROUPS.map(
  (g) => `    <h3 class="phase">${g.title} <span>${g.terms.length} terms</span></h3>
    <dl class="gloss">
${g.terms
  .map(([t, d]) => `      <dt>${t}</dt><dd>${d}</dd>`)
  .join("\n")}
    </dl>`,
).join("\n\n");

export default {
  slug: "cbtc-acronyms-glossary",
  title: "CBTC Acronyms & Glossary",
  kicker: `${COUNT} terms`,
  subtitle:
    "The vocabulary a CBTC specification, bid or design review takes for granted — grouped the way the words actually appear in the work rather than alphabetically.",
  description:
    `Free CBTC glossary with ${COUNT} terms and acronyms: subsystems, separation and capacity, odometry, communications, GoA levels, safety and assurance, standards, procurement, testing and interfaces.`,
  keywords: [
    "CBTC glossary",
    "CBTC acronyms",
    "rail signaling glossary",
    "ATP ATO ATS definition",
    "movement authority definition",
    "GoA definition",
    "train control terminology",
  ],
  version: "v1.0",
  updated: "September 2026",
  updatedISO: "2026-09-01",
  publishedISO: "2026-09-01",
  page: { format: "Letter", landscape: false },
  multipage: true,
  bookRef: "vocabulary used across both volumes",

  lede:
    `${COUNT} terms, organized by subsystem rather than alphabetically — because that is how they arrive. ` +
    "When an RFP starts describing the Data Communication System, six related terms follow within the same " +
    "paragraph. Read by section and the vocabulary builds itself; use it alphabetically and you learn definitions " +
    "without learning how the words relate.",

  whatsInside: [
    `${COUNT} terms across ${GROUPS.length} sections, each defined in one or two sentences.`,
    "Core subsystems: ATP, ATO, ATS, zone controller, VOBC, DCS and the rest of the architecture.",
    "Separation and capacity: movement authority, end of authority, moving block, headway, TPHPD, braking curve.",
    "Position and odometry, including why three sensor types are fused and what balises are actually for.",
    "All five GoA levels plus the operating and degraded modes that surround them.",
    "Safety and assurance: SIL, THR, vital and non-vital, the safety case, 2oo2 and 2oo3 architectures.",
    "Standards, procurement, testing and the external systems outside the IEC 62290 boundary.",
    "Where two terms are commonly confused — PTC and CBTC, fixed and virtual block, FTA the analysis and FTA the agency — the entries say so.",
  ],

  landingBody: `
      <h2 class="res-h2">Why it is not alphabetical</h2>
      <p>
        An alphabetical glossary is easy to search and useless to learn from. It puts <em>axle counter</em> next to
        <em>ATS</em> and separates <em>movement authority</em> from <em>end of authority</em>, which is exactly
        backwards: those two terms only make sense together. This sheet groups terms the way the work presents
        them &mdash; subsystems, then separation, then position, then communications, then automation grades, then
        assurance, standards, procurement, testing and interfaces. Read a section end to end and you have the
        vocabulary for one conversation.
      </p>
      <h2 class="res-h2">The confusions worth pre-empting</h2>
      <p>
        A few pairs cause most of the misunderstanding in US practice. <b>PTC and CBTC</b> are not variants of one
        another: PTC is fixed-block mainline overspeed enforcement under a different regulator, and calling a CBTC
        project "PTC for metros" will mislead everyone in the room. <b>FTA</b> means Fault Tree Analysis to a safety
        engineer and the Federal Transit Administration to a program manager, often in the same meeting.
        <b>Vital and non-vital</b> is not a synonym for important and unimportant &mdash; ATS is non-vital and
        indispensable. And <b>SIL 4</b> is a design posture with an evidence burden, not a certificate a supplier
        holds.
      </p>`,

  files: [
    {
      name: "cbtc-acronyms-glossary-v1.pdf",
      label: "Download PDF",
      ext: "pdf",
      mime: "application/pdf",
      size: "",
    },
  ],

  sourceNote:
    "Compiled by Chunjun (Francisco) Wang from the vocabulary used across <em>Communications-Based Train Control</em>, " +
    "Volumes 1 and 2. Definitions are deliberately short — the long-form treatment of each concept is in the book. " +
    "Where usage differs between suppliers or between US and international practice, the entry says which is which.",

  printBody: `
  <div class="cols2 gloss-wrap">
${body}
  </div>`,
};
