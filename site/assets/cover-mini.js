/* compiled from cover-mini.jsx — do not edit; edit the .jsx */
// CoverFront / CoverBack matched to the printed Blueprint covers (covers.jsx · Style A).
// Renders into a 1000×1429 (~7×10) absolutely-positioned scene, then scales to fill the parent
// via CSS transform — so spacing, weights, and arc geometry stay identical to print.

const A = {
  navy: "#0A1628",
  navyDeep: "#07101D",
  cyan: "#4A9EBF",
  amber: "#D4A84B",
  ink: "#EAF2F7",
  dim: "rgba(234,242,247,.6)",
  rule: "rgba(234,242,247,.18)"
};

// Same network art as the print front, sized for the 1000×1429 stage.
function MiniNetwork({
  W,
  H,
  vol
}) {
  const trackY1 = H * 0.55,
    trackY2 = H * 0.62;
  const stations = [0.12, 0.32, 0.55, 0.78].map(x => x * W);
  const zcs = [0.22, 0.45, 0.68].map(x => x * W);
  return /*#__PURE__*/React.createElement("svg", {
    width: W,
    height: H,
    viewBox: `0 0 ${W} ${H}`,
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: `gM${vol}`,
    width: "36",
    height: "36",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 36 0 L 0 0 0 36",
    fill: "none",
    stroke: A.cyan,
    strokeWidth: "0.5",
    opacity: ".15"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: W,
    height: H,
    fill: `url(#gM${vol})`
  }), zcs.map((x, i) => /*#__PURE__*/React.createElement("g", {
    key: i,
    stroke: A.cyan,
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: trackY1 - 30,
    r: "120",
    opacity: ".18",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: trackY1 - 30,
    r: "170",
    opacity: ".12",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: trackY1 - 30,
    r: "220",
    opacity: ".07",
    strokeWidth: "1"
  }))), zcs.slice(0, -1).map((x, i) => {
    const nx = zcs[i + 1];
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: `M ${x} ${trackY1 - 30} Q ${(x + nx) / 2} ${trackY1 - 120} ${nx} ${trackY1 - 30}`,
      fill: "none",
      stroke: A.cyan,
      strokeWidth: "1.2",
      strokeDasharray: "4 6",
      opacity: ".55"
    });
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: trackY1,
    x2: W,
    y2: trackY1,
    stroke: A.ink,
    strokeWidth: "1.4",
    opacity: ".9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: trackY2,
    x2: W,
    y2: trackY2,
    stroke: A.ink,
    strokeWidth: "1.4",
    opacity: ".9"
  }), Array.from({
    length: Math.floor(W / 22)
  }).map((_, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: i * 22 + 6,
    y1: trackY1,
    x2: i * 22 + 6,
    y2: trackY2,
    stroke: A.ink,
    strokeWidth: "0.5",
    opacity: ".25"
  })), stations.map((x, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("rect", {
    x: x - 22,
    y: trackY2 + 10,
    width: "44",
    height: "8",
    fill: A.ink,
    opacity: ".85"
  }), /*#__PURE__*/React.createElement("line", {
    x1: x,
    y1: trackY2 + 18,
    x2: x,
    y2: trackY2 + 54,
    stroke: A.ink,
    strokeWidth: "0.6",
    opacity: ".5"
  }))), zcs.map((x, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: trackY1 - 30,
    r: "4",
    fill: A.amber
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: trackY1 - 30,
    r: "9",
    fill: "none",
    stroke: A.amber,
    strokeWidth: "1",
    opacity: ".7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: x,
    y1: trackY1 - 26,
    x2: x,
    y2: trackY1,
    stroke: A.amber,
    strokeWidth: "0.8",
    opacity: ".55"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: W * 0.42,
    y: trackY1 - 3,
    width: W * 0.12,
    height: trackY2 - trackY1 + 6,
    fill: A.amber,
    opacity: ".85"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: trackY1 - 130,
    x2: W,
    y2: trackY1 - 130,
    stroke: A.cyan,
    strokeWidth: "0.5",
    opacity: ".3",
    strokeDasharray: "1 5"
  }));
}

