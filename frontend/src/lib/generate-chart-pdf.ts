import { jsPDF } from "jspdf";
import type { ChartData, ChartFormData } from "./chart-types";

function formatDMS(raw: number) {
  const l = raw % 30;
  const d = Math.floor(l);
  const mF = (l - d) * 60;
  const m = Math.floor(mF);
  const s = Math.floor((mF - m) * 60);
  return `${d}° ${m.toString().padStart(2, "0")}' ${s.toString().padStart(2, "0")}"`;
}

interface PdfInput {
  name: string;
  locationName: string;
  formData: ChartFormData;
  chartData: ChartData;
}

export function downloadChartPdf({
  name,
  locationName,
  formData,
  chartData,
}: PdfInput) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const margin = 40;
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = margin;

  const natalDate = `${formData.year}-${String(formData.month).padStart(2, "0")}-${String(formData.day).padStart(2, "0")}`;
  const natalTime = `${String(formData.hour).padStart(2, "0")}:${String(formData.minute).padStart(2, "0")}`;
  const transitDate = `${formData.transit_year}-${String(formData.transit_month).padStart(2, "0")}-${String(formData.transit_day).padStart(2, "0")}`;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(49, 46, 129);
  doc.text(name ? `${name} — Vedic Chart Report` : "Vedic Chart Report", margin, y);
  y += 24;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(75, 85, 99);
  doc.text(`Generated ${new Date().toLocaleString()}`, margin, y);
  y += 22;

  doc.setDrawColor(229, 231, 235);
  doc.line(margin, y, pageWidth - margin, y);
  y += 18;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(107, 114, 128);
  doc.text("BIRTH DETAILS", margin, y);
  y += 14;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(17, 24, 39);
  const details = [
    `Name: ${name}`,
    `Date: ${natalDate}    Time: ${natalTime}`,
    `Location: ${locationName}`,
    `Transit Date: ${transitDate}`,
    `Timezone: ${chartData.timezone_detected}`,
    `Ascendant: ${chartData.ascendant_sign} (${formatDMS(chartData.ascendant_longitude)})`,
    `Nakshatra: ${chartData.ascendant_nakshatra}`,
  ];
  if (chartData.sunrise) details.push(`Sunrise: ${chartData.sunrise}`);
  if (chartData.sunset) details.push(`Sunset: ${chartData.sunset}`);

  details.forEach((line) => {
    doc.text(line, margin, y);
    y += 14;
  });

  y += 8;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(107, 114, 128);
  doc.text("PLANETARY POSITIONS (D1)", margin, y);
  y += 14;

  doc.setFontSize(8);
  doc.setTextColor(55, 65, 81);
  doc.text("Planet", margin, y);
  doc.text("Sign", margin + 70, y);
  doc.text("House", margin + 150, y);
  doc.text("Longitude", margin + 200, y);
  doc.text("Nakshatra", margin + 290, y);
  y += 10;
  doc.line(margin, y, pageWidth - margin, y);
  y += 12;

  doc.setFont("helvetica", "normal");
  chartData.planets.forEach((planet) => {
    if (y > 760) return;
    const retro = planet.is_retrograde ? " (R)" : "";
    doc.text(`${planet.name}${retro}`, margin, y);
    doc.text(planet.sign, margin + 70, y);
    doc.text(String(planet.d1_house), margin + 150, y);
    doc.text(formatDMS(planet.longitude), margin + 200, y);
    doc.text(`${planet.nakshatra} P${planet.nakshatra_pada}`, margin + 290, y);
    y += 12;
  });

  if (chartData.vimshottari_dashas.length > 0 && y < 720) {
    y += 6;
    const maha = chartData.vimshottari_dashas[0];
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(107, 114, 128);
    doc.text("CURRENT MAHA DASHA", margin, y);
    y += 14;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(17, 24, 39);
    doc.text(
      `${maha.lord}: ${maha.start_date} → ${maha.end_date}`,
      margin,
      y
    );
  }

  doc.setFontSize(8);
  doc.setTextColor(156, 163, 175);
  doc.text("Astro — Vedic Chart Report", margin, 820);

  const safeName = (name || "chart").replace(/[^a-z0-9-_]+/gi, "-").toLowerCase();
  doc.save(`${safeName}-report.pdf`);
}
