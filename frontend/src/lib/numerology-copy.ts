import type { AppLanguage } from "@/lib/i18n/language";

interface NumerologyCopy {
  heading: string;
  provenance: string;
  mulankLabel: string;
  bhagyankLabel: string;
  nameNumberLabel: string;
  rulingPlanet: (planet: string) => string;
  nameNotLatin: string;
  latinNamePlaceholder: string;
  needProfile: string;
}

export const numerologyCopy: Record<AppLanguage, NumerologyCopy> = {
  en: {
    heading: "Numerology",
    provenance: "A related but separate tradition, not part of Vedic astrology itself — shown here because the same birth date already answers it.",
    mulankLabel: "Mulank (birth number)",
    bhagyankLabel: "Bhagyank (destiny number)",
    nameNumberLabel: "Name number",
    rulingPlanet: (planet) => `Ruled by ${planet}`,
    nameNotLatin: "The name on file isn't in Latin script, so a name number would be wrong under any system rather than approximately right — enter a Latin-spelling of the name to compute it.",
    latinNamePlaceholder: "Name in Latin letters",
    needProfile: "Enter birth details above to see this.",
  },
  hi: {
    heading: "अंक ज्योतिष",
    provenance: "यह एक संबंधित किंतु अलग परंपरा है, वैदिक ज्योतिष का हिस्सा नहीं — यहाँ दिखाया गया है क्योंकि वही जन्म तिथि इसका भी उत्तर देती है।",
    mulankLabel: "मूलांक (जन्म अंक)",
    bhagyankLabel: "भाग्यांक (भाग्य अंक)",
    nameNumberLabel: "नाम अंक",
    rulingPlanet: (planet) => `स्वामी ग्रह: ${planet}`,
    nameNotLatin: "दर्ज नाम रोमन लिपि में नहीं है, इसलिए नाम अंक किसी भी पद्धति में सही के बजाय गलत होगा — गणना के लिए नाम रोमन वर्तनी में दर्ज करें।",
    latinNamePlaceholder: "नाम रोमन अक्षरों में",
    needProfile: "इसे देखने के लिए ऊपर जन्म विवरण दर्ज करें।",
  },
  ja: {
    heading: "数秘術",
    provenance: "インド占星術とは別の、隣接する伝統です。すでに入力された生年月日から計算できるため、ここに表示しています。",
    mulankLabel: "ムーランク（誕生数）",
    bhagyankLabel: "バギャーンク（運命数）",
    nameNumberLabel: "名前の数",
    rulingPlanet: (planet) => `支配星：${planet}`,
    nameNotLatin: "登録されているお名前がラテン文字ではないため、名前の数はどの方式でも不正確になります。計算するには、ローマ字表記のお名前をご入力ください。",
    latinNamePlaceholder: "ローマ字のお名前",
    needProfile: "こちらを表示するには、上で出生データを入力してください。",
  },
  ko: {
    heading: "수비학",
    provenance: "베다 점성술과는 별개의 관련 전통입니다. 이미 입력된 생년월일로 계산할 수 있어 여기에 표시합니다.",
    mulankLabel: "물랑크(출생수)",
    bhagyankLabel: "바갼크(운명수)",
    nameNumberLabel: "이름 수",
    rulingPlanet: (planet) => `지배 행성: ${planet}`,
    nameNotLatin: "등록된 이름이 라틴 문자가 아니어서 이름 수는 어떤 방식으로도 부정확하게 나옵니다. 계산하려면 로마자 이름을 입력해 주세요.",
    latinNamePlaceholder: "로마자 이름",
    needProfile: "이 항목을 보려면 위에서 출생 정보를 입력하세요.",
  },
};
