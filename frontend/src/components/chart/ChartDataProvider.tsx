'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { useBirthProfile } from '@/components/profile/ProfileProvider';
import { trackEvent } from '@/lib/analytics/events';
import { natalToChartFormData, type NatalInput } from '@/lib/profile/types';
import type { ChartData } from '@/lib/chart-types';

export interface ChartDataContextValue {
  data: ChartData | null;
  status: 'idle' | 'loading' | 'error';
  /** Computes and stores a chart for arbitrary birth details. */
  compute: (birth: NatalInput) => Promise<ChartData | null>;
  /** Clears the displayed chart without touching the underlying profile —
   * see `reset`'s doc comment below for why `overrideEntry` matters. */
  reset: () => void;
  /** Set once `reset()` has been called. Consumers showing an entry form
   * should treat `!data && (!primary || overrideEntry)` as "show the form" —
   * the same guard `ChartSectionResult` implements locally with its own
   * state — without it, the auto-compute effect below would silently refill
   * the same person the moment `data` clears. */
  overrideEntry: boolean;
}

const ChartDataContext = createContext<ChartDataContextValue | null>(null);

/**
 * One computed chart, shared by every section of the homepage that wants
 * it — `VerticalChartReport` and the tool grid's inline-expanding cards —
 * so a page rendering both fires exactly one `/api/charts/compute` call
 * instead of one per consumer. `ChartSectionResult` (the /tools/* pages)
 * intentionally doesn't use this: each of those pages renders exactly one
 * such consumer, so a shared context has no second consumer to justify it
 * there — it keeps the same entry/compute logic as a local hook instead.
 */
export function ChartDataProvider({
  toolSlug,
  children,
}: {
  toolSlug: string;
  children: React.ReactNode;
}) {
  const { language } = useLanguage();
  const { primary, isLoaded } = useBirthProfile();
  const [data, setData] = useState<ChartData | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [computedFor, setComputedFor] = useState<string | null>(null);
  const [overrideEntry, setOverrideEntry] = useState(false);

  const compute = useCallback(async (birth: NatalInput) => {
    setStatus('loading');
    try {
      const response = await fetch('/api/charts/compute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(natalToChartFormData(birth)),
      });
      if (!response.ok) throw new Error('compute failed');
      const result: ChartData = await response.json();
      setData(result);
      setStatus('idle');
      trackEvent('tool_completed', { slug: toolSlug, locale: language });
      return result;
    } catch {
      setStatus('error');
      return null;
    }
  }, [toolSlug, language]);

  // Auto-compute from the remembered person, once, the first time one
  // exists — same pattern ChartSectionResult implements locally.
  useEffect(() => {
    if (!isLoaded || !primary || computedFor === primary.id || overrideEntry) return;
    void (async () => {
      setComputedFor(primary.id);
      trackEvent('tool_opened', { slug: toolSlug, locale: language });
      await compute(primary.birth);
    })();
  }, [isLoaded, primary, computedFor, overrideEntry, compute, toolSlug, language]);

  const reset = useCallback(() => {
    setData(null);
    setComputedFor(null);
    setOverrideEntry(true);
  }, []);

  return (
    <ChartDataContext.Provider value={{ data, status, compute, reset, overrideEntry }}>
      {children}
    </ChartDataContext.Provider>
  );
}

export function useChartData(): ChartDataContextValue {
  const ctx = useContext(ChartDataContext);
  if (!ctx) throw new Error('useChartData must be used within a ChartDataProvider');
  return ctx;
}
