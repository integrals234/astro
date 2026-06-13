import ShellPageHeader from "@/components/layout/ShellPageHeader";
import { FlaskConical, Orbit, Layers, Zap, Activity } from "lucide-react";

const experiments = [
  {
    title: "Multi-Dasha Overlay",
    status: "Active",
    detail: "Compare Vimshottari with Yogini dasha timelines side by side.",
  },
  {
    title: "House Strength Index",
    status: "Preview",
    detail: "Weighted bhava scores based on lord placement and aspects.",
  },
  {
    title: "Transit Heatmap",
    status: "Lab",
    detail: "Visual density map of gochar pressure on natal houses.",
  },
  {
    title: "Divisional Stack",
    status: "Queued",
    detail: "Batch render D1 through D60 with synchronized ascendant logic.",
  },
];

const metrics = [
  { label: "Render latency", value: "142ms", trend: "↓ 12%" },
  { label: "Ephemeris cache", value: "98.4%", trend: "↑ stable" },
  { label: "Alpha testers", value: "3", trend: "internal" },
  { label: "Build", value: "α-0.4.2", trend: "Jun 2026" },
];

export default function TestAlphaPage() {
  return (
    <div className="max-w-6xl space-y-8">
      <ShellPageHeader
        icon={FlaskConical}
        eyebrow="Alpha Lab"
        title="Test Tab Alpha"
        description="Sandbox for experimental chart modules, performance probes, and internal tooling. Nothing here affects production charts yet."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-shell-border bg-shell-elevated/70 p-5"
          >
            <p className="text-[10px] uppercase tracking-widest text-shell-muted">
              {metric.label}
            </p>
            <p className="mt-2 text-2xl font-serif text-shell-warm">{metric.value}</p>
            <p className="mt-1 text-xs text-shell-accent">{metric.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-shell-border bg-shell-elevated/50 p-6">
          <div className="flex items-center gap-2 mb-5">
            <Layers size={16} className="text-shell-accent" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-shell-warm">
              Active experiments
            </h3>
          </div>
          <ul className="space-y-4">
            {experiments.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-shell-border/80 bg-shell-bg/40 p-4"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="font-medium text-shell-warm">{item.title}</span>
                  <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-shell-accent-soft text-shell-accent border border-shell-accent/20">
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-shell-muted leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-shell-border bg-shell-elevated/50 p-6">
          <div className="flex items-center gap-2 mb-5">
            <Activity size={16} className="text-shell-accent" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-shell-warm">
              Live activity log
            </h3>
          </div>
          <div className="space-y-3 font-mono text-xs text-shell-muted">
            <p className="rounded-xl bg-shell-bg/50 border border-shell-border px-4 py-3">
              <span className="text-shell-accent">05:01:12</span> — Chalit cusp solver warmed cache (Gwalior)
            </p>
            <p className="rounded-xl bg-shell-bg/50 border border-shell-border px-4 py-3">
              <span className="text-shell-accent">04:58:44</span> — D9 ascendant remap passed regression suite
            </p>
            <p className="rounded-xl bg-shell-bg/50 border border-shell-border px-4 py-3">
              <span className="text-shell-accent">04:52:09</span> — Gochar overlay batch queued (n=12)
            </p>
            <p className="rounded-xl bg-shell-bg/50 border border-shell-border px-4 py-3">
              <span className="text-shell-accent">04:47:33</span> — Swiss ephemeris path verified on Render node
            </p>
          </div>
        </section>
      </div>

      <section className="rounded-3xl border border-dashed border-shell-accent/30 bg-shell-accent-soft/30 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-start gap-3">
          <Orbit className="text-shell-accent shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-medium text-shell-warm">Orbital sandbox</h3>
            <p className="text-sm text-shell-muted mt-1 max-w-xl">
              Mock ephemeris playground for testing rare combinations — Rahu-Ketu axes, vargottama checks, and eclipse proximity flags.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-shell-accent/20 border border-shell-accent/30 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-shell-accent hover:bg-shell-accent/30 transition-colors"
        >
          <Zap size={14} />
          Run mock batch
        </button>
      </section>
    </div>
  );
}
