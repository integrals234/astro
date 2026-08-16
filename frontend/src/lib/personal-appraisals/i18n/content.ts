import type { AppraisalLanguage } from "../types";

export interface OfferingContent {
  id: string;
  title: string;
  description: string;
  includes: string[];
  note: string;
}

export interface PricingPlanContent {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  duration: string;
  description: string;
  featured: boolean;
}

export interface AppraisalPageContent {
  header: {
    eyebrow: string;
    title: string;
    description: string;
  };
  intro: {
    heading: string;
    body: string;
    highlights: string[];
  };
  offerings: {
    sectionLabel: string;
    sectionTitle: string;
    items: OfferingContent[];
  };
  pricing: {
    sectionLabel: string;
    sectionTitle: string;
    intro: string;
    tableService: string;
    tableDuration: string;
    tablePrice: string;
    footnote: string;
    plans: PricingPlanContent[];
  };
  process: {
    sectionLabel: string;
    steps: string[];
  };
  instagram: {
    badge: string;
    title: string;
    handle: string;
    body: string;
    cta: string;
    perks: string[];
  };
  form: {
    sectionLabel: string;
    title: string;
    description: string;
    fullName: string;
    email: string;
    whatsApp: string;
    whatsAppHint: string;
    message: string;
    messageOptional: string;
    fullNamePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    dialCodeLabel: string;
  };
}

