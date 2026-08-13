import type { BilingualText, EducationLang } from "@/lib/education/types";

export type WelcomeStartingPointId =
  | "new-readers"
  | "own-chart"
  | "learn-practice"
  | "personal-reading";

export interface WelcomeQuickLink {
  href: string;
  label: BilingualText;
  /**
   * Marks the card's terminal action. A flag rather than a restructure, so the
   * localisation audit's shape check keeps passing across all four locales.
   */
  primary?: boolean;
}

export interface WelcomeStartingPoint {
  id: WelcomeStartingPointId;
  title: BilingualText;
  body: BilingualText;
  links: WelcomeQuickLink[];
}

export interface WelcomeTestimonial {
  quote: string;
  attribution: string;
}

/**
 * Testimonials and trust badges ship empty on purpose.
 *
 * 景品表示法 bars 優良誤認, and PRIORITY.md is explicit that these are strong
 * E-E-A-T devices only if genuine. The components are built and styled; they
 * render nothing until real, attributed entries are added here. Do not
 * populate with examples — anything in this array is a public claim.
 */
export const welcomeTestimonials: Record<EducationLang, WelcomeTestimonial[]> = {
  en: [],
  hi: [],
  ja: [],
  ko: [],
};

/** Verifiable facts about the practice only — no superlatives, no guarantees. */
export const welcomeTrustBadges: Record<EducationLang, string[]> = {
  en: [],
  hi: [],
  ja: [],
  ko: [],
};

