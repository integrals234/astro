"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import ShellPageHeader from "@/components/layout/ShellPageHeader";
import AppearanceSetting from "@/components/settings/AppearanceSetting";
import LanguageSetting from "@/components/settings/LanguageSetting";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { settingsCopy } from "@/lib/i18n/settings";
import { Settings, CreditCard } from "lucide-react";

export default function SettingsPageContent() {
  const { user, isLoaded } = useUser();
  const { language } = useLanguage();
  const copy = settingsCopy[language];

  return (
    <div className="max-w-4xl space-y-8">
      <ShellPageHeader
        icon={Settings}
        eyebrow={copy.header.eyebrow}
        title={copy.header.title}
        description={copy.header.description}
      />

      <section className="washi-card p-6 space-y-5">
        <h3 className="washi-eyebrow-muted">
          {copy.account.title}
        </h3>
        {!isLoaded ? (
          <p className="text-sm text-text-muted">{copy.account.loading}</p>
        ) : !user ? (
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-text-muted">{copy.account.signedOut}</p>
            <Link
              href="/sign-in"
              className="washi-btn-primary shrink-0 px-4 py-2 text-xs uppercase tracking-wider"
            >
              {copy.account.signIn}
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="washi-field p-4">
              <p className="text-[11px] font-body uppercase tracking-widest text-text-muted mb-1">{copy.account.name}</p>
              <p className="text-ink font-medium">
                {user?.fullName ?? user?.firstName ?? "—"}
              </p>
            </div>
            <div className="washi-field p-4">
              <p className="text-[11px] font-body uppercase tracking-widest text-text-muted mb-1">{copy.account.email}</p>
              <p className="text-ink font-medium truncate">
                {user?.primaryEmailAddress?.emailAddress ?? "—"}
              </p>
            </div>
            <div className="washi-field p-4 sm:col-span-2">
              <p className="text-[11px] font-body uppercase tracking-widest text-text-muted mb-1">{copy.account.memberSince}</p>
              <p className="text-ink font-medium">
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString(language, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "—"}
              </p>
            </div>
          </div>
        )}
      </section>

      <LanguageSetting />

      <AppearanceSetting />

      <section className="washi-card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="washi-icon-chip h-9 w-9 shrink-0">
            <CreditCard size={18} className="text-moss" />
          </span>
          <div>
            <h3 className="font-body font-medium text-ink">{copy.subscription.title}</h3>
            <p className="text-sm text-text-muted mt-1">
              {copy.subscription.prefix}{" "}
              <span className="text-terracotta font-medium">{copy.subscription.free}</span>{" "}
              {copy.subscription.suffix}
            </p>
          </div>
        </div>
        <Link
          href="/premium"
          className="washi-btn-primary px-5 py-2.5 text-xs uppercase tracking-wider"
        >
          {copy.subscription.viewPlans}
        </Link>
      </section>
    </div>
  );
}
