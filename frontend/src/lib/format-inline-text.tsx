import { Fragment, type ReactNode } from "react";

const INLINE_MARKDOWN = /\*\*(.+?)\*\*|\*(.+?)\*/g;

/** Renders lightweight inline markdown (`**bold**`, `*italic*`) as React nodes. */
export function formatInlineMarkdown(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const match of text.matchAll(INLINE_MARKDOWN)) {
    const index = match.index ?? 0;
    if (index > last) {
      nodes.push(text.slice(last, index));
    }
    if (match[1] !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-ink">
          {match[1]}
        </strong>
      );
    } else if (match[2] !== undefined) {
      nodes.push(
        <em key={key++} className="italic">
          {match[2]}
        </em>
      );
    }
    last = index + match[0].length;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  if (nodes.length === 0) return text;
  if (nodes.length === 1 && typeof nodes[0] === "string") return nodes[0];

  return nodes.map((node, index) =>
    typeof node === "string" ? <Fragment key={`t-${index}`}>{node}</Fragment> : node
  );
}

export function FormattedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const content = formatInlineMarkdown(text);
  if (className) {
    return <span className={className}>{content}</span>;
  }
  return <>{content}</>;
}

/** Strip markdown emphasis markers from imported source text. */
export function stripInlineMarkdown(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1");
}
