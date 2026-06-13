import type { ContentBlock, AspectRule } from "./types";
import { aspectImages } from "./asset-paths";

export const aspectsIntro: ContentBlock = {
  title: { en: "Drishti — Planetary Gaze", ja: "ドリシュティ — 惑星の視線" },
  paragraphs: [
    {
      en: "Drishti means \"sight\" or \"aspect.\" A Graha influences not only the house it occupies, but also other houses it beholds. Unlike many Western techniques that measure exact degrees, classical Jyotish aspects are counted by whole-sign houses from the planet's position.",
      ja: "ドリシュティは「視線」「アスペクト」の意味です。惑星は座るハウスだけでなく、「見ている」他のハウスにも影響を及ぼします。西洋の度数精密アスペクトとは異なり、古典インド占星術では惑星がいる星座全体のハウスから数えます。",
    },
    {
      en: "Think of each planet casting beams of its nature across the chart. Benefic aspects bring growth and protection; malefic aspects activate pressure, conflict, or necessary discipline in the aspected house topics.",
      ja: "各グラハがチャートにエネルギーの光を放つと考えましょう。吉星のアスペクトは成長と守護を、凶星のアスペクトはプレッシャーや対立、必要な規律をアスペクト先の人生領域に活性化します。",
    },
  ],
};

export const universalAspect: ContentBlock = {
  title: { en: "The Universal 7th Aspect", ja: "すべての惑星の第7アスペクト" },
  paragraphs: [
    {
      en: "Every Graha aspects the 7th house from its seat — a full-strength opposition across the wheel. A planet in the 1st house aspects the 7th; one in the 4th aspects the 10th; one in the 5th aspects the 11th, and so on.",
      ja: "すべての惑星は自分の位置から第7ハウスにアスペクトします。これはオポジション — チャートの輪を横切る直接的で強い視線です。第1ハウスの惑星は第7ハウスを、第4ハウスは第10ハウスを見ます。",
    },
  ],
  bullets: [
    { en: "Sun in House 3 → aspects House 9 (father, dharma, fortune)", ja: "第3ハウスの太陽 → 第9ハウス（父、ダルマ、幸運）にアスペクト" },
    { en: "Moon in House 7 → aspects House 1 (self, body, personality)", ja: "第7ハウスの月 → 第1ハウス（自己、身体、人格）にアスペクト" },
    { en: "Mercury in House 10 → aspects House 4 (home, mother, peace)", ja: "第10ハウスの水星 → 第4ハウス（家庭、母、安らぎ）にアスペクト" },
  ],
};

export const specialAspects: AspectRule[] = [
  {
    planet: { en: "Mars (Mangal)", ja: "火星（マンガル）" },
    houses: "4th, 7th, 8th",
    image: aspectImages.mars,
    description: {
      en: "Mars casts additional Drishti on the 4th, 7th, and 8th houses from its position. This triple gaze heats domestic peace (4th), partnership (7th), and transformation or shared resources (8th). Mars aspects energize — they can manifest as courage, surgery, property disputes, or marital friction depending on dignity and house topics.",
      ja: "火星は座る位置から第4・7・8ハウスに追加のドリシュティを持ちます。家庭（4）、パートナーシップ（7）、変容・共有資源（8）を熱せます。火星のアスペクトは活性化 — 品位とハウスのテーマにより、勇気、外科、不動産の争い、婚姻の摩擦として現れます。",
    },
  },
  {
    planet: { en: "Jupiter (Guru)", ja: "木星（グル）" },
    houses: "5th, 7th, 9th",
    image: aspectImages.jupiter,
    description: {
      en: "Jupiter's special aspects fall on the 5th, 7th, and 9th houses — the trine houses of creativity, children, romance, partnership, and higher wisdom. Guru's gaze expands, protects, and often delivers teachers or grace in those domains. Jupiter aspects are among the most welcomed in chart judgment.",
      ja: "木星の特別なアスペクトは第5・7・9ハウス — 創造性、子供、恋愛、パートナーシップ、高次の智慧のトライン領域です。グル の視線は拡大・守護し、師や恵みをもたらすことが多く、チャート判断で最も歓迎されるアスペクトのひとつです。",
    },
  },
  {
    planet: { en: "Saturn (Shani)", ja: "土星（シャニ）" },
    houses: "3rd, 7th, 10th",
    image: aspectImages.saturn,
    description: {
      en: "Saturn additionally aspects the 3rd, 7th, and 10th houses — courage and siblings (3rd), marriage and contracts (7th), career and public status (10th). Shani's gaze demands responsibility and endurance. It is not merely \"bad\"; Saturn aspects build structures that last when met with patience.",
      ja: "土星は第3・7・10ハウスに追加でアスペクト — 勇気と兄弟（3）、結婚と契約（7）、キャリアと社会的地位（10）です。シャニの視線は責任と忍耐を求めます。「悪い」だけではなく、土星のアスペクトは忍耐と向き合えば長く続く構造を築きます。",
    },
  },
  {
    planet: { en: "Rahu & Ketu", ja: "ラーフとケートゥ" },
    houses: "7th only",
    image: aspectImages.rahuKetu,
    description: {
      en: "The shadow nodes aspect only the 7th house from their placement — a concentrated, obsessive opposition. Rahu's 7th aspect magnifies worldly craving in the aspected house; Ketu's 7th aspect spiritualizes or dissolves matters of that house, sometimes creating detachment in partnerships.",
      ja: "影の交点ラーフとケートゥは第7ハウスにのみアスペクト — 集中した執着的なオポジションです。ラーフの第7アスペクトはアスペクト先の世俗的欲求を増幅し、ケートゥはその領域を霊化または溶解させ、パートナーシップに距離を生むこともあります。",
    },
  },
];

export const conjunctionBlock: ContentBlock = {
  title: { en: "Conjunction (Yuti) — Shared Houses", ja: "合（ユティ）— 同じハウス" },
  paragraphs: [
    {
      en: "When two or more Grahas occupy the same sign and house, they are in conjunction (yuti). Their significations blend — sometimes harmoniously, sometimes like competing voices in one room. The strongest planet (by degrees, dignity, or natural strength) often directs the combined result.",
      ja: "2つ以上の惑星が同じ星座・ハウスにあるとき、合（ユティ）となります。象意が混ざり合い — 調和することも、一つの部屋で争う声のようになることもあります。最も強い惑星（度数、品位、自然の力）がしばしば結果を導きます。",
    },
  ],
  bullets: [
    { en: "Sun + Mercury (Budha-Aditya yoga potential): sharp speech, intellectual pride", ja: "太陽＋水星：鋭い弁舌、知的プライド（ブダ・アディティヤ・ヨーガの可能性）" },
    { en: "Moon + Venus: charm, love of beauty and comfort", ja: "月＋金星：魅力、美と快適さへの愛" },
    { en: "Mars + Saturn: disciplined action; frustration if blocked", ja: "火星＋土星：規律ある行動、阻まれるとフラストレーション" },
    { en: "Jupiter + Rahu (Guru-Chandal yoga): amplified ambition, ethical tension", ja: "木星＋ラーフ（グル・チャンダール・ヨーガ）：野心の増幅、倫理の緊張" },
  ],
};

export const aspectSummaryImage = aspectImages.overview;
