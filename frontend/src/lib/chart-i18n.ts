import type { AppLanguage } from "./i18n/language";

export interface ChartNavCopy {
  generate: string;
  saved: string;
  recent: string;
  generateDescription: string;
  savedDescription: string;
  recentDescription: string;
  sectionsAria: string;
}

export interface ChartCollectionCopy {
  libraryEyebrow: string;
  savedTitle: string;
  recentTitle: string;
  savedSubtitle: string;
  recentSubtitle: string;
  loading: string;
  emptySaved: string;
  emptyRecent: string;
  goToGenerator: string;
  previewLayout: string;
  openChart: string;
  deleteConfirm: string;
  deleteAria: string;
  sampleEntry: string;
  exampleChart: string;
  gwaliorIndia: string;
  delhiIndia: string;
}

export interface ChartLibraryPanelCopy {
  recentTitle: string;
  savedTitle: string;
  recentEmpty: string;
  savedEmpty: string;
  save: string;
  saved: string;
  deleteAria: string;
}

export interface ChartUiCopy {
  appTitle: string;
  nav: ChartNavCopy;
  collection: ChartCollectionCopy;
  libraryPanel: ChartLibraryPanelCopy;
}

export const chartUi: Record<AppLanguage, ChartUiCopy> = {
  en: {
    appTitle: "Generate Charts",
    nav: {
      generate: "Generate",
      saved: "Saved",
      recent: "Recent",
      generateDescription: "Create and explore charts",
      savedDescription: "Your bookmarked charts",
      recentDescription: "Last five generated charts",
      sectionsAria: "Chart sections",
    },
    collection: {
      libraryEyebrow: "Library",
      savedTitle: "Saved Charts",
      recentTitle: "Recent Charts",
      savedSubtitle: "Charts you have explicitly saved to your library.",
      recentSubtitle: "Your last five generated charts, kept for quick access.",
      loading: "Loading charts…",
      emptySaved: "No saved charts yet. Generate a chart and tap Save Chart.",
      emptyRecent: "No recent charts yet. Generate your first chart in the Chart tab.",
      goToGenerator: "Go to Chart Generator",
      previewLayout: "Preview layout",
      openChart: "Open chart",
      deleteConfirm: "Delete this chart?",
      deleteAria: "Delete chart",
      sampleEntry: "Sample entry", exampleChart: "Example Chart", gwaliorIndia: "Gwalior, India", delhiIndia: "Delhi, India",
    },
    libraryPanel: {
      recentTitle: "Recent Charts",
      savedTitle: "Saved Charts",
      recentEmpty: "Generate a chart to see your last 5 here.",
      savedEmpty: "Save a chart to keep it in your library.",
      save: "Save",
      saved: "Saved",
      deleteAria: "Delete chart",
    },
  },
  hi: {
    appTitle: "चार्ट बनाएं",
    nav: {
      generate: "बनाएं",
      saved: "सहेजे",
      recent: "हाल के",
      generateDescription: "चार्ट बनाएं और देखें",
      savedDescription: "आपके सहेजे गए चार्ट",
      recentDescription: "पिछले पाँच जनित चार्ट",
      sectionsAria: "कुण्डली अनुभाग",
    },
    collection: {
      libraryEyebrow: "लाइब्रेरी",
      savedTitle: "सहेजे गए चार्ट",
      recentTitle: "हाल के चार्ट",
      savedSubtitle: "चार्ट जिन्हें आपने स्पष्ट रूप से सहेजा है।",
      recentSubtitle: "त्वरित पहुँच के लिए आपके अंतिम पाँच जनित चार्ट।",
      loading: "चार्ट लोड हो रहे हैं…",
      emptySaved: "अभी कोई सहेजा चार्ट नहीं। चार्ट बनाएं और ‘चार्ट सहेजें’ दबाएं।",
      emptyRecent: "अभी कोई हाल का चार्ट नहीं। चार्ट टैब में अपना पहला चार्ट बनाएं।",
      goToGenerator: "चार्ट जनरेटर पर जाएं",
      previewLayout: "लेआउट पूर्वावलोकन",
      openChart: "चार्ट खोलें",
      deleteConfirm: "यह चार्ट हटाएं?",
      deleteAria: "चार्ट हटाएं",
      sampleEntry: "नमूना प्रविष्टि", exampleChart: "उदाहरण कुण्डली", gwaliorIndia: "ग्वालियर, भारत", delhiIndia: "दिल्ली, भारत",
    },
    libraryPanel: {
      recentTitle: "हाल के चार्ट",
      savedTitle: "सहेजे गए चार्ट",
      recentEmpty: "अपने अंतिम 5 चार्ट यहाँ देखने के लिए चार्ट बनाएं।",
      savedEmpty: "लाइब्रेरी में रखने के लिए चार्ट सहेजें।",
      save: "सहेजें",
      saved: "सहेजा",
      deleteAria: "चार्ट हटाएं",
    },
  },
  ja: {
    appTitle: "チャート作成",
    nav: {
      generate: "作成",
      saved: "保存",
      recent: "最近",
      generateDescription: "チャートを作成して閲覧",
      savedDescription: "保存したチャート",
      recentDescription: "最近作成した5件のチャート",
      sectionsAria: "チャートのセクション",
    },
    collection: {
      libraryEyebrow: "ライブラリ",
      savedTitle: "保存したチャート",
      recentTitle: "最近のチャート",
      savedSubtitle: "ライブラリに保存したチャート一覧です。",
      recentSubtitle: "最近作成した5件のチャートをすばやく開けます。",
      loading: "チャートを読み込み中…",
      emptySaved: "保存したチャートはまだありません。チャートを作成して「保存」をタップしてください。",
      emptyRecent: "最近のチャートはまだありません。チャートタブで最初のチャートを作成してください。",
      goToGenerator: "チャート作成へ",
      previewLayout: "レイアウトプレビュー",
      openChart: "チャートを開く",
      deleteConfirm: "このチャートを削除しますか？",
      deleteAria: "チャートを削除",
      sampleEntry: "サンプル", exampleChart: "チャート例", gwaliorIndia: "グワーリヤル（インド）", delhiIndia: "デリー（インド）",
    },
    libraryPanel: {
      recentTitle: "最近のチャート",
      savedTitle: "保存したチャート",
      recentEmpty: "チャートを作成すると、最近の5件がここに表示されます。",
      savedEmpty: "チャートを保存すると、ライブラリに残ります。",
      save: "保存",
      saved: "保存済み",
      deleteAria: "チャートを削除",
    },
  },
  ko: {
    appTitle: "차트 생성",
    nav: {
      generate: "생성",
      saved: "저장",
      recent: "최근",
      generateDescription: "차트 만들기 및 탐색",
      savedDescription: "저장한 차트",
      recentDescription: "최근 생성한 5개의 차트",
      sectionsAria: "차트 섹션",
    },
    collection: {
      libraryEyebrow: "라이브러리",
      savedTitle: "저장된 차트",
      recentTitle: "최근 차트",
      savedSubtitle: "라이브러리에 저장한 차트입니다.",
      recentSubtitle: "빠른 접근을 위해 최근 생성한 5개의 차트입니다.",
      loading: "차트 불러오는 중…",
      emptySaved: "저장된 차트가 없습니다. 차트를 생성한 뒤 저장하세요.",
      emptyRecent: "최근 차트가 없습니다. 차트 탭에서 첫 차트를 생성하세요.",
      goToGenerator: "차트 생성으로 이동",
      previewLayout: "레이아웃 미리보기",
      openChart: "차트 열기",
      deleteConfirm: "이 차트를 삭제할까요?",
      deleteAria: "차트 삭제",
      sampleEntry: "샘플 항목", exampleChart: "예시 차트", gwaliorIndia: "인도 괄리오르", delhiIndia: "인도 델리",
    },
    libraryPanel: {
      recentTitle: "최근 차트",
      savedTitle: "저장된 차트",
      recentEmpty: "차트를 생성하면 최근 5개가 여기에 표시됩니다.",
      savedEmpty: "차트를 저장하면 라이브러리에 보관됩니다.",
      save: "저장",
      saved: "저장됨",
      deleteAria: "차트 삭제",
    },
  },
};

