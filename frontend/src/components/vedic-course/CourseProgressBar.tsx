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
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.24em]">
        <span className="text-shell-muted">{uiString("progressLabel", lang)}</span>
        <span className="text-shell-accent tabular-nums">{percent}%</span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-shell-bg border border-shell-border">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-shell-accent/70 via-amber-400/80 to-shell-accent"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ boxShadow: "0 0 20px rgba(212, 165, 116, 0.45)" }}
        />
      </div>
    </div>
  );
}
