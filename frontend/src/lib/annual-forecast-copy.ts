import type { AppLanguage } from "@/lib/i18n/language";

interface AnnualForecastCopy {
  heading: string;
  intro: string;
  yearLabel: string;
  compute: string;
  computing: string;
  error: string;
  unavailable: string;
  needProfile: string;
  returnMoment: (date: string, time: string) => string;
  ascendantLabel: string;
}

export const annualForecastCopy: Record<AppLanguage, AnnualForecastCopy> = {
  en: {
    heading: "Varshaphala (annual forecast)",
    intro: "The chart cast for the exact moment transiting Sun returns to its natal degree each year — a distinct annual chart read alongside, not instead of, the birth chart.",
    yearLabel: "Year",
    compute: "Compute this year's chart",
    computing: "Computing…",
    error: "Could not compute the annual chart. Please try again.",
    unavailable: "This tool isn't live yet — the backend endpoint it needs is still being reviewed before deployment.",
    needProfile: "Enter birth details in the chart above to see this.",
    returnMoment: (date, time) => `Return moment: ${date}, ${time}`,
    ascendantLabel: "Ascendant",
  },
  hi: {
    heading: "वर्षफल (वार्षिक कुंडली)",
    intro: "वह कुंडली जो हर वर्ष गोचर सूर्य के जन्म अंश पर लौटने के ठीक क्षण के लिए बनाई जाती है — जन्म कुंडली के साथ पढ़ी जाने वाली एक अलग वार्षिक कुंडली, उसकी जगह नहीं।",
    yearLabel: "वर्ष",
    compute: "इस वर्ष की कुंडली बनाएं",
    computing: "गणना हो रही है…",
    error: "वार्षिक कुंडली की गणना नहीं हो सकी। कृपया पुनः प्रयास करें।",
    unavailable: "यह उपकरण अभी सक्रिय नहीं है — इसके लिए आवश्यक बैकएंड एंडपॉइंट अभी समीक्षा में है।",
    needProfile: "इसे देखने के लिए ऊपर कुंडली में जन्म विवरण दर्ज करें।",
    returnMoment: (date, time) => `वापसी का क्षण: ${date}, ${time}`,
    ascendantLabel: "लग्न",
  },
  ja: {
    heading: "ヴァルシャファラ（年間予測）",
    intro: "毎年、トランジットの太陽が出生時の度数に戻る正確な瞬間に作成されるチャートです。出生図の代わりではなく、それと合わせて読む別個の年間チャートです。",
    yearLabel: "年",
    compute: "この年のチャートを作成",
    computing: "計算中…",
    error: "年間チャートを計算できませんでした。もう一度お試しください。",
    unavailable: "このツールはまだ稼働していません。必要なバックエンドのエンドポイントは、公開前のレビュー中です。",
    needProfile: "こちらを表示するには、上のチャートで出生データを入力してください。",
    returnMoment: (date, time) => `回帰の瞬間：${date} ${time}`,
    ascendantLabel: "アセンダント",
  },
  ko: {
    heading: "바르샤팔라(연간 예측)",
    intro: "매년 트랜짓 태양이 출생 시 도수로 돌아오는 정확한 순간에 작성하는 차트입니다. 출생 차트를 대신하는 것이 아니라 함께 읽는 별도의 연간 차트입니다.",
    yearLabel: "연도",
    compute: "이 연도의 차트 계산하기",
    computing: "계산 중…",
    error: "연간 차트를 계산하지 못했습니다. 다시 시도해 주세요.",
    unavailable: "이 도구는 아직 활성화되지 않았습니다. 필요한 백엔드 엔드포인트가 배포 전 검토 중입니다.",
    needProfile: "이를 보려면 위 차트에서 출생 정보를 입력하세요.",
    returnMoment: (date, time) => `회귀 순간: ${date}, ${time}`,
    ascendantLabel: "상승궁",
  },
};
