import type { AppLanguage } from "@/lib/i18n/language";

/**
 * Copy for the redesigned homepage story (hero → your chart → tools →
 * learn → reading). Written in the same calm register the 消費者契約法 audit
 * (Phase 3.17) set for the site: descriptive, no urgency, no promised
 * outcome, no fear framing. Every key exists in all four locales.
 */
export interface HomeStoryCopy {
  /** Small line inside the hero <h1>, above the title: the search phrase. */
  heroKicker: string;
  heroTitle: string;
  heroLead: string;
  addName: string;
  submit: string;
  submitting: string;
  privacy: string;

  previewLabel: string;
  previewEmpty: string;
  previewNote: string;
  moon: string;
  sun: string;
  moonIn: (sign: string, nakshatra: string) => string;
  sunIn: (sign: string) => string;

  storyTitle: (name: string | null) => string;
  storyFor: (place: string) => string;
  computing: string;
  coldStart: string;
  computeError: string;
  retry: string;
  lagnaTeaser: string;
  moonTeaser: (nakshatra: string) => string;
  sunTeaser: string;
  dashaTeaser: (lord: string, until: string) => string;
  readAbout: (name: string) => string;
  next: string;
  previous: string;
  swipeHint: string;
  stepOf: (n: number, total: number) => string;
  nextStepsTitle: string;
  openFullReport: string;
  closeFullReport: string;
  share: string;
  shareText: (nakshatra: string) => string;
  copied: string;
  changeDetails: string;
  relatedTool: string;

  toolsTitle: (count: number) => string;
  allTools: string;
  openTool: string;
  viewHere: string;
  close: string;
  toolGroups: Record<ToolGroupId, string>;

  learnTitle: string;
  learnLead: string;
  learnSteps: Record<"rashi" | "nakshatra" | "graha", { title: string; body: string; cta: string }>;
  learnCourse: string;
  learnArticles: string;
  aboutTitle: string;

  readingTitle: string;
  readingBody: string;
  readingNote: string;

  closingTitle: string;

  tabs: { home: string; chart: string; today: string; tools: string; learn: string; reading: string };
  tabsAria: string;
}

export type ToolGroupId = "self" | "timing" | "relations" | "life";

/** Which group each tool sits in on the tools hub and homepage. */
export const TOOL_GROUPS: Record<ToolGroupId, readonly string[]> = {
  self: [
    "birth-chart",
    "moon-sign",
    "nakshatra-finder",
    "lagna-calculator",
    "birth-time-check",
  ],
  timing: [
    "dasha-calculator",
    "transit-now",
    "saturn-return",
    "annual-forecast",
    "panchang",
  ],
  relations: ["compatibility", "sukuyo"],
  life: [
    "career-report",
    "gemstone-recommendation",
    "mangal-dosha",
    "numerology",
    "baby-names",
  ],
};

