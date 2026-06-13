"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { mainNavItems } from "@/lib/navigation";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:shrink-0 h-full border-r border-shell-border bg-shell-sidebar">
      <div className="px-6 py-7 border-b border-shell-border">
        <Link href="/dashboard" className="group inline-flex flex-col">
          <span className="font-serif text-xl tracking-tight text-shell-warm group-hover:text-shell-accent transition-colors">
            Astro
          </span>
          <span className="text-[10px] uppercase tracking-[0.28em] text-shell-muted mt-1">
            Quiet workspace
          </span>
        </Link>
      </div>

      <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
        {mainNavItems.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 ${
                active
                  ? "bg-shell-accent-soft text-shell-warm shadow-[inset_0_0_0_1px_rgba(212,165,116,0.18),0_0_24px_rgba(212,165,116,0.08)]"
                  : "text-shell-muted hover:text-shell-warm hover:bg-white/[0.03]"
              }`}
            >
              {active && (
                <span className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-shell-accent shadow-[0_0_12px_rgba(212,165,116,0.65)]" />
              )}
              <Icon
                size={18}
                className={`shrink-0 transition-colors ${
                  active ? "text-shell-accent" : "text-shell-muted group-hover:text-shell-accent/80"
                }`}
              />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-4 py-5 border-t border-shell-border">
        <div className="flex items-center gap-3 rounded-2xl border border-shell-border bg-shell-elevated/60 px-3 py-3">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-9 w-9 ring-2 ring-shell-accent/20",
                userButtonPopoverCard: "border border-shell-border shadow-xl",
              },
            }}
          />
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-widest text-shell-muted">
              Account
            </p>
            <p className="text-xs text-shell-warm/80 truncate">Manage profile</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
