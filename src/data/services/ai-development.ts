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
import powerBI from "/images/tool-tech/powerbi.png"
import aiService from '/images/services/ai-service.png';

const aiDevelopment = {
  slug: "ai-development",

  hero: {
    serviceName: "AI Development",
    tagline: "AI DEVELOPMENT SERVICES",
    title: "Empower your business with intelligent AI solutions that automate work, improve decisions, and unlock new opportunities.",
    description:
      "From custom AI applications and machine learning models to intelligent automation and business assistants, Solvifytech builds AI solutions that streamline operations, enhance customer experiences, and help organizations scale with confidence."
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
    tag: "OUR AI DEVELOPMENT TEAM",
    title: "Meet the minds shaping artificial intelligence.",
    description: "Our core AI development team brings decades of combined experience in machine learning, neural networks, and deep learning models to build transformative AI applications tailored to your business needs.",
    engineers: [
      {
        role: "Sr. AI Engineer",
        name: "Michael C.",
        experience: "11 years of experience",
        image: dev1,
        technologies: ["PyTorch", "TensorFlow", "Python"],
        company: bbva,
        certifications: ["Deep Learning Specialization", "AI Lead"],
      },
      {
        role: "Data Scientist",
        name: "Anna T.",
        experience: "7 years of experience",
        image: dev2,
        technologies: ["Pandas", "Scikit-Learn", "SQL"],
        company: johnson,
        certifications: ["Data Science Professional", "Statistics Expert"],
      },
      {
        role: "MLOps Engineer",
        name: "Robert B.",
        experience: "6 years of experience",
        image: dev3,
        technologies: ["Kubernetes", "Docker", "GCP"],
        company: adobe,
        certifications: ["MLOps Certified", "Cloud Architect"],
      },
      {
        role: "NLP Specialist",
        name: "Lisa W.",
        experience: "8 years of experience",
        image: dev4,
        technologies: ["HuggingFace", "Spacy", "Transformers"],
        company: siriusxm,
        certifications: ["NLP Professional", "Linguistics Tech"],
      },
      {
        role: "AI Solutions Architect",
        name: "Thomas N.",
        experience: "12 years of experience",
        image: dev5,
        technologies: ["AWS SageMaker", "Azure AI", "Python"],
        company: motorolla,
        certifications: ["Enterprise Architecture", "AI Ethics"],

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