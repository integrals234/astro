'use client';

import React, { useState, useEffect, useCallback, Suspense, useSyncExternalStore } from 'react';
import Link from '@/components/i18n/LocaleLink';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { m, AnimatePresence } from 'framer-motion';
import { useDebounce } from 'use-debounce';
import { Command } from 'cmdk';
import { Search, MapPin, Sparkles, Eye, LayoutDashboard } from 'lucide-react';
import { SignedIn, SignedOut, UserButton, useAuth } from '@clerk/nextjs';
import ChartLibraryPanel from '@/components/ChartLibraryPanel';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import type {
  ChartData,
  ChartFormData,
  LocationResult,
  ChartTab,
  SavedChartRecord,
} from '@/lib/chart-types';
import { getChartUi, chartFormCopy, type ChartTranslations } from '@/lib/chart-i18n';
import { useToast } from '@/components/ui/Toaster';
import { popPresence, hoverLift, tapPress } from '@/lib/motion/tokens';
import { parseChartPrefill } from '@/lib/chart-prefill';
import { useBirthProfile } from '@/components/profile/ProfileProvider';
import type { ChartView } from '@/lib/chart-render';
import ChartFigure from '@/components/chart/ChartFigure';
import ChartMetaStrip from '@/components/chart/ChartMetaStrip';
import ChartResultHeader from '@/components/chart/ChartResultHeader';
import PlanetDetailsGrid from '@/components/chart/PlanetDetailsGrid';
import AspectsGrid from '@/components/chart/AspectsGrid';
import DashaTimeline from '@/components/chart/DashaTimeline';

interface ChartWorkspaceProps {
  enablePersistence?: boolean;
  showAuthNav?: boolean;
  embedded?: boolean;
  /**
   * Tab the workspace opens on. Tool landing pages (Phase 3.6) each emphasise
   * a different output, so a visitor who searched for "ダシャー計算" lands on
   * the dasha timeline rather than the natal chart.
   */
  initialTab?: ChartTab;
}

// --- TRANSLATION DICTIONARY ---

const CHART_TABS: ChartTab[] = ['D1', 'D9', 'Chalit', 'Chandra', 'Gochar', 'Details', 'Aspects', 'Dasha'];
const subscribeToClient = () => () => {};

/** `ChartTab` values that correspond to a drawn kundli, mapped to `ChartView`. */
const TAB_TO_VIEW: Partial<Record<ChartTab, ChartView>> = {
  D1: 'lagna',
  D9: 'd9',
  Chalit: 'chalit',
  Chandra: 'moon',
  Gochar: 'gochar',
};

