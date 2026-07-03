import dev1 from '/images/hero-section/dev1.avif'
import dev2 from '/images/hero-section/dev2.avif'
import dev3 from '/images/hero-section/dev3.avif'
import dev4 from '/images/hero-section/dev4.avif'
import dev5 from '/images/hero-section/dev5.avif'
import bbva from '/images/hero-section/bbva.svg'
import johnson from '/images/hero-section/johnson.svg'
import adobe from '/images/hero-section/adobe.svg'
import siriusxm from '/images/hero-section/siriusxm.svg'
import motorolla from '/images/hero-section/motorolla.svg'
import industryImage from "/images/services/industry.png"
import aiService from '/images/services/ai-service.png';

const saasDevelopment = {
      slug: "saas-development",

      hero: {
            serviceName: "SaaS Development",
            tagline: "SAAS DEVELOPMENT SERVICES",
            title: "Build scalable SaaS products that deliver exceptional user experiences and support long-term business growth.",
            description: "From MVP development to enterprise SaaS platforms, Solvifytech builds secure, cloud-ready applications with modern architecture, subscription management, and scalable infrastructure designed for growth and reliability."
      },

      serviceOverview: {
            tag: "SAAS DEVELOPMENT SERVICES",
            title: "Build scalable SaaS products designed for users, growth, and long-term performance.",
            description: "We help startups and businesses design, develop, and launch SaaS platforms with secure architecture, clean user experience, and scalable technology. Solvifytech supports everything from MVP development to advanced SaaS product engineering.",
            image: aiService,

            services: [
                  {
                        "title": "SaaS MVP Development",
                        "description": "We help you launch a focused SaaS MVP with the right features and scalable foundation."
                  },
                  {
                        "title": "Custom SaaS Platform Development",
                        "description": "We build complete SaaS platforms designed for users, admins, subscriptions, and growth."
                  },
                  {
                        "title": "Subscription & Billing Integration",
                        "description": "We integrate payment systems, subscriptions, invoices, plans, and renewal management."
                  },
                  {
                        "title": "User Dashboard Development",
                        "description": "We create dashboards where users can manage accounts, activities, reports, and features."
                  },
                  {
                        "title": "Admin Panel Development",
                        "description": "We build admin panels for managing users, billing, support, analytics, and settings."
                  },
                  {
                        "title": "SaaS API Development",
                        "description": "We develop secure APIs that connect your SaaS product with other tools and platforms."
                  },
                  {
                        "title": "Cloud Deployment & Scaling",
                        "description": "We deploy SaaS platforms on scalable cloud infrastructure for better performance."
                  }
            ]
      },

      developmentTeam: {
            tag: "OUR SAAS DEVELOPMENT TEAM",
            title: "Meet the builders of scalable software platforms.",
            description: "Building SaaS products requires robust multi-tenant architecture, subscription billing integrations, and scalable databases. Our full-stack experts build platforms that are ready for hyper-growth.",
            engineers: [
                  {
                        role: "SaaS Architect",
                        name: "Brandon S.",
                        experience: "13 years of experience",
                        image: dev1,
                        technologies: ["Next.js", "AWS", "PostgreSQL"],
                        company: bbva,
                        certifications: ["Cloud Architecture", "System Design"],
                  },
                  {
                        role: "Frontend Lead",
                        name: "Elena H.",
                        experience: "9 years of experience",
                        image: dev2,
                        technologies: ["React", "TypeScript", "Tailwind"],
                        company: johnson,
                        certifications: ["UI Engineering", "Frontend Arch"],
                  },
                  {
                        role: "Backend Services Eng.",
                        name: "Tom W.",
                        experience: "8 years of experience",
                        image: dev3,
                        technologies: ["Node.js", "NestJS", "Redis"],
                        company: adobe,
                        certifications: ["Microservices Pro", "API Design"],
                  },
                  {
                        role: "Billing Integration Specialist",
                        name: "Rachel D.",
                        experience: "6 years of experience",
                        image: dev4,
                        technologies: ["Stripe API", "Webhooks", "SQL"],
                        company: siriusxm,
                        certifications: ["Payment Systems", "FinTech Basics"],
                  },
                  {
                        role: "DevOps Engineer",
                        name: "Kevin L.",
                        experience: "7 years of experience",
                        image: dev5,
                        technologies: ["Docker", "Terraform", "CI/CD"],
                        company: motorolla,
                        certifications: ["DevOps Expert", "Cloud Admin"],
                  },
            ]
      },

      industriesSolutions: {
            tag: "SAAS DEVELOPMENT ACROSS INDUSTRIES",
            title: "Build SaaS products designed for your market, users, and growth model.",
            description: "SaaS products need scalable architecture, clear user experience, and reliable features. Solvifytech builds SaaS platforms for startups, businesses, and industry-specific products.",
            industries: [
                  {
                        title: "Healthcare SaaS",
                        description: "We build SaaS platforms for clinics, doctors, appointments, and patient management.",
                        image: industryImage,
                        solutions: [
                              "Clinic management SaaS",
                              "Appointment SaaS platform",
                              "Doctor dashboard",
                              "Patient portal",
                              "Billing module",
                              "Admin control panel"
                        ]
                  },
                  {
                        title: "Real Estate SaaS",
                        description: "We create SaaS products for builders, brokers, property teams, and sales operations.",
                        image: industryImage,
                        solutions: [
                              "Property CRM SaaS",
                              "Project management SaaS",
                              "Broker platform",
                              "Site visit tracking system",
                              "Lead management SaaS",
                              "Customer portal"
                        ]
                  },
                  {
                        title: "HR & Recruitment SaaS",
                        description: "We develop platforms for hiring, onboarding, employees, and HR workflows.",
                        image: industryImage,
                        solutions: [
                              "Recruitment SaaS",
                              "Resume screening platform",
                              "HRMS system",
                              "Employee portal",
                              "Leave management system",
                              "Interview scheduling tool"
                        ]
                  },
                  {
                        title: "Marketing SaaS",
                        description: "We build tools for campaigns, analytics, automation, and lead management.",
                        image: industryImage,
                        solutions: [
                              "Campaign management platform",
                              "Lead tracking SaaS",
                              "Reporting dashboard",
                              "Automation workflow builder",
                              "Email campaign system",
                              "Analytics module"
                        ]
                  },
                  {
                        title: "Finance SaaS",
                        description: "We create SaaS platforms for billing, accounting, reporting, and financial workflows.",
                        image: industryImage,
                        solutions: [
                              "Invoice SaaS",
                              "Expense management platform",
                              "Billing automation system",
                              "Payment tracking dashboard",
                              "Client payment portal",
                              "Revenue analytics"
                        ]
                  },
                  {
                        title: "Operations SaaS",
                        description: "We build SaaS tools for task management, approvals, workflows, and reports.",
                        image: industryImage,
                        solutions: [
                              "Workflow management platform",
                              "Task tracking system",
                              "Approval management tool",
                              "Business dashboard",
                              "Team collaboration portal",
                              "Role-based access system"
                        ]
                  },
            ]
      },

      capabilities: {
            label: "SAAS DEVELOPMENT CAPABILITIES",
            title: "We cover the SaaS development stack and everything around it.",
            description: "We build scalable SaaS platforms with user dashboards, admin panels, billing, APIs, cloud deployment, and analytics.",
            capabilities: [
                  {
                        "title": "SaaS MVP Development",
                        "description": "Launch focused MVPs with core product features.",
                        "tools": [
                              {
                                    "name": "React",
                                    "logo": "/images/tool-tech/react.svg"
                              },
                              {
                                    "name": "Next.js",
                                    "logo": "/images/tool-tech/nextjs.svg"
                              },
                              {
                                    "name": "Node.js",
                                    "logo": "/images/tool-tech/nodejs.svg"
                              },
                              {
                                    "name": "Laravel",
                                    "logo": "/images/tool-tech/laravel.svg"
                              }
                        ]
                  },
                  {
                        "title": "User & Admin Dashboards",
                        "description": "Build clean dashboards for users and admins.",
                        "tools": [
                              {
                                    "name": "Admin Panel",
                                    "logo": "/images/tool-tech/admin-panel.svg"
                              },
                              {
                                    "name": "SaaS Dashboard",
                                    "logo": "/images/tool-tech/saas-dashboard.svg"
                              }
                        ]
                  },
                  {
                        "title": "Subscription & Billing",
                        "description": "Manage plans, payments, invoices, and renewals.",
                        "tools": [
                              {
                                    "name": "Stripe",
                                    "logo": "/images/tool-tech/stripe.svg"
                              },
                              {
                                    "name": "Razorpay",
                                    "logo": "/images/tool-tech/razorpay.svg"
                              },
                              {
                                    "name": "Paddle",
                                    "logo": "/images/tool-tech/paddle.svg"
                              }
                        ]
                  },
                  {
                        "title": "SaaS APIs",
                        "description": "Build secure APIs for platform functionality.",
                        "tools": [
                              {
                                    "name": "REST API",
                                    "logo": "/images/tool-tech/rest-api.svg"
                              },
                              {
                                    "name": "GraphQL",
                                    "logo": "/images/tool-tech/graphql.svg"
                              },
                              {
                                    "name": "Webhooks",
                                    "logo": "/images/tool-tech/webhooks.svg"
                              }
                        ]
                  },
                  {
                        "title": "Cloud Deployment",
                        "description": "Deploy SaaS products on scalable infrastructure.",
                        "tools": [
                              {
                                    "name": "AWS",
                                    "logo": "/images/tool-tech/aws.svg"
                              },
                              {
                                    "name": "GCP",
                                    "logo": "/images/tool-tech/gcp.svg"
                              },
                              {
                                    "name": "Docker",
                                    "logo": "/images/tool-tech/docker.svg"
                              },
                              {
                                    "name": "CI/CD",
                                    "logo": "/images/tool-tech/ci/cd.svg"
                              }
                        ]
                  }
            ]
      }
};

export default saasDevelopment;
