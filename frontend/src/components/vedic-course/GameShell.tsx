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
      className="rounded-3xl border border-shell-border bg-gradient-to-br from-shell-elevated/90 to-shell-bg/60 p-8 md:p-10"
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-violet-200">
        {gameKindLabel(kind, lang)}
      </div>

      {title && (
        <h3 className="font-serif text-2xl md:text-3xl text-shell-warm tracking-tight">
          {t(title, lang)}
        </h3>
      )}
      {instruction && (
        <p className="mt-3 text-sm text-shell-muted leading-relaxed max-w-2xl">
          {t(instruction, lang)}
        </p>
      )}

      <div className={title || instruction ? "mt-8" : ""}>{children}</div>
    </motion.article>
  );
}
