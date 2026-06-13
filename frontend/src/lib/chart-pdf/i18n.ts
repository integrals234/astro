export type PdfLanguage = "en" | "ja";

export interface PdfLabels {
  reportTitle: string;
  brand: string;
  generated: string;
  footer: string;
  page: string;
  of: string;
  completeNatal: string;
  birthParticulars: string;
  ascendantSummary: string;
  field: string;
  details: string;
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  birthPlace: string;
  latitude: string;
  longitude: string;
  timezone: string;
  transitDate: string;
  sunrise: string;
  sunset: string;
  lagna: string;
  ascNakshatra: string;
  d9Asc: string;
  moonSignHouse: string;
  house: string;
  currentMahaDasha: string;
  lagnaChartD1: string;
  rashiChartD1: string;
  planetaryPositionsD1: string;
  planet: string;
  sign: string;
  longitudeCol: string;
  nakshatra: string;
  lord: string;
  dignity: string;
  retrograde: string;
  yes: string;
  no: string;
  navamshaDivisional: string;
  navamshaChartD9: string;
  bhavaChalit: string;
  navamshaPositions: string;
  d1Sign: string;
  d9Sign: string;
  d1House: string;
  chalitHouse: string;
  moonChartTransits: string;
  chandraChart: string;
  gocharTransits: string;
  transitSign: string;
  natalHouse: string;
  chalitCusps: string;
  cusp: string;
  vedicAspects: string;
  planetaryAspects: string;
  fromHouse: string;
  aspectsHouses: string;
  noAspects: string;
  vimshottariDasha: string;
  dashaTimeline: string;
  level: string;
  mahaDasha: string;
  antarDasha: string;
  start: string;
  end: string;
  pada: string;
  birthChart: string;
  none: string;
}

const planetsEn: Record<string, string> = {
  Sun: "Sun",
  Moon: "Moon",
  Mars: "Mars",
  Mercury: "Mercury",
  Jupiter: "Jupiter",
  Venus: "Venus",
  Saturn: "Saturn",
  Rahu: "Rahu",
  Ketu: "Ketu",
};

const planetsJa: Record<string, string> = {
  Sun: "太陽",
  Moon: "月",
  Mars: "火星",
  Mercury: "水星",
  Jupiter: "木星",
  Venus: "金星",
  Saturn: "土星",
  Rahu: "ラーフ",
  Ketu: "ケトゥ",
};

const signsEn: Record<string, string> = {
  Aries: "Aries",
  Taurus: "Taurus",
  Gemini: "Gemini",
  Cancer: "Cancer",
  Leo: "Leo",
  Virgo: "Virgo",
  Libra: "Libra",
  Scorpio: "Scorpio",
  Sagittarius: "Sagittarius",
  Capricorn: "Capricorn",
  Aquarius: "Aquarius",
  Pisces: "Pisces",
};

const signsJa: Record<string, string> = {
  Aries: "牡羊座",
  Taurus: "牡牛座",
  Gemini: "双子座",
  Cancer: "蟹座",
  Leo: "獅子座",
  Virgo: "乙女座",
  Libra: "天秤座",
  Scorpio: "蠍座",
  Sagittarius: "射手座",
  Capricorn: "山羊座",
  Aquarius: "水瓶座",
  Pisces: "魚座",
};

const dignityEn: Record<string, string> = {
  Exalted: "Exalted",
  Debilitated: "Debilitated",
  "Own Sign": "Own Sign",
  Neutral: "Neutral",
};

const dignityJa: Record<string, string> = {
  Exalted: "高揚",
  Debilitated: "減衰",
  "Own Sign": "本来の座",
  Neutral: "中立",
};

const en: PdfLabels = {
  reportTitle: "Vedic Birth Chart Report",
  brand: "Jyotish Life",
  generated: "Generated",
  footer: "Confidential Birth Chart Report",
  page: "Page",
  of: "of",
  completeNatal: "Complete Natal Analysis",
  birthParticulars: "Birth Particulars",
  ascendantSummary: "Ascendant & Moon Summary",
  field: "Field",
  details: "Details",
  name: "Name",
  dateOfBirth: "Date of Birth",
  timeOfBirth: "Time of Birth",
  birthPlace: "Birth Place",
  latitude: "Latitude",
  longitude: "Longitude",
  timezone: "Timezone",
  transitDate: "Transit Reference Date",
  sunrise: "Sunrise",
  sunset: "Sunset",
  lagna: "Lagna (Ascendant)",
  ascNakshatra: "Ascendant Nakshatra",
  d9Asc: "Navamsha (D9) Ascendant",
  moonSignHouse: "Moon Sign / House",
  house: "House",
  currentMahaDasha: "Current Maha Dasha",
  lagnaChartD1: "Lagna Chart (D1)",
  rashiChartD1: "Rashi Chart — D1",
  planetaryPositionsD1: "Planetary Positions — D1",
  planet: "Planet",
  sign: "Sign",
  longitudeCol: "Longitude",
  nakshatra: "Nakshatra",
  lord: "Lord",
  dignity: "Dignity",
  retrograde: "Retrograde",
  yes: "Yes",
  no: "No",
  navamshaDivisional: "Navamsha & Divisional Charts",
  navamshaChartD9: "Navamsha Chart — D9",
  bhavaChalit: "Bhava Chalit",
  navamshaPositions: "Navamsha (D9) Positions",
  d1Sign: "D1 Sign",
  d9Sign: "D9 Sign",
  d1House: "D1 House",
  chalitHouse: "Chalit House",
  moonChartTransits: "Moon Chart & Transits",
  chandraChart: "Chandra Chart (Moon Ascendant)",
  gocharTransits: "Gochar — Transit Positions",
  transitSign: "Transit Sign",
  natalHouse: "Natal House",
  chalitCusps: "Bhava Chalit Cusps",
  cusp: "Cusp",
  vedicAspects: "Vedic Aspects (Drishti)",
  planetaryAspects: "Planetary Aspects",
  fromHouse: "From House",
  aspectsHouses: "Aspects Houses",
  noAspects: "No major aspects recorded",
  vimshottariDasha: "Vimshottari Dasha",
  dashaTimeline: "Current Dasha Periods",
  level: "Level",
  mahaDasha: "Maha Dasha",
  antarDasha: "Antar Dasha",
  start: "Start",
  end: "End",
  pada: "Pada",
  birthChart: "Birth Chart",
  none: "—",
};

