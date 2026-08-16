"use client";

import Link from "@/components/i18n/LocaleLink";
import ShellPageHeader from "@/components/layout/ShellPageHeader";
import Reveal from "@/components/motion/Reveal";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import InstagramFollowBanner from "@/components/personal-appraisals/InstagramFollowBanner";
import InquiryForm from "@/components/personal-appraisals/InquiryForm";
import { getAppraisalContent } from "@/lib/personal-appraisals/i18n/content";
import { bookingCopy } from "@/lib/booking/i18n";
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
  const bookCopy = bookingCopy[lang];

  return (
    <div className="max-w-4xl space-y-12 pb-8">
      <Reveal>
        <InstagramFollowBanner copy={content.instagram} />
      </Reveal>

      <Reveal>
        <ShellPageHeader
          icon={MoonStar}
          eyebrow={content.header.eyebrow}
          title={content.header.title}
          description={content.header.description}
        />
      </Reveal>

      <Reveal>
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
      </Reveal>

      <section className="space-y-6">
        <Reveal>
          <div>
            <p className="washi-eyebrow mb-2">
              {content.offerings.sectionLabel}
            </p>
            <h3 className="font-body text-2xl text-ink">
              {content.offerings.sectionTitle}
            </h3>
          </div>
        </Reveal>

        <div className="grid gap-5">
          {content.offerings.items.map((offering) => {
            const Icon =
              offeringIcons[offering.id as keyof typeof offeringIcons] ??
              ScrollText;

            return (
              <Reveal key={offering.id}>
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
              </Reveal>
            );
          })}
        </div>
      </section>

      <Reveal as="section" className="space-y-6">
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
                      {/*
                        Only the live consultation goes straight to a calendar.
                        The other three all start with a conversation first —
                        compatibility needs two people's birth data,
                        rectification is investigative, and the written
                        appraisal has no live session to schedule at all — so
                        they link to the inquiry form instead of /book/*.
                      */}
                      {plan.id === "consultation" ? (
                        <Link
                          href="/book/consultation"
                          className="mt-2 inline-block text-xs text-terracotta underline underline-offset-4 hover:opacity-80"
                        >
                          {bookCopy.bookCta}
                        </Link>
                      ) : (
                        <Link
                          href="#inquiry"
                          className="mt-2 inline-block text-xs text-terracotta underline underline-offset-4 hover:opacity-80"
                        >
                          {bookCopy.requestCta}
                        </Link>
                      )}
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
      </Reveal>

      <Reveal>
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
      </Reveal>

      <Reveal>
        <InquiryForm
          defaultDialCode={defaultDialCode}
          lang={lang}
          copy={content.form}
        />
      </Reveal>
    </div>
  );
}
