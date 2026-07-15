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

const aiAutomation = {
  slug: "ai-automation-services",

  hero: {
    serviceName: "AI Automation",
    tagline: "AI AUTOMATION SERVICES",
    title: "Streamline your business operations with intelligent AI Automation.",
    description: "Our AI automation services help startups and enterprises reduce manual effort, eliminate repetitive tasks, and optimize workflows. By integrating advanced AI agents, robotic process automation (RPA), and intelligent workflows, we empower your business to scale efficiently and focus on high-value initiatives.",
  },

  serviceOverview: {
    tag: "AI AUTOMATION SERVICES",
    title: "Transform complex processes into intelligent, autonomous workflows.",
    description: "At Solvifytech, we develop sophisticated AI automation solutions that seamlessly connect your existing systems. Whether you need automated customer support, document processing, or predictive operational workflows, our automation experts deliver reliable, intelligent, and scalable solutions.",
    image: aiService,
    services: [
      {
            title: "Intelligent Process Automation (IPA)",
            description: "Combine RPA with machine learning to automate complex, unstructured data tasks and decision-making processes."
      },
      {
            title: "AI Chatbots & Virtual Assistants",
            description: "Deploy conversational AI agents that automate customer service, sales inquiries, and internal IT support 24/7."
      },
      {
            title: "Automated Document Processing",
            description: "Extract, classify, and process information from invoices, contracts, and forms using advanced OCR and NLP."
      },
      {
            title: "Workflow Orchestration",
            description: "Connect disparate SaaS applications and legacy systems with intelligent, event-driven automation pipelines."
      },
      {
            title: "Predictive Maintenance & Operations",
            description: "Automate system monitoring and trigger self-healing workflows based on AI-driven predictive analytics."
      },
      {
            title: "AI-Powered Data Entry",
            description: "Eliminate manual data entry by automatically routing and parsing incoming data streams into your CRM or ERP."
      },
      {
            title: "Custom AI Agent Development",
            description: "Build specialized, goal-oriented AI agents capable of reasoning, planning, and executing multi-step tasks autonomously."
      }
]
  },

  developmentTeam: {
    tag: "OUR AI AUTOMATION EXPERTS",
    title: "Meet the engineers driving intelligent automation.",
    description: "Our AI automation specialists combine expertise in machine learning, system integration, and workflow optimization. From assessing automation potential to deploying autonomous agents, our team ensures reliable and scalable automated operations.",
    engineers: [
      {
        role: "Lead AI Automation Engineer",
        name: "Daniel R.",
        experience: "9 years of experience",
        image: dev1,
        company: bbva,
        technologies: ["Python","LangChain","UiPath","OpenAI","Zapier"],
        certifications: ["UiPath Advanced RPA Developer","AWS Certified Machine Learning"],
      },
      {
        role: "Workflow Architect",
        name: "Carlos M.",
        experience: "11 years of experience",
        image: dev2,
        company: johnson,
        technologies: ["Make","n8n","Node.js","AWS Step Functions"],
        certifications: ["Make Certified Partner","AWS Certified Solutions Architect"],
      },
      {
        role: "NLP & Chatbot Specialist",
        name: "Sophia L.",
        experience: "7 years of experience",
        image: dev3,
        company: adobe,
        technologies: ["Dialogflow","Rasa","OpenAI API","Python"],
        certifications: ["Google Cloud Professional Machine Learning Engineer"],
      },
      {
        role: "Data Automation Engineer",
        name: "Michael T.",
        experience: "8 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: ["Airflow","Python","Snowflake","dbt"],
        certifications: ["Snowflake SnowPro Core"],
      },
      {
        role: "AI Systems Integrator",
        name: "Emma K.",
        experience: "10 years of experience",
        image: dev5,
        company: motorolla,
        technologies: ["REST APIs","GraphQL","Python","Docker"],
        certifications: ["Certified Integration Professional"],
      }
    ]
  },
  
  industriesSolutions: {
    tag: "AI AUTOMATION ACROSS INDUSTRIES",
    title: "Intelligent automation tailored for diverse business needs.",
    description: "Every industry faces unique operational bottlenecks. Our AI automation solutions streamline operations, reduce human error, and accelerate processing times across various sectors.",
    industries: [
      {
            title: "Healthcare",
            description: "Automate patient onboarding, appointment scheduling, and medical record processing.",
            solutions: [
                  "Automated Appointment Reminders",
                  "Medical Billing Automation",
                  "Patient Data Extraction",
                  "Triage Chatbots",
                  "Insurance Claim Processing"
            ],
      image: industryImage,
      },
      {
            title: "Finance & Banking",
            description: "Streamline compliance, risk assessment, and customer onboarding with intelligent workflows.",
            solutions: [
                  "Automated KYC/AML Checks",
                  "Fraud Detection Workflows",
                  "Loan Application Parsing",
                  "Automated Financial Reporting",
                  "Invoice Processing"
            ],
      image: industryImage,
      },
      {
            title: "eCommerce & Retail",
            description: "Optimize inventory forecasting, order routing, and customer service.",
            solutions: [
                  "Automated Order Processing",
                  "Dynamic Pricing Automation",
                  "Customer Return Workflows",
                  "Inventory Alerts",
                  "Supplier Onboarding"
            ],
      image: industryImage,
      },
      {
            title: "Education",
            description: "Automate administrative tasks to let educators focus on teaching.",
            solutions: [
                  "Automated Grading Systems",
                  "Student Enrollment Workflows",
                  "Alumni Outreach Automation",
                  "Campus IT Support Bots"
            ],
      image: industryImage,
      },
      {
            title: "Manufacturing",
            description: "Enhance supply chain visibility and predictive maintenance through automated reporting.",
            solutions: [
                  "Supply Chain Alerting",
                  "Automated Quality Control Logging",
                  "Equipment Maintenance Triggers",
                  "Vendor Communication Automation"
            ],
      image: industryImage,
      },
      {
            title: "Logistics",
            description: "Automate dispatching, tracking, and document handling for global shipments.",
            solutions: [
                  "Automated Dispatch Routing",
                  "Customs Document Processing",
                  "Real-time Tracking Updates",
                  "Carrier Rate Comparison Workflows"
            ],
      image: industryImage,
      }
]
  },

  capabilities: {
    label: "AI AUTOMATION CAPABILITIES",
    title: "The tools and platforms powering our automation solutions.",
    description: "We utilize industry-leading AI models, RPA platforms, and integration tools to build robust, secure, and scalable automated workflows.",
    capabilities: [
      {
            title: "Large Language Models",
            description: "Integrate cutting-edge AI reasoning into your workflows.",
            tools: [
                  {
                        name: "OpenAI",
                        logo: "/images/tool-tech/openai.svg"
                  },
                  {
                        name: "Anthropic",
                        logo: "/images/tool-tech/anthropic.svg"
                  },
                  {
                        name: "Llama",
                        logo: "/images/tool-tech/meta.svg"
                  }
            ]
      },
      {
            title: "Workflow Automation Platforms",
            description: "Connect thousands of apps without complex coding.",
            tools: [
                  {
                        name: "Make",
                        logo: "/images/tool-tech/make.svg"
                  },
                  {
                        name: "Zapier",
                        logo: "/images/tool-tech/zapier.svg"
                  },
                  {
                        name: "n8n",
                        logo: "/images/tool-tech/n8n.svg"
                  }
            ]
      },
      {
            title: "RPA Tools",
            description: "Automate interactions with legacy systems and desktop applications.",
            tools: [
                  {
                        name: "UiPath",
                        logo: "/images/tool-tech/uipath.svg"
                  },
                  {
                        name: "Automation Anywhere",
                        logo: "/images/tool-tech/automationanywhere.svg"
                  }
            ]
      },
      {
            title: "AI Frameworks",
            description: "Build custom AI agents and pipelines.",
            tools: [
                  {
                        name: "LangChain",
                        logo: "/images/tool-tech/langchain.svg"
                  },
                  {
                        name: "LlamaIndex",
                        logo: "/images/tool-tech/llamaindex.svg"
                  }
            ]
      }
]
  },
};

export default aiAutomation;
