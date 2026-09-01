/* compiled from home.jsx — do not edit; edit the .jsx */
// Homepage — Variation 1: "Press" — academic publisher, restrained, paper-toned

function HomePage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteNav, {
    active: "home"
  }), /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "Two volumes \xB7 1,127 pages \xB7 April 2026"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-title"
  }, "The first US-focused", /*#__PURE__*/React.createElement("br", null), "technical reference on", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Communications-Based", /*#__PURE__*/React.createElement("br", null), "Train Control.")), /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, "Twenty years of CBTC engineering experience, US deployment practice, and international benchmarking \u2014 organized as a two-volume reference for engineers, project managers, and transit agencies."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "#buy"
  }, "Buy on Amazon \u2192"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "volume-1.html"
  }, "Sample chapter")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Published"), " April 2026"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Format"), " Paperback \xB7 Kindle"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Author"), " Chunjun (Francisco) Wang"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-books"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-book hero-book-1"
  }, /*#__PURE__*/React.createElement(Book3D, {
    width: 260,
    height: 355,
    spine: 28,
    front: /*#__PURE__*/React.createElement(CoverFront, {
      vol: 1,
      scale: 2.7
    }),
    back: /*#__PURE__*/React.createElement(CoverBack, {
      vol: 1,
      scale: 2.7
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-book-cap"
  }, "Vol. 01 \u2014 Foundations")), /*#__PURE__*/React.createElement("div", {
    className: "hero-book hero-book-2"
  }, /*#__PURE__*/React.createElement(Book3D, {
    width: 260,
    height: 355,
    spine: 32,
    front: /*#__PURE__*/React.createElement(CoverFront, {
      vol: 2,
      scale: 2.7
    }),
    back: /*#__PURE__*/React.createElement(CoverBack, {
      vol: 2,
      scale: 2.7
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-book-cap"
  }, "Vol. 02 \u2014 Operations"))))), /*#__PURE__*/React.createElement("hr", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "why-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "why-lede"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "Why this book"), /*#__PURE__*/React.createElement("h2", null, "Most CBTC references were written for European or Asian markets. These two volumes address the US context directly.")), /*#__PURE__*/React.createElement("div", {
    className: "why-body"
  }, /*#__PURE__*/React.createElement("p", null, "CBTC has replaced fixed-block circuits across modern transit, but the English-language literature still reflects European and Asian deployment experience. US engineers routinely translate IEEE 1474 against IEC 62290, interpret vendor white papers, and assemble BART or NYCT case material from fragmented public sources."), /*#__PURE__*/React.createElement("p", null, "These two volumes consolidate that work \u2014 comprehensively, with the US regulatory framework and procurement practice as the organizing logic. Volume 1 covers the architecture. Volume 2 covers the deployment."))))), /*#__PURE__*/React.createElement("section", {
    className: "proof"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "proof-grid"
  }, AUTHOR.highlights.map((h, i) => /*#__PURE__*/React.createElement("div", {
    className: "proof-cell",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "proof-num"
  }, h.num), /*#__PURE__*/React.createElement("div", {
    className: "proof-lab"
  }, h.label)))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "buy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "The two volumes"), /*#__PURE__*/React.createElement("h2", {
    className: "vol-h"
  }, "Read sequentially or pick the volume your project needs today."), /*#__PURE__*/React.createElement("div", {
    className: "vol-grid"
  }, [1, 2].map(n => {
    const v = BOOK[`v${n}`];
    return /*#__PURE__*/React.createElement("article", {
      className: "vol-card",
      key: n
    }, /*#__PURE__*/React.createElement("div", {
      className: "vol-card-cover"
    }, /*#__PURE__*/React.createElement(Book3D, {
      width: 220,
      height: 310,
      spine: n === 1 ? 26 : 30,
      front: /*#__PURE__*/React.createElement(CoverFront, {
        vol: n,
        scale: 2.2
      }),
      back: /*#__PURE__*/React.createElement(CoverBack, {
        vol: n,
        scale: 2.2
      })
    })), /*#__PURE__*/React.createElement("div", {
      className: "vol-card-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "vol-card-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "vol-num"
    }, "VOL \xB7 ", v.num), /*#__PURE__*/React.createElement("span", {
      className: "vol-pages"
    }, v.pages, " pp \xB7 ", v.words, " words")), /*#__PURE__*/React.createElement("h3", {
      className: "vol-name"
    }, v.name), /*#__PURE__*/React.createElement("p", {
      className: "vol-blurb"
    }, v.blurb), /*#__PURE__*/React.createElement("ul", {
      className: "vol-toc"
    }, v.chapters.slice(0, 5).map(([num, title]) => /*#__PURE__*/React.createElement("li", {
      key: num
    }, /*#__PURE__*/React.createElement("span", null, num), title)), v.chapters.length > 5 && /*#__PURE__*/React.createElement("li", {
      className: "vol-toc-more"
    }, "+ ", v.chapters.length - 5, " more chapters \u2192")), /*#__PURE__*/React.createElement("div", {
      className: "vol-buy"
    }, /*#__PURE__*/React.createElement("a", {
      className: "btn btn-primary",
      href: v.amazonPrint,
      target: "_blank",
      rel: "noopener"
    }, "Paperback \xB7 ", v.pricePrint), /*#__PURE__*/React.createElement("a", {
      className: "btn btn-ghost",
      href: v.amazonKindle,
      target: "_blank",
      rel: "noopener"
    }, "Kindle \xB7 ", v.priceKindle), /*#__PURE__*/React.createElement("a", {
      className: "vol-detail",
      href: `volume-${n}.html`
    }, "Full table of contents \u2192"))));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "figs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "Inside the books"), /*#__PURE__*/React.createElement("h2", {
    className: "figs-h"
  }, "Every system, schematic, and standards relationship \u2014 drawn for engineers."), /*#__PURE__*/React.createElement("p", {
    className: "figs-lede"
  }, "More than 120 original technical figures across the two volumes. A few representative ones:"), /*#__PURE__*/React.createElement("div", {
    className: "figs-grid"
  }, /*#__PURE__*/React.createElement("a", {
    className: "figs-card",
    href: "volume-1.html"
  }, /*#__PURE__*/React.createElement("img", {
    src: "figures/fig_01_05_fixed_vs_moving_block.webp",
    alt: "Fixed-block vs moving-block principle"
  }), /*#__PURE__*/React.createElement("div", {
    className: "figs-cap"
  }, /*#__PURE__*/React.createElement("span", null, "Fig 1.5"), "Fixed-Block vs. Moving-Block Principle")), /*#__PURE__*/React.createElement("a", {
    className: "figs-card",
    href: "volume-1.html"
  }, /*#__PURE__*/React.createElement("img", {
    src: "figures/fig_01_07_atp_ato_ats_triad.webp",
    alt: "ATC = ATP + ATO + ATS"
  }), /*#__PURE__*/React.createElement("div", {
    className: "figs-cap"
  }, /*#__PURE__*/React.createElement("span", null, "Fig 1.7"), "ATC = ATP + ATO + ATS")), /*#__PURE__*/React.createElement("a", {
    className: "figs-card",
    href: "volume-1.html"
  }, /*#__PURE__*/React.createElement("img", {
    src: "figures/fig_02_01_standards_framework.webp",
    alt: "Standards framework for CBTC in the US"
  }), /*#__PURE__*/React.createElement("div", {
    className: "figs-cap"
  }, /*#__PURE__*/React.createElement("span", null, "Fig 2.1"), "Standards Framework \u2014 US Context")), /*#__PURE__*/React.createElement("a", {
    className: "figs-card",
    href: "volume-1.html"
  }, /*#__PURE__*/React.createElement("img", {
    src: "figures/fig_06_01_radio_architecture.webp",
    alt: "CBTC radio communication architecture"
  }), /*#__PURE__*/React.createElement("div", {
    className: "figs-cap"
  }, /*#__PURE__*/React.createElement("span", null, "Fig 6.1"), "CBTC Radio Communication Architecture")), /*#__PURE__*/React.createElement("a", {
    className: "figs-card",
    href: "volume-1.html"
  }, /*#__PURE__*/React.createElement("img", {
    src: "figures/fig_04_01_vobc_architecture.webp",
    alt: "VOBC functional architecture"
  }), /*#__PURE__*/React.createElement("div", {
    className: "figs-cap"
  }, /*#__PURE__*/React.createElement("span", null, "Fig 4.1"), "VOBC Functional Architecture")), /*#__PURE__*/React.createElement("a", {
    className: "figs-card",
    href: "volume-2.html"
  }, /*#__PURE__*/React.createElement("img", {
    src: "figures/fig_07_06_dispatcher_workstation.webp",
    alt: "Dispatcher workstation 4-monitor layout"
  }), /*#__PURE__*/React.createElement("div", {
    className: "figs-cap"
  }, /*#__PURE__*/React.createElement("span", null, "Fig 7.6"), "Dispatcher Workstation \u2014 4-Monitor Layout"))), /*#__PURE__*/React.createElement("div", {
    className: "figs-foot"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "figures.html"
  }, "See all 120+ figures \u2192")))), /*#__PURE__*/React.createElement("section", {
    className: "section audience"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker on-dark"
  }, "Who it's for"), /*#__PURE__*/React.createElement("div", {
    className: "aud-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aud-cell"
  }, /*#__PURE__*/React.createElement("h4", null, "Transit engineers"), /*#__PURE__*/React.createElement("p", null, "Signaling design, integration, and commissioning teams at MTA, BART, WMATA, CTA, MBTA, SEPTA, and peer agencies.")), /*#__PURE__*/React.createElement("div", {
    className: "aud-cell"
  }, /*#__PURE__*/React.createElement("h4", null, "Project managers & owners"), /*#__PURE__*/React.createElement("p", null, "Reviewing CBTC procurements, FTA grant submissions, and vendor proposals against IEEE 1474 and FRA requirements.")), /*#__PURE__*/React.createElement("div", {
    className: "aud-cell"
  }, /*#__PURE__*/React.createElement("h4", null, "Vendor & integrator teams"), /*#__PURE__*/React.createElement("p", null, "Engineering and proposal teams at Siemens, Thales, Alstom, Hitachi-Rail and others working in the US market.")), /*#__PURE__*/React.createElement("div", {
    className: "aud-cell"
  }, /*#__PURE__*/React.createElement("h4", null, "Educators & students"), /*#__PURE__*/React.createElement("p", null, "Graduate programs in transportation engineering seeking a US-context CBTC reference with current regulatory and vendor coverage."))))), /*#__PURE__*/React.createElement("section", {
    className: "section author-peek"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container author-grid"
  }, /*#__PURE__*/React.createElement("img", {
    className: "author-photo",
    src: "assets/headshot.jpg",
    alt: "Chunjun (Francisco) Wang"
  }), /*#__PURE__*/React.createElement("div", {
    className: "author-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
  }, "About the author"), /*#__PURE__*/React.createElement("h2", {
    className: "author-name"
  }, "Chunjun (Francisco) Wang"), /*#__PURE__*/React.createElement("p", {
    className: "author-tag"
  }, "Booth MBA \xB7 CFA \xB7 CBTC Rail-Tech Expert \xB7 Princeton, NJ"), /*#__PURE__*/React.createElement("p", {
    className: "author-lede"
  }, AUTHOR.oneLiner), /*#__PURE__*/React.createElement("p", {
    className: "author-body-text"
  }, AUTHOR.summary), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "about.html"
  }, "Full background \u2192")))), /*#__PURE__*/React.createElement(SiteFooter, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(HomePage, null));