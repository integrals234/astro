import Link from "next/link";
import { SITE_NAME } from "@/lib/navigation";

const sizeClasses = {
  sm: "text-base",
  md: "text-lg md:text-xl",
  lg: "text-2xl md:text-3xl",
} as const;

interface SiteBrandProps {
  className?: string;
  size?: keyof typeof sizeClasses;
}

export default function SiteBrand({ className = "", size = "md" }: SiteBrandProps) {
  const [first, second] = SITE_NAME.split(" ");

  return (
    <Link
      href="/"
      className={`group shrink-0 inline-flex items-baseline gap-1.5 whitespace-nowrap ${sizeClasses[size]} ${className}`}
    >
      <span className="font-brand font-medium tracking-[0.04em] text-shell-warm transition-colors group-hover:text-shell-accent">
        {first}
      </span>
      <span className="font-brand font-normal italic tracking-[0.08em] text-shell-accent/90 transition-colors group-hover:text-shell-accent">
        {second}
      </span>
    </Link>
  );
}
