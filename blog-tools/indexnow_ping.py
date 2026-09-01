#!/usr/bin/env python3
"""
indexnow_ping.py — Notify IndexNow (Bing, Yandex, Seznam, Naver, …) that
URLs on cbtcbook.com were added or updated, so they get (re)crawled in
minutes instead of waiting for the next organic crawl.

IndexNow is a simple ownership-proof-by-hosted-key protocol:
  1. A key file lives at  https://cbtcbook.com/<key>.txt  (content == key).
     It is committed under site/ and deployed with the rest of the site.
  2. We POST {host, key, keyLocation, urlList} to api.indexnow.org; the
     engines fetch the key file to confirm we own the host, then crawl.

The key is PUBLIC by design (hosting it publicly is what proves control of
the domain), so it is fine to commit it to a public repo.

Modes:
  --today            submit the article URLs published on `today` (or
                     $FORCE_DATE) per publish-queue.yml, plus /blog/.
                     No-op (exit 0) when nothing is due that day.
  --all              submit every <loc> in site/sitemap.xml AND
                     site/blog/sitemap.xml (one-time / full resubmit).
  --urls U [U ...]   submit exactly these absolute URLs.

Usage:
  python3 blog-tools/indexnow_ping.py --today
  python3 blog-tools/indexnow_ping.py --all
  python3 blog-tools/indexnow_ping.py --urls https://cbtcbook.com/about.html
  python3 blog-tools/indexnow_ping.py --all --dry     # show, don't send

Exit codes: 0 = accepted or nothing-to-do; 1 = key missing / HTTP error.
"""
from __future__ import annotations
import argparse
import datetime as dt
import json
import os
import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
QUEUE = ROOT / "publish-queue.yml"
HOST = "cbtcbook.com"
BASE = f"https://{HOST}"
ENDPOINT = "https://api.indexnow.org/indexnow"  # shared endpoint; fans out to all engines


def find_key() -> tuple[str, str] | None:
    """Locate the hosted key file under site/ (a <hexkey>.txt whose content
    equals its stem). Returns (key, keyLocation) or None."""
    for p in sorted(SITE.glob("*.txt")):
        stem = p.stem
        if not re.fullmatch(r"[0-9a-fA-F\-]{8,128}", stem):
            continue
        try:
            content = p.read_text(encoding="utf-8").strip()
        except OSError:
            continue
        if content == stem:
            return stem, f"{BASE}/{p.name}"
    return None


def today_str() -> str:
    return os.environ.get("FORCE_DATE") or dt.date.today().isoformat()


def urls_for_today() -> list[str]:
    """Article URLs whose queue date == today, plus the /blog/ index."""
    if not QUEUE.exists():
        return []
    date = today_str()
    text = QUEUE.read_text(encoding="utf-8")
    # Lightweight YAML walk: a `"DATE":` line opens a block of `  - slug` items.
    slugs: list[str] = []
    in_block = False
    for line in text.splitlines():
        m = re.match(r'^"(\d{4}-\d{2}-\d{2})":\s*$', line)
        if m:
            in_block = (m.group(1) == date)
            continue
        if in_block:
            item = re.match(r"^\s+-\s+(\S+)\s*$", line)
            if item:
                slugs.append(item.group(1))
            elif line.strip() and not line.startswith(" "):
                in_block = False
    if not slugs:
        return []
    urls = [f"{BASE}/blog/{s}/" for s in slugs]
    urls.append(f"{BASE}/blog/")  # index page changed too
    return urls


def urls_from_sitemaps() -> list[str]:
    urls: list[str] = []
    for sm in (SITE / "sitemap.xml", SITE / "blog" / "sitemap.xml"):
        if sm.exists():
            urls += re.findall(r"<loc>\s*([^<\s]+)\s*</loc>", sm.read_text(encoding="utf-8"))
    # de-dup, keep order
    seen, out = set(), []
    for u in urls:
        if u not in seen:
            seen.add(u)
            out.append(u)
    return out


def submit(urls: list[str], key: str, key_location: str, dry: bool) -> int:
    urls = [u for u in urls if u.startswith(BASE)]  # IndexNow rejects cross-host URLs
    if not urls:
        print("nothing to submit — exiting 0")
        return 0
    payload = {
        "host": HOST,
        "key": key,
        "keyLocation": key_location,
        "urlList": urls[:10000],  # IndexNow cap is 10k URLs/request
    }
    print(f"IndexNow: {len(payload['urlList'])} URL(s) -> {ENDPOINT}")
    for u in payload["urlList"][:6]:
        print(f"  · {u}")
    if len(payload["urlList"]) > 6:
        print(f"  … +{len(payload['urlList']) - 6} more")
    if dry:
        print("(dry run — not sent)")
        return 0
    body = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        ENDPOINT, data=body,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            code = resp.status
            print(f"HTTP {code} — {'accepted' if code in (200, 202) else 'see body'}")
            return 0 if code in (200, 202) else 1
    except urllib.error.HTTPError as e:
        # 422 = URLs don't match key/host; 403 = key not verifiable yet.
        print(f"HTTP {e.code} {e.reason}: {e.read().decode('utf-8', 'replace')[:300]}",
              file=sys.stderr)
        return 1
    except Exception as e:  # noqa: BLE001
        print(f"request failed: {e}", file=sys.stderr)
        return 1


def main() -> int:
    ap = argparse.ArgumentParser()
    g = ap.add_mutually_exclusive_group(required=True)
    g.add_argument("--today", action="store_true", help="today's queued articles + /blog/")
    g.add_argument("--all", action="store_true", help="every URL in both sitemaps")
    g.add_argument("--urls", nargs="+", metavar="URL", help="explicit absolute URLs")
    ap.add_argument("--dry", action="store_true")
    args = ap.parse_args()

    found = find_key()
    if not found:
        print("ERROR: no IndexNow key file (site/<hexkey>.txt) found", file=sys.stderr)
        return 1
    key, key_location = found

    if args.all:
        urls = urls_from_sitemaps()
    elif args.today:
        urls = urls_for_today()
        if not urls:
            print(f"no articles queued for {today_str()} — nothing to notify")
            return 0
    else:
        urls = args.urls

    return submit(urls, key, key_location, args.dry)


if __name__ == "__main__":
    raise SystemExit(main())
