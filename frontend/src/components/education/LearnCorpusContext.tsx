"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { LearnArticleRef, LearnCorpus, LearnSection } from "@/lib/education/learn-corpus";
import { educationSectionIds } from "@/lib/education/sections";
import type { EducationSectionId } from "@/lib/education/types";

/*
 * The learn hub's content on the client (see learn-corpus.ts).
 *
 * The page arrives with the opening section and a title index. Any other
 * section is fetched as static JSON the first time it is opened — and all
 * of them are fetched quietly once the page is idle, so switching sections
 * is normally instant. Fetches are cached per language for the session,
 * so coming back to the hub never fetches twice.
 */
type Sections = Partial<Record<EducationSectionId, LearnSection>>;

interface LearnCorpusValue {
  articleIndex: LearnArticleRef[];
  sections: Sections;
  /** Starts fetching a section if it is not loaded or loading yet. */
  ensureSection: (section: EducationSectionId) => void;
}

const LearnCorpusContext = createContext<LearnCorpusValue | null>(null);

const cache = new Map<string, Promise<LearnSection>>();

function fetchSection(lang: string, section: EducationSectionId): Promise<LearnSection> {
  const key = `${lang}/${section}`;
  let request = cache.get(key);
  if (!request) {
    request = fetch(`/api/learn/${lang}/${section}`).then((response) => {
      if (!response.ok) throw new Error(`learn section ${key}: ${response.status}`);
      return response.json() as Promise<LearnSection>;
    });
    // A failed fetch must be retryable on the next open.
    request.catch(() => cache.delete(key));
    cache.set(key, request);
  }
  return request;
}

export function LearnCorpusProvider({ corpus, children }: { corpus: LearnCorpus; children: React.ReactNode }) {
  const [fetched, setFetched] = useState<Sections>({});

  const ensureSection = useCallback(
    (section: EducationSectionId) => {
      if (corpus.sections[section]) return;
      void fetchSection(corpus.lang, section)
        .then((data) => setFetched((current) => (current[section] ? current : { ...current, [section]: data })))
        .catch(() => {
          // Leave it unloaded; the section shows its placeholder and the
          // next open (or idle pass) tries again.
        });
    },
    [corpus],
  );

  // Fetch the remaining sections while the visitor reads, unless they asked
  // their browser to save data.
  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (connection?.saveData) return;
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1));
    const timer = window.setTimeout(() => {
      idle(() => educationSectionIds.forEach(ensureSection));
    }, 2500);
    return () => window.clearTimeout(timer);
  }, [ensureSection]);

  const value = useMemo<LearnCorpusValue>(
    () => ({ articleIndex: corpus.articleIndex, sections: { ...fetched, ...corpus.sections }, ensureSection }),
    [corpus, fetched, ensureSection],
  );

  return <LearnCorpusContext.Provider value={value}>{children}</LearnCorpusContext.Provider>;
}

export function useLearnCorpus(): LearnCorpusValue {
  const value = useContext(LearnCorpusContext);
  if (!value) throw new Error("useLearnCorpus must be used within LearnCorpusProvider");
  return value;
}

/**
 * A section that the caller knows is loaded (EducationContent only renders a
 * section's panel once its bundle has arrived).
 */
export function useLoadedSection(section: EducationSectionId): LearnSection {
  const data = useLearnCorpus().sections[section];
  if (!data) throw new Error(`learn section "${section}" rendered before it loaded`);
  return data;
}

/** First article of a section, from the title index (no section data needed). */
export function firstArticleId(index: LearnArticleRef[], section: EducationSectionId): string | null {
  return index.find((ref) => ref.section === section)?.id ?? null;
}

/** An article's index entry, in any section (related links cross sections). */
export function findArticleRef(index: LearnArticleRef[], id: string): LearnArticleRef | undefined {
  return index.find((ref) => ref.id === id);
}
