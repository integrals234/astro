import { headers } from "next/headers";
import { dialCodeForCountry } from "./country-codes";

/**
 * Reads geo hints from CDN / edge headers (Vercel, Cloudflare, etc.)
 * and returns a default international dial code for the inquiry form.
 */
export async function getDefaultDialCode(): Promise<string> {
  const headerList = await headers();

  const country =
    headerList.get("x-vercel-ip-country") ??
    headerList.get("cf-ipcountry") ??
    headerList.get("x-country-code");

  return dialCodeForCountry(country);
}
