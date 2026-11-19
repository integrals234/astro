import type { AppLanguage } from "@/lib/i18n/language";

interface GemstoneCopy {
  submit: string;
  computing: string;
  error: string;
  calculateAgain: string;
  caution: string;
  lagnaCardHeading: (planet: string) => string;
  lagnaCardIntro: string;
  weakCardHeading: (planet: string) => string;
  weakCardIntro: string;
  noWeakPlanet: string;
  primaryStoneLabel: string;
  substituteStoneLabel: string;
  metalLabel: string;
  fingerLabel: string;
  dayLabel: string;
}

export const gemstoneCopy: Record<AppLanguage, GemstoneCopy> = {
  en: {
    submit: "Find My Gemstones",
    computing: "Computing…",
    error: "Could not complete the calculation. Please try again.",
    calculateAgain: "Calculate Again",
    caution: "Vedic gemstone therapy is one of the more consequential traditional remedies — a wrong stone is classically believed to backfire rather than simply do nothing. Treat this as a starting point, not a purchase order: consult a professional before wearing anything here, especially the Saturn, Mars, Rahu, or Ketu stones.",
    lagnaCardHeading: (planet) => `Your Lagna lord: ${planet}`,
    lagnaCardIntro: "The standard, broadly-safe classical recommendation — strengthening the ruler of your ascendant.",
    weakCardHeading: (planet) => `Your weakest placement: ${planet} (debilitated)`,
    weakCardIntro: "A second, more targeted recommendation aimed at the one planet this chart shows as classically debilitated.",
    noWeakPlanet: "No planet in this chart reads as classically debilitated — there's no second recommendation to make here, rather than inventing one.",
    primaryStoneLabel: "Primary stone",
    substituteStoneLabel: "Cheaper substitute",
    metalLabel: "Metal",
    fingerLabel: "Finger",
    dayLabel: "Day to start wearing",
  },
  hi: {
    submit: "मेरे रत्न खोजें",
    computing: "गणना हो रही है…",
    error: "गणना पूरी नहीं हो सकी। कृपया पुनः प्रयास करें।",
    calculateAgain: "फिर से गणना करें",
    caution: "वैदिक रत्न चिकित्सा सबसे प्रभावशाली पारंपरिक उपायों में से एक है — शास्त्रीय मान्यता है कि गलत रत्न केवल निष्प्रभावी नहीं बल्कि प्रतिकूल भी हो सकता है। इसे खरीद का आदेश नहीं बल्कि एक शुरुआती बिंदु मानें: यहाँ कुछ भी पहनने से पहले, विशेष रूप से शनि, मंगल, राहु या केतु के रत्नों के लिए, किसी विशेषज्ञ से परामर्श करें।",
    lagnaCardHeading: (planet) => `आपका लग्न स्वामी: ${planet}`,
    lagnaCardIntro: "मानक, व्यापक रूप से सुरक्षित शास्त्रीय सुझाव — आपके लग्न के स्वामी को मजबूत करना।",
    weakCardHeading: (planet) => `आपकी सबसे कमजोर स्थिति: ${planet} (नीच)`,
    weakCardIntro: "एक दूसरा, अधिक लक्षित सुझाव उस एक ग्रह के लिए जो इस कुंडली में शास्त्रीय रूप से नीच दिखाई देता है।",
    noWeakPlanet: "इस कुंडली में कोई ग्रह शास्त्रीय रूप से नीच नहीं दिखता — इसलिए यहाँ कोई दूसरा सुझाव बनाने के बजाय छोड़ दिया गया है।",
    primaryStoneLabel: "मुख्य रत्न",
    substituteStoneLabel: "सस्ता विकल्प",
    metalLabel: "धातु",
    fingerLabel: "उंगली",
    dayLabel: "पहनना शुरू करने का दिन",
  },
  ja: {
    submit: "自分の宝石を調べる",
    computing: "計算中…",
    error: "計算を完了できませんでした。もう一度お試しください。",
    calculateAgain: "もう一度計算する",
    caution: "ヴェーダの宝石療法は、伝統的なレメディの中でも特に影響が大きいもののひとつです。誤った石は、単に効果がないだけでなく逆効果になると古典的に考えられています。これを購入指示ではなく出発点として捉え、特に土星・火星・ラーフ・ケートゥの石については、身につける前に必ず専門家にご相談ください。",
    lagnaCardHeading: (planet) => `あなたのラグナの支配星：${planet}`,
    lagnaCardIntro: "標準的で広く安全とされる古典的な提案——あなたのアセンダントの支配星を強化するものです。",
    weakCardHeading: (planet) => `最も弱い配置：${planet}（減衰）`,
    weakCardIntro: "このチャートで古典的に減衰していると読める惑星ひとつに絞った、より的を絞った第二の提案です。",
    noWeakPlanet: "このチャートには古典的に減衰していると読める惑星がありません。無理に作るのではなく、ここでは第二の提案はいたしません。",
    primaryStoneLabel: "主な石",
    substituteStoneLabel: "安価な代替石",
    metalLabel: "金属",
    fingerLabel: "指",
    dayLabel: "身につけ始める曜日",
  },
  ko: {
    submit: "내 보석 찾기",
    computing: "계산 중…",
    error: "계산을 완료하지 못했습니다. 다시 시도해 주세요.",
    calculateAgain: "다시 계산하기",
    caution: "베다 보석 요법은 전통 레메디 중에서도 특히 영향이 큰 것 중 하나입니다. 잘못된 보석은 단순히 효과가 없는 데 그치지 않고 역효과를 낸다고 고전적으로 여겨집니다. 이를 구매 지시가 아닌 출발점으로 여기고, 특히 토성·화성·라후·케투 보석은 착용 전 반드시 전문가와 상담하세요.",
    lagnaCardHeading: (planet) => `당신의 라그나 지배 행성: ${planet}`,
    lagnaCardIntro: "표준적이고 폭넓게 안전한 고전적 추천 — 당신의 상승궁 지배 행성을 강화합니다.",
    weakCardHeading: (planet) => `가장 약한 배치: ${planet} (쇠약)`,
    weakCardIntro: "이 차트에서 고전적으로 쇠약하다고 읽히는 행성 하나를 겨냥한, 더 구체적인 두 번째 추천입니다.",
    noWeakPlanet: "이 차트에는 고전적으로 쇠약하다고 읽히는 행성이 없습니다 — 억지로 만들기보다 두 번째 추천은 하지 않습니다.",
    primaryStoneLabel: "주 보석",
    substituteStoneLabel: "저렴한 대체 보석",
    metalLabel: "금속",
    fingerLabel: "손가락",
    dayLabel: "착용을 시작할 요일",
  },
};
