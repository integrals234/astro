/**
 * Per-nakshatra attributes the classical matching rules depend on.
 *
 * The ephemeris returns a nakshatra name; everything below is the fixed
 * classical attribution attached to it. Kept as one table rather than scattered
 * lookups so the 27 rows can be checked against a text in one pass.
 *
 * Order is canonical (Ashwini = index 0) and load-bearing: Tara kuta counts
 * positions in this sequence.
 */
export type Gana = "Deva" | "Manushya" | "Rakshasa";
export type Nadi = "Adi" | "Madhya" | "Antya";

export interface NakshatraRow {
  /** Name exactly as the Python engine emits it. */
  name: string;
  /** 1-based classical ordinal. */
  number: number;
  /** Vimshottari lord. */
  lord: string;
  gana: Gana;
  nadi: Nadi;
  /** Yoni animal, used for the 4-point sexual-compatibility kuta. */
  yoni: string;
  /**
   * The corresponding 宿 in the Japanese Sukuyō (宿曜) system, which descends
   * from these same 27 lunar mansions via Tang-dynasty Chinese transmission.
   * This mapping is the whole basis of the /tools/sukuyo page.
   */
  sukuyo: string;
  /** Kana reading of the 宿 name. */
  sukuyoReading: string;
}

export const NAKSHATRAS: NakshatraRow[] = [
  { name: "Ashwini", number: 1, lord: "Ketu", gana: "Deva", nadi: "Adi", yoni: "Horse", sukuyo: "婁宿", sukuyoReading: "ろうしゅく" },
  { name: "Bharani", number: 2, lord: "Venus", gana: "Manushya", nadi: "Madhya", yoni: "Elephant", sukuyo: "胃宿", sukuyoReading: "いしゅく" },
  { name: "Krittika", number: 3, lord: "Sun", gana: "Rakshasa", nadi: "Antya", yoni: "Sheep", sukuyo: "昴宿", sukuyoReading: "ぼうしゅく" },
  { name: "Rohini", number: 4, lord: "Moon", gana: "Manushya", nadi: "Antya", yoni: "Serpent", sukuyo: "畢宿", sukuyoReading: "ひつしゅく" },
  { name: "Mrigashira", number: 5, lord: "Mars", gana: "Deva", nadi: "Madhya", yoni: "Serpent", sukuyo: "觜宿", sukuyoReading: "ししゅく" },
  { name: "Ardra", number: 6, lord: "Rahu", gana: "Manushya", nadi: "Adi", yoni: "Dog", sukuyo: "参宿", sukuyoReading: "しんしゅく" },
  { name: "Punarvasu", number: 7, lord: "Jupiter", gana: "Deva", nadi: "Adi", yoni: "Cat", sukuyo: "井宿", sukuyoReading: "せいしゅく" },
  { name: "Pushya", number: 8, lord: "Saturn", gana: "Deva", nadi: "Madhya", yoni: "Sheep", sukuyo: "鬼宿", sukuyoReading: "きしゅく" },
  { name: "Ashlesha", number: 9, lord: "Mercury", gana: "Rakshasa", nadi: "Antya", yoni: "Cat", sukuyo: "柳宿", sukuyoReading: "りゅうしゅく" },
  { name: "Magha", number: 10, lord: "Ketu", gana: "Rakshasa", nadi: "Antya", yoni: "Rat", sukuyo: "星宿", sukuyoReading: "せいしゅく" },
  { name: "Purva Phalguni", number: 11, lord: "Venus", gana: "Manushya", nadi: "Madhya", yoni: "Rat", sukuyo: "張宿", sukuyoReading: "ちょうしゅく" },
  { name: "Uttara Phalguni", number: 12, lord: "Sun", gana: "Manushya", nadi: "Adi", yoni: "Cow", sukuyo: "翼宿", sukuyoReading: "よくしゅく" },
  { name: "Hasta", number: 13, lord: "Moon", gana: "Deva", nadi: "Adi", yoni: "Buffalo", sukuyo: "軫宿", sukuyoReading: "しんしゅく" },
  { name: "Chitra", number: 14, lord: "Mars", gana: "Rakshasa", nadi: "Madhya", yoni: "Tiger", sukuyo: "角宿", sukuyoReading: "かくしゅく" },
  { name: "Swati", number: 15, lord: "Rahu", gana: "Deva", nadi: "Antya", yoni: "Buffalo", sukuyo: "亢宿", sukuyoReading: "こうしゅく" },
  { name: "Vishakha", number: 16, lord: "Jupiter", gana: "Rakshasa", nadi: "Antya", yoni: "Tiger", sukuyo: "氐宿", sukuyoReading: "ていしゅく" },
  { name: "Anuradha", number: 17, lord: "Saturn", gana: "Deva", nadi: "Madhya", yoni: "Deer", sukuyo: "房宿", sukuyoReading: "ぼうしゅく" },
  { name: "Jyeshtha", number: 18, lord: "Mercury", gana: "Rakshasa", nadi: "Adi", yoni: "Deer", sukuyo: "心宿", sukuyoReading: "しんしゅく" },
  { name: "Mula", number: 19, lord: "Ketu", gana: "Rakshasa", nadi: "Adi", yoni: "Dog", sukuyo: "尾宿", sukuyoReading: "びしゅく" },
  { name: "Purva Ashadha", number: 20, lord: "Venus", gana: "Manushya", nadi: "Madhya", yoni: "Monkey", sukuyo: "箕宿", sukuyoReading: "きしゅく" },
  { name: "Uttara Ashadha", number: 21, lord: "Sun", gana: "Manushya", nadi: "Antya", yoni: "Mongoose", sukuyo: "斗宿", sukuyoReading: "としゅく" },
  { name: "Shravana", number: 22, lord: "Moon", gana: "Deva", nadi: "Antya", yoni: "Monkey", sukuyo: "女宿", sukuyoReading: "じょしゅく" },
  { name: "Dhanishta", number: 23, lord: "Mars", gana: "Rakshasa", nadi: "Madhya", yoni: "Lion", sukuyo: "虚宿", sukuyoReading: "きょしゅく" },
  { name: "Shatabhisha", number: 24, lord: "Rahu", gana: "Rakshasa", nadi: "Adi", yoni: "Horse", sukuyo: "危宿", sukuyoReading: "きしゅく" },
  { name: "Purva Bhadrapada", number: 25, lord: "Jupiter", gana: "Manushya", nadi: "Adi", yoni: "Lion", sukuyo: "室宿", sukuyoReading: "しつしゅく" },
  { name: "Uttara Bhadrapada", number: 26, lord: "Saturn", gana: "Manushya", nadi: "Madhya", yoni: "Cow", sukuyo: "壁宿", sukuyoReading: "へきしゅく" },
  { name: "Revati", number: 27, lord: "Mercury", gana: "Deva", nadi: "Antya", yoni: "Elephant", sukuyo: "奎宿", sukuyoReading: "けいしゅく" },
];

