"use client";

import { useEffect, useId, useState } from "react";
import { useDebounce } from "use-debounce";
import { MapPin, Search } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { chartFormCopy } from "@/lib/chart-i18n";
import type { LocationResult } from "@/lib/chart-types";

/**
 * Name + date + time + place-search, as one controlled unit.
 *
 * Extracted from the homepage's quick-chart form, which had this logic
 * inline. Three places now need the same birth-detail entry — the homepage,
 * and the bride/groom slots in the compatibility tool — and a geocoding
 * debounce loop is exactly the kind of thing that drifts if written three
 * times.
 */
export interface BirthDetailsValue {
  name: string;
  date: string;
  time: string;
  location: LocationResult | null;
}

export const EMPTY_BIRTH_DETAILS: BirthDetailsValue = {
  name: "",
  date: "",
  time: "12:00",
  location: null,
};

export function isBirthDetailsComplete(value: BirthDetailsValue): boolean {
  return Boolean(value.date && value.time && value.location);
}

export default function BirthDetailsFields({
  value,
  onChange,
  idPrefix,
  showName = true,
}: {
  value: BirthDetailsValue;
  onChange: (patch: Partial<BirthDetailsValue>) => void;
  idPrefix: string;
  showName?: boolean;
}) {
  const { language } = useLanguage();
  const t = chartFormCopy[language];

  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 500);
  const [search, setSearch] = useState<{
    query: string;
    results: LocationResult[];
  }>({ query: "", results: [] });
  const listboxId = useId();

  useEffect(() => {
    if (!debouncedQuery || value.location) return;

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
  }, [debouncedQuery, language, value.location]);

  const isStale = search.query !== debouncedQuery;
  const isSearching = Boolean(debouncedQuery) && !value.location && isStale;
  const visibleResults =
    !debouncedQuery || value.location || isStale ? [] : search.results;

  return (
    <div className="space-y-3">
      {showName && (
        <div>
          <label
            htmlFor={`${idPrefix}-name`}
            className="mb-1.5 block text-[11px] text-text-muted"
          >
            {t.personName}
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            value={value.name}
            onChange={(e) => onChange({ name: e.target.value })}
            placeholder={t.personNamePlaceholder}
            className="washi-field w-full p-2.5 text-sm"
          />
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="min-w-0">
          <label
            htmlFor={`${idPrefix}-date`}
            className="mb-1.5 block text-[11px] text-text-muted"
          >
            {t.dob}
          </label>
          <input
            id={`${idPrefix}-date`}
            type="date"
            required
            value={value.date}
            onChange={(e) => onChange({ date: e.target.value })}
            className="washi-field w-full min-w-0 cursor-pointer p-2.5 text-sm"
          />
        </div>
        <div className="min-w-0">
          <label
            htmlFor={`${idPrefix}-time`}
            className="mb-1.5 block text-[11px] text-text-muted"
          >
            {t.tob}
          </label>
          <input
            id={`${idPrefix}-time`}
            type="time"
            required
            value={value.time}
            onChange={(e) => onChange({ time: e.target.value })}
            className="washi-field w-full min-w-0 cursor-pointer p-2.5 text-sm"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}-place`}
          className="mb-1.5 block text-[11px] text-text-muted"
        >
          {t.birthCity}
        </label>
        <div className="washi-field flex items-center gap-2 p-2.5">
          <Search size={14} aria-hidden className="shrink-0 text-text-muted" />
          <input
            id={`${idPrefix}-place`}
            type="text"
            role="combobox"
            aria-expanded={visibleResults.length > 0}
            aria-controls={listboxId}
            autoComplete="off"
            value={value.location ? value.location.display_name : query}
            onChange={(e) => {
              onChange({ location: null });
              setQuery(e.target.value);
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
            className="washi-card mt-2 max-h-48 overflow-y-auto p-1.5"
          >
            {visibleResults.map((result) => (
              <li key={`${result.lat}-${result.lon}`}>
                <button
                  type="button"
                  onClick={() => {
                    onChange({ location: result });
                    setQuery("");
                  }}
                  className="flex w-full items-center gap-2 rounded-md p-2 text-left text-sm text-text transition-colors hover:bg-neutral-tag"
                >
                  <MapPin
                    size={12}
                    aria-hidden
                    className="shrink-0 text-terracotta"
                  />
                  <span className="truncate">{result.display_name}</span>
                </button>
              </li>
            ))}
          </ul>
        )}

        {!isSearching &&
          debouncedQuery &&
          !value.location &&
          visibleResults.length === 0 && (
            <p className="mt-2 text-xs text-text-muted">{t.noLocations}</p>
          )}
      </div>
    </div>
  );
}
