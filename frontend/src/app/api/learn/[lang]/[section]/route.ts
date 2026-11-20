import { NextResponse } from "next/server";
import { buildLearnSection } from "@/lib/education/learn-corpus";
import { educationSectionIds } from "@/lib/education/sections";
import { isEducationSectionId } from "@/lib/education/section-links";
import { APP_LANGUAGES, isAppLanguage } from "@/lib/i18n/language";

/*
 * One learn-hub section in one language, as static JSON (built at deploy).
 * The hub page ships only its opening section; it fetches the others from
 * here when a visitor opens them, or ahead of time while idle.
 */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return APP_LANGUAGES.flatMap((lang) => educationSectionIds.map((section) => ({ lang, section })));
}

export async function GET(_request: Request, { params }: { params: Promise<{ lang: string; section: string }> }) {
  const { lang, section } = await params;
  if (!isAppLanguage(lang) || !isEducationSectionId(section)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(buildLearnSection(lang, section));
}
