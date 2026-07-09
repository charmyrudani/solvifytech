import ccl from '/images/our-work/ccl.webp'

export const collectiveCreativeLabs = {
  title: "Collective Creative Labs",
  image: ccl,
  subtitle:
    "Building a Scalable Digital Ecosystem for a Fast-Growing Creative Agency",
  industry: "Creative & Marketing Agency",
  services: [
    "Product Engineering",
    "Website Development",
    "CMS Development",
    "IT Consulting",
    "Hosting & Maintenance",
    "Performance Optimization",
  ],

  challenge: {
    description:
      "Collective Creative Labs was rapidly expanding its portfolio, campaigns, and digital presence. Their existing technology setup made it difficult to manage content, launch new pages quickly, and scale their online operations.",
    coreNeed:
      "The team needed more than just a website—they needed a reliable technology partner that could support their entire digital infrastructure and continuously evolve alongside their business.",
    keyProblems: [
      "Slow content publishing process",
      "Difficulty managing growing website content",
      "Need for highly dynamic landing pages",
      "Performance and SEO requirements",
      "Managing multiple campaigns and portfolio pages",
      "Lack of a scalable technology architecture",
      "Ongoing technical support requirements",
    ],
  },

  solution: {
    description:
      "Solvifytech partnered with Collective Creative Labs to design and develop a scalable digital ecosystem that goes far beyond a standard corporate website.",
    approach:
      "We built a Headless CMS Architecture, enabling their team to manage content independently while delivering a fast and premium frontend experience. In addition to the website, we continue to support the company by developing new pages, improving user experiences, optimizing performance, and solving ongoing technology challenges.",
    whatWeDelivered: [
      "Corporate Website Development",
      "Headless CMS Architecture",
      "Dynamic Campaign Pages",
      "Portfolio Management System",
      "Blog & Content Management",
      "Custom Landing Pages",
      "Team & Director Pages",
      "Contact & Lead Generation Forms",
      "SEO Optimization",
      "Performance Optimization",
      "Hosting & Infrastructure Support",
      "Continuous Feature Development",
      "Ongoing Technical Consultation",
    ],
  },

  technologies: {
    frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    backendAndCMS: ["WordPress", "WordPress REST API"],
    infrastructure: ["Cloud Hosting", "CDN Integration", "Performance Monitoring"],
    additionalServices: [
      "Technical Consulting",
      "Maintenance & Support",
      "SEO Optimization",
    ],
  },

  outcome: {
    description:
      "By partnering with Solvifytech, Collective Creative Labs now has a scalable digital platform that can continuously grow with the business.",
    businessImpact: [
      "Faster content publishing and management.",
      "Ability to launch new pages and campaigns quickly.",
      "Improved website performance and SEO.",
      "Flexible architecture for future expansion.",
      "Reduced dependency on technical resources.",
      "Dedicated technology partner for ongoing innovation and support.",
    ],
  },

  ongoingPartnership: {
    description:
      "Today, Solvifytech continues to work closely with Collective Creative Labs, helping them:",
    activities: [
      "Build new website sections and landing pages",
      "Implement new features",
      "Improve website performance",
      "Solve technical challenges",
      "Scale their digital infrastructure",
      "Support long-term business growth",
    ],
  },
} as const;

export type collectiveCreativeLabs = typeof collectiveCreativeLabs;
