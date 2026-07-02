import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(__dirname, "../../temp-content/p4.txt"), "utf8");
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
      return true;
    })
    .join(" ")
    .trim();

  return t;
}

/** @typedef {{ type: string; level?: number; text: string }} Block */
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
  const cleaned = scrub(block.text);
  if (!cleaned) return;
  current.blocks.push({ ...block, text: cleaned });
}

function pushParagraph(text) {
  pushBlock({ type: "paragraph", text });
}

function pushHeading(text, level = 3) {
  pushBlock({ type: "heading", level, text });
}

const H3_PATTERNS = [
  /^Sign .Ownership. or .Rulership. Principles$/,
  /^Sign Ownership or Rulership by Planets in Jyotish$/,
  /^Planetary .Strengths. or .Powers. – by Sign Placement$/,
  /^Assessing Planetary Strength from Sign Placement$/,
  /^Planetary Strengths or Powers by Sign Placement$/,
  /^(Sun \(Surya\)|Moon \(Chandra\)|Mars \(Mangala\)|Mercury \(Buddha\)|Jupiter \(Guru\)|Venus \(Shukra\)|Saturn \(Shani\)|Rahu|Ketu)$/,
  /^Additional Measures of Strength – .Friends. and .Enemies.$/,
  /^Planetary Strengths by Sign Placement – Nine Categories or States in Jyotish$/,
  /^Other Factors Which Influence Planetary Strength$/,
  /^Effects of Aspects on Planetary Strength$/,
  /^Effect of Combust Planets in Vedic Astrology$/,
  /^Effect of Retrograde Planets in Jyotish$/,
  /^Planets with Vargottama Status$/,
  /^Planetary War in Jyotish$/,
  /^North Indian and South Indian Chart Formats Compared$/,
  /^Comparison between North and South Indian Jyotish Chart Formats$/,
  /^South Indian Jyotish Birth-chart Format$/,
  /^South Indian Vedic Astrology Chart Format$/,
  /^First House – .House of Body.$/,
  /^Second House – .House of Wealth.$/,
  /^Third House – .House of Brothers, Sisters and Desires.$/,
  /^Fourth House – .House of Happiness and Comforts.$/,
  /^Fifth House – .House of Children.$/,
  /^Sixth House – .House of Enemies.$/,
  /^Seventh House – .House of Marriage and Partnerships.$/,
  /^Eighth House – .House of Transformation.$/,
  /^Ninth House – .House of Fortune.$/,
  /^Tenth House – .House of Status and Power.$/,
  /^Eleventh House – .House of Gains, Profits and Desires.$/,
  /^Twelfth House – .House of Loss and Expenditure.$/,
  /^Parts of the Body Associated with Each House$/,
  /^House Classification$/,
  /^Footnotes$/,
  /^1\. Benefits Through the Planet.s Natural Indications$/,
  /^2\. Benefits Through the Houses the Planet Rules$/,
];

function isH3(line) {
  return H3_PATTERNS.some((p) => p.test(line));
}

function isSummary(line) {
  return line.startsWith("Summary:");
}

function isBullet(line) {
  return line.startsWith("•\t") || line.startsWith("• ");
}

const ARTICLE_MARKERS = [
  {
    match: (l) => l === "Planetary Strengths or Powers",
    id: "planetary-strengths",
    section: "planets",
    title: "Planetary Strengths or Powers",
    related: ["natural-benefics-malefics", "planetary-aspects", "twelve-houses"],
  },
  {
    match: (l) => l === "Chart Formats in Jyotish Astrology",
    id: "chart-formats",
    section: "houses",
    title: "Chart Formats in Jyotish Astrology",
    related: ["twelve-houses", "good-bad-houses", "sidereal-zodiac-p3"],
  },
  {
    match: (l) => l === "The Twelve Houses and Their Indications",
    id: "twelve-houses",
    section: "houses",
    title: "The Twelve Houses and Their Indications",
    related: ["good-bad-houses", "planetary-strengths", "chart-formats"],
  },
];

let pendingSummary = false;

