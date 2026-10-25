import { IBM_Plex_Sans, Syne } from "next/font/google"
import { GeistMono } from "geist/font/mono"

/** Site body — IBM Plex Sans */
export const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
  weight: ["400", "500", "600"],
})

/** Display / headings — Syne */
export const fontDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "600", "700"],
})

/** Mono labels — Geist Mono (unchanged) */
export const fontMono = GeistMono
