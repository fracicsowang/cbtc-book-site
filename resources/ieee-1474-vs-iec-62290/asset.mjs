// IEEE 1474 vs IEC 62290 — one-page procurement comparison.
// Source: Communications-Based Train Control, Vol. 1 Ch. 2 (Table 2.2) plus
// the standards articles on the blog. Every claim traces to the manuscript.

export default {
  slug: "ieee-1474-vs-iec-62290",
  title: "IEEE 1474 vs IEC 62290",
  kicker: "Standards comparison",
  subtitle:
    "The two standards a US CBTC specification has to satisfy at once — what each one actually governs, and which clause to cite for what.",
  description:
    "One-page comparison of IEEE 1474 and IEC 62290 for CBTC procurement: scope, GoA treatment, SIL allocation, and which standard to cite in a US RFP.",
  keywords: [
    "IEEE 1474",
    "IEC 62290",
    "CBTC standards",
    "CBTC procurement",
    "GoA classification",
    "SIL 4 ATP",
    "transit signaling specification",
  ],
  version: "v1.0",
  updated: "September 2026",
  updatedISO: "2026-09-01",
  publishedISO: "2026-09-01",
  page: { format: "Letter", landscape: false },
  bookRef: "Volume 1, Chapter 2 — Standards, Regulations &amp; the US Framework",

  lede:
    "US CBTC specifications increasingly cite both standards, and for good reason: they do not overlap. " +
    "IEEE 1474 tells a vendor how well the system must perform. IEC 62290 tells it what the system must be. " +
    "Citing only one leaves a gap a bidder can price into.",

  whatsInside: [
    "Six-dimension comparison: origin, scope, GoA treatment, safety specification, procurement focus, and use in US projects.",
    "The one-sentence distinction that settles most specification arguments.",
    "How the two standards are combined in current US practice, with named agency examples.",
    "Where each standard belongs in an RFP — performance clauses vs functional architecture clauses.",
  ],

  landingBody: `
      <h2 class="res-h2">Why both, and not one</h2>
      <p>The short version, and the line worth pinning above a specification desk:</p>
      <blockquote class="res-quote">
        IEEE 1474 says <em>“the system must achieve 5.5-minute headways with 99.5% availability.”</em>
        IEC 62290 says <em>“the system must execute ATP at SIL 4 and support GoA 2.”</em>
        Both are necessary during procurement.
      </blockquote>
      <p>
        European operators &mdash; RATP, Deutsche Bahn, Île-de-France Mobilités &mdash; have specified
        IEC 62290 compliance and GoA level contractually for over a decade, which pushed vendors to
        build IEC-aligned products by default. US agencies came from the opposite direction, relying on
        IEEE 1474 and custom specifications. The result is that most US agencies now receive
        IEC 62290-compliant systems whether or not they asked for them &mdash; NYC MTA's B Division
        procurement did not cite IEC 62290 and got compliant systems anyway, because that is what
        vendors build. LA Metro's Purple Line Phase 4 specified both explicitly. That is the direction
        of travel.
      </p>`,

  files: [
    {
      name: "ieee-1474-vs-iec-62290-v1.pdf",
      label: "Download PDF",
      ext: "pdf",
      mime: "application/pdf",
      size: "",
    },
  ],

  sourceNote:
    'Adapted from <em>Communications-Based Train Control</em>, Volume 1, Chapter 2 (Table 2.2), ' +
    "by Chunjun (Francisco) Wang. Standards positions reflect IEEE 1474 and the IEC 62290 series " +
    "including amendments through 2025. Agency examples are drawn from published procurement documents.",

  printBody: `
  <table class="rt">
    <caption>IEEE 1474 vs IEC 62290</caption>
    <thead>
      <tr><th scope="col">Aspect</th><th scope="col">IEEE 1474</th><th scope="col">IEC 62290</th></tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Origin</th>
        <td>North America; driven by APTA and transit agencies.</td>
        <td>International; driven by IEC working groups and European operators.</td>
      </tr>
      <tr>
        <th scope="row">Scope</th>
        <td>System performance, availability, headway, braking, communication latency.</td>
        <td>Functional requirements, architecture, safety standards, GoA classification.</td>
      </tr>
      <tr>
        <th scope="row">GoA discussion</th>
        <td>Minimal; assumes operator-driven systems.</td>
        <td>Central; defines automation levels GoA&nbsp;0&ndash;4.</td>
      </tr>
      <tr>
        <th scope="row">Safety specification</th>
        <td>Implies SIL&nbsp;4 but is less prescriptive.</td>
        <td>Explicit SIL&nbsp;4 for ATP; SIL&nbsp;1&ndash;2 for ATO/ATS.</td>
      </tr>
      <tr>
        <th scope="row">Procurement focus</th>
        <td>Detailed performance metrics, availability targets, spare parts.</td>
        <td>Functional architecture, automation level, operational concepts.</td>
      </tr>
      <tr>
        <th scope="row">Use in US projects</th>
        <td>Cited in procurement RFPs; directly constrains vendor performance.</td>
        <td>Increasingly cited for GoA classification and automation expectations.</td>
      </tr>
    </tbody>
  </table>

  <div class="note">
    <b>The distinction that settles most specification arguments.</b>
    IEEE&nbsp;1474 says &ldquo;the system must achieve 5.5-minute headways with 99.5&nbsp;percent
    availability.&rdquo; IEC&nbsp;62290 says &ldquo;the system must execute ATP at SIL&nbsp;4 and
    support GoA&nbsp;2 (semi-automatic operation).&rdquo; A specification that cites only the first
    has not constrained the architecture; one that cites only the second has not constrained
    performance. Current US best practice cites both.
  </div>

  <h2 class="sec">Where each belongs in an RFP</h2>
  <table class="rt">
    <thead>
      <tr><th scope="col">RFP section</th><th scope="col">Cite</th><th scope="col">Because</th></tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Performance &amp; availability</th>
        <td>IEEE 1474</td>
        <td>Headway, availability targets, latency budgets and spares are quantified here and are directly enforceable against the vendor.</td>
      </tr>
      <tr>
        <th scope="row">Functional architecture</th>
        <td>IEC 62290</td>
        <td>The ATP / ATO / ATS decomposition gives design review a template for verifying that safety-critical and non-critical logic are actually separated.</td>
      </tr>
      <tr>
        <th scope="row">Operational concept</th>
        <td>IEC 62290</td>
        <td>A GoA level states operational intent unambiguously &mdash; &ldquo;GoA 3 with on-train staff at peak, unattended off-peak&rdquo; &mdash; where &ldquo;driverless&rdquo; does not.</td>
      </tr>
      <tr>
        <th scope="row">Safety case</th>
        <td>Both</td>
        <td>IEC 62290 fixes the SIL allocation; IEEE 1474 fixes the availability and performance the safety argument has to hold under.</td>
      </tr>
      <tr>
        <th scope="row">International bidders</th>
        <td>Both</td>
        <td>Referencing IEC 62290 lets European and Asian vendor proposals be evaluated against consistent criteria instead of translated ones.</td>
      </tr>
    </tbody>
  </table>

  <div class="note">
    <b>Watch the living standard.</b> IEC&nbsp;62290-3 and later parts cover cybersecurity, onboard
    communication protocols and test specifications. Amendments from 2020&ndash;2025 expanded
    driverless-metro operation, energy efficiency and cybersecurity resilience &mdash; the last of
    which matters more every year as agencies move ATS platforms to the cloud.
  </div>`,
};
