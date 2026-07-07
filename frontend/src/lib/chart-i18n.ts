import type { LanguageCode } from "./chart-types";

export const CHART_LANG_STORAGE_KEY = "chart-lang";

export interface ChartNavCopy {
  generate: string;
  saved: string;
  recent: string;
  generateDescription: string;
  savedDescription: string;
  recentDescription: string;
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

export const chartUi: Record<LanguageCode, ChartUiCopy> = {
  en: {
    appTitle: "Generate Charts",
    nav: {
      generate: "Generate",
      saved: "Saved",
      recent: "Recent",
      generateDescription: "Create and explore charts",
      savedDescription: "Your bookmarked charts",
      recentDescription: "Last five generated charts",
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
    },
    collection: {
      libraryEyebrow: "लाइब्रेरी",
      savedTitle: "सहेजे गए चार्ट",
      recentTitle: "हाल के चार्ट",
      savedSubtitle: "चार्ट जिन्हें आपने स्पष्ट रूप से सहेजा है।",
      recentSubtitle: "त्वरित पहुँच के लिए आपके अंतिम पाँच जनित चार्ट।",
      loading: "चार्ट लोड हो रहे हैं…",
      emptySaved: "अभी कोई सहेजा चार्ट नहीं। चार्ट बनाएं और Save Chart दबाएं।",
      emptyRecent: "अभी कोई हाल का चार्ट नहीं। चार्ट टैब में अपना पहला चार्ट बनाएं।",
      goToGenerator: "चार्ट जनरेटर पर जाएं",
      previewLayout: "लेआउट पूर्वावलोकन",
      openChart: "चार्ट खोलें",
      deleteConfirm: "यह चार्ट हटाएं?",
      deleteAria: "चार्ट हटाएं",
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

export function getChartUi(lang: LanguageCode): ChartUiCopy {
  return chartUi[lang] ?? chartUi.en;
}

export function parseChartLang(value: string | null): LanguageCode {
  if (value === "en" || value === "hi" || value === "ja" || value === "ko") {
    return value;
  }
  return "ja";
}

export function readChartLang(): LanguageCode {
  if (typeof window === "undefined") return "ja";
  return parseChartLang(localStorage.getItem(CHART_LANG_STORAGE_KEY));
}

export function persistChartLang(lang: LanguageCode) {
  localStorage.setItem(CHART_LANG_STORAGE_KEY, lang);
  window.dispatchEvent(new CustomEvent("chart-lang-change", { detail: lang }));
}
