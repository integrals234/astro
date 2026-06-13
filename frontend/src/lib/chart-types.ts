export interface Planet {
  name: string;
  longitude: number;
  sign: string;
  d1_house: number;
  d9_sign: string;
  chalit_house: number;
  sign_lord: string;
  nakshatra: string;
  nakshatra_pada: number;
  is_retrograde: boolean;
  dignity: string;
  aspects_houses: number[];
}

export interface TransitPlanet {
  name: string;
  longitude: number;
  sign: string;
  natal_house: number;
  is_retrograde: boolean;
}

export interface Dasha {
  lord: string;
  start_date: string;
  end_date: string;
  sub_dashas?: Dasha[];
}

export interface ChartData {
  ascendant_longitude: number;
  ascendant_sign: string;
  d9_ascendant_sign: string;
  ascendant_nakshatra: string;
  planets: Planet[];
  transit_planets: TransitPlanet[];
  chalit_cusps: number[];
  vimshottari_dashas: Dasha[];
  timezone_detected: string;
  sunrise?: string;
  sunset?: string;
}

export interface ChartFormData {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  latitude: number;
  longitude: number;
  transit_year: number;
  transit_month: number;
  transit_day: number;
}

export interface LocationResult {
  display_name: string;
  lat: string;
  lon: string;
}

export type LanguageCode = "en" | "hi" | "ja" | "ko";

export type ChartTab =
  | "D1"
  | "D9"
  | "Chalit"
  | "Chandra"
  | "Gochar"
  | "Details"
  | "Aspects"
  | "Dasha";

export interface SavedChartRecord {
  id: string;
  name: string;
  locationName: string;
  formData: ChartFormData;
  chartData: ChartData;
  isSaved: boolean;
  createdAt: string;
  updatedAt: string;
}
