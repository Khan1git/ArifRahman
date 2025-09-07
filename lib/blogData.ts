export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "advanced-sql-injection-techniques-2024",
    title: "Advanced SQL Injection Techniques in 2024",
    excerpt:
      "Exploring modern SQL injection vectors, bypass techniques, and comprehensive prevention strategies for web applications in the current threat landscape.",
    content: `
      <h2>Introduction</h2><br/>
<p>
React is one of the most widely used frontend frameworks for building dynamic and interactive user interfaces.
However, while developers often focus on performance and user experience, security considerations are sometimes overlooked.
Neglecting security can lead to serious vulnerabilities, such as data leaks and compromised applications.
</p><br/>

<h2>Key Security Risks in React Applications</h2><br/>
<p>
When building React applications, developers must be aware of the common security risks that can affect their projects:
</p>
<ul>
  <li><strong>Cross-Site Scripting (XSS):</strong> Occurs when untrusted data is injected into the DOM, allowing attackers to execute malicious scripts.</li>
  <li><strong>Unsafe State Management:</strong> Storing sensitive data like tokens or passwords in client-side state or localStorage can expose them to attackers.</li>
  <li><strong>Exposed API Keys:</strong> Hardcoding API keys in the frontend can lead to unauthorized access to backend services.</li>
</ul><br/>

<h2>How to Secure Your React Application</h2>
<p>
To safeguard your React app, follow these best practices:
</p><br/>
<ul>
  <li><strong>Sanitize all user inputs:</strong> Use libraries like <code>DOMPurify</code> to clean data before rendering it in the DOM.</li>
  <li><strong>Avoid dangerouslySetInnerHTML:</strong> This method bypasses React’s built-in XSS protection and should be avoided whenever possible.</li>
  <li><strong>Use Environment Variables:</strong> Store API keys and sensitive information in environment variables, never in the frontend code.</li>
  <li><strong>Implement CSP (Content Security Policy):</strong> Prevents the execution of malicious scripts by restricting allowed sources.</li>
  <li><strong>Use HTTPS:</strong> Ensure all network requests and API communications are encrypted.</li>
</ul><br/>

<h2>Conclusion</h2>
<p>
Securing a React application requires a proactive approach. By implementing proper sanitization, avoiding risky practices, and protecting sensitive data,
developers can create robust applications that safeguard user data and maintain trust.
</p>

    `,
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Security",
    tags: ["SQL Injection", "Web Security", "OWASP", "Penetration Testing"],
    author: {
      name: "Arif Rahman",
      role: "Cybersecurity Enthusiast",
      avatar: "/images/authors/arif.jpg",
    },
    featured: true,
  },
  {
    slug: "building-secure-react-applications",
    title: "Building Secure React Applications: A Complete Guide",
    excerpt:
      "Best practices for implementing security in React applications, covering XSS prevention, secure authentication, and data protection strategies.",
    content: `
    <h2>Introduction</h2><br/>
    <p>
      React is one of the most popular libraries for building modern web applications due to its flexibility and efficiency.
      However, security is often an afterthought, leaving applications vulnerable to attacks such as XSS, data leaks, and token theft.
      This guide will help you implement best practices to secure your React apps in 2024 and beyond.
    </p><br/>

    <h2>Common Security Risks in React Applications</h2><br/>
    <p>
      Understanding potential threats is the first step toward building secure applications. Here are some common risks:
    </p>
    <ul>
      <li><strong>Cross-Site Scripting (XSS):</strong> Injecting malicious scripts into the DOM via untrusted data.</li>
      <li><strong>Hardcoded Secrets:</strong> Storing API keys and tokens in client-side code makes them easy targets.</li>
      <li><strong>Insecure Authentication:</strong> Weak authentication mechanisms can allow unauthorized access.</li>
      <li><strong>Improper Token Storage:</strong> Storing JWT tokens in localStorage exposes them to XSS attacks.</li>
    </ul><br/>

    <h2>Best Practices for Securing React Apps</h2><br/>
    <ul>
      <li><strong>Sanitize User Input:</strong> Use libraries like <code>DOMPurify</code> to clean dynamic HTML content before rendering.</li>
      <li><strong>Avoid dangerouslySetInnerHTML:</strong> This method disables React's XSS protection and should only be used when absolutely necessary.</li>
      <li><strong>Use Environment Variables:</strong> Keep sensitive data out of your codebase by using environment variables for API keys.</li>
      <li><strong>Enable HTTPS:</strong> Always deploy your application over HTTPS to prevent man-in-the-middle attacks.</li>
      <li><strong>Implement CSP (Content Security Policy):</strong> Restrict scripts and resources to trusted sources only.</li>
      <li><strong>Use HttpOnly Cookies:</strong> Store authentication tokens in HttpOnly cookies instead of localStorage.</li>
    </ul><br/>

    <h2>Secure Authentication & Authorization</h2><br/>
    <p>
      Implement OAuth 2.0 or JWT-based authentication with refresh tokens. Always enforce role-based access control (RBAC) to protect sensitive routes.
    </p><br/>

    <h2>Conclusion</h2><br/>
    <p>
      Securing your React application is not a one-time task but an ongoing process. By applying these best practices,
      you can reduce security risks and build reliable applications that protect user data.
    </p><br/>
  `,
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Development",
    tags: ["React", "Security", "Frontend", "Authentication"],
    author: {
      name: "John Doe",
      role: "Full Stack Developer",
      avatar: "/images/authors/john.jpg",
    },
    featured: true,
  },
  {
    slug: "api-security-gateway-implementation",
    title: "API Security Gateway Implementation: A Complete Guide",
    excerpt:
      "Learn how to implement an API security gateway to protect your microservices architecture with authentication, rate limiting, and threat prevention strategies.",
    content: `
    <h2>Introduction</h2><br/>
    <p>
      APIs are the backbone of modern web applications and microservices architectures.
      However, unsecured APIs are a prime target for attackers, leading to data breaches and service disruptions.
      Implementing an API security gateway is essential to protect your services from common threats like API abuse, data leaks, and DDoS attacks.
    </p><br/>

    <h2>What is an API Gateway?</h2><br/>
    <p>
      An API gateway acts as a single entry point for client requests, routing them to the appropriate microservices.
      Besides routing, it adds security layers such as authentication, authorization, rate limiting, and logging.
    </p><br/>

    <h2>Key Security Features of an API Gateway</h2><br/>
    <ul>
      <li><strong>Authentication & Authorization:</strong> Validate user credentials using OAuth 2.0, JWT, or API keys.</li>
      <li><strong>Rate Limiting & Throttling:</strong> Prevent API abuse and brute-force attacks by controlling request frequency.</li>
      <li><strong>Data Encryption:</strong> Enforce HTTPS for secure data transmission.</li>
      <li><strong>Threat Detection:</strong> Block SQL injection, XSS, and API fuzzing attempts using WAF (Web Application Firewall) rules.</li>
      <li><strong>Logging & Monitoring:</strong> Track API activity to detect anomalies and potential attacks in real-time.</li>
    </ul><br/>

    <h2>Steps to Implement an API Security Gateway</h2><br/>
    <ol>
      <li><strong>Choose a Gateway:</strong> Popular options include <code>Kong</code>, <code>NGINX API Gateway</code>, and <code>Amazon API Gateway</code>.</li>
      <li><strong>Set Up Authentication:</strong> Integrate OAuth 2.0 or JWT for secure access control.</li>
      <li><strong>Enable Rate Limiting:</strong> Define request limits per user or IP to prevent abuse.</li>
      <li><strong>Configure HTTPS:</strong> Use SSL/TLS certificates for all API traffic.</li>
      <li><strong>Apply WAF Rules:</strong> Filter out malicious requests and block known attack patterns.</li>
      <li><strong>Enable Monitoring:</strong> Use tools like <code>Prometheus</code> and <code>Grafana</code> for real-time API analytics.</li>
    </ol><br/>

    <h2>Best Practices for API Security</h2><br/>
    <ul>
      <li>Always validate and sanitize inputs at both client and server ends.</li>
      <li>Rotate API keys and tokens regularly.</li>
      <li>Use short-lived tokens with refresh tokens for authentication.</li>
      <li>Implement IP whitelisting for sensitive APIs.</li>
      <li>Regularly audit your API endpoints for vulnerabilities.</li>
    </ul><br/>

    <h2>Conclusion</h2><br/>
    <p>
      Implementing an API security gateway is crucial for safeguarding APIs in today's threat landscape.
      By following these steps and best practices, you can significantly reduce security risks and ensure the integrity of your microservices architecture.
    </p><br/>

    <hr/>
  `,
    date: "2024-02-05",
    readTime: "10 min read",
    category: "Security",
    tags: ["API Security", "Gateway", "OAuth 2.0", "JWT", "Microservices"],
    author: {
      name: "Arif Rahman",
      role: "Cybersecurity Enthusiast",
      avatar: "/images/authors/arif.jpg",
    },
    featured: true,
  },
];
