import type { Metadata } from "next";
import BlogsPageClient from "@/components/blogs/BlogsPageClient";
import { parseAppLanguage } from "@/lib/i18n/language";
import { getSharedCopy } from "@/lib/i18n/shared";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const copy = getSharedCopy(language);

  return buildPageMetadata({
    language,
    path: "/blogs",
    title: copy.blogs.title,
    description: copy.blogs.description,
  });
}

export default function BlogsPage() {
  return <BlogsPageClient />;
}
