import Image from "next/image";
import { FormattedText } from "@/lib/format-inline-text";
import type {
  BilingualText,
  EducationLang,
  WisdomArticleBlock,
} from "@/lib/education/types";

/**
 * Server-rendered article body (Phase 3.3 / 2.2).
 *
 * `WisdomArticleView` does the same job as a client component inside a
 * 1,227-line hub. Here the prose is plain HTML in the initial response, which
 * is what makes the corpus indexable and stops shipping static text as JS.
 *
 * Headings render as `h2`/`h3` — the page `h1` is the article title — so the
 * document outline is real rather than visual.
 */
function t(text: BilingualText, lang: EducationLang) {
  return text[lang];
}

function ArticleTable({
  headers,
  rows,
  lang,
}: {
  headers: BilingualText[];
  rows: BilingualText[][];
  lang: EducationLang;
}) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[28rem] text-left text-sm">
        <thead>
          <tr className="washi-table-header border-b border-border">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 font-medium text-terracotta-deep">
                <FormattedText text={t(header, lang)} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-border last:border-b-0">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-3 font-chart leading-relaxed text-text ${
                    cellIndex === 0 ? "font-medium" : ""
                  }`}
                >
                  <FormattedText text={t(cell, lang)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArticleBlock({
  block,
  lang,
}: {
  block: WisdomArticleBlock;
  lang: EducationLang;
}) {
  if (block.type === "table") {
    return <ArticleTable headers={block.headers} rows={block.rows} lang={lang} />;
  }

  if (block.type === "image") {
    return (
      <figure className="washi-mat my-7">
        <Image
          src={block.src}
          alt={t(block.alt, lang)}
          width={800}
          height={600}
          sizes="(max-width: 768px) 100vw, 672px"
        />
      </figure>
    );
  }

  if (block.type === "heading") {
    if (block.level === 2) {
      return (
        <h2 className="mt-10 mb-4 font-header text-[length:var(--step-2)] tracking-tight text-ink first:mt-0">
          <FormattedText text={t(block.text, lang)} />
        </h2>
      );
    }
    return (
      <h3 className="mt-7 mb-3 font-header text-[length:var(--step-1)] text-ink">
        <FormattedText text={t(block.text, lang)} />
      </h3>
    );
  }

  const text = t(block.text, lang);
  // The source corpus encodes Q/A and bullets as prose prefixes on the English
  // string; the translations preserve the marker positionally.
  const sourceText = block.text.en;

  if (sourceText.startsWith("Q. ")) {
    return (
      <p className="mt-6 mb-1 font-body font-medium text-text">
        <FormattedText text={text} />
      </p>
    );
  }

  if (sourceText.startsWith("A. ")) {
    return (
      <p className="washi-blockquote mb-5 font-body text-text-muted">
        <FormattedText text={text} />
      </p>
    );
  }

  if (sourceText.startsWith("• ")) {
    return (
      <p className="relative mb-2 pl-4 font-body text-text before:absolute before:-ml-4 before:text-terracotta before:content-['·']">
        <FormattedText text={text.replace(/^•\s*/, "")} />
      </p>
    );
  }

  return (
    <p className="mb-5 font-body text-text last:mb-0">
      <FormattedText text={text} />
    </p>
  );
}

export default function ArticleBlocks({
  blocks,
  lang,
}: {
  blocks: WisdomArticleBlock[];
  lang: EducationLang;
}) {
  return (
    <>
      {blocks.map((block, index) => (
        <ArticleBlock key={index} block={block} lang={lang} />
      ))}
    </>
  );
}
