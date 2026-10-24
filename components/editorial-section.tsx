import { cn } from "@/lib/utils"

type EditorialSectionProps = {
  id?: string
  number: string
  label: string
  title?: string
  children: React.ReactNode
  className?: string
  contentClassName?: string
}

/**
 * The site's recurring editorial layout: a sticky numbered label column on the
 * left, content on the right. Varied inside per page; consistent in rhythm.
 */
export function EditorialSection({
  id,
  number,
  label,
  title,
  children,
  className,
  contentClassName,
}: EditorialSectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 border-t border-border/60", className)}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14 lg:px-8 lg:py-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
            {number} <span className="text-muted-foreground">/</span> {label}
          </p>
          {title ? (
            <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight sm:text-xl">
              {title}
            </h2>
          ) : null}
        </div>
        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  )
}
