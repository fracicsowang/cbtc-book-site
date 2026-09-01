// CBTC vs Conventional Signaling — the eight axes on which they diverge.
// Source: Vol. 1 Ch. 1 plus the blog article of the same name. The numbers are
// the point of the sheet; each one is traceable to a named deployment.

export default {
  slug: "cbtc-vs-conventional-signaling",
  title: "CBTC vs Conventional Signaling",
  kicker: "Side-by-side comparison",
  subtitle:
    "Eight axes on which moving-block CBTC and fixed-block signaling actually diverge — with the US deployment numbers that make the business case.",
  description:
    "Free side-by-side comparison of CBTC and conventional fixed-block signaling: separation logic, train detection, capacity ceilings, safety model, wayside count, cost, degraded mode and supply chain — with real US and international figures.",
  keywords: [
    "CBTC vs conventional signaling",
    "CBTC vs fixed block",
    "moving block vs fixed block",
    "CBTC capacity increase",
    "CBTC retrofit cost",
    "track circuit vs onboard position",
    "transit signaling comparison",
  ],
  version: "v1.0",
  updated: "September 2026",
  updatedISO: "2026-09-01",
  publishedISO: "2026-09-01",
  page: { format: "Letter", landscape: false },
  bookRef: "Volume 1, Chapter 1 — The Evolution of Train Control",

  lede:
    "Fixed-block signaling is not one technology but a century-long family: mechanical interlockings, relay logic, " +
    "color-light aspects, cab signaling. CBTC is a tightly defined architecture in IEEE 1474.1. This sheet compares " +
    "them where the comparison is fair — on the eight axes that change what a line can actually do — and attaches a " +
    "real number to each.",

  whatsInside: [
    "All eight axes in one table, from separation logic to supply-chain concentration.",
    "Capacity figures from real conversions: Paris Line 1, Hong Kong Tsuen Wan, and the NYCT L Line.",
    "The capital-cost ranges per 10 km for a conventional resignaling versus a CBTC retrofit.",
    "Wayside hardware counts before and after — where the maintenance workload actually goes.",
    "Why every other difference on the list follows from the first one.",
  ],

  landingBody: `
      <h2 class="res-h2">One difference, seven consequences</h2>
      <p>
        A fixed-block system divides the track into sections and lets one train occupy each. Minimum headway is
        therefore the time to traverse a block, plus the following train's braking distance, plus margins. A zone
        controller in a CBTC system knows each train's position to within one to two meters, knows its declared
        braking performance, and computes a Movement Authority that ends a safe distance behind the rear of the train
        ahead. The buffer is virtual and resized continuously.
      </p>
      <p>
        Everything else on the sheet follows from that. Detection moves from the wayside to the train. The capacity
        ceiling rises 20 to 40 percent. Safety moves from operator compliance with a discrete aspect to continuous
        supervision, so the SPAD disappears as a category rather than being reduced. A hundred and fifty wayside
        signal heads collapse into a handful of zone controllers. And the supplier base narrows from a deep,
        second-sourceable market to roughly five companies.
      </p>
      <h2 class="res-h2">The numbers worth quoting</h2>
      <p>
        Paris Métro Line 1 went from about 20 to 27 trains per hour after its Siemens conversion. Hong Kong's Tsuen Wan
        Line went from 18 to 24. The L Line, the US flagship, sustains 24 to 29 — up from roughly 20, with no civil
        works. On cost: a conventional resignaling on a typical US metro line runs $8&ndash;15 million per 10 km of
        track; a CBTC retrofit on the same line runs $15&ndash;25 million per 10 km before fleet equipment. Those two
        ranges, side by side, are the entire capital argument.
      </p>`,

  files: [
    {
      name: "cbtc-vs-conventional-signaling-v1.pdf",
      label: "Download PDF",
      ext: "pdf",
      mime: "application/pdf",
      size: "",
    },
  ],

  sourceNote:
    'Adapted from <em>Communications-Based Train Control</em>, Volume 1, Chapter 1, by Chunjun (Francisco) Wang, ' +
    "and the companion article on the eight differences. Capacity figures are for peak trains per hour per direction " +
    "on the named lines; cost ranges are US brownfield practice and exclude fleet equipment unless stated.",

  printBody: `
  <table class="rt">
    <thead>
      <tr><th scope="col">Axis</th><th scope="col">Conventional fixed block</th><th scope="col">CBTC</th></tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Separation logic</th>
        <td>Fixed sections. One train per block; the follower waits until the block is fully cleared.</td>
        <td>Computed buffers. A Movement Authority ends a safe distance behind the train ahead, resized continuously.</td>
      </tr>
      <tr>
        <th scope="row">Train detection</th>
        <td>Track circuit. The wayside infers occupancy from shorted rails and never knows where in the block.</td>
        <td>Onboard report. The train fixes its own position by sensor fusion and transmits it dozens of times a minute.</td>
      </tr>
      <tr>
        <th scope="row">Capacity ceiling</th>
        <td>24&ndash;28 trains/hour/direction in practice, set by block length, dwell variability and operator reaction.</td>
        <td>30+ trains/hour/direction. A well-designed line lifts the ceiling 20&ndash;40&nbsp;percent.</td>
      </tr>
      <tr>
        <th scope="row">Safety model</th>
        <td>Discrete signal compliance. Safety rests on the operator reading and obeying an aspect; failures are logged as SPADs.</td>
        <td>Continuous supervision. ATP compares speed against the permitted curve every cycle and brakes without consulting the driver.</td>
      </tr>
      <tr>
        <th scope="row">Wayside infrastructure</th>
        <td>Dense. A 50 km line typically carries 150&ndash;200 signal heads, as many track circuits, and 4&ndash;6 relay houses.</td>
        <td>Consolidated. One zone controller per 2&ndash;5 km, radio access points every 250&ndash;500 m, balises roughly every 200 m.</td>
      </tr>
      <tr>
        <th scope="row">Capital &amp; lifecycle cost</th>
        <td>Front-loaded. $8&ndash;15M per 10 km of track for a US resignaling; long-lived electromechanical assets.</td>
        <td>Distributed. $15&ndash;25M per 10 km before fleet equipment; software and radio refresh cycles recur.</td>
      </tr>
      <tr>
        <th scope="row">Degraded-mode behavior</th>
        <td>Blunt. Loss of detection or signaling drops the affected territory to restricted manual working.</td>
        <td>Graduated. Defined fallbacks step down through reduced-performance modes before reaching manual.</td>
      </tr>
      <tr>
        <th scope="row">Vendor &amp; supply chain</th>
        <td>Many. A deep, fragmented base with real second-sourcing and decades of installed-base spares.</td>
        <td>Few. Roughly five suppliers worldwide; the platform choice is a multi-decade commitment.</td>
      </tr>
    </tbody>
  </table>

  <div class="note">
    <b>The first row causes the other seven.</b> Once separation stops being a property of the infrastructure and
    becomes a computation over live train state, detection has to move onboard, the capacity ceiling stops being set
    by block length, enforcement stops depending on a human reading an aspect, and most of the wayside stops being
    necessary. Read the sheet top-down and the argument assembles itself.
  </div>

  <h2 class="sec">What the conversions actually delivered</h2>
  <table class="rt">
    <thead>
      <tr><th scope="col">Line</th><th scope="col">Before</th><th scope="col">After</th><th scope="col">Note</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Paris Métro Line 1</th><td class="c">~20 tph</td><td class="c">27 tph</td>
          <td>Siemens conversion of an operating line, carried out under traffic.</td></tr>
      <tr><th scope="row">Hong Kong Tsuen Wan</th><td class="c">18 tph</td><td class="c">24 tph</td>
          <td>A third more throughput on unchanged civil infrastructure.</td></tr>
      <tr><th scope="row">NYCT L Line</th><td class="c">~20 tph</td><td class="c">24&ndash;29 tph</td>
          <td>The US flagship retrofit; no civil works. Roughly $48M per km on a complex line.</td></tr>
    </tbody>
  </table>

  <div class="note">
    <b>Where the argument is usually lost.</b> Not on capacity, which is easy to evidence, but on the last row.
    A fixed-block estate can be maintained from a deep parts market for fifty years. A CBTC line ties the agency to
    one of about five suppliers for the life of the asset, which is why interface specifications, data rights and
    spares terms belong in the RFP rather than in the first change order.
  </div>`,
};
