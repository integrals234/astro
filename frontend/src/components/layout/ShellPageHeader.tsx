import type { LucideIcon } from "lucide-react";

interface ShellPageHeaderProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
}

export default function ShellPageHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
}: ShellPageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-shell-border bg-shell-elevated/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-shell-muted mb-4">
        <Icon size={12} className="text-shell-accent" />
        {eyebrow}
      </div>
      <h2 className="font-serif text-3xl md:text-4xl text-shell-warm tracking-tight">
        {title}
      </h2>
      <p className="mt-3 text-sm md:text-base text-shell-muted max-w-2xl leading-relaxed">
        {description}
      </p>
    </div>
  );
}
