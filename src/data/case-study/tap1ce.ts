export const tap1ce = {
  title: "Tap1ce",
  subtitle: "Building a Modern Digital Networking Ecosystem",
  industry: "SaaS / Networking Technology",
  services: [
    "Product Strategy",
    "UI/UX Design",
    "Full-Stack Development",
    "Dashboard Development",
    "API Integration",
    "Cloud Infrastructure",
  ],

  challenge: {
    description:
      "Tap1ce wanted to redefine professional networking by replacing traditional paper business cards with a modern digital identity platform.",
    requirements: [
      "Digital business cards",
      "Multiple user profiles",
      "NFC-powered sharing",
      "QR code sharing",
      "Lead management",
      "Enterprise solutions",
      "Highly customizable profiles",
      "Large-scale user growth",
    ],
    additionalNote:
      "Additionally, the system had to deliver a seamless experience across mobile and desktop without requiring users to download an application.",
  },

  solution: {
    description:
      "Solvifytech engineered a complete digital networking ecosystem that enables professionals and businesses to create, manage, and share their digital identity instantly.",
    whatWeBuilt: [
      "Digital Profile Management",
      "NFC Business Card Platform",
      "QR-Based Contact Sharing",
      "Multi-Profile Management System",
      "Lead Capture & Contact Management",
      "Custom Profile Builder",
      "Corporate Dashboard",
      "Analytics & Engagement Tracking",
      "40+ Third-Party Integrations",
      "Responsive Web Application",
    ],
  },

  technologies: {
    frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    database: ["PostgreSQL", "Redis"],
    infrastructure: ["AWS", "Docker", "Cloudflare"],
    integrations: [
      "Google Maps",
      "Social Platforms",
      "CRM Integrations",
      "Analytics Tools",
      "NFC & QR Technologies",
    ],
  },

  outcome: {
    businessImpact: [
      "Created a scalable digital networking platform.",
      "Enabled instant profile sharing through NFC and QR technology.",
      "Eliminated dependency on traditional paper business cards.",
      "Built a highly customizable profile ecosystem.",
      "Delivered an enterprise-ready platform for individuals and businesses.",
      "Supported seamless networking and lead generation.",
    ],
  },

  keyFeatures: [
    {
      feature: "Digital Profiles",
      description: "Create fully customizable professional profiles",
    },
    {
      feature: "NFC Sharing",
      description: "Share details instantly with one tap",
    },
    {
      feature: "QR Sharing",
      description: "Access profiles via QR code",
    },
    {
      feature: "Multiple Profiles",
      description: "Personal and business identities under one account",
    },
    {
      feature: "Lead Management",
      description: "Save and manage contacts",
    },
    {
      feature: "Corporate Solutions",
      description: "Team and enterprise management",
    },
    {
      feature: "Analytics",
      description: "Track engagement and profile interactions",
    },
  ],

  heroNumbers: [
    { value: "40+", label: "Integrations" },
    { value: "1", label: "Platform for Digital Networking" },
    { value: "100%", label: "Web-Based Experience" },
    { value: "Multi", label: "Profile Management System" },
  ],

  cta: {
    heading: "Ready to Build the Next Digital Product?",
    description:
      "From SaaS platforms and client portals to AI-powered applications, Solvifytech helps businesses turn ideas into scalable digital products.",
    buttonText: "Let's Build Together",
  },
} as const;

export type Tap1ce = typeof tap1ce;
