// templates.mjs — HTML shells shared by every resource.
//
// Two outputs per asset, from one content definition:
//   printPage()   -> what Chrome turns into the downloadable PDF
//   landingPage() -> the indexable page that sells + serves the download
// plus hubPage() for /resources/.
//
// The landing pages are deliberately plain HTML. The marketing pages render
// through React UMD, but these exist to rank and to be linked; putting a
// render-blocking framework in front of a download button would undo the
// perf work in 18365ce for no gain.

import { BRAND as B, SITE, FONT_LINK } from "./brand.mjs";

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const GA = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-0NF9Z0T953"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-0NF9Z0T953');
document.addEventListener('click', function(e){
  var a = e.target.closest('a[data-download]');
  if (!a) return;
  gtag('event', 'resource_download', {
    resource_slug: a.getAttribute('data-download'),
    file_type: a.getAttribute('data-filetype') || 'pdf',
    page_path: location.pathname
  });
});
document.addEventListener('click', function(e){
  var a = e.target.closest('a[href*="amazon.com"]');
  if (!a) return;
  gtag('event', 'click_amazon', { page_path: location.pathname, link_url: a.href });
});
</script>`;

// ── shared chrome ───────────────────────────────────────────────────────────
export function navHtml(links, activeKey) {
  const items = links
    .map(
      (l) =>
        `<a href="${esc(l.href)}"${l.key === activeKey ? ' class="active"' : ""}>${esc(l.label)}</a>`,
    )
    .join("\n          ");
  const mobileItems = links
    .map(
      (l) =>
        `<a href="${esc(l.href)}"${l.key === activeKey ? ' class="active"' : ""}>${esc(l.label)}</a>`,
    )
    .join("\n    ");
  // The drawer is the same markup site.css already styles for the React pages,
  // driven by ten lines of vanilla JS — these pages have no framework and the
  // desktop link row does not fit under 1100px.
  return `<nav class="site-nav">
  <div class="site-nav-inner">
    <a href="/index.html" class="site-nav-brand"><span class="dot"></span><span>CBTC&nbsp;·&nbsp;Wang</span></a>
    <div class="site-nav-links">
          ${items}
    </div>
    <a class="site-nav-cta" href="/index.html#buy">Buy on Amazon &rarr;</a>
    <button class="site-nav-burger" type="button" aria-label="Open menu"
            aria-expanded="false" aria-controls="site-nav-mobile">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div id="site-nav-mobile" class="site-nav-mobile" hidden>
    ${mobileItems}
    <a class="site-nav-mobile__cta" href="/index.html#buy">Buy on Amazon &rarr;</a>
  </div>
