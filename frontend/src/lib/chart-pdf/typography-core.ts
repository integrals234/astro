export type TextMeasurer = (text: string) => number;

function graphemes(text: string, locale: string): string[] {
  const Segmenter = Intl.Segmenter;
  if (!Segmenter) {
    throw new Error("Intl.Segmenter is required for grapheme-safe PDF text layout.");
  }
  return Array.from(new Segmenter(locale, { granularity: "grapheme" }).segment(text), ({ segment }) => segment);
}

function splitOversizedToken(
  token: string,
  maxWidth: number,
  measure: TextMeasurer,
  locale: string,
): string[] {
  const lines: string[] = [];
  let line = "";
  for (const grapheme of graphemes(token, locale)) {
    const candidate = line + grapheme;
    if (line && measure(candidate) > maxWidth) {
      lines.push(line);
      line = grapheme;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/** Wraps text without ever splitting an Intl.Segmenter grapheme cluster. */
export function wrapMeasuredText(
  text: string,
  maxWidth: number,
  measure: TextMeasurer,
  locale = "en",
): string[] {
  if (!(maxWidth > 0)) throw new Error("PDF text width must be greater than zero.");
  const paragraphs = (text || "—").split(/\r?\n/);
  const output: string[] = [];

  paragraphs.forEach((paragraph) => {
    if (!paragraph) {
      output.push("");
      return;
    }

    const tokens = paragraph.match(/\S+\s*/gu) ?? [paragraph];
    let line = "";
    for (const token of tokens) {
      const candidate = line + token;
      if (measure(candidate.trimEnd()) <= maxWidth) {
        line = candidate;
        continue;
      }

      if (line) output.push(line.trimEnd());
      const cleanToken = token.trim();
      if (measure(cleanToken) <= maxWidth) {
        line = cleanToken + (token.endsWith(" ") ? " " : "");
        continue;
      }

      const pieces = splitOversizedToken(cleanToken, maxWidth, measure, locale);
      output.push(...pieces.slice(0, -1));
      line = pieces.at(-1) ?? "";
      if (token.endsWith(" ")) line += " ";
    }
    if (line || paragraph.length > 0) output.push(line.trimEnd());
  });

  return output.length ? output : ["—"];
}

export function segmentGraphemes(text: string, locale = "hi"): string[] {
  return graphemes(text, locale);
}
