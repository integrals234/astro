"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import Link from "@/components/i18n/LocaleLink";
import { useBirthProfile } from "@/components/profile/ProfileProvider";
import { useToast } from "@/components/ui/Toaster";
import BookingHandoff from "@/components/tools/BookingHandoff";
import BirthDetailsFields, {
  EMPTY_BIRTH_DETAILS,
  isBirthDetailsComplete,
  type BirthDetailsValue,
} from "@/components/shared/BirthDetailsFields";
import { chartFormCopy, type ChartTranslations } from "@/lib/chart-i18n";
import { natalToChartFormData, toChartFormData } from "@/lib/profile/types";
import type { ChartData } from "@/lib/chart-types";
import { trackEvent } from "@/lib/analytics/events";
import { NAKSHATRAS, findNakshatra } from "@/lib/jyotish/nakshatra-data";
import { nakshatras } from "@/lib/education/nakshatras-content";
import {
  PLANET_REMEDY,
  NATURE_WHY,
  DEITY_REMEDY_COPY,
} from "@/lib/jyotish/nakshatra-remedies";
import { nakshatraFinderCopy } from "@/lib/tools/nakshatra-finder-copy";

interface Result {
  nakshatraNumber: number;
  nakshatraName: string;
  pada: number | null;
  moonSign: string;
  personLabel: string | null;
}

/**
 * Free Nakshatra Calculator — its own entry form and its own
 * `/api/charts/compute` call, same shape as `ChartSectionResult`'s inline
 * path, but with a purpose-built result layout (star + 2x2 stat card,
 * meaning, nakshatra-level "for your chart" guidance, remedies, cross-links)
 * rather than the generic planets table `ChartSectionBody` renders.
 *
 * Auto-computes from the shared birth profile the moment one exists — the
 * site's "enter once, use everywhere" promise — so a visitor who already
 * has details saved from any other tool never sees the form at all.
 */
