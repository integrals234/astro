import type { AppLanguage } from "@/lib/i18n/language";

/**
 * Per-tool handoff copy.
 *
 * Each one names what its calculation genuinely cannot settle. That honesty is
 * the argument: a visitor who has just seen a precise, correctly-computed
 * result is far more likely to believe the sentence that follows it about where
 * computation stops and judgement begins.
 */
export type ToolHandoffId =
  | "sukuyo"
  | "compatibility"
  | "saturn"
  | "moonSign"
  | "generic";

interface HandoffCopy {
  eyebrow: string;
  heading: string;
  body: string;
  cta: string;
}

export const toolHandoffCopy: Record<
  AppLanguage,
  Record<ToolHandoffId, HandoffCopy>
> = {
  ja: {
    sukuyo: {
      eyebrow: "ここから先は鑑定の領域です",
      heading: "宿は出発点であり、結論ではありません",
      body: "本命宿は月の位置から正確に計算できます。ただし、その宿がいまのあなたの状況でどう働くかは、二十七宿だけでは決まりません。ラグナ、九曜の配置、そして現在のダシャー期間を併せて読んで初めて意味を持ちます。",
      cta: "個人鑑定について見る",
    },
    compatibility: {
      eyebrow: "点数では決められないこと",
      heading: "相性は点数ではなく、関係の構造です",
      body: "クータの点数は月の配置から機械的に算出されるもので、二人の関係の一面にすぎません。実際の鑑定では、双方のラグナ、七室とその支配星、そして現在の運気の流れを照らし合わせます。点数が低くても支障のない関係も、高くても注意すべき時期もあります。",
      cta: "相性鑑定について見る",
    },
    saturn: {
      eyebrow: "時期の見極めについて",
      heading: "土星の位置は事実、その意味は解釈です",
      body: "土星がいまどの星座にあり、あなたの月から何番目かは計算で確定します。しかし、それが仕事、健康、人間関係のどこに現れるかは、出生図全体を見なければ分かりません。同じサデサティでも、人によって現れ方は大きく異なります。",
      cta: "個人鑑定について見る",
    },
    moonSign: {
      eyebrow: "次の一歩",
      heading: "月星座は入り口にすぎません",
      body: "月星座とアセンダントは、出生図の骨格にあたる部分です。実際の傾向や時期の判断には、九つの惑星の配置と現在のダシャーを併せて読む必要があります。",
      cta: "個人鑑定について見る",
    },
    generic: {
      eyebrow: "次の一歩",
      heading: "計算の先にあるもの",
      body: "この計算は正確ですが、結果が示すのは配置であって、人生ではありません。ご自身の状況に即した読み解きは、鑑定士が一件ずつ手作業で準備いたします。",
      cta: "個人鑑定について見る",
    },
  },
  en: {
    sukuyo: {
      eyebrow: "Where the calculation stops",
      heading: "Your mansion is a starting point, not a verdict",
      body: "Your birth mansion follows exactly from the Moon's position. What it means for your situation right now does not follow from the mansion alone — it needs your Lagna, the placement of the nine grahas, and the dasha period you are currently in.",
      cta: "See personal appraisals",
    },
    compatibility: {
      eyebrow: "What a score cannot settle",
      heading: "Compatibility is a structure, not a number",
      body: "The kuta points are computed mechanically from two Moon positions, and they describe one facet of a relationship. A real reading compares both Lagnas, the seventh house and its lord in each chart, and the timing each person is living through. Low scores are often workable; high ones still have difficult seasons.",
      cta: "See compatibility readings",
    },
    saturn: {
      eyebrow: "On timing",
      heading: "Saturn's position is a fact; its meaning is a reading",
      body: "Which sign Saturn occupies and how far it sits from your Moon is settled by calculation. Where that shows up — work, health, family — is not, and cannot be read from the transit alone. The same Sade Sati looks entirely different in two different charts.",
      cta: "See personal appraisals",
    },
    moonSign: {
      eyebrow: "Next step",
      heading: "The Moon sign is an entry point",
      body: "Your Moon sign and ascendant are the frame of the chart. Reading tendencies or timing from them requires the placement of all nine grahas alongside the dasha period you are in.",
      cta: "See personal appraisals",
    },
    generic: {
      eyebrow: "Next step",
      heading: "Beyond the calculation",
      body: "This calculation is precise, but what it returns is a configuration, not a life. Interpreting it against your circumstances is what our astrologers prepare by hand, one reading at a time.",
      cta: "See personal appraisals",
    },
  },
  hi: {
    sukuyo: {
      eyebrow: "गणना यहाँ समाप्त होती है",
      heading: "आपका नक्षत्र एक शुरुआत है, निष्कर्ष नहीं",
      body: "जन्म नक्षत्र चंद्रमा की स्थिति से ठीक-ठीक निकलता है। पर वह आपकी वर्तमान स्थिति में कैसे काम करेगा, यह अकेले नक्षत्र से तय नहीं होता — इसके लिए लग्न, नौ ग्रहों की स्थिति और वर्तमान दशा को साथ पढ़ना पड़ता है।",
      cta: "व्यक्तिगत परामर्श देखें",
    },
    compatibility: {
      eyebrow: "अंक जो तय नहीं कर सकते",
      heading: "अनुकूलता एक संरचना है, अंक नहीं",
      body: "कूट के अंक दो चंद्र स्थितियों से यांत्रिक रूप से निकाले जाते हैं और रिश्ते का केवल एक पहलू बताते हैं। वास्तविक विश्लेषण में दोनों के लग्न, सप्तम भाव और उसके स्वामी, तथा वर्तमान समय-चक्र की तुलना होती है।",
      cta: "अनुकूलता परामर्श देखें",
    },
    saturn: {
      eyebrow: "समय के बारे में",
      heading: "शनि की स्थिति तथ्य है, अर्थ व्याख्या है",
      body: "शनि किस राशि में है और आपके चंद्रमा से कितनी दूर है, यह गणना से निश्चित होता है। पर वह कार्य, स्वास्थ्य या संबंधों में कहाँ प्रकट होगा, यह पूरी कुंडली देखे बिना नहीं कहा जा सकता।",
      cta: "व्यक्तिगत परामर्श देखें",
    },
    moonSign: {
      eyebrow: "अगला कदम",
      heading: "चंद्र राशि एक प्रवेश-बिंदु है",
      body: "चंद्र राशि और लग्न कुंडली का ढाँचा हैं। प्रवृत्तियों या समय का आकलन करने के लिए नौ ग्रहों की स्थिति और वर्तमान दशा को साथ पढ़ना आवश्यक है।",
      cta: "व्यक्तिगत परामर्श देखें",
    },
    generic: {
      eyebrow: "अगला कदम",
      heading: "गणना से आगे",
      body: "यह गणना सटीक है, पर जो मिलता है वह एक स्थिति है, जीवन नहीं। आपकी परिस्थितियों के अनुसार उसकी व्याख्या हमारे ज्योतिषी एक-एक करके हाथ से तैयार करते हैं।",
      cta: "व्यक्तिगत परामर्श देखें",
    },
  },
  ko: {
    sukuyo: {
      eyebrow: "계산이 멈추는 지점",
      heading: "본명수는 출발점이지 결론이 아닙니다",
      body: "본명수는 달의 위치에서 정확히 도출됩니다. 다만 그것이 지금 상황에서 어떻게 작용하는지는 수(宿)만으로 정해지지 않습니다. 라그나, 아홉 행성의 배치, 현재의 다샤 시기를 함께 읽어야 의미가 생깁니다.",
      cta: "개인 상담 살펴보기",
    },
    compatibility: {
      eyebrow: "점수로 정할 수 없는 것",
      heading: "궁합은 점수가 아니라 구조입니다",
      body: "쿠타 점수는 두 사람의 달 위치에서 기계적으로 산출되며 관계의 한 단면일 뿐입니다. 실제 감정에서는 두 사람의 라그나, 7궁과 그 지배성, 그리고 현재 흐르는 시기를 함께 비교합니다.",
      cta: "궁합 감정 살펴보기",
    },
    saturn: {
      eyebrow: "시기에 대하여",
      heading: "토성의 위치는 사실, 의미는 해석입니다",
      body: "토성이 어느 별자리에 있고 달로부터 몇 번째인지는 계산으로 확정됩니다. 그러나 그것이 일, 건강, 관계 중 어디에서 드러날지는 출생 차트 전체를 봐야 알 수 있습니다.",
      cta: "개인 상담 살펴보기",
    },
    moonSign: {
      eyebrow: "다음 단계",
      heading: "달 별자리는 입구입니다",
      body: "달 별자리와 상승궁은 차트의 골격입니다. 성향이나 시기를 읽으려면 아홉 행성의 배치와 현재 다샤를 함께 보아야 합니다.",
      cta: "개인 상담 살펴보기",
    },
    generic: {
      eyebrow: "다음 단계",
      heading: "계산 너머",
      body: "이 계산은 정확하지만, 결과가 보여주는 것은 배치이지 삶이 아닙니다. 상황에 맞는 해석은 점성술사가 한 건씩 직접 준비합니다.",
      cta: "개인 상담 살펴보기",
    },
  },
};
