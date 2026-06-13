import ShellPageHeader from "@/components/layout/ShellPageHeader";
import { Sparkles, Moon, Sun, Star, Compass } from "lucide-react";

const roadmap = [
  { phase: "Now", item: "PDF report styling & branding", done: true },
  { phase: "Now", item: "Saved chart collections", done: true },
  { phase: "Next", item: "Shareable read-only chart links", done: false },
  { phase: "Next", item: "Premium dasha depth (4 levels)", done: false },
  { phase: "Later", item: "Compatibility synastry module", done: false },
  { phase: "Later", item: "Panchang & muhurta assistant", done: false },
];

const insights = [
  {
    icon: Sun,
    title: "Solar return preview",
    body: "Annual chart snapshot based on your current location with relocated ascendant.",
  },
  {
    icon: Moon,
    title: "Chandra bala index",
    body: "Moon strength score across paksha, house, and nakshatra dignity.",
  },
  {
    icon: Star,
    title: "Nakshatra journal",
    body: "Track personal notes tied to pada transitions and dasha handoffs.",
  },
];

export default function TestBetaPage() {
  return (
    <div className="max-w-6xl space-y-8">
      <ShellPageHeader
        icon={Sparkles}
        eyebrow="Beta Preview"
        title="Test Tab Beta"
        description="Early glimpses of upcoming experiences — polished enough to explore, still safe to break."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {insights.map((card) => {
          const Icon = card.icon;
          return (
            <article
              key={card.title}
              className="rounded-3xl border border-shell-border bg-shell-elevated/60 p-6 hover:border-shell-accent/25 transition-colors"
            >
              <div className="h-10 w-10 rounded-2xl bg-shell-accent-soft border border-shell-accent/20 flex items-center justify-center mb-4">
                <Icon size={18} className="text-shell-accent" />
              </div>
              <h3 className="font-medium text-shell-warm">{card.title}</h3>
              <p className="mt-2 text-sm text-shell-muted leading-relaxed">{card.body}</p>
              <button
                type="button"
                className="mt-5 text-[10px] font-bold uppercase tracking-widest text-shell-accent hover:text-shell-warm transition-colors"
              >
                Try preview →
              </button>
            </article>
          );
        })}
      </div>

      <section className="rounded-3xl border border-shell-border bg-shell-elevated/50 overflow-hidden">
        <div className="px-6 py-5 border-b border-shell-border flex items-center gap-2">
          <Compass size={16} className="text-shell-accent" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-shell-warm">
            Product roadmap
          </h3>
        </div>
        <ul className="divide-y divide-shell-border">
          {roadmap.map((row) => (
            <li
              key={row.item}
              className="flex items-center justify-between gap-4 px-6 py-4 text-sm"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="text-[10px] uppercase tracking-widest text-shell-muted w-14 shrink-0">
                  {row.phase}
                </span>
                <span className="text-shell-warm truncate">{row.item}</span>
              </div>
              <span
                className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full shrink-0 ${
                  row.done
                    ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                    : "bg-shell-bg text-shell-muted border border-shell-border"
                }`}
              >
                {row.done ? "Shipped" : "Planned"}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <blockquote className="rounded-3xl border border-shell-border bg-gradient-to-br from-shell-elevated/80 to-shell-bg p-8">
        <p className="font-serif text-xl text-shell-warm leading-relaxed">
          &ldquo;The chart is not a prediction — it is a quiet map of tendencies, waiting for consciousness to meet it.&rdquo;
        </p>
        <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-shell-muted">
          — Beta workspace note
        </footer>
      </blockquote>
    </div>
  );
}
