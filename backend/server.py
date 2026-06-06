"""
Professional Jyotish Computational Engine (Final Version)
Features: D1 (Whole Sign), D9 (Navamsha), Sripati Bhava Chalit, Gochar (Transit),
and 4-Level Vimshottari Dasha (Savana Calendar Math, NASA JPL Precision).
"""

import os
from typing import List, Dict, Any
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from datetime import datetime, timedelta
from dateutil.relativedelta import relativedelta
import pytz
import swisseph as swe
from timezonefinder import TimezoneFinder

app = FastAPI(title="Professional Jyotish Engine")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

tf = TimezoneFinder()

# --- CONSTANTS ---
ZODIAC_SIGNS = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]

# Note: True Node is used for Professional Jyotish standard accuracy
PLANET_MAP = {
    "Sun": swe.SUN, "Moon": swe.MOON, "Mars": swe.MARS, "Mercury": swe.MERCURY, 
    "Jupiter": swe.JUPITER, "Venus": swe.VENUS, "Saturn": swe.SATURN, "Rahu": swe.TRUE_NODE 
}

DASHA_LORDS = [
    ("Ketu", 7), ("Venus", 20), ("Sun", 6), ("Moon", 10),
    ("Mars", 7), ("Rahu", 18), ("Jupiter", 16), ("Saturn", 19), ("Mercury", 17)
]

# --- REQUEST/RESPONSE MODELS ---
class BirthDataRequest(BaseModel):
    year: int = Field(..., ge=1800, le=2100)
    month: int = Field(..., ge=1, le=12)
    day: int = Field(..., ge=1, le=31)
    hour: int = Field(..., ge=0, le=23)
    minute: int = Field(..., ge=0, le=59)
    latitude: float = Field(..., ge=-90.0, le=90.0)
    longitude: float = Field(..., ge=-180.0, le=180.0)
    
    transit_year: int
    transit_month: int
    transit_day: int

class PlanetData(BaseModel):
    name: str
    longitude: float
    sign: str
    d1_house: int
    d9_sign: str
    chalit_house: int

class TransitPlanetData(BaseModel):
    name: str
    longitude: float
    sign: str
    natal_house: int

class DashaPeriod(BaseModel):
    lord: str
    start_date: str
    end_date: str
    sub_dashas: List['DashaPeriod'] = []

class FullChartResponse(BaseModel):
    ascendant_longitude: float
    ascendant_sign: str
    d9_ascendant_sign: str
    planets: List[PlanetData]
    transit_planets: List[TransitPlanetData]
    chalit_cusps: List[float]
    vimshottari_dashas: List[DashaPeriod]
    timezone_detected: str


# --- MATHEMATICAL ALGORITHMS ---

