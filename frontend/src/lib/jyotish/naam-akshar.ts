import { NAKSHATRAS } from "@/lib/jyotish/nakshatra-data";

/**
 * Naam Karan — the classical rule assigning a starting sound to each of the
 * 27×4 nakshatra padas, used for traditional Hindu baby naming. Table
 * supplied directly by the site owner as the canonical reference rather than
 * reconstructed from memory, since a wrong entry here would mislead someone
 * actually naming a child.
 *
 * Keyed by `NAKSHATRAS[].name` spelling (the ephemeris's own spelling),
 * `[pada1, pada2, pada3, pada4]`.
 */
export interface PadaSyllable {
  /** Devanagari akshara, e.g. "चु". */
  devanagari: string;
  /** Romanized form as commonly written, e.g. "Chu". */
  roman: string;
}

export const PADA_SYLLABLES: Record<
  string,
  [PadaSyllable, PadaSyllable, PadaSyllable, PadaSyllable]
> = {
  Ashwini: [
    { devanagari: "चु", roman: "Chu" },
    { devanagari: "चे", roman: "Che" },
    { devanagari: "चो", roman: "Cho" },
    { devanagari: "ला", roman: "Laa" },
  ],
  Bharani: [
    { devanagari: "ली", roman: "Lee" },
    { devanagari: "लू", roman: "Loo" },
    { devanagari: "ले", roman: "Le" },
    { devanagari: "लो", roman: "Lo" },
  ],
  Krittika: [
    { devanagari: "अ", roman: "A" },
    { devanagari: "ई", roman: "Ee" },
    { devanagari: "उ", roman: "U" },
    { devanagari: "ए", roman: "E" },
  ],
  Rohini: [
    { devanagari: "ओ", roman: "O" },
    { devanagari: "वा", roman: "Vaa" },
    { devanagari: "वी", roman: "Vee" },
    { devanagari: "वु", roman: "Vu" },
  ],
  Mrigashira: [
    { devanagari: "वे", roman: "Ve" },
    { devanagari: "वो", roman: "Vo" },
    { devanagari: "का", roman: "Kaa" },
    { devanagari: "की", roman: "Kee" },
  ],
  Ardra: [
    { devanagari: "कु", roman: "Ku" },
    { devanagari: "घ", roman: "Gha" },
    { devanagari: "ङ", roman: "Ing" },
    { devanagari: "छ", roman: "Chha" },
  ],
  Punarvasu: [
    { devanagari: "के", roman: "Ke" },
    { devanagari: "को", roman: "Ko" },
    { devanagari: "हा", roman: "Haa" },
    { devanagari: "ही", roman: "Hee" },
  ],
  Pushya: [
    { devanagari: "हु", roman: "Hu" },
    { devanagari: "हे", roman: "He" },
    { devanagari: "हो", roman: "Ho" },
    { devanagari: "डा", roman: "Daa" },
  ],
  Ashlesha: [
    { devanagari: "डी", roman: "Dee" },
    { devanagari: "डू", roman: "Doo" },
    { devanagari: "डे", roman: "De" },
    { devanagari: "डो", roman: "Do" },
  ],
  Magha: [
    { devanagari: "मा", roman: "Maa" },
    { devanagari: "मी", roman: "Mee" },
    { devanagari: "मू", roman: "Moo" },
    { devanagari: "मे", roman: "Me" },
  ],
  "Purva Phalguni": [
    { devanagari: "मो", roman: "Mo" },
    { devanagari: "टा", roman: "Taa" },
    { devanagari: "टी", roman: "Tee" },
    { devanagari: "टू", roman: "Too" },
  ],
  "Uttara Phalguni": [
    { devanagari: "टे", roman: "Te" },
    { devanagari: "टो", roman: "To" },
    { devanagari: "पा", roman: "Paa" },
    { devanagari: "पी", roman: "Pee" },
  ],
  Hasta: [
    { devanagari: "पू", roman: "Poo" },
    { devanagari: "ष", roman: "Sha" },
    { devanagari: "ण", roman: "Na" },
    { devanagari: "ठ", roman: "Tha" },
  ],
  Chitra: [
    { devanagari: "पे", roman: "Pe" },
    { devanagari: "पो", roman: "Po" },
    { devanagari: "रा", roman: "Raa" },
    { devanagari: "री", roman: "Ree" },
  ],
  Swati: [
    { devanagari: "रू", roman: "Roo" },
    { devanagari: "रे", roman: "Re" },
    { devanagari: "रो", roman: "Ro" },
    { devanagari: "ता", roman: "Taa" },
  ],
  Vishakha: [
    { devanagari: "ती", roman: "Tee" },
    { devanagari: "तू", roman: "Too" },
    { devanagari: "ते", roman: "Te" },
    { devanagari: "तो", roman: "To" },
  ],
  Anuradha: [
    { devanagari: "ना", roman: "Naa" },
    { devanagari: "नी", roman: "Nee" },
    { devanagari: "नू", roman: "Noo" },
    { devanagari: "ने", roman: "Ne" },
  ],
  Jyeshtha: [
    { devanagari: "नो", roman: "No" },
    { devanagari: "या", roman: "Yaa" },
    { devanagari: "यी", roman: "Yee" },
    { devanagari: "यू", roman: "Yoo" },
  ],
  Mula: [
    { devanagari: "ये", roman: "Ye" },
    { devanagari: "यो", roman: "Yo" },
    { devanagari: "भा", roman: "Bhaa" },
    { devanagari: "भी", roman: "Bhee" },
  ],
  "Purva Ashadha": [
    { devanagari: "भू", roman: "Bhoo" },
    { devanagari: "धा", roman: "Dhaa" },
    { devanagari: "फा", roman: "Phaa" },
    { devanagari: "ढ", roman: "Dha" },
  ],
  "Uttara Ashadha": [
    { devanagari: "भे", roman: "Bhe" },
    { devanagari: "भो", roman: "Bho" },
    { devanagari: "जा", roman: "Jaa" },
    { devanagari: "जी", roman: "Jee" },
  ],
  Shravana: [
    { devanagari: "खी", roman: "Khee" },
    { devanagari: "खू", roman: "Khoo" },
    { devanagari: "खे", roman: "Khe" },
    { devanagari: "खो", roman: "Kho" },
  ],
  Dhanishta: [
    { devanagari: "गा", roman: "Gaa" },
    { devanagari: "गी", roman: "Gee" },
    { devanagari: "गु", roman: "Gu" },
    { devanagari: "गे", roman: "Ge" },
  ],
  Shatabhisha: [
    { devanagari: "गो", roman: "Go" },
    { devanagari: "सा", roman: "Saa" },
    { devanagari: "सी", roman: "See" },
    { devanagari: "सू", roman: "Soo" },
  ],
  "Purva Bhadrapada": [
    { devanagari: "से", roman: "Se" },
    { devanagari: "सो", roman: "So" },
    { devanagari: "दा", roman: "Daa" },
    { devanagari: "दी", roman: "Dee" },
  ],
  "Uttara Bhadrapada": [
    { devanagari: "दू", roman: "Doo" },
    { devanagari: "थ", roman: "Tha" },
    { devanagari: "झ", roman: "Jha" },
    { devanagari: "ञ", roman: "Yna" },
  ],
  Revati: [
    { devanagari: "दे", roman: "De" },
    { devanagari: "दो", roman: "Do" },
    { devanagari: "च", roman: "Cha" },
    { devanagari: "ची", roman: "Chee" },
  ],
};

