import type { AppLanguage } from "../i18n/language";

export type PdfLanguage = AppLanguage;

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
  Ketu: "ケートゥ",
};

const planetsHi: Record<string, string> = { Sun: "सूर्य", Moon: "चंद्र", Mars: "मंगल", Mercury: "बुध", Jupiter: "गुरु", Venus: "शुक्र", Saturn: "शनि", Rahu: "राहु", Ketu: "केतु" };
const planetsKo: Record<string, string> = { Sun: "태양", Moon: "달", Mars: "화성", Mercury: "수성", Jupiter: "목성", Venus: "금성", Saturn: "토성", Rahu: "라후", Ketu: "케투" };

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

const signsHi: Record<string, string> = { Aries: "मेष", Taurus: "वृषभ", Gemini: "मिथुन", Cancer: "कर्क", Leo: "सिंह", Virgo: "कन्या", Libra: "तुला", Scorpio: "वृश्चिक", Sagittarius: "धनु", Capricorn: "मकर", Aquarius: "कुंभ", Pisces: "मीन" };
const signsKo: Record<string, string> = { Aries: "양자리", Taurus: "황소자리", Gemini: "쌍둥이자리", Cancer: "게자리", Leo: "사자자리", Virgo: "처녀자리", Libra: "천칭자리", Scorpio: "전갈자리", Sagittarius: "궁수자리", Capricorn: "염소자리", Aquarius: "물병자리", Pisces: "물고기자리" };

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

const dignityHi: Record<string, string> = { Exalted: "उच्च", Debilitated: "नीच", "Own Sign": "स्वराशि", Neutral: "सम" };
const dignityKo: Record<string, string> = { Exalted: "고양", Debilitated: "쇠약", "Own Sign": "자기 별자리", Neutral: "중립" };

const en: PdfLabels = {
  reportTitle: "Vedic Astrology Birth Chart",
  brand: "Jyotish Life",
  generated: "Generated",
  footer: "Confidential Birth Chart Report",
  page: "Page",
  of: "of",
  completeNatal: "Birth Chart Overview",
  birthParticulars: "Birth Particulars",
  ascendantSummary: "Ascendant and Moon Summary",
  field: "Field",
  details: "Details",
  name: "Name",
  dateOfBirth: "Date of Birth",
  timeOfBirth: "Time of Birth",
  birthPlace: "Birth Place",
  latitude: "Latitude",
  longitude: "Longitude",
  timezone: "UTC Offset at Birth",
  transitDate: "Transit Reference Date",
  sunrise: "Sunrise",
  sunset: "Sunset",
  lagna: "Lagna (Ascendant)",
  ascNakshatra: "Ascendant Nakshatra",
  d9Asc: "Navamsha (D9) Ascendant",
  moonSignHouse: "Moon Sign / House",
  house: "House",
  currentMahaDasha: "Current Mahadasha",
  lagnaChartD1: "Lagna Chart (D1)",
  rashiChartD1: "Rashi Chart (D1)",
  planetaryPositionsD1: "Planetary Positions (D1 Rashi Chart)",
  planet: "Planet",
  sign: "Sign",
  longitudeCol: "Longitude",
  nakshatra: "Nakshatra",
  lord: "Lord",
  dignity: "Dignity",
  retrograde: "Retrograde",
  yes: "Yes",
  no: "No",
  navamshaDivisional: "Navamsha (D9) Chart",
  navamshaChartD9: "Navamsha Chart (D9)",
  bhavaChalit: "Bhava Chalit",
  navamshaPositions: "Navamsha (D9) Positions",
  d1Sign: "D1 Sign",
  d9Sign: "D9 Sign",
  d1House: "D1 House",
  chalitHouse: "Chalit House",
  moonChartTransits: "Moon Chart and Transits",
  chandraChart: "Chandra Lagna (Moon Chart)",
  gocharTransits: "Gochar (Transit) Positions",
  transitSign: "Transit Sign",
  natalHouse: "Natal House",
  chalitCusps: "Bhava Chalit Cusps",
  cusp: "Cusp",
  vedicAspects: "Vedic Aspects (Drishti)",
  planetaryAspects: "Planetary Aspects",
  fromHouse: "From House",
  aspectsHouses: "Aspected Houses",
  noAspects: "No aspect data available",
  vimshottariDasha: "Vimshottari Dasha",
  dashaTimeline: "Current Mahadasha and Antardasha",
  level: "Level",
  mahaDasha: "Mahadasha",
  antarDasha: "Antardasha",
  start: "Start",
  end: "End",
  pada: "Pada",
  birthChart: "Birth Chart",
  none: "—",
};

