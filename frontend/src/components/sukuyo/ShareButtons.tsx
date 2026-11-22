"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics/events";
import { SITE_URL } from "@/lib/seo/site";

/**
 * Share a 宿曜 page to LINE or X, or copy its link. LINE first: in Japan it
 * is where a compatibility result actually gets passed on.
 */
export default function ShareButtons({ path, text }: { path: string; text: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE_URL}${path}`;
  const line = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`;
  const x = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  const track = (method: "line" | "x" | "clipboard") => trackEvent("result_shared", { locale: "ja", method, page: path });

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      track("clipboard");
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the link is still in the address bar */
    }
  };

  const btn = "inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border bg-washi-elevated px-4 text-sm text-ink transition-colors hover:border-terracotta/50";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs text-text-muted">シェア</span>
      <a href={line} target="_blank" rel="noopener noreferrer" onClick={() => track("line")} className={btn}>
        <span aria-hidden className="flex h-5 w-5 items-center justify-center rounded-[6px] bg-[#06C755] text-[9px] font-bold text-white">
          LINE
        </span>
        LINEで送る
      </a>
      <a href={x} target="_blank" rel="noopener noreferrer" onClick={() => track("x")} className={btn}>
        <span aria-hidden className="font-semibold">𝕏</span>
        ポスト
      </a>
      <button type="button" onClick={copy} className={btn}>
        {copied ? <Check size={15} aria-hidden /> : <Link2 size={15} aria-hidden />}
        {copied ? "コピーしました" : "リンクをコピー"}
      </button>
    </div>
  );
}
