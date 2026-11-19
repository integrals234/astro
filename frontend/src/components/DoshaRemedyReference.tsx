"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import type { AppLanguage } from "@/lib/i18n/language";
import { DOSHA_REMEDIES } from "@/lib/jyotish/dosha-remedies";

const COPY: Record<AppLanguage, { heading: string; intro: string }> = {
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

/**
 * Fixed remedy reference shown below the Mangal Dosha page's yoga/dosha
 * results. Not personalized to which dosha this specific chart has — see
 * `dosha-remedies.ts` for why — so it needs no chart data at all.
 */
export default function DoshaRemedyReference() {
  const { language } = useLanguage();
  const copy = COPY[language];

  return (
    <div className="washi-card mt-8 p-6 md:p-7">
      <p className="washi-eyebrow mb-2">{copy.heading}</p>
      <p className="mb-5 text-xs text-text-muted">{copy.intro}</p>
      <div className="space-y-5">
        {DOSHA_REMEDIES.map((remedy, i) => (
          <div key={remedy.title.en}>
            <p className="font-body font-semibold text-ink">{remedy.title[language]}</p>
            <p className="mt-1 text-xs italic leading-relaxed text-terracotta">
              {remedy.whyItHelps[language]}
            </p>
            <p className="mt-1 text-xs text-text-muted">{remedy.howTo[language]}</p>
            {i < DOSHA_REMEDIES.length - 1 && <hr className="washi-hairline mt-5" />}
          </div>
        ))}
      </div>
    </div>
  );
}
