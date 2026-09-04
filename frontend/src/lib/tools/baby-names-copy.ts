import type { AppLanguage } from "@/lib/i18n/language";

interface BabyNamesCopy {
  eyebrow: string;
  heading: string;
  subhead: string;
  trustItems: [string, string, string];
  genderLabel: string;
  genderAll: string;
  genderBoy: string;
  genderGirl: string;
  submit: string;
  computing: string;
  error: string;
  dontKnowTime: string;
  dontKnowTimeHelp: string;
  manualNakshatraLabel: string;
  manualNakshatraPlaceholder: string;
  manualPadaLabel: string;
  padaOption: (pada: number) => string;
  findFromSelection: string;
  nakshatraFinderNudge: string;
  resultPadaLabel: string;
  resultRulerLabel: string;
  resultDeityLabel: string;
  resultMoonSignLabel: string;
  syllableHeading: string;
  syllableTip: (
    roman: string,
    nakshatra: string,
    pada: number,
  ) => string;
  onsetBridgeNote: string;
  fallbackNote: string;
  filterLabel: string;
  sortLabel: string;
  sortScore: string;
  sortAlpha: string;
  noResults: string;
  scoreLabel: (score: number) => string;
  shortlistHeading: (count: number) => string;
  shortlistEmpty: string;
  shortlistAdd: string;
  shortlistRemove: string;
  shareWhatsapp: string;
  shareCopy: string;
  shareCopied: string;
  shareMessage: (data: {
    nakshatra: string;
    pada: number;
    syllable: string;
    names: { name: string; meaning: string; score: number }[];
  }) => string;
  referenceHeading: string;
  referenceIntro: string;
  referenceNakshatraCol: string;
  referencePadaCol: (pada: number) => string;
  crossLinkNumerology: string;
  crossLinkChart: string;
}

