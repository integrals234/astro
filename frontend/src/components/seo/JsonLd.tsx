import { jsonLdGraph } from "@/lib/seo/schema";

/**
 * Emits one `application/ld+json` script per page. Server component by design —
 * structured data must be in the initial HTML, not injected after hydration.
 */
export default function JsonLd({
  nodes,
}: {
  nodes: Array<Record<string, unknown>>;
}) {
  if (nodes.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdGraph(nodes) }}
    />
  );
}
