import ShellPageHeader from "@/components/layout/ShellPageHeader";
import { Crown, Check } from "lucide-react";
import Link from "next/link";

const perks = [
  "Unlimited saved charts",
  "Deep dasha trees (4 levels)",
  "Priority ephemeris compute",
  "Custom PDF branding",
  "Shareable chart links",
];

export default function PremiumPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <ShellPageHeader
        icon={Crown}
        eyebrow="Membership"
        title="Premium"
        description="Advanced astrology tools and subscriptions — coming soon to your workspace."
      />

      <div className="rounded-3xl border border-shell-accent/25 bg-gradient-to-br from-shell-elevated to-shell-bg p-8 md:p-10">
        <div className="flex items-center gap-2 mb-6">
          <Crown size={20} className="text-shell-accent" />
          <span className="text-[10px] uppercase tracking-[0.28em] text-shell-accent font-bold">
            Early access waitlist
          </span>
        </div>
        <p className="font-serif text-2xl text-shell-warm mb-6">
          Unlock the full professional suite
        </p>
        <ul className="space-y-3 mb-8">
          {perks.map((perk) => (
            <li key={perk} className="flex items-center gap-3 text-sm text-shell-muted">
              <Check size={16} className="text-shell-accent shrink-0" />
              {perk}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded-xl bg-shell-accent/25 border border-shell-accent/40 px-6 py-3 text-xs font-bold uppercase tracking-wider text-shell-warm hover:bg-shell-accent/35 transition-colors"
        >
          Join waitlist
        </button>
      </div>

      <p className="text-sm text-shell-muted">
        <Link href="/chart" className="text-shell-accent hover:text-shell-warm transition-colors">
          ← Back to dashboard
        </Link>
      </p>
    </div>
  );
}