const en: AppraisalPageContent = {
  header: {
    eyebrow: "Private consultations",
    title: "Personal Appraisals",
    description:
      "Human-led Vedic Astrology readings for those seeking clarity without hurry — written with care, delivered with discretion, and grounded in classical Jyotish.",
  },
  intro: {
    heading: "Guidance that meets you where you are",
    body: "Every chart tells a story — not of fate fixed in stone, but of tendencies, seasons, and choices unfolding over a lifetime. Our astrologers read with precision and speak with warmth, offering insight you can actually use: in your work, your relationships, your sense of purpose, and the quiet questions you may not say aloud.",
    highlights: [
      "Practitioners trained in Parashari and Jaimini traditions",
      "Sessions in English, Hindi, Japanese, and Korean upon request",
      "Strict confidentiality — your chart and story remain private",
      "No automated reports; every reading is prepared by hand",
    ],
  },
  offerings: {
    sectionLabel: "What we offer",
    sectionTitle: "Consultation formats",
    items: [
      {
        id: "written",
        title: "Written Natal Appraisal",
        description:
          "A carefully composed written reading of your birth chart — Lagna, Moon sign, Nakshatra, and the planetary themes shaping your temperament, gifts, and life direction.",
        includes: [
          "Core personality and karmic patterns",
          "Strengths, sensitivities, and growth edges",
          "Delivered as a private PDF within 3–4 weeks",
        ],
        note: "Ideal if you prefer to reflect in your own time before a live conversation.",
      },
      {
        id: "live",
        title: "Live Personal Session",
        description:
          "A one-to-one consultation with a seasoned Vedic astrologer — conducted over video or voice, with your chart opened and explained in calm, accessible language.",
        includes: [
          "60 or 90 minutes of focused dialogue",
          "Space for your questions as they arise",
          "Guidance on current dasha periods and transits",
        ],
        note: "Our most requested format for clarity during life transitions.",
      },
      {
        id: "compatibility",
        title: "Union & Compatibility Reading",
        description:
          "Thoughtful synastry between two charts — whether for marriage, partnership, or a relationship you are considering with care.",
        includes: [
          "Harmony and friction points between charts",
          "Timing considerations for commitment or reconciliation",
          "Practical counsel rooted in classical Jyotish principles",
        ],
        note: "Both birth details are required. Sessions can be joint or individual.",
      },
      {
        id: "muhurta",
        title: "Timing & Muhurta Selection",
        description:
          "When the moment matters — weddings, business launches, relocations, medical procedures — we identify windows aligned with your chart and intention.",
        includes: [
          "Auspicious date and time recommendations",
          "Context on planetary support and caution",
          "Follow-up notes you can share with family or advisors",
        ],
        note: "Often booked alongside a full natal session for deeper context.",
      },
    ],
  },
  pricing: {
    sectionLabel: "Investment",
    sectionTitle: "Pricing",
    intro:
      "All services are quoted individually after your inquiry — we share transparent rates and availability before anything is confirmed.",
    tableService: "Service",
    tableDuration: "Duration",
    tablePrice: "Price",
    footnote:
      "Payment is confirmed after we agree on your session details via WhatsApp. Every reading is warm, unhurried, and prepared specifically for your chart.",
    plans: [
      {
        id: "consultation",
        name: "Personal Consultation",
        price: "By inquiry",
        priceNote: "quoted individually",
        duration: "3–4 weeks",
        description:
          "A live, one-to-one Vedic Astrology session — your chart opened and interpreted with care, with space for your questions on career, relationships, health, or life direction.",
        featured: true,
      },
      {
        id: "written",
        name: "Written Natal Appraisal",
        price: "By inquiry",
        priceNote: "quoted individually",
        duration: "3–4 weeks",
        description:
          "A composed written reading delivered privately — ideal if you prefer to reflect before scheduling a live conversation.",
        featured: false,
      },
      {
        id: "compatibility",
        name: "Union & Compatibility",
        price: "By inquiry",
        priceNote: "quoted individually",
        duration: "3–4 weeks",
        description:
          "Synastry between two charts with timing guidance for commitment, partnership, or reconciliation.",
        featured: false,
      },
      {
        id: "rectification",
        name: "Birth Time Refinement",
        price: "By inquiry",
        priceNote: "quoted individually",
        duration: "3–4 weeks",
        description:
          "Structured rectification when your birth time is uncertain — using life events to establish a reliable chart.",
        featured: false,
      },
    ],
  },
  process: {
    sectionLabel: "How it works",
    steps: [
      "Submit your inquiry below with your preferred contact details.",
      "We reach out on WhatsApp to confirm your focus area and collect birth data (date, time, place).",
      "Your session is scheduled at a time that respects your timezone and privacy.",
      "After your reading, optional follow-up notes or a brief check-in can be arranged.",
    ],
  },
  instagram: {
    badge: "Free daily wisdom",
    title: "Follow us on Instagram",
    handle: "@jyotishlife.jp",
    body:
      "Get daily Jyotish insights, chart tips, transit alerts, and remedies between consultations — join our growing community before you book a session.",
    cta: "Follow on Instagram",
    perks: ["Daily chart tips", "Transits & muhurta", "Remedies & Q&A"],
  },
  form: {
    sectionLabel: "Begin your inquiry",
    title: "Request a personal consultation",
    description:
      "Share a few details below. We respond personally — usually within two to three business days — and coordinate your session over WhatsApp at a time that suits you.",
    fullName: "Full name",
    email: "Email address",
    whatsApp: "WhatsApp number",
    whatsAppHint:
      "Include your country code — we've pre-selected one based on your region. WhatsApp is our preferred channel for scheduling.",
    message: "Area of concern",
    messageOptional: "(optional)",
    fullNamePlaceholder: "Your name as you'd like us to address you",
    emailPlaceholder: "you@example.com",
    phonePlaceholder: "Local number without leading zero",
    messagePlaceholder:
      "Career transition, relationship clarity, timing for an important decision, birth time uncertainty…",
    submit: "Request consultation",
    submitting: "Sending inquiry…",
    dialCodeLabel: "Country calling code",
  },
};

