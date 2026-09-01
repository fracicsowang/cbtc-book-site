// CBTC Migration Checklist — feasibility through burn-in, with the cutover
// decision matrix. Source: Vol. 1 Ch. 12 (12.1–12.4, 12.6).

export default {
  slug: "cbtc-migration-checklist",
  title: "CBTC Migration Checklist",
  kicker: "Legacy to CBTC",
  subtitle:
    "What has to be true at each stage of a brownfield conversion, from the first business case to the ninetieth day of revenue service — plus the four cutover strategies and where each one fits.",
  description:
    "Free CBTC migration checklist for brownfield conversions: feasibility, procurement, systems engineering, safety assurance, cutover strategy selection and the first-90-day burn-in, with the US cutover decision matrix.",
  keywords: [
    "CBTC migration",
    "CBTC cutover strategy",
    "brownfield resignaling",
    "phased CBTC migration",
    "big bang cutover",
    "mixed mode operation",
    "CBTC project checklist",
  ],
  version: "v1.0",
  updated: "September 2026",
  updatedISO: "2026-09-01",
  publishedISO: "2026-09-01",
  page: { format: "Letter", landscape: false },
  // A checklist is printed and ticked; two readable pages beat one shrunk to 80%.
  multipage: true,
  bookRef: "Volume 1, Chapter 12 — Project Lifecycle",

  lede:
    "The cutover does not create problems. It reveals them. Everything before it is an opportunity to surface a " +
    "design or integration defect while there is still an exit path; the cutover itself is the one irreversible " +
    "moment, with the traveling public aboard. This sheet is the sequence of things that have to be true beforehand.",

  whatsInside: [
    "Six stages from feasibility to burn-in, as printable sign-off items.",
    "The four cutover strategies — big bang, segment-phased, fleet-phased, function-phased — with shutdown length, mixed-mode duration, rollback risk and real US examples.",
    "Mixed-mode capacity arithmetic: why a 30 tph line runs at ~20 tph until conversion completes.",
    "What belongs in a Method of Procedure, and why a 15-page MOP is worse than none.",
    "War-room roles for the cutover window, including who holds authority to stop it.",
    "The first-90-day burn-in regime.",
  ],

  landingBody: `
      <h2 class="res-h2">Choosing the cutover strategy is the decision that shapes everything else</h2>
      <p>
        Segment-phased is the most common approach in US brownfield deployments, and for good reason: risk is
        distributed, and what segment one teaches gets applied to segment two. The L Line converted in three
        geographic segments between 2006 and 2009, each with a three-to-four-day closure. Big bang concentrates all
        the risk into one 3&ndash;7 day window and makes rollback largely impractical — defensible on greenfield with
        simple topology, hard to justify on an operating urban line. Fleet-phased stages the capital but stretches
        mixed running to 18&ndash;36 months. Function-phased separates ATP from ATO and deploys them years apart.
      </p>
      <h2 class="res-h2">The parts people skip</h2>
      <p>
        A Method of Procedure is a minute-by-minute choreography of the shutdown window, with flowcharts, a
        responsibility matrix and explicit escalation criteria. A good one runs 60&ndash;100 pages; a 15-page MOP is
        worse than useless because it manufactures confidence. A full cutover rehearsal four to six weeks out — same
        procedures, same staff, same equipment, same timeline — surfaces the procedural gaps, the communication
        breakdowns and the staff-fatigue factors that a paper walkthrough never will. The L Line rehearsed each of its
        three segment cutovers, and each rehearsal improved the next.
      </p>
      <p>
        And someone in the war room must hold explicit authority to stop the cutover on safety grounds, named in the
        MOP before the window opens. If that authority is not written down, it does not exist at 03:00.
      </p>`,

  files: [
    {
      name: "cbtc-migration-checklist-v1.pdf",
      label: "Download PDF",
      ext: "pdf",
      mime: "application/pdf",
      size: "",
    },
  ],

  sourceNote:
    'Adapted from <em>Communications-Based Train Control</em>, Volume 1, Chapter 12, by Chunjun (Francisco) Wang. ' +
    "The cutover decision matrix is Table 12.7; strategy examples reflect documented US brownfield practice. " +
    "Durations assume a mid-size urban line and compress substantially on greenfield.",

  printBody: `
  <div class="cols2">
    <h3 class="phase">1 · Feasibility &amp; business case</h3>
    <ul class="check">
      <li>Strategic trigger named explicitly: capacity ceiling, asset obsolescence, or a reliability floor — not "modernization".</li>
      <li>Scope options costed side by side, including the do-nothing and the conventional-resignaling cases.</li>
      <li>Ridership and capacity forecast tied to the headway the CBTC design will actually deliver in mixed mode, not at maturity.</li>
      <li>FTA Capital Investment Grant implications assessed before the scope is frozen.</li>
      <li>Whole-life cost modeled, including the software and radio refresh cycles a legacy estate does not have.</li>
    </ul>

    <h3 class="phase">2 · Procurement</h3>
    <ul class="check">
      <li>Delivery method chosen and justified; bundled vs unbundled scope decided deliberately.</li>
      <li>Performance-based specification cites IEEE 1474 for performance <b>and</b> IEC 62290 for functional architecture and GoA.</li>
      <li>Interface Control Document scope written into the RFP: message formats, latency budgets, failure modes, acceptance criteria — per interface.</li>
      <li>Buy America compliance confirmed against each bidder's actual US footprint.</li>
      <li>Evaluation scoring published; performance guarantees and liquidated damages structured before award.</li>
      <li>Data rights, spares terms and long-term support priced now, not at the first change order.</li>
    </ul>

    <h3 class="phase">3 · Systems engineering</h3>
    <ul class="check">
      <li>V-model established with verification planned against every requirement at the matching level.</li>
      <li>Requirements under configuration management from day one; traceability maintained, not reconstructed.</li>
      <li>Architecture allocation explicit about which functions are safety-critical and which are not.</li>
      <li>Owner's engineer in place with the standing to reject vendor interpretations.</li>
      <li>Audit of every existing system the CBTC must touch — interlocking, power, SCADA, PSD, PIS, depot — completed in the concept phase.</li>
    </ul>

    <h3 class="phase">4 · Safety assurance</h3>
    <ul class="check">
      <li>Hazard analysis started early enough to change the design rather than document it.</li>
      <li>SIL allocation and tolerable hazard rates agreed and traceable to the architecture.</li>
      <li>Independent Safety Assessor appointed with genuine independence from the delivery team.</li>
      <li>State Safety Oversight and FTA pathway mapped, with submission dates on the master schedule.</li>
      <li>Safety case covers degraded modes and every train-type combination that will share track.</li>
    </ul>

    <h3 class="phase">5 · Cutover</h3>
    <ul class="check">
      <li>Strategy selected against topology, fleet size, shutdown tolerance and rollback appetite (see matrix below).</li>
      <li>Method of Procedure written at 60–100 pages with flowcharts, responsibility matrix and escalation criteria.</li>
      <li>Rollback criteria pre-defined and objective — decided before the window, not inside it.</li>
      <li>Full cutover rehearsal 4–6 weeks prior with the same people, equipment and timeline.</li>
      <li>War room staffed: system integration lead, operations lead, safety lead / ISA <b>with authority to stop</b>, vendor engineering, interlocking specialist, communications coordinator.</li>
      <li>Mixed-mode capacity expectation communicated to stakeholders in advance and in writing.</li>
    </ul>

    <h3 class="phase">6 · First 90 days</h3>
    <ul class="check">
      <li>Reduced schedule for burn-in; trains introduced in stages rather than all at once.</li>
      <li>Vendor engineering on site, not on call.</li>
      <li>Incident root-cause analysis turned around in days, with fixes tracked to closure.</li>
      <li>Capacity ramped only as evidence accumulates — the target headway is an outcome, not a launch commitment.</li>
    </ul>
  </div>

  <h2 class="sec">Cutover strategy decision matrix</h2>
  <table class="rt">
    <thead>
      <tr><th scope="col">Strategy</th><th scope="col">Best for</th><th scope="col">Shutdown</th>
          <th scope="col">Mixed mode</th><th scope="col">Rollback risk</th><th scope="col">US examples</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Big bang</th><td>Greenfield; simple topology</td><td class="c">3–7 days</td>
          <td class="c">None</td><td class="c">Moderate–high</td><td>Honolulu HART; Boston segments</td></tr>
      <tr><th scope="row">Segment-phased</th><td>Urban brownfield; complex topology</td><td class="c">3–4 days each</td>
          <td class="c">6–12 months</td><td class="c">Low</td><td>NYC L Line; NYC 7 Line</td></tr>
      <tr><th scope="row">Fleet-phased</th><td>Large fleet; staged retrofit budget</td><td class="c">Incremental</td>
          <td class="c">18–36 months</td><td class="c">Moderate</td><td>BART TCMP; Singapore MRT</td></tr>
      <tr><th scope="row">Function-phased</th><td>Phased GoA roadmap and funding</td><td class="c">Varies by phase</td>
          <td class="c">0–24+ months</td><td class="c">Low per phase</td><td>BART TCMP; future WMATA plans</td></tr>
    </tbody>
  </table>

  <div class="note">
    <b>Mixed mode is a capacity decision, not a schedule detail.</b> While CBTC and legacy trains share track, the
    least-capable train type governs headway: if legacy holds three minutes, so does everything else. A line
    engineered for 30 tph will run near 20 tph until the line or the fleet is fully converted. Budget the mixed-mode
    window as a degraded-capacity period and say so publicly before it starts.
  </div>`,
};
