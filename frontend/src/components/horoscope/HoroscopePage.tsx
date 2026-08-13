"use client";

import PublicHeader from "@/components/layout/PublicHeader";
import HoroscopeSection from "@/components/horoscope/HoroscopeSection";
import { uiText } from "@/lib/education/i18n/ui";
import { useEducationLang } from "@/lib/education/use-education-lang";


function HoroscopePageInner({ embedded }: { embedded?: boolean }) {
  const { lang } = useEducationLang();

  return (
    <div className={`${embedded ? "" : "min-h-screen"} bg-washi text-ink`}>
      {!embedded && <PublicHeader pageLabel={uiText("horoscope", lang)} />}

      <div className={`mx-auto max-w-7xl ${embedded ? "" : "px-4 py-6 md:px-8 md:py-10"}`}>
        <HoroscopeSection lang={lang} />
      </div>
    </div>
  );
}

/** Rendered once — see the note in WelcomeHomePage on the prerender bailout. */
export default function HoroscopePage() {
  return <HoroscopePageInner />;
}
