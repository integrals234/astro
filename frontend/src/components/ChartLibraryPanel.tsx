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
    <div className="bg-shell-elevated/70 rounded-2xl border border-shell-border shadow-[0_2px_20px_rgba(0,0,0,0.04)] p-5">
      <div className="flex items-center gap-2 mb-4">
        <Icon size={14} className="text-shell-accent" />
        <h3 className="text-[10px] font-bold text-shell-muted uppercase tracking-widest">
          {title}
        </h3>
      </div>

      {charts.length === 0 ? (
        <p className="text-xs text-shell-muted leading-relaxed">{emptyLabel}</p>
      ) : (
        <ul className="space-y-2">
          {charts.map((chart) => (
            <li
              key={chart.id}
              className={`group rounded-xl border p-3 transition-colors ${
                activeChartId === chart.id
                  ? "border-shell-accent/40 bg-shell-accent-soft"
                  : "border-shell-border hover:border-shell-accent/30 hover:bg-shell-bg/60"
              }`}
            >
              <button
                type="button"
                onClick={() => onLoadChart(chart)}
                className="w-full text-left"
              >
                <div className="font-medium text-sm text-shell-warm truncate">
                  {chart.name}
                </div>
                <div className="text-[11px] text-shell-muted truncate mt-0.5">
                  {chart.locationName}
                </div>
                <div className="text-[10px] text-shell-muted/70 mt-1">
                  {new Date(chart.createdAt).toLocaleDateString(lang)}
                </div>
              </button>

              <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {showSaveToggle && (
                  <button
                    type="button"
                    onClick={() => onToggleSave(chart)}
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg ${
                      chart.isSaved
                        ? "bg-shell-accent-soft text-shell-accent"
                        : "bg-shell-bg text-shell-muted hover:bg-shell-accent-soft hover:text-shell-accent"
                    }`}
                  >
                    {chart.isSaved ? savedLabel : saveLabel}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => onDeleteChart(chart.id)}
                  className="p-1 rounded-lg text-shell-muted hover:text-red-700 dark:hover:text-red-300 hover:bg-red-500/10"
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
