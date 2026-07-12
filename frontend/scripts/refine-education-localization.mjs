#!/usr/bin/env node
/**
 * Normalize common machine-translation errors in the checked-in Education
 * corpus. Replacements are intentionally limited to unambiguous Jyotish terms.
 */
import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../src/lib");
const FILES = [
  "home/welcome-content.ts",
  "education/intro-content.ts",
  "education/rashi-content.ts",
  "education/planets-content.ts",
  "education/nakshatras-content.ts",
  "education/aspects-content.ts",
  "education/planetary-karakas-content.ts",
  "education/p1-content.ts",
  "education/p2-content.ts",
  "education/p3-content.ts",
  "education/p4-content.ts",
  "education/p5-content.ts",
  "education/p6-content.ts",
  "education/horoscope-engine.ts",
];

const REPLACEMENTS = new Map([
  // Japanese
  ["水銀", "水星"],
  ["ドリシティ", "ドリシュティ"],
  ["ジョーティシャーチャarya", "ジョーティシャーチャーリヤ"],
  ["ジョーティッシュ占星術", "ジョーティッシュ"],
  ["惑星の解毒剤", "惑星への対処法"],
  ["惑星の解毒", "惑星への対処"],
  ["救済措置", "改善法"],
  ["救済策", "改善法"],
  ["輸送を通じて", "トランジットによって"],
  ["輸送によって", "トランジットによって"],
  ["所有する家屋", "支配するハウス"],
  ["家屋を通過する惑星の通過", "ハウスを通過する惑星のトランジット"],
  ["標識や家屋", "ラーシやハウス"],
  ["家や標識", "ハウスやラーシ"],
  ["その標識", "そのラーシ"],
  ["上昇する標識", "上昇ラーシ"],
  ["標識の配置", "ラーシの配置"],
  ["過激な惑星", "出生図の惑星"],
  ["インド占星の象徴", "ジョーティッシュの象徴"],
  // Korean
  ["수은", "수성"],
  ["대중교통을 통해", "트랜짓을 통해"],
  ["운송으로 인해", "트랜짓으로"],
  ["소유한 주택", "지배하는 궁"],
  ["표지판과 집", "라시와 궁"],
  ["표지판 배치", "라시 배치"],
  // Hindi
  ["ज्योतिष ज्योतिष", "ज्योतिष"],
  ["पारगमन के माध्यम से", "गोचर के माध्यम से"],
  ["पारगमन की", "गोचर की"],
  ["पारगमन अवधि", "गोचर अवधि"],
  ["घरों और राशियों", "भावों और राशियों"],
]);

let changed = 0;
for (const relativePath of FILES) {
  const path = join(ROOT, relativePath);
  const before = readFileSync(path, "utf8");
  let after = before;
  for (const [from, to] of REPLACEMENTS) {
    after = after.replaceAll(from, to);
  }
  if (after !== before) {
    writeFileSync(path, after, "utf8");
    changed++;
  }
}

console.log(`Refined localized Jyotish terminology in ${changed} files.`);