const ja: PdfLabels = {
  reportTitle: "インド占星術 出生図鑑定レポート",
  brand: "Jyotish Life",
  generated: "作成日時",
  footer: "機密 — 出生図鑑定レポート",
  page: "ページ",
  of: "／",
  completeNatal: "出生図総合分析",
  birthParticulars: "出生情報",
  ascendantSummary: "ラグナと月の概要",
  field: "項目",
  details: "内容",
  name: "お名前",
  dateOfBirth: "生年月日",
  timeOfBirth: "出生時刻",
  birthPlace: "出生地",
  latitude: "緯度",
  longitude: "経度",
  timezone: "出生時のUTCオフセット",
  transitDate: "トランジット基準日",
  sunrise: "日の出",
  sunset: "日の入り",
  lagna: "ラグナ（アセンダント）",
  ascNakshatra: "ラグナのナクシャトラ",
  d9Asc: "ナヴァムシャ（D9）のラグナ",
  moonSignHouse: "月の星座／ハウス",
  house: "ハウス",
  currentMahaDasha: "現在のマハーダシャー",
  lagnaChartD1: "ラグナ・チャート（D1）",
  rashiChartD1: "ラーシ・チャート（D1）",
  planetaryPositionsD1: "惑星の位置（D1）",
  planet: "惑星",
  sign: "星座",
  longitudeCol: "経度",
  nakshatra: "ナクシャトラ",
  lord: "支配星",
  dignity: "品位",
  retrograde: "逆行",
  yes: "はい",
  no: "いいえ",
  navamshaDivisional: "ナヴァムシャと分割図",
  navamshaChartD9: "ナヴァムシャ（D9）",
  bhavaChalit: "バーヴァ・チャリット",
  navamshaPositions: "ナヴァムシャ（D9）での位置",
  d1Sign: "D1の星座",
  d9Sign: "D9の星座",
  d1House: "D1のハウス",
  chalitHouse: "チャリット・ハウス",
  moonChartTransits: "チャンドラ・チャートとトランジット",
  chandraChart: "チャンドラ・チャート（月ラグナ）",
  gocharTransits: "ゴーチャー（トランジット）",
  transitSign: "トランジット時の星座",
  natalHouse: "出生図のハウス",
  chalitCusps: "バーヴァ・チャリットのカスプ",
  cusp: "カスプ",
  vedicAspects: "ヴェーダ占星術のアスペクト（ドリシュティ）",
  planetaryAspects: "惑星のアスペクト",
  fromHouse: "位置するハウス",
  aspectsHouses: "アスペクト先",
  noAspects: "主要アスペクトなし",
  vimshottariDasha: "ヴィムショッタリダシャー",
  dashaTimeline: "現在のダシャー期間",
  level: "区分",
  mahaDasha: "マハーダシャー",
  antarDasha: "アンタルダシャー",
  start: "開始",
  end: "終了",
  pada: "パダ",
  birthChart: "出生図",
  none: "—",
};

const hi: PdfLabels = {
  reportTitle: "वैदिक ज्योतिषीय जन्म-कुंडली", brand: "Jyotish Life", generated: "तैयार किया गया", footer: "गोपनीय जन्म-कुंडली रिपोर्ट", page: "पृष्ठ", of: "में से",
  completeNatal: "संपूर्ण जन्म-कुंडली विश्लेषण", birthParticulars: "जन्म विवरण", ascendantSummary: "लग्न और चंद्र सारांश", field: "विषय", details: "विवरण",
  name: "नाम", dateOfBirth: "जन्म तिथि", timeOfBirth: "जन्म समय", birthPlace: "जन्म स्थान", latitude: "अक्षांश", longitude: "देशांतर", timezone: "जन्म के समय UTC अंतर",
  transitDate: "गोचर संदर्भ तिथि", sunrise: "सूर्योदय", sunset: "सूर्यास्त", lagna: "लग्न", ascNakshatra: "लग्न नक्षत्र", d9Asc: "नवमांश (D9) लग्न",
  moonSignHouse: "चंद्र राशि/भाव", house: "भाव", currentMahaDasha: "वर्तमान महादशा", lagnaChartD1: "लग्न-कुंडली (D1)", rashiChartD1: "राशि-कुंडली (D1)",
  planetaryPositionsD1: "ग्रह-स्थितियाँ (D1)", planet: "ग्रह", sign: "राशि", longitudeCol: "राश्यंश", nakshatra: "नक्षत्र", lord: "स्वामी", dignity: "राशिगत स्थिति",
  retrograde: "वक्री", yes: "हाँ", no: "नहीं", navamshaDivisional: "नवमांश एवं अन्य वर्ग-कुंडलियाँ", navamshaChartD9: "नवमांश-कुंडली (D9)", bhavaChalit: "भाव-चलित",
  navamshaPositions: "नवमांश (D9) स्थितियाँ", d1Sign: "D1 राशि", d9Sign: "D9 राशि", d1House: "D1 भाव", chalitHouse: "चलित भाव", moonChartTransits: "चंद्र-कुंडली और गोचर",
  chandraChart: "चंद्र-कुंडली", gocharTransits: "गोचर ग्रह-स्थितियाँ", transitSign: "गोचर राशि", natalHouse: "जन्म भाव", chalitCusps: "भाव-चलित भाव-मध्य", cusp: "भाव-मध्य",
  vedicAspects: "वैदिक दृष्टियाँ", planetaryAspects: "ग्रह-दृष्टियाँ", fromHouse: "स्थित भाव", aspectsHouses: "जिन भावों पर दृष्टि है", noAspects: "कोई दृष्टि-जानकारी उपलब्ध नहीं",
  vimshottariDasha: "विंशोत्तरी दशा", dashaTimeline: "वर्तमान महादशा और अंतर्दशा", level: "स्तर", mahaDasha: "महादशा", antarDasha: "अंतर्दशा", start: "आरंभ", end: "समाप्ति",
  pada: "पाद", birthChart: "जन्म-कुंडली", none: "—",
};

