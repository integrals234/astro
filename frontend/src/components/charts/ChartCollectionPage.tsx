"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Bookmark, Clock, MapPin, Trash2, ArrowUpRight } from "lucide-react";
import type { SavedChartRecord } from "@/lib/chart-types";

interface ChartCollectionPageProps {
  mode: "saved" | "recent";
}

export default function ChartCollectionPage({ mode }: ChartCollectionPageProps) {
  const [charts, setCharts] = useState<SavedChartRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCharts = useCallback(async () => {
    setLoading(true);
    try {
      const query = mode === "saved" ? "saved" : "recent";
      const response = await fetch(`/api/charts?type=${query}`);
      if (!response.ok) throw new Error("Failed to load charts");
      const data: SavedChartRecord[] = await response.json();
      setCharts(mode === "saved" ? data : data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [mode]);

  useEffect(() => {
    loadCharts();
  }, [loadCharts]);

  const handleDelete = async (chartId: string) => {
    if (!confirm("Delete this chart?")) return;
    await fetch(`/api/charts/${chartId}`, { method: "DELETE" });
    await loadCharts();
  };

  const Icon = mode === "saved" ? Bookmark : Clock;
  const title = mode === "saved" ? "Saved Charts" : "Recent Charts";
  const subtitle =
    mode === "saved"
      ? "Charts you have explicitly saved to your library."
      : "Your last five generated charts, kept for quick access.";

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-shell-border bg-shell-elevated/50 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-shell-muted mb-4">
          <Icon size={12} className="text-shell-accent" />
          Library
        </div>
        <h2 className="font-serif text-3xl text-shell-warm tracking-tight">{title}</h2>
        <p className="mt-2 text-sm text-shell-muted max-w-2xl leading-relaxed">{subtitle}</p>
      </div>

      {loading ? (
        <div className="rounded-3xl border border-shell-border bg-shell-elevated/40 p-10 text-center text-shell-muted text-sm">
          Loading charts…
        </div>
      ) : charts.length === 0 ? (
        <div className="space-y-6">
          <div className="rounded-3xl border border-dashed border-shell-border bg-shell-elevated/20 p-8 text-center">
            <p className="text-shell-muted text-sm mb-4">
              {mode === "saved"
                ? "No saved charts yet. Generate a chart and tap Save Chart."
                : "No recent charts yet. Generate your first chart on the dashboard."}
            </p>
            <Link
              href="/chart"
              className="inline-flex items-center gap-2 text-sm font-medium text-shell-accent hover:text-shell-warm transition-colors"
            >
              Go to Dashboard
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-shell-muted mb-3">
              Preview layout
            </p>
            <ul className="grid gap-4 md:grid-cols-2 opacity-60">
              {[
                { name: "Vaibhav Shukla", place: "Gwalior, India", date: "Sample entry" },
                { name: "Example Chart", place: "Delhi, India", date: "Sample entry" },
              ].map((sample) => (
                <li
                  key={sample.name}
                  className="rounded-3xl border border-shell-border bg-shell-elevated/30 p-5"
                >
                  <h3 className="font-medium text-shell-warm">{sample.name}</h3>
                  <p className="flex items-center gap-1.5 text-xs text-shell-muted mt-1">
                    <MapPin size={12} className="text-shell-accent/70" />
                    {sample.place}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-shell-muted/70 mt-3">
                    {sample.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {charts.map((chart) => (
            <li
              key={chart.id}
              className="group rounded-3xl border border-shell-border bg-shell-elevated/50 p-5 hover:border-shell-accent/25 hover:bg-shell-elevated/80 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-medium text-shell-warm truncate">{chart.name}</h3>
                  <p className="flex items-center gap-1.5 text-xs text-shell-muted mt-1 truncate">
                    <MapPin size={12} className="shrink-0 text-shell-accent/70" />
                    {chart.locationName}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-shell-muted/70 mt-3">
                    {new Date(chart.createdAt).toLocaleString()}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(chart.id)}
                  className="opacity-0 group-hover:opacity-100 p-2 rounded-xl text-shell-muted hover:text-red-300 hover:bg-red-500/10 transition-all"
                  aria-label="Delete chart"
                >
                  <Trash2 size={14} />
                </button>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <Link
                  href={`/chart?chart=${chart.id}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-shell-accent-soft border border-shell-accent/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-shell-accent hover:text-shell-warm hover:border-shell-accent/40 transition-colors"
                >
                  Open chart
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
