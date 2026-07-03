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

const linkedinMarketing = {
      slug: "linkedin-marketing",

      hero: {
            serviceName: "LinkedIn Marketing",
            tagline: "LINKEDIN MARKETING SERVICES",
            title: "Build authority, expand your professional network, and generate high-quality B2B opportunities on LinkedIn.",
            description: "Our LinkedIn marketing services help businesses strengthen their brand, position industry leaders, and connect with decision-makers through strategic content, targeted campaigns, and relationship-focused marketing that drives measurable business growth."
      },

      serviceOverview: {
            tag: "LINKEDIN MARKETING SERVICES",
            title: "Build a stronger professional presence and generate better B2B opportunities.",
            description: "Our LinkedIn marketing services help businesses improve brand visibility, build authority, and connect with the right decision-makers. Solvifytech creates LinkedIn strategies for company pages, founders, campaigns, content, and lead generation.",
            image: aiService,

            services: [
                  {
                        "title": "LinkedIn Page Optimization",
                        "description": "We improve your company page with better positioning, visuals, service details, and credibility."
                  },
                  {
                        "title": "LinkedIn Content Strategy",
                        "description": "We plan content that builds authority, educates your audience, and supports B2B growth."
                  },
                  {
                        "title": "Founder Profile Positioning",
                        "description": "We optimize founder and leadership profiles to build trust and visibility."
                  },
                  {
                        "title": "B2B Lead Generation",
                        "description": "We help connect with relevant decision-makers and generate business opportunities."
                  },
                  {
                        "title": "LinkedIn Ad Campaigns",
                        "description": "We create and manage LinkedIn ads for awareness, leads, and B2B campaigns."
                  },
                  {
                        "title": "Thought Leadership Content",
                        "description": "We create professional content that positions your brand as knowledgeable and trustworthy."
                  },
                  {
                        "title": "Performance Tracking & Reporting",
                        "description": "We track reach, engagement, leads, and campaign performance."
                  }
            ]
      },

      developmentTeam: {
            tag: "OUR LINKEDIN B2B TEAM",
            title: "Meet the experts in B2B social automation.",
            description: "B2B marketing on LinkedIn requires strategic outreach and precise targeting. Our team builds automated outreach sequences, tracking systems, and content distribution workflows for maximum impact.",
            engineers: [
                  {
                        role: "B2B Campaign Strategist",
                        name: "Melissa K.",
                        experience: "7 years of experience",
                        image: dev1,
                        technologies: ["LinkedIn Ads", "Sales Navigator", "HubSpot"],
                        company: bbva,
                        certifications: ["B2B Marketing Pro", "Social Strategy"],
                  },
                  {
                        role: "Automation Specialist",
                        name: "Jared N.",
                        experience: "5 years of experience",
                        image: dev2,
                        technologies: ["Phantombuster", "Expandi", "Zapier"],
                        company: johnson,
                        certifications: ["Workflow Automation", "Growth Tactics"],
                  },
                  {
                        role: "Data Scraper",
                        name: "Tanya C.",
                        experience: "4 years of experience",
                        image: dev3,
                        technologies: ["Python", "BeautifulSoup", "Puppeteer"],
                        company: adobe,
                        certifications: ["Web Scraping", "Data Extraction"],
                  },
                  {
                        role: "Content Dist. Engineer",
                        name: "Bradley R.",
                        experience: "6 years of experience",
                        image: dev4,
                        technologies: ["Buffer API", "Node.js", "RSS"],
                        company: siriusxm,
                        certifications: ["Content Systems", "API Dev"],
                  },
                  {
                        role: "Analytics Lead",
                        name: "Fiona B.",
                        experience: "8 years of experience",
                        image: dev5,
                        technologies: ["Looker Studio", "Supermetrics", "SQL"],
                        company: motorolla,
                        certifications: ["Marketing Analytics", "Data Visualization"],
                  },
            ]
      },

      industriesSolutions: {
            tag: "LINKEDIN MARKETING ACROSS INDUSTRIES",
            title: "Build B2B visibility where decision-makers already spend time.",
            description: "LinkedIn is useful for industries that need trust, authority, and relationship-driven growth. Solvifytech helps brands, founders, and sales teams build stronger professional visibility.",
            industries: [
                  {
                        title: "IT & SaaS",
                        description: "We create LinkedIn positioning for software companies, SaaS products, and tech founders.",
                        image: industryImage,
                        solutions: [
                              "Founder content strategy",
                              "SaaS product positioning",
                              "Company page optimization",
                              "Lead generation campaigns",
                              "Case study posts",
                              "B2B outreach strategy"
                        ]
                  },
                  {
                        title: "B2B Services",
                        description: "We help consultants, agencies, and professional firms build authority and generate leads.",
                        image: industryImage,
                        solutions: [
                              "Service positioning content",
                              "LinkedIn outreach",
                              "Profile optimization",
                              "Lead campaign planning",
                              "Client success stories",
                              "Content calendar"
                        ]
                  },
                  {
                        title: "Manufacturing & Industrial",
                        description: "We position industrial companies for B2B buyers, distributors, and enterprise clients.",
                        image: industryImage,
                        solutions: [
                              "Product highlight posts",
                              "Export positioning content",
                              "Distributor lead campaigns",
                              "Company credibility posts",
                              "LinkedIn ads",
                              "B2B inquiry strategy"
                        ]
                  },
                  {
                        title: "Real Estate",
                        description: "We build professional visibility for developers, brokers, and real estate consultants.",
                        image: industryImage,
                        solutions: [
                              "Project positioning posts",
                              "Founder branding",
                              "Investor-focused content",
                              "Real estate lead campaigns",
                              "Site progress updates",
                              "LinkedIn inquiry funnel"
                        ]
                  },
                  {
                        title: "Education & Training",
                        description: "We help institutes and training brands reach professionals and students.",
                        image: industryImage,
                        solutions: [
                              "Course promotion posts",
                              "Admission campaign content",
                              "Student success stories",
                              "Webinar promotion",
                              "LinkedIn lead forms",
                              "Authority content"
                        ]
                  },
                  {
                        title: "Finance & Consulting",
                        description: "We create trust-building LinkedIn content for finance, tax, consulting, and advisory brands.",
                        image: industryImage,
                        solutions: [
                              "Expert content strategy",
                              "Founder profile branding",
                              "Service awareness posts",
                              "Lead generation campaigns",
                              "Case study posts",
                              "Consultation inquiry flow"
                        ]
                  },
            ]
      },

      capabilities: {
            label: "LINKEDIN MARKETING CAPABILITIES",
            title: "We cover the LinkedIn marketing stack and everything around it.",
            description: "We help businesses build B2B visibility through profile positioning, content, outreach, campaigns, and performance tracking.",
            capabilities: [
                  {
                        "title": "Profile & Page Optimization",
                        "description": "Improve founder profiles and company pages.",
                        "tools": [
                              {
                                    "name": "LinkedIn Page",
                                    "logo": "/images/tool-tech/linkedin-page.svg"
                              },
                              {
                                    "name": "Founder Profile",
                                    "logo": "/images/tool-tech/founder-profile.svg"
                              }
                        ]
                  },
                  {
                        "title": "Content Strategy",
                        "description": "Plan authority-building posts and campaigns.",
                        "tools": [
                              {
                                    "name": "Content Calendar",
                                    "logo": "/images/tool-tech/content-calendar.svg"
                              },
                              {
                                    "name": "Post Frameworks",
                                    "logo": "/images/tool-tech/post-frameworks.svg"
                              }
                        ]
                  },
                  {
                        "title": "B2B Lead Generation",
                        "description": "Reach decision-makers and generate inquiries.",
                        "tools": [
                              {
                                    "name": "Sales Navigator",
                                    "logo": "/images/tool-tech/sales-navigator.svg"
                              },
                              {
                                    "name": "Outreach Lists",
                                    "logo": "/images/tool-tech/outreach-lists.svg"
                              }
                        ]
                  },
                  {
                        "title": "LinkedIn Ads",
                        "description": "Run targeted campaigns for awareness and leads.",
                        "tools": [
                              {
                                    "name": "LinkedIn Campaign Manager",
                                    "logo": "/images/tool-tech/linkedin-campaign-manager.svg"
                              }
                        ]
                  },
                  {
                        "title": "Performance Reporting",
                        "description": "Track reach, engagement, leads, and growth.",
                        "tools": [
                              {
                                    "name": "Analytics",
                                    "logo": "/images/tool-tech/analytics.svg"
                              },
                              {
                                    "name": "Reports",
                                    "logo": "/images/tool-tech/reports.svg"
                              },
                              {
                                    "name": "CRM Tracking",
                                    "logo": "/images/tool-tech/crm-tracking.svg"
                              }
                        ]
                  }
            ]
      }
};

export default linkedinMarketing;
