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
    successMessage: string;
  };
  languageLabel: string;
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
      "Sessions in English, Hindi, and Japanese upon request",
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
          "Delivered as a private PDF within 3–5 business days",
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
        duration: "60 minutes",
        description:
          "A live, one-to-one Vedic Astrology session — your chart opened and interpreted with care, with space for your questions on career, relationships, health, or life direction.",
        featured: true,
      },
      {
        id: "written",
        name: "Written Natal Appraisal",
        price: "By inquiry",
        priceNote: "quoted individually",
        duration: "PDF · 3–5 days",
        description:
          "A composed written reading delivered privately — ideal if you prefer to reflect before scheduling a live conversation.",
        featured: false,
      },
      {
        id: "compatibility",
        name: "Union & Compatibility",
        price: "By inquiry",
        priceNote: "quoted individually",
        duration: "60–90 minutes",
        description:
          "Synastry between two charts with timing guidance for commitment, partnership, or reconciliation.",
        featured: false,
      },
      {
        id: "rectification",
        name: "Birth Time Refinement",
        price: "By inquiry",
        priceNote: "quoted individually",
        duration: "Varies",
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
  form: {
    sectionLabel: "Begin your inquiry",
    title: "Request a personal consultation",
    description:
      "Share a few details below. We respond personally — usually within one business day — and coordinate your session over WhatsApp at a time that suits you.",
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
    successMessage:
      "Thank you. Our astrologers will contact you via WhatsApp shortly.",
  },
  languageLabel: "Language",
};

const ja: AppraisalPageContent = {
  header: {
    eyebrow: "プライベート鑑定",
    title: "パーソナル鑑定",
    description:
      "急がず、静かに向き合いたい方のための、人の手によるヴェーダ占星術（ジョーティシュ）鑑定。丁寧に書き、慎重にお届けし、古典的なジョーティシュの伝統に根ざしています。",
  },
  intro: {
    heading: "今のあなたに寄り添う鑑定",
    body: "ホロスコープが語るのは、固定された運命ではなく、人生を通じて展開していく性質、時期、そして選択の物語です。私たちの占星術師は、精密さと温かさをもって読み解き、仕事、人間関係、生きる意味、そして口にしにくい問いに、実際に役立つ洞察をお届けします。",
    highlights: [
      "パーラーシャリーおよびジャイミニ系統の訓練を受けた鑑定士",
      "英語・ヒンディー語・日本語でのセッションに対応",
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
          "3〜5営業日以内にPDFで個別お届け",
        ],
        note: "ライブセッションの前に、ご自身のペースで熟考されたい方に最適です。",
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
          "大切な瞬間 — 結婚式、事業開始、引越し、医療 — において、あなたのチャートと意図に沿った吉時を見極めます。",
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
        duration: "60分",
        description:
          "一対一のライブ・ヴェーダ占星術セッション。キャリア、人間関係、健康、人生の方向性など、ご質問に丁寧にお答えします。",
        featured: true,
      },
      {
        id: "written",
        name: "書面による出生図鑑定",
        price: "お問い合わせ",
        priceNote: "個別お見積り",
        duration: "PDF · 3〜5日",
        description:
          "プライベートに届く書面鑑定 — ライブセッションの前にじっくりご検討されたい方に。",
        featured: false,
      },
      {
        id: "compatibility",
        name: "相性・パートナーシップ鑑定",
        price: "お問い合わせ",
        priceNote: "個別お見積り",
        duration: "60〜90分",
        description:
          "二人のチャート照合と、結婚・パートナーシップ・復縁のタイミングに関するガイダンス。",
        featured: false,
      },
      {
        id: "rectification",
        name: "出生時刻の精密化",
        price: "お問い合わせ",
        priceNote: "個別お見積り",
        duration: "個別",
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
  form: {
    sectionLabel: "お問い合わせ",
    title: "パーソナル鑑定のご依頼",
    description:
      "必要事項をご記入ください。通常1営業日以内に個別にご返信し、WhatsAppでご都合の良い日時を調整いたします。",
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
    successMessage:
      "ありがとうございます。占星術師よりWhatsAppで折り返しご連絡いたします。",
  },
  languageLabel: "言語",
};

export const appraisalContent: Record<AppraisalLanguage, AppraisalPageContent> = {
  en,
  ja,
};

export function getAppraisalContent(lang: AppraisalLanguage): AppraisalPageContent {
  return appraisalContent[lang];
}
