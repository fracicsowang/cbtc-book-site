// CBTC Engineer Learning Roadmap.
// Source: the career and training articles (how-to-become, training/competency,
// reading list, salary), which are themselves drawn from the manuscript and
// twenty years of hiring and running CBTC teams.

export default {
  slug: "cbtc-engineer-learning-roadmap",
  title: "CBTC Engineer Learning Roadmap",
  kicker: "Career path",
  subtitle:
    "Where the discipline is actually entered, what to do in the first five years, and where the paths diverge afterwards — with the reading that compresses the learning curve.",
  description:
    "Free CBTC engineer learning roadmap: degree routes into the discipline, the three realistic first jobs, the five things to do in your first five years, mid-career tracks, US pay bands and the ten-item reading list.",
  keywords: [
    "CBTC engineer career",
    "how to become a CBTC engineer",
    "rail signaling engineer roadmap",
    "CBTC training",
    "signaling engineer salary",
    "rail signalling reading list",
    "transit signaling career path",
  ],
  version: "v1.0",
  updated: "September 2026",
  updatedISO: "2026-09-01",
  publishedISO: "2026-09-01",
  page: { format: "Letter", landscape: false },
  multipage: true,
  bookRef: "the career and competency articles, drawn from both volumes",

  lede:
    "There is no CBTC engineering degree in the United States. The discipline is entered sideways, from electrical " +
    "engineering, from computer engineering, occasionally from aerospace or automotive embedded work — and then it is " +
    "learned on projects. This sheet lays out the route people actually take, and what to deliberately go and do at " +
    "each stage rather than wait to be assigned.",

  whatsInside: [
    "The three degree routes that converge on CBTC, and what coursework actually transfers.",
    "The three realistic first jobs — vendor, agency, consultancy — and what each teaches first.",
    "Five things to do before year five, written as things to seek out rather than milestones to wait for.",
    "The three mid-career tracks and what each trades away.",
    "Where competency actually comes from: school, vendor training, AREMA/APTA, apprenticeship, standards.",
    "US pay bands by role and employer type, as of 2026.",
    "The ten-item reading list, including the four standards worth reading end to end.",
  ],

  landingBody: `
      <h2 class="res-h2">The part most roadmaps get wrong</h2>
      <p>
        Career advice for this field usually stops at "get an EE degree and apply to a signaling vendor." The useful
        part starts after that. The first five years are about depth in one subsystem and exposure to all the others,
        and the exposure does not arrive on its own — it has to be asked for. Run a full factory acceptance test with
        the procedure written and the failure modes characterized. Be on the line for a revenue cutover, including one
        that goes badly at two in the morning. Read one IEEE 1474 standard and one IEC 62290 standard end to end.
        Take one revenue incident all the way to a determined root cause. Spend an assignment sitting with the
        operations control center.
      </p>
      <p>
        Each of those does something a job title cannot. FAT teaches what the system actually does as distinct from
        what the requirements claim. A cutover teaches what happens when the recovery plan meets a real railway. The
        standards are the common vocabulary across every vendor, agency and consultancy in the industry, and an
        engineer who can argue about a specific clause operates on different footing from one who cannot.
      </p>
      <h2 class="res-h2">Lateral entry is normal</h2>
      <p>
        A meaningful share of US CBTC engineers arrive from automotive embedded systems, aerospace flight control,
        medical device firmware or telecom infrastructure. It is rarely advertised that way in a job posting; it
        usually depends on a hiring manager who recognizes that safety-critical embedded discipline transfers and
        domain knowledge can be taught. If that describes you, the reading list is the fastest way to close the
        vocabulary gap before the interview.
      </p>`,

  files: [
    {
      name: "cbtc-engineer-learning-roadmap-v1.pdf",
      label: "Download PDF",
      ext: "pdf",
      mime: "application/pdf",
      size: "",
    },
  ],

  sourceNote:
    "Compiled by Chunjun (Francisco) Wang from the career and competency articles on cbtcbook.com and twenty years " +
    "of building and hiring CBTC engineering teams. Pay bands are 2026 US figures for the named role and employer " +
    "type; they are base salary unless total compensation is stated, and vary sharply by metro.",

  printBody: `
  <h2 class="sec">Stage 0 · Getting in</h2>
  <table class="rt">
    <thead>
      <tr><th scope="col">Route</th><th scope="col">What transfers</th><th scope="col">Where it leads first</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Electrical engineering</th>
          <td>Real-time systems, digital communications, control theory, reliability engineering. The most common starting point.</td>
          <td>Vendor onboard or wayside engineering.</td></tr>
      <tr><th scope="row">Computer engineering / CS</th>
          <td>Safety-critical embedded code, OS internals, distributed-system failure reasoning. Software is now the dominant cost driver.</td>
          <td>Vendor software and integration teams.</td></tr>
      <tr><th scope="row">Mechanical / transportation</th>
          <td>Control-systems concentration plus operational context.</td>
          <td>Agency operations and performance ownership.</td></tr>
      <tr><th scope="row">Lateral entry</th>
          <td>Automotive, aerospace, medical devices, telecom. Safety-critical discipline transfers; domain knowledge is taught.</td>
          <td>Wherever a hiring manager recognizes the pattern.</td></tr>
    </tbody>
  </table>
  <div class="note">
    A master's helps but is not required. The strongest signal in a junior résumé is a thesis or capstone on a real
    safety-critical system &mdash; embedded, automotive, medical, aerospace &mdash; not a higher GPA.
  </div>

  <h2 class="sec">Stage 1 · The first job</h2>
  <table class="rt">
    <thead>
      <tr><th scope="col">Entry point</th><th scope="col">First 18 months look like</th><th scope="col">Trade-off</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Vendor</th>
          <td>Writing test procedures, executing factory acceptance tests, supporting commissioning. Siemens, Alstom, Hitachi Rail and the specialists.</td>
          <td>Deepest product competency, narrowest early view of the railway.</td></tr>
      <tr><th scope="row">Transit agency</th>
          <td>Monitoring performance, investigating incidents, vendor reviews, RAMS support. MTA NYCT, BART, WMATA, SFMTA, MARTA, HART.</td>
          <td>Operational reality first; slower to build design depth.</td></tr>
      <tr><th scope="row">Consultancy</th>
          <td>Procurement and program support. STV, WSP, AECOM, HDR, HNTB, Jacobs.</td>
          <td>Broad exposure across agencies; less hands-on engineering.</td></tr>
    </tbody>
  </table>

  <div class="pagebreak"></div>

  <h2 class="sec">Stage 2 · Before year five, go and do all five</h2>
  <ul class="check">
    <li><b>Run a full factory acceptance test</b> for a subsystem — procedure written by you, failure modes characterized. This is where you learn what the system does as opposed to what the requirements say it does.</li>
    <li><b>Work a revenue cutover in the field.</b> There is no substitute for being on the line at 2 a.m. when a cutover is going badly and the recovery has to happen anyway.</li>
    <li><b>Read one IEEE 1474 standard and one IEC 62290 standard end to end.</b> Not excerpts. The standards are the industry's shared vocabulary, and clause-level fluency changes how you are treated in a room.</li>
    <li><b>Take one revenue-service incident to a determined root cause.</b> Deployed behavior under stress is rarely what FAT predicted.</li>
    <li><b>Spend an assignment with the operations control center.</b> The system looks different from the dispatcher's seat, and that view is missing from every design-side career.</li>
  </ul>

  <h2 class="sec">Stage 3 · The mid-career fork (years 5–15)</h2>
  <table class="rt">
    <thead>
      <tr><th scope="col">Track</th><th scope="col">Where it goes</th><th scope="col">What it costs</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Technical</th>
          <td>Senior systems engineer writing safety cases; principal onboard engineer owning VOBC architecture; chief commissioning engineer running cutovers.</td>
          <td>Nothing, if depth is what you want. Well compensated and durable.</td></tr>
      <tr><th scope="row">Program management</th>
          <td>Owning schedule, budget, customer and the stage gates from RFP to revenue service.</td>
          <td>Different skills — risk, contracts, stakeholders — and less time in the engineering.</td></tr>
      <tr><th scope="row">Agency / consultancy</th>
          <td>From "engineer at the vendor" to "engineer working with the vendor."</td>
          <td>Same skill, different side of the contract. Prior vendor time is what makes it credible.</td></tr>
    </tbody>
  </table>

  <h2 class="sec">Where competency actually comes from</h2>
  <div class="legend" style="font-size:10px;text-transform:none;letter-spacing:0.2px;color:inherit;line-height:1.5">
    <span><b>Engineering school</b> — fundamentals; no CBTC.</span>
    <span><b>Vendor new-hire training</b> — product competency.</span>
    <span><b>AREMA · APTA · TSI</b> — industry practice and continuing education.</span>
    <span><b>On-the-job apprenticeship</b> — the part no course replaces.</span>
    <span><b>Standards, read directly</b> — the shared vocabulary.</span>
  </div>

  <h2 class="sec">US pay bands, 2026</h2>
  <table class="rt">
    <thead>
      <tr><th scope="col">Role</th><th scope="col">Base</th><th scope="col">Note</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Entry, vendor</th><td class="c">$80k–110k</td>
          <td>Total compensation includes benefits and any project incentives.</td></tr>
      <tr><th scope="row">Entry, agency</th><td class="c">$75k–95k</td>
          <td>Lower base, stronger benefits and pension contributions that partly close the gap.</td></tr>
      <tr><th scope="row">Senior, vendor</th><td class="c">$115k–160k</td>
          <td>Total compensation runs higher in a major metro; cutover commissioning often carries spot incentives.</td></tr>
      <tr><th scope="row">Senior / chief, agency</th><td class="c">$105k–140k</td>
          <td>Equivalent senior systems or chief engineer role.</td></tr>
      <tr><th scope="row">Context</th><td class="c">~$111k</td>
          <td>BLS median for electrical engineers generally; 75th percentile near $140k, 90th above $170k.</td></tr>
    </tbody>
  </table>

  <h2 class="sec">The reading list</h2>
  <table class="rt">
    <thead>
      <tr><th scope="col">#</th><th scope="col">Work</th><th scope="col">Why</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">1</th><td>Pachl, <em>Railway Operation and Control</em> (4th ed.)</td><td>The operating principles everything else assumes.</td></tr>
      <tr><th scope="row">2</th><td>Theeg &amp; Vlasenko (eds.), <em>Railway Signalling and Interlocking</em> (3rd ed.)</td><td>The reference for what CBTC replaced and still interfaces with.</td></tr>
      <tr><th scope="row">3</th><td>IEEE Std 1474.1 / .2 / .3 / .4</td><td>Performance, functional and test requirements. Read one end to end.</td></tr>
      <tr><th scope="row">4</th><td>IEC 62290 series</td><td>Functional architecture and the GoA definitions.</td></tr>
      <tr><th scope="row">5</th><td>Storey, <em>Safety-Critical Computer Systems</em></td><td>Why SIL 4 is a design posture, not a certificate.</td></tr>
      <tr><th scope="row">6</th><td>Hartong, Goel &amp; Wijesekera on CBTC</td><td>Academic framing of the architecture.</td></tr>
      <tr><th scope="row">7</th><td>FTA, <em>CBTC Implementation Guidance</em></td><td>The US federal view a program will be measured against.</td></tr>
      <tr><th scope="row">8</th><td>TCRP Report 163 — Transit Capacity and QoS Manual</td><td>Where capacity claims get checked.</td></tr>
      <tr><th scope="row">9</th><td>Wang, <em>Communications-Based Train Control</em>, Vols. 1–2</td><td>The US-context reference these sheets are cut from.</td></tr>
      <tr><th scope="row">10</th><td>APTA Rail and IEEE/ASME Joint Rail conference proceedings</td><td>Where current practice is reported before it reaches books.</td></tr>
    </tbody>
  </table>

  <div class="note">
    <b>Sequence that actually works.</b> Pachl first, for operating context. Then one IEEE 1474 standard, slowly, with
    the manuscript alongside it. Then Storey, once you have seen a real safety case. The conference proceedings become
    useful only after you have a project to compare them against &mdash; reading them first produces opinions without
    a foundation under them.
  </div>`,
};
