import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_5%,transparent_75%)]"
      />
      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col justify-center px-6 py-28 lg:px-8">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
          Error 404
        </p>
        <h1 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          This page does not exist.
        </h1>
        <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          The link may be broken, or the page may have moved. Everything else
          is still where it should be.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="h-11 px-6">
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild variant="outline" className="h-11 px-6">
            <Link href="/work">See the work</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
