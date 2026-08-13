"use client";

import ShellPageHeader from "@/components/layout/ShellPageHeader";
import { Crown, Check } from "lucide-react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getSharedCopy } from "@/lib/i18n/shared";

export default function PremiumPageClient() {
  const { language } = useLanguage();
  const copy = getSharedCopy(language).premium;

  return (
    <div className="max-w-4xl space-y-8">
      <ShellPageHeader
        icon={Crown}
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <div className="washi-card p-8 md:p-10">
        <div className="flex items-center gap-2 mb-6">
          <Crown size={20} className="text-terracotta" />
          <span className="text-[10px] font-body uppercase tracking-[0.12em] text-terracotta font-medium">
            {copy.waitlist}
          </span>
        </div>
        <p className="font-header text-2xl text-ink mb-6">
          {copy.heading}
        </p>
        <ul className="space-y-3 mb-8">
          {copy.perks.map((perk) => (
            <li key={perk} className="flex items-center gap-3 text-sm text-text">
              <Check size={16} className="text-moss shrink-0" />
              {perk}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="washi-btn-primary px-6 py-3 text-xs uppercase tracking-wider"
        >
          {copy.join}
        </button>
      </div>

      <p className="text-sm text-text-muted">
        <Link href="/chart" className="text-terracotta hover:underline transition-colors">
          {copy.back}
        </Link>
      </p>
    </div>
  );
}
