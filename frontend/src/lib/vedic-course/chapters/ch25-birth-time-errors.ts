import { Timer } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter25BirthTimeErrors: CourseChapter = {
  id: "ch25",
  number: 25,
  title: { en: "Birth-Time Accuracy & Rectification", ja: "出生時刻精度とリクティフィケーション" },
  subtitle: {
    en: "When minutes change everything — Lagna, dashas & remedies",
    ja: "数分がすべてを変える時 — ラグナ、ダシャーと処方",
  },
  icon: Timer,
  steps: [
    {
      id: "ch25-s0",
      kind: "content",
      icon: "compass",
      title: { en: "Yes — Birth Time Really Matters", ja: "はい — 出生時刻は本当に重要" },
      body: {
        en: "In Vedic Astrology, inaccurate birth times have serious consequences. Most planets move slowly, but the Moon covers 1° in under 2 hours and the Ascendant can change in less than one hour at some latitudes. Both are absolutely crucial.",
        ja: "ヴェーダ占星術では不正確な出生時刻が深刻な結果をもたらす。多くの惑星はゆっくり動くが、月は2時間未満で1°をカバーし、アセンダントは緯度によっては1時間未満で変わる。両方とも絶対に重要。",
      },
      highlight: {
        en: "Twelve signs, twenty-four hours — Ascendant changes roughly every 2 hours on average.",
        ja: "12星座、24時間 — アセンダントは平均約2時間ごとに変わる。",
      },
    },
    {
      id: "ch25-s1",
      kind: "content",
      icon: "eye",
      title: { en: "Wrong Ascendant, Wrong Everything", ja: "間違ったアセンダント、すべてが間違い" },
      body: {
        en: "If the Ascendant sign is wrong, the entire house framework collapses. Functional benefics become malefics, malefics become benefics, and every house placement shifts. Near sign boundaries (within ~5°), even a few minutes can flip the Lagna entirely.",
        ja: "アセンダント星座が間違えば、ハウス枠組み全体が崩壊。功能的吉星が凶星に、凶星が吉星に、すべてのハウス配置がずれる。星座境界近く（約5°以内）では数分でラグナが完全に反転することがある。",
      },
      bullets: [
        { en: "Mid-sign Ascendant (~15°) tolerates small time errors", ja: "星座中央のアセンダント（約15°）は小さな時刻エラーに寛容" },
        { en: "Boundary Ascendants are high-risk for misidentification", ja: "境界アセンダントは誤同定の高リスク" },
        { en: "All interpretation is built on correctly identifying the 1st house", ja: "すべての解釈は第1ハウスの正しい特定に構築" },
      ],
    },
    {
      id: "ch25-s2",
      kind: "content",
      icon: "mountain",
      title: { en: "Remedies Can Harm — Do No Harm", ja: "処方が害をなす — 害をなさない" },
      body: {
        en: "An incorrect Ascendant can lead to prescribing gemstones for a functional malefic — potentially worsening the client's situation. Example: Aries Ascendant → recommend yellow sapphire for Jupiter (9th lord). But if true Ascendant is Taurus, Jupiter rules the 8th and 11th — a strong functional malefic. Strengthening it could be highly undesirable.",
        ja: "間違ったアセンダントは功能的凶星への宝石処方につながる — クライアントの状況を悪化させる可能性。例：牡羊アセンダント→木星（第9支配）に黄色サファイア推奨。しかし真のアセンダントが牡牛なら、木星は第8と第11を支配 — 強い功能的凶星。強化は非常に望ましくない可能性。",
      },
      highlight: {
        en: "Medicine's first principle applies to Jyotish remedies: Do No Harm.",
        ja: "医学の第一原則がジョーティシュ処方にも適用：害をなさない。",
      },
    },
    {
      id: "ch25-s3",
      kind: "content",
      icon: "moon",
      title: { en: "Dasha & Nakshatra Timing Errors", ja: "ダシャーとナクシャトラ時期エラー" },
      body: {
        en: "Mahadasha and Antardasha start dates depend on the Moon's position. A 20-minute error can shift dasha timings by 3–6 months. For Venus, Saturn, or Rahu Mahadashas the effect is especially pronounced. Moon near a Nakshatra boundary can assign the wrong lunar mansion entirely.",
        ja: "マハーダシャーとアンタルダシャー開始日は月の位置に依存。20分のエラーでダシャー時期が3〜6ヶ月ずれる。金星、土星、ラーフマハーダシャーでは特に顕著。ナクシャトラ境界近くの月は完全に間違った月宮を割り当てる可能性。",
      },
      bullets: [
        { en: "Actual birth earlier than recorded → dashas begin LATER than calculated", ja: "記録より実際の出生が早い→計算よりダシャー開始が遅い" },
        { en: "Actual birth later than recorded → dashas begin EARLIER than calculated", ja: "記録より実際の出生が遅い→計算よりダシャー開始が早い" },
        { en: "Skilled astrologers use life events to verify and correct timing", ja: "熟練占星術師は人生イベントで時期を検証・修正" },
      ],
    },
    {
      id: "ch25-s4",
      kind: "content",
      icon: "sparkles",
      title: { en: "Chart Rectification", ja: "チャート・リクティフィケーション" },
      body: {
        en: "When chart indications don't match life events, birth-time error is a prime suspect. Rectification compares marriage dates, children, career shifts, health crises, and dasha periods against multiple candidate birth times. Modern software makes generating and comparing charts for a time range fast and precise.",
        ja: "チャート表示が人生イベントと一致しないとき、出生時刻エラーが第一容疑。リクティフィケーションは結婚日、子供、キャリア転換、健康危機、ダシャー期を複数の候補出生時刻と比較。現代ソフトが時間範囲のチャート生成・比較を迅速正確に。",
      },
      bullets: [
        { en: "Ask clients about documented life milestones", ja: "クライアントに記録された人生マイルストーンについて尋ねる" },
        { en: "Mahadasha analysis plays a major role in rectification", ja: "マハーダシャー分析がリクティフィケーションで主要役割" },
        { en: "Requires considerable skill — not a beginner technique", ja: "相当な技術を要する — 初心者技法ではない" },
      ],
    },
    {
      id: "ch25-flash",
      kind: "flashcards",
      title: { en: "Birth-Time Impact Cards", ja: "出生時刻影響カード" },
      instruction: {
        en: "Learn what rides on an accurate birth time — flip all cards.",
        ja: "正確な出生時刻に何がかかっているか学ぶ — すべて見て。",
      },
      cards: [
        { id: "b1", front: { en: "Moon speed", ja: "月の速度" }, back: { en: "~1° zodiac in under 2 hours", ja: "2時間未満で黄道約1°" }, icon: "moon" },
        { id: "b2", front: { en: "Ascendant change", ja: "アセンダント変化" }, back: { en: "Roughly every 2 hours (faster at some latitudes)", ja: "概ね2時間ごと（緯度によりより速く）" }, icon: "compass" },
        { id: "b3", front: { en: "Rectification", ja: "リクティフィケーション" }, back: { en: "Working backwards from life events to find true birth time", ja: "人生イベントから真の出生時刻を逆算" }, icon: "eye" },
        { id: "b4", front: { en: "20-minute error", ja: "20分のエラー" }, back: { en: "Can shift dasha dates by 3+ months", ja: "ダシャー日付を3ヶ月以上ずらせる" }, icon: "wind" },
        { id: "b5", front: { en: "Boundary Lagna", ja: "境界ラグナ" }, back: { en: "Within ~5° of sign edge — highest risk", ja: "星座端約5°以内 — 最高リスク" }, icon: "mountain" },
        { id: "b6", front: { en: "Do No Harm", ja: "害をなさない" }, back: { en: "Never prescribe remedies based on uncertain Ascendant", ja: "不確かなアセンダントに基づく処方を決してしない" }, icon: "sparkles" },
      ],
    },
    {
      id: "ch25-match",
      kind: "match",
      title: { en: "Consequence Matcher", ja: "結果マッチャー" },
      instruction: {
        en: "Match each birth-time problem to its consequence.",
        ja: "各出生時刻問題をその結果に結びつけましょう。",
      },
      pairs: [
        { leftId: "wrong", left: { en: "Wrong Ascendant sign", ja: "間違ったアセンダント星座" }, rightId: "houses", right: { en: "All house placements shift", ja: "すべてのハウス配置がずれる" }, leftIcon: "compass" },
        { leftId: "func", left: { en: "Incorrect functional analysis", ja: "不正確な機能分析" }, rightId: "remedy", right: { en: "Harmful gemstone prescriptions", ja: "有害な宝石処方" }, leftIcon: "mountain" },
        { leftId: "moon", left: { en: "Moon position error", ja: "月位置エラー" }, rightId: "dasha", right: { en: "Wrong Mahadasha start dates", ja: "間違ったマハーダシャー開始日" }, leftIcon: "moon" },
        { leftId: "nak", left: { en: "Moon at Nakshatra boundary", ja: "ナクシャトラ境界の月" }, rightId: "wrong_nak", right: { en: "Wrong lunar mansion assigned", ja: "間違った月宮が割り当て" }, leftIcon: "orbit" },
        { leftId: "rect", left: { en: "Life events don't match chart", ja: "人生イベントがチャートと不一致" }, rightId: "suspect", right: { en: "Suspect birth-time error", ja: "出生時刻エラーを疑う" }, leftIcon: "eye" },
      ],
    },
    {
      id: "ch25-order",
      kind: "order",
      title: { en: "Rectification Detective Steps", ja: "リクティフィケーション探偵ステップ" },
      instruction: {
        en: "Order the chart rectification workflow.",
        ja: "チャート・リクティフィケーションのワークフローを順に並べましょう。",
      },
      items: [
        { id: "events", label: { en: "1. Gather documented life events", ja: "1. 記録された人生イベントを収集" }, icon: "eye" },
        { id: "candidates", label: { en: "2. Generate charts for candidate times", ja: "2. 候補時刻のチャートを生成" }, icon: "compass" },
        { id: "dasha", label: { en: "3. Compare Mahadasha periods to events", ja: "3. マハーダシャー期をイベントと比較" }, icon: "moon" },
        { id: "lagna", label: { en: "4. Verify Ascendant against personality & life", ja: "4. 性格と人生でアセンダントを検証" }, icon: "sun" },
        { id: "select", label: { en: "5. Select the best-matching birth time", ja: "5. 最も一致する出生時刻を選択" }, icon: "sparkles" },
      ],
    },
    {
      id: "ch25-tf",
      kind: "true-false",
      title: { en: "Birth-Time Facts", ja: "出生時刻ファクト" },
      instruction: { en: "3 of 5 correct to pass.", ja: "5問中3問正解で合格。" },
      statements: [
        {
          id: "c25tf1",
          statement: { en: "Birth-time errors have little effect on Mahadasha calculations.", ja: "出生時刻エラーはマハーダシャー計算にほとんど影響しない。" },
          isTrue: false,
          explanation: { en: "Dasha timing depends directly on the Moon's position.", ja: "ダシャー時期は月の位置に直接依存。" },
        },
        {
          id: "c25tf2",
          statement: { en: "If the true birth time is earlier than recorded, calculated dashas will begin later than they should.", ja: "真の出生時刻が記録より早い場合、計算されたダシャーは本来より遅く始まる。" },
          isTrue: true,
          explanation: { en: "Earlier actual birth → Moon further along → dasha dates pushed later.", ja: "実際の出生が早い→月がより進んでいる→ダシャー日付が遅く押される。" },
        },
        {
          id: "c25tf3",
          statement: { en: "An Ascendant at 15° of a sign tolerates small birth-time errors without changing signs.", ja: "星座15°のアセンダントは小さな出生時刻エラーに星座変更なしで寛容。" },
          isTrue: true,
          explanation: { en: "Mid-sign Lagna has the most tolerance for timing inaccuracy.", ja: "星座中央ラグナが時刻不正確さに最も寛容。" },
        },
        {
          id: "c25tf4",
          statement: { en: "Prescribing a yellow sapphire for Jupiter is always safe regardless of Ascendant.", ja: "木星に黄色サファイアを処方するのはアセンダントに関係なく常に安全。" },
          isTrue: false,
          explanation: { en: "Jupiter can be a strong functional malefic (e.g. Taurus Ascendant) — wrong Lagna makes this dangerous.", ja: "木星は強い功能的凶星になりうる（例：牡牛アセンダント）— 間違ったラグナで危険。" },
        },
        {
          id: "c25tf5",
          statement: { en: "Mahadasha analysis is a key tool in birth-time rectification.", ja: "マハーダシャー分析は出生時刻リクティフィケーションの重要ツール。" },
          isTrue: true,
          explanation: { en: "Matching dasha periods to life milestones helps pin down the correct time.", ja: "ダシャー期を人生マイルストーンと照合して正しい時刻を特定。" },
        },
      ],
    },
    {
      id: "ch25-multi",
      kind: "multi-select",
      title: { en: "What Depends on Birth Time?", ja: "出生時刻に何が依存？" },
      question: {
        en: "Which chart factors are directly affected by birth-time accuracy? Select ALL.",
        ja: "出生時刻精度に直接影響されるチャート要素は？該当するものをすべて選んでください。",
      },
      options: [
        { id: "lagna", label: { en: "Ascendant (Lagna) sign", ja: "アセンダント（ラグナ）星座" }, icon: "compass" },
        { id: "moon", label: { en: "Moon's precise degree & Nakshatra", ja: "月の正確な度数とナクシャトラ" }, icon: "moon" },
        { id: "dasha", label: { en: "Mahadasha start dates", ja: "マハーダシャー開始日" }, icon: "orbit" },
        { id: "sun", label: { en: "Sun's zodiac sign (usually)", ja: "太陽の星座（通常）" }, icon: "sun" },
        { id: "func", label: { en: "Functional benefic/malefic classification", ja: "功能的吉星/凶星分類" }, icon: "sparkles" },
        { id: "neptune", label: { en: "Neptune's house placement", ja: "海王星のハウス配置" }, icon: "wind" },
      ],
      correctOptionIds: ["lagna", "moon", "dasha", "func"],
      explanation: {
        en: "Lagna, Moon, dashas, and functional status all shift with time errors. The Sun sign rarely changes from minutes of error.",
        ja: "ラグナ、月、ダシャー、機能ステータスはすべて時刻エラーでずれる。太陽星座は数分のエラーではめったに変わらない。",
      },
    },
    {
      id: "ch25-scenario",
      kind: "quiz",
      title: { en: "Remedy Disaster Averted", ja: "処方災害回避" },
      question: {
        en: "An astrologer calculates Aries Ascendant and recommends yellow sapphire for Jupiter. The true Ascendant is Taurus. What is Jupiter's functional status for Taurus?",
        ja: "占星術師が牡羊アセンダントを計算し木星に黄色サファイア推奨。真のアセンダントは牡牛。牡牛にとって木星の機能ステータスは？",
      },
      options: [
        { id: "ben", label: { en: "Strong functional benefic", ja: "強い功能的吉星" }, icon: "sparkles" },
        { id: "mal", label: { en: "Strong functional malefic (8th & 11th lord)", ja: "強い功能的凶星（第8・11支配）" }, icon: "mountain" },
        { id: "neutral", label: { en: "Perfectly neutral", ja: "完全中立" }, icon: "wind" },
        { id: "yoga", label: { en: "Yogakaraka for Taurus", ja: "牡牛のヨーガカーラカ" }, icon: "sun" },
      ],
      correctOptionId: "mal",
      explanation: {
        en: "Jupiter rules Pisces (8th) and Sagittarius (11th) for Taurus — strengthening it via gemstone could cause harm.",
        ja: "木星は牡牛にとって魚座（第8）と射手座（第11）を支配 — 宝石で強化すると害をなす可能性。",
      },
    },
    {
      id: "ch25-quiz",
      kind: "quiz",
      question: {
        en: "How fast does the Moon move through the zodiac compared to most planets?",
        ja: "月はほとんどの惑星と比べて黄道をどれほど速く移動する？",
      },
      options: [
        { id: "slow", label: { en: "About 1° per day, like the Sun", ja: "太陽のように約1日で1°" }, icon: "sun" },
        { id: "fast", label: { en: "About 1° in under 2 hours", ja: "2時間未満で約1°" }, icon: "moon" },
        { id: "still", label: { en: "It doesn't move noticeably", ja: "目立って動かない" }, icon: "mountain" },
        { id: "week", label: { en: "About 1° per week", ja: "約1週間で1°" }, icon: "wind" },
      ],
      correctOptionId: "fast",
      explanation: {
        en: "The Moon's speed makes it — and dasha timing — extremely sensitive to birth-time errors.",
        ja: "月の速度が — ダシャー時期も — 出生時刻エラーに非常に敏感にする。",
      },
    },
  ],
};
