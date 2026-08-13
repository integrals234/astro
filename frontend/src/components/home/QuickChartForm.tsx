"use client";

import { useEffect, useId, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { MapPin, Search, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { chartFormCopy } from "@/lib/chart-i18n";
import { buildChartPrefillQuery } from "@/lib/chart-prefill";
import { localizedHref } from "@/lib/i18n/routing";
import { welcomeContent, welcomeText } from "@/lib/home/welcome-content";
import type { LocationResult } from "@/lib/chart-types";

/**
 * Inline birth-details form on the homepage (CTA architecture, point 2).
 *
 * The single highest-conversion change available: the reference puts the form
 * itself on the landing page rather than linking to it. This collects the
 * details and hands them to /chart as prefill — it deliberately does no
 * computation, so the homepage never pulls in the 1,000-line workspace.
 *
 * Wrapped in `.washi-deckle`, which is what makes that ornament earn its place.
 */
export default function QuickChartForm() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = chartFormCopy[language];
  const copy = welcomeContent.quickChart;

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("12:00");
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 500);
  // Results are stored with the query they belong to, so "searching" and
  // "stale" are derived rather than tracked as separate state — which also
  // keeps every setState out of the effect body.
  const [search, setSearch] = useState<{
    query: string;
    results: LocationResult[];
  }>({ query: "", results: [] });
  const [location, setLocation] = useState<LocationResult | null>(null);
  const listboxId = useId();

  useEffect(() => {
    if (!debouncedQuery || location) return;

    const controller = new AbortController();

    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        debouncedQuery,
      )}&limit=5&accept-language=${encodeURIComponent(language)}`,
      { signal: controller.signal },
    )
      .then((response) => (response.ok ? response.json() : []))
      .then((data: LocationResult[]) =>
        setSearch({ query: debouncedQuery, results: data }),
      )
      .catch((error) => {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          setSearch({ query: debouncedQuery, results: [] });
        }
      });

    return () => controller.abort();
  }, [debouncedQuery, language, location]);

  const isStale = search.query !== debouncedQuery;
  const isSearching = Boolean(debouncedQuery) && !location && isStale;
  // A stale list must never be shown for a query the visitor already changed.
  const visibleResults =
    !debouncedQuery || location || isStale ? [] : search.results;
  const canSubmit = Boolean(date && time && location);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!location) return;

    const query = buildChartPrefillQuery({
      name,
      date,
      time,
      latitude: Number(location.lat),
      longitude: Number(location.lon),
      place: location.display_name,
    });

    router.push(`${localizedHref(language, "/chart")}?${query}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="washi-deckle relative mx-auto max-w-2xl px-6 py-8 sm:px-9"
    >
      <p className="washi-eyebrow washi-eyebrow-flanked mb-3 justify-center">
        {welcomeText(copy.eyebrow, language)}
      </p>
      <h2 className="mb-2 text-center font-header text-[length:var(--step-2)] text-ink">
        {welcomeText(copy.heading, language)}
      </h2>
      <p className="mb-7 text-center text-sm text-text-muted">
        {welcomeText(copy.lead, language)}
      </p>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="quick-chart-name"
            className="mb-1.5 block text-[11px] text-text-muted"
          >
            {t.personName}
          </label>
          <input
            id="quick-chart-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={t.personNamePlaceholder}
            className="washi-field w-full p-3 text-sm"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="min-w-0">
            <label
              htmlFor="quick-chart-date"
              className="mb-1.5 block text-[11px] text-text-muted"
            >
              {t.dob}
            </label>
            <input
              id="quick-chart-date"
              type="date"
              required
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="washi-field w-full min-w-0 cursor-pointer p-3 text-sm"
            />
          </div>
          <div className="min-w-0">
            <label
              htmlFor="quick-chart-time"
              className="mb-1.5 block text-[11px] text-text-muted"
            >
              {t.tob}
            </label>
            <input
              id="quick-chart-time"
              type="time"
              required
              value={time}
              onChange={(event) => setTime(event.target.value)}
              className="washi-field w-full min-w-0 cursor-pointer p-3 text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="quick-chart-place"
            className="mb-1.5 block text-[11px] text-text-muted"
          >
            {t.birthCity}
          </label>
          <div className="washi-field flex items-center gap-2 p-3">
            <Search size={15} aria-hidden className="shrink-0 text-text-muted" />
            <input
              id="quick-chart-place"
              type="text"
              role="combobox"
              aria-expanded={visibleResults.length > 0}
              aria-controls={listboxId}
              autoComplete="off"
              value={location ? location.display_name : query}
              onChange={(event) => {
                setLocation(null);
                setQuery(event.target.value);
              }}
              placeholder={t.searchPlaceholder}
              className="w-full bg-transparent text-sm outline-none placeholder:text-text-muted"
            />
          </div>

          {isSearching && (
            <p className="mt-2 text-xs text-text-muted">{t.searching}</p>
          )}

          {!isSearching && visibleResults.length > 0 && (
            <ul
              id={listboxId}
              className="washi-card mt-2 max-h-52 overflow-y-auto p-1.5"
            >
              {visibleResults.map((result) => (
                <li key={`${result.lat}-${result.lon}`}>
                  <button
                    type="button"
                    onClick={() => setLocation(result)}
                    className="flex w-full items-center gap-2 rounded-md p-2.5 text-left text-sm text-text transition-colors hover:bg-neutral-tag"
                  >
                    <MapPin
                      size={13}
                      aria-hidden
                      className="shrink-0 text-terracotta"
                    />
                    <span className="truncate">{result.display_name}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {!isSearching && debouncedQuery && !location && visibleResults.length === 0 && (
            <p className="mt-2 text-xs text-text-muted">{t.noLocations}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="washi-btn-primary w-full gap-2 py-3.5 text-sm disabled:opacity-50"
        >
          <Sparkles size={15} aria-hidden />
          {welcomeText(welcomeContent.ctaPrimary, language)}
        </button>
      </div>
    </form>
  );
}
