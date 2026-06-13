'use client';

import React, { useState, useEffect, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useDebounce } from 'use-debounce';
import { Command } from 'cmdk';
import { Search, MapPin, Globe, ChevronDown, Sparkles, Eye, Download, Bookmark, BookmarkCheck, LayoutDashboard } from 'lucide-react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import KundliChart from '@/components/KundliChart';
import SouthKundliChart from '@/components/SouthKundliChart';
import ChartLibraryPanel from '@/components/ChartLibraryPanel';
import { downloadChartPdf } from '@/lib/generate-chart-pdf';
import type {
  Planet,
  TransitPlanet,
  Dasha,
  ChartData,
  ChartFormData,
  LocationResult,
  LanguageCode,
  ChartTab,
  SavedChartRecord,
} from '@/lib/chart-types';

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
const translations: Record<LanguageCode, any> = {
  en: {
    appTitle: "Astro", birthCity: "Birth City", searchPlaceholder: "Search global cities...", searching: "Searching coordinates...", noLocations: "No locations found.",
    natalParams: "Natal Parameters", dob: "Date of Birth", tob: "Time of Birth", gocharOverlay: "Gochar Overlay (Transit)", transitDate: "Transit Date",
    generateBtn: "Generate Analysis", computingBtn: "Computing Ephemeris...", awaitingTitle: "Awaiting Parameters", awaitingDesc: "Search for a location using the command menu and generate to view your professional workspace.",
    timezone: "Timezone", sunrise: "Sunrise", sunset: "Sunset", absoluteLagna: "Absolute Lagna", exactLongitudes: "Exact Planetary Longitudes", transitCoords: "Transit Coordinates",
    dashaTimeline: "Vimshottari Timeline", dashaSub: "Maha • Antar • Pratyantar • Sookshma", lagnaBase: "Lagna Base", chandraBase: "Chandra Base", watermark: "vaibhav shukla",
    errNoLoc: "Please select a location.", errCalc: "Calculation Failed.",
    personName: "Person's Name", personNamePlaceholder: "e.g. Vaibhav Shukla", errNoName: "Please enter the person's name.",
    saveChart: "Save Chart", savedChart: "Saved", downloadPdf: "Download PDF",
    tabs: { D1: "Lagna", D9: "Navmansha", Chalit: "Chalit", Chandra: "Chandra", Gochar: "Gochar", Details: "Details", Aspects: "Aspects", Dasha: "Dasha" },
    tabTitles: { D1: "Natal Chart (Lagna)", D9: "Navamasha Chart(D9)", Chalit: "Bhava Chalit", Chandra: "Moon Chart", Gochar: "Transit Overlay", Details: "Planetary Details", Aspects: "Vedic Aspects (Drishti)", Dasha: "Vimshottari Dasha" },
    planets: { Sun: "Sun", Moon: "Moon", Mars: "Mars", Mercury: "Mercury", Jupiter: "Jupiter", Venus: "Venus", Saturn: "Saturn", Rahu: "Rahu", Ketu: "Ketu", Ascendant: "Ascendant" },
    signs: { Aries: "Aries", Taurus: "Taurus", Gemini: "Gemini", Cancer: "Cancer", Leo: "Leo", Virgo: "Virgo", Libra: "Libra", Scorpio: "Scorpio", Sagittarius: "Sagittarius", Capricorn: "Capricorn", Aquarius: "Aquarius", Pisces: "Pisces" },
    ui: { textToggle: "Text", symbolToggle: "Symbols", transitBadge: "Transit Overlay", northStyle: "North Indian", southStyle: "South Indian", asc: "ASC", nakshatraLabel: "Nakshatra", house: "House", retrograde: "Ret.", pada: "Pada", lord: "Lord", aspects: "Aspects Houses", dignity: { Exalted: "Exalted", Debilitated: "Debilitated", "Own Sign": "Own Sign", Neutral: "Neutral" } },
    nakshatras: { Ashwini: "Ashwini", Bharani: "Bharani", Krittika: "Krittika", Rohini: "Rohini", Mrigashira: "Mrigashira", Ardra: "Ardra", Punarvasu: "Punarvasu", Pushya: "Pushya", Ashlesha: "Ashlesha", Magha: "Magha", "Purva Phalguni": "Purva Phalguni", "Uttara Phalguni": "Uttara Phalguni", Hasta: "Hasta", Chitra: "Chitra", Swati: "Swati", Vishakha: "Vishakha", Anuradha: "Anuradha", Jyeshtha: "Jyeshtha", Mula: "Mula", "Purva Ashadha": "Purva Ashadha", "Uttara Ashadha": "Uttara Ashadha", Shravana: "Shravana", Dhanishta: "Dhanishta", Shatabhisha: "Shatabhisha", "Purva Bhadrapada": "Purva Bhadrapada", "Uttara Bhadrapada": "Uttara Bhadrapada", Revati: "Revati" }
  },
  
  hi: {
    appTitle: "ज्योतिष", birthCity: "जन्म स्थान", searchPlaceholder: "शहर खोजें...", searching: "निर्देशांक खोजे जा रहे हैं...", noLocations: "कोई स्थान नहीं मिला।",
    natalParams: "जन्म विवरण", dob: "जन्म तिथि", tob: "जन्म समय", gocharOverlay: "गोचर (Transit)", transitDate: "गोचर तिथि",
    generateBtn: "कुण्डली बनाएं", computingBtn: "गणना हो रही है...", awaitingTitle: "जानकारी की प्रतीक्षा", awaitingDesc: "अपना जन्म स्थान खोजें और कुण्डली बनाएं।",
    timezone: "समय क्षेत्र", sunrise: "सूर्योदय", sunset: "सूर्यास्त", absoluteLagna: "स्पष्ट लग्न", exactLongitudes: "स्पष्ट ग्रह स्थिति", transitCoords: "गोचर निर्देशांक",
    dashaTimeline: "विंशोत्तरी दशा", dashaSub: "महा • अंतर • प्रत्यंतर • सूक्ष्म", lagnaBase: "लग्न आधार", chandraBase: "चन्द्र आधार", watermark: "वैभव शुक्ला",
    errNoLoc: "कृपया एक स्थान चुनें।", errCalc: "गणना विफल रही।",
    personName: "व्यक्ति का नाम", personNamePlaceholder: "जैसे वैभव शुक्ला", errNoName: "कृपया व्यक्ति का नाम दर्ज करें।",
    tabs: { D1: "लग्न", D9: "नवमांश", Chalit: "चलित", Chandra: "चंद्र", Gochar: "गोचर", Details: "विवरण", Aspects: "दृष्टि", Dasha: "दशा" },
    tabTitles: { D1: "जन्म कुण्डली (लग्न)", D9: "नवमांश कुण्डली", Chalit: "चलित कुण्डली", Chandra: "चंद्र कुण्डली", Gochar: "गोचर कुण्डली", Details: "ग्रह विवरण", Aspects: "वैदिक दृष्टि (Drishti)", Dasha: "विंशोत्तरी दशा" },
    planets: { Sun: "सूर्य", Moon: "चंद्र", Mars: "मंगल", Mercury: "बुध", Jupiter: "गुरु", Venus: "शुक्र", Saturn: " शनि", Rahu: "राहु", Ketu: "केतु", Ascendant: "लग्न" },
    signs: { Aries: "मेष", Taurus: "वृषभ", Gemini: "मिथुन", Cancer: "कर्क", Leo: "सिंह", Virgo: "कन्या", Libra: "तुला", Scorpio: "वृश्चिक", Sagittarius: "धनु", Capricorn: "मकर", Aquarius: "कुंभ", Pisces: "मीन" },
    ui: { textToggle: "पाठ", symbolToggle: "प्रतीक", transitBadge: "गोचर", northStyle: "उत्तर भारतीय", southStyle: "दक्षिण भारतीय", asc: "ल", nakshatraLabel: "नक्षत्र", house: "भाव", retrograde: "वक्री", pada: "पद", lord: "स्वामी", aspects: "दृष्टि भाव", dignity: { Exalted: "उच्च", Debilitated: "नीच", "Own Sign": "स्वराशि", Neutral: "सम" } },
    nakshatras: { Ashwini: "अश्विनी", Bharani: "भरणी", Krittika: "कृत्तिका", Rohini: "रोहिणी", Mrigashira: "मृगशिरा", Ardra: "आर्द्रा", Punarvasu: "पुनर्वसु", Pushya: "पुष्य", Ashlesha: "आश्लेषा", Magha: "मघा", "Purva Phalguni": "पूर्वाफाल्गुनी", "Uttara Phalguni": "उत्तराफाल्गुनी", Hasta: "हस्त", Chitra: "चित्रा", Swati: "स्वाती", Vishakha: "विशाखा", Anuradha: "अनुराधा", Jyeshtha: "ज्येष्ठा", Mula: "मूल", "Purva Ashadha": "पूर्वाषाढा", "Uttara Ashadha": "उत्तराषाढा", Shravana: "श्रवण", Dhanishta: "धनिष्ठा", Shatabhisha: "शतभिषा", "Purva Bhadrapada": "पूर्वाभाद्रपद", "Uttara Bhadrapada": "उत्तराभाद्रपद", Revati: "रेवती" }
  },

  ja: {
    appTitle: "アストロ", birthCity: "出生地", searchPlaceholder: "都市を検索...", searching: "座標を検索中...", noLocations: "見つかりません。",
    natalParams: "出生データ", dob: "生年月日", tob: "出生時刻", gocharOverlay: "トランジット (Gochar)", transitDate: "トランジット日付",
    generateBtn: "チャートを作成", computingBtn: "計算中...", awaitingTitle: "パラメータ待機中", awaitingDesc: "場所を検索し、生成してプロフェッショナルワークスペースを表示します。",
    timezone: "タイムゾーン", sunrise: "日の出", sunset: "日の入り", absoluteLagna: "アセンダント", exactLongitudes: "惑星の正確な位置", transitCoords: "トランジット座標",
    dashaTimeline: "ヴィムショッタリ・ダシャー", dashaSub: "マハー • アンタル • プラティヤンタル • スークシュマ", lagnaBase: "ラグナ基準", chandraBase: "チャンドラ基準", watermark: "ヴァイバヴ・シュクラ",
    errNoLoc: "場所を選択してください。", errCalc: "計算に失敗しました。",
    tabs: { D1: "ラグナ", D9: "チャート", Chalit: "チャリット", Chandra: "チャンドラ", Gochar: "トランジット", Details: "詳細", Aspects: "アスペクト", Dasha: "ダシャー" },
    tabTitles: { D1: "ネイタルチャート (ラグナ)", D9: "D9 チャート", Chalit: "チャリットチャート", Chandra: "チャンドラチャート", Gochar: "トランジットチャート", Details: "惑星の詳細", Aspects: "ヴェーダのアスペクト (Drishti)", Dasha: "ヴィムショッタリ・ダシャー" },
    planets: { Sun: "太陽", Moon: "月", Mars: "火星", Mercury: "水星", Jupiter: "木星", Venus: "金星", Saturn: "土星", Rahu: "ラーフ", Ketu: "ケトゥ", Ascendant: "アセンダント" },
    signs: { Aries: "牡羊座", Taurus: "牡牛座", Gemini: "双子座", Cancer: "蟹座", Leo: "獅子座", Virgo: "乙女座", Libra: "天秤座", Scorpio: "蠍座", Sagittarius: "射手座", Capricorn: "山羊座", Aquarius: "水瓶座", Pisces: "魚座" },
    ui: { textToggle: "テキスト", symbolToggle: "記号", transitBadge: "トランジット", northStyle: "北インド式", southStyle: "南インド式", asc: "ASC", nakshatraLabel: "ナクシャトラ", house: "室", retrograde: "逆行", pada: "パダ", lord: "支配星", aspects: "アスペクトのハウス", dignity: { Exalted: "高揚", Debilitated: "減衰", "Own Sign": "本来の座", Neutral: "中立" } },
    nakshatras: { Ashwini: "アシュヴィニー", Bharani: "バラニー", Krittika: "クリッティカー", Rohini: "ローヒニー", Mrigashira: "ムリガシラー", Ardra: "アールドラー", Punarvasu: "プナルヴァス", Pushya: "プシャ", Ashlesha: "アーシュレーシャー", Magha: "マガー", "Purva Phalguni": "プールヴァ・ファルグニー", "Uttara Phalguni": "ウッタラ・ファルグニー", Hasta: "ハスタ", Chitra: "チトラー", Swati: "スヴァーティー", Vishakha: "ヴィシャーカ", Anuradha: "アヌラーダー", Jyeshtha: "ジェーシュター", Mula: "ムーラ", "Purva Ashadha": "プールヴァーシャーダー", "Uttara Ashadha": "ウッタラーシャーダー", Shravana: "シュラヴァナ", Dhanishta: "ダニシュター", Shatabhisha: "シャタビシャー", "Purva Bhadrapada": "プールヴァ・バードラパダー", "Uttara Bhadrapada": "ウッタラ・バードラパダー", Revati: "レーヴァティー" }
  },

  ko: {
    appTitle: "아스트로", birthCity: "출생지", searchPlaceholder: "도시 검색...", searching: "좌표 검색 중...", noLocations: "위치를 찾을 수 없습니다.",
    natalParams: "출생 데이터", dob: "생년월일", tob: "태어난 시간", gocharOverlay: "트랜짓 (Gochar)", transitDate: "트랜짓 날짜",
    generateBtn: "차트 생성", computingBtn: "계산 중...", awaitingTitle: "매개변수 대기 중", awaitingDesc: "위치를 검색하고 생성하여 전문 작업 공간을 확인하세요.",
    timezone: "시간대", sunrise: "일출", sunset: "일몰", absoluteLagna: "어센던트 (Lagna)", exactLongitudes: "정확한 행성 위치", transitCoords: "트랜짓 좌표",
    dashaTimeline: "빔쇼타리 다샤", dashaSub: "마하 • 안타르 • 프라티얀타르 • 수크슈마", lagnaBase: "라그나 기준", chandraBase: "찬드라 기준", watermark: "바이바브 슈클라",
    errNoLoc: "위치를 선택해 주세요.", errCalc: "계산에 실패했습니다.",
    tabs: { D1: "네이탈 차트", D9: "차트", Chalit: "찰리트", Chandra: "찬드라", Gochar: "트랜짓", Details: "세부 정보", Aspects: "애스펙트", Dasha: "다샤" },
    tabTitles: { D1: "네이탈 차트 (Lagna)", D9: "D9 차트", Chalit: "찰리트 차트", Chandra: "찬드라 차트", Gochar: "트랜짓 차트", Details: "행성 세부 정보", Aspects: "베다 애스펙트 (Drishti)", Dasha: "빔쇼타리 다샤" },
    planets: { Sun: "태양", Moon: "달", Mars: "화성", Mercury: "수성", Jupiter: "목성", Venus: "금성", Saturn: "토성", Rahu: "라후", Ketu: "케투", Ascendant: "어센던트" },
    signs: { Aries: "양자리", Taurus: "황소자리", Gemini: "쌍둥이자리", Cancer: "게자리", Leo: "사자자리", Virgo: "처녀자리", Libra: "천칭자리", Scorpio: "전갈자리", Sagittarius: "궁수자리", Capricorn: "염소자리", Aquarius: "물병자리", Pisces: "물고기자리" },
    ui: { textToggle: "텍스트", symbolToggle: "기호", transitBadge: "트랜짓 오버레이", northStyle: "북인도 방식", southStyle: "남인도 방식", asc: "ASC", nakshatraLabel: "낙샤트라", house: "하우스", retrograde: "역행", pada: "파다", lord: "지배성", aspects: "애스펙트 하우스", dignity: { Exalted: "고양", Debilitated: "쇠약", "Own Sign": "자신의 별자리", Neutral: "중립" } },
    nakshatras: { Ashwini: "아슈비니", Bharani: "바라니", Krittika: "크리티카", Rohini: "로히니", Mrigashira: "므리가시라", Ardra: "아르드라", Punarvasu: "푸나르바수", Pushya: "푸샤", Ashlesha: "아슐레샤", Magha: "마가", "Purva Phalguni": "푸르바 팔구니", "Uttara Phalguni": "우타라 팔구니", Hasta: "하스타", Chitra: "치트라", Swati: "스와티", Vishakha: "비샤카", Anuradha: "아누라다", Jyeshtha: "제슈타", Mula: "물라", "Purva Ashadha": "푸르바 아샤다", "Uttara Ashadha": "우타라 아샤다", Shravana: "슈라바나", Dhanishta: "다니슈타", Shatabhisha: "샤타비샤", "Purva Bhadrapada": "푸르바 바드라파다", "Uttara Bhadrapada": "우타라 바드라파다", Revati: "레바티" }
  }
};

