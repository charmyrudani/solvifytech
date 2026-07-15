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

const workflowAutomation = {
      slug: "workflow-automation",

      hero: {
            serviceName: "Workflow Automation",
            tagline: "WORKFLOW AUTOMATION SERVICES",
            title: "Automate repetitive business processes and give your team more time to focus on meaningful work.",
            description: "We build intelligent workflow automation solutions that connect your business systems, eliminate manual tasks, and improve operational efficiency. From approvals and notifications to CRM and ERP workflows, we help businesses work faster with fewer errors."
      },

      serviceOverview: {
            tag: "WORKFLOW AUTOMATION SERVICES",
            title: "Automate repetitive work so your team can focus on what matters most.",
            description: "Our workflow automation services help businesses reduce manual tasks, improve accuracy, and connect different tools into one smooth process. Solvifytech designs automation systems for sales, operations, support, marketing, reporting, and internal business workflows.",
            image: aiService,

            services: [
                  {
                        "title": "Business Process Automation",
                        "description": "We automate repetitive business processes so your team can save time and reduce errors."
                  },
                  {
                        "title": "Sales Workflow Automation",
                        "description": "We automate lead assignment, follow-ups, reminders, deal updates, and sales tracking."
                  },
                  {
                        "title": "Lead Management Automation",
                        "description": "We create systems that capture, organize, and move leads through your sales process."
                  },
                  {
                        "title": "CRM & ERP Workflow Integration",
                        "description": "We connect CRMs, ERPs, forms, emails, WhatsApp, and internal tools."
                  },
                  {
                        "title": "Email & Notification Automation",
                        "description": "We automate emails, alerts, reminders, status updates, and internal notifications."
                  },
                  {
                        "title": "Approval Workflow Automation",
                        "description": "We build approval flows for purchase requests, invoices, leaves, and internal operations."
                  },
                  {
                        "title": "Automation Monitoring & Support",
                        "description": "We monitor workflows and improve them as your business process changes."
                  }
            ]
      },

      developmentTeam: {
            tag: "OUR AUTOMATION ENGINEERS",
            title: "Meet the efficiency experts streamlining operations.",
            description: "Our workflow automation team connects your disparate tools into seamless processes. Using platforms like Zapier, Make, and custom scripts, we eliminate manual work and reduce human error.",
            engineers: [
                  {
                        role: "Automation Architect",
                        name: "Julia K.",
                        experience: "10 years of experience",
                        image: dev1,
                        technologies: ["Make (Integromat)", "Zapier", "Python"],
                        company: bbva,
                        certifications: ["Automation Pro", "Process Engineering"],
                  },
                  {
                        role: "API Specialist",
                        name: "Tom N.",
                        experience: "7 years of experience",
                        image: dev2,
                        technologies: ["REST", "GraphQL", "Postman"],
                        company: johnson,
                        certifications: ["API Design", "Integration Expert"],
                  },
                  {
                        role: "Data Transformation Eng.",
                        name: "Sarah L.",
                        experience: "6 years of experience",
                        image: dev3,
                        technologies: ["JavaScript", "Regex", "SQL"],
                        company: adobe,
                        certifications: ["Data Processing", "Logic Design"],
                  },
                  {
                        role: "Business Systems Analyst",
                        name: "Michael J.",
                        experience: "8 years of experience",
                        image: dev4,
                        technologies: ["BPMN", "Lucidchart", "Jira"],
                        company: siriusxm,
                        certifications: ["Business Analysis", "Process Improvement"],
                  },
                  {
                        role: "Quality Assurance",
                        name: "Emily D.",
                        experience: "5 years of experience",
                        image: dev5,
                        technologies: ["Automated Testing", "Monitoring", "PagerDuty"],
                        company: motorolla,
                        certifications: ["QA Pro", "Reliability Engineering"],
                  },
            ]
      },

      industriesSolutions: {
            tag: "WORKFLOW AUTOMATION ACROSS INDUSTRIES",
            title: "Automate industry workflows that slow down your team.",
            description: "Manual work wastes time and increases errors. Solvifytech builds automation systems that connect tools, teams, departments, and repetitive processes.",
            industries: [
                  {
                        title: "Sales Teams",
                        description: "We automate lead capture, assignment, follow-ups, and CRM updates.",
                        image: industryImage,
                        solutions: [
                              "Lead routing automation",
                              "CRM update workflow",
                              "Follow-up reminder system",
                              "Proposal follow-up flow",
                              "WhatsApp sales alerts",
                              "Sales reporting dashboard"
                        ]
                  },
                  {
                        title: "Healthcare",
                        description: "We automate appointment reminders, patient updates, and admin workflows.",
                        image: industryImage,
                        solutions: [
                              "Appointment reminder workflow",
                              "Patient follow-up automation",
                              "Report sharing system",
                              "Doctor schedule alerts",
                              "Patient feedback automation",
                              "Admin task automation"
                        ]
                  },
                  {
                        title: "Real Estate",
                        description: "We automate inquiry management, site visits, document workflows, and sales updates.",
                        image: industryImage,
                        solutions: [
                              "Property inquiry automation",
                              "Site visit reminder flow",
                              "Lead assignment system",
                              "Document collection workflow",
                              "WhatsApp follow-up automation",
                              "Project inquiry dashboard"
                        ]
                  },
                  {
                        title: "eCommerce",
                        description: "We automate order updates, customer communication, and backend workflows.",
                        image: industryImage,
                        solutions: [
                              "Order notification workflow",
                              "Abandoned cart automation",
                              "Inventory alert system",
                              "Review request automation",
                              "Shipping update automation",
                              "Return request workflow"
                        ]
                  },
                  {
                        title: "HR & Admin",
                        description: "We automate employee requests, approvals, onboarding, and internal notifications.",
                        image: industryImage,
                        solutions: [
                              "Leave approval workflow",
                              "Employee onboarding flow",
                              "Attendance alert system",
                              "Document collection workflow",
                              "Admin approval system",
                              "Internal task notifications"
                        ]
                  },
                  {
                        title: "Finance & Operations",
                        description: "We automate invoices, approvals, payment reminders, and reports.",
                        image: industryImage,
                        solutions: [
                              "Invoice approval workflow",
                              "Payment reminder automation",
                              "Expense approval system",
                              "Daily report automation",
                              "Vendor bill tracking",
                              "Purchase request workflow"
                        ]
                  },
            ]
      },

      capabilities: {
            label: "WORKFLOW AUTOMATION CAPABILITIES",
            title: "We cover the automation stack and everything around it.",
            description: "We automate repetitive business processes by connecting tools, CRMs, forms, emails, WhatsApp, and internal systems.",
            capabilities: [
                  {
                        "title": "Business Process Automation",
                        "description": "Automate repetitive daily operations.",
                        "tools": [
                              {
                                    "name": "n8n",
                                    "logo": "/images/tool-tech/n8n.svg"
                              },
                              {
                                    "name": "Zapier",
                                    "logo": "/images/tool-tech/zapier.svg"
                              },
                              {
                                    "name": "Make",
                                    "logo": "/images/tool-tech/make.svg"
                              }
                        ]
                  },
                  {
                        "title": "CRM Automation",
                        "description": "Automate lead creation, assignment, and follow-ups.",
                        "tools": [
                              {
                                    "name": "HubSpot",
                                    "logo": "/images/tool-tech/hubspot.svg"
                              },
                              {
                                    "name": "Zoho",
                                    "logo": "/images/tool-tech/zoho.svg"
                              },
                              {
                                    "name": "Custom CRM",
                                    "logo": "/images/tool-tech/custom-crm.svg"
                              }
                        ]
                  },
                  {
                        "title": "Email & Notification Flows",
                        "description": "Send automated updates and reminders.",
                        "tools": [
                              {
                                    "name": "Gmail",
                                    "logo": "/images/tool-tech/gmail.svg"
                              },
                              {
                                    "name": "SMTP",
                                    "logo": "/images/tool-tech/smtp.svg"
                              },
                              {
                                    "name": "Slack",
                                    "logo": "/images/tool-tech/slack.svg"
                              },
                              {
                                    "name": "WhatsApp",
                                    "logo": "/images/tool-tech/whatsapp.svg"
                              }
                        ]
                  },
                  {
                        "title": "Approval Workflows",
                        "description": "Automate requests, approvals, and status updates.",
                        "tools": [
                              {
                                    "name": "Forms",
                                    "logo": "/images/tool-tech/forms.svg"
                              },
                              {
                                    "name": "Dashboards",
                                    "logo": "/images/tool-tech/dashboards.svg"
                              },
                              {
                                    "name": "Admin Panels",
                                    "logo": "/images/tool-tech/admin-panels.svg"
                              }
                        ]
                  },
                  {
                        "title": "Reporting Automation",
                        "description": "Generate daily, weekly, and monthly reports.",
                        "tools": [
                              {
                                    "name": "Google Sheets",
                                    "logo": "/images/tool-tech/google-sheets.svg"
                              },
                              {
                                    "name": "Power BI",
                                    "logo": "/images/tool-tech/power-bi.svg"
                              },
                              {
                                    "name": "Looker Studio",
                                    "logo": "/images/tool-tech/looker-studio.svg"
                              }
                        ]
                  }
            ]
      }
};

export default workflowAutomation;
