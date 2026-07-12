"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import ShellPageHeader from "@/components/layout/ShellPageHeader";
import AppearanceSetting from "@/components/settings/AppearanceSetting";
import LanguageSetting from "@/components/settings/LanguageSetting";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { settingsCopy } from "@/lib/i18n/settings";
import { Settings, Bell, Shield, CreditCard } from "lucide-react";

export default function SettingsPageContent() {
  const { user, isLoaded } = useUser();
  const { language } = useLanguage();
  const copy = settingsCopy[language];
  const preferenceRows = [
    {
      icon: Bell,
      label: copy.workspace.transitAlerts,
      description: copy.workspace.transitDescription,
      enabled: true,
    },
    {
      icon: Shield,
      label: copy.workspace.privateCharts,
      description: copy.workspace.privateDescription,
      enabled: true,
    },
  ];

  return (
    <div className="max-w-4xl space-y-8">
      <ShellPageHeader
        icon={Settings}
        eyebrow={copy.header.eyebrow}
        title={copy.header.title}
        description={copy.header.description}
      />

      <section className="rounded-3xl border border-shell-border bg-shell-elevated/60 p-6 space-y-5">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.24em] text-shell-muted">
          {copy.account.title}
        </h3>
        {!isLoaded ? (
          <p className="text-sm text-shell-muted">{copy.account.loading}</p>
        ) : !user ? (
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-shell-muted">{copy.account.signedOut}</p>
            <Link
              href="/sign-in"
              className="shrink-0 rounded-xl border border-shell-accent/30 bg-shell-accent/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-shell-accent"
            >
              {copy.account.signIn}
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-shell-border bg-shell-bg/50 p-4">
              <p className="text-[10px] uppercase tracking-widest text-shell-muted mb-1">{copy.account.name}</p>
              <p className="text-shell-warm font-medium">
                {user?.fullName ?? user?.firstName ?? "—"}
              </p>
            </div>
            <div className="rounded-2xl border border-shell-border bg-shell-bg/50 p-4">
              <p className="text-[10px] uppercase tracking-widest text-shell-muted mb-1">{copy.account.email}</p>
              <p className="text-shell-warm font-medium truncate">
                {user?.primaryEmailAddress?.emailAddress ?? "—"}
              </p>
            </div>
            <div className="rounded-2xl border border-shell-border bg-shell-bg/50 p-4 sm:col-span-2">
              <p className="text-[10px] uppercase tracking-widest text-shell-muted mb-1">{copy.account.memberSince}</p>
              <p className="text-shell-warm font-medium">
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

      <section className="rounded-3xl border border-shell-border bg-shell-elevated/60 overflow-hidden">
        <div className="px-6 py-4 border-b border-shell-border">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.24em] text-shell-muted">
            {copy.workspace.title}
          </h3>
        </div>
        <ul className="divide-y divide-shell-border">
          {preferenceRows.map((row) => {
            const Icon = row.icon;
            return (
              <li
                key={row.label}
                className="flex items-center justify-between gap-4 px-6 py-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-9 w-9 rounded-xl bg-shell-accent-soft border border-shell-accent/15 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-shell-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-shell-warm">{row.label}</p>
                    <p className="text-xs text-shell-muted truncate">{row.description}</p>
                  </div>
                </div>
                <div
                  className={`h-6 w-11 rounded-full border transition-colors relative shrink-0 ${
                    row.enabled
                      ? "bg-shell-accent/30 border-shell-accent/40"
                      : "bg-shell-bg border-shell-border"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-shell-warm transition-all ${
                      row.enabled ? "left-[1.35rem]" : "left-0.5"
                    }`}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="rounded-3xl border border-shell-accent/20 bg-shell-accent-soft/20 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-start gap-3">
          <CreditCard size={18} className="text-shell-accent mt-0.5" />
          <div>
            <h3 className="font-medium text-shell-warm">{copy.subscription.title}</h3>
            <p className="text-sm text-shell-muted mt-1">
              {copy.subscription.prefix}{" "}
              <span className="text-shell-accent">{copy.subscription.free}</span>{" "}
              {copy.subscription.suffix}
            </p>
          </div>
        </div>
        <Link
          href="/premium"
          className="inline-flex justify-center rounded-xl border border-shell-accent/30 bg-shell-accent/15 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-shell-accent hover:bg-shell-accent/25 transition-colors"
        >
          {copy.subscription.viewPlans}
        </Link>
      </section>
    </div>
  );
}
