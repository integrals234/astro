"use client";

import { useEffect, useId, useState } from "react";
import { useDebounce } from "use-debounce";
import { MapPin, Search } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { chartFormCopy } from "@/lib/chart-i18n";
import type { LocationResult } from "@/lib/chart-types";
import { profilePersonName, type BirthProfile, type NatalInput } from "@/lib/profile/types";
import { toolUiCopy } from "@/lib/tools/tool-ui-copy";

/**
 * Name + date + time + place-search, as one controlled unit, shared by the
 * homepage, the chart report and every tool.
 *
 * Design-upgrade refinements: per-field error messages (buttons validate on
 * click instead of sitting silently disabled), an explicit "I don't know my
 * birth time" option in place of a silent 12:00 default, fields a tool does
 * not use can be hidden, the date cannot be in the future, and the place
 * suggestions work from the keyboard.
 */
export interface BirthDetailsValue {
  name: string;
  date: string;
  time: string;
  location: LocationResult | null;
  /** The visitor ticked "I don't know my birth time" — noon is used. */
  timeUnknown?: boolean;
}

export const EMPTY_BIRTH_DETAILS: BirthDetailsValue = {
  name: "",
  date: "",
  time: "",
  location: null,
  timeUnknown: false,
};

export const UNKNOWN_TIME = "12:00";

export interface BirthFieldNeeds {
  time?: boolean;
  place?: boolean;
}

export type BirthDetailsErrors = Partial<Record<"date" | "time" | "place", string>>;

function todayIso(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

/** The time actually used: the entered one, or noon when it is unknown. */
export function effectiveTime(value: BirthDetailsValue): string {
  return value.timeUnknown || !value.time ? UNKNOWN_TIME : value.time;
}

export function isBirthDetailsComplete(value: BirthDetailsValue, needs: BirthFieldNeeds = {}): boolean {
  const { time = true, place = true } = needs;
  return Boolean(
    value.date &&
      value.date <= todayIso() &&
      (!time || value.time || value.timeUnknown) &&
      (!place || value.location),
  );
}

/** Field-level messages for whatever is missing, in the page language. */
export function validateBirthDetails(
  value: BirthDetailsValue,
  language: keyof typeof toolUiCopy,
  needs: BirthFieldNeeds = {},
): BirthDetailsErrors {
  const { time = true, place = true } = needs;
  const copy = toolUiCopy[language];
  const errors: BirthDetailsErrors = {};
  if (!value.date) errors.date = copy.errDate;
  else if (value.date > todayIso()) errors.date = copy.errDateFuture;
  if (time && !value.time && !value.timeUnknown) errors.time = copy.errTime;
  if (place && !value.location) errors.place = copy.errPlace;
  return errors;
}

/** Entered details → the natal input every compute endpoint takes. */
export function birthFromDetails(value: BirthDetailsValue): NatalInput {
  const time = effectiveTime(value);
  return {
    year: Number(value.date.slice(0, 4)),
    month: Number(value.date.slice(5, 7)),
    day: Number(value.date.slice(8, 10)),
    hour: Number(time.slice(0, 2)),
    minute: Number(time.slice(3, 5)),
    latitude: Number(value.location?.lat ?? 0),
    longitude: Number(value.location?.lon ?? 0),
  };
}

/** A saved person → form values, for "edit details" pre-filled. */
export function detailsFromProfile(profile: BirthProfile): BirthDetailsValue {
  const b = profile.birth;
  return {
    name: profilePersonName(profile),
    date: `${String(b.year).padStart(4, "0")}-${String(b.month).padStart(2, "0")}-${String(b.day).padStart(2, "0")}`,
    time: `${String(b.hour).padStart(2, "0")}:${String(b.minute).padStart(2, "0")}`,
    location: { display_name: profile.locationName, lat: String(b.latitude), lon: String(b.longitude) },
    timeUnknown: false,
  };
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-terracotta">
      {message}
    </p>
  );
}

