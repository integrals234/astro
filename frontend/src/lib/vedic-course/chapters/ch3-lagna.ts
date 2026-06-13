import { Moon } from "lucide-react";
import type { CourseChapter } from "../types";

export const chapter3Lagna: CourseChapter = {
  id: "ch3",
  number: 3,
  title: { en: "Lagna & the 1st House", ja: "ラグナと第1ハウス" },
  subtitle: {
    en: "Your rising sign — the doorway of the chart",
    ja: "アセンダント — チャートの入り口",
  },
  icon: Moon,
  steps: [
    {
      id: "ch3-s0",
      kind: "content",
      icon: "sparkles",
      title: { en: "What Is Lagna?", ja: "ラグナとは？" },
      body: {
        en: "Lagna (लग्न) means \"ascendant\" — the zodiac degree rising on the eastern horizon at your birth. It sets the entire house system of your chart.",
        ja: "ラグナ（लग्न）は「アセンダント」— 誕生時に東の地平線から昇っていた黄道の度数です。チャート全体のハウスシステムを決めます。",
      },
      highlight: {
        en: "Without accurate birth time, Lagna can be wrong — always use exact time if possible.",
        ja: "正確な出生時刻がなければラグナはずれる — 可能なら正確な時刻を使いましょう。",
      },
    },
    {
      id: "ch3-s1",
      kind: "content",
      icon: "sun",
      title: { en: "Lagna vs. Sun vs. Moon", ja: "ラグナ・太陽・月の違い" },
      body: {
        en: "Western pop astrology emphasizes the Sun sign. Vedic astrology prioritizes Lagna, then Moon, then Sun — like outer self, inner mind, and soul purpose.",
        ja: "西洋の大衆占星術は太陽星座を重視。インド占星術はラグナ、次に月、そして太陽の順 — 外見の自己、内なる心、魂の目的のように。",
      },
      bullets: [
        { en: "Lagna: body, personality, life direction", ja: "ラグナ：身体・性格・人生の方向" },
        { en: "Moon sign: emotions, mental peace", ja: "月星座：感情・心の平安" },
        { en: "Sun sign: confidence, father, authority", ja: "太陽星座：自信・父・権威" },
      ],
    },
    {
      id: "ch3-s2",
      kind: "content",
      icon: "orbit",
      title: { en: "Why Lagna Changes So Fast", ja: "なぜラグナは速く変わるか" },
      body: {
        en: "Earth rotates once every 24 hours. The zodiac appears to rise at about 1 sign every 2 hours. Twins born 90 minutes apart can have different Lagnas.",
        ja: "地球は24時間で1回転。黄道は約2時間で1星座昇ります。90分違いで生まれた双子は異なるラグナを持つことがあります。",
      },
    },
    {
      id: "ch3-s3",
      kind: "content",
      icon: "moon",
      title: { en: "Lagna by Element", ja: "元素別ラグナの印象" },
      body: {
        en: "Your Lagna's element colors first impressions. This is a simple beginner shortcut.",
        ja: "ラグナの元素が第一印象に色を付けます。初心者向けの簡単なショートカットです。",
      },
      bullets: [
        { en: "Fire Lagna: energetic, direct, visible", ja: "火のラグナ：エネルギッシュ・率直・目立つ" },
        { en: "Earth Lagna: calm, reliable, grounded", ja: "地のラグナ：落ち着き・信頼・地に足がついた" },
        { en: "Air Lagna: talkative, curious, social", ja: "風のラグナ：おしゃべり・好奇心・社交的" },
        { en: "Water Lagna: sensitive, caring, moody", ja: "水のラグナ：敏感・思いやり・気分屋" },
      ],
    },
    {
      id: "ch3-s4",
      kind: "content",
      icon: "flame",
      title: { en: "Planets in the 1st House", ja: "第1ハウスの惑星" },
      body: {
        en: "Any planet sitting in your 1st house paints your personality strongly. A 1st-house Mars looks athletic and bold; Venus brings charm and beauty.",
        ja: "第1ハウスにある惑星は性格に強く色を付けます。第1ハウスの火星は運動的で大胆、金星は魅力と美をもたらします。",
      },
    },
    {
      id: "ch3-s5",
      kind: "content",
      icon: "sparkles",
      title: { en: "Finding Lagna on Your Chart", ja: "チャートでラグナを見つける" },
      body: {
        en: "On our Dashboard chart, look for House 1 or \"Asc.\" The sign in that house is your Lagna. In South Indian charts, it is often marked clearly at the top diamond.",
        ja: "ダッシュボードのチャートで第1ハウスまたは「Asc」を探します。そのハウスの星座がラグナです。南インド式では上のダイヤに明確に示されることが多いです。",
      },
    },
    {
      id: "ch3-match",
      kind: "match",
      title: { en: "Match Chart Point to Role", ja: "チャートの点と役割をマッチ" },
      instruction: {
        en: "Match each chart point to what it primarily represents.",
        ja: "各チャートの点と、主に表すものをつなげましょう。",
      },
      pairs: [
        { leftId: "lagna", left: { en: "Lagna", ja: "ラグナ" }, rightId: "outer", right: { en: "Outer self & body", ja: "外見の自己と身体" }, leftIcon: "sparkles" },
        { leftId: "moon", left: { en: "Moon sign", ja: "月星座" }, rightId: "mind", right: { en: "Mind & emotions", ja: "心と感情" }, leftIcon: "moon" },
        { leftId: "sun", left: { en: "Sun sign", ja: "太陽星座" }, rightId: "soul", right: { en: "Soul & confidence", ja: "魂と自信" }, leftIcon: "sun" },
      ],
    },
    {
      id: "ch3-tf",
      kind: "true-false",
      title: { en: "Lagna True or False", ja: "ラグナ マルバツ" },
      instruction: { en: "3 of 4 correct to pass.", ja: "4問中3問正解で合格。" },
      statements: [
        {
          id: "ltf1",
          statement: { en: "Two people born on the same calendar day always share the same Lagna.", ja: "同じ日に生まれた2人は常に同じラグナを持つ。" },
          isTrue: false,
          explanation: { en: "Birth time and place matter — Lagna changes every ~2 hours.", ja: "出生時刻と場所が重要 — ラグナは約2時間で変わります。" },
        },
        {
          id: "ltf2",
          statement: { en: "Lagna determines where House 1 begins.", ja: "ラグナは第1ハウスの始まりを決める。" },
          isTrue: true,
          explanation: { en: "The whole house wheel is anchored to the Ascendant.", ja: "ハウス全体の輪はアセンダントに固定されます。" },
        },
        {
          id: "ltf3",
          statement: { en: "In Vedic astrology, Moon is often more important than Sun sign.", ja: "インド占星術では太陽星座より月が重要なことが多い。" },
          isTrue: true,
          explanation: { en: "Moon is the mind; many Vedic techniques center on it.", ja: "月は心；多くのインド式技法は月を中心にします。" },
        },
        {
          id: "ltf4",
          statement: { en: "Lagna is the same as your Nakshatra.", ja: "ラグナはナクシャトラと同じだ。" },
          isTrue: false,
          explanation: { en: "Lagna is a sign (30°); Nakshatra is a finer 13°20' lunar mansion.", ja: "ラグナは星座（30°）；ナクシャトラはより細かい13°20'の月の宿。" },
        },
      ],
    },
    {
      id: "ch3-quiz",
      kind: "quiz",
      question: {
        en: "Why is exact birth time important for Lagna?",
        ja: "ラグナのために正確な出生時刻が重要なのはなぜ？",
      },
      options: [
        { id: "year", label: { en: "It changes every year", ja: "毎年変わるから" }, icon: "orbit" },
        { id: "hours", label: { en: "It changes every ~2 hours", ja: "約2時間で変わるから" }, icon: "sun" },
        { id: "never", label: { en: "It never changes", ja: "決して変わらないから" }, icon: "mountain" },
        { id: "month", label: { en: "It changes every month", ja: "毎月変わるから" }, icon: "moon" },
      ],
      correctOptionId: "hours",
      explanation: {
        en: "The Ascendant moves quickly — roughly one sign every two hours.",
        ja: "アセンダントは速く動き — およそ2時間で一星座。",
      },
    },
  ],
};
