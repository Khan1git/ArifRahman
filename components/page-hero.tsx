import { cn } from "@/lib/utils"

type PageHeroProps = {
  index: string
  label: string
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
}

/** Shared header for every inner page. */
export function PageHero({
  index,
  label,
  title,
  description,
  children,
  className,
}: PageHeroProps) {
  return (
    <header
      className={cn(
        "relative overflow-hidden border-b border-border/60",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_5%,transparent_75%)]"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-28 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
          {index} <span className="text-muted-foreground">/</span> {label}
        </p>
        <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  )
}
