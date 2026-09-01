// CBTC Testing & Commissioning Checklist.
// Source: Vol. 1 Ch. 12.5 (Table 12.6 and the phase narrative). Durations are
// the manuscript's; they are the part practitioners most often want to cite.

export default {
  slug: "cbtc-testing-commissioning-checklist",
  title: "CBTC Testing & Commissioning Checklist",
  kicker: "Test &amp; commissioning",
  subtitle:
    "Six test phases from factory acceptance to revenue service demonstration, with who performs each, where, how long it really takes, and what has to be signed before the next one starts.",
  description:
    "Free CBTC testing and commissioning checklist: FAT, SIT, dynamic testing, shadow running, parallel operations and revenue service demonstration — with owners, environments, realistic durations and per-phase sign-off items.",
  keywords: [
    "CBTC testing",
    "CBTC commissioning",
    "factory acceptance test CBTC",
    "site integration testing",
    "shadow running CBTC",
    "revenue service demonstration",
    "CBTC test plan checklist",
  ],
  version: "v1.0",
  updated: "September 2026",
  updatedISO: "2026-09-01",
  publishedISO: "2026-09-01",
  page: { format: "Letter", landscape: false },
  // A checklist is printed and ticked; two readable pages beat one shrunk to 80%.
  multipage: true,
  bookRef: "Volume 1, Chapter 12.5 — Testing and Commissioning",

  lede:
    "Testing and commissioning is the most consistently underestimated phase of a CBTC deployment. A project can look " +
    "complete on paper — equipment installed, software loaded, interfaces connected — and be nowhere near ready for " +
    "revenue service. This sheet is the phase structure, the durations that hold up in practice, and the items each " +
    "phase has to close before the next one is allowed to start.",

  whatsInside: [
    "All six phases with purpose, performer, environment and realistic duration in one table.",
    "Per-phase sign-off checklists you can print and tick — FAT through revenue service demonstration.",
    "Shadow-running expectations: why 6–12 months, and what nightly log analysis is looking for.",
    "The mixed-mode capacity trap: why the least-capable train type governs headway.",
    "The FTA System Integration Review gate and the evidence a PMOC actually asks for.",
  ],

  landingBody: `
      <h2 class="res-h2">The durations are the useful part</h2>
      <p>
        Most published CBTC test plans are structurally right and temporally fantasy. The numbers on this sheet come
        from documented US practice: 6&ndash;12 weeks of factory acceptance testing; 12&ndash;20 <em>weekends</em> of
        site integration testing, because that is the access a live railway grants — NYCT could reach the track from
        Friday night to Monday morning, about five to seven uninterrupted hours at a time; 4&ndash;8 weeks of dynamic
        testing; and 6&ndash;12 months of shadow running. The L Line shadow-ran roughly eight months before cutover.
      </p>
      <p>
        Simulation moves those numbers but does not remove them. The 7 Line project ran a full-system simulator with
        production software on realistic track topology, validating thousands of scenarios before a test train moved
        in Manhattan. That cuts on-track testing from roughly 12&ndash;16 weeks to 6&ndash;8. It cannot replicate radio
        propagation in an urban canyon, environmental noise, or how an operator actually behaves at 06:40 — which is
        why the remaining weeks are the essential ones.
      </p>
      <h2 class="res-h2">One trap worth naming</h2>
      <p>
        In mixed mode, the least-capable train type governs the headway. If legacy trains hold three minutes, CBTC
        trains hold three minutes too. A line engineered for 30 tph under full CBTC will not exceed roughly 20 tph
        while mixed running lasts — so the mixed-mode period has to be planned and budgeted as a degraded-capacity
        period, not presented to stakeholders as an early delivery of the benefit.
      </p>`,

  files: [
    {
      name: "cbtc-testing-commissioning-checklist-v1.pdf",
      label: "Download PDF",
      ext: "pdf",
      mime: "application/pdf",
      size: "",
    },
  ],

  sourceNote:
    'Phase structure and durations from <em>Communications-Based Train Control</em>, Volume 1, Chapter 12.5 ' +
    "(Table 12.6), by Chunjun (Francisco) Wang. Durations reflect US brownfield practice on mid-size lines; " +
    "greenfield projects compress SIT and parallel operations substantially.",

  printBody: `
  <table class="rt">
    <thead>
      <tr><th scope="col">Phase</th><th scope="col">Purpose</th><th scope="col">Performed by</th>
          <th scope="col">Environment</th><th scope="col">Duration</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">FAT</th><td>Verify the vendor baseline meets specification.</td>
          <td>Vendor test team, PMC witnessing</td><td>Vendor integration lab</td><td class="c">6–12 weeks</td></tr>
      <tr><th scope="row">SIT</th><td>Verify CBTC integrates with site infrastructure.</td>
          <td>Vendor + owner signal team</td><td>On site, non-revenue hours</td><td class="c">12–20 weekends</td></tr>
      <tr><th scope="row">Dynamic testing</th><td>Verify safe train movement through scenario progressions.</td>
          <td>Owner + vendor</td><td>Live track, non-revenue hours</td><td class="c">4–8 weeks</td></tr>
      <tr><th scope="row">Shadow running</th><td>CBTC monitors live traffic without controlling it.</td>
          <td>Vendor + owner + operator</td><td>Revenue-service hours</td><td class="c">6–12 months</td></tr>
      <tr><th scope="row">Parallel operations</th><td>CBTC and legacy trains share track during transition.</td>
          <td>Operator + owner</td><td>Live track, revenue hours</td><td class="c">2–8 weeks</td></tr>
      <tr><th scope="row">Revenue service demo</th><td>Final pre-cutover test carrying passengers.</td>
          <td>Operator + owner</td><td>Full line, limited service</td><td class="c">2–4 weeks</td></tr>
    </tbody>
  </table>

  <h2 class="sec">Phase sign-off checklist</h2>
  <div class="cols2">
    <h3 class="phase">1 · Factory acceptance <span>6–12 weeks</span></h3>
    <ul class="check">
      <li>Acceptance criteria agreed <b>in writing before FAT begins</b> — the single best defense against disputes over marginal results.</li>
      <li>Generic functional tests: ATP algorithms, speed-restriction enforcement, SPAD prevention, dwell enforcement.</li>
      <li>Communication protocol tests including radio-link dropout and recovery.</li>
      <li>Degraded-mode scenarios: loss of zone controller, radio interference.</li>
      <li>Critical-event data logging demonstrated and retrievable.</li>
      <li>Functional coverage recorded (60–90&nbsp;% of the final system is typical).</li>
      <li>Owner's signal engineer and PMC sign-off captured.</li>
    </ul>

    <h3 class="phase">2 · Site integration <span>12–20 weekends</span></h3>
    <ul class="check">
      <li>Track-access windows confirmed against the real possession calendar, not an idealized one.</li>
      <li>Static tests: equipment power-up, communication links established, site data loaded.</li>
      <li>Low-speed dynamic tests with non-revenue trains at 5–10&nbsp;mph.</li>
      <li>Legacy interlocking, power supply, TIU and ATS integration verified against the ICD.</li>
      <li>Real radio propagation measured along the whole alignment — lab simulators retired.</li>
      <li>Record-and-playback of critical events working end to end.</li>
    </ul>

    <h3 class="phase">3 · Dynamic testing <span>4–8 weeks</span></h3>
    <ul class="check">
      <li>Scenario progression executed in order: static, low-speed linear, multi-zone, high-speed, multi-train, emergency, degraded mode.</li>
      <li>Every scenario has a written procedure and a recorded result: Pass, Fail or Deferred.</li>
      <li>Deferred items carry an owner, a date and a closure route — not a blank.</li>
      <li>Simulator coverage documented, with the residual on-track scope justified.</li>
    </ul>

  </div>

  <div class="cols2 pagebreak">
    <h3 class="phase">4 · Shadow running <span>6–12 months</span></h3>
    <ul class="check">
      <li>CBTC logs every movement while the legacy system stays in command.</li>
      <li>Nightly log analysis by owner signal engineering and vendor.</li>
      <li>Every unexpected ATP activation classified: system bug, environmental factor, or benign variation.</li>
      <li>Evidence accumulated across weather, loading and real operator behavior — not just fair-weather weeks.</li>
      <li>Divergences between CBTC's would-be decisions and the legacy system's actual ones investigated, not counted.</li>
    </ul>

    <h3 class="phase">5 · Parallel operations <span>2–8 weeks</span></h3>
    <ul class="check">
      <li>Safety case covers <b>every</b> train-type combination on shared track.</li>
      <li>Written rules for which yards allow mixing and which segments require segregation.</li>
      <li>Handoff protocol defined for a CBTC train forced back onto legacy signals.</li>
      <li>Capacity expectation set with stakeholders: the least-capable train governs headway.</li>
    </ul>

    <h3 class="phase">6 · Commissioning &amp; handover <span>2–4 weeks</span></h3>
    <ul class="check">
      <li>Operators trained: 20–40 classroom hours plus 30–60 hours on the job.</li>
      <li>Controllers and dispatchers: 30–50 classroom hours plus 20–40 simulator hours.</li>
      <li>Maintenance technicians: 40–80 hours classroom and hands-on.</li>
      <li>Management and emergency response: 4–8 hours awareness training.</li>
      <li>Punch list closed; system documentation handed over.</li>
      <li>Spares procured and inventoried; vendor support transition agreed.</li>
      <li>For CIG-funded projects: FTA PMOC <b>System Integration Review</b> passed — a genuine go/no-go, and a PMOC can defer cutover on insufficient evidence.</li>
    </ul>
  </div>

  <div class="note">
    <b>The three failures that recur.</b> Acceptance criteria written after testing starts; track access planned
    against a calendar the operating railway never agreed to; and a shadow-running period cut short because the
    schedule slipped upstream. The first two are avoidable on paper. The third is the one that reaches the newspapers.
  </div>`,
};
