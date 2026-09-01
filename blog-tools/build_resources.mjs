#!/usr/bin/env node
/**
 * build_resources.mjs — turn resources/<slug>/asset.mjs into everything the
 * free-download section needs:
 *
 *   site/resources/index.html              the hub
 *   site/resources/<slug>/index.html       the indexable landing page
 *   site/resources/files/<slug>-v1.pdf     the download
 *   site/resources/files/<slug>-v1.svg     (assets that export a vector)
 *   site/resources/files/<slug>-v1.png     (ditto, high-res raster)
 *   site/resources/files/<slug>-preview.png  card + OG image
 *
 * Chrome does the PDF and the rasterizing so the sheets use the real brand
 * faces (Source Serif 4 / IBM Plex) instead of whatever librsvg has installed.
 * puppeteer + sharp both already live in site-src/node_modules.
 *
 * Usage:
 *   node blog-tools/build_resources.mjs             # everything
 *   node blog-tools/build_resources.mjs --slug goa-0-4-comparison-chart
 *   node blog-tools/build_resources.mjs --no-pdf    # pages only, fast
 */
import { readdir, readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "resources");
const OUT = path.join(ROOT, "site", "resources");
const FILES = path.join(OUT, "files");

const require = createRequire(path.join(ROOT, "site-src", "package.json"));
const puppeteer = require("puppeteer");
const sharp = require("sharp");

const { landingPage, hubPage, printPage } = await import(
  pathToFileURL(path.join(SRC, "_lib", "templates.mjs")).href
);

const argv = process.argv.slice(2);
const only = argv.includes("--slug") ? argv[argv.indexOf("--slug") + 1] : null;
const noPdf = argv.includes("--no-pdf");

// Sheets that are written but not yet published; they seed the "in progress"
// list on the hub so the section does not look abandoned between batches.
const PLANNED = [
  "CBTC vs Conventional Signaling — side-by-side comparison",
  "CBTC Vendor Landscape 2026",
  "Global CBTC Projects Database",
  "CBTC Migration Checklist",
  "CBTC Testing & Commissioning Checklist",
  "CBTC Acronyms & Glossary — 200 terms",
  "CBTC Engineer Learning Roadmap",
];

// US Letter at 96 CSS px per inch.
const PAGE_PX = { portrait: [816, 1056], landscape: [1056, 816] };

const kb = (n) => (n < 1024 * 1024 ? `${Math.round(n / 1024)} KB` : `${(n / 1048576).toFixed(1)} MB`);

/** NAV_LINKS lives in components.jsx; parse it so the nav never drifts. */
async function navLinks() {
  const jsx = await readFile(path.join(ROOT, "site", "assets", "components.jsx"), "utf8");
  const m = jsx.match(/const NAV_LINKS\s*=\s*\[([\s\S]*?)\];/);
  if (!m) throw new Error("NAV_LINKS not found in components.jsx");
  const links = [...m[1].matchAll(/href:\s*"([^"]+)",\s*label:\s*"([^"]+)",\s*key:\s*"([^"]+)"/g)]
    .map(([, href, label, key]) => ({ href, label, key }));
  if (!links.length) throw new Error("NAV_LINKS parsed empty");
  // The marketing pages use relative hrefs (index.html); /resources/<slug>/ is
  // two levels down, so absolutise.
  return links.map((l) => ({ ...l, href: l.href.startsWith("/") ? l.href : `/${l.href}` }));
}

async function loadAssets() {
  const dirs = (await readdir(SRC, { withFileTypes: true }))
    .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
    .map((d) => d.name)
    .sort();
  const out = [];
  for (const slug of dirs) {
    if (only && slug !== only) continue;
    const file = path.join(SRC, slug, "asset.mjs");
    if (!existsSync(file)) continue;
    const mod = await import(pathToFileURL(file).href);
    const a = mod.default;
    if (a.slug !== slug) throw new Error(`${slug}: asset.slug is "${a.slug}"`);
    out.push(a);
  }
  return out;
}

