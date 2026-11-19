import type { AppLanguage } from "@/lib/i18n/language";

interface NakshatraFinderCopy {
  trustItems: [string, string, string];
  timeHelper: string;
  dontKnowTime: string;
  birthTimeSensitivityLink: string;
  requiredField: string;
  submit: string;
  computing: string;
  error: string;
  forPerson: (name: string) => string;
  resultPadaLabel: string;
  resultRulerLabel: string;
  resultDeityLabel: string;
  resultMoonSignLabel: string;
  padaUnresolved: string;
  calculateAgain: string;
  meaningHeading: string;
  forYourChartHeading: string;
  forYourChartLead: string;
  remediesHeading: string;
  exploreHeading: string;
  exploreChart: string;
  exploreDasha: string;
  exploreTransit: string;
}

export const nakshatraFinderCopy: Record<AppLanguage, NakshatraFinderCopy> = {
  en: {
    trustItems: ["Accurate Vedic calculations", "Instant results", "100% free"],
    timeHelper: "Skip if unknown. Nakshatra pada needs an exact time; the nakshatra itself does not.",
    dontKnowTime: "Don't know your birth time?",
    birthTimeSensitivityLink: "Check which nakshatras are possible for a birth-time window",
    requiredField: "Required",
    submit: "Find My Nakshatra",
    computing: "Computing…",
    error: "Could not complete the calculation. Please try again.",
    forPerson: (name) => `For ${name}`,
    resultPadaLabel: "Pada",
    resultRulerLabel: "Ruling Planet",
    resultDeityLabel: "Deity",
    resultMoonSignLabel: "Moon Sign (Rashi)",
    padaUnresolved: "— (add birth time for pada)",
    calculateAgain: "Calculate Again",
    meaningHeading: "What It Means",
    forYourChartHeading: "For Your Chart",
    forYourChartLead: "At the nakshatra level alone — not a full chart reading — this often shows up as:",
    remediesHeading: "Suggested Remedies",
    exploreHeading: "Go deeper on your chart",
    exploreChart: "See your full birth chart",
    exploreDasha: "Check your Vimshottari dasha",
    exploreTransit: "See current transits",
  },
  hi: {
    trustItems: ["सटीक वैदिक गणना", "तुरंत परिणाम", "100% निःशुल्क"],
    timeHelper: "यदि पता न हो तो छोड़ दें। नक्षत्र पाद के लिए सटीक समय आवश्यक है; नक्षत्र के लिए नहीं।",
    dontKnowTime: "अपना जन्म समय नहीं पता?",
    birthTimeSensitivityLink: "जन्म-समय की सीमा में कौन-कौन से नक्षत्र संभव हैं, यह जाँचें",
    requiredField: "आवश्यक",
    submit: "मेरा नक्षत्र खोजें",
    computing: "गणना हो रही है…",
    error: "गणना पूरी नहीं हो सकी। कृपया पुनः प्रयास करें।",
    forPerson: (name) => `${name} के लिए`,
    resultPadaLabel: "पाद",
    resultRulerLabel: "स्वामी ग्रह",
    resultDeityLabel: "देवता",
    resultMoonSignLabel: "चंद्र राशि",
    padaUnresolved: "— (पाद हेतु जन्म समय जोड़ें)",
    calculateAgain: "फिर से गणना करें",
    meaningHeading: "इसका अर्थ",
    forYourChartHeading: "आपकी कुंडली के लिए",
    forYourChartLead: "केवल नक्षत्र स्तर पर — पूर्ण कुंडली विश्लेषण नहीं — यह अक्सर इस रूप में दिखता है:",
    remediesHeading: "सुझाए गए उपाय",
    exploreHeading: "अपनी कुंडली में और गहराई से जानें",
    exploreChart: "अपनी पूर्ण जन्म-कुंडली देखें",
    exploreDasha: "अपनी विंशोत्तरी दशा जाँचें",
    exploreTransit: "वर्तमान गोचर देखें",
  },
  ja: {
    trustItems: ["正確なヴェーダ計算", "即座に結果表示", "完全無料"],
    timeHelper: "わからなければ空欄で構いません。パダには正確な時刻が必要ですが、ナクシャトラ自体には必要ありません。",
    dontKnowTime: "出生時刻がわかりませんか？",
    birthTimeSensitivityLink: "出生時刻の幅から、どのナクシャトラが考えられるか確認する",
    requiredField: "必須",
    submit: "ナクシャトラを調べる",
    computing: "計算中…",
    error: "計算を完了できませんでした。もう一度お試しください。",
    forPerson: (name) => `${name}さんの場合`,
    resultPadaLabel: "パダ",
    resultRulerLabel: "支配星",
    resultDeityLabel: "神格",
    resultMoonSignLabel: "月星座（ラーシ）",
    padaUnresolved: "— （パダには出生時刻が必要です）",
    calculateAgain: "もう一度計算する",
    meaningHeading: "意味",
    forYourChartHeading: "あなたのチャートについて",
    forYourChartLead: "チャート全体の分析ではなく、ナクシャトラの水準だけで見ると、次のような形で表れやすい傾向があります。",
    remediesHeading: "おすすめのレメディ",
    exploreHeading: "チャートをさらに深く見る",
    exploreChart: "出生チャート全体を見る",
    exploreDasha: "ヴィムショッタリ・ダシャーを確認",
    exploreTransit: "現在のトランジットを見る",
  },
  ko: {
    trustItems: ["정확한 베다 계산", "즉시 결과 확인", "100% 무료"],
    timeHelper: "모른다면 비워두세요. 파다에는 정확한 시각이 필요하지만, 낙샤트라 자체에는 필요하지 않습니다.",
    dontKnowTime: "출생 시각을 모르시나요?",
    birthTimeSensitivityLink: "출생 시간대에서 가능한 낙샤트라를 확인하기",
    requiredField: "필수",
    submit: "내 낙샤트라 찾기",
    computing: "계산 중…",
    error: "계산을 완료하지 못했습니다. 다시 시도해 주세요.",
    forPerson: (name) => `${name}님의 경우`,
    resultPadaLabel: "파다",
    resultRulerLabel: "지배 행성",
    resultDeityLabel: "신격",
    resultMoonSignLabel: "달별자리(라시)",
    padaUnresolved: "— (파다를 보려면 출생 시각을 추가하세요)",
    calculateAgain: "다시 계산하기",
    meaningHeading: "의미",
    forYourChartHeading: "당신의 차트에서는",
    forYourChartLead: "전체 차트 분석이 아닌 낙샤트라 수준에서만 보면, 이는 흔히 다음과 같이 나타납니다.",
    remediesHeading: "추천 레메디",
    exploreHeading: "차트를 더 깊이 살펴보기",
    exploreChart: "전체 출생 차트 보기",
    exploreDasha: "빔쇼타리 다샤 확인하기",
    exploreTransit: "현재 트랜짓 보기",
  },
};
