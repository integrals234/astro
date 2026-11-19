import type { BilingualText } from "@/lib/education/types";

/** Classical sign → ruling planet (the standard 7-graha rulership table;
 * Rahu/Ketu don't rule signs in this system). Keys match `SIGN_TO_NUMBER`'s
 * sign spelling exactly. */
export const SIGN_LORD: Record<string, string> = {
  Aries: "Mars",
  Taurus: "Venus",
  Gemini: "Mercury",
  Cancer: "Moon",
  Leo: "Sun",
  Virgo: "Mercury",
  Libra: "Venus",
  Scorpio: "Mars",
  Sagittarius: "Jupiter",
  Capricorn: "Saturn",
  Aquarius: "Saturn",
  Pisces: "Jupiter",
};

/**
 * Fixed order used to pick "the" weakest planet when more than one is
 * debilitated — natural benefics first is an arbitrary but stable
 * tie-break, not a claim about relative severity.
 */
export const PLANET_ORDER = [
  "Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu",
] as const;

export interface GemstoneEntry {
  primaryStone: BilingualText;
  substituteStone: BilingualText;
  metal: BilingualText;
  finger: BilingualText;
  day: BilingualText;
}

export const GEMSTONE: Record<string, GemstoneEntry> = {
  Sun: {
    primaryStone: { en: "Ruby (Manik)", hi: "माणिक (रूबी)", ja: "ルビー（マーニク）", ko: "루비(마니크)" },
    substituteStone: { en: "Red garnet or sunstone", hi: "लाल गार्नेट या सनस्टोन", ja: "レッドガーネットまたはサンストーン", ko: "레드 가넷 또는 선스톤" },
    metal: { en: "Gold or copper", hi: "सोना या तांबा", ja: "金または銅", ko: "금 또는 구리" },
    finger: { en: "Ring finger", hi: "अनामिका उंगली", ja: "薬指", ko: "약지" },
    day: { en: "Sunday", hi: "रविवार", ja: "日曜日", ko: "일요일" },
  },
  Moon: {
    primaryStone: { en: "Pearl (Moti)", hi: "मोती", ja: "パール（真珠）", ko: "진주(모티)" },
    substituteStone: { en: "Moonstone", hi: "मूनस्टोन", ja: "ムーンストーン", ko: "문스톤" },
    metal: { en: "Silver", hi: "चांदी", ja: "銀", ko: "은" },
    finger: { en: "Little finger", hi: "कनिष्ठा उंगली", ja: "小指", ko: "새끼손가락" },
    day: { en: "Monday", hi: "सोमवार", ja: "月曜日", ko: "월요일" },
  },
  Mars: {
    primaryStone: { en: "Red coral (Moonga)", hi: "मूंगा", ja: "レッドコーラル（ムーンガ）", ko: "레드 코랄(문가)" },
    substituteStone: { en: "Carnelian", hi: "कार्नेलियन", ja: "カーネリアン", ko: "카넬리안" },
    metal: { en: "Gold or copper", hi: "सोना या तांबा", ja: "金または銅", ko: "금 또는 구리" },
    finger: { en: "Ring finger", hi: "अनामिका उंगली", ja: "薬指", ko: "약지" },
    day: { en: "Tuesday", hi: "मंगलवार", ja: "火曜日", ko: "화요일" },
  },
  Mercury: {
    primaryStone: { en: "Emerald (Panna)", hi: "पन्ना", ja: "エメラルド（パンナ）", ko: "에메랄드(판나)" },
    substituteStone: { en: "Peridot or green onyx", hi: "पेरिडॉट या हरा गोमेद", ja: "ペリドットまたはグリーンオニキス", ko: "페리도트 또는 그린 오닉스" },
    metal: { en: "Gold or silver", hi: "सोना या चांदी", ja: "金または銀", ko: "금 또는 은" },
    finger: { en: "Little finger", hi: "कनिष्ठा उंगली", ja: "小指", ko: "새끼손가락" },
    day: { en: "Wednesday", hi: "बुधवार", ja: "水曜日", ko: "수요일" },
  },
  Jupiter: {
    primaryStone: { en: "Yellow sapphire (Pukhraj)", hi: "पुखराज", ja: "イエローサファイア（プクラージ）", ko: "옐로 사파이어(푸크라지)" },
    substituteStone: { en: "Citrine or yellow topaz", hi: "सिट्रीन या पीला पुखराज (टोपाज)", ja: "シトリンまたはイエロートパーズ", ko: "시트린 또는 옐로 토파즈" },
    metal: { en: "Gold", hi: "सोना", ja: "金", ko: "금" },
    finger: { en: "Index finger", hi: "तर्जनी उंगली", ja: "人差し指", ko: "검지" },
    day: { en: "Thursday", hi: "गुरुवार", ja: "木曜日", ko: "목요일" },
  },
  Venus: {
    primaryStone: { en: "Diamond (Heera)", hi: "हीरा", ja: "ダイヤモンド（ヒーラ）", ko: "다이아몬드(히라)" },
    substituteStone: { en: "White sapphire or zircon", hi: "सफेद पुखराज या जिरकॉन", ja: "ホワイトサファイアまたはジルコン", ko: "화이트 사파이어 또는 지르콘" },
    metal: { en: "Silver or platinum", hi: "चांदी या प्लैटिनम", ja: "銀またはプラチナ", ko: "은 또는 백금" },
    finger: { en: "Middle or ring finger", hi: "मध्यमा या अनामिका उंगली", ja: "中指または薬指", ko: "중지 또는 약지" },
    day: { en: "Friday", hi: "शुक्रवार", ja: "金曜日", ko: "금요일" },
  },
  Saturn: {
    primaryStone: { en: "Blue sapphire (Neelam)", hi: "नीलम", ja: "ブルーサファイア（ニーラム）", ko: "블루 사파이어(닐람)" },
    substituteStone: { en: "Amethyst", hi: "एमेथिस्ट", ja: "アメジスト", ko: "자수정" },
    metal: { en: "Silver or iron", hi: "चांदी या लोहा", ja: "銀または鉄", ko: "은 또는 철" },
    finger: { en: "Middle finger", hi: "मध्यमा उंगली", ja: "中指", ko: "중지" },
    day: { en: "Saturday", hi: "शनिवार", ja: "土曜日", ko: "토요일" },
  },
  Rahu: {
    primaryStone: { en: "Hessonite (Gomed)", hi: "गोमेद", ja: "ヘソナイト（ゴーメード）", ko: "헤소나이트(고메드)" },
    substituteStone: { en: "Orange zircon", hi: "नारंगी जिरकॉन", ja: "オレンジジルコン", ko: "오렌지 지르콘" },
    metal: { en: "Silver", hi: "चांदी", ja: "銀", ko: "은" },
    finger: { en: "Middle finger", hi: "मध्यमा उंगली", ja: "中指", ko: "중지" },
    day: { en: "Saturday", hi: "शनिवार", ja: "土曜日", ko: "토요일" },
  },
  Ketu: {
    primaryStone: { en: "Cat's eye (Lehsunia)", hi: "लहसुनिया (कैट्स आई)", ja: "キャッツアイ（レフスニヤ）", ko: "캣츠아이(레흐수니야)" },
    substituteStone: { en: "Tiger's eye", hi: "टाइगर आई", ja: "タイガーアイ", ko: "타이거아이" },
    metal: { en: "Silver, or a five-metal (panchdhatu) alloy", hi: "चांदी, या पंचधातु", ja: "銀、またはパンチダートゥ（五金合金）", ko: "은, 또는 판치다투(오금 합금)" },
    finger: { en: "Ring finger", hi: "अनामिका उंगली", ja: "薬指", ko: "약지" },
    day: { en: "Tuesday", hi: "मंगलवार", ja: "火曜日", ko: "화요일" },
  },
};
