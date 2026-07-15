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

const n8nAutomation = {
      slug: "n8n-automation",

      hero: {
            serviceName: "n8n Automation",
            tagline: "N8N AUTOMATION SERVICES",
            title: "Connect your business tools with flexible automation that saves time and eliminates repetitive work.",
            description: "We design custom n8n workflows that integrate your apps, APIs, CRMs, databases, and communication platforms into a single automated ecosystem. Our solutions improve efficiency, reduce manual effort, and keep your business running smoothly."
      },

      serviceOverview: {
            tag: "N8N AUTOMATION SERVICES",
            title: "Connect your tools and automate workflows without unnecessary complexity.",
            description: "Our n8n automation services help businesses connect apps, automate data flow, and reduce repetitive manual work. Solvifytech builds custom n8n workflows for lead management, CRM updates, reporting, notifications, approvals, and operations.",
            image: aiService,

            services: [
                  {
                        "title": "Custom n8n Workflow Setup",
                        "description": "We create n8n workflows that connect your apps and automate daily operations."
                  },
                  {
                        "title": "CRM Automation with n8n",
                        "description": "We automate lead updates, contact creation, follow-ups, and CRM task management."
                  },
                  {
                        "title": "Lead Capture Automation",
                        "description": "We connect website forms, ads, WhatsApp, and landing pages to your CRM or database."
                  },
                  {
                        "title": "API Integration Workflows",
                        "description": "We use n8n to connect different platforms through APIs and automate data movement."
                  },
                  {
                        "title": "Email & Notification Automation",
                        "description": "We automate email alerts, team notifications, reminders, and customer updates."
                  },
                  {
                        "title": "Data Sync Between Platforms",
                        "description": "We keep customer, order, lead, and business data synced across multiple tools."
                  },
                  {
                        "title": "Workflow Testing & Maintenance",
                        "description": "We test, monitor, and maintain n8n workflows so automation runs smoothly."
                  }
            ]
      },

      developmentTeam: {
            tag: "OUR N8N EXPERTS",
            title: "Meet the workflow automation specialists.",
            description: "n8n is a powerful open-source automation tool. Our engineers specialize in deploying self-hosted n8n instances, building complex custom nodes, and creating resilient multi-step workflows.",
            engineers: [
                  {
                        role: "Workflow Architect",
                        name: "Simon T.",
                        experience: "9 years of experience",
                        image: dev1,
                        technologies: ["n8n", "Node.js", "Docker"],
                        company: bbva,
                        certifications: ["Automation Architect", "n8n Expert"],
                  },
                  {
                        role: "Custom Node Developer",
                        name: "Alice P.",
                        experience: "6 years of experience",
                        image: dev2,
                        technologies: ["TypeScript", "REST", "OAuth2"],
                        company: johnson,
                        certifications: ["Backend Integration", "API Design"],
                  },
                  {
                        role: "Systems Admin",
                        name: "Gary H.",
                        experience: "8 years of experience",
                        image: dev3,
                        technologies: ["Linux", "Nginx", "Docker Compose"],
                        company: adobe,
                        certifications: ["SysAdmin Pro", "Security Basics"],
                  },
                  {
                        role: "Business Process Eng.",
                        name: "Valerie J.",
                        experience: "7 years of experience",
                        image: dev4,
                        technologies: ["BPMN", "Zapier", "Make"],
                        company: siriusxm,
                        certifications: ["Process Optimization", "Lean IT"],
                  },
                  {
                        role: "Data Mapping Specialist",
                        name: "Kyle D.",
                        experience: "5 years of experience",
                        image: dev5,
                        technologies: ["JSON", "JMESPath", "JavaScript"],
                        company: motorolla,
                        certifications: ["Data Transformation", "Logic Design"],
                  },
            ]
      },

      industriesSolutions: {
            tag: "N8N AUTOMATION ACROSS INDUSTRIES",
            title: "Connect your apps and automate workflows with flexible n8n systems.",
            description: "n8n helps businesses connect apps, APIs, databases, CRMs, forms, emails, and WhatsApp. Solvifytech builds automation workflows that reduce manual work.",
            industries: [
                  {
                        title: "Marketing Teams",
                        description: "We automate lead capture, campaign updates, and reporting flows.",
                        image: industryImage,
                        solutions: [
                              "Form-to-CRM automation",
                              "Campaign alert workflow",
                              "Lead source tracking",
                              "Google Sheet sync",
                              "Ad lead capture automation",
                              "Reporting automation"
                        ]
                  },
                  {
                        title: "Sales Teams",
                        description: "We connect sales tools and automate follow-up workflows.",
                        image: industryImage,
                        solutions: [
                              "CRM lead creation",
                              "Lead assignment automation",
                              "Email follow-up workflow",
                              "WhatsApp sales alerts",
                              "Deal stage updates",
                              "Sales report automation"
                        ]
                  },
                  {
                        title: "eCommerce",
                        description: "We automate order, customer, inventory, and notification workflows.",
                        image: industryImage,
                        solutions: [
                              "Order sync workflow",
                              "Stock alert automation",
                              "Abandoned cart workflow",
                              "Shopify CRM sync",
                              "Delivery notification flow",
                              "Sales report automation"
                        ]
                  },
                  {
                        title: "Real Estate",
                        description: "We automate property inquiries, site visit follow-ups, and sales alerts.",
                        image: industryImage,
                        solutions: [
                              "Inquiry routing workflow",
                              "CRM sync automation",
                              "Site visit reminder flow",
                              "WhatsApp lead update",
                              "Lead status tracking",
                              "Project inquiry reports"
                        ]
                  },
                  {
                        title: "Operations",
                        description: "We connect internal systems for approvals, reporting, and data movement.",
                        image: industryImage,
                        solutions: [
                              "Approval workflow automation",
                              "Spreadsheet automation",
                              "API data sync",
                              "Daily report automation",
                              "Vendor update workflow",
                              "Dashboard data refresh"
                        ]
                  },
                  {
                        title: "Support Teams",
                        description: "We automate support tickets, notifications, and customer updates.",
                        image: industryImage,
                        solutions: [
                              "Ticket creation workflow",
                              "Escalation alerts",
                              "Customer status updates",
                              "SLA reminder automation",
                              "Helpdesk CRM sync",
                              "Support report automation"
                        ]
                  },
            ]
      },

      capabilities: {
            label: "N8N AUTOMATION CAPABILITIES",
            title: "We cover the n8n automation stack and everything around it.",
            description: "We build flexible n8n workflows that connect apps, APIs, forms, CRMs, emails, WhatsApp, and databases.",
            capabilities: [
                  {
                        "title": "Custom n8n Workflows",
                        "description": "Build workflows for daily business automation.",
                        "tools": [
                              {
                                    "name": "n8n",
                                    "logo": "/images/tool-tech/n8n.svg"
                              },
                              {
                                    "name": "Webhooks",
                                    "logo": "/images/tool-tech/webhooks.svg"
                              },
                              {
                                    "name": "APIs",
                                    "logo": "/images/tool-tech/apis.svg"
                              }
                        ]
                  },
                  {
                        "title": "CRM Automation",
                        "description": "Sync leads, contacts, tasks, and follow-ups.",
                        "tools": [
                              {
                                    "name": "Zoho",
                                    "logo": "/images/tool-tech/zoho.svg"
                              },
                              {
                                    "name": "HubSpot",
                                    "logo": "/images/tool-tech/hubspot.svg"
                              },
                              {
                                    "name": "Airtable",
                                    "logo": "/images/tool-tech/airtable.svg"
                              },
                              {
                                    "name": "Sheets",
                                    "logo": "/images/tool-tech/sheets.svg"
                              }
                        ]
                  },
                  {
                        "title": "WhatsApp & Email Flows",
                        "description": "Automate customer and team communication.",
                        "tools": [
                              {
                                    "name": "WhatsApp API",
                                    "logo": "/images/tool-tech/whatsapp-api.svg"
                              },
                              {
                                    "name": "Gmail",
                                    "logo": "/images/tool-tech/gmail.svg"
                              },
                              {
                                    "name": "SMTP",
                                    "logo": "/images/tool-tech/smtp.svg"
                              }
                        ]
                  },
                  {
                        "title": "Data Sync Workflows",
                        "description": "Move data between different tools automatically.",
                        "tools": [
                              {
                                    "name": "Google Sheets",
                                    "logo": "/images/tool-tech/google-sheets.svg"
                              },
                              {
                                    "name": "Databases",
                                    "logo": "/images/tool-tech/databases.svg"
                              },
                              {
                                    "name": "APIs",
                                    "logo": "/images/tool-tech/apis.svg"
                              }
                        ]
                  },
                  {
                        "title": "Reporting Automation",
                        "description": "Generate reports and send alerts automatically.",
                        "tools": [
                              {
                                    "name": "Looker Studio",
                                    "logo": "/images/tool-tech/looker-studio.svg"
                              },
                              {
                                    "name": "Sheets",
                                    "logo": "/images/tool-tech/sheets.svg"
                              },
                              {
                                    "name": "Slack",
                                    "logo": "/images/tool-tech/slack.svg"
                              }
                        ]
                  }
            ]
      }
};

export default n8nAutomation;
