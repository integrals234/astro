"use client";

import { motion } from "framer-motion";
import type { CourseLanguage } from "@/lib/vedic-course/types";
import { gameKindLabel } from "@/lib/vedic-course/step-utils";
import type { CourseStep } from "@/lib/vedic-course/types";
import { t } from "@/lib/vedic-course/utils";

interface GameShellProps {
  kind: CourseStep["kind"];
  lang: CourseLanguage;
  title?: { en: string; ja: string };
  instruction?: { en: string; ja: string };
  children: React.ReactNode;
}

export default function GameShell({ kind, lang, title, instruction, children }: GameShellProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="washi-card p-8 md:p-10"
    >
      <div className="washi-status-neutral mb-6 inline-flex items-center gap-2 px-3 py-1.5 font-body text-[10px] font-medium uppercase tracking-[0.24em]">
        {gameKindLabel(kind, lang)}
      </div>

      {title && (
        <h3 className="font-header text-2xl md:text-3xl text-ink tracking-tight">
          {t(title, lang)}
        </h3>
      )}
      {instruction && (
        <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-2xl">
          {t(instruction, lang)}
        </p>
      )}

      <div className={title || instruction ? "mt-8" : ""}>{children}</div>
    </motion.article>
  );
}
