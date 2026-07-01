import dev1 from '/images/hero-section/dev1.avif'
import dev2 from '/images/hero-section/dev1.avif'
import dev3 from '/images/hero-section/dev1.avif'
import dev4 from '/images/hero-section/dev1.avif'
import dev5 from '/images/hero-section/dev1.avif'
import industryImage from "/images/services/industry.png"
import powerBI from "/images/tool-tech/powerbi.png"
import aiService from '/images/services/ai-service.png';

const aiDevelopment = {
  slug: "ai-development",

  hero: {
    serviceName: "AI Development",
    tagline: "AI DEVELOPMENT SERVICES",
    title: "Build intelligent solutions that make your business faster, smarter, and more efficient.",
    description: "Our AI development services help businesses automate tasks, improve decisions, and create smarter digital experiences. From custom AI tools to business automation systems, Solvifytech builds practical AI solutions designed around real workflows and measurable business value. "
  },

  serviceOverview: {
    tag: "AI DEVELOPMENT SERVICES",
    title: "Build intelligent solutions that make your business faster, smarter, and more efficient.",
    description: "Our AI development services help businesses automate tasks, improve decisions, and create smarter digital experiences. From custom AI tools to business automation systems, Solvifytech builds practical AI solutions designed around real workflows and measurable business value.",
    image: aiService,

    services: [
      {
        title: "Custom AI Solution Development",
        description:
          "We build AI-powered tools tailored to your business process, helping teams automate work and improve decision-making.",
      },
      {
        title: "Machine Learning Model Development",
        description:
          "We develop models that identify patterns, predict outcomes, and support smarter business operations.",
      },
      {
        title: "AI-Powered Business Automation",
        description:
          "We use AI to reduce repetitive manual work across sales, support, reporting, and internal workflows.",
      },
      {
        title: "Natural Language Processing",
        description:
          "We create AI systems that understand, process, and respond to human language in a business context.",
      },
      {
        title: "AI Integration with Existing Systems",
        description:
          "We connect AI features with your CRM, ERP, website, app, or internal software.",
      },
      {
        title: "AI Dashboard & Reporting Tools",
        description:
          "We build dashboards that turn AI insights into clear, practical business reports.",
      },
      {
        title: "AI Model Optimization & Support",
        description:
          "We monitor, improve, and maintain AI systems so they stay accurate, reliable, and useful.",
      },
    ],
  },

  developmentTeam: {
    tag: "OUR BACKEND DEVELOPMENT TEAMS",
    title: "Meet the backend development experts behind our best work.",
    description: "Behind every successful backend solution is a highly specialized team. That's why we have experts for every stage of backend development, from architecture design and API development to database optimization and cloud deployment.",
    engineers: [
      {
        role: "Sr. Backend Engineer",
        name: "Mateo L.",
        experience: "11 years of experience",
        image: dev1,
        technologies: ["Python", "Node.js", "PostgreSQL"],
        certifications: [
          "AWS Certified Solutions Architect – Professional",
          "Microsoft Certified: Azure Developer Associate",
        ],
      },
      {
        role: "Sr. Backend Architect",
        name: "Ricardo F.",
        experience: "14 years of experience",
        image: dev2,
        technologies: ["Kubernetes", "Terraform", "AWS"],
        certifications: [
          "AWS Certified Solutions Architect – Professional",
          "Google Professional Cloud Architect",
        ],
      },
      {
        role: "Sr. Database Engineer",
        name: "Andrés M.",
        experience: "9 years of experience",
        image: dev3,
        technologies: ["PostgreSQL", "MongoDB", "Redis"],
        certifications: [
          "MongoDB Associate DBA",
          "Oracle Database Administration",
        ],
      },

      {
        role: "Sr. API Engineer",
        name: "Sophia K.",
        experience: "10 years of experience",
        image: dev4,
        technologies: ["REST API", "GraphQL", "Node.js"],
        certifications: [
          "Postman API Fundamentals",
          "OpenAPI Specification Professional",
        ],
      },
      {
        role: "Sr. DevOps Engineer",
        name: "Daniel P.",
        experience: "12 years of experience",
        image: dev5,
        technologies: ["Docker", "Kubernetes", "CI/CD"],
        certifications: [
          "Certified Kubernetes Administrator (CKA)",
          "AWS DevOps Engineer – Professional",
        ],
      },
    ],
  },

  industriesSolutions: {
    tag: "AI DEVELOPMENT ACROSS INDUSTRIES",
    title: "Build AI solutions designed around your industry workflows and business goals.",
    description: "AI works best when it solves real business problems. Solvifytech develops AI solutions for industry-specific workflows, helping teams automate tasks, analyze data, and improve decision-making.",
    industries: [
      {
        title: "Healthcare",
        description: "We build AI systems that support patient communication, reporting, and hospital workflows.",
        image: industryImage,
        solutions: [
          "AI patient support assistant",
          "Medical report summarization",
          "Appointment inquiry automation",
          "Doctor support dashboard",
          "AI chatbot for hospital services",
          "Patient data analysis tools",
          "Internal admin AI assistant",
        ],
      },
      {
        title: "Real Estate",
        description: "We create AI tools for property inquiries, lead handling, and sales support.",
        image: industryImage,
        solutions: [
          "Property recommendation engine",
          "AI lead scoring system",
          "Real estate inquiry chatbot",
          "Document analysis automation",
          "AI sales assistant",
          "Site visit follow-up automation",
          "Customer profile insights",
        ],
      },
      {
        title: "eCommerce & Retail",
        description: "We develop AI solutions that improve shopping experience, support, and sales.",
        image: industryImage,
        solutions: [
          "Product recommendation system",
          "AI product search",
          "Customer support AI chatbot",
          "Sales prediction dashboard",
          "Product description generator",
          "Inventory demand prediction",
          "Personalized offer automation",
        ],
      },
      {
        title: "Manufacturing",
        description: "We build AI solutions for production, inventory, quality, and operations.",
        image: industryImage,
        solutions: [
          "Demand forecasting system",
          "Quality inspection AI",
          "Inventory prediction tools",
          "Production analytics dashboard",
          "Maintenance prediction system",
          "Operational reporting assistant",
        ],
      },
      {
        title: "Education",
        description: "We create AI tools for learning platforms, institutes, and student support.",
        image: industryImage,
        solutions: [
          "AI tutor assistant",
          "Student support chatbot",
          "Course recommendation system",
          "Quiz generation tool",
          "Learning analytics dashboard",
          "Admission inquiry AI bot",
          "Content summary generator",
        ],
      },
      {
        title: "Finance & Professional Services",
        description: "We build AI tools for documents, reports, insights, and customer communication.",
        image: industryImage,
        solutions: [
          "Document summarization tool",
          "Financial report assistant",
          "AI knowledge search",
          "Risk analysis dashboard",
          "Client query assistant",
          "Proposal drafting AI",
          "Data extraction automation",
        ],
      },
    ],
  },

  capabilities: {
    "label": "AI DEVELOPMENT CAPABILITIES",
    "title": "We cover the AI development stack and everything around it.",
    "description": "We build practical AI systems using modern models, automation tools, APIs, and data workflows to help businesses improve speed, accuracy, and decision-making.",
    "capabilities": [
      {
        "title": "Custom AI Applications",
        "description": "Build AI tools for automation, analysis, search, and business productivity.",
        "tools": [
          {
            "name": "OpenAI",
            "logo": "/images/tool-tech/openai.svg"
          },
          {
            "name": "Claude",
            "logo": "/images/tool-tech/claude.svg"
          },
          {
            "name": "Gemini",
            "logo": "/images/tool-tech/gemini.svg"
          },
          {
            "name": "Python",
            "logo": "/images/tool-tech/python.svg"
          },
          {
            "name": "LangChain",
            "logo": "/images/tool-tech/langchain.svg"
          }
        ]
      },
      {
        "title": "Machine Learning Models",
        "description": "Develop prediction, classification, and data-driven intelligence systems.",
        "tools": [
          {
            "name": "Python",
            "logo": "/images/tool-tech/python.svg"
          },
          {
            "name": "TensorFlow",
            "logo": "/images/tool-tech/tensorflow.svg"
          },
          {
            "name": "PyTorch",
            "logo": "/images/tool-tech/pytorch.svg"
          },
          {
            "name": "Scikit-learn",
            "logo": "/images/tool-tech/scikit-learn.svg"
          }
        ]
      },
      {
        "title": "AI Chat & Assistants",
        "description": "Create AI assistants for customers, teams, and internal workflows.",
        "tools": [
          {
            "name": "GPT Assistants",
            "logo": "/images/tool-tech/openai.svg"
          },
          {
            "name": "RAG",
            "logo": "/images/tool-tech/rag.svg"
          },
          {
            "name": "Vector DB",
            "logo": "/images/tool-tech/vector-db.svg"
          },
          {
            "name": "Knowledge Base",
            "logo": "/images/tool-tech/knowledge-base.svg"
          }
        ]
      },
      {
        "title": "AI Automation Workflows",
        "description": "Connect AI with business tools to automate daily tasks.",
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
          },
          {
            "name": "Webhooks",
            "logo": "/images/tool-tech/webhook.svg"
          },
          {
            "name": "APIs",
            "logo": "/images/tool-tech/api.svg"
          }
        ]
      },
      {
        "title": "AI Dashboards & Reporting",
        "description": "Turn AI insights into clear dashboards and business reports.",
        "tools": [
          {
            "name": "Power BI",
            "logo": powerBI
          },
          {
            "name": "Looker Studio",
            "logo": "/images/tool-tech/looker.svg"
          },
          {
            "name": "Custom Dashboards",
            "logo": "/images/tool-tech/dashboard.svg"
          }
        ]
      }
    ]
  },

};

export default aiDevelopment;