import { jsPDF } from "jspdf";
import type { ChartData, ChartFormData } from "../chart-types";
import { registerLocaleFont } from "./font-loader";
import { isRetrograde } from "./helpers";
import {
  loadImageDataUrl,
  nakshatraImagePath,
  rashiImagePath,
} from "./pdf-images";
import {
  DASHA_DISCLAIMER,
  DASHA_NOTE,
  getFunctionalPlanets,
  getHouseTheme,
  getLagnaReportText,
  getMoonNakshatraText,
  getNakshatraAttributes,
  getNaturalPlanets,
  SAMPLE_DISCLAIMER,
  SAMPLE_SOURCE,
} from "./report-data";
import {
  buildAspectSummary,
  chartPlanetLabel,
  dashaAge,
  formatAyanamsha,
  formatBirthDate,
  formatBirthTime,
  formatCoordPair,
  formatDashaDate,
  formatSampleDms,
  formatTimezoneOffset,
  getAscendantLord,
  isWaxingMoon,
  joinPlanets,
  planetsInHouse,
  signForHouse,
} from "./sample-helpers";
import { SAMPLE_COLORS, SAMPLE_PAGE } from "./sample-styles";
import {
  getPdfLabels,
  translatePlanet,
  translateSign,
  type PdfLanguage,
} from "./i18n";
import { setActivePdfFont } from "./pdf-font";
import { drawPdfText, splitPdfText } from "./pdf-text";

interface SampleReportInput {
  name: string;
  locationName: string;
  formData: ChartFormData;
  chartData: ChartData;
  lang?: PdfLanguage;
}

const HOUSE_CENTERS: Record<number, { x: number; y: number }> = {
  1: { x: 0.5, y: 0.25 },
  2: { x: 0.25, y: 0.125 },
  3: { x: 0.125, y: 0.25 },
  4: { x: 0.25, y: 0.5 },
  5: { x: 0.125, y: 0.75 },
  6: { x: 0.25, y: 0.875 },
  7: { x: 0.5, y: 0.75 },
  8: { x: 0.75, y: 0.875 },
  9: { x: 0.875, y: 0.75 },
  10: { x: 0.75, y: 0.5 },
  11: { x: 0.875, y: 0.25 },
  12: { x: 0.75, y: 0.125 },
};

const SAMPLE_TERMS: Record<"hi" | "ko", Record<string, string>> = {
  hi: {
    "Vedic Astrology Birth Chart": "वैदिक ज्योतिषीय जन्म-कुंडली", "Rashi Chart (North Indian)": "राशि-कुंडली (उत्तर भारतीय)",
    "Planetary Positions (D1 Rashi Chart)": "ग्रह स्थिति (D1 राशि-कुंडली)", Planet: "ग्रह", "Sign · Longitude": "राशि · राश्यंश", Nakshatra: "नक्षत्र",
    "House Significations and Planets": "भावार्थ और ग्रह", House: "भाव", Theme: "भावार्थ", Sign: "राशि", Planets: "ग्रह",
    "Lagna and Moon Nakshatra": "लग्न (राशि) · चंद्र नक्षत्र", Lagna: "लग्न", "Lagna Lord": "लग्नेश", "Moon Nakshatra": "चंद्र नक्षत्र",
    "Natural and Functional Benefics and Malefics": "नैसर्गिक और लग्नानुसार शुभ/अशुभ ग्रह", "Natural Benefics": "नैसर्गिक शुभ ग्रह",
    "Natural Malefics": "नैसर्गिक अशुभ ग्रह", Neutral: "तटस्थ", "Functional Benefics": "लग्नानुसार शुभ ग्रह", "Functional Malefics": "लग्नानुसार अशुभ ग्रह",
    "Vimshottari Dasha (Mahadasha · Antardasha)": "विंशोत्तरी दशा (महादशा · अंतर्दशा)", "Antardasha Lord": "अंतर्दशा स्वामी", "Age at Start": "आरंभ के समय आयु", "Start Date": "आरंभ तिथि",
    "End Date": "समाप्ति तिथि", Mahadasha: "महादशा", Antardasha: "अंतर्दशा", Name: "नाम", "Date of Birth": "जन्म तिथि", "Time of Birth": "जन्म समय",
    "Birth Place": "जन्म स्थान", "UTC Offset at Birth": "जन्म के समय UTC अंतर", "Ayanamsha (Lahiri)": "अयनांश (लाहिड़ी)", "Lagna (ASC)": "लग्न", ASC: "लग्न",
  },
  ko: {
    "Vedic Astrology Birth Chart": "베다 점성술 출생 차트", "Rashi Chart (North Indian)": "라시 차트(북인도식)",
    "Planetary Positions (D1 Rashi Chart)": "라시 차트(출생 차트) 상세", Planet: "행성", "Sign · Longitude": "별자리·경도", Nakshatra: "낙샤트라",
    "House Significations and Planets": "하우스의 의미와 행성", House: "하우스", Theme: "의미", Sign: "별자리", Planets: "행성",
    "Lagna and Moon Nakshatra": "라그나(별자리)·낙샤트라", Lagna: "라그나", "Lagna Lord": "라그나의 지배 행성", "Moon Nakshatra": "달의 낙샤트라",
    "Natural and Functional Benefics and Malefics": "자연적·기능적 길성/흉성", "Natural Benefics": "자연적 길성", "Natural Malefics": "자연적 흉성",
    Neutral: "중립", "Functional Benefics": "기능적 길성", "Functional Malefics": "기능적 흉성",
    "Vimshottari Dasha (Mahadasha · Antardasha)": "빔쇼타리 다샤(마하·안타르)", "Antardasha Lord": "안타르다샤 지배 행성", "Age at Start": "시작 나이", "Start Date": "시작일",
    "End Date": "종료일", Mahadasha: "마하다샤", Antardasha: "안타르다샤", Name: "이름", "Date of Birth": "생년월일", "Time of Birth": "출생 시각",
    "Birth Place": "출생지", "UTC Offset at Birth": "출생 시 UTC 오프셋", "Ayanamsha (Lahiri)": "아야남샤(라히리)", "Lagna (ASC)": "라그나(ASC)", ASC: "라그나",
  },
};

