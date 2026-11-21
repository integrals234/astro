"use client";

/**
 * The site's segmented control (`.washi-segmented`), as one component — the
 * same markup used to be copied into five panels.
 */
export default function SegmentedControl<V extends string | number>({
  label,
  options,
  value,
  onChange,
}: {
  /** Accessible name for the group. */
  label: string;
  options: readonly { value: V; label: string }[];
  value: V;
  onChange: (value: V) => void;
}) {
  return (
    <div className="washi-segmented inline-flex flex-wrap" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={String(option.value)}
          type="button"
          aria-pressed={value === option.value}
          onClick={() => onChange(option.value)}
          className={`px-4 py-1.5 text-xs font-body tracking-wide transition-colors ${
            value === option.value ? "washi-segment-selected" : "washi-segment-unselected"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
