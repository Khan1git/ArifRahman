import { cn } from "@/lib/utils"
import type { Severity } from "@/lib/site-data"

const styles: Record<Severity, string> = {
  Critical:
    "border-rose-500/35 bg-rose-500/10 text-rose-700 dark:text-rose-400",
  High: "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400",
}

export function SeverityBadge({
  severity,
  className,
}: {
  severity: Severity
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em]",
        styles[severity],
        className
      )}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
      {severity}
    </span>
  )
}
