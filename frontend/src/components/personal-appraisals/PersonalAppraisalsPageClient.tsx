"use client";

import ShellPageHeader from "@/components/layout/ShellPageHeader";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import InstagramFollowBanner from "@/components/personal-appraisals/InstagramFollowBanner";
import InquiryForm from "@/components/personal-appraisals/InquiryForm";
import { getAppraisalContent } from "@/lib/personal-appraisals/i18n/content";
import {
  Check,
  Clock,
  Heart,
  MessageSquare,
  MoonStar,
  ScrollText,
  Sparkles,
} from "lucide-react";

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
  const { language: lang } = useLanguage();
  const content = getAppraisalContent(lang);

  return (
    <div className="max-w-4xl space-y-12 pb-8">
      <ScrollReveal y={18}>
        <InstagramFollowBanner copy={content.instagram} />
      </ScrollReveal>

      <ScrollReveal y={16} delay={0.05}>
        <ShellPageHeader
          icon={MoonStar}
          eyebrow={content.header.eyebrow}
          title={content.header.title}
          description={content.header.description}
        />
      </ScrollReveal>

      <ScrollReveal y={18} delay={0.04}>
      <section className="washi-card washi-card-interactive p-7 md:p-9">
        <div className="flex items-start gap-3 mb-5">
          <Sparkles size={18} className="text-terracotta shrink-0 mt-1" />
          <div>
            <h3 className="font-body text-xl md:text-2xl text-ink">
              {content.intro.heading}
            </h3>
            <p className="mt-3 text-sm md:text-base text-text-muted leading-relaxed max-w-2xl">
              {content.intro.body}
            </p>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 mt-6">
          {content.intro.highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-text"
            >
              <Check
                size={15}
                className="text-moss shrink-0 mt-0.5"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </section>
      </ScrollReveal>

      <section className="space-y-6">
        <ScrollReveal y={12}>
          <div>
            <p className="washi-eyebrow mb-2">
              {content.offerings.sectionLabel}
            </p>
            <h3 className="font-body text-2xl text-ink">
              {content.offerings.sectionTitle}
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid gap-5">
          {content.offerings.items.map((offering, index) => {
            const Icon =
              offeringIcons[offering.id as keyof typeof offeringIcons] ??
              ScrollText;

            return (
              <ScrollReveal key={offering.id} delay={0.05 * index} y={18}>
                <article className="washi-card washi-card-interactive group p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="washi-icon-chip h-9 w-9 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-rotate-3">
                      <Icon size={17} className="text-moss" />
                    </span>
                    <h4 className="font-body font-medium text-ink">{offering.title}</h4>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {offering.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {offering.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-muted"
                      >
                        <span className="mt-2 h-1 w-1 rounded-full bg-moss shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-text-muted italic">
                    {offering.note}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <ScrollReveal y={16} as="section" className="space-y-6">
        <div>
          <p className="washi-eyebrow mb-2">
            {content.pricing.sectionLabel}
          </p>
          <h3 className="font-body text-2xl text-ink">
            {content.pricing.sectionTitle}
          </h3>
          <p className="mt-2 text-sm text-text-muted max-w-2xl leading-relaxed">
            {content.pricing.intro}
          </p>
        </div>

        <div className="washi-card overflow-hidden transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] text-left text-sm">
              <thead>
                <tr className="washi-table-header border-b border-border">
                  <th className="px-5 py-4">
                    {content.pricing.tableService}
                  </th>
                  <th className="px-5 py-4">
                    {content.pricing.tableDuration}
                  </th>
                  <th className="px-5 py-4 text-right">
                    {content.pricing.tablePrice}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.pricing.plans.map((plan) => (
                  <tr
                    key={plan.id}
                    className={`border-b border-border last:border-0 transition-colors duration-200 hover:bg-neutral-tag/30 ${
                      plan.featured ? "bg-neutral-tag/40" : ""
                    }`}
                  >
                    <td className="px-5 py-5 align-top">
                      <p className="font-body font-medium text-ink">{plan.name}</p>
                      <p className="mt-1.5 text-xs text-text-muted leading-relaxed max-w-sm">
                        {plan.description}
                      </p>
                    </td>
                    <td className="px-5 py-5 align-top text-text-muted whitespace-nowrap">
                      {plan.duration}
                    </td>
                    <td className="px-5 py-5 align-top text-right whitespace-nowrap">
                      <p
                        className={`font-chart text-lg ${
                          plan.featured
                            ? "text-terracotta font-semibold"
                            : "text-ink"
                        }`}
                      >
                        {plan.price}
                      </p>
                      <p className="mt-0.5 text-[11px] uppercase tracking-wider text-text-muted">
                        {plan.priceNote}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs text-text-muted leading-relaxed">
          {content.pricing.footnote}
        </p>
      </ScrollReveal>

      <ScrollReveal y={14}>
        <section className="washi-card washi-card-interactive p-6 md:p-7">
          <p className="washi-eyebrow mb-4">
            {content.process.sectionLabel}
          </p>
          <ol className="space-y-4">
            {content.process.steps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-neutral-tag text-xs font-body font-semibold text-text shadow-[var(--shadow-elevated)] transition-transform duration-300 hover:scale-110 hover:border-terracotta/40">
                  {index + 1}
                </span>
                <p className="text-sm text-text-muted leading-relaxed pt-0.5">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </ScrollReveal>

      <ScrollReveal y={16}>
        <InquiryForm
          defaultDialCode={defaultDialCode}
          lang={lang}
          copy={content.form}
        />
      </ScrollReveal>
    </div>
  );
}
