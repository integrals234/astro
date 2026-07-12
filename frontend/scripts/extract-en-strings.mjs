import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { VEDIC_COURSE_CHAPTERS } from "../src/lib/vedic-course/content.ts";

const en = new Set();
function walk(v) {
  if (!v) return;
  if (typeof v === "object" && v !== null) {
    if ("en" in v && typeof v.en === "string") en.add(v.en);
    for (const x of Object.values(v)) walk(x);
  }
  if (Array.isArray(v)) v.forEach(walk);
}
VEDIC_COURSE_CHAPTERS.forEach((ch) => walk(ch));
const sorted = [...en].sort();
const scriptsDir = dirname(fileURLToPath(import.meta.url));
writeFileSync(join(scriptsDir, "en-strings.json"), JSON.stringify(sorted, null, 2));
console.log(sorted.length);
