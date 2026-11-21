import type { AppLanguage } from "@/lib/i18n/language";

/** Copy for the home page's "Tonight's sky" band (TonightSky.tsx). */
export interface TonightCopy {
  heading: string;
  lead: string;
  moonLabel: string;
  phaseLabel: string;
  tithiLabel: string;
  sunLabel: string;
  paksha: { Shukla: string; Krishna: string };
  tithiValue: (paksha: string, day: number) => string;
  illumination: (percent: number) => string;
  pada: (n: number) => string;
  note: string;
  ctaChart: string;
  ctaPanchang: string;
}

export const tonightCopy: Record<AppLanguage, TonightCopy> = {
  ja: {
    heading: "いまの空",
    lead: "あなたが今このページを開いている瞬間の、月と太陽の位置です。",
    moonLabel: "月のナクシャトラ",
    phaseLabel: "月相",
    tithiLabel: "ティティ（月の日）",
    sunLabel: "太陽のラーシ",
    paksha: { Shukla: "白分（満ちていく月）", Krishna: "黒分（欠けていく月）" },
    tithiValue: (paksha, day) => `${paksha}の${day}日目`,
    illumination: (p) => `輝面比 ${p}%`,
    pada: (n) => `第${n}パダ`,
    note: "現在時刻をもとにラヒリ方式で計算した概算です。",
    ctaChart: "生まれた瞬間の空を見る",
    ctaPanchang: "今日のパンチャーンガを詳しく",
  },
  en: {
    heading: "The sky right now",
    lead: "Where the Moon and Sun stand at the moment you opened this page.",
    moonLabel: "Moon's nakshatra",
    phaseLabel: "Moon phase",
    tithiLabel: "Tithi (lunar day)",
    sunLabel: "Sun's rashi",
    paksha: { Shukla: "Shukla paksha (waxing)", Krishna: "Krishna paksha (waning)" },
    tithiValue: (paksha, day) => `Day ${day} of ${paksha}`,
    illumination: (p) => `${p}% illuminated`,
    pada: (n) => `pada ${n}`,
    note: "An approximation from the current time, in the Lahiri sidereal zodiac.",
    ctaChart: "See the sky you were born under",
    ctaPanchang: "Today's full panchanga",
  },
  hi: {
    heading: "इस समय का आकाश",
    lead: "जिस क्षण आपने यह पृष्ठ खोला, उस समय चंद्रमा और सूर्य की स्थिति।",
    moonLabel: "चंद्र नक्षत्र",
    phaseLabel: "चंद्र कला",
    tithiLabel: "तिथि",
    sunLabel: "सूर्य राशि",
    paksha: { Shukla: "शुक्ल पक्ष", Krishna: "कृष्ण पक्ष" },
    tithiValue: (paksha, day) => `${paksha} का ${day}वाँ दिन`,
    illumination: (p) => `${p}% प्रकाशित`,
    pada: (n) => `पाद ${n}`,
    note: "वर्तमान समय से लाहिड़ी निरयण पद्धति में अनुमानित गणना।",
    ctaChart: "अपने जन्म के क्षण का आकाश देखें",
    ctaPanchang: "आज का पूरा पंचांग",
  },
  ko: {
    heading: "지금의 하늘",
    lead: "이 페이지를 연 바로 지금, 달과 태양의 위치입니다.",
    moonLabel: "달의 낙샤트라",
    phaseLabel: "달의 위상",
    tithiLabel: "티티(달의 날)",
    sunLabel: "태양의 라시",
    paksha: { Shukla: "슈클라 팍샤(차오르는 달)", Krishna: "크리슈나 팍샤(기우는 달)" },
    tithiValue: (paksha, day) => `${paksha} ${day}일째`,
    illumination: (p) => `밝은 면 ${p}%`,
    pada: (n) => `${n}파다`,
    note: "현재 시각을 바탕으로 라히리 방식으로 계산한 근사값입니다.",
    ctaChart: "태어난 순간의 하늘 보기",
    ctaPanchang: "오늘의 판창가 자세히",
  },
};
