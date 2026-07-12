import { nakshatraImages, rashiImages } from "../education/asset-paths";

const SIGN_TO_ASSET: Record<string, keyof typeof rashiImages> = {
  Aries: "aries",
  Taurus: "taurus",
  Gemini: "gemini",
  Cancer: "cancer",
  Leo: "leo",
  Virgo: "virgo",
  Libra: "libra",
  Scorpio: "scorpio",
  Sagittarius: "sagittarius",
  Capricorn: "capricorn",
  Aquarius: "aquarius",
  Pisces: "pisces",
};

const NAK_TO_ASSET: Record<string, string> = {
  Ashwini: "ashwini",
  Bharani: "bharani",
  Krittika: "krittika",
  Rohini: "rohini",
  Mrigashira: "mrigashira",
  Ardra: "ardra",
  Punarvasu: "punarvasu",
  Pushya: "pushya",
  Ashlesha: "ashlesha",
  Magha: "magha",
  "Purva Phalguni": "purva-phalguni",
  "Uttara Phalguni": "uttara-phalguni",
  Hasta: "hasta",
  Chitra: "chitra",
  Swati: "swati",
  Vishakha: "vishakha",
  Anuradha: "anuradha",
  Jyeshtha: "jyeshtha",
  Mula: "mula",
  "Purva Ashadha": "purva-ashadha",
  "Uttara Ashadha": "uttara-ashadha",
  Shravana: "shravana",
  Dhanishta: "dhanishta",
  Shatabhisha: "shatabhisha",
  "Purva Bhadrapada": "purva-bhadrapada",
  "Uttara Bhadrapada": "uttara-bhadrapada",
  Revati: "revati",
};

const cache = new Map<string, string>();

/** Fetch an image and convert to PNG data-URL (jsPDF-safe). */
export async function loadImageDataUrl(path: string): Promise<string | null> {
  if (cache.has(path)) return cache.get(path)!;
  try {
    const res = await fetch(path);
    if (!res.ok) return null;
    const blob = await res.blob();
    const bitmap = await createImageBitmap(blob);
    const canvas = document.createElement("canvas");
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.drawImage(bitmap, 0, 0);
    bitmap.close();
    const dataUrl = canvas.toDataURL("image/png");
    cache.set(path, dataUrl);
    return dataUrl;
  } catch {
    return null;
  }
}

export function rashiImagePath(sign: string): string | undefined {
  const key = SIGN_TO_ASSET[sign];
  return key ? rashiImages[key] : undefined;
}

export function nakshatraImagePath(nakshatra: string): string | undefined {
  const key = NAK_TO_ASSET[nakshatra];
  return key ? nakshatraImages[key] : undefined;
}
