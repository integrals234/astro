import { Dna } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter12CosmicCode: CourseChapter = {
  id: "ch12",
  number: 12,
  title: { en: "The Cosmic Code", ja: "宇宙のコード" },
  subtitle: {
    en: "Information not forces — and how Jyotish predicts",
    ja: "力ではなく情報 — ジョーティシュが予測する仕組み",
  },
  icon: Dna,
  steps: [
    {
      id: "ch12-s0",
      kind: "content",
      icon: "orbit",
      title: { en: "Codified Information, Not Forces", ja: "符号化された情報、力ではない" },
      body: {
        en: "Western astrologers often assume planets emit subtle forces. Jyotish works differently — with a complete field of cosmic code. The nine Grahas in 12 signs, 12 houses, and 27 Nakshatras encode everything needed for prediction.",
        ja: "西洋占星術師は惑星が微妙な力を放つと仮定することが多い。ジョーティシュは異なり — 完全な宇宙コードの場で機能します。12星座・12ハウス・27ナクシャトラの9グラハが予測に必要なすべてを符号化します。",
      },
      highlight: {
        en: "When astrologers say \"planetary force\" in Jyotish, they mean significations — not physical Newtonian force.",
        ja: "ジョーティシュで「惑星の力」と言うとき、意味するのは象徴 — 物理的なニュートン的な力ではない。",
      },
    },
    {
      id: "ch12-s1",
      kind: "content",
      icon: "flame",
      title: { en: "Mars Proves It's Not a Force", ja: "火星が力ではないことを証明" },
      body: {
        en: "The same Mars gives opposite results for different Ascendants. Mars is highly benefic for Simha (Leo) Lagna — ruling the 4th and 9th houses. For Kanya (Virgo) Lagna, Mars rules the 6th and 11th — strongly unfavourable. A physical force couldn't explain this.",
        ja: "同じ火星がラグナによって正反対の結果を与えます。火星はシンハ（獅子）ラグナでは非常に吉星 — 第4と第9ハウスを支配。カニヤ（乙女）ラグナでは第6と第11を支配 — 強く凶。物理的な力では説明できません。",
      },
      bullets: [
        { en: "Functional benefic/malefic depends on Ascendant", ja: "功能的吉星/凶星はアセンダント次第" },
        { en: "Rahu & Ketu have no physical substance — yet indicate major karmas", ja: "ラーフとケートゥに物理的実体はない — しかし主要カルマを示す" },
      ],
    },
    {
      id: "ch12-s2",
      kind: "content",
      icon: "mountain",
      title: { en: "Sidereal Zodiac Deep Dive", ja: "サイデリアル黄道 深掘り" },
      body: {
        en: "Sidereal means \"with respect to the stars.\" Aries stays fixed to the stellar background. Tropical Aries drifts due to precession — Earth's axis wobbles like a spinning top over ~26,000 years. Lahiri's ayanamsa (~24° in 2021) is widely used.",
        ja: "サイデリアルは「星に関して」の意味。牡羊座は恒星背景に固定。トロピカル牡羊座は歳差で漂移 — 地軸がコマのように約26,000年で揺れます。ラヒリーのアヤナームシャ（2021年約24°）が広く使われます。",
      },
      bullets: [
        { en: "Tropical zodiac shifts ~1° every 71 years", ja: "トロピカル黄道は約71年ごとに1°ずれる" },
        { en: "0°–24° tropical Virgo → sidereal Leo", ja: "トロピカル乙女座0°–24° → サイデリアル獅子座" },
        { en: "Nakshatras require a star-fixed zodiac", ja: "ナクシャトラには星固定の黄道が必要" },
      ],
    },
    {
      id: "ch12-s3",
      kind: "content",
      icon: "droplets",
      title: { en: "DNA of the Birth Chart", ja: "出生図のDNA" },
      body: {
        en: "A birth chart is like DNA in a seed — vast information in condensed form, unfolding through time into life events. Just as biochemistry decodes DNA into physical traits, Jyotish decodes planetary arrangements into karmic outcomes.",
        ja: "出生図は種のDNAのように — 凝縮された膨大な情報が、時間を通じて人生の出来事に展開します。生化学がDNAを身体的特徴に解読するように、ジョーティシュは惑星配置をカルマの結果に解読します。",
      },
      highlight: {
        en: "Sri Sri Ravi Shankar: astrology takes you to the truth that the entire universe is one organism.",
        ja: "スリ・スリ・ラヴィ・シャンカル：占星術は宇宙全体が一つの生命体である真理へ導く。",
      },
    },
    {
      id: "ch12-s4",
      kind: "content",
      icon: "wind",
      title: { en: "Weather Forecast Analogy", ja: "天気予報の比喩" },
      body: {
        en: "Jyotish is probabilistic — like long-range weather forecasting. Storms on the horizon? Take an umbrella. Fine weather? Move forward boldly. Skilled astrologers achieve ~70% accuracy; confidence rises when many chart factors align.",
        ja: "ジョーティシュは確率的 — 長期天気予報のように。地平線に嵐？傘を持つ。快晴？大胆に前進。熟練の占星術師は約70%の精度；多くのチャート要素が一致すると確信が高まる。",
      },
    },
    {
      id: "ch12-s5",
      kind: "content",
      icon: "compass",
      title: { en: "Seed & Road Map Analogies", ja: "種と道路地図の比喩" },
      body: {
        en: "A botanist predicts birch vs redwood from a seed — not exact branch count, but general growth. Jyotish predicts life trends similarly. The road-map analogy: Jyotish gives a helicopter view — seeing bends and obstacles before you reach them.",
        ja: "植物学者は種からカバ vs レッドウッドを予測 — 正確な枝の数ではなく、一般的成長。ジョーティシュも同様に人生の傾向を予測。道路地図の比喩：ジョーティシュはヘリコプター視点 — 曲がり角と障害を到達前に見る。",
      },
      bullets: [
        { en: "Birth time is not random — it reflects interconnected cosmic order", ja: "出生時刻はランダムではない — 相互接続された宇宙秩序を反映" },
        { en: "Smooth roads and rough terrain both change over life's journey", ja: "なだらかな道も険しい地形も人生の旅で変わる" },
      ],
    },
    {
      id: "ch12-flash",
      kind: "flashcards",
      title: { en: "Prediction Analogies Flashcards", ja: "予測比喩 フラッシュカード" },
      instruction: {
        en: "Match each analogy to what it teaches about Jyotish. Flip all cards to continue.",
        ja: "各比喩がジョーティシュについて教えることを結びつけましょう。すべて見て進みます。",
      },
      cards: [
        { id: "a1", front: { en: "Weather forecast", ja: "天気予報" }, back: { en: "Probabilistic — prepare, not panic", ja: "確率的 — パニックではなく備える" }, icon: "wind" },
        { id: "a2", front: { en: "Seed / DNA", ja: "種 / DNA" }, back: { en: "Blueprint encoded at birth", ja: "出生時に符号化された設計図" }, icon: "sparkles" },
        { id: "a3", front: { en: "Helicopter road map", ja: "ヘリコプター道路地図" }, back: { en: "See obstacles before you arrive", ja: "到着前に障害を見る" }, icon: "compass" },
        { id: "a4", front: { en: "Cosmic postman", ja: "宇宙の郵便配達人" }, back: { en: "Planets deliver karmic packages", ja: "惑星がカルマの荷物を届ける" }, icon: "orbit" },
        { id: "a5", front: { en: "Ayanamsa", ja: "アヤナームシャ" }, back: { en: "~24° gap tropical vs sidereal", ja: "トロピカル vs サイデリアル約24°差" }, icon: "sun" },
        { id: "a6", front: { en: "Functional benefic", ja: "功能的吉星" }, back: { en: "Planet auspicious for YOUR Ascendant", ja: "あなたのアセンダントに吉な惑星" }, icon: "flame" },
      ],
    },
    {
      id: "ch12-match",
      kind: "match",
      title: { en: "Analogy Match Game", ja: "比喩マッチゲーム" },
      instruction: {
        en: "Connect each Jyotish analogy to the concept it best illustrates.",
        ja: "各ジョーティシュ比喩を最もよく示す概念に結びつけましょう。",
      },
      pairs: [
        { leftId: "weather", left: { en: "Rain expected → take umbrella", ja: "雨予報 → 傘を持つ" }, rightId: "prob", right: { en: "Probabilistic preparation", ja: "確率的な備え" }, leftIcon: "wind" },
        { leftId: "seed", left: { en: "Acorn → oak, not fir", ja: "どんぐり → 樫、モミではない" }, rightId: "code", right: { en: "Birth chart karmic code", ja: "出生図のカルマコード" }, leftIcon: "sparkles" },
        { leftId: "heli", left: { en: "View from helicopter", ja: "ヘリコプターからの視点" }, rightId: "ahead", right: { en: "See life turns ahead", ja: "人生の曲がり角を先に見る" }, leftIcon: "compass" },
        { leftId: "mars", left: { en: "Mars good for Leo Lagna", ja: "獅子ラグナに火星は吉" }, rightId: "func", right: { en: "Ascendant-dependent meaning", ja: "アセンダント依存の意味" }, leftIcon: "flame" },
        { leftId: "70", left: { en: "~70% prediction accuracy", ja: "約70%の予測精度" }, rightId: "skilled", right: { en: "Skilled astrologer benchmark", ja: "熟練占星術師の基準" }, leftIcon: "eye" },
      ],
    },
    {
      id: "ch12-order",
      kind: "order",
      title: { en: "Precession Timeline", ja: "歳差タイムライン" },
      instruction: {
        en: "Order these facts about the two zodiacs from ancient alignment to today.",
        ja: "二つの黄道に関する事実を古代の一致から今日まで並べましょう。",
      },
      items: [
        { id: "align", label: { en: "Zodiacs aligned ~1,700 years ago", ja: "黄道は約1700年前に一致" }, icon: "orbit" },
        { id: "prec", label: { en: "Earth's axis precesses over ~26,000 years", ja: "地軸は約26,000年で歳差運動" }, icon: "mountain" },
        { id: "shift", label: { en: "Tropical shifts ~1° every 71 years", ja: "トロピカルは約71年ごとに1°ずれる" }, icon: "wind" },
        { id: "now", label: { en: "2021: ~24° ayanamsa (Lahiri)", ja: "2021年：アヤナームシャ約24°（ラヒリー）" }, icon: "sun" },
      ],
    },
    {
      id: "ch12-tf",
      kind: "true-false",
      title: { en: "Cosmic Code: True or False", ja: "宇宙のコード マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "c12tf1",
          statement: { en: "Jyotish needs Uranus and Pluto to make complete predictions.", ja: "ジョーティシュは完全な予測に天王星と冥王星が必要だ。" },
          isTrue: false,
          explanation: { en: "Nine Grahas in signs, houses, and Nakshatras encode all needed information.", ja: "9グラハ×星座×ハウス×ナクシャトラが必要な情報をすべて符号化。" },
        },
        {
          id: "c12tf2",
          statement: { en: "Astronomers' criticism of movable Aries does not apply to sidereal Jyotish.", ja: "可動牡羊座への天文学者の批判はサイデリアルジョーティシュには当てはまらない。" },
          isTrue: true,
          explanation: { en: "Sidereal Aries stays fixed to the stellar background.", ja: "サイデリアル牡羊座は恒星背景に固定されたまま。" },
        },
        {
          id: "c12tf3",
          statement: { en: "The same planet always produces identical results for every person.", ja: "同じ惑星はすべての人に同一の結果をもたらす。" },
          isTrue: false,
          explanation: { en: "Ascendant changes functional benefic/malefic status — e.g. Mars for Leo vs Virgo Lagna.", ja: "アセンダントが功能的吉星/凶星を変える — 例：獅子 vs 乙女ラグナの火星。" },
        },
        {
          id: "c12tf4",
          statement: { en: "A birth chart unfolds karmic information over time like DNA in a seed.", ja: "出生図は種のDNAのように時間を通じてカルマ情報を展開する。" },
          isTrue: true,
          explanation: { en: "The cosmic code gradually manifests as life events and experiences.", ja: "宇宙コードが徐々に人生の出来事と経験として現れる。" },
        },
      ],
    },
    {
      id: "ch12-multi",
      kind: "multi-select",
      title: { en: "Why Nine Grahas Are Enough", ja: "なぜ9グラハで十分か" },
      question: {
        en: "Which support the view that Jyotish uses codified information, not physical forces? Select ALL.",
        ja: "ジョーティシュが物理的力ではなく符号化情報を使う見解を支持するものは？該当するものをすべて選んでください。",
      },
      options: [
        { id: "asc", label: { en: "Same planet, different results per Ascendant", ja: "同じ惑星、アセンダントごとに異なる結果" }, icon: "flame" },
        { id: "nodes", label: { en: "Rahu/Ketu have no physical body yet show karmas", ja: "ラーフ/ケートゥに物理体がないがカルマを示す" }, icon: "orbit" },
        { id: "outer", label: { en: "Outer planets required for every prediction", ja: "すべての予測に外惑星が必要" }, icon: "wind" },
        { id: "dna", label: { en: "Chart as condensed karmic code like DNA", ja: "DNAのような凝縮カルマコードとしてのチャート" }, icon: "sparkles" },
        { id: "trans", label: { en: "Transits as coded information expressions", ja: "トランジットは符号化情報の表現" }, icon: "moon" },
        { id: "force", label: { en: "Planets emit measurable physical forces on humans", ja: "惑星が人間に測定可能な物理力を放射" }, icon: "mountain" },
      ],
      correctOptionIds: ["asc", "nodes", "dna", "trans"],
      explanation: {
        en: "Ascendant-dependency, shadow nodes, DNA analogy, and transit-as-code all support the information field model.",
        ja: "アセンダント依存・影の交点・DNA比喩・コードとしてのトランジットが情報場モデルを支持。",
      },
    },
    {
      id: "ch12-quiz",
      kind: "quiz",
      question: {
        en: "Western Sun at 14° Virgo. Subtract ~24° ayanamsa. What is the Vedic sidereal Sun sign?",
        ja: "西洋太陽が乙女座14°。アヤナームシャ約24°を引く。ヴェーダサイデリアル太陽星座は？",
      },
      options: [
        { id: "virgo", label: { en: "14° Virgo", ja: "乙女座14°" }, icon: "mountain" },
        { id: "leo", label: { en: "20° Leo (Simha)", ja: "獅子座（シンハ）20°" }, icon: "sun" },
        { id: "libra", label: { en: "14° Libra", ja: "天秤座14°" }, icon: "wind" },
        { id: "leo4", label: { en: "4° Leo", ja: "獅子座4°" }, icon: "flame" },
      ],
      correctOptionId: "leo",
      explanation: {
        en: "14 − 24 = −10° Virgo → wraps to 20° Leo (−10 + 30 = 20).",
        ja: "14−24=−10°乙女座 → 獅子座20°に回り込む（−10+30=20）。",
      },
    },
  ],
};
