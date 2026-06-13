import { jsPDF } from "jspdf";
import type { ChartData, ChartFormData } from "./chart-types";
import {
  PAGE,
  PDF_COLORS,
  PLANET_SYMBOL,
  contentWidth,
  drawKeyValueTable,
  drawNorthIndianChart,
  drawSectionTitle,
  drawTable,
  flattenDashas,
  formatDMS,
  formatLat,
  formatLon,
  isRetrograde,
  mapChalitChart,
  mapChandraChart,
  mapD1Chart,
  mapD9Chart,
} from "./chart-pdf/helpers";

interface PdfInput {
  name: string;
  locationName: string;
  formData: ChartFormData;
  chartData: ChartData;
}

function ensureSpace(doc: jsPDF, y: number, needed: number): number {
  if (y + needed <= PAGE.footerY - 20) return y;
  doc.addPage();
  return PAGE.margin + 12;
}

function drawPageHeader(doc: jsPDF, name: string, subtitle: string) {
  doc.setFillColor(...PDF_COLORS.primary);
  doc.rect(0, 0, PAGE.width, 72, "F");

  doc.setFillColor(...PDF_COLORS.gold);
  doc.rect(0, 72, PAGE.width, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text("Vedic Birth Chart Report", PAGE.margin, 32);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(220, 220, 235);
  doc.text(name, PAGE.margin, 50);
  doc.text(subtitle, PAGE.margin, 62);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(
    `Generated ${new Date().toLocaleString()}`,
    PAGE.width - PAGE.margin,
    32,
    { align: "right" },
  );
  doc.text("Jyotish Life", PAGE.width - PAGE.margin, 44, { align: "right" });
}

function drawFooters(doc: jsPDF, name: string) {
  const total = doc.getNumberOfPages();
  for (let page = 1; page <= total; page += 1) {
    doc.setPage(page);
    doc.setDrawColor(...PDF_COLORS.border);
    doc.line(PAGE.margin, PAGE.footerY - 8, PAGE.width - PAGE.margin, PAGE.footerY - 8);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...PDF_COLORS.muted);
    doc.text(`${name} — Confidential Birth Chart Report`, PAGE.margin, PAGE.footerY);
    doc.text(`Page ${page} of ${total}`, PAGE.width - PAGE.margin, PAGE.footerY, {
      align: "right",
    });
  }
}

