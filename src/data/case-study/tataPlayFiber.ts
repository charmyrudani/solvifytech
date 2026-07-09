import tpf from '/images/our-work/tata-play-fiber.webp'

export const tataPlayFiber = {
  title: "Tata Play Fiber",
  image: tpf,
  subtitle: "Delivering a Custom Enterprise Digital Profile Experience",
  industry: "Telecommunications",
  client: "Tata Play Fiber",
  services: [
    "Custom Development",
    "UI/UX Engineering",
    "Enterprise Solutions",
    "Platform Customization",
  ],

  challenge: {
    description:
      "Tap1ce was engaged by Tata Play Fiber to deliver a branded digital profile experience that went beyond the platform's standard profile templates.",
    requirements: [
      "A completely custom profile theme",
      "Brand-specific design and user experience",
      "Custom data fields and information architecture",
      "Dedicated profile sections tailored to business needs",
      "A scalable solution that could support future enterprise requirements",
    ],
    constraint:
      "The challenge was to deliver these customizations without affecting the core Tap1ce platform or compromising scalability.",
  },

  solution: {
    description:
      "Solvifytech partnered with Tap1ce to design and develop a flexible enterprise profile framework on top of the existing platform.",
    approach:
      "Instead of creating a one-off implementation, we engineered a customizable architecture that could support enterprise-specific branding and data requirements.",
    whatWeBuilt: [
      "Custom branded profile theme",
      "Enterprise-specific profile layout",
      "Dynamic profile sections",
      "Custom data structure and fields",
      "Responsive user experience",
      "Backend configuration management",
      "Scalable customization framework",
      "Future-ready architecture for enterprise clients",
    ],
  },

  technologies: {
    frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "REST APIs", "Database Management"],
    platformEngineering: [
      "Custom Theme Engine",
      "Dynamic Content Architecture",
      "Enterprise Configuration Framework",
    ],
  },

  outcome: {
    businessImpact: [
      "Delivered a fully customized digital profile experience for Tata Play Fiber.",
      "Enabled enterprise-specific branding without modifying the core platform.",
      "Built a reusable framework for future enterprise implementations.",
      "Increased platform flexibility and scalability.",
      "Strengthened Tap1ce's ability to serve large enterprise customers with unique requirements.",
    ],
  },

  keyTakeaway:
    "What started as a digital profile customization became an enterprise-ready framework that allows Tap1ce to deliver tailored experiences for large organizations while keeping the core platform stable and scalable.",
} as const;

export type TataPlayFiber = typeof tataPlayFiber;
