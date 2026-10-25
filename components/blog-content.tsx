import type { BlogBlock } from "@/lib/blogData"
import { cn } from "@/lib/utils"

export function BlogContent({
  blocks,
  className,
}: {
  blocks: BlogBlock[]
  className?: string
}) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
        className
      )}
    >
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="pt-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
              >
                {block.text}
              </h2>
            )
          case "p":
            return <p key={index}>{block.text}</p>
          case "ul":
            return (
              <ul key={index} className="grid gap-2.5 pl-1">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-primary/70"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          case "ol":
            return (
              <ol key={index} className="grid gap-2.5 counter-reset-item">
                {block.items.map((item, itemIndex) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 font-mono text-[11px] tabular-nums text-primary">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            )
          case "callout":
            return (
              <aside
                key={index}
                className="rounded-xl border border-border bg-card/60 px-4 py-3.5 text-sm leading-relaxed sm:px-5"
              >
                {block.text}
              </aside>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
