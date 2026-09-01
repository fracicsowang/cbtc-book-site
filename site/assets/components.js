/* compiled from components.jsx — do not edit; edit the .jsx */
// Shared site components: nav, footer, 3D book

const NAV_LINKS = [{
  href: "volume-1.html",
  label: "Volume 1",
  key: "v1"
}, {
  href: "volume-2.html",
  label: "Volume 2",
  key: "v2"
}, {
  href: "/blog/",
  label: "Articles",
  key: "articles"
}, {
  href: "/resources/",
  label: "Resources",
  key: "resources"
}, {
  href: "about.html",
  label: "About",
  key: "about"
}, {
  href: "figures.html",
  label: "Figures",
  key: "figures"
}, {
  href: "slides.html",
  label: "Slides",
  key: "slides"
}, {
  href: "glossary.html",
  label: "Glossary",
  key: "glossary"
}, {
  href: "errata.html",
  label: "Errata",
  key: "errata"
}, {
  href: "contact.html",
  label: "Contact",
  key: "contact"
}];
function SiteNav({
  active
}) {
  // Hamburger menu open state — visible only on mobile (≤900px) via CSS.
  const [open, setOpen] = React.useState(false);

  // Close on Escape
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  const onBuy = e => {
    setOpen(false);
    if (!document.querySelector("#buy")) {
      e.preventDefault();
      window.location.href = "index.html#buy";
    }
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: "site-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    className: "site-nav-brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", null, "CBTC\xA0\xB7\xA0Wang")), /*#__PURE__*/React.createElement("div", {
    className: "site-nav-links"
  }, NAV_LINKS.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.key,
    href: l.href,
    className: active === l.key ? "active" : ""
  }, l.label))), /*#__PURE__*/React.createElement("a", {
    className: "site-nav-cta",
    href: "#buy",
    onClick: onBuy
  }, "Buy on Amazon \u2192"), /*#__PURE__*/React.createElement("button", {
    className: "site-nav-burger",
    type: "button",
    "aria-label": open ? "Close menu" : "Open menu",
    "aria-expanded": open,
    "aria-controls": "site-nav-mobile",
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), open && /*#__PURE__*/React.createElement("div", {
    id: "site-nav-mobile",
    className: "site-nav-mobile"
  }, NAV_LINKS.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.key,
    href: l.href,
    className: active === l.key ? "active" : "",
    onClick: () => setOpen(false)
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    className: "site-nav-mobile__cta",
    href: "#buy",
    onClick: onBuy
  }, "Buy on Amazon \u2192")));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-foot-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "site-foot-mark"
  }, "Communications-Based", /*#__PURE__*/React.createElement("br", null), "Train Control \u2014 ", /*#__PURE__*/React.createElement("em", null, "a comprehensive guide")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-dim)",
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 360
    }
  }, "Two volumes. 1,127 pages. The first US-focused technical reference on CBTC, written for engineers, project managers, and procurement teams.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "The Books"), /*#__PURE__*/React.createElement("a", {
    href: "volume-1.html"
  }, "Volume 1 \u2014 Foundations"), /*#__PURE__*/React.createElement("a", {
    href: "volume-2.html"
  }, "Volume 2 \u2014 Operations"), /*#__PURE__*/React.createElement("a", {
    href: "figures.html"
  }, "Figures gallery"), /*#__PURE__*/React.createElement("a", {
    href: "slides.html"
  }, "Chapter slides"), /*#__PURE__*/React.createElement("a", {
    href: "errata.html"
  }, "Errata & supplements"), /*#__PURE__*/React.createElement("a", {
    href: "glossary.html"
  }, "CBTC glossary")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Author"), /*#__PURE__*/React.createElement("a", {
    href: "about.html"
  }, "About Francisco Wang"), /*#__PURE__*/React.createElement("a", {
    href: "contact.html"
  }, "Speaking & consulting"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/chunjun-wang/",
    target: "_blank",
    rel: "noopener"
  }, "LinkedIn")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Buy"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.amazon.com/Communications-Based-Train-Control-Comprehensive-Professionals-ebook/dp/B0GYHLYQZZ",
    target: "_blank",
    rel: "noopener"
  }, "Volume 1 \xB7 Amazon"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.amazon.com/Communications-Based-Train-Control-Comprehensive-Professionals-ebook/dp/B0GYHHNL2H",
    target: "_blank",
    rel: "noopener"
  }, "Volume 2 \xB7 Amazon"), /*#__PURE__*/React.createElement("a", {
    href: "contact.html"
  }, "Bulk / institutional"))), /*#__PURE__*/React.createElement("div", {
    className: "site-foot-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Chunjun Wang"), /*#__PURE__*/React.createElement("span", null, "Princeton, NJ \xB7 open to remote")));
}

// 3D book — `cover` is a render fn that returns the front face element.
// Optional `spine` thickness in px.
function Book3D({
  width = 220,
  height = 290,
  spine = 26,
  front,
  back,
  onClick,
  className = ""
}) {
  const [flipped, setFlipped] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: `book3d ${flipped ? "flipping" : ""} ${className}`,
    style: {
      width,
      height,
      "--spine": spine + "px"
    },
    onClick: () => {
      setFlipped(f => !f);
      onClick && onClick();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "book3d-inner",
    style: {
      width,
      height
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "book3d-face book3d-front"
  }, front), /*#__PURE__*/React.createElement("div", {
    className: "book3d-face book3d-back"
  }, back), /*#__PURE__*/React.createElement("div", {
    className: "book3d-face book3d-spine-l"
  }), /*#__PURE__*/React.createElement("div", {
    className: "book3d-face book3d-spine-r"
  }), /*#__PURE__*/React.createElement("div", {
    className: "book3d-face book3d-top"
  }), /*#__PURE__*/React.createElement("div", {
    className: "book3d-face book3d-bottom"
  })));
}
Object.assign(window, {
  SiteNav,
  SiteFooter,
  Book3D,
  NAV_LINKS
});