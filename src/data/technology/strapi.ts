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

const strapi = {
  slug: "strapi-development",

  hero: {
    serviceName: "Strapi",
    tagline: "STRAPI HEADLESS CMS DEVELOPMENT",
    title: "Build highly customizable, API-first content architectures with Strapi.",
    description: "Our Strapi development services provide developers and content teams the ultimate freedom. As the leading open-source headless CMS, we use Strapi to design custom APIs (REST & GraphQL) that deliver content seamlessly to websites, mobile apps, and IoT devices from a single, centralized hub.",
  },

  serviceOverview: {
    tag: "STRAPI DEVELOPMENT SERVICES",
    title: "Modernize your content delivery with a headless approach.",
    description: "At Solvifytech, we architect Strapi backends that are scalable, secure, and tailored to your exact content models. We empower your editorial teams with an intuitive admin panel while giving developers the perfect API to build blazing-fast omnichannel frontends.",
    image: aiService,
    services: [
      {
            title: "Custom Strapi Architecture",
            description: "Design complex, relational content-types, components, and dynamic zones tailored precisely to your editorial workflow."
      },
      {
            title: "Headless Frontend Integration",
            description: "Seamlessly integrate Strapi APIs with modern frontend frameworks like Next.js, Nuxt.js, React, and Gatsby."
      },
      {
            title: "Custom Plugin Development",
            description: "Extend the Strapi admin panel by building custom React plugins for SEO management, third-party integrations, or custom analytics."
      },
      {
            title: "API Customization (REST/GraphQL)",
            description: "Customize Strapi controllers, services, and middleware to implement complex business logic and data aggregation."
      },
      {
            title: "Strapi Cloud & Infrastructure",
            description: "Deploy, scale, and manage Strapi on AWS, Google Cloud, or Strapi Cloud with secure database configurations (PostgreSQL)."
      },
      {
            title: "Role-Based Access Control (RBAC)",
            description: "Implement granular permissions and editorial workflows to secure content creation processes for large enterprise teams."
      },
      {
            title: "Content Migration",
            description: "Automate the migration of existing content from legacy CMS platforms (WordPress, Drupal) into your new Strapi architecture."
      }
]
  },

  developmentTeam: {
    tag: "OUR STRAPI & HEADLESS EXPERTS",
    title: "Meet the engineers mastering omnichannel content.",
    description: "Our team consists of full-stack JavaScript developers who understand both backend API design in Node.js (Koa) and frontend integration in React, making them the perfect Strapi architects.",
    engineers: [
      {
        role: "Headless CMS Architect",
        name: "Daniel R.",
        experience: "10 years of experience",
        image: dev1,
        company: bbva,
        technologies: ["Strapi","Node.js","Koa.js","PostgreSQL"],
        certifications: ["Strapi Expert Partner"],
      },
      {
        role: "Frontend Integration Lead",
        name: "Carlos M.",
        experience: "8 years of experience",
        image: dev2,
        company: johnson,
        technologies: ["Next.js","React","GraphQL","Tailwind CSS"],
        certifications: ["Vercel Certified Developer"],
      },
      {
        role: "Custom Plugin Developer",
        name: "Sophia L.",
        experience: "9 years of experience",
        image: dev3,
        company: adobe,
        technologies: ["React","Strapi Design System","Webpack","Node.js"],
        certifications: ["React Professional Certification"],
      },
      {
        role: "API & Backend Engineer",
        name: "Michael T.",
        experience: "7 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: ["Strapi Lifecycle Hooks","REST API","Docker","AWS"],
        certifications: ["AWS Certified Developer"],
      },
      {
        role: "Content Migration Specialist",
        name: "Emma K.",
        experience: "11 years of experience",
        image: dev5,
        company: motorolla,
        technologies: ["Python","ETL Scripts","Strapi API","PostgreSQL"],
        certifications: ["Certified Data Engineer"],
      }
    ]
  },
  
  industriesSolutions: {
    tag: "STRAPI ACROSS INDUSTRIES",
    title: "Omnichannel content for forward-thinking brands.",
    description: "Strapi's headless nature makes it ideal for businesses that need to push content to multiple platforms simultaneously—from smartwatches to corporate websites.",
    industries: [
      {
            title: "eCommerce",
            description: "Rich editorial content alongside product catalogs.",
            solutions: [
                  "Shoppable Lookbooks",
                  "Marketing Landing Pages",
                  "Omnichannel Product Stories",
                  "Multi-language Storefronts"
            ],
      image: industryImage,
      },
      {
            title: "Media & Publishing",
            description: "Flexible content structures for diverse articles.",
            solutions: [
                  "Dynamic Article Builders",
                  "Editorial Approval Workflows",
                  "Mobile App Content Delivery",
                  "Paywall Integrations"
            ],
      image: industryImage,
      },
      {
            title: "Corporate Websites",
            description: "Manage multiple regional sites from one hub.",
            solutions: [
                  "Multi-tenant Architectures",
                  "Granular RBAC for Regional Teams",
                  "SEO Management Plugins",
                  "Case Study Portfolios"
            ],
      image: industryImage,
      },
      {
            title: "Mobile Applications",
            description: "Deliver content directly to iOS and Android.",
            solutions: [
                  "In-app Notifications CMS",
                  "Mobile Help Centers",
                  "Dynamic App Configuration",
                  "Onboarding Content Management"
            ],
      image: industryImage,
      },
      {
            title: "Education & EdTech",
            description: "Structuring complex learning materials.",
            solutions: [
                  "Course Catalog Management",
                  "Quiz & Assessment Builders",
                  "Student Portal Content",
                  "Multi-format Lesson Content"
            ],
      image: industryImage,
      },
      {
            title: "Fintech",
            description: "Secure, compliant marketing sites.",
            solutions: [
                  "Audit-trailed Content Updates",
                  "Compliance Approved Workflows",
                  "Financial Blog Platforms",
                  "Help & Support Centers"
            ],
      image: industryImage,
      }
]
  },

  capabilities: {
    label: "STRAPI CAPABILITIES",
    title: "The modern headless ecosystem.",
    description: "We pair Strapi with the best frontend frameworks and deployment platforms to deliver blazingly fast content experiences.",
    capabilities: [
      {
            title: "Frontend Frameworks",
            description: "Consuming Strapi APIs.",
            tools: [
                  {
                        name: "Next.js",
                        logo: "/images/tool-tech/nextjs.svg"
                  },
                  {
                        name: "Nuxt",
                        logo: "/images/tool-tech/vue.svg"
                  },
                  {
                        name: "React Native",
                        logo: "/images/tool-tech/react.svg"
                  }
            ]
      },
      {
            title: "Databases",
            description: "Storing your Strapi content.",
            tools: [
                  {
                        name: "PostgreSQL",
                        logo: "/images/tool-tech/postgresql.svg"
                  },
                  {
                        name: "MySQL",
                        logo: "/images/tool-tech/mysql.svg"
                  },
                  {
                        name: "SQLite (Local)",
                        logo: "/images/tool-tech/database.svg"
                  }
            ]
      },
      {
            title: "Deployment & Hosting",
            description: "Scaling your headless CMS.",
            tools: [
                  {
                        name: "Strapi Cloud",
                        logo: "/images/tool-tech/strapi.svg"
                  },
                  {
                        name: "AWS",
                        logo: "/images/tool-tech/aws.svg"
                  },
                  {
                        name: "Render",
                        logo: "/images/tool-tech/render.svg"
                  }
            ]
      },
      {
            title: "APIs & Integrations",
            description: "Connecting your data.",
            tools: [
                  {
                        name: "GraphQL",
                        logo: "/images/tool-tech/graphql.svg"
                  },
                  {
                        name: "REST API",
                        logo: "/images/tool-tech/rest-api.svg"
                  },
                  {
                        name: "Webhooks",
                        logo: "/images/tool-tech/webhooks.svg"
                  }
            ]
      }
]
  },
};

export default strapi;
