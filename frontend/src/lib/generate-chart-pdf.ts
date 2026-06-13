import { jsPDF } from "jspdf";
import type { ChartData, ChartFormData } from "./chart-types";
import {
  PAGE,
  PDF_COLORS,
  contentWidth,
  drawKeyValueTable,
  drawNorthIndianChart,
  drawSectionTitle,
  drawTable,
  ensureSpace,
  formatDMS,
  formatLat,
  formatLon,
  getCurrentDashaRows,
  isRetrograde,
  mapChalitChart,
  mapChandraChart,
  mapD1Chart,
  mapD9Chart,
} from "./chart-pdf/helpers";
import {
  getPdfLabels,
  truncateLocation,
  translateDignity,
  translatePlanet,
  translateSign,
  type PdfLanguage,
} from "./chart-pdf/i18n";

interface PdfInput {
  name: string;
  locationName: string;
  formData: ChartFormData;
  chartData: ChartData;
  lang?: PdfLanguage;
}

function drawPageHeader(
  doc: jsPDF,
  name: string,
  subtitle: string,
  labels: ReturnType<typeof getPdfLabels>,
) {
  doc.setFillColor(...PDF_COLORS.primary);
  doc.rect(0, 0, PAGE.width, 72, "F");

  doc.setFillColor(...PDF_COLORS.gold);
  doc.rect(0, 72, PAGE.width, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(langFontSize(labels, 18));
  doc.setTextColor(255, 255, 255);
  doc.text(labels.reportTitle, PAGE.margin, 32);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(220, 220, 235);
  doc.text(name, PAGE.margin, 50);
  doc.text(subtitle, PAGE.margin, 62);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(
    `${labels.generated} ${new Date().toLocaleString()}`,
    PAGE.width - PAGE.margin,
    32,
    { align: "right" },
  );
  doc.text(labels.brand, PAGE.width - PAGE.margin, 44, { align: "right" });
}

function langFontSize(labels: ReturnType<typeof getPdfLabels>, base: number) {
  return labels.reportTitle.length > 20 ? base - 2 : base;
}

function drawFooters(
  doc: jsPDF,
  name: string,
  labels: ReturnType<typeof getPdfLabels>,
) {
  const total = doc.getNumberOfPages();
  for (let page = 1; page <= total; page += 1) {
    doc.setPage(page);
    doc.setDrawColor(...PDF_COLORS.border);
    doc.line(PAGE.margin, PAGE.footerY - 8, PAGE.width - PAGE.margin, PAGE.footerY - 8);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...PDF_COLORS.muted);
    doc.text(`${name} — ${labels.footer}`, PAGE.margin, PAGE.footerY);
    doc.text(
      `${labels.page} ${page} ${labels.of} ${total}`,
      PAGE.width - PAGE.margin,
      PAGE.footerY,
      { align: "right" },
    );
  }
}

