import type { BilingualText, EducationLang } from "./types";
import type { HoroscopePeriod, HoroscopePeriodType } from "./horoscope-periods";

export type HoroscopeSignId =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

export interface HoroscopeSignMeta {
  id: HoroscopeSignId;
  name: BilingualText;
  sanskrit: BilingualText;
  image: string;
  element: BilingualText;
  ruler: BilingualText;
}

export interface HoroscopeReading {
  signId: HoroscopeSignId;
  periodType: HoroscopePeriodType;
  periodKey: string;
  mood: BilingualText;
  overview: BilingualText;
  love: BilingualText;
  career: BilingualText;
  wellness: BilingualText;
  advice: BilingualText;
}

function seedFromString(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function pick<T>(items: T[], seed: number, slot: number): T {
  return items[(seed + slot) % items.length];
}

function pickN<T>(items: T[], seed: number, count: number, offset = 0): T[] {
  const out: T[] = [];
  for (let i = 0; i < count; i++) {
    out.push(pick(items, seed, offset + i * 7));
  }
  return out;
}

const grahaInfluence = {
  en: ["Mars", "Venus", "Mercury", "the Moon", "the Sun", "Jupiter", "Saturn", "Rahu", "Ketu"],
  ja: ["火星", "金星", "水星", "月", "太陽", "木星", "土星", "ラーフ", "ケートゥ"],
};

const weeklyMoods: BilingualText[] = [
  { en: "Bold & initiating", ja: "大胆で始動的" },
  { en: "Steady & grounded", ja: "安定して地に足がついた" },
  { en: "Curious & communicative", ja: "好奇心旺盛で会話的" },
  { en: "Reflective & nurturing", ja: "内省的で育む" },
  { en: "Radiant & expressive", ja: "輝きと表現力" },
  { en: "Focused & refining", ja: "集中して洗練" },
  { en: "Harmonizing & diplomatic", ja: "調和と外交的" },
  { en: "Intense & transformative", ja: "強烈で変容的" },
  { en: "Expansive & hopeful", ja: "拡大と希望" },
  { en: "Disciplined & strategic", ja: "規律と戦略" },
  { en: "Innovative & visionary", ja: "革新的で先見的" },
  { en: "Dreamy & intuitive", ja: "夢見がちで直感的" },
];

const monthlyThemes: BilingualText[] = [
  { en: "consolidating recent gains", ja: "最近の成果を固める" },
  { en: "opening a new chapter", ja: "新しい章を開く" },
  { en: "healing old patterns", ja: "古いパターンを癒す" },
  { en: "testing your discipline", ja: "規律を試す" },
  { en: "expanding your network", ja: "人脈を広げる" },
  { en: "deepening inner clarity", ja: "内なる明晰さを深める" },
];

const yearlyArcs: BilingualText[] = [
  { en: "a year of courageous reinvention", ja: "勇気ある再構築の年" },
  { en: "a year of patient mastery", ja: "忍耐ある熟達の年" },
  { en: "a year of learning and movement", ja: "学びと移動の年" },
  { en: "a year of emotional maturity", ja: "感情の成熟の年" },
  { en: "a year of visible leadership", ja: "目に見える指導の年" },
  { en: "a year of practical refinement", ja: "実務を磨く年" },
  { en: "a year of partnership and balance", ja: "パートナーシップと均衡の年" },
  { en: "a year of depth and release", ja: "深さと手放しの年" },
  { en: "a year of faith and exploration", ja: "信頼と探求の年" },
  { en: "a year of structure and legacy", ja: "構造と遺産の年" },
  { en: "a year of innovation and community", ja: "革新と共同体の年" },
  { en: "a year of compassion and imagination", ja: "慈悲と想像力の年" },
];

const focusAreas: BilingualText[] = [
  { en: "career momentum", ja: "キャリアの勢い" },
  { en: "home and family", ja: "家庭と家族" },
  { en: "creative expression", ja: "創造的表現" },
  { en: "financial planning", ja: "財務計画" },
  { en: "health routines", ja: "健康習慣" },
  { en: "partnerships", ja: "パートナーシップ" },
  { en: "spiritual practice", ja: "精神的実践" },
  { en: "education and travel", ja: "学びと旅" },
];

const loveWeekly: BilingualText[] = [
  {
    en: "Honest conversations clear the air and invite warmth.",
    ja: "率直な対話が空気を澄ませ、温かさを招きます。",
  },
  {
    en: "Small gestures matter more than grand declarations now.",
    ja: "今は大げさな宣言より小さな気遣いが効きます。",
  },
  {
    en: "Give space where needed; closeness returns naturally.",
    ja: "必要なら距離を。親密さは自然に戻ります。",
  },
  {
    en: "A shared plan strengthens trust in relationships.",
    ja: "共有の計画が関係の信頼を強めます。",
  },
];

const careerWeekly: BilingualText[] = [
  {
    en: "Prioritize one decisive task before scattering energy.",
    ja: "エネルギーを散らす前に、決定的な一つの仕事を優先を。",
  },
  {
    en: "Collaboration opens a door that solo effort cannot.",
    ja: "協力が、単独では開けない扉を開きます。",
  },
  {
    en: "Review details carefully; precision protects reputation.",
    ja: "細部を丁寧に確認を。精密さが評価を守ります。",
  },
  {
    en: "A mentor's perspective helps you choose the wiser path.",
    ja: "師や先輩の視点が、より賢い道の選択を助けます。",
  },
];

const wellnessWeekly: BilingualText[] = [
  {
    en: "Balance activity with rest; the body sets the pace.",
    ja: "活動と休息のバランスを。身体がペースを決めます。",
  },
  {
    en: "Hydration, sleep, and mindful meals restore vitality.",
    ja: "水分、睡眠、意識的な食事が活力を回復させます。",
  },
  {
    en: "Gentle movement clears mental fog better than force.",
    ja: "穏やかな運動が、無理よりも心の霧を晴らします。",
  },
  {
    en: "Reduce screen noise; quiet hours sharpen intuition.",
    ja: "画面の雑音を減らし、静かな時間が直感を研ぎ澄ます。",
  },
];

const adviceWeekly: BilingualText[] = [
  {
    en: "Act on Tuesday–Thursday windows when focus peaks.",
    ja: "集中が高まる火〜木曜の時間帯に動くとよいでしょう。",
  },
  {
    en: "Delay major commitments until after you sleep on them.",
    ja: "大きな決断は一晩寝てからに遅らせて。",
  },
  {
    en: "Say yes to what aligns with your long-term dharma.",
    ja: "長期のダルマ（使命）に合うものには yes を。",
  },
  {
    en: "Let go of one obligation that drains more than it gives.",
    ja: "与える以上に消耗する一つの義務を手放して。",
  },
];

function signTone(signId: HoroscopeSignId, lang: EducationLang): string {
  const tones: Record<HoroscopeSignId, BilingualText> = {
    aries: { en: "pioneering fire", ja: "先駆的な火" },
    taurus: { en: "steady earth", ja: "安定した地" },
    gemini: { en: "curious air", ja: "好奇心の風" },
    cancer: { en: "protective water", ja: "守る水" },
    leo: { en: "noble fire", ja: "高貴な火" },
    virgo: { en: "discerning earth", ja: "識別する地" },
    libra: { en: "harmonizing air", ja: "調和の風" },
    scorpio: { en: "penetrating water", ja: "貫く水" },
    sagittarius: { en: "expansive fire", ja: "拡大の火" },
    capricorn: { en: "ambitious earth", ja: "野心の地" },
    aquarius: { en: "humanitarian air", ja: "人道的な風" },
    pisces: { en: "compassionate water", ja: "慈悲の水" },
  };
  return tones[signId][lang];
}

function buildWeeklyReading(
  sign: HoroscopeSignMeta,
  period: HoroscopePeriod,
  seed: number
): HoroscopeReading {
  const grahaEn = pick(grahaInfluence.en, seed, 1);
  const grahaJa = pick(grahaInfluence.ja, seed, 1);
  const focus = pick(focusAreas, seed, 3);

  const overview: BilingualText = {
    en: `This week (${period.rangeLabel.en}), ${grahaEn} emphasizes ${focus.en} for ${sign.name.en}. Your ${signTone(sign.id, "en")} nature responds well when you move with intention rather than urgency. Midweek brings the clearest window for progress.`,
    ja: `今週（${period.rangeLabel.ja}）、${grahaJa}は${sign.name.ja}にとって${focus.ja}を強調します。${signTone(sign.id, "ja")}の性質は、焦りより意図を持って動くときに力を発揮します。週の中盤が最も進展しやすいでしょう。`,
  };

  return {
    signId: sign.id,
    periodType: "weekly",
    periodKey: period.key,
    mood: pick(weeklyMoods, seed, 5),
    overview,
    love: pick(loveWeekly, seed, 11),
    career: pick(careerWeekly, seed, 17),
    wellness: pick(wellnessWeekly, seed, 23),
    advice: pick(adviceWeekly, seed, 29),
  };
}

function buildMonthlyReading(
  sign: HoroscopeSignMeta,
  period: HoroscopePeriod,
  seed: number
): HoroscopeReading {
  const theme = pick(monthlyThemes, seed, 2);
  const grahaEn = pick(grahaInfluence.en, seed, 4);
  const grahaJa = pick(grahaInfluence.ja, seed, 4);
  const [focusA, focusB] = pickN(focusAreas, seed, 2, 6);

  const overview: BilingualText = {
    en: `For ${period.label.en}, ${sign.name.en} is ${theme.en}. ${grahaEn} shapes the month's rhythm, asking you to balance ${focusA.en} with ${focusB.en}. Your ${signTone(sign.id, "en")} temperament thrives when routines are simple and sincere.`,
    ja: `${period.label.ja}、${sign.name.ja}は${theme.ja}流れにあります。${grahaJa}が今月のリズムを形づけ、${focusA.ja}と${focusB.ja}の均衡を求めます。${signTone(sign.id, "ja")}の気質は、シンプルで誠実な習慣の中で力を発揮します。`,
  };

  const love: BilingualText = {
    en: `Venus cycles highlight sincerity over performance in love. Singles may meet someone through ${focusA.en}; couples benefit from revisiting shared goals.`,
    ja: `金星の巡りが恋愛で演出より誠実さを強調します。独身の方は${focusA.ja}を通じた出会いがあり得ます。カップルは共有の目標を見直すとよいでしょう。`,
  };

  const career: BilingualText = {
    en: `Professional growth favors steady delivery. A project tied to ${focusB.en} gains visibility after the second week. Negotiate only when terms are fully clear.`,
    ja: `職業面では着実な遂行が有利です。${focusB.ja}に関わる仕事は第二週以降に注目を集めます。条件が完全に明確なときだけ交渉を。`,
  };

  const wellness: BilingualText = {
    en: `Monthly wellness improves through rhythm: regular meals, sleep, and short daily walks. Emotional balance follows when you honor limits without guilt.`,
    ja: `今月の健康はリズムで整います。規則正しい食事と睡眠、短い日歩が効きます。限界を罪悪感なく尊重すると感情の均衡も戻ります。`,
  };

  const advice: BilingualText = {
    en: `Set one measurable goal for ${period.label.en} and review it each Sunday. Let ${sign.ruler.en} guide patience over pressure.`,
    ja: `${period.label.ja}の測定可能な目標を一つ立て、毎週日曜に見直して。${sign.ruler.ja}の力を借り、プレッシャーより忍耐を選んで。`,
  };

  return {
    signId: sign.id,
    periodType: "monthly",
    periodKey: period.key,
    mood: pick(weeklyMoods, seed, 8),
    overview,
    love,
    career,
    wellness,
    advice,
  };
}

function buildYearlyReading(
  sign: HoroscopeSignMeta,
  period: HoroscopePeriod,
  seed: number
): HoroscopeReading {
  const arc = pick(yearlyArcs, seed, 1);
  const grahaEn = pick(grahaInfluence.en, seed, 3);
  const grahaJa = pick(grahaInfluence.ja, seed, 3);
  const [focusA, focusB, focusC] = pickN(focusAreas, seed, 3, 9);

  const overview: BilingualText = {
    en: `${period.label.en} marks ${arc.en} for ${sign.name.en}. ${grahaEn} and ${sign.ruler.en} together emphasize ${focusA.en}, ${focusB.en}, and ${focusC.en}. Your ${signTone(sign.id, "en")} gifts mature when you commit to fewer priorities and finish what you start.`,
    ja: `${period.label.ja}は${sign.name.ja}にとって${arc.ja}。${grahaJa}と${sign.ruler.ja}が共に${focusA.ja}、${focusB.ja}、${focusC.ja}を強調します。${signTone(sign.id, "ja")}の才能は、優先を絞り始めたことを完遂するときに成熟します。`,
  };

  const love: BilingualText = {
    en: `Relationships evolve through honesty and pacing. Mid-year favors deepening trust; year-end invites reflection on what partnership truly means to you.`,
    ja: `関係は誠実さとペース配分で進化します。年の中盤は信頼を深める時期、年末はパートナーシップの本当の意味を振り返る時期です。`,
  };

  const career: BilingualText = {
    en: `Career themes build in three waves: planning in spring, execution in summer, consolidation in autumn. Recognition arrives when craftsmanship meets consistency.`,
    ja: `キャリアは三つの波で進みます。春は計画、夏は実行、秋は統合。職人気質と一貫性が出会ったときに評価が訪れます。`,
  };

  const wellness: BilingualText = {
    en: `Long-term vitality depends on sustainable habits, not bursts of intensity. Seasonal adjustments to diet and rest keep your ${signTone(sign.id, "en")} constitution balanced.`,
    ja: `長期的な活力は激しい波より持続可能な習慣にかかります。季節に合わせた食事と休息の調整が、${signTone(sign.id, "ja")}の体質を保ちます。`,
  };

  const advice: BilingualText = {
    en: `Choose one theme for ${period.label.en}: learn, build, heal, or lead. Revisit it at each solstice and equinox to stay aligned with Jyotish timing.`,
    ja: `${period.label.ja}のテーマを一つ選び（学ぶ・築く・癒す・導く）、至点と二分点ごとに見直してインド占星のタイミングと調和を。`,
  };

  return {
    signId: sign.id,
    periodType: "yearly",
    periodKey: period.key,
    mood: pick(yearlyArcs, seed, 12),
    overview,
    love,
    career,
    wellness,
    advice,
  };
}

export function generateHoroscopeReading(
  sign: HoroscopeSignMeta,
  period: HoroscopePeriod
): HoroscopeReading {
  const seed = seedFromString(`${period.type}:${period.key}:${sign.id}`);

  if (period.type === "weekly") return buildWeeklyReading(sign, period, seed);
  if (period.type === "monthly") return buildMonthlyReading(sign, period, seed);
  return buildYearlyReading(sign, period, seed);
}

export function generateAllHoroscopes(
  signs: HoroscopeSignMeta[],
  period: HoroscopePeriod
): HoroscopeReading[] {
  return signs.map((sign) => generateHoroscopeReading(sign, period));
}

export const horoscopeIntro: BilingualText = {
  en: "Solar-sign horoscopes for all twelve Rashis, refreshed automatically for the current week, month, and year. Forecasts blend Jyotish symbolism with the rhythm of passing time — select a period and sign to read yours.",
  ja: "12のラーシすべてのソーラーサイン運勢。現在の週・月・年に合わせて自動更新されます。インド占星の象徴と時間のリズムを組み合わせた予測 — 期間と星座を選んでお読みください。",
};

export const horoscopeSectionLabels = {
  overview: { en: "Overview", ja: "概要" } satisfies BilingualText,
  love: { en: "Love", ja: "恋愛" } satisfies BilingualText,
  career: { en: "Career", ja: "キャリア" } satisfies BilingualText,
  wellness: { en: "Wellness", ja: "健康" } satisfies BilingualText,
  advice: { en: "Guidance", ja: "指針" } satisfies BilingualText,
  mood: { en: "Mood", ja: "ムード" } satisfies BilingualText,
};