export const babyNamesCopy: Record<AppLanguage, BabyNamesCopy> = {
  en: {
    eyebrow: "Naam Karan",
    heading: "Baby Names by Nakshatra",
    subhead: "Find names that match your baby's birth star and pada — scored for numerology harmony with their Mulank and Bhagyank.",
    trustItems: ["Traditional syllable rules", "Numerology-scored", "Free to use"],
    genderLabel: "Baby",
    genderAll: "All",
    genderBoy: "Boy",
    genderGirl: "Girl",
    submit: "Find names",
    computing: "Computing…",
    error: "Could not complete the calculation. Please try again.",
    dontKnowTime: "Don't know the exact birth time?",
    dontKnowTimeHelp: "Pada depends on the Moon's exact position, which needs a birth time to compute precisely. Without one, choose the nakshatra and pada directly — the naming rule still applies, just not derived from an exact chart.",
    manualNakshatraLabel: "Nakshatra",
    manualNakshatraPlaceholder: "Choose a nakshatra",
    manualPadaLabel: "Pada",
    padaOption: (pada) => `Pada ${pada}`,
    findFromSelection: "Find names",
    nakshatraFinderNudge: "Don't know the exact time? Use the Nakshatra Finder to check which nakshatras are possible for a birth-time window.",
    resultPadaLabel: "Pada",
    resultRulerLabel: "Ruling planet",
    resultDeityLabel: "Deity",
    resultMoonSignLabel: "Moon sign",
    syllableHeading: "Starting syllable for this pada",
    syllableTip: (roman, nakshatra, pada) => `This is the traditional akshara for Pada ${pada} of ${nakshatra} — every name below is built around the closest Japanese sound to it (${roman}).`,
    onsetBridgeNote: "Japanese has no exact match for every Sanskrit consonant, so names are matched to the nearest natural Japanese onset rather than a literal transliteration.",
    fallbackNote: "Japanese given names rarely begin with this exact sound, so the list below also includes the closest traditional match.",
    filterLabel: "Gender",
    sortLabel: "Sort",
    sortScore: "Numerology score",
    sortAlpha: "Alphabetical",
    noResults: "No names matched this filter yet.",
    scoreLabel: (score) => `${score}/10`,
    shortlistHeading: (count) => `Shortlist (${count})`,
    shortlistEmpty: "Names you shortlist will appear here.",
    shortlistAdd: "Add to shortlist",
    shortlistRemove: "Remove",
    shareWhatsapp: "Share via WhatsApp",
    shareCopy: "Copy list",
    shareCopied: "Copied",
    shareMessage: ({ nakshatra, pada, syllable, names }) => {
      const lines = names.map((n) => `• ${n.name} (${n.score}/10) — ${n.meaning}`);
      return `Baby name shortlist from Jyotish Life\nNakshatra: ${nakshatra}, Pada ${pada} (${syllable})\n\n${lines.join("\n")}`;
    },
    referenceHeading: "Syllable Reference — All 27 Nakshatras",
    referenceIntro: "The classical pada-to-syllable table this tool draws from, in full.",
    referenceNakshatraCol: "Nakshatra",
    referencePadaCol: (pada) => `Pada ${pada}`,
    crossLinkNumerology: "See your Numerology breakdown",
    crossLinkChart: "Full birth chart",
  },
  hi: {
    eyebrow: "नामकरण",
    heading: "नक्षत्र अनुसार बच्चे के नाम",
    subhead: "अपने बच्चे के जन्म नक्षत्र और पाद से मेल खाते नाम खोजें — मूलांक और भाग्यांक के साथ अंक ज्योतिष सामंजस्य के अनुसार स्कोर किए गए।",
    trustItems: ["पारंपरिक अक्षर नियम", "अंक ज्योतिष स्कोर", "उपयोग करने हेतु निःशुल्क"],
    genderLabel: "बच्चा",
    genderAll: "सभी",
    genderBoy: "लड़का",
    genderGirl: "लड़की",
    submit: "नाम खोजें",
    computing: "गणना हो रही है…",
    error: "गणना पूरी नहीं हो सकी। कृपया पुनः प्रयास करें।",
    dontKnowTime: "जन्म का सटीक समय नहीं पता?",
    dontKnowTimeHelp: "पाद चंद्रमा की सटीक स्थिति पर निर्भर करता है, जिसकी सटीक गणना के लिए जन्म समय आवश्यक है। समय के बिना, सीधे नक्षत्र और पाद चुनें — नामकरण नियम फिर भी लागू होता है, बस सटीक कुंडली से नहीं निकाला गया।",
    manualNakshatraLabel: "नक्षत्र",
    manualNakshatraPlaceholder: "एक नक्षत्र चुनें",
    manualPadaLabel: "पाद",
    padaOption: (pada) => `पाद ${pada}`,
    findFromSelection: "नाम खोजें",
    nakshatraFinderNudge: "सटीक समय नहीं पता? यह जानने के लिए कि जन्म-समय की सीमा में कौन-कौन से नक्षत्र संभव हैं, नक्षत्र खोजें का उपयोग करें।",
    resultPadaLabel: "पाद",
    resultRulerLabel: "स्वामी ग्रह",
    resultDeityLabel: "देवता",
    resultMoonSignLabel: "चंद्र राशि",
    syllableHeading: "इस पाद के लिए प्रारंभिक अक्षर",
    syllableTip: (roman, nakshatra, pada) => `यह ${nakshatra} के पाद ${pada} का पारंपरिक अक्षर है — नीचे हर नाम इसके निकटतम जापानी ध्वनि (${roman}) के आधार पर चुना गया है।`,
    onsetBridgeNote: "जापानी भाषा में संस्कृत के हर व्यंजन के बराबर ध्वनि नहीं है, इसलिए नामों को शाब्दिक लिप्यंतरण के बजाय निकटतम स्वाभाविक जापानी ध्वनि से मिलाया गया है।",
    fallbackNote: "इस ठीक ध्वनि से शुरू होने वाले जापानी नाम दुर्लभ हैं, इसलिए नीचे की सूची में निकटतम पारंपरिक विकल्प भी शामिल है।",
    filterLabel: "लिंग",
    sortLabel: "क्रम",
    sortScore: "अंक ज्योतिष स्कोर",
    sortAlpha: "वर्णानुक्रम",
    noResults: "इस फ़िल्टर से अभी कोई नाम नहीं मिला।",
    scoreLabel: (score) => `${score}/10`,
    shortlistHeading: (count) => `शॉर्टलिस्ट (${count})`,
    shortlistEmpty: "आपके शॉर्टलिस्ट किए गए नाम यहाँ दिखेंगे।",
    shortlistAdd: "शॉर्टलिस्ट में जोड़ें",
    shortlistRemove: "हटाएं",
    shareWhatsapp: "व्हाट्सएप पर साझा करें",
    shareCopy: "सूची कॉपी करें",
    shareCopied: "कॉपी हो गया",
    shareMessage: ({ nakshatra, pada, syllable, names }) => {
      const lines = names.map((n) => `• ${n.name} (${n.score}/10) — ${n.meaning}`);
      return `Jyotish Life से बच्चे के नामों की शॉर्टलिस्ट\nनक्षत्र: ${nakshatra}, पाद ${pada} (${syllable})\n\n${lines.join("\n")}`;
    },
    referenceHeading: "अक्षर संदर्भ — सभी 27 नक्षत्र",
    referenceIntro: "यह उपकरण जिस पारंपरिक पाद-अक्षर तालिका का उपयोग करता है, वह पूरी तरह से नीचे दी गई है।",
    referenceNakshatraCol: "नक्षत्र",
    referencePadaCol: (pada) => `पाद ${pada}`,
    crossLinkNumerology: "अपना अंक ज्योतिष विवरण देखें",
    crossLinkChart: "पूर्ण जन्म-कुंडली",
  },
  ja: {
    eyebrow: "命名（ナームカラン）",
    heading: "ナクシャトラで選ぶ赤ちゃんの名前",
    subhead: "赤ちゃんの生まれナクシャトラとパダに合う名前を探せます。ムーランク（本命数）とバギャンク（宿命数）との数秘術的な相性でスコア表示します。",
    trustItems: ["伝統的な音節の規則", "数秘術スコア付き", "無料でご利用いただけます"],
    genderLabel: "性別",
    genderAll: "すべて",
    genderBoy: "男の子",
    genderGirl: "女の子",
    submit: "名前を探す",
    computing: "計算中…",
    error: "計算を完了できませんでした。もう一度お試しください。",
    dontKnowTime: "正確な出生時刻がわかりませんか？",
    dontKnowTimeHelp: "パダは月の正確な位置によって決まるため、精密に求めるには出生時刻が必要です。時刻がわからない場合は、ナクシャトラとパダを直接選択してください。命名の規則自体は同じように適用されますが、正確なチャートから導いたものではなくなります。",
    manualNakshatraLabel: "ナクシャトラ",
    manualNakshatraPlaceholder: "ナクシャトラを選択",
    manualPadaLabel: "パダ",
    padaOption: (pada) => `パダ ${pada}`,
    findFromSelection: "名前を探す",
    nakshatraFinderNudge: "正確な時刻がわかりませんか？出生時刻の幅からどのナクシャトラの可能性があるかを調べるには、ナクシャトラ（月宿）を調べるをご利用ください。",
    resultPadaLabel: "パダ",
    resultRulerLabel: "支配星",
    resultDeityLabel: "神格",
    resultMoonSignLabel: "月星座",
    syllableHeading: "このパダの頭音",
    syllableTip: (roman, nakshatra, pada) => `これは${nakshatra}のパダ${pada}に対応する伝統的なアクシャラです。以下の名前はすべて、これに最も近い日本語の音（${roman}）に基づいて選ばれています。`,
    onsetBridgeNote: "日本語にはサンスクリット語の子音すべてに対応する音があるわけではないため、名前は文字どおりの転写ではなく、最も自然に近い日本語の頭音に合わせています。",
    fallbackNote: "この音で始まる日本人の名前は実際には多くないため、下のリストには最も近い伝統的な代替候補も含めています。",
    filterLabel: "性別",
    sortLabel: "並び替え",
    sortScore: "数秘術スコア",
    sortAlpha: "五十音順",
    noResults: "この条件に合う名前はまだありません。",
    scoreLabel: (score) => `${score}/10`,
    shortlistHeading: (count) => `候補リスト（${count}）`,
    shortlistEmpty: "候補に追加した名前がここに表示されます。",
    shortlistAdd: "候補リストに追加",
    shortlistRemove: "削除",
    shareWhatsapp: "WhatsAppで共有",
    shareCopy: "リストをコピー",
    shareCopied: "コピーしました",
    shareMessage: ({ nakshatra, pada, syllable, names }) => {
      const lines = names.map((n) => `・${n.name}（${n.score}/10）— ${n.meaning}`);
      return `Jyotish Life からの赤ちゃんの名前候補リスト\nナクシャトラ：${nakshatra}、パダ${pada}（${syllable}）\n\n${lines.join("\n")}`;
    },
    referenceHeading: "音節早見表 — 27ナクシャトラすべて",
    referenceIntro: "このツールが基にしている、伝統的なパダ別音節表の全体です。",
    referenceNakshatraCol: "ナクシャトラ",
    referencePadaCol: (pada) => `パダ${pada}`,
    crossLinkNumerology: "数秘術の結果を見る",
    crossLinkChart: "詳しい出生チャート",
  },
  ko: {
    eyebrow: "남카란(작명)",
    heading: "낙샤트라로 찾는 아기 이름",
    subhead: "아기의 출생 낙샤트라와 파다에 맞는 이름을 찾아보세요 — 물랑크와 바갼크와의 수비학적 조화로 점수를 매깁니다.",
    trustItems: ["전통 음절 규칙", "수비학 점수 제공", "무료로 이용 가능"],
    genderLabel: "아기",
    genderAll: "전체",
    genderBoy: "남아",
    genderGirl: "여아",
    submit: "이름 찾기",
    computing: "계산 중…",
    error: "계산을 완료하지 못했습니다. 다시 시도해 주세요.",
    dontKnowTime: "정확한 출생 시각을 모르시나요?",
    dontKnowTimeHelp: "파다는 달의 정확한 위치에 따라 정해지므로, 정밀하게 계산하려면 출생 시각이 필요합니다. 시각을 모른다면 낙샤트라와 파다를 직접 선택하세요 — 작명 규칙은 동일하게 적용되지만, 정확한 차트에서 도출된 것은 아닙니다.",
    manualNakshatraLabel: "낙샤트라",
    manualNakshatraPlaceholder: "낙샤트라 선택",
    manualPadaLabel: "파다",
    padaOption: (pada) => `파다 ${pada}`,
    findFromSelection: "이름 찾기",
    nakshatraFinderNudge: "정확한 시각을 모르시나요? 출생 시간대에서 가능한 낙샤트라를 확인하려면 낙샤트라 찾기를 이용하세요.",
    resultPadaLabel: "파다",
    resultRulerLabel: "지배 행성",
    resultDeityLabel: "신격",
    resultMoonSignLabel: "달별자리",
    syllableHeading: "이 파다의 시작 음절",
    syllableTip: (roman, nakshatra, pada) => `이것은 ${nakshatra} 파다 ${pada}의 전통 악샤라입니다 — 아래의 모든 이름은 이와 가장 가까운 일본어 발음(${roman})을 기준으로 선택되었습니다.`,
    onsetBridgeNote: "일본어에는 산스크리트어의 모든 자음에 대응하는 발음이 없어, 이름을 문자 그대로 옮기는 대신 가장 자연스러운 일본어 첫소리에 맞추었습니다.",
    fallbackNote: "이 정확한 발음으로 시작하는 일본 이름은 실제로 드물어, 아래 목록에는 가장 가까운 전통적 대안도 함께 포함했습니다.",
    filterLabel: "성별",
    sortLabel: "정렬",
    sortScore: "수비학 점수",
    sortAlpha: "가나다순",
    noResults: "이 조건에 맞는 이름이 아직 없습니다.",
    scoreLabel: (score) => `${score}/10`,
    shortlistHeading: (count) => `후보 목록 (${count})`,
    shortlistEmpty: "후보에 추가한 이름이 여기에 표시됩니다.",
    shortlistAdd: "후보에 추가",
    shortlistRemove: "제거",
    shareWhatsapp: "WhatsApp으로 공유",
    shareCopy: "목록 복사",
    shareCopied: "복사됨",
    shareMessage: ({ nakshatra, pada, syllable, names }) => {
      const lines = names.map((n) => `• ${n.name} (${n.score}/10) — ${n.meaning}`);
      return `Jyotish Life에서 보낸 아기 이름 후보 목록\n낙샤트라: ${nakshatra}, 파다 ${pada} (${syllable})\n\n${lines.join("\n")}`;
    },
    referenceHeading: "음절 참조표 — 27개 낙샤트라 전체",
    referenceIntro: "이 도구가 기반으로 하는 전통 파다-음절 표 전체입니다.",
    referenceNakshatraCol: "낙샤트라",
    referencePadaCol: (pada) => `파다 ${pada}`,
    crossLinkNumerology: "나의 수비학 결과 보기",
    crossLinkChart: "전체 출생 차트",
  },
};
