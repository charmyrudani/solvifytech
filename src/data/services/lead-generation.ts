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

const leadGeneration = {
      slug: "lead-generation",

      hero: {
            serviceName: "Lead Generation",
            tagline: "LEAD GENERATION SERVICES",
            title: "Generate a consistent pipeline of qualified leads that helps your sales team close more business.",
            description: "We build complete lead generation systems using landing pages, paid advertising, automation, CRM integration, and conversion optimization. Our solutions attract the right prospects, improve lead quality, and support predictable business growth."
      },

      serviceOverview: {
            tag: "LEAD GENERATION SERVICES",
            title: "Create a steady flow of qualified leads for your sales team.",
            description: "Our lead generation services help businesses attract, capture, and manage potential customers through digital channels. Solvifytech builds lead-focused strategies using landing pages, ads, automation, outreach, and conversion tracking.",
            image: aiService,

            services: [
                  {
                        "title": "B2B Lead Generation",
                        "description": "We help businesses attract and capture qualified leads from relevant target audiences."
                  },
                  {
                        "title": "Landing Page Lead Funnels",
                        "description": "We build landing pages designed to convert visitors into leads."
                  },
                  {
                        "title": "Paid Ads Lead Campaigns",
                        "description": "We run lead-focused ad campaigns across Google, LinkedIn, Meta, and other platforms."
                  },
                  {
                        "title": "LinkedIn Lead Generation",
                        "description": "We use LinkedIn to connect with decision-makers and create B2B sales opportunities."
                  },
                  {
                        "title": "WhatsApp Lead Automation",
                        "description": "We automate lead capture and follow-up through WhatsApp."
                  },
                  {
                        "title": "CRM Lead Management",
                        "description": "We organize leads inside CRM systems so your sales team can follow up properly."
                  },
                  {
                        "title": "Lead Tracking & Reporting",
                        "description": "We measure lead sources, quality, conversion rates, and campaign performance."
                  }
            ]
      },

      developmentTeam: {
            tag: "OUR LEAD GEN TECH TEAM",
            title: "Meet the technologists driving customer acquisition.",
            description: "Lead generation is powered by technology. Our team builds landing pages, sets up CRM routing, integrates data enrichment tools, and creates the infrastructure to capture and score leads at scale.",
            engineers: [
                  {
                        role: "Growth Engineer",
                        name: "Derek H.",
                        experience: "8 years of experience",
                        image: dev1,
                        technologies: ["Next.js", "Vercel", "Webhooks"],
                        company: bbva,
                        certifications: ["Growth Hacking", "Frontend Pro"],
                  },
                  {
                        role: "Marketing Ops Specialist",
                        name: "Nina L.",
                        experience: "6 years of experience",
                        image: dev2,
                        technologies: ["Marketo", "Pardot", "Salesforce"],
                        company: johnson,
                        certifications: ["Marketing Automation", "Ops Management"],
                  },
                  {
                        role: "Data Enrichment Eng.",
                        name: "Colin M.",
                        experience: "5 years of experience",
                        image: dev3,
                        technologies: ["Clearbit", "Apollo API", "Python"],
                        company: adobe,
                        certifications: ["Data Engineering", "API Integration"],
                  },
                  {
                        role: "Landing Page Developer",
                        name: "Sophie G.",
                        experience: "4 years of experience",
                        image: dev4,
                        technologies: ["React", "Tailwind CSS", "Framer Motion"],
                        company: siriusxm,
                        certifications: ["UI Development", "Web Performance"],
                  },
                  {
                        role: "Analytics Engineer",
                        name: "Evan T.",
                        experience: "7 years of experience",
                        image: dev5,
                        technologies: ["dbt", "Snowflake", "Segment"],
                        company: motorolla,
                        certifications: ["Data Architecture", "Analytics Pro"],
                  },
            ]
      },

      industriesSolutions: {
            tag: "LEAD GENERATION ACROSS INDUSTRIES",
            title: "Generate qualified leads with strategies built around your industry and sales process.",
            description: "Lead generation is not the same for every business. Solvifytech builds lead systems using landing pages, ads, automation, CRM, WhatsApp, and tracking to help your sales team convert better.",
            industries: [
                  {
                        title: "Real Estate",
                        description: "We generate leads for property projects, site visits, builder inquiries, and buyer follow-ups.",
                        image: industryImage,
                        solutions: [
                              "Real estate CRM portal",
                              "Project landing pages",
                              "Lead capture forms",
                              "Automated lead management",
                              "WhatsApp inquiry automation",
                              "AI voice calling agent for follow-ups"
                        ]
                  },
                  {
                        title: "Healthcare",
                        description: "We create lead campaigns for consultations, appointments, treatments, hospitals, and clinic services.",
                        image: industryImage,
                        solutions: [
                              "Appointment booking funnels",
                              "Doctor consultation lead forms",
                              "Hospital service landing pages",
                              "Patient inquiry management system",
                              "WhatsApp appointment reminders",
                              "Treatment-wise lead tracking dashboard"
                        ]
                  },
                  {
                        title: "Education",
                        description: "We generate leads for admissions, online courses, coaching classes, training institutes, and EdTech platforms.",
                        image: industryImage,
                        solutions: [
                              "Admission inquiry landing pages",
                              "Course lead generation funnels",
                              "Counselor CRM portal",
                              "Student inquiry automation",
                              "WhatsApp follow-up automation",
                              "AI chatbot for course inquiries"
                        ]
                  },
                  {
                        title: "B2B Services",
                        description: "We build lead systems for agencies, consultants, software companies, IT firms, and professional service providers.",
                        image: industryImage,
                        solutions: [
                              "B2B lead generation landing pages",
                              "LinkedIn lead generation campaigns",
                              "Google Ads lead funnels",
                              "Service inquiry CRM system",
                              "Email nurturing automation",
                              "Sales pipeline dashboard"
                        ]
                  },
                  {
                        title: "eCommerce & D2C",
                        description: "We create lead funnels for product launches, offers, subscriptions, customer acquisition, and remarketing.",
                        image: industryImage,
                        solutions: [
                              "Product launch landing pages",
                              "Offer-based lead capture funnels",
                              "Email subscriber growth campaigns",
                              "WhatsApp cart recovery flows",
                              "Customer retention automation",
                              "Campaign performance dashboard"
                        ]
                  },
                  {
                        title: "Industrial & Manufacturing",
                        description: "We generate B2B inquiries for manufacturers, exporters, machinery suppliers, industrial brands, and distributors.",
                        image: industryImage,
                        solutions: [
                              "Industrial inquiry landing pages",
                              "Product catalog lead forms",
                              "Distributor inquiry funnels",
                              "Export inquiry campaigns",
                              "B2B Google Search Ads",
                              "Lead qualification CRM portal"
                        ]
                  },
            ]
      },

      capabilities: {
            label: "LEAD GENERATION CAPABILITIES",
            title: "We cover the lead generation stack and everything around it.",
            description: "We build lead generation systems using landing pages, ads, CRM, automation, WhatsApp, AI calling, and performance tracking.",
            capabilities: [
                  {
                        "title": "Lead Funnel Strategy",
                        "description": "Plan the full journey from ad click to qualified lead.",
                        "tools": [
                              {
                                    "name": "Funnel Mapping",
                                    "logo": "/images/tool-tech/funnel-mapping.svg"
                              },
                              {
                                    "name": "Landing Pages",
                                    "logo": "/images/tool-tech/landing-pages.svg"
                              },
                              {
                                    "name": "CTAs",
                                    "logo": "/images/tool-tech/ctas.svg"
                              }
                        ]
                  },
                  {
                        "title": "Landing Page Development",
                        "description": "Build focused pages for campaigns and inquiries.",
                        "tools": [
                              {
                                    "name": "Lead Forms",
                                    "logo": "/images/tool-tech/lead-forms.svg"
                              },
                              {
                                    "name": "WhatsApp CTA",
                                    "logo": "/images/tool-tech/whatsapp-cta.svg"
                              },
                              {
                                    "name": "Tracking",
                                    "logo": "/images/tool-tech/tracking.svg"
                              }
                        ]
                  },
                  {
                        "title": "Paid Lead Campaigns",
                        "description": "Generate leads using search and social platforms.",
                        "tools": [
                              {
                                    "name": "Google Ads",
                                    "logo": "/images/tool-tech/google-ads.svg"
                              },
                              {
                                    "name": "Meta Ads",
                                    "logo": "/images/tool-tech/meta-ads.svg"
                              },
                              {
                                    "name": "LinkedIn Ads",
                                    "logo": "/images/tool-tech/linkedin-ads.svg"
                              }
                        ]
                  },
                  {
                        "title": "CRM & Lead Management",
                        "description": "Capture, assign, track, and follow up with leads.",
                        "tools": [
                              {
                                    "name": "CRM Portal",
                                    "logo": "/images/tool-tech/crm-portal.svg"
                              },
                              {
                                    "name": "Lead Dashboard",
                                    "logo": "/images/tool-tech/lead-dashboard.svg"
                              },
                              {
                                    "name": "Pipelines",
                                    "logo": "/images/tool-tech/pipelines.svg"
                              }
                        ]
                  },
                  {
                        "title": "Automation & AI Follow-Up",
                        "description": "Improve response time using WhatsApp, email, and voice AI.",
                        "tools": [
                              {
                                    "name": "WhatsApp Automation",
                                    "logo": "/images/tool-tech/whatsapp-automation.svg"
                              },
                              {
                                    "name": "Email Flows",
                                    "logo": "/images/tool-tech/email-flows.svg"
                              },
                              {
                                    "name": "AI Voice Agent",
                                    "logo": "/images/tool-tech/ai-voice-agent.svg"
                              }
                        ]
                  }
            ]
      }
};

export default leadGeneration;
