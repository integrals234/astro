import type { ChartData, ChartFormData } from "./chart-types";
import { generateSampleReportPdf } from "./chart-pdf/sample-report";
import type { PdfLanguage } from "./chart-pdf/i18n";

interface PdfInput {
  name: string;
  locationName: string;
  formData: ChartFormData;
  chartData: ChartData;
  lang?: PdfLanguage;
}

/** Generates a localized Jyotish Life–style Vedic birth chart PDF. */
export async function downloadChartPdf(input: PdfInput) {
  return generateSampleReportPdf(input);
}
