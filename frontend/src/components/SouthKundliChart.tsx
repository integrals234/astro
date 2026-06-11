import React from 'react';
import { motion } from 'framer-motion';

// We added 'sign' here because South Indian charts group by Zodiac sign, not house.
interface MappedPlanet { 
  name: string; 
  house: number; 
  degree: number; 
  isRetrograde?: boolean;
  sign: string; 
}

interface KundliChartProps { 
  planets: MappedPlanet[]; 
  transitPlanets?: MappedPlanet[]; 
  ascendantSign: string; 
  ascLabel?: string;
  ascDegree?: number;
  transitLabel?: string;
  useSymbols?: boolean;
}

const planetSymbols: Record<string, string> = {
  Sun: "☉", Moon: "☽", Mars: "♂", Mercury: "☿", Jupiter: "♃",
  Venus: "♀", Saturn: "♄", Rahu: "☊", Ketu: "☋"
};

// Fixed positions for South Indian Chart (Aries is always top row, 2nd column)
const boxMap: Record<string, { x: number; y: number }> = {
  "Pisces": { x: 0, y: 0 }, "Aries": { x: 100, y: 0 }, "Taurus": { x: 200, y: 0 }, "Gemini": { x: 300, y: 0 },
  "Cancer": { x: 300, y: 100 }, "Leo": { x: 300, y: 200 }, "Virgo": { x: 300, y: 300 }, "Libra": { x: 200, y: 300 },
  "Scorpio": { x: 100, y: 300 }, "Sagittarius": { x: 0, y: 300 }, "Capricorn": { x: 0, y: 200 }, "Aquarius": { x: 0, y: 100 }
};

const signNumbers: Record<string, number> = {
  "Aries": 1, "Taurus": 2, "Gemini": 3, "Cancer": 4, "Leo": 5, "Virgo": 6,
  "Libra": 7, "Scorpio": 8, "Sagittarius": 9, "Capricorn": 10, "Aquarius": 11, "Pisces": 12
};

export default function SouthKundliChart({ planets, transitPlanets = [], ascendantSign, ascLabel, ascDegree, transitLabel, useSymbols }: KundliChartProps) {
  const SIZE = 400;
  const isGocharChart = transitPlanets.length > 0;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-md mx-auto bg-white p-2 rounded-xl border border-gray-100 shadow-sm relative"
    >
      {isGocharChart && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
          ● {transitLabel || 'Transit Overlay'}
        </div>
      )}

      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full h-auto stroke-indigo-900 fill-transparent" style={{ strokeWidth: 1 }}>
        {/* Outer Grid */}
        <rect x="0" y="0" width={SIZE} height={SIZE} className="stroke-gray-400" />
        
        {/* Inner Hollow Square */}
        <rect x="100" y="100" width="200" height="200" className="stroke-gray-400" fill="#FAFAFA" />

        {/* Vertical Lines */}
        <line x1="100" y1="0" x2="100" y2="100" className="stroke-gray-400" />
        <line x1="200" y1="0" x2="200" y2="100" className="stroke-gray-400" />
        <line x1="300" y1="0" x2="300" y2="100" className="stroke-gray-400" />
        
        <line x1="100" y1="300" x2="100" y2="400" className="stroke-gray-400" />
        <line x1="200" y1="300" x2="200" y2="400" className="stroke-gray-400" />
        <line x1="300" y1="300" x2="300" y2="400" className="stroke-gray-400" />

        {/* Horizontal Lines */}
        <line x1="0" y1="100" x2="100" y2="100" className="stroke-gray-400" />
        <line x1="0" y1="200" x2="100" y2="200" className="stroke-gray-400" />
        <line x1="0" y1="300" x2="100" y2="300" className="stroke-gray-400" />

        <line x1="300" y1="100" x2="400" y2="100" className="stroke-gray-400" />
        <line x1="300" y1="200" x2="400" y2="200" className="stroke-gray-400" />
        <line x1="300" y1="300" x2="400" y2="300" className="stroke-gray-400" />

        {/* Render Planets in Zodiac Signs */}
        {Object.entries(boxMap).map(([signName, { x, y }]) => {
          // Note: In Gochar mode, planets are mapped to relative signs. We rely on the un-mapped original sign for South format.
          const natalInSign = planets.filter(p => p.sign === signName);
          const transitInSign = transitPlanets.filter(p => p.sign === signName);
          const isAscendant = ascendantSign === signName;

          return (
            <g key={`sign-${signName}`}>
              {/* Faint Zodiac Number (Optional, helps beginners) */}
              <text x={x + 10} y={y + 20} textAnchor="start" className="stroke-none fill-red-400/60 text-xs font-bold font-mono">
                {signNumbers[signName]}
              </text>

              {/* ASCENDANT MARKER */}
              {isAscendant && ascLabel && (
                <text x={x + 50} y={y + 25} textAnchor="middle" className="stroke-none fill-indigo-400/80 text-xs font-bold font-sans">
                  {ascLabel}
                  {ascDegree !== undefined && <tspan baselineShift="super" fontSize="8">{ascDegree}</tspan>}
                </text>
              )}

              {/* NATAL PLANETS */}
              <text x={x + 50} y={y + 55} textAnchor="middle" className="stroke-none fill-indigo-950 text-base font-bold font-sans tracking-tight">
                {natalInSign.map((p, i) => (
                  <tspan key={`n-${p.name}`} className="transition-all duration-300 hover:fill-indigo-600">
                    <title>{`${p.name} at ${p.degree}°${p.isRetrograde ? ' (Retrograde)' : ''}`}</title>
                    {i > 0 ? ', ' : ''}
                    {useSymbols ? planetSymbols[p.name] || p.name.substring(0, 2) : p.name.substring(0, 2)}
                    
                    {p.isRetrograde && !isGocharChart && (
                      <tspan className="fill-red-500 font-bold" fontSize="18" baselineShift="-3px">*</tspan>
                    )}
                    
                    <tspan baselineShift="super" fontSize="10" className="fill-indigo-400">{p.degree}</tspan>
                  </tspan>
                ))}
              </text>

              {/* TRANSIT PLANETS */}
              {isGocharChart && (
                <text x={x + 50} y={y + 75} textAnchor="middle" className="stroke-none fill-emerald-600 text-sm font-bold font-sans tracking-tight">
                  {transitInSign.map((p, i) => (
                    <tspan key={`t-${p.name}`} className="transition-all duration-300 hover:fill-emerald-400">
                      <title>{`Transit ${p.name} at ${p.degree}°${p.isRetrograde ? ' (Retrograde)' : ''}`}</title>
                      {i > 0 ? ', ' : ''}
                      {useSymbols ? planetSymbols[p.name] || p.name.substring(0, 2) : p.name.substring(0, 2)}
                      
                      {p.isRetrograde && (
                        <tspan className="fill-red-500 font-bold" fontSize="18" baselineShift="-3px">*</tspan>
                      )}
                      
                      <tspan baselineShift="super" fontSize="9" className="fill-emerald-400/80">{p.degree}</tspan>
                    </tspan>
                  ))}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
}