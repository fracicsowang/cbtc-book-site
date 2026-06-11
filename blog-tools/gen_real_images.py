#!/usr/bin/env python3
"""
gen_real_images.py — Replace placeholder figures with LLM-generated real
content. For each manifest entry (table / diagram / chart / map), reads
the full article body and the figure description, sends to OpenAI,
parses the output into the correct format, and writes to the right
location under /blog-images/.

Buckets:
  table    → HTML <figure><table>...</table></figure>     → blog-images/tables/<slug>-figN.html
  diagram  → Mermaid source                                → blog-images/diagrams/src/<slug>-figN.mmd
                                                              → blog-images/diagrams/<slug>-figN.svg (via mmdc)
  map      → Mermaid source (schematic; same pipeline)     → same as diagram
  chart    → matplotlib Python code                        → blog-images/charts/src/<slug>-figN.py
                                                              → blog-images/charts/<slug>-figN.png
  reuse    → skip (already mapped to existing book figure)
  hero     → skip (none in current manifest)

Concurrency: ThreadPoolExecutor with N workers (default 6) to stay
well under OpenAI rate limits while finishing in ~2-3 minutes.

Usage:
    python3 gen_real_images.py                # all buckets
    python3 gen_real_images.py --bucket chart # only charts
    python3 gen_real_images.py --slug some-slug --figure 1   # single
    python3 gen_real_images.py --model gpt-4o-mini  # cheaper
    python3 gen_real_images.py --dry          # show prompts, no API calls
"""
from __future__ import annotations
import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

THIS = Path(__file__).resolve()
sys.path.insert(0, str(THIS.parent))
from openai_helper import ensure_canonical_key  # noqa: E402

ROOT = THIS.parent.parent
DRAFTS = ROOT / "blog-drafts"
MANIFEST = ROOT / "blog-tools" / "image_manifest.json"
OUT = ROOT / "blog-images"
LOGFILE = ROOT / "blog-tools" / "gen_real_images.log"

DEFAULT_MODEL = os.environ.get("OPENAI_TEXT_MODEL", "gpt-4o")
MAX_WORKERS = 6
MMDC = ROOT / "site-src" / "node_modules" / ".bin" / "mmdc"

# ─── Brand palette injected into Mermaid + matplotlib ────────────────
BRAND_THEME = """%%{init: {
  'theme': 'base',
  'themeVariables': {
    'primaryColor': '#F4EFE6',
    'primaryTextColor': '#0A1628',
    'primaryBorderColor': '#D4A84B',
    'secondaryColor': '#0A1628',
    'secondaryTextColor': '#F4EFE6',
    'tertiaryColor': '#EAE2D2',
    'lineColor': '#1A1A1A',
    'fontFamily': 'IBM Plex Sans, system-ui, sans-serif',
    'fontSize': '14px'
  }
}}%%"""

# ─── Bucket-specific prompts ─────────────────────────────────────────

PROMPT_TABLE = """You are filling an HTML table for a technical article on Communications-Based Train Control (CBTC).

ARTICLE CONTEXT (excerpt):
{article}

FIGURE DESCRIPTION: {description}

CAPTION: {caption}

Produce ONE complete HTML <figure> element with this exact structure:

<figure class="blog-figure blog-figure--table">
  <table class="blog-table">
    <thead>
      <tr><th>Col 1</th><th>Col 2</th>…</tr>
    </thead>
    <tbody>
      <tr><td>…</td><td>…</td>…</tr>
      …
    </tbody>
  </table>
  <figcaption class="blog-figure__caption">{caption}</figcaption>
</figure>

Constraints (CRITICAL):
- Headers and rows must reflect the figure description.
- Cell values MUST come from the article context above. Do NOT invent specific numbers, dates, or vendor product names not present in the article.
- If a cell's data is not in the article, use "—" (em dash). Better to be honest than wrong.
- 3-12 rows. 2-6 columns.
- Output ONLY the HTML <figure>…</figure>. No markdown fences, no explanation.
"""

PROMPT_DIAGRAM = """You are creating a Mermaid.js diagram for a technical article on Communications-Based Train Control (CBTC).

ARTICLE CONTEXT (excerpt):
{article}

FIGURE DESCRIPTION: {description}

CAPTION: {caption}

Produce Mermaid source code starting with this theme block (paste verbatim, then your diagram):

{theme}

Then your diagram. Choose the most appropriate Mermaid type:
- flowchart TB/LR/TD — architectures, processes, decision trees, prerequisite stacks
- graph — generic node graphs
- sequenceDiagram — time-ordered interactions
- stateDiagram-v2 — states / operating modes

Constraints (CRITICAL):
- Node labels short (under 35 chars each). Use `\\n` for line breaks inside a node.
- 4-15 nodes. Don't make it too dense.
- Quote node labels with " " if they contain special chars or punctuation.
- Use only ASCII for node IDs (A, B, ZC1, etc.). Labels can have unicode.
- Use `subgraph` to group related nodes.
- Use `:::class` styling sparingly.
- Output ONLY the Mermaid source. No markdown fences, no explanation.

Example minimal valid output:
{theme}
flowchart TB
    A["Train sends position"] --> B["Zone Controller"]
    B --> C["Compute Movement Authority"]
    C --> D["Train acts on MA"]
"""

