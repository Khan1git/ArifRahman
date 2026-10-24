export const site = {
  name: "Arif Rahman",
  role: "Full Stack Developer & Web Security Researcher",
  location: "Swat, Khyber Pakhtunkhwa, Pakistan",
  email: "arifrahman1k7@gmail.com",
  url: "https://arif-rahman.vercel.app",
  github: "https://github.com/khan1git",
  linkedin: "https://www.linkedin.com/in/arif-rahman-84b1a2262",
  upwork: "#",
  resume: "#",
  tagline:
    "I build modern web applications — and test them the way an attacker would.",
  description:
    "Arif Rahman is a full stack developer and web security researcher based in Swat, Pakistan. He builds modern web applications with Next.js, React and TypeScript, and tests them the way an attacker would.",
}

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
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
    value: "1+",
    label: "Years in production",
    detail: "Full stack development at Blackacre since April 2025.",
  },
  {
    value: "90+",
    label: "Lighthouse desktop score",
    detail: "Achieved on shipped production work across performance, SEO and accessibility.",
  },
  {
    value: "4",
    label: "Security certifications",
    detail: "Coursera, APISEC University, Udemy and TCM Security.",
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
      "Broken access control and privilege escalation paths",
      "Injection testing — XSS, SQL injection and related classes",
      "SSRF, path traversal and unsafe file handling",
      "Business logic flaws and race conditions",
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

export const processSteps = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "A free 15-minute call to understand your application, your stack and what you need tested.",
  },
  {
    number: "02",
    title: "Scope & written authorization",
    description:
      "Before any testing begins, the target, timing and rules of engagement are agreed in writing.",
  },
  {
    number: "03",
    title: "Testing",
    description:
      "Manual testing first, tools second. Every potential finding is verified before it goes into the report.",
  },
  {
    number: "04",
    title: "Reporting",
    description:
      "Each confirmed finding is rated by severity with clear impact, evidence and a practical fix.",
  },
  {
    number: "05",
    title: "Fix verification",
    description:
      "After your fixes ship, each reported issue is re-tested and confirmed closed.",
  },
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
      "XSS",
      "SQL Injection",
      "CSRF",
      "SSRF",
      "Path Traversal",
      "RCE",
      "Privilege Escalation",
      "Race Conditions",
      "Broken Access Control",
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
        "Identified and documented real production vulnerabilities — the anonymized write-ups are on the Work page.",
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
    id: "rce",
    number: "01",
    title: "Remote Code Execution via Unsafe File Handling",
    severity: "Critical" as Severity,
    issue:
      "During a security assessment of a production web application, a file-handling feature was found to accept and process user-supplied files without sufficient validation of file type and content.",
    impact:
      "If exploited, this could have allowed an attacker to execute arbitrary code on the server, potentially gaining full control of the application and access to any data it stored.",
    resolution:
      "Worked with the development team to implement strict file type validation, content verification, and isolated storage for uploaded files outside any directory capable of executing code. The fix was manually re-tested and confirmed to fully resolve the issue.",
  },
  {
    id: "ssrf",
    number: "02",
    title: "Server-Side Request Forgery in an Internal Request Feature",
    severity: "High" as Severity,
    issue:
      "A feature that allowed the application to fetch content from a user-supplied URL did not restrict which destinations the server was allowed to reach.",
    impact:
      "This could have let an attacker force the server to make requests to internal systems that were never meant to be publicly reachable, potentially exposing internal services or cloud metadata.",
    resolution:
      "Recommended and verified a fix that restricted outbound requests to an approved allow-list of destinations and blocked requests to internal/private IP ranges. Re-tested after the fix to confirm the restriction held under multiple bypass attempts.",
  },
  {
    id: "path-traversal",
    number: "03",
    title: "Path Traversal in a File Access Feature",
    severity: "High" as Severity,
    issue:
      "A file-retrieval feature accepted a file path or filename directly from user input without properly restricting it to an intended directory.",
    impact:
      "An attacker could potentially manipulate the input to access files outside the intended folder, including sensitive configuration or system files.",
    resolution:
      "Worked with the team to implement proper input sanitization and enforce that all file access resolved strictly within an allowed directory, regardless of the input provided. Verified the fix through manual re-testing.",
  },
  {
    id: "payment-bypass",
    number: "04",
    title: "Subscription Tier Bypass via Request Manipulation",
    severity: "High" as Severity,
    issue:
      "The application's premium features were gated on the client side and verified with a request parameter that was not properly re-validated on the server for every protected action.",
    impact:
      "A user on a free or lower-tier plan could potentially access paid features without a valid subscription, directly affecting revenue and the integrity of the subscription model.",
    resolution:
      "Recommended moving all entitlement checks to be enforced server-side on every protected request, rather than trusting client-supplied state. Verified the fix by attempting the bypass again post-remediation and confirming it was no longer possible.",
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
