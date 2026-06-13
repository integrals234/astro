"use client";

import { useEffect, useState } from "react";
import ShellPageHeader from "@/components/layout/ShellPageHeader";
import InquiryForm from "@/components/personal-appraisals/InquiryForm";
import PersonalAppraisalsLanguageSwitcher from "@/components/personal-appraisals/PersonalAppraisalsLanguageSwitcher";
import { getAppraisalContent } from "@/lib/personal-appraisals/i18n/content";
import type { AppraisalLanguage } from "@/lib/personal-appraisals/types";
import {
  Check,
  Clock,
  Heart,
  MessageSquare,
  MoonStar,
  ScrollText,
  Sparkles,
} from "lucide-react";

const LANG_STORAGE_KEY = "personal-appraisals-lang";

const offeringIcons = {
  written: ScrollText,
  live: MessageSquare,
  compatibility: Heart,
  muhurta: Clock,
} as const;

interface PersonalAppraisalsPageClientProps {
  defaultDialCode: string;
}

export default function PersonalAppraisalsPageClient({
  defaultDialCode,
}: PersonalAppraisalsPageClientProps) {
  const [lang, setLang] = useState<AppraisalLanguage>("en");
  const content = getAppraisalContent(lang);

  useEffect(() => {
    const saved = localStorage.getItem(LANG_STORAGE_KEY) as AppraisalLanguage | null;
    if (saved === "en" || saved === "ja") {
      setLang(saved);
    }
  }, []);

  const handleLangChange = (next: AppraisalLanguage) => {
    setLang(next);
    localStorage.setItem(LANG_STORAGE_KEY, next);
  };

  return (
    <div className="max-w-4xl space-y-12 pb-8">
      <div className="flex justify-end -mb-4">
        <PersonalAppraisalsLanguageSwitcher
          lang={lang}
          onChange={handleLangChange}
          ariaLabel={content.languageLabel}
        />
      </div>

      <ShellPageHeader
        icon={MoonStar}
        eyebrow={content.header.eyebrow}
        title={content.header.title}
        description={content.header.description}
      />

      <section className="rounded-3xl border border-shell-accent/20 bg-gradient-to-br from-shell-elevated/80 via-shell-elevated/50 to-shell-bg/60 p-7 md:p-9 backdrop-blur-sm">
        <div className="flex items-start gap-3 mb-5">
          <Sparkles size={18} className="text-shell-accent shrink-0 mt-1" />
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-shell-warm">
              {content.intro.heading}
            </h3>
            <p className="mt-3 text-sm md:text-base text-shell-muted leading-relaxed max-w-2xl">
              {content.intro.body}
            </p>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 mt-6">
          {content.intro.highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-shell-muted"
            >
              <Check
                size={15}
                className="text-shell-accent shrink-0 mt-0.5"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent font-semibold mb-2">
            {content.offerings.sectionLabel}
          </p>
          <h3 className="font-serif text-2xl text-shell-warm">
            {content.offerings.sectionTitle}
          </h3>
        </div>

        <div className="grid gap-5">
          {content.offerings.items.map((offering) => {
            const Icon =
              offeringIcons[offering.id as keyof typeof offeringIcons] ??
              ScrollText;

            return (
              <article
                key={offering.id}
                className="rounded-2xl border border-shell-border bg-shell-elevated/45 p-6 md:p-7"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon size={17} className="text-shell-accent" />
                  <h4 className="font-medium text-shell-warm">{offering.title}</h4>
                </div>
                <p className="text-sm text-shell-muted leading-relaxed">
                  {offering.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {offering.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-shell-muted/90"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-shell-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-shell-accent/90 italic">
                  {offering.note}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent font-semibold mb-2">
            {content.pricing.sectionLabel}
          </p>
          <h3 className="font-serif text-2xl text-shell-warm">
            {content.pricing.sectionTitle}
          </h3>
          <p className="mt-2 text-sm text-shell-muted max-w-2xl leading-relaxed">
            {content.pricing.intro}
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-shell-border bg-shell-elevated/35">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] text-left text-sm">
              <thead>
                <tr className="border-b border-shell-border bg-shell-bg/40">
                  <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-shell-muted">
                    {content.pricing.tableService}
                  </th>
                  <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-shell-muted">
                    {content.pricing.tableDuration}
                  </th>
                  <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-shell-muted text-right">
                    {content.pricing.tablePrice}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.pricing.plans.map((plan) => (
                  <tr
                    key={plan.id}
                    className={`border-b border-shell-border/70 last:border-0 ${
                      plan.featured ? "bg-shell-accent-soft/40" : ""
                    }`}
                  >
                    <td className="px-5 py-5 align-top">
                      <p className="font-medium text-shell-warm">{plan.name}</p>
                      <p className="mt-1.5 text-xs text-shell-muted leading-relaxed max-w-sm">
                        {plan.description}
                      </p>
                    </td>
                    <td className="px-5 py-5 align-top text-shell-muted whitespace-nowrap">
                      {plan.duration}
                    </td>
                    <td className="px-5 py-5 align-top text-right whitespace-nowrap">
                      <p
                        className={`font-serif text-lg ${
                          plan.featured ? "text-shell-accent" : "text-shell-warm"
                        }`}
                      >
                        {plan.price}
                      </p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-wider text-shell-muted">
                        {plan.priceNote}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs text-shell-muted leading-relaxed">
          {content.pricing.footnote}
        </p>
      </section>

      <section className="rounded-2xl border border-dashed border-shell-accent/25 bg-shell-accent-soft/20 p-6 md:p-7">
        <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent font-semibold mb-4">
          {content.process.sectionLabel}
        </p>
        <ol className="space-y-4">
          {content.process.steps.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-shell-accent/30 bg-shell-accent/10 text-xs font-semibold text-shell-accent">
                {index + 1}
              </span>
              <p className="text-sm text-shell-muted leading-relaxed pt-0.5">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <InquiryForm
        defaultDialCode={defaultDialCode}
        lang={lang}
        copy={content.form}
      />
    </div>
  );
}
