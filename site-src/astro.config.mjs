// Astro config for cbtcbook.com/blog/
//
// Key decisions:
//  - site = https://cbtcbook.com so canonical URLs and the sitemap come out right
//  - base = "/blog" so every generated link starts with /blog/...
//  - outDir = ./dist (default) — we DELIBERATELY do not point this at
//    ../site/blog directly, because Astro clears outDir on each build, and
//    that would delete the 8 existing static-site HTML files in /site/.
//    Instead, daily_publish.sh runs `rsync dist/blog/ → ../site/blog/` after
//    each successful build, which only touches files inside /site/blog/.
//  - trailingSlash = "always" matches GitHub Pages' behavior for dir URLs.

import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://cbtcbook.com",
  base: "/blog",
  trailingSlash: "always",
  build: {
    format: "directory",
    assets: "_astro",
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
      wrap: true,
    },
  },
});
