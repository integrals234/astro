"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Trash2 } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBirthProfile } from "@/components/profile/ProfileProvider";
import { useToast } from "@/components/ui/Toaster";
import BookingHandoff from "@/components/tools/BookingHandoff";
import { Calculating, InlineError } from "@/components/tools/ToolResultFrame";
import BirthDetailsFields, {
  birthFromDetails,
  EMPTY_BIRTH_DETAILS,
  validateBirthDetails,
  type BirthDetailsErrors,
  type BirthDetailsValue,
} from "@/components/shared/BirthDetailsFields";
import { trackEvent } from "@/lib/analytics/events";
import { computeAshtakoot, type AshtakootResult } from "@/lib/jyotish/ashtakoot";
import {
  natalToChartFormData,
  profilePersonName,
  toChartFormData,
  type BirthProfile,
} from "@/lib/profile/types";
import type { ChartData } from "@/lib/chart-types";
import { compatibilityCopy } from "@/lib/tools/compatibility-copy";
import { toolUiCopy } from "@/lib/tools/tool-ui-copy";

/**
 * Ashtakoot compatibility between a bride and a groom.
 *
 * Two ways to fill the two slots: pick from profiles already on the account
 * (which now means real `SavedChart` rows — see `ProfileProvider`), or add
 * someone new directly here, side by side. Either way the person becomes a
 * real profile, visible afterwards in /chart's own recent/saved lists too,
 * since both paths write to the same table now.
 *
 * The scoring is a pure function tested against all 236,196 combinations;
 * everything here is presentation and person management.
 */
export default function CompatibilityResult() {
  const { language } = useLanguage();
  const { profiles, primary, isLoaded, removeProfile, isSyncing } = useBirthProfile();
  const { confirm } = useToast();
  const copy = compatibilityCopy[language];
  const ui = toolUiCopy[language];

  // The first slot starts as the remembered person — most visitors check
  // themselves against someone else.
  const [brideChoice, setBrideChoice] = useState<string | null>(null);
  const [groomId, setGroomId] = useState<string>("");
  const brideId = brideChoice ?? primary?.id ?? "";
  const [scored, setScored] = useState<{ key: string; result: AshtakootResult } | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const resultRef = useRef<HTMLDivElement>(null);
  const userAction = useRef(false);

  const pairKey = brideId && groomId && brideId !== groomId ? `${brideId}|${groomId}` : "";
  // A score is only ever shown next to the pair it was calculated for.
  const result = scored && scored.key === pairKey ? scored.result : null;

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
    const bride = profiles.find((p) => p.id === brideId);
    const groom = profiles.find((p) => p.id === groomId);
    if (!bride || !groom || !pairKey) return;

    setStatus("loading");
    trackEvent("tool_opened", { slug: "compatibility", locale: language });
    try {
      const [mb, mg] = await Promise.all([moonOf(bride), moonOf(groom)]);
      const value = computeAshtakoot(mb, mg);
      if (!value) throw new Error("scoring failed");
      setScored({ key: pairKey, result: value });
      setStatus("idle");
      trackEvent("tool_completed", { slug: "compatibility", locale: language });
    } catch {
      setStatus("error");
    }
  }, [brideId, groomId, pairKey, profiles, moonOf, language]);

  // Calculate as soon as two different people are chosen.
  useEffect(() => {
    if (!pairKey || scored?.key === pairKey) return;
    void Promise.resolve().then(run);
  }, [pairKey, scored, run]);

  // Bring the score into view after the visitor picked or added someone.
  useEffect(() => {
    if (!result || !userAction.current || !resultRef.current) return;
    userAction.current = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resultRef.current.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }, [result]);

  const pick = (slot: "bride" | "groom", id: string) => {
    userAction.current = true;
    if (slot === "bride") setBrideChoice(id);
    else setGroomId(id);
  };

  const handleDelete = useCallback(
    async (profile: BirthProfile) => {
      const name = optionLabel(profile);
      const ok = await confirm({ message: ui.confirmDelete(name), confirmLabel: ui.deleteLabel, cancelLabel: ui.cancel });
      if (!ok) return;
      if (profile.id === brideId) setBrideChoice("");
      if (profile.id === groomId) setGroomId("");
      await removeProfile(profile.id);
    },
    [brideId, groomId, removeProfile, confirm, ui],
  );

  if (!isLoaded) return <Calculating />;

  return (
    <div className="space-y-6">
      <div className="washi-card p-6 md:p-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <PersonPicker
            label={copy.bride}
            value={brideId}
            onChange={(id) => pick("bride", id)}
            profiles={profiles}
            placeholder={copy.choose}
          />
          <PersonPicker
            label={copy.groom}
            value={groomId}
            onChange={(id) => pick("groom", id)}
            profiles={profiles}
            placeholder={copy.choose}
          />
        </div>
        {profiles.length < 2 ? <p className="mt-3 text-sm text-text-muted">{copy.addNew} ↓</p> : null}
        {brideId && brideId === groomId && (
          <p className="mt-3 text-sm text-text-muted">{copy.samePerson}</p>
        )}
        {status === "loading" ? (
          <p role="status" className="mt-3 text-sm text-text-muted">{ui.calculating}</p>
        ) : null}

        {/*
          Varna and Gana are directional in the classical rules, so the order
          of these two picks can move the total by up to two points. Stated
          next to the inputs it applies to — a score that silently changes on
          reorder would look like a bug.
        */}
        <p className="washi-measure mt-4 text-xs leading-relaxed text-text-muted">
          {copy.orderNote}
        </p>
      </div>

      {status === "error" ? (
        <InlineError message={copy.error}>
          <button type="button" onClick={run} className="washi-btn-primary px-4 text-sm">
            {ui.retry}
          </button>
        </InlineError>
      ) : null}

      {result && (
        <div ref={resultRef} className="scroll-mt-24 space-y-6">
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
        </div>
      )}

      {/* Folded away once there are people to choose from. */}
      <details className="washi-card p-6 md:p-7" open={profiles.length < 2}>
        <summary className="cursor-pointer washi-eyebrow">{copy.addNew}</summary>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <AddPersonForm role="bride" label={copy.bride} onAdded={(id) => pick("bride", id)} />
          <AddPersonForm role="groom" label={copy.groom} onAdded={(id) => pick("groom", id)} />
        </div>
      </details>

      {profiles.length > 0 && (
        <details className="washi-card p-6 md:p-7">
          <summary className="cursor-pointer font-body text-sm text-ink">
            {copy.managePeople(profiles.length)}
          </summary>
          <ul className="mt-4 space-y-2">
            {profiles.map((p) => (
              <li
                key={p.id}
                className="flex items-center justify-between gap-3 rounded-md border border-border p-2.5"
              >
                <div className="min-w-0">
                  <p className="truncate font-body text-sm text-ink">{optionLabel(p)}</p>
                  <p className="truncate text-xs text-text-muted">
                    {p.locationName}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(p)}
                  disabled={isSyncing}
                  aria-label={copy.deletePerson(optionLabel(p))}
                  className="shrink-0 rounded-md p-1.5 text-text-muted transition-colors hover:text-terracotta disabled:opacity-50"
                >
                  <Trash2 size={15} />
                </button>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}

/** "name · YYYY/MM/DD" — the label used to be the full geocoder address when no name was given. */
function optionLabel(p: BirthProfile): string {
  const name = profilePersonName(p) || p.locationName.split(",")[0];
  return `${name} · ${p.birth.year}/${String(p.birth.month).padStart(2, "0")}/${String(p.birth.day).padStart(2, "0")}`;
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
            {optionLabel(p)}
          </option>
        ))}
      </select>
    </label>
  );
}

