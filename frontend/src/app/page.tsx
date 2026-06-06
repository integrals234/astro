'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDebounce } from 'use-debounce';
import { Command } from 'cmdk';
import { Search, MapPin } from 'lucide-react';
import KundliChart from '@/components/KundliChart';

// --- TYPES ---
interface Planet { name: string; longitude: number; sign: string; d1_house: number; d9_sign: string; chalit_house: number; }
interface TransitPlanet { name: string; longitude: number; sign: string; natal_house: number; }
interface Dasha { lord: string; start_date: string; end_date: string; sub_dashas?: Dasha[]; }
interface ChartData { ascendant_longitude: number; ascendant_sign: string; d9_ascendant_sign: string; planets: Planet[]; transit_planets: TransitPlanet[]; chalit_cusps: number[]; vimshottari_dashas: Dasha[]; timezone_detected: string; }
interface LocationResult { display_name: string; lat: string; lon: string; }

const signToNumber: Record<string, number> = { "Aries": 1, "Taurus": 2, "Gemini": 3, "Cancer": 4, "Leo": 5, "Virgo": 6, "Libra": 7, "Scorpio": 8, "Sagittarius": 9, "Capricorn": 10, "Aquarius": 11, "Pisces": 12 };
const formatDMS = (raw: number) => { const l = raw % 30; const d = Math.floor(l); const mF = (l - d) * 60; const m = Math.floor(mF); const s = Math.floor((mF - m) * 60); return `${d}° ${m.toString().padStart(2, '0')}' ${s.toString().padStart(2, '0')}"`; };
const getIntegerDegree = (raw: number) => Math.floor(raw % 30);