function t(lang: PdfLanguage, en: string, ja: string) {
  if (lang === "ja") return ja;
  if (lang === "en") return en;
  return SAMPLE_TERMS[lang][en] ?? en;
}

function contentWidth() {
  return SAMPLE_PAGE.contentRight - SAMPLE_PAGE.margin;
}

function fillPageBg(doc: jsPDF) {
  doc.setFillColor(...SAMPLE_COLORS.pageBg);
  doc.rect(0, 0, SAMPLE_PAGE.width, SAMPLE_PAGE.height, "F");
}

function ensureSpace(doc: jsPDF, y: number, needed: number): number {
  if (y + needed <= SAMPLE_PAGE.contentBottom) return y;
  doc.addPage();
  fillPageBg(doc);
  return SAMPLE_PAGE.margin;
}

/** Draw localized text, using Canvas-shaped raster runs for Hindi. */
function drawText(
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  opts?: {
    size?: number;
    color?: [number, number, number];
    align?: "left" | "center" | "right";
    bold?: boolean;
  },
) {
  drawPdfText(doc, text, x, y, {
    size: opts?.size ?? 8,
    color: opts?.color ?? SAMPLE_COLORS.text,
    align: opts?.align ?? "left",
    bold: opts?.bold,
  });
}

function drawWrapped(
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  fontSize: number,
  lineGap: number,
  color: [number, number, number] = SAMPLE_COLORS.text,
): number {
  const lines = splitPdfText(doc, text, maxWidth, fontSize);
  let cursorY = y;
  lines.forEach((line) => {
    if (cursorY > SAMPLE_PAGE.contentBottom) {
      doc.addPage();
      fillPageBg(doc);
      cursorY = SAMPLE_PAGE.margin;
    }
    drawText(doc, line, x, cursorY, { size: fontSize, color });
    cursorY += lineGap;
  });
  return cursorY;
}

function letterSpace(text: string) {
  return text.split("").join(" ");
}

function drawMainTitle(doc: jsPDF, lang: PdfLanguage, y: number) {
  const localizedTitle = t(lang, "Vedic Astrology Birth Chart", "ヴェーダ占星術出生図");
  drawText(doc, lang === "ja" ? letterSpace(localizedTitle) : localizedTitle, SAMPLE_PAGE.width / 2, y, {
    size: 13.3,
    bold: true,
    align: "center",
    color: SAMPLE_COLORS.text,
  });

  const subtitle = {
    en: "LAHIRI SIDEREAL NATAL CHART",
    hi: "लाहिड़ी निरयन जन्म-कुंडली",
    ja: "ラヒリ式サイデリアル出生図",
    ko: "라히리 항성황도 출생 차트",
  }[lang];
  drawText(doc, lang === "en" ? letterSpace(subtitle) : subtitle, SAMPLE_PAGE.width / 2, y + 14, {
    size: 6.3,
    align: "center",
    color: SAMPLE_COLORS.muted,
  });

  // Short terracotta rule (sample ~52pt wide under subtitle area)
  const ruleW = 52;
  doc.setDrawColor(...SAMPLE_COLORS.accent);
  doc.setLineWidth(1.2);
  doc.line(
    SAMPLE_PAGE.width / 2 - ruleW / 2,
    y + 24,
    SAMPLE_PAGE.width / 2 + ruleW / 2,
    y + 24,
  );
  return y + 43;
}

function drawDarkBar(doc: jsPDF, title: string, y: number): number {
  const h = 22.5;
  doc.setFillColor(...SAMPLE_COLORS.headerBar);
  doc.rect(SAMPLE_PAGE.margin, y, contentWidth(), h, "F");

  // Small terracotta square accent (sample has a tiny mark on the left)
  doc.setFillColor(...SAMPLE_COLORS.accent);
  doc.rect(SAMPLE_PAGE.margin + 8, y + 9.5, 3.5, 3.5, "F");

  drawText(doc, title, SAMPLE_PAGE.width / 2, y + h / 2 + 3, {
    size: 9,
    bold: true,
    align: "center",
    color: SAMPLE_COLORS.white,
  });
  return y + h + 8;
}

