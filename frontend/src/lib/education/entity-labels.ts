import type { BilingualText, RashiEntry } from "./types";

/**
 * Attribute labels for the entity pages (Phase 3.5).
 *
 * `rashiSectionLabels` used to be a private const inside EducationalHub. It
 * lives here now so the hub and the standalone rashi pages read the same
 * strings — two copies would drift, and the localisation audit would only
 * catch it if both happened to stay complete.
 */
export const rashiSectionLabels: Record<
  keyof RashiEntry["sections"],
  BilingualText
> = {
  nature: { en: "Nature", hi: "प्रकृति", ja: "性質", ko: "자연" },
  career: { en: "Career", hi: "आजीविका", ja: "キャリア", ko: "직업" },
  relationships: { en: "Relationships", hi: "रिश्ते", ja: "人間関係", ko: "관계" },
  romance: { en: "Romance", hi: "रोमांस", ja: "恋愛", ko: "로맨스" },
  health: { en: "Health", hi: "स्वास्थ्य", ja: "健康", ko: "건강" },
  decans: { en: "Decans", hi: "डेक्कन", ja: "デカン", ko: "데칸" },
};

export const entityLabels = {
  guna: { en: "Guna", hi: "गुण", ja: "グナ", ko: "구나" },
  dates: { en: "Dates", hi: "तिथियाँ", ja: "期間", ko: "기간" },
  traits: { en: "Traits", hi: "विशेषताएँ", ja: "特徴", ko: "특성" },
  qualities: { en: "Qualities", hi: "गुण-धर्म", ja: "資質", ko: "자질" },
  natureAttribute: { en: "Nature", hi: "प्रकृति", ja: "性質", ko: "성질" },
  nakshatrasTitle: {
    en: "Nakshatras",
    hi: "नक्षत्र",
    ja: "ナクシャトラ（月宿）",
    ko: "낙샤트라",
  },
  nakshatrasDescription: {
    en: "The 27 lunar mansions of Vedic astrology — meaning, ruler, deity, and symbolism for each.",
    hi: "वैदिक ज्योतिष के 27 चंद्र नक्षत्र — प्रत्येक का अर्थ, स्वामी, देवता और प्रतीक।",
    ja: "インド占星術の27の月宿（ナクシャトラ）——それぞれの意味・支配星・神格・象徴。",
    ko: "베다 점성술의 27개 달의 별자리 — 각각의 의미, 지배 행성, 신격, 상징.",
  },
  rashisTitleLong: {
    en: "Rashis",
    hi: "राशियाँ",
    ja: "ラーシ（12星座）",
    ko: "라시",
  },
  rashisDescription: {
    en: "The twelve signs of the sidereal zodiac — nature, ruler, element, and how each shapes a chart.",
    hi: "निरयण राशिचक्र की बारह राशियाँ — प्रकृति, स्वामी, तत्व और कुंडली पर प्रभाव।",
    ja: "サイデリアル黄道十二星座（ラーシ）——性質・支配星・エレメント、そしてチャートへの影響。",
    ko: "항성 황도 십이궁(라시) — 성질, 지배 행성, 원소, 그리고 차트에 미치는 영향.",
  },
  grahasTitle: {
    en: "Grahas",
    hi: "ग्रह",
    ja: "グラハ（9惑星）",
    ko: "그라하",
  },
  grahasDescription: {
    en: "The nine grahas of Jyotish — what each planet signifies and how it is read in a chart.",
    hi: "ज्योतिष के नवग्रह — प्रत्येक ग्रह का संकेत और कुंडली में उसका पठन।",
    ja: "ジョーティッシュの9つのグラハ——各惑星の象意と、チャートでの読み方。",
    ko: "조티시의 아홉 그라하 — 각 행성의 의미와 차트에서 읽는 법.",
  },
  relatedEntities: {
    en: "Related",
    hi: "संबंधित",
    ja: "関連",
    ko: "관련",
  },
  allEntries: {
    en: "All entries",
    hi: "सभी प्रविष्टियाँ",
    ja: "一覧",
    ko: "전체 목록",
  },
} as const satisfies Record<string, BilingualText>;
