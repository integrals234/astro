"use client";

import { Clock, Bookmark, Trash2 } from "lucide-react";
import type { SavedChartRecord } from "@/lib/chart-types";
import { getChartUi } from "@/lib/chart-i18n";
import { useChartLang } from "@/lib/use-chart-lang";

interface ChartLibraryPanelProps {
  recentCharts: SavedChartRecord[];
  savedCharts: SavedChartRecord[];
  activeChartId: string | null;
  onLoadChart: (chart: SavedChartRecord) => void;
  onToggleSave: (chart: SavedChartRecord) => void;
  onDeleteChart: (chartId: string) => void;
}

function ChartList({
  title,
  icon: Icon,
  charts,
  emptyLabel,
  activeChartId,
  onLoadChart,
  onToggleSave,
  onDeleteChart,
  showSaveToggle,
  saveLabel,
  savedLabel,
  deleteAria,
  lang,
}: {
  title: string;
  icon: typeof Clock;
  charts: SavedChartRecord[];
  emptyLabel: string;
  activeChartId: string | null;
  onLoadChart: (chart: SavedChartRecord) => void;
  onToggleSave: (chart: SavedChartRecord) => void;
  onDeleteChart: (chartId: string) => void;
  showSaveToggle: boolean;
  saveLabel: string;
  savedLabel: string;
  deleteAria: string;
  lang: string;
}) {
  return (
    <div className="washi-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <Icon size={14} className="text-terracotta" />
        <h3 className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">
          {title}
        </h3>
      </div>

      {charts.length === 0 ? (
        <p className="text-xs text-text-muted leading-relaxed">{emptyLabel}</p>
      ) : (
        <ul className="space-y-2">
          {charts.map((chart) => (
            <li
              key={chart.id}
              className={`group rounded-md border p-3 transition-colors ${
                activeChartId === chart.id
                  ? "border-terracotta bg-washi-elevated"
                  : "border-border bg-washi-elevated hover:border-terracotta/40"
              }`}
            >
              <button
                type="button"
                onClick={() => onLoadChart(chart)}
                className="w-full text-left"
              >
                <div className="font-body font-medium text-sm text-ink truncate">
                  {chart.name}
                </div>
                <div className="text-[11px] text-text-muted truncate mt-0.5">
                  {chart.locationName}
                </div>
                <div className="text-[10px] text-text-muted mt-1">
                  {new Date(chart.createdAt).toLocaleDateString(lang)}
                </div>
              </button>

              <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {showSaveToggle && (
                  <button
                    type="button"
                    onClick={() => onToggleSave(chart)}
                    className={`text-[10px] font-body font-semibold uppercase tracking-wider px-2 py-1 rounded ${
                      chart.isSaved
                        ? "bg-terracotta/10 text-terracotta"
                        : "bg-neutral-tag text-text-muted hover:bg-terracotta/10 hover:text-terracotta"
                    }`}
                  >
                    {chart.isSaved ? savedLabel : saveLabel}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => onDeleteChart(chart.id)}
                  className="p-1 rounded text-text-muted hover:text-terracotta hover:bg-terracotta/10"
                  aria-label={deleteAria}
                >
                  <Trash2 size={12} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ChartLibraryPanel({
  recentCharts,
  savedCharts,
  activeChartId,
  onLoadChart,
  onToggleSave,
  onDeleteChart,
}: ChartLibraryPanelProps) {
  const lang = useChartLang();
  const copy = getChartUi(lang).libraryPanel;

  return (
    <div className="space-y-4">
      <ChartList
        title={copy.recentTitle}
        icon={Clock}
        charts={recentCharts}
        emptyLabel={copy.recentEmpty}
        activeChartId={activeChartId}
        onLoadChart={onLoadChart}
        onToggleSave={onToggleSave}
        onDeleteChart={onDeleteChart}
        showSaveToggle
        saveLabel={copy.save}
        savedLabel={copy.saved}
        deleteAria={copy.deleteAria}
        lang={lang}
      />
      <ChartList
        title={copy.savedTitle}
        icon={Bookmark}
        charts={savedCharts}
        emptyLabel={copy.savedEmpty}
        activeChartId={activeChartId}
        onLoadChart={onLoadChart}
        onToggleSave={onToggleSave}
        onDeleteChart={onDeleteChart}
        showSaveToggle={false}
        saveLabel={copy.save}
        savedLabel={copy.saved}
        deleteAria={copy.deleteAria}
        lang={lang}
      />
    </div>
  );
}
