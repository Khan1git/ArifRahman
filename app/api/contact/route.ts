import { NextResponse } from "next/server"

export const runtime = "nodejs"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 })
  }

  const { name, email, message, company } = (payload ?? {}) as Record<
    string,
    unknown
  >

  // Honeypot field: invisible to humans, filled in by bots.
  if (typeof company === "string" && company.trim().length > 0) {
    return NextResponse.json({ ok: true })
  }

  if (
    typeof name !== "string" ||
    name.trim().length < 2 ||
    typeof email !== "string" ||
    !EMAIL_PATTERN.test(email.trim()) ||
    typeof message !== "string" ||
    message.trim().length < 20
  ) {
    return NextResponse.json(
      { error: "Please check the form fields and try again." },
      { status: 400 }
    )
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT

  if (!endpoint) {
    return NextResponse.json(
      {
        error:
          "The form is not connected to an inbox yet. Email me directly instead.",
      },
      { status: 503 }
    )
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        source: "portfolio",
      }),
    })

    if (!response.ok) {
      throw new Error(`Endpoint responded with ${response.status}`)
    }
  } catch {
    return NextResponse.json(
      {
        error:
          "The message could not be delivered right now. Email me directly instead.",
      },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
