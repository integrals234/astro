"use client";

import { motion } from "framer-motion";
import type { CourseLanguage } from "@/lib/vedic-course/types";
import { uiString } from "@/lib/vedic-course/i18n/ui";

interface CourseProgressBarProps {
  percent: number;
  lang: CourseLanguage;
}

export default function CourseProgressBar({ percent, lang }: CourseProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between font-body text-[10px] font-medium uppercase tracking-[0.24em]">
        <span className="text-text-muted">{uiString("progressLabel", lang)}</span>
        <span className="text-terracotta tabular-nums">{percent}%</span>
      </div>
      <div
        className="relative h-1 overflow-hidden rounded-full bg-neutral-tag"
        role="progressbar"
        aria-label={uiString("progressLabel", lang)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-terracotta"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
