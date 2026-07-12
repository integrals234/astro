/** Exact colors sampled from temp-content/indian_astrology_chart.pdf */

export const SAMPLE_COLORS = {
  /** Page fill (0.961, 0.941, 0.902) */
  pageBg: [245, 240, 230] as [number, number, number],
  /** Dark section bars (0.184…) */
  headerBar: [47, 47, 47] as [number, number, number],
  /** Planet/house column header cells (0.929, 0.89, 0.827) */
  tableHeader: [237, 227, 211] as [number, number, number],
  /** Alternating table body stripe (0.89, 0.855, 0.796) */
  tableRowAlt: [227, 218, 203] as [number, number, number],
  /** Default table body / page tone */
  tableRow: [245, 240, 230] as [number, number, number],
  /** Birth-info label column (0.937, 0.902, 0.847) */
  birthLabelBg: [239, 230, 216] as [number, number, number],
  /** Birth-info value column */
  birthValueBg: [255, 255, 255] as [number, number, number],
  border: [175, 165, 148] as [number, number, number],
  /**
   * Primary body text — near-black so Regular Noto reads clearly.
   * Kept distinct from muted/caption by staying fully black while those stay charcoal.
   */
  text: [0, 0, 0] as [number, number, number],
  /** Formerly light sage/grey labels — darkened to charcoal olive */
  muted: [48, 52, 40] as [number, number, number],
  /** Aspect / footer captions — darkened charcoal brown */
  caption: [55, 50, 42] as [number, number, number],
  /** Terracotta accent #C77B4E */
  accent: [199, 123, 78] as [number, number, number],
  chartLine: [20, 20, 20] as [number, number, number],
  /** Chart peach diamonds (0.953, 0.894, 0.839) */
  chartPeach: [243, 228, 214] as [number, number, number],
  /** Chart sage side diamonds (0.937, 0.937, 0.89) */
  chartSage: [239, 239, 227] as [number, number, number],
  white: [255, 255, 255] as [number, number, number],
};

/** Layout metrics measured from the sample PDF (A4 pt). */
export const SAMPLE_PAGE = {
  width: 595.0,
  height: 842.0,
  margin: 34,
  contentRight: 560.2,
  contentBottom: 832,
  continuationTop: 6,
  chart: { x: 34, y: 89, size: 226 },
  birth: { x: 271, labelW: 80, valueX: 357, rowH: 19, rows: 8 },
  anchors: {
    titleBaseline: 46,
    subtitleBaseline: 60,
    planetSectionTop: 343,
    houseSectionTop: 598,
    page2RowsTop: 16,
    lagnaSectionTop: 211,
    beneficSectionTop: 724,
    page3BeneficRowsTop: 5,
    dashaSectionTop: 64,
    dashaBodyBaseline: 102,
    dashaNoteBaseline: 170.5,
    firstMahaBaseline: 191.3,
  },
  dashaCols: { planet: 39.7, age: 165.5, start: 231.5, end: 398.7 },
  planetCols: { planet: 40, sign: 174, nak: 383 },
  houseCols: { house: 40, theme: 139, sign: 493, planet: 518 },
};
