"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBirthProfile } from "@/components/profile/ProfileProvider";
import { useToast } from "@/components/ui/Toaster";
import {
  EMPTY_BIRTH_DETAILS,
  birthFromDetails,
  detailsFromProfile,
  validateBirthDetails,
  type BirthDetailsErrors,
  type BirthDetailsValue,
  type BirthFieldNeeds,
} from "@/components/shared/BirthDetailsFields";
import { trackEvent } from "@/lib/analytics/events";
import type { ChartData } from "@/lib/chart-types";
import { natalToChartFormData, profilePersonName, type BirthProfile, type NatalInput } from "@/lib/profile/types";
import { toolUiCopy } from "@/lib/tools/tool-ui-copy";

/**
 * The "remembered person → compute → result" flow every profile-based tool
 * shares (design upgrade). It used to be re-implemented in each panel, and
 * the copies had drifted: results that never appeared after a failed
 * request, edit forms that opened empty, a second person who never became
 * the one other tools use, and a duplicate request after the first submit.
 *
 * - Computes automatically for the remembered person, and again whenever
 *   the person or `key` (a tool input such as the year) changes.
 * - Submitting the form saves the person as the remembered one (unless
 *   `save` is false), so every other tool picks them up.
 * - Failures surface as `status: "error"` with a working `retry`.
 */
export interface Subject {
  natal: NatalInput;
  name: string;
  place: string;
  /** Set when the subject is a saved profile. */
  profileId?: string;
  /** Entered with "I don't know my birth time" (noon used; never saved). */
  timeUnknown?: boolean;
}

export interface ProfileResultOptions<T> {
  toolSlug: string;
  compute: (natal: NatalInput) => Promise<T>;
  /** Extra inputs that should trigger a recompute when they change. */
  key?: string;
  needs?: BirthFieldNeeds;
  /** Persist submitted details as the remembered person (default true). */
  save?: boolean;
  /** Lets a chart result travel with the saved profile (saves a round trip). */
  toChartData?: (result: T) => ChartData | undefined;
}

const natalKey = (n: NatalInput) =>
  [n.year, n.month, n.day, n.hour, n.minute, n.latitude.toFixed(4), n.longitude.toFixed(4)].join("|");

export function profileSubject(profile: BirthProfile): Subject {
  return { natal: profile.birth, name: profilePersonName(profile), place: profile.locationName, profileId: profile.id };
}

/** The standard chart compute (`/api/charts/compute`), with an optional transit date. */
export async function computeChart(natal: NatalInput, transitDate?: Date): Promise<ChartData> {
  const response = await fetch("/api/charts/compute", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(natalToChartFormData(natal, transitDate)),
  });
  if (!response.ok) throw new Error(`compute failed: ${response.status}`);
  return (await response.json()) as ChartData;
}