</nav>
<script>
(function () {
  var b = document.querySelector('.site-nav-burger');
  var d = document.getElementById('site-nav-mobile');
  if (!b || !d) return;
  var set = function (open) {
    b.setAttribute('aria-expanded', String(open));
    b.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    d.hidden = !open;
  };
  b.addEventListener('click', function () {
    set(b.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') set(false);
  });
})();
</script>`;
}

export function footerHtml() {
  return `<footer class="site-foot">
  <div class="site-foot-inner">
    <div>
      <div class="site-foot-mark">Communications-Based<br><em>Train Control</em></div>
      <p style="color:${B.inkDim};font-size:14px;max-width:34ch;margin:0">
        A two-volume technical reference for US transit professionals, by ${esc(SITE.author)}.
      </p>
    </div>
    <div>
      <h3>The book</h3>
      <a href="/volume-1.html">Volume 1 &mdash; Foundations</a>
      <a href="/volume-2.html">Volume 2 &mdash; Operations</a>
      <a href="/figures.html">Figures</a>
    </div>
    <div>
      <h3>Free resources</h3>
      <a href="/resources/">All downloads</a>
      <a href="/blog/">Articles</a>
      <a href="/glossary.html">Glossary</a>
    </div>
  </div>
  <div class="site-foot-bottom">
    <span>&copy; ${new Date().getUTCFullYear()} ${esc(SITE.author)}</span>
    <span>cbtcbook.com</span>
  </div>
</footer>`;
}

// ── the PDF ─────────────────────────────────────────────────────────────────
export function printPage(asset) {
  const land = !!asset.page?.landscape;
  // US Letter at 96 CSS px/in. Pinned in px rather than 100vh: Chrome's print
  // viewport is a hair off the page box, and one stray pixel produces a blank
  // second page on every sheet.
  const [PW, PH] = land ? [1056, 816] : [816, 1056];
  // Multi-page sheets (checklists, the glossary, the projects database) flow
  // instead of being scaled down. Shrinking a 30-item checklist to 80% to save
  // a page makes it unreadable in print, which defeats the object.
  const flow = !!asset.multipage;
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>${esc(asset.title)}</title>
${FONT_LINK}
<style>
  /* Single-page sheets pin their own box. Flowing ones leave the margins to
     puppeteer, which reserves the strip the running footer is painted into —
     declaring margin:0 here overrides that and the last line lands on top of
     the page number. */
  @page { size: ${asset.page?.format || "Letter"} ${asset.page?.landscape ? "landscape" : "portrait"}; ${flow ? "" : "margin: 0;"} }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; width: ${PW}px; ${flow ? "" : `height: ${PH}px; overflow: hidden;`} }
  body {
    font-family: ${B.sans};
    background: ${B.paper};
    color: ${B.char};
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .sheet {
    padding: 44px 52px 0;
    display: flex;
    flex-direction: column;
    /* Exactly one page: the builder fits the body to whatever is left. */
    width: ${PW}px;
    ${flow ? "min-height: 0; padding-bottom: 18px;" : `height: ${PH}px;`}
  }
  .doc-head {
    display: flex; align-items: flex-start; justify-content: space-between;
    gap: 32px;
    border-bottom: 2px solid ${B.navy};
    padding-bottom: 18px; margin-bottom: 26px;
  }
  .doc-kicker {
    font-family: ${B.mono}; font-size: 9.5px; letter-spacing: 2.2px;
    text-transform: uppercase; color: ${B.charDim};
    display: flex; align-items: center; gap: 9px; margin: 0 0 10px;
  }
  .doc-kicker::before { content:""; width: 22px; height: 1px; background: ${B.amber}; }
  .doc-title {
    font-family: ${B.serif}; font-size: ${land ? 26 : 30}px; line-height: 1.1;
    font-weight: 600; letter-spacing: -0.5px; margin: 0; max-width: ${land ? 44 : 22}ch;
  }
  .doc-sub {
    font-size: 12.5px; line-height: 1.5; color: ${B.charDim};
    margin: 9px 0 0; max-width: 62ch;
  }
  .doc-stamp {
    font-family: ${B.mono}; font-size: 9px; letter-spacing: 1.4px;
    text-transform: uppercase; color: ${B.charDim};
    text-align: right; line-height: 1.9; white-space: nowrap; flex: none;
  }
  .doc-stamp b { color: ${B.char}; font-weight: 500; }
  .doc-body { flex: 1; min-height: 0; }
  ${flow ? `
  /* Normal flow, not flex: a flex column does not paginate — the body keeps
     its single-page box and the footer ends up painted over the overflow. */
  .sheet { display: block; }
  .doc-body { flex: none; }
  .doc-foot { margin-top: 16px; }
  .doc-inner { height: auto; }
  /* Multicol fills column 1 of a page before column 2, so an unplanned spill
     leaves half the next page blank. Sheets that run long place their own
     .pagebreak and give each page a self-contained, balanced .cols2 block. */
  .pagebreak { break-before: page; }
  /* Glossary: term and definition run together as one paragraph so 200 entries
     stay dense enough to be a reference card rather than a booklet. */
  dl.gloss { margin: 0 0 10px; }
  dl.gloss dt {
    display: inline; font-weight: 600; font-size: 9.5px;
  }
  dl.gloss dt::after { content: " · "; color: ${B.amberInk}; font-weight: 400; }
  dl.gloss dd {
    display: inline; margin: 0; font-size: 9.5px; line-height: 1.45;
    color: ${B.charDim};
  }
  dl.gloss dd::after { content: ""; display: block; margin-bottom: 4px; }
  .gloss-wrap h3.phase { margin-top: 14px; }
  ul.check li { font-size: 10.5px; padding-top: 6px; padding-bottom: 6px; }
  h3.phase, table.rt, .note, ul.check li { break-inside: avoid; }
  h2.sec { break-after: avoid; }` : ""}
  /* Definite height so a drawing's max-height:100% has something to resolve against. */
  .doc-inner { width: 100%; height: 100%; }
  /* A drawing sizes itself to the space left over, keeping its aspect ratio. */
  .doc-body svg {
    display: block; margin: 0 auto;
    max-width: 100%; max-height: 100%; width: auto; height: auto;
  }
  .doc-foot {
    margin-top: 26px; padding: 14px 0 22px;
    border-top: 1px solid ${B.charRule};
    display: flex; justify-content: space-between; align-items: baseline; gap: 24px;
    font-family: ${B.mono}; font-size: 8.5px; letter-spacing: 1.2px;
    text-transform: uppercase; color: ${B.charDim};
  }
  .doc-foot .src { text-transform: none; letter-spacing: 0; font-family: ${B.sans}; font-size: 9.5px; max-width: 72ch; }

  /* shared content primitives, used by the asset bodies */
  table.rt { width: 100%; border-collapse: collapse; font-size: 11px; line-height: 1.45; }
  table.rt caption { display: none; }
  table.rt thead th {
    background: ${B.navy}; color: ${B.ink}; text-align: left;
    font-family: ${B.mono}; font-size: 9px; letter-spacing: 1.5px;
    text-transform: uppercase; font-weight: 500; padding: 9px 11px;
  }
  table.rt tbody th {
    text-align: left; font-weight: 600; background: ${B.paper2};
    padding: ${land ? "7px 10px" : "9px 11px"}; width: 21%; vertical-align: top;
    border-bottom: 1px solid ${B.charRule};
  }
  table.rt td {
    padding: ${land ? "7px 10px" : "9px 11px"}; vertical-align: top;
    border-bottom: 1px solid ${B.charRule};
  }
  table.rt tbody tr:last-child th, table.rt tbody tr:last-child td { border-bottom: 0; }
  table.rt .c { text-align: center; font-family: ${B.mono}; font-size: 10.5px; letter-spacing: 0.4px; }
  table.rt thead th.c { text-align: center; font-family: ${B.mono}; }
  /* Matrix layout: one label column, then equal columns, so the headers sit
     directly over the values instead of drifting with content width. */
  /* The projects database runs seven columns wide; the shared 11px body is too
     loose for it and the row note needs the space. */
  table.rt.db { font-size: 9px; line-height: 1.35; }
  table.rt.db th[scope="row"] { width: 15%; }
  table.rt.db td, table.rt.db th { padding: 5px 7px; }
  table.rt.db thead th { font-size: 8px; letter-spacing: 1.1px; }
  table.rt.matrix { table-layout: fixed; }
  table.rt.matrix tbody th { width: 26%; }
  table.rt.matrix td, table.rt.matrix thead th.c { width: 14.8%; }
  .note {
    margin-top: ${land ? "12px" : "16px"}; padding: ${land ? "10px 14px" : "12px 14px"};
    background: ${B.paper2};
    border-top: 2px solid ${B.amber};
    font-size: 10.5px; line-height: 1.55; color: ${B.char};
  }
  .note b { font-weight: 600; }
  .legend {
    display: flex; flex-wrap: wrap; gap: 8px 22px; margin: ${land ? "9px" : "14px"} 0 0;
    font-family: ${B.mono}; font-size: 9px; letter-spacing: 1.1px;
    text-transform: uppercase; color: ${B.charDim};
  }
  .legend b { color: ${B.char}; font-weight: 500; }
  /* Checklist sheets: printed and ticked by hand, so real boxes and a
     two-column flow that keeps a long list on one page. */
  ul.check { list-style: none; padding: 0; margin: 0; }
  ul.check li {
    position: relative; padding: ${land ? "4px" : "5px"} 0 ${land ? "4px" : "5px"} 20px;
    font-size: 10px; line-height: 1.4;
    border-bottom: 1px solid ${B.charRule};
    break-inside: avoid;
  }
  ul.check li::before {
    content: ""; position: absolute; left: 0; top: 7px;
    width: 9px; height: 9px; border: 1.2px solid ${B.navy}; background: #FFF;
  }
  ul.check li b { font-weight: 600; }
  ul.check li .why { color: ${B.charDim}; }
  .cols2 { column-count: 2; column-gap: 26px; }
  /* Fill column 1 of a page, then column 2, then the next page. The default
     (balance) spreads one long flow across all pages first, which puts section
     1 in the left column and section 6 in the right — unreadable in order. */
  .cols2 { column-fill: auto; }
  .cols2 > * { break-inside: avoid; }
  h3.phase {
    font-family: ${B.mono}; font-size: 9px; letter-spacing: 1.8px;
    text-transform: uppercase; color: ${B.char};
    margin: 12px 0 5px; padding-bottom: 4px;
    border-bottom: 2px solid ${B.navy};
    break-after: avoid;
  }
  h3.phase:first-child { margin-top: 0; }
  h3.phase span { float: right; color: ${B.charDim}; letter-spacing: 1.2px; font-weight: 400; }
  h2.sec {
    font-family: ${B.serif}; font-size: 15px; font-weight: 600;
    margin: ${land ? "15px 0 8px" : "22px 0 10px"}; letter-spacing: -0.2px;
  }
  h2.sec:first-child { margin-top: 0; }
</style>
</head><body>
<div class="sheet">
  <header class="doc-head">
    <div>
      <p class="doc-kicker">${esc(asset.kicker || "Free reference")}</p>
      <h1 class="doc-title">${esc(asset.title)}</h1>
      <p class="doc-sub">${esc(asset.subtitle)}</p>
    </div>
    <div class="doc-stamp">
      <div><b>cbtcbook.com</b></div>
      <div>${esc(asset.version)} &middot; ${esc(asset.updated)}</div>
      <div>${esc(SITE.author)}</div>
    </div>
  </header>
  <div class="doc-body"><div class="doc-inner">${asset.printBody}</div></div>
  <footer class="doc-foot">
    <span class="src">${asset.sourceNote}</span>
    <span>${esc(SITE.license)}</span>
  </footer>
</div>
</body></html>`;
}

