'use client';

import React, { useState, useEffect, useCallback, Suspense, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useDebounce } from 'use-debounce';
import { Command } from 'cmdk';
import { Search, MapPin, Sparkles, Eye, Download, Bookmark, BookmarkCheck, LayoutDashboard } from 'lucide-react';
import { SignedIn, SignedOut, UserButton, useAuth } from '@clerk/nextjs';
import KundliChart from '@/components/KundliChart';
import SouthKundliChart from '@/components/SouthKundliChart';
import ChartLibraryPanel from '@/components/ChartLibraryPanel';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { downloadChartPdf } from '@/lib/generate-chart-pdf';
import type {
  Planet,
  TransitPlanet,
  Dasha,
  ChartData,
  ChartFormData,
  LocationResult,
  ChartTab,
  SavedChartRecord,
} from '@/lib/chart-types';
import { getChartUi } from '@/lib/chart-i18n';
import type { AppLanguage } from '@/lib/i18n/language';

interface ChartWorkspaceProps {
  enablePersistence?: boolean;
  showAuthNav?: boolean;
  embedded?: boolean;
}

const signToNumber: Record<string, number> = {
  "Aries": 1, "Taurus": 2, "Gemini": 3, "Cancer": 4, "Leo": 5, "Virgo": 6, 
  "Libra": 7, "Scorpio": 8, "Sagittarius": 9, "Capricorn": 10, "Aquarius": 11, "Pisces": 12 
};

const formatDMS = (raw: number) => { 
  const l = raw % 30; 
  const d = Math.floor(l); 
  const mF = (l - d) * 60; 
  const m = Math.floor(mF); 
  const s = Math.floor((mF - m) * 60); 
  return `${d}° ${m.toString().padStart(2, '0')}' ${s.toString().padStart(2, '0')}"`; 
};

const getIntegerDegree = (raw: number) => Math.floor(raw % 30);

