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

const aiAgents = {
      slug: "ai-agents",

      hero: {
            serviceName: "AI Agents",
            tagline: "AI AGENTS DEVELOPMENT SERVICES",
            title: "Deploy intelligent AI agents that automate complex tasks, support your teams, and work around the clock.",
            description: "Solvifytech develops custom AI agents that understand workflows, interact with business systems, and complete multi-step tasks with minimal human intervention—boosting productivity, reducing manual work, and improving operational efficiency."
      },

      serviceOverview: {
            tag: "AI AGENTS DEVELOPMENT SERVICES",
            title: "Build intelligent agents that automate work and support your business around the clock.",
            description: "AI agents can help your business handle repetitive tasks, process information, answer questions, and connect with your internal systems. Solvifytech builds practical AI agents that work inside your real business workflows and reduce manual effort.",
            image: aiService,

            services: [
                  {
                        "title": "Custom AI Agent Development",
                        "description": "We build AI agents that can understand tasks, follow instructions, and support business workflows."
                  },
                  {
                        "title": "AI Workflow Agent Design",
                        "description": "We design agent workflows that automate multi-step tasks across tools and teams."
                  },
                  {
                        "title": "AI Agent Integration with CRM & ERP",
                        "description": "We connect AI agents with your CRM, ERP, website, WhatsApp, or internal software."
                  },
                  {
                        "title": "Website AI Assistant Development",
                        "description": "We create AI assistants that guide visitors, answer questions, and support lead generation."
                  },
                  {
                        "title": "Internal Business Automation Agents",
                        "description": "We build AI agents for internal teams to reduce repetitive tasks and improve productivity."
                  },
                  {
                        "title": "Multi-Step Task Automation",
                        "description": "We develop agents that complete structured tasks like summaries, follow-ups, and reporting."
                  },
                  {
                        "title": "AI Agent Support & Maintenance",
                        "description": "We monitor and improve AI agents so they remain useful, accurate, and reliable."
                  }
            ]
      },

      developmentTeam: {
            tag: "OUR AI AGENT EXPERTS",
            title: "Meet the engineers building autonomous AI systems.",
            description: "Our AI Agent development team specializes in creating autonomous systems that can reason, learn, and act independently. From LLM orchestration to multi-agent frameworks, these experts bring intelligence to your operations.",
            engineers: [
                  {
                        role: "Lead AI Agent Architect",
                        name: "David L.",
                        experience: "9 years of experience",
                        image: dev1,
                        technologies: ["LangChain", "Python", "OpenAI"],
                        company: bbva,
                        certifications: ["AI Architecture Professional", "Certified LLM Expert"],
                  },
                  {
                        role: "Autonomous Systems Engineer",
                        name: "Sarah M.",
                        experience: "6 years of experience",
                        image: dev2,
                        technologies: ["AutoGPT", "Node.js", "Docker"],
                        company: johnson,
                        certifications: ["Machine Learning Specialist", "Cloud AI Developer"],
                  },
                  {
                        role: "Prompt Engineer",
                        name: "Alex K.",
                        experience: "4 years of experience",
                        image: dev3,
                        technologies: ["GPT-4", "Claude", "Vector DBs"],
                        company: adobe,
                        certifications: ["Advanced Prompting", "NLP Specialist"],
                  },
                  {
                        role: "Backend Developer",
                        name: "James R.",
                        experience: "8 years of experience",
                        image: dev4,
                        technologies: ["Go", "PostgreSQL", "Redis"],
                        company: siriusxm,
                        certifications: ["Backend Systems Expert", "Data Engineering"],
                  },
                  {
                        role: "Integration Specialist",
                        name: "Elena V.",
                        experience: "7 years of experience",
                        image: dev5,
                        technologies: ["Python", "APIs", "AWS"],
                        company: motorolla,
                        certifications: ["Cloud Integration Architect", "API Design"],
                  },
            ]


      },
      industriesSolutions: {
            tag: "AI AGENTS ACROSS INDUSTRIES",
            title: "Build AI agents that understand your business tasks and support your teams.",
            description: "AI agents can handle repetitive tasks, answer questions, process data, and support business workflows. Solvifytech builds AI agents that connect with your tools and work inside real processes.",
            industries: [
                  {
                        title: "Customer Support",
                        description: "We create AI agents that answer questions and reduce manual support effort.",
                        image: industryImage,
                        solutions: [
                              "Support AI agents",
                              "FAQ automation agents",
                              "Ticket assistants",
                              "Complaint handling assistants",
                              "Knowledge base agents",
                              "Support summary reports"
                        ]
                  },
                  {
                        title: "Sales & Lead Management",
                        description: "We build AI agents that qualify leads and support sales follow-ups.",
                        image: industryImage,
                        solutions: [
                              "Lead qualification agents",
                              "Follow-up AI agents",
                              "CRM update agents",
                              "Inquiry handling assistants",
                              "Sales reminder automation",
                              "Lead scoring agents"
                        ]
                  },
                  {
                        title: "Healthcare",
                        description: "We create AI agents for patient queries, appointments, and admin support.",
                        image: industryImage,
                        solutions: [
                              "Patient inquiry agents",
                              "Appointment booking agents",
                              "Report summary agents",
                              "Clinic support bots",
                              "Doctor availability assistants",
                              "Hospital admin assistants"
                        ]
                  },
                  {
                        title: "Real Estate",
                        description: "We build AI agents that respond to property inquiries and guide prospects.",
                        image: industryImage,
                        solutions: [
                              "Property inquiry agents",
                              "Project information assistants",
                              "Site visit booking agents",
                              "Lead scoring agents",
                              "Buyer follow-up agents",
                              "Property recommendation agents"
                        ]
                  },
                  {
                        title: "HR & Recruitment",
                        description: "We develop AI agents for screening, onboarding, and employee support.",
                        image: industryImage,
                        solutions: [
                              "Resume screening agents",
                              "HR policy assistants",
                              "Employee onboarding agents",
                              "Interview scheduling agents",
                              "Candidate query bots",
                              "Recruitment workflow agents"
                        ]
                  },
                  {
                        title: "Operations",
                        description: "We create AI agents that help teams complete repetitive internal tasks faster.",
                        image: industryImage,
                        solutions: [
                              "Data entry agents",
                              "Daily reporting agents",
                              "Task management assistants",
                              "Document processing agents",
                              "Email summary agents",
                              "Internal knowledge agents"
                        ]
                  },
            ]
      },

      capabilities: {
            label: "AI AGENTS CAPABILITIES",
            title: "We cover the AI agent stack and everything around it.",
            description: "We build AI agents that can understand tasks, connect with tools, automate workflows, and support business teams.",
            capabilities: [
                  {
                        "title": "Custom AI Agents",
                        "description": "Build task-based agents for business operations.",
                        "tools": [
                              {
                                    "name": "OpenAI",
                                    "logo": "/images/tool-tech/openai.svg"
                              },
                              {
                                    "name": "LangChain",
                                    "logo": "/images/tool-tech/langchain.svg"
                              },
                              {
                                    "name": "CrewAI",
                                    "logo": "/images/tool-tech/crewai.svg"
                              }
                        ]
                  },
                  {
                        "title": "Workflow Agents",
                        "description": "Automate multi-step tasks across tools.",
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
                                    "name": "APIs",
                                    "logo": "/images/tool-tech/apis.svg"
                              },
                              {
                                    "name": "Webhooks",
                                    "logo": "/images/tool-tech/webhooks.svg"
                              }
                        ]
                  },
                  {
                        "title": "CRM & ERP Agents",
                        "description": "Connect AI agents with business systems.",
                        "tools": [
                              {
                                    "name": "CRM API",
                                    "logo": "/images/tool-tech/crm-api.svg"
                              },
                              {
                                    "name": "ERP API",
                                    "logo": "/images/tool-tech/erp-api.svg"
                              },
                              {
                                    "name": "Custom Integrations",
                                    "logo": "/images/tool-tech/custom-integrations.svg"
                              }
                        ]
                  },
                  {
                        "title": "Knowledge Base Agents",
                        "description": "Train agents on your business documents and FAQs.",
                        "tools": [
                              {
                                    "name": "RAG",
                                    "logo": "/images/tool-tech/rag.svg"
                              },
                              {
                                    "name": "Vector DB",
                                    "logo": "/images/tool-tech/vector-db.svg"
                              },
                              {
                                    "name": "Pinecone",
                                    "logo": "/images/tool-tech/pinecone.svg"
                              },
                              {
                                    "name": "Supabase",
                                    "logo": "/images/tool-tech/supabase.svg"
                              }
                        ]
                  },
                  {
                        "title": "AI Agent Monitoring",
                        "description": "Improve answers, flows, and performance over time.",
                        "tools": [
                              {
                                    "name": "Logs",
                                    "logo": "/images/tool-tech/logs.svg"
                              },
                              {
                                    "name": "Feedback",
                                    "logo": "/images/tool-tech/feedback.svg"
                              },
                              {
                                    "name": "Prompt Optimization",
                                    "logo": "/images/tool-tech/prompt-optimization.svg"
                              }
                        ]
                  }
            ]
      }
};

export default aiAgents;
