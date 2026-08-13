"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import {
  welcomeContent,
  welcomeTestimonials,
  welcomeTrustBadges,
  welcomeText,
} from "@/lib/home/welcome-content";

/**
 * Trust badges and testimonials (Phase 2.1, E-E-A-T per SEO_PLAN 5.4).
 *
 * Both render `null` while their data arrays are empty, which is how they ship
 * today. The styling and four-locale wiring exist so real entries drop in
 * without a rebuild — but nothing is invented to fill the space. 景品表示法
 * treats an unsubstantiated quality claim as 優良誤認 whether or not it looks
 * like placeholder text.
 */
export function TrustBadges() {
  const { language } = useLanguage();
  const badges = welcomeTrustBadges[language];

  if (badges.length === 0) return null;

  return (
    <ul className="flex flex-wrap justify-center gap-2">
      {badges.map((badge) => (
        <li key={badge} className="washi-badge">
          {badge}
        </li>
      ))}
    </ul>
  );
}

export function Testimonials() {
  const { language } = useLanguage();
  const testimonials = welcomeTestimonials[language];

  if (testimonials.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl text-center">
      <h2 className="washi-eyebrow washi-eyebrow-flanked mb-7 justify-center">
        {welcomeText(welcomeContent.testimonialsEyebrow, language)}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.attribution} className="washi-card p-7">
            <blockquote className="washi-quote">
              {testimonial.quote}
            </blockquote>
            <figcaption className="washi-quote-attribution">
              {testimonial.attribution}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
