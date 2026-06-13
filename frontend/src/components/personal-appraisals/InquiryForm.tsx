"use client";

import { useActionState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import {
  sendInquiry,
  type InquiryFormState,
} from "@/app/actions/send-inquiry";
import type { AppraisalPageContent } from "@/lib/personal-appraisals/i18n/content";
import type { AppraisalLanguage } from "@/lib/personal-appraisals/types";
import { COUNTRY_DIAL_CODES } from "@/lib/phone/country-codes";

const initialState: InquiryFormState = { status: "idle" };

interface InquiryFormProps {
  defaultDialCode: string;
  lang: AppraisalLanguage;
  copy: AppraisalPageContent["form"];
}

const inputClassName =
  "w-full rounded-xl border border-shell-border bg-shell-bg/50 px-4 py-3 text-sm text-shell-warm placeholder:text-shell-muted/70 outline-none transition-[border-color,box-shadow] focus:border-shell-accent/50 focus:ring-2 focus:ring-shell-accent/15";

const labelClassName =
  "block text-[11px] uppercase tracking-[0.18em] text-shell-muted mb-2";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-red-400/90">{message}</p>;
}

export default function InquiryForm({
  defaultDialCode,
  lang,
  copy,
}: InquiryFormProps) {
  const [state, formAction, isPending] = useActionState(
    sendInquiry,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      statusRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [state.status]);

  return (
    <section
      id="inquiry"
      className="rounded-3xl border border-shell-border bg-shell-elevated/40 backdrop-blur-sm p-6 md:p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.55)]"
    >
      <div className="mb-8 max-w-xl">
        <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent font-semibold mb-3">
          {copy.sectionLabel}
        </p>
        <h3 className="font-serif text-2xl md:text-3xl text-shell-warm tracking-tight">
          {copy.title}
        </h3>
        <p className="mt-3 text-sm text-shell-muted leading-relaxed">
          {copy.description}
        </p>
      </div>

      <div ref={statusRef}>
        {state.status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-4"
            role="status"
          >
            <CheckCircle2
              size={20}
              className="text-emerald-400 shrink-0 mt-0.5"
              aria-hidden
            />
            <p className="text-sm text-shell-warm leading-relaxed">
              {state.message}
            </p>
          </motion.div>
        )}

        {state.status === "error" && state.message && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-2xl border border-red-500/25 bg-red-500/10 px-4 py-4"
            role="alert"
          >
            <p className="text-sm text-shell-warm leading-relaxed">
              {state.message}
            </p>
          </motion.div>
        )}
      </div>

      <form ref={formRef} action={formAction} className="space-y-5" noValidate>
        <input type="hidden" name="locale" value={lang} />

        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
        />

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="fullName" className={labelClassName}>
              {copy.fullName} <span className="text-shell-accent">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              disabled={isPending}
              placeholder={copy.fullNamePlaceholder}
              className={inputClassName}
              aria-invalid={Boolean(state.fieldErrors?.fullName)}
            />
            <FieldError message={state.fieldErrors?.fullName} />
          </div>

          <div>
            <label htmlFor="email" className={labelClassName}>
              {copy.email} <span className="text-shell-accent">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              disabled={isPending}
              placeholder={copy.emailPlaceholder}
              className={inputClassName}
              aria-invalid={Boolean(state.fieldErrors?.email)}
            />
            <FieldError message={state.fieldErrors?.email} />
          </div>
        </div>

        <div>
          <label htmlFor="phoneLocal" className={labelClassName}>
            {copy.whatsApp} <span className="text-shell-accent">*</span>
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <select
              id="dialCode"
              name="dialCode"
              defaultValue={defaultDialCode}
              disabled={isPending}
              className={`${inputClassName} sm:max-w-[11rem] sm:shrink-0`}
              aria-label={copy.dialCodeLabel}
            >
              {COUNTRY_DIAL_CODES.map((country) => (
                <option key={`${country.iso}-${country.dial}`} value={country.dial}>
                  {country.dial} · {country.label}
                </option>
              ))}
            </select>
            <input
              id="phoneLocal"
              name="phoneLocal"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel-national"
              disabled={isPending}
              placeholder={copy.phonePlaceholder}
              className={inputClassName}
              aria-invalid={Boolean(state.fieldErrors?.phone)}
            />
          </div>
          <p className="mt-2 text-xs text-shell-muted">{copy.whatsAppHint}</p>
          <FieldError message={state.fieldErrors?.phone} />
        </div>

        <div>
          <label htmlFor="message" className={labelClassName}>
            {copy.message}{" "}
            <span className="normal-case tracking-normal text-shell-muted/80">
              {copy.messageOptional}
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            disabled={isPending}
            placeholder={copy.messagePlaceholder}
            className={`${inputClassName} resize-y min-h-[120px]`}
            aria-invalid={Boolean(state.fieldErrors?.message)}
          />
          <FieldError message={state.fieldErrors?.message} />
        </div>

        <div className="pt-2">
          <motion.button
            type="submit"
            disabled={isPending}
            whileHover={isPending ? undefined : { scale: 1.01 }}
            whileTap={isPending ? undefined : { scale: 0.99 }}
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 overflow-hidden rounded-xl border border-shell-accent/35 bg-gradient-to-r from-shell-accent/25 via-shell-accent/20 to-shell-accent/10 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-shell-warm transition-colors hover:from-shell-accent/35 hover:via-shell-accent/25 hover:to-shell-accent/15 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              aria-hidden
            />
            {isPending ? (
              <>
                <Loader2 size={16} className="animate-spin" aria-hidden />
                {copy.submitting}
              </>
            ) : (
              <>
                <Send size={15} aria-hidden />
                {copy.submit}
              </>
            )}
          </motion.button>
        </div>
      </form>
    </section>
  );
}
