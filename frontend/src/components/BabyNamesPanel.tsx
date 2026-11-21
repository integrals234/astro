"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import Link from "@/components/i18n/LocaleLink";
import BookingHandoff from "@/components/tools/BookingHandoff";
import BirthDetailsFields, {
  birthFromDetails,
  EMPTY_BIRTH_DETAILS,
  validateBirthDetails,
  type BirthDetailsErrors,
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
  BABY_NAMES,
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
  /** Birth date the result was calculated for (scores use this, not the live form). */
  date: string;
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
  const [manualNakshatra, setManualNakshatra] = useState<number | "">("");
  const [manualPada, setManualPada] = useState<1 | 2 | 3 | 4>(1);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [result, setResult] = useState<Result | null>(null);
  const [shortlist, setShortlist] = useState<string[]>(loadShortlist);
  const [shortlistOpen, setShortlistOpen] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");
  const [errors, setErrors] = useState<BirthDetailsErrors>({});
  const resultRef = useRef<HTMLDivElement>(null);
  // "I don't know the birth time" (the shared checkbox) switches to picking
  // the nakshatra and pada by hand — place and time are then not needed.
  const manualMode = Boolean(entry.timeUnknown);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(SHORTLIST_KEY, JSON.stringify(shortlist));
    } catch {
      // Storage can be unavailable (private mode); the shortlist just
      // won't persist across visits, which is a fine degradation.
    }
  }, [shortlist]);

  const reveal = () =>
    requestAnimationFrame(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      resultRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });

  const handleSubmit = async (event?: React.FormEvent) => {
    event?.preventDefault();
    const found = validateBirthDetails(entry, language, manualMode ? { time: false, place: false } : {});
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    trackEvent("tool_opened", { slug: "baby-names", locale: language });

    if (manualMode) {
      if (manualNakshatra === "") return;
      const row = NAKSHATRAS[manualNakshatra - 1];
      setResult({
        nakshatraNumber: row.number,
        nakshatraName: row.name,
        pada: manualPada,
        moonSign: signForNakshatraPada(row.number, manualPada),
        date: entry.date,
      });
      trackEvent("tool_completed", { slug: "baby-names", locale: language });
      reveal();
      return;
    }

    if (!entry.location) return;
    setStatus("loading");
    try {
      const formData = natalToChartFormData(birthFromDetails(entry));
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
        date: entry.date,
      });
      setStatus("idle");
      reveal();
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

  // Scored against the date the result was calculated for — editing the
  // form afterwards used to re-score names against the old nakshatra.
  const resultDate = result?.date
    ? { year: Number(result.date.slice(0, 4)), month: Number(result.date.slice(5, 7)), day: Number(result.date.slice(8, 10)) }
    : null;
  const mulank = resultDate ? computeMulank(resultDate) : null;
  const bhagyank = resultDate ? computeBhagyank(resultDate) : null;

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

  // Resolved from the whole name list, so a gender filter or sort change
  // never hides (or un-shares) a name already on the shortlist.
  const shortlistedNames: ScoredName[] = BABY_NAMES.filter((n) => shortlist.includes(shortlistId(n))).map((n) => ({
    ...n,
    score: mulank !== null && bhagyank !== null ? (scoreCandidateName(n.romaji, mulank, bhagyank) ?? 5) : 5,
  }));

  const toggleShortlist = (name: BabyName) => {
    const id = shortlistId(name);
    setShortlist((current) => {
      if (current.includes(id)) return current.filter((i) => i !== id);
      if (current.length === 0) setShortlistOpen(true); // show it on the first add
      return [...current, id];
    });
  };

  const shareText = result && syllable
    ? copy.shareMessage({
        nakshatra: education?.name[language] ?? result.nakshatraName,
        pada: result.pada,
        syllable: syllable.roman,
        names: shortlistedNames.map((n) => ({
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

      <form onSubmit={handleSubmit} noValidate className="washi-card p-6 md:p-7">
        <BirthDetailsFields
          value={entry}
          onChange={(patch) => {
            setEntry((v) => ({ ...v, ...patch }));
            setErrors({});
          }}
          idPrefix="baby-names"
          showName={false}
          showPlace={!manualMode}
          errors={errors}
        />


        {manualMode && (
          <div className="washi-card mt-3 p-4">
            <p className="mb-3 text-xs text-text-muted">{copy.dontKnowTimeHelp}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="baby-names-nakshatra" className="mb-1.5 block text-[11px] text-text-muted">
                  {copy.manualNakshatraLabel}
                </label>
                <select
                  id="baby-names-nakshatra"
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
                <label htmlFor="baby-names-pada" className="mb-1.5 block text-[11px] text-text-muted">
                  {copy.manualPadaLabel}
                </label>
                <select
                  id="baby-names-pada"
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
          type="submit"
          disabled={status === "loading" || (manualMode && manualNakshatra === "")}
          className="washi-btn-primary mt-5 disabled:opacity-50"
        >
          {status === "loading" ? copy.computing : copy.submit}
        </button>
        {status === "error" && <p className="mt-3 text-sm text-terracotta" role="alert">{copy.error}</p>}

        {!manualMode && (
          <p className="washi-measure mt-4 text-xs text-text-muted">
            <Link href="/tools/nakshatra-finder" className="underline">
              {copy.nakshatraFinderNudge}
            </Link>
          </p>
        )}
      </form>

      <div ref={resultRef} className="scroll-mt-24" />
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
              aria-expanded={shortlistOpen}
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
