"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FormattedText } from "@/lib/format-inline-text";
import {
  getArticleById,
  uiText,
  type EducationLang,
  type EducationNavigateTarget,
  type EducationSectionId,
  type WisdomArticle,
  type WisdomArticleBlock,
  type BilingualText,
} from "@/lib/education";

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
    <div className="my-5 overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[28rem] text-left text-sm">
        <thead>
          <tr className="washi-table-header border-b border-border">
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 font-medium text-terracotta"
              >
                <FormattedText text={t(header, lang)} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-border last:border-b-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-3 leading-relaxed font-chart text-text ${
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
    return (
      <ArticleTable headers={block.headers} rows={block.rows} lang={lang} />
    );
  }

  if (block.type === "image") {
    return (
      <figure className="my-6 washi-card overflow-hidden p-4 md:p-5">
        <Image
          src={block.src}
          alt={t(block.alt, lang)}
          width={800}
          height={600}
          unoptimized
          className="block w-full h-auto rounded-md"
          sizes="(max-width: 768px) 100vw, 672px"
        />
      </figure>
    );
  }

  if (block.type === "heading") {
    if (block.level === 2) {
      return (
        <h3 className="font-header text-[22px] text-ink tracking-tight mt-8 mb-4 first:mt-0">
          <FormattedText text={t(block.text, lang)} />
        </h3>
      );
    }
    return (
      <h4 className="font-header text-lg text-ink mt-6 mb-3">
        <FormattedText text={t(block.text, lang)} />
      </h4>
    );
  }

  const text = t(block.text, lang);
  const sourceText = block.text.en;
  if (sourceText.startsWith("Q. ")) {
    return (
      <p className="font-body text-base leading-[1.9] text-text font-medium mt-5 mb-1">
        <FormattedText text={text} />
      </p>
    );
  }
  if (sourceText.startsWith("A. ")) {
    return (
      <p className="washi-blockquote font-body text-base leading-[1.9] text-text-muted mb-4">
        <FormattedText text={text} />
      </p>
    );
  }

  if (sourceText.startsWith("• ")) {
    return (
      <p className="font-body text-base leading-[1.9] text-text mb-2 pl-4 before:content-['·'] before:absolute before:-ml-4 before:text-terracotta relative">
        <FormattedText text={text.replace(/^•\s*/, "")} />
      </p>
    );
  }

  return (
    <p className="font-body text-base leading-[1.9] text-text mb-4 last:mb-0">
      <FormattedText text={text} />
    </p>
  );
}

export function RelatedWisdom({
  article,
  lang,
  onNavigate,
}: {
  article: WisdomArticle;
  lang: EducationLang;
  onNavigate: (target: EducationNavigateTarget) => void;
}) {
  const related = article.related
    .map((id) => getArticleById(id))
    .filter((a): a is WisdomArticle => Boolean(a));

  if (related.length === 0) return null;

  return (
    <aside className="mt-10 washi-card p-5 md:p-6">
      <p className="washi-eyebrow mb-4">
        {uiText("relatedWisdom", lang)}
      </p>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((rel) => (
          <button
            key={rel.id}
            type="button"
            onClick={() =>
              onNavigate({
                section: rel.section as EducationSectionId,
                articleId: rel.id,
              })
            }
            className="group flex items-start justify-between gap-2 rounded-md border border-border bg-washi-elevated px-4 py-3 text-left transition-colors hover:border-terracotta"
          >
            <span className="font-body text-sm text-text leading-snug">
              {t(rel.title, lang)}
            </span>
            <ArrowUpRight
              size={14}
              className="shrink-0 text-terracotta mt-0.5"
            />
          </button>
        ))}
      </div>
    </aside>
  );
}

export default function WisdomArticleView({
  article,
  lang,
  onNavigate,
}: {
  article: WisdomArticle;
  lang: EducationLang;
  onNavigate: (target: EducationNavigateTarget) => void;
}) {
  return (
    <article className="mx-auto max-w-[680px]">
      <header className="mb-8">
        <p className="washi-eyebrow mb-3">
          {uiText("vedicWisdom", lang)}
        </p>
        <h2 className="font-header text-[30px] text-ink tracking-tight leading-tight">
          <FormattedText text={t(article.title, lang)} />
        </h2>
      </header>

      <div className="washi-card p-6 md:p-8">
        {article.blocks.map((block, i) => (
          <ArticleBlock key={i} block={block} lang={lang} />
        ))}
      </div>

      <RelatedWisdom article={article} lang={lang} onNavigate={onNavigate} />
    </article>
  );
}