export function useProfileResult<T>({ toolSlug, compute, key = "", needs, save = true, toChartData }: ProfileResultOptions<T>) {
  const { language } = useLanguage();
  const ui = toolUiCopy[language];
  const { toast } = useToast();
  const { primary, profiles, isLoaded, upsertProfile, setPrimary } = useBirthProfile();

  // A submitted-but-unsaved subject (save: false) takes precedence.
  const [localSubject, setLocalSubject] = useState<Subject | null>(null);
  const subject: Subject | null = localSubject ?? (primary ? profileSubject(primary) : null);

  const [result, setResult] = useState<T | null>(null);
  /** Whose birth data the current `result` was calculated for. */
  const [resultNatal, setResultNatal] = useState<string | null>(null);
  /** Bumped by every visitor action; a slow save only takes effect if it is still the latest. */
  const generation = useRef(0);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [computedKey, setComputedKey] = useState<string | null>(null);
  const [editing, setEditing] = useState<"edit" | "add" | null>(null);
  const [entry, setEntryState] = useState<BirthDetailsValue>(EMPTY_BIRTH_DETAILS);
  const [errors, setErrors] = useState<BirthDetailsErrors>({});
  /** Set by a visitor action; the frame scrolls the next result into view. */
  const [revealToken, setRevealToken] = useState(0);

  const computeRef = useRef(compute);
  useEffect(() => {
    computeRef.current = compute;
  });
  const lastNatal = useRef<NatalInput | null>(null);

  const run = useCallback(
    async (natal: NatalInput) => {
      lastNatal.current = natal;
      setStatus("loading");
      try {
        const value = await computeRef.current(natal);
        setResult(value);
        setResultNatal(natalKey(natal));
        setStatus("idle");
        trackEvent("tool_completed", { slug: toolSlug, locale: language });
        return value;
      } catch {
        setStatus("error");
        return null;
      }
    },
    [toolSlug, language],
  );

  // Automatic compute for the current subject + tool inputs.
  const wantedKey = subject ? `${natalKey(subject.natal)}#${key}` : null;
  useEffect(() => {
    if (!isLoaded || !subject || !wantedKey || wantedKey === computedKey || editing) return;
    const natal = subject.natal;
    void (async () => {
      setComputedKey(wantedKey);
      trackEvent("tool_opened", { slug: toolSlug, locale: language });
      await run(natal);
    })();
    // subject is derived from wantedKey's inputs.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, wantedKey, computedKey, editing, run]);

  const setEntry = useCallback((patch: Partial<BirthDetailsValue>) => {
    setEntryState((current) => ({ ...current, ...patch }));
    setErrors((current) => {
      const next = { ...current };
      if ("date" in patch) delete next.date;
      if ("time" in patch || "timeUnknown" in patch) delete next.time;
      if ("location" in patch) delete next.place;
      return next;
    });
  }, []);

  const submit = useCallback(
    async (event?: { preventDefault: () => void }) => {
      event?.preventDefault();
      const found = validateBirthDetails(entry, language, needs);
      setErrors(found);
      if (Object.keys(found).length > 0) return;

      const gen = ++generation.current;
      const natal = birthFromDetails(entry);
      const name = entry.name.trim();
      const place = entry.location?.display_name ?? "";
      // The submitted person is the subject until saving finishes, so the
      // automatic compute never runs for the previous one in between.
      const timeUnknown = Boolean(entry.timeUnknown);
      setLocalSubject({ natal, name, place, timeUnknown });
      setComputedKey(`${natalKey(natal)}#${key}`);
      setEditing(null);
      setRevealToken((n) => n + 1);
      const value = await run(natal);

      // Unsaved (save: false), failed, or an unknown birth time — noon is
      // not this person's real time, so it is never handed to other tools
      // as if it were. Keep the local subject so retry and "edit" work.
      if (!save || value === null || timeUnknown) return;
      try {
        const profile = await upsertProfile({
          label: name || place,
          locationName: place,
          birth: natal,
          isPrimary: true,
          chartData: toChartData?.(value),
        });
        // Saved either way; only made the remembered person if the visitor
        // has not switched to someone else while it was calculating.
        if (gen === generation.current) {
          setPrimary(profile.id);
          setLocalSubject(null);
        }
      } catch {
        toast(ui.saveError);
      }
    },
    [entry, language, needs, key, run, save, upsertProfile, setPrimary, toChartData, toast, ui.saveError],
  );

  const retry = useCallback(() => {
    if (!lastNatal.current) return;
    setRevealToken((n) => n + 1);
    void run(lastNatal.current);
  }, [run]);

  const startEdit = useCallback(() => {
    generation.current++;
    setErrors({});
    if (localSubject) {
      const n = localSubject.natal;
      setEntryState({
        name: localSubject.name,
        date: `${String(n.year).padStart(4, "0")}-${String(n.month).padStart(2, "0")}-${String(n.day).padStart(2, "0")}`,
        time: `${String(n.hour).padStart(2, "0")}:${String(n.minute).padStart(2, "0")}`,
        location: localSubject.place
          ? { display_name: localSubject.place, lat: String(n.latitude), lon: String(n.longitude) }
          : null,
        timeUnknown: Boolean(localSubject.timeUnknown),
      });
    } else if (primary) {
      setEntryState(detailsFromProfile(primary));
    }
    setEditing("edit");
  }, [localSubject, primary]);

  const startAdd = useCallback(() => {
    generation.current++;
    setErrors({});
    setEntryState(EMPTY_BIRTH_DETAILS);
    setEditing("add");
  }, []);

  const cancelEdit = useCallback(() => {
    setErrors({});
    setEditing(null);
  }, []);

  const switchTo = useCallback(
    (profileId: string) => {
      generation.current++;
      setLocalSubject(null);
      setEditing(null);
      setRevealToken((n) => n + 1);
      setPrimary(profileId);
    },
    [setPrimary],
  );

  return {
    isLoaded,
    subject,
    profiles,
    result,
    /** False while a different person's result is still on screen. */
    resultIsForSubject: Boolean(subject && resultNatal === natalKey(subject.natal)),
    status,
    editing,
    /** No subject yet, or the visitor chose to edit / add someone. */
    formOpen: isLoaded && (!subject || editing !== null),
    entry,
    setEntry,
    errors,
    submit,
    retry,
    startEdit,
    startAdd,
    cancelEdit,
    switchTo,
    revealToken,
    needs,
  };
}

export type ProfileResult<T> = ReturnType<typeof useProfileResult<T>>;