def get_sign(longitude: float) -> str:
    return ZODIAC_SIGNS[int(longitude // 30)]

def calculate_d1_house(planet_lon: float, asc_lon: float) -> int:
    """D1 (Lagna Chart) uses the Whole Sign House system."""
    asc_sign_index = int(asc_lon // 30)
    planet_sign_index = int(planet_lon // 30)
    return ((planet_sign_index - asc_sign_index + 12) % 12) + 1

def calculate_d9_sign(longitude: float) -> str:
    """Calculates Navamsha based on Parasari division rules."""
    sign_idx = int(longitude // 30)
    part = int((longitude % 30) // (30 / 9))
    if sign_idx in [0, 4, 8]: start = 0
    elif sign_idx in [1, 5, 9]: start = 9
    elif sign_idx in [2, 6, 10]: start = 6
    else: start = 3
    return ZODIAC_SIGNS[(start + part) % 12]

def calculate_chalit_house(planet_lon: float, cusps: tuple) -> int:
    """True Sripati Bhava Chalit System with safe C-array indexing."""
    if len(cusps) > 12:
        centers = cusps[1:13]
    else:
        centers = cusps

    sandhis = []
    for i in range(12):
        madhya1 = centers[i]
        madhya2 = centers[(i + 1) % 12]
        diff = (madhya2 - madhya1) % 360.0
        sandhi = (madhya1 + diff / 2.0) % 360.0
        sandhis.append(sandhi)
        
    for i in range(12):
        start_bound = sandhis[i - 1]
        end_bound = sandhis[i]
        
        if start_bound < end_bound:
            if start_bound <= planet_lon < end_bound: return i + 1
        else:
            if planet_lon >= start_bound or planet_lon < end_bound: return i + 1
    return 1

def add_dasha_period(start_date: datetime, lord_total_years: float, proportion: float = 1.0) -> datetime:
    """Savana calendar math synchronized with professional Jyotish software."""
    exact_fractional_years = lord_total_years * proportion
    
    y = int(exact_fractional_years)
    rem_y = exact_fractional_years - y
    
    m_float = rem_y * 12
    m = int(m_float)
    rem_m = m_float - m
    
    d_float = rem_m * 30
    d = int(round(d_float))
    
    return start_date + relativedelta(years=y, months=m, days=d)

def get_sub_dashas(parent_start_date: datetime, parent_total_years: float, start_lord_idx: int, depth: int) -> List[Dict]:
    if depth == 0: return []
    subs = []
    current_date = parent_start_date
    
    for i in range(9):
        current_lord_idx = (start_lord_idx + i) % 9
        lord_name, lord_years = DASHA_LORDS[current_lord_idx]
        
        proportion = lord_years / 120.0
        exact_sub_years = parent_total_years * proportion
        end_date = add_dasha_period(current_date, parent_total_years, proportion)
        
        subs.append({
            "lord": lord_name,
            "start_date": current_date.strftime("%d %b %Y"),
            "end_date": end_date.strftime("%d %b %Y"),
            "sub_dashas": get_sub_dashas(current_date, exact_sub_years, current_lord_idx, depth - 1)
        })
        current_date = end_date
    return subs

def generate_vimshottari(moon_lon: float, birth_date: datetime) -> List[dict]:
    nakshatra_len = 360 / 27
    exact_nakshatra = moon_lon / nakshatra_len
    nak_idx = int(exact_nakshatra) % 27
    lord_idx = nak_idx % 9
    fraction_passed = exact_nakshatra % 1
    
    first_lord_years = DASHA_LORDS[lord_idx][1]
    maha_start_date = add_dasha_period(birth_date, first_lord_years, -fraction_passed)
    
    dashas = []
    current_date = maha_start_date
    
    for i in range(9):
        current_lord_idx = (lord_idx + i) % 9
        lord_name, lord_years = DASHA_LORDS[current_lord_idx]
        end_date = add_dasha_period(current_date, lord_years, 1.0)
        
        dashas.append({
            "lord": lord_name,
            "start_date": current_date.strftime("%d %b %Y"),
            "end_date": end_date.strftime("%d %b %Y"),
            "sub_dashas": get_sub_dashas(current_date, lord_years, current_lord_idx, 3)
        })
        current_date = end_date
    return dashas


# --- CORE ENDPOINT ---

@app.post("/api/v1/compute-charts", response_model=FullChartResponse)
async def compute_charts(payload: BirthDataRequest):
    try:
        # Automatic Timezone Resolution
        tz_str = tf.timezone_at(lng=payload.longitude, lat=payload.latitude) or "UTC"
        local_tz = pytz.timezone(tz_str)
        
        # 1. NATAL MATRIX SETUP
        local_time = datetime(payload.year, payload.month, payload.day, payload.hour, payload.minute)
        utc_time = local_tz.localize(local_time).astimezone(pytz.utc)
        fractional_hour = utc_time.hour + (utc_time.minute / 60.0) + (utc_time.second / 3600.0)

        # Force NASA JPL High-Precision Data
        swe.set_ephe_path('/usr/share/ephe')
        swe.set_sid_mode(swe.SIDM_LAHIRI, 0, 0)
        calc_flags = swe.FLG_SWIEPH | swe.FLG_SIDEREAL

        julian_day = swe.julday(utc_time.year, utc_time.month, utc_time.day, fractional_hour)

        cusps, ascmc = swe.houses_ex(julian_day, payload.latitude, payload.longitude, b'O', calc_flags)
        asc_lon = ascmc[0]
        asc_sign = get_sign(asc_lon)
        d9_asc_sign = calculate_d9_sign(asc_lon)
        
        planets = []
        moon_lon = 0.0
        
        for name, internal_id in PLANET_MAP.items():
            calc_result, _ = swe.calc_ut(julian_day, internal_id, calc_flags)
            lon = calc_result[0]
            if name == "Moon": moon_lon = lon
            
            planets.append(PlanetData(
                name=name, longitude=round(lon, 6), sign=get_sign(lon),
                d1_house=calculate_d1_house(lon, asc_lon),
                d9_sign=calculate_d9_sign(lon),
                chalit_house=calculate_chalit_house(lon, cusps)
            ))

        rahu = next(p for p in planets if p.name == "Rahu")
        ketu_lon = (rahu.longitude + 180.0) % 360.0
        planets.append(PlanetData(
            name="Ketu", longitude=round(ketu_lon, 6), sign=get_sign(ketu_lon),
            d1_house=calculate_d1_house(ketu_lon, asc_lon),
            d9_sign=calculate_d9_sign(ketu_lon),
            chalit_house=calculate_chalit_house(ketu_lon, cusps)
        ))

        # 2. GOCHAR (TRANSIT) MATRIX SETUP
        transit_time = datetime(payload.transit_year, payload.transit_month, payload.transit_day, 12, 0)
        t_utc_time = local_tz.localize(transit_time).astimezone(pytz.utc)
        t_fractional_hour = t_utc_time.hour + (t_utc_time.minute / 60.0) + (t_utc_time.second / 3600.0)
        t_julian_day = swe.julday(t_utc_time.year, t_utc_time.month, t_utc_time.day, t_fractional_hour)

        transit_planets = []
        for name, internal_id in PLANET_MAP.items():
            calc_result, _ = swe.calc_ut(t_julian_day, internal_id, calc_flags)
            lon = calc_result[0]
            transit_planets.append(TransitPlanetData(
                name=name, longitude=round(lon, 6), sign=get_sign(lon),
                natal_house=calculate_d1_house(lon, asc_lon)
            ))
            
        t_rahu = next(p for p in transit_planets if p.name == "Rahu")
        t_ketu_lon = (t_rahu.longitude + 180.0) % 360.0
        transit_planets.append(TransitPlanetData(
            name="Ketu", longitude=round(t_ketu_lon, 6), sign=get_sign(t_ketu_lon),
            natal_house=calculate_d1_house(t_ketu_lon, asc_lon)
        ))

        # 3. VIMSHOTTARI DASHA GENERATION
        dashas = generate_vimshottari(moon_lon, local_time)
        
        swe.close()

        return FullChartResponse(
            ascendant_longitude=round(asc_lon, 6),
            ascendant_sign=asc_sign,
            d9_ascendant_sign=d9_asc_sign,
            planets=planets,
            transit_planets=transit_planets,
            chalit_cusps=[round(c, 6) for c in cusps],
            vimshottari_dashas=dashas,
            timezone_detected=tz_str
        )

    except Exception as err:
        swe.close()
        raise HTTPException(status_code=500, detail=str(err))