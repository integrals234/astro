import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(__dirname, "../../temp-content/p2.txt"), "utf8");
const lines = raw.split("\n");

function scrub(text) {
  let t = text.trim();
  if (!t) return "";
  if (/https?:\/\/|www\./i.test(t)) return "";
  if (/\bvisit\b[^.!?]*\bwebsite/i.test(t)) return "";
  if (/^\[1\]–\[6\] Remain unchanged/i.test(t)) return "";

  // Remove sentences containing Wikipedia / external-site references; keep the rest
  if (/wikipedia|According to Wikipedia/i.test(t)) {
    const footnoteMatch = t.match(/^(\[\d+\])\s*/);
    t = t
      .split(/(?<=[.!?])\s+/)
      .filter((sentence) => !/wikipedia|According to Wikipedia/i.test(sentence))
      .join(" ")
      .trim();
    if (footnoteMatch && t && !t.startsWith(footnoteMatch[1])) {
      t = `${footnoteMatch[1]} ${t}`;
    }
    if (!t) return "";
  }

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
  /^Origins of Vedic Astrology and the Process/,
  /^Modern .Download. Analogy/,
  /^Maharishi Parashara/,
  /^Vedic Astrology, Karma and Reincarnation$/,
  /^Prediction and .Prevention. in Jyotish$/,
  /^1\. Detecting Returning Karmas/,
  /^2\. Deflecting Returning Karmas/,
  /^3\. Spiritual Practices Deflect/,
  /^Jyotish Uses the Fixed Sidereal Zodiac$/,
  /^Ayanamsa – Angular Difference/,
  /^Nakshatras –/,
  /^Planetary ['']Forces[''] Don/,
  /^Key Points in Support/,
  /^Jyotish Astrologers Interpret/,
  /^Forecasting Analogies in Vedic Astrology$/,
  /^Weather Forecasting Analogy$/,
  /^Seed Development Analogy$/,
  /^Road Map Analogy$/,
  /^Relationship Between the Cosmos and the Individual$/,
  /^Planetary Antidotes \(Upaye\)/,
  /^Wearing Gemstones as Planetary Antidotes$/,
  /^Planet and Gemstone Associations/,
  /^Semi-Precious Gemstone Equivalents$/,
  /^Wearing Gemstones Based on our Ascendant$/,
  /^Chanting Planetary Related Mantras/,
  /^Basic Planetary Mantras to Chant$/,
  /^Mantra for Harmony Between/,
  /^General Mantras for Removing/,
  /^Acts of Charity to Balance/,
  /^Conducting Vedic Rituals to Remove/,
  /^Footnotes$/,
  /^Categories of Karma$/,
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
  { match: (l) => l === "Jyotish – Origins of Vedic Astrology", id: "origins-of-jyotish", section: "introduction", title: "Jyotish – Origins of Vedic Astrology", related: ["origins-intro", "jyotish-and-karma", "paradigm-shift"] },
  { match: (l) => l === "Jyotish and Karma", id: "jyotish-and-karma", section: "introduction", title: "Jyotish and Karma", related: ["three-types-karma", "predictive-capabilities", "planetary-antidotes"] },
  { match: (l) => l.startsWith("Three Types of Karma"), id: "three-types-karma", section: "introduction", title: "Three Types of Karma – Sanchita, Prarabdha and Agami", related: ["jyotish-and-karma", "mahadashas", "planetary-antidotes"] },
  { match: (l) => l.startsWith("Nakshatras –"), id: "nakshatras-stellar-1", section: "nakshatras", title: "Nakshatras – Stellar Constellations", related: ["sidereal-zodiac-p3", "mahadashas", "twelve-houses"] },
  { match: (l) => l === "Jyotish – Planetary Forces", id: "planetary-forces", section: "introduction", title: "Jyotish – Planetary Forces", related: ["natural-benefics-malefics", "planetary-strengths", "origins-of-jyotish"] },
  { match: (l) => l === "Jyotish – Forecasting Analogies", id: "forecasting-analogies-1", section: "introduction", title: "Jyotish – Forecasting Analogies", related: ["predictive-capabilities", "cosmos-individual-1", "jyotish-and-karma"] },
  { match: (l) => l === "Relationship Between the Cosmos and the Individual", id: "cosmos-individual-1", section: "introduction", title: "Relationship Between the Cosmos and the Individual", related: ["forecasting-analogies-1", "planetary-forces", "origins-of-jyotish"] },
  { match: (l) => l === "Planetary Antidotes in Jyotish", id: "planetary-antidotes", section: "remedies", title: "Planetary Antidotes in Jyotish", related: ["gemstones", "mantras", "preventive-capabilities"] },
  { match: (l) => l === "Wearing Gemstones as Planetary Antidotes", id: "gemstones", section: "remedies", title: "Wearing Gemstones as Planetary Antidotes", related: ["planetary-antidotes", "mantras", "natural-benefics-malefics"] },
  { match: (l) => l === "Chanting Planetary Related Mantras to Remove Negative Karma", id: "mantras", section: "remedies", title: "Chanting Planetary Related Mantras to Remove Negative Karma", related: ["gemstones", "vedic-rituals", "charity"] },
  { match: (l) => l === "Acts of Charity to Balance Planetary Energies", id: "charity", section: "remedies", title: "Acts of Charity to Balance Planetary Energies", related: ["planetary-antidotes", "vedic-rituals", "jyotish-and-karma"] },
  { match: (l) => l === "Conducting Vedic Rituals to Remove Negativity", id: "vedic-rituals", section: "remedies", title: "Conducting Vedic Rituals to Remove Negativity", related: ["mantras", "charity", "planetary-antidotes"] },
];

