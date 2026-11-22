"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { SHUKU_DISPLAY_ORDER, pairHref, shukuBySlug } from "@/lib/sukuyo/shuku";
import { trackEvent } from "@/lib/analytics/events";

/**
 * "Pick two 宿 and see their compatibility": two selects and a button that
 * opens the pair page. Japanese only, like every 宿曜 page.
 */
export default function ShukuPicker({
  self,
  partner,
  title = "相性を調べる",
}: {
  /** Preselected own 宿 (slug). */
  self?: string;
  partner?: string;
  title?: string;
}) {
  const router = useRouter();
  const [a, setA] = useState(self ?? "");
  const [b, setB] = useState(partner ?? "");
  const ready = Boolean(shukuBySlug(a) && shukuBySlug(b));

  const go = (event: React.FormEvent) => {
    event.preventDefault();
    const sa = shukuBySlug(a);
    const sb = shukuBySlug(b);
    if (!sa || !sb) return;
    trackEvent("sukuyo_pair_opened", { from: sa.slug, to: sb.slug });
    router.push(pairHref(sa, sb));
  };

  const select = (id: string, label: string, value: string, onChange: (v: string) => void) => (
    <label htmlFor={id} className="block min-w-0 flex-1">
      <span className="mb-1.5 block text-xs text-text-muted">{label}</span>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className="washi-field w-full cursor-pointer p-3 text-base">
        <option value="" disabled>
          宿を選ぶ
        </option>
        {SHUKU_DISPLAY_ORDER.map((s) => (
          <option key={s.slug} value={s.slug}>
            {s.kanji}（{s.reading}）
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <form onSubmit={go} className="chart-card p-5 sm:p-6" aria-label={title}>
      <h2 className="font-header text-[length:var(--step-1)] text-ink">{title}</h2>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        {select("pick-self", "あなたの宿", a, setA)}
        <span aria-hidden className="hidden pb-3 text-text-muted sm:block">×</span>
        {select("pick-partner", "相手の宿", b, setB)}
        <button type="submit" disabled={!ready} className="washi-btn-primary shrink-0 gap-2 px-5 disabled:opacity-50">
          相性を見る
          <ArrowRight size={16} aria-hidden />
        </button>
      </div>
    </form>
  );
}
