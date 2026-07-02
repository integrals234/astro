import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(__dirname, "../../temp-content/p5.txt"), "utf8");
const lines = raw.split("\n");

function scrub(text) {
  let t = text.trim();
  if (!t) return "";

  if (/https?:\/\/|www\./i.test(t)) return "";
  if (/\bvisit\b[^.!?]*\bwebsite/i.test(t)) return "";

  t = t
    .split(/(?<=[.!?])\s+/)
    .filter((sentence) => {
      if (/https?:\/\/|www\./i.test(sentence)) return false;
      if (/\bvisit\b[^.!?]*\bwebsite/i.test(sentence)) return false;
      if (/\bonline\b[^.!?]*(calculator|tool|website)/i.test(sentence)) return false;
      if (/using an online/i.test(sentence)) return false;
      return true;
    })
    .join(" ")
    .trim();

  return t;
}

/** @typedef {{ type: string; level?: number; text?: string; headers?: string[]; rows?: string[][] }} Block */
/** @typedef {{ id: string; section: string; title: string; related: string[]; blocks: Block[] }} Article */

/** @type {Article[]} */
const articles = [];

/** @type {Article | null} */
let current = null;

function flush() {
  if (current && current.blocks.length > 0) {
    articles.push(current);
  }
  current = null;
}

function startArticle(id, section, title, related) {
  flush();
  current = { id, section, title, related, blocks: [] };
  current.blocks.push({ type: "heading", level: 2, text: title });
}

function pushBlock(block) {
  if (!current) return;
  if (block.type === "table") {
    current.blocks.push(block);
    return;
  }
  const cleaned = scrub(block.text ?? "");
  if (!cleaned) return;
  current.blocks.push({ ...block, text: cleaned });
}

function pushParagraph(text) {
  pushBlock({ type: "paragraph", text });
}

function pushHeading(text, level = 3) {
  pushBlock({ type: "heading", level, text });
}

function pushTable(headers, rows) {
  if (!current || rows.length === 0) return;
  current.blocks.push({ type: "table", headers, rows });
}

const ASCENDANTS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const H3_PATTERNS = [
  /^The Equal House Concept$/,
  /^[''']Good['''] and [''']Bad['''] Houses$/,
  /^Trikona or Trinal Houses$/,
  /^Kendras or Angular Houses$/,
  /^Dusthanas or Negative Houses$/,
  /^Upachaya or Growing Houses$/,
  /^Footnotes$/,
  /^List of Natural Benefics and Malefics in Jyotish$/,
  /^Benefics and Malefics – Terminology Explained$/,
  /^Nine [''']Planets['''] Used by Jyotish$/,
  /^Nine ‘Planets’ Used by Jyotish$/,
  /^[''']Good['''] and [''']Bad['''] Houses$/,
  /^‘Good’ and ‘Bad’ Houses$/,
  /^Natural Benefic and Natural Malefic Planets$/,
  /^What About Mercury\?$/,
  /^What About the Sun, Moon, Rahu and Ketu\?$/,
  /^The Sun$/,
  /^The Moon$/,
  /^Rahu and Ketu$/,
  /^Modifying Factors$/,
  /^Planetary Strength Matters$/,
  /^Strong Malefics and Weak Malefics$/,
  /^Saturn – A Special Case$/,
  /^Further Study$/,
  /^A Simple Example of an Aspect$/,
  /^Aspect Principle in Jyotish Astrology$/,
  /^Sun Aspects Only the 7th House$/,
  /^Aspect Rules$/,
  /^Aspect Diagram for (Mars|Jupiter|Saturn)$/,
  /^Mars Aspects the 4th, 7th and 8th Houses in Jyotish$/,
  /^Jupiter Aspects the 5th, 7th and 9th Houses in Jyotish$/,
  /^Saturn Aspects the 3rd, 7th and 10th Houses in Jyotish$/,
  /^Conjunction and Combustion$/,
  ...ASCENDANTS.map((s) => new RegExp(`^${s} Ascendant$`)),
];