const ja: AppraisalPageContent = {
  header: {
    eyebrow: "プライベート鑑定",
    title: "パーソナル鑑定",
    description:
      "答えを急がず、ご自身と静かに向き合いたい方のためのヴェーダ占星術（ジョーティシュ）鑑定です。古典の伝統に基づき、一件ずつ丁寧に読み解き、プライバシーに配慮してお届けします。",
  },
  intro: {
    heading: "今のあなたに寄り添う鑑定",
    body: "ホロスコープが示すのは、変えられない運命ではなく、人生を通して現れる傾向、時期、そして選択の可能性です。経験ある鑑定士が精密さと温かさをもって読み解き、仕事、人間関係、生きる目的、そして言葉にしにくい悩みに、日々の選択に生かせる洞察をお届けします。",
    highlights: [
      "パーラーシャリーおよびジャイミニ系統の訓練を受けた鑑定士",
      "英語・ヒンディー語・日本語・韓国語でのセッションに対応",
      "厳格な守秘義務 — あなたのチャートとお話は完全に非公開",
      "自動レポートなし — すべて手作業で準備",
    ],
  },
  offerings: {
    sectionLabel: "ご提供内容",
    sectionTitle: "鑑定の形式",
    items: [
      {
        id: "written",
        title: "書面による出生図鑑定",
        description:
          "出生チャート（ラグナ、月星座、ナクシャトラ）を丁寧に読み解いた書面鑑定。気質、才能、人生の方向性を形作る惑星のテーマをお伝えします。",
        includes: [
          "基本的な性格とカルマのパターン",
          "強み、繊細さ、成長のポイント",
          "3〜4週間以内にPDFで個別お届け",
        ],
        note: "対面での会話を急がず、まずご自身のペースで内容を受け取りたい方に適しています。",
      },
      {
        id: "live",
        title: "ライブ・パーソナルセッション",
        description:
          "経験豊富なヴェーダ占星術師との一対一の鑑定。ビデオまたは音声で、チャートを開きながら、落ち着いた言葉で丁寧に解説します。",
        includes: [
          "60分または90分の集中対話",
          "その場でのご質問に柔軟に対応",
          "現在のダシャー期間とトランジットのガイダンス",
        ],
        note: "人生の転換期における方向性の確認を求める方に最もご好評いただいている形式です。",
      },
      {
        id: "compatibility",
        title: "相性・パートナーシップ鑑定",
        description:
          "二人のチャートを丁寧に照合 — 結婚、パートナーシップ、または慎重に検討中の関係性について。",
        includes: [
          "チャート間の調和と摩擦ポイント",
          "結婚・復縁のタイミングに関する考察",
          "古典ジョーティシュに基づく実践的な助言",
        ],
        note: "双方の出生データが必要です。共同または個別セッションが可能です。",
      },
      {
        id: "muhurta",
        title: "時期選定・ムフルタ",
        description:
          "結婚式、事業の開始、引越し、医療処置など、大切な節目について、あなたのチャートと目的に合う吉日・吉時を見極めます。",
        includes: [
          "縁起の良い日時のご提案",
          "惑星のサポートと注意点の解説",
          "ご家族やアドバイザーと共有できるフォローアップメモ",
        ],
        note: "より深い文脈のため、出生図鑑定と合わせてご予約される方が多いです。",
      },
    ],
  },
  pricing: {
    sectionLabel: "料金",
    sectionTitle: "ご案内",
    intro:
      "すべてのサービスはお問い合わせ後に個別にお見積りいたします。ご予約確定前に、透明性のある料金と空き状況をお伝えします。",
    tableService: "サービス",
    tableDuration: "時間",
    tablePrice: "料金",
    footnote:
      "WhatsAppでセッション内容にご同意いただいた後、お支払いを確定します。すべての鑑定は、あなたのチャートに合わせて温かく、ゆったりと、手作業で準備いたします。",
    plans: [
      {
        id: "consultation",
        name: "パーソナル鑑定",
        price: "お問い合わせ",
        priceNote: "個別お見積り",
        duration: "3〜4週間",
        description:
          "一対一のライブ・ヴェーダ占星術セッション。キャリア、人間関係、健康、人生の方向性など、ご質問に丁寧にお答えします。",
        featured: true,
      },
      {
        id: "written",
        name: "書面による出生図鑑定",
        price: "お問い合わせ",
        priceNote: "個別お見積り",
        duration: "3〜4週間",
        description:
          "ご自身のペースで読み返し、考えを深めたい方に適した、個別の書面鑑定です。",
        featured: false,
      },
      {
        id: "compatibility",
        name: "相性・パートナーシップ鑑定",
        price: "お問い合わせ",
        priceNote: "個別お見積り",
        duration: "3〜4週間",
        description:
          "二人のチャート照合と、結婚・パートナーシップ・復縁のタイミングに関するガイダンス。",
        featured: false,
      },
      {
        id: "rectification",
        name: "出生時刻の精密化",
        price: "お問い合わせ",
        priceNote: "個別お見積り",
        duration: "3〜4週間",
        description:
          "出生時刻が不明な場合 — 人生の出来事を用いた構造的な補正により、信頼できるチャートを確立します。",
        featured: false,
      },
    ],
  },
  process: {
    sectionLabel: "ご利用の流れ",
    steps: [
      "下記フォームより、ご連絡先をお送りください。",
      "WhatsAppでご相談内容を確認し、出生データ（日付・時刻・場所）をお伺いします。",
      "タイムゾーンとプライバシーに配慮した日時でセッションを調整します。",
      "鑑定後、必要に応じてフォローアップメモや簡単なチェックインも可能です。",
    ],
  },
  instagram: {
    badge: "毎日更新 · 無料",
    title: "Instagramをフォロー",
    handle: "@jyotishlife.jp",
    body:
      "鑑定の前後も学べる — 毎日のジョーティッシュ、チャートの読み方、トランジット、リメディのヒントを無料でお届け。まずはフォローして、私たちのコミュニティに参加してください。",
    cta: "Instagramでフォロー",
    perks: ["毎日のチャート解説", "トランジット・ムフルタ", "リメディ・Q&A"],
  },
  form: {
    sectionLabel: "お問い合わせ",
    title: "パーソナル鑑定のご依頼",
    description:
      "必要事項をご記入ください。通常2〜3営業日以内に個別にご返信し、WhatsAppでご都合の良い日時を調整いたします。",
    fullName: "お名前",
    email: "メールアドレス",
    whatsApp: "WhatsApp番号",
    whatsAppHint:
      "国番号を含めてご入力ください — お住まいの地域に基づき事前選択しています。日程調整はWhatsAppを優先しております。",
    message: "ご相談内容",
    messageOptional: "（任意）",
    fullNamePlaceholder: "鑑定時にお呼びしたいお名前",
    emailPlaceholder: "you@example.com",
    phonePlaceholder: "先頭の0を除いた番号",
    messagePlaceholder:
      "キャリアの転換、人間関係、重要な決断のタイミング、出生時刻の不明さ など",
    submit: "鑑定を依頼する",
    submitting: "送信中…",
    dialCodeLabel: "国番号",
  },
};

