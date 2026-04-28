// Homepage — Variation 1: "Press" — academic publisher, restrained, paper-toned

function HomePage() {
  return (
    <>
      <SiteNav active="home"/>

      {/* HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="kicker">Two volumes · 1,127 pages · April 2026</span>
            <h1 className="hero-title">
              The first US-focused<br/>
              technical reference on<br/>
              <em>Communications-Based<br/>Train Control.</em>
            </h1>
            <p className="hero-lede">
              Twenty years of CBTC engineering experience, US deployment practice, and
              international benchmarking — organized as a two-volume reference for
              engineers, project managers, and transit agencies.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#buy">Buy on Amazon →</a>
              <a className="btn btn-ghost" href="volume-1.html">Sample chapter</a>
            </div>
            <div className="hero-meta">
              <div><span>Published</span> April 2026</div>
              <div><span>Format</span> Paperback · Kindle</div>
              <div><span>Author</span> Chunjun (Francisco) Wang</div>
            </div>
          </div>
          <div className="hero-books">
            <div className="hero-book hero-book-1">
              <Book3D
                width={260} height={355} spine={28}
                front={<CoverFront vol={1} scale={2.7}/>}
                back={<CoverBack vol={1} scale={2.7}/>}
              />
              <div className="hero-book-cap">Vol. 01 — Foundations</div>
            </div>
            <div className="hero-book hero-book-2">
              <Book3D
                width={260} height={355} spine={32}
                front={<CoverFront vol={2} scale={2.7}/>}
                back={<CoverBack vol={2} scale={2.7}/>}
              />
              <div className="hero-book-cap">Vol. 02 — Operations</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule"/>

      {/* WHY THIS BOOK ─────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="why-grid">
            <div className="why-lede">
              <span className="kicker">Why this book</span>
              <h2>
                Most CBTC references were written for European or Asian markets.
                These two volumes address the US context directly.
              </h2>
            </div>
            <div className="why-body">
              <p>
                CBTC has replaced fixed-block circuits across modern transit, but the
                English-language literature still reflects European and Asian deployment
                experience. US engineers routinely translate IEEE 1474 against IEC 62290,
                interpret vendor white papers, and assemble BART or NYCT case material
                from fragmented public sources.
              </p>
              <p>
                These two volumes consolidate that work — comprehensively, with the US
                regulatory framework and procurement practice as the organizing logic.
                Volume 1 covers the architecture. Volume 2 covers the deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF STRIP ──────────────────────────────────────────────────── */}
      <section className="proof">
        <div className="container">
          <div className="proof-grid">
            {AUTHOR.highlights.map((h, i) => (
              <div className="proof-cell" key={i}>
                <div className="proof-num">{h.num}</div>
                <div className="proof-lab">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUMES ──────────────────────────────────────────────────────── */}
      <section className="section" id="buy">
        <div className="container">
          <span className="kicker">The two volumes</span>
          <h2 className="vol-h">
            Read sequentially or pick the volume your project needs today.
          </h2>
          <div className="vol-grid">
            {[1, 2].map(n => {
              const v = BOOK[`v${n}`];
              return (
                <article className="vol-card" key={n}>
                  <div className="vol-card-cover">
                    <Book3D
                      width={220} height={310} spine={n === 1 ? 26 : 30}
                      front={<CoverFront vol={n} scale={2.2}/>}
                      back={<CoverBack vol={n} scale={2.2}/>}
                    />
                  </div>
                  <div className="vol-card-body">
                    <div className="vol-card-head">
                      <span className="vol-num">VOL · {v.num}</span>
                      <span className="vol-pages">{v.pages} pp · {v.words} words</span>
                    </div>
                    <h3 className="vol-name">{v.name}</h3>
                    <p className="vol-blurb">{v.blurb}</p>
                    <ul className="vol-toc">
                      {v.chapters.slice(0, 5).map(([num, title]) => (
                        <li key={num}><span>{num}</span>{title}</li>
                      ))}
                      {v.chapters.length > 5 && (
                        <li className="vol-toc-more">+ {v.chapters.length - 5} more chapters →</li>
                      )}
                    </ul>
                    <div className="vol-buy">
                      <a className="btn btn-primary" href={v.amazonPrint} target="_blank" rel="noopener">
                        Paperback · {v.pricePrint}
                      </a>
                      <a className="btn btn-ghost" href={v.amazonKindle} target="_blank" rel="noopener">
                        Kindle · {v.priceKindle}
                      </a>
                      <a className="vol-detail" href={`volume-${n}.html`}>Full table of contents →</a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FIGURES SHOWCASE ─────────────────────────────────────────────── */}
      <section className="figs">
        <div className="container">
          <span className="kicker">Inside the books</span>
          <h2 className="figs-h">
            Every system, schematic, and standards relationship — drawn for engineers.
          </h2>
          <p className="figs-lede">
            More than 120 original technical figures across the two volumes. A few representative ones:
          </p>
          <div className="figs-grid">
            <a className="figs-card" href="volume-1.html">
              <img src="figures/fig_01_05_fixed_vs_moving_block.png" alt="Fixed-block vs moving-block principle"/>
              <div className="figs-cap"><span>Fig 1.5</span>Fixed-Block vs. Moving-Block Principle</div>
            </a>
            <a className="figs-card" href="volume-1.html">
              <img src="figures/fig_01_07_atp_ato_ats_triad.png" alt="ATC = ATP + ATO + ATS"/>
              <div className="figs-cap"><span>Fig 1.7</span>ATC = ATP + ATO + ATS</div>
            </a>
            <a className="figs-card" href="volume-1.html">
              <img src="figures/fig_02_01_standards_framework.png" alt="Standards framework for CBTC in the US"/>
              <div className="figs-cap"><span>Fig 2.1</span>Standards Framework — US Context</div>
            </a>
            <a className="figs-card" href="volume-1.html">
              <img src="figures/fig_06_01_radio_architecture.png" alt="CBTC radio communication architecture"/>
              <div className="figs-cap"><span>Fig 6.1</span>CBTC Radio Communication Architecture</div>
            </a>
            <a className="figs-card" href="volume-1.html">
              <img src="figures/fig_04_01_vobc_architecture.png" alt="VOBC functional architecture"/>
              <div className="figs-cap"><span>Fig 4.1</span>VOBC Functional Architecture</div>
            </a>
            <a className="figs-card" href="volume-2.html">
              <img src="figures/fig_07_06_dispatcher_workstation.png" alt="Dispatcher workstation 4-monitor layout"/>
              <div className="figs-cap"><span>Fig 7.6</span>Dispatcher Workstation — 4-Monitor Layout</div>
            </a>
          </div>
          <div className="figs-foot">
            <a className="btn btn-ghost" href="figures.html">See all 120+ figures →</a>
          </div>
        </div>
      </section>

      {/* AUDIENCE ─────────────────────────────────────────────────────── */}
      <section className="section audience">
        <div className="container">
          <span className="kicker on-dark">Who it's for</span>
          <div className="aud-grid">
            <div className="aud-cell">
              <h4>Transit engineers</h4>
              <p>Signaling design, integration, and commissioning teams at MTA, BART, WMATA, CTA, MBTA, SEPTA, and peer agencies.</p>
            </div>
            <div className="aud-cell">
              <h4>Project managers & owners</h4>
              <p>Reviewing CBTC procurements, FTA grant submissions, and vendor proposals against IEEE 1474 and FRA requirements.</p>
            </div>
            <div className="aud-cell">
              <h4>Vendor & integrator teams</h4>
              <p>Engineering and proposal teams at Siemens, Thales, Alstom, Hitachi-Rail and others working in the US market.</p>
            </div>
            <div className="aud-cell">
              <h4>Educators & students</h4>
              <p>Graduate programs in transportation engineering seeking a US-context CBTC reference with current regulatory and vendor coverage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR PEEK ──────────────────────────────────────────────────── */}
      <section className="section author-peek">
        <div className="container author-grid">
          <img className="author-photo" src="assets/headshot.png" alt="Chunjun (Francisco) Wang"/>
          <div className="author-body">
            <span className="kicker">About the author</span>
            <h2 className="author-name">Chunjun (Francisco) Wang</h2>
            <p className="author-tag">Booth MBA · CFA · CBTC Rail-Tech Expert · Princeton, NJ</p>
            <p className="author-lede">{AUTHOR.oneLiner}</p>
            <p className="author-body-text">{AUTHOR.summary}</p>
            <a className="btn btn-ghost" href="about.html">Full background →</a>
          </div>
        </div>
      </section>

      <SiteFooter/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<HomePage/>);
