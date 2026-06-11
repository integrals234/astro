import React from 'react';
import { motion } from 'framer-motion';

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
}

const planetSymbols: Record<string, string> = {
  Sun: "☉", Moon: "☽", Mars: "♂", Mercury: "☿", Jupiter: "♃",
  Venus: "♀", Saturn: "♄", Rahu: "☊", Ketu: "☋"
};

const signToNumber: Record<string, number> = {
  "Aries": 1, "Taurus": 2, "Gemini": 3, "Cancer": 4, "Leo": 5, "Virgo": 6,
  "Libra": 7, "Scorpio": 8, "Sagittarius": 9, "Capricorn": 10, "Aquarius": 11, "Pisces": 12
};

export default function KundliChart({ planets, transitPlanets = [], ascendantSign, ascLabel, ascDegree, transitLabel, useSymbols }: KundliChartProps) {
  const SIZE = 400;
  const houseCenters: Record<number, { x: number; y: number }> = {
    1: { x: 200, y: 100 }, 2: { x: 100, y: 50 }, 3: { x: 50, y: 100 }, 4: { x: 100, y: 200 },
    5: { x: 50, y: 300 }, 6: { x: 100, y: 350 }, 7: { x: 200, y: 300 }, 8: { x: 300, y: 350 },
    9: { x: 350, y: 300 }, 10: { x: 300, y: 200 }, 11: { x: 350, y: 100 }, 12: { x: 300, y: 50 },
  };

  const ascNumber = signToNumber[ascendantSign] || 1;
  const getSignForHouse = (houseNumber: number) => {
    let signNum = ascNumber + (houseNumber - 1);
    return signNum > 12 ? signNum - 12 : signNum;
  };

  const isGocharChart = transitPlanets.length > 0;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-md mx-auto bg-white p-2 rounded-xl border border-gray-100 shadow-sm relative"
    >
      {isGocharChart && (
        <div className="absolute top-4 left-4 text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
          ● {transitLabel || 'Transit Overlay'}
        </div>
      )}

      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full h-auto stroke-indigo-900 fill-transparent" style={{ strokeWidth: 1 }}>
        <rect x="0" y="0" width={SIZE} height={SIZE} className="stroke-gray-400" />
        <line x1="0" y1="0" x2={SIZE} y2={SIZE} className="stroke-gray-400" />
        <line x1="0" y1={SIZE} x2={SIZE} y2="0" className="stroke-gray-400" />
        <polygon points={`${SIZE/2},0 ${SIZE},${SIZE/2} ${SIZE/2},${SIZE} 0,${SIZE/2}`} className="stroke-gray-400" />

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((houseNum) => {
          const { x, y } = houseCenters[houseNum];
          const natalInHouse = planets.filter(p => p.house === houseNum);
          const transitInHouse = transitPlanets.filter(p => p.house === houseNum);
          
          return (
            <g key={`house-${houseNum}`}>
              <text x={x} y={y - 22} textAnchor="middle" className="stroke-none fill-red-400/60 text-sm font-bold font-mono">
                {getSignForHouse(houseNum)}
              </text>
              
              {/* NATAL PLANETS & ASCENDANT */}
              <text x={x} y={y + 2} textAnchor="middle" className="stroke-none fill-indigo-950 text-base font-bold font-sans tracking-tight cursor-pointer">
                
                {/* Render the Ascendant Marker ONLY in the 1st House */}
                {houseNum === 1 && ascLabel && (
                  <tspan className="fill-indigo-400/70 text-xs">
                    {ascLabel}
                    {ascDegree !== undefined && <tspan baselineShift="super" fontSize="8">{ascDegree}</tspan>}
                    {natalInHouse.length > 0 ? ', ' : ''}
                  </tspan>
                )}

                {natalInHouse.map((p, i) => (
                  <tspan key={`n-${p.name}`} className="transition-all duration-300 hover:fill-indigo-600">
                    <title>{`${p.name} at ${p.degree}°${p.isRetrograde ? ' (Retrograde)' : ''}`}</title>
                    {i > 0 ? ', ' : ''}
                    {useSymbols ? planetSymbols[p.enName || p.name] || p.name.substring(0, 2) : p.name.substring(0, 2)}
                    
                    {p.isRetrograde && !isGocharChart && (
                      <tspan className="fill-red-500 font-bold" fontSize="18" baselineShift="-3px">*</tspan>
                    )}
                    
                    <tspan baselineShift="super" fontSize="10" className="fill-indigo-400">{p.degree}</tspan>
                  </tspan>
                ))}
              </text>

              {/* TRANSIT PLANETS (Green) */}
              {isGocharChart && (
                <text x={x} y={y + 20} textAnchor="middle" className="stroke-none fill-emerald-600 text-sm font-bold font-sans tracking-tight cursor-pointer">
                  {transitInHouse.map((p, i) => (
                    <tspan key={`t-${p.name}`} className="transition-all duration-300 hover:fill-emerald-400">
                      <title>{`Transit ${p.name} at ${p.degree}°${p.isRetrograde ? ' (Retrograde)' : ''}`}</title>
                      {i > 0 ? ', ' : ''}
                      {useSymbols ? planetSymbols[p.enName || p.name] || p.name.substring(0, 2) : p.name.substring(0, 2)}
                      
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

// import React from 'react';
// import { motion } from 'framer-motion';

// interface MappedPlanet { 
//   name: string; 
//   house: number; 
//   degree: number; 
//   isRetrograde?: boolean; 
// }

// interface KundliChartProps { 
//   planets: MappedPlanet[]; 
//   transitPlanets?: MappedPlanet[]; 
//   ascendantSign: string; 
// }

// const signToNumber: Record<string, number> = {
//   "Aries": 1, "Taurus": 2, "Gemini": 3, "Cancer": 4, "Leo": 5, "Virgo": 6,
//   "Libra": 7, "Scorpio": 8, "Sagittarius": 9, "Capricorn": 10, "Aquarius": 11, "Pisces": 12
// };

// export default function KundliChart({ planets, transitPlanets = [], ascendantSign }: KundliChartProps) {
//   const SIZE = 400;
//   const houseCenters: Record<number, { x: number; y: number }> = {
//     1: { x: 200, y: 100 }, 2: { x: 100, y: 50 }, 3: { x: 50, y: 100 }, 4: { x: 100, y: 200 },
//     5: { x: 50, y: 300 }, 6: { x: 100, y: 350 }, 7: { x: 200, y: 300 }, 8: { x: 300, y: 350 },
//     9: { x: 350, y: 300 }, 10: { x: 300, y: 200 }, 11: { x: 350, y: 100 }, 12: { x: 300, y: 50 },
//   };

//   const ascNumber = signToNumber[ascendantSign] || 1;
//   const getSignForHouse = (houseNumber: number) => {
//     let signNum = ascNumber + (houseNumber - 1);
//     return signNum > 12 ? signNum - 12 : signNum;
//   };

//   const isGocharChart = transitPlanets.length > 0;

//   return (
//     <motion.div 
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.4, ease: "easeOut" }}
//       className="w-full max-w-md mx-auto bg-white p-2 rounded-xl border border-gray-100 shadow-sm relative"
//     >
//       {isGocharChart && (
//         <div className="absolute top-4 left-4 text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
//           ● Transit Overlay
//         </div>
//       )}

//       <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full h-auto stroke-indigo-900 fill-transparent" style={{ strokeWidth: 1 }}>
//         {/* Diamond Chart Lines */}
//         <rect x="0" y="0" width={SIZE} height={SIZE} className="stroke-gray-400" />
//         <line x1="0" y1="0" x2={SIZE} y2={SIZE} className="stroke-gray-400" />
//         <line x1="0" y1={SIZE} x2={SIZE} y2="0" className="stroke-gray-400" />
//         <polygon points={`${SIZE/2},0 ${SIZE},${SIZE/2} ${SIZE/2},${SIZE} 0,${SIZE/2}`} className="stroke-gray-400" />

//         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((houseNum) => {
//           const { x, y } = houseCenters[houseNum];
//           const natalInHouse = planets.filter(p => p.house === houseNum);
//           const transitInHouse = transitPlanets.filter(p => p.house === houseNum);
          
//           return (
//             <g key={`house-${houseNum}`}>
//               {/* Zodiac Sign Number in the House */}
//               <text x={x} y={y - 22} textAnchor="middle" className="stroke-none fill-red-400/50 text-xs font-semibold font-mono">
//                 {getSignForHouse(houseNum)}
//               </text>
              
//               {/* Natal Planets */}
//               <text x={x} y={y + 2} textAnchor="middle" className="stroke-none fill-indigo-950 text-sm font-bold font-sans tracking-tight cursor-pointer">
//                 {natalInHouse.map((p, i) => (
//                   <tspan key={`n-${p.name}`} className="transition-all duration-300 hover:fill-indigo-600">
//                     <title>{`${p.name} at ${p.degree}°${p.isRetrograde ? ' (Retrograde)' : ''}`}</title>
//                     {i > 0 ? ', ' : ''}
//                     {p.name.substring(0, 2)}
                    
//                     {/* Retrograde Asterisk - Hidden if we are showing the Gochar Overlay */}
//                     {p.isRetrograde && !isGocharChart && (
//                       <tspan className="fill-red-500 font-bold" fontSize="18" baselineShift="-3px">*</tspan>
//                     )}
                    
//                     <tspan baselineShift="super" fontSize="9" className="fill-indigo-400">{p.degree}</tspan>
//                   </tspan>
//                 ))}
//               </text>

//               {/* Transit Planets */}
//               {isGocharChart && (
//                 <text x={x} y={y + 20} textAnchor="middle" className="stroke-none fill-emerald-600 text-xs font-bold font-sans tracking-tight cursor-pointer">
//                   {transitInHouse.map((p, i) => (
//                     <tspan key={`t-${p.name}`} className="transition-all duration-300 hover:fill-emerald-400">
//                       <title>{`Transit ${p.name} at ${p.degree}°${p.isRetrograde ? ' (Retrograde)' : ''}`}</title>
//                       {i > 0 ? ', ' : ''}
//                       {p.name.substring(0, 2)}
                      
//                       {/* Retrograde Asterisk for Transits ONLY */}
//                       {p.isRetrograde && (
//                         <tspan className="fill-red-500 font-bold" fontSize="18" baselineShift="-3px">*</tspan>
//                       )}
                      
//                       <tspan baselineShift="super" fontSize="8" className="fill-emerald-400/80">{p.degree}</tspan>
//                     </tspan>
//                   ))}
//                 </text>
//               )}
//             </g>
//           );
//         })}
//       </svg>
//     </motion.div>
//   );
// }