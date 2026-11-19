"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import Link from "@/components/i18n/LocaleLink";
import BookingHandoff from "@/components/tools/BookingHandoff";
import BirthDetailsFields, {
  EMPTY_BIRTH_DETAILS,
  isBirthDetailsComplete,
  type BirthDetailsValue,
} from "@/components/shared/BirthDetailsFields";
import { chartFormCopy, type ChartTranslations } from "@/lib/chart-i18n";
import { natalToChartFormData } from "@/lib/profile/types";
import type { ChartData } from "@/lib/chart-types";
import { trackEvent } from "@/lib/analytics/events";
import { computeMulank, computeBhagyank } from "@/lib/numerology";
import { scoreCandidateName } from "@/lib/jyotish/numerology-harmony";
import {
  NAKSHATRAS,
  findNakshatra,
} from "@/lib/jyotish/nakshatra-data";
import {
  padaSyllable,
  japaneseOnsetFor,
  signForNakshatraPada,
  PADA_SYLLABLES,
  type PadaSyllable,
} from "@/lib/jyotish/naam-akshar";
import { nakshatras } from "@/lib/education/nakshatras-content";
import {
  namesForOnset,
  type BabyName,
  type BabyGender,
} from "@/lib/tools/baby-names-data";
import { babyNamesCopy } from "@/lib/tools/baby-names-copy";

type GenderFilter = BabyGender | "all";
type SortMode = "score" | "alpha";

interface Result {
  nakshatraNumber: number;
  nakshatraName: string;
  pada: 1 | 2 | 3 | 4;
  moonSign: string;
}

interface ScoredName extends BabyName {
  score: number;
}

const SHORTLIST_KEY = "jyotish-life-baby-names-shortlist";

function shortlistId(name: BabyName): string {
  return `${name.kanji}-${name.romaji}`;
}

