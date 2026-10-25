export const site = {
  name: "Arif Rahman",
  role: "Full Stack Developer & Web Security Researcher",
  email: "arifrahman1k7@gmail.com",
  url: "https://arif-rahman.vercel.app",
  github: "https://github.com/khan1git",
  linkedin: "https://www.linkedin.com/in/arif-rahman-84b1a2262",
  upwork: "#",
  resume: "#",
  tagline:
    "I build modern web applications — and test them the way an attacker would.",
  description:
    "Arif Rahman is a full stack developer and web security researcher. He builds modern web applications with Next.js, React and TypeScript, and tests them the way an attacker would.",
}

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-i-work", label: "How I Work" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-i-work", label: "How I Work" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const

export const languages = [
  { label: "Pashto", level: "Native" },
  { label: "Urdu", level: "C2 — fully proficient" },
  { label: "English", level: "B1–B2 — independent user" },
] as const

/* Only real, verifiable numbers from the source data. */
export const homeStats = [
  {
    value: "2+",
    label: "Years in production",
    detail:
      "Building and testing production web applications since 2024, including freelance work.",
  },
  {
    value: "90+",
    label: "Lighthouse desktop score",
    detail: "Achieved on shipped production work across performance, SEO and accessibility.",
  },
  {
    value: "5",
    label: "Anonymized Critical write-ups",
    detail:
      "Real production findings on the Work page — auth breaks, access control, SSRF and integration failures.",
  },
] as const

export const servicesDetailed = [
  {
    number: "01",
    slug: "web-application-penetration-testing",
    title: "Web Application Penetration Testing",
    short:
      "OWASP Top 10 testing with manual verification and a severity-rated report.",
    summary:
      "Manual and tool-assisted testing of your web application against the OWASP Top 10 and beyond — covering authentication, access control, input handling and business logic.",
    includes: [
      "Authentication, session handling and account recovery flows",
      "Broken access control, IDOR and account isolation",
      "Injection testing — XSS, SQL injection and related classes",
      "SSRF, path traversal and unsafe file handling",
      "Business logic flaws, approval bypasses and race conditions",
      "Webhook / integration auth — fail-open secrets and callbacks",
      "Manual verification of every finding — no unverified scanner output",
    ],
    deliverables: [
      "A written report of every confirmed finding, rated by severity",
      "A plain-language impact statement a non-technical stakeholder can follow",
      "Private evidence for each finding so your developers can reproduce it",
      "Practical remediation guidance for each issue",
      "Re-testing of fixes after they ship",
    ],
    scoping:
      "Testing is scoped in writing before work starts: the target, the timing and the rules of engagement are agreed up front. A typical scope is a staging environment or a production system you own, with written authorization from the person responsible for it.",
  },
  {
    number: "02",
    slug: "api-security-assessment",
    title: "API Security Assessment",
    short:
      "Authentication, authorization and data-exposure testing for REST APIs.",
    summary:
      "A focused review of your REST API's authentication, authorization and data exposure — tested the way a real client would misuse it, not just scanned.",
    includes: [
      "Authentication and token handling",
      "Broken object-level and function-level authorization",
      "Sensitive data exposure in requests and responses",
      "Input validation and error handling",
      "Endpoint and HTTP-method review against your intended access model",
    ],
    deliverables: [
      "A prioritized list of confirmed API risks with severity ratings",
      "Evidence showing each issue in context",
      "Remediation steps written for your engineering team",
      "A re-test of the fixes once they are deployed",
    ],
    scoping:
      "Scoped around a documented endpoint list and test accounts for the roles that matter. If you don't have that documentation yet, a short discovery call is enough to define the scope together.",
  },
  {
    number: "03",
    slug: "secure-full-stack-development",
    title: "Secure Full-Stack Development",
    short:
      "Next.js, React, TypeScript and Firebase apps built secure from the start.",
    summary:
      "Building secure, responsive web applications on Next.js, React, TypeScript and Firebase — with security decisions made from the first commit, not bolted on later.",
    includes: [
      "Authentication and authorization implemented correctly from the start",
      "Full CRUD workflows and reusable, maintainable components",
      "Server-side validation and secure data handling across the stack",
      "Performance, SEO and accessibility built into the baseline",
      "Google Analytics and Tag Manager setup when you need tracking",
    ],
    deliverables: [
      "A working production application, deployed and documented",
      "A reusable component foundation your team can extend",
      "A short written handover explaining how the auth and data layers work",
    ],
    scoping:
      "Scoped as a project with a written feature list, milestones and an estimate agreed before development starts.",
  },
  {
    number: "04",
    slug: "fix-verification-retesting",
    title: "Fix Verification / Re-testing",
    short:
      "Confirming reported vulnerabilities are actually closed, with evidence.",
    summary:
      "Confirming that reported vulnerabilities are actually closed — not just marked as fixed in a tracker.",
    includes: [
      "Reproducing the original finding against the updated build",
      "Testing the exact attack path that was reported, plus variations of it",
      "Checking related functionality for regressions",
    ],
    deliverables: [
      "A pass / fail verdict per finding, with evidence",
      "Notes on anything still reproducible and the remaining risk",
    ],
    scoping:
      "Usually follows a penetration test, but it can be standalone — bring an existing report from another tester and each item will be verified against the live application.",
  },
] as const

