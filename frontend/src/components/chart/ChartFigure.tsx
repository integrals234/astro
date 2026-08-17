'use client';

import KundliChart from '@/components/KundliChart';
import SouthKundliChart from '@/components/SouthKundliChart';
import { chartView, type ChartView } from '@/lib/chart-render';
import type { ChartData } from '@/lib/chart-types';
import type { ChartTranslations } from '@/lib/chart-i18n';
import type { AppLanguage } from '@/lib/i18n/language';

export interface ChartFigureProps {
  data: ChartData;
  view: ChartView;
  t: ChartTranslations;
  lang: AppLanguage;
  chartStyle: 'North' | 'South';
  useSymbols: boolean;
  /** Only meaningful when `view === 'gochar'`. Defaults to `'Lagna'`. */
  gocharBase?: 'Lagna' | 'Chandra';
  onGocharBaseChange?: (base: 'Lagna' | 'Chandra') => void;
  /**
   * `'full'` renders the North/South and symbol switcher buttons as part of
   * this component; `'none'` renders only the chart itself, leaving the
   * switchers to the caller. `'none'` is what the still-tabbed workspace uses
   * — it already owns this state and renders its own switcher footer once,
   * shared across every tab, rather than one per figure.
   */
  controls?: 'full' | 'none';
  onChartStyleChange?: (style: 'North' | 'South') => void;
  onUseSymbolsChange?: (value: boolean) => void;
  /** Overrides the default `t.tabTitles[view]` heading. */
  title?: string;
  /** `false` when a caller (e.g. `DeferredSection`) already renders its own
   * heading for this figure — otherwise this and the caller's would double up. */
  showHeading?: boolean;
}

const VIEW_TO_TAB_TITLE_KEY: Record<ChartView, keyof ChartTranslations['tabTitles']> = {
  lagna: 'D1',
  d9: 'D9',
  chalit: 'Chalit',
  moon: 'Chandra',
  gochar: 'Gochar',
};

/**
 * One drawn chart, in whichever of the two visual styles, for one of the
 * five projections. Extracted from `ChartWorkspace`'s "STANDARD CHARTS" tab
 * body and the North/South + symbol switcher it shared with every tab.
 */
export default function ChartFigure({
  data,
  view,
  t,
  lang,
  chartStyle,
  useSymbols,
  gocharBase = 'Lagna',
  onGocharBaseChange,
  controls = 'none',
  onChartStyleChange,
  onUseSymbolsChange,
  title,
  showHeading = true,
}: ChartFigureProps) {
  const rendered = chartView(data, view, t.planets, {
    gocharBase: gocharBase === 'Chandra' ? 'moon' : 'lagna',
  });

  return (
    <div className="flex flex-col items-center">
      {showHeading && (
        <h2 className={`font-header text-ink mb-8 ${lang === 'hi' ? 'text-3xl' : 'text-2xl'}`}>
          {title ?? t.tabTitles[VIEW_TO_TAB_TITLE_KEY[view]]}
        </h2>
      )}

      {view === 'gochar' && (
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="washi-segmented">
            <button
              onClick={() => onGocharBaseChange?.('Lagna')}
              className={`px-5 py-2 font-body uppercase tracking-wider transition-colors ${gocharBase === 'Lagna' ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}
            >
              {t.lagnaBase}
            </button>
            <button
              onClick={() => onGocharBaseChange?.('Chandra')}
              className={`px-5 py-2 font-body uppercase tracking-wider transition-colors ${gocharBase === 'Chandra' ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}
            >
              {t.chandraBase}
            </button>
          </div>
          <div className="inline-flex items-center gap-4 text-[11px] font-body text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-terracotta" />
              {t.tabTitles.D1}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-moss" />
              {t.ui.transitBadge}
            </span>
          </div>
        </div>
      )}

      {/* Width lives here, not on KundliChart/SouthKundliChart themselves —
          they used to cap at a bare `max-w-md`, which doesn't shrink below
          its own value even when a narrower parent (a 7/12 grid column,
          say) has less room than that, and AppShell's <main> clips overflow
          rather than scrolling it. `min(28rem,100%)` never exceeds the
          parent's actual width. */}
      <div className="w-full max-w-[min(28rem,100%)]">
      {chartStyle === 'North' ? (
        <KundliChart
          planets={rendered.planets}
          transitPlanets={rendered.transitPlanets}
          ascendantSign={rendered.ascendantSign}
          ascLabel={rendered.showAscendant ? t.ui.asc : undefined}
          ascDegree={rendered.showAscendant ? rendered.ascendantDegree : undefined}
          transitLabel={t.ui?.transitBadge}
          accessibility={{ planetAt: t.planetAt, transitPlanet: t.transitPlanet, retrograde: t.retrogradeLong }}
          useSymbols={useSymbols}
        />
      ) : (
        <SouthKundliChart
          planets={rendered.planets}
          transitPlanets={rendered.transitPlanets}
          ascendantSign={rendered.ascendantSign}
          ascLabel={rendered.showAscendant ? t.ui.asc : undefined}
          ascDegree={rendered.showAscendant ? rendered.ascendantDegree : undefined}
          transitLabel={t.ui?.transitBadge}
          accessibility={{ planetAt: t.planetAt, transitPlanet: t.transitPlanet, retrograde: t.retrogradeLong }}
          useSymbols={useSymbols}
        />
      )}
      </div>

      {controls === 'full' && (
        <div className="mt-6 flex flex-col items-center gap-4">
          <div className="washi-segmented">
            <button
              onClick={() => onUseSymbolsChange?.(false)}
              className={`px-4 py-1.5 text-[10px] font-body uppercase tracking-widest transition-colors ${!useSymbols ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-xs' : ''}`}
            >
              {t.ui.textToggle}
            </button>
            <button
              onClick={() => onUseSymbolsChange?.(true)}
              className={`px-4 py-1.5 text-[10px] font-body uppercase tracking-widest transition-colors ${useSymbols ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-xs' : ''}`}
            >
              {t.ui.symbolToggle}
            </button>
          </div>
          <div className="washi-segmented">
            <button
              onClick={() => onChartStyleChange?.('North')}
              className={`px-6 py-2 font-body uppercase tracking-widest transition-colors ${chartStyle === 'North' ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}
            >
              {t.ui.northStyle}
            </button>
            <button
              onClick={() => onChartStyleChange?.('South')}
              className={`px-6 py-2 font-body uppercase tracking-widest transition-colors ${chartStyle === 'South' ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}
            >
              {t.ui.southStyle}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
