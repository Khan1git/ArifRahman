import Link from "next/link"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site-data"

type SiteLogoProps = {
  className?: string
  showName?: boolean
}

/**
 * Brand lockup: geometric AR monogram + wordmark.
 * Replaces the old bordered “chip” avatar.
 */
export function SiteLogo({ className, showName = true }: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex shrink-0 items-center gap-2.5",
        className
      )}
      aria-label={`${site.name} — home`}
    >
      <span
        aria-hidden="true"
        className="relative size-8 shrink-0 transition-transform duration-300 group-hover:scale-[1.04]"
      >
        <svg
          viewBox="0 0 32 32"
          className="size-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.25"
            y="1.25"
            width="29.5"
            height="29.5"
            rx="8"
            className="fill-card stroke-border transition-[stroke] duration-300 group-hover:stroke-primary/50"
            strokeWidth="1.25"
          />
          {/* Corner accent */}
          <path
            d="M9 1.25H9.5C5.22 1.25 1.25 5.22 1.25 9.5V10"
            className="stroke-primary"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          {/* A */}
          <path
            d="M8.5 22.5 L12.25 11.5 L16 22.5 M10.1 18.4 H14.4"
            className="stroke-foreground"
            strokeWidth="1.55"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* R */}
          <path
            d="M17.75 11.5 V22.5 M17.75 11.5 H21.6 C23.55 11.5 24.85 12.85 24.85 14.55 C24.85 16.25 23.55 17.6 21.6 17.6 H17.75 M20.9 17.6 L24.85 22.5"
            className="stroke-foreground"
            strokeWidth="1.55"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {showName ? (
        <span className="text-sm font-semibold tracking-tight text-foreground">
          {site.name}
        </span>
      ) : null}
    </Link>
  )
}
