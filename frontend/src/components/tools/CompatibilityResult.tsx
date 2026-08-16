"use client";

import { useCallback, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBirthProfile } from "@/components/profile/ProfileProvider";
import BookingHandoff from "@/components/tools/BookingHandoff";
import { trackEvent } from "@/lib/analytics/events";
import { computeAshtakoot, type AshtakootResult } from "@/lib/jyotish/ashtakoot";
import { toChartFormData, type BirthProfile } from "@/lib/profile/types";
import type { ChartData } from "@/lib/chart-types";
import { compatibilityCopy } from "@/lib/tools/compatibility-copy";

/**
 * Ashtakoot compatibility between two saved birth profiles.
 *
 * Needs two people, which is what makes the shared profile store pay off here:
 * a visitor who has already entered themselves only has to add a partner. The
 * scoring itself is a pure function tested against all 236,196 combinations,
 * so everything below is presentation.
 *
 * The breakdown is shown in full rather than a headline number, for the reason
 * the page body argues: two couples can both score 24 and mean different
 * things.
 */
export default function CompatibilityResult() {
  const { language } = useLanguage();
  const { profiles, isLoaded } = useBirthProfile();
  const copy = compatibilityCopy[language];

  const [aId, setAId] = useState<string>("");
  const [bId, setBId] = useState<string>("");
  const [result, setResult] = useState<AshtakootResult | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const moonOf = useCallback(async (profile: BirthProfile) => {
    const response = await fetch("/api/charts/compute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toChartFormData(profile)),
    });
    if (!response.ok) throw new Error("compute failed");
    const data: ChartData = await response.json();
    const moon = data.planets.find((p) => p.name === "Moon");
    if (!moon) throw new Error("no moon");
    return { moonSign: moon.sign, moonNakshatra: moon.nakshatra };
  }, []);

  const run = useCallback(async () => {
    const a = profiles.find((p) => p.id === aId);
    const b = profiles.find((p) => p.id === bId);
    if (!a || !b) return;

    setStatus("loading");
    trackEvent("tool_opened", { slug: "compatibility", locale: language });
    try {
      const [ma, mb] = await Promise.all([moonOf(a), moonOf(b)]);
      const scored = computeAshtakoot(ma, mb);
      if (!scored) throw new Error("scoring failed");
      setResult(scored);
      setStatus("idle");
      trackEvent("tool_completed", { slug: "compatibility", locale: language });
    } catch {
      setStatus("error");
    }
  }, [aId, bId, profiles, moonOf, language]);

  if (!isLoaded) {
    return <div className="washi-card h-40 animate-pulse" aria-hidden />;
  }

  if (profiles.length < 2) {
    return (
      <div className="washi-card p-6 md:p-7">
        <p className="font-body text-text">
          {profiles.length === 0 ? copy.needTwo : copy.needOneMore}
        </p>
        <a href="#tool-form" className="washi-btn-primary mt-4 inline-block">
          {copy.addPerson}
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="washi-card p-6 md:p-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <PersonPicker
            label={copy.personA}
            value={aId}
            onChange={setAId}
            profiles={profiles}
            placeholder={copy.choose}
          />
          <PersonPicker
            label={copy.personB}
            value={bId}
            onChange={setBId}
            profiles={profiles}
            placeholder={copy.choose}
          />
        </div>

        <button
          type="button"
          onClick={run}
          disabled={!aId || !bId || aId === bId || status === "loading"}
          className="washi-btn-primary mt-5 disabled:opacity-50"
        >
          {status === "loading" ? copy.computing : copy.compute}
        </button>
        {aId && aId === bId && (
          <p className="mt-2 text-sm text-text-muted">{copy.samePerson}</p>
        )}
        {/*
          Varna and Gana are directional in the classical rules, so the order of
          these two dropdowns can move the total by up to two points. Stated up
          front, next to the inputs it applies to — a score that silently
          changes on reorder would look like a bug and cost the tool its
          credibility.
        */}
        <p className="washi-measure mt-4 text-xs leading-relaxed text-text-muted">
          {copy.orderNote}
        </p>
        {status === "error" && (
          <p className="mt-3 text-sm text-terracotta">{copy.error}</p>
        )}
      </div>

      {result && (
        <>
          <div className="washi-card p-6 md:p-7">
            <p className="washi-eyebrow mb-2">{copy.totalLabel}</p>
            <p className="font-header text-[length:var(--step-3)] text-ink">
              {formatScore(result.total)}
              <span className="text-[length:var(--step-1)] text-text-muted">
                {" "}
                / 36
              </span>
            </p>

            {result.hasMajorDosha && (
              <p className="washi-measure mt-4 rounded-md border border-border p-3 text-sm text-text">
                {copy.doshaNote}
              </p>
            )}

            <div className="mt-6 space-y-4">
              {result.kutas.map((k) => (
                <div key={k.id}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-body text-sm text-ink">
                      {copy.kutaNames[k.id]}
                    </span>
                    <span className="font-chart text-sm tabular-nums text-text-muted">
                      {formatScore(k.score)}/{k.max}
                    </span>
                  </div>
                  <div
                    className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-neutral-tag"
                    role="img"
                    aria-label={`${copy.kutaNames[k.id]} ${formatScore(k.score)}/${k.max}`}
                  >
                    <div
                      className="h-full rounded-full bg-moss"
                      style={{ width: `${(k.score / k.max) * 100}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-text-muted">
                    {copy.kutaBlurbs[k.id]} — {k.detail}
                  </p>
                </div>
              ))}
            </div>

            <p className="washi-measure mt-6 text-xs leading-relaxed text-text-muted">
              {copy.footnote}
            </p>
          </div>

          <BookingHandoff tool="compatibility" offering="compatibility" />
        </>
      )}
    </div>
  );
}

/** Halves occur legitimately (Vashya, Tara), so trailing `.0` is suppressed. */
function formatScore(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

function PersonPicker({
  label,
  value,
  onChange,
  profiles,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (id: string) => void;
  profiles: BirthProfile[];
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="washi-eyebrow-muted mb-1 block">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-border bg-transparent px-3 py-2 font-body text-ink"
      >
        <option value="">{placeholder}</option>
        {profiles.map((p) => (
          <option key={p.id} value={p.id}>
            {p.label}
          </option>
        ))}
      </select>
    </label>
  );
}
