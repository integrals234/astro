import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { PageGuide } from "@/lib/tools/content/types";
import type { AppLanguage } from "@/lib/i18n/language";
import { localizedHref } from "@/lib/i18n/routing";

const FAQ_LABEL: Record<AppLanguage, string> = {
  ja: "よくある質問",
  en: "Questions",
  hi: "प्रश्न",
  ko: "자주 묻는 질문",
};

/**
 * Explanatory guide + FAQ under a page's own UI (home, /chart). Server
 * component; the same disclosure pattern as the tool pages' guides: every
 * section is in the HTML, folded on phones and open on desktop. The page
 * emits the matching FAQPage JSON-LD.
 */
export default function LongFormGuide({ guide, language }: { guide: PageGuide; language: AppLanguage }) {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12 md:px-8 md:py-16">
      <article className="washi-measure border-t border-border lg:border-0">
        {guide.sections.map((section, index) => (
          <details
            key={section.heading.en}
            open={index === 0}
            className="disclose disclose-desktop-open border-b border-border lg:mb-12 lg:border-0"
          >
            <summary className="py-2 lg:mb-4 lg:py-0">
              <h2 className="font-header text-[length:var(--step-1)] text-ink lg:text-[length:var(--step-2)]">
                {section.heading[language]}
              </h2>
              <ChevronDown size={18} aria-hidden className="disclose-chevron text-text-muted" />
            </summary>
            <div className="pb-6 lg:pb-0">
              {section.body.map((paragraph) => (
                <p key={paragraph.en} className="mb-4 font-body leading-relaxed text-text">
                  {paragraph[language]}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-5 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet.en} className="flex items-start gap-2.5 font-body text-sm text-text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" />
                      {bullet[language]}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.links ? (
                <ul className="mt-5 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={localizedHref(language, link.href)}
                        className="inline-flex items-center gap-1.5 font-body text-sm text-terracotta underline-offset-4 hover:underline"
                      >
                        {link.label[language]}
                        <ArrowRight size={14} aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </details>
        ))}
      </article>

      {guide.faqs.length > 0 ? (
        <section className="washi-measure mt-12 border-t border-border" aria-label={FAQ_LABEL[language]}>
          {guide.faqs.map((faq) => (
            <details key={faq.question.en} className="disclose border-b border-border">
              <summary className="py-2">
                <h2 className="font-header text-[length:var(--step-1)] text-ink">{faq.question[language]}</h2>
                <ChevronDown size={18} aria-hidden className="disclose-chevron text-text-muted" />
              </summary>
              <p className="pb-5 font-body leading-[1.9] text-text">{faq.answer[language]}</p>
            </details>
          ))}
        </section>
      ) : null}
    </section>
  );
}