function drawSampleChart(
  doc: jsPDF,
  x: number,
  y: number,
  size: number,
  chartData: ChartData,
  lang: PdfLanguage,
) {
  const peach = SAMPLE_COLORS.chartPeach;
  const sage = SAMPLE_COLORS.chartSage;
  const mid = size / 2;

  doc.setFillColor(...SAMPLE_COLORS.white);
  doc.rect(x, y, size, size, "F");

  // Side diamonds (sage) — houses 4 & 10 bands in sample
  doc.setFillColor(...sage);
  doc.triangle(x + mid, y, x + size, y + mid, x + mid, y + size, "F");
  doc.triangle(x + mid, y, x, y + mid, x + mid, y + size, "F");

  // Opposite pair (peach) — houses 1 & 7 orientation in sample
  doc.setFillColor(...peach);
  doc.triangle(x, y + mid, x + mid, y, x + mid, y + size, "F");
  doc.triangle(x + size, y + mid, x + mid, y, x + mid, y + size, "F");

  // Re-paint center correctly: sample has peach for 1/7 diamonds and sage for 4/10
  // Clearer approach matching sample fills:
  doc.setFillColor(...SAMPLE_COLORS.white);
  doc.rect(x, y, size, size, "F");
  doc.setFillColor(...peach);
  // top diamond (house 1 area) + bottom (house 7)
  doc.triangle(x + mid, y, x + size, y + mid, x, y + mid, "F");
  doc.triangle(x + mid, y + size, x + size, y + mid, x, y + mid, "F");
  doc.setFillColor(...sage);
  // left (house 4) + right (house 10)
  doc.triangle(x, y + mid, x + mid, y, x + mid, y + size, "F");
  doc.triangle(x + size, y + mid, x + mid, y, x + mid, y + size, "F");

  doc.setDrawColor(...SAMPLE_COLORS.chartLine);
  doc.setLineWidth(0.9);
  doc.rect(x, y, size, size);
  doc.line(x, y, x + size, y + size);
  doc.line(x, y + size, x + size, y);
  doc.line(x + mid, y, x + size, y + mid);
  doc.line(x + size, y + mid, x + mid, y + size);
  doc.line(x + mid, y + size, x, y + mid);
  doc.line(x, y + mid, x + mid, y);

  for (let house = 1; house <= 12; house += 1) {
    const center = HOUSE_CENTERS[house];
    const cx = x + center.x * size;
    const cy = y + center.y * size;
    const signName = translateSign(lang, signForHouse(chartData.ascendant_sign, house));

    // House numbers in terracotta (sample)
    drawText(doc, String(house), cx, cy - 14, {
      size: 5.2,
      align: "center",
      color: SAMPLE_COLORS.accent,
      bold: true,
    });

    drawText(doc, signName, cx, cy - 5, {
      size: 6.3,
      align: "center",
      color: SAMPLE_COLORS.text,
      bold: true,
    });

    const housePlanets = chartData.planets.filter((p) => p.d1_house === house);
    const planetLines = housePlanets.map((p) => {
      if (lang === "ja" && p.name === "Rahu") return "羅睺";
      if (lang === "ja" && p.name === "Ketu") return "計都";
      return chartPlanetLabel(p.name, lang, isRetrograde(p));
    });
    // Join multiple planets with a locale-appropriate middle dot.
    const joined =
      house === 1
        ? [t(lang, "ASC", "ASC"), ...planetLines].join(lang === "ja" ? "・" : "·")
        : planetLines.join(lang === "ja" ? "・" : "·");

    if (joined) {
      const lines = splitPdfText(doc, joined, size * 0.2, 5.2);
      lines.slice(0, 2).forEach((line, i) => {
        drawText(doc, line, cx, cy + 5 + i * 7, {
          size: 5.2,
          align: "center",
          color: SAMPLE_COLORS.text,
        });
      });
    }
  }

  drawText(
    doc,
    t(lang, "Rashi Chart (North Indian)", "ラーシ・チャート（北インド式）"),
    x + size / 2,
    y + size + 14,
    { size: 6.3, align: "center", color: SAMPLE_COLORS.muted },
  );
}

function drawBirthInfoTable(
  doc: jsPDF,
  y: number,
  rows: [string, string][],
) {
  const { x, labelW, valueX, rowH } = SAMPLE_PAGE.birth;
  const valueW = SAMPLE_PAGE.contentRight - valueX;
  const totalW = SAMPLE_PAGE.contentRight - x;

  // Outer fill only — no stroked box (sample tables have no vertical borders)
  doc.setFillColor(...SAMPLE_COLORS.white);
  doc.rect(x, y, totalW, rowH * rows.length, "F");

  rows.forEach(([label, value], index) => {
    const top = y + index * rowH;
    doc.setFillColor(...SAMPLE_COLORS.birthLabelBg);
    doc.rect(x, top, labelW, rowH, "F");
    doc.setFillColor(...SAMPLE_COLORS.birthValueBg);
    doc.rect(x + labelW, top, valueW, rowH, "F");

    // Horizontal rule only
    doc.setDrawColor(...SAMPLE_COLORS.border);
    doc.setLineWidth(0.5);
    doc.line(x, top + rowH, x + totalW, top + rowH);

    drawText(doc, label, x + 5, top + 12.5, {
      size: 6.9,
      color: SAMPLE_COLORS.muted,
    });
    const clipped = splitPdfText(doc, value, valueW - 8, 6.9)[0] ?? value;
    drawText(doc, clipped, valueX + 2, top + 12.5, {
      size: 6.9,
      color: SAMPLE_COLORS.text,
    });
  });

  return y + rowH * rows.length;
}