const BY_NAME = new Map(NAKSHATRAS.map((n) => [n.name.toLowerCase(), n]));

/**
 * Tolerant of the spelling drift between the ephemeris output and classical
 * transliterations ("Mrigashira" / "Mrigasira", "Purva Phalguni" / "Purvaphalguni").
 */
export function findNakshatra(name: string): NakshatraRow | null {
  if (!name) return null;
  const key = name.trim().toLowerCase();
  const direct = BY_NAME.get(key);
  if (direct) return direct;

  const squashed = key.replace(/[\s_-]/g, "");
  return (
    NAKSHATRAS.find(
      (n) => n.name.toLowerCase().replace(/[\s_-]/g, "") === squashed,
    ) ?? null
  );
}

export const RASHIS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
] as const;

export type Rashi = (typeof RASHIS)[number];

export function rashiIndex(sign: string): number {
  return RASHIS.findIndex((r) => r.toLowerCase() === sign.trim().toLowerCase());
}

export const SIGN_LORDS: Record<Rashi, string> = {
  Aries: "Mars",
  Taurus: "Venus",
  Gemini: "Mercury",
  Cancer: "Moon",
  Leo: "Sun",
  Virgo: "Mercury",
  Libra: "Venus",
  Scorpio: "Mars",
  Sagittarius: "Jupiter",
  Capricorn: "Saturn",
  Aquarius: "Saturn",
  Pisces: "Jupiter",
};
