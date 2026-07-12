import type { jsPDF } from "jspdf";
import type { PdfLanguage } from "./i18n";
import { initializePdfTypography } from "./pdf-text";

const FONTS = {
  ja: { path: "/fonts/NotoSansJP.ttf", file: "NotoSansJP.ttf", family: "NotoSansJP" },
  ko: { path: "/fonts/NotoSansKR.ttf", file: "NotoSansKR.ttf", family: "NotoSansKR" },
} as const;
const fontBase64 = new Map<string, string>();
const loadingFonts = new Map<string, Promise<string>>();

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

async function fetchFontBase64(path: string): Promise<string> {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load font from ${path}`);
  }
  return arrayBufferToBase64(await response.arrayBuffer());
}

export async function registerLocaleFont(doc: jsPDF, lang: PdfLanguage): Promise<void> {
  await initializePdfTypography(lang);
  if (lang === "en") return;
  if (lang === "hi") return;
  const font = FONTS[lang];
  let data = fontBase64.get(font.path);
  if (!data) {
    let pending = loadingFonts.get(font.path);
    if (!pending) {
      pending = fetchFontBase64(font.path);
      loadingFonts.set(font.path, pending);
    }
    data = await pending;
    fontBase64.set(font.path, data);
  }
  doc.addFileToVFS(font.file, data);
  doc.addFont(font.file, font.family, "normal");
}
