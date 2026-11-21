import type { AppLanguage } from "@/lib/i18n/language";

interface AnnualForecastCopy {
  intro: string;
  yearLabel: string;
  compute: string;
  returnMoment: (date: string, time: string) => string;
  ascendantLabel: string;
}

export const annualForecastCopy: Record<AppLanguage, AnnualForecastCopy> = {
  en: {
    intro: "The chart cast for the exact moment transiting Sun returns to its natal degree each year — a distinct annual chart read alongside, not instead of, the birth chart.",
    yearLabel: "Year",
    compute: "Compute this year's chart",
    returnMoment: (date, time) => `Return moment: ${date}, ${time}`,
    ascendantLabel: "Ascendant",
  },
  hi: {
    intro: "वह कुंडली जो हर वर्ष गोचर सूर्य के जन्म अंश पर लौटने के ठीक क्षण के लिए बनाई जाती है — जन्म कुंडली के साथ पढ़ी जाने वाली एक अलग वार्षिक कुंडली, उसकी जगह नहीं।",
    yearLabel: "वर्ष",
    compute: "इस वर्ष की कुंडली बनाएं",
    returnMoment: (date, time) => `वापसी का क्षण: ${date}, ${time}`,
    ascendantLabel: "लग्न",
  },
  ja: {
    intro: "毎年、トランジットの太陽が出生時の度数に戻る正確な瞬間に作成されるチャートです。出生図の代わりではなく、それと合わせて読む別個の年間チャートです。",
    yearLabel: "年",
    compute: "この年のチャートを作成",
    returnMoment: (date, time) => `回帰の瞬間：${date} ${time}`,
    ascendantLabel: "アセンダント",
  },
  ko: {
    intro: "매년 트랜짓 태양이 출생 시 도수로 돌아오는 정확한 순간에 작성하는 차트입니다. 출생 차트를 대신하는 것이 아니라 함께 읽는 별도의 연간 차트입니다.",
    yearLabel: "연도",
    compute: "이 연도의 차트 계산하기",
    returnMoment: (date, time) => `회귀 순간: ${date}, ${time}`,
    ascendantLabel: "상승궁",
  },
};
