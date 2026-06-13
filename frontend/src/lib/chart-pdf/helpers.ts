import type { jsPDF } from "jspdf";
import type { ChartData, Planet, TransitPlanet } from "../chart-types";

export const SIGN_TO_NUMBER: Record<string, number> = {
  Aries: 1,
  Taurus: 2,
  Gemini: 3,
  Cancer: 4,
  Leo: 5,
  Virgo: 6,
  Libra: 7,
  Scorpio: 8,
  Sagittarius: 9,
  Capricorn: 10,
  Aquarius: 11,
  Pisces: 12,
};

export const NUMBER_TO_SIGN = [
  "",
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
];

export const PLANET_ABBR: Record<string, string> = {
  Sun: "Su",
  Moon: "Mo",
  Mars: "Ma",
  Mercury: "Me",
  Jupiter: "Ju",
  Venus: "Ve",
  Saturn: "Sa",
  Rahu: "Ra",
  Ketu: "Ke",
};

export const PLANET_SYMBOL: Record<string, string> = {
  Sun: "Su",
  Moon: "Mo",
  Mars: "Ma",
  Mercury: "Me",
  Jupiter: "Ju",
  Venus: "Ve",
  Saturn: "Sa",
  Rahu: "Ra",
  Ketu: "Ke",
};

export const PDF_COLORS = {
  primary: [30, 27, 75] as [number, number, number],
  accent: [79, 70, 229] as [number, number, number],
  gold: [180, 132, 74] as [number, number, number],
  text: [17, 24, 39] as [number, number, number],
  muted: [107, 114, 128] as [number, number, number],
  border: [229, 231, 235] as [number, number, number],
  headerBg: [248, 250, 252] as [number, number, number],
  rowAlt: [249, 250, 251] as [number, number, number],
  white: [255, 255, 255] as [number, number, number],
};

export const PAGE = {
  width: 595.28,
  height: 841.89,
  margin: 42,
  footerY: 812,
};

export function formatDMS(raw: number) {
  const l = raw % 30;
  const d = Math.floor(l);
  const mF = (l - d) * 60;
  const m = Math.floor(mF);
  const s = Math.floor((mF - m) * 60);
  return `${d}° ${m.toString().padStart(2, "0")}' ${s.toString().padStart(2, "0")}"`;
}

export function formatDegreeInt(raw: number) {
  return `${Math.floor(raw % 30)}°`;
}

export function formatLat(value: number) {
  const dir = value >= 0 ? "N" : "S";
  return `${Math.abs(value).toFixed(4)}° ${dir}`;
}

export function formatLon(value: number) {
  const dir = value >= 0 ? "E" : "W";
  return `${Math.abs(value).toFixed(4)}° ${dir}`;
}

export function isRetrograde(planet: Planet | TransitPlanet) {
  return (
    planet.is_retrograde ||
    planet.name === "Rahu" ||
    planet.name === "Ketu"
  );
}

export interface ChartHouseEntry {
  house: number;
  label: string;
  degree?: number;
  retro?: boolean;
}

export function mapD1Chart(chartData: ChartData): ChartHouseEntry[] {
  return chartData.planets.map((p) => ({
    house: p.d1_house,
    label: PLANET_ABBR[p.name] ?? p.name.slice(0, 2),
    degree: Math.floor(p.longitude % 30),
    retro: isRetrograde(p),
  }));
}

export function mapD9Chart(chartData: ChartData): ChartHouseEntry[] {
  const ascNum = SIGN_TO_NUMBER[chartData.d9_ascendant_sign] ?? 1;
  return chartData.planets.map((p) => ({
    house: ((SIGN_TO_NUMBER[p.d9_sign] - ascNum + 12) % 12) + 1,
    label: PLANET_ABBR[p.name] ?? p.name.slice(0, 2),
    degree: Math.floor(p.longitude % 30),
    retro: isRetrograde(p),
  }));
}

export function mapChalitChart(chartData: ChartData): ChartHouseEntry[] {
  return chartData.planets.map((p) => ({
    house: p.chalit_house,
    label: PLANET_ABBR[p.name] ?? p.name.slice(0, 2),
    degree: Math.floor(p.longitude % 30),
    retro: isRetrograde(p),
  }));
}

export function mapChandraChart(chartData: ChartData): ChartHouseEntry[] {
  const moon = chartData.planets.find((p) => p.name === "Moon");
  const moonHouse = moon?.d1_house ?? 1;
  return chartData.planets.map((p) => ({
    house: ((p.d1_house - moonHouse + 12) % 12) + 1,
    label: PLANET_ABBR[p.name] ?? p.name.slice(0, 2),
    degree: Math.floor(p.longitude % 30),
    retro: isRetrograde(p),
  }));
}

export interface TableColumn {
  header: string;
  width: number;
  align?: "left" | "center" | "right";
}

export function contentWidth() {
  return PAGE.width - PAGE.margin * 2;
}

export function drawSectionTitle(doc: jsPDF, title: string, y: number) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...PDF_COLORS.primary);
  doc.text(title.toUpperCase(), PAGE.margin, y);

  doc.setDrawColor(...PDF_COLORS.gold);
  doc.setLineWidth(1.2);
  doc.line(PAGE.margin, y + 4, PAGE.margin + 42, y + 4);

  return y + 18;
}

