// Shared site components: nav, footer, 3D book

const NAV_LINKS = [
  { href: "index.html", label: "Home", key: "home" },
  { href: "volume-1.html", label: "Volume 1", key: "v1" },
  { href: "volume-2.html", label: "Volume 2", key: "v2" },
  { href: "/blog/", label: "Articles", key: "articles" },
  { href: "about.html", label: "About", key: "about" },
  { href: "figures.html", label: "Figures", key: "figures" },
  { href: "slides.html", label: "Slides", key: "slides" },
  { href: "glossary.html", label: "Glossary", key: "glossary" },
  { href: "errata.html", label: "Errata", key: "errata" },
  { href: "contact.html", label: "Contact", key: "contact" },
];

function SiteNav({ active }) {
  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <a href="index.html" className="site-nav-brand">
          <span className="dot" />
          <span>CBTC&nbsp;·&nbsp;Wang</span>
        </a>
        <div className="site-nav-links">
          {NAV_LINKS.map(l => (
            <a key={l.key} href={l.href} className={active === l.key ? "active" : ""}>
              {l.label}
            </a>
          ))}
        </div>
        <a className="site-nav-cta" href="#buy" onClick={(e) => {
          // If on home, scroll; else go to home#buy
          if (!document.querySelector("#buy")) {
            e.preventDefault();
            window.location.href = "index.html#buy";
          }
        }}>
          Buy on Amazon →
        </a>
      </div>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="site-foot-inner">
        <div>
          <div className="site-foot-mark">
            Communications-Based<br/>
            Train Control — <em>a comprehensive guide</em>
          </div>
          <div style={{ color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.6, maxWidth: 360 }}>
            Two volumes. 1,127 pages. The first US-focused technical reference on CBTC,
            written for engineers, project managers, and procurement teams.
          </div>
        </div>
        <div>
          <h4>The Books</h4>
          <a href="volume-1.html">Volume 1 — Foundations</a>
          <a href="volume-2.html">Volume 2 — Operations</a>
          <a href="figures.html">Figures gallery</a>
          <a href="slides.html">Chapter slides</a>
          <a href="errata.html">Errata & supplements</a>
          <a href="glossary.html">CBTC glossary</a>
        </div>
        <div>
          <h4>Author</h4>
          <a href="about.html">About Francisco Wang</a>
          <a href="contact.html">Speaking & consulting</a>
          <a href="https://www.linkedin.com/in/chunjun-wang/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
        <div>
          <h4>Buy</h4>
          <a href="https://www.amazon.com/Communications-Based-Train-Control-Comprehensive-Professionals-ebook/dp/B0GYHLYQZZ" target="_blank" rel="noopener">Volume 1 · Amazon</a>
          <a href="https://www.amazon.com/Communications-Based-Train-Control-Comprehensive-Professionals-ebook/dp/B0GYHHNL2H" target="_blank" rel="noopener">Volume 2 · Amazon</a>
          <a href="contact.html">Bulk / institutional</a>
        </div>
      </div>
      <div className="site-foot-bottom">
        <span>© 2026 Chunjun Wang</span>
        <span>Princeton, NJ · open to remote</span>
      </div>
    </footer>
  );
}

// 3D book — `cover` is a render fn that returns the front face element.
// Optional `spine` thickness in px.
function Book3D({ width = 220, height = 290, spine = 26, front, back, onClick, className = "" }) {
  const [flipped, setFlipped] = React.useState(false);
  return (
    <div
      className={`book3d ${flipped ? "flipping" : ""} ${className}`}
      style={{ width, height, "--spine": spine + "px" }}
      onClick={() => { setFlipped(f => !f); onClick && onClick(); }}
    >
      <div className="book3d-inner" style={{ width, height }}>
        <div className="book3d-face book3d-front">{front}</div>
        <div className="book3d-face book3d-back">{back}</div>
        <div className="book3d-face book3d-spine-l" />
        <div className="book3d-face book3d-spine-r" />
        <div className="book3d-face book3d-top" />
        <div className="book3d-face book3d-bottom" />
      </div>
    </div>
  );
}

Object.assign(window, { SiteNav, SiteFooter, Book3D, NAV_LINKS });
