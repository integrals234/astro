#!/usr/bin/env node
/** Fill Japanese translations for education wisdom articles (p1–p6). */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const EDU = join(__dirname, "../src/lib/education");
const CACHE = join(__dirname, "ja-education-translations.json");

const FILES = [
  "p1-content.ts",
  "p2-content.ts",
  "p3-content.ts",
  "p4-content.ts",
  "p5-content.ts",
  "p6-content.ts",
];

const PAIR_RE =
  /en:\s*(?<en>`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*")\s*,?\s*ja:\s*(?<ja>`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*")/gs;

function unquote(raw) {
  const q = raw[0];
  const body = raw.slice(1, -1);
  if (q === "`") {
    return body
      .replace(/\\`/g, "`")
      .replace(/\\\$\{/g, "${")
      .replace(/\\\\/g, "\\");
  }
  return body.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}

function quote(text, style) {
  if (style === "`") {
    const escaped = text
      .replace(/\\/g, "\\\\")
      .replace(/`/g, "\\`")
      .replace(/\$\{/g, "\\${");
    return `\`${escaped}\``;
  }
  const escaped = text.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  return `"${escaped}"`;
}

async function translateText(text, attempt = 0) {
  if (!text.trim()) return text;
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "en");
  url.searchParams.set("tl", "ja");
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);

  const res = await fetch(url);
  if (!res.ok) {
    if (attempt < 3) {
      await sleep(500 * (attempt + 1));
      return translateText(text, attempt + 1);
    }
    throw new Error(`HTTP ${res.status}`);
  }
  const data = await res.json();
  return data[0].map((part) => part[0]).join("");
}

function loadCache() {
  if (!existsSync(CACHE)) return {};
  return JSON.parse(readFileSync(CACHE, "utf8"));
}

function saveCache(cache) {
  writeFileSync(CACHE, JSON.stringify(cache, null, 2) + "\n", "utf8");
}

function collectPairs(content) {
  const pairs = [];
  for (const match of content.matchAll(PAIR_RE)) {
    const enRaw = match.groups.en;
    const jaRaw = match.groups.ja;
    const en = unquote(enRaw);
    const ja = unquote(jaRaw);
    if (en === ja) pairs.push({ enRaw, jaRaw, en });
  }
  return pairs;
}

function applyFile(path, cache) {
  let content = readFileSync(path, "utf8");
  let updated = 0;
  for (const { enRaw, jaRaw, en } of collectPairs(content)) {
    const jaText = cache[en];
    if (!jaText || jaText === en) continue;
    const style = jaRaw[0];
    const newJaRaw = quote(jaText, style);
    if (newJaRaw === jaRaw) continue;
    const patterns = [
      `en: ${enRaw}, ja: ${jaRaw}`,
      `en: ${enRaw},\n      ja: ${jaRaw}`,
      `en: ${enRaw},\n          ja: ${jaRaw}`,
      `en: ${enRaw},\n        ja: ${jaRaw}`,
    ];
    let replaced = false;
    for (const needle of patterns) {
      if (content.includes(needle)) {
        content = content.replace(needle, needle.replace(`ja: ${jaRaw}`, `ja: ${newJaRaw}`));
        replaced = true;
        break;
      }
    }
    if (!replaced) continue;
    updated += 1;
  }
  if (updated) writeFileSync(path, content, "utf8");
  return updated;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const cache = loadCache();
  const unique = new Set();

  for (const name of FILES) {
    const content = readFileSync(join(EDU, name), "utf8");
    for (const { en } of collectPairs(content)) {
      if (!cache[en] || cache[en] === en) unique.add(en);
    }
  }

  console.log(`Need to translate ${unique.size} unique strings`);
  let done = 0;
  for (const en of [...unique].sort((a, b) => a.length - b.length)) {
    try {
      cache[en] = await translateText(en);
    } catch (err) {
      console.error(`Failed: ${en.slice(0, 80)}... (${err.message})`);
      continue;
    }
    done += 1;
    if (done % 25 === 0) {
      saveCache(cache);
      console.log(`Translated ${done}/${unique.size}`);
    }
    await sleep(120);
  }

  saveCache(cache);

  let total = 0;
  for (const name of FILES) {
    const count = applyFile(join(EDU, name), cache);
    console.log(`${name}: updated ${count} ja fields`);
    total += count;
  }
  console.log(`Done. Applied ${total} replacements.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
