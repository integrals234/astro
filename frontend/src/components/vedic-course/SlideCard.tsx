"use client";

import { motion } from "framer-motion";
import { createElement } from "react";
import { FormattedText } from "@/lib/format-inline-text";
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
  return (
    <motion.article
      key={slide.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="washi-card p-8 md:p-10"
    >
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="washi-icon-chip h-14 w-14">
          {createElement(getCourseIcon(slide.icon), {
            size: 26,
            className: "text-moss",
          })}
        </div>
        <span className="font-body text-[10px] font-medium uppercase tracking-[0.24em] text-text-muted tabular-nums">
          {slideIndex + 1} / {totalSlides}
        </span>
      </div>

      <h3 className="font-header text-2xl md:text-3xl text-ink tracking-tight">
        <FormattedText text={t(slide.title, lang)} />
      </h3>
      <p className="mt-5 text-sm md:text-base text-text-muted leading-relaxed max-w-2xl">
        <FormattedText text={t(slide.body, lang)} />
      </p>

      {slide.bullets && slide.bullets.length > 0 && (
        <ul className="mt-5 space-y-2.5 max-w-2xl">
          {slide.bullets.map((bullet) => (
            <li
              key={bullet.en}
              className="flex gap-3 text-sm text-text leading-relaxed"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
              <FormattedText text={t(bullet, lang)} />
            </li>
          ))}
        </ul>
      )}

      {slide.highlight && (
        <div className="washi-callout mt-6 rounded-lg px-5 py-4">
          <p className="text-sm text-text leading-relaxed">
            <FormattedText text={t(slide.highlight, lang)} />
          </p>
        </div>
      )}
    </motion.article>
  );
}