let skipDuplicateForecasting = false;
let seenForecasting = false;
let pendingSummary = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();
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
    if (marker.id === "forecasting-analogies-1") {
      if (seenForecasting) {
        skipDuplicateForecasting = true;
        continue;
      }
      seenForecasting = true;
      skipDuplicateForecasting = false;
    } else if (marker.id === "cosmos-individual-1" && skipDuplicateForecasting) {
      continue;
    } else {
      skipDuplicateForecasting = false;
    }
    startArticle(marker.id, marker.section, marker.title, marker.related);
    continue;
  }

  if (skipDuplicateForecasting) continue;

  if (!current) continue;

  if (isSummary(trimmed)) {
    const summaryBody = trimmed.slice("Summary:".length).trim();
    pushParagraph(
      summaryBody ? `Summary: ${summaryBody}` : trimmed
    );
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

  // Footnote markers like [1], [2] as small headings
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

/** Articles sourced verbatim from temp-content/p2.txt (link-scrubbed, headings normalized) */
export const p2Articles: WisdomArticle[] = [
${articleBlocks.join(",\n")}
];
`;

writeFileSync(join(__dirname, "../src/lib/education/p2-content.ts"), out);

// Merge into articles-content.ts
const articlesPath = join(__dirname, "../src/lib/education/articles-content.ts");
const articlesLines = readFileSync(articlesPath, "utf8").split("\n");

const restStart = articlesLines.findIndex((line) =>
  line.includes('id: "planetary-strengths"')
);
if (restStart < 0) {
  throw new Error('Could not find planetary-strengths anchor in articles-content.ts');
}
const articleOpenLine = restStart - 1;

const footerStart = articlesLines.findIndex((line) => line.trim() === "];");
if (footerStart < 0) throw new Error("Could not find wisdomArticles array end");

const hasP2Import = articlesLines.some((l) => l.includes('from "./p2-content"'));
const hasP3Import = articlesLines.some((l) => l.includes('from "./p3-content"'));
const hasP3Spread = articlesLines.some((l) => l.includes("...p3Articles"));

const header = [
  'import type { WisdomArticle } from "./types";',
  'import { p1IntroductionArticles } from "./p1-content";',
  hasP2Import ? articlesLines.find((l) => l.includes('from "./p2-content"')) : 'import { p2Articles } from "./p2-content";',
  hasP3Import ? articlesLines.find((l) => l.includes('from "./p3-content"')) : 'import { p3Articles } from "./p3-content";',
  "",
  "export const wisdomArticles: WisdomArticle[] = [",
  "  ...p1IntroductionArticles,",
  "  ...p2Articles,",
  hasP3Spread ? articlesLines.find((l) => l.includes("...p3Articles")) : "  ...p3Articles,",
];

const merged = [
  ...header,
  ...articlesLines.slice(articleOpenLine, footerStart + 1),
  "",
  ...articlesLines.slice(footerStart + 1),
].join("\n");

writeFileSync(articlesPath, merged);

console.log(`Generated ${articles.length} p2 articles:`);
for (const a of articles) console.log(`  - ${a.title} (${a.id}, ${a.section})`);
