// Global CBTC Projects Database — PDF plus a CSV people can actually work with.

import { PROJECTS, FIELDS, toCsv } from "./data.mjs";

const cell = (v) => (String(v ?? "").trim() === "" ? "&mdash;" : v);

const rows = (filter) =>
  PROJECTS.filter(filter)
    .map(
      (p) => `      <tr>
        <th scope="row">${p.system}</th>
        <td>${cell(p.supplier)}${p.platform ? `<br><span style="opacity:.7">${p.platform}</span>` : ""}</td>
        <td class="c">${cell(p.goa)}</td>
        <td>${cell(p.opened)}</td>
        <td>${cell(p.length)}${p.stations ? ` · ${p.stations} sta` : ""}</td>
        <td>${cell(p.headway)}</td>
        <td>${cell(p.note)}</td>
      </tr>`,
    )
    .join("\n");

const table = (filter) => `
  <table class="rt db">
    <thead>
      <tr><th scope="col">System / line</th><th scope="col">Supplier</th><th scope="col">GoA</th>
          <th scope="col">Opened / converted</th><th scope="col">Length</th>
          <th scope="col">Peak headway</th><th scope="col">Note</th></tr>
    </thead>
    <tbody>
${rows(filter)}
    </tbody>
  </table>`;

const usCount = PROJECTS.filter((p) => p.country === "US").length;
const intlCount = PROJECTS.length - usCount;

export default {
  slug: "global-cbtc-projects-database",
  title: "Global CBTC Projects Database",
  kicker: "Deployment reference",
  subtitle: `${PROJECTS.length} benchmark CBTC deployments — supplier, automation grade, conversion date, length and peak throughput — assembled from the manuscript rather than from vendor marketing.`,
  description:
    "Free CBTC projects database (PDF + CSV): benchmark deployments in the US and internationally with supplier, GoA level, opening or conversion date, route length and peak headway, each field sourced and unverified cells left blank.",
  keywords: [
    "CBTC projects database",
    "CBTC deployments list",
    "global CBTC projects",
    "driverless metro list",
    "CBTC conversion dates",
    "metro CBTC suppliers by line",
    "GoA 4 systems list",
  ],
  version: "v1.0",
  updated: "September 2026",
  updatedISO: "2026-09-01",
  publishedISO: "2026-09-01",
  page: { format: "Letter", landscape: true },
  multipage: true,
  bookRef: "Volume 1, Chapters 10 and 11 — US deployments and international benchmarks",

  lede:
    `${usCount} US and ${intlCount} international deployments in one table, with the fields a business case or a ` +
    "benchmark slide actually needs. Every value traces to the manuscript or to a case study on this site. Where a " +
    "field could not be verified it is left blank rather than filled with something plausible &mdash; a reference " +
    "table people cite is worth more with honest gaps than with confident guesses.",

  whatsInside: [
    `${PROJECTS.length} deployments: ${usCount} US, ${intlCount} international benchmarks.`,
    "Supplier and platform per line, including who owns each platform after the 2021 and 2024 mergers.",
    "GoA level, opening or conversion date, route length, station count and peak headway or throughput where known.",
    "A note per row carrying the fact that makes the entry worth citing — contract value, cutover approach, ridership.",
    "CSV alongside the PDF, so the rows go straight into your own analysis.",
    "Blank cells that mean unverified, stated explicitly rather than implied.",
  ],

  landingBody: `
      <h2 class="res-h2">What this is and is not</h2>
      <p>
        It is a curated benchmark set, not a census. There are several hundred CBTC lines in service worldwide, and
        the large majority of the recent ones are in China &mdash; Beijing and Shanghai alone account for a scale of
        deployment no Western network approaches. What this table covers is the set of systems a US engineer is
        actually asked about in a design review or a board presentation: the domestic deployments, and the
        international ones that get cited as precedent.
      </p>
      <p>
        The blank cells are deliberate. It would have been easy to fill every column &mdash; station counts and
        headways are guessable within a plausible range, and nobody would immediately notice. But the value of a
        reference table is that a reader can quote a cell without checking it, and that only holds if every filled
        cell is real. Blank means unverified, not zero.
      </p>
      <h2 class="res-h2">The comparison that matters most</h2>
      <p>
        Put Paris Line 14 and Paris Line 1 next to each other. Same city, same operator, same supplier, both at
        GoA 4 &mdash; and completely different projects. Line 14 opened greenfield in 1998 with platform screen doors
        from the first day. Line 1 was converted under traffic between 2007 and 2012, with PSDs retrofitted to 86
        percent of platforms over five years, at €700M+ on an existing railway carrying 1.5 million people a day.
        The greenfield number is the one vendors quote. The brownfield number is the one a US agency should budget
        against.
      </p>`,

  files: [
    {
      name: "global-cbtc-projects-database-v1.pdf",
      label: "Download PDF",
      ext: "pdf",
      mime: "application/pdf",
      size: "",
    },
    {
      name: "global-cbtc-projects-database-v1.csv",
      label: "CSV data",
      ext: "csv",
      mime: "text/csv",
      size: "",
    },
  ],

  emitFiles: () => [
    { name: "global-cbtc-projects-database-v1.csv", content: toCsv() },
  ],

  sourceNote:
    'Compiled from <em>Communications-Based Train Control</em>, Volumes 1 and 2 (Chapters 10 and 11), by ' +
    "Chunjun (Francisco) Wang, and the case-study articles on cbtcbook.com. An empty cell means the value could not " +
    "be verified against those sources; it does not mean zero. Headways are peak, per direction. This is a curated " +
    "benchmark set, not a complete census of CBTC deployments worldwide.",

  printBody: `
  <h2 class="sec">United States</h2>
  ${table((p) => p.country === "US")}

  <div class="pagebreak"></div>

  <h2 class="sec">International benchmarks</h2>
  ${table((p) => p.country !== "US")}

  <div class="note">
    <b>Read Paris twice.</b> Line 14 opened greenfield at GoA 4 in 1998 with full platform screen doors from day one.
    Line 1 reached the same grade by conversion under traffic between 2007 and 2012, retrofitting PSDs to 86 percent
    of platforms across five years on a line carrying 1.5 million people a day, for €700M+. Same city, same operator,
    same supplier, same automation grade &mdash; and only the second number is a useful analogue for a US brownfield
    business case.
  </div>

  <div class="note">
    <b>An empty cell is unverified, not zero.</b> Every filled value on this sheet traces to the manuscript or to a
    published case study. Nothing has been interpolated to make the table look complete, so a cell you can read is a
    cell you can quote.
  </div>`,
};
