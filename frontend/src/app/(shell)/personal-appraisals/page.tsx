import ShellPageHeader from "@/components/layout/ShellPageHeader";
import InquiryForm from "@/components/personal-appraisals/InquiryForm";
import { getDefaultDialCode } from "@/lib/phone/detect-country";
import {
  Check,
  Clock,
  Heart,
  MessageSquare,
  MoonStar,
  ScrollText,
  Sparkles,
} from "lucide-react";

const offerings = [
  {
    icon: ScrollText,
    title: "Written Natal Appraisal",
    description:
      "A carefully composed written reading of your birth chart — Lagna, Moon sign, Nakshatra, and the planetary themes shaping your temperament, gifts, and life direction.",
    includes: [
      "Core personality and karmic patterns",
      "Strengths, sensitivities, and growth edges",
      "Delivered as a private PDF within 3–5 business days",
    ],
    note: "Ideal if you prefer to reflect in your own time before a live conversation.",
  },
  {
    icon: MessageSquare,
    title: "Live Personal Session",
    description:
      "A one-to-one consultation with a seasoned Vedic astrologer — conducted over video or voice, with your chart opened and explained in calm, accessible language.",
    includes: [
      "60 or 90 minutes of focused dialogue",
      "Space for your questions as they arise",
      "Guidance on current dasha periods and transits",
    ],
    note: "Our most requested format for clarity during life transitions.",
  },
  {
    icon: Heart,
    title: "Union & Compatibility Reading",
    description:
      "Thoughtful synastry between two charts — whether for marriage, partnership, or a relationship you are considering with care.",
    includes: [
      "Harmony and friction points between charts",
      "Timing considerations for commitment or reconciliation",
      "Practical counsel rooted in classical Jyotish principles",
    ],
    note: "Both birth details are required. Sessions can be joint or individual.",
  },
  {
    icon: Clock,
    title: "Timing & Muhurta Selection",
    description:
      "When the moment matters — weddings, business launches, relocations, medical procedures — we identify windows aligned with your chart and intention.",
    includes: [
      "Auspicious date and time recommendations",
      "Context on planetary support and caution",
      "Follow-up notes you can share with family or advisors",
    ],
    note: "Often booked alongside a full natal session for deeper context.",
  },
];

const pricingPlans = [
  {
    name: "Personal Consultation",
    price: "¥6,000",
    priceNote: "tax included",
    duration: "60 minutes",
    description:
      "A live, one-to-one Vedic Astrology session — your chart opened and interpreted with care, with space for your questions on career, relationships, health, or life direction.",
    featured: true,
  },
  {
    name: "Written Natal Appraisal",
    price: "By inquiry",
    priceNote: "quoted individually",
    duration: "PDF · 3–5 days",
    description:
      "A composed written reading delivered privately — ideal if you prefer to reflect before scheduling a live conversation.",
    featured: false,
  },
  {
    name: "Union & Compatibility",
    price: "By inquiry",
    priceNote: "quoted individually",
    duration: "60–90 minutes",
    description:
      "Synastry between two charts with timing guidance for commitment, partnership, or reconciliation.",
    featured: false,
  },
  {
    name: "Birth Time Refinement",
    price: "By inquiry",
    priceNote: "quoted individually",
    duration: "Varies",
    description:
      "Structured rectification when your birth time is uncertain — using life events to establish a reliable chart.",
    featured: false,
  },
];

const processSteps = [
  "Submit your inquiry below with your preferred contact details.",
  "We reach out on WhatsApp to confirm your focus area and collect birth data (date, time, place).",
  "Your session is scheduled at a time that respects your timezone and privacy.",
  "After your reading, optional follow-up notes or a brief check-in can be arranged.",
];

