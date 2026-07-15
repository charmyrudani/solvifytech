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

const whatsappAutomation = {
      slug: "whatsapp-automation",

      hero: {
            serviceName: "WhatsApp Automation",
            tagline: "WHATSAPP AUTOMATION SERVICES",
            title: "Turn WhatsApp into a powerful business channel for sales, support, and customer engagement.",
            description: "We develop WhatsApp automation solutions that simplify customer communication, automate follow-ups, manage inquiries, and connect conversations with your CRM—helping businesses respond faster and build stronger customer relationships."
      },

      serviceOverview: {
            tag: "WHATSAPP AUTOMATION SERVICES",
            title: "Use WhatsApp to automate conversations, leads, support, and customer updates.",
            description: "We build WhatsApp automation systems that help businesses communicate faster and manage customer interactions efficiently. Solvifytech creates automated flows for inquiries, lead capture, reminders, order updates, support, and follow-ups.",
            image: aiService,

            services: [
                  {
                        "title": "WhatsApp Chatbot Development",
                        "description": "We build WhatsApp bots that answer questions, collect details, and guide customers automatically."
                  },
                  {
                        "title": "WhatsApp Lead Automation",
                        "description": "We automate lead capture, qualification, assignment, and follow-up through WhatsApp."
                  },
                  {
                        "title": "WhatsApp CRM Integration",
                        "description": "We connect WhatsApp conversations with your CRM so every interaction is tracked."
                  },
                  {
                        "title": "Automated Customer Support",
                        "description": "We create automated support flows for common questions, service requests, and updates."
                  },
                  {
                        "title": "Order & Status Notifications",
                        "description": "We automate order updates, payment reminders, delivery updates, and service notifications."
                  },
                  {
                        "title": "Appointment Reminder Automation",
                        "description": "We send automated reminders for meetings, consultations, bookings, and appointments."
                  },
                  {
                        "title": "WhatsApp Campaign Automation",
                        "description": "We help businesses run structured WhatsApp campaigns with better targeting and tracking."
                  }
            ]
      },

      developmentTeam: {
            tag: "OUR WHATSAPP AUTOMATION TEAM",
            title: "Meet the developers building conversational commerce.",
            description: "The WhatsApp Business API unlocks massive communication potential. Our team builds custom chat flows, integrates product catalogs, and connects WhatsApp with your CRM and support tools.",
            engineers: [
                  {
                        role: "Conversational Architect",
                        name: "Diego S.",
                        experience: "9 years of experience",
                        image: dev1,
                        technologies: ["WhatsApp API", "Node.js", "Webhooks"],
                        company: bbva,
                        certifications: ["Conversational Design", "API Expert"],
                  },
                  {
                        role: "Bot Developer",
                        name: "Ana P.",
                        experience: "6 years of experience",
                        image: dev2,
                        technologies: ["Dialogflow", "JavaScript", "Redis"],
                        company: johnson,
                        certifications: ["Chatbot Development", "AI Basics"],
                  },
                  {
                        role: "CRM Integration Eng.",
                        name: "Carlos M.",
                        experience: "7 years of experience",
                        image: dev3,
                        technologies: ["Salesforce API", "Python", "REST"],
                        company: adobe,
                        certifications: ["System Integration", "Data Sync"],
                  },
                  {
                        role: "Backend Performance Eng.",
                        name: "Elena R.",
                        experience: "8 years of experience",
                        image: dev4,
                        technologies: ["Go", "Kafka", "PostgreSQL"],
                        company: siriusxm,
                        certifications: ["High Concurrency", "Backend Architecture"],
                  },
                  {
                        role: "Data Analyst",
                        name: "Bruno T.",
                        experience: "5 years of experience",
                        image: dev5,
                        technologies: ["SQL", "Looker", "Excel"],
                        company: motorolla,
                        certifications: ["Analytics", "Business Intelligence"],
                  },
            ]
      },

      industriesSolutions: {
            tag: "WHATSAPP AUTOMATION ACROSS INDUSTRIES",
            title: "Use WhatsApp to automate customer communication and lead management.",
            description: "WhatsApp helps businesses communicate faster with customers. Solvifytech builds WhatsApp automation for inquiries, reminders, campaigns, support, and CRM workflows.",
            industries: [
                  {
                        title: "Healthcare",
                        description: "We automate appointment reminders, patient inquiries, and clinic updates.",
                        image: industryImage,
                        solutions: [
                              "Appointment reminder flow",
                              "Patient inquiry bot",
                              "Report alert automation",
                              "Doctor availability updates",
                              "Follow-up reminder system",
                              "Hospital WhatsApp support"
                        ]
                  },
                  {
                        title: "Real Estate",
                        description: "We automate property inquiries, site visit confirmations, and follow-ups.",
                        image: industryImage,
                        solutions: [
                              "Project inquiry automation",
                              "Site visit reminder flow",
                              "Lead follow-up system",
                              "Property brochure sharing",
                              "CRM lead sync",
                              "Buyer qualification flow"
                        ]
                  },
                  {
                        title: "Education",
                        description: "We build WhatsApp flows for admissions, courses, reminders, and student updates.",
                        image: industryImage,
                        solutions: [
                              "Admission inquiry flow",
                              "Course information bot",
                              "Fee reminder automation",
                              "Counselor assignment",
                              "Student support automation",
                              "Admission follow-up system"
                        ]
                  },
                  {
                        title: "eCommerce",
                        description: "We automate order updates, delivery alerts, offers, and customer support.",
                        image: industryImage,
                        solutions: [
                              "Order confirmation flow",
                              "Delivery update automation",
                              "Return support bot",
                              "Cart recovery messages",
                              "Product inquiry automation",
                              "Customer feedback system"
                        ]
                  },
                  {
                        title: "Professional Services",
                        description: "We automate consultation inquiries, appointment booking, and client communication.",
                        image: industryImage,
                        solutions: [
                              "Consultation booking flow",
                              "Service inquiry automation",
                              "Proposal follow-up messages",
                              "WhatsApp lead qualification",
                              "CRM update workflow",
                              "Appointment confirmation"
                        ]
                  },
                  {
                        title: "Local Businesses",
                        description: "We create simple WhatsApp automation for everyday customer communication.",
                        image: industryImage,
                        solutions: [
                              "Inquiry reply automation",
                              "Booking request flow",
                              "Price list sharing",
                              "Customer feedback flow",
                              "Offer broadcast setup",
                              "Basic CRM integration"
                        ]
                  },
            ]
      },

      capabilities: {
            label: "WHATSAPP AUTOMATION CAPABILITIES",
            title: "We cover the WhatsApp automation stack and everything around it.",
            description: "We build WhatsApp automation systems for inquiries, support, reminders, campaigns, lead capture, and CRM updates.",
            capabilities: [
                  {
                        "title": "WhatsApp Business API Setup",
                        "description": "Set up WhatsApp for business automation.",
                        "tools": [
                              {
                                    "name": "Meta API",
                                    "logo": "/images/tool-tech/meta-api.svg"
                              },
                              {
                                    "name": "WhatsApp Cloud API",
                                    "logo": "/images/tool-tech/whatsapp-cloud-api.svg"
                              }
                        ]
                  },
                  {
                        "title": "WhatsApp Chatbots",
                        "description": "Automate inquiries and customer conversations.",
                        "tools": [
                              {
                                    "name": "Bot Flows",
                                    "logo": "/images/tool-tech/bot-flows.svg"
                              },
                              {
                                    "name": "AI Chatbot",
                                    "logo": "/images/tool-tech/ai-chatbot.svg"
                              },
                              {
                                    "name": "FAQs",
                                    "logo": "/images/tool-tech/faqs.svg"
                              }
                        ]
                  },
                  {
                        "title": "Lead Automation",
                        "description": "Capture and send WhatsApp leads to CRM.",
                        "tools": [
                              {
                                    "name": "CRM API",
                                    "logo": "/images/tool-tech/crm-api.svg"
                              },
                              {
                                    "name": "Webhooks",
                                    "logo": "/images/tool-tech/webhooks.svg"
                              },
                              {
                                    "name": "Forms",
                                    "logo": "/images/tool-tech/forms.svg"
                              }
                        ]
                  },
                  {
                        "title": "Reminder Automation",
                        "description": "Send appointment, payment, and follow-up reminders.",
                        "tools": [
                              {
                                    "name": "Scheduler",
                                    "logo": "/images/tool-tech/scheduler.svg"
                              },
                              {
                                    "name": "WhatsApp Templates",
                                    "logo": "/images/tool-tech/whatsapp-templates.svg"
                              }
                        ]
                  },
                  {
                        "title": "Campaign Automation",
                        "description": "Run structured WhatsApp campaigns.",
                        "tools": [
                              {
                                    "name": "Broadcast Flows",
                                    "logo": "/images/tool-tech/broadcast-flows.svg"
                              },
                              {
                                    "name": "Segments",
                                    "logo": "/images/tool-tech/segments.svg"
                              },
                              {
                                    "name": "Tracking",
                                    "logo": "/images/tool-tech/tracking.svg"
                              }
                        ]
                  }
            ]
      }
};

export default whatsappAutomation;
