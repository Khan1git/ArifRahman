Upgrade my existing Next.js portfolio into a proper multi-page website,
built to the quality level of a professional cybersecurity consulting
agency — not a single-page scrolling template, not a generic "AI-built"
portfolio look. The project already exists — review the current codebase
first, report what exists vs. what's missing against this spec, then
implement page by page, showing me each page before moving to the next.

Use ONLY the real information in PART 1. Do not invent projects, numbers,
testimonials, or achievements not listed here.

====================================================================
CRITICAL DESIGN DIRECTION: AVOID THE "AI-GENERATED" LOOK
====================================================================
Do NOT default to the common AI-generated template pattern: a centered
hero with a gradient blob behind it, three identical icon-in-a-circle
cards in a row, a generic "bento grid" of features, purple-to-blue
gradients everywhere, and the same rounded-corner-shadow-card repeated on
every section. This is instantly recognizable as templated and undermines
trust with clients evaluating a security professional.

Instead, build it like a real security consulting agency site (reference
quality: Blend-designed sites, CyberTech-style consulting templates,
Preavo Security, Acre Security). Characteristics to follow:
- Asymmetric layouts — not everything centered and stacked in identical
  cards. Mix full-width sections with offset two-column layouts
- Confident, editorial typography as a design element itself — large
  section numbers, pull-quotes, varied heading sizes, not everything the
  same size
- Evidence-driven design: real stats, real findings, real methodology,
  shown directly rather than behind generic icons
  the generic blue-corporate template — dark, confident, deep tones, used
  with intent, not decoration
- Restraint: fewer, better sections rather than many shallow ones. A
  client should feel "this person is serious and precise," which means
  tight writing, purposeful whitespace, and nothing decorative that
  doesn't serve understanding
- Each page should feel like it was designed for ITS content, not a
  repeated template stamped across every page

====================================================================
PART 1 — REAL DATA (use exactly as written, do not alter facts)
====================================================================
NAME: Arif Rahman
ROLE: Full Stack Developer & Web Security Researcher
LOCATION: Swat, Khyber Pakhtunkhwa, Pakistan (available remote/international)
EMAIL: arifrahman1k7@gmail.com
LANGUAGES: Pashto (native), Urdu (C2), English (B1–B2)

BIO:
Full Stack Developer and Web Security Researcher with a BS in Information
Technology (CGPA 3.58/4.00). Builds, tests and secures modern web
applications using JavaScript frameworks, applies security principles
throughout the development lifecycle, and has hands-on experience in live
production testing, vulnerability research and performance optimization.
Current research focuses on AI-driven content automation, integrating
OpenAI, DALL·E and Perplexity models; a paper is in preparation.

EDUCATION:
BS Information Technology — University of Malakand, Lower Dir, KP, Pakistan
17/10/2021 – 01/07/2025, CGPA 3.58/4.00 (EQF Level 6)
HSSC 2021 — Swat Education Academy, Barikot — 898/1100 (81%)
SSC 2019 — Khyber Education Academy, Barikot — 881/1100 (80%)

WORK EXPERIENCE:
Full Stack Developer — BLACKACRE, 17/04/2025 – Present
- Developed and maintained secure, responsive web apps using Next.js,
  React, TypeScript, Tailwind CSS, Shadcn/UI, Firebase; full CRUD,
  reusable components
- Optimized performance, SEO, accessibility, Core Web Vitals — 90+
  Lighthouse scores on desktop
- Live production testing: functional, UI/UX, cross-browser, performance
- Security testing and vulnerability assessment using Burp Suite, OWASP
  ZAP, Nikto, Kali Linux
- Identified and documented real production vulnerabilities (see Part 2
  Case Studies below for full write-ups)
- Worked with developers to remediate findings and verify fixes
- Set up Google Analytics and Google Tag Manager

RESEARCH PROJECT:
AI-Powered Content Automation System — paper in preparation. Automated
content generation system using AI models (OpenAI, DALL·E, Perplexity) to
identify trending topics, generate articles, and produce matching images.
Examines AI model integration, automation workflows, and content
dissemination strategies.

SKILLS:
Development: JavaScript, TypeScript, React.js, Next.js, Node.js,
Express.js, HTML, CSS, Tailwind CSS, MongoDB, Prisma, Firebase, Git, SEO
Cybersecurity: Web/API Penetration Testing, XSS, SQL Injection, CSRF,
SSRF, Path Traversal, RCE, Privilege Escalation, Race Conditions, Broken
Access Control, OWASP Top 10, OWASP WebGoat, Burp Suite, OWASP ZAP,
Nikto, Kali Linux
AI Integration: OpenAI API, DALL·E, Perplexity API, automation workflows

CERTIFICATIONS:
1. Foundations of Cybersecurity — Coursera
2. API Penetration Testing — APISEC University
3. Ultimate Bug Bounty — Udemy
4. Kali Linux 101 — TCM Security

