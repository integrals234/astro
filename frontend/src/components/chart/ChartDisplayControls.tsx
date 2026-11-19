'use client';

import type { ChartTranslations } from '@/lib/chart-i18n';

/**
 * Text/Symbols and North/South — the one control strip for every chart
 * surface (PRIORITY.md 2.3, finished in the design upgrade).
 *
 * It used to be written out three times (the /chart workspace, the homepage
 * report, and ChartFigure's `controls="full"`), each with its own 10px
 * uppercase buttons. One component now; callers decide where it sits — the
 * workspace pins it above the charts on desktop so a flip never needs a
 * scroll back up.
 */
export default function ChartDisplayControls({
  t,
  useSymbols,
  onUseSymbolsChange,
  chartStyle,
  onChartStyleChange,
  className = '',
}: {
  t: ChartTranslations;
  useSymbols: boolean;
  onUseSymbolsChange: (value: boolean) => void;
  chartStyle: 'North' | 'South';
  onChartStyleChange: (style: 'North' | 'South') => void;
  className?: string;
}) {
  const segment = (selected: boolean) =>
    `min-h-[36px] rounded-full px-4 text-xs font-body transition-colors duration-150 ${
      selected ? 'washi-segment-selected' : 'washi-segment-unselected'
    }`;

  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      <div className="washi-segmented rounded-full" role="group" aria-label={`${t.ui.textToggle} / ${t.ui.symbolToggle}`}>
        <button type="button" aria-pressed={!useSymbols} onClick={() => onUseSymbolsChange(false)} className={segment(!useSymbols)}>
          {t.ui.textToggle}
        </button>
        <button type="button" aria-pressed={useSymbols} onClick={() => onUseSymbolsChange(true)} className={segment(useSymbols)}>
          {t.ui.symbolToggle}
        </button>
      </div>
      <div className="washi-segmented rounded-full" role="group" aria-label={`${t.ui.northStyle} / ${t.ui.southStyle}`}>
        <button type="button" aria-pressed={chartStyle === 'North'} onClick={() => onChartStyleChange('North')} className={segment(chartStyle === 'North')}>
          {t.ui.northStyle}
        </button>
        <button type="button" aria-pressed={chartStyle === 'South'} onClick={() => onChartStyleChange('South')} className={segment(chartStyle === 'South')}>
          {t.ui.southStyle}
        </button>
      </div>
    </div>
  );
}