function drawTanHeader(
  doc: jsPDF,
  y: number,
  cols: { label: string; x: number }[],
): number {
  const h = 19;
  const x0 = SAMPLE_PAGE.margin;
  const w = contentWidth();
  doc.setFillColor(...SAMPLE_COLORS.tableHeader);
  doc.rect(x0, y, w, h, "F");

  cols.forEach((col) => {
    drawText(doc, col.label, col.x, y + 13, {
      size: 6.9,
      bold: true,
      color: SAMPLE_COLORS.text,
    });
  });
  return y + h;
}

function drawZebraRow(
  doc: jsPDF,
  top: number,
  height: number,
  alt: boolean,
) {
  // Fill only — never stroke the rect (avoids vertical table borders)
  doc.setFillColor(...(alt ? SAMPLE_COLORS.tableRowAlt : SAMPLE_COLORS.white));
  doc.rect(SAMPLE_PAGE.margin, top, contentWidth(), height, "F");
  doc.setDrawColor(...SAMPLE_COLORS.border);
  doc.setLineWidth(0.4);
  doc.line(SAMPLE_PAGE.margin, top + height, SAMPLE_PAGE.contentRight, top + height);
}

function drawPlanetTable(doc: jsPDF, y: number, chartData: ChartData, lang: PdfLanguage) {
  y = drawDarkBar(
    doc,
    t(lang, "Planetary Positions (D1 Rashi Chart)", "惑星位置（D1ラーシ・チャート）"),
    y,
  );

  const cols = SAMPLE_PAGE.planetCols;
  y = drawTanHeader(doc, y, [
    { label: t(lang, "Planet", "惑星"), x: cols.planet },
    { label: t(lang, "Sign · Longitude", "サイン・経度"), x: cols.sign },
    { label: t(lang, "Nakshatra", "ナクシャトラ"), x: cols.nak },
  ]);

  const rows: [string, string, string][] = [
    [
      t(lang, "ASC", "ASC"),
      `${translateSign(lang, chartData.ascendant_sign)} ${formatSampleDms(chartData.ascendant_longitude)}`,
      nakshatrasName(chartData.ascendant_nakshatra, lang),
    ],
    ...chartData.planets.map(
      (p): [string, string, string] => [
        chartPlanetLabel(p.name, lang, isRetrograde(p)),
        `${translateSign(lang, p.sign)} ${formatSampleDms(p.longitude)}`,
        nakshatrasName(p.nakshatra, lang),
      ],
    ),
  ];

  const rowH = 19;
  rows.forEach((row, index) => {
    const top = y + index * rowH;
    drawZebraRow(doc, top, rowH, index % 2 === 1);
    drawText(doc, row[0], cols.planet, top + 13, { size: 6.9 });
    drawText(doc, row[1], cols.sign, top + 13, { size: 6.9 });
    drawText(doc, row[2], cols.nak, top + 13, { size: 6.9 });
  });

  return y + rows.length * rowH + 10;
}

function drawHouseThemeRows(
  doc: jsPDF,
  startY: number,
  chartData: ChartData,
  lang: PdfLanguage,
  fromHouse: number,
  toHouse: number,
  withHeader: boolean,
) {
  let y = startY;
  const cols = SAMPLE_PAGE.houseCols;

  if (withHeader) {
    y = drawDarkBar(
      doc,
      t(lang, "House Significations and Planets", "ハウスの象意と惑星"),
      y,
    );
    y = drawTanHeader(doc, y, [
      { label: t(lang, "House", "ハウス"), x: cols.house },
      { label: t(lang, "Theme", "テーマ"), x: cols.theme },
      { label: t(lang, "Sign", "星座"), x: cols.sign },
      { label: t(lang, "Planets", "惑星"), x: cols.planet },
    ]);
  }

  for (let house = fromHouse; house <= toHouse; house += 1) {
    const theme = getHouseTheme(house, lang);
    const houseLabel = theme.houseLabel;
    const themeText = theme.theme;
    const sign = translateSign(lang, signForHouse(chartData.ascendant_sign, house));
    const planets = planetsInHouse(chartData, house, lang);

    const houseLines = splitPdfText(doc, houseLabel, 95, 6.9);
    const themeLines = splitPdfText(doc, themeText, 345, 6.9);
    const signLines = splitPdfText(doc, sign, 22, 6.9);
    const planetLines = splitPdfText(doc, planets, 40, 6.9);
    const lineCount = Math.max(houseLines.length, themeLines.length, signLines.length, planetLines.length, 1);
    const rowH = Math.max(24, lineCount * 11.5 + 6);

    y = ensureSpace(doc, y, rowH + 2);
    drawZebraRow(doc, y, rowH, house % 2 === 0);

    houseLines.forEach((line, i) =>
      drawText(doc, line, cols.house, y + 11 + i * 11.5, { size: 6.9 }),
    );
    themeLines.forEach((line, i) =>
      drawText(doc, line, cols.theme, y + 11 + i * 11.5, { size: 6.9 }),
    );
    signLines.forEach((line, i) =>
      drawText(doc, line, cols.sign, y + 11 + i * 11.5, { size: 6.9 }),
    );
    planetLines.forEach((line, i) =>
      drawText(doc, line, cols.planet, y + 11 + i * 11.5, { size: 6.9 }),
    );
    y += rowH;
  }

  return y;
}

