'use client';

import { useState } from 'react';
import { ChevronDown, RotateCcw } from 'lucide-react';
import Link from '@/components/i18n/LocaleLink';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { useChartData } from '@/components/chart/ChartDataProvider';
import { useBirthProfile } from '@/components/profile/ProfileProvider';
import ChartSectionRail from '@/components/chart/ChartSectionRail';
import DeferredSection from '@/components/chart/DeferredSection';
import ChartSectionBody from '@/components/chart/ChartSectionBody';
import BookingHandoff from '@/components/tools/BookingHandoff';
import BirthDetailsFields, {
  EMPTY_BIRTH_DETAILS,
  isBirthDetailsComplete,
  type BirthDetailsValue,
} from '@/components/shared/BirthDetailsFields';
import { chartFormCopy, type ChartTranslations } from '@/lib/chart-i18n';
import { buildChartPrefillQuery } from '@/lib/chart-prefill';
import { chartPreviewCopy } from '@/lib/tools/chart-preview-copy';
import { sectionLabel, sectionHeading, type ChartSectionId } from '@/lib/chart-sections';

/**
 * Every section in reading order — "the answer" first, the diagrams after,
 * Chalit set aside since it's the least legible one to a first-time visitor,
 * yogas/ashtakavarga after dasha since they read *from* the placements
 * shown above them, transits last as the reason to come back tomorrow.
 */
const REPORT_SECTIONS: readonly { id: ChartSectionId; tabKey?: string }[] = [
  { id: 'lagna', tabKey: 'D1' },
  { id: 'planets', tabKey: 'Details' },
  { id: 'moon', tabKey: 'Chandra' },
  { id: 'navamsha', tabKey: 'D9' },
  { id: 'aspects', tabKey: 'Aspects' },
  { id: 'dasha', tabKey: 'Dasha' },
  { id: 'yogas' },
  { id: 'ashtakavarga' },
  { id: 'gochar', tabKey: 'Gochar' },
];