async function renderAsset(browser, asset) {
  const page = await browser.newPage();
  const landscape = !!asset.page?.landscape;
  const [w, h] = PAGE_PX[landscape ? "landscape" : "portrait"];
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 2 });
  await page.setContent(printPage(asset), { waitUntil: "networkidle0" });
  // Belt and braces: setContent resolves before webfonts finish decoding.
  await page.evaluate(() => document.fonts.ready);

  // Auto-fit to a single sheet. These are reference sheets; spilling onto a
  // blank page 2 reads as sloppy. CSS zoom is a dead end here — this Chrome
  // ignores it on a flex child (measured: identical layout at 100% and 40%) —
  // so drawings are capped by max-height in CSS and prose/tables are scaled
  // with a transform, which keeps text as selectable vector text in the PDF.
  const MIN_SCALE = 0.8; // below this the sheet stops being readable in print
  const fitted = await page.evaluate((minScale) => {
    const body = document.querySelector(".doc-body");
    const inner = document.querySelector(".doc-inner");
    const avail = body.clientHeight;
    if (!avail) return { scale: 1, clipped: 0 };

    // Scaling widens the box to 100/s%, which rewraps the text shorter — so the
    // height has to be measured after each trial, not predicted from the
    // unscaled layout. Binary-search the largest scale that still fits.
    const heightAt = (s) => {
      inner.style.transformOrigin = "top left";
      inner.style.transform = s === 1 ? "none" : `scale(${s})`;
      inner.style.width = s === 1 ? "100%" : `${100 / s}%`;
      return inner.scrollHeight * s;
    };
    if (heightAt(1) <= avail) return { scale: 1, clipped: 0 };

    let lo = minScale, hi = 1, best = null;
    for (let i = 0; i < 10 && hi - lo > 0.004; i++) {
      const mid = (lo + hi) / 2;
      if (heightAt(mid) <= avail) { best = mid; lo = mid; } else { hi = mid; }
    }
    const scale = best ?? minScale;
    const clipped = Math.max(0, Math.round(heightAt(scale) - avail));
    return { scale, clipped };
  }, MIN_SCALE);
  if (fitted.scale < 1) {
    console.log(`     fit ${asset.slug} to one page at ${Math.round(fitted.scale * 100)}%`);
    if (fitted.clipped > 0) {
      console.warn(
        `     !  ${asset.slug} loses ${fitted.clipped}px off the bottom at the ${Math.round(MIN_SCALE * 100)}% legibility floor — trim the copy`,
      );
    }
  }

  const pdfName = asset.files.find((f) => f.ext === "pdf")?.name;
  if (pdfName && !noPdf) {
    await page.pdf({
      path: path.join(FILES, pdfName),
      format: asset.page?.format || "Letter",
      landscape,
      printBackground: true,
      preferCSSPageSize: true,
    });
  }

  // Preview / OG card: first page, normalized to 1200px wide.
  const shot = await page.screenshot({ type: "png", clip: { x: 0, y: 0, width: w, height: h } });
  await sharp(shot).resize({ width: 1200 }).png({ compressionLevel: 9 })
    .toFile(path.join(FILES, `${asset.slug}-preview.png`));
  await page.close();

  // Vector assets export their own SVG; rasterize it through Chrome too, so the
  // PNG uses the same faces as the PDF.
  const svgFile = asset.files.find((f) => f.ext === "svg");
  const pngFile = asset.files.find((f) => f.ext === "png");
  if (svgFile || pngFile) {
    const mod = await import(pathToFileURL(path.join(SRC, asset.slug, "diagram.mjs")).href);
    const svg = mod.architectureSvg({ standalone: true });
    const size = mod.DIAGRAM_SIZE;
    if (svgFile) {
      await writeFile(
        path.join(FILES, svgFile.name),
        `<?xml version="1.0" encoding="UTF-8"?>\n${svg}\n`,
      );
    }
    if (pngFile) {
      const p2 = await browser.newPage();
      await p2.setViewport({ width: size.W, height: size.H, deviceScaleFactor: 2 });
      await p2.setContent(
        `<!doctype html><meta charset="utf-8">
         <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Source+Serif+4:wght@400;600&display=swap" rel="stylesheet">
         <style>html,body{margin:0;padding:0}svg{display:block}</style>${svg}`,
        { waitUntil: "networkidle0" },
      );
      await p2.evaluate(() => document.fonts.ready);
      await p2.screenshot({ path: path.join(FILES, pngFile.name), type: "png" });
      await p2.close();
    }
  }

  // Stamp real sizes into the download buttons.
  for (const f of asset.files) {
    const p = path.join(FILES, f.name);
    f.size = existsSync(p) ? kb((await stat(p)).size) : "—";
  }
}

async function updateSitemap(assets) {
  const p = path.join(ROOT, "site", "sitemap.xml");
  let xml = await readFile(p, "utf8");
  const urls = ["/resources/", ...assets.map((a) => `/resources/${a.slug}/`)];
  let added = 0;
  for (const u of urls) {
    const loc = `https://cbtcbook.com${u}`;
    if (xml.includes(`<loc>${loc}</loc>`)) continue;
    xml = xml.replace(
      /\n?<\/urlset>/,
      `\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>\n  </url>\n</urlset>`,
    );
    added += 1;
  }
  if (added) await writeFile(p, xml);
  return added;
}

async function main() {
  await mkdir(FILES, { recursive: true });
  const links = await navLinks();
  if (!links.some((l) => l.key === "resources")) {
    console.warn('!  NAV_LINKS has no "resources" entry — the hub will not be linked from the nav.');
  }
  const assets = await loadAssets();
  if (!assets.length) {
    console.error(only ? `No asset named "${only}".` : "No assets found.");
    process.exit(1);
  }

  const browser = await puppeteer.launch();
  try {
    for (const a of assets) {
      await renderAsset(browser, a);
      await mkdir(path.join(OUT, a.slug), { recursive: true });
      await writeFile(path.join(OUT, a.slug, "index.html"), landingPage(a, links));
      console.log(`  ✓ ${a.slug}  [${a.files.map((f) => `${f.ext} ${f.size}`).join(", ")}]`);
    }
  } finally {
    await browser.close();
  }

  // The hub always lists every published asset, even on a --slug run.
  const all = only ? await loadAssetsAll() : assets;
  await writeFile(path.join(OUT, "index.html"), hubPage(all, links, PLANNED));

  const added = await updateSitemap(all);
  console.log(`\nresources: ${assets.length} rendered, hub lists ${all.length}, sitemap +${added}`);
}

// loadAssets() honours --slug; the hub needs the unfiltered set.
async function loadAssetsAll() {
  const dirs = (await readdir(SRC, { withFileTypes: true }))
    .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
    .map((d) => d.name)
    .sort();
  const out = [];
  for (const slug of dirs) {
    const file = path.join(SRC, slug, "asset.mjs");
    if (!existsSync(file)) continue;
    const mod = await import(pathToFileURL(file).href);
    const a = mod.default;
    for (const f of a.files) {
      const p = path.join(FILES, f.name);
      f.size = existsSync(p) ? kb((await stat(p)).size) : "—";
    }
    out.push(a);
  }
  return out;
}

await main();