export function downloadChartPdf({
  name,
  locationName,
  formData,
  chartData,
  lang = "en",
}: PdfInput) {
  const labels = getPdfLabels(lang);
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const natalDate = `${formData.year}-${String(formData.month).padStart(2, "0")}-${String(formData.day).padStart(2, "0")}`;
  const natalTime = `${String(formData.hour).padStart(2, "0")}:${String(formData.minute).padStart(2, "0")}`;
  const transitDate = `${formData.transit_year}-${String(formData.transit_month).padStart(2, "0")}-${String(formData.transit_day).padStart(2, "0")}`;
  const displayName = name.trim() || labels.birthChart;

  const currentMaha = getCurrentDashaRows(chartData.vimshottari_dashas, labels);
  const moon = chartData.planets.find((p) => p.name === "Moon");

  drawPageHeader(doc, displayName, labels.completeNatal, labels);

  let y = 92;

  y = drawSectionTitle(doc, labels.birthParticulars, y);
  y = drawKeyValueTable(
    doc,
    y,
    [
      [labels.name, displayName],
      [labels.dateOfBirth, natalDate],
      [labels.timeOfBirth, natalTime],
      [labels.birthPlace, truncateLocation(locationName || labels.none)],
      [labels.latitude, formatLat(formData.latitude)],
      [labels.longitude, formatLon(formData.longitude)],
      [labels.timezone, chartData.timezone_detected],
      [labels.transitDate, transitDate],
      ...(chartData.sunrise ? [[labels.sunrise, chartData.sunrise] as [string, string]] : []),
      ...(chartData.sunset ? [[labels.sunset, chartData.sunset] as [string, string]] : []),
    ],
    labels,
  );

  y = ensureSpace(doc, y, 100);
  y = drawSectionTitle(doc, labels.ascendantSummary, y);
  y = drawKeyValueTable(
    doc,
    y,
    [
      [
        labels.lagna,
        `${translateSign(lang, chartData.ascendant_sign)} — ${formatDMS(chartData.ascendant_longitude)}`,
      ],
      [labels.ascNakshatra, chartData.ascendant_nakshatra],
      [labels.d9Asc, translateSign(lang, chartData.d9_ascendant_sign)],
      [
        labels.moonSignHouse,
        moon
          ? `${translateSign(lang, moon.sign)} — ${labels.house} ${moon.d1_house}`
          : labels.none,
      ],
      [
        labels.currentMahaDasha,
        currentMaha[0]
          ? `${translatePlanet(lang, currentMaha[0][1])} (${currentMaha[0][2]} → ${currentMaha[0][3]})`
          : labels.none,
      ],
    ],
    labels,
  );

  // D1 chart — full width, centered
  doc.addPage();
  drawPageHeader(doc, displayName, labels.lagnaChartD1, labels);
  y = 92;

  const chartSize = 230;
  const chartX = PAGE.margin + (contentWidth() - chartSize) / 2;
  y = drawNorthIndianChart(
    doc,
    chartX,
    y,
    chartSize,
    chartData.ascendant_sign,
    mapD1Chart(chartData),
    labels.rashiChartD1,
    true,
  );

  y = ensureSpace(doc, y + 12, 120);
  y = drawSectionTitle(doc, labels.planetaryPositionsD1, y);

  y = drawTable(
    doc,
    y,
    [
      { header: labels.planet, width: 54 },
      { header: labels.sign, width: 62 },
      { header: labels.d1House, width: 36, align: "center" },
      { header: labels.longitudeCol, width: 68 },
      { header: labels.nakshatra, width: 88 },
      { header: labels.lord, width: 46 },
      { header: labels.dignity, width: 54 },
      { header: labels.retrograde, width: 34, align: "center" },
    ],
    chartData.planets.map((p) => [
      translatePlanet(lang, p.name),
      translateSign(lang, p.sign),
      String(p.d1_house),
      formatDMS(p.longitude),
      `${p.nakshatra} · ${labels.pada} ${p.nakshatra_pada}`,
      translatePlanet(lang, p.sign_lord),
      translateDignity(lang, p.dignity),
      isRetrograde(p) ? labels.yes : labels.no,
    ]),
    { fontSize: 7.5, rowHeight: 15 },
  );

  // D9 + Chalit
  doc.addPage();
  drawPageHeader(doc, displayName, labels.navamshaDivisional, labels);
  y = 92;

  const pairSize = 185;
  const pairGap = 24;
  const pairX = PAGE.margin + (contentWidth() - pairSize * 2 - pairGap) / 2;

  const afterD9 = drawNorthIndianChart(
    doc,
    pairX,
    y,
    pairSize,
    chartData.d9_ascendant_sign,
    mapD9Chart(chartData),
    labels.navamshaChartD9,
    true,
  );

  const afterChalit = drawNorthIndianChart(
    doc,
    pairX + pairSize + pairGap,
    y,
    pairSize,
    chartData.ascendant_sign,
    mapChalitChart(chartData),
    labels.bhavaChalit,
    true,
  );

  y = Math.max(afterD9, afterChalit) + 12;
  y = ensureSpace(doc, y, 120);
  y = drawSectionTitle(doc, labels.navamshaPositions, y);

  y = drawTable(
    doc,
    y,
    [
      { header: labels.planet, width: 52 },
      { header: labels.d1Sign, width: 68 },
      { header: labels.d9Sign, width: 68 },
      { header: labels.d1House, width: 44, align: "center" },
      { header: labels.chalitHouse, width: 48, align: "center" },
      { header: labels.nakshatra, width: contentWidth() - 52 - 68 - 68 - 44 - 48 },
    ],
    chartData.planets.map((p) => [
      translatePlanet(lang, p.name),
      translateSign(lang, p.sign),
      translateSign(lang, p.d9_sign),
      String(p.d1_house),
      String(p.chalit_house),
      `${p.nakshatra} P${p.nakshatra_pada}`,
    ]),
    { fontSize: 7.5, rowHeight: 15 },
  );

  // Chandra + transits
  doc.addPage();
  drawPageHeader(doc, displayName, labels.moonChartTransits, labels);
  y = 92;

  const chandraX = PAGE.margin + (contentWidth() - pairSize) / 2;
  y = drawNorthIndianChart(
    doc,
    chandraX,
    y,
    pairSize,
    moon?.sign ?? "Aries",
    mapChandraChart(chartData),
    labels.chandraChart,
    true,
  );

  y = ensureSpace(doc, y + 8, 120);
  y = drawSectionTitle(doc, labels.gocharTransits, y);
  y = drawTable(
    doc,
    y,
    [
      { header: labels.planet, width: 54 },
      { header: labels.transitSign, width: 76 },
      { header: labels.natalHouse, width: 52, align: "center" },
      { header: labels.longitudeCol, width: 76 },
      { header: labels.retrograde, width: 48, align: "center" },
    ],
    chartData.transit_planets.map((p) => [
      translatePlanet(lang, p.name),
      translateSign(lang, p.sign),
      String(p.natal_house),
      formatDMS(p.longitude),
      isRetrograde(p) ? labels.yes : labels.no,
    ]),
    { fontSize: 7.5, rowHeight: 15 },
  );

  if (chartData.chalit_cusps.length > 0) {
    y = ensureSpace(doc, y + 8, 80);
    y = drawSectionTitle(doc, labels.chalitCusps, y);
    const cuspRows: string[][] = [];
    for (let i = 0; i < chartData.chalit_cusps.length; i += 2) {
      const houseA = i + 1;
      const houseB = i + 2;
      cuspRows.push([
        `${labels.house} ${houseA}`,
        formatDMS(chartData.chalit_cusps[i]),
        houseB <= chartData.chalit_cusps.length ? `${labels.house} ${houseB}` : "",
        houseB <= chartData.chalit_cusps.length
          ? formatDMS(chartData.chalit_cusps[i + 1])
          : "",
      ]);
    }
    y = drawTable(
      doc,
      y,
      [
        { header: labels.house, width: 68 },
        { header: labels.cusp, width: 118 },
        { header: labels.house, width: 68 },
        { header: labels.cusp, width: contentWidth() - 68 - 118 - 68 },
      ],
      cuspRows,
      { fontSize: 7.5, rowHeight: 15 },
    );
  }

  // Aspects
  doc.addPage();
  drawPageHeader(doc, displayName, labels.vedicAspects, labels);
  y = 92;
  y = drawSectionTitle(doc, labels.planetaryAspects, y);

  const aspectRows = chartData.planets
    .filter((p) => p.aspects_houses.length > 0)
    .map((p) => [
      translatePlanet(lang, p.name),
      String(p.d1_house),
      translateSign(lang, p.sign),
      p.aspects_houses.map((h) => `${labels.house} ${h}`).join(", "),
    ]);

  drawTable(
    doc,
    y,
    [
      { header: labels.planet, width: 68 },
      { header: labels.fromHouse, width: 62, align: "center" },
      { header: labels.sign, width: 82 },
      { header: labels.aspectsHouses, width: contentWidth() - 68 - 62 - 82 },
    ],
    aspectRows.length > 0
      ? aspectRows
      : [[labels.none, labels.none, labels.none, labels.noAspects]],
    { fontSize: 8, rowHeight: 16 },
  );

  // Current dasha only
  doc.addPage();
  drawPageHeader(doc, displayName, labels.vimshottariDasha, labels);
  y = 92;
  y = drawSectionTitle(doc, labels.dashaTimeline, y);

  const dashaRows = currentMaha.map((row) => [
    row[0],
    translatePlanet(lang, row[1]),
    row[2],
    row[3],
  ]);

  drawTable(
    doc,
    y,
    [
      { header: labels.level, width: 78 },
      { header: labels.lord, width: 58 },
      { header: labels.start, width: 108 },
      { header: labels.end, width: contentWidth() - 78 - 58 - 108 },
    ],
    dashaRows.length > 0 ? dashaRows : [[labels.none, labels.none, labels.none, labels.none]],
    { fontSize: 8.5, rowHeight: 18 },
  );

  drawFooters(doc, displayName, labels);

  const suffix = lang === "ja" ? "ja" : "en";
  const safeName = (name || "chart").replace(/[^a-z0-9-_]+/gi, "-").toLowerCase();
  doc.save(`${safeName}-birth-chart-report-${suffix}.pdf`);
}
