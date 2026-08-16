'use client';

import React, { useState, useEffect, useCallback, Suspense, useSyncExternalStore } from 'react';
import Link from '@/components/i18n/LocaleLink';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { m, AnimatePresence } from 'framer-motion';
import { useDebounce } from 'use-debounce';
import { Command } from 'cmdk';
import { Search, MapPin, Sparkles, Eye, Download, Bookmark, BookmarkCheck, LayoutDashboard } from 'lucide-react';
import { SignedIn, SignedOut, UserButton, useAuth } from '@clerk/nextjs';
import KundliChart from '@/components/KundliChart';
import SouthKundliChart from '@/components/SouthKundliChart';
import ChartLibraryPanel from '@/components/ChartLibraryPanel';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import type {
  Planet,
  TransitPlanet,
  Dasha,
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
import type { AppLanguage } from '@/lib/i18n/language';

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

const signToNumber: Record<string, number> = {
  "Aries": 1, "Taurus": 2, "Gemini": 3, "Cancer": 4, "Leo": 5, "Virgo": 6, 
  "Libra": 7, "Scorpio": 8, "Sagittarius": 9, "Capricorn": 10, "Aquarius": 11, "Pisces": 12 
};

const formatDMS = (raw: number) => { 
  const l = raw % 30; 
  const d = Math.floor(l); 
  const mF = (l - d) * 60; 
  const m = Math.floor(mF); 
  const s = Math.floor((mF - m) * 60); 
  return `${d}° ${m.toString().padStart(2, '0')}' ${s.toString().padStart(2, '0')}"`; 
};

const getIntegerDegree = (raw: number) => Math.floor(raw % 30);

// --- TRANSLATION DICTIONARY ---

const CHART_TABS: ChartTab[] = ['D1', 'D9', 'Chalit', 'Chandra', 'Gochar', 'Details', 'Aspects', 'Dasha'];
const subscribeToClient = () => () => {};

const planetSymbols: Record<string, string> = {
  Sun: "☉", Moon: "☽", Mars: "♂", Mercury: "☿", Jupiter: "♃",
  Venus: "♀", Saturn: "♄", Rahu: "☊", Ketu: "☋"
};

// --- FLUID ACCORDION COMPONENT ---
const formatDashaDisplayDate = (value: string, lang: AppLanguage) => {
  const parsed = new Date(value.replace(/(\d+) (\w+) (\d+)/, "$2 $1, $3"));
  return Number.isNaN(parsed.getTime())
    ? value
    : new Intl.DateTimeFormat(lang, { year: "numeric", month: "short", day: "numeric" }).format(parsed);
};

const DashaNode = ({ dasha, level = 1, t, lang }: { dasha: Dasha, level?: number, t: ChartTranslations, lang: AppLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubs = dasha.sub_dashas && dasha.sub_dashas.length > 0;
  
  const levelStyles: Record<number, string> = {
    1: "bg-washi-elevated border-border text-ink font-body font-semibold text-lg p-4",
    2: "bg-washi-elevated border-border text-ink font-body font-medium text-md p-3 ml-4",
    3: "bg-washi border-border text-text font-body font-medium text-sm p-2 ml-8",
    4: "bg-transparent border-transparent text-text-muted font-body font-normal text-xs p-1.5 ml-12",
  };

  return (
    <div className="w-full">
      <div onClick={() => hasSubs && setIsOpen(!isOpen)} className={`flex justify-between items-center rounded-md border cursor-pointer transition-colors duration-200 mb-1 ${levelStyles[level]}`}>
        <div className="flex items-center gap-2">
          {hasSubs && <m.span animate={{ rotate: isOpen ? 90 : 0 }} className="text-[10px] text-moss">▶</m.span>}
          {!hasSubs && <span className="w-3"></span>} 
          <span>
            <span className="mr-2 text-terracotta font-chart">{planetSymbols[dasha.lord]}</span>
            {t.planets[dasha.lord]}
          </span>
        </div>
        <div className="text-right flex gap-4 font-chart text-xs text-text-muted tabular-nums">
          <span>{formatDashaDisplayDate(dasha.start_date, lang)}</span>
          <span className="text-border">|</span>
          <span>{formatDashaDisplayDate(dasha.end_date, lang)}</span>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && hasSubs && (
          <m.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: "easeOut" }} className="overflow-hidden border-l border-border ml-4 pl-2">
            {dasha.sub_dashas!.map((sub, i) => <DashaNode key={i} dasha={sub} level={level + 1} t={t} lang={lang} />)}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- DIGNITY BADGE COMPONENT ---
const DignityBadge = ({ dignity, t }: { dignity: string, t: ChartTranslations }) => {
  const styles: Record<string, string> = {
    "Exalted": "washi-status-positive",
    "Debilitated": "washi-status-caution",
    "Own Sign": "washi-status-positive",
    "Neutral": "washi-status-neutral",
  };
  return (
    <span className={`text-[10px] px-2 py-0.5 border-0 font-body font-semibold uppercase tracking-wider ${styles[dignity] || styles["Neutral"]}`}>
      {t.ui.dignity[dignity] ?? dignity}
    </span>
  );
}

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

  const planetSymbols: Record<string, string> = {
      Sun: "☉", Moon: "☽", Mars: "♂", Mercury: "☿", Jupiter: "♃",
      Venus: "♀", Saturn: "♄", Rahu: "☊", Ketu: "☋"
    };

  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [activeTab, setActiveTab] = useState<ChartTab>(initialTab);
  const [gocharBase, setGocharBase] = useState<'Lagna' | 'Chandra'>('Lagna');
  const [isLoading, setIsLoading] = useState(false);
  const [currentChartId, setCurrentChartId] = useState<string | null>(null);
  const [isCurrentSaved, setIsCurrentSaved] = useState(false);
  const [recentCharts, setRecentCharts] = useState<SavedChartRecord[]>([]);
  const [savedCharts, setSavedCharts] = useState<SavedChartRecord[]>([]);
  const [isSavingChart, setIsSavingChart] = useState(false);

  const { toast, confirm: confirmDialog } = useToast();
  const t: ChartTranslations = chartFormCopy[lang];
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
      if (enablePersistence) {
        await persistChart(data, false);
      }
    } catch (error: unknown) {
      toast(error instanceof Error ? error.message : t.errCalc);
    }
    finally { setIsLoading(false); }
  };

  const getRenderData = () => {
    if (!chartData) return { planets: [], transitPlanets: [], asc: "Aries" };
    
    // NEW: We added `customSign` so we can override the D1 sign for D9 and Chalit charts
    const mappedPlanets = (p: Planet, house: number, customSign?: string) => ({ 
      name: t.planets[p.name],
      enName: p.name,
      house, 
      degree: getIntegerDegree(p.longitude),
      isRetrograde: (p.name === 'Rahu' || p.name === 'Ketu') ? true : Boolean(p.is_retrograde),
      sign: customSign || p.sign // Map to the new sign if provided
    });
    
    const mappedTransits = (p: TransitPlanet, house: number, customSign?: string) => ({ 
      name: t.planets[p.name],
      enName: p.name,
      house, 
      degree: getIntegerDegree(p.longitude),
      isRetrograde: (p.name === 'Rahu' || p.name === 'Ketu') ? true : Boolean(p.is_retrograde),
      sign: customSign || p.sign
    });
    
    if (activeTab === 'D1') {
      return { planets: chartData.planets.map(p => mappedPlanets(p, p.d1_house, p.sign)), transitPlanets: [], asc: chartData.ascendant_sign };
    }

    if (activeTab === 'D9') {
      const ascNum = signToNumber[chartData.d9_ascendant_sign];
      return { 
        // Pass p.d9_sign so the South Indian chart moves them to Navamsha signs
        planets: chartData.planets.map(p => mappedPlanets(p, ((signToNumber[p.d9_sign] - ascNum + 12) % 12) + 1, p.d9_sign)), 
        transitPlanets: [], 
        asc: chartData.d9_ascendant_sign 
      };
    }

    if (activeTab === 'Chalit') {
      const ascNum = signToNumber[chartData.ascendant_sign];
      const numToSign = ["", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
      
      return { 
        planets: chartData.planets.map(p => {
          // Calculate which physical zodiac sign the new Chalit house falls into
          let newSignNum = ascNum + (p.chalit_house - 1);
          if (newSignNum > 12) newSignNum -= 12;
          return mappedPlanets(p, p.chalit_house, numToSign[newSignNum]);
        }), 
        transitPlanets: [], 
        asc: chartData.ascendant_sign 
      };
    }

    if (activeTab === 'Chandra') {
      const moon = chartData.planets.find(p => p.name === "Moon");
      const moonHouse = moon ? moon.d1_house : 1;
      return { 
        // South Indian Chandra charts keep planets in D1 signs, but move the Ascendant marker
        planets: chartData.planets.map(p => mappedPlanets(p, ((p.d1_house - moonHouse + 12) % 12) + 1, p.sign)), 
        transitPlanets: [], 
        asc: moon ? moon.sign : "Aries" 
      };
    }

    if (activeTab === 'Gochar') {
      let anchorSign = chartData.ascendant_sign;
      if (gocharBase === 'Chandra') { const moon = chartData.planets.find(p => p.name === "Moon"); if (moon) anchorSign = moon.sign; }
      const anchorNum = signToNumber[anchorSign] || 1;
      return { 
        planets: chartData.planets.map(p => mappedPlanets(p, ((signToNumber[p.sign] - anchorNum + 12) % 12) + 1, p.sign)), 
        transitPlanets: chartData.transit_planets.map(p => mappedTransits(p, ((signToNumber[p.sign] - anchorNum + 12) % 12) + 1, p.sign)), 
        asc: anchorSign 
      };
    }

    return { planets: [], transitPlanets: [], asc: "Aries" };
  };

  const renderData = getRenderData();

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
                
                <div className="flex flex-wrap items-center justify-between gap-3 px-6 md:px-8 py-4 border-b border-border bg-washi">
                  <div>
                    <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">{t.subject}</div>
                    <div className="font-header text-lg text-ink">{personName.trim() || '—'}</div>
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={handleDownloadPdf}
                      className="washi-btn-secondary flex items-center gap-2 px-3 py-2 text-[10px] uppercase tracking-wider transition-colors hover:bg-terracotta/10"
                    >
                      <Download size={14} />
                      {t.downloadPdf}
                    </button>
                    {enablePersistence && currentChartId && (
                      <button
                        type="button"
                        onClick={() => handleToggleSave()}
                        disabled={isSavingChart}
                        className={`flex items-center gap-2 px-4 py-2 text-xs font-body font-semibold uppercase tracking-wider rounded-md border transition-colors ${
                          isCurrentSaved
                            ? 'border-terracotta bg-terracotta/10 text-terracotta'
                            : 'border-terracotta bg-transparent text-terracotta hover:bg-terracotta/10'
                        }`}
                      >
                        {isCurrentSaved ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
                        {isSavingChart ? t.savingChart : isCurrentSaved ? t.savedChart : t.saveChart}
                      </button>
                    )}
                  </div>
                </div>

                {/* NEW TABS NAVIGATION */}
                <div className="flex border-b border-border overflow-x-auto no-scrollbar">
                  {CHART_TABS.map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-5 text-xs tracking-widest uppercase font-body font-medium border-b-2 transition-colors whitespace-nowrap px-6 ${activeTab === tab ? 'border-terracotta text-ink' : 'border-transparent text-text-muted hover:text-text'}`}>
                      {t.tabs[tab]}
                    </button>
                  ))}
                </div>

                <div className="p-8 md:p-12 min-h-[600px]">
                  
                  {/* Top Grid Info */}
                  <div className="flex justify-between items-start mb-10 pb-6 border-b border-border">
                    <div className="space-y-5">
                      <div>
                        <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest mb-1">{t.timezone}</div>
                        <div className="font-chart text-sm text-ink">{chartData.timezone_detected}</div>
                      </div>
                      {chartData.sunrise && (
                        <div>
                          <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest mb-1">{t.sunrise}</div>
                          <div className="font-chart text-sm text-text font-medium">{chartData.sunrise}</div>
                        </div>
                      )}
                    </div>
                    <div className="space-y-5 text-right">
                      <div>
                        <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest mb-1">{t.absoluteLagna}</div>
                        <div className="font-chart text-sm text-terracotta font-semibold">{formatDMS(chartData.ascendant_longitude)}</div>
                      </div>
                      {chartData.sunset && (
                        <div>
                          <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest mb-1">{t.sunset}</div>
                          <div className="font-chart text-sm text-text font-medium">{chartData.sunset}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <m.div key={activeTab} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.2 }}>
                      
                      {/* STANDARD CHARTS */}
                      {['D1', 'D9', 'Chalit', 'Chandra', 'Gochar'].includes(activeTab) && (
                        <div className="flex flex-col items-center">
                          <h2 className={`font-header text-ink mb-8 ${lang === 'hi' ? 'text-3xl' : 'text-2xl'}`}>
                            {t.tabTitles[activeTab]}
                          </h2>
                          
                          {activeTab === 'Gochar' && (
                            <div className="flex flex-col items-center gap-3 mb-8">
                              <div className="washi-segmented">
                                <button onClick={() => setGocharBase('Lagna')} className={`px-5 py-2 font-body uppercase tracking-wider transition-colors ${gocharBase === 'Lagna' ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}>{t.lagnaBase}</button>
                                <button onClick={() => setGocharBase('Chandra')} className={`px-5 py-2 font-body uppercase tracking-wider transition-colors ${gocharBase === 'Chandra' ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}>{t.chandraBase}</button>
                              </div>
                              <div className="inline-flex items-center gap-4 text-[11px] font-body text-text-muted">
                                <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-terracotta" />{t.tabTitles.D1}</span>
                                <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-moss" />{t.ui.transitBadge}</span>
                              </div>
                            </div>
                          )}
                          
                          {/* Conditional Chart Rendering */}
                          {chartStyle === 'North' ? (
                            <KundliChart 
                              planets={renderData.planets} 
                              transitPlanets={renderData.transitPlanets} 
                              ascendantSign={renderData.asc}
                              ascLabel={(activeTab === 'D1' || activeTab === 'Gochar') ? t.ui.asc : undefined}
                              ascDegree={(activeTab === 'D1' || activeTab === 'Gochar') ? getIntegerDegree(chartData.ascendant_longitude) : undefined} 
                              transitLabel={t.ui?.transitBadge}
                              accessibility={{ planetAt: t.planetAt, transitPlanet: t.transitPlanet, retrograde: t.retrogradeLong }}
                              useSymbols={useSymbols}
                            />
                          ) : (
                            <SouthKundliChart 
                              planets={renderData.planets} 
                              transitPlanets={renderData.transitPlanets} 
                              ascendantSign={renderData.asc}
                              ascLabel={(activeTab === 'D1' || activeTab === 'Gochar') ? t.ui.asc : undefined}
                              ascDegree={(activeTab === 'D1' || activeTab === 'Gochar') ? getIntegerDegree(chartData.ascendant_longitude) : undefined} 
                              transitLabel={t.ui?.transitBadge}
                              accessibility={{ planetAt: t.planetAt, transitPlanet: t.transitPlanet, retrograde: t.retrogradeLong }}
                              useSymbols={useSymbols}
                            />
                          )}

                        </div>
                      )}

                      {/* NEW: PLANETARY DETAILS TAB */}
                      {activeTab === 'Details' && (
                        <div className="space-y-6">
                            <h2 className={`font-header text-ink mb-8 flex items-center gap-2 ${lang === 'hi' ? 'text-3xl' : 'text-2xl'}`}>
                              <Sparkles className="text-terracotta" size={24} /> {t.tabTitles?.Details}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {chartData.planets.map((p, idx) => {
                                // Force Rahu/Ketu Retrograde locally for the details cards
                                const isRetro = p.name === 'Rahu' || p.name === 'Ketu' ? true : p.is_retrograde;
                                
                                return (
                                <m.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} key={idx} className="washi-card p-5">
                                  <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-2">
                                      <h3 className={`font-body font-semibold text-ink ${lang === 'hi' ? 'text-xl' : 'text-lg'}`}>
                                        <span className="mr-2 font-chart text-terracotta">{planetSymbols[p.name]}</span>
                                        {t.planets[p.name]}
                                      </h3>
                                      {isRetro && (
                                        <span className={`font-body font-semibold washi-status-caution px-2 py-0.5 uppercase tracking-wider ${lang === 'hi' ? 'text-xs' : 'text-[10px]'}`}>
                                          {t.ui.retrograde}
                                        </span>
                                      )}
                                    </div>
                                    <DignityBadge dignity={p.dignity} t={t} />
                                  </div>
                                  <div className="space-y-2 text-sm text-text-muted">
                                    <div className="flex justify-between">
                                      <span className={lang === 'hi' ? 'text-base' : ''}>{t.ui?.house} {p.d1_house}</span> 
                                      <span className="font-chart text-ink">{t.signs[p.sign]} {formatDMS(p.longitude)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className={lang === 'hi' ? 'text-base' : ''}>{t.ui?.lord}</span> 
                                      <span className={`font-medium text-ink ${lang === 'hi' ? 'text-base' : ''}`}>{t.planets[p.sign_lord]}</span>
                                    </div>
                                    <div className="pt-2 mt-2 border-t border-border">
                                      <div className="flex justify-between items-center">
                                        <span className={`font-body font-semibold text-terracotta uppercase tracking-widest ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}>
                                        {t.ui.nakshatraLabel}
                                        </span> 
                                        <span className={`font-semibold text-ink ${lang === 'hi' ? 'text-base' : 'text-sm'}`}>
                                          {t.nakshatras[p.nakshatra]}
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center mt-1">
                                        <span className="text-[10px] text-text-muted uppercase tracking-widest">{t.ui?.pada}</span> 
                                        <span className="font-chart text-xs text-text-muted">{p.nakshatra_pada}</span>
                                      </div>
                                    </div>
                                  </div>
                                </m.div>
                              )})}
                            </div>
                        </div>
                      )}

                      {/* NEW: VEDIC ASPECTS TAB */}
                      {activeTab === 'Aspects' && (
                        <div className="space-y-6">
                           <h2 className="text-2xl font-header text-ink mb-8 flex items-center gap-2"><Eye className="text-terracotta" size={24} /> {t.tabTitles?.Aspects}</h2>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             {chartData.planets.filter(p => p.aspects_houses.length > 0).map((p, idx) => (
                               <m.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }} key={idx} className="washi-card flex flex-col p-5">
                                  <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 rounded-full washi-icon-chip font-chart text-base">{planetSymbols[p.name]}</div>
                                    <span className="font-body font-semibold text-ink">{t.planets[p.name]}</span>
                                    <span className="text-xs text-text-muted">{t.inHouse} {p.d1_house}</span>
                                  </div>
                                  <div>
                                    <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest mb-2">{t.ui?.aspects}</div>
                                    <div className="flex flex-wrap gap-2">
                                      {p.aspects_houses.map(h => (
                                        <div key={h} className="border border-border px-3 py-1.5 rounded text-sm font-body font-medium text-text">
                                          {t.ui?.house} {h}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                               </m.div>
                             ))}
                           </div>
                        </div>
                      )}

                      {/* DASHA TAB */}
                      {activeTab === 'Dasha' && (
                        <div className="max-w-3xl mx-auto">
                          <h2 className="text-2xl font-header text-ink mb-2 text-center">{t.dashaTimeline}</h2>
                          <p className="text-center text-[10px] text-text-muted uppercase tracking-widest font-body font-semibold mb-10">{t.dashaSub}</p>
                          <div className="space-y-1">
                            {chartData.vimshottari_dashas.map((dasha, i) => <DashaNode key={i} dasha={dasha} t={t} lang={lang} />)}
                          </div>
                        </div>
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