export const homeStoryCopy: Record<AppLanguage, HomeStoryCopy> = {
  ja: {
    heroKicker: "無料・インド占星術の出生図（ホロスコープ）",
    heroTitle: "生まれた日の|空を、|静かに読む。",
    heroLead:
      "インド占星術（ジョーティッシュ）の出生図を無料で。生年月日と時刻を入れると、その瞬間の月と太陽が、すぐにここに現れます。",
    addName: "お名前を添える（任意）",
    submit: "無料でホロスコープを作成",
    submitting: "計算しています…",
    privacy: "ログインしない限り、データは保存されません。",

    previewLabel: "生まれた瞬間の空",
    previewEmpty: "生年月日を入れると、太陽系がその瞬間まで巻き戻ります。",
    previewNote: "これは概算です。正確な位置はチャート作成時に計算します。",
    moon: "月",
    sun: "太陽",
    moonIn: (sign, nak) => `${sign}・${nak}`,
    sunIn: (sign) => `${sign}`,

    storyTitle: (name) => {
      return name ? `${name}さんのチャート` : "あなたのチャート";
    },
    storyFor: (place) => `${place} 生まれ`,
    computing: "チャートを計算しています…",
    coldStart: "サーバーの起動に、30秒ほどかかることがあります。",
    computeError: "計算できませんでした。少し時間をおいて、もう一度お試しください。",
    retry: "もう一度",
    lagnaTeaser: "ラグナは、世界に向ける顔。第一印象と、人生への向き合い方を表します。",
    moonTeaser: (nak) => `月が宿るのは「${nak}」。心が落ち着く場所と、感じ方の癖を表します。`,
    sunTeaser: "太陽は、意志と自分らしさの核。何に誇りを感じるかを表します。",
    dashaTeaser: (lord, until) => `いまは${lord}の時期（マハーダシャー）。${until}まで続きます。`,
    readAbout: (name) => `${name}について読む`,
    next: "次へ",
    previous: "前へ",
    swipeHint: "左右にスワイプ",
    stepOf: (n, total) => `${n} / ${total}`,
    nextStepsTitle: "次に読むもの",
    openFullReport: "詳しいレポートを開く",
    closeFullReport: "レポートを閉じる",
    share: "シェア",
    shareText: (nak) => `わたしの月のナクシャトラは「${nak}」でした。`,
    copied: "リンクをコピーしました",
    changeDetails: "出生データを変える",
    relatedTool: "関連ツール",

    toolsTitle: (n) => `ひとつの出生図から、${n}通りの読み方。`,
    allTools: "すべてのツールを見る",
    openTool: "ツールを開く",
    viewHere: "ここで見る",
    close: "閉じる",
    toolGroups: {
      self: "あなたの星",
      timing: "時の流れ",
      relations: "相性",
      life: "暮らしと仕事",
    },

    learnTitle: "三つの言葉で、空を読む。",
    learnLead: "ジョーティッシュの基本は、三つの単位だけ。ここから、どの記事にも進めます。",
    learnSteps: {
      rashi: {
        title: "ラーシ — 12の星座",
        body: "空を30度ずつ12に分けた区画。気質と性質の土台を表します。",
        cta: "12星座を見る",
      },
      nakshatra: {
        title: "ナクシャトラ — 27の月宿",
        body: "月が一日ごとに宿る27の区画。心の細やかな質を表し、日本の宿曜もここから生まれました。",
        cta: "27の月宿を見る",
      },
      graha: {
        title: "グラハ — 9つの天体",
        body: "太陽と月、五つの惑星、そしてラーフとケートゥ。人生に働く力そのものです。",
        cta: "9つの天体を見る",
      },
    },
    learnCourse: "コースで体系的に学ぶ",
    learnArticles: "記事を読む",
    aboutTitle: "ジョーティッシュ・ライフについて",

    readingTitle: "読み解きを、人の手で。",
    readingBody:
      "実践するヴェーダ占星術師が、あなたのチャートを直接読み解きます。答えを急がず、ご自身と静かに向き合いたい方のために。",
    readingNote: "鑑定は結果を約束するものではなく、時の流れを読むための手立てです。",

    closingTitle: "まずは、生まれた日の空から。",

    tabs: { home: "ホーム", chart: "チャート", today: "運勢", tools: "ツール", learn: "学ぶ", reading: "鑑定" },
    tabsAria: "メインメニュー",
  },
  en: {
    heroKicker: "Free Vedic astrology birth chart",
    heroTitle: "Read the sky you were born under.",
    heroLead:
      "A free Vedic (Jyotish) birth chart. Enter your date and time of birth and the Moon and Sun of that moment appear here straight away.",
    addName: "Add a name (optional)",
    submit: "Create your free horoscope",
    submitting: "Calculating…",
    privacy: "Nothing is saved unless you sign in.",

    previewLabel: "The sky at your birth",
    previewEmpty: "Enter a birth date and the solar system turns back to that moment.",
    previewNote: "This is an estimate. Exact positions are calculated when you create the chart.",
    moon: "Moon",
    sun: "Sun",
    moonIn: (sign, nak) => `${sign} · ${nak}`,
    sunIn: (sign) => `${sign}`,

    storyTitle: (name) => {
      return name ? `${name}'s chart` : "Your chart";
    },
    storyFor: (place) => `Born in ${place}`,
    computing: "Calculating your chart…",
    coldStart: "The server can take around 30 seconds to wake up.",
    computeError: "The chart could not be calculated. Please wait a moment and try again.",
    retry: "Try again",
    lagnaTeaser: "The lagna is the face you turn to the world — first impressions, and how you meet life.",
    moonTeaser: (nak) => `Your Moon rests in ${nak}: where the mind settles, and how you tend to feel.`,
    sunTeaser: "The Sun is the core of will and selfhood — what you take quiet pride in.",
    dashaTeaser: (lord, until) => `You are in the ${lord} period (mahadasha), which runs until ${until}.`,
    readAbout: (name) => `Read about ${name}`,
    next: "Next",
    previous: "Previous",
    swipeHint: "Swipe",
    stepOf: (n, total) => `${n} of ${total}`,
    nextStepsTitle: "Where to go next",
    openFullReport: "Open the full report",
    closeFullReport: "Close the report",
    share: "Share",
    shareText: (nak) => `My Moon nakshatra is ${nak}.`,
    copied: "Link copied",
    changeDetails: "Change birth details",
    relatedTool: "Related tool",

    toolsTitle: (n) => `One birth chart, ${n} ways to read it.`,
    allTools: "See all tools",
    openTool: "Open tool",
    viewHere: "View here",
    close: "Close",
    toolGroups: {
      self: "Your chart",
      timing: "Timing",
      relations: "Relationships",
      life: "Life and work",
    },

    learnTitle: "Three words to read a sky.",
    learnLead: "Jyotish rests on three units. Every article on the site starts from one of them.",
    learnSteps: {
      rashi: {
        title: "Rashi — the 12 signs",
        body: "The sky divided into twelve 30° parts. The ground of temperament.",
        cta: "Explore the 12 signs",
      },
      nakshatra: {
        title: "Nakshatra — the 27 mansions",
        body: "The 27 parts the Moon passes through, one a day. The finer grain of the mind — and the root of Japan's Sukuyō.",
        cta: "Explore the 27 mansions",
      },
      graha: {
        title: "Graha — the 9 bodies",
        body: "Sun and Moon, five planets, and Rahu and Ketu. The forces at work in a life.",
        cta: "Explore the 9 grahas",
      },
    },
    learnCourse: "Study it in order with the course",
    learnArticles: "Read the articles",
    aboutTitle: "About Jyotish Life",

    readingTitle: "A reading, by a person.",
    readingBody:
      "A practising Vedic astrologer reads your chart directly — for anyone who would rather sit with their questions than rush to an answer.",
    readingNote: "A reading does not promise outcomes; it is a way to read the timing of a life.",

    closingTitle: "Begin with the sky on the day you were born.",

    tabs: { home: "Home", chart: "Chart", today: "Today", tools: "Tools", learn: "Learn", reading: "Reading" },
    tabsAria: "Main menu",
  },
  hi: {
    heroKicker: "निःशुल्क वैदिक ज्योतिष जन्म कुंडली",
    heroTitle: "जिस आकाश में आप जन्मे, उसे पढ़ें।",
    heroLead:
      "निःशुल्क वैदिक (ज्योतिष) जन्म कुंडली। जन्म की तिथि और समय दर्ज करें — उस क्षण का चंद्रमा और सूर्य तुरंत यहाँ दिखाई देंगे।",
    addName: "नाम जोड़ें (वैकल्पिक)",
    submit: "निःशुल्क कुंडली बनाएँ",
    submitting: "गणना हो रही है…",
    privacy: "साइन इन किए बिना कुछ भी सहेजा नहीं जाता।",

    previewLabel: "आपके जन्म का आकाश",
    previewEmpty: "जन्म तिथि दर्ज करें, और सौरमंडल उसी क्षण तक लौट जाएगा।",
    previewNote: "यह अनुमान है। सटीक स्थितियाँ कुंडली बनाते समय गणना की जाती हैं।",
    moon: "चंद्र",
    sun: "सूर्य",
    moonIn: (sign, nak) => `${sign} · ${nak}`,
    sunIn: (sign) => `${sign}`,

    storyTitle: (name) => {
      return name ? `${name} की कुंडली` : "आपकी कुंडली";
    },
    storyFor: (place) => `जन्म स्थान: ${place}`,
    computing: "आपकी कुंडली की गणना हो रही है…",
    coldStart: "सर्वर को शुरू होने में लगभग 30 सेकंड लग सकते हैं।",
    computeError: "कुंडली की गणना नहीं हो सकी। कृपया थोड़ी देर बाद फिर प्रयास करें।",
    retry: "फिर प्रयास करें",
    lagnaTeaser: "लग्न वह चेहरा है जो आप संसार को दिखाते हैं — पहली छाप, और जीवन से मिलने का ढंग।",
    moonTeaser: (nak) => `आपका चंद्रमा ${nak} में है: जहाँ मन ठहरता है, और आप कैसे अनुभव करते हैं।`,
    sunTeaser: "सूर्य इच्छाशक्ति और आत्मभाव का केंद्र है — जिस पर आपको शांत गर्व होता है।",
    dashaTeaser: (lord, until) => `अभी ${lord} की महादशा चल रही है, जो ${until} तक रहेगी।`,
    readAbout: (name) => `${name} के बारे में पढ़ें`,
    next: "आगे",
    previous: "पीछे",
    swipeHint: "स्वाइप करें",
    stepOf: (n, total) => `${n} / ${total}`,
    nextStepsTitle: "आगे क्या पढ़ें",
    openFullReport: "पूरी रिपोर्ट खोलें",
    closeFullReport: "रिपोर्ट बंद करें",
    share: "साझा करें",
    shareText: (nak) => `मेरा चंद्र नक्षत्र ${nak} है।`,
    copied: "लिंक कॉपी हो गया",
    changeDetails: "जन्म विवरण बदलें",
    relatedTool: "संबंधित उपकरण",

    toolsTitle: (n) => `एक जन्म कुंडली, पढ़ने के ${n} तरीके।`,
    allTools: "सभी उपकरण देखें",
    openTool: "उपकरण खोलें",
    viewHere: "यहीं देखें",
    close: "बंद करें",
    toolGroups: {
      self: "आपकी कुंडली",
      timing: "समय",
      relations: "संबंध",
      life: "जीवन और कार्य",
    },

    learnTitle: "आकाश पढ़ने के तीन शब्द।",
    learnLead: "ज्योतिष तीन इकाइयों पर टिका है। साइट का हर लेख इन्हीं में से किसी एक से शुरू होता है।",
    learnSteps: {
      rashi: {
        title: "राशि — 12 राशियाँ",
        body: "आकाश के 30° के बारह भाग। स्वभाव का आधार।",
        cta: "12 राशियाँ देखें",
      },
      nakshatra: {
        title: "नक्षत्र — 27 नक्षत्र",
        body: "वे 27 भाग जिनसे चंद्रमा प्रतिदिन गुज़रता है। मन की सूक्ष्म बनावट — और जापान के सुकुयो की जड़।",
        cta: "27 नक्षत्र देखें",
      },
      graha: {
        title: "ग्रह — 9 ग्रह",
        body: "सूर्य और चंद्र, पाँच ग्रह, तथा राहु और केतु। जीवन में कार्यरत शक्तियाँ।",
        cta: "9 ग्रह देखें",
      },
    },
    learnCourse: "पाठ्यक्रम से क्रमवार सीखें",
    learnArticles: "लेख पढ़ें",
    aboutTitle: "ज्योतिष लाइफ के बारे में",

    readingTitle: "एक रीडिंग, एक व्यक्ति के हाथों।",
    readingBody:
      "एक अभ्यासरत वैदिक ज्योतिषी आपकी कुंडली को स्वयं पढ़ते हैं — उनके लिए जो उत्तर की जल्दी के बजाय अपने प्रश्नों के साथ शांति से बैठना चाहते हैं।",
    readingNote: "रीडिंग परिणामों का वादा नहीं करती; यह जीवन के समय को पढ़ने का एक तरीका है।",

    closingTitle: "अपने जन्म के दिन के आकाश से शुरुआत करें।",

    tabs: { home: "होम", chart: "कुंडली", today: "आज", tools: "उपकरण", learn: "सीखें", reading: "रीडिंग" },
    tabsAria: "मुख्य मेनू",
  },
  ko: {
    heroKicker: "무료 인도 점성술 출생 차트",
    heroTitle: "당신이 태어난 날의 하늘을, 고요히 읽다.",
    heroLead:
      "무료 베다 점성술(조티시) 출생 차트. 생년월일과 시간을 입력하면 그 순간의 달과 태양이 바로 이곳에 나타납니다.",
    addName: "이름 추가 (선택)",
    submit: "무료로 호로스코프 만들기",
    submitting: "계산 중…",
    privacy: "로그인하지 않으면 아무것도 저장되지 않습니다.",

    previewLabel: "태어난 순간의 하늘",
    previewEmpty: "생년월일을 입력하면 태양계가 그 순간으로 되돌아갑니다.",
    previewNote: "이것은 추정치입니다. 정확한 위치는 차트를 만들 때 계산합니다.",
    moon: "달",
    sun: "태양",
    moonIn: (sign, nak) => `${sign} · ${nak}`,
    sunIn: (sign) => `${sign}`,

    storyTitle: (name) => {
      return name ? `${name} 님의 차트` : "나의 차트";
    },
    storyFor: (place) => `${place} 출생`,
    computing: "차트를 계산하고 있습니다…",
    coldStart: "서버가 깨어나는 데 30초 정도 걸릴 수 있습니다.",
    computeError: "차트를 계산하지 못했습니다. 잠시 후 다시 시도해 주세요.",
    retry: "다시 시도",
    lagnaTeaser: "라그나는 세상을 향한 얼굴입니다. 첫인상과 삶을 마주하는 방식을 나타냅니다.",
    moonTeaser: (nak) => `달이 머무는 곳은 ‘${nak}’. 마음이 쉬는 자리와 느끼는 방식을 나타냅니다.`,
    sunTeaser: "태양은 의지와 자기다움의 중심입니다. 무엇에 조용한 자부심을 느끼는지를 나타냅니다.",
    dashaTeaser: (lord, until) => `지금은 ${lord}의 시기(마하다샤)이며, ${until}까지 이어집니다.`,
    readAbout: (name) => `${name}에 대해 읽기`,
    next: "다음",
    previous: "이전",
    swipeHint: "옆으로 넘기기",
    stepOf: (n, total) => `${n} / ${total}`,
    nextStepsTitle: "다음에 읽을 것",
    openFullReport: "전체 리포트 열기",
    closeFullReport: "리포트 닫기",
    share: "공유",
    shareText: (nak) => `나의 달 낙샤트라는 ‘${nak}’였습니다.`,
    copied: "링크를 복사했습니다",
    changeDetails: "출생 정보 바꾸기",
    relatedTool: "관련 도구",

    toolsTitle: (n) => `하나의 출생 차트, ${n}가지 읽는 법.`,
    allTools: "모든 도구 보기",
    openTool: "도구 열기",
    viewHere: "여기서 보기",
    close: "닫기",
    toolGroups: {
      self: "나의 별",
      timing: "시간의 흐름",
      relations: "궁합",
      life: "생활과 일",
    },

    learnTitle: "세 가지 말로 하늘을 읽다.",
    learnLead: "조티시의 기본은 세 단위뿐입니다. 사이트의 모든 글은 이 중 하나에서 시작합니다.",
    learnSteps: {
      rashi: {
        title: "라시 — 12궁",
        body: "하늘을 30°씩 열둘로 나눈 구역. 기질의 바탕을 나타냅니다.",
        cta: "12궁 보기",
      },
      nakshatra: {
        title: "낙샤트라 — 27수",
        body: "달이 하루에 하나씩 머무는 27개의 구역. 마음의 섬세한 결을 나타내며, 일본 수요(宿曜)의 뿌리이기도 합니다.",
        cta: "27수 보기",
      },
      graha: {
        title: "그라하 — 9개의 천체",
        body: "태양과 달, 다섯 행성, 그리고 라후와 케투. 삶에 작용하는 힘 그 자체입니다.",
        cta: "9개의 천체 보기",
      },
    },
    learnCourse: "코스로 차근차근 배우기",
    learnArticles: "글 읽기",
    aboutTitle: "Jyotish Life 소개",

    readingTitle: "사람의 손으로 읽는 감정.",
    readingBody:
      "실제로 활동하는 베다 점성가가 당신의 차트를 직접 읽습니다. 서둘러 답을 찾기보다 자신의 질문과 조용히 마주하고 싶은 분을 위해.",
    readingNote: "감정은 결과를 약속하지 않습니다. 삶의 흐름을 읽는 한 가지 방법입니다.",

    closingTitle: "먼저, 태어난 날의 하늘에서부터.",

    tabs: { home: "홈", chart: "차트", today: "운세", tools: "도구", learn: "배우기", reading: "감정" },
    tabsAria: "메인 메뉴",
  },
};
