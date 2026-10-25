export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  tags: string[]
  featured?: boolean
  blocks: BlogBlock[]
}

const authorRole = "Full Stack Developer & Web Security Researcher"

export const blogAuthor = {
  name: "Arif Rahman",
  role: authorRole,
} as const

export const blogPosts: BlogPost[] = [
  {
    slug: "how-i-test-authentication",
    title: "How I Test Authentication — Beyond the Login Form",
    excerpt:
      "A working login screen is not proof of a secure session. Here is how I test authentication the way an attacker would: tokens, trust boundaries, and what “logged in” actually means on the server.",
    date: "2026-09-18",
    readTime: "9 min read",
    category: "Methodology",
    tags: ["Authentication", "JWT", "Sessions", "Penetration Testing"],
    featured: true,
    blocks: [
      {
        type: "p",
        text: "Most applications look authenticated because a cookie is present and the UI shows a user menu. That is not enough. During assessments I treat authentication as a trust boundary: every privileged route must prove who the caller is — cryptographically — not merely that a cookie-shaped string exists.",
      },
      {
        type: "callout",
        text: "This post explains methodology only. It does not include exploit steps, payloads, or client-identifying details from any engagement.",
      },
      {
        type: "h2",
        text: "What “authenticated” should mean",
      },
      {
        type: "p",
        text: "A session or token is only trustworthy if the server verifies it the same way a library author intended: signature (or equivalent), algorithm pinning, expiry, and audience where applicable. Checks that only decode a payload and read claims like exp or a user id are not authentication — they are parsing.",
      },
      {
        type: "ul",
        items: [
          "Does every privileged handler verify the token, or only the middleware on some routes?",
          "Can identity fields (user id, email, role) be taken from an unverified client-controlled value?",
          "Do “mint token for this user” or “refresh file URL” endpoints trust that same weak check?",
          "Are there native API routes that bypass the main auth gateway entirely?",
        ],
      },
      {
        type: "h2",
        text: "How I approach an auth review",
      },
      {
        type: "ol",
        items: [
          "Map every way the app decides someone is logged in — cookies, headers, local storage, BFF proxies, third-party identity providers.",
          "Trace privileged actions: file access, identity minting, admin APIs, webhooks that write data.",
          "Ask whether a forged or truncated token would still be accepted if only structure and expiry were checked.",
          "Confirm that logout, rotation, and short-lived tokens actually invalidate previous access.",
          "Document impact in plain language: account takeover, data exposure, or privilege escalation — not just “weak JWT handling.”",
        ],
      },
      {
        type: "h2",
        text: "Why this class of bug is Critical",
      },
      {
        type: "p",
        text: "When session verification fails, every feature that trusted a “logged-in user” becomes an unauthenticated surface. Downstream features — protected downloads, minting provider tokens, signing storage URLs — inherit the same break. One root cause often explains a chain of Critical findings.",
      },
      {
        type: "h2",
        text: "What I recommend to teams",
      },
      {
        type: "ul",
        items: [
          "Verify signatures (or equivalent) on every privileged path — not only at the edge for some requests.",
          "Never take the acting user id from an unverified cookie or request body.",
          "Fail closed: missing secrets, misconfigured env, or verify errors should return 401, not continue as a privileged user.",
          "Re-test after fixes by attempting the same trust-boundary mistakes, not only happy-path login.",
        ],
      },
      {
        type: "p",
        text: "If you want this kind of review on your own application, the Work page has anonymized write-ups of related Critical findings, and the contact form is open for a short scoping call.",
      },
    ],
  },
  {
    slug: "finding-business-logic-and-idor",
    title: "Finding Business Logic Flaws and Broken Access Control",
    excerpt:
      "Scanners are weak at business logic. Here is how I hunt IDOR, missing ownership filters, and approval bypasses — the bugs that let Account A touch Account B’s data.",
    date: "2026-09-25",
    readTime: "10 min read",
    category: "Methodology",
    tags: [
      "Business Logic",
      "IDOR",
      "Access Control",
      "Ownership Checks",
    ],
    featured: true,
    blocks: [
      {
        type: "p",
        text: "Broken access control rarely looks like a flashy payload. It looks like a normal request with someone else’s object id — and a response that should have been 403. In shared applications, that mistake is often Critical: the feature works, the permission flag looks right, and the query simply never checks ownership.",
      },
      {
        type: "callout",
        text: "This post is methodology only. No client names, product details, record types, endpoints, or proof steps.",
      },
      {
        type: "h2",
        text: "What I look for",
      },
      {
        type: "ul",
        items: [
          "Object-level access: can a user read or change another account’s record by swapping an id?",
          "Function-level access: can a lower role call an admin-only action if they know the route?",
          "List endpoints that return every record with no ownership or account filter.",
          "Archive or soft-delete paths that still return or mutate records that should be gone.",
          "Background jobs that write data under a system context with weaker checks than the UI.",
        ],
      },
      {
        type: "h2",
        text: "A practical testing rhythm",
      },
      {
        type: "ol",
        items: [
          "Create two accounts (or two roles) with clear separation of data.",
          "Perform legitimate actions as Account A and note the object ids returned.",
          "Replay the same reads and writes as Account B, changing only the id.",
          "Repeat for create flows: does create bind the new row to the caller, or to a client-supplied owner id?",
          "Check supporting APIs — search, exports, webhooks — not only the main screens.",
        ],
      },
      {
        type: "h2",
        text: "Business logic beyond IDOR",
      },
      {
        type: "p",
        text: "Logic flaws also show up as skipped approvals, mismatched ownership on automated jobs, and features that trust a client flag for “premium” or “approved.” If the server does not re-check entitlement on every protected action, the UI gate is decoration.",
      },
      {
        type: "ul",
        items: [
          "Approval or review steps that can be skipped by calling the final write API directly.",
          "Automations that attach data to the wrong account because of a weak match rule.",
          "Entitlements checked once in the browser and never again on the API.",
        ],
      },
      {
        type: "h2",
        text: "How I write these up for clients",
      },
      {
        type: "p",
        text: "Stakeholders need impact, not jargon. I describe what another user or account could see or change, why that matters, and the smallest server-side ownership check that closes the path. Every finding is manually verified before it goes in the report.",
      },
    ],
  },
  {
    slug: "critical-chains-one-auth-bug",
    title: "Critical Chains: When One Auth Bug Unlocks Everything",
    excerpt:
      "Some Criticals are not isolated. A forgeable session can turn protected downloads, token minting, and signed URLs into an unauthenticated attack surface. How I map and report those chains.",
    date: "2026-10-02",
    readTime: "8 min read",
    category: "Findings",
    tags: ["Critical", "Attack Chains", "Impact", "Reporting"],
    featured: true,
    blocks: [
      {
        type: "p",
        text: "On deeper assessments I often find a single root cause with many symptoms. The report lists several Criticals — protected resource access, identity minting, signed downloads — but they share one broken gate. Clients understand priority better when that chain is explicit.",
      },
      {
        type: "h2",
        text: "A typical chain pattern",
      },
      {
        type: "ol",
        items: [
          "Root: privileged routes trust an unverified session cookie or header.",
          "Branch A: a resource handler returns protected content with no ownership check beyond that session.",
          "Branch B: an identity endpoint mints a real provider token for whatever user id appears in the cookie.",
          "Branch C: a signing endpoint returns short-lived download URLs for arbitrary storage keys.",
        ],
      },
      {
        type: "p",
        text: "Fixing only Branch A leaves Branches B and C open. Fixing the root collapses the chain. That is why remediation order matters as much as severity labels.",
      },
      {
        type: "h2",
        text: "Other Critical patterns I escalate early",
      },
      {
        type: "ul",
        items: [
          "Unauthenticated SSRF: a public route that fetches any caller-supplied URL from the server.",
          "Fail-open webhooks: callbacks that accept writes when a shared secret is missing or unset.",
          "Proxy bypass: the application process reachable without the TLS / rate-limit front door.",
          "Broken list APIs: authenticated users pulling another account’s full dataset.",
        ],
      },
      {
        type: "callout",
        text: "I never publish exploit procedures or identifying infrastructure details. Portfolio write-ups stay at issue → impact → resolution.",
      },
      {
        type: "h2",
        text: "Reporting so engineering can act",
      },
      {
        type: "p",
        text: "Each Critical in my reports includes what failed, why it matters in business terms, impact if abused, and a concrete fix. Related findings are cross-linked so the team can schedule root-cause work first, then re-test the whole chain — not one ticket at a time in isolation.",
      },
    ],
  },
  {
    slug: "fail-open-webhooks-and-integrations",
    title: "Fail-Open Webhooks and Integration Secrets",
    excerpt:
      "Integrations fail open more often than teams expect: missing env secrets disable auth instead of blocking the request. How I test callbacks and worker writebacks.",
    date: "2026-10-12",
    readTime: "7 min read",
    category: "Methodology",
    tags: ["Webhooks", "Integrations", "Secrets", "API Security"],
    featured: false,
    blocks: [
      {
        type: "p",
        text: "Modern apps depend on third-party callbacks, background workers, and automation hooks. Those paths often sit outside the main login flow — and that is exactly where fail-open patterns hide.",
      },
      {
        type: "h2",
        text: "The anti-pattern",
      },
      {
        type: "p",
        text: "Code that says “if a secret is configured and the header does not match, reject” quietly accepts traffic when the secret is empty. Staging works. Production misconfiguration becomes an unauthenticated write into the application’s data store.",
      },
      {
        type: "h2",
        text: "How I test integrations",
      },
      {
        type: "ul",
        items: [
          "Identify every callback and inbound route that mutates data.",
          "Confirm secrets are required at boot — the process should refuse to start without them.",
          "Verify comparison is constant-time and not optional when the header is absent.",
          "Check that forged payloads cannot land on another account’s records via a guessable id.",
          "Review whether workers re-check ownership before mutating records.",
        ],
      },
      {
        type: "h2",
        text: "Why clients care",
      },
      {
        type: "p",
        text: "Unauthenticated writes poison the system of record: fake or malicious data created by strangers. Even without a full data dump, integrity loss can be as damaging as confidentiality loss.",
      },
      {
        type: "p",
        text: "Remediation is usually straightforward: one secret name, fail closed, shared middleware, rate limits, and a re-test that proves the open path is gone.",
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}

export function formatBlogDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`))
}
