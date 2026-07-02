import { LayoutGrid } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter19ChartMastery: CourseChapter = {
  id: "ch19",
  number: 19,
  title: { en: "Chart Formats & House Mastery", ja: "チャート形式とハウスマスター" },
  subtitle: {
    en: "North vs South Indian charts, classifications & body mapping",
    ja: "北インド vs 南インドチャート、分類と身体対応",
  },
  icon: LayoutGrid,
  steps: [
    {
      id: "ch19-s0",
      kind: "content",
      icon: "compass",
      title: { en: "Two Chart Formats, Same Data", ja: "二つのチャート形式、同じデータ" },
      body: {
        en: "Western astrologers use circular charts — uncommon in Jyotish. India uses two formats: North Indian (diamond grid, Ascendant always top) and South Indian (rectangular grid, fixed sign positions). Both show identical astrological information.",
        ja: "西洋占星術師は円形チャート — ジョーティシュでは一般的でない。インドは二形式：北インド（ダイヤグリッド、アセンダント常に上）と南インド（矩形グリッド、固定星座位置）。両方とも同一の占星情報。",
      },
      highlight: {
        en: "South Indian format is often easier for Western beginners — signs stay in fixed boxes.",
        ja: "南インド形式は西洋初心者にとって理解しやすい — 星座が固定ボックスに留まる。",
      },
    },
    {
      id: "ch19-s1",
      kind: "content",
      icon: "orbit",
      title: { en: "South Indian Chart Reading", ja: "南インドチャート読解" },
      body: {
        en: "In the South Indian chart, Pisces is always upper-left, Virgo lower-right. Signs count clockwise: Aries(1), Taurus(2)... A diagonal line marks the Ascendant sign. The whole sign becomes the 1st house; next sign = 2nd house, and so on.",
        ja: "南インドチャートでは魚が常に左上、乙女が右下。星座は時計回り：牡羊(1)、牡牛(2)... 斜線がアセンダント星座を示す。星座全体が第1ハウス；次の星座＝第2ハウス、以下同様。",
      },
      bullets: [
        { en: "1° Leo and 29° Leo Ascendant look identical in this format", ja: "獅子1°と29°アセンダントはこの形式で同一に見える" },
        { en: "Equal houses: each house = one complete sign", ja: "等分ハウス：各ハウス＝1完全星座" },
      ],
    },
    {
      id: "ch19-s2",
      kind: "content",
      icon: "mountain",
      title: { en: "House Classifications Deep Dive", ja: "ハウス分類 深掘り" },
      body: {
        en: "Beyond Kendras and Trikonas, know these groups: Dusthana (6,8,12 — challenging), Upachaya (3,6,10,11 — growing, malefics do well), and the Purushartha cycle repeating every four houses.",
        ja: "ケンドラとトリコナの他、これらのグループを知る：ダストハナ（6,8,12—困難）、ウパーチャヤ（3,6,10,11—成長、凶星が良い）、4ハウスごとに繰り返すプルシャールタサイクル。",
      },
      bullets: [
        { en: "5th & 9th Trikonas: most auspicious — planets here strengthened", ja: "第5・9トリコナ：最吉 — ここの惑星は強化" },
        { en: "6th/8th/12th lords often cause difficulty somewhere", ja: "第6/8/12支配星はどこかで困難を引き起こすことが多い" },
        { en: "Purushartha cycle: 1 Dharma, 2 Artha, 3 Kama, 4 Moksha → repeats", ja: "プルシャールタ：1ダルマ、2アルタ、3カーマ、4モークシャ→繰り返し" },
      ],
    },
    {
      id: "ch19-s3",
      kind: "content",
      icon: "eye",
      title: { en: "House Indicators (Karaka)", ja: "ハウス指標（カーラカ）" },
      body: {
        en: "Each house has a natural indicator planet: 1st→Sun, 2nd→Jupiter, 3rd→Mars, 4th→Moon, 5th→Jupiter, 6th→Mars, 7th→Venus, 8th→Saturn, 9th→Jupiter, 10th→Mercury, 11th→Jupiter, 12th→Saturn. A strong indicator supports that house's themes.",
        ja: "各ハウスに天然指標惑星：第1→太陽、第2→木星、第3→火星、第4→月、第5→木星、第6→火星、第7→金星、第8→土星、第9→木星、第10→水星、第11→木星、第12→土星。強い指標がそのハウステーマを支える。",
      },
    },
    {
      id: "ch19-s4",
      kind: "content",
      icon: "droplets",
      title: { en: "Houses & Body Parts", ja: "ハウスと身体部位" },
      body: {
        en: "Medical Jyotish maps houses to body regions: 1st=head, 2nd=face/throat, 4th=chest/heart, 5th=stomach, 7th=below waist, 8th=reproductive, 10th=knees, 12th=feet. A weakened house may indicate health vulnerability in that region.",
        ja: "メディカルジョーティシュはハウスを身体領域に対応：第1=頭、第2=顔/喉、第4=胸/心、第5=胃、第7=腰下、第8=生殖、第10=膝、第12=足。弱いハウスはその領域の健康脆弱性を示す可能性。",
      },
      highlight: {
        en: "Strong 1st house improves the overall horoscope quality significantly.",
        ja: "強い第1ハウスはチャート全体の質を大幅に改善。",
      },
    },
    {
      id: "ch19-s5",
      kind: "content",
      icon: "sparkles",
      title: { en: "Reading a House Completely", ja: "ハウスを完全に読む" },
      body: {
        en: "To assess any house: (1) strength of house lord — exalted/own/debilitated?, (2) planets occupying the house, (3) aspects received, (4) house indicator's condition, (5) house classification (Kendra/Trikona/Dusthana).",
        ja: "任意のハウスを評価：(1)ハウス支配星の強さ — 高揚/支配/弱体？、(2)ハウスを占有する惑星、(3)受けるアスペクト、(4)ハウス指標の状態、(5)ハウス分類（ケンドラ/トリコナ/ダストハナ）。",
      },
    },
    {
      id: "ch19-flash",
      kind: "flashcards",
      title: { en: "House Classification Flashcards", ja: "ハウス分類 フラッシュカード" },
      instruction: {
        en: "Match house groups to their names — flip all cards to continue.",
        ja: "ハウスグループと名称を結びつけ — すべて見て進みます。",
      },
      cards: [
        { id: "h1", front: { en: "Kendra", ja: "ケンドラ" }, back: { en: "Houses 1, 4, 7, 10 (angles)", ja: "第1・4・7・10（角）" }, icon: "compass" },
        { id: "h2", front: { en: "Trikona", ja: "トリコナ" }, back: { en: "Houses 1, 5, 9 (trines)", ja: "第1・5・9（トライン）" }, icon: "sparkles" },
        { id: "h3", front: { en: "Dusthana", ja: "ダストハナ" }, back: { en: "Houses 6, 8, 12 (challenging)", ja: "第6・8・12（困難）" }, icon: "mountain" },
        { id: "h4", front: { en: "Upachaya", ja: "ウパーチャヤ" }, back: { en: "Houses 3, 6, 10, 11 (growing)", ja: "第3・6・10・11（成長）" }, icon: "wind" },
        { id: "h5", front: { en: "7th house indicator", ja: "第7ハウス指標" }, back: { en: "Venus — marriage & partnerships", ja: "金星 — 結婚とパートナーシップ" }, icon: "droplets" },
        { id: "h6", front: { en: "12th house", ja: "第12ハウス" }, back: { en: "Loss, moksha, foreign lands, feet", ja: "損失・モークシャ・外国・足" }, icon: "moon" },
      ],
    },
    {
      id: "ch19-match",
      kind: "match",
      title: { en: "Body Part House Match", ja: "身体部位ハウスマッチ" },
      instruction: {
        en: "Connect each house to its corresponding body region.",
        ja: "各ハウスを対応する身体領域に結びつけましょう。",
      },
      pairs: [
        { leftId: "h1", left: { en: "1st House", ja: "第1ハウス" }, rightId: "head", right: { en: "Head", ja: "頭" }, leftIcon: "sun" },
        { leftId: "h5", left: { en: "5th House", ja: "第5ハウス" }, rightId: "stom", right: { en: "Stomach", ja: "胃" }, leftIcon: "flame" },
        { leftId: "h4", left: { en: "4th House", ja: "第4ハウス" }, rightId: "chest", right: { en: "Chest & heart", ja: "胸と心臓" }, leftIcon: "droplets" },
        { leftId: "h10", left: { en: "10th House", ja: "第10ハウス" }, rightId: "knee", right: { en: "Knees", ja: "膝" }, leftIcon: "mountain" },
        { leftId: "h12", left: { en: "12th House", ja: "第12ハウス" }, rightId: "feet", right: { en: "Feet", ja: "足" }, leftIcon: "moon" },
      ],
    },
    {
      id: "ch19-order",
      kind: "order",
      title: { en: "Purushartha House Cycle", ja: "プルシャールタハウスサイクル" },
      instruction: {
        en: "Order the four Purusharthas as they cycle through houses 1–4.",
        ja: "第1–4ハウスを通じてサイクルする四プルシャールタを並べましょう。",
      },
      items: [
        { id: "dhar", label: { en: "1st house: Dharma (duty)", ja: "第1ハウス：ダルマ（義務）" }, icon: "compass" },
        { id: "arth", label: { en: "2nd house: Artha (wealth)", ja: "第2ハウス：アルタ（富）" }, icon: "mountain" },
        { id: "kam", label: { en: "3rd house: Kama (desire)", ja: "第3ハウス：カーマ（欲望）" }, icon: "droplets" },
        { id: "mok", label: { en: "4th house: Moksha (liberation)", ja: "第4ハウス：モークシャ（解放）" }, icon: "sparkles" },
      ],
    },
    {
      id: "ch19-tf",
      kind: "true-false",
      title: { en: "Chart & House Facts: True or False", ja: "チャートとハウス マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "c19tf1",
          statement: { en: "North and South Indian charts contain different astrological data.", ja: "北インドと南インドチャートは異なる占星データを含む。" },
          isTrue: false,
          explanation: { en: "Same data — only the visual layout differs.", ja: "同じデータ — 視覚レイアウトのみ異なる。" },
        },
        {
          id: "c19tf2",
          statement: { en: "Malefic planets generally perform well in Upachaya houses (3,6,10,11).", ja: "凶星は一般にウパーチャヤハウス（3,6,10,11）で良く機能する。" },
          isTrue: true,
          explanation: { en: "Upachaya = growing houses — difficulties diminish with time.", ja: "ウパーチャヤ＝成長ハウス — 困難は時間とともに減る。" },
        },
        {
          id: "c19tf3",
          statement: { en: "The 9th house is generally the most auspicious house in the horoscope.", ja: "第9ハウスは一般にホロスコープで最吉のハウスだ。" },
          isTrue: true,
          explanation: { en: "9th = fortune, luck, dharma, guru — Trikona of highest grace.", ja: "第9＝幸運・運・ダルマ・グル — 最高の恩寵のトリコナ。" },
        },
        {
          id: "c19tf4",
          statement: { en: "In South Indian charts, sign positions move depending on the Ascendant.", ja: "南インドチャートではアセンダントに応じて星座位置が動く。" },
          isTrue: false,
          explanation: { en: "Signs are FIXED in South Indian format — only the Ascendant marker moves.", ja: "南インド形式では星座は固定 — アセンダントマーカーのみ動く。" },
        },
      ],
    },
    {
      id: "ch19-multi",
      kind: "multi-select",
      title: { en: "Dusthana House Challenge", ja: "ダストハナハウスチャレンジ" },
      question: {
        en: "Which are Dusthana (challenging) houses? Select ALL that apply.",
        ja: "ダストハナ（困難）ハウスは？該当するものをすべて選んでください。",
      },
      options: [
        { id: "h6", label: { en: "6th — enemies & disease", ja: "第6 — 敵と病" }, icon: "flame" },
        { id: "h8", label: { en: "8th — transformation & longevity", ja: "第8 — 変容と長寿" }, icon: "mountain" },
        { id: "h9", label: { en: "9th — fortune & guru", ja: "第9 — 幸運とグル" }, icon: "sparkles" },
        { id: "h12", label: { en: "12th — loss & moksha", ja: "第12 — 損失とモークシャ" }, icon: "moon" },
        { id: "h5", label: { en: "5th — children & merit", ja: "第5 — 子供と功徳" }, icon: "sun" },
        { id: "h3", label: { en: "3rd — siblings & courage", ja: "第3 — 兄弟と勇気" }, icon: "wind" },
      ],
      correctOptionIds: ["h6", "h8", "h12"],
      explanation: {
        en: "Dusthana houses are 6, 8, and 12 — planets here tend to weaken; 5th and 9th are auspicious Trikonas.",
        ja: "ダストハナは第6・8・12 — ここの惑星は弱化傾向；第5・9は吉なトリコナ。",
      },
    },
    {
      id: "ch19-quiz",
      kind: "quiz",
      question: {
        en: "In a South Indian chart, where is the Ascendant marked?",
        ja: "南インドチャートでアセンダントはどこに示される？",
      },
      options: [
        { id: "top", label: { en: "Always the top diamond (North Indian style)", ja: "常に上のダイヤ（北インド式）" }, icon: "compass" },
        { id: "diag", label: { en: "Diagonal line inside the Ascendant sign box", ja: "アセンダント星座ボックス内の斜線" }, icon: "orbit" },
        { id: "center", label: { en: "Center of the chart circle", ja: "チャート円の中心" }, icon: "sun" },
        { id: "num", label: { en: "Number 1 always in Aries box", ja: "番号1が常に牡羊ボックス" }, icon: "wind" },
      ],
      correctOptionId: "diag",
      explanation: {
        en: "South Indian: fixed sign boxes, diagonal line marks whichever sign is rising.",
        ja: "南インド：固定星座ボックス、斜線が上昇星座を示す。",
      },
    },
  ],
};
