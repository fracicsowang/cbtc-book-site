// brand.mjs — the shared look for every downloadable resource.
//
// Deliberately a copy of the site tokens rather than an import: these values
// have to survive inside a standalone PDF that no stylesheet follows. Keep in
// sync with site/assets/site.css when the palette moves.

export const BRAND = {
  navy: "#0A1628",
  navyDeep: "#07101D",
  navyMid: "#1B2D4A",
  cyan: "#4A9EBF",
  amber: "#D4A84B",
  // Amber is unreadable as text on light surfaces (1.9:1 on cream). Same rule
  // as the site: amber for rules and fills, amber-ink for text on paper.
  amberInk: "#7F601E",
  ink: "#EAF2F7",
  inkDim: "rgba(234,242,247,0.72)",
  paper: "#F4EFE6",
  paper2: "#EAE2D2",
  char: "#1A1A1A",
  charDim: "rgba(26,26,26,0.72)",
  charRule: "rgba(26,26,26,0.14)",
  serif: '"Source Serif 4","Crimson Pro",Georgia,serif',
  sans: '"IBM Plex Sans",-apple-system,system-ui,sans-serif',
  mono: '"IBM Plex Mono",ui-monospace,Menlo,monospace',
};

export const SITE = {
  origin: "https://cbtcbook.com",
  author: "Chunjun (Francisco) Wang",
  authorUrl: "https://cbtcbook.com/about.html",
  bookTitle: "Communications-Based Train Control",
  // Free to redistribute — the point of these assets is to travel. Attribution
  // is what turns a download into a backlink.
  license: "Free to use and share with attribution.",
};

export const FONT_LINK =
  '<link rel="preconnect" href="https://fonts.googleapis.com">' +
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
  '<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&' +
  "family=IBM+Plex+Sans:wght@400;500;600&family=Source+Serif+4:wght@400;600&display=swap\" rel=\"stylesheet\">";
