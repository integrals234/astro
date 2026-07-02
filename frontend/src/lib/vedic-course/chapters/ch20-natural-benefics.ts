import { Heart } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter20NaturalBenefics: CourseChapter = {
  id: "ch20",
  number: 20,
  title: { en: "Natural Benefics & Malefics", ja: "天然吉星と凶星" },
  subtitle: {
    en: "Shubha, Papa, and the nature of each Graha",
    ja: "シュバ、パパ、各グラハの性質",
  },
  icon: Heart,
  steps: [
    {
      id: "ch20-s0",
      kind: "content",
      icon: "sparkles",
      title: { en: "Shubha vs Papa", ja: "シュバ vs パパ" },
      body: {
        en: "From the highest Vedantic view, there is no ultimate good or bad — planets deliver karmas on schedule. Practically, Jyotish calls planets benefic (shubha) when they bring happiness and fulfilment, and malefic (papa) when they bring obstacles and suffering.",
        ja: "最高のヴェーダンタの見地では究極の善悪はない — 惑星がカルマを予定通り届ける。実践的に、ジョーティシュは幸福と充実をもたらす惑星を吉星（シュバ）、障害と苦しみをもたらす凶星（パパ）と呼ぶ。",
      },
      highlight: {
        en: "Natural nature is only the starting point — sign strength and functional status modify everything.",
        ja: "天然の性質は出発点のみ — 星座強度と機能ステータスがすべてを修飾。",
      },
    },
    {
      id: "ch20-s1",
      kind: "content",
      icon: "droplets",
      title: { en: "The Natural List", ja: "天然リスト" },
      body: {
        en: "Natural benefics: Venus, Jupiter, waxing Moon. Natural malefics: Mars, Saturn, Rahu, Ketu. Special cases: Mercury adopts its company; Sun is \"cruel\" not strictly malefic; waning Moon is mildly malefic (ashubha).",
        ja: "天然吉星：金星、木星、満ちていく月。天然凶星：火星、土星、ラーフ、ケートゥ。特殊：水星は仲間を取り込む；太陽は凶星というより「厳しい」；欠けていく月は軽い凶星（アシュバ）。",
      },
      bullets: [
        { en: "Jupiter & Venus — universally gentle natural benefics", ja: "木星と金星 — 普遍的に穏やかな天然吉星" },
        { en: "Rahu & Ketu — always natural malefics (no house ownership)", ja: "ラーフとケートゥ — 常に天然凶星（ハウス支配なし）" },
        { en: "Nine Grahas only — no Neptune, Uranus, Pluto, Chiron", ja: "9グラハのみ — 海王星、天王星、冥王星、キロンなし" },
      ],
    },
    {
      id: "ch20-s2",
      kind: "content",
      icon: "sun",
      title: { en: "The Sun — Cruel, Not Malefic", ja: "太陽 — 凶星ではなく厳しい" },
      body: {
        en: "Western astrologers often treat the Sun as benefic. In Jyotish, the Sun's intense heat makes it \"cruel\" (krura). Planets too close combust — benefics like Venus lose power; malefics like Mars may become more troublesome.",
        ja: "西洋占星術師は太陽を吉星とすることが多い。ジョーティシュでは太陽の激しい熱が「厳しい」（クルラ）にする。近すぎる惑星は燃焼 — 金星など吉星は力を失い；火星など凶星はより厄介に。",
      },
    },
    {
      id: "ch20-s3",
      kind: "content",
      icon: "moon",
      title: { en: "The Moon — Waxing vs Waning", ja: "月 — 満ち vs 欠け" },
      body: {
        en: "A Full Moon is highly auspicious. Waxing Moon (brightening) = natural benefic. Waning Moon (darkening) = mildly malefic or ashubha — not as harsh as Mars or Saturn, but less supportive than a bright Moon.",
        ja: "満月は非常に吉。満ちていく月（明るくなる）＝天然吉星。欠けていく月（暗くなる）＝軽い凶星またはアシュバ — 火星や土星ほど厳しくないが、明るい月ほど支援的ではない。",
      },
    },
    {
      id: "ch20-s4",
      kind: "content",
      icon: "wind",
      title: { en: "Mercury & Strong Malefics", ja: "水星と強い凶星" },
      body: {
        en: "Mercury alone or with benefics → acts benefic. Mercury with malefics → acts malefic. A strong malefic in exaltation or own sign often contributes positively — strong Mars gives courage; strong Saturn gives humility and discipline (though its dasha may still bring sorrow).",
        ja: "水星単独または吉星と→吉星として振る舞う。水星と凶星→凶星として振る舞う。高揚または支配星座の強い凶星はしばしばポジティブに貢献 — 強い火星は勇気；強い土星は謙虚さと規律（ダシャーでは悲しみも）。",
      },
      highlight: {
        en: "A weak malefic creates more difficulty than a strong one.",
        ja: "弱い凶星は強い凶星より多くの困難を生む。",
      },
    },
    {
      id: "ch20-flash",
      kind: "flashcards",
      title: { en: "Natural Nature Flashcards", ja: "天然性質 フラッシュカード" },
      instruction: {
        en: "Classify each Graha's natural nature. Flip all cards to continue.",
        ja: "各グラハの天然性質を分類。すべて見て進みます。",
      },
      cards: [
        { id: "n1", front: { en: "Jupiter (Guru)", ja: "木星（グル）" }, back: { en: "Natural benefic (shubha)", ja: "天然吉星（シュバ）" }, icon: "sparkles" },
        { id: "n2", front: { en: "Saturn (Shani)", ja: "土星（シャニ）" }, back: { en: "Natural malefic (papa)", ja: "天然凶星（パパ）" }, icon: "mountain" },
        { id: "n3", front: { en: "Sun (Surya)", ja: "太陽（スーリヤ）" }, back: { en: "Cruel (krura), not malefic", ja: "厳しい（クルラ）、凶星ではない" }, icon: "sun" },
        { id: "n4", front: { en: "Waning Moon", ja: "欠けていく月" }, back: { en: "Mildly malefic (ashubha)", ja: "軽い凶星（アシュバ）" }, icon: "moon" },
        { id: "n5", front: { en: "Mercury with Mars", ja: "火星と水星" }, back: { en: "Acts as malefic", ja: "凶星として振る舞う" }, icon: "wind" },
        { id: "n6", front: { en: "Rahu & Ketu", ja: "ラーフとケートゥ" }, back: { en: "Always natural malefics", ja: "常に天然凶星" }, icon: "orbit" },
      ],
    },
    {
      id: "ch20-match",
      kind: "match",
      title: { en: "Planet to Natural Class", ja: "惑星と天然分類マッチ" },
      instruction: {
        en: "Match each Graha to its natural benefic or malefic classification.",
        ja: "各グラハを天然吉星または凶星分類にマッチ。",
      },
      pairs: [
        { leftId: "ven", left: { en: "Venus", ja: "金星" }, rightId: "ben", right: { en: "Natural benefic", ja: "天然吉星" }, leftIcon: "droplets" },
        { leftId: "mar", left: { en: "Mars", ja: "火星" }, rightId: "mal", right: { en: "Natural malefic", ja: "天然凶星" }, leftIcon: "flame" },
        { leftId: "rah", left: { en: "Rahu", ja: "ラーフ" }, rightId: "mal2", right: { en: "Natural malefic", ja: "天然凶星" }, leftIcon: "orbit" },
        { leftId: "wax", left: { en: "Waxing Moon", ja: "満ちていく月" }, rightId: "ben2", right: { en: "Natural benefic", ja: "天然吉星" }, leftIcon: "moon" },
        { leftId: "sun", left: { en: "Sun", ja: "太陽" }, rightId: "cru", right: { en: "Cruel (krura)", ja: "厳しい（クルラ）" }, leftIcon: "sun" },
      ],
    },
    {
      id: "ch20-order",
      kind: "order",
      title: { en: "Assessing a Planet's Power", ja: "惑星の力の評価" },
      instruction: {
        en: "Order the layers when judging how a planet will perform (first → last).",
        ja: "惑星の性能を判断する層を並べましょう（最初→最後）。",
      },
      items: [
        { id: "nat", label: { en: "1. Natural benefic/malefic nature", ja: "1. 天然吉星/凶星の性質" }, icon: "heart" },
        { id: "str", label: { en: "2. Sign strength (exalted/own/debilitated)", ja: "2. 星座強度（高揚/支配/弱体）" }, icon: "mountain" },
        { id: "func", label: { en: "3. Functional status for your Lagna", ja: "3. ラグナに対する機能ステータス" }, icon: "compass" },
        { id: "mod", label: { en: "4. Modifiers (combust/retrograde/aspects)", ja: "4. 修飾因子（燃焼/逆行/アスペクト）" }, icon: "eye" },
      ],
    },
    {
      id: "ch20-tf",
      kind: "true-false",
      title: { en: "Natural Nature: True or False", ja: "天然性質 マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "c20tf1",
          statement: { en: "In Jyotish, the Sun is classified as a natural malefic like Mars.", ja: "ジョーティシュでは太陽は火星のような天然凶星に分類される。" },
          isTrue: false,
          explanation: { en: "The Sun is \"cruel\" (krura) — intense but not classified as papa/malefic.", ja: "太陽は「厳しい」（クルラ）— 激しいがパパ/凶星には分類されない。" },
        },
        {
          id: "c20tf2",
          statement: { en: "Mercury adopts the nature of planets it associates with.", ja: "水星は関わる惑星の性質を取り込む。" },
          isTrue: true,
          explanation: { en: "With benefics → benefic; with malefics → malefic.", ja: "吉星と→吉星；凶星と→凶星。" },
        },
        {
          id: "c20tf3",
          statement: { en: "A strong natural malefic in exaltation can still contribute positively.", ja: "高揚の強い天然凶星は依然としてポジティブに貢献できる。" },
          isTrue: true,
          explanation: { en: "Strong Mars gives courage; strong Saturn gives discipline.", ja: "強い火星は勇気；強い土星は規律。" },
        },
        {
          id: "c20tf4",
          statement: { en: "Rahu and Ketu are natural benefics because they have no house rulership.", ja: "ラーフとケートゥはハウス支配がないので天然吉星だ。" },
          isTrue: false,
          explanation: { en: "They are always natural malefics despite owning no signs.", ja: "星座を支配しないが常に天然凶星。" },
        },
      ],
    },
    {
      id: "ch20-multi",
      kind: "multi-select",
      title: { en: "Natural Benefics Challenge", ja: "天然吉星チャレンジ" },
      question: {
        en: "Which are natural benefics (shubha) in Jyotish? Select ALL that apply.",
        ja: "ジョーティシュの天然吉星（シュバ）は？該当するものをすべて選んでください。",
      },
      options: [
        { id: "jup", label: { en: "Jupiter", ja: "木星" }, icon: "sparkles" },
        { id: "ven", label: { en: "Venus", ja: "金星" }, icon: "droplets" },
        { id: "wax", label: { en: "Waxing Moon", ja: "満ちていく月" }, icon: "moon" },
        { id: "sat", label: { en: "Saturn", ja: "土星" }, icon: "mountain" },
        { id: "wan", label: { en: "Waning Moon", ja: "欠けていく月" }, icon: "wind" },
        { id: "ket", label: { en: "Ketu", ja: "ケートゥ" }, icon: "orbit" },
      ],
      correctOptionIds: ["jup", "ven", "wax"],
      explanation: {
        en: "Jupiter, Venus, and waxing Moon are natural benefics — Saturn, waning Moon, and Ketu are not.",
        ja: "木星・金星・満ちていく月が天然吉星 — 土星・欠けていく月・ケートゥは該当しない。",
      },
    },
    {
      id: "ch20-quiz",
      kind: "quiz",
      question: {
        en: "What happens to a natural benefic like Venus when combust near the Sun?",
        ja: "太陽近くで燃焼した金星などの天然吉星はどうなる？",
      },
      options: [
        { id: "strong", label: { en: "Becomes even stronger", ja: "さらに強くなる" }, icon: "sun" },
        { id: "weak", label: { en: "Unable to deliver usual positive effects", ja: "通常のポジティブ効果を届けられない" }, icon: "mountain" },
        { id: "same", label: { en: "No change in power", ja: "力に変化なし" }, icon: "wind" },
        { id: "malefic", label: { en: "Becomes a natural malefic permanently", ja: "永久に天然凶星になる" }, icon: "flame" },
      ],
      correctOptionId: "weak",
      explanation: {
        en: "Combustion scorches benefics — Venus loses its ability to give usual good results.",
        ja: "燃焼は吉星を焦がす — 金星は通常の良い結果を与える能力を失う。",
      },
    },
  ],
};
