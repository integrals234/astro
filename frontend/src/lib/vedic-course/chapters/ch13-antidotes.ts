import { Gem } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter13Antidotes: CourseChapter = {
  id: "ch13",
  number: 13,
  title: { en: "Planetary Antidotes Masterclass", ja: "惑星解決策マスタークラス" },
  subtitle: {
    en: "Gemstones, mantras, charity & sacred rituals",
    ja: "宝石・マントラ・慈善・聖なる儀式",
  },
  icon: Gem,
  steps: [
    {
      id: "ch13-s0",
      kind: "content",
      icon: "sparkles",
      title: { en: "Upayes — Karmic Rebalancing", ja: "ウパーヤ — カルマ再平衡" },
      body: {
        en: "Planetary antidotes (Upayes) help avert danger not yet arisen. Four main categories: gemstones, mantras, charity, and Vedic rituals (Yagnas/Homas). Their power rests on the Vedic view that everything is interconnected — Indra's Net.",
        ja: "惑星の解決策（ウパーヤ）はまだ来ていない危険を避ける助けになります。四つの主要カテゴリー：宝石・マントラ・慈善・ヴェーダ儀式（ヤギャ/ホーマ）。力はすべてが相互接続されているというヴェーダの見解 — インドラの網 — に基づきます。",
      },
      highlight: {
        en: "\"We are stardust, we are golden\" — gemstones can remind us of our cosmic connection.",
        ja: "「私たちは星の塵、私たちは黄金」— 宝石は宇宙とのつながりを思い出させる。",
      },
    },
    {
      id: "ch13-s1",
      kind: "content",
      icon: "sun",
      title: { en: "Planet → Gemstone Map", ja: "惑星→宝石マップ" },
      body: {
        en: "Each Graha has a traditional gemstone. Only strengthen auspicious (functional benefic) planets with gems — never a functional malefic! Mantras are preferred for problematic planets.",
        ja: "各グラハに伝統的宝石があります。吉（功能的吉星）の惑星のみ宝石で強化 — 功能的凶星には決して！問題のある惑星にはマントラが好まれます。",
      },
      bullets: [
        { en: "Sun–Ruby, Moon–Pearl, Mars–Red Coral, Mercury–Emerald", ja: "太陽–ルビー、月–パール、火星–赤珊瑚、水星–エメラルド" },
        { en: "Jupiter–Yellow Sapphire, Venus–Diamond, Saturn–Blue Sapphire", ja: "木星–イエローサファイア、金星–ダイヤ、土星–ブルーサファイア" },
        { en: "Rahu–Gomed (Hessonite), Ketu–Cat's Eye (Chrysoberyl)", ja: "ラーフ–ゴメッド、ケートゥ–キャッツアイ" },
      ],
    },
    {
      id: "ch13-s2",
      kind: "content",
      icon: "mountain",
      title: { en: "Gemstone Rules & Ascendant Lord", ja: "宝石のルールとアセンダント支配星" },
      body: {
        en: "Gemstones must touch the skin, be natural (not lab-created), and suit weight/quality/metal/finger guidelines. A universally safe remedy: wear the gemstone of your Ascendant Lord — the planet ruling your rising sign.",
        ja: "宝石は肌に触れ、天然（ラボ作成でない）で、重量/品質/金属/指のガイドラインに合う必要があります。普遍的に安全なレメディ：アセンダント支配星 — 上昇星座を支配する惑星 — の宝石を着ける。",
      },
      bullets: [
        { en: "Planets ruling 1st, 5th, or 9th houses are generally auspicious", ja: "第1・5・9ハウスを支配する惑星は一般に吉" },
        { en: "Semi-precious alternatives exist but offer less benefit", ja: "半宝石の代替はあるが利益は少ない" },
        { en: "Scorpio Lagna: possible exception — Mars rules 1st and 6th", ja: "蠍ラグナ：例外の可能性 — 火星が第1と第6を支配" },
      ],
    },
    {
      id: "ch13-s3",
      kind: "content",
      icon: "wind",
      title: { en: "Planetary Mantras", ja: "惑星マントラ" },
      body: {
        en: "Mantras are Sanskrit \"passwords\" connecting to higher consciousness. Basic pattern: Om — [Planet Name] — Namaha, chanted 108 times daily (9 × 12 = 108). The Nav Graha mantra harmonises all nine planets at once.",
        ja: "マントラは高次の意識につながるサンスクリットの「パスワード」。基本パターン：Om — [惑星名] — Namaha、毎日108回（9×12=108）。ナヴ・グラハ・マントラは9惑星すべてを一度に調和。",
      },
      bullets: [
        { en: "Venus: Om Shukraya Namaha", ja: "金星：Om Shukraya Namaha" },
        { en: "Saturn: Om Shanaye Namaha", ja: "土星：Om Shanaye Namaha" },
        { en: "Om Namah Shivaya — Shiva sits above all planets", ja: "Om Namah Shivaya — シヴァはすべての惑星の上に座す" },
        { en: "Chant during a planet's Maha Dasha for strongest effect", ja: "惑星のマハーダシャー中の唱和が最も強い効果" },
      ],
    },
    {
      id: "ch13-s4",
      kind: "content",
      icon: "droplets",
      title: { en: "Charity & Rituals", ja: "慈善と儀式" },
      body: {
        en: "Charity (dana) on a planet's weekday reduces its karmic burden — e.g. feeding crows on Saturday for Saturn. Yagnas and Homas performed by trained pundits bring Graha Shanti (planetary peace), ideally in an Ashram under a Guru's guidance.",
        ja: "惑星の曜日の慈善（ダーナ）がカルマの負担を減らす — 例：土曜日にカラスに餌を与える（土星）。訓練されたパンディットによるヤギャとホーマがグラハ・シャンティ（惑星の平和）をもたらす — 理想はグル の導きの下のアシュラムで。",
      },
      bullets: [
        { en: "Donate a small percentage of income regularly", ja: "収入の小さな割合を定期的に寄付" },
        { en: "Rituals = karmic engineering, not planet worship", ja: "儀式＝カルマ工学、惑星崇拝ではない" },
        { en: "Long-term meditators often exceed chart predictions", ja: "長期瞑想者はチャート予測を超えることが多い" },
      ],
    },
    {
      id: "ch13-s5",
      kind: "content",
      icon: "eye",
      title: { en: "When NOT to Wear a Gemstone", ja: "宝石を着けてはいけない時" },
      body: {
        en: "Never strengthen a functional malefic with its gemstone — it amplifies difficulties. Use mantras instead. Always analyse the full chart with Ascendant before recommending any gem. Western birth-month stones ignore this entirely.",
        ja: "功能的凶星をその宝石で強化してはいけない — 困難を増幅します。代わりにマントラを。宝石を勧める前に常にアセンダントで全チャートを分析。西洋の誕生月の石はこれを完全に無視。",
      },
      highlight: {
        en: "Consult an experienced Jyotish astrologer — wrong gems can cause harm.",
        ja: "経験豊富なジョーティシュ占星術師に相談 — 間違った宝石は害を招く。",
      },
    },
    {
      id: "ch13-flash",
      kind: "flashcards",
      title: { en: "Planet-Gemstone Flashcards", ja: "惑星-宝石 フラッシュカード" },
      instruction: {
        en: "Memorise the nine Graha-gemstone pairs. Flip all cards to continue.",
        ja: "9グラハ-宝石のペアを覚えましょう。すべて見て進みます。",
      },
      cards: [
        { id: "g1", front: { en: "Surya (Sun)", ja: "スーリヤ（太陽）" }, back: { en: "Ruby", ja: "ルビー" }, icon: "sun" },
        { id: "g2", front: { en: "Chandra (Moon)", ja: "チャンドラ（月）" }, back: { en: "Pearl", ja: "パール" }, icon: "moon" },
        { id: "g3", front: { en: "Mangal (Mars)", ja: "マンガル（火星）" }, back: { en: "Red Coral", ja: "赤珊瑚" }, icon: "flame" },
        { id: "g4", front: { en: "Budha (Mercury)", ja: "ブダ（水星）" }, back: { en: "Emerald", ja: "エメラルド" }, icon: "wind" },
        { id: "g5", front: { en: "Guru (Jupiter)", ja: "グル（木星）" }, back: { en: "Yellow Sapphire", ja: "イエローサファイア" }, icon: "sparkles" },
        { id: "g6", front: { en: "Shukra (Venus)", ja: "シュクラ（金星）" }, back: { en: "Diamond", ja: "ダイヤモンド" }, icon: "droplets" },
        { id: "g7", front: { en: "Shani (Saturn)", ja: "シャニ（土星）" }, back: { en: "Blue Sapphire", ja: "ブルーサファイア" }, icon: "mountain" },
        { id: "g8", front: { en: "Rahu", ja: "ラーフ" }, back: { en: "Gomed (Hessonite)", ja: "ゴメッド（ヘソナイト）" }, icon: "orbit" },
        { id: "g9", front: { en: "Ketu", ja: "ケートゥ" }, back: { en: "Cat's Eye", ja: "キャッツアイ" }, icon: "eye" },
      ],
    },
    {
      id: "ch13-match",
      kind: "match",
      title: { en: "Match Remedy to Method", ja: "レメディと方法をマッチ" },
      instruction: {
        en: "Connect each remedial situation to the best Upaya approach.",
        ja: "各レメディ状況に最適なウパーヤアプローチを結びつけましょう。",
      },
      pairs: [
        { leftId: "ben", left: { en: "Functional benefic needs strength", ja: "功能的吉星が強化を必要" }, rightId: "gem", right: { en: "Wear its gemstone", ja: "その宝石を着ける" }, leftIcon: "sparkles" },
        { leftId: "mal", left: { en: "Functional malefic causing trouble", ja: "功能的凶星が問題を引き起こす" }, rightId: "man", right: { en: "Chant its mantra", ja: "そのマントラを唱える" }, leftIcon: "wind" },
        { leftId: "sat", left: { en: "Saturn karmic burden", ja: "土星のカルマ負担" }, rightId: "crow", right: { en: "Feed crows on Saturday", ja: "土曜日にカラスに餌" }, leftIcon: "mountain" },
        { leftId: "all", left: { en: "Balance all nine Grahas", ja: "9グラハすべてを平衡" }, rightId: "nav", right: { en: "Nav Graha mantra", ja: "ナヴ・グラハ・マントラ" }, leftIcon: "orbit" },
        { leftId: "chart", left: { en: "Major chart imbalance", ja: "重大なチャート不均衡" }, rightId: "yag", right: { en: "Vedic Yagna / Homa ritual", ja: "ヴェーダ・ヤギャ/ホーマ儀式" }, leftIcon: "flame" },
      ],
    },
    {
      id: "ch13-order",
      kind: "order",
      title: { en: "Four Upaya Categories", ja: "四つのウパーヤカテゴリー" },
      instruction: {
        en: "Order the four main remedial categories from most daily-accessible to most ceremonial.",
        ja: "四つの主要レメディカテゴリーを最も日常的 → 最も儀式的な順に並べましょう。",
      },
      items: [
        { id: "man", label: { en: "Mantra chanting (daily)", ja: "マントラ唱和（毎日）" }, icon: "wind" },
        { id: "char", label: { en: "Acts of charity (weekly)", ja: "慈善行為（毎週）" }, icon: "droplets" },
        { id: "gem", label: { en: "Wearing gemstones (ongoing)", ja: "宝石着用（継続）" }, icon: "sparkles" },
        { id: "rit", label: { en: "Vedic Yagna / Homa (ceremonial)", ja: "ヴェーダ・ヤギャ/ホーマ（儀式）" }, icon: "flame" },
      ],
    },
    {
      id: "ch13-tf",
      kind: "true-false",
      title: { en: "Antidote Facts: True or False", ja: "解決策ファクト マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "c13tf1",
          statement: { en: "You should wear the gemstone of a functional malefic planet to reduce its harm.", ja: "功能的凶星の宝石を着けて害を減らすべきだ。" },
          isTrue: false,
          explanation: { en: "Gemstones strengthen planets — use mantras for malefics, gems only for benefics.", ja: "宝石は惑星を強化 — 凶星にはマントラ、吉星にのみ宝石。" },
        },
        {
          id: "c13tf2",
          statement: { en: "108 repetitions come from 9 planets × 12 zodiac signs.", ja: "108回は9惑星×12星座から来る。" },
          isTrue: true,
          explanation: { en: "9 × 12 = 108 — the sacred mala count for mantra japa.", ja: "9×12=108 — マントラ・ジャパの聖なるマーラ数。" },
        },
        {
          id: "c13tf3",
          statement: { en: "Wearing your Ascendant Lord's gemstone is generally a safe universal remedy.", ja: "アセンダント支配星の宝石を着けるのは一般に安全な普遍的レメディだ。" },
          isTrue: true,
          explanation: { en: "Strengthening the Lagna lord strengthens the whole chart.", ja: "ラグナ支配星を強化するとチャート全体が強化される。" },
        },
        {
          id: "c13tf4",
          statement: { en: "Synthetic lab-created gemstones are ideal for Jyotish remedies.", ja: "合成ラボ作成宝石がジョーティシュレメディに理想的だ。" },
          isTrue: false,
          explanation: { en: "Natural gemstones touching the skin are required for remedial effect.", ja: "肌に触れる天然宝石がレメディ効果に必要。" },
        },
      ],
    },
    {
      id: "ch13-multi",
      kind: "multi-select",
      title: { en: "Gemstone Safety Check", ja: "宝石安全チェック" },
      question: {
        en: "Before recommending a gemstone, which must be checked? Select ALL that apply.",
        ja: "宝石を勧める前に確認すべきことは？該当するものをすべて選んでください。",
      },
      options: [
        { id: "asc", label: { en: "Ascendant and functional benefic status", ja: "アセンダントと功能的吉星ステータス" }, icon: "sparkles" },
        { id: "skin", label: { en: "Stone touches skin in proper setting", ja: "石が適切な設定で肌に触れる" }, icon: "mountain" },
        { id: "month", label: { en: "Birth month from Western calendar only", ja: "西洋暦の誕生月のみ" }, icon: "sun" },
        { id: "nat", label: { en: "Natural (not synthetic) stone quality", ja: "天然（合成でない）石の品質" }, icon: "eye" },
        { id: "houses", label: { en: "Which houses the planet rules", ja: "惑星が支配するハウス" }, icon: "compass" },
        { id: "any", label: { en: "Any gem is fine if it's expensive", ja: "高ければどんな宝石でもOK" }, icon: "wind" },
      ],
      correctOptionIds: ["asc", "skin", "nat", "houses"],
      explanation: {
        en: "Full chart analysis with Ascendant, house rulership, natural quality, and skin contact — never birth-month guesswork.",
        ja: "アセンダント・ハウス支配・天然品質・肌接触での全チャート分析 — 誕生月の推測は決してしない。",
      },
    },
    {
      id: "ch13-quiz",
      kind: "quiz",
      question: {
        en: "Which mantra pattern harmonises ALL nine Grahas simultaneously?",
        ja: "9つのグラハすべてを同時に調和させるマントラパターンは？",
      },
      options: [
        { id: "om", label: { en: "Om Namah Shivaya only", ja: "Om Namah Shivayaのみ" }, icon: "mountain" },
        { id: "nav", label: { en: "Nav Graha mantra", ja: "ナヴ・グラハ・マントラ" }, icon: "orbit" },
        { id: "sun", label: { en: "Om Suryaya Namaha only", ja: "Om Suryaya Namahaのみ" }, icon: "sun" },
        { id: "108", label: { en: "Chant any mantra 9 times", ja: "どんなマントラも9回唱える" }, icon: "wind" },
      ],
      correctOptionId: "nav",
      explanation: {
        en: "The Nav Graha mantra addresses Sun through Ketu in one verse — adityaaya cha somaaya mangalaaya…",
        ja: "ナヴ・グラハ・マントラは一節で太陽からケートゥまで扱う — adityaaya cha somaaya mangalaaya…",
      },
    },
  ],
};
