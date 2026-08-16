import { compatibilityLongForm } from "./compatibility";
import { sukuyoLongForm } from "./sukuyo";
import type { ToolLongForm } from "./types";

/**
 * Long-form bodies by slug.
 *
 * Only tools that have had the writing done appear here; the rest render their
 * FAQ section alone until their body is written. Missing content degrades to a
 * shorter page rather than an empty heading, which is the right failure mode
 * while the corpus is being filled in.
 */
const ALL: ToolLongForm[] = [sukuyoLongForm, compatibilityLongForm];

export function findToolLongForm(slug: string): ToolLongForm | undefined {
  return ALL.find((entry) => entry.slug === slug);
}

export type { ToolLongForm, ToolSection } from "./types";
