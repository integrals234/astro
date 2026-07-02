import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "../../temp-content/p1.txt");
const raw = readFileSync(root, "utf8");

/** @type {{ title: string; blocks: { type: string; level?: number; text: string }[] }[]} */
const articles = [];

/** @type {{ title: string; blocks: { type: string; level?: number; text: string }[] } | null} */
let current = null;

function flush() {
  if (current && current.blocks.length > 0) {
    articles.push(current);
  }
  current = null;
}

function scrub(text) {
  if (/https?:\/\/|www\./i.test(text)) return "";
  if (/wikipedia/i.test(text)) return "";
  if (/\bvisit\b[^.!?]*\bwebsite/i.test(text)) return "";
  return text.trim();
}

function pushParagraph(text) {
  const cleaned = scrub(text);
  if (!cleaned) return;
  if (!current) return;
  current.blocks.push({ type: "paragraph", text: cleaned });
}

function pushHeading(text, level) {
  const cleaned = scrub(text);
  if (!cleaned || !current) return;
  current.blocks.push({ type: "heading", level, text: cleaned });
}

function startArticle(title) {
  flush();
  current = { title: title.trim(), blocks: [] };
  current.blocks.push({ type: "heading", level: 2, text: title.trim() });
}

const STANDALONE_TITLES = new Set([
  "Jyotish Astrology – Quick Facts",
  "Benefits of Jyotish",
  "Key Differences Between Vedic and Western Astrology",
  "Origins of Vedic Astrology",
  "Vedic Astrology Explained: Jyotish",
  "Vedic Astrology FAQs 1",
  "Vedic Astrology FAQs 2",
  "Vedic Astrology FAQs 3",
]);

const SKIP_TITLES = new Set(["Jyotish Astrology – Quick Facts"]);

for (const line of raw.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed) continue;

  if (trimmed.startsWith("# ")) {
    startArticle(trimmed.slice(2));
    continue;
  }

  if (trimmed.startsWith("### ")) {
    pushHeading(trimmed.slice(4), 3);
    continue;
  }

  if (STANDALONE_TITLES.has(trimmed)) {
    if (SKIP_TITLES.has(trimmed)) continue;
    startArticle(trimmed);
    continue;
  }

  pushParagraph(trimmed);
}

flush();

const SLUG_MAP = {
  "Welcome to the World of Vedic Astrology – Jyotish": "welcome",
  "Vedic Astrology's Relationship with Western Astrology": "vedic-western-relationship",
  "Vedic Astrology's Predictive Capabilities": "predictive-capabilities",
  "Vedic Astrology's Preventive Capabilities": "preventive-capabilities",
  "Benefits of Jyotish": "benefits-of-jyotish",
  "Key Differences Between Vedic and Western Astrology": "key-differences-intro",
  "Origins of Vedic Astrology": "origins-intro",
  "Vedic Astrology Explained: Jyotish": "jyotish-explained",
  "Vedic Astrology FAQs 1": "faqs-1",
  "Vedic Astrology FAQs 2": "faqs-2",
  "Vedic Astrology FAQs 3": "faqs-3",
};

const RELATED = {
  welcome: ["jyotish-explained", "benefits-of-jyotish", "faqs-1"],
  "vedic-western-relationship": ["key-differences-intro", "faqs-1", "paradigm-shift"],
  "predictive-capabilities": ["mahadashas", "transits", "jyotish-and-karma"],
  "preventive-capabilities": ["planetary-antidotes", "gemstones", "mantras"],
  "benefits-of-jyotish": ["jyotish-explained", "predictive-capabilities", "preventive-capabilities"],
  "key-differences-intro": ["vedic-western-relationship", "sidereal-zodiac-1", "faqs-2"],
  "origins-intro": ["origins-of-jyotish", "jyotish-explained", "faqs-2"],
  "jyotish-explained": ["benefits-of-jyotish", "planetary-antidotes", "nakshatras-stellar-1"],
  "faqs-1": ["faqs-2", "faqs-3", "jyotish-explained"],
  "faqs-2": ["faqs-1", "faqs-3", "key-differences-intro"],
  "faqs-3": ["faqs-1", "faqs-2", "gemstones"],
};

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function bilingual(text) {
  return `{ en: \`${escapeTs(text)}\`, ja: \`${escapeTs(text)}\` }`;
}

const articleBlocks = articles.map((article) => {
  const id = SLUG_MAP[article.title];
  if (!id) throw new Error(`Unknown article title: ${article.title}`);
  const related = RELATED[id] ?? [];
  const blocksTs = article.blocks
    .map((b) => {
      if (b.type === "heading") {
        return `      { type: "heading", level: ${b.level}, text: ${bilingual(b.text)} },`;
      }
      return `      { type: "paragraph", text: ${bilingual(b.text)} },`;
    })
    .join("\n");

  return `  {
    id: "${id}",
    section: "introduction",
    title: ${bilingual(article.title)},
    related: ${JSON.stringify(related)},
    blocks: [
${blocksTs}
    ],
  }`;
});

const out = `import type { WisdomArticle } from "./types";

/** Introduction articles sourced verbatim from temp-content/p1.txt */
export const p1IntroductionArticles: WisdomArticle[] = [
${articleBlocks.join(",\n")}
];
`;

writeFileSync(join(__dirname, "../src/lib/education/p1-content.ts"), out);

// Merge into articles-content.ts (line-based splice — avoids nested-array parse bugs)
const articlesPath = join(__dirname, "../src/lib/education/articles-content.ts");
const articlesLines = readFileSync(articlesPath, "utf8").split("\n");
const restStart = articlesLines.findIndex((line) =>
  line.includes('id: "origins-of-jyotish"')
);
if (restStart < 0) {
  throw new Error("Could not find origins-of-jyotish anchor in articles-content.ts");
}
const articleOpenLine = restStart - 1;
const footerStart = articlesLines.findIndex((line) => line.trim() === "];");
if (footerStart < 0) throw new Error("Could not find wisdomArticles array end");

const merged = [
  'import type { WisdomArticle } from "./types";',
  'import { p1IntroductionArticles } from "./p1-content";',
  "",
  "export const wisdomArticles: WisdomArticle[] = [",
  "  ...p1IntroductionArticles,",
  ...articlesLines.slice(articleOpenLine, footerStart + 1),
  "",
  ...articlesLines.slice(footerStart + 1),
].join("\n");

writeFileSync(articlesPath, merged);
console.log(`Generated ${articles.length} p1 articles and merged into articles-content.ts`);
