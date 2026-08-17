import type { AppLanguage } from "@/lib/i18n/language";

interface ChartPreviewCopy {
  needDetails: string;
  generate: string;
  openFullChart: string;
}

export const chartPreviewCopy: Record<AppLanguage, ChartPreviewCopy> = {
  ja: {
    needDetails:
      "チャートを表示するには出生データが必要です。下に入力すると、その場でチャートが作成されます。一度入力すれば、他のツールでも再入力は不要です。",
    generate: "チャートを作成",
    openFullChart: "すべてのチャートを見る（フルワークスペース）→",
  },
  en: {
    needDetails:
      "Birth details are needed to draw the chart. Enter them below and it appears right here — once entered, every other tool on this site uses them without asking again.",
    generate: "Draw my chart",
    openFullChart: "Open the full chart workspace →",
  },
  hi: {
    needDetails:
      "चार्ट बनाने के लिए जन्म-विवरण आवश्यक है। नीचे दर्ज करें और यह यहीं दिखेगा — एक बार दर्ज करने पर साइट के अन्य उपकरण इसे दोबारा नहीं माँगेंगे।",
    generate: "मेरा चार्ट बनाएँ",
    openFullChart: "पूर्ण चार्ट वर्कस्पेस खोलें →",
  },
  ko: {
    needDetails:
      "차트를 그리려면 출생 정보가 필요합니다. 아래에 입력하면 바로 여기에 표시되며, 이후 사이트의 다른 도구에서도 다시 입력할 필요가 없습니다.",
    generate: "내 차트 만들기",
    openFullChart: "전체 차트 워크스페이스 열기 →",
  },
};