const languages = [
  { code: 'en', native: 'English' },
  { code: 'hi', native: 'हिन्दी' },
  { code: 'ja', native: '日本語' },
  { code: 'ko', native: '한국어' },
];

const planetSymbols: Record<string, string> = {
  Sun: "☉", Moon: "☽", Mars: "♂", Mercury: "☿", Jupiter: "♃",
  Venus: "♀", Saturn: "♄", Rahu: "☊", Ketu: "☋"
};

// --- FLUID ACCORDION COMPONENT ---
const DashaNode = ({ dasha, level = 1, t }: { dasha: Dasha, level?: number, t: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubs = dasha.sub_dashas && dasha.sub_dashas.length > 0;
  
  const levelStyles: Record<number, string> = {
    1: "bg-indigo-50/50 border-indigo-200 text-indigo-950 font-bold text-lg p-4 hover:bg-indigo-50",
    2: "bg-white border-blue-100 text-blue-900 font-semibold text-md p-3 ml-4 hover:bg-blue-50/50",
    3: "bg-gray-50/50 border-gray-100 text-gray-800 font-medium text-sm p-2 ml-8 hover:bg-gray-100",
    4: "bg-transparent border-transparent text-gray-500 font-normal text-xs p-1.5 ml-12",
  };

  return (
    <div className="w-full">
      <div onClick={() => hasSubs && setIsOpen(!isOpen)} className={`flex justify-between items-center rounded-lg border cursor-pointer transition-all duration-200 mb-1 ${levelStyles[level]}`}>
        <div className="flex items-center gap-2">
          {hasSubs && <motion.span animate={{ rotate: isOpen ? 90 : 0 }} className="text-[10px] opacity-40">▶</motion.span>}
          {!hasSubs && <span className="w-3"></span>} 
          <span>
            <span className="mr-2 text-indigo-500 font-sans">{planetSymbols[dasha.lord]}</span>
            {t.planets?.[dasha.lord] || dasha.lord}
          </span>
        </div>
        <div className="text-right flex gap-4 opacity-80 font-mono text-xs">
          <span>{dasha.start_date}</span>
          <span className="text-gray-300">|</span>
          <span>{dasha.end_date}</span>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && hasSubs && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: "easeOut" }} className="overflow-hidden border-l-2 border-indigo-100 ml-4 pl-2">
            {dasha.sub_dashas!.map((sub, i) => <DashaNode key={i} dasha={sub} level={level + 1} t={t} />)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- DIGNITY BADGE COMPONENT ---
const DignityBadge = ({ dignity, t }: { dignity: string, t: any }) => {
  const styles: Record<string, string> = {
    "Exalted": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "Debilitated": "bg-red-100 text-red-800 border-red-200",
    "Own Sign": "bg-blue-100 text-blue-800 border-blue-200",
    "Neutral": "bg-gray-100 text-gray-600 border-gray-200"
  };
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase tracking-wider ${styles[dignity] || styles["Neutral"]}`}>
      {t.ui?.dignity?.[dignity] || dignity}
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
  const [isClient, setIsClient] = useState(false);
  const today = new Date();
  
  const [lang, setLang] = useState<LanguageCode>('hi');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [personName, setPersonName] = useState('');
  const [formData, setFormData] = useState<ChartFormData>({ 
    year: 2004, month: 4, day: 23, hour: 10, minute: 0, 
    latitude: 25.4488, longitude: 78.5698, 
    transit_year: today.getFullYear(), transit_month: today.getMonth() + 1, transit_day: today.getDate() 
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

  // Safe fallback to english if language dictionary is partially empty
  const t = translations[lang]?.appTitle ? translations[lang] : translations.en;

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

  useEffect(() => { setIsClient(true); }, []);

  useEffect(() => {
    if (enablePersistence) {
      refreshLibrary();
    }
  }, [enablePersistence, refreshLibrary]);

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
      alert('Could not update saved status.');
    } finally {
      setIsSavingChart(false);
    }
  };

  const handleDeleteChart = async (chartId: string) => {
    if (!confirm('Delete this chart?')) return;
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
      alert('Could not delete chart.');
    }
  };

  const handleDownloadPdf = () => {
    if (!chartData) return;
    downloadChartPdf({
      name: personName.trim() || 'Chart Report',
      locationName: selectedLocationName,
      formData,
      chartData,
    });
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
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(debouncedQuery)}&limit=5`);
        setLocationResults(await res.json());
      } catch (error) { console.error(error); } 
      finally { setIsSearching(false); }
    };
    fetchLocations();
  }, [debouncedQuery]);

  const selectLocation = (loc: LocationResult) => {
    setFormData(prev => ({ ...prev, latitude: parseFloat(loc.lat), longitude: parseFloat(loc.lon) }));
    setSelectedLocationName(loc.display_name);
    setIsCommandOpen(false);
    setLocationQuery("");
  };

  const generateCharts = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.latitude === 0 && formData.longitude === 0) return alert(t.errNoLoc || "Please select a location.");
    if (enablePersistence && !personName.trim()) return alert(t.errNoName || "Please enter the person's name.");
    setIsLoading(true);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const response = await fetch(`${API_URL}/api/v1/compute-charts`, { 
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) 
      });
      if (!response.ok) throw new Error(t.errCalc || "Calculation Failed.");
      const data: ChartData = await response.json();
      setChartData(data);
      setCurrentChartId(null);
      setIsCurrentSaved(false);
      if (enablePersistence) {
        await persistChart(data, false);
      }
    } catch (err: any) { alert(err.message); } 
    finally { setIsLoading(false); }
  };

  const getRenderData = () => {
    if (!chartData) return { planets: [], transitPlanets: [], asc: "Aries" };
    
    // NEW: We added `customSign` so we can override the D1 sign for D9 and Chalit charts
    const mappedPlanets = (p: Planet, house: number, customSign?: string) => ({ 
      name: t.planets?.[p.name] || p.name, 
      enName: p.name,
      house, 
      degree: getIntegerDegree(p.longitude),
      isRetrograde: (p.name === 'Rahu' || p.name === 'Ketu') ? true : Boolean(p.is_retrograde),
      sign: customSign || p.sign // Map to the new sign if provided
    });
    
    const mappedTransits = (p: TransitPlanet, house: number, customSign?: string) => ({ 
      name: t.planets?.[p.name] || p.name, 
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
            <Link href="/sign-in" className="text-sm font-medium text-indigo-700 hover:text-indigo-900 px-4 py-2 rounded-xl hover:bg-indigo-50 transition-colors">
              Sign in
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/chart" className="flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-900 px-4 py-2 rounded-xl hover:bg-indigo-50 transition-colors">
              <LayoutDashboard size={16} />
              Chart
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      )}

      <div className={`max-w-7xl mx-auto grid grid-cols-1 ${enablePersistence ? 'xl:grid-cols-12' : 'lg:grid-cols-12'} gap-8 flex-grow w-full`}>
        
        {/* LEFT COLUMN: Form */}
        <motion.div layout className={`${enablePersistence ? 'xl:col-span-3' : 'lg:col-span-4'} space-y-6`}>
          <div className="bg-white p-8 rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            
            {/* Header & Lang Setup */}
            <div className="flex justify-between items-center mb-8 relative">
              <h1 className="text-3xl font-serif font-medium text-indigo-950 tracking-tight">{t.appTitle}</h1>
              
              <div className="relative">
                <button 
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 text-sm font-medium text-gray-600"
                >
                  <Globe size={14} className="text-gray-400" />
                  <span>{languages.find(l => l.code === lang)?.native}</span>
                  <ChevronDown size={14} className="text-gray-400" />
                </button>

                <AnimatePresence>
                  {isLangMenuOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setIsLangMenuOpen(false)} />
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 py-1"
                      >
                        {languages.map((l) => (
                          <button
                            key={l.code}
                            onClick={() => { setLang(l.code as LanguageCode); setIsLangMenuOpen(false); }}
                            className={`w-full text-left px-4 py-2 text-sm transition-colors ${lang === l.code ? 'bg-indigo-50 text-indigo-900 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
                          >
                            {l.native}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CMDK Autocomplete */}
            <div className="mb-8 relative">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{t.birthCity}</label>
              <div 
                onClick={() => setIsCommandOpen(true)}
                className="flex items-center gap-3 w-full p-3.5 border border-gray-200 rounded-xl bg-gray-50/50 text-sm cursor-text hover:bg-gray-50 transition-colors"
              >
                <Search size={16} className="text-gray-400" />
                <span className={selectedLocationName ? "text-gray-900" : "text-gray-400"}>
                  {selectedLocationName || t.searchPlaceholder}
                </span>
              </div>

              <AnimatePresence>
                {isCommandOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsCommandOpen(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.15 }}
                      className="absolute top-0 left-0 w-full z-50 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      <Command className="w-full" shouldFilter={false}>
                        <div className="flex items-center px-3 border-b border-gray-100">
                          <Search size={16} className="text-indigo-400 mr-2" />
                          <Command.Input 
                            autoFocus
                            value={locationQuery} 
                            onValueChange={setLocationQuery} 
                            placeholder={t.searchPlaceholder} 
                            className="w-full py-4 text-sm outline-none bg-transparent placeholder:text-gray-300"
                          />
                        </div>
                        <Command.List className="max-h-60 overflow-y-auto p-2 relative z-50">
                          {isSearching && <div className="p-4 text-sm text-center text-gray-400">{t.searching}</div>}
                          {!isSearching && locationResults.length === 0 && locationQuery && <div className="p-4 text-sm text-center text-gray-400">{t.noLocations}</div>}
                          {!isSearching && locationResults.map((loc, i) => (
                            <Command.Item 
                              key={i} 
                              value={loc.display_name}
                              onSelect={() => selectLocation(loc)}
                              className="flex items-center gap-2 p-3 text-sm rounded-lg hover:bg-indigo-50 cursor-pointer text-gray-700 data-[selected=true]:bg-indigo-50"
                            >
                              <MapPin size={14} className="text-indigo-300 shrink-0" />
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
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 mb-4">{t.natalParams}</h3>
                <div className="mb-4">
                  <label className="block text-[10px] text-gray-400 mb-1.5 ml-1">
                    {t.personName || "Person's Name"}
                    {enablePersistence && <span className="text-indigo-400"> *</span>}
                  </label>
                  <input
                    type="text"
                    value={personName}
                    onChange={(e) => setPersonName(e.target.value)}
                    placeholder={t.personNamePlaceholder || 'e.g. Vaibhav Shukla'}
                    className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all bg-gray-50/50 text-gray-700"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-gray-400 mb-1.5 ml-1">{t.dob}</label>
                    <input type="date" value={natalDateString} onChange={(e) => handleDateChange(e, 'natal')} className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all bg-gray-50/50 cursor-pointer text-gray-700" />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-400 mb-1.5 ml-1">{t.tob}</label>
                    <input type="time" value={natalTimeString} onChange={handleTimeChange} className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all bg-gray-50/50 cursor-pointer text-gray-700" />
                  </div>
                </div>
              </div>

              {/* --- GOCHAR OVERLAY --- */}
              <div>
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 mb-4">{t.gocharOverlay}</h3>
                <div className="w-full">
                  <label className="block text-[10px] text-emerald-600/70 mb-1.5 ml-1">{t.transitDate}</label>
                  <input type="date" value={transitDateString} onChange={(e) => handleDateChange(e, 'transit')} className="w-full p-3 border border-emerald-200 rounded-xl text-sm text-emerald-900 bg-emerald-50 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all cursor-pointer" />
                </div>
              </div>

              <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isLoading || !selectedLocationName || (enablePersistence && !personName.trim())} className="w-full py-4 bg-indigo-950 text-white font-medium text-sm rounded-xl shadow-lg shadow-indigo-900/20 hover:bg-indigo-900 disabled:opacity-50 disabled:shadow-none transition-all">
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
        <div className={`${enablePersistence ? 'xl:col-span-9' : 'lg:col-span-8'}`}>
          <AnimatePresence mode="wait">
            {chartData ? (
              <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }} className="bg-white rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                
                <div className="flex flex-wrap items-center justify-between gap-3 px-6 md:px-8 py-4 border-b border-gray-100 bg-gray-50/40">
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Subject</div>
                    <div className="font-serif text-lg text-indigo-950">{personName.trim() || '—'}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleDownloadPdf}
                      className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl border border-gray-200 bg-white text-gray-700 hover:border-indigo-200 hover:text-indigo-800 transition-colors"
                    >
                      <Download size={14} />
                      {t.downloadPdf || 'Download PDF'}
                    </button>
                    {enablePersistence && currentChartId && (
                      <button
                        type="button"
                        onClick={() => handleToggleSave()}
                        disabled={isSavingChart}
                        className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl border transition-colors ${
                          isCurrentSaved
                            ? 'border-indigo-200 bg-indigo-50 text-indigo-800'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-indigo-200 hover:text-indigo-800'
                        }`}
                      >
                        {isCurrentSaved ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
                        {isCurrentSaved ? (t.savedChart || 'Saved') : (t.saveChart || 'Save Chart')}
                      </button>
                    )}
                  </div>
                </div>

                {/* NEW TABS NAVIGATION */}
                <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar">
                  {['D1', 'D9', 'Chalit', 'Chandra', 'Gochar', 'Details', 'Aspects', 'Dasha'].map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab as any)} className={`flex-1 py-5 text-xs tracking-widest uppercase font-bold border-b-2 transition-colors whitespace-nowrap px-6 ${activeTab === tab ? 'border-indigo-900 text-indigo-950 bg-white' : 'border-transparent text-gray-400 hover:text-gray-900 hover:bg-gray-50/50'}`}>
                      {t.tabs?.[tab] || tab}
                    </button>
                  ))}
                </div>

                <div className="p-8 md:p-12 min-h-[600px]">
                  
                  {/* Top Grid Info */}
                  <div className="flex justify-between items-start mb-10 pb-6 border-b border-gray-100">
                    <div className="space-y-5">
                      <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t.timezone}</div>
                        <div className="font-mono text-sm text-gray-900">{chartData.timezone_detected}</div>
                      </div>
                      {chartData.sunrise && (
                        <div>
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t.sunrise}</div>
                          <div className="font-mono text-sm text-amber-600 font-medium">{chartData.sunrise}</div>
                        </div>
                      )}
                    </div>
                    <div className="space-y-5 text-right">
                      <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t.absoluteLagna}</div>
                        <div className="font-mono text-sm text-indigo-600 font-bold">{formatDMS(chartData.ascendant_longitude)}</div>
                      </div>
                      {chartData.sunset && (
                        <div>
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t.sunset}</div>
                          <div className="font-mono text-sm text-orange-600 font-medium">{chartData.sunset}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.2 }}>
                      
                      {/* STANDARD CHARTS */}
                      {['D1', 'D9', 'Chalit', 'Chandra', 'Gochar'].includes(activeTab) && (
                        <div className="flex flex-col items-center">
                          <h2 className={`font-serif text-indigo-950 mb-8 ${lang === 'hi' ? 'text-3xl' : 'text-2xl'}`}>
                            {t.tabTitles?.[activeTab] || activeTab}
                          </h2>
                          
                          {activeTab === 'Gochar' && (
                            <div className="flex justify-center mb-8">
                              <div className="bg-gray-100/80 p-1 rounded-xl inline-flex">
                                <button onClick={() => setGocharBase('Lagna')} className={`px-5 py-2 font-bold uppercase tracking-wider rounded-lg transition-all ${gocharBase === 'Lagna' ? 'bg-white text-indigo-950 shadow-sm' : 'text-gray-400 hover:text-gray-700'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}>{t.lagnaBase}</button>
                                <button onClick={() => setGocharBase('Chandra')} className={`px-5 py-2 font-bold uppercase tracking-wider rounded-lg transition-all ${gocharBase === 'Chandra' ? 'bg-white text-indigo-950 shadow-sm' : 'text-gray-400 hover:text-gray-700'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}>{t.chandraBase}</button>
                              </div>
                            </div>
                          )}
                          
                          {/* Conditional Chart Rendering */}
                          {chartStyle === 'North' ? (
                            <KundliChart 
                              planets={renderData.planets} 
                              transitPlanets={renderData.transitPlanets} 
                              ascendantSign={renderData.asc}
                              ascLabel={(activeTab === 'D1' || activeTab === 'Gochar') ? (t.ui?.asc || 'Asc') : undefined}
                              ascDegree={(activeTab === 'D1' || activeTab === 'Gochar') ? getIntegerDegree(chartData.ascendant_longitude) : undefined} 
                              transitLabel={t.ui?.transitBadge}
                              useSymbols={useSymbols}
                            />
                          ) : (
                            <SouthKundliChart 
                              planets={renderData.planets} 
                              transitPlanets={renderData.transitPlanets} 
                              ascendantSign={renderData.asc}
                              ascLabel={(activeTab === 'D1' || activeTab === 'Gochar') ? (t.ui?.asc || 'Asc') : undefined}
                              ascDegree={(activeTab === 'D1' || activeTab === 'Gochar') ? getIntegerDegree(chartData.ascendant_longitude) : undefined} 
                              transitLabel={t.ui?.transitBadge}
                              useSymbols={useSymbols}
                            />
                          )}

                        </div>
                      )}

                      {/* NEW: PLANETARY DETAILS TAB */}
                      {activeTab === 'Details' && (
                        <div className="space-y-6">
                            <h2 className={`font-serif text-indigo-950 mb-8 flex items-center gap-2 ${lang === 'hi' ? 'text-3xl' : 'text-2xl'}`}>
                              <Sparkles className="text-amber-500" size={24} /> {t.tabTitles?.Details}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {chartData.planets.map((p, idx) => {
                                // Force Rahu/Ketu Retrograde locally for the details cards
                                const isRetro = p.name === 'Rahu' || p.name === 'Ketu' ? true : p.is_retrograde;
                                
                                return (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} key={idx} className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                                  <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-2">
                                      <h3 className={`font-bold text-indigo-950 ${lang === 'hi' ? 'text-xl' : 'text-lg'}`}>
                                        <span className="mr-2 text-indigo-500">{planetSymbols[p.name]}</span>
                                        {t.planets?.[p.name] || p.name}
                                      </h3>
                                      {isRetro && (
                                        <span className={`font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded uppercase tracking-wider ${lang === 'hi' ? 'text-xs' : 'text-[10px]'}`}>
                                          {t.ui?.retrograde || 'Retrograde'}
                                        </span>
                                      )}
                                    </div>
                                    <DignityBadge dignity={p.dignity} t={t} />
                                  </div>
                                  <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex justify-between">
                                      <span className={`text-gray-400 ${lang === 'hi' ? 'text-base' : ''}`}>{t.ui?.house} {p.d1_house}</span> 
                                      <span className="font-mono text-gray-900">{t.signs?.[p.sign] || p.sign} {formatDMS(p.longitude)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className={`text-gray-400 ${lang === 'hi' ? 'text-base' : ''}`}>{t.ui?.lord}</span> 
                                      <span className={`font-medium text-gray-900 ${lang === 'hi' ? 'text-base' : ''}`}>{t.planets?.[p.sign_lord] || p.sign_lord}</span>
                                    </div>
                                    <div className="pt-2 mt-2 border-t border-gray-200/60">
                                      <div className="flex justify-between items-center">
                                        <span className={`font-bold text-indigo-400 uppercase tracking-widest ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}>
                                        {t.ui?.nakshatraLabel || 'Nakshatra'}
                                        </span> 
                                        <span className={`font-semibold text-indigo-900 ${lang === 'hi' ? 'text-base' : 'text-sm'}`}>
                                          {t.nakshatras?.[p.nakshatra] || p.nakshatra}
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center mt-1">
                                        <span className="text-[10px] text-gray-400 uppercase tracking-widest">{t.ui?.pada}</span> 
                                        <span className="font-mono text-xs text-gray-500">{p.nakshatra_pada}</span>
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
                           <h2 className="text-2xl font-serif text-indigo-950 mb-8 flex items-center gap-2"><Eye className="text-indigo-500" size={24} /> {t.tabTitles?.Aspects}</h2>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             {chartData.planets.filter(p => p.aspects_houses.length > 0).map((p, idx) => (
                               <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }} key={idx} className="flex flex-col p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                                  <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-bold text-base">{planetSymbols[p.name]}</div>
                                    <span className="font-bold text-indigo-950">{t.planets?.[p.name] || p.name}</span>
                                    <span className="text-xs text-indigo-400">in {t.ui?.house} {p.d1_house}</span>
                                  </div>
                                  <div>
                                    <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mb-2">{t.ui?.aspects}</div>
                                    <div className="flex flex-wrap gap-2">
                                      {p.aspects_houses.map(h => (
                                        <div key={h} className="bg-white border border-indigo-200 px-3 py-1.5 rounded-lg text-sm font-medium text-indigo-900 shadow-sm">
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
                          <h2 className="text-2xl font-serif text-indigo-950 mb-2 text-center">{t.dashaTimeline}</h2>
                          <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-10">{t.dashaSub}</p>
                          <div className="space-y-1">
                            {chartData.vimshottari_dashas.map((dasha, i) => <DashaNode key={i} dasha={dasha} t={t} />)}
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
                      <div className="bg-gray-50 p-1 rounded-full inline-flex border border-gray-200">
                        <button 
                          onClick={() => setUseSymbols(false)} 
                          className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${!useSymbols ? 'bg-white text-indigo-900 shadow-sm' : 'text-gray-400 hover:text-gray-700'} ${lang === 'hi' ? 'text-xs' : ''}`}
                        >
                          {t.ui?.textToggle || 'Text'}
                        </button>
                        <button 
                          onClick={() => setUseSymbols(true)} 
                          className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${useSymbols ? 'bg-white text-indigo-900 shadow-sm' : 'text-gray-400 hover:text-gray-700'} ${lang === 'hi' ? 'text-xs' : ''}`}
                        >
                          {t.ui?.symbolToggle || 'Symbols'}
                        </button>
                      </div>
                    )}

                    {/* 2. Chart Style Switcher (Only visible when viewing a Chart tab) */}
                    {['D1', 'D9', 'Chalit', 'Chandra', 'Gochar'].includes(activeTab) && (
                      <div className="bg-gray-50 p-1 rounded-full inline-flex border border-gray-200">
                        <button 
                          onClick={() => setChartStyle('North')} 
                          className={`px-6 py-2 font-bold uppercase tracking-widest rounded-full transition-all ${chartStyle === 'North' ? 'bg-white text-indigo-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}
                        >
                          {t.ui?.northStyle || 'North Indian'}
                        </button>
                        <button 
                          onClick={() => setChartStyle('South')} 
                          className={`px-6 py-2 font-bold uppercase tracking-widest rounded-full transition-all ${chartStyle === 'South' ? 'bg-white text-indigo-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'} ${lang === 'hi' ? 'text-sm' : 'text-xs'}`}
                        >
                          {t.ui?.southStyle || 'South Indian'}
                        </button>
                      </div>
                    )}
                  </div>
              </motion.div>
            ) : (
              // Empty State
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex items-center justify-center border border-dashed border-gray-200 rounded-3xl bg-white/50 min-h-[600px]">
                <div className="text-center text-gray-400 p-8 max-w-sm">
                  <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MapPin className="text-gray-300" size={24} />
                  </div>
                  <h3 className="text-lg font-serif text-gray-900 mb-2">{t.awaitingTitle}</h3>
                  <p className="text-sm leading-relaxed">{t.awaitingDesc}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Footer Watermark */}
      <div className="w-full mt-12 pb-4 text-center opacity-30 pointer-events-none">
        <span className="text-[10px] text-gray-500 font-bold tracking-[0.3em] uppercase">
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
    <main className="min-h-screen bg-background p-4 md:p-8 text-foreground selection:bg-indigo-200 flex flex-col dark:selection:bg-indigo-900/40">
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