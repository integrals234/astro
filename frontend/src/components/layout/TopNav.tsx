"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { mainNavItems } from "@/lib/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/chart") {
    return pathname === "/chart" || pathname.startsWith("/chart/");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="desktop-topnav items-center justify-end gap-0.5 max-w-[min(100%,72vw)] overflow-x-auto">
      {mainNavItems.map((item) => {
        const active = isActive(pathname, item.href);
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            title={item.description}
            className={`relative flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-medium whitespace-nowrap transition-all duration-200 ${
              active
                ? "bg-shell-accent-soft text-shell-warm shadow-[inset_0_-2px_0_0_var(--shell-accent)]"
                : "text-shell-muted hover:text-shell-warm hover:bg-white/[0.04]"
            }`}
          >
            <Icon
              size={14}
              className={`shrink-0 ${active ? "text-shell-accent" : "text-shell-muted"}`}
            />
            <span>{item.label}</span>
          </Link>
        );
      })}

      <div className="ml-2 pl-2 border-l border-shell-border flex items-center">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-8 w-8 ring-2 ring-shell-accent/20",
              userButtonPopoverCard: "border border-shell-border shadow-xl",
            },
          }}
        />
      </div>
    </nav>
  );
}
