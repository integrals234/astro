import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const enStrings = JSON.parse(
  readFileSync(join(__dirname, "en-strings.json"), "utf8")
);
const hiStrings = JSON.parse(
  readFileSync(join(__dirname, "hi-translations.json"), "utf8")
);
const koStrings = JSON.parse(
  readFileSync(join(__dirname, "ko-translations.json"), "utf8")
);

if (enStrings.length !== hiStrings.length || enStrings.length !== koStrings.length) {
  throw new Error(
    `Count mismatch: en=${enStrings.length} hi=${hiStrings.length} ko=${koStrings.length}`
  );
}

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function buildFile(exportName, translations) {
  const lines = [`export const ${exportName}: Record<string, string> = {`];
  for (let i = 0; i < enStrings.length; i++) {
    lines.push(`  "${escapeTs(enStrings[i])}": "${escapeTs(translations[i])}",`);
  }
  lines.push("};");
  lines.push("");
  return lines.join("\n");
}

const outDir = join(__dirname, "../src/lib/vedic-course/i18n");
writeFileSync(join(outDir, "content-hi.ts"), buildFile("HI_CONTENT", hiStrings));
writeFileSync(join(outDir, "content-ko.ts"), buildFile("KO_CONTENT", koStrings));
console.log(`Generated ${enStrings.length} entries in content-hi.ts and content-ko.ts`);
