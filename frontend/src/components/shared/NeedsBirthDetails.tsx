"use client";

import { useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBirthProfile } from "@/components/profile/ProfileProvider";
import { useToast } from "@/components/ui/Toaster";
import BirthDetailsFields, {
  EMPTY_BIRTH_DETAILS,
  isBirthDetailsComplete,
  type BirthDetailsValue,
} from "@/components/shared/BirthDetailsFields";
import { chartFormCopy } from "@/lib/chart-i18n";
import { chartPreviewCopy } from "@/lib/tools/chart-preview-copy";

/**
 * Inline birth-details entry for panels that read `useBirthProfile().primary`
 * directly and have no form of their own — `NumerologyPanel`, `PanchangPanel`,
 * `AnnualForecastPanel`. Each previously showed a "no profile yet" message
 * that told the visitor to "enter birth details above," but nothing on
 * those routes (`resultPanel`-only tool landings, no `sections`) ever
 * rendered such a form — this is the fix for that: a first-time visitor to
 * one of these three tools had no way to use it at all.
 *
 * `upsertProfile` here doesn't need a precomputed chart — omitting
 * `chartData` lets the signed-in path compute and store it itself (see
 * `NewBirthProfile.chartData`'s doc comment).
 */
export default function NeedsBirthDetails({ idPrefix }: { idPrefix: string }) {
  const { language } = useLanguage();
  const t = chartFormCopy[language];
  const copy = chartPreviewCopy[language];
  const { upsertProfile } = useBirthProfile();
  const { toast } = useToast();

  const [entry, setEntry] = useState<BirthDetailsValue>(EMPTY_BIRTH_DETAILS);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!isBirthDetailsComplete(entry) || !entry.location) return;
    setSubmitting(true);
    try {
      await upsertProfile({
        label: entry.name.trim() || entry.location.display_name,
        locationName: entry.location.display_name,
        birth: {
          year: Number(entry.date.slice(0, 4)),
          month: Number(entry.date.slice(5, 7)),
          day: Number(entry.date.slice(8, 10)),
          hour: Number(entry.time.slice(0, 2)),
          minute: Number(entry.time.slice(3, 5)),
          latitude: Number(entry.location.lat),
          longitude: Number(entry.location.lon),
        },
        isPrimary: false,
      });
    } catch {
      toast(t.saveError);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="washi-card p-6 md:p-7">
      <p className="mb-4 font-body text-text">{copy.needDetails}</p>
      <BirthDetailsFields
        value={entry}
        onChange={(patch) => setEntry((v) => ({ ...v, ...patch }))}
        idPrefix={idPrefix}
      />
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!isBirthDetailsComplete(entry) || submitting}
        className="washi-btn-primary mt-4 disabled:opacity-50"
      >
        {copy.generate}
      </button>
    </div>
  );
}
