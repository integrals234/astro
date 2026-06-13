"use client";

import { motion } from "framer-motion";
import type { CourseLanguage, CourseSlide } from "@/lib/vedic-course/types";
import { getCourseIcon } from "@/lib/vedic-course/icons";
import { t } from "@/lib/vedic-course/utils";

interface SlideCardProps {
  slide: CourseSlide;
  lang: CourseLanguage;
  slideIndex: number;
  totalSlides: number;
}

export default function SlideCard({ slide, lang, slideIndex, totalSlides }: SlideCardProps) {
  const Icon = getCourseIcon(slide.icon);

  return (
    <motion.article
      key={slide.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl border border-shell-border bg-gradient-to-br from-shell-elevated/90 to-shell-bg/60 p-8 md:p-10"
    >
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-shell-accent/25 bg-shell-accent-soft shadow-[0_0_30px_rgba(212,165,116,0.12)]">
          <Icon size={26} className="text-shell-accent" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-shell-muted tabular-nums">
          {slideIndex + 1} / {totalSlides}
        </span>
      </div>

      <h3 className="font-serif text-2xl md:text-3xl text-shell-warm tracking-tight">
        {t(slide.title, lang)}
      </h3>
      <p className="mt-5 text-sm md:text-base text-shell-muted leading-relaxed max-w-2xl">
        {t(slide.body, lang)}
      </p>

      {slide.bullets && slide.bullets.length > 0 && (
        <ul className="mt-5 space-y-2.5 max-w-2xl">
          {slide.bullets.map((bullet) => (
            <li
              key={bullet.en}
              className="flex gap-3 text-sm text-shell-muted leading-relaxed"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-shell-accent" />
              {t(bullet, lang)}
            </li>
          ))}
        </ul>
      )}

      {slide.highlight && (
        <div className="mt-6 rounded-2xl border border-shell-accent/20 bg-shell-accent-soft/60 px-5 py-4">
          <p className="text-sm text-shell-warm/90 leading-relaxed">
            {t(slide.highlight, lang)}
          </p>
        </div>
      )}
    </motion.article>
  );
}
