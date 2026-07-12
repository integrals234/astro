#!/usr/bin/env python3
"""Preserve reviewed entries and machine-translate newly extracted course strings."""
import json
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

from deep_translator import GoogleTranslator

ROOT = Path(__file__).resolve().parents[1]
SCRIPTS = ROOT / "scripts"
I18N = ROOT / "src/lib/vedic-course/i18n"


def read_generated_map(path: Path) -> dict[str, str]:
    entries: dict[str, str] = {}
    pattern = re.compile(r'^\s*("(?:\\.|[^"\\])*"):\s*("(?:\\.|[^"\\])*"),$')
    for line in path.read_text(encoding="utf-8").splitlines():
        match = pattern.match(line)
        if match:
            entries[json.loads(match.group(1))] = json.loads(match.group(2))
    return entries


def translate_missing(
    english: list[str],
    reviewed: dict[str, str],
    target: str,
    cache_path: Path,
) -> list[str]:
    cache: dict[str, str] = {}
    if cache_path.exists():
        cache = json.loads(cache_path.read_text(encoding="utf-8"))

    missing = [text for text in english if text not in reviewed and text not in cache]
    print(f"{target}: preserving {len(reviewed)} reviewed entries; translating {len(missing)}")

    def translate_one(text: str) -> tuple[str, str]:
        for attempt in range(5):
            try:
                translated = GoogleTranslator(source="en", target=target).translate(text)
                if not translated:
                    raise RuntimeError("translator returned empty text")
                return text, translated
            except Exception as error:
                if attempt == 4:
                    raise RuntimeError(f"{target} translation failed for {text!r}") from error
                time.sleep(1.5 * (attempt + 1))

        raise AssertionError("unreachable")

    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = [executor.submit(translate_one, text) for text in missing]
        for index, future in enumerate(as_completed(futures), 1):
            text, translated = future.result()
            cache[text] = translated
            if index % 25 == 0 or index == len(missing):
                cache_path.write_text(
                    json.dumps(cache, ensure_ascii=False, indent=2) + "\n",
                    encoding="utf-8",
                )
                print(f"{target}: {index}/{len(missing)}", flush=True)

    return [reviewed.get(text) or cache[text] for text in english]


def main() -> None:
    english = json.loads((SCRIPTS / "en-strings.json").read_text(encoding="utf-8"))
    outputs = (
        ("hi", "content-hi.ts", "hi-translations.json"),
        ("ko", "content-ko.ts", "ko-translations.json"),
    )
    for target, generated_name, output_name in outputs:
        reviewed = read_generated_map(I18N / generated_name)
        translated = translate_missing(
            english,
            reviewed,
            target,
            SCRIPTS / f".{target}-translation-cache.json",
        )
        (SCRIPTS / output_name).write_text(
            json.dumps(translated, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
    print(f"Wrote complete Hindi and Korean arrays ({len(english)} each)")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit(130)
