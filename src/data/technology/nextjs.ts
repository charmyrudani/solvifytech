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

const nextjs = {
  slug: "nextjs-development",

  hero: {
    serviceName: "Next.js",
    tagline: "NEXT.JS DEVELOPMENT SERVICES",
    title: "Build blazingly fast, SEO-optimized web applications with Next.js.",
    description: "Our Next.js development services combine the power of React with server-side rendering (SSR) and static site generation (SSG). We build highly performant web applications that rank better on search engines, load instantly, and provide exceptional user experiences at global scale.",
  },

  serviceOverview: {
    tag: "NEXT.JS DEVELOPMENT SERVICES",
    title: "Deliver the ultimate web performance with hybrid rendering.",
    description: "At Solvifytech, we leverage the Next.js App Router and edge computing to build enterprise-grade applications. Whether you need a massive eCommerce site, a high-traffic media portal, or a secure SaaS dashboard, Next.js provides the perfect balance of performance and developer experience.",
    image: aiService,
    services: [
      {
            title: "Server-Side Rendered (SSR) Apps",
            description: "Develop applications that render on the server, providing faster initial page loads and superior SEO for dynamic content."
      },
      {
            title: "Static Site Generation (SSG)",
            description: "Build lightning-fast marketing sites and blogs that are pre-rendered at build time and served globally via CDN."
      },
      {
            title: "Headless Commerce Development",
            description: "Integrate Next.js with Shopify, Swell, or Commerce.js to create blazing-fast, custom eCommerce storefronts."
      },
      {
            title: "API Route Integration",
            description: "Build secure backend endpoints directly within your Next.js application using Server Actions and API routes."
      },
      {
            title: "Incremental Static Regeneration (ISR)",
            description: "Update static pages in the background without rebuilding the entire site, perfect for large-scale content sites."
      },
      {
            title: "Edge Computing & Middleware",
            description: "Implement personalized routing, A/B testing, and authentication at the edge for sub-millisecond response times."
      },
      {
            title: "Migration to Next.js App Router",
            description: "Upgrade your legacy React or Pages Router Next.js apps to the modern, highly optimized App Router architecture."
      }
]
  },

  developmentTeam: {
    tag: "OUR NEXT.JS EXPERTS",
    title: "Meet the engineers mastering full-stack React.",
    description: "Our Next.js specialists understand the nuances of server vs. client components, edge caching, and web vitals optimization to deliver the fastest possible applications.",
    engineers: [
      {
        role: "Next.js Architect",
        name: "Daniel R.",
        experience: "10 years of experience",
        image: dev1,
        company: bbva,
        technologies: ["Next.js","React Server Components","Vercel","TypeScript"],
        certifications: ["Vercel Certified Developer"],
      },
      {
        role: "SEO & Performance Specialist",
        name: "Carlos M.",
        experience: "8 years of experience",
        image: dev2,
        company: johnson,
        technologies: ["Next.js","Core Web Vitals","Lighthouse","Edge Runtime"],
        certifications: ["Google Analytics Certification"],
      },
      {
        role: "Headless Commerce Lead",
        name: "Sophia L.",
        experience: "9 years of experience",
        image: dev3,
        company: adobe,
        technologies: ["Next.js","Shopify Hydrogen","Tailwind CSS","GraphQL"],
        certifications: ["Shopify Plus Partner Certified"],
      },
      {
        role: "Full-Stack Next.js Developer",
        name: "Michael T.",
        experience: "7 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: ["Next.js","Prisma","PostgreSQL","NextAuth.js"],
        certifications: ["AWS Certified Developer"],
      },
      {
        role: "UI/UX Engineer",
        name: "Emma K.",
        experience: "11 years of experience",
        image: dev5,
        company: motorolla,
        technologies: ["Next.js","Framer Motion","Radix UI","CSS Modules"],
        certifications: ["Web Accessibility Specialist"],
      }
    ]
  },
  
  industriesSolutions: {
    tag: "NEXT.JS ACROSS INDUSTRIES",
    title: "High-performance web solutions for every sector.",
    description: "Next.js is the framework of choice when SEO, performance, and user experience are critical to business success.",
    industries: [
      {
            title: "eCommerce",
            description: "Sub-second page loads to maximize conversion rates.",
            solutions: [
                  "Headless Storefronts",
                  "Dynamic Product Pages",
                  "Personalized Checkout",
                  "SEO-optimized Categories"
            ],
      image: industryImage,
      },
      {
            title: "Media & Publishing",
            description: "Handle massive traffic spikes and deliver content instantly.",
            solutions: [
                  "High-traffic News Portals",
                  "Static Blog Generators",
                  "Paywall Middleware",
                  "Real-time Live Blogs"
            ],
      image: industryImage,
      },
      {
            title: "SaaS & B2B",
            description: "Secure, authenticated dashboards with rich data visualization.",
            solutions: [
                  "Marketing Sites with CMS",
                  "Authenticated Client Portals",
                  "Edge-rendered Dashboards",
                  "Multi-tenant Architectures"
            ],
      image: industryImage,
      },
      {
            title: "Finance & Fintech",
            description: "Securely render sensitive financial data.",
            solutions: [
                  "Corporate Websites",
                  "Secure Application Portals",
                  "Financial Calculators",
                  "Investor Relations Sites"
            ],
      image: industryImage,
      },
      {
            title: "Travel & Hospitality",
            description: "SEO-driven property listings and fast booking flows.",
            solutions: [
                  "Property Listing Aggregators",
                  "Booking Engines",
                  "Travel Blogs",
                  "Dynamic Pricing Pages"
            ],
      image: industryImage,
      },
      {
            title: "Education",
            description: "Accessible and fast platforms for global learners.",
            solutions: [
                  "University Portals",
                  "Online Course Catalogs",
                  "EdTech Marketing Sites",
                  "Student Dashboards"
            ],
      image: industryImage,
      }
]
  },

  capabilities: {
    label: "NEXT.JS CAPABILITIES",
    title: "The modern web stack centered around Next.js.",
    description: "We pair Next.js with the best-in-class tools for styling, content management, database ORMs, and hosting to build complete full-stack applications.",
    capabilities: [
      {
            title: "Framework & Hosting",
            description: "The core platform for Next.js applications.",
            tools: [
                  {
                        name: "Next.js",
                        logo: "/images/tool-tech/nextjs.svg"
                  },
                  {
                        name: "Vercel",
                        logo: "/images/tool-tech/vercel.svg"
                  },
                  {
                        name: "React",
                        logo: "/images/tool-tech/react.svg"
                  }
            ]
      },
      {
            title: "Headless CMS",
            description: "Manage content globally with modern CMS platforms.",
            tools: [
                  {
                        name: "Sanity",
                        logo: "/images/tool-tech/sanity.svg"
                  },
                  {
                        name: "Contentful",
                        logo: "/images/tool-tech/contentful.svg"
                  },
                  {
                        name: "Strapi",
                        logo: "/images/tool-tech/strapi.svg"
                  }
            ]
      },
      {
            title: "Database & ORM",
            description: "Connect to databases directly from Next.js server actions.",
            tools: [
                  {
                        name: "Prisma",
                        logo: "/images/tool-tech/prisma.svg"
                  },
                  {
                        name: "Supabase",
                        logo: "/images/tool-tech/supabase.svg"
                  },
                  {
                        name: "PostgreSQL",
                        logo: "/images/tool-tech/postgresql.svg"
                  }
            ]
      },
      {
            title: "Styling & UI",
            description: "Build beautiful interfaces quickly.",
            tools: [
                  {
                        name: "Tailwind CSS",
                        logo: "/images/tool-tech/tailwind.svg"
                  },
                  {
                        name: "Shadcn UI",
                        logo: "/images/tool-tech/shadcn.svg"
                  }
            ]
      }
]
  },
};

export default nextjs;
