// import type { ServicePageData } from "../../type/services/service-type";
import aiService from '/images/services/ai-service.png';

const erpDevelopment = {
  slug: "erp-development",

  hero: {
    serviceName: "ERP Development",
    tagline: "ERP DEVELOPMENT SERVICES",
    title: "Build connected business systems that simplify operations and improve control.",
    description: "Our ERP development services help businesses manage sales, inventory, finance, HR, purchase, production, and operations from one centralized system. Solvifytech builds custom ERP solutions that match your business process instead of forcing your team to adjust to rigid software."
  },

  serviceOverview: {
    tag: "ERP DEVELOPMENT SERVICES",
    title: "Build connected business systems that simplify operations and improve control.",
    description: "Our ERP development services help businesses manage sales, inventory, finance, HR, purchase, production, and operations from one centralized system. Solvifytech builds custom ERP solutions that match your business process instead of forcing your team to adjust to rigid software.",
    image: aiService,

    services: [
      {
        title: "Custom ERP Development",
        description:
          "We build ERP systems designed around your actual business operations, not fixed software limitations.",
      },
      {
        title: "Inventory Management Systems",
        description:
          "We help you track stock, material movement, purchases, sales, and warehouse activity from one place.",
      },
      {
        title: "Sales & Purchase Modules",
        description:
          "We create modules to manage quotations, orders, purchase requests, vendor bills, and approvals.",
      },
      {
        title: "Finance & Billing Automation",
        description:
          "We automate invoices, payments, expenses, financial reports, and billing workflows.",
      },
      {
        title: "HR & Payroll Management",
        description:
          "We develop systems to manage employees, attendance, salary, leaves, and HR processes.",
      },
      {
        title: "ERP Reporting Dashboards",
        description:
          "We create dashboards that give business owners clear visibility into operations and performance.",
      },
      {
        title: "ERP Integration & Support",
        description:
          "We connect ERP with websites, CRMs, accounting tools, WhatsApp, and third-party platforms.",
      },
    ],
  },

  industries: {
    title: "Industries We Serve",
    description: "AI helps every industry.",
    items: [
      {
        title: "Healthcare",
        description: "Healthcare automation.",
        solutions: ["Patient chatbot", "Appointment automation", "Medical report summary"]
      },
      {
        title: "Real Estate",
        description: "Property automation.",
        solutions: ["Lead scoring", "Property recommendation"]
      }
    ]
  },

  capabilities: {
    title: "Capabilities",
    description: "Everything we build.",
    items: [
      {
        title: "Custom AI",
        description: "Business AI",
        tools: ["OpenAI", "Claude", "Gemini", "LangChain"]
      }
    ]
  },

  faq: [
    {
      question: "Can AI integrate with ERP?",
      answer: "Yes."
    }
  ]
};

export default erpDevelopment;