export default function NakshatraFinderPanel() {
  const { language } = useLanguage();
  const t: ChartTranslations = chartFormCopy[language];
  const copy = nakshatraFinderCopy[language];
  const { primary, isLoaded, upsertProfile } = useBirthProfile();
  const { toast } = useToast();

  const [entry, setEntry] = useState<BirthDetailsValue>(EMPTY_BIRTH_DETAILS);
  const [timeUnknown, setTimeUnknown] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [result, setResult] = useState<Result | null>(null);
  const [computedFor, setComputedFor] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);

  const runCompute = async (
    formData: ReturnType<typeof natalToChartFormData>,
    padaKnown: boolean,
    personLabel: string | null,
  ) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/charts/compute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("compute failed");
      const data: ChartData = await response.json();
      const moon = data.planets.find((p) => p.name === "Moon");
      if (!moon) throw new Error("no moon");
      const row = findNakshatra(moon.nakshatra);
      if (!row) throw new Error("unknown nakshatra");
      setResult({
        nakshatraNumber: row.number,
        nakshatraName: row.name,
        pada: padaKnown ? moon.nakshatra_pada : null,
        moonSign: moon.sign,
        personLabel,
      });
      setStatus("idle");
      trackEvent("tool_completed", { slug: "nakshatra-finder", locale: language });
      return data;
    } catch {
      setStatus("error");
      return null;
    }
  };

  // Auto-compute from the remembered person, once, the first time one
  // exists — same pattern as `ChartSectionResult`.
  useEffect(() => {
    if (!isLoaded || !primary || editing || computedFor === primary.id) return;
    void (async () => {
      setComputedFor(primary.id);
      trackEvent("tool_opened", { slug: "nakshatra-finder", locale: language });
      await runCompute(toChartFormData(primary), true, primary.label);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, primary, editing, computedFor]);

  const handleSubmit = async () => {
    setAttemptedSubmit(true);
    if (!isBirthDetailsComplete(entry) || !entry.location) return;
    const birth = {
      year: Number(entry.date.slice(0, 4)),
      month: Number(entry.date.slice(5, 7)),
      day: Number(entry.date.slice(8, 10)),
      hour: Number(entry.time.slice(0, 2)),
      minute: Number(entry.time.slice(3, 5)),
      latitude: Number(entry.location.lat),
      longitude: Number(entry.location.lon),
    };
    const data = await runCompute(
      natalToChartFormData(birth),
      !timeUnknown,
      entry.name.trim() || null,
    );
    if (!data) return;
    setEditing(false);

    // An approximate (default-noon) time isn't confidently this person's
    // actual birth time — saving it as their shared profile would quietly
    // hand every other tool (ascendant-sensitive ones especially) a wrong
    // time as if it were exact. Only remembered site-wide when known.
    if (timeUnknown) return;
    try {
      await upsertProfile({
        label: entry.name.trim() || entry.location.display_name,
        locationName: entry.location.display_name,
        birth,
        isPrimary: false,
        chartData: data,
      });
    } catch {
      toast(t.saveError);
    }
  };

  const handleEdit = () => {
    if (primary) {
      setEntry({
        name: primary.label,
        date: `${String(primary.birth.year).padStart(4, "0")}-${String(primary.birth.month).padStart(2, "0")}-${String(primary.birth.day).padStart(2, "0")}`,
        time: `${String(primary.birth.hour).padStart(2, "0")}:${String(primary.birth.minute).padStart(2, "0")}`,
        location: {
          display_name: primary.locationName,
          lat: String(primary.birth.latitude),
          lon: String(primary.birth.longitude),
        },
      });
    }
    setEditing(true);
  };

  if (!isLoaded) {
    return <div className="washi-card h-40 animate-pulse" aria-hidden />;
  }

  // A visitor with a saved profile skips the form entirely — the auto-compute
  // effect above is already running — and sees the result card's skeleton
  // rather than a form they don't need to fill in.
  const showForm = editing || (!primary && !result);
  const showResultSkeleton = !showForm && !result;

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {copy.trustItems.map((item) => (
          <span key={item} className="washi-badge">
            {item}
          </span>
        ))}
      </div>

      {showForm && (
        <div className="washi-card p-6 md:p-7">
          <BirthDetailsFields
            value={entry}
            onChange={(patch) => setEntry((v) => ({ ...v, ...patch }))}
            idPrefix="nakshatra-finder"
          />

          {attemptedSubmit && !entry.date && (
            <p className="mt-1.5 text-xs text-terracotta">{copy.requiredField}</p>
          )}
          {attemptedSubmit && !entry.location && (
            <p className="mt-1.5 text-xs text-terracotta">{copy.requiredField}</p>
          )}

          <div className="mt-3">
            <label className="flex items-center gap-2 text-xs text-text-muted">
              <input
                type="checkbox"
                checked={timeUnknown}
                onChange={(e) => setTimeUnknown(e.target.checked)}
              />
              {copy.dontKnowTime}
            </label>
            <p className="mt-1.5 text-xs text-text-muted">{copy.timeHelper}</p>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="washi-btn-primary mt-5 disabled:opacity-50"
          >
            {status === "loading" ? copy.computing : copy.submit}
          </button>
          {status === "error" && <p className="mt-3 text-sm text-terracotta">{copy.error}</p>}

          <p className="washi-measure mt-4 text-xs text-text-muted">
            <Link href="/tools/birth-time-check" className="underline">
              {copy.birthTimeSensitivityLink}
            </Link>
          </p>
        </div>
      )}

      {showResultSkeleton && (
        <div className="washi-card h-64 animate-pulse" aria-hidden />
      )}

      {!showForm && result && (
        <NakshatraResult
          result={result}
          copy={copy}
          t={t}
          language={language}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}

function NakshatraResult({
  result,
  copy,
  t,
  language,
  onEdit,
}: {
  result: Result;
  copy: (typeof nakshatraFinderCopy)[keyof typeof nakshatraFinderCopy];
  t: ChartTranslations;
  language: keyof typeof nakshatraFinderCopy;
  onEdit: () => void;
}) {
  const nakshatraRow = NAKSHATRAS[result.nakshatraNumber - 1];
  const education = nakshatras.find((n) => n.number === result.nakshatraNumber);
  if (!education) return null;

  const planetRemedy = PLANET_REMEDY[nakshatraRow.lord];
  const natureWhy = NATURE_WHY[education.nature.en];

  return (
    <div className="space-y-8">
      <div className="washi-card p-6 text-center md:p-7">
        {result.personLabel && (
          <p className="washi-eyebrow mb-2">{copy.forPerson(result.personLabel)}</p>
        )}
        <Star size={22} aria-hidden className="mx-auto text-gold" />
        <p className="mt-3 font-header text-[length:var(--step-3)] text-ink">
          {education.name[language]}
        </p>
        <p className="mt-1 text-sm text-text-muted">{education.name.hi}</p>

        <hr className="washi-hairline my-5" />

        <div className="grid grid-cols-2 gap-4 text-left">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.resultPadaLabel}</p>
            <p className="mt-1 font-body text-ink">
              {result.pada ?? copy.padaUnresolved}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.resultRulerLabel}</p>
            <p className="mt-1 font-body text-ink">{t.planets[nakshatraRow.lord] ?? nakshatraRow.lord}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.resultDeityLabel}</p>
            <p className="mt-1 font-body text-ink">{education.deity[language]}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.resultMoonSignLabel}</p>
            <p className="mt-1 font-body text-ink">{t.signs[result.moonSign] ?? result.moonSign}</p>
          </div>
        </div>

        <button type="button" onClick={onEdit} className="washi-btn-secondary mt-6 px-4 py-2 text-sm">
          {copy.calculateAgain}
        </button>
      </div>

      <div className="washi-card p-6 md:p-7">
        <p className="washi-eyebrow mb-3">{copy.meaningHeading}</p>
        <p className="font-body leading-relaxed text-text">{education.description[language]}</p>
      </div>

      <div className="washi-card p-6 md:p-7">
        <p className="washi-eyebrow mb-3">{copy.forYourChartHeading}</p>
        <p className="mb-3 font-body text-text">{copy.forYourChartLead}</p>
        <ul className="space-y-2">
          {education.qualities.map((quality) => (
            <li key={quality.en} className="flex items-start gap-2.5 font-body text-sm text-text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" />
              {quality[language]}
            </li>
          ))}
        </ul>
      </div>

      <div className="washi-card p-6 md:p-7">
        <p className="washi-eyebrow mb-4">{copy.remediesHeading}</p>
        <div className="space-y-5">
          <div>
            <p className="font-body font-semibold text-ink">{planetRemedy.title[language]}</p>
            <p className="mt-1 text-xs italic leading-relaxed text-terracotta">
              {planetRemedy.whyItHelps[language]}
            </p>
            <p className="mt-1 text-xs text-text-muted">{planetRemedy.howTo[language]}</p>
          </div>
          <hr className="washi-hairline" />
          <div>
            <p className="font-body font-semibold text-ink">
              {DEITY_REMEDY_COPY.title[language](education.deity[language])}
            </p>
            <p className="mt-1 text-xs italic leading-relaxed text-terracotta">
              {natureWhy?.[language]}
            </p>
            <p className="mt-1 text-xs text-text-muted">{DEITY_REMEDY_COPY.howTo[language]}</p>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-ink">{copy.exploreHeading}</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/tools/birth-chart" className="washi-btn-secondary px-4 py-2 text-sm">
            {copy.exploreChart}
          </Link>
          <Link href="/tools/dasha-calculator" className="washi-btn-secondary px-4 py-2 text-sm">
            {copy.exploreDasha}
          </Link>
          <Link href="/tools/transit-now" className="washi-btn-secondary px-4 py-2 text-sm">
            {copy.exploreTransit}
          </Link>
        </div>
      </div>

      <BookingHandoff tool="generic" />
    </div>
  );
}
