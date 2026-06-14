"use client";

import { ArrowUpRight } from "lucide-react";
import {
  getArticleById,
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

function ArticleBlock({
  block,
  lang,
}: {
  block: WisdomArticleBlock;
  lang: EducationLang;
}) {
  if (block.type === "heading") {
    if (block.level === 2) {
      return (
        <h3 className="font-serif text-xl md:text-2xl text-shell-warm tracking-tight mt-8 mb-4 first:mt-0">
          {t(block.text, lang)}
        </h3>
      );
    }
    return (
      <h4 className="font-serif text-lg text-shell-warm/95 mt-6 mb-3">
        {t(block.text, lang)}
      </h4>
    );
  }

  const text = t(block.text, lang);
  if (text.startsWith("Q. ")) {
    return (
      <p className="text-sm leading-relaxed text-shell-warm font-medium mt-5 mb-1">
        {text}
      </p>
    );
  }
  if (text.startsWith("A. ")) {
    return (
      <p className="text-sm leading-relaxed text-shell-muted mb-4 pl-3 border-l-2 border-shell-accent/30">
        {text}
      </p>
    );
  }

  return (
    <p className="text-sm leading-relaxed text-shell-muted mb-4 last:mb-0">
      {text}
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
        {lang === "ja" ? "関連する智慧" : "Related Wisdom"}
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
          {lang === "ja" ? "ヴェーダの智慧" : "Vedic Wisdom"}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-shell-warm tracking-tight leading-tight">
          {t(article.title, lang)}
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
