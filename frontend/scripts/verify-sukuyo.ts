/**
 * Checks the 宿曜 / daily-fortune logic (lib/sukuyo, lib/daily).
 * Run: npx tsx scripts/verify-sukuyo.ts   (exit code 1 on any failure)
 */
import { SHUKUS, SHUKU_DISPLAY_ORDER, shukuByKanji } from "../src/lib/sukuyo/shuku";
import { relationOf, taraOf, RELATION_KANJI, type RelationKind } from "../src/lib/sukuyo/relations";
import {
  moonShukuIndex,
  moonSignIndex,
  moonTransitHouse,
  shukuSpansOfDay,
  mainShukuOfDay,
  jstDate,
} from "../src/lib/daily/moon-day";

let failures = 0;
const check = (ok: boolean, label: string, detail = "") => {
  if (!ok) failures++;
  console.log(`${ok ? "OK  " : "FAIL"} ${label}${detail ? ` — ${detail}` : ""}`);
};
const K = (kanji: string) => shukuByKanji(kanji)!;

// 1. The 27 宿
check(SHUKUS.length === 27, "27 宿");
check(new Set(SHUKUS.map((s) => s.kanji)).size === 27, "unique kanji");
check(new Set(SHUKUS.map((s) => s.slug)).size === 27, "unique slugs");
check(!SHUKUS.some((s) => s.kanji === "牛宿"), "牛宿 is not among the 27");
const TRADITIONAL = "昴畢觜参井鬼柳星張翼軫角亢氐房心尾箕斗女虚危室壁奎婁胃";
check(SHUKU_DISPLAY_ORDER.map((s) => s.kanji[0]).join("") === TRADITIONAL, "cycle matches the traditional 27-宿 order", SHUKU_DISPLAY_ORDER.map((s) => s.kanji[0]).join(""));

// 2. Every ordered pair mirrors its reverse
let mirrorOk = true;
for (const a of SHUKUS)
  for (const b of SHUKUS) {
    const ab = relationOf(a, b);
    const ba = relationOf(b, a);
    if (ab.reverse !== ba.kind || ab.kind !== ba.reverse || ab.group !== ba.group || ab.distance !== ba.distance || ab.steps !== ba.steps) {
      mirrorOk = false;
      console.log("  mirror mismatch", a.kanji, b.kanji, ab, ba);
    }
  }
check(mirrorOk, "729 pairs: relation, group and distance mirror both ways");

// 3. Per 宿: 命・業・胎 once each; eight others three times, one per distance
let countsOk = true;
for (const a of SHUKUS) {
  const counts = new Map<string, number>();
  for (const b of SHUKUS) {
    const r = relationOf(a, b);
    const key = r.distance ? `${r.kind}:${r.distance}` : r.kind;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  for (const k of ["mei", "gyou", "tai"]) if (counts.get(k) !== 1) countsOk = false;
  for (const k of ["ei", "shin", "yuu", "sui", "an", "kai", "ki", "sei"])
    for (const d of ["near", "mid", "far"]) if (counts.get(`${k}:${d}`) !== 1) countsOk = false;
}
check(countsOk, "each 宿: 命/業/胎 ×1, 栄親友衰安壊危成 ×3 (近・中・遠 one each)");

// 4. Classical worked example (本命宿 昴宿)
const sub = K("昴宿");
const ex = [
  ["畢宿", "ei", "near"],
  ["女宿", "ei", "mid"],
  ["軫宿", "ei", "far"],
] as const;
for (const [kanji, kind, dist] of ex) {
  const r = relationOf(sub, K(kanji));
  check(r.kind === kind && r.distance === dist, `昴宿 → ${kanji} = ${RELATION_KANJI[kind]} ${dist}`, `got ${RELATION_KANJI[r.kind]} ${r.distance}`);
}
check(relationOf(sub, sub).kind === "mei", "昴宿 → 昴宿 = 命");
check(relationOf(sub, K("翼宿")).kind === "gyou", "昴宿 → 翼宿 (10th) = 業");
check(relationOf(sub, K("斗宿")).kind === "tai", "昴宿 → 斗宿 (19th) = 胎");
check(relationOf(K("畢宿"), sub).kind === "shin", "畢宿 → 昴宿 = 親 (mirror of 栄)");

// 5. Tara bala follows the same nine-step cycle
const TARA_FOR: Record<RelationKind, string> = { mei: "janma", gyou: "janma", tai: "janma", ei: "sampat", sui: "vipat", an: "kshema", ki: "pratyak", sei: "sadhana", kai: "naidhana", yuu: "mitra", shin: "paramaMitra" };
let taraOk = true;
for (const a of SHUKUS) for (const b of SHUKUS) if (taraOf(a.index, b.index) !== TARA_FOR[relationOf(a, b).kind]) taraOk = false;
check(taraOk, "tara bala = 命栄衰安危成壊友親 cycle for all 729");

// 6. The Moon: Taro, 1990-05-15 08:30 JST, Tokyo — the engine puts the
//    Moon at 27° Sagittarius (Uttara Ashadha), which is 斗宿.
const taro = new Date(Date.UTC(1990, 4, 14, 23, 30));
check(SHUKUS[moonShukuIndex(taro)].kanji === "斗宿", "Moon 1990-05-15 08:30 JST in 斗宿", SHUKUS[moonShukuIndex(taro)].kanji);
check(moonSignIndex(taro) === 8, "Moon 1990-05-15 08:30 JST in Sagittarius (8)", String(moonSignIndex(taro)));

// 7. Day spans cover the Japan day without gaps
for (const date of [jstDate(new Date()), { year: 2026, month: 11, day: 22 }, { year: 2027, month: 1, day: 1 }]) {
  const spans = shukuSpansOfDay(date);
  const contiguous = spans.every((s, i) => i === 0 || s.from.getTime() === spans[i - 1].until.getTime());
  const covers = spans[spans.length - 1].until.getTime() - spans[0].from.getTime() === 24 * 3600_000;
  const fmt = (d: Date) => new Date(d.getTime() + 9 * 3600_000).toISOString().slice(11, 16);
  check(contiguous && covers, `${date.year}-${date.month}-${date.day} JST spans cover the day`, spans.map((s) => `${s.shuku.kanji} ${fmt(s.from)}–${fmt(s.until)}`).join(", ") + ` · main ${mainShukuOfDay(date).kanji}`);
}

// 8. Moon transit houses
check(moonTransitHouse(0, 7) === 8, "natal Aries, Moon in Scorpio → 8th (chandrashtama)");
check(moonTransitHouse(11, 0) === 2, "natal Pisces, Moon in Aries → 2nd");
check(moonTransitHouse(5, 5) === 1, "same sign → 1st");

console.log(failures ? `\n${failures} failed` : "\nall checks passed");
process.exit(failures ? 1 : 0);