export default function BirthDetailsFields({
  value,
  onChange,
  idPrefix,
  showName = true,
  showDate = true,
  showTime = true,
  showPlace = true,
  errors = {},
  placeLabel,
}: {
  value: BirthDetailsValue;
  onChange: (patch: Partial<BirthDetailsValue>) => void;
  idPrefix: string;
  showName?: boolean;
  showDate?: boolean;
  showTime?: boolean;
  showPlace?: boolean;
  errors?: BirthDetailsErrors;
  /** Overrides the "Birth City" label (e.g. panchang asks for any place). */
  placeLabel?: string;
}) {
  const { language } = useLanguage();
  const t = chartFormCopy[language];
  const ui = toolUiCopy[language];

  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 500);
  const [search, setSearch] = useState<{
    query: string;
    results: LocationResult[];
  }>({ query: "", results: [] });
  const [active, setActive] = useState(-1);
  const listboxId = useId();

  useEffect(() => {
    if (!showPlace || !debouncedQuery || value.location) return;

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
  }, [debouncedQuery, language, value.location, showPlace]);

  const isStale = search.query !== debouncedQuery;
  const isSearching = Boolean(debouncedQuery) && !value.location && isStale;
  const visibleResults =
    !debouncedQuery || value.location || isStale ? [] : search.results;

  const choose = (result: LocationResult) => {
    onChange({ location: result });
    setQuery("");
    setActive(-1);
  };

  const fieldClass = (hasError: boolean) =>
    `washi-field w-full min-w-0 p-2.5 text-sm ${hasError ? "border-terracotta" : ""}`;

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
            autoComplete="name"
            value={value.name}
            onChange={(e) => onChange({ name: e.target.value })}
            placeholder={t.personNamePlaceholder}
            className="washi-field w-full p-2.5 text-sm"
          />
        </div>
      )}

      {(showDate || showTime) && (
      <div className={`grid gap-3 ${showDate && showTime ? "sm:grid-cols-2" : ""}`}>
        {showDate && (
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
            min="1800-01-01"
            max={todayIso()}
            suppressHydrationWarning
            value={value.date}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? `${idPrefix}-date-err` : undefined}
            onChange={(e) => onChange({ date: e.target.value })}
            className={`${fieldClass(Boolean(errors.date))} cursor-pointer`}
          />
          <FieldError id={`${idPrefix}-date-err`} message={errors.date} />
        </div>
        )}
        {showTime && (
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
              required={!value.timeUnknown}
              disabled={value.timeUnknown}
              value={value.timeUnknown ? "" : value.time}
              aria-invalid={Boolean(errors.time)}
              aria-describedby={errors.time ? `${idPrefix}-time-err` : undefined}
              onChange={(e) => onChange({ time: e.target.value })}
              className={`${fieldClass(Boolean(errors.time))} cursor-pointer disabled:cursor-not-allowed disabled:opacity-50`}
            />
            <label className="mt-2 flex cursor-pointer items-center gap-2 text-xs text-text-muted">
              <input
                type="checkbox"
                checked={Boolean(value.timeUnknown)}
                onChange={(e) => onChange({ timeUnknown: e.target.checked })}
                className="h-4 w-4 accent-terracotta"
              />
              {ui.unknownTime}
            </label>
            {value.timeUnknown ? (
              <p className="mt-1 text-xs leading-relaxed text-text-muted">{ui.unknownTimeNote}</p>
            ) : null}
            <FieldError id={`${idPrefix}-time-err`} message={errors.time} />
          </div>
        )}
      </div>
      )}

      {showPlace && (
        <div>
          <label
            htmlFor={`${idPrefix}-place`}
            className="mb-1.5 block text-[11px] text-text-muted"
          >
            {placeLabel ?? t.birthCity}
          </label>
          <div className={`washi-field flex items-center gap-2 p-2.5 ${errors.place ? "border-terracotta" : ""}`}>
            <Search size={14} aria-hidden className="shrink-0 text-text-muted" />
            <input
              id={`${idPrefix}-place`}
              type="text"
              role="combobox"
              aria-expanded={visibleResults.length > 0}
              aria-controls={listboxId}
              aria-autocomplete="list"
              aria-activedescendant={active >= 0 ? `${listboxId}-${active}` : undefined}
              aria-invalid={Boolean(errors.place)}
              aria-describedby={errors.place ? `${idPrefix}-place-err` : undefined}
              autoComplete="off"
              value={value.location ? value.location.display_name : query}
              onChange={(e) => {
                onChange({ location: null });
                setQuery(e.target.value);
                setActive(-1);
              }}
              onKeyDown={(e) => {
                if (visibleResults.length === 0) return;
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setActive((i) => (i + 1) % visibleResults.length);
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setActive((i) => (i <= 0 ? visibleResults.length - 1 : i - 1));
                } else if (e.key === "Enter") {
                  // Pick a suggestion instead of submitting the form.
                  e.preventDefault();
                  choose(visibleResults[Math.max(active, 0)]);
                } else if (e.key === "Escape") {
                  setActive(-1);
                }
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
              role="listbox"
              className="washi-card mt-2 max-h-48 overflow-y-auto p-1.5"
            >
              {visibleResults.map((result, index) => (
                <li
                  key={`${result.lat}-${result.lon}`}
                  id={`${listboxId}-${index}`}
                  role="option"
                  aria-selected={index === active}
                >
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => choose(result)}
                    className={`flex w-full items-center gap-2 rounded-md p-2 text-left text-sm text-text transition-colors hover:bg-neutral-tag ${
                      index === active ? "bg-neutral-tag" : ""
                    }`}
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
          <FieldError id={`${idPrefix}-place-err`} message={errors.place} />
        </div>
      )}
    </div>
  );
}
