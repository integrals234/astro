"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import HomeInstagramStrip from "@/components/home/HomeInstagramStrip";
import { Testimonials } from "@/components/home/TrustSignals";
import { homeStoryCopy } from "@/lib/home/home-story-copy";
import { welcomeContent, welcomeText } from "@/lib/home/welcome-content";

const READING_IMAGE_SRC = "/assets/new/banner.webp";

/**
 * Screen five: the personal reading, then the page's one closing action —
 * back to the form. A person, a photograph of the tradition, one sentence
 * on what a reading is and is not (the 消費者契約法 register), and nothing
 * else competing.
 */
export default function ReadingClose() {
  const { language } = useLanguage();
  const copy = homeStoryCopy[language];

  return (
    <>
      <section aria-labelledby="reading-title" className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] lg:order-2">
            <Image
              src={READING_IMAGE_SRC}
              alt={welcomeText(welcomeContent.bannerAlt, language)}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover transition-transform duration-500 ease-[var(--ease-out)] hover:scale-[1.02]"
            />
          </div>
          <div>
            <h2 id="reading-title" className="ma-title">
              {copy.readingTitle}
            </h2>
            <p className="mt-4 max-w-[32em] leading-[1.9] text-text">{copy.readingBody}</p>
            <p className="mt-3 text-xs leading-[1.8] text-text-muted">{copy.readingNote}</p>
            <Link href="/personal-appraisals" className="washi-btn-secondary mt-7 gap-2 px-6 text-sm">
              {welcomeText(welcomeContent.ctaSecondary, language)}
              <ArrowRight size={14} aria-hidden />
            </Link>
            <div className="mt-10 max-w-md">
              <HomeInstagramStrip copy={welcomeContent.instagram[language]} />
            </div>
          </div>
        </div>
        <Testimonials />
      </section>

      {/* One clear action to end on: back to the form. */}
      <section className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-16 md:px-8 md:py-24 lg:flex-row lg:items-end lg:justify-between">
          <p className="ma-title max-w-[16em]">{copy.closingTitle}</p>
          <a href="#start" className="washi-btn-primary shrink-0 gap-2 px-7 text-[length:var(--step-0)]">
            {copy.submit}
            <ArrowRight size={16} aria-hidden />
          </a>
        </div>
      </section>
    </>
  );
}