// --- MAIN DASHBOARD ---
function ChartWorkspaceInner({
  enablePersistence = false,
  showAuthNav = false,
  embedded = false,
  initialTab = 'D1',
}: ChartWorkspaceProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { isSignedIn, isLoaded: isAuthLoaded } = useAuth();
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
  const [formData, setFormData] = useState<ChartFormData>(() => {
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
      ...prefill?.formPatch,
    };
  });
  
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
  const [activeTab, setActiveTab] = useState<ChartTab>(initialTab);
  const [gocharBase, setGocharBase] = useState<'Lagna' | 'Chandra'>('Lagna');
  const [isLoading, setIsLoading] = useState(false);
  const [currentChartId, setCurrentChartId] = useState<string | null>(null);
  const [isCurrentSaved, setIsCurrentSaved] = useState(false);
  const [recentCharts, setRecentCharts] = useState<SavedChartRecord[]>([]);
  const [savedCharts, setSavedCharts] = useState<SavedChartRecord[]>([]);
  const [isSavingChart, setIsSavingChart] = useState(false);

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
    !selectedLocationName
  ) {
    // Adjusting state during render rather than in an effect: React re-runs
    // this component before touching the DOM, so there is no cascading render
    // and no flash of the empty form.
    setAppliedProfileId(primaryProfile.id);
    setFormData((current) => ({ ...current, ...primaryProfile.birth }));
    setSelectedLocationName(primaryProfile.locationName);
    if (!personName.trim()) setPersonName(primaryProfile.label);
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
    if (!enablePersistence) return;
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
  }, [enablePersistence]);

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
    setActiveTab('D1');
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

  const natalDateString = `${formData.year}-${String(formData.month).padStart(2, '0')}-${String(formData.day).padStart(2, '0')}`;
  const natalTimeString = `${String(formData.hour).padStart(2, '0')}:${String(formData.minute).padStart(2, '0')}`;
  const transitDateString = `${formData.transit_year}-${String(formData.transit_month).padStart(2, '0')}-${String(formData.transit_day).padStart(2, '0')}`;

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

  // Which of the five projections the active tab needs, if any (Details,
  // Aspects and Dasha don't draw a kundli). ChartFigure computes the actual
  // projection itself via chartView() — see chart-render.ts for the D9/Chalit
  // customSign notes.
  const view = TAB_TO_VIEW[activeTab];

  if (!isClient) return null;

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
            <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: "h-8 w-8 bg-terracotta text-washi" } }} />
          </SignedIn>
        </div>
      )}

      <div className={`max-w-7xl mx-auto grid grid-cols-1 ${enablePersistence ? 'xl:grid-cols-12' : 'lg:grid-cols-12'} gap-8 flex-grow w-full`}>
        
        {/* LEFT COLUMN: Form */}
        <m.div layout className={`${enablePersistence ? 'xl:col-span-4' : 'lg:col-span-4'} space-y-6 min-w-0`}>
          <div className="washi-card p-8">
            
            <div className="mb-8">
              <h1 className="text-3xl font-header font-medium text-ink tracking-tight">{chartCopy.appTitle}</h1>
            </div>

            {/* CMDK Autocomplete */}
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
              {/* --- NATAL PARAMETERS --- */}
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
                    <input type="date" value={natalDateString} onChange={(e) => handleDateChange(e, 'natal')} className="washi-field w-full min-w-0 p-3 text-sm focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all cursor-pointer text-ink" />
                  </div>
                  <div className="min-w-0">
                    <label className="block text-[10px] text-text-muted mb-1.5 ml-1">{t.tob}</label>
                    <input type="time" value={natalTimeString} onChange={handleTimeChange} className="washi-field w-full min-w-0 p-3 text-sm focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all cursor-pointer text-ink" />
                  </div>
                </div>
              </div>

              {/* --- GOCHAR OVERLAY --- */}
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

        {/* RIGHT COLUMN: Output Dashboard */}
        <div className={`${enablePersistence ? 'xl:col-span-8' : 'lg:col-span-8'} min-w-0`}>
          <AnimatePresence mode="wait">
            {chartData ? (
              <m.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }} className="washi-card text-text overflow-hidden">
                
                <ChartResultHeader
                  subject={personName}
                  t={t}
                  onDownloadPdf={handleDownloadPdf}
                  save={
                    enablePersistence && currentChartId
                      ? { isSaved: isCurrentSaved, isBusy: isSavingChart, onToggle: () => handleToggleSave() }
                      : undefined
                  }
                />

                {/* NEW TABS NAVIGATION */}
                <div className="flex border-b border-border overflow-x-auto no-scrollbar">
                  {CHART_TABS.map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-5 text-xs tracking-widest uppercase font-body font-medium border-b-2 transition-colors whitespace-nowrap px-6 ${activeTab === tab ? 'border-terracotta text-ink' : 'border-transparent text-text-muted hover:text-text'}`}>
                      {t.tabs[tab]}
                    </button>
                  ))}
                </div>

                <div className="p-8 md:p-12 min-h-[600px]">
                  
                  <ChartMetaStrip data={chartData} t={t} />

                  <AnimatePresence mode="wait">
                    <m.div key={activeTab} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.2 }}>
                      
                      {/* STANDARD CHARTS */}
                      {view && (
                        <ChartFigure
                          data={chartData}
                          view={view}
                          t={t}
                          lang={lang}
                          chartStyle={chartStyle}
                          useSymbols={useSymbols}
                          gocharBase={gocharBase}
                          onGocharBaseChange={setGocharBase}
                          controls="none"
                        />
                      )}

                      {/* NEW: PLANETARY DETAILS TAB */}
                      {activeTab === 'Details' && (
                        <div className="space-y-6">
                            <h2 className={`font-header text-ink mb-8 flex items-center gap-2 ${lang === 'hi' ? 'text-3xl' : 'text-2xl'}`}>
                              <Sparkles className="text-terracotta" size={24} /> {t.tabTitles?.Details}
                            </h2>
                            <PlanetDetailsGrid planets={chartData.planets} t={t} lang={lang} />
                        </div>
                      )}

                      {/* NEW: VEDIC ASPECTS TAB */}
                      {activeTab === 'Aspects' && (
                        <div className="space-y-6">
                           <h2 className="text-2xl font-header text-ink mb-8 flex items-center gap-2"><Eye className="text-terracotta" size={24} /> {t.tabTitles?.Aspects}</h2>
                           <AspectsGrid planets={chartData.planets} t={t} />
                        </div>
                      )}

                      {/* DASHA TAB */}
                      {activeTab === 'Dasha' && (
                        <DashaTimeline dashas={chartData.vimshottari_dashas} t={t} lang={lang} />
                      )}

                    </m.div>
                  </AnimatePresence>
                </div>
                {/* --- GLOBAL CONTROLS AREA --- */}
                  <div className="mt-2 pb-10 flex flex-col items-center gap-4">
                    
                    {/* 1. Symbol Switcher (Visible on all tabs EXCEPT Aspects) */}
                    {!['Aspects', 'Details', 'Dasha'].includes(activeTab) && (
                      <div className="washi-segmented">
                        <button 
                          onClick={() => setUseSymbols(false)} 
                          className={`px-4 py-1.5 text-[10px] font-body uppercase tracking-widest transition-colors ${!useSymbols ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-xs' : ''}`}
                        >
                          {t.ui.textToggle}
                        </button>
                        <button 
                          onClick={() => setUseSymbols(true)} 
                          className={`px-4 py-1.5 text-[10px] font-body uppercase tracking-widest transition-colors ${useSymbols ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-xs' : ''}`}
                        >
                          {t.ui.symbolToggle}
                        </button>
                      </div>
                    )}

                    {/* 2. Chart Style Switcher (Only visible when viewing a Chart tab) */}
                    {['D1', 'D9', 'Chalit', 'Chandra', 'Gochar'].includes(activeTab) && (
                      <div className="washi-segmented">
                        <button 
                          onClick={() => setChartStyle('North')} 
                          className={`px-6 py-2 font-body uppercase tracking-widest transition-colors ${chartStyle === 'North' ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}
                        >
                          {t.ui.northStyle}
                        </button>
                        <button 
                          onClick={() => setChartStyle('South')} 
                          className={`px-6 py-2 font-body uppercase tracking-widest transition-colors ${chartStyle === 'South' ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}
                        >
                          {t.ui.southStyle}
                        </button>
                      </div>
                    )}
                  </div>
              </m.div>
            ) : (
              // Empty State
              <m.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex items-center justify-center border border-dashed border-border rounded-lg bg-washi-elevated min-h-[600px]">
                <div className="text-center text-text-muted p-8 max-w-sm">
                  <div className="washi-icon-chip w-16 h-16 mx-auto mb-6">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-lg font-header text-ink mb-2">{t.awaitingTitle}</h3>
                  <p className="text-sm leading-relaxed">{t.awaitingDesc}</p>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </div>
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

export default function ChartWorkspace(props: ChartWorkspaceProps) {
  return (
    <Suspense fallback={null}>
      <ChartWorkspaceInner {...props} />
    </Suspense>
  );
}