"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { doshaRemedyCopy } from "@/lib/tools/dosha-remedy-copy";
import { DOSHA_REMEDIES } from "@/lib/jyotish/dosha-remedies";


/**
 * Fixed remedy reference shown below the Mangal Dosha page's yoga/dosha
 * results (rendered inside the chart result, so only once a chart exists).
 * Not personalized to which dosha this specific chart has — see
 * `dosha-remedies.ts` for why — so it needs no chart data at all.
 */
export default function DoshaRemedyReference() {
  const { language } = useLanguage();
  const copy = doshaRemedyCopy[language];

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
