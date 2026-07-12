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
        <div className="inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs font-body uppercase tracking-[0.12em] text-terracotta">
          <Icon size={12} className="text-terracotta" />
          {eyebrow}
        </div>
        {trailing}
      </div>
      <h1 className="font-header text-[30px] text-ink tracking-tight md:text-[34px]">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-base font-body leading-[1.9] text-text-muted">
        {description}
      </p>
    </div>
  );
}
