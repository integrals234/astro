"use client";

import { useActionState, useEffect, useMemo, useRef } from "react";
import { m } from "framer-motion";
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
  "washi-field w-full px-4 py-3 text-sm placeholder:text-text-muted/70 outline-none transition-[border-color,box-shadow] focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/15";

const labelClassName =
  "block text-[11px] font-body uppercase tracking-[0.18em] text-text-muted mb-2";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-terracotta">{message}</p>;
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
  const regionNames = useMemo(
    () => new Intl.DisplayNames([lang], { type: "region" }),
    [lang],
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      statusRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [state.status]);

  return (
    <section
      id="inquiry"
      className="washi-card p-6 md:p-8"
    >
      <div className="mb-8 max-w-xl">
        <p className="washi-eyebrow mb-3">
          {copy.sectionLabel}
        </p>
        <h3 className="font-body text-2xl md:text-3xl text-ink tracking-tight">
          {copy.title}
        </h3>
        <p className="mt-3 text-sm text-text-muted leading-relaxed">
          {copy.description}
        </p>
      </div>

      <div ref={statusRef}>
        {state.status === "success" && (
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-start gap-3 rounded-md border border-moss/30 bg-moss/10 px-4 py-4"
            role="status"
          >
            <CheckCircle2
              size={20}
              className="text-moss shrink-0 mt-0.5"
              aria-hidden
            />
            <p className="text-sm text-text leading-relaxed">
              {state.message}
            </p>
          </m.div>
        )}

        {state.status === "error" && state.message && (
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-md border border-terracotta/30 bg-terracotta/10 px-4 py-4"
            role="alert"
          >
            <p className="text-sm text-text leading-relaxed">
              {state.message}
            </p>
          </m.div>
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
              {copy.fullName} <span className="text-terracotta">*</span>
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
              {copy.email} <span className="text-terracotta">*</span>
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
            {copy.whatsApp} <span className="text-terracotta">*</span>
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
                  {country.dial} · {regionNames.of(country.iso) ?? country.label}
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
          <p className="mt-2 text-xs text-text-muted">{copy.whatsAppHint}</p>
          <FieldError message={state.fieldErrors?.phone} />
        </div>

        <div>
          <label htmlFor="message" className={labelClassName}>
            {copy.message}{" "}
            <span className="normal-case tracking-normal text-text-muted">
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
          <m.button
            type="submit"
            disabled={isPending}
            whileHover={isPending ? undefined : { scale: 1.01 }}
            whileTap={isPending ? undefined : { scale: 0.99 }}
            className="washi-btn-primary w-full sm:w-auto gap-2.5 px-8 py-3.5 text-xs uppercase tracking-[0.22em] disabled:cursor-not-allowed disabled:opacity-60"
          >
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
          </m.button>
        </div>
      </form>
    </section>
  );
}
