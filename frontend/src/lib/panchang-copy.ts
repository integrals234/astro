import type { AppLanguage } from "@/lib/i18n/language";

interface PanchangCopy {
  intro: string;
  dateLabel: string;
  sunriseLabel: string;
  tithiLabel: string;
  nakshatraLabel: string;
  yogaLabel: string;
  karanaLabel: string;
  paksha: { Shukla: string; Krishna: string };
  /** One line under each limb: what it is. */
  tithiGloss: string;
  nakshatraGloss: string;
  yogaGloss: string;
  karanaGloss: string;
  sunriseGloss: string;
  caption: (date: string, place: string) => string;
  needPlace: string;
}

export const panchangCopy: Record<AppLanguage, PanchangCopy> = {
  en: {
    intro: "The five classical elements of a calendar day — tithi, nakshatra, yoga and karana — computed for your saved location's sunrise on the date you choose.",
    dateLabel: "Date",
    sunriseLabel: "Sunrise",
    tithiLabel: "Tithi",
    nakshatraLabel: "Nakshatra",
    yogaLabel: "Yoga",
    karanaLabel: "Karana",
    paksha: { Shukla: "Shukla Paksha (waxing)", Krishna: "Krishna Paksha (waning)" },
    tithiGloss: "The lunar day: the Moon's distance from the Sun in 12° steps (30 per lunar month).",
    nakshatraGloss: "The lunar mansion the Moon is in at sunrise.",
    yogaGloss: "One of 27 combinations of the Sun's and Moon's longitudes.",
    karanaGloss: "Half of a tithi; there are 11 kinds.",
    sunriseGloss: "All values are taken at this local sunrise.",
    caption: (date, place) => `For ${date} · ${place}`,
    needPlace: "Choose a place to see its panchanga.",
  },
  hi: {
    intro: "किसी कैलेंडर दिन के पाँच शास्त्रीय तत्व — तिथि, नक्षत्र, योग और करण — आपके सहेजे गए स्थान के सूर्योदय के लिए चुनी गई तिथि हेतु गणना किए गए।",
    dateLabel: "तिथि",
    sunriseLabel: "सूर्योदय",
    tithiLabel: "तिथि",
    nakshatraLabel: "नक्षत्र",
    yogaLabel: "योग",
    karanaLabel: "करण",
    paksha: { Shukla: "शुक्ल पक्ष (बढ़ता चंद्रमा)", Krishna: "कृष्ण पक्ष (घटता चंद्रमा)" },
    tithiGloss: "चंद्र दिवस: सूर्य से चंद्रमा की दूरी 12° के चरणों में (एक चंद्र मास में 30)।",
    nakshatraGloss: "सूर्योदय के समय चंद्रमा जिस नक्षत्र में है।",
    yogaGloss: "सूर्य और चंद्रमा के देशांतर के 27 संयोगों में से एक।",
    karanaGloss: "तिथि का आधा भाग; इसके 11 प्रकार हैं।",
    sunriseGloss: "सभी मान इसी स्थानीय सूर्योदय पर लिए गए हैं।",
    caption: (date, place) => `${date} · ${place} के लिए`,
    needPlace: "पंचांग देखने के लिए स्थान चुनें।",
  },
  ja: {
    intro: "暦日の五つの古典的要素——ティティ、ナクシャトラ、ヨーガ、カラナ——を、保存された出生地の、選択した日付の日の出時刻に基づいて計算します。",
    dateLabel: "日付",
    sunriseLabel: "日の出",
    tithiLabel: "ティティ",
    nakshatraLabel: "ナクシャトラ",
    yogaLabel: "ヨーガ",
    karanaLabel: "カラナ",
    paksha: { Shukla: "シュクラ・パクシャ（上弦）", Krishna: "クリシュナ・パクシャ（下弦）" },
    tithiGloss: "月と太陽の離角を12°ずつ区切った「月の日」です（一朔望月で30）。",
    nakshatraGloss: "日の出の時点で月が位置するナクシャトラ（月宿）です。",
    yogaGloss: "太陽と月の黄経の和から求める27種類の組み合わせの一つです。",
    karanaGloss: "ティティを半分に分けた単位で、11種類あります。",
    sunriseGloss: "すべての値は、この場所の日の出の時点で計算しています。",
    caption: (date, place) => `${date}・${place}`,
    needPlace: "パンチャーンガを表示する場所を選んでください。",
  },
  ko: {
    intro: "달력 하루의 다섯 가지 고전 요소 — 티티, 낙샤트라, 요가, 카라나 — 를 저장된 출생지의, 선택한 날짜의 일출을 기준으로 계산합니다.",
    dateLabel: "날짜",
    sunriseLabel: "일출",
    tithiLabel: "티티",
    nakshatraLabel: "낙샤트라",
    yogaLabel: "요가",
    karanaLabel: "카라나",
    paksha: { Shukla: "슈클라 팍샤(상현)", Krishna: "크리슈나 팍샤(하현)" },
    tithiGloss: "달과 태양의 이각을 12°씩 나눈 ‘달의 날’입니다(한 삭망월에 30).",
    nakshatraGloss: "일출 시점에 달이 위치한 낙샤트라입니다.",
    yogaGloss: "태양과 달의 황경으로 구하는 27가지 조합 중 하나입니다.",
    karanaGloss: "티티를 반으로 나눈 단위로, 11종류가 있습니다.",
    sunriseGloss: "모든 값은 이 장소의 일출 시점 기준입니다.",
    caption: (date, place) => `${date} · ${place}`,
    needPlace: "판창가를 볼 장소를 선택해 주세요.",
  },
};