function nakshatrasName(nak: string, lang: PdfLanguage) {
  const jaMap: Record<string, string> = {
    Ashwini: "アシュヴィニー",
    Bharani: "バラニー",
    Krittika: "クリッティカー",
    Rohini: "ローヒニー",
    Mrigashira: "ムリガシーラ",
    Ardra: "アールドラー",
    Punarvasu: "プナルヴァス",
    Pushya: "プシャ",
    Ashlesha: "アーシュレーシャー",
    Magha: "マガー",
    "Purva Phalguni": "プールヴァ・ファルグニー",
    "Uttara Phalguni": "ウッタラ・ファルグニー",
    Hasta: "ハスタ",
    Chitra: "チトラー",
    Swati: "スヴァーティー",
    Vishakha: "ヴィシャーカ",
    Anuradha: "アヌラーダー",
    Jyeshtha: "ジェーシュター",
    Mula: "ムーラ",
    "Purva Ashadha": "プールヴァーシャーダー",
    "Uttara Ashadha": "ウッタラーシャーダー",
    Shravana: "シュラヴァナ",
    Dhanishta: "ダニシュター",
    Shatabhisha: "シャタビシャー",
    "Purva Bhadrapada": "プールヴァ・バードラパダー",
    "Uttara Bhadrapada": "ウッタラ・バードラパダー",
    Revati: "レーヴァティー",
  };
  const hiMap: Record<string, string> = {
    Ashwini: "अश्विनी", Bharani: "भरणी", Krittika: "कृत्तिका", Rohini: "रोहिणी", Mrigashira: "मृगशिरा", Ardra: "आर्द्रा", Punarvasu: "पुनर्वसु",
    Pushya: "पुष्य", Ashlesha: "आश्लेषा", Magha: "मघा", "Purva Phalguni": "पूर्वाफाल्गुनी", "Uttara Phalguni": "उत्तराफाल्गुनी", Hasta: "हस्त",
    Chitra: "चित्रा", Swati: "स्वाती", Vishakha: "विशाखा", Anuradha: "अनुराधा", Jyeshtha: "ज्येष्ठा", Mula: "मूल", "Purva Ashadha": "पूर्वाषाढ़ा",
    "Uttara Ashadha": "उत्तराषाढ़ा", Shravana: "श्रवण", Dhanishta: "धनिष्ठा", Shatabhisha: "शतभिषा", "Purva Bhadrapada": "पूर्वाभाद्रपद",
    "Uttara Bhadrapada": "उत्तराभाद्रपद", Revati: "रेवती",
  };
  const koMap: Record<string, string> = {
    Ashwini: "아슈비니", Bharani: "바라니", Krittika: "크리티카", Rohini: "로히니", Mrigashira: "므리가시라", Ardra: "아르드라", Punarvasu: "푸나르바수",
    Pushya: "푸샤", Ashlesha: "아슐레샤", Magha: "마가", "Purva Phalguni": "푸르바 팔구니", "Uttara Phalguni": "우타라 팔구니", Hasta: "하스타",
    Chitra: "치트라", Swati: "스와티", Vishakha: "비샤카", Anuradha: "아누라다", Jyeshtha: "제슈타", Mula: "물라", "Purva Ashadha": "푸르바 아샤다",
    "Uttara Ashadha": "우타라 아샤다", Shravana: "슈라바나", Dhanishta: "다니슈타", Shatabhisha: "샤타비샤", "Purva Bhadrapada": "푸르바 바드라파다",
    "Uttara Bhadrapada": "우타라 바드라파다", Revati: "레바티",
  };
  const maps = { en: {} as Record<string, string>, hi: hiMap, ja: jaMap, ko: koMap };
  return maps[lang][nak] ?? nak;
}

async function drawEmbeddedImage(
  doc: jsPDF,
  path: string | undefined,
  x: number,
  y: number,
  w: number,
  h: number,
) {
  if (!path) return;
  const data = await loadImageDataUrl(path);
  if (!data) return;
  doc.addImage(data, "PNG", x, y, w, h);
}

