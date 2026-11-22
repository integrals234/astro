import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface ShellPageHeaderProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  trailing?: ReactNode;
}

export default function ShellPageHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
  trailing,
}: ShellPageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-washi-elevated px-3 py-1 text-xs font-body tracking-[0.06em] text-terracotta">
          <Icon size={12} className="text-terracotta" />
          {eyebrow}
        </div>
        {trailing}
      </div>
      <h1 className="font-header text-[length:var(--step-4)] leading-[1.15] tracking-tight text-ink">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-base font-body leading-[1.9] text-text-muted">
        {description}
      </p>
    </div>
  );
}