export default async function PersonalAppraisalsPage() {
  const defaultDialCode = await getDefaultDialCode();

  return (
    <div className="max-w-4xl space-y-12 pb-8">
      <ShellPageHeader
        icon={MoonStar}
        eyebrow="Private consultations"
        title="Personal Appraisals"
        description="Human-led Vedic Astrology readings for those seeking clarity without hurry — written with care, delivered with discretion, and grounded in classical Jyotish."
      />

      <section className="rounded-3xl border border-shell-accent/20 bg-gradient-to-br from-shell-elevated/80 via-shell-elevated/50 to-shell-bg/60 p-7 md:p-9 backdrop-blur-sm">
        <div className="flex items-start gap-3 mb-5">
          <Sparkles size={18} className="text-shell-accent shrink-0 mt-1" />
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-shell-warm">
              Guidance that meets you where you are
            </h3>
            <p className="mt-3 text-sm md:text-base text-shell-muted leading-relaxed max-w-2xl">
              Every chart tells a story — not of fate fixed in stone, but of
              tendencies, seasons, and choices unfolding over a lifetime. Our
              astrologers read with precision and speak with warmth, offering
              insight you can actually use: in your work, your relationships,
              your sense of purpose, and the quiet questions you may not say aloud.
            </p>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 mt-6">
          {[
            "Practitioners trained in Parashari and Jaimini traditions",
            "Sessions in English, Hindi, and Japanese upon request",
            "Strict confidentiality — your chart and story remain private",
            "No automated reports; every reading is prepared by hand",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-shell-muted"
            >
              <Check
                size={15}
                className="text-shell-accent shrink-0 mt-0.5"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent font-semibold mb-2">
            What we offer
          </p>
          <h3 className="font-serif text-2xl text-shell-warm">
            Consultation formats
          </h3>
        </div>

        <div className="grid gap-5">
          {offerings.map((offering) => (
            <article
              key={offering.title}
              className="rounded-2xl border border-shell-border bg-shell-elevated/45 p-6 md:p-7"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <offering.icon size={17} className="text-shell-accent" />
                <h4 className="font-medium text-shell-warm">{offering.title}</h4>
              </div>
              <p className="text-sm text-shell-muted leading-relaxed">
                {offering.description}
              </p>
              <ul className="mt-4 space-y-2">
                {offering.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-shell-muted/90"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-shell-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-shell-accent/90 italic">
                {offering.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent font-semibold mb-2">
            Investment
          </p>
          <h3 className="font-serif text-2xl text-shell-warm">Pricing</h3>
          <p className="mt-2 text-sm text-shell-muted max-w-2xl leading-relaxed">
            Transparent rates for our core offering. Additional formats are
            quoted personally after your inquiry.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-shell-border bg-shell-elevated/35">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] text-left text-sm">
              <thead>
                <tr className="border-b border-shell-border bg-shell-bg/40">
                  <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-shell-muted">
                    Service
                  </th>
                  <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-shell-muted">
                    Duration
                  </th>
                  <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-shell-muted text-right">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingPlans.map((plan) => (
                  <tr
                    key={plan.name}
                    className={`border-b border-shell-border/70 last:border-0 ${
                      plan.featured ? "bg-shell-accent-soft/40" : ""
                    }`}
                  >
                    <td className="px-5 py-5 align-top">
                      <p className="font-medium text-shell-warm">{plan.name}</p>
                      <p className="mt-1.5 text-xs text-shell-muted leading-relaxed max-w-sm">
                        {plan.description}
                      </p>
                    </td>
                    <td className="px-5 py-5 align-top text-shell-muted whitespace-nowrap">
                      {plan.duration}
                    </td>
                    <td className="px-5 py-5 align-top text-right whitespace-nowrap">
                      <p
                        className={`font-serif text-lg ${
                          plan.featured ? "text-shell-accent" : "text-shell-warm"
                        }`}
                      >
                        {plan.price}
                      </p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-wider text-shell-muted">
                        {plan.priceNote}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs text-shell-muted leading-relaxed">
          Payment is confirmed after we agree on your session details via
          WhatsApp. The ¥6,000 consultation is our standard live reading — warm,
          unhurried, and prepared specifically for your chart.
        </p>
      </section>

      <section className="rounded-2xl border border-dashed border-shell-accent/25 bg-shell-accent-soft/20 p-6 md:p-7">
        <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent font-semibold mb-4">
          How it works
        </p>
        <ol className="space-y-4">
          {processSteps.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-shell-accent/30 bg-shell-accent/10 text-xs font-semibold text-shell-accent">
                {index + 1}
              </span>
              <p className="text-sm text-shell-muted leading-relaxed pt-0.5">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <InquiryForm defaultDialCode={defaultDialCode} />
    </div>
  );
}
