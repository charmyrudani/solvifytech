import dev1 from '/images/hero-section/dev1.png'
import dev2 from '/images/hero-section/dev2.png'
import dev3 from '/images/hero-section/dev3.png'
import dev4 from '/images/hero-section/dev4.png'
import dev5 from '/images/hero-section/dev5.png'
import bbva from '/images/hero-section/bbva.svg'
import johnson from '/images/hero-section/johnson.svg'
import adobe from '/images/hero-section/adobe.svg'
import siriusxm from '/images/hero-section/siriusxm.svg'
import motorolla from '/images/hero-section/motorolla.svg'
import industryImage from "/images/services/industry.png"
import aiService from '/images/services/ai-service.png';

const typescript = {
  slug: "typescript-development",

  hero: {
    serviceName: "TypeScript",
    tagline: "TYPESCRIPT DEVELOPMENT SERVICES",
    title: "Build highly robust, scalable, and maintainable applications with TypeScript.",
    description: "Our TypeScript development services provide type-safe, enterprise-grade solutions across both frontend and backend systems. By adding static typing to JavaScript, we drastically reduce runtime errors, improve developer productivity, and ensure your codebase is ready to scale gracefully over time.",
  },

  serviceOverview: {
    tag: "TYPESCRIPT DEVELOPMENT SERVICES",
    title: "Elevate your JavaScript architecture with strong typing.",
    description: "At Solvifytech, we leverage TypeScript to construct complex applications that require long-term maintainability. Whether migrating a sprawling legacy JavaScript codebase or starting a greenfield enterprise project, our experts deliver clean, self-documenting, and robust code.",
    image: aiService,
    services: [
      {
            title: "TypeScript Web Development",
            description: "Develop robust frontend applications using TypeScript in combination with React, Vue, or Angular for reliable user interfaces."
      },
      {
            title: "Node.js with TypeScript",
            description: "Build secure and scalable backend APIs and microservices using TypeScript with Express, NestJS, or Fastify."
      },
      {
            title: "JavaScript to TypeScript Migration",
            description: "Systematically migrate existing vanilla JS projects to TypeScript, adding types incrementally without disrupting feature delivery."
      },
      {
            title: "Custom Type Definitions",
            description: "Create precise, custom type definitions and complex generics for your internal libraries and data models."
      },
      {
            title: "Monorepo Architecture",
            description: "Setup and manage scalable monorepos using Turborepo or Nx, utilizing shared TypeScript types across frontend and backend."
      },
      {
            title: "Strict Mode Audits",
            description: "Audit existing TypeScript codebases to enforce strict typing rules, eliminating 'any' types and preventing hidden bugs."
      },
      {
            title: "Library Development",
            description: "Author open-source or internal npm packages with full TypeScript support and auto-generated documentation."
      }
]
  },

  developmentTeam: {
    tag: "OUR TYPESCRIPT EXPERTS",
    title: "Meet the engineers obsessed with type safety.",
    description: "Our TypeScript specialists are experts in advanced type manipulation, compiler configurations, and clean architecture, ensuring your application is reliable from compile-time to run-time.",
    engineers: [
      {
        role: "Lead TypeScript Architect",
        name: "Daniel R.",
        experience: "10 years of experience",
        image: dev1,
        company: bbva,
        technologies: ["TypeScript","Node.js","NestJS","React"],
        certifications: ["Microsoft Certified: JavaScript Developer"],
      },
      {
        role: "Migration Specialist",
        name: "Carlos M.",
        experience: "8 years of experience",
        image: dev2,
        company: johnson,
        technologies: ["TypeScript","JavaScript","Babel","Webpack"],
        certifications: ["AWS Certified Developer"],
      },
      {
        role: "Backend TS Engineer",
        name: "Sophia L.",
        experience: "9 years of experience",
        image: dev3,
        company: adobe,
        technologies: ["TypeScript","GraphQL","Prisma","PostgreSQL"],
        certifications: ["GraphQL Developer Certification"],
      },
      {
        role: "Frontend Type Expert",
        name: "Michael T.",
        experience: "7 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: ["TypeScript","React","Zod","Redux Toolkit"],
        certifications: ["React Native Certified Developer"],
      },
      {
        role: "Tooling & CI/CD Engineer",
        name: "Emma K.",
        experience: "11 years of experience",
        image: dev5,
        company: motorolla,
        technologies: ["TypeScript","ESLint","Turborepo","GitHub Actions"],
        certifications: ["Certified Kubernetes Administrator"],
      }
    ]
  },
  
  industriesSolutions: {
    tag: "TYPESCRIPT ACROSS INDUSTRIES",
    title: "Robust applications for mission-critical industries.",
    description: "When an application cannot afford to fail silently, TypeScript provides the necessary safety nets for complex business logic across all sectors.",
    industries: [
      {
            title: "Finance & Fintech",
            description: "Ensure precision in financial calculations and data handling.",
            solutions: [
                  "Type-safe Trading Platforms",
                  "Secure Banking APIs",
                  "Strict Data Validation Models",
                  "Cryptocurrency Exchanges"
            ],
      image: industryImage,
      },
      {
            title: "Healthcare",
            description: "Manage complex medical data structures reliably.",
            solutions: [
                  "HIPAA-compliant EHR Systems",
                  "Telemedicine Portals",
                  "Medical Device Interfaces",
                  "Type-safe HL7 Parsers"
            ],
      image: industryImage,
      },
      {
            title: "Enterprise SaaS",
            description: "Build maintainable software that scales with growing teams.",
            solutions: [
                  "Multi-tenant Dashboards",
                  "Complex Access Control Systems",
                  "Shared Monorepo Types",
                  "Extensible Plugin Architectures"
            ],
      image: industryImage,
      },
      {
            title: "eCommerce",
            description: "Handle complex product catalogs and checkout flows safely.",
            solutions: [
                  "Type-safe Checkout Pipelines",
                  "Inventory Management Systems",
                  "Headless Commerce Frontends",
                  "Payment Gateway Integrations"
            ],
      image: industryImage,
      },
      {
            title: "Logistics",
            description: "Manage intricate state machines for routing and tracking.",
            solutions: [
                  "Real-time Tracking Dashboards",
                  "Route Optimization APIs",
                  "Supply Chain Management Tools",
                  "Warehouse Inventory Systems"
            ],
      image: industryImage,
      },
      {
            title: "Education",
            description: "Deliver reliable learning platforms for massive user bases.",
            solutions: [
                  "LMS Portals",
                  "Real-time Collaboration Tools",
                  "Assessment Grading Systems",
                  "Student Analytics Dashboards"
            ],
      image: industryImage,
      }
]
  },

  capabilities: {
    label: "TYPESCRIPT CAPABILITIES",
    title: "The tools we use to master TypeScript.",
    description: "We utilize advanced type checking, runtime validation, and modern build tools to get the most out of the TypeScript ecosystem.",
    capabilities: [
      {
            title: "Validation & Schemas",
            description: "Ensure runtime data matches compile-time types.",
            tools: [
                  {
                        name: "Zod",
                        logo: "/images/tool-tech/zod.svg"
                  },
                  {
                        name: "Yup",
                        logo: "/images/tool-tech/yup.svg"
                  },
                  {
                        name: "Joi",
                        logo: "/images/tool-tech/joi.svg"
                  }
            ]
      },
      {
            title: "Backend Frameworks",
            description: "Build type-safe servers.",
            tools: [
                  {
                        name: "NestJS",
                        logo: "/images/tool-tech/nestjs.svg"
                  },
                  {
                        name: "Express (with TS)",
                        logo: "/images/tool-tech/express.svg"
                  },
                  {
                        name: "tRPC",
                        logo: "/images/tool-tech/trpc.svg"
                  }
            ]
      },
      {
            title: "Build Tools & Bundlers",
            description: "Compile TypeScript blazingly fast.",
            tools: [
                  {
                        name: "Vite",
                        logo: "/images/tool-tech/vite.svg"
                  },
                  {
                        name: "esbuild",
                        logo: "/images/tool-tech/esbuild.svg"
                  },
                  {
                        name: "tsc",
                        logo: "/images/tool-tech/typescript.svg"
                  }
            ]
      },
      {
            title: "Testing",
            description: "Test type-safe code thoroughly.",
            tools: [
                  {
                        name: "Jest",
                        logo: "/images/tool-tech/jest.svg"
                  },
                  {
                        name: "Vitest",
                        logo: "/images/tool-tech/vitest.svg"
                  },
                  {
                        name: "Playwright",
                        logo: "/images/tool-tech/playwright.svg"
                  }
            ]
      }
]
  },
};

export default typescript;
