import { Brain } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter11CognitionKarma: CourseChapter = {
  id: "ch11",
  number: 11,
  title: { en: "Vedic Cognition & Karma", ja: "ヴェーダ認知とカルマ" },
  subtitle: {
    en: "Revealed wisdom, three karma types & the karma wheel",
    ja: "啓示の知恵・三カルマ・カルマの輪",
  },
  icon: Brain,
  steps: [
    {
      id: "ch11-s0",
      kind: "content",
      icon: "sparkles",
      title: { en: "Revealed, Not Invented", ja: "発明ではなく啓示" },
      body: {
        en: "Western history traces astrology culture to culture. Jyotish answers differently: it was cognized — revealed to enlightened sages through deep Yoga and meditation, not gradually discovered by experiment.",
        ja: "西洋の歴史は占星術を文化から文化へ追います。ジョーティシュの答えは異なります：深いヨガと瞑想を通じて悟った聖者に啓示され — 実験で段階的に発見されたのではありません。",
      },
      highlight: {
        en: "The knowledge existed in the \"Cosmic Computer\" — sages downloaded it with the right mantras as passwords.",
        ja: "知恵は「宇宙のコンピューター」に存在 — 聖者はマントラをパスワードにダウンロードしました。",
      },
    },
    {
      id: "ch11-s1",
      kind: "content",
      icon: "orbit",
      title: { en: "Maharishi Parashara & BPHS", ja: "マハーリシ・パーラシャラとBPHS" },
      body: {
        en: "Maharishi Parashara (Maha = great, Rishi = seer) is the \"father of Jyotish.\" His Brihat Parasara Hora Shastra (BPHS) remains the most influential classical text. The wisdom was never \"his\" — he re-cognized what always existed.",
        ja: "マハーリシ・パーラシャラ（マハ＝偉大、リシ＝見者）は「ジョーティシュの父」です。彼の『ブリハット・パーラシャラ・ホーラ・シャーストラ』（BPHS）は最も影響力のある古典です。知恵は決して「彼のもの」ではなく — 常に存在したものを再認知しました。",
      },
      bullets: [
        { en: "Parashara's methods suit the present Kali Yuga age", ja: "パーラシャラの方法は現在のカリ・ユガに適している" },
        { en: "Some BPHS chapters may also reflect Sage Jaimini's system", ja: "BPHSの一部は聖者ジャイミニの体系も反映している可能性" },
        { en: "Future Rishis in other ages could re-cognize the complete Shastra", ja: "他の時代の未来のリシが完全なシャーストラを再認知できる" },
      ],
    },
    {
      id: "ch11-s2",
      kind: "content",
      icon: "mountain",
      title: { en: "Kali Yuga & Access to Knowledge", ja: "カリ・ユガと知識へのアクセス" },
      body: {
        en: "Vedic literature describes four great ages (Yugas). In Kali Yuga — the current Dark Age — direct cognition is unavailable. We rely on wisdom passed down by enlightened sages from previous ages.",
        ja: "ヴェーダ文献は四つの大時代（ユガ）を描きます。カリ・ユガ — 現在の暗黒時代 — では直接認知は利用できません。過去の時代の悟った聖者から伝えられた知恵に頼ります。",
      },
      bullets: [
        { en: "Many scholars place Kali Yuga start ~3102 BCE (Krishna's departure)", ja: "多くの学者はカリ・ユガ開始を紀元前3102年頃（クリシュナの離去）とする" },
        { en: "Direct cosmic access was available to enlightened beings in earlier ages", ja: "以前の時代では悟った存在が宇宙への直接アクセスを持っていた" },
      ],
    },
    {
      id: "ch11-s3",
      kind: "content",
      icon: "moon",
      title: { en: "Karma vs Kama & Samskara", ja: "カルマ vs カーマとサンスカーラ" },
      body: {
        en: "Kama means desire (Kama Sutra). Karma means action — \"as you sow, so shall you reap.\" Samskaras are deep impressions on the soul — like \"post-it notes attached to the soul\" — that drive future actions in a karmic wheel.",
        ja: "カーマは欲望（カーマ・スートラ）。カルマは行為 — 「蒔いた種を刈り取る」。サンスカーラは魂に深く刻まれた印象 — 「魂に貼られた付箋」のように — カルマの輪で未来の行為を駆動します。",
      },
      bullets: [
        { en: "Actions create impressions → impressions drive actions → cycle continues", ja: "行為が印象を生む → 印象が行為を駆動 → サイクル続く" },
        { en: "Meditation breaks the karma-samskara cycle", ja: "瞑想がカルマ・サンスカーラのサイクルを断つ" },
        { en: "Negative karma: doing to others what we wouldn't want done to us", ja: "ネガティブカルマ：自分がされたくないことを他者にする" },
      ],
    },
    {
      id: "ch11-s4",
      kind: "content",
      icon: "compass",
      title: { en: "Three Types of Karma", ja: "三種類のカルマ" },
      body: {
        en: "The Vedas describe three karma categories. Jyotish primarily reads Prarabdha — the portion ripening in this lifetime — through the birth chart and Vimsottari Maha Dasha system based on the Moon's Nakshatra.",
        ja: "ヴェーダは三つのカルマカテゴリーを述べます。ジョーティシュは主にプララブダ — この生で熟す部分 — を出生図と月のナクシャトラに基づくヴィムショッタリ・マハーダシャー体系で読みます。",
      },
      bullets: [
        { en: "Sanchita — accumulated storehouse from all past births", ja: "サンチタ — すべての過去生からの蓄積の倉庫" },
        { en: "Prarabdha — portion to be experienced this lifetime", ja: "プララブダ — この生で経験すべき部分" },
        { en: "Agami — new karma created now, carried to future lives", ja: "アガミ — 今生み出される新カルマ、未来生へ持ち越し" },
        { en: "Self-realization transcends all past-life karmas", ja: "自己実現ですべての過去生カルマを超越" },
      ],
    },
    {
      id: "ch11-s5",
      kind: "content",
      icon: "eye",
      title: { en: "Detect, Deflect & Transcend", ja: "検出・偏向・超越" },
      body: {
        en: "Jyotish is the ultimate Karmic Engineering System: (1) detect returning karmas in the chart code, (2) deflect through remedies, (3) transcend through meditation and Guru's grace. Paramahansa Yogananda taught: moving into the orbit of the Divine, you move out of the orbit of planetary influences.",
        ja: "ジョーティシュは究極のカルマ工学体系：(1)チャートコードで返ってくるカルマを検出、(2)レメディで偏向、(3)瞑想とグル の恩寵で超越。パラマハンサ・ヨガナンダは教えました：神の軌道に入れば、惑星の影響の軌道から出る。",
      },
      highlight: {
        en: "Planets indicate karmas — they do not create them. We are not victims of our chart.",
        ja: "惑星はカルマを示す — 創造しない。私たちはチャートの犠牲者ではない。",
      },
    },
    {
      id: "ch11-flash",
      kind: "flashcards",
      title: { en: "Karma Types Flashcards", ja: "カルマタイプ フラッシュカード" },
      instruction: {
        en: "Master the three karma categories and key Jyotish terms. Flip all cards to continue.",
        ja: "三カルマカテゴリーと主要用語をマスター。すべてのカードを見て進みます。",
      },
      cards: [
        { id: "k1", front: { en: "Sanchita", ja: "サンチタ" }, back: { en: "Accumulated karma storehouse", ja: "蓄積カルマの倉庫" }, icon: "mountain" },
        { id: "k2", front: { en: "Prarabdha", ja: "プララブダ" }, back: { en: "Karma ripening this lifetime", ja: "この生で熟すカルマ" }, icon: "moon" },
        { id: "k3", front: { en: "Agami", ja: "アガミ" }, back: { en: "New karma for future lives", ja: "未来生への新カルマ" }, icon: "orbit" },
        { id: "k4", front: { en: "Samskara", ja: "サンスカーラ" }, back: { en: "Deep impressions on the soul", ja: "魂への深い印象" }, icon: "eye" },
        { id: "k5", front: { en: "BPHS", ja: "BPHS" }, back: { en: "Parashara's classical Jyotish text", ja: "パーラシャラの古典ジョーティシュ文献" }, icon: "sparkles" },
        { id: "k6", front: { en: "Vimsottari Dasha", ja: "ヴィムショッタリ・ダシャー" }, back: { en: "120-year cycle from Moon's Nakshatra", ja: "月のナクシャトラからの120年周期" }, icon: "compass" },
      ],
    },
    {
      id: "ch11-match",
      kind: "match",
      title: { en: "Match Karma Concept to Definition", ja: "カルマ概念と定義をマッチ" },
      instruction: {
        en: "Connect each term from Vedic karma philosophy to its meaning.",
        ja: "ヴェーダカルマ哲学の各用語を意味に結びつけましょう。",
      },
      pairs: [
        { leftId: "kama", left: { en: "Kama", ja: "カーマ" }, rightId: "desire", right: { en: "Desire & pleasure", ja: "欲望と快楽" }, leftIcon: "droplets" },
        { leftId: "karma", left: { en: "Karma", ja: "カルマ" }, rightId: "action", right: { en: "Action & consequences", ja: "行為と結果" }, leftIcon: "orbit" },
        { leftId: "sanch", left: { en: "Sanchita", ja: "サンチタ" }, rightId: "store", right: { en: "Total karmic bank account", ja: "カルマの総口座" }, leftIcon: "mountain" },
        { leftId: "prar", left: { en: "Prarabdha", ja: "プララブダ" }, rightId: "now", right: { en: "What the chart reveals now", ja: "チャートが今示すもの" }, leftIcon: "moon" },
        { leftId: "cog", left: { en: "Vedic cognition", ja: "ヴェーダ認知" }, rightId: "dl", right: { en: "Downloading cosmic knowledge", ja: "宇宙の知識をダウンロード" }, leftIcon: "sparkles" },
      ],
    },
    {
      id: "ch11-order",
      kind: "order",
      title: { en: "The Karma Wheel Break", ja: "カルマの輪を断つ" },
      instruction: {
        en: "Order the cycle — then spot what breaks it (first step → last step of the loop).",
        ja: "サイクルを並べましょう — 何がそれを断つか（ループの最初→最後）。",
      },
      items: [
        { id: "sam", label: { en: "Samskaras (latent impressions)", ja: "サンスカーラ（潜在印象）" }, icon: "eye" },
        { id: "act", label: { en: "Actions driven by impressions", ja: "印象に駆動される行為" }, icon: "flame" },
        { id: "new", label: { en: "New samskaras created", ja: "新しいサンスカーラが生まれる" }, icon: "orbit" },
        { id: "med", label: { en: "Meditation breaks the cycle", ja: "瞑想がサイクルを断つ" }, icon: "sparkles" },
      ],
    },
    {
      id: "ch11-tf",
      kind: "true-false",
      title: { en: "Cognition & Karma: True or False", ja: "認知とカルマ マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "c11tf1",
          statement: { en: "Jyotish was gradually developed through centuries of astronomical experiment.", ja: "ジョーティシュは何世紀もの天文実験で段階的に発展した。" },
          isTrue: false,
          explanation: { en: "It was cognized — revealed to enlightened sages, not invented.", ja: "認知された — 悟った聖者に啓示され、発明されたのではない。" },
        },
        {
          id: "c11tf2",
          statement: { en: "Jyotish primarily deals with Prarabdha — karma ripening in this life.", ja: "ジョーティシュは主にプララブダ — この生で熟すカルマ — を扱う。" },
          isTrue: true,
          explanation: { en: "Sanchita is the storehouse; Prarabdha is what the birth chart encodes.", ja: "サンチタは倉庫；プララブダは出生図が符号化するもの。" },
        },
        {
          id: "c11tf3",
          statement: { en: "In Kali Yuga, direct cognition of Jyotish is considered unavailable.", ja: "カリ・ユガではジョーティシュの直接認知は利用できないとされる。" },
          isTrue: true,
          explanation: { en: "We rely on scriptures and teachings passed from previous ages.", ja: "過去の時代から伝えられた文献と教えに頼ります。" },
        },
        {
          id: "c11tf4",
          statement: { en: "Planets create our karmas and are to blame for our difficulties.", ja: "惑星がカルマを創造し、困難の原因である。" },
          isTrue: false,
          explanation: { en: "Planets indicate returning karmas — they deliver, not create.", ja: "惑星は返ってくるカルマを示す — 届けるのであり、創造しない。" },
        },
      ],
    },
    {
      id: "ch11-multi",
      kind: "multi-select",
      title: { en: "Karmic Engineering Toolkit", ja: "カルマ工学ツールキット" },
      question: {
        en: "Which can deflect or transcend returning negative karmas? Select ALL that apply.",
        ja: "返ってくるネガティブカルマを偏向または超越できるものは？該当するものをすべて選んでください。",
      },
      options: [
        { id: "rem", label: { en: "Jyotish remedial measures (Upayes)", ja: "ジョーティシュレメディ（ウパーヤ）" }, icon: "sparkles" },
        { id: "med", label: { en: "Regular meditation & sadhana", ja: "定期的な瞑想とサドハナ" }, icon: "eye" },
        { id: "guru", label: { en: "Grace of a Self-realized Guru", ja: "自己実現したグル の恩寵" }, icon: "moon" },
        { id: "blame", label: { en: "Blaming Saturn for all problems", ja: "すべての問題を土星のせいにする" }, icon: "mountain" },
        { id: "charity", label: { en: "Acts of charity (dana)", ja: "慈善（ダーナ）" }, icon: "droplets" },
        { id: "ignore", label: { en: "Ignoring the birth chart entirely", ja: "出生図を完全に無視" }, icon: "wind" },
      ],
      correctOptionIds: ["rem", "med", "guru", "charity"],
      explanation: {
        en: "Remedies, meditation, Guru's grace, and charity all modify karma — blaming planets or denial does not.",
        ja: "レメディ・瞑想・グル の恩寵・慈善はすべてカルマを変える — 惑星を責める・否認では変わらない。",
      },
    },
    {
      id: "ch11-quiz",
      kind: "quiz",
      question: {
        en: "Which sage is widely regarded as the \"father of Jyotish\" and cognized the BPHS?",
        ja: "「ジョーティシュの父」と広く見なされ、BPHSを認知した聖者は？",
      },
      options: [
        { id: "patan", label: { en: "Patanjali", ja: "パタンジャリ" }, icon: "wind" },
        { id: "para", label: { en: "Maharishi Parashara", ja: "マハーリシ・パーラシャラ" }, icon: "sparkles" },
        { id: "jaim", label: { en: "Sage Jaimini", ja: "聖者ジャイミニ" }, icon: "moon" },
        { id: "yoga", label: { en: "Paramahansa Yogananda", ja: "パラマハンサ・ヨガナンダ" }, icon: "orbit" },
      ],
      correctOptionId: "para",
      explanation: {
        en: "Parashara cognized the Brihat Parasara Hora Shastra — the foundation of modern Jyotish.",
        ja: "パーラシャラが『ブリハット・パーラシャラ・ホーラ・シャーストラ』を認知 — 現代ジョーティシュの基盤。",
      },
    },
  ],
};
