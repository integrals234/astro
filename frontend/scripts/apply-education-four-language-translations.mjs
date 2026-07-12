#!/usr/bin/env node
/**
 * Generate and apply Hindi/Korean translations for Home, Education, and
 * Horoscope localized text objects. The checked-in cache makes regeneration
 * deterministic and lets reviewers inspect every generated translation.
 */
import { existsSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CACHE_PATH = join(__dirname, "education-hi-ko-translations.json");
const FILES = [
  "src/lib/home/welcome-content.ts",
  "src/lib/education/types.ts",
  "src/lib/education/index.ts",
  "src/lib/education/i18n/ui.ts",
  "src/lib/education/intro-content.ts",
  "src/lib/education/rashi-content.ts",
  "src/lib/education/planets-content.ts",
  "src/lib/education/nakshatras-content.ts",
  "src/lib/education/aspects-content.ts",
  "src/lib/education/planetary-karakas-content.ts",
  "src/lib/education/p1-content.ts",
  "src/lib/education/p2-content.ts",
  "src/lib/education/p3-content.ts",
  "src/lib/education/p4-content.ts",
  "src/lib/education/p5-content.ts",
  "src/lib/education/p6-content.ts",
  "src/lib/education/horoscope-engine.ts",
  "src/lib/education/horoscope-periods.ts",
  "src/components/education/EducationalHub.tsx",
];

const STRING = String.raw`(?:\`(?:\\.|[^\`\\])*\`|"(?:\\.|[^"\\])*")`;
const PAIR_RE = new RegExp(
  String.raw`en:\s*(?<en>${STRING})\s*,\s*(?:hi:\s*(?<hi>${STRING})\s*,\s*)?ja:\s*(?<ja>${STRING})\s*,?(?:\s*ko:\s*(?<ko>${STRING})\s*,?)?`,
  "gs"
);

function unquote(raw) {
  const body = raw.slice(1, -1);
  return raw[0] === "`"
    ? body.replace(/\\`/g, "`").replace(/\\\\/g, "\\")
    : JSON.parse(raw);
}

function quote(text, style) {
  if (style === "`") {
    return `\`${text.replace(/\\/g, "\\\\").replace(/`/g, "\\`")}\``;
  }
  return JSON.stringify(text);
}

function protectTemplates(text) {
  const values = [];
  return {
    text: text.replace(/\$\{[^}]+\}/g, (value) => {
      const token = `__TPL_${values.length}__`;
      values.push(value);
      return token;
    }),
    values,
  };
}

function restoreTemplates(text, values) {
  return values.reduce(
    (result, value, index) =>
      result.replace(new RegExp(`__TPL[_ ]?${index}__`, "gi"), value),
    text
  );
}

async function translate(text, target, attempt = 0) {
  if (!/[A-Za-z]/.test(text)) return text;
  const protectedText = protectTemplates(text);
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "en");
  url.searchParams.set("tl", target);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", protectedText.text);
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const translated = data[0].map((part) => part[0]).join("");
    return restoreTemplates(translated, protectedText.values);
  } catch (error) {
    if (attempt >= 4) throw error;
    await new Promise((resolve) => setTimeout(resolve, 500 * 2 ** attempt));
    return translate(text, target, attempt + 1);
  }
}

function collectEnglish() {
  const strings = new Set();
  for (const relativePath of FILES) {
    const source = readFileSync(join(ROOT, relativePath), "utf8");
    for (const match of source.matchAll(PAIR_RE)) {
      strings.add(unquote(match.groups.en));
    }
  }
  return [...strings];
}

async function runPool(items, worker, concurrency = 16) {
  let next = 0;
  const runners = Array.from({ length: concurrency }, async () => {
    while (next < items.length) {
      const index = next++;
      await worker(items[index], index);
    }
  });
  await Promise.all(runners);
}

function apply(cache) {
  for (const relativePath of FILES) {
    const path = join(ROOT, relativePath);
    const source = readFileSync(path, "utf8");
    const updated = source.replace(PAIR_RE, (full, ...args) => {
      const groups = args.at(-1);
      if (groups.hi && groups.ko) return full;
      const en = unquote(groups.en);
      const entry = cache[en];
      if (!entry?.hi || !entry?.ko) {
        throw new Error(`Missing translation for: ${en}`);
      }
      const enRaw = groups.en;
      const jaRaw = groups.ja;
      return `en: ${enRaw}, hi: ${quote(entry.hi, enRaw[0])}, ja: ${jaRaw}, ko: ${quote(entry.ko, enRaw[0])},`;
    });
    if (updated !== source) writeFileSync(path, updated, "utf8");
  }
}

async function main() {
  const cache = existsSync(CACHE_PATH)
    ? JSON.parse(readFileSync(CACHE_PATH, "utf8"))
    : {};
  const english = collectEnglish();
  const missing = english.filter((text) => !cache[text]?.hi || !cache[text]?.ko);
  console.log(`Found ${english.length} strings; translating ${missing.length}.`);

  let complete = 0;
  await runPool(missing, async (text) => {
    const [hi, ko] = await Promise.all([
      translate(text, "hi"),
      translate(text, "ko"),
    ]);
    cache[text] = { hi, ko };
    complete++;
    if (complete % 50 === 0) console.log(`Translated ${complete}/${missing.length}`);
  });

  const sortedCache = Object.fromEntries(
    Object.entries(cache).sort(([a], [b]) => a.localeCompare(b))
  );
  writeFileSync(CACHE_PATH, `${JSON.stringify(sortedCache, null, 2)}\n`, "utf8");
  apply(sortedCache);
  console.log("Applied complete Hindi and Korean fields.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
