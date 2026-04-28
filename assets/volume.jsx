// Shared Volume detail page

function VolumePage({ vol }) {
  const v = BOOK[`v${vol}`];
  const otherNum = vol === 1 ? 2 : 1;
  const other = BOOK[`v${otherNum}`];

  // Real excerpts from the manuscript — multiple passages per volume.
  const excerpts = vol === 1 ? [
    {
      ch: "1",
      title: "The Evolution of Train Control",
      heading: "From time-interval dispatch to the moving block",
      body: `When the Baltimore & Ohio Railroad opened in 1828, America's first commercial rail line faced a novel problem: how should a dispatcher ensure that multiple trains traveling on the same track did not collide? The answer, born of necessity and crude experimentation, was the time-interval method — a dispatcher would record the time at which a train left a station and would not permit the next train to depart until a predetermined interval had elapsed.\n\nThis worked at 10–15 miles per hour with light traffic. It revealed its fatal flaw as locomotives became more powerful: the system offered no feedback about a train's actual location or condition. If a train broke down on the track, the dispatcher would remain blissfully unaware. The next train would arrive at the location of the disabled train at the calculated interval, and a collision would result.\n\nThe true watershed came in 1872, when William Robinson patented the use of the running rails themselves as electrical conductors to detect train presence. For the first time, the positions of trains and the spacing between them were regulated by physics and electrical engineering rather than by human judgment. CBTC inherits this hundred-year arc and inverts it: instead of the track reporting whether a block is occupied, the train reports where it is.`,
    },
    {
      ch: "2",
      title: "Standards, Regulations, and the US Framework",
      heading: "Why IEEE 1474 is performance-based, not prescriptive",
      body: `The original IEEE 1474-1999 standard was framed as performance-based rather than prescriptive — it specified what a CBTC system must accomplish (maintain specific headway distances, respond to emergencies within defined timeframes) rather than dictating how a supplier must design the system to achieve those outcomes.\n\nThis was deliberate. The standard's architects recognized that CBTC technology was evolving rapidly, and locking requirements to specific technologies would stifle innovation. The performance-based structure also created ambiguity in early procurements, as agencies and suppliers sometimes interpreted the same requirement differently. Two decades on, the trade-off has held: IEEE 1474.1 remains the cornerstone document cited in virtually every US CBTC RFP, while the underlying radio, computing, and safety-assurance technologies have turned over twice.`,
    },
    {
      ch: "3",
      title: "CBTC System Architecture Overview",
      heading: "The IEC 62290 boundary — and why it matters in procurement",
      body: `IEC 62290 establishes a clear system context diagram that delineates what is "inside" the CBTC system and what constitutes external systems. CBTC comprises three integrated functional layers: ATP (the safety-critical layer that enforces speed restrictions and calculates movement authorities), ATO (the automated driving layer, where implemented), and ATS (the fleet-level supervision layer that manages dispatching and dwell times).\n\nDuring an RFP, a transit agency might specify that CBTC "must control platform screen doors" or "must manage traction power." But if those are specified as external systems, CBTC's role is limited to sending control signals via defined interfaces. The external system retains responsibility for executing the command safely. This division of labor is critical: if CBTC directly controlled power contactors, a CBTC software failure could result in uncontrolled power loss. Instead, CBTC issues a request; the power system's independent logic decides whether to honor it.`,
    },
  ] : [
    {
      ch: "8",
      title: "Grades of Automation (GoA 0–4)",
      heading: "GoA and CBTC are not synonymous",
      body: `The Grade of Automation framework addresses a simple question: who does what in train operation? GoA codifies the allocation of responsibility across setting the train in motion, stopping the train, door operation, obstacle and collision detection, response to disruption, and passenger evacuation.\n\nA persistent source of confusion in procurement documents is the conflation of automation level with control technology. GoA and CBTC are not synonymous. CBTC enables higher grades of automation, but it is fundamentally a signaling and control technology, not an automation level. A CBTC system can be deployed at GoA 2 (with a driver) or GoA 4 (fully unattended). Conversely, non-CBTC ATC systems with traditional fixed-block signaling can achieve GoA 1 or even GoA 2. Specifying "we want driverless" without separately specifying the underlying control technology — or vice versa — is a recurring source of scope ambiguity in US RFPs.`,
    },
    {
      ch: "10",
      title: "CBTC in the United States",
      heading: "The L Line — America's CBTC pioneer",
      body: `The L Line of the New York City Metropolitan Transportation Authority holds a singular distinction in North American rapid transit: it is the first full CBTC system deployed on a revenue passenger subway line. Beginning limited revenue service in April 2006 and achieving full operational integration by 2009, the L Line has served as the critical proof-of-concept for CBTC in the United States.\n\nThe MTA selected Siemens Transportation Systems in 1999 for the design and deployment of the Trainguard MT CBTC system. The initial contract value was approximately $340 million, covering design, installation, integration, testing, and a five-year support and warranty period. This contract would ultimately expand due to scope changes, extended testing, and integration complexity — a pattern common to large infrastructure programs but noteworthy for establishing baseline cost expectations that subsequent CBTC projects would reference.`,
    },
    {
      ch: "14",
      title: "Lifecycle Costs and Economic Justification",
      heading: "What a single onboard controller actually costs",
      body: `Onboard CBTC equipment — the Vehicle-Borne On-Board Controller (VOBC) — represents one of the largest per-unit costs in a resignaling project. A typical installation on a single train cab includes: VOBC hardware and real-time operating system ($80K–$120K per cab), radio antenna and modem ($15K–$25K), odometry and inertial sensors ($20K–$40K), the cab display and DMI ($25K–$50K), and vehicle integration engineering ($40K–$60K).\n\nMultiplied across a fleet of 40–150 trains, total onboard CAPEX typically ranges from $250K to $450K per train cab. A 100-car fleet would incur $25M–$45M in onboard equipment alone. This cost is highly sensitive to fleet composition — retrofit of older rolling stock requires more extensive integration work — and to the choice of VOBC vendor, where proprietary versus open-standard deployments can differ by 10–20%.`,
    },
    {
      ch: "16",
      title: "US–China Comparative Perspectives",
      heading: "A 20:1 ratio in route-kilometers",
      body: `As of 2025, China operates rapid-transit networks across more than 50 cities, encompassing approximately 11,200 route-kilometers of urban rail infrastructure. CBTC has become the default technology standard for the vast majority of lines opened since 2010, with nearly all new construction projects incorporating CBTC from the outset of detailed design.\n\nThe United States maintains CBTC on approximately six metro agencies covering fewer than 500 route-kilometers in aggregate. This roughly 20:1 ratio is neither a measure of engineering maturity nor a reflection of technology capability. It reflects distinct demographic, financing, institutional, and procurement frameworks that shape investment velocity and capital deployment patterns. Typical US CBTC project approval and environmental review takes 5–7 years; the Chinese equivalent is 2–3 years. Neither approach is universally optimal — both are reasonable responses to distinct governance structures and labor markets.`,
    },
  ];

  return (
    <>
      <SiteNav active={`v${vol}`}/>

      <section className="vol-hero">
        <div className="container vol-hero-grid">
          <div>
            <span className="kicker">Volume {v.num} of Two · Now Published</span>
            <h1 className="vol-hero-title">{v.name}</h1>
            <div className="vol-hero-stats">
              <div><span>Pages</span>{v.pages}</div>
              <div><span>Words</span>{v.words}</div>
              <div><span>Chapters</span>{v.chapters.length}</div>
              <div><span>Format</span>7 × 10 in</div>
            </div>
            <p className="vol-hero-blurb">{v.blurb}</p>
            <div className="vol-hero-cta">
              <a className="btn btn-primary" href={v.amazonPrint} target="_blank" rel="noopener">
                Paperback · {v.pricePrint}
              </a>
              <a className="btn btn-ghost" href={v.amazonKindle} target="_blank" rel="noopener">
                Kindle · {v.priceKindle}
              </a>
            </div>
          </div>
          <div className="vol-hero-cover">
            <Book3D
              width={300} height={420} spine={vol === 1 ? 28 : 34}
              front={<CoverFront vol={vol} scale={3.0}/>}
              back={<CoverBack vol={vol} scale={3.0}/>}
            />
            <div className="vol-hero-cap">Click to flip ↺</div>
          </div>
        </div>
      </section>

      {vol === 1 && (
        <section className="container" style={{ paddingBottom: 64 }}>
          <span className="kicker">Selected figures from Volume 1 · 56 total</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 24 }}>
            {[
              ["1.1", "150-Year Evolution Timeline", "fig_01_01_evolution_timeline.png"],
              ["1.5", "Fixed-Block vs. Moving-Block", "fig_01_05_fixed_vs_moving_block.png"],
              ["1.8", "NYC L-Line Capacity Gain", "fig_01_08_nyc_l_line_capacity.png"],
              ["2.4", "SIL Pyramid", "fig_02_04_sil_pyramid.png"],
              ["3.2", "End-to-End Architecture", "fig_03_02_end_to_end_architecture.png"],
              ["3.4", "200 ms Heartbeat Cycle", "fig_03_04_heartbeat_cycle.png"],
              ["4.1", "VOBC Functional Architecture", "fig_04_01_vobc_architecture.png"],
              ["4.3", "Braking Curve & Safe Stop", "fig_04_03_braking_curve.png"],
              ["6.1", "CBTC Radio Architecture", "fig_06_01_radio_architecture.png"],
            ].map(([n, t, f]) => (
              <div key={n} style={{ background: "var(--navy)", padding: 10 }}>
                <img src={`figures/${f}`} style={{ width: "100%", display: "block" }} alt={t}/>
                <div style={{ padding: "10px 4px 4px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase", color: "var(--ink-dim)" }}>
                  <span style={{ color: "var(--amber)", marginRight: 8 }}>Fig {n}</span>{t}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <a className="btn btn-ghost" href="figures.html">Browse all 78 figures →</a>
          </div>
        </section>
      )}
      {vol === 2 && (
        <section className="container" style={{ paddingBottom: 64 }}>
          <span className="kicker">Selected figures from Volume 2 · 36 total</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 24 }}>
            {[
              ["8.1", "GoA 0–4 Responsibility Matrix", "fig_08_01_goa_responsibility_matrix.png"],
              ["8.5", "GoA Selection Decision Flowchart", "fig_08_05_goa_decision_flowchart.png"],
              ["10.1", "US CBTC Deployment Map", "fig_10_01_us_deployment_map.png"],
              ["10.3", "Project Comparison Matrix", "fig_10_03_project_comparison_matrix.png"],
              ["11.7", "Headway — Major Networks", "fig_11_07_headway_comparison.png"],
              ["14.1", "30-Year Lifecycle Cost Stack", "fig_14_01_lifecycle_cost_stack.png"],
              ["14.3", "TCO Sensitivity Tornado", "fig_14_03_tco_tornado.png"],
              ["15.1", "Global Supplier Landscape", "fig_15_01_supplier_landscape.png"],
              ["16.1", "China vs. US Dashboard", "fig_16_01_comparison_dashboard.png"],
            ].map(([n, t, f]) => (
              <div key={n} style={{ background: "var(--navy)", padding: 10 }}>
                <img src={`figures/${f}`} style={{ width: "100%", display: "block" }} alt={t}/>
                <div style={{ padding: "10px 4px 4px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase", color: "var(--ink-dim)" }}>
                  <span style={{ color: "var(--amber)", marginRight: 8 }}>Fig {n}</span>{t}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <a className="btn btn-ghost" href="figures.html">Browse all 78 figures →</a>
          </div>
        </section>
      )}

      <section className="container section">
        <div className="vol-toc-wrap">
          <span className="kicker">Full table of contents</span>
          <h2 className="vol-h2">{v.chapters.length} chapters · grouped into {vol === 1 ? "four" : "five"} parts</h2>
          <div className="vol-toc-list">
            {v.chapters.map(([num, title]) => (
              <div className="vol-toc-row" key={num}>
                <span className="vol-toc-num">{num}</span>
                <span className="vol-toc-title">{title}</span>
                <span className="vol-toc-pp">~{Math.round(v.pages / v.chapters.length)} pp</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vol-sample">
        <div className="container">
          <div className="vol-sample-head">
            <span className="kicker">Sample reading</span>
            <h2 className="vol-h2">Excerpts from {excerpts.length} chapters</h2>
            <p className="vol-sample-intro">
              Selected passages from across Volume {v.num}. Each is presented as it appears in the manuscript, with editorial framing removed.
            </p>
          </div>
          <div className="vol-excerpts">
            {excerpts.map((ex, i) => (
              <article className="vol-excerpt" key={i}>
                <header className="vol-excerpt-head">
                  <span className="vol-excerpt-num">CH · {ex.ch}</span>
                  <span className="vol-excerpt-ch">{ex.title}</span>
                </header>
                <h3 className="vol-excerpt-h">{ex.heading}</h3>
                <div className="vol-excerpt-body">
                  {ex.body.split("\n\n").map((p, j) => <p key={j}>{p}</p>)}
                </div>
              </article>
            ))}
          </div>
          <div className="vol-sample-foot">
            <a className="btn btn-ghost" href={v.amazonKindle} target="_blank" rel="noopener">
              Continue reading on Kindle →
            </a>
          </div>
        </div>
      </section>

      <section className="vol-other">
        <div className="container">
          <span className="kicker">Pair it with</span>
          <div className="vol-other-card">
            <div>
              <div className="vol-other-num">VOL · {other.num}</div>
              <h3 className="vol-other-name">{other.name}</h3>
              <p className="vol-other-blurb">{other.blurb}</p>
              <a className="btn btn-primary" href={`volume-${otherNum}.html`}>
                See Volume {other.num} →
              </a>
            </div>
            <Book3D
              width={180} height={250} spine={otherNum === 1 ? 22 : 26}
              front={<CoverFront vol={otherNum} scale={1.9}/>}
              back={<CoverBack vol={otherNum} scale={1.9}/>}
            />
          </div>
        </div>
      </section>

      <SiteFooter/>
    </>
  );
}

Object.assign(window, { VolumePage });
