'use client';

import ChartSummaryCard from '@/components/chart/ChartSummaryCard';
import { toolUiCopy } from '@/lib/tools/tool-ui-copy';
import ChartCover from '@/components/chart/ChartCover';
import ChartSectionBar from '@/components/chart/ChartSectionBar';
import SectionCard from '@/components/chart/SectionCard';
import ChartPreviewArt from '@/components/chart/ChartPreviewArt';
import React, { useState, useEffect, useCallback, Suspense, useSyncExternalStore } from 'react';
import Link from '@/components/i18n/LocaleLink';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { m, AnimatePresence } from 'motion/react';
import { useDebounce } from 'use-debounce';
import { Command } from 'cmdk';
import { Search, MapPin, LayoutDashboard } from 'lucide-react';
import { SignedIn, SignedOut, UserMenu, useAuthState } from '@/components/auth/AuthProvider';
import ChartLibraryPanel from '@/components/ChartLibraryPanel';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import type {
  ChartData,
  ChartFormData,
  LocationResult,
  SavedChartRecord,
} from '@/lib/chart-types';
import { getChartUi, chartFormCopy, type ChartTranslations } from '@/lib/chart-i18n';
import { useToast } from '@/components/ui/Toaster';
import { popPresence, hoverLift, tapPress } from '@/lib/motion/tokens';
import { parseChartPrefill } from '@/lib/chart-prefill';
import { useBirthProfile } from '@/components/profile/ProfileProvider';
import type { ChartSectionId } from '@/lib/chart-sections';
import { sectionLabel, sectionHeading } from '@/lib/chart-sections';
import ChartSectionBody from '@/components/chart/ChartSectionBody';
import ChartDisplayControls from '@/components/chart/ChartDisplayControls';
import { profilePersonName } from "@/lib/profile/types";

interface ChartWorkspaceProps {
  enablePersistence?: boolean;
  showAuthNav?: boolean;
  embedded?: boolean;
}

// --- TRANSLATION DICTIONARY ---

const subscribeToClient = () => () => {};

/** Scrolls the actual scroll root back to the top — `[data-education-scroll-root]`
 * (AppShell's `<main>`) when signed in, the document otherwise. */
function scrollWorkspaceToTop() {
  const root = document.querySelector('[data-education-scroll-root]');
  if (root) root.scrollTo({ top: 0, behavior: 'smooth' });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getDefaultFormData(): ChartFormData {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    latitude: 25.4488,
    longitude: 78.5698,
    transit_year: now.getFullYear(),
    transit_month: now.getMonth() + 1,
    transit_day: now.getDate(),
  };
}

/**
 * Every section the workspace draws, in reading order, with the
 * `chartFormCopy` tab keys used to look up their short (rail) and long
 * (section heading) labels. `ChartTranslations`'s `tabs`/`tabTitles` widen
 * to `Record<string, string>` (see `WidenTranslation` in chart-i18n.ts), so
 * these keys don't need to be typed against the old `ChartTab` union — a
 * plain string indexes them fine.
 *
 * `yogas`/`ashtakavarga` have no `chartFormCopy` tab key (they're newer
 * than the old 8-tab set) — `tabKey` is omitted for them and `chart-sections.ts`'s
 * `sectionLabel`/`sectionHeading` fall back to their own copy module instead.
 */
const WORKSPACE_SECTIONS: readonly { id: ChartSectionId; tabKey?: string }[] = [
  { id: 'lagna', tabKey: 'D1' },
  { id: 'navamsha', tabKey: 'D9' },
  { id: 'chalit', tabKey: 'Chalit' },
  { id: 'moon', tabKey: 'Chandra' },
  { id: 'gochar', tabKey: 'Gochar' },
  { id: 'planets', tabKey: 'Details' },
  { id: 'aspects', tabKey: 'Aspects' },
  { id: 'dasha', tabKey: 'Dasha' },
  { id: 'yogas' },
  { id: 'ashtakavarga' },
];

/**
 * The bento: the birth chart and navamsha side by side (the pair readers
 * compare), the three other drawings in a row, then the tables full width,
 * the dasha tree beside the yogas it times.
 */