export function drawTable(
  doc: jsPDF,
  startY: number,
  columns: TableColumn[],
  rows: string[][],
  options?: { rowHeight?: number; fontSize?: number; x?: number },
) {
  const rowHeight = options?.rowHeight ?? 16;
  const fontSize = options?.fontSize ?? 8;
  const x0 = options?.x ?? PAGE.margin;
  const tableWidth = columns.reduce((sum, col) => sum + col.width, 0);
  let y = startY;

  doc.setFillColor(...PDF_COLORS.headerBg);
  doc.setDrawColor(...PDF_COLORS.border);
  doc.setLineWidth(0.5);
  doc.rect(x0, y - 10, tableWidth, rowHeight + 4, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(fontSize);
  doc.setTextColor(...PDF_COLORS.muted);

  let x = x0 + 6;
  columns.forEach((col) => {
    const textX =
      col.align === "right"
        ? x + col.width - 8
        : col.align === "center"
          ? x + col.width / 2
          : x;
    doc.text(col.header, textX, y, {
      align: col.align ?? "left",
    });
    x += col.width;
  });

  y += rowHeight - 2;

  rows.forEach((row, rowIndex) => {
    if (rowIndex % 2 === 1) {
      doc.setFillColor(...PDF_COLORS.rowAlt);
      doc.rect(x0, y - 9, tableWidth, rowHeight, "F");
    }

    doc.setDrawColor(...PDF_COLORS.border);
    doc.line(x0, y + rowHeight - 11, x0 + tableWidth, y + rowHeight - 11);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);
    doc.setTextColor(...PDF_COLORS.text);

    x = x0 + 6;
    row.forEach((cell, cellIndex) => {
      const col = columns[cellIndex];
      const textX =
        col.align === "right"
          ? x + col.width - 8
          : col.align === "center"
            ? x + col.width / 2
            : x;
      doc.text(cell, textX, y, { align: col.align ?? "left", maxWidth: col.width - 10 });
      x += col.width;
    });

    y += rowHeight;
  });

  doc.setDrawColor(...PDF_COLORS.border);
  doc.rect(x0, startY - 10, tableWidth, y - startY + 10);

  return y + 8;
}

export function drawKeyValueTable(
  doc: jsPDF,
  startY: number,
  rows: [string, string][],
) {
  const labelWidth = 130;
  const valueWidth = contentWidth() - labelWidth;
  const tableRows = rows.map(([label, value]) => [label, value]);
  return drawTable(
    doc,
    startY,
    [
      { header: "Field", width: labelWidth },
      { header: "Details", width: valueWidth },
    ],
    tableRows,
    { rowHeight: 18, fontSize: 9 },
  );
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

export function drawNorthIndianChart(
  doc: jsPDF,
  x: number,
  y: number,
  size: number,
  ascendantSign: string,
  entries: ChartHouseEntry[],
  title: string,
  showAsc = true,
) {
  const ascNum = SIGN_TO_NUMBER[ascendantSign] ?? 1;
  const getSignForHouse = (house: number) => {
    let signNum = ascNum + (house - 1);
    return signNum > 12 ? signNum - 12 : signNum;
  };

  doc.setFillColor(...PDF_COLORS.white);
  doc.setDrawColor(...PDF_COLORS.primary);
  doc.setLineWidth(1);
  doc.roundedRect(x - 4, y - 18, size + 8, size + 26, 6, 6, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...PDF_COLORS.primary);
  doc.text(title, x + size / 2, y - 6, { align: "center" });

  doc.setDrawColor(...PDF_COLORS.accent);
  doc.setLineWidth(0.8);
  doc.rect(x, y, size, size);
  doc.line(x, y, x + size, y + size);
  doc.line(x, y + size, x + size, y);
  doc.line(x + size / 2, y, x + size, y + size / 2);
  doc.line(x + size, y + size / 2, x + size / 2, y + size);
  doc.line(x + size / 2, y + size, x, y + size / 2);
  doc.line(x, y + size / 2, x + size / 2, y);

  const grouped = new Map<number, ChartHouseEntry[]>();
  entries.forEach((entry) => {
    const list = grouped.get(entry.house) ?? [];
    list.push(entry);
    grouped.set(entry.house, list);
  });

  for (let house = 1; house <= 12; house += 1) {
    const center = HOUSE_CENTERS[house];
    const cx = x + center.x * size;
    const cy = y + center.y * size;
    const signNum = getSignForHouse(house);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(...PDF_COLORS.gold);
    doc.text(String(signNum), cx, cy - 14, { align: "center" });

    const planets = grouped.get(house) ?? [];
    const labels: string[] = [];
    if (showAsc && house === 1) labels.push("Asc");
    planets.forEach((p) => {
      labels.push(`${p.label}${p.retro ? "*" : ""}${p.degree !== undefined ? p.degree : ""}`);
    });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(...PDF_COLORS.primary);
    doc.text(labels.join(", "), cx, cy + 2, {
      align: "center",
      maxWidth: size * 0.22,
    });
  }
}

export function flattenDashas(
  dashas: ChartData["vimshottari_dashas"],
  depth = 0,
  maxDepth = 3,
): [string, string, string, string][] {
  const rows: [string, string, string, string][] = [];
  dashas.forEach((dasha) => {
    const level =
      depth === 0 ? "Maha" : depth === 1 ? "Antar" : depth === 2 ? "Pratyantar" : "Sookshma";
    rows.push([level, dasha.lord, dasha.start_date, dasha.end_date]);
    if (dasha.sub_dashas && depth < maxDepth) {
      rows.push(...flattenDashas(dasha.sub_dashas, depth + 1, maxDepth));
    }
  });
  return rows;
}