export function getChartUi(lang: AppLanguage): ChartUiCopy {
  return chartUi[lang];
}

export function parseChartLang(value: string | null): AppLanguage {
  if (value === "en" || value === "hi" || value === "ja" || value === "ko") {
    return value;
  }
  return "ja";
}


/**
 * Chart workspace copy. Lifted out of ChartWorkspace.tsx so the lighter
 * birth-detail entry points — `BirthDetailsFields`, `ChartPreviewResult` —
 * can share the exact same labels without importing the 1,000-line
 * workspace, and so it stays inside a catalog path the localisation audit
 * already scans (scripts/audit-localization.mjs).
 */
export const chartFormCopy = {
  en: {
    birthCity: "Birth City", searchPlaceholder: "Search global cities...", searching: "Searching coordinates...", noLocations: "No locations found.",
    natalParams: "Natal Parameters", dob: "Date of Birth", tob: "Time of Birth", gocharOverlay: "Gochar Overlay (Transit)", transitDate: "Transit Date",
    generateBtn: "Generate Analysis", computingBtn: "Computing Ephemeris...", awaitingTitle: "Awaiting Parameters", awaitingDesc: "Search for a location using the command menu and generate to view your professional workspace.",
    timezone: "Timezone", sunrise: "Sunrise", sunset: "Sunset", absoluteLagna: "Absolute Lagna", exactLongitudes: "Exact Planetary Longitudes", transitCoords: "Transit Coordinates",
    dashaTimeline: "Vimshottari Timeline", dashaSub: "Maha • Antar • Pratyantar • Sookshma", lagnaBase: "Lagna Base", chandraBase: "Chandra Base", watermark: "vaibhav shukla",
    errNoLoc: "Please select a location.", errCalc: "Calculation Failed.", deleteConfirmAction: "Delete", cancel: "Cancel",
    personName: "Person's Name", personNamePlaceholder: "Full name", errNoName: "Please enter the person's name.",
    saveChart: "Save Chart", savedChart: "Saved", savingChart: "Saving…", downloadPdf: "Download PDF", subject: "Subject", signIn: "Sign in", chart: "Chart",
    saveError: "Could not update saved status.", deleteConfirm: "Delete this chart?", deleteError: "Could not delete chart.", pdfError: "Could not generate the PDF. Please try again.",
    inHouse: "in", locationDialog: "Location search", closeDialog: "Close location search", planetAt: "at", transitPlanet: "Transit", retrogradeLong: "Retrograde",
    tabs: { D1: "Lagna", D9: "Navmansha", Chalit: "Chalit", Chandra: "Chandra", Gochar: "Gochar", Details: "Details", Aspects: "Aspects", Dasha: "Dasha" },
    tabTitles: { D1: "Natal Chart (Lagna)", D9: "Navamasha Chart(D9)", Chalit: "Bhava Chalit", Chandra: "Moon Chart", Gochar: "Transit Overlay", Details: "Planetary Details", Aspects: "Vedic Aspects (Drishti)", Dasha: "Vimshottari Dasha" },
    planets: { Sun: "Sun", Moon: "Moon", Mars: "Mars", Mercury: "Mercury", Jupiter: "Jupiter", Venus: "Venus", Saturn: "Saturn", Rahu: "Rahu", Ketu: "Ketu", Ascendant: "Ascendant" },
    signs: { Aries: "Aries", Taurus: "Taurus", Gemini: "Gemini", Cancer: "Cancer", Leo: "Leo", Virgo: "Virgo", Libra: "Libra", Scorpio: "Scorpio", Sagittarius: "Sagittarius", Capricorn: "Capricorn", Aquarius: "Aquarius", Pisces: "Pisces" },
    ui: { textToggle: "Text", symbolToggle: "Symbols", transitBadge: "Transit Overlay", northStyle: "North Indian", southStyle: "South Indian", asc: "ASC", nakshatraLabel: "Nakshatra", house: "House", retrograde: "Ret.", pada: "Pada", lord: "Lord", aspects: "Aspects Houses", dignity: { Exalted: "Exalted", Debilitated: "Debilitated", "Own Sign": "Own Sign", Neutral: "Neutral" } },
    nakshatras: { Ashwini: "Ashwini", Bharani: "Bharani", Krittika: "Krittika", Rohini: "Rohini", Mrigashira: "Mrigashira", Ardra: "Ardra", Punarvasu: "Punarvasu", Pushya: "Pushya", Ashlesha: "Ashlesha", Magha: "Magha", "Purva Phalguni": "Purva Phalguni", "Uttara Phalguni": "Uttara Phalguni", Hasta: "Hasta", Chitra: "Chitra", Swati: "Swati", Vishakha: "Vishakha", Anuradha: "Anuradha", Jyeshtha: "Jyeshtha", Mula: "Mula", "Purva Ashadha": "Purva Ashadha", "Uttara Ashadha": "Uttara Ashadha", Shravana: "Shravana", Dhanishta: "Dhanishta", Shatabhisha: "Shatabhisha", "Purva Bhadrapada": "Purva Bhadrapada", "Uttara Bhadrapada": "Uttara Bhadrapada", Revati: "Revati" }
  },
  
  hi: {
    birthCity: "जन्म स्थान", searchPlaceholder: "शहर खोजें...", searching: "निर्देशांक खोजे जा रहे हैं...", noLocations: "कोई स्थान नहीं मिला।",
    natalParams: "जन्म विवरण", dob: "जन्म तिथि", tob: "जन्म समय", gocharOverlay: "गोचर (Transit)", transitDate: "गोचर तिथि",
    generateBtn: "कुण्डली बनाएं", computingBtn: "गणना हो रही है...", awaitingTitle: "जानकारी की प्रतीक्षा", awaitingDesc: "अपना जन्म स्थान खोजें और कुण्डली बनाएं।",
    timezone: "समय क्षेत्र", sunrise: "सूर्योदय", sunset: "सूर्यास्त", absoluteLagna: "स्पष्ट लग्न", exactLongitudes: "स्पष्ट ग्रह स्थिति", transitCoords: "गोचर निर्देशांक",
    dashaTimeline: "विंशोत्तरी दशा", dashaSub: "महा • अंतर • प्रत्यंतर • सूक्ष्म", lagnaBase: "लग्न आधार", chandraBase: "चन्द्र आधार", watermark: "वैभव शुक्ला",
    errNoLoc: "कृपया एक स्थान चुनें।", errCalc: "गणना विफल रही।", deleteConfirmAction: "हटाएँ", cancel: "रद्द करें",
    personName: "व्यक्ति का नाम", personNamePlaceholder: "पूरा नाम", errNoName: "कृपया व्यक्ति का नाम दर्ज करें।",
    saveChart: "चार्ट सहेजें", savedChart: "सहेजा गया", savingChart: "सहेजा जा रहा है…", downloadPdf: "PDF डाउनलोड करें", subject: "व्यक्ति", signIn: "साइन इन करें", chart: "चार्ट",
    saveError: "सहेजने की स्थिति बदली नहीं जा सकी।", deleteConfirm: "क्या यह चार्ट हटाना है?", deleteError: "चार्ट हटाया नहीं जा सका।", pdfError: "PDF नहीं बन सका। कृपया फिर प्रयास करें।",
    inHouse: "भाव", locationDialog: "स्थान खोज", closeDialog: "स्थान खोज बंद करें", planetAt: "स्थिति", transitPlanet: "गोचर", retrogradeLong: "वक्री",
    tabs: { D1: "लग्न", D9: "नवमांश", Chalit: "चलित", Chandra: "चंद्र", Gochar: "गोचर", Details: "विवरण", Aspects: "दृष्टि", Dasha: "दशा" },
    tabTitles: { D1: "जन्म कुण्डली (लग्न)", D9: "नवमांश कुण्डली", Chalit: "चलित कुण्डली", Chandra: "चंद्र कुण्डली", Gochar: "गोचर कुण्डली", Details: "ग्रह विवरण", Aspects: "वैदिक दृष्टि (Drishti)", Dasha: "विंशोत्तरी दशा" },
    planets: { Sun: "सूर्य", Moon: "चंद्र", Mars: "मंगल", Mercury: "बुध", Jupiter: "गुरु", Venus: "शुक्र", Saturn: " शनि", Rahu: "राहु", Ketu: "केतु", Ascendant: "लग्न" },
    signs: { Aries: "मेष", Taurus: "वृषभ", Gemini: "मिथुन", Cancer: "कर्क", Leo: "सिंह", Virgo: "कन्या", Libra: "तुला", Scorpio: "वृश्चिक", Sagittarius: "धनु", Capricorn: "मकर", Aquarius: "कुंभ", Pisces: "मीन" },
    ui: { textToggle: "पाठ", symbolToggle: "प्रतीक", transitBadge: "गोचर", northStyle: "उत्तर भारतीय", southStyle: "दक्षिण भारतीय", asc: "ल", nakshatraLabel: "नक्षत्र", house: "भाव", retrograde: "वक्री", pada: "पद", lord: "स्वामी", aspects: "दृष्टि भाव", dignity: { Exalted: "उच्च", Debilitated: "नीच", "Own Sign": "स्वराशि", Neutral: "सम" } },
    nakshatras: { Ashwini: "अश्विनी", Bharani: "भरणी", Krittika: "कृत्तिका", Rohini: "रोहिणी", Mrigashira: "मृगशिरा", Ardra: "आर्द्रा", Punarvasu: "पुनर्वसु", Pushya: "पुष्य", Ashlesha: "आश्लेषा", Magha: "मघा", "Purva Phalguni": "पूर्वाफाल्गुनी", "Uttara Phalguni": "उत्तराफाल्गुनी", Hasta: "हस्त", Chitra: "चित्रा", Swati: "स्वाती", Vishakha: "विशाखा", Anuradha: "अनुराधा", Jyeshtha: "ज्येष्ठा", Mula: "मूल", "Purva Ashadha": "पूर्वाषाढा", "Uttara Ashadha": "उत्तराषाढा", Shravana: "श्रवण", Dhanishta: "धनिष्ठा", Shatabhisha: "शतभिषा", "Purva Bhadrapada": "पूर्वाभाद्रपद", "Uttara Bhadrapada": "उत्तराभाद्रपद", Revati: "रेवती" }
  },

  ja: {
    birthCity: "出生地", searchPlaceholder: "世界の都市を検索…", searching: "位置情報を検索中…", noLocations: "該当する場所が見つかりません。",
    natalParams: "出生情報", dob: "生年月日", tob: "出生時刻", gocharOverlay: "ゴーチャラ（トランジット）", transitDate: "トランジット基準日",
    generateBtn: "チャートを作成", computingBtn: "天体位置を計算中…", awaitingTitle: "出生情報を入力してください", awaitingDesc: "出生地を検索し、出生情報を入力してチャートを作成してください。",
    timezone: "タイムゾーン", sunrise: "日の出", sunset: "日の入り", absoluteLagna: "アセンダント", exactLongitudes: "惑星の正確な位置", transitCoords: "トランジット座標",
    dashaTimeline: "ヴィムショッタリ・ダシャー", dashaSub: "マハー • アンタル • プラティヤンタル • スークシュマ", lagnaBase: "ラグナ基準", chandraBase: "チャンドラ基準", watermark: "ヴァイバヴ・シュクラ",
    errNoLoc: "場所を選択してください。", errCalc: "計算に失敗しました。", deleteConfirmAction: "削除", cancel: "キャンセル",
    personName: "お名前", personNamePlaceholder: "お名前", errNoName: "お名前を入力してください。",
    saveChart: "チャートを保存", savedChart: "保存済み", savingChart: "保存中…", downloadPdf: "PDFをダウンロード", subject: "対象者", signIn: "ログイン", chart: "チャート",
    saveError: "保存状態を更新できませんでした。", deleteConfirm: "このチャートを削除しますか？", deleteError: "チャートを削除できませんでした。", pdfError: "PDFを作成できませんでした。もう一度お試しください。",
    inHouse: "在室", locationDialog: "出生地を検索", closeDialog: "出生地検索を閉じる", planetAt: "位置", transitPlanet: "トランジット", retrogradeLong: "逆行",
    tabs: { D1: "ラグナ", D9: "チャート", Chalit: "チャリット", Chandra: "チャンドラ", Gochar: "トランジット", Details: "詳細", Aspects: "アスペクト", Dasha: "ダシャー" },
    tabTitles: { D1: "ネイタルチャート (ラグナ)", D9: "D9 チャート", Chalit: "チャリットチャート", Chandra: "チャンドラチャート", Gochar: "トランジットチャート", Details: "惑星の詳細", Aspects: "ヴェーダのアスペクト (Drishti)", Dasha: "ヴィムショッタリ・ダシャー" },
    planets: { Sun: "太陽", Moon: "月", Mars: "火星", Mercury: "水星", Jupiter: "木星", Venus: "金星", Saturn: "土星", Rahu: "ラーフ", Ketu: "ケトゥ", Ascendant: "アセンダント" },
    signs: { Aries: "牡羊座", Taurus: "牡牛座", Gemini: "双子座", Cancer: "蟹座", Leo: "獅子座", Virgo: "乙女座", Libra: "天秤座", Scorpio: "蠍座", Sagittarius: "射手座", Capricorn: "山羊座", Aquarius: "水瓶座", Pisces: "魚座" },
    ui: { textToggle: "テキスト", symbolToggle: "記号", transitBadge: "トランジット", northStyle: "北インド式", southStyle: "南インド式", asc: "ASC", nakshatraLabel: "ナクシャトラ", house: "室", retrograde: "逆行", pada: "パダ", lord: "支配星", aspects: "アスペクトのハウス", dignity: { Exalted: "高揚", Debilitated: "減衰", "Own Sign": "本来の座", Neutral: "中立" } },
    nakshatras: { Ashwini: "アシュヴィニー", Bharani: "バラニー", Krittika: "クリッティカー", Rohini: "ローヒニー", Mrigashira: "ムリガシラー", Ardra: "アールドラー", Punarvasu: "プナルヴァス", Pushya: "プシャ", Ashlesha: "アーシュレーシャー", Magha: "マガー", "Purva Phalguni": "プールヴァ・ファルグニー", "Uttara Phalguni": "ウッタラ・ファルグニー", Hasta: "ハスタ", Chitra: "チトラー", Swati: "スヴァーティー", Vishakha: "ヴィシャーカ", Anuradha: "アヌラーダー", Jyeshtha: "ジェーシュター", Mula: "ムーラ", "Purva Ashadha": "プールヴァーシャーダー", "Uttara Ashadha": "ウッタラーシャーダー", Shravana: "シュラヴァナ", Dhanishta: "ダニシュター", Shatabhisha: "シャタビシャー", "Purva Bhadrapada": "プールヴァ・バードラパダー", "Uttara Bhadrapada": "ウッタラ・バードラパダー", Revati: "レーヴァティー" }
  },

  ko: {
    birthCity: "출생지", searchPlaceholder: "도시 검색...", searching: "좌표 검색 중...", noLocations: "위치를 찾을 수 없습니다.",
    natalParams: "출생 데이터", dob: "생년월일", tob: "태어난 시간", gocharOverlay: "트랜짓 (Gochar)", transitDate: "트랜짓 날짜",
    generateBtn: "차트 생성", computingBtn: "계산 중...", awaitingTitle: "매개변수 대기 중", awaitingDesc: "위치를 검색하고 생성하여 전문 작업 공간을 확인하세요.",
    timezone: "시간대", sunrise: "일출", sunset: "일몰", absoluteLagna: "어센던트 (Lagna)", exactLongitudes: "정확한 행성 위치", transitCoords: "트랜짓 좌표",
    dashaTimeline: "빔쇼타리 다샤", dashaSub: "마하 • 안타르 • 프라티얀타르 • 수크슈마", lagnaBase: "라그나 기준", chandraBase: "찬드라 기준", watermark: "바이바브 슈클라",
    errNoLoc: "위치를 선택해 주세요.", errCalc: "계산에 실패했습니다.", deleteConfirmAction: "삭제", cancel: "취소",
    personName: "이름", personNamePlaceholder: "이름", errNoName: "이름을 입력해 주세요.",
    saveChart: "차트 저장", savedChart: "저장됨", savingChart: "저장 중…", downloadPdf: "PDF 다운로드", subject: "대상자", signIn: "로그인", chart: "차트",
    saveError: "저장 상태를 변경하지 못했습니다.", deleteConfirm: "이 차트를 삭제할까요?", deleteError: "차트를 삭제하지 못했습니다.", pdfError: "PDF를 만들지 못했습니다. 다시 시도해 주세요.",
    inHouse: "하우스", locationDialog: "출생지 검색", closeDialog: "출생지 검색 닫기", planetAt: "위치", transitPlanet: "트랜짓", retrogradeLong: "역행",
    tabs: { D1: "네이탈 차트", D9: "차트", Chalit: "찰리트", Chandra: "찬드라", Gochar: "트랜짓", Details: "세부 정보", Aspects: "애스펙트", Dasha: "다샤" },
    tabTitles: { D1: "네이탈 차트 (Lagna)", D9: "D9 차트", Chalit: "찰리트 차트", Chandra: "찬드라 차트", Gochar: "트랜짓 차트", Details: "행성 세부 정보", Aspects: "베다 애스펙트 (Drishti)", Dasha: "빔쇼타리 다샤" },
    planets: { Sun: "태양", Moon: "달", Mars: "화성", Mercury: "수성", Jupiter: "목성", Venus: "금성", Saturn: "토성", Rahu: "라후", Ketu: "케투", Ascendant: "어센던트" },
    signs: { Aries: "양자리", Taurus: "황소자리", Gemini: "쌍둥이자리", Cancer: "게자리", Leo: "사자자리", Virgo: "처녀자리", Libra: "천칭자리", Scorpio: "전갈자리", Sagittarius: "궁수자리", Capricorn: "염소자리", Aquarius: "물병자리", Pisces: "물고기자리" },
    ui: { textToggle: "텍스트", symbolToggle: "기호", transitBadge: "트랜짓 오버레이", northStyle: "북인도 방식", southStyle: "남인도 방식", asc: "ASC", nakshatraLabel: "낙샤트라", house: "하우스", retrograde: "역행", pada: "파다", lord: "지배성", aspects: "애스펙트 하우스", dignity: { Exalted: "고양", Debilitated: "쇠약", "Own Sign": "자신의 별자리", Neutral: "중립" } },
    nakshatras: { Ashwini: "아슈비니", Bharani: "바라니", Krittika: "크리티카", Rohini: "로히니", Mrigashira: "므리가시라", Ardra: "아르드라", Punarvasu: "푸나르바수", Pushya: "푸샤", Ashlesha: "아슐레샤", Magha: "마가", "Purva Phalguni": "푸르바 팔구니", "Uttara Phalguni": "우타라 팔구니", Hasta: "하스타", Chitra: "치트라", Swati: "스와티", Vishakha: "비샤카", Anuradha: "아누라다", Jyeshtha: "제슈타", Mula: "물라", "Purva Ashadha": "푸르바 아샤다", "Uttara Ashadha": "우타라 아샤다", Shravana: "슈라바나", Dhanishta: "다니슈타", Shatabhisha: "샤타비샤", "Purva Bhadrapada": "푸르바 바드라파다", "Uttara Bhadrapada": "우타라 바드라파다", Revati: "레바티" }
  }
} satisfies Record<AppLanguage, object>;

export type WidenTranslation<T> =
  T extends string
    ? string
    : T extends Record<string, string>
      ? Record<string, string>
      : { [K in keyof T]: WidenTranslation<T[K]> };
export type ChartTranslations = WidenTranslation<(typeof chartFormCopy)["en"]>;
