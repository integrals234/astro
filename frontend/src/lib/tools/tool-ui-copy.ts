import type { AppLanguage } from "@/lib/i18n/language";

/**
 * Copy shared by every tool's entry form and result frame: validation
 * messages, the unknown-birth-time option, loading / error / retry, and the
 * person bar. One source so the seventeen tools speak with one voice.
 */
export interface ToolUiCopy {
  calculating: string;
  retry: string;
  edit: string;
  cancel: string;
  switchPerson: string;
  addPerson: string;
  /** Heading over a result; `name` may be empty. */
  resultFor: (name: string) => string;
  computeError: string;
  saveError: string;
  errDate: string;
  errDateFuture: string;
  errTime: string;
  errPlace: string;
  unknownTime: string;
  unknownTimeNote: string;
  timeUnknownBadge: string;
  asOf: (date: string) => string;
  transitDate: string;
  today: string;
  prevDay: string;
  nextDay: string;
  place: string;
  changePlace: string;
  confirmDelete: (name: string) => string;
  deleteLabel: string;
  runningNow: string;
  startLabel: string;
  endLabel: string;
  useMyLocation: string;
  locating: string;
  locationDenied: string;
  currentLocation: string;
  progress: (done: number, total: number) => string;
  legendAsc: string;
  legendRetro: string;
  legendHouses: string;
}

