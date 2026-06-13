import { Trophy } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter7Practice: CourseChapter = {
  id: "ch7",
  number: 7,
  title: { en: "Chart Reading Practice", ja: "チャート読解プラクティス" },
  subtitle: {
    en: "Full integration — planets, houses, aspects & more",
    ja: "完全統合 — 惑星・ハウス・アスペクトなど",
  },
  icon: Trophy,
  steps: [
    {
      id: "ch7-s0",
      kind: "content",
      icon: "compass",
      title: { en: "The Complete Beginner's Formula", ja: "完全版・初心者の読み方公式" },
      body: {
        en: "You now know Grahas, Rashis, Lagna, Houses, Nakshatras, and Drishti. Use this 7-step checklist every time you open your chart.",
        ja: "グラハ、ラーシ、ラグナ、ハウス、ナクシャトラ、ドリシュティを学びました。この7ステップチェックリストを毎回使いましょう。",
      },
      bullets: [
        { en: "Step 1: Lagna sign → outer personality", ja: "ステップ1：ラグナの星座 → 外見の性格" },
        { en: "Step 2: Moon sign & Nakshatra → inner mind", ja: "ステップ2：月星座とナクシャトラ → 内なる心" },
        { en: "Step 3: Sun sign → confidence & vitality", ja: "ステップ3：太陽星座 → 自信と活力" },
        { en: "Step 4: Planets in Kendras (1,4,7,10)", ja: "ステップ4：ケンドラ（1,4,7,10）の惑星" },
        { en: "Step 5: Jupiter & Saturn houses → luck & lessons", ja: "ステップ5：木星と土星のハウス → 幸運と教訓" },
        { en: "Step 6: Drishti — who aspects your 7th, 10th, Lagna?", ja: "ステップ6：ドリシュティ — 第7・10・ラグナに誰がアスペクト？" },
        { en: "Step 7: Conjunctions — planets sharing a house", ja: "ステップ7：合 — 同じハウスを共有する惑星" },
      ],
    },
    {
      id: "ch7-s1",
      kind: "content",
      icon: "sun",
      title: { en: "Sample: Mesha Lagna + Mars in 10th", ja: "例：メーシャ・ラグナ＋第10ハウスの火星" },
      body: {
        en: "Mesha Lagna looks bold and direct. Mars (chart ruler) in the 10th house fuels career ambition. Mars also aspects the 1st (4th aspect from 10), 4th, and 5th houses — energizing home and creativity too.",
        ja: "メーシャ・ラグナは大胆で率直に見えます。火星（チャートの支配星）が第10ハウスにあればキャリアの野心に燃料。火星は第1（第10からの第4アスペクト）・第4・第5ハウスにもアスペクト — 家庭と創造性にもエネルギーを与えます。",
      },
    },
    {
      id: "ch7-s2",
      kind: "content",
      icon: "sparkles",
      title: { en: "Sample: Jupiter Aspecting Your 7th House", ja: "例：第7ハウスにアスペクトする木星" },
      body: {
        en: "If Jupiter sits in House 1, its 7th aspect falls on House 7 — partnerships get Jupiter's protection and growth. If Jupiter is in House 5, its 7th aspect still hits House 11, AND its special 9th aspect reaches House 1 (Lagna). Trace each planet carefully.",
        ja: "木星が第1ハウスにあれば、第7アスペクトは第7ハウスへ — パートナーシップに木星の守護と成長。木星が第5ハウスなら第7アスペクトは第11へ、特別な第9アスペクトは第1ハウス（ラグナ）へ。各惑星を丁寧に追いましょう。",
      },
    },
    {
      id: "ch7-s3",
      kind: "content",
      icon: "moon",
      title: { en: "Sample: Moon in Karka with Saturn's Gaze", ja: "例：カルカの月＋土星の視線" },
      body: {
        en: "Moon in Karka needs emotional safety. If Saturn in House 4 aspects Moon's house (via 7th or special aspect), emotions may feel heavy or delayed — but Saturn also builds deep resilience over time.",
        ja: "カルカの月は感情的な安心を必要とします。土星が第4ハウスにあり月のハウスにアスペクト（第7または特別アスペクト経由）なら、感情は重く感じたり遅れたりする — しかし土星は時間とともに深い回復力も築きます。",
      },
    },
    {
      id: "ch7-s4",
      kind: "content",
      icon: "mountain",
      title: { en: "Putting It Together on the Dashboard", ja: "ダッシュボードで統合する" },
      body: {
        en: "Open your chart. Run the 7 steps on paper: write Lagna, Moon, Sun, Kendra planets, Jupiter/Saturn positions, then list every Drishti onto Houses 1, 7, and 10. Circle any conjunctions. This 15-minute ritual is your first real reading.",
        ja: "チャートを開きます。7ステップを紙に書き：ラグナ、月、太陽、ケンドラの惑星、木星・土星の位置、次に第1・7・10ハウスへのすべてのドリシュティをリスト。合があれば丸で囲みましょう。この15分の儀式が最初の本当の読解です。",
      },
      highlight: {
        en: "Don't rush predictions — observe patterns for weeks. The chart reveals tendencies, not fixed fate.",
        ja: "予言を急がない — 何週間もパターンを観察しましょう。チャートは傾向を示し、固定された運命ではありません。",
      },
    },
    {
      id: "ch7-s5",
      kind: "content",
      icon: "eye",
      title: { en: "Common Beginner Mistakes", ja: "初心者のよくある間違い" },
      body: {
        en: "Avoid these pitfalls — especially around aspects.",
        ja: "これらの落とし穴を避けましょう — 特にアスペクト周りで。",
      },
      bullets: [
        { en: "Using only Sun sign like Western horoscopes", ja: "西洋式のように太陽星座だけを使う" },
        { en: "Ignoring birth time → wrong Lagna and wrong aspects", ja: "出生時刻を無視 → ラグナとアスペクトがずれる" },
        { en: "Forgetting that all planets aspect the 7th house", ja: "すべての惑星が第7ハウスにアスペクトすることを忘れる" },
        { en: "Treating Saturn aspects as only negative", ja: "土星のアスペクトをネガティブだけと決めつける" },
        { en: "Predicting exact events on day one", ja: "初日から具体的な出来事を予言する" },
      ],
    },
    {
      id: "ch7-match",
      kind: "match",
      title: { en: "7-Step Reading Match", ja: "7ステップ読解マッチ" },
      instruction: {
        en: "Match each step to what you examine — including aspects.",
        ja: "各ステップと確認することをマッチ — アスペクトを含む。",
      },
      pairs: [
        { leftId: "s1", left: { en: "Step 1", ja: "ステップ1" }, rightId: "lagna", right: { en: "Lagna sign", ja: "ラグナの星座" }, leftIcon: "sparkles" },
        { leftId: "s2", left: { en: "Step 2", ja: "ステップ2" }, rightId: "moon", right: { en: "Moon & Nakshatra", ja: "月とナクシャトラ" }, leftIcon: "moon" },
        { leftId: "s6", left: { en: "Step 6", ja: "ステップ6" }, rightId: "drishti", right: { en: "Drishti (aspects)", ja: "ドリシュティ（アスペクト）" }, leftIcon: "eye" },
        { leftId: "s7", left: { en: "Step 7", ja: "ステップ7" }, rightId: "conj", right: { en: "Conjunctions", ja: "合（コンジャンクション）" }, leftIcon: "orbit" },
        { leftId: "s4", left: { en: "Step 4", ja: "ステップ4" }, rightId: "kendra", right: { en: "Kendra houses", ja: "ケンドラのハウス" }, leftIcon: "compass" },
      ],
    },
    {
      id: "ch7-multi",
      kind: "multi-select",
      title: { en: "Reading Checklist Challenge", ja: "読解チェックリスト チャレンジ" },
      question: {
        en: "Which should you include in a complete beginner read? Select ALL that apply.",
        ja: "完全な初心者読解に含めるべきは？該当するものをすべて選んでください。",
      },
      options: [
        { id: "lagna", label: { en: "Lagna sign", ja: "ラグナの星座" }, icon: "sparkles" },
        { id: "drishti", label: { en: "Planetary aspects (Drishti)", ja: "惑星のアスペクト（ドリシュティ）" }, icon: "eye" },
        { id: "conj", label: { en: "Conjunctions in houses", ja: "ハウス内の合" }, icon: "orbit" },
        { id: "sunonly", label: { en: "Sun sign only — ignore Moon", ja: "太陽星座だけ — 月は無視" }, icon: "sun" },
        { id: "kendra", label: { en: "Kendra house planets", ja: "ケンドラの惑星" }, icon: "compass" },
        { id: "ignore", label: { en: "Ignore birth time", ja: "出生時刻を無視" }, icon: "mountain" },
      ],
      correctOptionIds: ["lagna", "drishti", "conj", "kendra"],
      explanation: {
        en: "A solid beginner read uses Lagna, Moon, Kendras, aspects, and conjunctions — always with accurate birth time.",
        ja: "しっかりした初心者読解はラグナ・月・ケンドラ・アスペクト・合を使います — 常に正確な出生時刻とともに。",
      },
    },
    {
      id: "ch7-tf",
      kind: "true-false",
      title: { en: "Integrated Reading: True or False", ja: "統合読解 マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "ftf1",
          statement: { en: "Step 6 of the reading formula checks which planets aspect key houses.", ja: "読解公式のステップ6は主要ハウスにアスペクトする惑星を確認する。" },
          isTrue: true,
          explanation: { en: "Drishti shows hidden influences on Lagna, 7th, and 10th.", ja: "ドリシュティはラグナ・第7・第10への隠れた影響を示します。" },
        },
        {
          id: "ftf2",
          statement: { en: "Aspects can be ignored in a superficial chart read.", ja: "ざっくり読みではアスペクトを無視できる。" },
          isTrue: false,
          explanation: { en: "Even beginners benefit from noting Jupiter/Saturn aspects on important houses.", ja: "初心者でも重要ハウスへの木星・土星のアスペクトをメモする価値があります。" },
        },
        {
          id: "ftf3",
          statement: { en: "A complete read combines planet, sign, house, and aspect.", ja: "完全な読解は惑星・星座・ハウス・アスペクトを組み合わせる。" },
          isTrue: true,
          explanation: { en: "All four layers give the full picture.", ja: "4つの層が全体像を与えます。" },
        },
        {
          id: "ftf4",
          statement: { en: "Mars in House 10 aspects House 1 through its 4th aspect.", ja: "第10ハウスの火星は第4アスペクトで第1ハウスを見る。" },
          isTrue: true,
          explanation: { en: "Mars aspects 4th, 7th, 8th from its house — from 10 that's 1, 4, 5.", ja: "火星は座るハウスから第4・7・8にアスペクト — 第10からは第1・4・5。" },
        },
      ],
    },
    {
      id: "ch7-quiz",
      kind: "quiz",
      question: {
        en: "In the 7-step formula, when do you check Drishti (aspects)?",
        ja: "7ステップ公式でドリシュティ（アスペクト）はいつ確認しますか？",
      },
      options: [
        { id: "s1", label: { en: "Step 1 — before Lagna", ja: "ステップ1 — ラグナの前" }, icon: "sparkles" },
        { id: "s6", label: { en: "Step 6 — after Kendras & Jupiter/Saturn", ja: "ステップ6 — ケンドラと木星・土星の後" }, icon: "eye" },
        { id: "never", label: { en: "Never — aspects don't matter", ja: "決して — アスペクトは関係ない" }, icon: "mountain" },
        { id: "s3", label: { en: "Step 3 only", ja: "ステップ3のみ" }, icon: "sun" },
      ],
      correctOptionId: "s6",
      explanation: {
        en: "Build the foundation first (Lagna, Moon, houses), then layer in Drishti and conjunctions.",
        ja: "まず基礎（ラグナ、月、ハウス）を築き、次にドリシュティと合を重ねます。",
      },
    },
  ],
};
