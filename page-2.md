Add a new page to my portfolio: /how-i-work — a methodology page that
shows visitors exactly how I approach a project, from the first
conversation to the final report. This page exists to build trust: a
client should finish reading it and feel confident I have a real,
repeatable, professional process, not that I just "hack around" on their
app.

Keep the same design system already established (dark mode default,
~#0A0E14 background, off-white text, one restrained accent color,
shadcn/ui, Framer Motion scroll-reveal, no neon/hacker clichés). Use real
information only — do not invent certifications, tools, or claims not
listed below.

====================================================================
PAGE STRUCTURE
====================================================================

1. INTRO SECTION
   Short framing paragraph, written in first person, explaining that
   this page covers how I actually work: my testing process for web
   apps and APIs, and separately, how I approach security for
   AI-integrated features. Tone: precise and calm, not salesy.

2. SECTION: HOW I TEST WEB APPLICATIONS
   Present as a clear, numbered methodology (use a step layout, each step
   with a short title + 2-3 sentence description):

   Step 1 — Discovery & Scoping
   Understand the application, its purpose, and what matters most to the
   client (user data, payments, authentication, etc.). Define what is
   and isn't in scope, in writing, before any testing begins.

   Step 2 — Reconnaissance
   Map the application: pages, features, API endpoints, authentication
   flows, and user roles. Build a clear picture of the attack surface
   before testing anything.

   Step 3 — Manual & Tool-Assisted Testing
   Test systematically against the OWASP Top 10 and beyond, using both
   manual analysis and tools including Burp Suite, OWASP ZAP, Nikto, and
   Kali Linux. Manual testing matters most here — automated scanners
   catch surface-level issues, but logic flaws (like broken access
   control or subscription bypasses) require manually thinking through
   how a feature could be misused.

   Step 4 — Verification, Not Just Detection
   Every finding is manually verified before it's reported. I don't
   report scanner output as-is; if I can't demonstrate real impact, it
   doesn't go in the report as a confirmed issue.

   Step 5 — Reporting
   Each finding is documented with: what the issue is, how severe it is,
   what the real-world impact could be, and exactly how to fix it.
   Written so both a developer and a non-technical stakeholder can
   understand it.

   Step 6 — Remediation Support & Re-testing
   I work directly with the development team while fixes are made, and
   re-test every reported issue after the fix to confirm it's actually
   resolved, not just patched on the surface.

   Visual treatment: numbered steps with a connecting line that
   animates/draws in as the user scrolls through this section (Framer
   Motion, tied to scroll progress of this section specifically) — reuse
   the same scroll-progress pattern already used elsewhere on the site.

3. SECTION: HOW I TEST AI-INTEGRATED APPLICATIONS
   This section should be clearly framed as an emerging, actively
   evolving area, grounded in real work — not oversold as an established
   service like the web app testing section above. Use this framing:

   Opening line (approximate, rewrite naturally):
   "More applications now rely on AI models for core features, chat
   interfaces, content generation, and automation. This introduces a
   new category of risk that traditional web security testing doesn't
   fully cover. My background combines hands-on web/API security
   testing with direct experience integrating AI models (OpenAI, DALL·E,
   Perplexity) into real applications — which means I test these
   features understanding both how they're built and how they can be
   misused."

   Present these as areas of focus (use a clean list or card format, NOT
   numbered like the main methodology, since this is a focus area, not a
   finished step-by-step process):

   - Prompt Injection Risks: Checking whether user input can manipulate
     an AI feature into ignoring its intended instructions, leaking
     system prompts, or taking unintended actions.
   - Data Exposure Through AI Features: Checking whether an AI-connected
     feature can be tricked into revealing data it shouldn't, including
     other users' data or internal application details.
   - Over-Permissioned AI Actions: Where an AI feature can trigger real
     actions (sending data, calling APIs, modifying records), checking
     whether those actions are properly scoped and can't be abused
     through crafted input.
   - Output Handling: Checking whether AI-generated content is properly
     sanitized before being displayed or used elsewhere in the app
     (preventing injected content from becoming a new XSS or similar
     vector).
   - Integration-Level Review: Reviewing how AI API keys, rate limits,
     and model access are handled in the application's architecture,
     since this is a common area of misconfiguration.

   Close this section with an honest, confidence-building line, e.g.:
   "AI security is a fast-moving field. My approach is to apply
   proven web and API security principles to these new features, while
   staying current with how AI-specific attacks are evolving" — do not
   claim certifications or formal AI security credentials, since I don't
   have any; frame this as applied experience and ongoing research
   (reference my AI-Powered Content Automation research project here as
   evidence of hands-on AI integration experience).

4. SECTION: TOOLS I USE
   Simple, honest list grouped by category (reuse real data, don't
   invent tools):
   Security Testing: Burp Suite, OWASP ZAP, Nikto, Kali Linux
   Development: Next.js, React, TypeScript, Node.js, Firebase
   AI Integration: OpenAI API, DALL·E, Perplexity API

5. SECTION: WHAT YOU CAN EXPECT WORKING WITH ME
   Short, concrete list (not generic fluff):
   - Clear scope and written agreement before any testing starts
   - Regular communication during the engagement, not silence until the
     final report
   - A report you can actually act on, not just a vulnerability dump
   - A free re-test after fixes are made
   - Confidentiality: findings are never shared or published without
     explicit permission

6. CLOSING CTA
   Short closing line + button linking to /contact: "Want to see how
   this applies to your application? Let's talk."

====================================================================
DESIGN NOTES FOR THIS PAGE SPECIFICALLY
====================================================================
- The Web App Testing methodology (Section 2) should feel authoritative
  and procedural — a clear, confident numbered sequence
- The AI Testing section (Section 3) should feel current and thoughtful,
  not oversold — this is what separates a careful professional from
  someone making inflated claims, and clients in this space respect
  honesty about what's established vs. emerging
- Avoid repeating the same card layout used on /services for this page
  — this page is about process and thinking, so lean more on flowing
  text with step/number visual anchors rather than boxed feature cards
- Keep the whole page scannable: a time-pressed founder should be able
  to skim the step titles and still get the full picture

====================================================================
IMPLEMENTATION
====================================================================
1. Add this page to the site's routing and main navigation (place it
   between Services and Work in the nav order)
2. Reuse existing design tokens, scroll-reveal utilities, and shared
   components already built for the rest of the site — do not introduce
   a new visual style for this page
3. Show me the result before moving to any other changes