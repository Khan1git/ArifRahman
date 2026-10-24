"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackToTop() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      aria-label="Back to top"
      onClick={() => {
        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
      }}
    >
      <ArrowUp className="size-4" aria-hidden="true" />
    </Button>
  )
}
