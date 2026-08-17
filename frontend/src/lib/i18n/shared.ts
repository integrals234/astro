import type { AppLanguage } from "./language";

export interface SharedCopy {
  metadata: { title: string; description: string };
  navigation: {
    home: string;
    homeDescription: string;
    learn: string;
    learnDescription: string;
    horoscope: string;
    horoscopeDescription: string;
    chart: string;
    chartDescription: string;
    appraisals: string;
    appraisalsDescription: string;
    course: string;
    courseDescription: string;
    blogs: string;
    blogsDescription: string;
    settings: string;
    settingsDescription: string;
  };
  chrome: {
    signIn: string;
    account: string;
    signedIn: string;
    openNavigation: string;
    closeNavigation: string;
    closeMenu: string;
    brandHome: string;
  };
  blogs: {
    eyebrow: string;
    title: string;
    description: string;
    empty: string;
  };
  premium: {
    eyebrow: string;
    title: string;
    description: string;
    waitlist: string;
    heading: string;
    perks: string[];
    join: string;
    back: string;
  };
  auth: {
    signInDescription: string;
    signUpDescription: string;
  };
  footer: {
    contentHeading: string;
    legalHeading: string;
    followHeading: string;
    languageHeading: string;
    instagram: string;
    disclaimer: string;
    rights: string;
  };
}

