import type { AppLanguage } from "./language";

export interface SettingsCopy {
  header: { eyebrow: string; title: string; description: string };
  account: {
    title: string;
    loading: string;
    signedOut: string;
    signIn: string;
    name: string;
    email: string;
    memberSince: string;
  };
  language: {
    title: string;
    description: string;
    signedIn: string;
    signedOut: string;
  };
  appearance: {
    title: string;
    description: string;
    light: string;
    dark: string;
    system: string;
    currentlyUsing: string;
  };
  workspace: {
    title: string;
    transitAlerts: string;
    transitDescription: string;
    privateCharts: string;
    privateDescription: string;
  };
  subscription: {
    title: string;
    prefix: string;
    free: string;
    suffix: string;
    viewPlans: string;
  };
}

export const settingsCopy: Record<AppLanguage, SettingsCopy> = {
  en: {
    header: {
      eyebrow: "Preferences",
      title: "Settings",
      description: "Manage your account, workspace defaults, and notification preferences.",
    },
    account: {
      title: "Account",
      loading: "Loading profile…",
      signedOut: "Sign in to view your account details and sync preferences across devices.",
      signIn: "Sign in",
      name: "Name",
      email: "Email",
      memberSince: "Member since",
    },
    language: {
      title: "Language",
      description: "Choose the language used by Jyotish Life.",
      signedIn: "This choice syncs across your signed-in devices.",
      signedOut: "This choice is saved in this browser. Sign in to sync it across devices.",
    },
    appearance: {
      title: "Appearance",
      description: "Choose light, dark, or match your device setting.",
      light: "Light",
      dark: "Dark",
      system: "System",
      currentlyUsing: "Currently using",
    },
    workspace: {
      title: "Workspace",
      transitAlerts: "Transit alerts",
      transitDescription: "Email when Saturn changes house",
      privateCharts: "Private charts",
      privateDescription: "Only you can open saved charts",
    },
    subscription: {
      title: "Subscription",
      prefix: "You are on the",
      free: "Free",
      suffix: "plan. Premium modules unlock in the Vedic Course.",
      viewPlans: "View plans",
    },
  },
  hi: {
    header: {
      eyebrow: "प्राथमिकताएँ",
      title: "सेटिंग्स",
      description: "अपना खाता, कार्यक्षेत्र डिफ़ॉल्ट और सूचना प्राथमिकताएँ प्रबंधित करें।",
    },
    account: {
      title: "खाता",
      loading: "प्रोफ़ाइल लोड हो रही है…",
      signedOut: "खाता विवरण देखने और सभी डिवाइस पर प्राथमिकताएँ सिंक करने के लिए साइन इन करें।",
      signIn: "साइन इन करें",
      name: "नाम",
      email: "ईमेल",
      memberSince: "सदस्यता की तारीख",
    },
    language: {
      title: "भाषा",
      description: "Jyotish Life में उपयोग की जाने वाली भाषा चुनें।",
      signedIn: "यह चुनाव आपके साइन-इन किए गए सभी डिवाइस पर सिंक होता है।",
      signedOut: "यह चुनाव इस ब्राउज़र में सहेजा जाता है। सभी डिवाइस पर सिंक करने के लिए साइन इन करें।",
    },
    appearance: {
      title: "रूप-रंग",
      description: "लाइट, डार्क या अपने डिवाइस की सेटिंग चुनें।",
      light: "लाइट",
      dark: "डार्क",
      system: "सिस्टम",
      currentlyUsing: "अभी उपयोग में",
    },
    workspace: {
      title: "कार्यक्षेत्र",
      transitAlerts: "गोचर सूचनाएँ",
      transitDescription: "शनि के भाव बदलने पर ईमेल",
      privateCharts: "निजी चार्ट",
      privateDescription: "केवल आप सहेजे गए चार्ट खोल सकते हैं",
    },
    subscription: {
      title: "सदस्यता",
      prefix: "आप",
      free: "मुफ़्त",
      suffix: "योजना पर हैं। वैदिक कोर्स में प्रीमियम मॉड्यूल उपलब्ध होते हैं।",
      viewPlans: "योजनाएँ देखें",
    },
  },
  ja: {
    header: {
      eyebrow: "環境設定",
      title: "設定",
      description: "アカウント、ワークスペースの初期値、通知設定を管理します。",
    },
    account: {
      title: "アカウント",
      loading: "プロフィールを読み込み中…",
      signedOut: "アカウント情報の表示と端末間の設定同期にはサインインしてください。",
      signIn: "サインイン",
      name: "名前",
      email: "メール",
      memberSince: "登録日",
    },
    language: {
      title: "言語",
      description: "Jyotish Lifeで使用する言語を選択します。",
      signedIn: "この選択はサインイン中の端末間で同期されます。",
      signedOut: "この選択はこのブラウザに保存されます。端末間の同期にはサインインしてください。",
    },
    appearance: {
      title: "外観",
      description: "ライト、ダーク、または端末の設定に合わせます。",
      light: "ライト",
      dark: "ダーク",
      system: "システム",
      currentlyUsing: "現在の表示",
    },
    workspace: {
      title: "ワークスペース",
      transitAlerts: "トランジット通知",
      transitDescription: "土星がハウスを移動したときにメール",
      privateCharts: "非公開チャート",
      privateDescription: "保存したチャートを開けるのは自分だけです",
    },
    subscription: {
      title: "サブスクリプション",
      prefix: "現在",
      free: "無料",
      suffix: "プランです。プレミアムモジュールはヴェーダ占星術コースで利用できます。",
      viewPlans: "プランを見る",
    },
  },
  ko: {
    header: {
      eyebrow: "환경설정",
      title: "설정",
      description: "계정, 작업 공간 기본값 및 알림 환경설정을 관리하세요.",
    },
    account: {
      title: "계정",
      loading: "프로필 불러오는 중…",
      signedOut: "계정 정보를 보고 기기 간 환경설정을 동기화하려면 로그인하세요.",
      signIn: "로그인",
      name: "이름",
      email: "이메일",
      memberSince: "가입일",
    },
    language: {
      title: "언어",
      description: "Jyotish Life에서 사용할 언어를 선택하세요.",
      signedIn: "이 선택은 로그인한 모든 기기에서 동기화됩니다.",
      signedOut: "이 선택은 이 브라우저에 저장됩니다. 기기 간 동기화하려면 로그인하세요.",
    },
    appearance: {
      title: "화면 모드",
      description: "라이트, 다크 또는 기기 설정에 맞추세요.",
      light: "라이트",
      dark: "다크",
      system: "시스템",
      currentlyUsing: "현재 사용",
    },
    workspace: {
      title: "작업 공간",
      transitAlerts: "트랜짓 알림",
      transitDescription: "토성이 하우스를 이동할 때 이메일 받기",
      privateCharts: "비공개 차트",
      privateDescription: "저장한 차트는 본인만 열 수 있습니다",
    },
    subscription: {
      title: "구독",
      prefix: "현재",
      free: "무료",
      suffix: "요금제를 사용 중입니다. 베다 점성술 코스에서 프리미엄 모듈을 이용할 수 있습니다.",
      viewPlans: "요금제 보기",
    },
  },
};
