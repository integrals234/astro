import type { AppLanguage } from "@/lib/i18n/language";

interface SukuyoCopy {
  needProfile: string;
  enterDetails: string;
  forPerson: (label: string) => string;
  readyPrompt: string;
  compute: string;
  computing: string;
  error: string;
  nakshatraLabel: string;
  padaLabel: string;
  padaValue: (n: number) => string;
  lordLabel: string;
  ganaLabel: string;
  derivation: (sukuyo: string, nakshatra: string) => string;
}

export const sukuyoCopy: Record<AppLanguage, SukuyoCopy> = {
  ja: {
    needProfile:
      "本命宿を算出するには、出生データが必要です。下のフォームに生年月日・出生時刻・出生地をご入力ください。一度入力すれば、当サイトの他のツールでも再入力は不要です。",
    enterDetails: "出生データを入力する",
    forPerson: (l) => `${l} さんの本命宿`,
    readyPrompt:
      "保存された出生データから、月の実際の位置に基づいて本命宿を算出します。",
    compute: "本命宿を調べる",
    computing: "計算中…",
    error: "計算に失敗しました。しばらくしてから再度お試しください。",
    nakshatraLabel: "対応するナクシャトラ",
    padaLabel: "パダ（四分位）",
    padaValue: (n) => `第${n}パダ`,
    lordLabel: "支配星",
    ganaLabel: "ガナ（性質）",
    derivation: (s, n) =>
      `${s}は、インド占星術のナクシャトラ「${n}」に対応します。宿曜は唐代に中国を経て日本へ伝わった二十七宿の体系で、本来はこの月宿と同じものです。当サイトでは旧暦の日付ではなく、スイス天体暦による月の実際の黄経から算出しているため、境界日の判定がより正確です。`,
  },
  en: {
    needProfile:
      "Your birth details are needed to find your mansion. Enter your date, time and place below — once entered, every other tool on this site will use them without asking again.",
    enterDetails: "Enter birth details",
    forPerson: (l) => `Birth mansion for ${l}`,
    readyPrompt:
      "Calculated from the Moon's actual position in your saved birth details.",
    compute: "Find my mansion",
    computing: "Calculating…",
    error: "The calculation failed. Please try again shortly.",
    nakshatraLabel: "Corresponding nakshatra",
    padaLabel: "Pada (quarter)",
    padaValue: (n) => `Pada ${n}`,
    lordLabel: "Ruling planet",
    ganaLabel: "Gana (temperament)",
    derivation: (s, n) =>
      `${s} corresponds to the nakshatra ${n}. Sukuyō is the Japanese system of 27 lunar mansions, transmitted from India through Tang-dynasty China — the same mansions Jyotish uses. This page derives it from the Moon's actual sidereal longitude via the Swiss Ephemeris rather than from a lunar-calendar date, which makes boundary days more reliable.`,
  },
  hi: {
    needProfile:
      "आपका नक्षत्र जानने के लिए जन्म-विवरण आवश्यक है। नीचे तिथि, समय और स्थान दर्ज करें — एक बार दर्ज करने पर साइट के अन्य सभी टूल इन्हीं का उपयोग करेंगे।",
    enterDetails: "जन्म-विवरण दर्ज करें",
    forPerson: (l) => `${l} का जन्म नक्षत्र`,
    readyPrompt:
      "आपके सहेजे गए जन्म-विवरण में चंद्रमा की वास्तविक स्थिति से गणना की जाती है।",
    compute: "मेरा नक्षत्र देखें",
    computing: "गणना हो रही है…",
    error: "गणना विफल रही। कृपया कुछ देर बाद प्रयास करें।",
    nakshatraLabel: "संबंधित नक्षत्र",
    padaLabel: "पाद",
    padaValue: (n) => `पाद ${n}`,
    lordLabel: "स्वामी ग्रह",
    ganaLabel: "गण",
    derivation: (s, n) =>
      `${s} नक्षत्र ${n} से मेल खाता है। सुक्युō जापान की सत्ताईस नक्षत्रों की पद्धति है, जो भारत से चीन होते हुए जापान पहुँची — वही नक्षत्र जिन्हें ज्योतिष प्रयोग करता है। यह पृष्ठ पंचांग तिथि के बजाय स्विस एफ़ेमेरिस से चंद्रमा के वास्तविक निरयण देशांतर से गणना करता है।`,
  },
  ko: {
    needProfile:
      "본명수를 산출하려면 출생 정보가 필요합니다. 아래에 생년월일, 출생 시각, 출생지를 입력해 주세요. 한 번 입력하면 사이트의 다른 도구에서도 다시 묻지 않습니다.",
    enterDetails: "출생 정보 입력",
    forPerson: (l) => `${l}님의 본명수`,
    readyPrompt: "저장된 출생 정보에서 달의 실제 위치를 기준으로 산출합니다.",
    compute: "본명수 확인하기",
    computing: "계산 중…",
    error: "계산에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    nakshatraLabel: "대응하는 낙샤트라",
    padaLabel: "파다(4분위)",
    padaValue: (n) => `제${n}파다`,
    lordLabel: "지배성",
    ganaLabel: "가나(성질)",
    derivation: (s, n) =>
      `${s}는 낙샤트라 '${n}'에 대응합니다. 수쿠요(宿曜)는 인도에서 당나라를 거쳐 일본에 전해진 27수 체계로, 조티시가 사용하는 것과 같은 별자리입니다. 이 페이지는 음력 날짜가 아니라 스위스 천체력의 실제 항성 황경에서 산출하므로 경계일 판정이 더 정확합니다.`,
  },
};