function loadShortlist(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(SHORTLIST_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

/**
 * Baby Names by Nakshatra — self-contained, like `BirthTimeSensitivityPanel`:
 * its own entry form and its own `/api/charts/compute` call, since it needs
 * a fresh birth-detail entry (a baby, usually not an existing saved profile)
 * rather than `ChartDataProvider`'s one-chart contract.
 *
 * The naming rule (nakshatra pada → Sanskrit akshara) is classical and
 * exact; the candidate names are real Japanese given names bridged from
 * that akshara to the nearest Japanese onset (`naam-akshar.ts`), since
 * Japanese phonology has no letter-for-letter match for Sanskrit's
 * consonants. Numerology scoring reuses `lib/numerology.ts` and
 * `lib/jyotish/numerology-harmony.ts` rather than reimplementing either.
 */
export default function BabyNamesPanel() {
  const { language } = useLanguage();
  const t: ChartTranslations = chartFormCopy[language];
  const copy = babyNamesCopy[language];

  const [entry, setEntry] = useState<BirthDetailsValue>(EMPTY_BIRTH_DETAILS);
  const [gender, setGender] = useState<GenderFilter>("all");
  const [sort, setSort] = useState<SortMode>("score");
  const [manualMode, setManualMode] = useState(false);
  const [manualNakshatra, setManualNakshatra] = useState<number | "">("");
  const [manualPada, setManualPada] = useState<1 | 2 | 3 | 4>(1);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [result, setResult] = useState<Result | null>(null);
  const [shortlist, setShortlist] = useState<string[]>(loadShortlist);
  const [shortlistOpen, setShortlistOpen] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(SHORTLIST_KEY, JSON.stringify(shortlist));
    } catch {
      // Storage can be unavailable (private mode); the shortlist just
      // won't persist across visits, which is a fine degradation.
    }
  }, [shortlist]);

  const canSubmitChart = isBirthDetailsComplete(entry);
  const canSubmitManual = Boolean(entry.date) && manualNakshatra !== "";

  const handleSubmit = async () => {
    trackEvent("tool_opened", { slug: "baby-names", locale: language });

    if (manualMode) {
      if (!canSubmitManual) return;
      const row = NAKSHATRAS[manualNakshatra - 1];
      setResult({
        nakshatraNumber: row.number,
        nakshatraName: row.name,
        pada: manualPada,
        moonSign: signForNakshatraPada(row.number, manualPada),
      });
      trackEvent("tool_completed", { slug: "baby-names", locale: language });
      return;
    }

    if (!canSubmitChart || !entry.location) return;
    setStatus("loading");
    try {
      const formData = natalToChartFormData({
        year: Number(entry.date.slice(0, 4)),
        month: Number(entry.date.slice(5, 7)),
        day: Number(entry.date.slice(8, 10)),
        hour: Number(entry.time.slice(0, 2)),
        minute: Number(entry.time.slice(3, 5)),
        latitude: Number(entry.location.lat),
        longitude: Number(entry.location.lon),
      });
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
        pada: (moon.nakshatra_pada as 1 | 2 | 3 | 4) ?? 1,
        moonSign: moon.sign,
      });
      setStatus("idle");
      trackEvent("tool_completed", { slug: "baby-names", locale: language });
    } catch {
      setStatus("error");
    }
  };

  const education = result
    ? nakshatras.find((n) => n.number === result.nakshatraNumber)
    : undefined;
  const nakshatraRow = result ? NAKSHATRAS[result.nakshatraNumber - 1] : undefined;
  const syllable: PadaSyllable | null = result
    ? padaSyllable(result.nakshatraName, result.pada)
    : null;
  const onset = syllable ? japaneseOnsetFor(syllable) : null;

  const mulank = entry.date ? computeMulank({
    year: Number(entry.date.slice(0, 4)),
    month: Number(entry.date.slice(5, 7)),
    day: Number(entry.date.slice(8, 10)),
  }) : null;
  const bhagyank = entry.date ? computeBhagyank({
    year: Number(entry.date.slice(0, 4)),
    month: Number(entry.date.slice(5, 7)),
    day: Number(entry.date.slice(8, 10)),
  }) : null;

  const { names: candidateNames, usedFallback } = onset
    ? namesForOnset(onset, gender)
    : { names: [] as BabyName[], usedFallback: false };

  const scoredNames: ScoredName[] =
    mulank === null || bhagyank === null
      ? []
      : candidateNames
          .map((name) => ({
            ...name,
            score: scoreCandidateName(name.romaji, mulank, bhagyank) ?? 5,
          }))
          .sort((a, b) =>
            sort === "score"
              ? b.score - a.score
              : a.romaji.localeCompare(b.romaji),
          );

  const shortlistedNames = scoredNames.filter((n) =>
    shortlist.includes(shortlistId(n)),
  );
  // Shortlisted names picked before a filter/sort change hid them stay
  // findable by id even if `scoredNames` no longer contains them.
  const allScoredById = new Map<string, ScoredName>();
  for (const n of scoredNames) allScoredById.set(shortlistId(n), n);

  const toggleShortlist = (name: BabyName) => {
    const id = shortlistId(name);
    setShortlist((current) =>
      current.includes(id)
        ? current.filter((i) => i !== id)
        : [...current, id],
    );
  };

  const shareText = result && syllable
    ? copy.shareMessage({
        nakshatra: education?.name[language] ?? result.nakshatraName,
        pada: result.pada,
        syllable: syllable.roman,
        names: (shortlistedNames.length > 0
          ? shortlistedNames
          : Array.from(allScoredById.values())
        ).map((n) => ({
          name: `${n.kanji} (${n.reading})`,
          meaning: language === "ja" ? n.meaning.ja : n.meaning.en,
          score: n.score,
        })),
      })
    : "";

  const handleWhatsappShare = () => {
    trackEvent("baby_names_shortlist_shared", {
      locale: language,
      method: "whatsapp",
    });
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank");
  };

  const handleCopyShare = async () => {
    trackEvent("baby_names_shortlist_shared", {
      locale: language,
      method: "clipboard",
    });
    try {
      await navigator.clipboard.writeText(shareText);
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 2000);
    } catch {
      // Clipboard access can be denied; the share text is still visible
      // in the WhatsApp draft as a fallback path.
    }
  };

  return (
    <div>
      {/*
        The page shell above this already renders the eyebrow, h1 (tool
        title), and lead (tool.lead) generically for every tool landing —
        this only adds the trust row, which is specific to this tool.
      */}
      <div className="mb-6 flex flex-wrap gap-2">
        {copy.trustItems.map((item) => (
          <span key={item} className="washi-badge">
            {item}
          </span>
        ))}
      </div>

      <div className="washi-card p-6 md:p-7">
        <BirthDetailsFields
          value={entry}
          onChange={(patch) => setEntry((v) => ({ ...v, ...patch }))}
          idPrefix="baby-names"
          showName={false}
        />

        <div className="mt-4">
          <p className="mb-1.5 text-[11px] text-text-muted">{copy.genderLabel}</p>
          <div className="washi-segmented inline-flex">
            {(["all", "boy", "girl"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setGender(option)}
                className={`px-4 py-1.5 text-[10px] font-body uppercase tracking-widest transition-colors ${gender === option ? "washi-segment-selected" : "washi-segment-unselected"}`}
              >
                {option === "all" ? copy.genderAll : option === "boy" ? copy.genderBoy : copy.genderGirl}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setManualMode((v) => !v)}
          className="washi-btn-tertiary mt-4 block text-sm"
        >
          {copy.dontKnowTime}
        </button>

        {manualMode && (
          <div className="washi-card mt-3 p-4">
            <p className="mb-3 text-xs text-text-muted">{copy.dontKnowTimeHelp}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[11px] text-text-muted">
                  {copy.manualNakshatraLabel}
                </label>
                <select
                  value={manualNakshatra}
                  onChange={(e) =>
                    setManualNakshatra(e.target.value ? Number(e.target.value) : "")
                  }
                  className="washi-field w-full p-2.5 text-sm"
                >
                  <option value="">{copy.manualNakshatraPlaceholder}</option>
                  {nakshatras.map((n) => (
                    <option key={n.id} value={n.number}>
                      {n.name[language]}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-[11px] text-text-muted">
                  {copy.manualPadaLabel}
                </label>
                <select
                  value={manualPada}
                  onChange={(e) => setManualPada(Number(e.target.value) as 1 | 2 | 3 | 4)}
                  className="washi-field w-full p-2.5 text-sm"
                >
                  {[1, 2, 3, 4].map((pada) => (
                    <option key={pada} value={pada}>
                      {copy.padaOption(pada)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={
            status === "loading" ||
            (manualMode ? !canSubmitManual : !canSubmitChart)
          }
          className="washi-btn-primary mt-5 disabled:opacity-50"
        >
          {status === "loading" ? copy.computing : copy.submit}
        </button>
        {status === "error" && <p className="mt-3 text-sm text-terracotta">{copy.error}</p>}

        {!manualMode && (
          <p className="washi-measure mt-4 text-xs text-text-muted">
            <Link href="/tools/nakshatra-finder" className="underline">
              {copy.nakshatraFinderNudge}
            </Link>
          </p>
        )}
      </div>

      {result && education && nakshatraRow && syllable && onset && (
        <div className="mt-8 space-y-8">
          <div className="washi-card p-6 md:p-7">
            <div className="flex items-center gap-3">
              <Star size={22} aria-hidden className="text-gold" />
              <div>
                <p className="font-header text-xl text-ink">{education.name[language]}</p>
                <p className="text-sm text-text-muted">{education.name.hi}</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-text-muted">{copy.resultPadaLabel}</p>
                <p className="mt-1 font-body text-ink">{result.pada}</p>
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
          </div>

          <div className="washi-card p-6 text-center md:p-7">
            <p className="washi-eyebrow mb-3">{copy.syllableHeading}</p>
            <p className="font-header text-5xl text-ink">{syllable.devanagari} ({syllable.roman})</p>
            <p className="mx-auto mt-3 max-w-md text-xs italic leading-relaxed text-terracotta">
              {copy.syllableTip(syllable.roman, education.name[language], result.pada)}
            </p>
            <p className="washi-measure mx-auto mt-4 text-xs text-text-muted">{copy.onsetBridgeNote}</p>
          </div>

          <div>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="washi-segmented inline-flex">
                {(["all", "boy", "girl"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setGender(option)}
                    className={`px-4 py-1.5 text-[10px] font-body uppercase tracking-widest transition-colors ${gender === option ? "washi-segment-selected" : "washi-segment-unselected"}`}
                  >
                    {option === "all" ? copy.genderAll : option === "boy" ? copy.genderBoy : copy.genderGirl}
                  </button>
                ))}
              </div>
              <div className="washi-segmented inline-flex">
                {(["score", "alpha"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSort(option)}
                    className={`px-4 py-1.5 text-[10px] font-body uppercase tracking-widest transition-colors ${sort === option ? "washi-segment-selected" : "washi-segment-unselected"}`}
                  >
                    {option === "score" ? copy.sortScore : copy.sortAlpha}
                  </button>
                ))}
              </div>
            </div>

            {usedFallback && (
              <p className="mb-4 text-xs text-text-muted">{copy.fallbackNote}</p>
            )}

            {scoredNames.length === 0 ? (
              <p className="text-sm text-text-muted">{copy.noResults}</p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {scoredNames.map((name) => {
                  const isShortlisted = shortlist.includes(shortlistId(name));
                  return (
                    <div key={shortlistId(name)} className="washi-card p-5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-header text-lg text-ink">{name.kanji}</p>
                          <p className="text-xs text-text-muted">{name.reading} · {name.romaji}</p>
                        </div>
                        <span
                          className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${name.score >= 8 ? "bg-terracotta/15 text-terracotta-deep" : "bg-neutral-tag text-text-muted"}`}
                        >
                          {copy.scoreLabel(name.score)}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-text-muted">
                        {language === "ja" ? name.meaning.ja : name.meaning.en}
                      </p>
                      <button
                        type="button"
                        onClick={() => toggleShortlist(name)}
                        className="washi-btn-tertiary mt-3 inline-flex items-center gap-1.5 text-xs"
                      >
                        <Star
                          size={13}
                          aria-hidden
                          fill={isShortlisted ? "currentColor" : "none"}
                        />
                        {isShortlisted ? copy.shortlistRemove : copy.shortlistAdd}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="washi-card p-5">
            <button
              type="button"
              onClick={() => setShortlistOpen((v) => !v)}
              className="font-body text-sm font-semibold text-ink"
            >
              {copy.shortlistHeading(shortlistedNames.length)}
            </button>
            {shortlistOpen && (
              <div className="mt-4 space-y-3">
                {shortlistedNames.length === 0 ? (
                  <p className="text-sm text-text-muted">{copy.shortlistEmpty}</p>
                ) : (
                  <ul className="space-y-2">
                    {shortlistedNames.map((name) => (
                      <li
                        key={shortlistId(name)}
                        className="flex items-center justify-between gap-2 text-sm"
                      >
                        <span>
                          {name.kanji} ({name.reading}) — {copy.scoreLabel(name.score)}
                        </span>
                        <button
                          type="button"
                          onClick={() => toggleShortlist(name)}
                          className="text-xs text-terracotta underline"
                        >
                          {copy.shortlistRemove}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsappShare}
                    disabled={shortlistedNames.length === 0}
                    className="washi-btn-secondary px-4 py-2 text-sm disabled:opacity-50"
                  >
                    {copy.shareWhatsapp}
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyShare}
                    disabled={shortlistedNames.length === 0}
                    className="washi-btn-tertiary px-2 py-2 text-sm disabled:opacity-50"
                  >
                    {copyState === "copied" ? copy.shareCopied : copy.shareCopy}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-14">
        <h2 className="mb-3 font-header text-[length:var(--step-2)] text-ink">
          {copy.referenceHeading}
        </h2>
        <p className="washi-measure mb-5 font-body text-sm text-text-muted">
          {copy.referenceIntro}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="washi-table-header p-2 text-left font-body text-xs font-semibold uppercase tracking-wide">
                  {copy.referenceNakshatraCol}
                </th>
                {[1, 2, 3, 4].map((pada) => (
                  <th
                    key={pada}
                    className="washi-table-header p-2 text-right font-body text-xs font-semibold uppercase tracking-wide"
                  >
                    {copy.referencePadaCol(pada)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {NAKSHATRAS.map((row) => {
                const entryLocal = nakshatras.find((n) => n.number === row.number);
                const syllables = PADA_SYLLABLES[row.name];
                return (
                  <tr key={row.name} className="border-b border-border">
                    <td className="p-2 font-body text-ink">
                      {entryLocal?.name[language] ?? row.name}
                    </td>
                    {syllables.map((s, i) => (
                      <td key={i} className="p-2 text-right font-chart tabular-nums text-ink">
                        {s.devanagari} ({s.roman})
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="washi-glyph-divider" aria-hidden />

      <div className="flex flex-wrap gap-3">
        <Link href="/tools/numerology" className="washi-btn-secondary px-4 py-2 text-sm">
          {copy.crossLinkNumerology}
        </Link>
        <Link href="/tools/birth-chart" className="washi-btn-secondary px-4 py-2 text-sm">
          {copy.crossLinkChart}
        </Link>
      </div>

      <BookingHandoff tool="babyNames" />
    </div>
  );
}