PROMPT_CHART = """You are writing a matplotlib chart for a technical article on Communications-Based Train Control (CBTC).

ARTICLE CONTEXT (excerpt):
{article}

FIGURE DESCRIPTION: {description}

CAPTION: {caption}

Write a Python function `make_chart(out_path: str) -> None` that:
1. Imports only: `matplotlib.pyplot as plt`, `matplotlib.patches as patches` (optional), `numpy as np` (optional).
2. Builds the chart described above using REAL DATA extracted from the article context. If specific numbers are not in the article, use the closest defensible defaults stated in the article and note them in the chart's title or caption-line as "approximate / illustrative".
3. Uses brand colors: NAVY="#0A1628", AMBER="#D4A84B", CREAM="#F4EFE6", CHAR="#1A1A1A". Background = CREAM. Title in NAVY (serif weight). Bars/lines/markers in NAVY with AMBER accents.
4. figsize=(10, 5.5), dpi=140
5. Includes a title (h-aligned center, font weight bold), x/y-axis labels, gridlines if appropriate, and tight_layout().
6. Calls plt.savefig(out_path, facecolor=CREAM, bbox_inches='tight'); plt.close()

Output ONLY the Python source. No markdown fences, no explanation. Do not call make_chart() yourself; the runner will call it.
"""


# ─── OpenAI client (lazy-initialized) ────────────────────────────────

_client = None


def get_client():
    global _client
    if _client is None:
        if not ensure_canonical_key():
            raise SystemExit("ERROR: no OpenAI key in .env")
        from openai import OpenAI
        _client = OpenAI()
    return _client


def llm_complete(prompt: str, model: str, max_tokens: int = 2400) -> str:
    """Single chat completion call."""
    client = get_client()
    resp = client.chat.completions.create(
        model=model,
        temperature=0.3,
        max_tokens=max_tokens,
        messages=[
            {"role": "system",
             "content": "You produce technical illustrations for CBTC engineering articles. You never invent specific numbers. You output exactly the requested format with no surrounding markdown."},
            {"role": "user", "content": prompt},
        ],
    )
    return resp.choices[0].message.content.strip()


# ─── Article body extraction ────────────────────────────────────────

def read_article_body(slug: str, max_chars: int = 12000) -> str:
    p = DRAFTS / f"{slug}.md"
    if not p.exists():
        return ""
    text = p.read_text(encoding="utf-8")
    # Drop YAML frontmatter
    if text.startswith("---"):
        _, _, rest = text[3:].partition("---")
        text = rest.lstrip()
    # Strip figure placeholder lines that pollute context
    text = re.sub(r"^\[FIGURE:.*?\]\s*$", "", text, flags=re.M | re.S)
    text = text.strip()
    if len(text) > max_chars:
        text = text[:max_chars] + "\n\n[…article truncated for prompt context…]"
    return text


def strip_code_fences(s: str) -> str:
    """LLMs sometimes wrap output in ``` despite instructions. Strip it."""
    s = s.strip()
    if s.startswith("```"):
        # Drop the first line (```html / ```python / ```mermaid)
        s = s.split("\n", 1)[1] if "\n" in s else s
        # Drop trailing ```
        if s.endswith("```"):
            s = s[:-3].rstrip()
    return s


# ─── Per-bucket handlers ────────────────────────────────────────────

def gen_table(entry: dict, model: str, dry: bool, force: bool) -> str:
    out_path = OUT / "tables" / f"{entry['slug']}-fig{entry['figure']}.html"
    if out_path.exists() and not force:
        return f"skip exists {out_path.name}"
    article = read_article_body(entry["slug"])
    if not article:
        return f"no article for {entry['slug']}"
    prompt = PROMPT_TABLE.format(
        article=article,
        description=entry["description"],
        caption=entry["caption"],
    )
    if dry:
        return f"DRY {out_path.name} ({len(prompt)} chars prompt)"
    html = strip_code_fences(llm_complete(prompt, model))
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(html, encoding="utf-8")
    return f"✓ table {out_path.name} ({len(html)} bytes)"


def gen_diagram(entry: dict, model: str, dry: bool, force: bool) -> str:
    src_path = OUT / "diagrams" / "src" / f"{entry['slug']}-fig{entry['figure']}.mmd"
    svg_path = OUT / "diagrams" / f"{entry['slug']}-fig{entry['figure']}.svg"
    if svg_path.exists() and not force:
        return f"skip exists {svg_path.name}"
    article = read_article_body(entry["slug"])
    if not article:
        return f"no article for {entry['slug']}"
    prompt = PROMPT_DIAGRAM.format(
        article=article,
        description=entry["description"],
        caption=entry["caption"],
        theme=BRAND_THEME,
    )
    if dry:
        return f"DRY {svg_path.name}"
    mmd = strip_code_fences(llm_complete(prompt, model, max_tokens=1800))
    src_path.parent.mkdir(parents=True, exist_ok=True)
    src_path.write_text(mmd, encoding="utf-8")
    # Render with mmdc
    if MMDC.exists():
        try:
            subprocess.run(
                [str(MMDC), "-i", str(src_path), "-o", str(svg_path),
                 "-b", "transparent"],
                check=True, capture_output=True, timeout=60,
            )
            return f"✓ diagram {svg_path.name}"
        except subprocess.CalledProcessError as ex:
            err = ex.stderr.decode(errors="replace")[:200]
            return f"✗ mmdc failed for {src_path.name}: {err}"
        except subprocess.TimeoutExpired:
            return f"✗ mmdc timeout for {src_path.name}"
    return f"✓ mmd written (mmdc not available) {src_path.name}"


