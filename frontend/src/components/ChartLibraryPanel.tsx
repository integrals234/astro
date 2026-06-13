"use client";

import { Clock, Bookmark, Trash2 } from "lucide-react";
import type { SavedChartRecord } from "@/lib/chart-types";

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
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] p-5">
      <div className="flex items-center gap-2 mb-4">
        <Icon size={14} className="text-indigo-500" />
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {title}
        </h3>
      </div>

      {charts.length === 0 ? (
        <p className="text-xs text-gray-400 leading-relaxed">{emptyLabel}</p>
      ) : (
        <ul className="space-y-2">
          {charts.map((chart) => (
            <li
              key={chart.id}
              className={`group rounded-xl border p-3 transition-colors ${
                activeChartId === chart.id
                  ? "border-indigo-200 bg-indigo-50/60"
                  : "border-gray-100 hover:border-indigo-100 hover:bg-gray-50/80"
              }`}
            >
              <button
                type="button"
                onClick={() => onLoadChart(chart)}
                className="w-full text-left"
              >
                <div className="font-medium text-sm text-indigo-950 truncate">
                  {chart.name}
                </div>
                <div className="text-[11px] text-gray-400 truncate mt-0.5">
                  {chart.locationName}
                </div>
                <div className="text-[10px] text-gray-300 mt-1">
                  {new Date(chart.createdAt).toLocaleDateString()}
                </div>
              </button>

              <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {showSaveToggle && (
                  <button
                    type="button"
                    onClick={() => onToggleSave(chart)}
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg ${
                      chart.isSaved
                        ? "bg-indigo-100 text-indigo-800"
                        : "bg-gray-100 text-gray-500 hover:bg-indigo-50 hover:text-indigo-700"
                    }`}
                  >
                    {chart.isSaved ? "Saved" : "Save"}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => onDeleteChart(chart.id)}
                  className="p-1 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50"
                  aria-label="Delete chart"
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
  return (
    <div className="space-y-4">
      <ChartList
        title="Recent Charts"
        icon={Clock}
        charts={recentCharts}
        emptyLabel="Generate a chart to see your last 5 here."
        activeChartId={activeChartId}
        onLoadChart={onLoadChart}
        onToggleSave={onToggleSave}
        onDeleteChart={onDeleteChart}
        showSaveToggle
      />
      <ChartList
        title="Saved Charts"
        icon={Bookmark}
        charts={savedCharts}
        emptyLabel="Save a chart to keep it in your library."
        activeChartId={activeChartId}
        onLoadChart={onLoadChart}
        onToggleSave={onToggleSave}
        onDeleteChart={onDeleteChart}
        showSaveToggle={false}
      />
    </div>
  );
}