// ── the landing page ────────────────────────────────────────────────────────
export function landingPage(asset, links) {
  const url = `${SITE.origin}/resources/${asset.slug}/`;
  const preview = `${SITE.origin}/resources/files/${asset.slug}-preview.png`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: asset.title,
    headline: asset.title,
    description: asset.description,
    url,
    image: preview,
    datePublished: asset.publishedISO,
    dateModified: asset.updatedISO,
    version: asset.version,
    inLanguage: "en",
    isAccessibleForFree: true,
    license: "https://creativecommons.org/licenses/by/4.0/",
    keywords: asset.keywords.join(", "),
    author: { "@type": "Person", name: SITE.author, url: SITE.authorUrl },
    publisher: {
      "@type": "Organization",
      name: "cbtcbook.com",
      logo: { "@type": "ImageObject", url: `${SITE.origin}/icon-512.png` },
    },
    encoding: asset.files.map((f) => ({
      "@type": "MediaObject",
      contentUrl: `${SITE.origin}/resources/files/${f.name}`,
      encodingFormat: f.mime,
      name: f.label,
    })),
  };

  const downloads = asset.files
    .map(
      (f, i) =>
        `<a class="btn ${i === 0 ? "btn-primary" : "btn-ghost"}" href="/resources/files/${esc(f.name)}"
           download data-download="${esc(asset.slug)}" data-filetype="${esc(f.ext)}">
          ${esc(f.label)} &middot; ${esc(f.size)}
        </a>`,
    )
    .join("\n        ");

  const bullets = asset.whatsInside
    .map((b) => `<li>${b}</li>`)
    .join("\n          ");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(asset.title)} — Free Download | cbtcbook.com</title>
