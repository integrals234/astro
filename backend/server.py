import os
from typing import List, Dict, Any, Optional
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from datetime import datetime, timedelta
from dateutil.relativedelta import relativedelta
import pytz
import swisseph as swe
from timezonefinder import TimezoneFinder
from astral import LocationInfo
from astral.sun import sun

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

NAKSHATRAS = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", 
    "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", 
    "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", 
    "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", 
    "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
]

SIGN_LORDS = {
    "Aries": "Mars", "Taurus": "Venus", "Gemini": "Mercury", "Cancer": "Moon",
    "Leo": "Sun", "Virgo": "Mercury", "Libra": "Venus", "Scorpio": "Mars",
    "Sagittarius": "Jupiter", "Capricorn": "Saturn", "Aquarius": "Saturn", "Pisces": "Jupiter"
}

EXALTATION = {"Sun": "Aries", "Moon": "Taurus", "Mars": "Capricorn", "Mercury": "Virgo", "Jupiter": "Cancer", "Venus": "Pisces", "Saturn": "Libra", "Rahu": "Taurus", "Ketu": "Scorpio"}
DEBILITATION = {"Sun": "Libra", "Moon": "Scorpio", "Mars": "Cancer", "Mercury": "Pisces", "Jupiter": "Capricorn", "Venus": "Virgo", "Saturn": "Aries", "Rahu": "Scorpio", "Ketu": "Taurus"}

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
    sign_lord: str
    nakshatra: str
    nakshatra_pada: int
    is_retrograde: bool
    dignity: str  # Exalted, Debilitated, Own Sign, or Neutral
    d1_house: int
    d9_sign: str
    d10_sign: str
    chalit_house: int
    aspects_houses: List[int] # Houses this planet is aspecting

class TransitPlanetData(BaseModel):
    name: str
    longitude: float
    sign: str
    natal_house: int
    is_retrograde: bool = False

class DashaPeriod(BaseModel):
    lord: str
    start_date: str
    end_date: str
    sub_dashas: List['DashaPeriod'] = []

class FullChartResponse(BaseModel):
    ascendant_longitude: float
    ascendant_sign: str
    d9_ascendant_sign: str
    d10_ascendant_sign: str
    ascendant_nakshatra: str
    planets: List[PlanetData]
    transit_planets: List[TransitPlanetData]
    chalit_cusps: List[float]
    vimshottari_dashas: List[DashaPeriod]
    timezone_detected: str
    timezone_offset_hours: float
    ayanamsha: float
    sunrise: Optional[str] = None
    sunset: Optional[str] = None


# --- MATHEMATICAL ALGORITHMS ---

def get_solar_timings(latitude: float, longitude: float, year: int, month: int, day: int, timezone_str: str):
    try:
        loc = LocationInfo(latitude=latitude, longitude=longitude, timezone=timezone_str)
        birth_date = datetime(year, month, day).date()
        s = sun(loc.observer, date=birth_date, tzinfo=loc.timezone)
        return s["sunrise"].strftime("%H:%M:%S"), s["sunset"].strftime("%H:%M:%S")
    except Exception as e:
        print(f"Error calculating solar timings: {e}")
        return None, None

