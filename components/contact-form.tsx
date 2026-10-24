"use client"

import { useState } from "react"
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { site } from "@/lib/site-data"

type FieldErrors = {
  name?: string
  email?: string
  message?: string
}

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    const company = String(data.get("company") ?? "")

    const nextErrors: FieldErrors = {}
    if (name.length < 2) nextErrors.name = "Please enter your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address."
    }
    if (message.length < 20) {
      nextErrors.message = "Please add a few more details — at least 20 characters."
    }

    setFieldErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = nextErrors.name
        ? "name"
        : nextErrors.email
          ? "email"
          : "message"
      const field = form.elements.namedItem(firstInvalid)
      if (field instanceof HTMLElement) field.focus()
      return
    }

    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      })

      const result = (await response.json().catch(() => null)) as {
        error?: string
      } | null

      if (!response.ok) {
        throw new Error(
          result?.error ?? "Something went wrong. Please try again."
        )
      }

      form.reset()
      setStatus("success")
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      )
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <span className="grid size-10 place-items-center rounded-full border border-primary/30 bg-primary/10">
          <CheckCircle2 className="size-5 text-primary" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-xl font-semibold tracking-tight">
          Message sent.
        </h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. I will reply to your email as soon as I can.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      {status === "error" && errorMessage ? (
        <div
          role="alert"
          className="rounded-xl border border-rose-500/35 bg-rose-500/10 p-4"
        >
          <p className="text-sm font-medium text-rose-700 dark:text-rose-400">
            Message not sent
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {errorMessage}
          </p>
          <p className="mt-2 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-foreground underline underline-offset-4"
            >
              Email {site.email}
            </a>
          </p>
        </div>
      ) : null}

      <div className="grid gap-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          required
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
        />
        {fieldErrors.name ? (
          <p
            id="contact-name-error"
            className="text-xs text-rose-600 dark:text-rose-400"
          >
            {fieldErrors.name}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          required
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={
            fieldErrors.email ? "contact-email-error" : undefined
          }
        />
        {fieldErrors.email ? (
          <p
            id="contact-email-error"
            className="text-xs text-rose-600 dark:text-rose-400"
          >
            {fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="What are you building, and what do you need tested or fixed?"
          required
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={
            fieldErrors.message ? "contact-message-error" : undefined
          }
        />
        {fieldErrors.message ? (
          <p
            id="contact-message-error"
            className="text-xs text-rose-600 dark:text-rose-400"
          >
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot — hidden from people, catches bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="h-11 gap-2 px-6"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>
        <p className="text-xs text-muted-foreground">
          Or email me directly at{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            {site.email}
          </a>
        </p>
      </div>
    </form>
  )
}