const hi: AppraisalPageContent = {
  header: {
    eyebrow: "निजी परामर्श",
    title: "व्यक्तिगत ज्योतिषीय परामर्श",
    description:
      "स्पष्टता चाहने वालों के लिए अनुभवी ज्योतिषियों द्वारा किया गया वैदिक ज्योतिष परामर्श—धैर्य और गोपनीयता के साथ, शास्त्रीय ज्योतिष पर आधारित।",
  },
  intro: {
    heading: "आपकी वर्तमान स्थिति के अनुरूप मार्गदर्शन",
    body:
      "हर जन्मकुंडली एक कहानी कहती है—पत्थर पर लिखे भाग्य की नहीं, बल्कि जीवनभर खुलती प्रवृत्तियों, समय-चक्रों और विकल्पों की। हमारे ज्योतिषी सूक्ष्मता और संवेदनशीलता से कुंडली पढ़कर करियर, संबंधों, जीवन-उद्देश्य और मन में छिपे प्रश्नों के लिए व्यावहारिक अंतर्दृष्टि देते हैं।",
    highlights: [
      "पाराशरी और जैमिनी परंपराओं में प्रशिक्षित ज्योतिषी",
      "अनुरोध पर अंग्रेज़ी, हिन्दी, जापानी और कोरियाई में सत्र",
      "पूर्ण गोपनीयता—आपकी कुंडली और निजी बातें सुरक्षित",
      "कोई स्वचालित रिपोर्ट नहीं; हर परामर्श व्यक्तिगत रूप से तैयार",
    ],
  },
  offerings: {
    sectionLabel: "हमारी सेवाएँ",
    sectionTitle: "परामर्श के विकल्प",
    items: [
      {
        id: "written",
        title: "लिखित जन्मकुंडली विश्लेषण",
        description:
          "लग्न, चंद्र राशि, नक्षत्र और आपके स्वभाव, प्रतिभा तथा जीवन-दिशा को आकार देने वाले ग्रहों का सावधानीपूर्वक लिखा विश्लेषण।",
        includes: [
          "मूल व्यक्तित्व और कर्म-संबंधी प्रवृत्तियाँ",
          "क्षमताएँ, संवेदनशीलताएँ और विकास के क्षेत्र",
          "3–4 सप्ताह में निजी PDF",
        ],
        note: "उन लोगों के लिए उपयुक्त जो लाइव बातचीत से पहले अपनी गति से विचार करना चाहते हैं।",
      },
      {
        id: "live",
        title: "लाइव व्यक्तिगत सत्र",
        description:
          "अनुभवी वैदिक ज्योतिषी के साथ वीडियो या वॉइस पर आमने-सामने परामर्श, जिसमें आपकी कुंडली सरल और शांत भाषा में समझाई जाती है।",
        includes: [
          "60 या 90 मिनट की केंद्रित बातचीत",
          "सत्र के दौरान अपने प्रश्न पूछने का अवसर",
          "वर्तमान दशा और गोचर पर मार्गदर्शन",
        ],
        note: "जीवन के बदलावों के समय स्पष्टता के लिए सबसे अधिक चुना जाने वाला विकल्प।",
      },
      {
        id: "compatibility",
        title: "विवाह एवं संबंध अनुकूलता",
        description:
          "विवाह, साझेदारी या किसी महत्वपूर्ण संबंध के लिए दो कुंडलियों का विचारपूर्ण तुलनात्मक अध्ययन।",
        includes: [
          "दोनों कुंडलियों के सामंजस्य और मतभेद के बिंदु",
          "प्रतिबद्धता या पुनर्मिलन के समय पर विचार",
          "शास्त्रीय ज्योतिष पर आधारित व्यावहारिक सलाह",
        ],
        note: "दोनों व्यक्तियों का जन्म-विवरण आवश्यक है। सत्र साथ या अलग-अलग हो सकता है।",
      },
      {
        id: "muhurta",
        title: "समय एवं मुहूर्त चयन",
        description:
          "विवाह, व्यवसाय आरंभ, स्थानांतरण या चिकित्सा जैसे महत्वपूर्ण कार्यों के लिए आपकी कुंडली और उद्देश्य के अनुकूल शुभ समय का चयन।",
        includes: [
          "शुभ तिथि और समय की अनुशंसा",
          "ग्रहों के सहयोग और सावधानियों की व्याख्या",
          "परिवार या सलाहकारों से साझा करने योग्य नोट्स",
        ],
        note: "अधिक संदर्भ के लिए इसे अक्सर पूर्ण जन्मकुंडली सत्र के साथ लिया जाता है।",
      },
    ],
  },
  pricing: {
    sectionLabel: "परामर्श शुल्क",
    sectionTitle: "मूल्य",
    intro:
      "हर सेवा का शुल्क आपकी पूछताछ के बाद अलग से बताया जाता है। पुष्टि से पहले हम मूल्य और उपलब्ध समय स्पष्ट रूप से साझा करते हैं।",
    tableService: "सेवा",
    tableDuration: "अवधि",
    tablePrice: "शुल्क",
    footnote:
      "WhatsApp पर सत्र का विवरण तय होने के बाद भुगतान की पुष्टि होती है। हर विश्लेषण आपकी कुंडली के लिए विशेष रूप से, बिना जल्दबाज़ी के तैयार किया जाता है।",
    plans: [
      {
        id: "consultation",
        name: "व्यक्तिगत परामर्श",
        price: "पूछताछ पर",
        priceNote: "व्यक्तिगत शुल्क",
        duration: "3–4 सप्ताह",
        description:
          "करियर, संबंध, स्वास्थ्य या जीवन-दिशा से जुड़े प्रश्नों के लिए एक-से-एक लाइव वैदिक ज्योतिष सत्र।",
        featured: true,
      },
      {
        id: "written",
        name: "लिखित जन्मकुंडली विश्लेषण",
        price: "पूछताछ पर",
        priceNote: "व्यक्तिगत शुल्क",
        duration: "3–4 सप्ताह",
        description:
          "निजी रूप से भेजा गया सुविचारित लिखित विश्लेषण—अपनी गति से पढ़ने और समझने के लिए।",
        featured: false,
      },
      {
        id: "compatibility",
        name: "विवाह एवं संबंध अनुकूलता",
        price: "पूछताछ पर",
        priceNote: "व्यक्तिगत शुल्क",
        duration: "3–4 सप्ताह",
        description:
          "दो कुंडलियों की तुलना तथा प्रतिबद्धता, साझेदारी या पुनर्मिलन के समय पर मार्गदर्शन।",
        featured: false,
      },
      {
        id: "rectification",
        name: "जन्म समय परिशोधन",
        price: "पूछताछ पर",
        priceNote: "व्यक्तिगत शुल्क",
        duration: "3–4 सप्ताह",
        description:
          "जन्म समय अनिश्चित होने पर जीवन की प्रमुख घटनाओं के आधार पर विश्वसनीय कुंडली स्थापित करने की व्यवस्थित प्रक्रिया।",
        featured: false,
      },
    ],
  },
  process: {
    sectionLabel: "प्रक्रिया",
    steps: [
      "नीचे अपनी पसंदीदा संपर्क जानकारी के साथ पूछताछ भेजें।",
      "हम WhatsApp पर विषय की पुष्टि करके जन्म-विवरण (तिथि, समय और स्थान) लेते हैं।",
      "आपके समय क्षेत्र और गोपनीयता के अनुरूप सत्र तय किया जाता है।",
      "परामर्श के बाद आवश्यकता अनुसार संक्षिप्त नोट्स या फॉलो-अप रखा जा सकता है।",
    ],
  },
  instagram: {
    badge: "हर दिन निःशुल्क ज्ञान",
    title: "Instagram पर हमें फ़ॉलो करें",
    handle: "@jyotishlife.jp",
    body:
      "दैनिक ज्योतिष अंतर्दृष्टि, कुंडली सुझाव, गोचर सूचनाएँ और उपाय पाएँ—सत्र बुक करने से पहले हमारे बढ़ते समुदाय से जुड़ें।",
    cta: "Instagram पर फ़ॉलो करें",
    perks: ["दैनिक कुंडली सुझाव", "गोचर और मुहूर्त", "उपाय और प्रश्नोत्तर"],
  },
  form: {
    sectionLabel: "पूछताछ शुरू करें",
    title: "व्यक्तिगत परामर्श का अनुरोध",
    description:
      "नीचे कुछ जानकारी साझा करें। हम सामान्यतः दो से तीन कार्यदिवस में व्यक्तिगत उत्तर देते हैं और WhatsApp पर सुविधाजनक समय तय करते हैं।",
    fullName: "पूरा नाम",
    email: "ईमेल पता",
    whatsApp: "WhatsApp नंबर",
    whatsAppHint:
      "देश कोड शामिल करें—आपके क्षेत्र के अनुसार एक कोड पहले से चुना गया है। समय तय करने के लिए WhatsApp हमारा प्राथमिक माध्यम है।",
    message: "परामर्श का विषय",
    messageOptional: "(वैकल्पिक)",
    fullNamePlaceholder: "जिस नाम से आप संबोधित होना चाहें",
    emailPlaceholder: "you@example.com",
    phonePlaceholder: "शुरुआती शून्य के बिना स्थानीय नंबर",
    messagePlaceholder:
      "करियर में बदलाव, संबंधों की स्पष्टता, महत्वपूर्ण निर्णय का समय, जन्म समय की अनिश्चितता…",
    submit: "परामर्श का अनुरोध भेजें",
    submitting: "पूछताछ भेजी जा रही है…",
    dialCodeLabel: "देश का फ़ोन कोड",
  },
};

