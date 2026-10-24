import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type CtaBandProps = {
  title?: string
  description?: string
  secondary?: { href: string; label: string } | null
}

export function CtaBand({
  title = "Find out what your application is hiding — before someone else does.",
  description = "Testing is scoped in writing, findings are explained in plain language, and every fix is verified.",
  secondary = { href: "/services", label: "See services" },
}: CtaBandProps) {
  return (
    <section className="border-t border-border/60 bg-secondary/30">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-14 lg:px-8">
        <div>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
            Next step
          </p>
          <h2 className="mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild className="group h-11 gap-2 px-6">
            <Link href="/contact">
              Start a conversation
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </Button>
          {secondary ? (
            <Button asChild variant="outline" className="h-11 px-6">
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