async function drawLagnaNakshatraPage(
  doc: jsPDF,
  chartData: ChartData,
  lang: PdfLanguage,
) {
  let y = SAMPLE_PAGE.anchors.page2RowsTop;
  y = drawHouseThemeRows(doc, y, chartData, lang, 7, 12, false);
  y = Math.max(y + 10, SAMPLE_PAGE.anchors.lagnaSectionTop);

  y = ensureSpace(doc, y, 150);
  y = drawDarkBar(
    doc,
    t(lang, "Lagna and Moon Nakshatra", "ラグナと月のナクシャトラ"),
    y,
  );

  y =
    drawWrapped(
      doc,
      SAMPLE_DISCLAIMER[lang],
      SAMPLE_PAGE.margin,
      y,
      contentWidth(),
      7.5,
      12.7,
    ) + 14;

  // Lagna icon + title (sample: image ~40pt left of title)
  const lagnaImg = rashiImagePath(chartData.ascendant_sign);
  await drawEmbeddedImage(doc, lagnaImg, SAMPLE_PAGE.margin + 8, y - 4, 40, 42);

  const lagnaTitle =
    lang === "ja"
      ? `ラグナ：${translateSign(lang, chartData.ascendant_sign)}（${chartData.ascendant_sign}）`
      : `${t(lang, "Lagna", "ラグナ")}: ${translateSign(lang, chartData.ascendant_sign)}`;
  drawText(doc, lagnaTitle, SAMPLE_PAGE.margin + 58, y + 8, {
    size: 7.5,
    bold: true,
    color: SAMPLE_COLORS.accent,
  });

  y =
    drawWrapped(
      doc,
      getLagnaReportText(chartData.ascendant_sign, lang),
      SAMPLE_PAGE.margin + 58,
      y + 20,
      contentWidth() - 58,
      7.5,
      12.7,
    ) + 12;

  const ascLord = getAscendantLord(chartData);
  const lordPlanet = chartData.planets.find((p) => p.name === ascLord);
  if (lordPlanet) {
    const lordLine = lang === "ja"
      ? `${t(lang, "Lagna Lord", "ラグナ支配星")}：${translatePlanet(lang, ascLord)}（${translateSign(lang, lordPlanet.sign)} ${formatSampleDms(lordPlanet.longitude)}／${nakshatrasName(lordPlanet.nakshatra, lang)}）`
      : lang === "ko"
        ? `${t(lang, "Lagna Lord", "ラグナ支配星")}: ${translatePlanet(lang, ascLord)}(${translateSign(lang, lordPlanet.sign)} ${formatSampleDms(lordPlanet.longitude)}/${nakshatrasName(lordPlanet.nakshatra, lang)})`
        : `${t(lang, "Lagna Lord", "ラグナ支配星")}: ${translatePlanet(lang, ascLord)} (${translateSign(lang, lordPlanet.sign)} ${formatSampleDms(lordPlanet.longitude)}; ${nakshatrasName(lordPlanet.nakshatra, lang)})`;
    drawText(doc, lordLine, SAMPLE_PAGE.margin, y, {
      size: 7.5,
      bold: true,
      color: SAMPLE_COLORS.accent,
    });
    y += 16;
  }

  // Nakshatra attribute table (sample places this under lagna lord)
  const moon = chartData.planets.find((p) => p.name === "Moon");
  if (moon) {
    const attrs = getNakshatraAttributes(moon.nakshatra, lang);
    attrs.forEach((attr, index) => {
      const valueLines = splitPdfText(doc, attr.value, 350, 6.9);
      const rowH = Math.max(19, valueLines.length * 10 + 7);
      y = ensureSpace(doc, y, rowH);
      const top = y;
      drawZebraRow(doc, top, rowH, index % 2 === 1);
      drawText(doc, attr.label, SAMPLE_PAGE.planetCols.planet, top + 13, { size: 6.9 });
      valueLines.forEach((line, lineIndex) => {
        drawText(doc, line, 197, top + 13 + lineIndex * 10, { size: 6.9 });
      });
      y += rowH;
    });
    y += 14;

    y = ensureSpace(doc, y, 100);
    const nakImg = nakshatraImagePath(moon.nakshatra);
    await drawEmbeddedImage(doc, nakImg, SAMPLE_PAGE.margin + 2, y - 2, 55, 38);

    const localizedNakshatra = nakshatrasName(moon.nakshatra, lang);
    const moonTitle =
      lang === "ja"
        ? `月のナクシャトラ：${moon.nakshatra}（${localizedNakshatra}）`
        : `${t(lang, "Moon Nakshatra", "月のナクシャトラ")}: ${localizedNakshatra}`;
    drawText(doc, moonTitle, SAMPLE_PAGE.margin + 64, y + 10, {
      size: 7.5,
      bold: true,
      color: SAMPLE_COLORS.accent,
    });

    y =
      drawWrapped(
        doc,
        getMoonNakshatraText(moon.nakshatra, lang),
        SAMPLE_PAGE.margin + 64,
        y + 24,
        contentWidth() - 64,
        7.5,
        12.7,
      ) + 14;
  }

  y = Math.max(y, SAMPLE_PAGE.anchors.beneficSectionTop);
  y = ensureSpace(doc, y, 92);
  y = drawDarkBar(
    doc,
    t(lang, "Natural and Functional Benefics and Malefics", "生来的吉凶と機能的吉凶"),
    y,
  );

  const natural = getNaturalPlanets(isWaxingMoon(chartData));
  const functional = getFunctionalPlanets(chartData.ascendant_sign);
  const naturalBenefics =
    lang === "ja"
      ? "木星、金星、満月に近い（向かう）月"
      : joinPlanets(natural.benefics, lang);
  const naturalMalefics =
    lang === "ja"
      ? "土星、火星、ラーフ、ケートゥ、太陽、新月に近い（向かう）月"
      : joinPlanets(natural.malefics, lang);
  const beneficRows: [string, string][] = [
    [t(lang, "Natural Benefics", "生来的吉星"), naturalBenefics],
    [t(lang, "Natural Malefics", "生来的凶星"), naturalMalefics],
    [t(lang, "Neutral", "中立"), joinPlanets(natural.neutral, lang)],
    [t(lang, "Functional Benefics", "機能的吉星"), joinPlanets(functional.benefics, lang)],
    [t(lang, "Functional Malefics", "機能的凶星"), joinPlanets(functional.malefics, lang)],
  ];

  const page2RowH = 19;
  beneficRows.slice(0, 3).forEach(([label, value], index) => {
    const top = y + index * page2RowH;
    drawZebraRow(doc, top, page2RowH, index % 2 === 1);
    drawText(doc, label, SAMPLE_PAGE.planetCols.planet, top + 10.8, { size: 6.9 });
    drawText(doc, value, 197, top + 10.8, { size: 6.9 });
  });

  doc.addPage();
  fillPageBg(doc);
  y = SAMPLE_PAGE.anchors.page3BeneficRowsTop;
  const continuationRowH = 22.5;
  beneficRows.slice(3).forEach(([label, value], index) => {
    const top = y + index * continuationRowH;
    drawZebraRow(doc, top, continuationRowH, index % 2 === 1);
    drawText(doc, label, SAMPLE_PAGE.planetCols.planet, top + 13.4, { size: 6.9 });
    drawText(doc, value, 197, top + 13.4, { size: 6.9 });
  });
}