export function downloadChartPdf({
  name,
  locationName,
  formData,
  chartData,
}: PdfInput) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const natalDate = `${formData.year}-${String(formData.month).padStart(2, "0")}-${String(formData.day).padStart(2, "0")}`;
  const natalTime = `${String(formData.hour).padStart(2, "0")}:${String(formData.minute).padStart(2, "0")}`;
  const transitDate = `${formData.transit_year}-${String(formData.transit_month).padStart(2, "0")}-${String(formData.transit_day).padStart(2, "0")}`;
  const displayName = name.trim() || "Birth Chart";

  drawPageHeader(doc, displayName, "Complete Natal Analysis");

  let y = 92;

  y = drawSectionTitle(doc, "Birth Particulars", y);
  y = drawKeyValueTable(doc, y, [
    ["Name", displayName],
    ["Date of Birth", natalDate],
    ["Time of Birth", natalTime],
    ["Birth Place", locationName || "—"],
    ["Latitude", formatLat(formData.latitude)],
    ["Longitude", formatLon(formData.longitude)],
    ["Timezone", chartData.timezone_detected],
    ["Transit Reference Date", transitDate],
    ...(chartData.sunrise ? [["Sunrise", chartData.sunrise] as [string, string]] : []),
    ...(chartData.sunset ? [["Sunset", chartData.sunset] as [string, string]] : []),
  ]);

  y = ensureSpace(doc, y, 120);
  y = drawSectionTitle(doc, "Ascendant & Moon Summary", y);
  y = drawKeyValueTable(doc, y, [
    ["Lagna (Ascendant)", `${chartData.ascendant_sign} — ${formatDMS(chartData.ascendant_longitude)}`],
    ["Ascendant Nakshatra", chartData.ascendant_nakshatra],
    ["Navamsha (D9) Ascendant", chartData.d9_ascendant_sign],
    [
      "Moon Sign / House",
      (() => {
        const moon = chartData.planets.find((p) => p.name === "Moon");
        return moon ? `${moon.sign} — House ${moon.d1_house}` : "—";
      })(),
    ],
    [
      "Current Maha Dasha",
      chartData.vimshottari_dashas[0]
        ? `${chartData.vimshottari_dashas[0].lord} (${chartData.vimshottari_dashas[0].start_date} → ${chartData.vimshottari_dashas[0].end_date})`
        : "—",
    ],
  ]);

  // Page 2 — D1 chart + positions
  doc.addPage();
  drawPageHeader(doc, displayName, "Lagna Chart (D1)");
  y = 92;

  const chartSize = 210;
  const chartX = PAGE.margin;
  drawNorthIndianChart(
    doc,
    chartX,
    y,
    chartSize,
    chartData.ascendant_sign,
    mapD1Chart(chartData),
    "Rashi Chart — D1",
    true,
  );

  const rightX = chartX + chartSize + 24;
  const miniWidth = PAGE.width - PAGE.margin - rightX;
  if (miniWidth > 180) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...PDF_COLORS.primary);
    doc.text("Quick Reference", rightX, y + 4);

    const quickRows = chartData.planets.map((p) => [
      PLANET_SYMBOL[p.name] ?? p.name.slice(0, 2),
      p.sign,
      String(p.d1_house),
      isRetrograde(p) ? "R" : "—",
    ]);

    drawTable(
      doc,
      y + 12,
      [
        { header: "Gr.", width: 28, align: "center" },
        { header: "Sign", width: miniWidth - 28 - 36 - 24 },
        { header: "H", width: 24, align: "center" },
        { header: "Rx", width: 24, align: "center" },
      ],
      quickRows,
      { fontSize: 7.5, rowHeight: 14, x: rightX },
    );
  }

  y = ensureSpace(doc, y + chartSize + 28, 180);
  y = drawSectionTitle(doc, "Planetary Positions — D1", y);

  const planetRows = chartData.planets.map((p) => [
    p.name,
    p.sign,
    String(p.d1_house),
    formatDMS(p.longitude),
    `${p.nakshatra} · Pada ${p.nakshatra_pada}`,
    p.sign_lord,
    p.dignity,
    isRetrograde(p) ? "Yes" : "No",
  ]);

  y = drawTable(
    doc,
    y,
    [
      { header: "Planet", width: 52 },
      { header: "Sign", width: 68 },
      { header: "House", width: 34, align: "center" },
      { header: "Longitude", width: 72 },
      { header: "Nakshatra", width: 92 },
      { header: "Lord", width: 48 },
      { header: "Dignity", width: 58 },
      { header: "Retro", width: 34, align: "center" },
    ],
    planetRows,
    { fontSize: 7.5, rowHeight: 15 },
  );

  // Page 3 — D9 + Navamsha table
  doc.addPage();
  drawPageHeader(doc, displayName, "Navamsha & Divisional Charts");
  y = 92;

  drawNorthIndianChart(
    doc,
    PAGE.margin,
    y,
    chartSize,
    chartData.d9_ascendant_sign,
    mapD9Chart(chartData),
    "Navamsha Chart — D9",
    true,
  );

  drawNorthIndianChart(
    doc,
    PAGE.margin + chartSize + 28,
    y,
    chartSize,
    chartData.ascendant_sign,
    mapChalitChart(chartData),
    "Bhava Chalit",
    true,
  );

  y = ensureSpace(doc, y + chartSize + 30, 160);
  y = drawSectionTitle(doc, "Navamsha (D9) Positions", y);

  y = drawTable(
    doc,
    y,
    [
      { header: "Planet", width: 58 },
      { header: "D1 Sign", width: 72 },
      { header: "D9 Sign", width: 72 },
      { header: "D1 House", width: 48, align: "center" },
      { header: "Chalit House", width: 58, align: "center" },
      { header: "Nakshatra", width: contentWidth() - 58 - 72 - 72 - 48 - 58 },
    ],
    chartData.planets.map((p) => [
      p.name,
      p.sign,
      p.d9_sign,
      String(p.d1_house),
      String(p.chalit_house),
      `${p.nakshatra} P${p.nakshatra_pada}`,
    ]),
    { fontSize: 8, rowHeight: 15 },
  );

  // Page 4 — Chandra + transits
  doc.addPage();
  drawPageHeader(doc, displayName, "Moon Chart & Transits");
  y = 92;

  const moon = chartData.planets.find((p) => p.name === "Moon");
  drawNorthIndianChart(
    doc,
    PAGE.margin,
    y,
    chartSize,
    moon?.sign ?? "Aries",
    mapChandraChart(chartData),
    "Chandra Chart (Moon as Ascendant)",
    true,
  );

  y = ensureSpace(doc, y + chartSize + 24, 140);
  y = drawSectionTitle(doc, "Gochar — Transit Positions", y);
  y = drawTable(
    doc,
    y,
    [
      { header: "Planet", width: 58 },
      { header: "Transit Sign", width: 80 },
      { header: "Natal House", width: 58, align: "center" },
      { header: "Longitude", width: 80 },
      { header: "Retrograde", width: 52, align: "center" },
    ],
    chartData.transit_planets.map((p) => [
      p.name,
      p.sign,
      String(p.natal_house),
      formatDMS(p.longitude),
      isRetrograde(p) ? "Yes" : "No",
    ]),
    { fontSize: 8, rowHeight: 15 },
  );

  if (chartData.chalit_cusps.length > 0) {
    y = ensureSpace(doc, y + 10, 100);
    y = drawSectionTitle(doc, "Bhava Chalit Cusps", y);
    const cuspRows: string[][] = [];
    for (let i = 0; i < chartData.chalit_cusps.length; i += 2) {
      const houseA = i + 1;
      const houseB = i + 2;
      cuspRows.push([
        `House ${houseA}`,
        formatDMS(chartData.chalit_cusps[i]),
        houseB <= chartData.chalit_cusps.length ? `House ${houseB}` : "",
        houseB <= chartData.chalit_cusps.length
          ? formatDMS(chartData.chalit_cusps[i + 1])
          : "",
      ]);
    }
    y = drawTable(
      doc,
      y,
      [
        { header: "House", width: 70 },
        { header: "Cusp", width: 120 },
        { header: "House", width: 70 },
        { header: "Cusp", width: contentWidth() - 70 - 120 - 70 },
      ],
      cuspRows,
      { fontSize: 8, rowHeight: 15 },
    );
  }

  // Page 5 — Aspects
  doc.addPage();
  drawPageHeader(doc, displayName, "Vedic Aspects (Drishti)");
  y = 92;
  y = drawSectionTitle(doc, "Planetary Aspects", y);

  const aspectRows = chartData.planets
    .filter((p) => p.aspects_houses.length > 0)
    .map((p) => [
      p.name,
      String(p.d1_house),
      p.sign,
      p.aspects_houses.map((h) => `H${h}`).join(", "),
    ]);

  y = drawTable(
    doc,
    y,
    [
      { header: "Planet", width: 70 },
      { header: "From House", width: 70, align: "center" },
      { header: "Sign", width: 90 },
      { header: "Aspects Houses", width: contentWidth() - 70 - 70 - 90 },
    ],
    aspectRows.length > 0 ? aspectRows : [["—", "—", "—", "No major aspects recorded"]],
    { fontSize: 8.5, rowHeight: 16 },
  );

  // Page 6 — Dasha timeline
  doc.addPage();
  drawPageHeader(doc, displayName, "Vimshottari Dasha");
  y = 92;
  y = drawSectionTitle(doc, "Dasha Timeline", y);

  const dashaRows = flattenDashas(chartData.vimshottari_dashas, 0, 3);
  drawTable(
    doc,
    y,
    [
      { header: "Level", width: 72 },
      { header: "Lord", width: 58 },
      { header: "Start", width: 110 },
      { header: "End", width: contentWidth() - 72 - 58 - 110 },
    ],
    dashaRows.length > 0 ? dashaRows : [["—", "—", "—", "—"]],
    { fontSize: 8, rowHeight: 14 },
  );

  drawFooters(doc, displayName);

  const safeName = (name || "chart").replace(/[^a-z0-9-_]+/gi, "-").toLowerCase();
  doc.save(`${safeName}-birth-chart-report.pdf`);
}
