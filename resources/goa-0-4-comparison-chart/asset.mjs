// GoA 0–4 comparison chart — the IEC 62290-1 responsibility matrix, plus the
// definitions and deployment examples that make the matrix usable.
// Source: Communications-Based Train Control, Vol. 1 Ch. 8 (Table 8.1).

export default {
  slug: "goa-0-4-comparison-chart",
  title: "GoA 0–4 Comparison Chart",
  kicker: "Grades of Automation",
  subtitle:
    "The IEC 62290-1 responsibility matrix, with what each grade means for staffing, and which systems actually run at each level.",
  description:
    "Free GoA 0-4 comparison chart: the IEC 62290-1 responsibility matrix for driver, attendant, automation and control center, with definitions and real deployment examples.",
  keywords: [
    "GoA 0 1 2 3 4",
    "Grades of Automation",
    "IEC 62290-1",
    "GoA responsibility matrix",
    "unattended train operation",
    "driverless metro",
    "CBTC automation levels",
  ],
  version: "v1.0",
  updated: "September 2026",
  updatedISO: "2026-09-01",
  publishedISO: "2026-09-01",
  page: { format: "Letter", landscape: true },
  bookRef: "Volume 1, Chapter 8 — Grades of Automation",

  lede:
    "&ldquo;Driverless&rdquo; is not a specification. A GoA level is. This sheet puts the IEC 62290-1 " +
    "responsibility matrix next to the staffing model and the systems actually running at each grade, " +
    "so a stakeholder conversation about automation can end in a number instead of an adjective.",

  whatsInside: [
    "The IEC 62290-1 responsibility matrix across all six critical functions and all five grades.",
    "What each grade means in plain terms — who is on the train, and what they are responsible for.",
    "Real deployments at each level, including the US exceptions to the GoA 2 norm.",
    "The legend that makes the matrix readable: D, A, Auto, C, ATP.",
  ],

  landingBody: `
      <h2 class="res-h2">Why the matrix matters more than the label</h2>
      <p>
        When an agency writes &ldquo;GoA 2&rdquo; into a specification, the responsibility matrix
        immediately settles the expected behavior across all six critical functions &mdash; who sets
        the train in motion, who closes the doors, who handles a disruption, who runs an evacuation.
        That is the whole point of the framework: it converts a business requirement into a system
        specification without an argument about what &ldquo;automatic&rdquo; means.
      </p>
      <h2 class="res-h2">The US picture</h2>
      <p>
        Most US CBTC deployments are GoA 2 &mdash; automation drives, a driver stays in the cab and
        keeps responsibility for doors and disruption. That balance reflects labor agreements,
        risk-averse procurement, and established engineering practice rather than any technical
        ceiling. The exceptions are instructive and mostly airport or greenfield systems: JFK AirTrain
        opened at GoA 4 in 2003, and Honolulu Skyline at GoA 4 in 2023. Paris Métro Line 14 &mdash;
        the first modern metro to run GoA 4, in October 1998 &mdash; is still the reference the rest of
        the world argues from.
      </p>`,

  files: [
    {
      name: "goa-0-4-comparison-chart-v1.pdf",
      label: "Download PDF",
      ext: "pdf",
      mime: "application/pdf",
      size: "",
    },
  ],

  sourceNote:
    'Responsibility matrix adapted from <em>Communications-Based Train Control</em>, Volume 1, ' +
    "Chapter 8 (Table 8.1), by Chunjun (Francisco) Wang, after IEC 62290-1. Deployment examples are " +
    "drawn from the same chapter; grades reflect normal revenue operation, not degraded modes.",

  printBody: `
  <h2 class="sec">What each grade means</h2>
  <table class="rt">
    <thead>
      <tr>
        <th scope="col">Grade</th><th scope="col">IEC name</th>
        <th scope="col">On board</th><th scope="col">In practice</th>
      </tr>
    </thead>
    <tbody>
      <tr><th scope="row">GoA 0</th><td>On-sight operation</td><td>Driver</td>
          <td>The driver drives by line of sight, as on a street tram. No automatic protection of the movement.</td></tr>
      <tr><th scope="row">GoA 1</th><td>Non-automated train operation</td><td>Driver</td>
          <td>The driver drives; ATP supervises and intervenes. The baseline for any protected railway.</td></tr>
      <tr><th scope="row">GoA 2</th><td>Semi-automated train operation</td><td>Driver</td>
          <td>ATO starts and stops the train inside the ATP envelope; the driver closes the doors and owns disruption handling. <b>The US norm.</b></td></tr>
      <tr><th scope="row">GoA 3</th><td>Driverless train operation</td><td>Attendant</td>
          <td>No driver. A member of staff rides the train to manage disruption and evacuation.</td></tr>
      <tr><th scope="row">GoA 4</th><td>Unattended train operation</td><td>Nobody</td>
          <td>No operating staff required on board. Disruption and evacuation fall to the control center and to automation.</td></tr>
    </tbody>
  </table>

  <h2 class="sec">IEC 62290-1 responsibility matrix</h2>
  <table class="rt matrix">
    <thead>
      <tr>
        <th scope="col">Function</th>
        <th scope="col" class="c">GoA 0</th><th scope="col" class="c">GoA 1</th><th scope="col" class="c">GoA 2</th>
        <th scope="col" class="c">GoA 3</th><th scope="col" class="c">GoA 4</th>
      </tr>
    </thead>
    <tbody>
      <tr><th scope="row">Setting train in motion</th>
          <td class="c">D</td><td class="c">D</td><td class="c">D</td><td class="c">Auto</td><td class="c">Auto</td></tr>
      <tr><th scope="row">Stopping train</th>
          <td class="c">D</td><td class="c">D</td><td class="c">D / ATP</td><td class="c">Auto / ATP</td><td class="c">Auto / ATP</td></tr>
      <tr><th scope="row">Door closure</th>
          <td class="c">D</td><td class="c">D</td><td class="c">Auto</td><td class="c">Auto</td><td class="c">Auto</td></tr>
      <tr><th scope="row">Obstacle / collision detection</th>
          <td class="c">Manual</td><td class="c">ATP</td><td class="c">ATP / ATO</td><td class="c">Auto</td><td class="c">Auto</td></tr>
      <tr><th scope="row">Operation during disruption</th>
          <td class="c">D</td><td class="c">D</td><td class="c">D</td><td class="c">A</td><td class="c">C / Auto</td></tr>
      <tr><th scope="row">Passenger evacuation</th>
          <td class="c">D</td><td class="c">D</td><td class="c">D</td><td class="c">A</td><td class="c">C / Auto</td></tr>
    </tbody>
  </table>
  <div class="legend">
    <span><b>D</b> Driver</span>
    <span><b>A</b> Attendant on board</span>
    <span><b>Auto</b> Automation (ATP / ATO)</span>
    <span><b>C</b> Central operations center</span>
    <span><b>ATP</b> Automatic Train Protection</span>
  </div>

  <h2 class="sec">Who runs at each grade</h2>
  <p style="font-size:11px;line-height:1.55;margin:0 0 4px">
    <b>GoA&nbsp;1&ndash;2</b> covers the large majority of US CBTC deployments, including NYCT&rsquo;s
    converted lines and BART&rsquo;s modernization: automation drives, the driver stays.
    <b>GoA&nbsp;3</b> keeps an attendant on board while removing the driving task, and is usually a
    stepping stone rather than an end state. <b>GoA&nbsp;4</b> runs on Paris M&eacute;tro Line 14
    (October 1998, the first modern metro at this grade), Copenhagen&rsquo;s driverless lines, a
    segment of Singapore&rsquo;s East Coast Line, JFK AirTrain (2003) and Honolulu Skyline (2023).
  </p>

  <div class="note">
    <b>Specify the grade, not the adjective.</b> &ldquo;Automatic operation&rdquo; and
    &ldquo;driverless&rdquo; mean different things to every stakeholder in the room. A GoA level plus
    an operating window &mdash; &ldquo;GoA 3 with on-train staff at peak, unattended off-peak&rdquo;
    &mdash; is unambiguous, and maps directly onto the six rows above. Note that many GoA 2 systems
    let the driver command a stop while ATP retains override authority.
  </div>`,
};