/* The /how-i-work methodology page — the full testing process. */
export const testingMethodology = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "I start by understanding the application, its purpose, and what matters most — user data, payments, authentication. What is and isn't in scope is defined in writing before any testing begins.",
  },
  {
    number: "02",
    title: "Reconnaissance",
    description:
      "I map the application: pages, features, API endpoints, authentication flows and user roles. The goal is a clear picture of the attack surface before anything is tested.",
  },
  {
    number: "03",
    title: "Manual & Tool-Assisted Testing",
    description:
      "I test systematically against the OWASP Top 10 and beyond, using manual analysis alongside Burp Suite, OWASP ZAP, Nikto and Kali Linux. Manual testing matters most — scanners catch surface-level issues, but logic flaws like broken access control, forgeable sessions, or fail-open webhooks require thinking through how a feature could be misused.",
  },
  {
    number: "04",
    title: "Verification, Not Just Detection",
    description:
      "Every finding is manually verified before it is reported. I don't pass scanner output through as-is — if real impact can't be demonstrated, it doesn't go in the report as a confirmed issue.",
  },
  {
    number: "05",
    title: "Reporting",
    description:
      "Each finding is documented with what the issue is, how severe it is, what the real-world impact could be, and exactly how to fix it — written so both a developer and a non-technical stakeholder can understand it.",
  },
  {
    number: "06",
    title: "Remediation Support & Re-testing",
    description:
      "I work directly with the development team while fixes are made, and re-test every reported issue afterwards to confirm it is actually resolved — not just patched on the surface.",
  },
] as const

export const aiSecurityFocus = [
  {
    title: "Prompt Injection Risks",
    description:
      "Whether user input can manipulate an AI feature into ignoring its intended instructions, leaking system prompts, or taking unintended actions.",
  },
  {
    title: "Data Exposure Through AI Features",
    description:
      "Whether an AI-connected feature can be tricked into revealing data it shouldn't — other users' data, or internal application details.",
  },
  {
    title: "Over-Permissioned AI Actions",
    description:
      "Where an AI feature can trigger real actions — sending data, calling APIs, modifying records — checking whether those actions are properly scoped and can't be abused through crafted input.",
  },
  {
    title: "Output Handling",
    description:
      "Whether AI-generated content is properly sanitized before being displayed or used elsewhere in the app, so injected content can't become a new XSS or similar vector.",
  },
  {
    title: "Integration-Level Review",
    description:
      "How AI API keys, rate limits and model access are handled in the application's architecture — a common area of misconfiguration.",
  },
] as const

export const toolGroups = [
  {
    title: "Web application & API",
    tools: ["Burp Suite", "OWASP ZAP", "curl", "ffuf", "dirb", "WhatWeb"],
  },
  {
    title: "Network & infrastructure",
    tools: ["Nmap", "subfinder", "Whois", "testssl.sh", "Nikto"],
  },
  {
    title: "Exploitation & validation",
    tools: ["Metasploit", "msfvenom", "Hydra", "MySQL", "Kali Linux"],
  },
  {
    title: "Development",
    tools: ["Next.js", "React", "TypeScript", "Node.js", "Firebase"],
  },
  {
    title: "AI integration",
    tools: ["OpenAI API", "DALL·E", "Perplexity API"],
  },
] as const

export const workingExpectations = [
  "Clear scope and a written agreement before any testing starts.",
  "Regular communication during the engagement — not silence until the final report.",
  "A report you can act on, not just a vulnerability dump.",
  "A free re-test after fixes are made.",
  "Confidentiality: findings are never shared or published without explicit permission.",
] as const

