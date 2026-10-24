import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Navigation from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { structuredData } from "@/lib/structured-data"
import { site } from "@/lib/site-data"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Full Stack Developer & Web Security Researcher`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Arif Rahman",
    "full stack developer",
    "web security researcher",
    "penetration testing",
    "Next.js developer",
    "React developer",
    "web application security",
    "API security",
    "OWASP Top 10",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: `${site.name} — Full Stack Developer & Web Security Researcher`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Full Stack Developer & Web Security Researcher`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0E14" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="arif-theme"
          disableTransitionOnChange
        >
          <a href="#content" className="skip-link">
            Skip to content
          </a>
          <Navigation />
          <main id="content">{children}</main>
          <SiteFooter />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