// --- FLUID ACCORDION COMPONENT ---
const DashaNode = ({ dasha, level = 1 }: { dasha: Dasha, level?: number }) => {
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
          <span>{dasha.lord}</span>
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
            {dasha.sub_dashas!.map((sub, i) => <DashaNode key={i} dasha={sub} level={level + 1} />)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- MAIN DASHBOARD ---
export default function ProfessionalDashboard() {
  const today = new Date();
  const [formData, setFormData] = useState({ year: 1990, month: 9, day: 5, hour: 14, minute: 30, latitude: 0, longitude: 0, transit_year: today.getFullYear(), transit_month: today.getMonth() + 1, transit_day: today.getDate() });
  
  // CMDK & Debounce State
  const [locationQuery, setLocationQuery] = useState("");
  const [debouncedQuery] = useDebounce(locationQuery, 500); // Increased to 500ms to prevent API rate limits
  const [locationResults, setLocationResults] = useState<LocationResult[]>([]);
  const [selectedLocationName, setSelectedLocationName] = useState("");
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false); // Added loading state for UX
  
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [activeTab, setActiveTab] = useState<'D1' | 'D9' | 'Chalit' | 'Chandra' | 'Gochar' | 'Dasha'>('D1');
  const [gocharBase, setGocharBase] = useState<'Lagna' | 'Chandra'>('Lagna');
  const [isLoading, setIsLoading] = useState(false);

  // --- DATE & TIME HANDLERS ---
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'natal' | 'transit') => {
    if (!e.target.value) return;
    const [y, m, d] = e.target.value.split('-');
    
    if (type === 'natal') {
      setFormData(prev => ({ ...prev, year: parseInt(y), month: parseInt(m), day: parseInt(d) }));
    } else {
      setFormData(prev => ({ ...prev, transit_year: parseInt(y), transit_month: parseInt(m), transit_day: parseInt(d) }));
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;
    const [h, m] = e.target.value.split(':');
    setFormData(prev => ({ ...prev, hour: parseInt(h), minute: parseInt(m) }));
  };

  const natalDateString = `${formData.year}-${String(formData.month).padStart(2, '0')}-${String(formData.day).padStart(2, '0')}`;
  const natalTimeString = `${String(formData.hour).padStart(2, '0')}:${String(formData.minute).padStart(2, '0')}`;
  const transitDateString = `${formData.transit_year}-${String(formData.transit_month).padStart(2, '0')}-${String(formData.transit_day).padStart(2, '0')}`;

  // Debounced API Call for OpenStreetMap
  useEffect(() => {
    const fetchLocations = async () => {
      if (!debouncedQuery) {
        setLocationResults([]);
        setIsSearching(false);
        return;
      }
      setIsSearching(true);
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(debouncedQuery)}&limit=5`);
        const data = await res.json();
        setLocationResults(data);
      } catch (error) { 
        console.error(error); 
      } finally {
        setIsSearching(false);
      }
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
    if (formData.latitude === 0 && formData.longitude === 0) return alert("Please select a location.");
    setIsLoading(true);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      
      const response = await fetch(`${API_URL}/api/v1/compute-charts`, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(formData) 
      });
      
      if (!response.ok) throw new Error("Calculation Failed.");
      setChartData(await response.json());
    } catch (err: any) { alert(err.message); } 
    finally { setIsLoading(false); }
  };

  const getRenderData = () => {
    if (!chartData) return { planets: [], transitPlanets: [], asc: "Aries" };
    if (activeTab === 'D1') return { planets: chartData.planets.map(p => ({ name: p.name, house: p.d1_house, degree: getIntegerDegree(p.longitude) })), transitPlanets: [], asc: chartData.ascendant_sign };
    if (activeTab === 'Chalit') return { planets: chartData.planets.map(p => ({ name: p.name, house: p.chalit_house, degree: getIntegerDegree(p.longitude) })), transitPlanets: [], asc: chartData.ascendant_sign };
    if (activeTab === 'Gochar') {
      let anchorSign = chartData.ascendant_sign;
      if (gocharBase === 'Chandra') { const moon = chartData.planets.find(p => p.name === "Moon"); if (moon) anchorSign = moon.sign; }
      const anchorNum = signToNumber[anchorSign] || 1;
      return { 
        planets: chartData.planets.map(p => ({ name: p.name, house: ((signToNumber[p.sign] - anchorNum + 12) % 12) + 1, degree: getIntegerDegree(p.longitude) })), 
        transitPlanets: chartData.transit_planets.map(p => ({ name: p.name, house: ((signToNumber[p.sign] - anchorNum + 12) % 12) + 1, degree: getIntegerDegree(p.longitude) })), 
        asc: anchorSign 
      };
    }
    if (activeTab === 'D9') {
      const ascNum = signToNumber[chartData.d9_ascendant_sign];
      return { planets: chartData.planets.map(p => ({ name: p.name, house: ((signToNumber[p.d9_sign] - ascNum + 12) % 12) + 1, degree: getIntegerDegree(p.longitude) })), transitPlanets: [], asc: chartData.d9_ascendant_sign };
    }
    if (activeTab === 'Chandra') {
      const moon = chartData.planets.find(p => p.name === "Moon");
      const moonHouse = moon ? moon.d1_house : 1;
      return { planets: chartData.planets.map(p => ({ name: p.name, house: ((p.d1_house - moonHouse + 12) % 12) + 1, degree: getIntegerDegree(p.longitude) })), transitPlanets: [], asc: moon ? moon.sign : "Aries" };
    }
    return { planets: [], transitPlanets: [], asc: "Aries" };
  };

  const renderData = getRenderData();

  return (
    <main className="min-h-screen bg-[#FAFAFA] p-4 md:p-8 text-gray-900 selection:bg-indigo-100 flex flex-col">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow w-full">
        
        {/* LEFT COLUMN: Form */}
        <motion.div layout className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h1 className="text-3xl font-serif font-medium text-indigo-950 mb-8 tracking-tight">Astro</h1>
            
            {/* CMDK Autocomplete */}
            <div className="mb-8 relative">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Birth City</label>
              <div 
                onClick={() => setIsCommandOpen(true)}
                className="flex items-center gap-3 w-full p-3.5 border border-gray-200 rounded-xl bg-gray-50/50 text-sm cursor-text hover:bg-gray-50 transition-colors"
              >
                <Search size={16} className="text-gray-400" />
                <span className={selectedLocationName ? "text-gray-900" : "text-gray-400"}>
                  {selectedLocationName || "Search global cities..."}
                </span>
              </div>

              <AnimatePresence>
                {isCommandOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.15 }}
                    className="absolute top-0 left-0 w-full z-50 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    {/* shouldFilter={false} is critical here to stop cmdk from hiding API results */}
                    <Command className="w-full" shouldFilter={false}>
                      <div className="flex items-center px-3 border-b border-gray-100">
                        <Search size={16} className="text-indigo-400 mr-2" />
                        <Command.Input 
                          autoFocus
                          value={locationQuery} 
                          onValueChange={setLocationQuery} 
                          placeholder="Type to search..." 
                          className="w-full py-4 text-sm outline-none bg-transparent placeholder:text-gray-300"
                        />
                        {/* ESC button successfully removed */}
                      </div>
                      <Command.List className="max-h-60 overflow-y-auto p-2">
                        {isSearching && (
                          <div className="p-4 text-sm text-center text-gray-400">Searching coordinates...</div>
                        )}
                        {!isSearching && locationResults.length === 0 && locationQuery && (
                          <div className="p-4 text-sm text-center text-gray-400">No locations found.</div>
                        )}
                        {!isSearching && locationResults.map((loc, i) => (
                          <Command.Item 
                            key={i} 
                            value={loc.display_name} // Added value for cmdk mapping
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
                )}
              </AnimatePresence>
            </div>

            <form onSubmit={generateCharts} className="space-y-6">
              {/* --- NATAL PARAMETERS --- */}
              <div>
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 mb-4">Natal Parameters</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-gray-400 mb-1.5 ml-1">Date of Birth</label>
                    <input 
                      type="date" 
                      value={natalDateString}
                      onChange={(e) => handleDateChange(e, 'natal')}
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all bg-gray-50/50 cursor-pointer text-gray-700" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-400 mb-1.5 ml-1">Time of Birth</label>
                    <input 
                      type="time" 
                      value={natalTimeString}
                      onChange={handleTimeChange}
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all bg-gray-50/50 cursor-pointer text-gray-700" 
                    />
                  </div>
                </div>
              </div>

              {/* --- GOCHAR OVERLAY --- */}
              <div>
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 mb-4">Gochar Overlay (Transit)</h3>
                <div className="w-full">
                  <label className="block text-[10px] text-emerald-600/70 mb-1.5 ml-1">Transit Date</label>
                  <input 
                    type="date" 
                    value={transitDateString}
                    onChange={(e) => handleDateChange(e, 'transit')}
                    className="w-full p-3 border border-emerald-200 rounded-xl text-sm text-emerald-900 bg-emerald-50 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all cursor-pointer" 
                  />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                type="submit" disabled={isLoading || !selectedLocationName} 
                className="w-full py-4 bg-indigo-950 text-white font-medium text-sm rounded-xl shadow-lg shadow-indigo-900/20 hover:bg-indigo-900 disabled:opacity-50 disabled:shadow-none transition-all"
              >
                {isLoading ? 'Computing Ephemeris...' : 'Generate Analysis'}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Output Dashboard */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            {chartData ? (
              <motion.div 
                key="results"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="bg-white rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden"
              >
                <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar">
                  {['D1', 'D9', 'Chalit', 'Chandra', 'Gochar', 'Dasha'].map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab as any)} className={`flex-1 py-5 text-xs tracking-widest uppercase font-bold border-b-2 transition-colors whitespace-nowrap px-6 ${activeTab === tab ? 'border-indigo-900 text-indigo-950 bg-white' : 'border-transparent text-gray-400 hover:text-gray-900 hover:bg-gray-50/50'}`}>
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="p-8 md:p-12 min-h-[600px]">
                  <div className="flex justify-between items-end mb-10 pb-6 border-b border-gray-100">
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Timezone</div>
                      <div className="font-mono text-sm text-gray-900">{chartData.timezone_detected}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Absolute Lagna</div>
                      <div className="font-mono text-sm text-indigo-600 font-bold">{formatDMS(chartData.ascendant_longitude)}</div>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.2 }}>
                      {activeTab !== 'Dasha' ? (
                        <div className="flex flex-col items-center">
                          <h2 className="text-2xl font-serif text-indigo-950 mb-8">{activeTab === 'Gochar' ? 'Transit Overlay' : activeTab === 'D1' ? 'Natal Chart (Lagna)' : `${activeTab} Chart`}</h2>
                          
                          {activeTab === 'Gochar' && (
                            <div className="flex justify-center mb-8">
                              <div className="bg-gray-100/80 p-1 rounded-xl inline-flex">
                                <button onClick={() => setGocharBase('Lagna')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${gocharBase === 'Lagna' ? 'bg-white text-indigo-950 shadow-sm' : 'text-gray-400 hover:text-gray-700'}`}>Lagna Base</button>
                                <button onClick={() => setGocharBase('Chandra')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${gocharBase === 'Chandra' ? 'bg-white text-indigo-950 shadow-sm' : 'text-gray-400 hover:text-gray-700'}`}>Chandra Base</button>
                              </div>
                            </div>
                          )}
                          
                          <KundliChart planets={renderData.planets} transitPlanets={renderData.transitPlanets} ascendantSign={renderData.asc} />
                          
                          {(activeTab === 'D1' || activeTab === 'Gochar') && (
                            <div className="w-full mt-16">
                              <h3 className="text-sm font-serif italic text-gray-500 border-b border-gray-100 pb-2 mb-6">Exact Planetary Longitudes</h3>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {chartData.planets.map((p, idx) => (
                                  <div key={idx} className="bg-gray-50/50 rounded-xl p-4 border border-gray-100">
                                    <div className="font-bold text-indigo-950 text-sm mb-1">{p.name}</div>
                                    <div className="text-xs text-gray-500 font-mono">{p.sign} {formatDMS(p.longitude)}</div>
                                  </div>
                                ))}
                              </div>

                              {activeTab === 'Gochar' && chartData.transit_planets.length > 0 && (
                                <div className="mt-10">
                                  <h3 className="text-sm font-serif italic text-emerald-600 border-b border-emerald-100 pb-2 mb-6">Transit Coordinates</h3>
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {chartData.transit_planets.map((p, idx) => (
                                      <div key={`t-${idx}`} className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100/50">
                                        <div className="font-bold text-emerald-900 text-sm mb-1">{p.name}</div>
                                        <div className="text-xs text-emerald-700 font-mono">{p.sign} {formatDMS(p.longitude)}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="max-w-3xl mx-auto">
                          <h2 className="text-2xl font-serif text-indigo-950 mb-2 text-center">Vimshottari Timeline</h2>
                          <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-10">Maha • Antar • Pratyantar • Sookshma</p>
                          <div className="space-y-1">
                            {chartData.vimshottari_dashas.map((dasha, i) => <DashaNode key={i} dasha={dasha} />)}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="h-full flex items-center justify-center border border-dashed border-gray-200 rounded-3xl bg-white/50 min-h-[600px]"
              >
                <div className="text-center text-gray-400 p-8 max-w-sm">
                  <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MapPin className="text-gray-300" size={24} />
                  </div>
                  <h3 className="text-lg font-serif text-gray-900 mb-2">Awaiting Parameters</h3>
                  <p className="text-sm leading-relaxed">Search for a location using the command menu and generate to view your professional workspace.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Footer Watermark */}
      <div className="w-full mt-12 pb-4 text-center opacity-30 pointer-events-none">
        <span className="text-[10px] text-gray-500 font-bold tracking-[0.3em] uppercase">
          vaibhav
        </span>
      </div>
    </main>
  );
}

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useDebounce } from 'use-debounce';
// import { Command } from 'cmdk';
// import { Search, MapPin } from 'lucide-react';
// import KundliChart from '@/components/KundliChart';

// // --- TYPES ---
// interface Planet { name: string; longitude: number; sign: string; d1_house: number; d9_sign: string; chalit_house: number; }
// interface TransitPlanet { name: string; longitude: number; sign: string; natal_house: number; }
// interface Dasha { lord: string; start_date: string; end_date: string; sub_dashas?: Dasha[]; }
// interface ChartData { ascendant_longitude: number; ascendant_sign: string; d9_ascendant_sign: string; planets: Planet[]; transit_planets: TransitPlanet[]; chalit_cusps: number[]; vimshottari_dashas: Dasha[]; timezone_detected: string; }
// interface LocationResult { display_name: string; lat: string; lon: string; }

// const signToNumber: Record<string, number> = { "Aries": 1, "Taurus": 2, "Gemini": 3, "Cancer": 4, "Leo": 5, "Virgo": 6, "Libra": 7, "Scorpio": 8, "Sagittarius": 9, "Capricorn": 10, "Aquarius": 11, "Pisces": 12 };
// const formatDMS = (raw: number) => { const l = raw % 30; const d = Math.floor(l); const mF = (l - d) * 60; const m = Math.floor(mF); const s = Math.floor((mF - m) * 60); return `${d}° ${m.toString().padStart(2, '0')}' ${s.toString().padStart(2, '0')}"`; };
// const getIntegerDegree = (raw: number) => Math.floor(raw % 30);

// // --- FLUID ACCORDION COMPONENT ---
// const DashaNode = ({ dasha, level = 1 }: { dasha: Dasha, level?: number }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const hasSubs = dasha.sub_dashas && dasha.sub_dashas.length > 0;
  
//   const levelStyles: Record<number, string> = {
//     1: "bg-indigo-50/50 border-indigo-200 text-indigo-950 font-bold text-lg p-4 hover:bg-indigo-50",
//     2: "bg-white border-blue-100 text-blue-900 font-semibold text-md p-3 ml-4 hover:bg-blue-50/50",
//     3: "bg-gray-50/50 border-gray-100 text-gray-800 font-medium text-sm p-2 ml-8 hover:bg-gray-100",
//     4: "bg-transparent border-transparent text-gray-500 font-normal text-xs p-1.5 ml-12",
//   };

//   return (
//     <div className="w-full">
//       <div onClick={() => hasSubs && setIsOpen(!isOpen)} className={`flex justify-between items-center rounded-lg border cursor-pointer transition-all duration-200 mb-1 ${levelStyles[level]}`}>
//         <div className="flex items-center gap-2">
//           {hasSubs && <motion.span animate={{ rotate: isOpen ? 90 : 0 }} className="text-[10px] opacity-40">▶</motion.span>}
//           {!hasSubs && <span className="w-3"></span>} 
//           <span>{dasha.lord}</span>
//         </div>
//         <div className="text-right flex gap-4 opacity-80 font-mono text-xs">
//           <span>{dasha.start_date}</span>
//           <span className="text-gray-300">|</span>
//           <span>{dasha.end_date}</span>
//         </div>
//       </div>
//       <AnimatePresence>
//         {isOpen && hasSubs && (
//           <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: "easeOut" }} className="overflow-hidden border-l-2 border-indigo-100 ml-4 pl-2">
//             {dasha.sub_dashas!.map((sub, i) => <DashaNode key={i} dasha={sub} level={level + 1} />)}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // --- MAIN DASHBOARD ---
// export default function ProfessionalDashboard() {
//   const today = new Date();
//   const [formData, setFormData] = useState({ year: 1990, month: 9, day: 5, hour: 14, minute: 30, latitude: 0, longitude: 0, transit_year: today.getFullYear(), transit_month: today.getMonth() + 1, transit_day: today.getDate() });
  
//   // CMDK & Debounce State
//   const [locationQuery, setLocationQuery] = useState("");
//   const [debouncedQuery] = useDebounce(locationQuery, 250); // 250ms debounce
//   const [locationResults, setLocationResults] = useState<LocationResult[]>([]);
//   const [selectedLocationName, setSelectedLocationName] = useState("");
//   const [isCommandOpen, setIsCommandOpen] = useState(false);
  
//   const [chartData, setChartData] = useState<ChartData | null>(null);
//   const [activeTab, setActiveTab] = useState<'D1' | 'D9' | 'Chalit' | 'Chandra' | 'Gochar' | 'Dasha'>('D1');
//   const [gocharBase, setGocharBase] = useState<'Lagna' | 'Chandra'>('Lagna');
//   const [isLoading, setIsLoading] = useState(false);

//   // --- DATE & TIME HANDLERS ---
//   const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'natal' | 'transit') => {
//     if (!e.target.value) return;
//     const [y, m, d] = e.target.value.split('-');
    
//     if (type === 'natal') {
//       setFormData(prev => ({ ...prev, year: parseInt(y), month: parseInt(m), day: parseInt(d) }));
//     } else {
//       setFormData(prev => ({ ...prev, transit_year: parseInt(y), transit_month: parseInt(m), transit_day: parseInt(d) }));
//     }
//   };

//   const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!e.target.value) return;
//     const [h, m] = e.target.value.split(':');
//     setFormData(prev => ({ ...prev, hour: parseInt(h), minute: parseInt(m) }));
//   };

//   // --- FORMATTERS FOR INPUT VALUES ---
//   const natalDateString = `${formData.year}-${String(formData.month).padStart(2, '0')}-${String(formData.day).padStart(2, '0')}`;
//   const natalTimeString = `${String(formData.hour).padStart(2, '0')}:${String(formData.minute).padStart(2, '0')}`;
//   const transitDateString = `${formData.transit_year}-${String(formData.transit_month).padStart(2, '0')}-${String(formData.transit_day).padStart(2, '0')}`;

//   // Debounced API Call for OpenStreetMap
//   useEffect(() => {
//     const fetchLocations = async () => {
//       if (!debouncedQuery) return setLocationResults([]);
//       try {
//         const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(debouncedQuery)}&limit=5`);
//         setLocationResults(await res.json());
//       } catch (error) { console.error(error); }
//     };
//     fetchLocations();
//   }, [debouncedQuery]);

//   const selectLocation = (loc: LocationResult) => {
//     setFormData(prev => ({ ...prev, latitude: parseFloat(loc.lat), longitude: parseFloat(loc.lon) }));
//     setSelectedLocationName(loc.display_name);
//     setIsCommandOpen(false);
//     setLocationQuery("");
//   };

//   const generateCharts = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (formData.latitude === 0 && formData.longitude === 0) return alert("Please select a location.");
//     setIsLoading(true);
//     try {
//       // Use the Render URL in production, or localhost when testing on your computer
//       const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      
//       const response = await fetch(`${API_URL}/api/v1/compute-charts`, { 
//         method: 'POST', 
//         headers: { 'Content-Type': 'application/json' }, 
//         body: JSON.stringify(formData) 
//       });
      
//       if (!response.ok) throw new Error("Calculation Failed.");
//       setChartData(await response.json());
//     } catch (err: any) { alert(err.message); } 
//     finally { setIsLoading(false); }
//   };

//   const getRenderData = () => {
//     if (!chartData) return { planets: [], transitPlanets: [], asc: "Aries" };
//     if (activeTab === 'D1') return { planets: chartData.planets.map(p => ({ name: p.name, house: p.d1_house, degree: getIntegerDegree(p.longitude) })), transitPlanets: [], asc: chartData.ascendant_sign };
//     if (activeTab === 'Chalit') return { planets: chartData.planets.map(p => ({ name: p.name, house: p.chalit_house, degree: getIntegerDegree(p.longitude) })), transitPlanets: [], asc: chartData.ascendant_sign };
//     if (activeTab === 'Gochar') {
//       let anchorSign = chartData.ascendant_sign;
//       if (gocharBase === 'Chandra') { const moon = chartData.planets.find(p => p.name === "Moon"); if (moon) anchorSign = moon.sign; }
//       const anchorNum = signToNumber[anchorSign] || 1;
//       return { 
//         planets: chartData.planets.map(p => ({ name: p.name, house: ((signToNumber[p.sign] - anchorNum + 12) % 12) + 1, degree: getIntegerDegree(p.longitude) })), 
//         transitPlanets: chartData.transit_planets.map(p => ({ name: p.name, house: ((signToNumber[p.sign] - anchorNum + 12) % 12) + 1, degree: getIntegerDegree(p.longitude) })), 
//         asc: anchorSign 
//       };
//     }
//     if (activeTab === 'D9') {
//       const ascNum = signToNumber[chartData.d9_ascendant_sign];
//       return { planets: chartData.planets.map(p => ({ name: p.name, house: ((signToNumber[p.d9_sign] - ascNum + 12) % 12) + 1, degree: getIntegerDegree(p.longitude) })), transitPlanets: [], asc: chartData.d9_ascendant_sign };
//     }
//     if (activeTab === 'Chandra') {
//       const moon = chartData.planets.find(p => p.name === "Moon");
//       const moonHouse = moon ? moon.d1_house : 1;
//       return { planets: chartData.planets.map(p => ({ name: p.name, house: ((p.d1_house - moonHouse + 12) % 12) + 1, degree: getIntegerDegree(p.longitude) })), transitPlanets: [], asc: moon ? moon.sign : "Aries" };
//     }
//     return { planets: [], transitPlanets: [], asc: "Aries" };
//   };

//   const renderData = getRenderData();

//   return (
//     <main className="min-h-screen bg-[#FAFAFA] p-4 md:p-8 text-gray-900 selection:bg-indigo-100">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
//         {/* LEFT COLUMN: Form */}
//         <motion.div layout className="lg:col-span-4 space-y-6">
//           <div className="bg-white p-8 rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100">
//             <h1 className="text-3xl font-serif font-medium text-indigo-950 mb-8 tracking-tight">Astro</h1>
            
//             {/* CMDK Autocomplete */}
//             <div className="mb-8 relative">
//               <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Birth City</label>
//               <div 
//                 onClick={() => setIsCommandOpen(true)}
//                 className="flex items-center gap-3 w-full p-3.5 border border-gray-200 rounded-xl bg-gray-50/50 text-sm cursor-text hover:bg-gray-50 transition-colors"
//               >
//                 <Search size={16} className="text-gray-400" />
//                 <span className={selectedLocationName ? "text-gray-900" : "text-gray-400"}>
//                   {selectedLocationName || "Search global cities..."}
//                 </span>
//               </div>

//               <AnimatePresence>
//                 {isCommandOpen && (
//                   <motion.div 
//                     initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.15 }}
//                     className="absolute top-0 left-0 w-full z-50 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
//                   >
//                     <Command className="w-full">
//                       <div className="flex items-center px-3 border-b border-gray-100">
//                         <Search size={16} className="text-indigo-400 mr-2" />
//                         <Command.Input 
//                           autoFocus
//                           value={locationQuery} 
//                           onValueChange={setLocationQuery} 
//                           placeholder="Type to search..." 
//                           className="w-full py-4 text-sm outline-none bg-transparent placeholder:text-gray-300"
//                         />
//                         <button onClick={() => setIsCommandOpen(false)} className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-500 hover:bg-gray-200">ESC</button>
//                       </div>
//                       <Command.List className="max-h-60 overflow-y-auto p-2">
//                         {locationResults.length === 0 && locationQuery && <div className="p-4 text-sm text-center text-gray-400">Loading coordinates...</div>}
//                         {locationResults.map((loc, i) => (
//                           <Command.Item 
//                             key={i} 
//                             onSelect={() => selectLocation(loc)}
//                             className="flex items-center gap-2 p-3 text-sm rounded-lg hover:bg-indigo-50 cursor-pointer text-gray-700 data-[selected=true]:bg-indigo-50"
//                           >
//                             <MapPin size={14} className="text-indigo-300 shrink-0" />
//                             <span className="truncate">{loc.display_name}</span>
//                           </Command.Item>
//                         ))}
//                       </Command.List>
//                     </Command>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <form onSubmit={generateCharts} className="space-y-6">
//               {/* --- NATAL PARAMETERS --- */}
//               <div>
//                 <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 mb-4">Natal Parameters</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-[10px] text-gray-400 mb-1.5 ml-1">Date of Birth</label>
//                     <input 
//                       type="date" 
//                       value={natalDateString}
//                       onChange={(e) => handleDateChange(e, 'natal')}
//                       className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all bg-gray-50/50 cursor-pointer text-gray-700" 
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-[10px] text-gray-400 mb-1.5 ml-1">Time of Birth</label>
//                     <input 
//                       type="time" 
//                       value={natalTimeString}
//                       onChange={handleTimeChange}
//                       className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all bg-gray-50/50 cursor-pointer text-gray-700" 
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* --- GOCHAR OVERLAY --- */}
//               <div>
//                 <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 mb-4">Gochar Overlay (Transit)</h3>
//                 <div className="w-full">
//                   <label className="block text-[10px] text-emerald-600/70 mb-1.5 ml-1">Transit Date</label>
//                   <input 
//                     type="date" 
//                     value={transitDateString}
//                     onChange={(e) => handleDateChange(e, 'transit')}
//                     className="w-full p-3 border border-emerald-200 rounded-xl text-sm text-emerald-900 bg-emerald-50 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all cursor-pointer" 
//                   />
//                 </div>
//               </div>

//               <motion.button 
//                 whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
//                 type="submit" disabled={isLoading || !selectedLocationName} 
//                 className="w-full py-4 bg-indigo-950 text-white font-medium text-sm rounded-xl shadow-lg shadow-indigo-900/20 hover:bg-indigo-900 disabled:opacity-50 disabled:shadow-none transition-all"
//               >
//                 {isLoading ? 'Computing Ephemeris...' : 'Generate Analysis'}
//               </motion.button>
//             </form>
//           </div>
//         </motion.div>

//         {/* RIGHT COLUMN: Output Dashboard */}
//         <div className="lg:col-span-8">
//           <AnimatePresence mode="wait">
//             {chartData ? (
//               <motion.div 
//                 key="results"
//                 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
//                 className="bg-white rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden"
//               >
//                 <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar">
//                   {['D1', 'D9', 'Chalit', 'Chandra', 'Gochar', 'Dasha'].map((tab) => (
//                     <button key={tab} onClick={() => setActiveTab(tab as any)} className={`flex-1 py-5 text-xs tracking-widest uppercase font-bold border-b-2 transition-colors whitespace-nowrap px-6 ${activeTab === tab ? 'border-indigo-900 text-indigo-950 bg-white' : 'border-transparent text-gray-400 hover:text-gray-900 hover:bg-gray-50/50'}`}>
//                       {tab}
//                     </button>
//                   ))}
//                 </div>

//                 <div className="p-8 md:p-12 min-h-[600px]">
//                   <div className="flex justify-between items-end mb-10 pb-6 border-b border-gray-100">
//                     <div>
//                       <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Timezone</div>
//                       <div className="font-mono text-sm text-gray-900">{chartData.timezone_detected}</div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Absolute Lagna</div>
//                       <div className="font-mono text-sm text-indigo-600 font-bold">{formatDMS(chartData.ascendant_longitude)}</div>
//                     </div>
//                   </div>

//                   <AnimatePresence mode="wait">
//                     <motion.div key={activeTab} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.2 }}>
//                       {activeTab !== 'Dasha' ? (
//                         <div className="flex flex-col items-center">
//                           <h2 className="text-2xl font-serif text-indigo-950 mb-8">{activeTab === 'Gochar' ? 'Transit Overlay' : activeTab === 'D1' ? 'Natal Chart (Lagna)' : `${activeTab} Chart`}</h2>
                          
//                           {activeTab === 'Gochar' && (
//                             <div className="flex justify-center mb-8">
//                               <div className="bg-gray-100/80 p-1 rounded-xl inline-flex">
//                                 <button onClick={() => setGocharBase('Lagna')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${gocharBase === 'Lagna' ? 'bg-white text-indigo-950 shadow-sm' : 'text-gray-400 hover:text-gray-700'}`}>Lagna Base</button>
//                                 <button onClick={() => setGocharBase('Chandra')} className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${gocharBase === 'Chandra' ? 'bg-white text-indigo-950 shadow-sm' : 'text-gray-400 hover:text-gray-700'}`}>Chandra Base</button>
//                               </div>
//                             </div>
//                           )}
                          
//                           <KundliChart planets={renderData.planets} transitPlanets={renderData.transitPlanets} ascendantSign={renderData.asc} />
                          
//                           {(activeTab === 'D1' || activeTab === 'Gochar') && (
//                             <div className="w-full mt-16">
//                               <h3 className="text-sm font-serif italic text-gray-500 border-b border-gray-100 pb-2 mb-6">Exact Planetary Longitudes</h3>
//                               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                                 {chartData.planets.map((p, idx) => (
//                                   <div key={idx} className="bg-gray-50/50 rounded-xl p-4 border border-gray-100">
//                                     <div className="font-bold text-indigo-950 text-sm mb-1">{p.name}</div>
//                                     <div className="text-xs text-gray-500 font-mono">{p.sign} {formatDMS(p.longitude)}</div>
//                                   </div>
//                                 ))}
//                               </div>

//                               {activeTab === 'Gochar' && chartData.transit_planets.length > 0 && (
//                                 <div className="mt-10">
//                                   <h3 className="text-sm font-serif italic text-emerald-600 border-b border-emerald-100 pb-2 mb-6">Transit Coordinates</h3>
//                                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                                     {chartData.transit_planets.map((p, idx) => (
//                                       <div key={`t-${idx}`} className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100/50">
//                                         <div className="font-bold text-emerald-900 text-sm mb-1">{p.name}</div>
//                                         <div className="text-xs text-emerald-700 font-mono">{p.sign} {formatDMS(p.longitude)}</div>
//                                       </div>
//                                     ))}
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
//                           )}
//                         </div>
//                       ) : (
//                         <div className="max-w-3xl mx-auto">
//                           <h2 className="text-2xl font-serif text-indigo-950 mb-2 text-center">Vimshottari Timeline</h2>
//                           <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-10">Maha • Antar • Pratyantar • Sookshma</p>
//                           <div className="space-y-1">
//                             {chartData.vimshottari_dashas.map((dasha, i) => <DashaNode key={i} dasha={dasha} />)}
//                           </div>
//                         </div>
//                       )}
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>
//               </motion.div>
//             ) : (
//               <motion.div 
//                 key="empty"
//                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//                 className="h-full flex items-center justify-center border border-dashed border-gray-200 rounded-3xl bg-white/50 min-h-[600px]"
//               >
//                 <div className="text-center text-gray-400 p-8 max-w-sm">
//                   <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                     <MapPin className="text-gray-300" size={24} />
//                   </div>
//                   <h3 className="text-lg font-serif text-gray-900 mb-2">Awaiting Parameters</h3>
//                   <p className="text-sm leading-relaxed">Search for a location using the command menu and generate to view your professional workspace.</p>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </main>
//   );
// }