function isH3(line) {
  return H3_PATTERNS.some((p) =>
    typeof p === "string" ? line === p : p.test(line)
  );
}

function isSummary(line) {
  return line.startsWith("Summary:");
}

function isBullet(line) {
  return line.startsWith("•\t") || line.startsWith("• ");
}

function isTableHeader(line) {
  return line.includes("\t") && /^Planet\tHouses Ruled\tNotes$/.test(line);
}

function parseTableRow(line) {
  if (!line.includes("\t")) return null;
  const parts = line.split("\t").map((p) => p.trim());
  if (parts.length < 3) return null;
  const [planet, houses, ...noteParts] = parts;
  if (!planet || planet === "Planet") return null;
  return [planet, houses, noteParts.join("\t")];
}

const ARTICLE_MARKERS = [
  {
    match: (l) =>
      l === "'Good' and 'Bad' Houses in Jyotish" ||
      l === "‘Good’ and ‘Bad’ Houses in Jyotish",
    id: "good-bad-houses",
    section: "houses",
    title: "‘Good’ and ‘Bad’ Houses in Jyotish",
    related: ["twelve-houses", "functional-benefics-malefics", "planetary-strengths"],
  },
  {
    match: (l) => l === "Natural Benefic and Malefic Planets",
    id: "natural-benefics-malefics",
    section: "planets",
    title: "Natural Benefic and Malefic Planets",
    related: ["functional-benefics-malefics", "planetary-strengths", "planetary-aspects"],
  },
  {
    match: (l) => l === "Functional Benefics and Malefics for All Ascendants",
    id: "functional-benefics-malefics",
    section: "planets",
    title: "Functional Benefics and Malefics for All Ascendants",
    related: ["natural-benefics-malefics", "gemstones", "twelve-houses"],
  },
  {
    match: (l) => l === "Planetary Aspects",
    id: "planetary-aspects",
    section: "aspects",
    title: "Planetary Aspects",
    related: ["planetary-strengths", "natural-benefics-malefics", "twelve-houses"],
  },
];

let pendingSummary = false;
let tableMode = null;
/** @type {string[]} */
let tableHeaders = [];
/** @type {string[][]} */
let tableRows = [];

function flushTable() {
  if (tableMode && tableRows.length > 0) {
    pushTable(tableHeaders, tableRows);
  }
  tableMode = null;
  tableHeaders = [];
  tableRows = [];
}

for (let i = 0; i < lines.length; i++) {
  const trimmed = lines[i].trim();
  if (!trimmed) continue;

  if (/^_{5,}$/.test(trimmed)) continue;
  if (trimmed === "^Back to Top") continue;
  if (/^(Aries|Taurus|Gemini|Cancer|Leo|Virgo|Libra) \|/.test(trimmed)) continue;
  if (/^(Scorpio|Sagittarius|Capricorn|Aquarius|Pisces) \|/.test(trimmed)) continue;

  if (pendingSummary && current) {
    pendingSummary = false;
    pushParagraph(`Summary: ${trimmed}`);
    continue;
  }

  if (trimmed === "Summary:") {
    pendingSummary = true;
    continue;
  }

  const marker = ARTICLE_MARKERS.find((m) => m.match(trimmed));
  if (marker) {
    flushTable();
    startArticle(marker.id, marker.section, marker.title, marker.related);
    continue;
  }

  if (!current) continue;

  if (current.id === "functional-benefics-malefics") {
    if (trimmed === "Functional Benefics:" || trimmed === "Functional Malefics:") {
      flushTable();
      pushHeading(trimmed.replace(":", ""), 3);
      tableMode = trimmed.startsWith("Functional Benefics") ? "benefics" : "malefics";
      continue;
    }
    if (trimmed === "Notes:") {
      flushTable();
      pushHeading("Notes", 3);
      continue;
    }
    if (isTableHeader(trimmed)) {
      tableHeaders = ["Planet", "Houses Ruled", "Notes"];
      continue;
    }
    if (tableMode) {
      const row = parseTableRow(trimmed);
      if (row) {
        tableRows.push(row);
        continue;
      }
      flushTable();
    }
    if (isBullet(trimmed)) {
      pushParagraph(trimmed.replace(/^•[\t ]?/, "• "));
      continue;
    }
  }

  if (isSummary(trimmed)) {
    const summaryBody = trimmed.slice("Summary:".length).trim();
    pushParagraph(summaryBody ? `Summary: ${summaryBody}` : trimmed);
    continue;
  }

  if (isH3(trimmed)) {
    flushTable();
    pushHeading(trimmed, 3);
    continue;
  }

  if (isBullet(trimmed)) {
    pushParagraph(trimmed.replace(/^•[\t ]?/, "• "));
    continue;
  }

  if (/^\[\d+\]/.test(trimmed)) {
    pushParagraph(trimmed);
    continue;
  }

  if (
    current.id === "natural-benefics-malefics" &&
    /^(Venus, Jupiter|Mars, Saturn|Mercury's nature|The Sun is regarded|The waning Moon)/.test(
      trimmed
    )
  ) {
    pushParagraph(`• ${trimmed}`);
    continue;
  }

  if (
    current.id === "planetary-aspects" &&
    trimmed.startsWith("•\t")
  ) {
    pushParagraph(trimmed.replace(/^•[\t ]?/, "• "));
    continue;
  }

  pushParagraph(trimmed);
}