// scale: parent renders Book3D at width × height px; we render at the print page size and scale down.
function CoverFront({
  vol
}) {
  const v = window.BOOK[`v${vol}`];
  const W = 1000,
    H = 1429; // ~7 × 10 in @ 100 dpi
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      background: A.navy
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      transform: `scale(var(--cover-s, 1))`,
      transformOrigin: "top left",
      position: "absolute",
      inset: 0,
      background: A.navy,
      color: A.ink,
      fontFamily: "var(--sans)"
    },
    ref: el => {
      if (!el) return;
      const update = () => {
        const p = el.parentElement;
        if (!p) return;
        const s = Math.min(p.clientWidth / W, p.clientHeight / H);
        el.style.setProperty("--cover-s", s);
        el.style.width = W * s + "px";
        el.style.height = H * s + "px";
      };
      update();
      new ResizeObserver(update).observe(el.parentElement);
    }
  }, /*#__PURE__*/React.createElement(MiniNetwork, {
    W: W,
    H: H,
    vol: vol
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "68px 72px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--mono)",
      fontSize: 13,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: A.dim
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u25C9 Rail Signaling \xB7 Technical Reference"), /*#__PURE__*/React.createElement("span", null, "Ed. 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      height: 1,
      background: A.rule
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 14px",
      border: `1px solid ${A.amber}`,
      color: A.amber,
      fontFamily: "var(--mono)",
      fontSize: 13,
      letterSpacing: 2.5,
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: A.amber
    }
  }), "Volume ", v.num, " \u2014 of Two"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      fontFamily: "var(--sans)",
      fontWeight: 700,
      fontSize: 84,
      lineHeight: 0.95,
      letterSpacing: -2,
      color: A.ink
    }
  }, "Communications-", /*#__PURE__*/React.createElement("br", null), "Based Train", /*#__PURE__*/React.createElement("br", null), "Control"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      fontSize: 22,
      lineHeight: 1.35,
      color: "rgba(234,242,247,.82)",
      maxWidth: 600,
      fontWeight: 300
    }
  }, "A Comprehensive Guide for US Transit Professionals"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      fontFamily: "var(--mono)",
      fontSize: 14,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: A.amber
    }
  }, v.name), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--mono)",
      fontSize: 12,
      letterSpacing: 1.6,
      textTransform: "uppercase",
      color: A.dim,
      marginBottom: 6
    }
  }, "Author"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      color: A.ink,
      letterSpacing: -0.3
    }
  }, "Chunjun (Francisco) Wang")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--mono)",
      fontSize: 12,
      letterSpacing: 1.4,
      textTransform: "uppercase",
      color: A.dim,
      textAlign: "right"
    }
  }, v.pages, " pp \xB7 ", v.words, " words", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: A.cyan
    }
  }, "7 \xD7 10 in"))))));
}
function CoverBack({
  vol
}) {
  const v = window.BOOK[`v${vol}`];
  const W = 1000,
    H = 1429;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      background: A.navyDeep
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      transform: `scale(var(--cover-s, 1))`,
      transformOrigin: "top left",
      position: "absolute",
      inset: 0,
      background: A.navyDeep,
      color: A.ink,
      fontFamily: "var(--sans)"
    },
    ref: el => {
      if (!el) return;
      const update = () => {
        const p = el.parentElement;
        if (!p) return;
        const s = Math.min(p.clientWidth / W, p.clientHeight / H);
        el.style.setProperty("--cover-s", s);
        el.style.width = W * s + "px";
        el.style.height = H * s + "px";
      };
      update();
      new ResizeObserver(update).observe(el.parentElement);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    style: {
      position: "absolute",
      inset: 0,
      opacity: .6
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: `bgB${vol}`,
    width: "36",
    height: "36",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 36 0 L 0 0 0 36",
    fill: "none",
    stroke: A.cyan,
    strokeWidth: "0.5",
    opacity: ".13"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: `url(#bgB${vol})`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "68px 72px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--mono)",
      fontSize: 13,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: A.dim
    }
  }, /*#__PURE__*/React.createElement("span", null, "About this Volume"), /*#__PURE__*/React.createElement("span", null, "VOL ", v.num, " / 02")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      height: 1,
      background: A.rule
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      fontSize: 17,
      lineHeight: 1.55,
      color: "rgba(234,242,247,.88)",
      fontWeight: 300
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, v.blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      fontFamily: "var(--mono)",
      fontSize: 11,
      letterSpacing: 1.4,
      textTransform: "uppercase",
      color: A.dim
    }
  }, "Chunjun (Francisco) Wang \xB7 CBTC Engineer", /*#__PURE__*/React.createElement("br", null), "Booth MBA \xB7 CFA", /*#__PURE__*/React.createElement("br", null), "Published via Amazon KDP"))));
}
Object.assign(window, {
  CoverFront,
  CoverBack
});