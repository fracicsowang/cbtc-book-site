// Astro config for the cbtcbook.com ROOT marketing pages (home, volumes,
// about, contact, figures, glossary, slides, errata).
//
// This is a SEPARATE project from the blog (../site-src), on purpose:
//  - base = "/"            marketing pages live at the domain root
//  - format = "file"       emit /about.html, /volume-1.html, … (NOT /about/).
//                          The blog uses "directory" (/blog/<slug>/); the two
//                          formats cannot coexist in one Astro build, and the
//                          .html URLs are already indexed + referenced by every
//                          article's author.url and the Organization JSON-LD,
//                          so they must be preserved.
//  - built locally; a script copies dist/*.html -> ../site/*.html (committed).
//    CSS stays hand-maintained in /site/assets and is linked by absolute URL,
//    so Astro emits pure HTML with no bundled _astro assets.

import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://cbtcbook.com",
  base: "/",
  trailingSlash: "ignore",
  build: {
    format: "file",
  },
  // No integrations: pages are plain .astro with existing global CSS.
});
