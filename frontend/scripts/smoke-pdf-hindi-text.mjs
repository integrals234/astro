import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const sourcePath = path.join(root, "src/lib/chart-pdf/typography-core.ts");
const source = fs.readFileSync(sourcePath, "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
  fileName: sourcePath,
}).outputText;
const moduleUrl = `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`;
const { segmentGraphemes, wrapMeasuredText } = await import(moduleUrl);

const difficultHindi = [
  "क्षत्रिय",
  "नियुक्ति",
  "प्राधिकारी",
  "कृत्तिका",
  "ज्येष्ठा",
  "विंशोत्तरी",
  "कुंडली",
  "पूर्वाषाढ़ा",
  "श्रवण",
];

for (const text of difficultHindi) {
  const original = segmentGraphemes(text, "hi");
  const measure = (candidate) => segmentGraphemes(candidate, "hi").length * 10;
  const lines = wrapMeasuredText(text, 20, measure, "hi");
  assert.equal(lines.join(""), text, `${text}: wrapping changed the source text`);
  assert.deepEqual(
    lines.flatMap((line) => segmentGraphemes(line, "hi")),
    original,
    `${text}: wrapping split a grapheme cluster`,
  );
  assert.ok(lines.every((line) => measure(line) <= 20), `${text}: line exceeds max width`);
}

console.log(`Hindi PDF typography smoke passed (${difficultHindi.length} strings).`);