// --- TRANSLATION DICTIONARY ---
const translations = {
  en: {
    birthCity: "Birth City", searchPlaceholder: "Search global cities...", searching: "Searching coordinates...", noLocations: "No locations found.",
    natalParams: "Natal Parameters", dob: "Date of Birth", tob: "Time of Birth", gocharOverlay: "Gochar Overlay (Transit)", transitDate: "Transit Date",
    generateBtn: "Generate Analysis", computingBtn: "Computing Ephemeris...", awaitingTitle: "Awaiting Parameters", awaitingDesc: "Search for a location using the command menu and generate to view your professional workspace.",
    timezone: "Timezone", sunrise: "Sunrise", sunset: "Sunset", absoluteLagna: "Absolute Lagna", exactLongitudes: "Exact Planetary Longitudes", transitCoords: "Transit Coordinates",
    dashaTimeline: "Vimshottari Timeline", dashaSub: "Maha • Antar • Pratyantar • Sookshma", lagnaBase: "Lagna Base", chandraBase: "Chandra Base", watermark: "vaibhav shukla",
    errNoLoc: "Please select a location.", errCalc: "Calculation Failed.",
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
    errNoLoc: "कृपया एक स्थान चुनें।", errCalc: "गणना विफल रही।",
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
    errNoLoc: "場所を選択してください。", errCalc: "計算に失敗しました。",
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
    errNoLoc: "위치를 선택해 주세요.", errCalc: "계산에 실패했습니다.",
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

type WidenTranslation<T> =
  T extends string
    ? string
    : T extends Record<string, string>
      ? Record<string, string>
      : { [K in keyof T]: WidenTranslation<T[K]> };
type ChartTranslations = WidenTranslation<(typeof translations)["en"]>;
const CHART_TABS: ChartTab[] = ['D1', 'D9', 'Chalit', 'Chandra', 'Gochar', 'Details', 'Aspects', 'Dasha'];
const subscribeToClient = () => () => {};

const planetSymbols: Record<string, string> = {
  Sun: "☉", Moon: "☽", Mars: "♂", Mercury: "☿", Jupiter: "♃",
  Venus: "♀", Saturn: "♄", Rahu: "☊", Ketu: "☋"
};

// --- FLUID ACCORDION COMPONENT ---
const formatDashaDisplayDate = (value: string, lang: AppLanguage) => {
  const parsed = new Date(value.replace(/(\d+) (\w+) (\d+)/, "$2 $1, $3"));
  return Number.isNaN(parsed.getTime())
    ? value
    : new Intl.DateTimeFormat(lang, { year: "numeric", month: "short", day: "numeric" }).format(parsed);
};

const DashaNode = ({ dasha, level = 1, t, lang }: { dasha: Dasha, level?: number, t: ChartTranslations, lang: AppLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubs = dasha.sub_dashas && dasha.sub_dashas.length > 0;
  
  const levelStyles: Record<number, string> = {
    1: "bg-washi-elevated border-border text-ink font-body font-semibold text-lg p-4",
    2: "bg-washi-elevated border-border text-ink font-body font-medium text-md p-3 ml-4",
    3: "bg-washi border-border text-text font-body font-medium text-sm p-2 ml-8",
    4: "bg-transparent border-transparent text-text-muted font-body font-normal text-xs p-1.5 ml-12",
  };

  return (
    <div className="w-full">
      <div onClick={() => hasSubs && setIsOpen(!isOpen)} className={`flex justify-between items-center rounded-md border cursor-pointer transition-colors duration-200 mb-1 ${levelStyles[level]}`}>
        <div className="flex items-center gap-2">
          {hasSubs && <motion.span animate={{ rotate: isOpen ? 90 : 0 }} className="text-[10px] text-moss">▶</motion.span>}
          {!hasSubs && <span className="w-3"></span>} 
          <span>
            <span className="mr-2 text-terracotta font-chart">{planetSymbols[dasha.lord]}</span>
            {t.planets[dasha.lord]}
          </span>
        </div>
        <div className="text-right flex gap-4 font-chart text-xs text-text-muted tabular-nums">
          <span>{formatDashaDisplayDate(dasha.start_date, lang)}</span>
          <span className="text-border">|</span>
          <span>{formatDashaDisplayDate(dasha.end_date, lang)}</span>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && hasSubs && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: "easeOut" }} className="overflow-hidden border-l border-border ml-4 pl-2">
            {dasha.sub_dashas!.map((sub, i) => <DashaNode key={i} dasha={sub} level={level + 1} t={t} lang={lang} />)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- DIGNITY BADGE COMPONENT ---
const DignityBadge = ({ dignity, t }: { dignity: string, t: ChartTranslations }) => {
  const styles: Record<string, string> = {
    "Exalted": "washi-status-positive",
    "Debilitated": "washi-status-caution",
    "Own Sign": "washi-status-positive",
    "Neutral": "washi-status-neutral",
  };
  return (
    <span className={`text-[10px] px-2 py-0.5 border-0 font-body font-semibold uppercase tracking-wider ${styles[dignity] || styles["Neutral"]}`}>
      {t.ui.dignity[dignity] ?? dignity}
    </span>
  );
}

// --- MAIN DASHBOARD ---
function ChartWorkspaceInner({
  enablePersistence = false,
  showAuthNav = false,
  embedded = false,
}: ChartWorkspaceProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { isSignedIn, isLoaded: isAuthLoaded } = useAuth();
  const isClient = useSyncExternalStore(subscribeToClient, () => true, () => false);

  const { language: lang } = useLanguage();
  const [personName, setPersonName] = useState('');
  const [formData, setFormData] = useState<ChartFormData>(() => {
    const now = new Date();
    return {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate(),
      hour: now.getHours(),
      minute: now.getMinutes(),
      latitude: 25.4488,
      longitude: 78.5698,
      transit_year: now.getFullYear(),
      transit_month: now.getMonth() + 1,
      transit_day: now.getDate(),
    };
  });
  
  const [locationQuery, setLocationQuery] = useState("");
  const [debouncedQuery] = useDebounce(locationQuery, 500); 
  const [locationResults, setLocationResults] = useState<LocationResult[]>([]);
  const [selectedLocationName, setSelectedLocationName] = useState("");
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false); 
  
  const [chartStyle, setChartStyle] = useState<'North' | 'South'>('North');
  const [useSymbols, setUseSymbols] = useState(false);

  const planetSymbols: Record<string, string> = {
      Sun: "☉", Moon: "☽", Mars: "♂", Mercury: "☿", Jupiter: "♃",
      Venus: "♀", Saturn: "♄", Rahu: "☊", Ketu: "☋"
    };

  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [activeTab, setActiveTab] = useState<ChartTab>('D1');
  const [gocharBase, setGocharBase] = useState<'Lagna' | 'Chandra'>('Lagna');
  const [isLoading, setIsLoading] = useState(false);
  const [currentChartId, setCurrentChartId] = useState<string | null>(null);
  const [isCurrentSaved, setIsCurrentSaved] = useState(false);
  const [recentCharts, setRecentCharts] = useState<SavedChartRecord[]>([]);
  const [savedCharts, setSavedCharts] = useState<SavedChartRecord[]>([]);
  const [isSavingChart, setIsSavingChart] = useState(false);

  const t: ChartTranslations = translations[lang];
  const chartCopy = getChartUi(lang);

  const refreshLibrary = useCallback(async () => {
    if (!enablePersistence) return;
    try {
      const [recentRes, savedRes] = await Promise.all([
        fetch('/api/charts?type=recent'),
        fetch('/api/charts?type=saved'),
      ]);
      if (recentRes.ok) setRecentCharts(await recentRes.json());
      if (savedRes.ok) setSavedCharts(await savedRes.json());
    } catch (error) {
      console.error('Failed to load chart library:', error);
    }
  }, [enablePersistence]);

  useEffect(() => {
    if (!enablePersistence) return;
    const controller = new AbortController();

    void Promise.all([
      fetch('/api/charts?type=recent', { signal: controller.signal }),
      fetch('/api/charts?type=saved', { signal: controller.signal }),
    ])
      .then(async ([recentRes, savedRes]) => {
        if (recentRes.ok) setRecentCharts(await recentRes.json());
        if (savedRes.ok) setSavedCharts(await savedRes.json());
      })
      .catch((error) => {
        if (!(error instanceof DOMException && error.name === 'AbortError')) {
          console.error('Failed to load chart library:', error);
        }
      });

    return () => controller.abort();
  }, [enablePersistence]);

  const persistChart = async (data: ChartData, saved = false) => {
    if (!enablePersistence || !personName.trim()) return null;
    const response = await fetch('/api/charts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: personName.trim(),
        locationName: selectedLocationName,
        formData,
        chartData: data,
        isSaved: saved,
      }),
    });
    if (!response.ok) return null;
    const record: SavedChartRecord = await response.json();
    setCurrentChartId(record.id);
    setIsCurrentSaved(record.isSaved);
    await refreshLibrary();
    return record;
  };

  const loadChart = (chart: SavedChartRecord) => {
    setPersonName(chart.name);
    setFormData(chart.formData);
    setSelectedLocationName(chart.locationName);
    setChartData(chart.chartData);
    setCurrentChartId(chart.id);
    setIsCurrentSaved(chart.isSaved);
    setActiveTab('D1');
  };

  useEffect(() => {
    const chartId = searchParams.get('chart');
    if (!chartId || !enablePersistence) return;

    const loadChartFromUrl = async () => {
      try {
        const response = await fetch(`/api/charts/${chartId}`);
        if (!response.ok) return;
        const chart: SavedChartRecord = await response.json();
        loadChart(chart);
      } catch (error) {
        console.error('Failed to load chart from URL:', error);
      }
    };

    loadChartFromUrl();
  }, [searchParams, enablePersistence]);

  const handleToggleSave = async (chart?: SavedChartRecord) => {
    const targetId = chart?.id ?? currentChartId;
    if (!targetId) return;
    const nextSaved = chart ? !chart.isSaved : !isCurrentSaved;
    setIsSavingChart(true);
    try {
      const response = await fetch(`/api/charts/${targetId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isSaved: nextSaved }),
      });
      if (!response.ok) throw new Error('Failed to update chart');
      if (targetId === currentChartId) setIsCurrentSaved(nextSaved);
      await refreshLibrary();
    } catch (error) {
      console.error(error);
      alert(t.saveError);
    } finally {
      setIsSavingChart(false);
    }
  };

  const handleDeleteChart = async (chartId: string) => {
    if (!confirm(t.deleteConfirm)) return;
    try {
      const response = await fetch(`/api/charts/${chartId}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete');
      if (currentChartId === chartId) {
        setCurrentChartId(null);
        setIsCurrentSaved(false);
      }
      await refreshLibrary();
    } catch (error) {
      console.error(error);
      alert(t.deleteError);
    }
  };

  const handleDownloadPdf = async () => {
    if (!chartData || !isAuthLoaded) return;
    if (!isSignedIn) {
      const returnUrl = searchParams.toString()
        ? `${pathname}?${searchParams.toString()}`
        : pathname;
      router.push(`/sign-in?redirect_url=${encodeURIComponent(returnUrl)}`);
      return;
    }
    try {
      await downloadChartPdf({
        name: personName.trim() || t.chart,
        locationName: selectedLocationName,
        formData,
        chartData,
        lang,
      });
    } catch (error) {
      console.error('PDF download failed:', error);
      alert(t.pdfError);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'natal' | 'transit') => {
    if (!e.target.value) return;
    const [y, m, d] = e.target.value.split('-');
    if (type === 'natal') setFormData(prev => ({ ...prev, year: parseInt(y), month: parseInt(m), day: parseInt(d) }));
    else setFormData(prev => ({ ...prev, transit_year: parseInt(y), transit_month: parseInt(m), transit_day: parseInt(d) }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;
    const [h, m] = e.target.value.split(':');
    setFormData(prev => ({ ...prev, hour: parseInt(h), minute: parseInt(m) }));
  };

  const natalDateString = `${formData.year}-${String(formData.month).padStart(2, '0')}-${String(formData.day).padStart(2, '0')}`;
  const natalTimeString = `${String(formData.hour).padStart(2, '0')}:${String(formData.minute).padStart(2, '0')}`;
  const transitDateString = `${formData.transit_year}-${String(formData.transit_month).padStart(2, '0')}-${String(formData.transit_day).padStart(2, '0')}`;

  useEffect(() => {
    const fetchLocations = async () => {
      if (!debouncedQuery) { setLocationResults([]); setIsSearching(false); return; }
      setIsSearching(true);
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(debouncedQuery)}&limit=5&accept-language=${encodeURIComponent(lang)}`);
        setLocationResults(await res.json());
      } catch (error) { console.error(error); } 
      finally { setIsSearching(false); }
    };
    fetchLocations();
  }, [debouncedQuery, lang]);

  const selectLocation = (loc: LocationResult) => {
    setFormData(prev => ({ ...prev, latitude: parseFloat(loc.lat), longitude: parseFloat(loc.lon) }));
    setSelectedLocationName(loc.display_name);
    setIsCommandOpen(false);
    setLocationQuery("");
  };

  const generateCharts = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.latitude === 0 && formData.longitude === 0) return alert(t.errNoLoc);
    if (enablePersistence && !personName.trim()) return alert(t.errNoName);
    setIsLoading(true);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const response = await fetch(`${API_URL}/api/v1/compute-charts`, { 
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) 
      });
      if (!response.ok) throw new Error(t.errCalc);
      const data: ChartData = await response.json();
      setChartData(data);
      setCurrentChartId(null);
      setIsCurrentSaved(false);
      if (enablePersistence) {
        await persistChart(data, false);
      }
    } catch (error: unknown) {
      alert(error instanceof Error ? error.message : t.errCalc);
    }
    finally { setIsLoading(false); }
  };

  const getRenderData = () => {
    if (!chartData) return { planets: [], transitPlanets: [], asc: "Aries" };
    
    // NEW: We added `customSign` so we can override the D1 sign for D9 and Chalit charts
    const mappedPlanets = (p: Planet, house: number, customSign?: string) => ({ 
      name: t.planets[p.name],
      enName: p.name,
      house, 
      degree: getIntegerDegree(p.longitude),
      isRetrograde: (p.name === 'Rahu' || p.name === 'Ketu') ? true : Boolean(p.is_retrograde),
      sign: customSign || p.sign // Map to the new sign if provided
    });
    
    const mappedTransits = (p: TransitPlanet, house: number, customSign?: string) => ({ 
      name: t.planets[p.name],
      enName: p.name,
      house, 
      degree: getIntegerDegree(p.longitude),
      isRetrograde: (p.name === 'Rahu' || p.name === 'Ketu') ? true : Boolean(p.is_retrograde),
      sign: customSign || p.sign
    });
    
    if (activeTab === 'D1') {
      return { planets: chartData.planets.map(p => mappedPlanets(p, p.d1_house, p.sign)), transitPlanets: [], asc: chartData.ascendant_sign };
    }

    if (activeTab === 'D9') {
      const ascNum = signToNumber[chartData.d9_ascendant_sign];
      return { 
        // Pass p.d9_sign so the South Indian chart moves them to Navamsha signs
        planets: chartData.planets.map(p => mappedPlanets(p, ((signToNumber[p.d9_sign] - ascNum + 12) % 12) + 1, p.d9_sign)), 
        transitPlanets: [], 
        asc: chartData.d9_ascendant_sign 
      };
    }

    if (activeTab === 'Chalit') {
      const ascNum = signToNumber[chartData.ascendant_sign];
      const numToSign = ["", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
      
      return { 
        planets: chartData.planets.map(p => {
          // Calculate which physical zodiac sign the new Chalit house falls into
          let newSignNum = ascNum + (p.chalit_house - 1);
          if (newSignNum > 12) newSignNum -= 12;
          return mappedPlanets(p, p.chalit_house, numToSign[newSignNum]);
        }), 
        transitPlanets: [], 
        asc: chartData.ascendant_sign 
      };
    }

    if (activeTab === 'Chandra') {
      const moon = chartData.planets.find(p => p.name === "Moon");
      const moonHouse = moon ? moon.d1_house : 1;
      return { 
        // South Indian Chandra charts keep planets in D1 signs, but move the Ascendant marker
        planets: chartData.planets.map(p => mappedPlanets(p, ((p.d1_house - moonHouse + 12) % 12) + 1, p.sign)), 
        transitPlanets: [], 
        asc: moon ? moon.sign : "Aries" 
      };
    }

    if (activeTab === 'Gochar') {
      let anchorSign = chartData.ascendant_sign;
      if (gocharBase === 'Chandra') { const moon = chartData.planets.find(p => p.name === "Moon"); if (moon) anchorSign = moon.sign; }
      const anchorNum = signToNumber[anchorSign] || 1;
      return { 
        planets: chartData.planets.map(p => mappedPlanets(p, ((signToNumber[p.sign] - anchorNum + 12) % 12) + 1, p.sign)), 
        transitPlanets: chartData.transit_planets.map(p => mappedTransits(p, ((signToNumber[p.sign] - anchorNum + 12) % 12) + 1, p.sign)), 
        asc: anchorSign 
      };
    }

    return { planets: [], transitPlanets: [], asc: "Aries" };
  };

  const renderData = getRenderData();

  if (!isClient) return null;

  const shellContent = (
    <>
      {showAuthNav && (
        <div className="max-w-7xl mx-auto w-full mb-6 flex justify-end items-center gap-3">
          <SignedOut>
            <Link href="/sign-in" className="text-sm font-body font-medium text-terracotta hover:text-ink px-4 py-2 transition-colors">
              {t.signIn}
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/chart" className="flex items-center gap-2 text-sm font-body font-medium text-terracotta hover:text-ink px-4 py-2 transition-colors">
              <LayoutDashboard size={16} />
              {t.chart}
            </Link>
            <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: "h-8 w-8 bg-terracotta text-washi" } }} />
          </SignedIn>
        </div>
      )}

      <div className={`max-w-7xl mx-auto grid grid-cols-1 ${enablePersistence ? 'xl:grid-cols-12' : 'lg:grid-cols-12'} gap-8 flex-grow w-full`}>
        
        {/* LEFT COLUMN: Form */}
        <motion.div layout className={`${enablePersistence ? 'xl:col-span-4' : 'lg:col-span-4'} space-y-6 min-w-0`}>
          <div className="washi-card p-8">
            
            <div className="mb-8">
              <h1 className="text-3xl font-header font-medium text-ink tracking-tight">{chartCopy.appTitle}</h1>
            </div>

            {/* CMDK Autocomplete */}
            <div className="mb-8 relative">
              <label className="block text-[10px] font-bold text-shell-muted uppercase tracking-widest mb-2">{t.birthCity}</label>
              <div 
                onClick={() => setIsCommandOpen(true)}
                className="washi-field flex items-center gap-3 w-full p-3.5 text-sm cursor-text transition-colors hover:border-terracotta/50"
              >
                <Search size={16} className="text-text-muted" />
                <span className={selectedLocationName ? "text-ink" : "text-text-muted"}>
                  {selectedLocationName || t.searchPlaceholder}
                </span>
              </div>

              <AnimatePresence>
                {isCommandOpen && (
                  <>
                    <button type="button" aria-label={t.closeDialog} className="fixed inset-0 z-40 cursor-default" onClick={() => setIsCommandOpen(false)} />
                    <motion.div 
                      role="dialog"
                      aria-label={t.locationDialog}
                      initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.15 }}
                      className="washi-card absolute top-0 left-0 w-full z-50 text-text overflow-hidden"
                    >
                      <Command className="w-full" shouldFilter={false}>
                        <div className="flex items-center px-3 border-b border-border">
                          <Search size={16} className="text-terracotta mr-2" />
                          <Command.Input 
                            autoFocus
                            value={locationQuery} 
                            onValueChange={setLocationQuery} 
                            placeholder={t.searchPlaceholder} 
                            className="w-full py-4 text-sm outline-none bg-transparent text-ink placeholder:text-text-muted"
                          />
                        </div>
                        <Command.List className="max-h-60 overflow-y-auto p-2 relative z-50">
                          {isSearching && <div className="p-4 text-sm text-center text-text-muted">{t.searching}</div>}
                          {!isSearching && locationResults.length === 0 && locationQuery && <div className="p-4 text-sm text-center text-text-muted">{t.noLocations}</div>}
                          {!isSearching && locationResults.map((loc, i) => (
                            <Command.Item 
                              key={i} 
                              value={loc.display_name}
                              onSelect={() => selectLocation(loc)}
                              className="flex items-center gap-2 p-3 text-sm rounded-md hover:bg-neutral-tag cursor-pointer text-text data-[selected=true]:bg-neutral-tag"
                            >
                              <MapPin size={14} className="text-terracotta shrink-0" />
                              <span className="truncate">{loc.display_name}</span>
                            </Command.Item>
                          ))}
                        </Command.List>
                      </Command>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <form onSubmit={generateCharts} className="space-y-6">
              {/* --- NATAL PARAMETERS --- */}
              <div>
                <h3 className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest border-b border-border pb-2 mb-4">{t.natalParams}</h3>
                <div className="mb-4">
                  <label className="block text-[10px] text-shell-muted mb-1.5 ml-1">
                    {t.personName}
                    {enablePersistence && <span className="text-shell-accent"> *</span>}
                  </label>
                  <input
                    type="text"
                    value={personName}
                    onChange={(e) => setPersonName(e.target.value)}
                    placeholder={t.personNamePlaceholder || ''}
                    className="washi-field w-full p-3 text-sm focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all text-ink placeholder:text-text-muted"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="min-w-0">
                    <label className="block text-[10px] text-text-muted mb-1.5 ml-1">{t.dob}</label>
                    <input type="date" value={natalDateString} onChange={(e) => handleDateChange(e, 'natal')} className="washi-field w-full min-w-0 p-3 text-sm focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all cursor-pointer text-ink" />
                  </div>
                  <div className="min-w-0">
                    <label className="block text-[10px] text-text-muted mb-1.5 ml-1">{t.tob}</label>
                    <input type="time" value={natalTimeString} onChange={handleTimeChange} className="washi-field w-full min-w-0 p-3 text-sm focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all cursor-pointer text-ink" />
                  </div>
                </div>
              </div>

              {/* --- GOCHAR OVERLAY --- */}
              <div>
                <h3 className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest border-b border-border pb-2 mb-4">{t.gocharOverlay}</h3>
                <div className="w-full">
                  <label className="block text-[10px] text-moss mb-1.5 ml-1">{t.transitDate}</label>
                  <input type="date" value={transitDateString} onChange={(e) => handleDateChange(e, 'transit')} className="w-full p-3 rounded-md border border-moss/40 bg-moss/5 text-sm text-ink focus:border-moss focus:ring-1 focus:ring-moss outline-none transition-all cursor-pointer" />
                </div>
              </div>

              <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isLoading || !selectedLocationName || (enablePersistence && !personName.trim())} className="washi-btn-primary w-full py-4 text-sm disabled:opacity-50 transition-all">
                {isLoading ? t.computingBtn : t.generateBtn}
              </motion.button>
            </form>
          </div>

          {enablePersistence && (
            <ChartLibraryPanel
              recentCharts={recentCharts}
              savedCharts={savedCharts}
              activeChartId={currentChartId}
              onLoadChart={loadChart}
              onToggleSave={handleToggleSave}
              onDeleteChart={handleDeleteChart}
            />
          )}
        </motion.div>

        {/* RIGHT COLUMN: Output Dashboard */}
        <div className={`${enablePersistence ? 'xl:col-span-8' : 'lg:col-span-8'} min-w-0`}>
          <AnimatePresence mode="wait">
            {chartData ? (
              <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }} className="washi-card text-text overflow-hidden">
                
                <div className="flex flex-wrap items-center justify-between gap-3 px-6 md:px-8 py-4 border-b border-border bg-washi">
                  <div>
                    <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest">{t.subject}</div>
                    <div className="font-header text-lg text-ink">{personName.trim() || '—'}</div>
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={handleDownloadPdf}
                      className="washi-btn-secondary flex items-center gap-2 px-3 py-2 text-[10px] uppercase tracking-wider transition-colors hover:bg-terracotta/10"
                    >
                      <Download size={14} />
                      {t.downloadPdf}
                    </button>
                    {enablePersistence && currentChartId && (
                      <button
                        type="button"
                        onClick={() => handleToggleSave()}
                        disabled={isSavingChart}
                        className={`flex items-center gap-2 px-4 py-2 text-xs font-body font-semibold uppercase tracking-wider rounded-md border transition-colors ${
                          isCurrentSaved
                            ? 'border-terracotta bg-terracotta/10 text-terracotta'
                            : 'border-terracotta bg-transparent text-terracotta hover:bg-terracotta/10'
                        }`}
                      >
                        {isCurrentSaved ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
                        {isSavingChart ? t.savingChart : isCurrentSaved ? t.savedChart : t.saveChart}
                      </button>
                    )}
                  </div>
                </div>

                {/* NEW TABS NAVIGATION */}
                <div className="flex border-b border-border overflow-x-auto no-scrollbar">
                  {CHART_TABS.map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-5 text-xs tracking-widest uppercase font-body font-medium border-b-2 transition-colors whitespace-nowrap px-6 ${activeTab === tab ? 'border-terracotta text-ink' : 'border-transparent text-text-muted hover:text-text'}`}>
                      {t.tabs[tab]}
                    </button>
                  ))}
                </div>

                <div className="p-8 md:p-12 min-h-[600px]">
                  
                  {/* Top Grid Info */}
                  <div className="flex justify-between items-start mb-10 pb-6 border-b border-border">
                    <div className="space-y-5">
                      <div>
                        <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest mb-1">{t.timezone}</div>
                        <div className="font-chart text-sm text-ink">{chartData.timezone_detected}</div>
                      </div>
                      {chartData.sunrise && (
                        <div>
                          <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest mb-1">{t.sunrise}</div>
                          <div className="font-chart text-sm text-text font-medium">{chartData.sunrise}</div>
                        </div>
                      )}
                    </div>
                    <div className="space-y-5 text-right">
                      <div>
                        <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest mb-1">{t.absoluteLagna}</div>
                        <div className="font-chart text-sm text-terracotta font-semibold">{formatDMS(chartData.ascendant_longitude)}</div>
                      </div>
                      {chartData.sunset && (
                        <div>
                          <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest mb-1">{t.sunset}</div>
                          <div className="font-chart text-sm text-text font-medium">{chartData.sunset}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.2 }}>
                      
                      {/* STANDARD CHARTS */}
                      {['D1', 'D9', 'Chalit', 'Chandra', 'Gochar'].includes(activeTab) && (
                        <div className="flex flex-col items-center">
                          <h2 className={`font-header text-ink mb-8 ${lang === 'hi' ? 'text-3xl' : 'text-2xl'}`}>
                            {t.tabTitles[activeTab]}
                          </h2>
                          
                          {activeTab === 'Gochar' && (
                            <div className="flex flex-col items-center gap-3 mb-8">
                              <div className="washi-segmented">
                                <button onClick={() => setGocharBase('Lagna')} className={`px-5 py-2 font-body uppercase tracking-wider transition-colors ${gocharBase === 'Lagna' ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}>{t.lagnaBase}</button>
                                <button onClick={() => setGocharBase('Chandra')} className={`px-5 py-2 font-body uppercase tracking-wider transition-colors ${gocharBase === 'Chandra' ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}>{t.chandraBase}</button>
                              </div>
                              <div className="inline-flex items-center gap-4 text-[11px] font-body text-text-muted">
                                <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-terracotta" />{t.tabTitles.D1}</span>
                                <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-moss" />{t.ui.transitBadge}</span>
                              </div>
                            </div>
                          )}
                          
                          {/* Conditional Chart Rendering */}
                          {chartStyle === 'North' ? (
                            <KundliChart 
                              planets={renderData.planets} 
                              transitPlanets={renderData.transitPlanets} 
                              ascendantSign={renderData.asc}
                              ascLabel={(activeTab === 'D1' || activeTab === 'Gochar') ? t.ui.asc : undefined}
                              ascDegree={(activeTab === 'D1' || activeTab === 'Gochar') ? getIntegerDegree(chartData.ascendant_longitude) : undefined} 
                              transitLabel={t.ui?.transitBadge}
                              accessibility={{ planetAt: t.planetAt, transitPlanet: t.transitPlanet, retrograde: t.retrogradeLong }}
                              useSymbols={useSymbols}
                            />
                          ) : (
                            <SouthKundliChart 
                              planets={renderData.planets} 
                              transitPlanets={renderData.transitPlanets} 
                              ascendantSign={renderData.asc}
                              ascLabel={(activeTab === 'D1' || activeTab === 'Gochar') ? t.ui.asc : undefined}
                              ascDegree={(activeTab === 'D1' || activeTab === 'Gochar') ? getIntegerDegree(chartData.ascendant_longitude) : undefined} 
                              transitLabel={t.ui?.transitBadge}
                              accessibility={{ planetAt: t.planetAt, transitPlanet: t.transitPlanet, retrograde: t.retrogradeLong }}
                              useSymbols={useSymbols}
                            />
                          )}

                        </div>
                      )}

                      {/* NEW: PLANETARY DETAILS TAB */}
                      {activeTab === 'Details' && (
                        <div className="space-y-6">
                            <h2 className={`font-header text-ink mb-8 flex items-center gap-2 ${lang === 'hi' ? 'text-3xl' : 'text-2xl'}`}>
                              <Sparkles className="text-terracotta" size={24} /> {t.tabTitles?.Details}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {chartData.planets.map((p, idx) => {
                                // Force Rahu/Ketu Retrograde locally for the details cards
                                const isRetro = p.name === 'Rahu' || p.name === 'Ketu' ? true : p.is_retrograde;
                                
                                return (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} key={idx} className="washi-card p-5">
                                  <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-2">
                                      <h3 className={`font-body font-semibold text-ink ${lang === 'hi' ? 'text-xl' : 'text-lg'}`}>
                                        <span className="mr-2 font-chart text-terracotta">{planetSymbols[p.name]}</span>
                                        {t.planets[p.name]}
                                      </h3>
                                      {isRetro && (
                                        <span className={`font-body font-semibold washi-status-caution px-2 py-0.5 uppercase tracking-wider ${lang === 'hi' ? 'text-xs' : 'text-[10px]'}`}>
                                          {t.ui.retrograde}
                                        </span>
                                      )}
                                    </div>
                                    <DignityBadge dignity={p.dignity} t={t} />
                                  </div>
                                  <div className="space-y-2 text-sm text-text-muted">
                                    <div className="flex justify-between">
                                      <span className={lang === 'hi' ? 'text-base' : ''}>{t.ui?.house} {p.d1_house}</span> 
                                      <span className="font-chart text-ink">{t.signs[p.sign]} {formatDMS(p.longitude)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className={lang === 'hi' ? 'text-base' : ''}>{t.ui?.lord}</span> 
                                      <span className={`font-medium text-ink ${lang === 'hi' ? 'text-base' : ''}`}>{t.planets[p.sign_lord]}</span>
                                    </div>
                                    <div className="pt-2 mt-2 border-t border-border">
                                      <div className="flex justify-between items-center">
                                        <span className={`font-body font-semibold text-terracotta uppercase tracking-widest ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}>
                                        {t.ui.nakshatraLabel}
                                        </span> 
                                        <span className={`font-semibold text-ink ${lang === 'hi' ? 'text-base' : 'text-sm'}`}>
                                          {t.nakshatras[p.nakshatra]}
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center mt-1">
                                        <span className="text-[10px] text-text-muted uppercase tracking-widest">{t.ui?.pada}</span> 
                                        <span className="font-chart text-xs text-text-muted">{p.nakshatra_pada}</span>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )})}
                            </div>
                        </div>
                      )}

                      {/* NEW: VEDIC ASPECTS TAB */}
                      {activeTab === 'Aspects' && (
                        <div className="space-y-6">
                           <h2 className="text-2xl font-header text-ink mb-8 flex items-center gap-2"><Eye className="text-terracotta" size={24} /> {t.tabTitles?.Aspects}</h2>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             {chartData.planets.filter(p => p.aspects_houses.length > 0).map((p, idx) => (
                               <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }} key={idx} className="washi-card flex flex-col p-5">
                                  <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 rounded-full washi-icon-chip font-chart text-base">{planetSymbols[p.name]}</div>
                                    <span className="font-body font-semibold text-ink">{t.planets[p.name]}</span>
                                    <span className="text-xs text-text-muted">{t.inHouse} {p.d1_house}</span>
                                  </div>
                                  <div>
                                    <div className="text-[10px] font-body font-semibold text-text-muted uppercase tracking-widest mb-2">{t.ui?.aspects}</div>
                                    <div className="flex flex-wrap gap-2">
                                      {p.aspects_houses.map(h => (
                                        <div key={h} className="border border-border px-3 py-1.5 rounded text-sm font-body font-medium text-text">
                                          {t.ui?.house} {h}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                               </motion.div>
                             ))}
                           </div>
                        </div>
                      )}

                      {/* DASHA TAB */}
                      {activeTab === 'Dasha' && (
                        <div className="max-w-3xl mx-auto">
                          <h2 className="text-2xl font-header text-ink mb-2 text-center">{t.dashaTimeline}</h2>
                          <p className="text-center text-[10px] text-text-muted uppercase tracking-widest font-body font-semibold mb-10">{t.dashaSub}</p>
                          <div className="space-y-1">
                            {chartData.vimshottari_dashas.map((dasha, i) => <DashaNode key={i} dasha={dasha} t={t} lang={lang} />)}
                          </div>
                        </div>
                      )}

                    </motion.div>
                  </AnimatePresence>
                </div>
                {/* --- GLOBAL CONTROLS AREA --- */}
                  <div className="mt-2 pb-10 flex flex-col items-center gap-4">
                    
                    {/* 1. Symbol Switcher (Visible on all tabs EXCEPT Aspects) */}
                    {!['Aspects', 'Details', 'Dasha'].includes(activeTab) && (
                      <div className="washi-segmented">
                        <button 
                          onClick={() => setUseSymbols(false)} 
                          className={`px-4 py-1.5 text-[10px] font-body uppercase tracking-widest transition-colors ${!useSymbols ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-xs' : ''}`}
                        >
                          {t.ui.textToggle}
                        </button>
                        <button 
                          onClick={() => setUseSymbols(true)} 
                          className={`px-4 py-1.5 text-[10px] font-body uppercase tracking-widest transition-colors ${useSymbols ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-xs' : ''}`}
                        >
                          {t.ui.symbolToggle}
                        </button>
                      </div>
                    )}

                    {/* 2. Chart Style Switcher (Only visible when viewing a Chart tab) */}
                    {['D1', 'D9', 'Chalit', 'Chandra', 'Gochar'].includes(activeTab) && (
                      <div className="washi-segmented">
                        <button 
                          onClick={() => setChartStyle('North')} 
                          className={`px-6 py-2 font-body uppercase tracking-widest transition-colors ${chartStyle === 'North' ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}
                        >
                          {t.ui.northStyle}
                        </button>
                        <button 
                          onClick={() => setChartStyle('South')} 
                          className={`px-6 py-2 font-body uppercase tracking-widest transition-colors ${chartStyle === 'South' ? 'washi-segment-selected' : 'washi-segment-unselected'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}
                        >
                          {t.ui.southStyle}
                        </button>
                      </div>
                    )}
                  </div>
              </motion.div>
            ) : (
              // Empty State
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex items-center justify-center border border-dashed border-border rounded-lg bg-washi-elevated min-h-[600px]">
                <div className="text-center text-text-muted p-8 max-w-sm">
                  <div className="washi-icon-chip w-16 h-16 mx-auto mb-6">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-lg font-header text-ink mb-2">{t.awaitingTitle}</h3>
                  <p className="text-sm leading-relaxed">{t.awaitingDesc}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Footer Watermark */}
      <div className="w-full mt-12 pb-4 text-center opacity-40 pointer-events-none">
        <span className="text-[10px] text-text-muted font-body font-semibold tracking-[0.3em] uppercase">
          {t.watermark}
        </span>
      </div>
    </>
  );

  if (embedded) {
    return (
      <div className="chart-workspace-embedded w-full">
        <div className="flex flex-col">{shellContent}</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-washi p-4 md:p-8 text-text selection:bg-terracotta/20 flex flex-col">
      {shellContent}
    </main>
  );
}

export default function ChartWorkspace(props: ChartWorkspaceProps) {
  return (
    <Suspense fallback={null}>
      <ChartWorkspaceInner {...props} />
    </Suspense>
  );
}