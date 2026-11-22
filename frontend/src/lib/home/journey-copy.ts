import type { AppLanguage } from "@/lib/i18n/language";

/**
 * Copy for the home page's scroll journey (Journey.tsx, HomeCosmos.tsx).
 * The rashi / nakshatra / graha chapters reuse `homeStoryCopy.learnSteps`
 * and the last chapter reuses `tonightCopy`; this file holds the rest.
 */
export type JourneyChapterId = "start" | "system" | "earth" | "rashi" | "nakshatra" | "graha" | "now";

export interface JourneyCopy {
  ariaLabel: string;
  railLabel: string;
  chapters: Record<JourneyChapterId, string>;
  systemTitle: string;
  systemBody: string;
  earthTitle: string;
  earthBody: string;
  hudLabel: string;
  hudNow: string;
  hudBirth: string;
  scrollHint: string;
  approxNote: string;
}

export const journeyCopy: Record<AppLanguage, JourneyCopy> = {
  ja: {
    ariaLabel: "空の旅",
    railLabel: "章",
    chapters: { start: "はじめに", system: "太陽系", earth: "地球から", rashi: "ラーシ", nakshatra: "ナクシャトラ", graha: "グラハ", now: "いまの空" },
    systemTitle: "惑星は、いま本当にある場所に。",
    systemBody:
      "ここに描いた惑星は、天文計算で求めた実際の位置にあります。上のフォームに生年月日を入力すると時間が巻き戻り、あなたが生まれた瞬間の太陽系に戻ります。",
    earthTitle: "空は、地球から読む。",
    earthBody:
      "ジョーティッシュが見るのは、地球から見上げたとき、それぞれの天体が黄道のどこに重なっているか。視点を地球に移すと、そのまわりに十二の星座が現れます。",
    hudLabel: "表示中の空",
    hudNow: "現在",
    hudBirth: "生まれた瞬間",
    scrollHint: "スクロールして、空の旅へ",
    approxNote: "位置は天文計算による概算です。距離は画面に収まるよう縮めています。",
  },
  en: {
    ariaLabel: "A journey through the sky",
    railLabel: "Chapters",
    chapters: { start: "Start", system: "Solar system", earth: "From Earth", rashi: "Rashis", nakshatra: "Nakshatras", graha: "Grahas", now: "Sky now" },
    systemTitle: "Every planet, where it really is.",
    systemBody:
      "The planets here sit at their calculated positions for the moment shown. Enter a birth date in the form above and time runs back to the solar system as it stood when you were born.",
    earthTitle: "The sky is read from Earth.",
    earthBody:
      "Jyotish asks one thing of the sky: seen from Earth, which part of the zodiac does each body stand against? Move the view to Earth and the twelve signs appear around it.",
    hudLabel: "Sky shown",
    hudNow: "Now",
    hudBirth: "Your birth moment",
    scrollHint: "Scroll to travel the sky",
    approxNote: "Positions are calculated approximations; distances are compressed to fit the screen.",
  },
  hi: {
    ariaLabel: "आकाश की यात्रा",
    railLabel: "अध्याय",
    chapters: { start: "शुरुआत", system: "सौरमंडल", earth: "पृथ्वी से", rashi: "राशियाँ", nakshatra: "नक्षत्र", graha: "ग्रह", now: "अभी का आकाश" },
    systemTitle: "हर ग्रह, ठीक वहीं जहाँ वह सचमुच है।",
    systemBody:
      "यहाँ हर ग्रह दिखाए गए क्षण की गणना की गई वास्तविक स्थिति पर बना है। ऊपर के फ़ॉर्म में जन्म तिथि भरें, और समय पीछे चलकर उसी सौरमंडल तक लौट आता है जो आपके जन्म के क्षण था।",
    earthTitle: "आकाश पृथ्वी से पढ़ा जाता है।",
    earthBody:
      "ज्योतिष आकाश से एक ही बात पूछता है: पृथ्वी से देखने पर हर पिंड राशिचक्र के किस भाग के सामने है? दृष्टि पृथ्वी पर ले जाइए, और उसके चारों ओर बारह राशियाँ उभर आती हैं।",
    hudLabel: "दिखाया गया आकाश",
    hudNow: "अभी",
    hudBirth: "आपका जन्म क्षण",
    scrollHint: "आकाश की यात्रा के लिए स्क्रॉल करें",
    approxNote: "स्थितियाँ गणना पर आधारित अनुमान हैं; दूरियाँ स्क्रीन में समाने के लिए छोटी की गई हैं।",
  },
  ko: {
    ariaLabel: "하늘 여행",
    railLabel: "장",
    chapters: { start: "시작", system: "태양계", earth: "지구에서", rashi: "라시", nakshatra: "낙샤트라", graha: "그라하", now: "지금의 하늘" },
    systemTitle: "모든 행성이, 지금 실제로 있는 자리에.",
    systemBody:
      "여기 그린 행성은 표시된 순간에 대해 천문 계산으로 구한 실제 위치에 있습니다. 위 양식에 생년월일을 입력하면 시간이 거꾸로 흘러, 당신이 태어난 순간의 태양계로 돌아갑니다.",
    earthTitle: "하늘은 지구에서 읽는다.",
    earthBody:
      "조티시가 하늘에 묻는 것은 하나입니다. 지구에서 보았을 때 각 천체가 황도의 어느 자리에 겹쳐 있는가. 시점을 지구로 옮기면 그 둘레에 열두 별자리가 나타납니다.",
    hudLabel: "보이는 하늘",
    hudNow: "현재",
    hudBirth: "태어난 순간",
    scrollHint: "스크롤해서 하늘 여행으로",
    approxNote: "위치는 천문 계산에 의한 근사치이며, 거리는 화면에 맞게 줄였습니다.",
  },
};
