import type { AppLanguage } from "@/lib/i18n/language";

interface BirthTimeSensitivityCopy {
  heading: string;
  intro: string;
  windowLabel: string;
  windowOption: (minutes: number) => string;
  compute: string;
  computing: string;
  error: string;
  timeColumn: string;
  ascendantColumn: string;
  boundaryFlag: string;
  stableResult: string;
  changesFound: (count: number) => string;
}

export const birthTimeSensitivityCopy: Record<AppLanguage, BirthTimeSensitivityCopy> = {
  en: {
    heading: "Birth time sensitivity check",
    intro: "If your birth time is approximate, this computes your chart at several points across your uncertainty window and shows exactly where the ascendant sign changes — so you know whether your uncertainty actually matters.",
    windowLabel: "How uncertain is the time?",
    windowOption: (minutes) => `± ${minutes} min`,
    compute: "Check across this window",
    computing: "Computing…",
    error: "Could not complete the check. Please try again.",
    timeColumn: "Time",
    ascendantColumn: "Ascendant",
    boundaryFlag: "← changes here",
    stableResult: "The ascendant sign stays the same across this entire window — your uncertainty doesn't change this specific placement.",
    changesFound: (count) => `The ascendant sign changes ${count} time(s) within this window — the exact time matters more than usual here.`,
  },
  hi: {
    heading: "जन्म समय संवेदनशीलता जाँच",
    intro: "यदि आपका जन्म समय अनुमानित है, तो यह आपकी अनिश्चितता सीमा में कई बिंदुओं पर आपकी कुंडली की गणना करता है और ठीक-ठीक दिखाता है कि लग्न राशि कहाँ बदलती है — ताकि आप जान सकें कि आपकी अनिश्चितता वास्तव में मायने रखती है या नहीं।",
    windowLabel: "समय कितना अनिश्चित है?",
    windowOption: (minutes) => `± ${minutes} मिनट`,
    compute: "इस सीमा में जाँचें",
    computing: "गणना हो रही है…",
    error: "जाँच पूरी नहीं हो सकी। कृपया पुनः प्रयास करें।",
    timeColumn: "समय",
    ascendantColumn: "लग्न",
    boundaryFlag: "← यहाँ बदलता है",
    stableResult: "इस पूरी सीमा में लग्न राशि समान रहती है — आपकी अनिश्चितता इस विशेष स्थिति को नहीं बदलती।",
    changesFound: (count) => `इस सीमा में लग्न राशि ${count} बार बदलती है — यहाँ सटीक समय सामान्य से अधिक मायने रखता है।`,
  },
  ja: {
    heading: "出生時刻の感度チェック",
    intro: "出生時刻が概算の場合、その不確かな範囲内の複数の時点でチャートを計算し、アセンダントの星座が実際にどこで変わるかを正確に示します。ご自身の時刻の不確かさが本当に影響するかどうかがわかります。",
    windowLabel: "時刻はどれくらい不確かですか？",
    windowOption: (minutes) => `± ${minutes}分`,
    compute: "この範囲でチェックする",
    computing: "計算中…",
    error: "チェックを完了できませんでした。もう一度お試しください。",
    timeColumn: "時刻",
    ascendantColumn: "アセンダント",
    boundaryFlag: "← ここで変化",
    stableResult: "この範囲全体でアセンダントの星座は変わりません。この配置に関しては、時刻の不確かさは影響しません。",
    changesFound: (count) => `この範囲内でアセンダントの星座が${count}回変化します。ここでは正確な時刻が通常より重要です。`,
  },
  ko: {
    heading: "출생 시각 민감도 확인",
    intro: "출생 시각이 대략적이라면, 불확실한 범위 내 여러 시점에서 차트를 계산하여 상승궁 별자리가 정확히 어디서 바뀌는지 보여줍니다. 시각의 불확실성이 실제로 영향을 미치는지 알 수 있습니다.",
    windowLabel: "시각이 얼마나 불확실한가요?",
    windowOption: (minutes) => `± ${minutes}분`,
    compute: "이 범위로 확인하기",
    computing: "계산 중…",
    error: "확인을 완료하지 못했습니다. 다시 시도해 주세요.",
    timeColumn: "시각",
    ascendantColumn: "상승궁",
    boundaryFlag: "← 여기서 변화",
    stableResult: "이 범위 전체에서 상승궁 별자리는 동일하게 유지됩니다. 이 배치에 관해서는 시각의 불확실성이 영향을 주지 않습니다.",
    changesFound: (count) => `이 범위 내에서 상승궁 별자리가 ${count}번 바뀝니다. 여기서는 정확한 시각이 평소보다 더 중요합니다.`,
  },
};
