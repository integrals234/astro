import type { jsPDF } from "jspdf";
import type { PdfLanguage } from "./i18n";

export const EN_FONT = "helvetica";
export const JA_FONT = "NotoSansJP";

let activeFontFamily = EN_FONT;

export function setActivePdfFont(lang: PdfLanguage) {
  activeFontFamily = lang === "ja" ? JA_FONT : EN_FONT;
}

export function applyPdfFont(doc: jsPDF, style: "normal" | "bold" = "normal") {
  doc.setFont(activeFontFamily, style);
}