const CARD_SPAN: Partial<Record<ChartSectionId, { span: string; minHeight?: number }>> = {
  lagna: { span: 'md:col-span-6', minHeight: 460 },
  navamsha: { span: 'md:col-span-6', minHeight: 460 },
  chalit: { span: 'md:col-span-6 xl:col-span-4', minHeight: 420 },
  moon: { span: 'md:col-span-6 xl:col-span-4', minHeight: 420 },
  gochar: { span: 'md:col-span-12 xl:col-span-4', minHeight: 460 },
  planets: { span: 'md:col-span-12', minHeight: 420 },
  aspects: { span: 'md:col-span-12', minHeight: 320 },
  dasha: { span: 'md:col-span-12 lg:col-span-7', minHeight: 520 },
  yogas: { span: 'md:col-span-12 lg:col-span-5', minHeight: 360 },
  ashtakavarga: { span: 'md:col-span-12', minHeight: 360 },
};

// --- MAIN DASHBOARD ---
function ChartWorkspaceInner({
  enablePersistence = false,
  showAuthNav = false,
  embedded = false,
}: ChartWorkspaceProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { isSignedIn, isLoaded: isAuthLoaded } = useAuthState();
  const isClient = useSyncExternalStore(subscribeToClient, () => true, () => false);

  const { language: lang } = useLanguage();

  /*
   * Birth details handed over by <QuickChartForm> on the homepage. Read once,
   * in the state initialisers, so the workspace opens already filled in rather
   * than flashing defaults and then patching them. Returns null unless every
   * field is present and numeric — a partial prefill leaves the defaults alone.
   */
  const prefill = parseChartPrefill(searchParams);

  const [personName, setPersonName] = useState(() => prefill?.name ?? '');
  const [formData, setFormData] = useState<ChartFormData>(() => ({
    ...getDefaultFormData(),
    ...prefill?.formPatch,
  }));
  
  const [locationQuery, setLocationQuery] = useState("");
  const [debouncedQuery] = useDebounce(locationQuery, 500); 
  const [locationResults, setLocationResults] = useState<LocationResult[]>([]);
  const [selectedLocationName, setSelectedLocationName] = useState(
    () => prefill?.place ?? "",
  );
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false); 
  
  const [chartStyle, setChartStyle] = useState<'North' | 'South'>('North');
  const [useSymbols, setUseSymbols] = useState(false);

  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [gocharBase, setGocharBase] = useState<'Lagna' | 'Chandra'>('Lagna');
  const [isLoading, setIsLoading] = useState(false);
  const [currentChartId, setCurrentChartId] = useState<string | null>(null);
  const [isCurrentSaved, setIsCurrentSaved] = useState(false);
  const [recentCharts, setRecentCharts] = useState<SavedChartRecord[]>([]);
  const [savedCharts, setSavedCharts] = useState<SavedChartRecord[]>([]);
  const [isSavingChart, setIsSavingChart] = useState(false);
  /**
   * Set once "New chart" is clicked. Blocks the primary-profile prefill
   * below for the rest of this mount — without it, clearing
   * `selectedLocationName` on reset would make that block's guard true
   * again and it would silently refill the form with the same person.
   */
  const [overrideEntry, setOverrideEntry] = useState(false);
  /**
   * The entry form collapses into a disclosure once a chart exists, so the
   * vertical section stack gets the full width instead of sharing it with a
   * permanently-open form column. Closed by default — "auto-closes after a
   * successful compute" needs no extra transition when closed is already
   * where a freshly-appeared disclosure starts.
   */
  const [isFormOpen, setIsFormOpen] = useState(false);

  const {
    upsertProfile,
    primary: primaryProfile,
    isLoaded: profilesLoaded,
    setPrimary,
  } = useBirthProfile();
  const { toast, confirm: confirmDialog } = useToast();
  const t: ChartTranslations = chartFormCopy[lang];

  /*
   * Prefill from the remembered person.
   *
   * Runs once, and only when the URL carried no prefill and the visitor has not
   * already chosen a place — an explicit link or a half-typed form always beats
   * a stored profile. This is what turns the second tool someone opens from
   * another empty form into their own chart.
   */
  const [appliedProfileId, setAppliedProfileId] = useState<string | null>(null);
  if (
    profilesLoaded &&
    primaryProfile &&
    appliedProfileId !== primaryProfile.id &&
    !prefill &&
    !selectedLocationName &&
    !overrideEntry
  ) {
    // Adjusting state during render rather than in an effect: React re-runs
    // this component before touching the DOM, so there is no cascading render
    // and no flash of the empty form.
    setAppliedProfileId(primaryProfile.id);
    setFormData((current) => ({ ...current, ...primaryProfile.birth }));
    setSelectedLocationName(primaryProfile.locationName);
    if (!personName.trim()) setPersonName(profilePersonName(primaryProfile));
  }
  const chartCopy = getChartUi(lang);

  const refreshLibrary = useCallback(async () => {
    if (!enablePersistence) return;
    try {
      const [recentRes, savedRes] = await Promise.all([
        fetch('/api/charts?type=recent'),
        fetch('/api/charts?type=saved'),
      ]);
      if (recentRes.ok) setRecentCharts(await recentRes.json());
      if (savedRes.ok) setSavedCharts(await savedRes.json());
    } catch (error) {
      console.error('Failed to load chart library:', error);
    }
  }, [enablePersistence]);

  useEffect(() => {
    // Saved charts belong to an account; asking while signed out only earns 401s.
    if (!enablePersistence || !isAuthLoaded || !isSignedIn) return;
    const controller = new AbortController();

    void Promise.all([
      fetch('/api/charts?type=recent', { signal: controller.signal }),
      fetch('/api/charts?type=saved', { signal: controller.signal }),
    ])
      .then(async ([recentRes, savedRes]) => {
        if (recentRes.ok) setRecentCharts(await recentRes.json());
        if (savedRes.ok) setSavedCharts(await savedRes.json());
      })
      .catch((error) => {
        if (!(error instanceof DOMException && error.name === 'AbortError')) {
          console.error('Failed to load chart library:', error);
        }
      });

    return () => controller.abort();
  }, [enablePersistence, isAuthLoaded, isSignedIn]);

  const persistChart = async (data: ChartData, saved = false) => {
    if (!enablePersistence || !personName.trim()) return null;
    const response = await fetch('/api/charts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: personName.trim(),
        locationName: selectedLocationName,
        formData,
        chartData: data,
        isSaved: saved,
      }),
    });
    if (!response.ok) return null;
    const record: SavedChartRecord = await response.json();
    setCurrentChartId(record.id);
    setIsCurrentSaved(record.isSaved);
    await refreshLibrary();
    return record;
  };

  const loadChart = (chart: SavedChartRecord) => {
    setPersonName(chart.name);
    setFormData(chart.formData);
    setSelectedLocationName(chart.locationName);
    setChartData(chart.chartData);
    setCurrentChartId(chart.id);
    setIsCurrentSaved(chart.isSaved);
    setIsFormOpen(false);
    scrollWorkspaceToTop();
  };

  useEffect(() => {
    const chartId = searchParams.get('chart');
    if (!chartId || !enablePersistence) return;

    const loadChartFromUrl = async () => {
      try {
        const response = await fetch(`/api/charts/${chartId}`);
        if (!response.ok) return;
        const chart: SavedChartRecord = await response.json();
        loadChart(chart);
      } catch (error) {
        console.error('Failed to load chart from URL:', error);
      }
    };

    loadChartFromUrl();
  }, [searchParams, enablePersistence]);

  const handleToggleSave = async (chart?: SavedChartRecord) => {
    const targetId = chart?.id ?? currentChartId;
    if (!targetId) return;
    const nextSaved = chart ? !chart.isSaved : !isCurrentSaved;
    setIsSavingChart(true);
    try {
      const response = await fetch(`/api/charts/${targetId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isSaved: nextSaved }),
      });
      if (!response.ok) throw new Error('Failed to update chart');
      if (targetId === currentChartId) setIsCurrentSaved(nextSaved);
      await refreshLibrary();
    } catch (error) {
      console.error(error);
      toast(t.saveError);
    } finally {
      setIsSavingChart(false);
    }
  };

  const handleDeleteChart = async (chartId: string) => {
    const confirmed = await confirmDialog({
      message: t.deleteConfirm,
      confirmLabel: t.deleteConfirmAction,
      cancelLabel: t.cancel,
    });
    if (!confirmed) return;
    try {
      const response = await fetch(`/api/charts/${chartId}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete');
      if (currentChartId === chartId) {
        setCurrentChartId(null);
        setIsCurrentSaved(false);
      }
      await refreshLibrary();
    } catch (error) {
      console.error(error);
      toast(t.deleteError);
    }
  };

  /**
   * Clears the displayed chart so the form is ready for a new person.
   * Deliberately local-only: the `SavedChart` row already written by
   * `persistChart` is untouched, so this never deletes anything from a
   * visitor's saved or recent list.
   */
  const handleReset = () => {
    setChartData(null);
    setCurrentChartId(null);
    setIsCurrentSaved(false);
    setPersonName('');
    setSelectedLocationName('');
    setFormData(getDefaultFormData());
    setIsFormOpen(false);
    setOverrideEntry(true);
  };

  const handleDownloadPdf = async () => {
    if (!chartData || !isAuthLoaded) return;
    if (!isSignedIn) {
      const returnUrl = searchParams.toString()
        ? `${pathname}?${searchParams.toString()}`
        : pathname;
      router.push(`/sign-in?redirect_url=${encodeURIComponent(returnUrl)}`);
      return;
    }
    try {
      // Loaded on demand: jspdf plus the CJK font loader is the largest single
      // payload in this component, and it is only needed once someone actually
      // clicks download. This page and all four /tools/* landings were paying
      // for it on every visit.
      const { downloadChartPdf } = await import('@/lib/generate-chart-pdf');
      await downloadChartPdf({
        name: personName.trim() || t.chart,
        locationName: selectedLocationName,
        formData,
        chartData,
        lang,
      });
    } catch (error) {
      console.error('PDF download failed:', error);
      toast(t.pdfError);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'natal' | 'transit') => {
    if (!e.target.value) return;
    const [y, m, d] = e.target.value.split('-');
    if (type === 'natal') setFormData(prev => ({ ...prev, year: parseInt(y), month: parseInt(m), day: parseInt(d) }));
    else setFormData(prev => ({ ...prev, transit_year: parseInt(y), transit_month: parseInt(m), transit_day: parseInt(d) }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;
    const [h, m] = e.target.value.split(':');
    setFormData(prev => ({ ...prev, hour: parseInt(h), minute: parseInt(m) }));
  };

  // The year is always written back with four digits: while a year is being
  // typed the input reports values like "0002-04-23", and a bare "2-04-23"
  // is not a valid date string — the browser would clear the whole field.
  const natalDateString = `${String(formData.year).padStart(4, '0')}-${String(formData.month).padStart(2, '0')}-${String(formData.day).padStart(2, '0')}`;
  const natalTimeString = `${String(formData.hour).padStart(2, '0')}:${String(formData.minute).padStart(2, '0')}`;
  const transitDateString = `${String(formData.transit_year).padStart(4, '0')}-${String(formData.transit_month).padStart(2, '0')}-${String(formData.transit_day).padStart(2, '0')}`;

  useEffect(() => {
    const fetchLocations = async () => {
      if (!debouncedQuery) { setLocationResults([]); setIsSearching(false); return; }
      setIsSearching(true);
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(debouncedQuery)}&limit=5&accept-language=${encodeURIComponent(lang)}`);
        setLocationResults(await res.json());
      } catch (error) { console.error(error); } 
      finally { setIsSearching(false); }
    };
    fetchLocations();
  }, [debouncedQuery, lang]);

  const selectLocation = (loc: LocationResult) => {
    setFormData(prev => ({ ...prev, latitude: parseFloat(loc.lat), longitude: parseFloat(loc.lon) }));
    setSelectedLocationName(loc.display_name);
    setIsCommandOpen(false);
    setLocationQuery("");
  };

  const generateCharts = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.latitude === 0 && formData.longitude === 0) return toast(t.errNoLoc);
    if (enablePersistence && !personName.trim()) return toast(t.errNoName);
    // A half-typed year (e.g. 0200) must not reach the engine.
    if (formData.year < 1800 || formData.year > 2100) return toast(toolUiCopy[lang].errDate);
    setIsLoading(true);
    try {
      // Same-origin proxy rather than the Render service directly: identical
      // birth data is served from cache instead of recomputed, and the backend
      // origin stays private.
      const response = await fetch('/api/charts/compute', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error(t.errCalc);
      const data: ChartData = await response.json();
      setChartData(data);

      setCurrentChartId(null);
      setIsCurrentSaved(false);
      setIsFormOpen(false);

      const birth = {
        year: formData.year,
        month: formData.month,
        day: formData.day,
        hour: formData.hour,
        minute: formData.minute,
        latitude: formData.latitude,
        longitude: formData.longitude,
      };

      if (enablePersistence) {
        // On /chart, persistChart is already the single writer to SavedChart —
        // calling upsertProfile here too would create a second row for the
        // same computation for a signed-in visitor. The first chart anyone
        // creates still becomes their "primary" for cross-tool prefill.
        const record = await persistChart(data, false);
        if (record && !primaryProfile) setPrimary(record.id);
      } else {
        // Remember the person, so every other tool on the site can answer for
        // them without asking again. The chart is already computed, so it is
        // passed through rather than recomputed for a signed-in visitor.
        await upsertProfile({
          label: personName.trim() || selectedLocationName,
          locationName: selectedLocationName,
          birth,
          isPrimary: false,
          chartData: data,
        });
      }
    } catch (error: unknown) {
      toast(error instanceof Error ? error.message : t.errCalc);
    }
    finally { setIsLoading(false); }
  };

  if (!isClient) return null;

  /*
   * The location search + natal/gochar fields + submit button. Shared,
   * unmodified, between the always-open card shown before a chart exists
   * and the disclosure shown after — only the surrounding chrome differs.
   */
  const formFields = (
    <>
      <div className="mb-8 relative">
        <label className="block text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">{t.birthCity}</label>
        <div
          onClick={() => setIsCommandOpen(true)}
          className="washi-field flex items-center gap-3 w-full p-3.5 text-sm cursor-text transition-colors hover:border-terracotta/50"
        >
          <Search size={16} className="text-text-muted" />
          <span className={selectedLocationName ? "text-ink" : "text-text-muted"}>
            {selectedLocationName || t.searchPlaceholder}
          </span>
        </div>

        <AnimatePresence>
          {isCommandOpen && (
            <>
              <button type="button" aria-label={t.closeDialog} className="fixed inset-0 z-40 cursor-default" onClick={() => setIsCommandOpen(false)} />
              <m.div
                role="dialog"
                aria-label={t.locationDialog}
                {...popPresence}
                className="washi-card absolute top-0 left-0 w-full z-50 text-text overflow-hidden"
              >
                <Command className="w-full" shouldFilter={false}>
                  <div className="flex items-center px-3 border-b border-border">
                    <Search size={16} className="text-terracotta mr-2" />
                    <Command.Input
                      autoFocus
                      value={locationQuery}
                      onValueChange={setLocationQuery}
                      placeholder={t.searchPlaceholder}
                      className="w-full py-4 text-sm outline-none bg-transparent text-ink placeholder:text-text-muted"
                    />
                  </div>
                  <Command.List className="max-h-60 overflow-y-auto p-2 relative z-50">
                    {isSearching && <div className="p-4 text-sm text-center text-text-muted">{t.searching}</div>}
                    {!isSearching && locationResults.length === 0 && locationQuery && <div className="p-4 text-sm text-center text-text-muted">{t.noLocations}</div>}
                    {!isSearching && locationResults.map((loc, i) => (
                      <Command.Item
                        key={i}
                        value={loc.display_name}
                        onSelect={() => selectLocation(loc)}
                        className="flex items-center gap-2 p-3 text-sm rounded-md hover:bg-neutral-tag cursor-pointer text-text data-[selected=true]:bg-neutral-tag"
                      >
                        <MapPin size={14} className="text-terracotta shrink-0" />
                        <span className="truncate">{loc.display_name}</span>
                      </Command.Item>
                    ))}
                  </Command.List>
                </Command>
              </m.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <form onSubmit={generateCharts} className="space-y-6">
        <div>
          <h3 className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest border-b border-border pb-2 mb-4">{t.natalParams}</h3>
          <div className="mb-4">
            <label className="block text-[10px] text-text-muted mb-1.5 ml-1">
              {t.personName}
              {enablePersistence && <span className="text-terracotta"> *</span>}
            </label>
            <input
              type="text"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              placeholder={t.personNamePlaceholder || ''}
              className="washi-field w-full p-3 text-sm focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all text-ink placeholder:text-text-muted"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="min-w-0">
              <label className="block text-[10px] text-text-muted mb-1.5 ml-1">{t.dob}</label>
              <input type="date" min="1800-01-01" max="2100-12-31" value={natalDateString} onChange={(e) => handleDateChange(e, 'natal')} className="washi-field w-full min-w-0 p-3 text-sm focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all cursor-pointer text-ink" />
            </div>
            <div className="min-w-0">
              <label className="block text-[10px] text-text-muted mb-1.5 ml-1">{t.tob}</label>
              <input type="time" value={natalTimeString} onChange={handleTimeChange} className="washi-field w-full min-w-0 p-3 text-sm focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all cursor-pointer text-ink" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest border-b border-border pb-2 mb-4">{t.gocharOverlay}</h3>
          <div className="w-full">
            <label className="block text-[10px] text-moss mb-1.5 ml-1">{t.transitDate}</label>
            <input type="date" value={transitDateString} onChange={(e) => handleDateChange(e, 'transit')} className="w-full p-3 rounded-md border border-moss/40 bg-moss/5 text-sm text-ink focus:border-moss focus:ring-1 focus:ring-moss outline-none transition-all cursor-pointer" />
          </div>
        </div>

        <m.button whileHover={hoverLift} whileTap={tapPress} type="submit" disabled={isLoading || !selectedLocationName || (enablePersistence && !personName.trim())} className="washi-btn-primary w-full py-4 text-sm disabled:opacity-50 transition-all">
          {isLoading ? t.computingBtn : t.generateBtn}
        </m.button>
      </form>
    </>
  );

  const shellContent = (
    <>
      {showAuthNav && (
        <div className="max-w-7xl mx-auto w-full mb-6 flex justify-end items-center gap-3">
          <SignedOut>
            <Link href="/sign-in" className="text-sm font-body font-medium text-terracotta hover:text-ink px-4 py-2 transition-colors">
              {t.signIn}
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/chart" className="flex items-center gap-2 text-sm font-body font-medium text-terracotta hover:text-ink px-4 py-2 transition-colors">
              <LayoutDashboard size={16} />
              {t.chart}
            </Link>
            <UserMenu />
          </SignedIn>
        </div>
      )}

      <div className="max-w-7xl mx-auto w-full flex-grow">
        {!chartData ? (
          <div className={`grid grid-cols-1 ${enablePersistence ? 'xl:grid-cols-12' : 'lg:grid-cols-12'} gap-8`}>
            {/* LEFT COLUMN: Form */}
            <m.div layout className={`${enablePersistence ? 'xl:col-span-4' : 'lg:col-span-4'} space-y-6 min-w-0`}>
              <div className="chart-card p-6 sm:p-8">
                <div className="mb-8">
                  <h1 className="font-header text-3xl font-medium leading-tight tracking-tight text-ink">{chartCopy.appTitle}</h1>
                </div>
                {formFields}
              </div>

              {enablePersistence && (
                <ChartLibraryPanel
                  recentCharts={recentCharts}
                  savedCharts={savedCharts}
                  activeChartId={currentChartId}
                  onLoadChart={loadChart}
                  onToggleSave={handleToggleSave}
                  onDeleteChart={handleDeleteChart}
                />
              )}
            </m.div>

            {/* RIGHT COLUMN: what the result will hold, drawn as its cards. */}
            <div className={`${enablePersistence ? 'hidden xl:block xl:col-span-8' : 'hidden lg:block lg:col-span-8'} min-w-0`}>
              <div className="chart-card flex h-full min-h-[600px] flex-col items-center justify-center gap-8 overflow-hidden p-10 text-center">
                <ChartPreviewArt t={t} />
                <div className="max-w-sm text-text-muted">
                  <h2 className="mb-2 font-header text-[length:var(--step-2)] text-ink">{t.awaitingTitle}</h2>
                  <p className="text-sm leading-relaxed">{t.awaitingDesc}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }} className="space-y-4 sm:space-y-5">
            <ChartCover
              subject={personName}
              birthDate={natalDateString}
              birthTime={natalTimeString}
              place={selectedLocationName}
              data={chartData}
              t={t}
              lang={lang}
              onDownloadPdf={handleDownloadPdf}
              onReset={handleReset}
              save={
                enablePersistence && currentChartId
                  ? { isSaved: isCurrentSaved, isBusy: isSavingChart, onToggle: () => handleToggleSave() }
                  : undefined
              }
              editOpen={isFormOpen}
              onToggleEdit={() => setIsFormOpen((v) => !v)}
            >
              {formFields}
            </ChartCover>

            {/* The four facts first; the cards below are the detail. */}
            <ChartSummaryCard data={chartData} t={t} lang={lang} />

            {/* Shared display controls — one flip updates every chart
                drawing below (ChartFigure is fully controlled). */}
            <ChartDisplayControls
              t={t}
              useSymbols={useSymbols}
              onUseSymbolsChange={setUseSymbols}
              chartStyle={chartStyle}
              onChartStyleChange={setChartStyle}
              className="md:justify-end"
            />

            {/* The bar and the cards share a wrapper, so the bar stops
                sticking where the cards end. */}
            <div className="space-y-4 sm:space-y-5">
            <ChartSectionBar
              items={WORKSPACE_SECTIONS.map((entry) => ({ id: entry.id, label: sectionLabel(entry, t, lang) }))}
              ariaLabel={t.ui.sectionsNavAria}
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-12">
              {WORKSPACE_SECTIONS.map((entry, i) => (
                <SectionCard
                  key={entry.id}
                  id={entry.id}
                  index={i + 1}
                  title={sectionHeading(entry, t, lang)}
                  className={CARD_SPAN[entry.id]?.span ?? 'md:col-span-12'}
                  minHeight={CARD_SPAN[entry.id]?.minHeight}
                  figure={['lagna', 'navamsha', 'chalit', 'moon', 'gochar'].includes(entry.id)}
                >
                  <ChartSectionBody
                    id={entry.id}
                    data={chartData}
                    t={t}
                    lang={lang}
                    chartStyle={chartStyle}
                    useSymbols={useSymbols}
                    gocharBase={gocharBase}
                    onGocharBaseChange={setGocharBase}
                    openCurrentDasha={entry.id === 'dasha'}
                    showHeading={false}
                  />
                </SectionCard>
              ))}
            </div>

            </div>

            {/* The library comes after the result, not before it. */}
            {enablePersistence && (
              <ChartLibraryPanel
                recentCharts={recentCharts}
                savedCharts={savedCharts}
                activeChartId={currentChartId}
                onLoadChart={loadChart}
                onToggleSave={handleToggleSave}
                onDeleteChart={handleDeleteChart}
              />
            )}
          </m.div>
        )}
      </div>

      {/* Footer Watermark */}
      <div className="w-full mt-12 pb-4 text-center opacity-40 pointer-events-none">
        <span className="text-[10px] text-text-muted font-body font-semibold tracking-[0.3em] uppercase">
          {t.watermark}
        </span>
      </div>
    </>
  );

  if (embedded) {
    return (
      <div className="chart-workspace-embedded w-full">
        <div className="flex flex-col">{shellContent}</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-washi p-4 md:p-8 text-text selection:bg-terracotta/20 flex flex-col">
      {shellContent}
    </main>
  );
}

/**
 * What the server renders in the workspace's place. `useSearchParams` keeps
 * the workspace itself out of the static HTML, so without this the first
 * paint was an empty page and its heading (the LCP) waited for JavaScript.
 * Same card, same heading, same height: the live form replaces it in place.
 */
function WorkspaceFallback({ enablePersistence = false }: { enablePersistence?: boolean }) {
  const { language } = useLanguage();
  const chartCopy = getChartUi(language);
  const t = chartFormCopy[language];
  return (
    <div className="chart-workspace-embedded w-full" aria-busy="true">
      <div className={`mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 ${enablePersistence ? 'xl:grid-cols-12' : 'lg:grid-cols-12'}`}>
        <div className={`${enablePersistence ? 'xl:col-span-4' : 'lg:col-span-4'} min-w-0`}>
          <div className="chart-card min-h-[820px] p-6 sm:p-8">
            <div className="mb-8">
              <h1 className="font-header text-3xl font-medium leading-tight tracking-tight text-ink">{chartCopy.appTitle}</h1>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">{t.awaitingDesc}</p>
          </div>
        </div>
        <div className={`${enablePersistence ? 'hidden xl:block xl:col-span-8' : 'hidden lg:block lg:col-span-8'} min-w-0`}>
          <div className="chart-card min-h-[600px]" />
        </div>
      </div>
    </div>
  );
}

export default function ChartWorkspace(props: ChartWorkspaceProps) {
  return (
    <Suspense fallback={props.embedded ? <WorkspaceFallback enablePersistence={props.enablePersistence} /> : null}>
      <ChartWorkspaceInner {...props} />
    </Suspense>
  );
}