<meta name="description" content="${esc(asset.description)}">
<link rel="canonical" href="${url}">
<meta name="keywords" content="${esc(asset.keywords.join(", "))}">

<meta property="og:type" content="article">
<meta property="og:title" content="${esc(asset.title)} — Free Download">
<meta property="og:description" content="${esc(asset.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${preview}">
<meta property="og:site_name" content="cbtcbook.com">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(asset.title)} — Free Download">
<meta name="twitter:description" content="${esc(asset.description)}">
<meta name="twitter:image" content="${preview}">

<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
${FONT_LINK}
<link rel="stylesheet" href="/assets/site.css">
<link rel="stylesheet" href="/assets/resources.css">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
${GA}
</head>
<body>
${navHtml(links, "resources")}
<main>
  <article class="res">
    <div class="container res-grid">
      <div class="res-main">
        <p class="kicker"><a href="/resources/" style="color:inherit">Free resources</a></p>
        <h1 class="res-title">${esc(asset.title)}</h1>
        <p class="res-lede">${asset.lede}</p>

        <div class="res-actions">
        ${downloads}
        </div>
        <p class="res-license">${esc(SITE.license)} No email required.</p>

        <h2 class="res-h2">What's inside</h2>
        <ul class="res-list">
          ${bullets}
        </ul>

        ${asset.landingBody || ""}

        <h2 class="res-h2">Sources &amp; method</h2>
        <p class="res-src">${asset.sourceNote}</p>
      </div>

      <aside class="res-side">
        <a class="res-preview" href="/resources/files/${esc(asset.files[0].name)}"
           download data-download="${esc(asset.slug)}" data-filetype="${esc(asset.files[0].ext)}">
          <img src="/resources/files/${esc(asset.slug)}-preview.png"
               width="1200" height="${asset.page?.landscape ? 927 : 1553}"
               loading="eager" fetchpriority="high" decoding="async"
               alt="Preview of ${esc(asset.title)}">
        </a>
        <dl class="res-meta">
          <dt>Format</dt><dd>${esc(asset.files.map((f) => f.ext.toUpperCase()).join(" · "))}</dd>
          <dt>Version</dt><dd>${esc(asset.version)}</dd>
          <dt>Updated</dt><dd>${esc(asset.updated)}</dd>
          <dt>Author</dt><dd><a href="/about.html">${esc(SITE.author)}</a></dd>
        </dl>
        <div class="res-book">
          <p class="res-book-k">From the book</p>
          <p class="res-book-t">This sheet condenses ${asset.bookRef}.</p>
          <a class="btn btn-ghost" href="/index.html#buy">See both volumes &rarr;</a>
        </div>
      </aside>
    </div>
  </article>
