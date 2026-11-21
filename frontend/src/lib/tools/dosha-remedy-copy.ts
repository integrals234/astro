import type { AppLanguage } from "@/lib/i18n/language";

/** Copy for the Mangal Dosha page's remedy reference (DoshaRemedyReference). */
export const doshaRemedyCopy: Record<AppLanguage, { heading: string; intro: string }> = {
  en: {
    heading: "Suggested Remedies (Upay)",
    intro: "General reference — not specific to which of the above this chart actually shows evidence for.",
  },
  hi: {
    heading: "सुझाए गए उपाय",
    intro: "सामान्य संदर्भ — यह इस बात पर निर्भर नहीं कि इस कुंडली में ऊपर दिए गए में से किसका वास्तव में प्रमाण मिलता है।",
  },
  ja: {
    heading: "おすすめの対処法（ウパーヤ）",
    intro: "一般的な参考情報です。このチャートが実際に上記のどれに該当するかとは関係なく表示しています。",
  },
  ko: {
    heading: "추천 레메디(우파야)",
    intro: "일반 참고 정보입니다 — 이 차트가 위 항목 중 실제로 어느 것의 근거를 보이는지와는 무관합니다.",
  },
};