flushTable();
flush();

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function bilingual(text) {
  return `{ en: \`${escapeTs(text)}\`, ja: \`${escapeTs(text)}\` }`;
}

function bilingualArray(items) {
  return `[${items.map((item) => bilingual(item)).join(", ")}]`;
}

const articleBlocks = articles.map((article) => {
  const blocksTs = article.blocks
    .map((b) => {
      if (b.type === "heading") {
        return `      { type: "heading", level: ${b.level}, text: ${bilingual(b.text)} },`;
      }
      if (b.type === "table") {
        const headers = bilingualArray(b.headers);
        const rows = b.rows
          .map((row) => `        [${row.map((cell) => bilingual(cell)).join(", ")}],`)
          .join("\n");
        return `      { type: "table", headers: ${headers}, rows: [\n${rows}\n      ] },`;
      }
      return `      { type: "paragraph", text: ${bilingual(b.text)} },`;
    })
    .join("\n");

  return `  {
    id: "${article.id}",
    section: "${article.section}",
    title: ${bilingual(article.title)},
    related: ${JSON.stringify(article.related)},
    blocks: [
${blocksTs}
    ],
  }`;
});

const out = `import type { WisdomArticle } from "./types";

/** Articles sourced verbatim from temp-content/p5.txt (link-scrubbed, headings normalized) */
export const p5Articles: WisdomArticle[] = [
${articleBlocks.join(",\n")}
];
`;

writeFileSync(join(__dirname, "../src/lib/education/p5-content.ts"), out);

const articlesPath = join(__dirname, "../src/lib/education/articles-content.ts");
let articlesContent = readFileSync(articlesPath, "utf8");

const removeIds = [
  "good-bad-houses",
  "natural-benefics-malefics",
  "functional-benefics-malefics",
  "planetary-aspects",
];

for (const id of removeIds) {
  const re = new RegExp(`\\n  \\{\\n    id: "${id}"[\\s\\S]*?\\n  \\},?`, "m");
  articlesContent = articlesContent.replace(re, "");
}

if (!articlesContent.includes('from "./p5-content"')) {
  articlesContent = articlesContent.replace(
    'import { p4Articles } from "./p4-content";',
    'import { p4Articles } from "./p4-content";\nimport { p5Articles } from "./p5-content";'
  );
}

if (!articlesContent.includes("...p5Articles")) {
  articlesContent = articlesContent.replace(
    "  ...p4Articles,",
    "  ...p4Articles,\n  ...p5Articles,"
  );
}

writeFileSync(articlesPath, articlesContent);

console.log(`Generated ${articles.length} p5 articles:`);
for (const a of articles) {
  const tables = a.blocks.filter((b) => b.type === "table").length;
  console.log(`  - ${a.title} (${a.id}, ${a.section}, ${tables} tables)`);
}