export const sharedCopy: Record<AppLanguage, SharedCopy> = {
  en: {
    metadata: {
      title: "Jyotish Life — Free Vedic Astrology Birth Chart & Horoscope",
      description: "Generate a free Vedic astrology birth chart (kundli), horoscope, dasha timeline, and compatibility check — precise sidereal calculations, explained in plain language.",
    },
    navigation: {
      home: "Home",
      homeDescription: "Welcome to Jyotish Life",
      learn: "Learn Jyotish",
      learnDescription: "Vedic astrology learning hub",
      horoscope: "Horoscope",
      horoscopeDescription: "Live Vedic horoscope forecasts",
      chart: "Chart",
      chartDescription: "Generate and explore charts",
      appraisals: "Personal Appraisals",
      appraisalsDescription: "Private Vedic astrology consultations",
      course: "Vedic Course",
      courseDescription: "Vedic astrology mini-course in four languages",
      blogs: "Blogs",
      blogsDescription: "Articles and reflections",
      settings: "Settings",
      settingsDescription: "Account and preferences",
    },
    chrome: {
      signIn: "Sign in",
      account: "Account",
      signedIn: "Signed in",
      openNavigation: "Open navigation menu",
      closeNavigation: "Close navigation menu",
      closeMenu: "Close menu",
      brandHome: "Jyotish Life home",
    },
    blogs: {
      eyebrow: "Journal",
      title: "Blogs",
      description: "Articles, reflections, and updates from our Jyotish practice.",
      empty: "No blogs to show for now",
    },
    premium: {
      eyebrow: "Membership",
      title: "Premium",
      description: "Advanced astrology tools and subscriptions — coming soon to your workspace.",
      waitlist: "Early access waitlist",
      heading: "Unlock the full professional suite",
      perks: [
        "Unlimited saved charts",
        "Deep dasha trees (4 levels)",
        "Priority ephemeris compute",
        "Custom PDF branding",
        "Shareable chart links",
      ],
      join: "Join waitlist",
      back: "← Back to dashboard",
    },
    auth: {
      signInDescription: "Sign in to access your dashboard and premium features",
      signUpDescription: "Create an account to save charts and unlock premium tools",
    },
    footer: {
      contentHeading: "Explore",
      legalHeading: "Legal",
      followHeading: "Follow",
      languageHeading: "Language",
      instagram: "Instagram",
      disclaimer:
        "Jyotish Life is offered for entertainment and self-understanding. Readings are not guaranteed, and are not medical, legal, or financial advice.",
      rights: "All rights reserved.",
    },
  },
  hi: {
    metadata: {
      title: "Jyotish Life — निःशुल्क वैदिक ज्योतिष कुंडली और होरोस्कोप",
      description: "जन्म तिथि से निःशुल्क कुंडली (जन्म कुंडली), होरोस्कोप, दशा और अनुकूलता जाँच बनाएं — सटीक निरयण गणना, सरल भाषा में समझाई गई।",
    },
    navigation: {
      home: "मुखपृष्ठ",
      homeDescription: "ज्योतिष लाइफ़ में आपका स्वागत है",
      learn: "ज्योतिष सीखें",
      learnDescription: "वैदिक ज्योतिष अध्ययन केंद्र",
      horoscope: "राशिफल",
      horoscopeDescription: "नवीनतम वैदिक राशिफल पूर्वानुमान",
      chart: "कुंडली",
      chartDescription: "कुंडलियाँ बनाएँ और देखें",
      appraisals: "व्यक्तिगत परामर्श",
      appraisalsDescription: "निजी वैदिक ज्योतिष परामर्श",
      course: "वैदिक पाठ्यक्रम",
      courseDescription: "चार भाषाओं में वैदिक ज्योतिष लघु पाठ्यक्रम",
      blogs: "लेख",
      blogsDescription: "लेख और विचार",
      settings: "सेटिंग्स",
      settingsDescription: "खाता और प्राथमिकताएँ",
    },
    chrome: {
      signIn: "साइन इन करें",
      account: "खाता",
      signedIn: "साइन इन हैं",
      openNavigation: "नेविगेशन मेनू खोलें",
      closeNavigation: "नेविगेशन मेनू बंद करें",
      closeMenu: "मेनू बंद करें",
      brandHome: "ज्योतिष लाइफ़ मुखपृष्ठ",
    },
    blogs: {
      eyebrow: "पत्रिका",
      title: "लेख",
      description: "हमारे ज्योतिष अभ्यास से लेख, विचार और नवीनतम जानकारी।",
      empty: "फ़िलहाल दिखाने के लिए कोई लेख नहीं है",
    },
    premium: {
      eyebrow: "सदस्यता",
      title: "प्रीमियम",
      description: "उन्नत ज्योतिष उपकरण और सदस्यताएँ — जल्द ही आपके कार्यक्षेत्र में।",
      waitlist: "प्रारंभिक पहुँच प्रतीक्षा सूची",
      heading: "संपूर्ण पेशेवर सुविधा समूह पाएँ",
      perks: [
        "असीमित सहेजी गई कुंडलियाँ",
        "विस्तृत दशा वृक्ष (4 स्तर)",
        "प्राथमिकता वाली पंचांग गणना",
        "मनचाही PDF ब्रांडिंग",
        "साझा करने योग्य कुंडली लिंक",
      ],
      join: "प्रतीक्षा सूची में शामिल हों",
      back: "← डैशबोर्ड पर वापस जाएँ",
    },
    auth: {
      signInDescription: "अपने डैशबोर्ड और प्रीमियम सुविधाओं के लिए साइन इन करें",
      signUpDescription: "कुंडलियाँ सहेजने और प्रीमियम उपकरण पाने के लिए खाता बनाएँ",
    },
    footer: {
      contentHeading: "सामग्री",
      legalHeading: "कानूनी",
      followHeading: "फ़ॉलो करें",
      languageHeading: "भाषा",
      instagram: "इंस्टाग्राम",
      disclaimer:
        "ज्योतिष लाइफ़ मनोरंजन और आत्म-बोध के उद्देश्य से प्रस्तुत है। परिणामों की गारंटी नहीं है, और यह चिकित्सा, कानूनी या वित्तीय सलाह नहीं है।",
      rights: "सर्वाधिकार सुरक्षित।",
    },
  },
  ja: {
    metadata: {
      title: "インド占星術で出生図・ホロスコープを無料作成｜Jyotish Life",
      description: "生年月日から出生図・ホロスコープを無料作成。ダシャー、ナクシャトラ、相性診断まで、正確なスイス天体暦によるインド占星術（ヴェーダ占星術）ツール。",
    },
    navigation: {
      home: "ホーム",
      homeDescription: "Jyotish Lifeへようこそ",
      learn: "ジョーティッシュを学ぶ",
      learnDescription: "ヴェーダ占星術の学習ハブ",
      horoscope: "ホロスコープ",
      horoscopeDescription: "最新のヴェーダ占星術予報",
      chart: "チャート",
      chartDescription: "チャートを作成・閲覧",
      appraisals: "個人鑑定",
      appraisalsDescription: "ヴェーダ占星術の個人相談",
      course: "ヴェーダ占星術コース",
      courseDescription: "4言語対応のヴェーダ占星術ミニコース",
      blogs: "ブログ",
      blogsDescription: "記事と考察",
      settings: "設定",
      settingsDescription: "アカウントと環境設定",
    },
    chrome: {
      signIn: "サインイン",
      account: "アカウント",
      signedIn: "サインイン済み",
      openNavigation: "ナビゲーションメニューを開く",
      closeNavigation: "ナビゲーションメニューを閉じる",
      closeMenu: "メニューを閉じる",
      brandHome: "Jyotish Life ホーム",
    },
    blogs: {
      eyebrow: "ジャーナル",
      title: "ブログ",
      description: "ジョーティッシュの実践から生まれた記事、考察、最新情報。",
      empty: "現在表示できるブログはありません",
    },
    premium: {
      eyebrow: "メンバーシップ",
      title: "プレミアム",
      description: "高度な占星術ツールとサブスクリプションを近日提供予定です。",
      waitlist: "先行アクセス待機リスト",
      heading: "プロフェッショナル機能をすべて利用",
      perks: [
        "保存チャート数無制限",
        "詳細なダシャーツリー（4階層）",
        "優先エフェメリス計算",
        "PDFのカスタムブランド",
        "共有可能なチャートリンク",
      ],
      join: "待機リストに登録",
      back: "← ダッシュボードに戻る",
    },
    auth: {
      signInDescription: "ダッシュボードとプレミアム機能を利用するにはサインインしてください",
      signUpDescription: "チャートの保存とプレミアムツールの利用にはアカウントを作成してください",
    },
    footer: {
      contentHeading: "コンテンツ",
      legalHeading: "規約・情報",
      followHeading: "フォロー",
      languageHeading: "言語",
      instagram: "Instagram",
      disclaimer:
        "本サービスは娯楽および自己理解を目的としています。鑑定結果を保証するものではなく、医療・法律・財務に関する助言ではありません。",
      rights: "All rights reserved.",
    },
  },
  ko: {
    metadata: {
      title: "베다 점성술 무료 출생 차트·호로스코프 | Jyotish Life",
      description: "생년월일로 무료 출생 차트(쿤달리)와 호로스코프를 작성하세요. 다샤, 낙샤트라, 궁합 확인까지 — 정밀한 항성 계산을 쉬운 말로.",
    },
    navigation: {
      home: "홈",
      homeDescription: "Jyotish Life에 오신 것을 환영합니다",
      learn: "조티시 배우기",
      learnDescription: "베다 점성술 학습 허브",
      horoscope: "운세",
      horoscopeDescription: "최신 베다 점성술 예보",
      chart: "차트",
      chartDescription: "차트 생성 및 탐색",
      appraisals: "개인 상담",
      appraisalsDescription: "비공개 베다 점성술 상담",
      course: "베다 점성술 강좌",
      courseDescription: "4개 언어로 제공되는 베다 점성술 미니 강좌",
      blogs: "블로그",
      blogsDescription: "글과 성찰",
      settings: "설정",
      settingsDescription: "계정 및 환경설정",
    },
    chrome: {
      signIn: "로그인",
      account: "계정",
      signedIn: "로그인됨",
      openNavigation: "탐색 메뉴 열기",
      closeNavigation: "탐색 메뉴 닫기",
      closeMenu: "메뉴 닫기",
      brandHome: "Jyotish Life 홈",
    },
    blogs: {
      eyebrow: "저널",
      title: "블로그",
      description: "조티시 실천에 관한 글, 성찰 및 소식입니다.",
      empty: "현재 표시할 블로그가 없습니다",
    },
    premium: {
      eyebrow: "멤버십",
      title: "프리미엄",
      description: "고급 점성술 도구와 구독 기능이 곧 작업 공간에 제공됩니다.",
      waitlist: "얼리 액세스 대기 명단",
      heading: "모든 전문가용 기능 사용하기",
      perks: [
        "저장 차트 무제한",
        "심층 다샤 트리(4단계)",
        "우선 천체력 계산",
        "맞춤 PDF 브랜딩",
        "공유 가능한 차트 링크",
      ],
      join: "대기 명단 등록",
      back: "← 대시보드로 돌아가기",
    },
    auth: {
      signInDescription: "대시보드와 프리미엄 기능을 이용하려면 로그인하세요",
      signUpDescription: "차트를 저장하고 프리미엄 도구를 사용하려면 계정을 만드세요",
    },
    footer: {
      contentHeading: "콘텐츠",
      legalHeading: "약관·정보",
      followHeading: "팔로우",
      languageHeading: "언어",
      instagram: "인스타그램",
      disclaimer:
        "본 서비스는 오락 및 자기 이해를 목적으로 합니다. 결과를 보장하지 않으며, 의료·법률·재무 조언이 아닙니다.",
      rights: "All rights reserved.",
    },
  },
};

export function getSharedCopy(language: AppLanguage): SharedCopy {
  return sharedCopy[language] ?? sharedCopy.en;
}
