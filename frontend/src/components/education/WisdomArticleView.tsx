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
    <div className="my-5 overflow-x-auto rounded-xl border border-shell-border/70">
      <table className="w-full min-w-[28rem] text-left text-sm">
        <thead>
          <tr className="border-b border-shell-border/70 bg-shell-sidebar/60">
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-shell-accent"
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
              className="border-b border-shell-border/40 last:border-b-0 even:bg-shell-sidebar/20"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-3 leading-relaxed ${
                    cellIndex === 0
                      ? "font-medium text-shell-warm"
                      : "text-shell-muted"
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
      <figure className="my-6 overflow-hidden rounded-xl border border-shell-border/70 bg-shell-sidebar/20">
        <Image
          src={block.src}
          alt={t(block.alt, lang)}
          width={800}
          height={600}
          unoptimized
          className="block w-full h-auto"
          sizes="(max-width: 768px) 100vw, 672px"
        />
      </figure>
    );
  }

  if (block.type === "heading") {
    if (block.level === 2) {
      return (
        <h3 className="font-serif text-xl md:text-2xl text-shell-warm tracking-tight mt-8 mb-4 first:mt-0">
          <FormattedText text={t(block.text, lang)} />
        </h3>
      );
    }
    return (
      <h4 className="font-serif text-lg text-shell-warm/95 mt-6 mb-3">
        <FormattedText text={t(block.text, lang)} />
      </h4>
    );
  }

  const text = t(block.text, lang);
  if (text.startsWith("Q. ")) {
    return (
      <p className="text-sm leading-relaxed text-shell-warm font-medium mt-5 mb-1">
        <FormattedText text={text} />
      </p>
    );
  }
  if (text.startsWith("A. ")) {
    return (
      <p className="text-sm leading-relaxed text-shell-muted mb-4 pl-3 border-l-2 border-shell-accent/30">
        <FormattedText text={text} />
      </p>
    );
  }

  if (text.startsWith("• ")) {
    return (
      <p className="text-sm leading-relaxed text-shell-warm/90 mb-2 pl-4 before:content-['·'] before:absolute before:-ml-4 before:text-shell-accent relative">
        <FormattedText text={text.slice(2)} />
      </p>
    );
  }

  return (
    <p className="text-sm leading-relaxed text-shell-muted mb-4 last:mb-0">
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
    <aside className="mt-10 rounded-2xl border border-shell-border/80 bg-shell-sidebar/40 p-5 md:p-6">
      <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent mb-4">
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
            className="group flex items-start justify-between gap-2 rounded-xl border border-shell-border/60 bg-shell-elevated/30 px-4 py-3 text-left transition-all hover:border-shell-accent/40 hover:bg-shell-accent-soft/30"
          >
            <span className="text-sm text-shell-warm/90 leading-snug group-hover:text-shell-warm">
              {t(rel.title, lang)}
            </span>
            <ArrowUpRight
              size={14}
              className="shrink-0 text-shell-accent/70 group-hover:text-shell-accent mt-0.5"
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
    <article className="max-w-3xl">
      <header className="mb-8">
        <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent mb-3">
          {uiText("vedicWisdom", lang)}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-shell-warm tracking-tight leading-tight">
          <FormattedText text={t(article.title, lang)} />
        </h2>
      </header>

      <div className="rounded-2xl border border-shell-border bg-shell-elevated/40 p-6 md:p-8">
        {article.blocks.map((block, i) => (
          <ArticleBlock key={i} block={block} lang={lang} />
        ))}
      </div>

      <RelatedWisdom article={article} lang={lang} onNavigate={onNavigate} />
    </article>
  );
}
