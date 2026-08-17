import type { AppLanguage } from "@/lib/i18n/language";

interface AshtakavargaCopy {
  heading: string;
  intro: string;
  sarvaLabel: string;
  totalLabel: string;
}

export const ashtakavargaCopy: Record<AppLanguage, AshtakavargaCopy> = {
  en: {
    heading: "Ashtakavarga",
    intro: "How many of the eight classical reference points — the seven planets and the Lagna — favour each sign, for each planet individually and summed across all seven (Sarvashtakavarga). Higher bindu counts mark signs classically read as stronger for that planet's results.",
    sarvaLabel: "Sarva",
    totalLabel: "Total",
  },
  hi: {
    heading: "अष्टकवर्ग",
    intro: "आठ शास्त्रीय संदर्भ बिंदु — सात ग्रह और लग्न — प्रत्येक राशि के पक्ष में कितने हैं, प्रत्येक ग्रह के लिए अलग-अलग और सातों के योग (सर्वाष्टकवर्ग) के रूप में। अधिक बिंदु संख्या उस ग्रह के फलों के लिए शास्त्रीय रूप से अधिक बलवान राशि दर्शाती है।",
    sarvaLabel: "सर्व",
    totalLabel: "कुल",
  },
  ja: {
    heading: "アシュタカヴァルガ",
    intro: "七惑星とラグナという八つの古典的な基準点のうち、いくつがそれぞれの星座を支持しているかを、惑星ごとに、また七惑星の合計（サルヴァシュタカヴァルガ）として示します。点数（ビンドゥ）が多い星座ほど、その惑星の結果にとって古典的に強いとされます。",
    sarvaLabel: "サルヴァ",
    totalLabel: "合計",
  },
  ko: {
    heading: "아슈타카바르가",
    intro: "일곱 행성과 라그나, 여덟 개의 고전적 기준점 중 몇 개가 각 별자리를 지지하는지를 행성별로, 그리고 일곱 행성의 합(사르바슈타카바르가)으로 보여줍니다. 빈두 수가 많을수록 그 행성의 결과에 있어 고전적으로 더 강한 별자리로 읽습니다.",
    sarvaLabel: "사르바",
    totalLabel: "합계",
  },
};
