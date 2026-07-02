import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(__dirname, "../../temp-content/p3.txt"), "utf8");
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
      if (/in our article on The Vedic Model of Reality/i.test(sentence)) return false;
      if (/may wish to refer to our articles/i.test(sentence)) return false;
      if (/explored in greater detail in our article:/i.test(sentence)) return false;
      if (/discussed in more detail in our article:/i.test(sentence)) return false;
      if (/This concept is explored further in our article/i.test(sentence)) return false;
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
  /^Different Systems – Different Strengths$/,
  /^Vedic Astrology – Predictive and Preventive$/,
  /^Jyotish Astrology: Cognized – Not Developed$/,
  /^Vedic Astrology Only Needs to Use Nine/,
  /^A Unique System of Time-Based Predictions – The Mahadashas$/,
  /^Ascendant of Key Importance in Jyotish$/,
  /^Jyotish Always Uses the Sidereal Zodiac$/,
  /^Jyotish Uses .Functional Benefics/,
  /^Footnotes$/,
  /^Jyotish – A Major Paradigm Shift for Western Astrologers$/,
  /^Some Examples of Major Paradigm Shifts$/,
  /^Shift from .Flat-Earth. to Heliocentric Viewpoint$/,
  /^Shift from .Created. to .Evolved. Viewpoint$/,
  /^Shift from Newtonian Mechanistic to Quantum Understandings$/,
  /^Paradigm Changing Concepts in Jyotish Astrology$/,
  /^1\. Planets Do Not Affect People$/,
  /^2\. We Were Not Born at a Particular Time Merely by Chance$/,
  /^3\. Planets Don.t Emit a Physical .Force. that Affects People$/,
  /^4\. Jyotish Has No Need to Use Neptune, Uranus, Pluto or Asteroids$/,
  /^5\. Jyotish Provides Remedial Measures to Modify Returning Karmas$/,
  /^6\. Jyotish Astrology Came from G\.O\.D\.$/,
  /^Jyotish Uses the Fixed Sidereal Zodiac$/,
  /^Ayanamsa – Angular Difference Between the Two Zodiacs$/,
  /^Nakshatras –/,
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
    match: (l) => l === "Vedic and Western Astrology: Key Differences",
    id: "western-differences",
    section: "introduction",
    title: "Vedic and Western Astrology: Key Differences",
    related: ["paradigm-shift", "sidereal-zodiac-p3", "key-differences-intro"],
  },
  {
    match: (l) => l === "Vedic Astrology – A Paradigm Shift",
    id: "paradigm-shift",
    section: "introduction",
    title: "Vedic Astrology – A Paradigm Shift",
    related: ["western-differences", "planetary-forces", "origins-of-jyotish"],
  },
  {
    match: (l) => l === "Jyotish – Sidereal Zodiac",
    id: "sidereal-zodiac-p3",
    section: "introduction",
    title: "Jyotish – Sidereal Zodiac",
    related: ["nakshatras-stellar-1", "western-differences", "key-differences-intro"],
  },
];

let seenSidereal = false;
let skipDuplicateSidereal = false;
let pendingSummary = false;

for (let i = 0; i < lines.length; i++) {
  const trimmed = lines[i].trim();
  if (!trimmed) continue;

  if (skipDuplicateSidereal) continue;

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
    if (marker.id === "sidereal-zodiac-p3") {
      if (seenSidereal) {
        skipDuplicateSidereal = true;
        continue;
      }
      seenSidereal = true;
    }
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

  if (/^\[\d+\]$/.test(trimmed)) {
    pushHeading(trimmed, 3);
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

/** Articles sourced verbatim from temp-content/p3.txt (link-scrubbed, headings normalized) */
export const p3Articles: WisdomArticle[] = [
${articleBlocks.join(",\n")}
];
`;

writeFileSync(join(__dirname, "../src/lib/education/p3-content.ts"), out);

const articlesPath = join(__dirname, "../src/lib/education/articles-content.ts");
let articlesContent = readFileSync(articlesPath, "utf8");

const removeIds = [
  "western-differences",
  "paradigm-shift",
  "sidereal-zodiac-2",
  "nakshatras-stellar-2",
  "sidereal-zodiac-3",
  "nakshatras-stellar-3",
];

for (const id of removeIds) {
  const re = new RegExp(
    `\\n  \\{\\n    id: "${id}"[\\s\\S]*?\\n  \\},?`,
    "m"
  );
  articlesContent = articlesContent.replace(re, "");
}

if (!articlesContent.includes('from "./p3-content"')) {
  articlesContent = articlesContent.replace(
    'import { p2Articles } from "./p2-content";',
    'import { p2Articles } from "./p2-content";\nimport { p3Articles } from "./p3-content";'
  );
}

if (!articlesContent.includes("...p3Articles")) {
  articlesContent = articlesContent.replace(
    "  ...p2Articles,",
    "  ...p2Articles,\n  ...p3Articles,"
  );
}

writeFileSync(articlesPath, articlesContent);

console.log(`Generated ${articles.length} p3 articles:`);
for (const a of articles) console.log(`  - ${a.title} (${a.id}, ${a.section})`);
