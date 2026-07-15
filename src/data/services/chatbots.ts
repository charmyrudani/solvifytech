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

const chatbots = {
      slug: "chatbots",

      hero: {
            serviceName: "Chatbots",
            tagline: "CHATBOT DEVELOPMENT SERVICES",
            title: "Deliver instant customer support and smarter conversations with AI-powered chatbots built for your business.",
            description:
                  "We create intelligent chatbots for websites, WhatsApp, and business platforms that automate customer interactions, qualify leads, answer questions, and provide seamless support while helping your team save time and improve response quality."
      },

      serviceOverview: {
            tag: "CHATBOT DEVELOPMENT SERVICES",
            title: "Create smarter conversations that help customers get answers faster.",
            description: "Our chatbot development services help businesses automate customer support, lead capture, appointment booking, and internal communication. Solvifytech builds chatbots that are easy to use, connected with your systems, and designed to improve response time without losing the human touch.",
            image: aiService,

            services: [
                  {
                        "title": "Custom Chatbot Development",
                        "description": "We build chatbots based on your business needs, customer journey, and support process."
                  },
                  {
                        "title": "Website Chatbots",
                        "description": "We create website chatbots that answer questions, collect leads, and guide visitors."
                  },
                  {
                        "title": "WhatsApp Chatbots",
                        "description": "We develop WhatsApp chatbots for inquiries, support, bookings, updates, and follow-ups."
                  },
                  {
                        "title": "AI Customer Support Bots",
                        "description": "We create AI-powered bots that help customers get fast answers."
                  },
                  {
                        "title": "Lead Generation Chatbots",
                        "description": "We build bots that qualify leads, collect details, and send data directly to your CRM."
                  },
                  {
                        "title": "CRM & API Integration",
                        "description": "We connect chatbots with CRMs, websites, databases, payment tools, and third-party systems."
                  },
                  {
                        "title": "Multilingual Chatbots",
                        "description": "We develop chatbots that can support customers in multiple languages."
                  }
            ]
      },

      developmentTeam: {
            tag: "OUR CHATBOT EXPERTS",
            title: "Meet the developers behind our smart chatbots.",
            description: "Creating engaging chatbots requires deep knowledge of conversational flows and API integrations. Our team builds intelligent bots for customer support, sales, and internal automation.",
            engineers: [
                  {
                        role: "Chatbot Architect",
                        name: "Steven M.",
                        experience: "8 years of experience",
                        image: dev1,
                        technologies: ["Botpress", "Dialogflow", "Node.js"],
                        company: bbva,
                        certifications: ["Conversational Design", "AI Integration"],
                  },
                  {
                        role: "NLP Developer",
                        name: "Laura J.",
                        experience: "6 years of experience",
                        image: dev2,
                        technologies: ["Python", "Rasa", "Spacy"],
                        company: johnson,
                        certifications: ["Language Processing", "ML Basics"],
                  },
                  {
                        role: "Integration Engineer",
                        name: "Paul W.",
                        experience: "7 years of experience",
                        image: dev3,
                        technologies: ["REST APIs", "Webhooks", "Express.js"],
                        company: adobe,
                        certifications: ["API Architecture", "Security Professional"],
                  },
                  {
                        role: "UX Writer",
                        name: "Emma T.",
                        experience: "4 years of experience",
                        image: dev4,
                        technologies: ["Voiceflow", "Figma", "Miro"],
                        company: siriusxm,
                        certifications: ["UX Writing", "Content Strategy"],
                  },
                  {
                        role: "QA Engineer",
                        name: "Brian S.",
                        experience: "5 years of experience",
                        image: dev5,
                        technologies: ["Selenium", "Jest", "Postman"],
                        company: motorolla,
                        certifications: ["Test Automation", "Quality Assurance"],
                  },
            ]
      },

      industriesSolutions: {
            tag: "CHATBOT SOLUTIONS ACROSS INDUSTRIES",
            title: "Build chatbots that support your customers, leads, and daily communication.",
            description: "Chatbots help businesses reply faster, capture leads, and reduce repetitive communication. Solvifytech builds website, WhatsApp, and AI chatbots for different industries.",
            industries: [
                  {
                        title: "Healthcare",
                        description: "We build chatbots for patient inquiries, appointments, services, and clinic support.",
                        image: industryImage,
                        solutions: [
                              "Appointment booking chatbots",
                              "Hospital FAQ chatbots",
                              "Doctor availability bots",
                              "Patient support chatbots",
                              "Treatment inquiry bots",
                              "WhatsApp patient bots"
                        ]
                  },
                  {
                        title: "Education",
                        description: "We create chatbots for admissions, courses, students, and institute inquiries.",
                        image: industryImage,
                        solutions: [
                              "Admission inquiry bots",
                              "Course information bots",
                              "Student support chatbots",
                              "Counselor booking bots",
                              "Class schedule bots",
                              "WhatsApp admission bots"
                        ]
                  },
                  {
                        title: "Real Estate",
                        description: "We build chatbots that handle property inquiries and collect buyer details.",
                        image: industryImage,
                        solutions: [
                              "Project inquiry chatbots",
                              "Property recommendation bots",
                              "Site visit booking bots",
                              "Buyer detail collection",
                              "Price and availability bots",
                              "WhatsApp property bots"
                        ]
                  },
                  {
                        title: "eCommerce",
                        description: "We create chatbots for product support, order status, returns, and customer service.",
                        image: industryImage,
                        solutions: [
                              "Product recommendation bots",
                              "Order tracking chatbots",
                              "Return support bots",
                              "Cart recovery chatbots",
                              "Product inquiry bots",
                              "WhatsApp shopping bots"
                        ]
                  },
                  {
                        title: "Professional Services",
                        description: "We develop chatbots for consultation booking, lead capture, and service inquiries.",
                        image: industryImage,
                        solutions: [
                              "Service inquiry chatbots",
                              "Consultation booking bots",
                              "Lead capture chatbots",
                              "Proposal request bots",
                              "Website assistants",
                              "CRM-connected chatbots"
                        ]
                  },
                  {
                        title: "Travel & Hospitality",
                        description: "We build chatbots for bookings, availability, packages, and customer questions.",
                        image: industryImage,
                        solutions: [
                              "Hotel booking chatbots",
                              "Travel package inquiry bots",
                              "Availability checking bots",
                              "Itinerary information bots",
                              "Payment reminder bots",
                              "Feedback collection bots"
                        ]
                  },
            ]
      },

      capabilities: {
            label: "CHATBOT DEVELOPMENT CAPABILITIES",
            title: "We cover the chatbot stack and everything around it.",
            description: "We build chatbots for websites, WhatsApp, support, lead generation, and customer communication.",
            capabilities: [
                  {
                        "title": "Website Chatbots",
                        "description": "Answer visitor questions and capture leads.",
                        "tools": [
                              {
                                    "name": "Custom Chatbot",
                                    "logo": "/images/tool-tech/custom-chatbot.svg"
                              },
                              {
                                    "name": "AI Chat Widget",
                                    "logo": "/images/tool-tech/ai-chat-widget.svg"
                              }
                        ]
                  },
                  {
                        "title": "WhatsApp Chatbots",
                        "description": "Automate conversations on WhatsApp.",
                        "tools": [
                              {
                                    "name": "WhatsApp Business API",
                                    "logo": "/images/tool-tech/whatsapp-business-api.svg"
                              },
                              {
                                    "name": "Meta API",
                                    "logo": "/images/tool-tech/meta-api.svg"
                              }
                        ]
                  },
                  {
                        "title": "AI Support Bots",
                        "description": "Handle customer support with smart responses.",
                        "tools": [
                              {
                                    "name": "OpenAI",
                                    "logo": "/images/tool-tech/openai.svg"
                              },
                              {
                                    "name": "Knowledge Base",
                                    "logo": "/images/tool-tech/knowledge-base.svg"
                              },
                              {
                                    "name": "RAG",
                                    "logo": "/images/tool-tech/rag.svg"
                              }
                        ]
                  },
                  {
                        "title": "Lead Generation Bots",
                        "description": "Qualify leads and send data to CRM.",
                        "tools": [
                              {
                                    "name": "CRM API",
                                    "logo": "/images/tool-tech/crm-api.svg"
                              },
                              {
                                    "name": "Forms",
                                    "logo": "/images/tool-tech/forms.svg"
                              },
                              {
                                    "name": "Webhooks",
                                    "logo": "/images/tool-tech/webhooks.svg"
                              }
                        ]
                  },
                  {
                        "title": "Multilingual Chatbots",
                        "description": "Support users in multiple languages.",
                        "tools": [
                              {
                                    "name": "Translation AI",
                                    "logo": "/images/tool-tech/translation-ai.svg"
                              },
                              {
                                    "name": "NLP",
                                    "logo": "/images/tool-tech/nlp.svg"
                              },
                              {
                                    "name": "Custom Flows",
                                    "logo": "/images/tool-tech/custom-flows.svg"
                              }
                        ]
                  }
            ]
      }
};

export default chatbots;
