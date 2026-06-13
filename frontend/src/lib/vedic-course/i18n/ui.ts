import type { CourseLanguage } from "../types";

export const courseUi = {
  progressLabel: { en: "Progress", hi: "प्रगति", ja: "進捗", ko: "진행률" },
  progress: {
    en: (n: number) => `Progress ${n}%`,
    hi: (n: number) => `प्रगति ${n}%`,
    ja: (n: number) => `進捗 ${n}%`,
    ko: (n: number) => `진행률 ${n}%`,
  },
  games: {
    en: (n: number) => `${n} games`,
    hi: (n: number) => `${n} खेल`,
    ja: (n: number) => `${n} ゲーム`,
    ko: (n: number) => `${n}개 게임`,
  },
  chapter: {
    en: (n: number) => `Chapter ${n}`,
    hi: (n: number) => `अध्याय ${n}`,
    ja: (n: number) => `第${n}章`,
    ko: (n: number) => `${n}장`,
  },
  game: { en: "Game", hi: "खेल", ja: "ゲーム", ko: "게임" },
  back: { en: "Back", hi: "पीछे", ja: "戻る", ko: "이전" },
  next: { en: "Next", hi: "आगे", ja: "次へ", ko: "다음" },
  finish: { en: "Finish", hi: "समाप्त", ja: "完了", ko: "완료" },
  courseComplete: {
    en: "Course Complete!",
    hi: "कोर्स पूर्ण!",
    ja: "コース完了！",
    ko: "코스 완료!",
  },
  goDashboard: {
    en: "Go to Dashboard",
    hi: "डैशबोर्ड पर जाएँ",
    ja: "ダッシュボードへ",
    ko: "대시보드로",
  },
  completeBody: {
    en: "You've finished all 7 chapters — from Grahas to Drishti (aspects). Clear your 24+ games, then open your chart on the Dashboard and run the 7-step formula with aspects included.",
    hi: "आपने सभी 7 अध्याय पूरे कर लिए — ग्रहों से दृष्टि तक। 24+ खेल पूरे करें, फिर डैशबोर्ड पर चार्ट खोलकर 7-चरण सूत्र (दृष्टि सहित) आज़माएँ।",
    ja: "7章・惑星からドリシュティ（アスペクト）まで完了しました。24以上のゲームをクリアし、ダッシュボードで7ステップ公式（アスペクト込み）を試しましょう。",
    ko: "7개 장을 모두 마쳤습니다 — 그라하부터 드리슈티(각)까지. 24개 이상의 게임을 클리어한 뒤 대시보드에서 7단계 공식(각 포함)을 시도해 보세요.",
  },
  tapToFlip: {
    en: "Tap to flip",
    hi: "पलटने के लिए टैप करें",
    ja: "タップして裏返す",
    ko: "탭하여 뒤집기",
  },
  doneReviewing: {
    en: "Done reviewing!",
    hi: "दोहराना पूर्ण!",
    ja: "復習完了！",
    ko: "복습 완료!",
  },
  terms: { en: "Terms", hi: "शब्द", ja: "用語", ko: "용어" },
  meanings: { en: "Meanings", hi: "अर्थ", ja: "意味", ko: "의미" },
  allPairsMatched: {
    en: "All pairs matched! You've mastered this 🎯",
    hi: "सभी जोड़े मिले! आपने इसे सीख लिया 🎯",
    ja: "全ペア一致！マスターしました 🎯",
    ko: "모든 쌍 일치! 마스터했습니다 🎯",
  },
  checkOrder: { en: "Check order", hi: "क्रम जाँचें", ja: "答え合わせ", ko: "순서 확인" },
  orderRetry: {
    en: "Use the arrows to reorder, then check again.",
    hi: "तीरों से क्रम बदलें, फिर दोबारा जाँचें।",
    ja: "矢印で並べ替えて、もう一度チェックしましょう。",
    ko: "화살표로 순서를 바꾼 뒤 다시 확인하세요.",
  },
  trueLabel: { en: "True", hi: "सही", ja: "マル（正しい）", ko: "참" },
  falseLabel: { en: "False", hi: "गलत", ja: "バツ（誤り）", ko: "거짓" },
  question: {
    en: (i: number, t: number) => `Question ${i}/${t}`,
    hi: (i: number, t: number) => `प्रश्न ${i}/${t}`,
    ja: (i: number, t: number) => `問題 ${i}/${t}`,
    ko: (i: number, t: number) => `문제 ${i}/${t}`,
  },
  results: { en: "Results", hi: "परिणाम", ja: "結果", ko: "결과" },
  score: {
    en: (n: number) => `Score ${n}`,
    hi: (n: number) => `स्कोर ${n}`,
    ja: (n: number) => `スコア ${n}`,
    ko: (n: number) => `점수 ${n}`,
  },
  nextQuestion: {
    en: "Next question",
    hi: "अगला प्रश्न",
    ja: "次の問題",
    ko: "다음 문제",
  },
  seeResults: { en: "See results", hi: "परिणाम देखें", ja: "結果を見る", ko: "결과 보기" },
  tryAgain: { en: "Try again", hi: "फिर कोशिश करें", ja: "もう一度", ko: "다시 시도" },
  passed: {
    en: (c: number, t: number) => `Passed! ${c}/${t} correct 🎉`,
    hi: (c: number, t: number) => `उत्तीर्ण! ${c}/${t} सही 🎉`,
    ja: (c: number, t: number) => `合格！${c}/${t} 正解 🎉`,
    ko: (c: number, t: number) => `합격! ${c}/${t} 정답 🎉`,
  },
  failed: {
    en: (c: number, t: number) => `${c}/${t} correct — review and try again`,
    hi: (c: number, t: number) => `${c}/${t} सही — दोहराएँ और फिर कोशिश करें`,
    ja: (c: number, t: number) => `${c}/${t} 正解 — 復習して再挑戦しましょう`,
    ko: (c: number, t: number) => `${c}/${t} 정답 — 복습 후 다시 시도하세요`,
  },
  selectAll: {
    en: "Select all that apply",
    hi: "सभी लागू विकल्प चुनें",
    ja: "該当するものをすべて選んでください",
    ko: "해당하는 것을 모두 선택하세요",
  },
  checkAnswers: {
    en: "Check answers",
    hi: "उत्तर जाँचें",
    ja: "答えを確認",
    ko: "답 확인",
  },
  correct: {
    en: "Correct! Well done ✨",
    hi: "सही! बहुत अच्छे ✨",
    ja: "正解！よくできました ✨",
    ko: "정답! 잘했어요 ✨",
  },
  incorrect: {
    en: "Try again — you've got this",
    hi: "फिर कोशिश करें — आप कर सकते हैं",
    ja: "もう一度挑戦してみましょう",
    ko: "다시 도전해 보세요",
  },
  language: { en: "Language", hi: "भाषा", ja: "言語", ko: "언어" },
} as const;

export type CourseUiKey = keyof typeof courseUi;

export function uiString(
  key: CourseUiKey,
  lang: CourseLanguage,
  ...args: number[]
): string {
  const entry = courseUi[key];
  const val = entry[lang] ?? entry.en;
  if (typeof val === "function") {
    return (val as (a: number, b?: number) => string)(args[0], args[1]);
  }
  return val;
}
