import type { AppLanguage } from "@/lib/i18n/language";

interface NumerologyCopy {
  provenance: string;
  /** Form intro: numerology needs only a date (and optionally a name). */
  intro: string;
  submit: string;
  mulankLabel: string;
  bhagyankLabel: string;
  nameNumberLabel: string;
  rulingPlanet: (planet: string) => string;
  nameFieldLabel: string;
  nameHelp: string;
  nameInvalid: string;
  latinNamePlaceholder: string;
  /** One line on what each number is traditionally associated with (1–9). */
  meaning: (n: number) => string;
}

const pick = (table: string[]) => (n: number) => table[n - 1] ?? "";

export const numerologyCopy: Record<AppLanguage, NumerologyCopy> = {
  en: {
    provenance: "A related but separate tradition, not part of Vedic astrology itself — shown here because the same birth date already answers it.",
    intro: "Numerology needs only a date of birth. Add a name in Latin letters if you also want the name number.",
    submit: "Find my numbers",
    mulankLabel: "Mulank (birth number)",
    bhagyankLabel: "Bhagyank (destiny number)",
    nameNumberLabel: "Name number",
    rulingPlanet: (planet) => `Ruled by ${planet}`,
    nameFieldLabel: "Name in Latin letters (for the name number)",
    nameHelp: "Use plain letters A–Z. Different spellings (e.g. Satō / Sato / Satou) give different numbers.",
    nameInvalid: "Only the letters A–Z, spaces, apostrophes, hyphens and dots can be counted.",
    latinNamePlaceholder: "e.g. Hanako Sato",
    meaning: pick([
      "Initiative and self-direction (Sun)",
      "Sensitivity and cooperation (Moon)",
      "Learning, growth and guidance (Jupiter)",
      "Unconventional thinking and change (Rahu)",
      "Intellect, communication and adaptability (Mercury)",
      "Harmony, taste and relationships (Venus)",
      "Reflection, inquiry and inner life (Ketu)",
      "Patience, responsibility and persistence (Saturn)",
      "Energy, courage and drive (Mars)",
    ]),
  },
  hi: {
    provenance: "यह एक संबंधित किंतु अलग परंपरा है, वैदिक ज्योतिष का हिस्सा नहीं — यहाँ दिखाया गया है क्योंकि वही जन्म तिथि इसका भी उत्तर देती है।",
    intro: "अंक ज्योतिष के लिए केवल जन्म तिथि चाहिए। नाम अंक भी देखना हो तो नाम रोमन अक्षरों में जोड़ें।",
    submit: "मेरे अंक देखें",
    mulankLabel: "मूलांक (जन्म अंक)",
    bhagyankLabel: "भाग्यांक (भाग्य अंक)",
    nameNumberLabel: "नाम अंक",
    rulingPlanet: (planet) => `स्वामी ग्रह: ${planet}`,
    nameFieldLabel: "नाम रोमन अक्षरों में (नाम अंक के लिए)",
    nameHelp: "केवल A–Z अक्षर प्रयोग करें। अलग वर्तनी से अलग अंक आते हैं।",
    nameInvalid: "केवल A–Z अक्षर, रिक्त स्थान, अपॉस्ट्रॉफ़ी, हाइफ़न और बिंदु गिने जा सकते हैं।",
    latinNamePlaceholder: "उदा. Hanako Sato",
    meaning: pick([
      "पहल और आत्म-निर्देशन (सूर्य)",
      "संवेदनशीलता और सहयोग (चंद्र)",
      "अध्ययन, विकास और मार्गदर्शन (गुरु)",
      "अपरंपरागत सोच और परिवर्तन (राहु)",
      "बुद्धि, संवाद और लचीलापन (बुध)",
      "सामंजस्य, रुचि और संबंध (शुक्र)",
      "चिंतन, खोज और आंतरिक जीवन (केतु)",
      "धैर्य, उत्तरदायित्व और निरंतरता (शनि)",
      "ऊर्जा, साहस और उत्साह (मंगल)",
    ]),
  },
  ja: {
    provenance: "インド占星術とは別の、隣接する伝統です。すでに入力された生年月日から計算できるため、ここに表示しています。",
    intro: "数秘術に必要なのは生年月日だけです。名前の数も知りたい方は、ローマ字のお名前を添えてください。",
    submit: "数字を調べる",
    mulankLabel: "ムーランク（誕生数）",
    bhagyankLabel: "バギャーンク（運命数）",
    nameNumberLabel: "名前の数",
    rulingPlanet: (planet) => `支配星：${planet}`,
    nameFieldLabel: "ローマ字のお名前（名前の数に使います）",
    nameHelp: "A〜Zの文字でご入力ください。綴り（Satō／Sato／Satou など）によって数は変わります。",
    nameInvalid: "数えられるのはA〜Zの文字、スペース、アポストロフィ、ハイフン、ピリオドのみです。",
    latinNamePlaceholder: "例：Hanako Sato",
    meaning: pick([
      "主体性・自分で道を切り開く力（太陽）",
      "感受性・協調性（月）",
      "学び・成長・導く力（木星）",
      "型にとらわれない発想・変化（ラーフ）",
      "知性・伝える力・柔軟さ（水星）",
      "調和・美意識・人とのつながり（金星）",
      "内省・探究・精神性（ケートゥ）",
      "忍耐・責任感・継続する力（土星）",
      "行動力・勇気・情熱（火星）",
    ]),
  },
  ko: {
    provenance: "베다 점성술과는 별개의 관련 전통입니다. 이미 입력된 생년월일로 계산할 수 있어 여기에 표시합니다.",
    intro: "수비학에는 생년월일만 있으면 됩니다. 이름 수도 보고 싶다면 로마자 이름을 함께 입력해 주세요.",
    submit: "내 숫자 알아보기",
    mulankLabel: "물랑크(출생수)",
    bhagyankLabel: "바갼크(운명수)",
    nameNumberLabel: "이름 수",
    rulingPlanet: (planet) => `지배 행성: ${planet}`,
    nameFieldLabel: "로마자 이름 (이름 수 계산용)",
    nameHelp: "A–Z 문자로 입력해 주세요. 철자가 다르면 숫자도 달라집니다.",
    nameInvalid: "A–Z 문자, 공백, 아포스트로피, 하이픈, 마침표만 셀 수 있습니다.",
    latinNamePlaceholder: "예: Hanako Sato",
    meaning: pick([
      "주체성과 스스로 길을 여는 힘 (태양)",
      "감수성과 협조성 (달)",
      "배움, 성장, 이끄는 힘 (목성)",
      "틀에 얽매이지 않는 발상과 변화 (라후)",
      "지성, 전달력, 유연함 (수성)",
      "조화, 미의식, 사람과의 관계 (금성)",
      "내성, 탐구, 정신성 (케투)",
      "인내, 책임감, 꾸준함 (토성)",
      "행동력, 용기, 열정 (화성)",
    ]),
  },
};
