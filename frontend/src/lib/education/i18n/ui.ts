import type { BilingualText, EducationLang } from "../types";

export const educationUi = {
  heroTitle: { en: "Learn Jyotish", hi: "ज्योतिष सीखें", ja: "ジョーティッシュを学ぶ", ko: "조티시 배우기",},
  learnJyotish: { en: "Learn Jyotish", hi: "ज्योतिष सीखें", ja: "ジョーティッシュを学ぶ", ko: "조티시 배우기",},
  home: { en: "Home", hi: "होम", ja: "ホーム", ko: "홈",},
  generateChart: { en: "Generate Chart", hi: "चार्ट जनरेट करें", ja: "チャート作成", ko: "차트 생성",},
  chart: { en: "Chart", hi: "चार्ट", ja: "チャート", ko: "차트",},
  signIn: { en: "Sign In", hi: "लॉग इन", ja: "ログイン", ko: "로그인",},
  allTopicsJump: { en: "All topics — jump to read", hi: "सभी विषय - पढ़ने के लिए आगे बढ़ें", ja: "すべてのトピック", ko: "모든 주제 - 읽기로 이동",},
  topicsInSection: { en: "Topics in this section", hi: "इस अनुभाग में विषय", ja: "トピック一覧", ko: "이 섹션의 주제",},
  backToTopicList: { en: "Back to topic list", hi: "विषय सूची पर वापस जाएँ", ja: "トピック一覧へ戻る", ko: "주제 목록으로 돌아가기",},
  noContent: { en: "No content available.", hi: "कोई सामग्री उपलब्ध नहीं है.", ja: "コンテンツがありません。", ko: "사용 가능한 콘텐츠가 없습니다.",},
  twelveRashis: { en: "Twelve Rashis", hi: "बारह राशियाँ", ja: "12のラーシ", ko: "열두 라시",},
  rashisTitle: { en: "Rashis (Zodiac Signs)", hi: "राशियाँ (राशि चिन्ह)", ja: "ラーシ（星座）", ko: "Rashis(조디악 징후)",},
  element: { en: "Element", hi: "तत्व", ja: "エレメント", ko: "원소",},
  ruler: { en: "Ruler", hi: "स्वामी ग्रह", ja: "支配星", ko: "지배 행성",},
  symbol: { en: "Symbol", hi: "प्रतीक", ja: "象徴", ko: "상징",},
  body: { en: "Body", hi: "शरीर", ja: "身体", ko: "몸",},
  navagraha: { en: "Navagraha", hi: "नवग्रह", ja: "ナヴァグラハ", ko: "나바그라하",},
  nineGrahas: { en: "The Nine Grahas", hi: "नवग्रह", ja: "9つのグラハ", ko: "아홉 그라하",},
  significations: { en: "Significations", hi: "संकेत", ja: "象意", ko: "의미",},
  lunarMansions: { en: "27 Lunar Mansions", hi: "27 चंद्र नक्षत्र", ja: "27の月宿", ko: "27개 달의 별자리",},
  nakshatras: { en: "Nakshatras", hi: "नक्षत्र", ja: "ナクシャトラ", ko: "낙샤트라",},
  deity: { en: "Deity", hi: "देव", ja: "神", ko: "신",},
  range: { en: "Range", hi: "श्रेणी", ja: "範囲", ko: "범위",},
  drishti: { en: "Drishti", hi: "दृष्टि", ja: "ドリシュティ", ko: "드리시티",},
  aspectsTitle: { en: "Aspects (Drishti)", hi: "दृष्टियाँ (दृष्टि)", ja: "アスペクト（ドリシュティ）", ko: "애스펙트(드리시티)",},
  aspectsHouses: { en: "Aspects houses", hi: "दृष्टि वाले भाव", ja: "アスペクトするハウス", ko: "드리시티하는 궁",},
  liveForecasts: { en: "Live Forecasts", hi: "लाइव पूर्वानुमान", ja: "自動更新", ko: "실시간 예측",},
  horoscope: { en: "Horoscope", hi: "राशिफल", ja: "運勢", ko: "운세",},
  updated: { en: "Updated", hi: "अद्यतन", ja: "最終更新", ko: "업데이트됨",},
  allSigns: { en: "All signs", hi: "सभी राशियाँ", ja: "全ラーシ", ko: "모든 별자리",},
  allTwelveSigns: { en: "All twelve signs — jump to read", hi: "सभी बारह राशियाँ — पढ़ने के लिए चुनें", ja: "12ラーシすべて", ko: "열두 별자리 — 선택해서 읽기",},
  backToSignList: { en: "Back to sign list", hi: "राशि सूची पर वापस जाएँ", ja: "ラーシ一覧へ戻る", ko: "별자리 목록으로 돌아가기",},
  relatedWisdom: { en: "Related Wisdom", hi: "सम्बंधित ज्ञान", ja: "関連する智慧", ko: "관련된 지혜",},
  vedicWisdom: { en: "Vedic Wisdom", hi: "वैदिक ज्ञान", ja: "ヴェーダの智慧", ko: "베다의 지혜",},
} as const satisfies Record<string, BilingualText>;

export type EducationUiKey = keyof typeof educationUi;

export function uiText(key: EducationUiKey, lang: EducationLang): string {
  return educationUi[key][lang];
}
