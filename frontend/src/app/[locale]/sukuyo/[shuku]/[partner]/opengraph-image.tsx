import { ImageResponse } from "next/og";
import { relationLabel } from "@/lib/sukuyo/page-data";
import { RELATION_KANJI, relationOf } from "@/lib/sukuyo/relations";
import { shukuBySlug } from "@/lib/sukuyo/shuku";

/**
 * The card LINE and X show when a pair page is shared:
 * 「婁宿 × 胃宿 ＝ 栄親・近距離」. Rendered on first request and cached,
 * rather than 729 images at build time.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "宿曜占星術の相性";
export const dynamicParams = true;
export const revalidate = false;
export function generateStaticParams() {
  return [];
}

const PAPER = "#f5f1e8";
const INK = "#1b1a17";
const BRASS = "#7d5d1b";
const MUTED = "#66635b";

export default async function Image({ params }: { params: Promise<{ shuku: string; partner: string }> }) {
  const { shuku, partner } = await params;
  const a = shukuBySlug(shuku);
  const b = shukuBySlug(partner);
  if (!a || !b) return new Response("Not found", { status: 404 });
  const r = relationOf(a, b);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: PAPER, color: INK }}>
        <div style={{ display: "flex", fontSize: 30, color: BRASS, letterSpacing: 8 }}>宿曜占星術の相性</div>
        <div style={{ display: "flex", alignItems: "center", gap: 40, marginTop: 36, fontSize: 120 }}>
          <span>{a.kanji}</span>
          <span style={{ fontSize: 70, color: BRASS }}>×</span>
          <span>{b.kanji}</span>
        </div>
        <div style={{ display: "flex", marginTop: 36, padding: "14px 44px", borderRadius: 999, border: `3px solid ${BRASS}`, fontSize: 52, color: BRASS }}>
          {relationLabel(r)}
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: MUTED }}>
          {`${a.kanji}から見て「${RELATION_KANJI[r.kind]}」・${b.kanji}から見て「${RELATION_KANJI[r.reverse]}」`}
        </div>
        <div style={{ display: "flex", position: "absolute", bottom: 36, fontSize: 26, color: MUTED, letterSpacing: 4 }}>JYOTISH LIFE</div>
      </div>
    ),
    size,
  );
}
