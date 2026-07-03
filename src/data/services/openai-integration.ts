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

const openaiIntegration = {
      slug: "openai-integration",

      hero: {
            serviceName: "OpenAI Integration",
            tagline: "OPENAI INTEGRATION SERVICES",
            title: "Bring the power of AI into your products, platforms, and workflows with seamless OpenAI integration.",
            description: "From AI assistants and document intelligence to smart search and content generation, Solvifytech integrates OpenAI into your existing applications to improve productivity, automate complex tasks, and create intelligent user experiences."
      },

      serviceOverview: {
            tag: "OPENAI INTEGRATION SERVICES",
            title: "Bring AI into your products, tools, and business workflows.",
            description: "We help businesses integrate OpenAI into websites, apps, CRMs, ERPs, chat systems, and internal tools. Solvifytech creates AI-powered features that generate content, answer questions, summarize data, automate support, and improve productivity.",
            image: aiService,

            services: [
                  {
                        "title": "OpenAI API Integration",
                        "description": "We integrate OpenAI into your website, app, CRM, ERP, or internal business tools."
                  },
                  {
                        "title": "AI Chat Assistant Integration",
                        "description": "We build AI chat assistants that answer questions, guide users, and support your team."
                  },
                  {
                        "title": "Content Generation Tools",
                        "description": "We create AI tools for product descriptions, emails, blogs, reports, and marketing content."
                  },
                  {
                        "title": "Document Summarization Systems",
                        "description": "We build AI systems that summarize PDFs, reports, contracts, emails, and business documents."
                  },
                  {
                        "title": "AI Search & Knowledge Base",
                        "description": "We create AI-powered search systems that help users find answers from internal data."
                  },
                  {
                        "title": "CRM & ERP AI Integration",
                        "description": "We add AI features into business systems to improve productivity and automation."
                  },
                  {
                        "title": "Custom GPT-Based Tools",
                        "description": "We develop custom GPT-powered tools for your specific business use case."
                  }
            ]
      },

      developmentTeam: {
            tag: "OUR OPENAI INTEGRATION TEAM",
            title: "Meet the engineers connecting apps to LLMs.",
            description: "Integrating OpenAI models requires expertise in prompt engineering, context window management, and vector databases. Our team seamlessly embeds LLM capabilities into your existing applications.",
            engineers: [
                  {
                        role: "LLM Integration Lead",
                        name: "Peter C.",
                        experience: "10 years of experience",
                        image: dev1,
                        technologies: ["OpenAI API", "Python", "Node.js"],
                        company: bbva,
                        certifications: ["AI Integration", "Software Architecture"],
                  },
                  {
                        role: "Vector DB Engineer",
                        name: "Mia L.",
                        experience: "6 years of experience",
                        image: dev2,
                        technologies: ["Pinecone", "Milvus", "PostgreSQL/pgvector"],
                        company: johnson,
                        certifications: ["Database Systems", "Information Retrieval"],
                  },
                  {
                        role: "Prompt Optimization Eng.",
                        name: "Julian R.",
                        experience: "4 years of experience",
                        image: dev3,
                        technologies: ["LangChain", "LlamaIndex", "JSON Lines"],
                        company: adobe,
                        certifications: ["Advanced Prompting", "Fine-tuning Basics"],
                  },
                  {
                        role: "Backend Developer",
                        name: "Chloe F.",
                        experience: "7 years of experience",
                        image: dev4,
                        technologies: ["Go", "Express", "GraphQL"],
                        company: siriusxm,
                        certifications: ["Backend Pro", "API Security"],
                  },
                  {
                        role: "AI Ethics Specialist",
                        name: "Martin K.",
                        experience: "8 years of experience",
                        image: dev5,
                        technologies: ["Content Moderation", "Guardrails", "Python"],
                        company: motorolla,
                        certifications: ["AI Safety", "Compliance"],
                  },
            ]
      },

      industriesSolutions: {
            tag: "OPENAI INTEGRATION ACROSS INDUSTRIES",
            title: "Add AI features to your products, platforms, and business workflows.",
            description: "OpenAI can support smarter search, summaries, content, chat, automation, and data handling. Solvifytech integrates OpenAI into business systems with practical use cases.",
            industries: [
                  {
                        title: "SaaS Products",
                        description: "We add AI features that make SaaS platforms more useful and productive.",
                        image: industryImage,
                        solutions: [
                              "AI product assistants",
                              "Smart search features",
                              "Content generation tools",
                              "Report summary systems",
                              "User support AI",
                              "Dashboard insight assistants"
                        ]
                  },
                  {
                        title: "Healthcare",
                        description: "We build AI tools for admin teams, patient communication, and document handling.",
                        image: industryImage,
                        solutions: [
                              "Medical report summarization",
                              "Patient support assistants",
                              "Appointment AI assistants",
                              "Healthcare knowledge bots",
                              "Doctor note summaries",
                              "Clinic workflow AI"
                        ]
                  },
                  {
                        title: "Education",
                        description: "We create AI learning tools for students, teachers, and EdTech platforms.",
                        image: industryImage,
                        solutions: [
                              "AI tutors",
                              "Quiz generation tools",
                              "Lesson summary assistants",
                              "Student doubt chatbots",
                              "Course recommendation AI",
                              "Study material generators"
                        ]
                  },
                  {
                        title: "Legal & Finance",
                        description: "We develop AI tools for document review, summaries, and internal research.",
                        image: industryImage,
                        solutions: [
                              "Contract summary tools",
                              "Document Q&A systems",
                              "Financial report assistants",
                              "Compliance knowledge bots",
                              "Proposal drafting AI",
                              "Data extraction tools"
                        ]
                  },
                  {
                        title: "eCommerce",
                        description: "We integrate AI for product content, customer support, and search.",
                        image: industryImage,
                        solutions: [
                              "Product description generators",
                              "AI product search",
                              "Review summary tools",
                              "Customer support assistants",
                              "Product recommendation chatbots",
                              "Campaign content generators"
                        ]
                  },
                  {
                        title: "Internal Teams",
                        description: "We build AI tools that help employees find answers and complete work faster.",
                        image: industryImage,
                        solutions: [
                              "Internal knowledge assistants",
                              "Email drafting assistants",
                              "Report generation tools",
                              "Meeting summary AI",
                              "SOP Q&A bots",
                              "Data analysis assistants"
                        ]
                  },
            ]
      },

      capabilities: {
            label: "OPENAI INTEGRATION CAPABILITIES",
            title: "We cover the OpenAI stack and everything around it.",
            description: "We integrate OpenAI into websites, apps, CRMs, ERPs, SaaS platforms, and internal business workflows.",
            capabilities: [
                  {
                        "title": "OpenAI API Integration",
                        "description": "Add AI features into your product or system.",
                        "tools": [
                              {
                                    "name": "GPT API",
                                    "logo": "/images/tool-tech/gpt-api.svg"
                              },
                              {
                                    "name": "Assistants API",
                                    "logo": "/images/tool-tech/assistants-api.svg"
                              }
                        ]
                  },
                  {
                        "title": "AI Chat Assistants",
                        "description": "Build intelligent assistants for users and teams.",
                        "tools": [
                              {
                                    "name": "GPT",
                                    "logo": "/images/tool-tech/gpt.svg"
                              },
                              {
                                    "name": "RAG",
                                    "logo": "/images/tool-tech/rag.svg"
                              },
                              {
                                    "name": "Knowledge Base",
                                    "logo": "/images/tool-tech/knowledge-base.svg"
                              }
                        ]
                  },
                  {
                        "title": "Document AI",
                        "description": "Summarize, search, and analyze documents.",
                        "tools": [
                              {
                                    "name": "PDF Parsing",
                                    "logo": "/images/tool-tech/pdf-parsing.svg"
                              },
                              {
                                    "name": "Embeddings",
                                    "logo": "/images/tool-tech/embeddings.svg"
                              },
                              {
                                    "name": "Vector DB",
                                    "logo": "/images/tool-tech/vector-db.svg"
                              }
                        ]
                  },
                  {
                        "title": "Content Generation Tools",
                        "description": "Generate blogs, emails, product content, and reports.",
                        "tools": [
                              {
                                    "name": "GPT",
                                    "logo": "/images/tool-tech/gpt.svg"
                              },
                              {
                                    "name": "Prompt Engineering",
                                    "logo": "/images/tool-tech/prompt-engineering.svg"
                              }
                        ]
                  },
                  {
                        "title": "AI Search Systems",
                        "description": "Create smart search over internal data.",
                        "tools": [
                              {
                                    "name": "Pinecone",
                                    "logo": "/images/tool-tech/pinecone.svg"
                              },
                              {
                                    "name": "Supabase",
                                    "logo": "/images/tool-tech/supabase.svg"
                              },
                              {
                                    "name": "Elasticsearch",
                                    "logo": "/images/tool-tech/elasticsearch.svg"
                              }
                        ]
                  }
            ]
      }
};

export default openaiIntegration;
