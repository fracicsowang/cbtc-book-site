// diagram.mjs — the CBTC end-to-end architecture drawing, authored as SVG so
// it ships as a real vector download rather than a screenshot of a book figure.
//
// Content follows Vol. 1 Ch. 3: the IEC 62290 system boundary (ATP/ATO/ATS),
// the three physical tiers, and the external systems that sit outside the
// boundary behind defined interfaces. Geometry is on a 4px grid.

import { BRAND as B } from "../_lib/brand.mjs";

// The token stacks quote family names with double quotes, which truncates an
// SVG font-family="" attribute at the first inner quote. Inside the PDF the
// page CSS masked it; the standalone SVG fell back to the browser's serif.
const SERIF = B.serif.replace(/"/g, "'");
const SANS = B.sans.replace(/"/g, "'");
const MONO = B.mono.replace(/"/g, "'");

const W = 1240;
const H = 860;

// tier geometry
const COL_X = 36, COL_W = 852;
const EXT_X = 920, EXT_W = 284;
const T1 = { y: 64, h: 140 };   // central
const T2 = { y: 252, h: 196 };  // wayside
const T3 = { y: 572, h: 196 };  // onboard

const box = (x, y, w, h, title, sub, opts = {}) => {
  const fill = opts.fill || "#FFFFFF";
  const stroke = opts.stroke || B.navy;
  const titleFill = opts.titleFill || B.navy;
  const subFill = opts.subFill || B.charDim;
  const badge = opts.badge
    ? `<text x="${x + w - 12}" y="${y + 19}" text-anchor="end"
         font-family="${MONO}" font-size="9" letter-spacing="1.2"
         fill="${opts.badgeFill || B.amberInk}">${opts.badge}</text>`
    : "";
  const subLines = (sub || "").split("\n");
  const subY = y + (opts.titleY || 40) + 17;
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2"
          fill="${fill}" stroke="${stroke}" stroke-width="${opts.sw || 1.5}"/>
    ${opts.accent ? `<rect x="${x}" y="${y}" width="${w}" height="3" fill="${opts.accent}"/>` : ""}
    ${badge}
    <text x="${x + 14}" y="${y + (opts.titleY || 40)}"
          font-family="${SANS}" font-size="15" font-weight="600" fill="${titleFill}">${title}</text>
    ${subLines
      .map(
        (l, i) =>
          `<text x="${x + 14}" y="${subY + i * 15}" font-family="${SANS}" font-size="11" fill="${subFill}">${l}</text>`,
      )
      .join("\n    ")}
  </g>`;
};

const tier = (t, label, note) => `<g>
    <rect x="${COL_X}" y="${t.y}" width="${COL_W}" height="${t.h}" rx="3"
          fill="${B.paper2}" stroke="${B.charRule}" stroke-width="1"/>
    <rect x="${COL_X}" y="${t.y}" width="${COL_W}" height="28" rx="3" fill="${B.navy}"/>
    <rect x="${COL_X}" y="${t.y + 22}" width="${COL_W}" height="6" fill="${B.navy}"/>
    <text x="${COL_X + 14}" y="${t.y + 19}" font-family="${MONO}" font-size="11"
          letter-spacing="2.4" fill="${B.ink}">${label}</text>
    <text x="${COL_X + COL_W - 14}" y="${t.y + 19}" text-anchor="end" font-family="${MONO}"
          font-size="9.5" letter-spacing="1.4" fill="${B.amber}">${note}</text>
  </g>`;

const arrow = (x1, y1, x2, y2, opts = {}) =>
  `<path d="M ${x1} ${y1} L ${x2} ${y2}" fill="none" stroke="${opts.stroke || B.navyMid}"
     stroke-width="${opts.sw || 1.6}" ${opts.dash ? `stroke-dasharray="${opts.dash}"` : ""}
     marker-end="url(#${opts.head || "ah"})"/>`;

const label = (x, y, text, opts = {}) =>
  `<text x="${x}" y="${y}" text-anchor="${opts.anchor || "middle"}" font-family="${MONO}"
     font-size="${opts.size || 9.5}" letter-spacing="1.1" fill="${opts.fill || B.charDim}">${text}</text>`;

export function architectureSvg({ standalone = false } = {}) {
  const ext = [
    ["Platform Screen Doors", "Independent position sensing"],
    ["Electronic Interlocking", "Switches, signals, routes"],
    ["SCADA", "Traction power, ventilation"],
    ["Passenger Information", "Predictions from ATS"],
    ["AFC &amp; Building Systems", "Fare collection, station plant"],
    ["Depot Management", "Stabling, wash, maintenance"],
  ];
  const extY = T1.y + 78;
  const extH = 96;

  // Cropping to the drawing changes the aspect ratio from 1.44 to 1.71, which
  // is what the space left on a landscape sheet actually is — uncropped, the
  // diagram is height-limited and wastes a third of the page width.
  const vb = standalone ? `0 0 ${W} ${H}` : `0 56 ${W} 724`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${W}" height="${H}"
     role="img" aria-labelledby="ttl desc"${standalone ? ' font-family="' + SANS + '"' : ""}>
  <title id="ttl">CBTC end-to-end system architecture</title>
  <desc id="desc">Three-tier CBTC architecture: a central ATS layer, a wayside layer of zone
    controllers and interlocking, and an onboard layer built around the VOBC, with the external
    systems that sit outside the IEC 62290 system boundary behind defined interfaces.</desc>
  <defs>
    <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="${B.navyMid}"/>
    </marker>
    <marker id="ahA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="${B.amberInk}"/>
    </marker>
  </defs>

  <rect x="0" y="0" width="${W}" height="${H}" fill="${B.paper}"/>

  <!-- title block: standalone downloads only — the PDF sheet has its own header -->
  ${standalone ? `<g>
    <rect x="${COL_X}" y="26" width="22" height="1.5" fill="${B.amber}"/>
    <text x="${COL_X + 32}" y="30" font-family="${MONO}" font-size="10" letter-spacing="2.2"
          fill="${B.charDim}">CBTC SYSTEM ARCHITECTURE &middot; ATC = ATP + ATO + ATS</text>
    <text x="${COL_X}" y="54" font-family="${SERIF}" font-size="19" font-weight="600"
          fill="${B.char}">Three tiers, one authority hierarchy: ATP &gt; ATO &gt; ATS.</text>
  </g>` : ""}

  <!-- ─── CENTRAL ─── -->
  ${tier(T1, "CENTRAL", "SIL 0 &middot; ADVISORY")}
  ${box(COL_X + 20, T1.y + 44, 236, 80, "ATS Server", "Timetable execution,\nregulation, route requests", { accent: B.cyan, badge: "SIL 0" })}
  ${box(COL_X + 272, T1.y + 44, 236, 80, "Operator Workstations", "Line overview, manual\nintervention, alarms", { accent: B.cyan })}
  ${box(COL_X + 524, T1.y + 44, 308, 80, "Performance &amp; Playback", "Headway regulation, energy\noptimization, incident replay", { accent: B.cyan })}

  <!-- lane 1 -->
  ${arrow(COL_X + 150, T1.y + T1.h, COL_X + 150, T2.y - 2)}
  ${label(COL_X + 162, T1.y + T1.h + 22, "ROUTE REQUESTS &middot; TIMETABLE TARGETS", { anchor: "start" })}
  ${arrow(COL_X + 700, T2.y - 2, COL_X + 700, T1.y + T1.h)}
  ${label(COL_X + 688, T1.y + T1.h + 22, "TRAIN POSITIONS &middot; SYSTEM STATUS", { anchor: "end" })}

  <!-- ─── WAYSIDE ─── -->
  ${tier(T2, "WAYSIDE", "ZC = SIL 4")}
  ${box(COL_X + 20, T2.y + 44, 200, 132, "Zone Controller A", "Owns one 2–5 km zone.\nTracks every train in it.\nIssues Movement\nAuthorities.", { accent: B.amber, badge: "SIL 4", sw: 2 })}
  ${box(COL_X + 252, T2.y + 44, 200, 132, "Zone Controller B", "Neighboring zone.\nTrains are handed off\nat the boundary with\nno gap in protection.", { accent: B.amber, badge: "SIL 4", sw: 2 })}
  ${box(COL_X + 468, T2.y + 44, 176, 132, "Interlocking (EI)", "Sets and locks routes.\nOwns switches and\nsignals. Confirms back\nto the zone controller.")}
  ${box(COL_X + 660, T2.y + 44, 172, 132, "DCS Access Points", "Overlapping 2.4 / 5 GHz\nradio along the guideway.\nRedundant coverage;\nsome lines pilot LTE-R.")}
  ${arrow(COL_X + 220, T2.y + 110, COL_X + 252, T2.y + 110, { head: "ahA", stroke: B.amberInk })}

  <!-- lane 2: the track, balises and the radio link -->
  <g>
    <line x1="${COL_X + 20}" y1="480" x2="${COL_X + COL_W - 20}" y2="480"
          stroke="${B.navy}" stroke-width="2"/>
    ${[100, 260, 420, 560]
      .map(
        (dx) =>
          `<rect x="${COL_X + dx}" y="472" width="16" height="16" fill="${B.amber}" stroke="${B.navy}" stroke-width="1.2"/>`,
      )
      .join("\n    ")}
    ${label(COL_X + 20, 466, "TRACK &middot; BALISES AT FIXED POINTS PROVIDE ABSOLUTE POSITION REFERENCE", { anchor: "start", size: 9 })}
  </g>
  ${arrow(COL_X + 740, 456, COL_X + 740, 508, { dash: "5 4", head: "ahA", stroke: B.amberInk })}
  ${arrow(COL_X + 700, 508, COL_X + 700, 456, { dash: "5 4", head: "ahA", stroke: B.amberInk })}
  ${label(COL_X + 832, 528, "MOVEMENT AUTHORITY &darr; &middot; POSITION REPORT &uarr;", { anchor: "end", size: 9, fill: B.amberInk })}
  ${label(COL_X + 832, 543, "REFRESHED EVERY 200–500 ms OVER THE DCS", { anchor: "end", size: 9 })}

  <!-- ─── ONBOARD ─── -->
  ${tier(T3, "ONBOARD", "ATP = SIL 4")}
  <g>
    <rect x="${COL_X + 20}" y="${T3.y + 44}" width="300" height="132" rx="2"
          fill="#FFFFFF" stroke="${B.navy}" stroke-width="2"/>
    <rect x="${COL_X + 20}" y="${T3.y + 44}" width="300" height="3" fill="${B.amber}"/>
    <text x="${COL_X + 34}" y="${T3.y + 72}" font-family="${SANS}" font-size="15" font-weight="600"
          fill="${B.navy}">VOBC</text>
    <text x="${COL_X + 306}" y="${T3.y + 63}" text-anchor="end" font-family="${MONO}" font-size="9"
          letter-spacing="1.2" fill="${B.amberInk}">VEHICLE ON-BOARD CONTROLLER</text>
    <rect x="${COL_X + 34}" y="${T3.y + 84}" width="132" height="76" rx="2" fill="${B.navy}"/>
    <text x="${COL_X + 46}" y="${T3.y + 104}" font-family="${SANS}" font-size="13" font-weight="600" fill="${B.ink}">ATP</text>
    <text x="${COL_X + 46}" y="${T3.y + 121}" font-family="${SANS}" font-size="10" fill="${B.inkDim}">Enforces the braking</text>
    <text x="${COL_X + 46}" y="${T3.y + 134}" font-family="${SANS}" font-size="10" fill="${B.inkDim}">curve to the End of</text>
    <text x="${COL_X + 46}" y="${T3.y + 147}" font-family="${SANS}" font-size="10" fill="${B.inkDim}">Authority. Overrides all.</text>
    <rect x="${COL_X + 176}" y="${T3.y + 84}" width="132" height="76" rx="2" fill="#FFFFFF" stroke="${B.charRule}"/>
    <text x="${COL_X + 188}" y="${T3.y + 104}" font-family="${SANS}" font-size="13" font-weight="600" fill="${B.navy}">ATO</text>
    <text x="${COL_X + 188}" y="${T3.y + 121}" font-family="${SANS}" font-size="10" fill="${B.charDim}">Drives inside the ATP</text>
    <text x="${COL_X + 188}" y="${T3.y + 134}" font-family="${SANS}" font-size="10" fill="${B.charDim}">envelope: stopping</text>
    <text x="${COL_X + 188}" y="${T3.y + 147}" font-family="${SANS}" font-size="10" fill="${B.charDim}">accuracy, energy, doors.</text>
  </g>
  ${box(COL_X + 336, T3.y + 44, 180, 132, "Odometry Fusion", "Tachometer, Doppler\nradar and accelerometer,\ncorrected at each balise\nto bound drift.")}
  ${box(COL_X + 532, T3.y + 44, 144, 132, "Radio &amp; Balise", "Redundant antennas\nto the DCS. Balise\nreader for absolute\nposition.")}
  ${box(COL_X + 692, T3.y + 44, 140, 132, "Train Interface", "Traction, service and\nemergency brake,\ndoor enable, to the\ntrain systems.")}
  ${arrow(COL_X + 320, T3.y + 110, COL_X + 336, T3.y + 110)}
  ${arrow(COL_X + 532, T3.y + 110, COL_X + 516, T3.y + 110)}
  ${arrow(COL_X + 676, T3.y + 110, COL_X + 692, T3.y + 110)}

  <!-- ─── EXTERNAL SYSTEMS ─── -->
  <g>
    <rect x="${EXT_X}" y="${T1.y}" width="${EXT_W}" height="${T3.y + T3.h - T1.y}" rx="3"
          fill="none" stroke="${B.charRule}" stroke-width="1.5" stroke-dasharray="6 5"/>
    <rect x="${EXT_X}" y="${T1.y}" width="${EXT_W}" height="28" rx="3" fill="${B.paper2}"/>
    <rect x="${EXT_X}" y="${T1.y + 22}" width="${EXT_W}" height="6" fill="${B.paper2}"/>
    <text x="${EXT_X + 14}" y="${T1.y + 19}" font-family="${MONO}" font-size="11" letter-spacing="2.4"
          fill="${B.char}">OUTSIDE THE BOUNDARY</text>
    <text x="${EXT_X + 14}" y="${T1.y + 48}" font-family="${SANS}" font-size="11"
          fill="${B.charDim}">Each reached through an Interface</text>
    <text x="${EXT_X + 14}" y="${T1.y + 63}" font-family="${SANS}" font-size="11"
          fill="${B.charDim}">Control Document (ICD).</text>
  </g>
  ${ext
    .map(
      ([name, sub], i) =>
        box(EXT_X + 16, extY + i * extH, EXT_W - 32, extH - 14, name, sub, {
          fill: B.paper,
          stroke: B.charRule,
          titleFill: B.char,
          sw: 1,
          titleY: 30,
        }),
    )
    .join("\n  ")}

  <!-- footnote: standalone only; the PDF sheet has its own footer -->
  ${standalone ? `<g>
    <line x1="${COL_X}" y1="${T3.y + T3.h + 26}" x2="${W - COL_X}" y2="${T3.y + T3.h + 26}"
          stroke="${B.charRule}" stroke-width="1"/>
    <text x="${COL_X}" y="${T3.y + T3.h + 48}" font-family="${SANS}" font-size="11" fill="${B.charDim}">
      The IEC 62290 system boundary contains ATP, ATO and ATS only. Everything in the dashed column is external infrastructure reached through an Interface Control Document —
    </text>
    <text x="${COL_X}" y="${T3.y + T3.h + 64}" font-family="${SANS}" font-size="11" fill="${B.charDim}">
      and interface scope, not core CBTC function, is what most often moves a project's schedule.
    </text>
    <text x="${W - COL_X}" y="${T3.y + T3.h + 48}" text-anchor="end" font-family="${MONO}" font-size="9"
          letter-spacing="1.4" fill="${B.charDim}">CBTCBOOK.COM</text>
    <text x="${W - COL_X}" y="${T3.y + T3.h + 64}" text-anchor="end" font-family="${MONO}" font-size="9"
          letter-spacing="1.4" fill="${B.charDim}">FREE TO SHARE WITH ATTRIBUTION</text>
  </g>` : ""}
</svg>`;
}

export const DIAGRAM_SIZE = { W, H };