function AddPersonForm({
  role,
  label,
  onAdded,
}: {
  role: "bride" | "groom";
  label: string;
  onAdded: (id: string) => void;
}) {
  const { language } = useLanguage();
  const { upsertProfile } = useBirthProfile();
  const copy = compatibilityCopy[language];

  const [value, setValue] = useState<BirthDetailsValue>(EMPTY_BIRTH_DETAILS);
  const [errors, setErrors] = useState<BirthDetailsErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "done">(
    "idle",
  );

  const handleAdd = async (event?: React.FormEvent) => {
    event?.preventDefault();
    const found = validateBirthDetails(value, language);
    setErrors(found);
    if (Object.keys(found).length > 0 || !value.location) return;
    setStatus("loading");
    try {
      const birth = birthFromDetails(value);

      const response = await fetch("/api/charts/compute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(natalToChartFormData(birth)),
      });
      if (!response.ok) throw new Error("compute failed");
      const chartData: ChartData = await response.json();

      const profile = await upsertProfile({
        label: value.name.trim() || value.location.display_name,
        locationName: value.location.display_name,
        birth,
        isPrimary: false,
        chartData,
      });

      onAdded(profile.id);
      setStatus("done");
      setValue(EMPTY_BIRTH_DETAILS);
      window.setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleAdd} noValidate>
      <p className="washi-eyebrow-muted mb-3">{label}</p>
      <BirthDetailsFields
        value={value}
        onChange={(patch) => {
          setValue((v) => ({ ...v, ...patch }));
          setErrors({});
        }}
        idPrefix={`compat-${role}`}
        errors={errors}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="washi-btn-secondary mt-3 w-full text-sm disabled:opacity-50"
      >
        {status === "loading"
          ? copy.computing
          : status === "done"
            ? copy.added
            : copy.addAs(label)}
      </button>
      {status === "error" && (
        <p className="mt-2 text-xs text-terracotta" role="alert">{copy.error}</p>
      )}
    </form>
  );
}
