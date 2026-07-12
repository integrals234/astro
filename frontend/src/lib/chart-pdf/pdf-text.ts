import type { jsPDF } from "jspdf";
import type { PdfLanguage } from "./i18n";
import { applyPdfFont } from "./pdf-font";
import { wrapMeasuredText } from "./typography-core";

const HINDI_FONT_FAMILY = "JyotishNotoSansDevanagari";
const HINDI_FONT_URL = "/fonts/NotoSansDevanagari.ttf";
const RASTER_SCALE = 4;

type Color = [number, number, number];
type Align = "left" | "center" | "right";

interface RasterizedRun {
  dataUrl: string;
  width: number;
  height: number;
  ascent: number;
}

let activeLanguage: PdfLanguage = "en";
let hindiFontReady = false;
let hindiFontPromise: Promise<void> | null = null;
const rasterCache = new Map<string, RasterizedRun>();

function requireCanvasContext(): CanvasRenderingContext2D {
  if (typeof document === "undefined") {
    throw new Error("PDF text rendering requires a browser document.");
  }
  const context = document.createElement("canvas").getContext("2d");
  if (!context) throw new Error("Unable to create a Canvas 2D context for PDF text.");
  return context;
}

function hindiCanvasFont(size: number, bold: boolean): string {
  return `${bold ? 700 : 400} ${size}px "${HINDI_FONT_FAMILY}"`;
}

function requireHindiFont(): void {
  if (!hindiFontReady) {
    throw new Error(
      "Hindi PDF font is not initialized. Await initializePdfTypography('hi') before drawing.",
    );
  }
}

export async function initializePdfTypography(lang: PdfLanguage): Promise<void> {
  activeLanguage = lang;
  rasterCache.clear();
  if (lang !== "hi") return;
  if (hindiFontReady) return;
  if (typeof FontFace === "undefined" || typeof document === "undefined") {
    throw new Error("Hindi PDF generation requires browser FontFace and document.fonts support.");
  }

  if (!hindiFontPromise) {
    hindiFontPromise = (async () => {
      try {
        const face = new FontFace(
          HINDI_FONT_FAMILY,
          `url("${HINDI_FONT_URL}") format("truetype")`,
          { style: "normal", weight: "100 900" },
        );
        const loadedFace = await face.load();
        document.fonts.add(loadedFace);
        await document.fonts.ready;
        if (!document.fonts.check(`16px "${HINDI_FONT_FAMILY}"`, "क्षत्रिय")) {
          throw new Error("the loaded face was not accepted by document.fonts");
        }
        hindiFontReady = true;
      } catch (error) {
        hindiFontPromise = null;
        const reason = error instanceof Error ? error.message : String(error);
        throw new Error(`Failed to load Hindi PDF font ${HINDI_FONT_URL}: ${reason}`);
      }
    })();
  }
  await hindiFontPromise;
}

export function measurePdfText(
  doc: jsPDF,
  text: string,
  fontSize: number,
  bold = false,
): number {
  if (activeLanguage === "hi") {
    requireHindiFont();
    const context = requireCanvasContext();
    context.font = hindiCanvasFont(fontSize, bold);
    return context.measureText(text).width;
  }
  applyPdfFont(doc, bold ? "bold" : "normal");
  doc.setFontSize(fontSize);
  return doc.getTextWidth(text);
}

export function splitPdfText(
  doc: jsPDF,
  text: string,
  maxWidth: number,
  fontSize: number,
  bold = false,
): string[] {
  return wrapMeasuredText(
    text || "—",
    maxWidth,
    (candidate) => measurePdfText(doc, candidate, fontSize, bold),
    activeLanguage === "hi" ? "hi" : activeLanguage,
  );
}

function rasterizeHindiRun(
  text: string,
  fontSize: number,
  color: Color,
  bold: boolean,
): RasterizedRun {
  requireHindiFont();
  const key = `${fontSize}|${bold ? 700 : 400}|${color.join(",")}|${text}`;
  const cached = rasterCache.get(key);
  if (cached) return cached;

  const context = requireCanvasContext();
  context.font = hindiCanvasFont(fontSize, bold);
  const metrics = context.measureText(text);
  const ascent = metrics.actualBoundingBoxAscent || fontSize * 0.9;
  const descent = metrics.actualBoundingBoxDescent || fontSize * 0.3;
  const padding = Math.max(2, fontSize * 0.2);
  const width = Math.max(1, metrics.width + padding * 2);
  const height = Math.max(1, ascent + descent + padding * 2);

  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil(width * RASTER_SCALE);
  canvas.height = Math.ceil(height * RASTER_SCALE);
  const drawContext = canvas.getContext("2d");
  if (!drawContext) throw new Error("Unable to rasterize Hindi PDF text.");
  drawContext.scale(RASTER_SCALE, RASTER_SCALE);
  drawContext.font = hindiCanvasFont(fontSize, bold);
  drawContext.textBaseline = "alphabetic";
  drawContext.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  drawContext.fillText(text, padding, padding + ascent);

  const run = {
    dataUrl: canvas.toDataURL("image/png"),
    width,
    height,
    ascent: padding + ascent,
  };
  rasterCache.set(key, run);
  return run;
}

export function drawPdfText(
  doc: jsPDF,
  text: string,
  x: number,
  baselineY: number,
  options?: {
    size?: number;
    color?: Color;
    align?: Align;
    bold?: boolean;
  },
): void {
  const size = options?.size ?? 8;
  const color = options?.color ?? [0, 0, 0];
  const align = options?.align ?? "left";
  const bold = options?.bold ?? false;

  if (activeLanguage === "hi") {
    const run = rasterizeHindiRun(text, size, color, bold);
    const imageX =
      align === "center" ? x - run.width / 2 : align === "right" ? x - run.width : x;
    doc.addImage(run.dataUrl, "PNG", imageX, baselineY - run.ascent, run.width, run.height);
    return;
  }

  applyPdfFont(doc, bold ? "bold" : "normal");
  doc.setFontSize(size);
  doc.setTextColor(...color);
  doc.text(text, x, baselineY, { align });
}