for (let i = 0; i < lines.length; i++) {
  const trimmed = lines[i].trim();
  if (!trimmed) continue;

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
    startArticle(marker.id, marker.section, marker.title, marker.related);
    continue;
  }

  if (!current) continue;

  if (isSummary(trimmed)) {
    const summaryBody = trimmed.slice("Summary:".length).trim();
    pushParagraph(summaryBody ? `Summary: ${summaryBody}` : trimmed);
    continue;
  }

  if (isH3(trimmed)) {
    pushHeading(trimmed, 3);
    continue;
  }

  if (isBullet(trimmed)) {
    pushParagraph(trimmed.replace(/^•[\t ]?/, "• "));
    continue;
  }

  if (trimmed === "House Indications:") {
    pushHeading(trimmed, 3);
    continue;
  }

  if (/^Exalted:|^Moolatrikona|^Own Sign|^Debilitated Sign|^Exalted Sign:/.test(trimmed)) {
    pushParagraph(`• ${trimmed}`);
    continue;
  }

  if (/^(Exalted|Moolatrikona|Own Sign|Friendly Sign|Neutral Sign|Fallen\/Enemy Sign): \d+%$/.test(trimmed)) {
    pushParagraph(`• ${trimmed}`);
    continue;
  }

  if (/^(Retrograde motion|Combustion|Planetary War|Position in divisional charts)$/.test(trimmed)) {
    pushParagraph(`• ${trimmed}`);
    continue;
  }

  if (/^(Friend|Neutral|Enemy|Great Friend|Great Enemy)$/.test(trimmed) && current.id === "planetary-strengths") {
    pushParagraph(`• ${trimmed}`);
    continue;
  }

  if (/^(Exalted|Moolatrikona|Own Sign|Debilitated \(or Fallen\))$/.test(trimmed)) {
    pushParagraph(`• ${trimmed}`);
    continue;
  }

  if (/^(Dharma \(Duty|Artha \(Wealth\)|Kama \(Desire\)|Moksha \(Liberation\))/.test(trimmed)) {
    pushParagraph(`• ${trimmed}`);
    continue;
  }

  if (/^House Classification:/.test(trimmed) || /^House Indicator/.test(trimmed)) {
    pushParagraph(trimmed);
    continue;
  }

  if (/^\[\d+\]/.test(trimmed)) {
    pushParagraph(trimmed);
    continue;
  }

  pushParagraph(trimmed);
}

flush();

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function bilingual(text) {
  return `{ en: \`${escapeTs(text)}\`, ja: \`${escapeTs(text)}\` }`;
}

const articleBlocks = articles.map((article) => {
  const blocksTs = article.blocks
    .map((b) => {
      if (b.type === "heading") {
        return `      { type: "heading", level: ${b.level}, text: ${bilingual(b.text)} },`;
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

/** Articles sourced verbatim from temp-content/p4.txt (link-scrubbed, headings normalized) */
export const p4Articles: WisdomArticle[] = [
${articleBlocks.join(",\n")}
];
`;

writeFileSync(join(__dirname, "../src/lib/education/p4-content.ts"), out);

const articlesPath = join(__dirname, "../src/lib/education/articles-content.ts");
let articlesContent = readFileSync(articlesPath, "utf8");

const removeIds = ["planetary-strengths", "chart-formats", "twelve-houses"];

for (const id of removeIds) {
  const re = new RegExp(`\\n  \\{\\n    id: "${id}"[\\s\\S]*?\\n  \\},?`, "m");
  articlesContent = articlesContent.replace(re, "");
}

if (!articlesContent.includes('from "./p4-content"')) {
  articlesContent = articlesContent.replace(
    'import { p3Articles } from "./p3-content";',
    'import { p3Articles } from "./p3-content";\nimport { p4Articles } from "./p4-content";'
  );
}

if (!articlesContent.includes("...p4Articles")) {
  articlesContent = articlesContent.replace(
    "  ...p3Articles,",
    "  ...p3Articles,\n  ...p4Articles,"
  );
}

writeFileSync(articlesPath, articlesContent);

console.log(`Generated ${articles.length} p4 articles:`);
for (const a of articles) console.log(`  - ${a.title} (${a.id}, ${a.section})`);