export const skillGroups = [
  {
    title: "Development",
    description: "Production web applications, built end to end.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "MongoDB",
      "Prisma",
      "Firebase",
      "Git",
      "SEO",
    ],
  },
  {
    title: "Cybersecurity",
    description: "Manual and tool-assisted testing against real attack paths.",
    skills: [
      "Web & API Penetration Testing",
      "Authentication & Session Testing",
      "Broken Access Control / IDOR",
      "Business Logic Flaws",
      "Account / Tenant Isolation",
      "XSS",
      "SQL Injection",
      "CSRF",
      "SSRF",
      "Path Traversal",
      "RCE",
      "Privilege Escalation",
      "Race Conditions",
      "Webhook & Integration Security",
      "OWASP Top 10",
      "OWASP WebGoat",
      "Burp Suite",
      "OWASP ZAP",
      "Nikto",
      "Kali Linux",
    ],
  },
  {
    title: "AI Integration",
    description: "Practical automation built around leading AI models.",
    skills: ["OpenAI API", "DALL·E", "Perplexity API", "Automation workflows"],
  },
] as const

export const experience = {
  role: "Full Stack Developer",
  company: "Blackacre",
  period: "Apr 2025 — Present",
  intro:
    "One role covering three areas: shipping secure web features, testing production applications for security issues, and keeping performance measurable. This is the work behind everything else on this site.",
  groups: [
    {
      title: "Development work",
      bullets: [
        "Developed and maintained secure, responsive web applications using Next.js, React, TypeScript, Tailwind CSS, Shadcn/UI and Firebase, with full CRUD functionality and reusable components.",
      ],
    },
    {
      title: "Security work",
      bullets: [
        "Ran security testing and vulnerability assessments using Burp Suite, OWASP ZAP, Nikto and Kali Linux.",
        "Identified Critical and High issues in production systems: forgeable sessions, broken access control, unauthenticated SSRF, fail-open webhooks, and related gaps — anonymized write-ups are on the Work page.",
        "Worked directly with developers to remediate findings, and verified that each fix actually closed the issue.",
      ],
    },
    {
      title: "Performance, testing & analytics work",
      bullets: [
        "Optimized performance, SEO, accessibility and Core Web Vitals, achieving 90+ Lighthouse scores on desktop.",
        "Carried out live production testing: functional, UI/UX, cross-browser compatibility and performance.",
        "Set up Google Analytics and Google Tag Manager for performance monitoring and user-behaviour analysis.",
      ],
    },
  ],
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn/UI",
    "Firebase",
    "Burp Suite",
    "OWASP ZAP",
    "Nikto",
    "Kali Linux",
    "Google Analytics",
    "Google Tag Manager",
  ],
} as const

export type Severity = "Critical" | "High"

