export interface CountryDialCode {
  iso: string;
  dial: string;
  label: string;
}

/** Common dial codes for the inquiry form selector (ISO 3166-1 alpha-2). */
export const COUNTRY_DIAL_CODES: CountryDialCode[] = [
  { iso: "IN", dial: "+91", label: "India" },
  { iso: "JP", dial: "+81", label: "Japan" },
  { iso: "US", dial: "+1", label: "United States" },
  { iso: "GB", dial: "+44", label: "United Kingdom" },
  { iso: "CA", dial: "+1", label: "Canada" },
  { iso: "AU", dial: "+61", label: "Australia" },
  { iso: "AE", dial: "+971", label: "United Arab Emirates" },
  { iso: "SG", dial: "+65", label: "Singapore" },
  { iso: "MY", dial: "+60", label: "Malaysia" },
  { iso: "DE", dial: "+49", label: "Germany" },
  { iso: "FR", dial: "+33", label: "France" },
  { iso: "IT", dial: "+39", label: "Italy" },
  { iso: "ES", dial: "+34", label: "Spain" },
  { iso: "NL", dial: "+31", label: "Netherlands" },
  { iso: "CH", dial: "+41", label: "Switzerland" },
  { iso: "SE", dial: "+46", label: "Sweden" },
  { iso: "NO", dial: "+47", label: "Norway" },
  { iso: "DK", dial: "+45", label: "Denmark" },
  { iso: "FI", dial: "+358", label: "Finland" },
  { iso: "PL", dial: "+48", label: "Poland" },
  { iso: "RU", dial: "+7", label: "Russia" },
  { iso: "CN", dial: "+86", label: "China" },
  { iso: "HK", dial: "+852", label: "Hong Kong" },
  { iso: "TW", dial: "+886", label: "Taiwan" },
  { iso: "KR", dial: "+82", label: "South Korea" },
  { iso: "TH", dial: "+66", label: "Thailand" },
  { iso: "ID", dial: "+62", label: "Indonesia" },
  { iso: "PH", dial: "+63", label: "Philippines" },
  { iso: "VN", dial: "+84", label: "Vietnam" },
  { iso: "NZ", dial: "+64", label: "New Zealand" },
  { iso: "ZA", dial: "+27", label: "South Africa" },
  { iso: "NG", dial: "+234", label: "Nigeria" },
  { iso: "KE", dial: "+254", label: "Kenya" },
  { iso: "BR", dial: "+55", label: "Brazil" },
  { iso: "MX", dial: "+52", label: "Mexico" },
  { iso: "AR", dial: "+54", label: "Argentina" },
  { iso: "SA", dial: "+966", label: "Saudi Arabia" },
  { iso: "QA", dial: "+974", label: "Qatar" },
  { iso: "KW", dial: "+965", label: "Kuwait" },
  { iso: "BH", dial: "+973", label: "Bahrain" },
  { iso: "OM", dial: "+968", label: "Oman" },
  { iso: "PK", dial: "+92", label: "Pakistan" },
  { iso: "BD", dial: "+880", label: "Bangladesh" },
  { iso: "LK", dial: "+94", label: "Sri Lanka" },
  { iso: "NP", dial: "+977", label: "Nepal" },
  { iso: "IL", dial: "+972", label: "Israel" },
  { iso: "TR", dial: "+90", label: "Turkey" },
  { iso: "IE", dial: "+353", label: "Ireland" },
  { iso: "PT", dial: "+351", label: "Portugal" },
  { iso: "AT", dial: "+43", label: "Austria" },
  { iso: "BE", dial: "+32", label: "Belgium" },
];

const dialByIso = new Map(
  COUNTRY_DIAL_CODES.map((entry) => [entry.iso, entry.dial]),
);

export function dialCodeForCountry(iso: string | null | undefined): string {
  if (!iso) return "+81";
  return dialByIso.get(iso.toUpperCase()) ?? "+81";
}

export function findCountryByDial(dial: string): CountryDialCode | undefined {
  return COUNTRY_DIAL_CODES.find((entry) => entry.dial === dial);
}
