#!/usr/bin/env python3
"""Fill Japanese translations for education wisdom articles (p1–p6)."""

from __future__ import annotations

import json
import re
import sys
import time
from pathlib import Path

try:
    from deep_translator import GoogleTranslator
except ImportError:
    print("Install deep-translator: pip install deep-translator", file=sys.stderr)
    raise

DIR = Path(__file__).parent
EDU = DIR.parent / "src/lib/education"
CACHE = DIR / "ja-education-translations.json"

FILES = [
    "p1-content.ts",
    "p2-content.ts",
    "p3-content.ts",
    "p4-content.ts",
    "p5-content.ts",
    "p6-content.ts",
]

PAIR_RE = re.compile(
    r"en:\s*(?P<en>`(?:\\.|[^`\\])*`|\"(?:\\.|[^\"\\])*\")\s*,\s*ja:\s*(?P<ja>`(?:\\.|[^`\\])*`|\"(?:\\.|[^\"\\])*\")",
    re.DOTALL,
)


def unquote(raw: str) -> str:
    q = raw[0]
    body = raw[1:-1]
    if q == "`":
        return (
            body.replace("\\`", "`")
            .replace("\\${", "${")
            .replace("\\\\", "\\")
        )
    return body.replace('\\"', '"').replace("\\\\", "\\")


def quote(text: str, style: str) -> str:
    if style == "`":
        escaped = text.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
        return f"`{escaped}`"
    escaped = text.replace("\\", "\\\\").replace('"', '\\"')
    return f'"{escaped}"'


def translate_text(text: str, translator: GoogleTranslator) -> str:
    if not text.strip():
        return text
    # Preserve markdown markers and footnotes by translating in chunks if needed.
    chunk_size = 4500
    if len(text) <= chunk_size:
        return translator.translate(text)

    parts: list[str] = []
    start = 0
    while start < len(text):
        end = min(start + chunk_size, len(text))
        if end < len(text):
            split = text.rfind(". ", start, end)
            if split > start + 500:
                end = split + 1
        parts.append(translator.translate(text[start:end]))
        start = end
        time.sleep(0.15)
    return "".join(parts)


def load_cache() -> dict[str, str]:
    if CACHE.exists():
        return json.loads(CACHE.read_text(encoding="utf-8"))
    return {}


def save_cache(cache: dict[str, str]) -> None:
    CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def collect_pairs(content: str) -> list[tuple[str, str, str]]:
    pairs: list[tuple[str, str, str]] = []
    for match in PAIR_RE.finditer(content):
        en_raw, ja_raw = match.group("en"), match.group("ja")
        en = unquote(en_raw)
        ja = unquote(ja_raw)
        if en == ja:
            pairs.append((en_raw, ja_raw, en))
    return pairs


def apply_file(path: Path, cache: dict[str, str]) -> int:
    content = path.read_text(encoding="utf-8")
    updated = 0
    for en_raw, ja_raw, en in collect_pairs(content):
        ja_text = cache.get(en)
        if not ja_text or ja_text == en:
            continue
        style = ja_raw[0]
        new_ja_raw = quote(ja_text, style)
        if new_ja_raw == ja_raw:
            continue
        content = content.replace(f"en: {en_raw}, ja: {ja_raw}", f"en: {en_raw}, ja: {new_ja_raw}", 1)
        updated += 1
    if updated:
        path.write_text(content, encoding="utf-8")
    return updated


def main() -> None:
    cache = load_cache()
    translator = GoogleTranslator(source="en", target="ja")

    unique: set[str] = set()
    for name in FILES:
        path = EDU / name
        for _, _, en in collect_pairs(path.read_text(encoding="utf-8")):
            if en not in cache or cache[en] == en:
                unique.add(en)

    print(f"Need to translate {len(unique)} unique strings")
    done = 0
    for en in sorted(unique, key=len):
        try:
            cache[en] = translate_text(en, translator)
        except Exception as exc:  # noqa: BLE001
            print(f"Failed ({exc}): {en[:80]}...")
            continue
        done += 1
        if done % 25 == 0:
            save_cache(cache)
            print(f"Translated {done}/{len(unique)}")
        time.sleep(0.12)

    save_cache(cache)

    total = 0
    for name in FILES:
        count = apply_file(EDU / name, cache)
        print(f"{name}: updated {count} ja fields")
        total += count
    print(f"Done. Applied {total} replacements. Cache: {CACHE}")


if __name__ == "__main__":
    main()
