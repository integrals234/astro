"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bookmark, Clock, MapPin, Trash2, ArrowUpRight } from "lucide-react";
import type { SavedChartRecord } from "@/lib/chart-types";
import { getChartUi } from "@/lib/chart-i18n";
import { useChartLang } from "@/lib/use-chart-lang";

interface ChartCollectionPageProps {
  mode: "saved" | "recent";
}

export default function ChartCollectionPage({ mode }: ChartCollectionPageProps) {
  const lang = useChartLang();
  const copy = getChartUi(lang).collection;
  const [collection, setCollection] = useState<{
    mode: ChartCollectionPageProps["mode"] | null;
    charts: SavedChartRecord[];
  }>({ mode: null, charts: [] });
  const charts = collection.mode === mode ? collection.charts : [];
  const loading = collection.mode !== mode;

  useEffect(() => {
    const controller = new AbortController();
    const query = mode === "saved" ? "saved" : "recent";

    void fetch(`/api/charts?type=${query}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load charts");
        return response.json() as Promise<SavedChartRecord[]>;
      })
      .then((data) => setCollection({ mode, charts: data }))
      .catch((error) => {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          console.error(error);
          setCollection({ mode, charts: [] });
        }
      });

    return () => controller.abort();
  }, [mode]);

  const handleDelete = async (chartId: string) => {
    if (!confirm(copy.deleteConfirm)) return;
    await fetch(`/api/charts/${chartId}`, { method: "DELETE" });
    const query = mode === "saved" ? "saved" : "recent";
    const response = await fetch(`/api/charts?type=${query}`);
    if (!response.ok) throw new Error("Failed to reload charts");
    setCollection({ mode, charts: await response.json() });
  };

  const Icon = mode === "saved" ? Bookmark : Clock;
  const title = mode === "saved" ? copy.savedTitle : copy.recentTitle;
  const subtitle = mode === "saved" ? copy.savedSubtitle : copy.recentSubtitle;

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 border border-border px-3 py-1 text-[10px] font-body uppercase tracking-[0.12em] text-terracotta mb-4">
          <Icon size={12} className="text-terracotta" />
          {copy.libraryEyebrow}
        </div>
        <h1 className="font-header text-3xl text-ink tracking-tight">{title}</h1>
        <p className="mt-2 text-sm text-text-muted max-w-2xl leading-relaxed">{subtitle}</p>
      </div>

      {loading ? (
        <div className="washi-card p-10 text-center text-text-muted text-sm">
          {copy.loading}
        </div>
      ) : charts.length === 0 ? (
        <div className="space-y-6">
          <div className="rounded-lg border border-dashed border-border bg-washi-elevated p-8 text-center">
            <p className="text-text-muted text-sm mb-4">
              {mode === "saved" ? copy.emptySaved : copy.emptyRecent}
            </p>
            <Link
              href="/chart"
              className="inline-flex items-center gap-2 text-sm font-body font-medium text-terracotta hover:text-ink transition-colors"
            >
              {copy.goToGenerator}
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div>
            <p className="text-[10px] font-body uppercase tracking-[0.12em] text-text-muted mb-3">
              {copy.previewLayout}
            </p>
            <ul className="grid gap-4 md:grid-cols-2 opacity-60">
              {[
                { name: "Vaibhav Shukla", place: copy.gwaliorIndia, date: copy.sampleEntry },
                { name: copy.exampleChart, place: copy.delhiIndia, date: copy.sampleEntry },
              ].map((sample) => (
                <li
                  key={sample.name}
                  className="washi-card p-5"
                >
                  <h3 className="font-body font-medium text-ink">{sample.name}</h3>
                  <p className="flex items-center gap-1.5 text-xs text-text-muted mt-1">
                    <MapPin size={12} className="text-terracotta" />
                    {sample.place}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mt-3">
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
              className="washi-card group p-5 hover:border-terracotta/40 transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-body font-medium text-ink truncate">{chart.name}</h3>
                  <p className="flex items-center gap-1.5 text-xs text-text-muted mt-1 truncate">
                    <MapPin size={12} className="shrink-0 text-terracotta" />
                    {chart.locationName}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mt-3">
                    {new Date(chart.createdAt).toLocaleString(lang)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(chart.id)}
                  className="opacity-0 group-hover:opacity-100 p-2 rounded-md text-text-muted hover:text-terracotta hover:bg-terracotta/10 transition-all"
                  aria-label={copy.deleteAria}
                >
                  <Trash2 size={14} />
                </button>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <Link
                  href={`/chart?chart=${chart.id}`}
                  className="washi-btn-secondary inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider transition-colors hover:bg-terracotta/10"
                >
                  {copy.openChart}
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
