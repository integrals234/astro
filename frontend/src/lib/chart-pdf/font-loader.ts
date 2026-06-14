import type { jsPDF } from "jspdf";

const FONT_PATH = "/fonts/NotoSansJP.ttf";

let fontBase64: string | null = null;
let registrationPromise: Promise<void> | null = null;

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

export async function registerJapaneseFonts(doc: jsPDF): Promise<void> {
  if (!registrationPromise) {
    registrationPromise = (async () => {
      if (!fontBase64) {
        fontBase64 = await fetchFontBase64(FONT_PATH);
      }
    })();
  }

  await registrationPromise;

  doc.addFileToVFS("NotoSansJP.ttf", fontBase64!);
  doc.addFont("NotoSansJP.ttf", "NotoSansJP", "normal");
  doc.addFont("NotoSansJP.ttf", "NotoSansJP", "bold");
}
