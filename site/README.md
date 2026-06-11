# Communications-Based Train Control — Companion Site

Two-volume technical reference on CBTC by **Chunjun (Francisco) Wang**.
This repository hosts the static marketing & companion site at **cbtcbook.com** (or wherever you deploy it).

> *Communications-Based Train Control: Foundations, Architecture, Operations & Economics*  
> Vol 1 — Foundations & Technical Architecture · 533 pp · ISBN 979-8-258-54295-3  
> Vol 2 — Operations, Deployment & Economics · 594 pp · ISBN 979-8-258-54528-2

---

## Stack

Pure static — no build step. Plain HTML + React (via in-browser Babel) + a single shared CSS file.

```
site/
├── index.html              ← landing page
├── about.html              ← author / career timeline
├── volume-1.html           ← Vol 1 detail
├── volume-2.html           ← Vol 2 detail
├── figures.html            ← all 78 figures, by chapter
├── glossary.html           ← interactive CBTC glossary
├── errata.html             ← errata + supplementary downloads
├── contact.html            ← contact / speaking / bulk orders
│
├── assets/
│   ├── site.css            ← global tokens + nav/footer styles
│   ├── volume2.css         ← volume-page styles
│   ├── data.js             ← shared content (chapters, bio, etc.)
│   ├── components.jsx      ← <SiteNav>, <SiteFooter>
│   ├── home.jsx            ← homepage React tree
│   ├── volume.jsx          ← volume-page React tree
│   ├── about.jsx
│   ├── glossary.jsx
│   ├── errata.jsx
│   ├── contact.jsx
│   └── cover-mini.jsx      ← 3D book cover component
│
├── figures/                ← 78 .png technical figures
├── images/                 ← author photo, cover scans, etc.
└── print/                  ← print-ready cover PDFs (Amazon KDP)
```

## Local preview

Just open `index.html` in a browser. No dev server needed.

If you want hot reload:
```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploy

### GitHub Pages (free, recommended)

1. Push to GitHub (this repo).
2. In repo settings → Pages → Source = `main` branch / `/ (root)`.
3. Site goes live at `https://<username>.github.io/cbtc-book-site/`.

### Custom domain

Add a `CNAME` file at root containing your domain (e.g. `cbtcbook.com`), then point a CNAME DNS record at `<username>.github.io`.

### Other hosts

Drag-drop the folder into Netlify, Vercel, or Cloudflare Pages — works out of the box.

---

## Author

**Chunjun (Francisco) Wang**  
Senior Research Engineer · Rutgers University, CAIT  
Princeton, NJ · franciscowang2008@gmail.com  
[LinkedIn](https://www.linkedin.com/in/chunjun-wang/)

## License

Site code: MIT  
Book figures and text: © 2026 Chunjun Wang. All rights reserved.
