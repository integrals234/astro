import "server-only";
import { calUsername } from "./catalog";

/**
 * Does this Cal.com event type actually exist?
 *
 * The consultation event types have to be created by hand in the Cal.com
 * dashboard, and until they are, embedding one shows Cal's own 404 inside our
 * booking page — worse than not offering booking at all, because it looks
 * broken rather than unavailable.
 *
 * So the page asks first and falls back to the inquiry form. That also means
 * booking lights up on its own as each event type is created, with no deploy.
 *
 * Cached for an hour: event types change on human timescales, and this must not
 * add a round trip to every render.
 */
export async function calEventExists(slug: string): Promise<boolean> {
  try {
    const response = await fetch(
      `https://cal.com/${calUsername()}/${slug}`,
      {
        method: "HEAD",
        redirect: "follow",
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(5_000),
      },
    );
    return response.ok;
  } catch {
    // Network trouble should not strip booking off the page for everyone; the
    // embed degrades on its own if the event really is missing.
    return true;
  }
}