export const welcomeContent = {
  bannerAlt: {
    en: "Jyotish Life", hi: "ज्योतिष जीवन", ja: "ジョーティッシュ・ライフ", ko: "조티쉬 라이프",
  },
  introImageAlt: {
    en: "Vedic sage teaching students from a scroll in a forest hermitage",
    hi: "वन आश्रम में स्क्रॉल से शिष्यों को पढ़ाते वैदिक ऋषि",
    ja: "森の庵で巻物から弟子たちに教えるヴェーダの賢者",
    ko: "숲 속 암자에서 두루마리로 제자들을 가르치는 베다 현자",
  },
  title: {
    en: "Welcome to Jyotish Life", hi: "ज्योतिष लाइफ में आपका स्वागत है", ja: "ジョーティッシュ・ライフへようこそ", ko: "Jyotish Life에 오신 것을 환영합니다",
  },
  intro: [
    {
      en: "There are turns in life that are hard to explain — a pattern that repeats, a question that stays unanswered, a search for direction. Jyotish, the predictive and preventive science of Vedic astrology, has addressed these questions for thousands of years. Jyotish Life was created to bring this knowledge to Japanese readers, in a form that is authentic, clear, and genuinely usable.", hi: "जीवन में ऐसे मोड़ आते हैं जिन्हें समझाना कठिन होता है - एक पैटर्न जो दोहराया जाता है, एक प्रश्न जो अनुत्तरित रह जाता है, दिशा की खोज। वैदिक ज्योतिष का भविष्यसूचक और निवारक विज्ञान, ज्योतिष, हजारों वर्षों से इन प्रश्नों को संबोधित करता रहा है। ज्योतिष लाइफ का निर्माण इस ज्ञान को जापानी पाठकों तक ऐसे रूप में पहुंचाने के लिए किया गया था, जो प्रामाणिक, स्पष्ट और वास्तव में प्रयोग करने योग्य हो।", ja: "人生には説明しにくい転機があります——繰り返すパターン、答えの見つからない問い、方向性を求める探索。予測と予防のヴェーダ占星術であるジョーティッシュは、数千年にわたりこれらの問いに向き合ってきました。ジョーティッシュ・ライフは、この知識を日本語の読者の皆様に、正統で、明確で、実際に役立つ形でお届けするために創設されました。", ko: "삶에는 설명하기 어려운 변화가 있습니다. 반복되는 패턴, 답이 없는 질문, 방향 찾기 등이 있습니다. 베다 점성술의 예측 및 예방 과학인 Jyotish는 수천 년 동안 이러한 문제를 해결해 왔습니다. Jyotish Life는 이러한 지식을 확실하고 명확하며 진정으로 사용할 수 있는 형식으로 일본 독자들에게 전달하기 위해 만들어졌습니다.",
    },
    {
      en: "Jyotish Life offers a comprehensive collection of resources on Vedic astrology — articles, diagrams, a precise birth chart generator, an interactive way to learn, and personal readings prepared directly by a practising Vedic astrologer. The material has been written for readers at every level, from complete beginners to those with deeper interest in the subject.", hi: "ज्योतिष लाइफ वैदिक ज्योतिष पर संसाधनों का एक व्यापक संग्रह प्रदान करता है - लेख, आरेख, एक सटीक जन्म चार्ट जनरेटर, सीखने का एक इंटरैक्टिव तरीका और एक अभ्यास वैदिक ज्योतिषी द्वारा सीधे तैयार की गई व्यक्तिगत रीडिंग। यह सामग्री हर स्तर के पाठकों के लिए लिखी गई है, शुरुआती से लेकर विषय में गहरी रुचि रखने वालों तक।", ja: "ジョーティッシュ・ライフでは、ヴェーダ占星術に関する包括的なリソースを提供しています——記事、図解、精密な出生チャート生成、インタラクティブな学習方法、そして実践するヴェーダ占星術師が直接作成する個人鑑定。初心者の方からより深い関心をお持ちの方まで、あらゆるレベルの読者のために執筆されています。", ko: "Jyotish Life는 기사, 다이어그램, 정확한 출생 차트 생성기, 대화형 학습 방법, 베다 점성가가 직접 준비한 개인 독서 등 베다 점성술에 대한 포괄적인 리소스 모음을 제공합니다. 이 자료는 완전 초보자부터 해당 주제에 깊은 관심을 갖고 있는 사람까지 모든 수준의 독자를 위해 작성되었습니다.",
    },
  ],
  startingPointsLead: {
    en: "Below are some suggested starting points, depending on what you are looking for", hi: "आप जो खोज रहे हैं उसके आधार पर नीचे कुछ शुरुआती बिंदु सुझाए गए हैं", ja: "お探しの内容に応じて、以下の出発点をご提案します", ko: "다음은 찾고 있는 항목에 따라 몇 가지 제안된 시작점입니다.",
  },

  /*
   * CTA ladder + restage copy.
   *
   * Audited against 消費者契約法 霊感等条項 per Phase 3.17: no fear framing, no
   * claim that repeating difficulty is the visitor's fault, no positioning of
   * the service as the remedy, no urgency, no guarantee of results. The
   * register is the calm, descriptive one the rest of the site already uses.
   */
  heroEyebrow: {
    en: "Vedic Astrology", hi: "वैदिक ज्योतिष", ja: "インド占星術", ko: "베다 점성술",
  },
  heroLead: {
    en: "Charts, readings, and a place to learn — prepared in the Vedic tradition and explained in plain language.",
    hi: "कुंडलियाँ, अध्ययन और सीखने का स्थान — वैदिक परंपरा में तैयार और सरल भाषा में समझाया गया।",
    ja: "チャート、鑑定、そして学びの場を。ヴェーダの伝統に基づき、平易な言葉でお伝えします。",
    ko: "차트와 감정, 그리고 배움의 자리 — 베다 전통에 따라 준비하고 쉬운 말로 설명합니다.",
  },
  ctaPrimary: {
    en: "Create your free horoscope", hi: "निःशुल्क कुंडली बनाएँ", ja: "無料でホロスコープを作成", ko: "무료로 호로스코프 만들기",
  },
  ctaSecondary: {
    en: "Request a personal appraisal", hi: "व्यक्तिगत रीडिंग का अनुरोध करें", ja: "個人鑑定を申し込む", ko: "개인 감정 신청하기",
  },
  stickyCtaLead: {
    en: "A free birth chart, in about a minute", hi: "लगभग एक मिनट में निःशुल्क जन्म कुंडली", ja: "約1分で、無料の出生図を", ko: "약 1분이면 무료 출생 차트",
  },
  stickyCtaDismiss: {
    en: "Dismiss", hi: "बंद करें", ja: "閉じる", ko: "닫기",
  },
  bannerCaption: {
    en: "A practice rooted in the Vedic tradition, offered in plain language.",
    hi: "वैदिक परंपरा में निहित एक अभ्यास, सरल भाषा में प्रस्तुत।",
    ja: "ヴェーダの伝統に根ざした実践を、平易な言葉で。",
    ko: "베다 전통에 뿌리내린 실천을, 쉬운 말로.",
  },
  pullQuote: {
    en: "Jyotish does not promise to remove difficulty. It offers a way to read the timing of a life more clearly.",
    hi: "ज्योतिष कठिनाइयाँ दूर करने का वादा नहीं करता। यह जीवन के समय-चक्र को अधिक स्पष्टता से पढ़ने का एक तरीका देता है।",
    ja: "ジョーティッシュは、困難を取り除くと約束するものではありません。人生の時の流れを、より明確に読むための手立てです。",
    ko: "조티시는 어려움을 없애준다고 약속하지 않습니다. 삶의 흐름을 더 분명하게 읽는 방법을 제시할 뿐입니다.",
  },
  startingPointsEyebrow: {
    en: "Where to begin", hi: "कहाँ से शुरू करें", ja: "はじめに", ko: "어디서 시작할까",
  },
  testimonialsEyebrow: {
    en: "In their words", hi: "उनके शब्दों में", ja: "お客様の声", ko: "이용자의 말",
  },
  trustEyebrow: {
    en: "About this practice", hi: "इस अभ्यास के बारे में", ja: "この鑑定について", ko: "이 감정에 대하여",
  },
  quickChart: {
    eyebrow: {
      en: "Birth details", hi: "जन्म विवरण", ja: "出生データ", ko: "출생 정보",
    },
    heading: {
      en: "Start with your own chart", hi: "अपनी कुंडली से शुरुआत करें", ja: "ご自身のチャートから始める", ko: "자신의 차트로 시작하기",
    },
    lead: {
      en: "Enter your birth details and we will draw your Vedic chart. Nothing is saved unless you sign in.",
      hi: "अपना जन्म विवरण दर्ज करें, हम आपकी वैदिक कुंडली बनाएँगे। साइन इन किए बिना कुछ भी सहेजा नहीं जाता।",
      ja: "出生データを入力すると、ヴェーダ式のチャートを作成します。ログインしない限り、データは保存されません。",
      ko: "출생 정보를 입력하시면 베다 차트를 작성해 드립니다. 로그인하지 않으면 아무것도 저장되지 않습니다.",
    },
  },
  instagram: {
    en: {
      line: "Daily chart tips and Jyotish insights on Instagram",
      handle: "@jyotishlife.jp",
      cta: "Follow",
    },
    hi: {
      line: "Instagram पर दैनिक कुंडली सुझाव और ज्योतिष अंतर्दृष्टियाँ",
      handle: "@jyotishlife.jp",
      cta: "फ़ॉलो करें",
    },
    ja: {
      line: "Instagramで毎日のチャートのヒントとジョーティッシュの洞察をお届け",
      handle: "@jyotishlife.jp",
      cta: "フォロー",
    },
    ko: {
      line: "Instagram에서 매일 만나는 차트 팁과 조티시 통찰",
      handle: "@jyotishlife.jp",
      cta: "팔로우",
    },
  },
  startingPoints: [
    {
      id: "new-readers",
      title: {
        en: "For Readers New to Vedic Astrology", hi: "वैदिक ज्योतिष में नए पाठकों के लिए", ja: "ヴェーダ占星術が初めての方へ", ko: "베다 점성술을 처음 접하는 독자를 위한",
      },
      body: {
        en: "If you are new to Jyotish, we recommend beginning with our Learn Jyotish section, followed by Introduction, Rashis (Signs), and Planets. These provide the foundation needed to understand everything else on Jyotish Life.", hi: "यदि आप ज्योतिष में नए हैं, तो हम अनुशंसा करते हैं कि आप हमारे लर्न ज्योतिष अनुभाग से शुरुआत करें, उसके बाद परिचय, राशियाँ (संकेत) और ग्रह देखें। ये ज्योतिष जीवन पर बाकी सब कुछ समझने के लिए आवश्यक आधार प्रदान करते हैं।", ja: "ジョーティッシュが初めての方は、まず「占星術を学ぶ」セクションから始め、その後「入門」「ラーシ（星座）」「惑星（グラハ）」へ進むことをおすすめします。ジョーティッシュ・ライフの他の内容を理解するための基礎となります。", ko: "Jyotish를 처음 사용하는 경우 Jyotish 배우기 섹션부터 시작하여 소개, Rashis(신호) 및 행성을 따르는 것이 좋습니다. 이는 Jyotish Life의 다른 모든 것을 이해하는 데 필요한 기초를 제공합니다.",
      },
      links: [
        {
          href: "/learn-jyotish",
          label: { en: "Learn Jyotish", hi: "ज्योतिष सीखें", ja: "占星術を学ぶ", ko: "조티어 배우기",},
          primary: true,
        },
        {
          href: "/learn-jyotish/introduction",
          label: { en: "Introduction", hi: "परिचय", ja: "入門", ko: "소개",},
        },
        {
          href: "/learn-jyotish/rashis",
          label: { en: "Rashis (Signs)", hi: "राशियाँ (संकेत)", ja: "ラーシ（星座）", ko: "라시(표지판)",},
        },
        {
          href: "/learn-jyotish/planets",
          label: { en: "Planets", hi: "ग्रहों", ja: "惑星（グラハ）", ko: "행성",},
        },
      ],
    },
    {
      id: "own-chart",
      title: {
        en: "For Those Who Want to See Their Own Chart", hi: "उन लोगों के लिए जो अपना स्वयं का चार्ट देखना चाहते हैं", ja: "ご自身のチャートから始めたい方へ", ko: "자신의 차트를 보고 싶은 분들을 위해",
      },
      body: {
        en: "If you would like to begin with your own birth details, our chart generator produces a precise Vedic horoscope — in both North and South Indian styles — based on authentic calculation methods. We recommend reading the Introduction and Houses (Bhavas) sections alongside your chart, as this will help you understand what you are looking at.", hi: "यदि आप अपने स्वयं के जन्म विवरण के साथ शुरुआत करना चाहते हैं, तो हमारा चार्ट जनरेटर प्रामाणिक गणना विधियों के आधार पर - उत्तर और दक्षिण भारतीय दोनों शैलियों में - एक सटीक वैदिक कुंडली तैयार करता है। हम आपके चार्ट के साथ-साथ परिचय और भाव अनुभाग को पढ़ने की सलाह देते हैं, क्योंकि इससे आपको यह समझने में मदद मिलेगी कि आप क्या देख रहे हैं।", ja: "出生データから始めたい方には、正統な計算法に基づく精密なヴェーダホロスコープを、北インド式・南インド式の両方で生成できます。チャートとあわせて「入門」「ハウス（バーヴァ）」を読むと、見ている内容の理解が深まります。", ko: "자신의 출생 세부 정보부터 시작하고 싶다면 당사의 차트 생성기가 실제 계산 방법을 기반으로 북인도 및 남인도 스타일로 정확한 베다 별자리를 생성합니다. 차트와 함께 소개 및 주택(Bhavas) 섹션을 읽는 것이 좋습니다. 이는 현재 보고 있는 내용을 이해하는 데 도움이 됩니다.",
      },
      links: [
        {
          href: "/chart",
          label: { en: "Chart generator", hi: "चार्ट जनरेटर", ja: "チャート作成", ko: "차트 생성기",},
          primary: true,
        },
      ],
    },
    {
      id: "learn-practice",
      title: {
        en: "For Those Who Want to Learn Through Practice", hi: "उन लोगों के लिए जो अभ्यास के माध्यम से सीखना चाहते हैं", ja: "実践を通じて学びたい方へ", ko: "실습을 통해 배우고 싶은 분들을 위해",
      },
      body: {
        en: "If you prefer to learn by doing rather than reading first, our interactive Jyotish game offers a simple way to see how the planets and houses work together, before going deeper into the articles.", hi: "यदि आप पहले पढ़ने के बजाय काम करके सीखना पसंद करते हैं, तो हमारा इंटरैक्टिव ज्योतिष गेम लेखों में गहराई से जाने से पहले यह देखने का एक आसान तरीका प्रदान करता है कि ग्रह और घर एक साथ कैसे काम करते हैं।", ja: "まず読むより、実践で学びたい方には、記事を深く読む前に惑星とハウスの関係を体験できるインタラクティブなジョーティッシュゲームをご用意しています。", ko: "먼저 읽는 것보다 직접 해보는 것을 선호한다면 대화형 Jyotish 게임을 통해 기사를 더 자세히 살펴보기 전에 행성과 집이 어떻게 함께 작동하는지 확인할 수 있는 간단한 방법을 얻을 수 있습니다.",
      },
      links: [
        {
          href: "/course",
          label: { en: "Interactive Jyotish game", hi: "इंटरैक्टिव ज्योतिष खेल", ja: "インタラクティブ・ジョーティッシュ", ko: "대화형 Jyotish 게임",},
          primary: true,
        },
      ],
    },
    {
      id: "personal-reading",
      title: {
        en: "For Readers Seeking a Personal Reading", hi: "व्यक्तिगत पढ़ने की इच्छा रखने वाले पाठकों के लिए", ja: "個人鑑定をご希望の方へ", ko: "개인적인 독서를 원하는 독자를 위해",
      },
      body: {
        en: "Those who wish to go beyond self-study can request a personal appraisal, prepared directly by Om Shukla, a Vedic Brahmin astrologer trained in a family tradition of Jyotish, with additional training under Jyotishacharya Dr. Usha Shukla (gold medalist, PhD in Vedic Astrology).", hi: "जो लोग स्व-अध्ययन से आगे जाना चाहते हैं, वे व्यक्तिगत मूल्यांकन का अनुरोध कर सकते हैं, जो ज्योतिष की पारिवारिक परंपरा में प्रशिक्षित एक वैदिक ब्राह्मण ज्योतिषी ओम शुक्ला द्वारा सीधे तैयार किया गया है, जिसमें ज्योतिषाचार्य डॉ. उषा शुक्ला (स्वर्ण पदक विजेता, वैदिक ज्योतिष में पीएचडी) के तहत अतिरिक्त प्रशिक्षण भी शामिल है।", ja: "独学を超えて個別のご相談をご希望の方は、家系のジョーティッシュを継承するヴェーダ・ブラーミン占星術師オム・シュクラによる個人鑑定をご依頼いただけます。ジョーティシャーチャーリヤ ウシャ・シュクラ博士（ヴェーダ占星術博士、金メダリスト）のもとでも研鑽を積んでいます。", ko: "독학 이상의 것을 원하는 사람들은 Jyotish의 가족 전통에서 훈련을 받은 베다 브라만 점성가인 Om Shukla가 직접 준비한 개인 평가를 요청할 수 있으며, Usha Shukla 박사(금메달리스트, 베다 점성술 박사)의 Jyotishacharya 박사의 추가 교육도 받을 수 있습니다.",
      },
      links: [
        {
          href: "/personal-appraisals",
          label: { en: "Personal Appraisals", hi: "व्यक्तिगत मूल्यांकन", ja: "個人鑑定", ko: "개인 평가",},
          primary: true,
        },
      ],
    },
  ] satisfies WelcomeStartingPoint[],
} as const;

export function welcomeText(
  field: BilingualText,
  lang: EducationLang
): string {
  return field[lang];
}