CONFERENCES/SEMINARS:
AI & Robotics Workshop, University of Malakand (Apr 2023)
Internet of Things (IoT) Workshop, University of Malakand (Jul 2023)
Cybersecurity Awareness Seminar, University of Malakand (Apr 2024)

SERVICES OFFERED:
1. Web Application Penetration Testing — OWASP Top 10 testing, written
   report with severity ratings
2. API Security Assessment — auth, authorization, data exposure testing
3. Secure Full-Stack Development — Next.js/React/TypeScript/Firebase apps
   built secure from the start
4. Fix Verification / Re-testing — confirming vulnerabilities are resolved

====================================================================
PART 2 — CASE STUDIES / FINDINGS (real content, ready to use as-is)
====================================================================
Use these four write-ups directly on the Work/Case Studies page. Each
follows Issue → Impact → Resolution. All are fully anonymized — no client
names, app names, or identifying details. Do not add exploit payloads or
step-by-step reproduction steps; keep each at the explanatory level shown.

--- CASE STUDY 1: Remote Code Execution (RCE) ---
Title: Remote Code Execution via Unsafe File Handling
Severity: Critical
Issue: During a security assessment of a production web application, a
file-handling feature was found to accept and process user-supplied
files without sufficient validation of file type and content.
Impact: If exploited, this could have allowed an attacker to execute
arbitrary code on the server, potentially gaining full control of the
application and access to any data it stored.
Resolution: Worked with the development team to implement strict file
type validation, content verification, and isolated storage for
uploaded files outside any directory capable of executing code. The fix
was manually re-tested and confirmed to fully resolve the issue.

--- CASE STUDY 2: Server-Side Request Forgery (SSRF) ---
Title: Server-Side Request Forgery in an Internal Request Feature
Severity: High
Issue: A feature that allowed the application to fetch content from a
user-supplied URL did not restrict which destinations the server was
allowed to reach.
Impact: This could have let an attacker force the server to make
requests to internal systems that were never meant to be publicly
reachable, potentially exposing internal services or cloud metadata.
Resolution: Recommended and verified a fix that restricted outbound
requests to an approved allow-list of destinations and blocked requests
to internal/private IP ranges. Re-tested after the fix to confirm the
restriction held under multiple bypass attempts.

--- CASE STUDY 3: Path Traversal ---
Title: Path Traversal in a File Access Feature
Severity: High
Issue: A file-retrieval feature accepted a file path or filename
directly from user input without properly restricting it to an intended
directory.
Impact: An attacker could potentially manipulate the input to access
files outside the intended folder, including sensitive configuration or
system files.
Resolution: Worked with the team to implement proper input sanitization
and enforce that all file access resolved strictly within an allowed
directory, regardless of the input provided. Verified the fix through
manual re-testing.

--- CASE STUDY 4: Subscription / Payment Bypass ---
Title: Subscription Tier Bypass via Request Manipulation
Severity: High
Issue: The application's premium features were gated on the client side
and verified with a request parameter that was not properly re-validated
on the server for every protected action.
Impact: A user on a free or lower-tier plan could potentially access
paid features without a valid subscription, directly affecting revenue
and the integrity of the subscription model.
Resolution: Recommended moving all entitlement checks to be enforced
server-side on every protected request, rather than trusting
client-supplied state. Verified the fix by attempting the bypass again
post-remediation and confirming it was no longer possible.

====================================================================
PART 3 — SITE STRUCTURE (proper multi-page site, agency style)
====================================================================
Build as SEPARATE PAGES with real routing, not a single long scroll.
Each page should load its own content with a clean entrance animation
(not heavy scroll-jacking), and sections within a page can still use
scroll-reveal (Framer Motion `whileInView`, fade+translate, staggered,
triggered once, respecting prefers-reduced-motion).

1. HOME (/)
   - Hero: headline + subheadline establishing the dual developer/
     security-researcher identity, two CTAs ("See My Work" → /work,
     "Get a Security Assessment" → /contact)
   - Condensed "What I Do" — 3-4 services summarized, linking to /services
   - A highlights strip: 2-3 real stats pulled from Part 1 (only real
     numbers — e.g. certifications count, years of experience)
   - A short "Featured Finding" teaser — one case study preview card
     linking to /work
   - Closing CTA band linking to /contact

2. ABOUT (/about)
   - Full narrative bio, written in first person, professional and
     specific (not generic "passionate developer" language)
   - Education and background
   - Research project description (AI-Powered Content Automation System)
   - Certifications and conferences, presented as real credentials, not
     decorative badges

3. SERVICES (/services)
   - Each of the 4 services as its own full section (not a shrunk card):
     what it is, what's included, what the client receives, how it's
     scoped — written like a real consulting service page, specific
     enough that a client understands exactly what they're buying
   - A brief "How I Work" process strip: Discovery call → Scope &
     written authorization → Testing → Reporting → Fix verification