const ko: AppraisalPageContent = {
  header: {
    eyebrow: "비공개 상담",
    title: "개인 감정",
    description:
      "차분하게 명료함을 찾는 분을 위한 사람 중심의 베다 점성술 상담입니다. 고전 조티시에 기반해 정성껏 준비하고 비밀을 철저히 지킵니다.",
  },
  intro: {
    heading: "지금의 당신에게 맞춘 안내",
    body:
      "모든 차트는 돌에 새겨진 운명이 아니라 평생 펼쳐지는 성향, 시기와 선택의 이야기를 담고 있습니다. 저희 점성술사는 정밀하면서도 따뜻하게 차트를 읽어 일, 관계, 삶의 목적과 말하기 어려운 고민에 실제로 활용할 수 있는 통찰을 전합니다.",
    highlights: [
      "파라샤리와 자이미니 전통을 수련한 상담가",
      "요청 시 영어·힌디어·일본어·한국어 상담 가능",
      "엄격한 비밀 보장—차트와 사연은 안전하게 보호",
      "자동 생성 보고서 없이 모든 상담을 직접 준비",
    ],
  },
  offerings: {
    sectionLabel: "제공 서비스",
    sectionTitle: "상담 방식",
    items: [
      {
        id: "written",
        title: "서면 출생 차트 감정",
        description:
          "라그나, 달 별자리, 낙샤트라와 성향·재능·삶의 방향을 형성하는 행성 주제를 세심하게 풀어낸 서면 감정입니다.",
        includes: [
          "핵심 성격과 카르마 패턴",
          "강점, 민감한 부분과 성장 과제",
          "3~4주 이내 비공개 PDF 제공",
        ],
        note: "실시간 상담 전에 자신의 속도로 천천히 살펴보고 싶은 분께 적합합니다.",
      },
      {
        id: "live",
        title: "실시간 개인 상담",
        description:
          "숙련된 베다 점성술사와 영상 또는 음성으로 일대일 상담하며 차트를 차분하고 이해하기 쉬운 말로 설명합니다.",
        includes: [
          "60분 또는 90분 집중 상담",
          "떠오르는 질문을 자유롭게 묻는 시간",
          "현재 다샤와 트랜싯에 대한 안내",
        ],
        note: "삶의 전환기에 명료함을 원하는 분들이 가장 많이 선택하는 방식입니다.",
      },
      {
        id: "compatibility",
        title: "인연·궁합 감정",
        description:
          "결혼, 동반자 관계 또는 신중히 생각 중인 관계를 위해 두 차트를 세심하게 비교합니다.",
        includes: [
          "두 차트 사이의 조화와 갈등 지점",
          "약속이나 재결합 시기에 대한 검토",
          "고전 조티시 원리에 근거한 실용적 조언",
        ],
        note: "두 사람의 출생 정보가 모두 필요하며 함께 또는 개별 상담이 가능합니다.",
      },
      {
        id: "muhurta",
        title: "시기·무후르타 선정",
        description:
          "결혼식, 사업 시작, 이사, 의료 절차처럼 중요한 일을 위해 차트와 의도에 맞는 길한 시기를 찾습니다.",
        includes: [
          "길한 날짜와 시간 제안",
          "행성의 도움과 주의점 설명",
          "가족이나 조언자와 공유할 수 있는 후속 메모",
        ],
        note: "더 깊은 맥락을 위해 출생 차트 상담과 함께 신청하는 경우가 많습니다.",
      },
    ],
  },
  pricing: {
    sectionLabel: "상담 비용",
    sectionTitle: "가격 안내",
    intro:
      "모든 서비스는 문의 내용을 확인한 뒤 개별 견적을 드립니다. 예약 확정 전에 비용과 가능한 일정을 투명하게 안내합니다.",
    tableService: "서비스",
    tableDuration: "소요 시간",
    tablePrice: "비용",
    footnote:
      "WhatsApp으로 상담 세부 사항을 합의한 뒤 결제를 확정합니다. 모든 감정은 서두르지 않고 해당 차트에 맞춰 직접 준비합니다.",
    plans: [
      {
        id: "consultation",
        name: "개인 상담",
        price: "문의 후 안내",
        priceNote: "개별 견적",
        duration: "3~4주",
        description:
          "직업, 관계, 건강이나 삶의 방향에 관한 질문을 다루는 일대일 실시간 베다 점성술 상담입니다.",
        featured: true,
      },
      {
        id: "written",
        name: "서면 출생 차트 감정",
        price: "문의 후 안내",
        priceNote: "개별 견적",
        duration: "3~4주",
        description:
          "자신의 속도로 읽고 생각할 수 있도록 비공개로 전달하는 정성스러운 서면 감정입니다.",
        featured: false,
      },
      {
        id: "compatibility",
        name: "인연·궁합 감정",
        price: "문의 후 안내",
        priceNote: "개별 견적",
        duration: "3~4주",
        description:
          "두 차트의 궁합과 약속, 동반자 관계 또는 재결합 시기에 관한 안내입니다.",
        featured: false,
      },
      {
        id: "rectification",
        name: "출생 시각 보정",
        price: "문의 후 안내",
        priceNote: "개별 견적",
        duration: "3~4주",
        description:
          "출생 시각이 불확실할 때 주요 삶의 사건을 이용해 신뢰할 수 있는 차트를 찾는 체계적인 보정입니다.",
        featured: false,
      },
    ],
  },
  process: {
    sectionLabel: "진행 방법",
    steps: [
      "아래 양식에 선호하는 연락처와 함께 문의를 보내 주세요.",
      "WhatsApp으로 상담 주제를 확인하고 출생 정보(날짜·시각·장소)를 받습니다.",
      "시간대와 사생활을 고려해 상담 일정을 정합니다.",
      "상담 후 원하시면 후속 메모나 짧은 추가 상담을 마련할 수 있습니다.",
    ],
  },
  instagram: {
    badge: "매일 무료로 만나는 지혜",
    title: "Instagram에서 팔로우하세요",
    handle: "@jyotishlife.jp",
    body:
      "매일 조티시 통찰, 차트 팁, 트랜싯 알림과 처방을 받아 보세요. 상담을 예약하기 전에 성장하는 커뮤니티에 함께해 주세요.",
    cta: "Instagram 팔로우",
    perks: ["매일 차트 팁", "트랜싯·무후르타", "처방·질의응답"],
  },
  form: {
    sectionLabel: "문의 시작",
    title: "개인 상담 신청",
    description:
      "아래에 간단한 정보를 남겨 주세요. 보통 영업일 기준 2~3일 안에 직접 답변드리고 WhatsApp으로 편한 상담 시간을 조율합니다.",
    fullName: "이름",
    email: "이메일 주소",
    whatsApp: "WhatsApp 번호",
    whatsAppHint:
      "국가 코드를 포함해 주세요. 지역에 따라 코드가 미리 선택되어 있습니다. 일정 조율은 주로 WhatsApp으로 진행합니다.",
    message: "상담 분야",
    messageOptional: "(선택 사항)",
    fullNamePlaceholder: "상담 시 불러 드릴 이름",
    emailPlaceholder: "you@example.com",
    phonePlaceholder: "맨 앞의 0을 뺀 지역 번호",
    messagePlaceholder:
      "직업 전환, 관계에 대한 명료함, 중요한 결정의 시기, 불확실한 출생 시각…",
    submit: "상담 신청 보내기",
    submitting: "문의를 보내는 중…",
    dialCodeLabel: "국가 전화 코드",
  },
};

export const appraisalContent: Record<AppraisalLanguage, AppraisalPageContent> = {
  en,
  hi,
  ja,
  ko,
};

export function getAppraisalContent(lang: AppraisalLanguage): AppraisalPageContent {
  return appraisalContent[lang];
}
