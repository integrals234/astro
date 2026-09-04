import type { AppLanguage } from "@/lib/i18n/language";

interface CareerReportCopy {
  submit: string;
  computing: string;
  error: string;
  calculateAgain: string;
  intro: string;
  lagnaHeading: (sign: string) => string;
  planetsHeading: string;
  planetsIntro: string;
  houseLabel: (house: number) => string;
}

export const careerReportCopy: Record<AppLanguage, CareerReportCopy> = {
  en: {
    submit: "Find My Career Report",
    computing: "Computing…",
    error: "Could not complete the calculation. Please try again.",
    calculateAgain: "Calculate Again",
    intro: "Based on your D10 (Dashamsha) chart — the classical divisional chart read specifically for career and profession.",
    lagnaHeading: (sign) => `Your D10 Lagna: ${sign}`,
    planetsHeading: "Planets in your Career Chart",
    planetsIntro: "Each planet's house here is counted from your D10 Lagna, not your regular ascendant.",
    houseLabel: (house) => `House ${house}`,
  },
  hi: {
    submit: "मेरी करियर रिपोर्ट खोजें",
    computing: "गणना हो रही है…",
    error: "गणना पूरी नहीं हो सकी। कृपया पुनः प्रयास करें।",
    calculateAgain: "फिर से गणना करें",
    intro: "आपकी D10 (दशमांश) कुंडली पर आधारित — विशेष रूप से करियर और पेशे के लिए पढ़ी जाने वाली शास्त्रीय वर्ग कुंडली।",
    lagnaHeading: (sign) => `आपका D10 लग्न: ${sign}`,
    planetsHeading: "आपकी करियर कुंडली में ग्रह",
    planetsIntro: "यहां प्रत्येक ग्रह का भाव आपके सामान्य लग्न से नहीं, बल्कि आपके D10 लग्न से गिना गया है।",
    houseLabel: (house) => `भाव ${house}`,
  },
  ja: {
    submit: "キャリアレポートを見る",
    computing: "計算中…",
    error: "計算を完了できませんでした。もう一度お試しください。",
    calculateAgain: "もう一度計算する",
    intro: "D10（ダシャムシャ）チャート——キャリアや職業のために特別に読まれる古典的な分割図に基づいています。",
    lagnaHeading: (sign) => `あなたのD10ラグナ：${sign}`,
    planetsHeading: "キャリアチャート内の惑星",
    planetsIntro: "ここでの各惑星のハウスは、通常のアセンダントではなくD10ラグナから数えています。",
    houseLabel: (house) => `第${house}室`,
  },
  ko: {
    submit: "내 커리어 리포트 보기",
    computing: "계산 중…",
    error: "계산을 완료하지 못했습니다. 다시 시도해 주세요.",
    calculateAgain: "다시 계산하기",
    intro: "D10(다샴샤) 차트에 기반합니다 — 커리어와 직업을 위해 특별히 읽는 고전 분할 차트입니다.",
    lagnaHeading: (sign) => `당신의 D10 라그나: ${sign}`,
    planetsHeading: "커리어 차트 속 행성",
    planetsIntro: "여기서 각 행성의 하우스는 일반 상승궁이 아닌 D10 라그나를 기준으로 셉니다.",
    houseLabel: (house) => `${house}하우스`,
  },
};