const ja: PdfLabels = {
  reportTitle: "ヴェーダ出生図鑑定レポート",
  brand: "Jyotish Life",
  generated: "作成日時",
  footer: "機密 — 出生図鑑定レポート",
  page: "ページ",
  of: "/",
  completeNatal: "総合出生分析",
  birthParticulars: "出生情報",
  ascendantSummary: "ラグナ・月の概要",
  field: "項目",
  details: "内容",
  name: "お名前",
  dateOfBirth: "生年月日",
  timeOfBirth: "出生時刻",
  birthPlace: "出生地",
  latitude: "緯度",
  longitude: "経度",
  timezone: "タイムゾーン",
  transitDate: "トランジット基準日",
  sunrise: "日の出",
  sunset: "日の入り",
  lagna: "ラグナ（アセンダント）",
  ascNakshatra: "アセンダント・ナクシャトラ",
  d9Asc: "ナヴァムシャ（D9）アセンダント",
  moonSignHouse: "月星座 / ハウス",
  house: "ハウス",
  currentMahaDasha: "現在のマハー・ダシャー",
  lagnaChartD1: "ラグナチャート（D1）",
  rashiChartD1: "ラーシチャート — D1",
  planetaryPositionsD1: "惑星位置 — D1",
  planet: "惑星",
  sign: "星座",
  longitudeCol: "経度",
  nakshatra: "ナクシャトラ",
  lord: "支配星",
  dignity: "品位",
  retrograde: "逆行",
  yes: "はい",
  no: "いいえ",
  navamshaDivisional: "ナヴァムシャ・分割図",
  navamshaChartD9: "ナヴァムシャ — D9",
  bhavaChalit: "バーヴァ・チャリット",
  navamshaPositions: "ナヴァムシャ（D9）位置",
  d1Sign: "D1星座",
  d9Sign: "D9星座",
  d1House: "D1ハウス",
  chalitHouse: "チャリット",
  moonChartTransits: "チャンドラチャート・トランジット",
  chandraChart: "チャンドラチャート（月アセンダント）",
  gocharTransits: "ゴーチャー — トランジット",
  transitSign: "トランジット星座",
  natalHouse: "ネイタルハウス",
  chalitCusps: "チャリット・カスプ",
  cusp: "カスプ",
  vedicAspects: "ヴェーダ・アスペクト（ドリシュティ）",
  planetaryAspects: "惑星アスペクト",
  fromHouse: "所在ハウス",
  aspectsHouses: "アスペクト先",
  noAspects: "主要アスペクトなし",
  vimshottariDasha: "ヴィムショッタリ・ダシャー",
  dashaTimeline: "現在のダシャー期間",
  level: "レベル",
  mahaDasha: "マハー・ダシャー",
  antarDasha: "アンタル・ダシャー",
  start: "開始",
  end: "終了",
  pada: "パダ",
  birthChart: "出生図",
  none: "—",
};

export const pdfLabels: Record<PdfLanguage, PdfLabels> = { en, ja };

export function getPdfLabels(lang: PdfLanguage): PdfLabels {
  return pdfLabels[lang];
}

export function translatePlanet(lang: PdfLanguage, name: string): string {
  const map = lang === "ja" ? planetsJa : planetsEn;
  return map[name] ?? name;
}

export function translateSign(lang: PdfLanguage, sign: string): string {
  const map = lang === "ja" ? signsJa : signsEn;
  return map[sign] ?? sign;
}

export function translateDignity(lang: PdfLanguage, dignity: string): string {
  const map = lang === "ja" ? dignityJa : dignityEn;
  return map[dignity] ?? dignity;
}

export function truncateLocation(name: string, max = 90): string {
  if (name.length <= max) return name;
  return `${name.slice(0, max - 1)}…`;
}
