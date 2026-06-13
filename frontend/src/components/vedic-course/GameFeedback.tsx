"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PartyPopper, XCircle } from "lucide-react";
import type { CourseLanguage } from "@/lib/vedic-course/types";
import { uiString } from "@/lib/vedic-course/i18n/ui";

interface GameFeedbackProps {
  show: boolean;
  isCorrect: boolean;
  lang: CourseLanguage;
  message?: string;
  explanation?: string;
}

export default function GameFeedback({
  show,
  isCorrect,
  lang,
  message,
  explanation,
}: GameFeedbackProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: 24 }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          className="overflow-hidden"
        >
          <div
            className={`rounded-2xl border px-5 py-4 ${
              isCorrect
                ? "border-emerald-500/30 bg-emerald-500/10"
                : "border-shell-border bg-shell-bg/60"
            }`}
          >
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <PartyPopper size={20} className="shrink-0 text-emerald-300 mt-0.5" />
              ) : (
                <XCircle size={20} className="shrink-0 text-shell-muted mt-0.5" />
              )}
              <div>
                <p
                  className={`text-sm font-medium ${
                    isCorrect ? "text-emerald-200" : "text-shell-warm"
                  }`}
                >
                  {message ??
                    (isCorrect ? uiString("correct", lang) : uiString("incorrect", lang))}
                </p>
                {explanation && (
                  <p className="mt-1.5 text-sm text-shell-muted leading-relaxed">{explanation}</p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
