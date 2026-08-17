import type { AppLanguage } from "@/lib/i18n/language";

interface PanchangCopy {
  heading: string;
  intro: string;
  dateLabel: string;
  compute: string;
  computing: string;
  error: string;
  unavailable: string;
  needProfile: string;
  sunriseLabel: string;
  tithiLabel: string;
  nakshatraLabel: string;
  yogaLabel: string;
  karanaLabel: string;
  paksha: { Shukla: string; Krishna: string };
}

export const panchangCopy: Record<AppLanguage, PanchangCopy> = {
  en: {
    heading: "Panchang (day elements)",
    intro: "The five classical elements of a calendar day — tithi, nakshatra, yoga and karana — computed for your saved location's sunrise on the date you choose.",
    dateLabel: "Date",
    compute: "Check this date",
    computing: "Computing…",
    error: "Could not compute the panchang. Please try again.",
    unavailable: "This tool isn't live yet — the backend endpoint it needs is still being reviewed before deployment.",
    needProfile: "Enter birth details in the chart above so this has a location to use.",
    sunriseLabel: "Sunrise",
    tithiLabel: "Tithi",
    nakshatraLabel: "Nakshatra",
    yogaLabel: "Yoga",
    karanaLabel: "Karana",
    paksha: { Shukla: "Shukla Paksha (waxing)", Krishna: "Krishna Paksha (waning)" },
  },
  hi: {
    heading: "पंचांग (दिन के तत्व)",
    intro: "किसी कैलेंडर दिन के पाँच शास्त्रीय तत्व — तिथि, नक्षत्र, योग और करण — आपके सहेजे गए स्थान के सूर्योदय के लिए चुनी गई तिथि हेतु गणना किए गए।",
    dateLabel: "तिथि",
    compute: "यह तारीख जाँचें",
    computing: "गणना हो रही है…",
    error: "पंचांग की गणना नहीं हो सकी। कृपया पुनः प्रयास करें।",
    unavailable: "यह उपकरण अभी सक्रिय नहीं है — इसके लिए आवश्यक बैकएंड एंडपॉइंट अभी समीक्षा में है।",
    needProfile: "स्थान उपयोग हेतु ऊपर कुंडली में जन्म विवरण दर्ज करें।",
    sunriseLabel: "सूर्योदय",
    tithiLabel: "तिथि",
    nakshatraLabel: "नक्षत्र",
    yogaLabel: "योग",
    karanaLabel: "करण",
    paksha: { Shukla: "शुक्ल पक्ष (बढ़ता चंद्रमा)", Krishna: "कृष्ण पक्ष (घटता चंद्रमा)" },
  },
  ja: {
    heading: "パンチャーンガ（日の要素）",
    intro: "暦日の五つの古典的要素——ティティ、ナクシャトラ、ヨーガ、カラナ——を、保存された出生地の、選択した日付の日の出時刻に基づいて計算します。",
    dateLabel: "日付",
    compute: "この日を確認する",
    computing: "計算中…",
    error: "パンチャーンガを計算できませんでした。もう一度お試しください。",
    unavailable: "このツールはまだ稼働していません。必要なバックエンドのエンドポイントは、公開前のレビュー中です。",
    needProfile: "使用する場所のため、上のチャートで出生データを入力してください。",
    sunriseLabel: "日の出",
    tithiLabel: "ティティ",
    nakshatraLabel: "ナクシャトラ",
    yogaLabel: "ヨーガ",
    karanaLabel: "カラナ",
    paksha: { Shukla: "シュクラ・パクシャ（上弦）", Krishna: "クリシュナ・パクシャ（下弦）" },
  },
  ko: {
    heading: "판창가(하루의 요소)",
    intro: "달력 하루의 다섯 가지 고전 요소 — 티티, 낙샤트라, 요가, 카라나 — 를 저장된 출생지의, 선택한 날짜의 일출을 기준으로 계산합니다.",
    dateLabel: "날짜",
    compute: "이 날짜 확인하기",
    computing: "계산 중…",
    error: "판창가를 계산하지 못했습니다. 다시 시도해 주세요.",
    unavailable: "이 도구는 아직 활성화되지 않았습니다. 필요한 백엔드 엔드포인트가 배포 전 검토 중입니다.",
    needProfile: "사용할 위치를 위해 위 차트에서 출생 정보를 입력하세요.",
    sunriseLabel: "일출",
    tithiLabel: "티티",
    nakshatraLabel: "낙샤트라",
    yogaLabel: "요가",
    karanaLabel: "카라나",
    paksha: { Shukla: "슈클라 팍샤(상현)", Krishna: "크리슈나 팍샤(하현)" },
  },
};
