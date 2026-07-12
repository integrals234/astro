import { BookOpen } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter24HoroscopeInterpretation: CourseChapter = {
  id: "ch24",
  number: 24,
  title: { en: "Reading Horoscopes with Wisdom", ja: "知恵でホロスコープを読む" },
  subtitle: {
    en: "Spirituality, intuition & beginner chart strategy",
    ja: "スピリチュアリティ、直感と初心者チャート戦略",
  },
  icon: BookOpen,
  steps: [
    {
      id: "ch24-s0",
      kind: "content",
      icon: "sparkles",
      title: { en: "Jyotish Is a Spiritual Discipline", ja: "ジョーティシュは精神的修練" },
      body: {
        en: "Successful chart reading needs more than memorising rules. Vedic Astrology is a spiritual path — its purpose is to reveal that the universe is one consciousness manifesting in infinite forms. This knowledge is a divine privilege requiring humility.",
        ja: "成功するチャートリーディングにはルール暗記以上が必要。ヴェーダ占星術は精神的道 — その目的は宇宙が無限の形で現れる一つの意識であることを明らかにすること。この知識は謙虚さを要する神聖な特権。",
      },
      highlight: {
        en: "Before every reading ask: \"How can I be of the greatest benefit to this soul?\"",
        ja: "毎回のリーディング前に問う：「この魂に最大の利益をどうもたらせるか？」",
      },
    },
    {
      id: "ch24-s1",
      kind: "content",
      icon: "eye",
      title: { en: "Intuition & Jyotish Mati Pragya", ja: "直感とジョーティシュ・マティ・プラギャ" },
      body: {
        en: "Chart interpretation synthesises dozens of indicators — logical yet requiring intuition. Regular spiritual practice cultivates Jyotish Mati Pragya, the all-knowing consciousness within. The more charts you study, the sharper pattern recognition becomes.",
        ja: "チャート解釈は数十の指標を統合 — 論理的だが直感を要する。定期的な精神修練が内なる全知の意識、ジョーティシュ・マティ・プラギャを育む。研究するチャートが増えるほどパターン認識が鋭くなる。",
      },
      bullets: [
        { en: "Meditation, yoga, pranayama, and mantra chanting strengthen intuition", ja: "瞑想、ヨガ、プラーナーヤーマ、マントラ唱和が直感を強化" },
        { en: "A Sattvic lifestyle supports balanced, unbiased interpretation", ja: "サートヴィックな生活様式がバランスの取れた偏りのない解釈を支える" },
        { en: "Proficiency may take a lifetime — or perhaps several", ja: "熟練には一生 — あるいは数生 — かかるかもしれない" },
      ],
    },
    {
      id: "ch24-s2",
      kind: "content",
      icon: "mountain",
      title: { en: "Beating Information Overload", ja: "情報過多を克服" },
      body: {
        en: "Modern Jyotish software generates more data than beginners can process. Without focus, you miss the forest for the trees. Professionals consider everything — but beginners must know what to temporarily set aside.",
        ja: "現代ジョーティシュソフトは初心者が処理できる以上のデータを生成。焦点がなければ木を見て森を見ず。プロはすべて考慮 — しかし初心者は一時的に置いておくものを知る必要がある。",
      },
      highlight: {
        en: "\"Not seeing the wood for the trees\" is the #1 beginner trap.",
        ja: "「木を見て森を見ず」が初心者の最大の罠。",
      },
    },
    {
      id: "ch24-s3",
      kind: "content",
      icon: "compass",
      title: { en: "What to Include First", ja: "最初に含めるもの" },
      body: {
        en: "A solid beginner read covers: overall chart strength, Ascendant and its lord, functional benefics/malefics, planetary strength by sign and house, house conditions, Mahadashas, and significant Saturn/Jupiter transits.",
        ja: "堅実な初心者リーディング：チャート全体の強度、アセンダントとその支配星、機能的吉星/凶星、星座とハウスによる惑星強度、ハウス状態、マハーダシャー、重要な土星/木星トランジット。",
      },
      bullets: [
        { en: "How strength affects a planet's significations AND its ruled houses", ja: "強度が惑星の表示と支配ハウスにどう影響するか" },
        { en: "Occupying planets and aspects shape each house's condition", ja: "占有惑星とアスペクトが各ハウスの状態を形作る" },
        { en: "Mahadashas reveal when themes activate", ja: "マハーダシャーがテーマが活性化する時期を明らかに" },
      ],
    },
    {
      id: "ch24-s4",
      kind: "content",
      icon: "wind",
      title: { en: "What to Postpone", ja: "延期するもの" },
      body: {
        en: "Beginners can safely defer: detailed Shadbala numbers (use sign/house strength instead), most divisional charts except Navamsha, detailed Nakshatra analysis, and exhaustive Yoga lists. Be aware of Sambandhas and major Yogas — but don't try to learn hundreds at once.",
        ja: "初心者は安全に延期できる：詳細シャダバラ数値（星座/ハウス強度で代替）、ナヴァムシャ以外の大部分割図、詳細ナクシャトラ分析、網羅的ヨーガリスト。サンバンダと主要ヨーガは認識 — しかし数百を一度に学ばない。",
      },
      bullets: [
        { en: "Navamsha matters for marriage — learn it when ready", ja: "ナヴァムシャは結婚に重要 — 準備できたら学ぶ" },
        { en: "Sign exchange (Parivartana) can explain results nothing else does", ja: "星座交換（パリヴァルタナ）が他では説明できない結果を説明できる" },
        { en: "Start with Raja Yoga, Adhi Yoga — not all 300+ Yogas", ja: "ラージャヨーガ、アディヨーガから — 300以上の全ヨーガではない" },
      ],
    },
    {
      id: "ch24-s5",
      kind: "content",
      icon: "moon",
      title: { en: "Start with Your Own Chart", ja: "自分のチャートから始める" },
      body: {
        en: "Always begin with your own horoscope — the \"OMG moment\" when Jyotish clicks is transformative. Then study close friends and family whose lives you know well. Celebrity charts are less useful because public narratives are filtered.",
        ja: "常に自分のホロスコープから — ジョーティシュが腑に落ちる「OMG moment」は変容的。次によく知る友人・家族を研究。有名人チャートは公開ナラティブがフィルターされ有用性が低い。",
      },
      bullets: [
        { en: "Ask: How accurate is the birth time? Is it documented?", ja: "問う：出生時刻はどれほど正確？記録されている？" },
        { en: "Identify chart factors relating to current life concerns", ja: "現在の人生の関心事に関連するチャート要素を特定" },
        { en: "AI helps research — but human mentors offer lived intuition", ja: "AIは研究に役立つ — しかし人間のメンターが生きた直感を提供" },
      ],
    },
    {
      id: "ch24-flash",
      kind: "flashcards",
      title: { en: "Interpreter's Toolkit", ja: "解釈者のツールキット" },
      instruction: {
        en: "Learn the beginner reading framework — flip all cards.",
        ja: "初心者リーディング枠組みを学ぶ — すべて見て。",
      },
      cards: [
        { id: "i1", front: { en: "Jyotish Mati Pragya", ja: "ジョーティシュ・マティ・プラギャ" }, back: { en: "All-knowing intuitive consciousness in the astrologer", ja: "占星術師の全知の直感的意識" }, icon: "sparkles" },
        { id: "i2", front: { en: "Sattvic lifestyle", ja: "サートヴィック生活" }, back: { en: "Pure, balanced living supporting clear interpretation", ja: "明確な解釈を支える純粋でバランスの取れた生活" }, icon: "sun" },
        { id: "i3", front: { en: "Functional benefic", ja: "機能的吉星" }, back: { en: "Planet acting positively for this Ascendant", ja: "このアセンダントで吉に働く惑星" }, icon: "eye" },
        { id: "i4", front: { en: "Shadbala", ja: "シャダバラ" }, back: { en: "Six-fold planetary strength — defer detailed numbers early on", ja: "六分法惑星強度 — 初期は詳細数値を延期" }, icon: "mountain" },
        { id: "i5", front: { en: "Navamsha (D-9)", ja: "ナヴァムシャ（D-9）" }, back: { en: "Key divisional chart for marriage & strength refinement", ja: "結婚と強度精緻化の重要分割図" }, icon: "moon" },
        { id: "i6", front: { en: "Sambandha", ja: "サンバンダ" }, back: { en: "Mutual planetary relationship (e.g. sign exchange)", ja: "惑星間の相互関係（例：星座交換）" }, icon: "orbit" },
      ],
    },
    {
      id: "ch24-match",
      kind: "match",
      title: { en: "Include Now vs Learn Later", ja: "今含める vs 後で学ぶ" },
      instruction: {
        en: "Match each factor to whether a beginner should focus on it now or postpone it.",
        ja: "各要素を初心者が今焦点を当てるべきか延期すべきかに結びつけましょう。",
      },
      pairs: [
        { leftId: "lagna", left: { en: "Ascendant strength", ja: "アセンダント強度" }, rightId: "now", right: { en: "Include now", ja: "今含める" }, leftIcon: "compass" },
        { leftId: "shad", left: { en: "Detailed Shadbala scores", ja: "詳細シャダバラスコア" }, rightId: "later", right: { en: "Postpone", ja: "延期" }, leftIcon: "mountain" },
        { leftId: "dasha", left: { en: "Mahadasha periods", ja: "マハーダシャー期" }, rightId: "now2", right: { en: "Include now", ja: "今含める" }, leftIcon: "moon" },
        { leftId: "varga", left: { en: "All 16 divisional charts", ja: "16の全分割図" }, rightId: "later2", right: { en: "Postpone", ja: "延期" }, leftIcon: "wind" },
        { leftId: "func", left: { en: "Functional benefics/malefics", ja: "機能的吉星/凶星" }, rightId: "now3", right: { en: "Include now", ja: "今含める" }, leftIcon: "sparkles" },
        { leftId: "nak", left: { en: "Deep Nakshatra analysis", ja: "深いナクシャトラ分析" }, rightId: "later3", right: { en: "Postpone", ja: "延期" }, leftIcon: "orbit" },
      ],
    },
    {
      id: "ch24-order",
      kind: "order",
      title: { en: "Your First Chart Reading Path", ja: "最初のチャートリーディング道" },
      instruction: {
        en: "Order the recommended steps for a beginner approaching chart interpretation.",
        ja: "チャート解釈に取り組む初心者の推奨ステップを順に並べましょう。",
      },
      items: [
        { id: "own", label: { en: "1. Study your own chart first", ja: "1. まず自分のチャートを研究" }, icon: "eye" },
        { id: "lagna", label: { en: "2. Assess Ascendant & its lord", ja: "2. アセンダントと支配星を評価" }, icon: "compass" },
        { id: "planets", label: { en: "3. Evaluate planetary sign & house strength", ja: "3. 惑星の星座とハウス強度を評価" }, icon: "sun" },
        { id: "func", label: { en: "4. Identify functional benefics/malefics", ja: "4. 機能的吉星/凶星を特定" }, icon: "sparkles" },
        { id: "dasha", label: { en: "5. Check current Mahadasha & transits", ja: "5. 現在のマハーダシャーとトランジットを確認" }, icon: "moon" },
        { id: "family", label: { en: "6. Compare with known life events (family/friends)", ja: "6. 既知の人生イベントと比較（家族/友人）" }, icon: "droplets" },
      ],
    },
    {
      id: "ch24-tf",
      kind: "true-false",
      title: { en: "Reading Wisdom: True or False", ja: "リーディング知恵 マルバツ" },
      instruction: { en: "3 of 5 correct to pass.", ja: "5問中3問正解で合格。" },
      statements: [
        {
          id: "c24tf1",
          statement: { en: "Jyotish chart reading requires no spiritual dimension — only technical rules.", ja: "ジョーティシュチャートリーディングに精神的側面は不要 — 技術的ルールのみ。" },
          isTrue: false,
          explanation: { en: "Vedic Astrology is a spiritual discipline; humility and compassion are essential.", ja: "ヴェーダ占星術は精神的修練；謙虚さと慈悲が不可欠。" },
        },
        {
          id: "c24tf2",
          statement: { en: "Beginners should try to analyse all 300+ Yogas from day one.", ja: "初心者は初日から300以上の全ヨーガを分析すべきだ。" },
          isTrue: false,
          explanation: { en: "Start with a few major Yogas; exhaustive lists cause information overload.", ja: "主要ヨーガ数個から；網羅的リストは情報過多を引き起こす。" },
        },
        {
          id: "c24tf3",
          statement: { en: "Your own birth chart is the best place to begin learning interpretation.", ja: "自分の出生図が解釈学習の最良の出発点だ。" },
          isTrue: true,
          explanation: { en: "Personal verification creates the transformative 'OMG' moment.", ja: "個人的検証が変容的な「OMG moment」を生む。" },
        },
        {
          id: "c24tf4",
          statement: { en: "AI can replace a human mentor's intuitive, experiential guidance entirely.", ja: "AIは人間メンターの直感的・経験的指導を完全に置き換えられる。" },
          isTrue: false,
          explanation: { en: "AI assists research, but lacks personal experience and subjective insight.", ja: "AIは研究を助けるが、個人的経験と主観的洞察に欠ける。" },
        },
        {
          id: "c24tf5",
          statement: { en: "Sign exchange (Sambandha) can explain results that no other factor reveals.", ja: "星座交換（サンバンダ）が他の要因では明らかにできない結果を説明できる。" },
          isTrue: true,
          explanation: { en: "Parivartana Yoga between two planets creates powerful mutual effects.", ja: "二惑星間のパリヴァルタナヨーガが強力な相互効果を生む。" },
        },
      ],
    },
    {
      id: "ch24-multi",
      kind: "multi-select",
      title: { en: "Spiritual Practices for Jyotishis", ja: "ジョーティシのための精神修練" },
      question: {
        en: "Which practices help develop intuitive chart-reading ability? Select ALL.",
        ja: "直感的チャートリーディング能力の開発に役立つ修練は？該当するものをすべて選んでください。",
      },
      options: [
        { id: "med", label: { en: "Daily meditation with mantras", ja: "マントラを伴う日々の瞑想" }, icon: "moon" },
        { id: "yoga", label: { en: "Yoga and pranayama", ja: "ヨガとプラーナーヤーマ" }, icon: "sun" },
        { id: "charts", label: { en: "Studying many charts over time", ja: "時間をかけて多くのチャートを研究" }, icon: "eye" },
        { id: "gossip", label: { en: "Reading celebrity gossip columns", ja: "有名人ゴシップコラムを読む" }, icon: "wind" },
        { id: "satt", label: { en: "Sattvic diet and lifestyle", ja: "サートヴィックな食事と生活" }, icon: "sparkles" },
        { id: "skip", label: { en: "Skipping all spiritual practice", ja: "すべての精神修練をスキップ" }, icon: "mountain" },
      ],
      correctOptionIds: ["med", "yoga", "charts", "satt"],
      explanation: {
        en: "Meditation, yoga, chart practice, and Sattvic living all cultivate Jyotish Mati Pragya.",
        ja: "瞑想、ヨガ、チャート実践、サートヴィック生活がすべてジョーティシュ・マティ・プラギャを育む。",
      },
    },
    {
      id: "ch24-scenario",
      kind: "quiz",
      title: { en: "Information Overload Rescue", ja: "情報過多レスキュー" },
      question: {
        en: "Your software shows 47 Yogas, Shadbala scores, and 16 Vargas. You're a beginner. What do you focus on FIRST?",
        ja: "ソフトが47ヨーガ、シャダバラスコア、16ヴァルガを表示。初心者。まず何に焦点を？",
      },
      options: [
        { id: "all", label: { en: "Analyse every single factor equally", ja: "すべての要素を均等に分析" }, icon: "wind" },
        { id: "core", label: { en: "Ascendant, planet strengths, functional nature, dashas", ja: "アセンダント、惑星強度、機能性質、ダシャー" }, icon: "compass" },
        { id: "yoga", label: { en: "All 47 Yogas before anything else", ja: "他の何より先に47ヨーガ全部" }, icon: "orbit" },
        { id: "ignore", label: { en: "Ignore the chart entirely", ja: "チャートを完全無視" }, icon: "mountain" },
      ],
      correctOptionId: "core",
      explanation: {
        en: "Core factors first — defer Shadbala numbers, most Vargas, and exhaustive Yoga lists until fundamentals are solid.",
        ja: "核心要素を先に — 基礎が固まるまでシャダバラ数値、大部分ヴァルガ、網羅的ヨーガリストは延期。",
      },
    },
    {
      id: "ch24-quiz",
      kind: "quiz",
      question: {
        en: "What is the ultimate purpose of Vedic Astrology according to Sri Sri Ravi Shankar?",
        ja: "スリ・スリ・ラヴィ・シャンカルによるヴェーダ占星術の究極の目的は？",
      },
      options: [
        { id: "fear", label: { en: "To create fear about the future", ja: "未来への恐れを生む" }, icon: "mountain" },
        { id: "truth", label: { en: "To reveal the universe as one consciousness", ja: "宇宙を一つの意識として明らかにする" }, icon: "sparkles" },
        { id: "money", label: { en: "To maximise consulting fees", ja: "相談料を最大化する" }, icon: "droplets" },
        { id: "fame", label: { en: "To predict celebrity scandals", ja: "有名人スキャンダルを予測する" }, icon: "wind" },
      ],
      correctOptionId: "truth",
      explanation: {
        en: "Jyotish points toward the truth that all is one Being, one Self.",
        ja: "ジョーティシュはすべてが一つの存在、一つの自己である真理を指し示す。",
      },
    },
  ],
};