export default function VerticalChartReport() {
  const { language: lang } = useLanguage();
  const t: ChartTranslations = chartFormCopy[lang];
  const previewCopy = chartPreviewCopy[lang];
  const { primary, isLoaded, upsertProfile } = useBirthProfile();
  const { data, status, compute, reset, overrideEntry } = useChartData();
  const [entry, setEntry] = useState<BirthDetailsValue>(EMPTY_BIRTH_DETAILS);
  const [chalitOpen, setChalitOpen] = useState(false);
  const [chartStyle, setChartStyle] = useState<'North' | 'South'>('North');
  const [useSymbols, setUseSymbols] = useState(false);
  const [gocharBase, setGocharBase] = useState<'Lagna' | 'Chandra'>('Lagna');

  const handleEntrySubmit = async () => {
    if (!isBirthDetailsComplete(entry) || !entry.location) return;
    const birth = {
      year: Number(entry.date.slice(0, 4)),
      month: Number(entry.date.slice(5, 7)),
      day: Number(entry.date.slice(8, 10)),
      hour: Number(entry.time.slice(0, 2)),
      minute: Number(entry.time.slice(3, 5)),
      latitude: Number(entry.location.lat),
      longitude: Number(entry.location.lon),
    };
    const result = await compute(birth);
    if (!result) return;
    void upsertProfile({
      label: entry.name.trim() || entry.location.display_name,
      locationName: entry.location.display_name,
      birth,
      isPrimary: false,
      chartData: result,
    });
  };

  if (!isLoaded) {
    return <div className="washi-card h-72 animate-pulse" aria-hidden />;
  }

  if (!data && (!primary || overrideEntry) && status !== 'loading') {
    return (
      <div className="washi-card mx-auto max-w-xl p-6 md:p-7">
        <p className="mb-4 font-body text-text">{previewCopy.needDetails}</p>
        <BirthDetailsFields
          value={entry}
          onChange={(patch) => setEntry((v) => ({ ...v, ...patch }))}
          idPrefix="home-report"
        />
        <button
          type="button"
          onClick={handleEntrySubmit}
          disabled={!isBirthDetailsComplete(entry)}
          className="washi-btn-primary mt-4 disabled:opacity-50"
        >
          {previewCopy.generate}
        </button>
      </div>
    );
  }

  if (status === 'loading' || !data) {
    return <div className="washi-card h-72 animate-pulse" aria-hidden />;
  }

  const prefillQuery = primary
    ? buildChartPrefillQuery({
        name: primary.label,
        date: `${String(primary.birth.year).padStart(4, '0')}-${String(primary.birth.month).padStart(2, '0')}-${String(primary.birth.day).padStart(2, '0')}`,
        time: `${String(primary.birth.hour).padStart(2, '0')}:${String(primary.birth.minute).padStart(2, '0')}`,
        latitude: primary.birth.latitude,
        longitude: primary.birth.longitude,
        place: primary.locationName,
      })
    : '';

  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-3">
        <p className="font-body text-sm text-text-muted">
          {primary?.label} — {primary?.locationName}
        </p>
        <button
          type="button"
          onClick={reset}
          className="washi-btn-tertiary flex items-center gap-1.5 px-2 py-2 text-[10px] uppercase tracking-wider"
        >
          <RotateCcw size={13} />
          {t.ui?.resetChart}
        </button>
      </div>

      <DeferredSection id="summary" title={t.ui.summaryTitle}>
        <ChartSectionBody id="summary" data={data} t={t} lang={lang} />
      </DeferredSection>

      <div className="mt-16 flex flex-col lg:flex-row lg:gap-12">
        <ChartSectionRail
          items={[
            { id: 'summary', label: t.ui.summaryTitle },
            ...REPORT_SECTIONS.map((section) => ({ id: section.id, label: sectionLabel(section, t, lang) })),
          ]}
          ariaLabel={t.ui.sectionsNavAria}
        />

        <div className="min-w-0 flex-1 space-y-16">
          {/* Shared display controls — one flip updates every chart-figure
              section below, since ChartFigure is fully controlled and
              never owns this state itself. */}
          <div className="flex flex-wrap items-center justify-center gap-4 pb-6 border-b border-border">
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
          </div>

          {REPORT_SECTIONS.map((section) => (
            <DeferredSection key={section.id} id={section.id} title={sectionHeading(section, t, lang)}>
              <ChartSectionBody
                id={section.id}
                data={data}
                t={t}
                lang={lang}
                chartStyle={chartStyle}
                useSymbols={useSymbols}
                gocharBase={gocharBase}
                onGocharBaseChange={setGocharBase}
                openCurrentDasha={section.id === 'dasha'}
                showHeading={false}
              />
            </DeferredSection>
          ))}

          {/* Chalit behind its own disclosure — the least legible chart to
              someone seeing this system for the first time, so it isn't
              part of the default reading path. */}
          <section id="chalit" className="scroll-mt-24">
            <button
              type="button"
              onClick={() => setChalitOpen((v) => !v)}
              aria-expanded={chalitOpen}
              className="flex w-full items-center justify-between gap-3 border-b border-border pb-4 text-left"
            >
              <h2 className="font-header text-2xl text-ink">{t.tabTitles.Chalit}</h2>
              <ChevronDown size={20} className={`text-text-muted transition-transform ${chalitOpen ? 'rotate-180' : ''}`} />
            </button>
            {chalitOpen && (
              <div className="pt-8">
                <ChartSectionBody
                  id="chalit"
                  data={data}
                  t={t}
                  lang={lang}
                  chartStyle={chartStyle}
                  useSymbols={useSymbols}
                  showHeading={false}
                />
              </div>
            )}
          </section>
        </div>
      </div>

      <div className="mt-16 space-y-6 text-center">
        <Link href={prefillQuery ? `/chart?${prefillQuery}` : '/chart'} className="washi-btn-secondary inline-block text-sm">
          {previewCopy.openFullChart}
        </Link>
        <BookingHandoff tool="generic" offering="consultation" />
      </div>
    </div>
  );
}
