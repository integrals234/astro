'use client';

import ChartFigure from '@/components/chart/ChartFigure';
import PlanetDetailsGrid from '@/components/chart/PlanetDetailsGrid';
import AspectsGrid from '@/components/chart/AspectsGrid';
import DashaTimeline from '@/components/chart/DashaTimeline';
import { SECTION_TO_VIEW, type ChartSectionId } from '@/lib/chart-sections';
import type { ChartData } from '@/lib/chart-types';
import type { ChartTranslations } from '@/lib/chart-i18n';
import type { AppLanguage } from '@/lib/i18n/language';

export interface ChartSectionBodyProps {
  id: ChartSectionId;
  data: ChartData;
  t: ChartTranslations;
  lang: AppLanguage;
}

/**
 * One chart section, dispatched by id to the Phase 2 display components.
 * This is the single place that maps a `ChartSectionId` to a component, so
 * every consumer — tool landing pages now, the workspace and vertical
 * report in later phases — renders sections the same way.
 *
 * Fixed North style, text (not symbols), no external toggle: these are the
 * defaults every prior consumer of this data already rendered with, and a
 * page that only asks for one or two sections has nowhere to put a shared
 * toggle anyway.
 */
export default function ChartSectionBody({ id, data, t, lang }: ChartSectionBodyProps) {
  const view = SECTION_TO_VIEW[id];
  if (view) {
    return (
      <ChartFigure
        data={data}
        view={view}
        t={t}
        lang={lang}
        chartStyle="North"
        useSymbols={false}
        controls="none"
      />
    );
  }

  switch (id) {
    case 'planets':
      return <PlanetDetailsGrid planets={data.planets} t={t} lang={lang} />;
    case 'aspects':
      return <AspectsGrid planets={data.planets} t={t} />;
    case 'dasha':
      return <DashaTimeline dashas={data.vimshottari_dashas} t={t} lang={lang} />;
    default:
      return null;
  }
}
