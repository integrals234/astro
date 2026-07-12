import type { jsPDF } from "jspdf";
import type { PdfLanguage } from "./i18n";

export const EN_FONT = "helvetica";
const LOCALE_FONTS: Record<PdfLanguage, string> = {
  en: EN_FONT,
  // Devanagari is shaped by Canvas and embedded as PNG; jsPDF must not draw it.
  hi: EN_FONT,
  ja: "NotoSansJP",
  ko: "NotoSansKR",
};

let activeFontFamily = EN_FONT;

export function setActivePdfFont(lang: PdfLanguage) {
  activeFontFamily = LOCALE_FONTS[lang];
}

export function applyPdfFont(doc: jsPDF, style: "normal" | "bold" = "normal") {
  // Locale fonts are registered from one variable TTF. Requesting a separate
  // bold face can make jsPDF fall back to Helvetica and lose locale glyphs.
  if (activeFontFamily !== EN_FONT) {
    doc.setFont(activeFontFamily, "normal");
    return;
  }
  doc.setFont(activeFontFamily, style);
}