def gen_chart(entry: dict, model: str, dry: bool, force: bool) -> str:
    src_path = OUT / "charts" / "src" / f"{entry['slug']}-fig{entry['figure']}.py"
    png_path = OUT / "charts" / f"{entry['slug']}-fig{entry['figure']}.png"
    if png_path.exists() and not force:
        return f"skip exists {png_path.name}"
    article = read_article_body(entry["slug"])
    if not article:
        return f"no article for {entry['slug']}"
    prompt = PROMPT_CHART.format(
        article=article,
        description=entry["description"],
        caption=entry["caption"],
    )
    if dry:
        return f"DRY {png_path.name}"
    code = strip_code_fences(llm_complete(prompt, model, max_tokens=2400))
    src_path.parent.mkdir(parents=True, exist_ok=True)
    # Inject safety imports the LLM might forget, then runner.
    # The LLM-emitted code's own imports are no-ops if duplicated.
    safety_imports = (
        "import matplotlib\n"
        "matplotlib.use('Agg')\n"
        "import matplotlib.pyplot as plt\n"
        "import matplotlib.patches as patches\n"
        "import numpy as np\n"
    )
    runner_code = (
        safety_imports + "\n" + code +
        "\n\nimport sys\nif __name__ == '__main__':\n"
        "    make_chart(sys.argv[1])\n"
    )
    src_path.write_text(runner_code, encoding="utf-8")
    # Execute via subprocess with timeout
    py = ROOT / ".venv" / "bin" / "python"
    try:
        subprocess.run(
            [str(py), str(src_path), str(png_path)],
            check=True, capture_output=True, timeout=45,
        )
        return f"✓ chart {png_path.name}"
    except subprocess.CalledProcessError as ex:
        err = ex.stderr.decode(errors="replace")[:300]
        return f"✗ chart exec failed for {src_path.name}: {err}"
    except subprocess.TimeoutExpired:
        return f"✗ chart timeout for {src_path.name}"


# ─── Driver ──────────────────────────────────────────────────────────

def process(entry: dict, model: str, dry: bool, force: bool) -> str:
    bucket = entry["bucket"]
    try:
        if bucket == "table":
            return gen_table(entry, model, dry, force)
        if bucket in ("diagram", "map"):
            return gen_diagram(entry, model, dry, force)
        if bucket == "chart":
            return gen_chart(entry, model, dry, force)
        return f"skip bucket={bucket} {entry['slug']}-fig{entry['figure']}"
    except Exception as ex:
        return f"✗ EXCEPTION {entry['slug']}-fig{entry['figure']}: {ex}"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--bucket", choices=["table", "diagram", "chart", "map", "all"],
                    default="all")
    ap.add_argument("--slug", help="generate just one (with --figure)")
    ap.add_argument("--figure", type=int)
    ap.add_argument("--model", default=DEFAULT_MODEL)
    ap.add_argument("--workers", type=int, default=MAX_WORKERS)
    ap.add_argument("--force", action="store_true",
                    help="regenerate even if output exists")
    ap.add_argument("--dry", action="store_true",
                    help="report what would happen, no API calls")
    args = ap.parse_args()

    entries = json.loads(MANIFEST.read_text())
    if args.slug:
        entries = [e for e in entries if e["slug"] == args.slug
                   and e["figure"] == (args.figure or e["figure"])]
    if args.bucket != "all":
        entries = [e for e in entries if e["bucket"] == args.bucket]

    todo = [e for e in entries
            if e["bucket"] in ("table", "diagram", "chart", "map")]

    print(f"Targeting {len(todo)} figures with model={args.model}, "
          f"workers={args.workers}, dry={args.dry}, force={args.force}")
    if not todo:
        return 0

    started = time.time()
    log_lines: list[str] = []
    with ThreadPoolExecutor(max_workers=args.workers) as ex:
        futs = {ex.submit(process, e, args.model, args.dry, args.force): e
                for e in todo}
        for i, fut in enumerate(as_completed(futs), 1):
            line = fut.result()
            ts = time.strftime("%H:%M:%S")
            print(f"[{ts}] [{i:3d}/{len(todo)}] {line}")
            log_lines.append(f"[{ts}] {line}")

    LOGFILE.write_text("\n".join(log_lines), encoding="utf-8")
    elapsed = time.time() - started
    print(f"\nDone in {elapsed:.1f}s. Log: {LOGFILE.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
