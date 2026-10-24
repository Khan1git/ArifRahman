import type { Metadata } from "next"
import { LegacyRedirect } from "@/components/legacy-redirect"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function ProjectsPage() {
  return <LegacyRedirect to="/work" />
}
