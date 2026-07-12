import { Orbit } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter23Transits: CourseChapter = {
  id: "ch23",
  number: 23,
  title: { en: "Transits & Gochara", ja: "トランジットとゴーチャラ" },
  subtitle: {
    en: "Sade Sati, Jupiter-Saturn gochara & transit rules",
    ja: "サデーサティ、木星・土星ゴーチャラとトランジット規則",
  },
  icon: Orbit,
  steps: [
    {
      id: "ch23-s0",
      kind: "content",
      icon: "wind",
      title: { en: "Transits — The Secondary Timing Layer", ja: "トランジット — 二次タイミング層" },
      body: {
        en: "Transits (Gochara) show returning karmic influences as planets move through the sidereal zodiac now. They matter — but Mahadashas carry far more weight. Think of transits as triggers layered on top of the dasha timeline.",
        ja: "トランジット（ゴーチャラ）は惑星が今恒星黄道を移動する際の返るカルマ的影響を示す。重要 — しかしマハーダシャーの方がはるかに重い。トランジットはダシャータイムライン上の引き金と考える。",
      },
      highlight: {
        en: "Rough predictive split: 60% Mahadasha · 20% Antardasha · 20% transits.",
        ja: "概算予測配分：60%マハーダシャー・20%アンタルダシャー・20%トランジット。",
      },
    },
    {
      id: "ch23-s1",
      kind: "content",
      icon: "moon",
      title: { en: "Counting Transit Houses from the Moon", ja: "月からトランジットハウスを数える" },
      body: {
        en: "In Jyotish, transit effects are judged house-by-house counted from the natal Moon sign — not the Ascendant. If Moon is in Aries, Aries = 1st house for transits, Pisces = 12th, Taurus = 2nd, and so on.",
        ja: "ジョーティシュではトランジット効果は出生月星座から数えたハウスごとに判断 — アセンダントではない。月が牡羊座なら、牡羊＝第1ハウス、魚＝第12、牡牛＝第2、以下同様。",
      },
      bullets: [
        { en: "Signs and houses correspond exactly — each = 30° sidereal", ja: "星座とハウスは完全対応 — 各30°恒星" },
        { en: "Some pundits also judge from Lagna — secondary to Moon sign", ja: "一部のパンディットはラグナからも判断 — 月星座に次ぐ" },
        { en: "This Moon-based method applies specifically to transits", ja: "この月基準法はトランジットに特化" },
      ],
    },
    {
      id: "ch23-s2",
      kind: "content",
      icon: "sparkles",
      title: { en: "Jupiter & Saturn — Slow Movers", ja: "木星と土星 — 遅い動き" },
      body: {
        en: "Jyotish astrologers watch Jupiter and Saturn transits most closely. Jupiter spends ~1 year per sign; Saturn ~3 years, often retrograding back and forth before settling. Their slow pace makes their transit effects especially significant.",
        ja: "ジョーティシュ占星術師は木星と土星トランジットを最も注視。木星は約1年/星座；土星は約3年、定着前に逆行を繰り返すことが多い。遅いペースがトランジット効果を特に重要に。",
      },
      bullets: [
        { en: "Jupiter transit over a natal planet tends to improve its significations", ja: "木星が出生惑星を通過するとその表示が改善されやすい" },
        { en: "Strong natal planets handle adverse transit houses better than weak ones", ja: "強い出生惑星は弱いものより不利トランジットハウスをよく処理" },
        { en: "Transit dignity matters: exaltation, combustion, malefic conjunctions", ja: "トランジット品位が重要：高揚、燃焼、凶星合" },
      ],
    },
    {
      id: "ch23-s3",
      kind: "content",
      icon: "mountain",
      title: { en: "Sade Sati — Saturn's Seven-Year Test", ja: "サデーサティ — 土星の7年試練" },
      body: {
        en: "When Saturn transits the 12th, 1st, and 2nd houses from the natal Moon, the native experiences Sade Sati — roughly 7.5 years. In India this period is widely feared, but context changes everything.",
        ja: "土星が出生月から第12・1・2ハウスをトランジットすると、ネイティブはサデーサティを経験 — 約7.5年。インドでは広く恐れられるが、文脈がすべてを変える。",
      },
      bullets: [
        { en: "12th house: losses & expenditure", ja: "第12ハウス：損失と支出" },
        { en: "1st house: body, health, personal wellbeing", ja: "第1ハウス：身体、健康、個人の wellbeing" },
        { en: "2nd house: wealth, family resources, finances", ja: "第2ハウス：富、家族資源、財政" },
      ],
      highlight: {
        en: "Sade Sati is milder during a favourable Mahadasha, when Saturn is a functional benefic, or when Saturn is well placed natally.",
        ja: "サデーサティは吉なマハーダシャー中、土星が機能的吉星のとき、または土星が出生で良い配置のときは穏やか。",
      },
    },
    {
      id: "ch23-s4",
      kind: "content",
      icon: "compass",
      title: { en: "Transit Rules from Pandit Ojha", ja: "パンディット・オージャのトランジット規則" },
      body: {
        en: "Classical texts offer important exceptions. Saturn as Ascendant lord (Capricorn/Aquarius) generally does not damage natal planets or owned houses through transit. Saturn for Taurus Moon (9th/10th lord) or Libra Moon (4th/5th lord) tends to produce better transit results.",
        ja: "古典は重要な例外を提供。アセンダント支配星としての土星（山羊/水瓶）は通常、トランジットで出生惑星や支配ハウスを損なわない。牡牛月（第9/10支配）や天秤座月（第4/5支配）の土星はより良いトランジット結果を生みやすい。",
      },
      bullets: [
        { en: "Assess Saturn's functional status from Moon sign as Lagna", ja: "月星座をラグナとして土星の機能ステータスを評価" },
        { en: "Upachaya house connections strengthen positive transit effects", ja: "ウパーチャヤハウス関連が吉トランジット効果を強化" },
        { en: "Clients should know: Saturn transits are not always something to fear", ja: "クライアントは知るべき：土星トランジットは常に恐れるものではない" },
      ],
    },
    {
      id: "ch23-flash",
      kind: "flashcards",
      title: { en: "Gochara Vocabulary", ja: "ゴーチャラ語彙" },
      instruction: {
        en: "Master transit terminology — flip all cards to continue.",
        ja: "トランジット用語をマスター — すべて見て進みます。",
      },
      cards: [
        { id: "g1", front: { en: "Gochara", ja: "ゴーチャラ" }, back: { en: "Sanskrit for planetary transit", ja: "惑星トランジットのサンスクリット" }, icon: "wind" },
        { id: "g2", front: { en: "Sade Sati", ja: "サデーサティ" }, back: { en: "Saturn over Moon's 12th, 1st, 2nd houses (~7.5 yrs)", ja: "土星が月の第12・1・2ハウス（約7.5年）" }, icon: "mountain" },
        { id: "g3", front: { en: "Radical planet", ja: "ラジカル惑星" }, back: { en: "A planet in the birth chart (natal position)", ja: "出生図の惑星（出生位置）" }, icon: "eye" },
        { id: "g4", front: { en: "Moon-sign transit chart", ja: "月星座トランジットチャート" }, back: { en: "Moon sign treated as 1st house for Gochara", ja: "ゴーチャラで月星座を第1ハウスとして扱う" }, icon: "moon" },
        { id: "g5", front: { en: "Jupiter transit speed", ja: "木星トランジット速度" }, back: { en: "~1 year per sign", ja: "約1年/星座" }, icon: "sparkles" },
        { id: "g6", front: { en: "Saturn transit speed", ja: "土星トランジット速度" }, back: { en: "~3 years per sign (with retrogrades)", ja: "約3年/星座（逆行あり）" }, icon: "orbit" },
      ],
    },
    {
      id: "ch23-match",
      kind: "match",
      title: { en: "Sade Sati House Themes", ja: "サデーサティハウステーマ" },
      instruction: {
        en: "Match each Sade Sati transit house (from Moon) to its life theme.",
        ja: "各サデーサティトランジットハウス（月から）を人生テーマに結びつけましょう。",
      },
      pairs: [
        { leftId: "h12", left: { en: "Saturn in 12th from Moon", ja: "月から第12の土星" }, rightId: "loss", right: { en: "Losses & expenditure", ja: "損失と支出" }, leftIcon: "wind" },
        { leftId: "h1", left: { en: "Saturn in 1st from Moon", ja: "月から第1の土星" }, rightId: "body", right: { en: "Body, health & wellbeing", ja: "身体、健康と wellbeing" }, leftIcon: "sun" },
        { leftId: "h2", left: { en: "Saturn in 2nd from Moon", ja: "月から第2の土星" }, rightId: "wealth", right: { en: "Wealth & family resources", ja: "富と家族資源" }, leftIcon: "droplets" },
        { leftId: "jup", left: { en: "Jupiter over natal planet", ja: "出生惑星上の木星" }, rightId: "boost", right: { en: "Improves that planet's significations", ja: "その惑星の表示を改善" }, leftIcon: "sparkles" },
        { leftId: "moon", left: { en: "Moon in Aries at birth", ja: "出生時月が牡羊座" }, rightId: "aries1", right: { en: "Aries = 1st transit house", ja: "牡羊＝第1トランジットハウス" }, leftIcon: "moon" },
      ],
    },
    {
      id: "ch23-order",
      kind: "order",
      title: { en: "Sade Sati Journey", ja: "サデーサティの旅" },
      instruction: {
        en: "Order Saturn's path through the three Sade Sati houses (from natal Moon).",
        ja: "3つのサデーサティハウス（出生月から）を通る土星の道を順に並べましょう。",
      },
      items: [
        { id: "twelfth", label: { en: "12th house from Moon", ja: "月から第12ハウス" }, icon: "wind" },
        { id: "first", label: { en: "1st house from Moon", ja: "月から第1ハウス" }, icon: "sun" },
        { id: "second", label: { en: "2nd house from Moon", ja: "月から第2ハウス" }, icon: "droplets" },
      ],
    },
    {
      id: "ch23-tf",
      kind: "true-false",
      title: { en: "Transit Truths", ja: "トランジット真偽" },
      instruction: { en: "3 of 5 correct to pass.", ja: "5問中3問正解で合格。" },
      statements: [
        {
          id: "c23tf1",
          statement: { en: "In Jyotish, transits are generally more important than Mahadashas.", ja: "ジョーティシュではトランジットは一般にマハーダシャーより重要だ。" },
          isTrue: false,
          explanation: { en: "Mahadashas carry ~60% weight; transits ~20%.", ja: "マハーダシャー約60%比重；トランジット約20%。" },
        },
        {
          id: "c23tf2",
          statement: { en: "Transit houses are counted from the natal Moon sign.", ja: "トランジットハウスは出生月星座から数える。" },
          isTrue: true,
          explanation: { en: "Moon sign becomes the 1st house for Gochara analysis.", ja: "月星座がゴーチャラ分析の第1ハウスになる。" },
        },
        {
          id: "c23tf3",
          statement: { en: "Sade Sati always brings severe hardship regardless of dasha or chart.", ja: "サデーサティはダシャーやチャートに関係なく常に深刻な困難をもたらす。" },
          isTrue: false,
          explanation: { en: "A favourable Mahadasha or functional benefic Saturn can soften it greatly.", ja: "吉なマハーダシャーや機能的吉星土星が大いに和らげる。" },
        },
        {
          id: "c23tf4",
          statement: { en: "Saturn as Ascendant lord generally won't harm its own houses by transit.", ja: "アセンダント支配星としての土星は通常、トランジットで自らのハウスを害さない。" },
          isTrue: true,
          explanation: { en: "This Pandit Ojha rule applies to Capricorn and Aquarius Ascendants.", ja: "このパンディット・オージャ規則は山羊・水瓶座アセンダントに適用。" },
        },
        {
          id: "c23tf5",
          statement: { en: "Strong natal planets produce better transit results even in adverse houses.", ja: "強い出生惑星は不利ハウスでもより良いトランジット結果を生む。" },
          isTrue: true,
          explanation: { en: "Natal strength from sign, aspects, and dignity buffers transit challenges.", ja: "星座・アスペクト・品位からの出生強度がトランジット困難を緩衝。" },
        },
      ],
    },
    {
      id: "ch23-multi",
      kind: "multi-select",
      title: { en: "When Sade Sati Is Less Difficult", ja: "サデーサティが穏やかな条件" },
      question: {
        en: "Which factors can make Sade Sati less challenging? Select ALL that apply.",
        ja: "サデーサティを穏やかにする要因は？該当するものをすべて選んでください。",
      },
      options: [
        { id: "dasha", label: { en: "Running a favourable Mahadasha", ja: "吉なマハーダシャー中" }, icon: "moon" },
        { id: "func", label: { en: "Saturn is a functional benefic for the chart", ja: "土星がチャートの機能的吉星" }, icon: "sparkles" },
        { id: "weak", label: { en: "Saturn is debilitated in the birth chart", ja: "土星が出生図で弱体" }, icon: "mountain" },
        { id: "placed", label: { en: "Saturn is well placed natally", ja: "土星が出生で良い配置" }, icon: "compass" },
        { id: "fav", label: { en: "Saturn rules favourable houses from Moon sign", ja: "土星が月星座から吉ハウスを支配" }, icon: "eye" },
        { id: "ignore", label: { en: "Ignoring transits entirely", ja: "トランジットを完全無視" }, icon: "wind" },
      ],
      correctOptionIds: ["dasha", "func", "placed", "fav"],
      explanation: {
        en: "Dasha context, functional status, natal placement, and favourable house lordship all modulate Sade Sati — debilitation alone doesn't help.",
        ja: "ダシャー文脈、機能ステータス、出生配置、吉ハウス支配がすべてサデーサティを調整 — 弱体だけでは助けにならない。",
      },
    },
    {
      id: "ch23-scenario",
      kind: "quiz",
      title: { en: "Moon Transit Counter", ja: "月トランジットカウンター" },
      question: {
        en: "Natal Moon is in Leo. Saturn currently transits Libra. Which transit house is Saturn in?",
        ja: "出生月が獅子座。土星が現在天秤座をトランジット。土星は何番目のトランジットハウス？",
      },
      options: [
        { id: "h2", label: { en: "2nd house from Moon", ja: "月から第2ハウス" }, icon: "droplets" },
        { id: "h3", label: { en: "3rd house from Moon", ja: "月から第3ハウス" }, icon: "flame" },
        { id: "h4", label: { en: "4th house from Moon", ja: "月から第4ハウス" }, icon: "compass" },
        { id: "h12", label: { en: "12th house from Moon", ja: "月から第12ハウス" }, icon: "wind" },
      ],
      correctOptionId: "h3",
      explanation: {
        en: "Leo = 1st. Virgo = 2nd. Libra = 3rd. Count whole signs clockwise from the Moon.",
        ja: "獅子＝第1。乙女＝第2。天秤＝第3。月から時計回りに全星座を数える。",
      },
    },
    {
      id: "ch23-quiz",
      kind: "quiz",
      question: {
        en: "What percentage of predictive influence do many Jyotishis assign to transits?",
        ja: "多くのジョーティシがトランジットに割り当てる予測影響の割合は？",
      },
      options: [
        { id: "p60", label: { en: "60%", ja: "60%" }, icon: "moon" },
        { id: "p20", label: { en: "20%", ja: "20%" }, icon: "wind" },
        { id: "p50", label: { en: "50%", ja: "50%" }, icon: "orbit" },
        { id: "p5", label: { en: "5%", ja: "5%" }, icon: "mountain" },
      ],
      correctOptionId: "p20",
      explanation: {
        en: "The classic split: 60% Mahadasha, 20% Antardasha, 20% transits.",
        ja: "古典的分配：60%マハーダシャー、20%アンタルダシャー、20%トランジット。",
      },
    },
  ],
};