function drawDashaPages(
  doc: jsPDF,
  chartData: ChartData,
  formData: ChartFormData,
  lang: PdfLanguage,
) {
  let y = SAMPLE_PAGE.anchors.dashaSectionTop;
  y = drawDarkBar(
    doc,
    t(
      lang,
      "Vimshottari Dasha (Mahadasha · Antardasha)",
      "ヴィムショッタリダシャー（マハーダシャー・アンタルダシャー）",
    ),
    y,
  );
  const bodyBottom = drawWrapped(
    doc,
    DASHA_DISCLAIMER[lang],
    SAMPLE_PAGE.margin,
    SAMPLE_PAGE.anchors.dashaBodyBaseline,
    contentWidth(),
    7.5,
    12,
  );
  const noteY = Math.max(
    SAMPLE_PAGE.anchors.dashaNoteBaseline,
    bodyBottom + 5.5,
  );
  drawText(doc, DASHA_NOTE[lang], SAMPLE_PAGE.margin, noteY, {
    size: 5.8,
    color: SAMPLE_COLORS.caption,
  });
  y = Math.max(SAMPLE_PAGE.anchors.firstMahaBaseline, noteY + 20.8);

  const birth = new Date(formData.year, formData.month - 1, formData.day);
  const dashaCols = SAMPLE_PAGE.dashaCols;
  const headerCols = [
    { label: t(lang, "Antardasha Lord", "アンタルダシャー支配星"), x: dashaCols.planet },
    { label: t(lang, "Age at Start", "開始年齢"), x: dashaCols.age },
    { label: t(lang, "Start Date", "開始日"), x: dashaCols.start },
    { label: t(lang, "End Date", "終了日"), x: dashaCols.end },
  ];
  const continueOnNewPage = () => {
    doc.addPage();
    fillPageBg(doc);
    return SAMPLE_PAGE.continuationTop;
  };
  const ensureDashaSpace = (currentY: number, needed: number) =>
    currentY + needed <= SAMPLE_PAGE.contentBottom ? currentY : continueOnNewPage();

  chartData.vimshottari_dashas.forEach((maha, mahaIndex) => {
    y = ensureDashaSpace(y, 1);

    const headingStyle = {
      size: 8,
      bold: true,
      color: SAMPLE_COLORS.accent,
    } as const;
    drawText(
      doc,
      `${translatePlanet(lang, maha.lord)} ${t(lang, "Mahadasha", "マハーダシャー")}`,
      dashaCols.planet,
      y,
      headingStyle,
    );
    drawText(
      doc,
      formatDashaDate(maha.start_date, lang),
      dashaCols.start,
      y,
      headingStyle,
    );
    drawText(
      doc,
      formatDashaDate(maha.end_date, lang),
      dashaCols.end,
      y,
      headingStyle,
    );
    y += 6;

    y = ensureDashaSpace(y, 19);
    y = drawTanHeader(doc, y, headerCols);

    const antars = maha.sub_dashas ?? [];
    const rowH = 19;
    antars.forEach((antar, index) => {
      y = ensureDashaSpace(y, rowH);
      const top = y;
      drawZebraRow(doc, top, rowH, index % 2 === 1);
      drawText(
        doc,
        `${translatePlanet(lang, antar.lord)} ${t(lang, "Antardasha", "アンタルダシャー")}`,
        headerCols[0].x,
        top + 13,
        { size: 6.9 },
      );
      drawText(doc, String(dashaAge(birth, antar.start_date)), headerCols[1].x, top + 13, {
        size: 6.9,
      });
      drawText(doc, formatDashaDate(antar.start_date, lang), headerCols[2].x, top + 13, {
        size: 6.9,
      });
      drawText(doc, formatDashaDate(antar.end_date, lang), headerCols[3].x, top + 13, {
        size: 6.9,
      });
      y += rowH;
    });
    y += mahaIndex === chartData.vimshottari_dashas.length - 1 ? 34 : 24;
  });

  y = ensureDashaSpace(y, 8);
  drawText(doc, SAMPLE_SOURCE[lang], SAMPLE_PAGE.width / 2, y, {
    size: 5.8,
    color: SAMPLE_COLORS.caption,
    align: "center",
  });
}

