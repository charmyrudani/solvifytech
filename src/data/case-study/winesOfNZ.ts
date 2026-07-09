export const winesOfNZ = {
  title: "Wines of NZ",
  subtitle: "Building a Controlled Multi-Vendor Commerce Platform on Shopify",
  industry: "Wine & Beverage eCommerce",
  services: [
    "Shopify Development",
    "Custom Portal Development",
    "System Architecture",
    "API Integrations",
    "Operations Automation",
  ],

  challenge: {
    description:
      "Wines of NZ operates a multi-vendor marketplace where multiple suppliers manage products and inventory. Traditional multi-vendor Shopify setups created operational challenges.",
    painPoints: [
      "Vendors needed product management access.",
      "Product information became inconsistent.",
      "Pricing changes happened without oversight.",
      "Inventory was not always accurate.",
      "Order fulfillment became difficult to manage.",
      "The admin team spent significant time correcting operational errors.",
    ],
    coreNeed:
      "The business needed a system that gave vendors operational freedom while maintaining centralized control.",
  },

  solution: {
    description:
      "Instead of giving vendors direct access to Shopify, Solvifytech designed and developed a custom vendor management layer on top of Shopify. Shopify became the execution engine while all operational workflows were managed through a dedicated portal.",
    whatWeBuilt: [
      "Custom Vendor Portal",
      "Product Management Dashboard",
      "Automated Product Synchronization with Shopify",
      "Inventory Management System",
      "Order Validation Workflow",
      "Admin Approval System",
      "Fulfillment Management Dashboard",
      "Role-Based Access Control",
      "Vendor and Admin Notifications",
      "Centralized Operational Dashboard",
    ],
  },

  workflow: {
    productManagement: [
      "Vendor Portal",
      "Product Validation",
      "Automatic Shopify Sync",
      "Live Store",
    ],
    orderFlow: [
      "Customer Places Order",
      "Vendor Confirms Inventory",
      "Admin Reviews Order",
      "Admin Approves Fulfillment",
      "Order Processing",
    ],
  },

  technologies: {
    frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    database: ["PostgreSQL"],
    commercePlatform: ["Shopify", "Shopify Admin API", "Shopify Webhooks"],
    infrastructure: ["AWS", "Docker"],
  },

  outcome: {
    businessImpact: [
      "Vendors can manage their operations without accessing Shopify.",
      "Product and inventory data remain consistent across the platform.",
      "Admin maintains complete operational control.",
      "Order processing became structured and predictable.",
      "Reduced manual corrections and operational bottlenecks.",
      "Built a scalable architecture for future vendor expansion.",
    ],
  },

  metrics: [
    { metric: "Vendor Access to Shopify", result: "0%" },
    { metric: "Product Synchronization", result: "Automated" },
    { metric: "Order Validation", result: "Structured Workflow" },
    { metric: "Admin Control", result: "Centralized" },
    { metric: "Platform Scalability", result: "High" },
  ],

  keyTakeaway:
    "The problem wasn't Shopify. It was the operational design. By separating operations from commerce execution, we transformed a reactive process into a scalable system.",

  quote:
    "Shopify is no longer the control center. It's the execution layer. The real value lies in designing systems that scale operations without sacrificing control.",
} as const;

export type WinesOfNZ = typeof winesOfNZ;