export const caseStudies = [
  {
    id: "forgeable-session",
    number: "01",
    title: "Privileged Session Trusted Without Cryptographic Verification",
    severity: "Critical" as Severity,
    issue:
      "During a security assessment of a production web application, privileged API routes treated a browser cookie as proof of identity after checking only that the token-shaped string had a future expiry. The cryptographic signature was never verified. Anyone who could set a cookie could present a fabricated identity.",
    impact:
      "Unauthenticated callers were treated as privileged users on every route that trusted that check. The same root cause unlocked downstream Critical paths — protected resource access, identity-token minting, and signed storage URLs — turning one auth mistake into a full trust-boundary failure.",
    resolution:
      "Recommended verifying tokens with a pinned algorithm on every privileged handler, rejecting altered cookies with HTTP 401, and never taking acting user identity from an unverified cookie. After remediation, the forgeable-session path was re-tested and confirmed closed.",
  },
  {
    id: "broken-access-control",
    number: "02",
    title: "Broken Access Control on Object-Level APIs",
    severity: "Critical" as Severity,
    issue:
      "Multiple record APIs filtered by object id alone and never confirmed that the target belonged to the caller’s account. List endpoints similarly omitted an ownership filter, so an authenticated user in one account could read or modify another account’s records.",
    impact:
      "Cross-account data exposure and unauthorized modification — the exact failure mode shared applications exist to prevent. Records marked inactive or archived were also still readable and mutable in some paths.",
    resolution:
      "Worked with the team to require ownership-scoped queries on every read and write, bind creates to the authenticated account, and exclude inactive records from mutable paths. Re-tested with two-account replay of the original object ids to confirm isolation held.",
  },
  {
    id: "unauth-ssrf",
    number: "03",
    title: "Unauthenticated Server-Side Request Forgery",
    severity: "Critical" as Severity,
    issue:
      "A public API route accepted an arbitrary URL and caused the server to fetch it. The path was not covered by authentication middleware and did not restrict destinations to an allow-list.",
    impact:
      "Attackers on the public internet could coerce the server into requesting internal hosts or cloud metadata endpoints, enabling internal recon and potential credential or service exposure from the application’s network position.",
    resolution:
      "Recommended requiring a verified session, allow-listing only intended feed destinations, blocking private and link-local ranges, and avoiding detailed fetch-error echo. Re-tested to confirm unauthorized and private-target requests were rejected.",
  },
  {
    id: "fail-open-webhook",
    number: "04",
    title: "Fail-Open Webhook Authentication on Integration Callbacks",
    severity: "Critical" as Severity,
    issue:
      "Inbound integration callbacks (worker writebacks and similar webhook handlers) used a pattern that only rejected requests when a shared secret was both configured and mismatched. When the secret was missing or unset, authentication was effectively disabled and unauthenticated writes were accepted.",
    impact:
      "Strangers could inject or update records through integration callbacks — damaging data integrity even when classic login remained intact. Misconfigured environments became an open write surface.",
    resolution:
      "Recommended failing closed at boot if secrets are absent, using a single secret name with constant-time comparison, and shared middleware on every callback. Re-tested with missing and wrong secrets to confirm writes were refused.",
  },
  {
    id: "stored-xss-session",
    number: "05",
    title: "Stored XSS with Report-Only Content Security Policy",
    severity: "Critical" as Severity,
    issue:
      "A rich-text / user-content renderer inserted unsanitized input into an HTML attribute on a code path that bypassed the usual sanitizer. Content Security Policy for scripts was report-only / overly permissive, so the browser did not block execution.",
    impact:
      "Script ran in the context of every viewer of the poisoned content. Combined with session-bearing requests from the same origin, this enabled session abuse and further actions as the victim user.",
    resolution:
      "Recommended escaping all dynamic captures, routing rich text through a single sanitizer, and enforcing CSP with nonces instead of report-only mode. Verified the original injection no longer executed after the fix.",
  },
] as const

export const research = {
  title: "AI-Powered Content Automation System",
  status: "Paper in preparation",
  description:
    "An automated content generation system that uses AI models — OpenAI, DALL·E and Perplexity — to identify trending topics, generate articles, and produce matching realistic images.",
  focus: [
    "AI model integration",
    "Automation workflows",
    "Content dissemination strategies",
  ],
  models: ["OpenAI", "DALL·E", "Perplexity"],
} as const

export const education = [
  {
    degree: "BS Information Technology",
    institution: "University of Malakand",
    location: "Lower Dir, Khyber Pakhtunkhwa, Pakistan",
    period: "Oct 2021 — Jul 2025",
    result: "CGPA 3.58 / 4.00",
    note: "EQF Level 6",
  },
  {
    degree: "HSSC",
    institution: "Swat Education Academy, Barikot",
    location: "Khyber Pakhtunkhwa, Pakistan",
    period: "2021",
    result: "898 / 1100 — 81%",
    note: null,
  },
  {
    degree: "SSC",
    institution: "Khyber Education Academy, Barikot",
    location: "Khyber Pakhtunkhwa, Pakistan",
    period: "2019",
    result: "881 / 1100 — 80%",
    note: null,
  },
] as const

export const certifications = [
  {
    name: "Foundations of Cybersecurity",
    issuer: "Coursera",
  },
  {
    name: "API Penetration Testing",
    issuer: "APISEC University",
  },
  {
    name: "Ultimate Bug Bounty",
    issuer: "Udemy",
  },
  {
    name: "Kali Linux 101",
    issuer: "TCM Security",
  },
] as const

export const workshops = [
  {
    title: "AI & Robotics Workshop",
    venue: "University of Malakand",
    date: "Apr 2023",
  },
  {
    title: "Internet of Things (IoT) Workshop",
    venue: "University of Malakand",
    date: "Jul 2023",
  },
  {
    title: "Cybersecurity Awareness Seminar",
    venue: "University of Malakand",
    date: "Apr 2024",
  },
] as const

export const socialLinks = [
  { label: "GitHub", href: site.github, handle: "khan1git", icon: "github" },
  {
    label: "LinkedIn",
    href: site.linkedin,
    handle: "arif-rahman",
    icon: "linkedin",
  },
  {
    label: "Upwork",
    href: site.upwork,
    handle: "Profile coming soon",
    icon: "briefcase",
  },
] as const
