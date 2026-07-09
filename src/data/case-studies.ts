// export interface CaseStudy {
//   id: string;
//   client: string;
//   title: string;
//   industry: string;
//   services: string[];
//   challenge: string;
//   solution: string;
//   technologies: string[];
//   impact: string[];
// }

// export const caseStudies: CaseStudy[] = [
//   {
//     id: "tap1ce",
//     client: "Tap1ce",
//     title: "Building a Modern Digital Networking Ecosystem",
//     industry: "SaaS / Networking Technology",
//     services: [
//       "Product Strategy",
//       "UI/UX Design",
//       "Full-Stack Development",
//       "Dashboard Development",
//       "API Integration",
//       "Cloud Infrastructure",
//     ],
//     challenge:
//       "Tap1ce wanted to redefine professional networking by replacing traditional paper business cards with a modern digital identity platform supporting NFC, QR codes, enterprise solutions, and large-scale user growth without requiring an app download.",
//     solution:
//       "Solvifytech engineered a complete digital networking ecosystem that enables professionals and businesses to create, manage, and share their digital identity instantly, featuring a custom profile builder and a corporate dashboard.",
//     technologies: [
//       "React.js",
//       "Next.js",
//       "TypeScript",
//       "Node.js",
//       "PostgreSQL",
//       "AWS",
//     ],
//     impact: [
//       "Created a scalable digital networking platform.",
//       "Enabled instant profile sharing through NFC and QR technology.",
//       "Delivered an enterprise-ready platform for individuals and businesses.",
//     ],
//   },
//   {
//     id: "wines-of-nz",
//     client: "Wines of NZ",
//     title: "Building a Controlled Multi-Vendor Commerce Platform on Shopify",
//     industry: "Wine & Beverage eCommerce",
//     services: [
//       "Shopify Development",
//       "Custom Portal Development",
//       "System Architecture",
//       "API Integrations",
//       "Operations Automation",
//     ],
//     challenge:
//       "Traditional multi-vendor Shopify setups created operational challenges, inconsistent product information, and inaccurate inventory. The business needed a system giving vendors operational freedom while maintaining centralized control.",
//     solution:
//       "Instead of giving vendors direct access to Shopify, Solvifytech designed and developed a custom vendor management layer on top of Shopify. Operations are managed through a dedicated portal while Shopify acts as the execution engine.",
//     technologies: ["React.js", "Next.js", "Node.js", "PostgreSQL", "Shopify API", "AWS"],
//     impact: [
//       "Vendors can manage operations without accessing Shopify.",
//       "Product and inventory data remain consistent.",
//       "Order processing became structured and predictable.",
//     ],
//   },
//   {
//     id: "collective-creative-labs",
//     client: "Collective Creative Labs",
//     title: "Building a Scalable Digital Ecosystem for a Fast-Growing Creative Agency",
//     industry: "Creative & Marketing Agency",
//     services: [
//       "Product Engineering",
//       "Website Development",
//       "CMS Development",
//       "IT Consulting",
//       "Hosting & Maintenance",
//     ],
//     challenge:
//       "Collective Creative Labs was rapidly expanding its portfolio. Their existing technology setup made it difficult to manage content, launch new pages quickly, and scale their online operations.",
//     solution:
//       "Solvifytech built a Headless CMS Architecture, enabling their team to manage content independently while delivering a fast and premium frontend experience, paired with ongoing technology support.",
//     technologies: [
//       "Next.js",
//       "React.js",
//       "TypeScript",
//       "WordPress REST API",
//       "Cloud Hosting",
//     ],
//     impact: [
//       "Faster content publishing and management.",
//       "Improved website performance and SEO.",
//       "Reduced dependency on technical resources.",
//     ],
//   },
//   {
//     id: "tata-play-fiber",
//     client: "Tata Play Fiber",
//     title: "Delivering a Custom Enterprise Digital Profile Experience",
//     industry: "Telecommunications",
//     services: [
//       "Custom Development",
//       "UI/UX Engineering",
//       "Enterprise Solutions",
//       "Platform Customization",
//     ],
//     challenge:
//       "Tap1ce was engaged by Tata Play Fiber to deliver a branded digital profile experience that required a completely custom theme, brand-specific UX, and custom data architecture without affecting the core Tap1ce platform.",
//     solution:
//       "Solvifytech partnered with Tap1ce to design and develop a flexible enterprise profile framework on top of the existing platform. We engineered a scalable architecture that could support enterprise-specific branding.",
//     technologies: ["React.js", "Next.js", "Node.js", "REST APIs", "Custom Theme Engine"],
//     impact: [
//       "Delivered a fully customized digital profile experience.",
//       "Enabled enterprise-specific branding without modifying the core platform.",
//       "Built a reusable framework for future enterprise implementations.",
//     ],
//   },
//   {
//     id: "marriott",
//     client: "Marriott",
//     title: "Custom Digital Profile Theme with SSO-Based Portal Access",
//     industry: "Hospitality",
//     services: [
//       "Custom Theme Development",
//       "SSO Integration",
//       "Portal Development",
//       "Enterprise Profile Customization",
//     ],
//     challenge:
//       "Marriott required a custom digital profile experience that matched their brand and internal workflow, specifically needing a single secure login that gave users access to both their account and their custom Tap1ce profile dashboard.",
//     solution:
//       "Solvifytech developed a custom Marriott theme and integrated an SSO-based login flow. Once a Marriott user logs into their account, they are automatically authenticated into their dashboard.",
//     technologies: ["React.js", "Next.js", "Node.js", "SSO Authentication", "JWT"],
//     impact: [
//       "Marriott received a custom-branded digital profile system.",
//       "Users can access their dashboard through one secure login.",
//       "Tap1ce became more enterprise-ready for large hospitality clients.",
//     ],
//   },
//   {
//     id: "hire-global-talent",
//     client: "Hire Global Talent",
//     title: "Building a Complete Hiring Portal for Employers, Candidates & Admin Teams",
//     industry: "Recruitment / Staffing",
//     services: [
//       "Hiring Portal Development",
//       "Admin Panel",
//       "Employer Portal",
//       "Candidate Portal",
//       "Workflow Automation",
//     ],
//     challenge:
//       "Hire Global Talent needed a complete hiring platform where employers, candidates, and the internal admin team could manage the full recruitment workflow in one place, replacing manual coordination with a digital system.",
//     solution:
//       "Solvifytech designed and developed a custom hiring portal with three major user roles (Admin Panel, Employer Portal, and Candidate Portal) establishing a structured, role-based workflow.",
//     technologies: ["React.js", "Next.js", "Node.js", "REST APIs", "Role-Based Access Control"],
//     impact: [
//       "Centralized hiring operations.",
//       "Faster application management.",
//       "Scalable platform for recruitment growth.",
//     ],
//   },
//   {
//     id: "doccure",
//     client: "DOCCURE",
//     title: "Building India's Dermatology-First Practice Management Platform",
//     industry: "Healthcare SaaS",
//     services: [
//       "Product Strategy",
//       "SaaS Development",
//       "UI/UX Design",
//       "Web Application Development",
//       "Mobile Applications",
//     ],
//     challenge:
//       "Most clinic software is built for general healthcare, ignoring unique workflows of dermatologists and aesthetic clinics. DOCCURE needed a modern, all-in-one platform handling complex dermatology operations like clinical photography.",
//     solution:
//       "Solvifytech built an end-to-end practice management platform tailored for dermatology clinics, featuring EMR, clinical photography management, prescription management, and multi-branch management.",
//     technologies: [
//       "React.js",
//       "Next.js",
//       "Node.js",
//       "PostgreSQL",
//       "AWS",
//       "WhatsApp API",
//     ],
//     impact: [
//       "Built India's first dermatology-first practice management platform.",
//       "Centralized clinic operations into one system.",
//       "Enabled secure management of clinical photographs and patient records.",
//     ],
//   },
// ];