4. WORK / CASE STUDIES (/work)
   - This is the most important page. Use the 4 real case studies from
     Part 2 above, each as its own detailed block or expandable card:
     Title, Severity badge, Issue, Impact, Resolution — laid out so a
     non-technical reader can follow the story (what was wrong, why it
     mattered, how it was fixed) without needing security background
   - Visually differentiate severity (e.g. a small colored severity
     indicator: Critical/High), but keep it professional, not alarmist
   - Clear "anonymized" disclaimer stated once at the top of the page,
     not repeated awkwardly on every card

5. EXPERIENCE (/experience or merged into /about — your judgment on
   what reads better, but it must exist as a properly detailed section)
   - Full Blackacre role write-up using all bullet points from Part 1,
     organized into clear groups: Development work, Security work,
     Performance/analytics work — not one flat bullet list
   - This should read like a real case for why someone would trust this
     person with their application, not a resume dump

6. RESUME (/resume)
   - Clean web-readable version of the full resume from Part 1 data
   - "Download PDF" button at the top

7. CONTACT (/contact)
   - Clear heading, short framing paragraph (not just a bare form)
   - Contact form: name, email, message, with real validation and a
     clear success/error state
   - Email, LinkedIn, GitHub, Upwork links (placeholder href="#" only
     where I haven't provided a real link yet)
   - Mention of free 15-minute consultation call

8. PRIVACY (/privacy) and TERMS (/terms)
   - Privacy: standard contact-form data handling policy
   - Terms of Engagement: explains all testing requires written
     authorization and follows responsible disclosure — this page is a
     trust signal, write it properly, not as filler

NAVIGATION:
- Clean top nav: Home, About, Services, Work, Resume, Contact
- Sticky, transparent over Hero, solid/blurred on scroll
- Footer with the same links, social icons, and a short tagline

====================================================================
PART 4 — DESIGN SYSTEM
====================================================================
COLORS: Dark mode default — deep charcoal/navy (~#0A0E14), off-white text
(~#E8EAED), ONE restrained accent color for CTAs/highlights/severity
indicators (confident blue, teal, or emerald — not neon green, not
generic corporate blue). Light mode toggle using the same tokens,
persisted in localStorage.

TYPOGRAPHY: Strong modern sans for headings (Inter, Geist, General Sans,
or Satoshi) used with intentional scale variation — not every heading the
same size. Clean readable body font. Pull-quotes or large stat numbers
used as design elements on key pages (Work, About).

LAYOUT: Asymmetric where it helps readability (see Critical Design
Direction above), consistent spacing scale, mobile-first responsive.

MOTION: Framer Motion (`motion` package) for scroll-reveal within pages —
fade + slight translate, staggered children, triggered once, respecting
prefers-reduced-motion. Page transitions between routes should be smooth
(simple fade/slide), not jarring.

COMPONENTS: shadcn/ui throughout, consistent border-radius and shadow
system, but varied component shapes across pages so it doesn't feel like
one template repeated (e.g. Work page cards should look different in
structure from Services page cards, because their content is different).

ICONS: lucide-react only, used sparingly and purposefully, not as
decoration on every single element.

ACCESSIBILITY: Proper contrast ratios, semantic HTML, full keyboard
navigation, visible focus states, alt text on all images.

====================================================================
PART 5 — TECHNICAL REQUIREMENTS
====================================================================
- Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
  — check what's already installed before adding
- Performance: next/font, lazy-loaded images, 90+ Lighthouse across all
  pages, animate only transform/opacity for performance
- SEO: per-page meta titles/descriptions, Open Graph + Twitter card
  images, sitemap.xml, robots.txt, JSON-LD structured data for
  Person/ProfessionalService
- Custom 404 page matching site design
- Favicon set (all sizes)
- Analytics: Vercel Analytics or Google Analytics (placeholder env var)
- Fully responsive across mobile, tablet, desktop
- Deploy-ready for Vercel

====================================================================
PART 6 — COPY TONE
====================================================================
Confident, precise, benefit-focused — written for non-technical founders
and business owners evaluating whether to trust this person with their
application's security. Short, clear sentences. No buzzwords
("passionate," "ninja," "rockstar," "guru"). Every claim must match Part
1 and Part 2 exactly — do not exaggerate or invent anything.

====================================================================
NOW DO THIS, IN ORDER:
====================================================================
1. Review the current codebase, list what exists vs. what's missing here
2. Confirm current routing structure (App Router folders) and whether it
   already supports multi-page navigation, or needs restructuring
3. Build the design system and shared components first (nav, footer,
   scroll-reveal wrapper, severity badge component)
4. Build pages in this order: Home → Work (most important) → Services →
   About/Experience → Resume → Contact → Privacy/Terms
5. After each page, show me the result before moving to the next
6. At the end, list anything built with placeholder data so I know what
   to replace with real content