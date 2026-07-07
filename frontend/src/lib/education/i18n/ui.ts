import type { EducationLang } from "../types";

export const educationUi = {
  heroTitle: { en: "Learn Jyotish", ja: "占星術を学ぶ" },
  learnJyotish: { en: "Learn Jyotish", ja: "占星術を学ぶ" },
  switchToJa: { en: "日本語", ja: "日本語" },
  switchToEn: { en: "English", ja: "English" },
  home: { en: "Home", ja: "ホーム" },
  generateChart: { en: "Generate Chart", ja: "チャート作成" },
  chart: { en: "Chart", ja: "チャート" },
  signIn: { en: "Sign In", ja: "ログイン" },
  allTopicsJump: { en: "All topics — jump to read", ja: "すべてのトピック" },
  topicsInSection: { en: "Topics in this section", ja: "トピック一覧" },
  backToTopicList: { en: "Back to topic list", ja: "トピック一覧へ戻る" },
  noContent: { en: "No content available.", ja: "コンテンツがありません。" },
  twelveRashis: { en: "Twelve Rashis", ja: "12のラーシ" },
  rashisTitle: { en: "Rashis (Zodiac Signs)", ja: "ラーシ（星座）" },
  element: { en: "Element", ja: "元素" },
  ruler: { en: "Ruler", ja: "支配星" },
  symbol: { en: "Symbol", ja: "象徴" },
  body: { en: "Body", ja: "身体" },
  navagraha: { en: "Navagraha", ja: "ナヴァグラハ" },
  nineGrahas: { en: "The Nine Grahas", ja: "9つの惑星（グラハ）" },
  significations: { en: "Significations", ja: "象意" },
  lunarMansions: { en: "27 Lunar Mansions", ja: "月の27宿" },
  nakshatras: { en: "Nakshatras", ja: "ナクシャトラ" },
  deity: { en: "Deity", ja: "神" },
  range: { en: "Range", ja: "範囲" },
  drishti: { en: "Drishti", ja: "ドリシュティ" },
  aspectsTitle: { en: "Aspects (Drishti)", ja: "アスペクト（ドリシュティ）" },
  aspectsHouses: { en: "Aspects houses", ja: "アスペクト先" },
  liveForecasts: { en: "Live Forecasts", ja: "自動更新" },
  horoscope: { en: "Horoscope", ja: "ホロスコープ" },
  updated: { en: "Updated", ja: "最終更新" },
  allSigns: { en: "All signs", ja: "全ラーシ" },
  allTwelveSigns: { en: "All twelve signs — jump to read", ja: "12ラーシすべて" },
  backToSignList: { en: "Back to sign list", ja: "ラーシ一覧へ戻る" },
  relatedWisdom: { en: "Related Wisdom", ja: "関連する智慧" },
  vedicWisdom: { en: "Vedic Wisdom", ja: "ヴェーダの智慧" },
} as const satisfies Record<string, { en: string; ja: string }>;

export type EducationUiKey = keyof typeof educationUi;

export function uiText(key: EducationUiKey, lang: EducationLang): string {
  return educationUi[key][lang];
}
