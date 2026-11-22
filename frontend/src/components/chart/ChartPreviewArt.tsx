'use client';

import type { ChartTranslations } from '@/lib/chart-i18n';
import { planetSymbols } from '@/lib/chart-format';

/**
 * The empty workspace, showing what the result will hold: a North Indian
 * chart being drawn, with a summary seal and a dasha card laid over it —
 * the same cards the reader gets once they enter a birth moment. The chart
 * lines draw in once; nothing loops. Decorative.
 */
const GLYPHS: { p: keyof typeof planetSymbols; x: number; y: number }[] = [
  { p: 'Sun', x: 50, y: 22 },
  { p: 'Moon', x: 26, y: 12 },
  { p: 'Mars', x: 76, y: 38 },
  { p: 'Jupiter', x: 50, y: 74 },
  { p: 'Venus', x: 24, y: 50 },
  { p: 'Saturn', x: 74, y: 88 },
];

export default function ChartPreviewArt({ t }: { t: ChartTranslations }) {
  return (
    <div aria-hidden className="preview-art relative h-[340px] w-full max-w-[520px]">
      {/* The chart */}
      <div className="preview-card absolute left-1/2 top-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 p-4">
        <svg viewBox="0 0 100 100" className="block h-auto w-full text-terracotta">
          <g className="preview-draw" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinejoin="round">
            <rect x="1" y="1" width="98" height="98" pathLength={1} />
            <path d="M1 1 L99 99" pathLength={1} />
            <path d="M99 1 L1 99" pathLength={1} />
            <path d="M50 1 L99 50 L50 99 L1 50 Z" pathLength={1} />
          </g>
          <g className="preview-glyphs" fill="currentColor" fontSize="7" textAnchor="middle" dominantBaseline="central">
            {GLYPHS.map((g) => (
              <text key={g.p} x={g.x} y={g.y} className="font-chart">
                {planetSymbols[g.p]}
              </text>
            ))}
            <text x="50" y="40" fontSize="5" className="font-body" fill="var(--color-text-muted)">
              {t.ui.asc}
            </text>
          </g>
        </svg>
      </div>

      {/* A summary seal */}
      <div className="preview-card preview-card-b absolute right-2 top-4 w-[150px] p-4 text-left">
        <div className="text-[11px] text-text-muted">{t.ui.summaryLagna}</div>
        <div className="mt-2 h-2.5 w-20 rounded-full bg-terracotta/50" />
        <div className="mt-4 text-[11px] text-text-muted">{t.ui.summaryMoonSign}</div>
        <div className="mt-2 h-2.5 w-16 rounded-full bg-moss/40" />
      </div>

      {/* A dasha card */}
      <div className="preview-card preview-card-c absolute bottom-3 left-2 w-[190px] p-4 text-left">
        <div className="text-[11px] text-text-muted">{t.ui.summaryCurrentDasha}</div>
        {[0.9, 0.62, 0.4].map((w, i) => (
          <div key={w} className="mt-2.5 flex items-center gap-2">
            <span className="font-chart text-[11px] text-terracotta">{planetSymbols[(['Venus', 'Sun', 'Moon'] as const)[i]]}</span>
            <span className="h-1.5 rounded-full bg-border" style={{ width: `${w * 100}%` }}>
              {i === 0 ? <span className="block h-full w-1/2 rounded-full bg-terracotta" /> : null}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