/**
 * Japanese has no consonant inventory matching Sanskrit's (no distinct
 * retroflex/aspirate/L-vs-R series, no "v"), so a pada's akshara is bridged
 * to the *nearest natural Japanese onset row* rather than transliterated
 * letter-for-letter. This is a deliberate adaptation, named once in the
 * tool's explainer copy rather than presented as an exact equivalence.
 *
 * Bucket keys are the unvoiced gojuon row name a name's first kana belongs
 * to (e.g. "ta" covers た・ち・つ・て・と, which is also where Sanskrit's
 * "cha/chi/chu/che/cho" naturally lands in Japanese phonology).
 */
export type JapaneseOnset =
  | "a" | "i" | "u" | "e" | "o"
  | "ka" | "ga" | "sa" | "za" | "ta" | "da"
  | "na" | "ha" | "ba" | "pa" | "ma" | "ya" | "ra";

const ONSET_BY_ROMAN: Record<string, JapaneseOnset> = {
  Chu: "ta", Che: "ta", Cho: "ta", Laa: "ra",
  Lee: "ra", Loo: "ra", Le: "ra", Lo: "ra",
  A: "a", Ee: "i", U: "u", E: "e",
  O: "o", Vaa: "ba", Vee: "ba", Vu: "ba",
  Ve: "ba", Vo: "ba", Kaa: "ka", Kee: "ka",
  Ku: "ka", Gha: "ga", Ing: "ga", Chha: "ta",
  Ke: "ka", Ko: "ka", Haa: "ha", Hee: "ha",
  Hu: "ha", He: "ha", Ho: "ha", Daa: "da",
  Dee: "da", Doo: "da", De: "da", Do: "da",
  Maa: "ma", Mee: "ma", Moo: "ma", Me: "ma",
  Mo: "ma", Taa: "ta", Tee: "ta", Too: "ta",
  Te: "ta", To: "ta", Paa: "pa", Pee: "pa",
  Poo: "pa", Sha: "sa", Na: "na", Tha: "ta",
  Pe: "pa", Po: "pa", Raa: "ra", Ree: "ra",
  Roo: "ra", Re: "ra", Ro: "ra",
  Naa: "na", Nee: "na", Noo: "na", Ne: "na",
  No: "na", Yaa: "ya", Yee: "ya", Yoo: "ya",
  Ye: "ya", Yo: "ya", Bhaa: "ba", Bhee: "ba",
  Bhoo: "ba", Dhaa: "da", Phaa: "pa", Dha: "da",
  Bhe: "ba", Bho: "ba", Jaa: "za", Jee: "za",
  Khee: "ka", Khoo: "ka", Khe: "ka", Kho: "ka",
  Gaa: "ga", Gee: "ga", Gu: "ga", Ge: "ga",
  Go: "ga", Saa: "sa", See: "sa", Soo: "sa",
  Se: "sa", So: "sa",
  Jha: "za", Yna: "na",
  Cha: "ta", Chee: "ta",
};

export function japaneseOnsetFor(syllable: PadaSyllable): JapaneseOnset {
  return ONSET_BY_ROMAN[syllable.roman] ?? "a";
}

export function padaSyllable(
  nakshatraName: string,
  pada: 1 | 2 | 3 | 4,
): PadaSyllable | null {
  const row = PADA_SYLLABLES[nakshatraName];
  return row ? row[pada - 1] : null;
}

/**
 * Moon sign from nakshatra + pada alone, for the "don't know the exact
 * birth time" path, which has no chart compute to read a sign off of.
 * Pure degree math: 108 equal 3°20' slices from Aries 0°, 9 slices per sign,
 * in the same canonical nakshatra order `NAKSHATRAS` already uses.
 */
const SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
] as const;

export function signForNakshatraPada(
  nakshatraNumber: number,
  pada: 1 | 2 | 3 | 4,
): string {
  const sliceIndex = (nakshatraNumber - 1) * 4 + (pada - 1);
  const signIndex = Math.floor(sliceIndex / 9);
  return SIGNS[signIndex % 12];
}

export { NAKSHATRAS };
