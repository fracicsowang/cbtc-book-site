#!/usr/bin/env bash
# Build the root marketing pages (Astro) and copy the 9 .html outputs into
# /site. The blog (../site-src) is a separate build and is untouched.
# CSS stays hand-maintained in /site/assets and is linked by absolute URL,
# so Astro emits pure HTML with no bundled assets — a plain copy is enough.
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
cd "$HERE"
npm run build
cp dist/*.html ../site/
echo "synced $(ls dist/*.html | wc -l | tr -d ' ') marketing pages -> ../site/"
