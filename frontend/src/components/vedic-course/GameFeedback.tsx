"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PartyPopper, XCircle } from "lucide-react";
import type { CourseLanguage } from "@/lib/vedic-course/types";
import { uiString } from "@/lib/vedic-course/i18n/ui";
import { FormattedText } from "@/lib/format-inline-text";

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
            className={`rounded-lg border px-5 py-4 ${
              isCorrect
                ? "border-moss bg-[rgba(124,139,111,0.12)]"
                : "border-caution bg-[rgba(199,123,78,0.1)]"
            }`}
          >
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <PartyPopper size={20} className="shrink-0 text-moss mt-0.5" />
              ) : (
                <XCircle size={20} className="shrink-0 text-terracotta mt-0.5" />
              )}
              <div>
                <p
                  className={`text-sm font-medium ${
                    isCorrect ? "text-moss" : "text-terracotta"
                  }`}
                >
                  {message ??
                    (isCorrect ? uiString("correct", lang) : uiString("incorrect", lang))}
                </p>
                {explanation && (
                  <p className="mt-1.5 text-sm text-text-muted leading-relaxed">
                    <FormattedText text={explanation} />
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
