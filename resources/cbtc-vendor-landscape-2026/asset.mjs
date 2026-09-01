// CBTC Vendor Landscape 2026.
// Source: Vol. 1 Ch. 15.1 (Table 15.1, tier-2, consolidation, Buy America) plus
// the market-size article. The article's refusal to quote a single market number
// is carried over deliberately — the published estimates differ by 4x.

export default {
  slug: "cbtc-vendor-landscape-2026",
  title: "CBTC Vendor Landscape 2026",
  kicker: "Supplier market",
  subtitle:
    "Who actually supplies CBTC in 2026, what each platform is called, where it runs in the US, and what two mergers did to the competitive field.",
  description:
    "Free CBTC vendor landscape 2026: Siemens Trainguard MT, Hitachi Rail SelTrac, Alstom Urbalis/CITYFLO and Wabtec, with installed base, US projects, tier-2 suppliers, consolidation timeline and Buy America footprints.",
  keywords: [
    "CBTC vendors",
    "CBTC vendor landscape 2026",
    "Siemens Trainguard MT",
    "Hitachi Rail SelTrac",
    "Alstom Urbalis CITYFLO",
    "CBTC market size",
    "CBTC supplier comparison",
  ],
  version: "v1.0",
  updated: "September 2026",
  updatedISO: "2026-09-01",
  publishedISO: "2026-09-01",
  page: { format: "Letter", landscape: false },
  // Four tables plus two notes exceed a landscape sheet; portrait flow keeps
  // the type at full size instead of shrinking it to 80%.
  multipage: true,
  bookRef: "Volume 1, Chapter 15 — Vendor Landscape",

  lede:
    "Two mergers in five years reshaped this market: Alstom absorbed Bombardier Transportation in 2021, and Hitachi " +
    "Rail closed its acquisition of Thales' Ground Transportation Systems in May 2024 for roughly €1.66 billion, " +
    "taking on about 9,000 engineers and the SelTrac family. A US agency writing a specification today is choosing " +
    "among fewer, larger suppliers than one writing in 2019 — and for a longer commitment than any other system it buys.",

  whatsInside: [
    "The four tier-1 suppliers: platform name, global installed base, US flagship projects and what each is actually known for.",
    "Tier-2 and regional suppliers, including where CRRC's roughly 15–20 percent global share does and does not compete.",
    "The consolidation timeline and what it changed about US competitive bidding.",
    "Buy America manufacturing footprints, by vendor and by US location.",
    "Market size stated honestly as a range with each estimate attributed — published figures differ by a factor of four.",
    "Which agency is running which platform, as of 2026.",
  ],

  landingBody: `
      <h2 class="res-h2">On market-size numbers</h2>
      <p>
        This sheet deliberately does not print a single headline market figure, because the published ones disagree
        by roughly 4&times;. Fortune Business Insights valued the CBTC market near USD 9.5 billion in 2025 and projects
        about USD 20 billion by 2034 at roughly 8.7&nbsp;percent CAGR. Global Market Insights sized what it calls the
        same category at around USD 2.4 billion in 2024, with a comparable growth rate near 8.1&nbsp;percent. The gap
        is a definitional one — whether "CBTC" means urban moving-block signaling alone, or a broader train-control
        category that sweeps in mainline products. Quoting either as fact, without saying which definition it uses,
        is how a business case acquires a number nobody can defend in review.
      </p>
      <h2 class="res-h2">What consolidation did to procurement</h2>
      <p>
        Three things. Product lines merged, so Alstom folded Urbalis and CITYFLO together and Hitachi integrated
        SelTrac with the Ansaldo STS estate — which reduces vendor engineering overhead but means agencies must invest
        more in understanding what a "platform" now denotes. The strategic focus shifted toward modular,
        software-defined architectures where one core ATP/ATS engine is configured for PTC, CBTC moving-block or
        hybrid operation. And the bidder pool for a large US resignaling narrowed to a realistic three.
      </p>`,

  files: [
    {
      name: "cbtc-vendor-landscape-2026-v1.pdf",
      label: "Download PDF",
      ext: "pdf",
      mime: "application/pdf",
      size: "",
    },
  ],

  sourceNote:
    'Vendor profiles from <em>Communications-Based Train Control</em>, Volume 1, Chapter 15 (Table 15.1), by ' +
    "Chunjun (Francisco) Wang, updated to September 2026. Installed-base figures are order-of-magnitude and vendor- " +
    "reported. Market-size estimates are attributed to the firms that produced them and are not reconciled, because " +
    "they measure different categories.",

  printBody: `
  <h2 class="sec">Tier-1 suppliers</h2>
  <table class="rt">
    <thead>
      <tr><th scope="col">Vendor</th><th scope="col">Platform</th><th scope="col">Installed base</th>
          <th scope="col">US key projects</th><th scope="col">Known for</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Siemens Mobility</th><td>Trainguard MT</td><td class="c">~380 km</td>
          <td>NYCT Line 7 (40 km); NYCT L Line (15 km, commissioned 2017)</td>
          <td>25 years of Paris Line 14 heritage; tightly integrated ecosystem.</td></tr>
      <tr><th scope="row">Hitachi Rail</th><td>SelTrac <span style="white-space:nowrap">(ex-Thales GTS)</span></td><td class="c">~400+ km</td>
          <td>BART TCMP (200+ km, awarded 2018)</td>
          <td>40 years of Vancouver driverless operation; the deepest GoA 4 record.</td></tr>
      <tr><th scope="row">Alstom</th><td>Urbalis / CITYFLO</td><td class="c">~500 km</td>
          <td>Muni Metro (150 km); MBTA Green Line design</td>
          <td>ERTMS/ETCS compatibility; North American manufacturing.</td></tr>
      <tr><th scope="row">Wabtec</th><td>I-ETMS</td><td class="c">~15,000 km (freight PTC)</td>
          <td>LIRR / NJ Transit advisory</td>
          <td>The PTC-to-CBTC convergence bridge rather than an urban CBTC incumbent.</td></tr>
    </tbody>
  </table>

  <h2 class="sec">Tier-2 and regional</h2>
  <table class="rt">
    <thead>
      <tr><th scope="col">Supplier</th><th scope="col">Base</th><th scope="col">Position relevant to a US buyer</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">CRRC / Traffic Control Technology</th><td>China</td>
          <td>Dominates Chinese metropolitan CBTC; an estimated 15–20&nbsp;percent of the global market. Effectively absent from North America on regulatory and supply-chain-security grounds.</td></tr>
      <tr><th scope="row">Mitsubishi Electric</th><td>Japan</td>
          <td>Substantial CBTC in Japan and automated people movers in North America; limited direct US rapid-transit CBTC presence.</td></tr>
      <tr><th scope="row">CAF Signalling</th><td>Spain</td>
          <td>Active across European and Latin American systems; limited North American penetration.</td></tr>
      <tr><th scope="row">Nippon Signal · Kyosan Electric</th><td>Japan</td>
          <td>Concentrated on the domestic market; minimal US activity.</td></tr>
    </tbody>
  </table>

  <h2 class="sec">Consolidation, and what it changed</h2>
  <table class="rt">
    <thead>
      <tr><th scope="col">Event</th><th scope="col">Effect on a US procurement</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Alstom acquires Bombardier Transportation, 2021</th>
          <td>Urbalis and CITYFLO merged into one product family. Agencies must now establish which platform generation a bid actually proposes.</td></tr>
      <tr><th scope="row">Hitachi Rail acquires Thales GTS, May 2024 (~€1.66 bn, ~9,000 engineers)</th>
          <td>SelTrac joins the Ansaldo STS estate under one owner. Hitachi becomes the deepest GoA 4 supplier in the Western market.</td></tr>
      <tr><th scope="row">Net effect</th>
          <td>A realistic bidder pool of three on a large US resignaling — Siemens, Alstom, Hitachi Rail — which raises the value of interface specifications, data rights and second-source strategy in the RFP.</td></tr>
    </tbody>
  </table>

  <div class="note">
    <b>Buy America footprint.</b> Siemens &mdash; Sacramento, CA and New Jersey.
    Hitachi Rail &mdash; Coppell, TX and Pittsburgh, PA. Alstom &mdash; Rochester, Hornell and
    Plattsburgh, NY. Wabtec &mdash; multiple US facilities. All four tier-1 suppliers maintain US
    manufacturing and engineering capacity, so domestic content is rarely the discriminator it is
    assumed to be; verify against the specific facility a bid actually names.
  </div>

  <div class="note">
    <b>Do not quote a single market size.</b> Fortune Business Insights put the CBTC market near
    USD 9.5&nbsp;bn in 2025 growing to about USD 20&nbsp;bn by 2034 (~8.7&nbsp;% CAGR); Global Market
    Insights sized the same-named category around USD 2.4&nbsp;bn in 2024 (~8.1&nbsp;% CAGR). Both may
    be internally sound; they are measuring different things. State the range and the definition, or
    leave the figure out of the business case.
  </div>`,
};
