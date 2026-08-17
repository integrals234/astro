'use client';

import ChartFigure from '@/components/chart/ChartFigure';
import ChartSummaryCard from '@/components/chart/ChartSummaryCard';
import PlanetDetailsGrid from '@/components/chart/PlanetDetailsGrid';
import AspectsGrid from '@/components/chart/AspectsGrid';
import DashaTimeline from '@/components/chart/DashaTimeline';
import YogaPanel from '@/components/chart/YogaPanel';
import { SECTION_TO_VIEW, type ChartSectionId } from '@/lib/chart-sections';
import type { ChartData } from '@/lib/chart-types';
import type { ChartTranslations } from '@/lib/chart-i18n';
import type { AppLanguage } from '@/lib/i18n/language';

export interface ChartSectionBodyProps {
  id: ChartSectionId;
  data: ChartData;
  t: ChartTranslations;
  lang: AppLanguage;
  /**
   * Figure display state. Optional and defaulted (North, text, no toggle)
   * for callers with a single section and nowhere to put a shared toggle —
   * a caller stacking several figure sections at once (the workspace) passes
   * its own state through here so one flip of "South Indian" updates every
   * figure at once, matching `ChartFigure`'s fully-controlled design.
   */
  chartStyle?: 'North' | 'South';
  useSymbols?: boolean;
  gocharBase?: 'Lagna' | 'Chandra';
  onGocharBaseChange?: (base: 'Lagna' | 'Chandra') => void;
  /** Opens the running mahadasha by default, for `id === 'dasha'`. */
  openCurrentDasha?: boolean;
  /** `false` when the caller (e.g. `DeferredSection`) renders its own
   * heading for this section already. */
  showHeading?: boolean;
}

/**
 * One chart section, dispatched by id to the Phase 2 display components.
 * This is the single place that maps a `ChartSectionId` to a component, so
 * every consumer — tool landing pages, the workspace, the vertical report
 * in a later phase — renders sections the same way.
 */
export default function ChartSectionBody({
  id,
  data,
  t,
  lang,
  chartStyle = 'North',
  useSymbols = false,
  gocharBase,
  onGocharBaseChange,
  openCurrentDasha = false,
  showHeading = true,
}: ChartSectionBodyProps) {
  const view = SECTION_TO_VIEW[id];
  if (view) {
    return (
      <ChartFigure
        data={data}
        view={view}
        t={t}
        lang={lang}
        chartStyle={chartStyle}
        useSymbols={useSymbols}
        gocharBase={gocharBase}
        onGocharBaseChange={onGocharBaseChange}
        controls="none"
        showHeading={showHeading}
      />
    );
  }

  switch (id) {
    case 'summary':
      return <ChartSummaryCard data={data} t={t} lang={lang} />;
    case 'planets':
      return <PlanetDetailsGrid planets={data.planets} t={t} lang={lang} />;
    case 'aspects':
      return <AspectsGrid planets={data.planets} t={t} />;
    case 'yogas':
      return <YogaPanel data={data} t={t} lang={lang} showHeading={showHeading} />;
    case 'dasha':
      return (
        <DashaTimeline
          dashas={data.vimshottari_dashas}
          t={t}
          lang={lang}
          openCurrent={openCurrentDasha}
          showHeading={showHeading}
        />
      );
    default:
      return null;
  }
}