</main>
${footerHtml()}
</body>
</html>`;
}

// ── the hub ─────────────────────────────────────────────────────────────────
export function hubPage(assets, links, planned = []) {
  const url = `${SITE.origin}/resources/`;
  const cards = assets
    .map(
      (a) => `      <a class="rcard" href="/resources/${esc(a.slug)}/">
        <img class="rcard-img" src="/resources/files/${esc(a.slug)}-preview.png"
             width="1200" height="800" loading="lazy" decoding="async"
             alt="Preview of ${esc(a.title)}">
        <div class="rcard-body">
          <span class="rcard-fmt">${esc(a.files.map((f) => f.ext.toUpperCase()).join(" · "))}</span>
          <h2 class="rcard-t">${esc(a.title)}</h2>
          <p class="rcard-d">${esc(a.description)}</p>
          <span class="rcard-cta">Download free &rarr;</span>
        </div>
      </a>`,
    )
    .join("\n");

  const soon = planned.length
    ? `<section class="container res-soon">
      <p class="kicker">In progress</p>
      <h2 class="res-soon-h">More sheets are being cut from the manuscript.</h2>
      <ul class="res-soon-list">
        ${planned.map((p) => `<li>${esc(p)}</li>`).join("\n        ")}
      </ul>
    </section>`
    : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free CBTC Resources",
    description:
      "Free, no-email CBTC reference downloads for transit engineers and procurement teams: architecture diagrams, standards comparisons, checklists, and databases.",
    url,
    isAccessibleForFree: true,
    author: { "@type": "Person", name: SITE.author, url: SITE.authorUrl },
    hasPart: assets.map((a) => ({
      "@type": "CreativeWork",
      name: a.title,
      url: `${SITE.origin}/resources/${a.slug}/`,
      description: a.description,
inLanguage: "en",
      isAccessibleForFree: true,
    })),
  };

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Free CBTC Resources — Diagrams, Comparisons &amp; Checklists | cbtcbook.com</title>
<meta name="description" content="Free CBTC reference downloads for transit engineers and procurement teams — architecture diagrams, IEEE 1474 vs IEC 62290, GoA comparison charts. No email required.">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:title" content="Free CBTC Resources — cbtcbook.com">
<meta property="og:description" content="Architecture diagrams, standards comparisons and checklists for CBTC engineers. Free, no email required.">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE.origin}/assets/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
${FONT_LINK}
<link rel="stylesheet" href="/assets/site.css">
<link rel="stylesheet" href="/assets/resources.css">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
${GA}
</head>
<body>
${navHtml(links, "resources")}
<main>
  <section class="res-hero">
    <div class="container">
      <p class="kicker">Free resources</p>
      <h1 class="res-hero-h">Reference sheets, cut from a 1,127-page manuscript.</h1>
      <p class="res-hero-l">
        The tables and diagrams US transit engineers keep re-drawing for themselves &mdash;
        standards comparisons, architecture, automation grades &mdash; as clean, printable
        sheets. Free, no email, no signup. Use them in your own decks and specifications;
        attribution is the only ask.
      </p>
    </div>
  </section>
  <section class="container res-list-sec">
    <div class="rcards">
${cards}
    </div>
  </section>
  ${soon}
</main>
${footerHtml()}
</body>
</html>`;
}

export { esc };
