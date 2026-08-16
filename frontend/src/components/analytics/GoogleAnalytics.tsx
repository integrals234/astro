import Script from "next/script";

/**
 * GA4, loaded only when `NEXT_PUBLIC_GA_ID` is set.
 *
 * Vercel Analytics stays the product-analytics source of truth — it is already
 * deployed and lighter under APPI. GA4 is here because Japanese SEO tooling and
 * Search Console workflows assume it exists, and because it is what an outside
 * consultant will ask for.
 *
 * `afterInteractive` rather than `beforeInteractive`: nothing on the page waits
 * on analytics, and loading it early would cost LCP on exactly the landing
 * pages that need to be fast.
 */
export default function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