const ko: PdfLabels = {
  reportTitle: "베다 점성술 출생 차트 보고서", brand: "Jyotish Life", generated: "생성일", footer: "기밀 — 출생 차트 보고서", page: "페이지", of: "/",
  completeNatal: "종합 출생 차트 분석", birthParticulars: "출생 정보", ascendantSummary: "라그나와 달 요약", field: "항목", details: "내용",
  name: "이름", dateOfBirth: "생년월일", timeOfBirth: "출생 시각", birthPlace: "출생지", latitude: "위도", longitude: "경도", timezone: "출생 시 UTC 오프셋",
  transitDate: "트랜짓 기준일", sunrise: "일출", sunset: "일몰", lagna: "라그나(상승궁)", ascNakshatra: "상승궁의 낙샤트라", d9Asc: "나바암샤(D9)의 상승궁",
  moonSignHouse: "달의 별자리/하우스", house: "하우스", currentMahaDasha: "현재 마하다샤", lagnaChartD1: "라그나 차트(D1)", rashiChartD1: "라시 차트(D1)",
  planetaryPositionsD1: "행성 위치(D1)", planet: "행성", sign: "별자리", longitudeCol: "경도", nakshatra: "낙샤트라", lord: "지배 행성", dignity: "품위",
  retrograde: "역행", yes: "예", no: "아니요", navamshaDivisional: "나바암샤 및 분할 차트", navamshaChartD9: "나바암샤 차트(D9)", bhavaChalit: "바바 찰리트",
  navamshaPositions: "나바암샤(D9) 위치", d1Sign: "D1 별자리", d9Sign: "D9 별자리", d1House: "D1 하우스", chalitHouse: "찰리트 하우스", moonChartTransits: "달 차트 및 트랜짓",
  chandraChart: "찬드라 차트(달 상승궁)", gocharTransits: "고차라 행성 위치", transitSign: "트랜짓 별자리", natalHouse: "출생 차트의 하우스", chalitCusps: "바바 찰리트 커스프", cusp: "커스프",
  vedicAspects: "베다식 드리슈티", planetaryAspects: "행성 드리슈티", fromHouse: "기준 하우스", aspectsHouses: "드리슈티 대상 하우스", noAspects: "주요 드리슈티 없음",
  vimshottariDasha: "빔쇼타리 다샤", dashaTimeline: "현재 다샤 기간", level: "단계", mahaDasha: "마하다샤", antarDasha: "안타르다샤", start: "시작", end: "종료",
  pada: "파다", birthChart: "출생 차트", none: "—",
};

export const pdfLabels: Record<PdfLanguage, PdfLabels> = { en, hi, ja, ko };

export function getPdfLabels(lang: PdfLanguage): PdfLabels {
  return pdfLabels[lang];
}

export function translatePlanet(lang: PdfLanguage, name: string): string {
  const map = { en: planetsEn, hi: planetsHi, ja: planetsJa, ko: planetsKo }[lang];
  return map[name] ?? name;
}

export function translateSign(lang: PdfLanguage, sign: string): string {
  const map = { en: signsEn, hi: signsHi, ja: signsJa, ko: signsKo }[lang];
  return map[sign] ?? sign;
}

export function translateDignity(lang: PdfLanguage, dignity: string): string {
  const map = { en: dignityEn, hi: dignityHi, ja: dignityJa, ko: dignityKo }[lang];
  return map[dignity] ?? dignity;
}

export function truncateLocation(name: string, max = 90): string {
  if (name.length <= max) return name;
  return `${name.slice(0, max - 1)}…`;
}
