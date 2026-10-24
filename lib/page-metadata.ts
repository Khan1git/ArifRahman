import type { Metadata } from "next"
import { site } from "@/lib/site-data"

/**
 * Builds consistent per-page metadata: canonical URL, Open Graph and
 * Twitter card. The root layout handles the title template and images.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const fullTitle = `${title} | ${site.name}`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      siteName: site.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  }
}
