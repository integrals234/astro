import type { ChartView } from "@/lib/chart-render";
import type { AppLanguage } from "@/lib/i18n/language";

interface ChartPreviewCopy {
  needDetails: string;
  generate: string;
  openFullChart: string;
  /**
   * Partial rather than full `ChartView` coverage: this panel only ever
   * offers lagna/moon/gochar as switchable tabs (see the registered tools in
   * `landing-content.ts`). D9 and Chalit remain workspace-only for now.
   */
  viewLabels: Partial<Record<ChartView, string>>;
}

export const chartPreviewCopy: Record<AppLanguage, ChartPreviewCopy> = {
  ja: {
    needDetails:
      "チャートを表示するには出生データが必要です。下に入力すると、その場でチャートが作成されます。一度入力すれば、他のツールでも再入力は不要です。",
    generate: "チャートを作成",
    openFullChart: "すべてのチャートを見る（フルワークスペース）→",
    viewLabels: { lagna: "ラグナ（出生図）", moon: "月（チャンドラ）", gochar: "トランジット（ゴーチャラ）" },
  },
  en: {
    needDetails:
      "Birth details are needed to draw the chart. Enter them below and it appears right here — once entered, every other tool on this site uses them without asking again.",
    generate: "Draw my chart",
    openFullChart: "Open the full chart workspace →",
    viewLabels: { lagna: "Lagna (birth chart)", moon: "Moon (Chandra)", gochar: "Transits (Gochar)" },
  },
  hi: {
    needDetails:
      "चार्ट बनाने के लिए जन्म-विवरण आवश्यक है। नीचे दर्ज करें और यह यहीं दिखेगा — एक बार दर्ज करने पर साइट के अन्य उपकरण इसे दोबारा नहीं माँगेंगे।",
    generate: "मेरा चार्ट बनाएँ",
    openFullChart: "पूर्ण चार्ट वर्कस्पेस खोलें →",
    viewLabels: { lagna: "लग्न (जन्म कुंडली)", moon: "चंद्र (चंद्र कुंडली)", gochar: "गोचर (ट्रांज़िट)" },
  },
  ko: {
    needDetails:
      "차트를 그리려면 출생 정보가 필요합니다. 아래에 입력하면 바로 여기에 표시되며, 이후 사이트의 다른 도구에서도 다시 입력할 필요가 없습니다.",
    generate: "내 차트 만들기",
    openFullChart: "전체 차트 워크스페이스 열기 →",
    viewLabels: { lagna: "라그나(출생 차트)", moon: "달(찬드라)", gochar: "트랜짓(고차라)" },
  },
};
