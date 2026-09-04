"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
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
import { SIGN_LORD, PLANET_ORDER, GEMSTONE } from "@/lib/jyotish/gemstones";
import { gemstoneCopy } from "@/lib/tools/gemstone-copy";

/**
 * Gemstone Recommendation — self-contained, same shape as
 * `NakshatraFinderPanel`. Reads only the already-returned
 * `ascendant_sign` and each planet's `dignity` from `/api/charts/compute` —
 * no backend change needed, unlike the Career Report.
 */
export default function GemstonePanel() {
  const { language } = useLanguage();
  const t: ChartTranslations = chartFormCopy[language];
  const copy = gemstoneCopy[language];
  const { primary, isLoaded, upsertProfile } = useBirthProfile();
  const { toast } = useToast();

  const [entry, setEntry] = useState<BirthDetailsValue>(EMPTY_BIRTH_DETAILS);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [computedFor, setComputedFor] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);

  const runCompute = async (formData: ReturnType<typeof natalToChartFormData>) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/charts/compute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("compute failed");
      const data: ChartData = await response.json();
      setChartData(data);
      setStatus("idle");
      trackEvent("tool_completed", { slug: "gemstone-recommendation", locale: language });
      return data;
    } catch {
      setStatus("error");
      return null;
    }
  };

  useEffect(() => {
    if (!isLoaded || !primary || editing || computedFor === primary.id) return;
    void (async () => {
      setComputedFor(primary.id);
      trackEvent("tool_opened", { slug: "gemstone-recommendation", locale: language });
      await runCompute(toChartFormData(primary));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, primary, editing, computedFor]);

  const handleSubmit = async () => {
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
    const data = await runCompute(natalToChartFormData(birth));
    if (!data) return;
    setEditing(false);
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

  if (!isLoaded) {
    return <div className="washi-card h-40 animate-pulse" aria-hidden />;
  }

  const showForm = editing || (!primary && !chartData);
  const showSkeleton = !showForm && !chartData;

  const lagnaLord = chartData ? SIGN_LORD[chartData.ascendant_sign] : null;
  const weakestPlanet = chartData
    ? (PLANET_ORDER.find((name) => {
        const planet = chartData.planets.find((p) => p.name === name);
        return planet?.dignity === "Debilitated";
      }) ?? null)
    : null;

  return (
    <div>
      {showForm && (
        <div className="washi-card p-6 md:p-7">
          <BirthDetailsFields
            value={entry}
            onChange={(patch) => setEntry((v) => ({ ...v, ...patch }))}
            idPrefix="gemstone"
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isBirthDetailsComplete(entry) || status === "loading"}
            className="washi-btn-primary mt-5 disabled:opacity-50"
          >
            {status === "loading" ? copy.computing : copy.submit}
          </button>
          {status === "error" && (
            <p className="mt-3 text-sm text-terracotta">{copy.error}</p>
          )}
        </div>
      )}

      {showSkeleton && <div className="washi-card h-64 animate-pulse" aria-hidden />}

      {!showForm && chartData && lagnaLord && (
        <div className="space-y-6">
          <div className="washi-card border-l-4 border-terracotta p-6 md:p-7">
            <p className="font-body text-sm leading-relaxed text-text">{copy.caution}</p>
          </div>

          <GemstoneCard
            heading={copy.lagnaCardHeading(t.planets[lagnaLord] ?? lagnaLord)}
            intro={copy.lagnaCardIntro}
            entry={GEMSTONE[lagnaLord]}
            copy={copy}
            language={language}
          />

          {weakestPlanet ? (
            <GemstoneCard
              heading={copy.weakCardHeading(t.planets[weakestPlanet] ?? weakestPlanet)}
              intro={copy.weakCardIntro}
              entry={GEMSTONE[weakestPlanet]}
              copy={copy}
              language={language}
            />
          ) : (
            <div className="washi-card p-6 md:p-7">
              <p className="text-sm text-text-muted">{copy.noWeakPlanet}</p>
            </div>
          )}

          <div className="text-center">
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="washi-btn-secondary px-4 py-2 text-sm"
            >
              {copy.calculateAgain}
            </button>
          </div>

          <BookingHandoff tool="gemstone" />
        </div>
      )}
    </div>
  );
}

function GemstoneCard({
  heading,
  intro,
  entry,
  copy,
  language,
}: {
  heading: string;
  intro: string;
  entry: (typeof GEMSTONE)[string];
  copy: (typeof gemstoneCopy)[keyof typeof gemstoneCopy];
  language: keyof typeof gemstoneCopy;
}) {
  return (
    <div className="washi-card p-6 md:p-7">
      <p className="font-header text-xl text-ink">{heading}</p>
      <p className="mt-2 text-sm text-text-muted">{intro}</p>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.primaryStoneLabel}</p>
          <p className="mt-1 font-body text-ink">{entry.primaryStone[language]}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.substituteStoneLabel}</p>
          <p className="mt-1 font-body text-ink">{entry.substituteStone[language]}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.metalLabel}</p>
          <p className="mt-1 font-body text-ink">{entry.metal[language]}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.fingerLabel}</p>
          <p className="mt-1 font-body text-ink">{entry.finger[language]}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.dayLabel}</p>
          <p className="mt-1 font-body text-ink">{entry.day[language]}</p>
        </div>
      </div>
    </div>
  );
}
