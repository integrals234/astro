interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="max-w-3xl">
      <div className="rounded-3xl border border-dashed border-shell-border bg-shell-elevated/20 px-8 py-16 text-center">
        <p className="text-[10px] uppercase tracking-[0.28em] text-shell-muted mb-3">
          Coming soon
        </p>
        <h2 className="font-serif text-3xl text-shell-warm tracking-tight">{title}</h2>
        <p className="mt-4 text-sm text-shell-muted leading-relaxed max-w-lg mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}