def get_sign(longitude: float) -> str:
    return ZODIAC_SIGNS[int(longitude // 30)]

def get_nakshatra_info(longitude: float):
    nak_index = int(longitude / (360/27))
    pada = int((longitude % (360/27)) / (360/108)) + 1
    return NAKSHATRAS[nak_index], pada

def get_dignity(planet: str, sign: str) -> str:
    if EXALTATION.get(planet) == sign:
        return "Exalted"
    if DEBILITATION.get(planet) == sign:
        return "Debilitated"
    if SIGN_LORDS.get(sign) == planet:
        return "Own Sign"
    return "Neutral"

def get_vedic_aspects(planet: str, current_house: int) -> List[int]:
    """Calculates full Drishti based on Parasari rules."""
    aspects = [(current_house + 7 - 1) % 12 + 1] # Everyone aspects the 7th
    if planet == "Mars":
        aspects.extend([(current_house + 4 - 1) % 12 + 1, (current_house + 8 - 1) % 12 + 1])
    elif planet in ["Jupiter", "Rahu", "Ketu"]:
        aspects.extend([(current_house + 5 - 1) % 12 + 1, (current_house + 9 - 1) % 12 + 1])
    elif planet == "Saturn":
        aspects.extend([(current_house + 3 - 1) % 12 + 1, (current_house + 10 - 1) % 12 + 1])
    return sorted(list(set(aspects)))

def calculate_d1_house(planet_lon: float, asc_lon: float) -> int:
    asc_sign_index = int(asc_lon // 30)
    planet_sign_index = int(planet_lon // 30)
    return ((planet_sign_index - asc_sign_index + 12) % 12) + 1

def calculate_d9_sign(longitude: float) -> str:
    sign_idx = int(longitude // 30)
    part = int((longitude % 30) // (30 / 9))
    if sign_idx in [0, 4, 8]: start = 0
    elif sign_idx in [1, 5, 9]: start = 9
    elif sign_idx in [2, 6, 10]: start = 6
    else: start = 3
    return ZODIAC_SIGNS[(start + part) % 12]

def calculate_d10_sign(longitude: float) -> str:
    """Dashamsha (career/profession divisional chart): each sign split into
    10 equal 3-degree parts. Standard Parashari rule — odd-numbered signs
    (1-indexed: Aries, Gemini, Leo, Libra, Sagittarius, Aquarius) count from
    themselves; even-numbered signs count from the 9th sign ahead."""
    sign_idx = int(longitude // 30)
    part = int((longitude % 30) // (30 / 10))
    start = sign_idx if sign_idx % 2 == 0 else (sign_idx + 8) % 12
    return ZODIAC_SIGNS[(start + part) % 12]

def calculate_chalit_house(planet_lon: float, cusps: tuple) -> int:
    if len(cusps) > 12: centers = cusps[1:13]
    else: centers = cusps

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
    exact_nakshatra = moon_lon / (360 / 27)
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
        tz_str = tf.timezone_at(lng=payload.longitude, lat=payload.latitude) or "UTC"
        local_tz = pytz.timezone(tz_str)
        sunrise_str, sunset_str = get_solar_timings(
            latitude=payload.latitude, longitude=payload.longitude,
            year=payload.year, month=payload.month, day=payload.day, timezone_str=tz_str
        )
        
        local_time = datetime(payload.year, payload.month, payload.day, payload.hour, payload.minute)
        utc_time = local_tz.localize(local_time).astimezone(pytz.utc)
        fractional_hour = utc_time.hour + (utc_time.minute / 60.0) + (utc_time.second / 3600.0)

        # Ensure you have the ephemeris files in this path in your docker container
        swe.set_ephe_path('/usr/share/ephe')
        swe.set_sid_mode(swe.SIDM_LAHIRI, 0, 0)
        calc_flags = swe.FLG_SWIEPH | swe.FLG_SIDEREAL | swe.FLG_SPEED

        julian_day = swe.julday(utc_time.year, utc_time.month, utc_time.day, fractional_hour)
        cusps, ascmc = swe.houses_ex(julian_day, payload.latitude, payload.longitude, b'O', calc_flags)
        
        asc_lon = ascmc[0]
        asc_sign = get_sign(asc_lon)
        d9_asc_sign = calculate_d9_sign(asc_lon)
        d10_asc_sign = calculate_d10_sign(asc_lon)
        asc_nak, _ = get_nakshatra_info(asc_lon)
        
        planets = []
        moon_lon = 0.0
        
        for name, internal_id in PLANET_MAP.items():
            calc_result, _ = swe.calc_ut(julian_day, internal_id, calc_flags)
            lon = calc_result[0]
            speed = calc_result[3] # Index 3 holds planetary speed
            is_retro = speed < 0 if name not in ["Sun", "Moon", "Rahu"] else False
            
            if name == "Moon": moon_lon = lon
            
            sign = get_sign(lon)
            nak_name, pada = get_nakshatra_info(lon)
            house = calculate_d1_house(lon, asc_lon)
            
            planets.append(PlanetData(
                name=name, longitude=round(lon, 6), sign=sign,
                sign_lord=SIGN_LORDS[sign], nakshatra=nak_name, nakshatra_pada=pada,
                is_retrograde=is_retro, dignity=get_dignity(name, sign),
                d1_house=house, d9_sign=calculate_d9_sign(lon), d10_sign=calculate_d10_sign(lon),
                chalit_house=calculate_chalit_house(lon, cusps),
                aspects_houses=get_vedic_aspects(name, house)
            ))

        # Handle Ketu separately based on Rahu
        rahu = next(p for p in planets if p.name == "Rahu")
        ketu_lon = (rahu.longitude + 180.0) % 360.0
        k_sign = get_sign(ketu_lon)
        k_nak, k_pada = get_nakshatra_info(ketu_lon)
        k_house = calculate_d1_house(ketu_lon, asc_lon)

        planets.append(PlanetData(
            name="Ketu", longitude=round(ketu_lon, 6), sign=k_sign,
            sign_lord=SIGN_LORDS[k_sign], nakshatra=k_nak, nakshatra_pada=k_pada,
            is_retrograde=True, dignity=get_dignity("Ketu", k_sign),
            d1_house=k_house, d9_sign=calculate_d9_sign(ketu_lon), d10_sign=calculate_d10_sign(ketu_lon),
            chalit_house=calculate_chalit_house(ketu_lon, cusps),
            aspects_houses=get_vedic_aspects("Ketu", k_house)
        ))

        # TRANSITS
        transit_time = datetime(payload.transit_year, payload.transit_month, payload.transit_day, 12, 0)
        t_utc_time = local_tz.localize(transit_time).astimezone(pytz.utc)
        t_fractional_hour = t_utc_time.hour + (t_utc_time.minute / 60.0) + (t_utc_time.second / 3600.0)
        t_julian_day = swe.julday(t_utc_time.year, t_utc_time.month, t_utc_time.day, t_fractional_hour)

        transit_planets = []
        for name, internal_id in PLANET_MAP.items():
            calc_result, _ = swe.calc_ut(t_julian_day, internal_id, calc_flags)
            lon = calc_result[0]
            speed = calc_result[3] # Index 3 holds planetary speed
            is_retro = speed < 0 if name not in ["Sun", "Moon", "Rahu"] else False
            
            transit_planets.append(TransitPlanetData(
                name=name, longitude=round(lon, 6), sign=get_sign(lon),
                natal_house=calculate_d1_house(lon, asc_lon),
                is_retrograde=is_retro
            ))
            
        t_rahu = next(p for p in transit_planets if p.name == "Rahu")
        t_ketu_lon = (t_rahu.longitude + 180.0) % 360.0
        transit_planets.append(TransitPlanetData(
            name="Ketu", longitude=round(t_ketu_lon, 6), sign=get_sign(t_ketu_lon),
            natal_house=calculate_d1_house(t_ketu_lon, asc_lon),
            is_retrograde=True
        ))

        dashas = generate_vimshottari(moon_lon, local_time)
        ayanamsha = swe.get_ayanamsa(julian_day)
        utc_offset = local_tz.localize(local_time).utcoffset()
        timezone_offset_hours = (
            utc_offset.total_seconds() / 3600 if utc_offset is not None else 0.0
        )
        swe.close()

        return FullChartResponse(
            ascendant_longitude=round(asc_lon, 6),
            ascendant_sign=asc_sign,
            d9_ascendant_sign=d9_asc_sign,
            d10_ascendant_sign=d10_asc_sign,
            ascendant_nakshatra=asc_nak,
            planets=planets,
            transit_planets=transit_planets,
            chalit_cusps=[round(c, 6) for c in cusps],
            vimshottari_dashas=dashas,
            timezone_detected=tz_str,
            timezone_offset_hours=round(timezone_offset_hours, 2),
            ayanamsha=round(ayanamsha, 6),
            sunrise=sunrise_str,
            sunset=sunset_str
        )

    except Exception as err:
        swe.close()
        raise HTTPException(status_code=500, detail=str(err))


# --- VARSHAPHALA (ANNUAL FORECAST / SOLAR RETURN) ---
#
# NOT YET DEPLOYED — written for review, not live. See the request/response
# models and endpoint below for the full explanation of scope and the
# solar-return root-finding approach.

NAKSHATRA_ARC = 360.0 / 27.0

TITHI_NAMES = [
    "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami",
    "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
    "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi",
]

YOGA_NAMES = [
    "Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana",
    "Atiganda", "Sukarma", "Dhriti", "Shoola", "Ganda",
    "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra",
    "Siddhi", "Vyatipata", "Variyana", "Parigha", "Shiva",
    "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma",
    "Indra", "Vaidhriti",
]

KARANA_MOVABLE = ["Bava", "Balava", "Kaulava", "Taitila", "Garija", "Vanija", "Vishti"]
KARANA_FIXED_END = ["Shakuni", "Chatushpada", "Naga"]


class AnnualForecastRequest(BaseModel):
    """Same natal birth data compute-charts takes, plus which year's
    return to compute — the year is independent of the birth year so a
    2027 return can be requested for someone born in 1990."""
    year: int = Field(..., ge=1800, le=2100)
    month: int = Field(..., ge=1, le=12)
    day: int = Field(..., ge=1, le=31)
    hour: int = Field(..., ge=0, le=23)
    minute: int = Field(..., ge=0, le=59)
    latitude: float = Field(..., ge=-90.0, le=90.0)
    longitude: float = Field(..., ge=-180.0, le=180.0)
    target_year: int = Field(..., ge=1800, le=2100)


class AnnualForecastResponse(BaseModel):
    """The Varshaphala (solar return) chart: planetary positions at the
    exact moment transiting Sun returns to its natal sidereal degree,
    cast for the birth location. Deliberately scoped to the D1 Rasi chart
    only — Varshaphala traditionally uses its own Mudda Dasha system
    rather than Vimshottari, and getting a second dasha system right
    without the ability to test it is a separate, riskier piece of work
    than reusing the planet/house math this file already computes
    correctly for the natal chart. No dasha is returned."""
    return_date: str
    return_time: str
    timezone_detected: str
    ascendant_longitude: float
    ascendant_sign: str
    planets: List[PlanetData]
    chalit_cusps: List[float]


def find_solar_return_utc(natal_sun_lon: float, target_year: int, birth_month: int, birth_day: int, calc_flags: int) -> datetime:
    """
    The UTC moment within `target_year` when the transiting Sun's sidereal
    longitude equals `natal_sun_lon`, found by bisection.

    Correctness relies on one fact: as seen from Earth, the Sun's apparent
    longitude never goes retrograde (unlike every other body this file
    computes) — Earth's own orbit cannot lap or be lapped by itself, so the
    Sun's ecliptic longitude increases monotonically at roughly 1 degree per
    day, every day, without exception. That guarantees the wrapped
    difference function below crosses zero exactly once per year, so a
    single sign change brackets exactly one root — no local minima/maxima
    to fool a naive bisection, which would be a real risk for any of the
    other seven bodies.

    The search window is anchored on the calendar anniversary of the birth
    date and widened to +/-10 days (~10 degrees of solar motion, comfortably
    wider than the sidereal/tropical year drift — about 20 minutes of arc
    per year of age, so even 80 years of drift is under a day) rather than
    assuming the return falls exactly on the anniversary.
    """
    anchor = datetime(target_year, birth_month, birth_day, 12, 0)

    def sun_lon_diff(dt: datetime) -> float:
        jd = swe.julday(dt.year, dt.month, dt.day, dt.hour + dt.minute / 60.0 + dt.second / 3600.0)
        result, _ = swe.calc_ut(jd, swe.SUN, calc_flags)
        # Wrapped to (-180, 180] so a crossing of the natal degree is a
        # single sign change regardless of where on the zodiac it falls.
        return (result[0] - natal_sun_lon + 180) % 360 - 180

    lo = anchor - timedelta(days=10)
    hi = anchor + timedelta(days=10)
    f_lo = sun_lon_diff(lo)
    f_hi = sun_lon_diff(hi)

    if f_lo * f_hi > 0:
        raise ValueError("Could not bracket a solar return within +/-10 days of the anniversary")

    # 40 halvings of a 20-day window converges to a fraction of a second —
    # far past any precision this file's other timing math relies on, and
    # cheap (each step is one ephemeris call).
    for _ in range(40):
        mid = lo + (hi - lo) / 2
        f_mid = sun_lon_diff(mid)
        if f_lo * f_mid <= 0:
            hi, f_hi = mid, f_mid
        else:
            lo, f_lo = mid, f_mid
        if (hi - lo).total_seconds() < 1:
            break

    return lo + (hi - lo) / 2


@app.post("/api/v1/annual-forecast", response_model=AnnualForecastResponse)
async def annual_forecast(payload: AnnualForecastRequest):
    try:
        tz_str = tf.timezone_at(lng=payload.longitude, lat=payload.latitude) or "UTC"
        local_tz = pytz.timezone(tz_str)

        swe.set_ephe_path('/usr/share/ephe')
        swe.set_sid_mode(swe.SIDM_LAHIRI, 0, 0)
        calc_flags = swe.FLG_SWIEPH | swe.FLG_SIDEREAL | swe.FLG_SPEED

        # Natal Sun longitude only — the rest of the natal chart is
        # irrelevant to finding the return moment.
        natal_local = datetime(payload.year, payload.month, payload.day, payload.hour, payload.minute)
        natal_utc = local_tz.localize(natal_local).astimezone(pytz.utc)
        natal_jd = swe.julday(natal_utc.year, natal_utc.month, natal_utc.day, natal_utc.hour + natal_utc.minute / 60.0)
        natal_sun_result, _ = swe.calc_ut(natal_jd, swe.SUN, calc_flags)
        natal_sun_lon = natal_sun_result[0]

        return_utc = find_solar_return_utc(natal_sun_lon, payload.target_year, payload.month, payload.day, calc_flags)
        return_utc = pytz.utc.localize(return_utc)
        return_local = return_utc.astimezone(local_tz)

        return_jd = swe.julday(
            return_utc.year, return_utc.month, return_utc.day,
            return_utc.hour + return_utc.minute / 60.0 + return_utc.second / 3600.0,
        )
        cusps, ascmc = swe.houses_ex(return_jd, payload.latitude, payload.longitude, b'O', calc_flags)
        asc_lon = ascmc[0]
        asc_sign = get_sign(asc_lon)

        planets = []
        for name, internal_id in PLANET_MAP.items():
            calc_result, _ = swe.calc_ut(return_jd, internal_id, calc_flags)
            lon = calc_result[0]
            speed = calc_result[3]
            is_retro = speed < 0 if name not in ["Sun", "Moon", "Rahu"] else False
            sign = get_sign(lon)
            nak_name, pada = get_nakshatra_info(lon)
            house = calculate_d1_house(lon, asc_lon)
            planets.append(PlanetData(
                name=name, longitude=round(lon, 6), sign=sign,
                sign_lord=SIGN_LORDS[sign], nakshatra=nak_name, nakshatra_pada=pada,
                is_retrograde=is_retro, dignity=get_dignity(name, sign),
                d1_house=house, d9_sign=calculate_d9_sign(lon), d10_sign=calculate_d10_sign(lon),
                chalit_house=calculate_chalit_house(lon, cusps),
                aspects_houses=get_vedic_aspects(name, house)
            ))

        rahu = next(p for p in planets if p.name == "Rahu")
        ketu_lon = (rahu.longitude + 180.0) % 360.0
        k_sign = get_sign(ketu_lon)
        k_nak, k_pada = get_nakshatra_info(ketu_lon)
        k_house = calculate_d1_house(ketu_lon, asc_lon)
        planets.append(PlanetData(
            name="Ketu", longitude=round(ketu_lon, 6), sign=k_sign,
            sign_lord=SIGN_LORDS[k_sign], nakshatra=k_nak, nakshatra_pada=k_pada,
            is_retrograde=True, dignity=get_dignity("Ketu", k_sign),
            d1_house=k_house, d9_sign=calculate_d9_sign(ketu_lon), d10_sign=calculate_d10_sign(ketu_lon),
            chalit_house=calculate_chalit_house(ketu_lon, cusps),
            aspects_houses=get_vedic_aspects("Ketu", k_house)
        ))

        swe.close()

        return AnnualForecastResponse(
            return_date=return_local.strftime("%d %b %Y"),
            return_time=return_local.strftime("%H:%M:%S"),
            timezone_detected=tz_str,
            ascendant_longitude=round(asc_lon, 6),
            ascendant_sign=asc_sign,
            planets=planets,
            chalit_cusps=[round(c, 6) for c in cusps],
        )

    except Exception as err:
        swe.close()
        raise HTTPException(status_code=500, detail=str(err))


# --- PANCHANG (DAY-LEVEL ELEMENTS: TITHI / NAKSHATRA / YOGA / KARANA) ---
#
# NOT YET DEPLOYED — written for review, not live.
#
# Deliberately does not compute Rokuyo (Japanese six-day cycle). Rokuyo is
# derived from the traditional Japanese lunisolar calendar's month and day
# number, not from planetary angles — it needs a real lunisolar calendar
# implementation (new-moon timing, leap-month rules) to get right, which is
# a different and materially riskier problem than the angular math below,
# and not something to write for the first time with no way to test it.
# Left for follow-up work with an actual verification path.

class PanchangRequest(BaseModel):
    year: int = Field(..., ge=1800, le=2100)
    month: int = Field(..., ge=1, le=12)
    day: int = Field(..., ge=1, le=31)
    latitude: float = Field(..., ge=-90.0, le=90.0)
    longitude: float = Field(..., ge=-180.0, le=180.0)


class PanchangResponse(BaseModel):
    date: str
    sunrise: Optional[str] = None
    paksha: str  # "Shukla" (waxing) or "Krishna" (waning)
    tithi_number: int  # 1-15 within the paksha
    tithi_name: str
    nakshatra: str
    yoga_number: int  # 1-27
    yoga_name: str
    karana_number: int  # 1-60 across the lunar month
    karana_name: str


def get_karana_name(karana_index: int) -> str:
    """karana_index is 1-60. Index 1 is the single fixed Kimstughna at the
    start of the lunar month; indices 58-60 are the three fixed karanas at
    its end (Shakuni, Chatushpada, Naga); everything between cycles through
    the seven movable karanas (56 slots = 8 full cycles of 7)."""
    if karana_index == 1:
        return "Kimstughna"
    if karana_index >= 58:
        return KARANA_FIXED_END[karana_index - 58]
    return KARANA_MOVABLE[(karana_index - 2) % 7]


@app.post("/api/v1/panchang", response_model=PanchangResponse)
async def panchang(payload: PanchangRequest):
    try:
        tz_str = tf.timezone_at(lng=payload.longitude, lat=payload.latitude) or "UTC"
        sunrise_str, _ = get_solar_timings(
            latitude=payload.latitude, longitude=payload.longitude,
            year=payload.year, month=payload.month, day=payload.day, timezone_str=tz_str
        )

        # Classical panchang assigns one tithi/nakshatra/yoga/karana to a
        # calendar day based on what prevails at that day's sunrise, since
        # the Vedic day begins at sunrise rather than midnight. Falls back
        # to local noon if sunrise couldn't be computed (e.g. polar
        # latitudes, where astral's sunrise call can fail outright).
        local_tz = pytz.timezone(tz_str)
        if sunrise_str:
            h, m, s = (int(x) for x in sunrise_str.split(":"))
            moment_local = local_tz.localize(datetime(payload.year, payload.month, payload.day, h, m, s))
        else:
            moment_local = local_tz.localize(datetime(payload.year, payload.month, payload.day, 12, 0))
        moment_utc = moment_local.astimezone(pytz.utc)

        swe.set_ephe_path('/usr/share/ephe')
        swe.set_sid_mode(swe.SIDM_LAHIRI, 0, 0)
        calc_flags = swe.FLG_SWIEPH | swe.FLG_SIDEREAL | swe.FLG_SPEED

        jd = swe.julday(moment_utc.year, moment_utc.month, moment_utc.day, moment_utc.hour + moment_utc.minute / 60.0 + moment_utc.second / 3600.0)
        sun_result, _ = swe.calc_ut(jd, swe.SUN, calc_flags)
        moon_result, _ = swe.calc_ut(jd, swe.MOON, calc_flags)
        sun_lon = sun_result[0]
        moon_lon = moon_result[0]
        swe.close()

        moon_sun_diff = (moon_lon - sun_lon) % 360.0

        tithi_index = int(moon_sun_diff / 12.0)  # 0-29
        paksha = "Shukla" if tithi_index < 15 else "Krishna"
        tithi_in_paksha = (tithi_index % 15) + 1  # 1-15
        tithi_name = "Purnima" if tithi_index == 14 else ("Amavasya" if tithi_index == 29 else TITHI_NAMES[tithi_index % 15])

        nakshatra_name, _ = get_nakshatra_info(moon_lon)

        yoga_index = int(((moon_lon + sun_lon) % 360.0) / NAKSHATRA_ARC)  # 0-26
        yoga_name = YOGA_NAMES[yoga_index]

        karana_index = int(moon_sun_diff / 6.0) + 1  # 1-60
        karana_name = get_karana_name(karana_index)

        return PanchangResponse(
            date=f"{payload.day:02d} {['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][payload.month]} {payload.year}",
            sunrise=sunrise_str,
            paksha=paksha,
            tithi_number=tithi_in_paksha,
            tithi_name=tithi_name,
            nakshatra=nakshatra_name,
            yoga_number=yoga_index + 1,
            yoga_name=yoga_name,
            karana_number=karana_index,
            karana_name=karana_name,
        )

    except Exception as err:
        swe.close()
        raise HTTPException(status_code=500, detail=str(err))