export async function generateSampleReportPdf({
  name,
  locationName,
  formData,
  chartData,
  lang = "ja",
}: SampleReportInput) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  await registerLocaleFont(doc, lang);
  setActivePdfFont(lang);
  const labels = getPdfLabels(lang);
  doc.setProperties({
    title: labels.reportTitle,
    author: labels.brand,
    subject: labels.birthChart,
    creator: "Jyotish Life",
  });

  // Prefetch images used on page 2
  const moon = chartData.planets.find((p) => p.name === "Moon");
  const rashiPath = rashiImagePath(chartData.ascendant_sign);
  const nakPath = moon ? nakshatraImagePath(moon.nakshatra) : undefined;
  await Promise.all([
    rashiPath ? loadImageDataUrl(rashiPath) : Promise.resolve(null),
    nakPath ? loadImageDataUrl(nakPath) : Promise.resolve(null),
  ]);

  fillPageBg(doc);
  let y = SAMPLE_PAGE.anchors.titleBaseline;
  y = drawMainTitle(doc, lang, y);

  const displayName = name.trim() || getPdfLabels(lang).birthChart;

  const { x: chartX, size: chartSize } = SAMPLE_PAGE.chart;
  const chartY = Math.max(y, SAMPLE_PAGE.chart.y);
  drawSampleChart(doc, chartX, chartY, chartSize, chartData, lang);

  const birthBottom = drawBirthInfoTable(doc, chartY + 4, [
    [t(lang, "Name", "お名前"), displayName],
    [
      t(lang, "Date of Birth", "生年月日"),
      formatBirthDate(formData.year, formData.month, formData.day, lang),
    ],
    [
      t(lang, "Time of Birth", "誕生時間"),
      formatBirthTime(formData.hour, formData.minute, lang),
    ],
    [
      t(lang, "Birth Place", "出生地"),
      `${locationName || "—"} ${lang === "ja" ? "／" : "/"} ${formatCoordPair(formData.longitude, formData.latitude, lang)}`,
    ],
    [
      t(lang, "UTC Offset at Birth", "出生時のUTCオフセット"),
      formatTimezoneOffset(chartData.timezone_offset_hours ?? 0),
    ],
    [t(lang, "Ayanamsha (Lahiri)", "アヤナーンシャ（ラヒリ）"), formatAyanamsha(chartData.ayanamsha ?? 24)],
    [
      t(lang, "Lagna (ASC)", "ラグナ（ASC）"),
      `${translateSign(lang, chartData.ascendant_sign)} ${formatSampleDms(chartData.ascendant_longitude)}`,
    ],
    [
      t(lang, "Moon Nakshatra", "月のナクシャトラ"),
      moon
        ? lang === "ja"
          ? `${moon.nakshatra}（${translateSign(lang, moon.sign)}）`
          : `${nakshatrasName(moon.nakshatra, lang)} (${translateSign(lang, moon.sign)})`
        : "—",
    ],
  ]);

  // Aspect caption under birth block (sample alignment)
  const aspectText = buildAspectSummary(chartData, lang);
  drawText(doc, aspectText, SAMPLE_PAGE.birth.x - 1, birthBottom + 14, {
    size: 5.8,
    color: SAMPLE_COLORS.caption,
  });

  y = Math.max(SAMPLE_PAGE.anchors.planetSectionTop, chartY + chartSize + 28, birthBottom + 28);
  y = drawPlanetTable(doc, y, chartData, lang);
  y = Math.max(y, SAMPLE_PAGE.anchors.houseSectionTop);
  drawHouseThemeRows(doc, y, chartData, lang, 1, 6, true);

  doc.addPage();
  fillPageBg(doc);
  await drawLagnaNakshatraPage(doc, chartData, lang);
  drawDashaPages(doc, chartData, formData, lang);

  const suffix = lang;
  const safeName =
    (displayName || "chart")
      .normalize("NFC")
      .replace(/[^\p{L}\p{N}_-]+/gu, "-")
      .replace(/^-+|-+$/g, "")
      .toLocaleLowerCase(lang) || "chart";
  doc.save(`${safeName}-birth-chart-report-${suffix}.pdf`);
}
