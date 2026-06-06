import React from 'react';

// Define the data structure expected from our Python Backend
interface PlanetPosition {
  name: string;
  zodiac_sign: string;
  house_placement: number;
}

interface NorthIndianChartProps {
  planets: PlanetPosition[];
  ascendantSign: string;
}

// Helper to convert Zodiac string to Vedic Number (1-12)
const signToNumber: Record<string, number> = {
  "Aries": 1, "Taurus": 2, "Gemini": 3, "Cancer": 4,
  "Leo": 5, "Virgo": 6, "Libra": 7, "Scorpio": 8,
  "Sagittarius": 9, "Capricorn": 10, "Aquarius": 11, "Pisces": 12
};

export default function NorthIndianChart({ planets, ascendantSign }: NorthIndianChartProps) {
  // SVG ViewBox is fixed to 400x400 for perfect coordinate mapping
  const SIZE = 400;

  // The exact center (x, y) coordinates for text placement inside the 12 geometric houses.
  // Mapped structurally: Index 1 = 1st House (Top Center Diamond), Index 2 = 2nd House, etc.
  const houseCenters: Record<number, { x: number; y: number }> = {
    1: { x: 200, y: 100 },
    2: { x: 100, y: 50 },
    3: { x: 50, y: 100 },
    4: { x: 100, y: 200 },
    5: { x: 50, y: 300 },
    6: { x: 100, y: 350 },
    7: { x: 200, y: 300 },
    8: { x: 300, y: 350 },
    9: { x: 350, y: 300 },
    10: { x: 300, y: 200 },
    11: { x: 350, y: 100 },
    12: { x: 300, y: 50 },
  };

  // Calculate which zodiac number belongs in which house based on the Ascendant
  const ascNumber = signToNumber[ascendantSign] || 1;
  const getSignForHouse = (houseNumber: number) => {
    let signNum = ascNumber + (houseNumber - 1);
    if (signNum > 12) signNum -= 12;
    return signNum;
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <svg 
        viewBox={`0 0 ${SIZE} ${SIZE}`} 
        className="w-full h-auto stroke-indigo-900 fill-transparent"
        style={{ strokeWidth: 2 }}
      >
        {/* 1. Draw the geometric skeleton of the chart */}
        {/* Outer Square */}
        <rect x="0" y="0" width={SIZE} height={SIZE} />
        
        {/* Main Diagonals */}
        <line x1="0" y1="0" x2={SIZE} y2={SIZE} />
        <line x1="0" y1={SIZE} x2={SIZE} y2="0" />
        
        {/* Inner Diamond (Connects midpoints of the outer square) */}
        <polygon points={`${SIZE/2},0 ${SIZE},${SIZE/2} ${SIZE/2},${SIZE} 0,${SIZE/2}`} />

        {/* 2. Map Zodiac Numbers and Planets into their respective spatial houses */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((houseNum) => {
          const { x, y } = houseCenters[houseNum];
          
          // Find all planets residing in this specific house
          const housePlanets = planets.filter(p => p.house_placement === houseNum);
          
          return (
            <g key={`house-${houseNum}`}>
              {/* Render the Zodiac Number in light gray at the top-edge of the text block */}
              <text 
                x={x} 
                y={y - 20} 
                textAnchor="middle" 
                className="stroke-none fill-gray-400 text-sm font-semibold font-mono"
              >
                {getSignForHouse(houseNum)}
              </text>
              
              {/* Render the Planet Abbreviations (e.g., Su, Mo, Ju) */}
              <text 
                x={x} 
                y={y + 5} 
                textAnchor="middle" 
                className="stroke-none fill-indigo-950 text-sm font-bold font-sans"
              >
                {housePlanets.map(p => p.name.substring(0, 2)).join(', ')}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}