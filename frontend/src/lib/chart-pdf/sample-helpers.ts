import type { ChartData } from "../chart-types";
import type { PdfLanguage } from "./i18n";
import { translatePlanet, translateSign } from "./i18n";
import { parseDashaDate } from "./helpers";

export function formatSampleDms(longitude: number): string {
  const l = longitude % 30;
  const d = Math.floor(l);
  const mFloat = (l - d) * 60;
  const m = Math.floor(mFloat);
  const s = Math.floor((mFloat - m) * 60);
  return `${d}°${String(m).padStart(2, "0")}′${String(s).padStart(2, "0")}″`;
}

export function formatAyanamsha(value: number): string {
  return formatSampleDms(value);
}

export function formatCoordPair(
  longitude: number,
  latitude: number,
  lang: PdfLanguage,
): string {
  const fmt = (value: number, pos: string, neg: string) => {
    const dir = value >= 0 ? pos : neg;
    const absolute = Math.abs(value);
    const degrees = Math.floor(absolute);
    const minutes = ((absolute - degrees) * 60).toFixed(2);
    return `${degrees}°${minutes}′ ${dir}`;
  };
  const lon = fmt(longitude, "E", "W");
  const lat = fmt(latitude, "N", "S");
  if (lang === "hi") return `देशांतर ${lon}, अक्षांश ${lat}`;
  if (lang === "ja") return `経度 ${lon}、緯度 ${lat}`;
  if (lang === "ko") return `경도 ${lon}, 위도 ${lat}`;
  return `Longitude ${lon}, Latitude ${lat}`;
}

export function formatBirthDate(
  year: number,
  month: number,
  day: number,
  lang: PdfLanguage,
): string {
  if (lang === "ja") return `${year} 年 ${month} 月 ${day} 日`;
  if (lang === "hi") return new Intl.DateTimeFormat("hi-IN", { dateStyle: "long", timeZone: "UTC" }).format(new Date(Date.UTC(year, month - 1, day)));
  if (lang === "ko") return new Intl.DateTimeFormat("ko-KR", { dateStyle: "long", timeZone: "UTC" }).format(new Date(Date.UTC(year, month - 1, day)));
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[month - 1]} ${day}, ${year}`;
}

export function formatBirthTime(hour: number, minute: number, lang: PdfLanguage): string {
  if (lang === "ja") return `${hour} 時 ${minute} 分`;
  if (lang === "hi") return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")} बजे`;
  if (lang === "ko") return `${String(hour).padStart(2, "0")}시 ${String(minute).padStart(2, "0")}분`;
  const suffix = hour >= 12 ? "PM" : "AM";
  const h12 = hour % 12 || 12;
  return `${h12}:${String(minute).padStart(2, "0")} ${suffix}`;
}

export function formatTimezoneOffset(hours: number): string {
  const sign = hours >= 0 ? "+" : "-";
  const totalMinutes = Math.round(Math.abs(hours) * 60);
  const hh = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
  const mm = String(totalMinutes % 60).padStart(2, "0");
  return `UTC ${sign}${hh}:${mm}`;
}

export function formatDashaDate(dateStr: string, lang: PdfLanguage): string {
  const date = parseDashaDate(dateStr);
  if (lang === "ja") {
    return `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(2, "0")}月${String(date.getDate()).padStart(2, "0")}日`;
  }
  return formatBirthDate(date.getFullYear(), date.getMonth() + 1, date.getDate(), lang);
}

export function dashaAge(birth: Date, dashaStart: string): number {
  const start = parseDashaDate(dashaStart);
  const diffMs = start.getTime() - birth.getTime();
  return Math.max(0, Math.floor(diffMs / (365.25 * 24 * 60 * 60 * 1000)));
}

export function isWaxingMoon(chartData: ChartData): boolean {
  const moon = chartData.planets.find((p) => p.name === "Moon");
  const sun = chartData.planets.find((p) => p.name === "Sun");
  if (!moon || !sun) return true;
  const elongation = (moon.longitude - sun.longitude + 360) % 360;
  return elongation > 0 && elongation < 180;
}

export function buildAspectSummary(chartData: ChartData, lang: PdfLanguage): string {
  const label = {
    en: "Aspected houses: ",
    hi: "दृष्ट भाव: ",
    ja: "アスペクト先：",
    ko: "드리슈티 대상 하우스: ",
  }[lang];
  const houseSuffix = { en: "H", hi: " भाव", ja: "室", ko: "하우스" }[lang];
  const parts: string[] = [];

  const special = [
    { name: "Mars", ja: "火星", en: "Mars" },
    { name: "Jupiter", ja: "木星", en: "Jupiter" },
    { name: "Saturn", ja: "土星", en: "Saturn" },
  ] as const;

  for (const planet of special) {
    const entry = chartData.planets.find((p) => p.name === planet.name);
    if (!entry?.aspects_houses.length) continue;
    const houses = entry.aspects_houses
      .map((house) => `${house}${houseSuffix}`)
      .join(lang === "ja" ? "・" : ", ");
    const name = translatePlanet(lang, planet.name);
    parts.push(`${name}${lang === "ja" ? "：" : "—"}${houses}`);
  }

  const empty = {
    en: "No aspect data available",
    hi: "दृष्टि-जानकारी उपलब्ध नहीं",
    ja: "アスペクト情報なし",
    ko: "드리슈티 정보 없음",
  }[lang];
  return parts.length ? label + parts.join(lang === "ja" ? "、" : "; ") : empty;
}

export function signForHouse(ascSign: string, house: number): string {
  const signs = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
  ];
  const ascIndex = signs.indexOf(ascSign);
  if (ascIndex < 0) return ascSign;
  return signs[(ascIndex + house - 1) % 12];
}

export function planetsInHouse(chartData: ChartData, house: number, lang: PdfLanguage): string {
  const names = chartData.planets
    .filter((p) => p.d1_house === house)
    .map((p) => {
      const retrograde =
        p.is_retrograde && p.name !== "Rahu" && p.name !== "Ketu";
      const marker = { en: " (R)", hi: " (वक्री)", ja: "（逆行）", ko: " (역행)" }[lang];
      return `${translatePlanet(lang, p.name)}${retrograde ? marker : ""}`;
    });
  return names.length > 0 ? names.join(lang === "ja" ? "、" : ", ") : "—";
}

export function chartPlanetLabel(name: string, lang: PdfLanguage, retro = false): string {
  const base = translatePlanet(lang, name);
  if (!retro || name === "Rahu" || name === "Ketu") return base;
  const marker = { en: " (R)", hi: " (वक्री)", ja: "（逆行）", ko: " (역행)" }[lang];
  return `${base}${marker}`;
}

export function joinPlanets(planets: string[], lang: PdfLanguage): string {
  if (!planets.length) return lang === "ja" ? "—" : "—";
  return planets.map((p) => translatePlanet(lang, p)).join(lang === "ja" ? "、" : ", ");
}

export function getAscendantLord(chartData: ChartData): string {
  const lords: Record<string, string> = {
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
  return lords[chartData.ascendant_sign] ?? "Mars";
}

export function moonNakshatraLabel(chartData: ChartData, lang: PdfLanguage): string {
  const moon = chartData.planets.find((p) => p.name === "Moon");
  if (!moon) return "—";
  const nak = moon.nakshatra;
  if (lang === "ja") {
    return `${nak}（${translateSign(lang, moon.sign)}）`;
  }
  return `${nak} (${translateSign(lang, moon.sign)})`;
}
