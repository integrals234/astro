import React from 'react';
import { m } from 'framer-motion';

interface MappedPlanet { 
  name: string; 
  enName?: string;
  house: number; 
  degree: number; 
  isRetrograde?: boolean; 
}

interface KundliChartProps { 
  planets: MappedPlanet[]; 
  transitPlanets?: MappedPlanet[]; 
  ascendantSign: string; 
  ascLabel?: string;  
  ascDegree?: number; 
  transitLabel?: string;
  useSymbols?: boolean;
  accessibility: { planetAt: string; transitPlanet: string; retrograde: string };
}

const planetSymbols: Record<string, string> = {
  Sun: "☉", Moon: "☽", Mars: "♂", Mercury: "☿", Jupiter: "♃",
  Venus: "♀", Saturn: "♄", Rahu: "☊", Ketu: "☋"
};

const signToNumber: Record<string, number> = {
  "Aries": 1, "Taurus": 2, "Gemini": 3, "Cancer": 4, "Leo": 5, "Virgo": 6,
  "Libra": 7, "Scorpio": 8, "Sagittarius": 9, "Capricorn": 10, "Aquarius": 11, "Pisces": 12
};

export default function KundliChart({ planets, transitPlanets = [], ascendantSign, ascLabel, ascDegree, transitLabel, useSymbols, accessibility }: KundliChartProps) {
  const SIZE = 400;
  const houseCenters: Record<number, { x: number; y: number }> = {
    1: { x: 200, y: 100 }, 2: { x: 100, y: 50 }, 3: { x: 50, y: 100 }, 4: { x: 100, y: 200 },
    5: { x: 50, y: 300 }, 6: { x: 100, y: 350 }, 7: { x: 200, y: 300 }, 8: { x: 300, y: 350 },
    9: { x: 350, y: 300 }, 10: { x: 300, y: 200 }, 11: { x: 350, y: 100 }, 12: { x: 300, y: 50 },
  };

  const ascNumber = signToNumber[ascendantSign] || 1;
  const getSignForHouse = (houseNumber: number) => {
    const signNum = ascNumber + (houseNumber - 1);
    return signNum > 12 ? signNum - 12 : signNum;
  };

  const isGocharChart = transitPlanets.length > 0;

  return (
    <m.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="kundli-chart-surface w-full max-w-md mx-auto p-2 rounded-lg border relative"
    >
      {isGocharChart && (
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[10px] uppercase font-body font-semibold text-text-muted">
          <span className="h-2 w-2 rounded-full bg-moss" /> {transitLabel}
        </div>
      )}

      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="kundli-chart-svg w-full h-auto fill-transparent" style={{ strokeWidth: 1 }}>
        <rect x="0" y="0" width={SIZE} height={SIZE} className="kundli-chart-grid" />
        <line x1="0" y1="0" x2={SIZE} y2={SIZE} className="kundli-chart-grid" />
        <line x1="0" y1={SIZE} x2={SIZE} y2="0" className="kundli-chart-grid" />
        <polygon points={`${SIZE/2},0 ${SIZE},${SIZE/2} ${SIZE/2},${SIZE} 0,${SIZE/2}`} className="kundli-chart-grid" />

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((houseNum) => {
          const { x, y } = houseCenters[houseNum];
          const natalInHouse = planets.filter(p => p.house === houseNum);
          const transitInHouse = transitPlanets.filter(p => p.house === houseNum);
          
          return (
            <g key={`house-${houseNum}`}>
              <text x={x} y={y - 22} textAnchor="middle" className="kundli-chart-sign stroke-none text-sm font-bold font-chart">
                {getSignForHouse(houseNum)}
              </text>
              
              {/* NATAL PLANETS & ASCENDANT */}
              <text x={x} y={y + 2} textAnchor="middle" className="kundli-chart-planet stroke-none text-base font-bold font-chart tracking-tight cursor-pointer">
                
                {/* Render the Ascendant Marker ONLY in the 1st House */}
                {houseNum === 1 && ascLabel && (
                  <tspan className="kundli-chart-accent text-xs">
                    {ascLabel}
                    {ascDegree !== undefined && <tspan baselineShift="super" fontSize="8">{ascDegree}</tspan>}
                    {natalInHouse.length > 0 ? ', ' : ''}
                  </tspan>
                )}

                {natalInHouse.map((p, i) => (
                  <tspan key={`n-${p.name}`} className="kundli-chart-planet-hover transition-all duration-300">
                    <title>{`${p.name} ${accessibility.planetAt} ${p.degree}°${p.isRetrograde ? ` (${accessibility.retrograde})` : ''}`}</title>
                    {i > 0 ? ', ' : ''}
                    {useSymbols ? planetSymbols[p.enName || p.name] || p.name.substring(0, 2) : p.name.substring(0, 2)}
                    
                    {p.isRetrograde && !isGocharChart && (
                      <tspan className="kundli-chart-accent font-bold" fontSize="18" baselineShift="-3px">*</tspan>
                    )}
                    
                    <tspan baselineShift="super" fontSize="10" className="kundli-chart-accent">{p.degree}</tspan>
                  </tspan>
                ))}
              </text>

              {/* TRANSIT PLANETS (Moss) */}
              {isGocharChart && (
                <text x={x} y={y + 20} textAnchor="middle" className="kundli-chart-transit stroke-none text-sm font-bold font-chart tracking-tight cursor-pointer">
                  {transitInHouse.map((p, i) => (
                    <tspan key={`t-${p.name}`} className="transition-all duration-300">
                      <title>{`${accessibility.transitPlanet} ${p.name} ${accessibility.planetAt} ${p.degree}°${p.isRetrograde ? ` (${accessibility.retrograde})` : ''}`}</title>
                      {i > 0 ? ', ' : ''}
                      {useSymbols ? planetSymbols[p.enName || p.name] || p.name.substring(0, 2) : p.name.substring(0, 2)}
                      
                      {p.isRetrograde && (
                        <tspan className="kundli-chart-accent font-bold" fontSize="18" baselineShift="-3px">*</tspan>
                      )}
                      
                      <tspan baselineShift="super" fontSize="9" className="kundli-chart-transit">{p.degree}</tspan>
                    </tspan>
                  ))}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </m.div>
  );
}