"use client"

import { Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PrintButton() {
  return (
    <Button
      variant="outline"
      className="h-11 gap-2 px-5"
      onClick={() => window.print()}
    >
      <Printer className="size-4" aria-hidden="true" />
      Print / Save as PDF
    </Button>
  )
}
