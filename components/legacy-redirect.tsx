"use client"

import { useEffect } from "react"

type LegacyRedirectProps = {
  to: string
}

export function LegacyRedirect({ to }: LegacyRedirectProps) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <p className="text-sm text-muted-foreground">Redirecting…</p>
    </div>
  )
}
