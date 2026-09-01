#!/usr/bin/env node
/**
 * optimize_hero_images.mjs — turn raw hero art into web-sized WebP.
 *
 * gen_hero_cards.py saves gpt-image-1 output to /blog-images/hero/<slug>.png
 * at 1536x1024 (~2 MB). Cards render ~380 px wide and article banners 720 px;
 * shipping the raw PNG cost 106 MB across 116 articles and made the article
 * hero — the LCP element — a ~900 KB download.
 *
 * These heroes are flat-colour editorial illustrations, which is the best case
 * for lossy WebP: q85 lands around 30 KB with no visible loss, ~96 % smaller
 * than the quantized PNG that used to ship.
 *
 * Reads : /blog-images/hero/<slug>.png        (working copies, kept as masters)
 * Writes: /site-src/public/img/<slug>-hero.webp  (Astro copies into /blog/img/)
 *
 * Idempotent: skips a slug whose .webp is newer than its source unless --force.
 *
 * Usage:
 *   node blog-tools/optimize_hero_images.mjs                # all, incremental
 *   node blog-tools/optimize_hero_images.mjs --force        # re-encode everything
 *   node blog-tools/optimize_hero_images.mjs --slug foo-bar # just one
 *   node blog-tools/optimize_hero_images.mjs --quality 80
 *
 * Requires `sharp`, a devDependency of site-src/.
 */
import { readdir, stat, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "blog-images", "hero");
const DST = path.join(ROOT, "site-src", "public", "img");

const WIDTH = 1200; // 2x the 600px CSS max the article banner ever renders at
const DEFAULT_QUALITY = 85;

// sharp lives in site-src/node_modules; resolve from there rather than
// duplicating it at the repo root.
const require = createRequire(path.join(ROOT, "site-src", "package.json"));
let sharp;
try {
  sharp = require("sharp");
} catch {
  console.error(
    "sharp not installed. Run:  cd site-src && npm install",
  );
  process.exit(1);
}

function arg(name, fallback = null) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fallback : process.argv[i + 1];
}
const force = process.argv.includes("--force");
const only = arg("slug");
const quality = Number(arg("quality", DEFAULT_QUALITY));

const kb = (n) => `${Math.round(n / 1024)} KB`;

async function main() {
  if (!existsSync(SRC)) {
    console.error(`No source directory: ${SRC}`);
    process.exit(1);
  }
  await mkdir(DST, { recursive: true });

  let sources = (await readdir(SRC)).filter((f) => f.endsWith(".png"));
  if (only) sources = sources.filter((f) => path.basename(f, ".png") === only);
  if (sources.length === 0) {
    console.error(only ? `No source PNG for slug "${only}"` : "No hero PNGs found.");
    process.exit(1);
  }
  sources.sort();

  let before = 0;
  let after = 0;
  let written = 0;
  let skipped = 0;

  for (const file of sources) {
    const slug = path.basename(file, ".png");
    const src = path.join(SRC, file);
    const out = path.join(DST, `${slug}-hero.webp`);

    const srcStat = await stat(src);
    if (!force && existsSync(out)) {
      const outStat = await stat(out);
      if (outStat.mtimeMs >= srcStat.mtimeMs) {
        skipped += 1;
        continue;
      }
    }

    await sharp(src)
      .resize({ width: WIDTH, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(out);

    before += srcStat.size;
    after += (await stat(out)).size;
    written += 1;
  }

  console.log(`hero webp: ${written} written, ${skipped} up-to-date (q${quality}, ${WIDTH}px)`);
  if (written) {
    console.log(`  source: ${kb(before)}  ->  webp: ${kb(after)}` +
      `  (${Math.round((1 - after / before) * 100)}% smaller)`);
  }
}

await main();