export const toolUiCopy: Record<AppLanguage, ToolUiCopy> = {
  ja: {
    calculating: "計算中…",
    retry: "もう一度試す",
    edit: "出生データを編集",
    cancel: "キャンセル",
    switchPerson: "別の人に切り替え",
    addPerson: "新しい人を追加",
    resultFor: (name) => (name ? `${name} さんの結果` : "あなたの結果"),
    computeError: "計算できませんでした。通信状況をご確認のうえ、もう一度お試しください。",
    saveError: "出生データを保存できませんでした。もう一度お試しください。",
    errDate: "生年月日を入力してください。",
    errDateFuture: "未来の日付は選べません。",
    errTime: "出生時刻を入力するか、「出生時刻がわからない」にチェックを入れてください。",
    errPlace: "出生地を入力し、表示された候補から選んでください。",
    unknownTime: "出生時刻がわからない",
    unknownTimeNote: "正午（12:00）として計算します。ラグナ（上昇宮）やハウス、パダは正確でない可能性があります。",
    timeUnknownBadge: "時刻不明",
    asOf: (date) => `${date} 時点`,
    transitDate: "トランジットの日付",
    today: "今日",
    prevDay: "前の日",
    nextDay: "次の日",
    place: "場所",
    changePlace: "場所を変更",
    confirmDelete: (name) => `「${name}」を削除しますか？保存されたチャートも削除されます。`,
    deleteLabel: "削除する",
    runningNow: "現在",
    startLabel: "開始",
    endLabel: "終了",
    useMyLocation: "現在地を使う",
    locating: "現在地を取得中…",
    locationDenied: "現在地を取得できませんでした。場所を検索してください。",
    currentLocation: "現在地",
    progress: (done, total) => `${done}/${total} 件を計算済み`,
    legendAsc: "ASC＝ラグナ（上昇宮）",
    legendRetro: "＊＝逆行中",
    legendHouses: "数字は星座の番号（1＝牡羊座 … 12＝魚座）",
  },
  en: {
    calculating: "Calculating…",
    retry: "Try again",
    edit: "Edit details",
    cancel: "Cancel",
    switchPerson: "Switch person",
    addPerson: "Add someone new",
    resultFor: (name) => (name ? `Result for ${name}` : "Your result"),
    computeError: "We couldn't calculate this. Please check your connection and try again.",
    saveError: "We couldn't save these birth details. Please try again.",
    errDate: "Please enter a date of birth.",
    errDateFuture: "The date can't be in the future.",
    errTime: "Please enter a birth time, or tick “I don't know my birth time”.",
    errPlace: "Type the birthplace and choose it from the suggestions.",
    unknownTime: "I don't know my birth time",
    unknownTimeNote: "We'll use 12:00 noon. The ascendant, houses and pada may not be accurate.",
    timeUnknownBadge: "time unknown",
    asOf: (date) => `as of ${date}`,
    transitDate: "Transit date",
    today: "Today",
    prevDay: "Previous day",
    nextDay: "Next day",
    place: "Place",
    changePlace: "Change place",
    confirmDelete: (name) => `Delete “${name}”? Their saved chart will be deleted too.`,
    deleteLabel: "Delete",
    runningNow: "Now",
    startLabel: "Start",
    endLabel: "End",
    useMyLocation: "Use my location",
    locating: "Finding your location…",
    locationDenied: "Couldn't get your location. Please search for a place instead.",
    currentLocation: "Current location",
    progress: (done, total) => `${done} of ${total} calculated`,
    legendAsc: "ASC = ascendant (Lagna)",
    legendRetro: "* = retrograde",
    legendHouses: "Numbers are signs (1 = Aries … 12 = Pisces)",
  },
  hi: {
    calculating: "गणना हो रही है…",
    retry: "फिर प्रयास करें",
    edit: "विवरण बदलें",
    cancel: "रद्द करें",
    switchPerson: "व्यक्ति बदलें",
    addPerson: "नया व्यक्ति जोड़ें",
    resultFor: (name) => (name ? `${name} का परिणाम` : "आपका परिणाम"),
    computeError: "गणना नहीं हो सकी। कृपया अपना कनेक्शन जाँचें और फिर प्रयास करें।",
    saveError: "जन्म-विवरण सहेजा नहीं जा सका। कृपया फिर प्रयास करें।",
    errDate: "कृपया जन्म तिथि दर्ज करें।",
    errDateFuture: "तिथि भविष्य की नहीं हो सकती।",
    errTime: "कृपया जन्म समय दर्ज करें, या “मुझे जन्म समय नहीं पता” चुनें।",
    errPlace: "जन्म स्थान लिखें और सुझावों में से चुनें।",
    unknownTime: "मुझे जन्म समय नहीं पता",
    unknownTimeNote: "दोपहर 12:00 मानकर गणना होगी। लग्न, भाव और पाद सटीक न भी हों।",
    timeUnknownBadge: "समय अज्ञात",
    asOf: (date) => `${date} के अनुसार`,
    transitDate: "गोचर तिथि",
    today: "आज",
    prevDay: "पिछला दिन",
    nextDay: "अगला दिन",
    place: "स्थान",
    changePlace: "स्थान बदलें",
    confirmDelete: (name) => `“${name}” को हटाएँ? उनकी सहेजी गई कुंडली भी हट जाएगी।`,
    deleteLabel: "हटाएँ",
    runningNow: "वर्तमान",
    startLabel: "आरंभ",
    endLabel: "समाप्ति",
    useMyLocation: "मेरा स्थान उपयोग करें",
    locating: "आपका स्थान खोजा जा रहा है…",
    locationDenied: "आपका स्थान नहीं मिल सका। कृपया स्थान खोजें।",
    currentLocation: "वर्तमान स्थान",
    progress: (done, total) => `${total} में से ${done} की गणना हुई`,
    legendAsc: "ASC = लग्न",
    legendRetro: "* = वक्री",
    legendHouses: "संख्याएँ राशियाँ हैं (1 = मेष … 12 = मीन)",
  },
  ko: {
    calculating: "계산 중…",
    retry: "다시 시도",
    edit: "출생 정보 수정",
    cancel: "취소",
    switchPerson: "다른 사람으로 전환",
    addPerson: "새로운 사람 추가",
    resultFor: (name) => (name ? `${name} 님의 결과` : "나의 결과"),
    computeError: "계산하지 못했습니다. 연결 상태를 확인하고 다시 시도해 주세요.",
    saveError: "출생 정보를 저장하지 못했습니다. 다시 시도해 주세요.",
    errDate: "생년월일을 입력해 주세요.",
    errDateFuture: "미래 날짜는 선택할 수 없습니다.",
    errTime: "출생 시각을 입력하거나 ‘출생 시각을 모름’에 체크해 주세요.",
    errPlace: "출생지를 입력하고 표시된 후보에서 선택해 주세요.",
    unknownTime: "출생 시각을 모름",
    unknownTimeNote: "정오(12:00)로 계산합니다. 라그나(상승궁), 하우스, 파다는 정확하지 않을 수 있습니다.",
    timeUnknownBadge: "시각 모름",
    asOf: (date) => `${date} 기준`,
    transitDate: "트랜짓 날짜",
    today: "오늘",
    prevDay: "이전 날",
    nextDay: "다음 날",
    place: "장소",
    changePlace: "장소 변경",
    confirmDelete: (name) => `‘${name}’을(를) 삭제할까요? 저장된 차트도 함께 삭제됩니다.`,
    deleteLabel: "삭제",
    runningNow: "현재",
    startLabel: "시작",
    endLabel: "종료",
    useMyLocation: "현재 위치 사용",
    locating: "현재 위치를 찾는 중…",
    locationDenied: "현재 위치를 가져오지 못했습니다. 장소를 검색해 주세요.",
    currentLocation: "현재 위치",
    progress: (done, total) => `${total}건 중 ${done}건 계산 완료`,
    legendAsc: "ASC = 라그나(상승궁)",
    legendRetro: "* = 역행 중",
    legendHouses: "숫자는 별자리 번호입니다 (1 = 양자리 … 12 = 물고기자리)",
  },
};
