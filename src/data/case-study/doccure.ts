export const doccure = {
  title: "DOCCURE",
  subtitle: "Building India's Dermatology-First Practice Management Platform",
  industry: "Healthcare SaaS",
  services: [
    "Product Strategy",
    "SaaS Development",
    "UI/UX Design",
    "Web Application Development",
    "Admin Panel",
    "Mobile Applications",
    "Cloud Infrastructure",
  ],

  challenge: {
    description:
      "Most clinic management software is built for general healthcare practices and fails to address the unique workflows of dermatologists and aesthetic clinics. Doctors were managing patient records, clinical photographs, prescriptions, appointments, and follow-ups across multiple systems, resulting in inefficiencies and operational challenges.",
    targetAudience: [
      "Dermatologists",
      "Skin Clinics",
      "Aesthetic Clinics",
      "Cosmetic Surgeons",
      "Hair Transplant Clinics",
      "Multi-location Clinic Chains",
    ],
    coreGoal:
      "The challenge was to create a platform that could simplify clinic operations while handling complex dermatology workflows.",
  },

  solution: {
    description:
      "Solvifytech partnered with DOCCURE from the ground up, handling the complete product strategy, design, architecture, and development. We built an end-to-end practice management platform tailored specifically for dermatology clinics.",
    whatWeBuilt: [
      "Appointment Management System",
      "Electronic Medical Records (EMR)",
      "Dermatology Examination Panel",
      "Clinical Photography Management",
      "Before & After Image Comparison",
      "Prescription Management",
      "Billing & GST Invoicing",
      "Package Management",
      "Follow-up Management",
      "Inventory Management",
      "WhatsApp Integration",
      "AI Clinical Assistance",
      "Multi-branch Management",
      "Analytics & Reporting Dashboard",
      "Role-Based Staff Management",
      "Patient Management System",
      "Mobile Applications for Doctors and Staff",
    ],
  },

  platformEcosystem: {
    doctorPortal: {
      title: "Doctor Portal",
      features: [
        "Patient consultations",
        "Clinical notes",
        "Prescription management",
        "Clinical image management",
        "Treatment tracking",
      ],
    },
    receptionDashboard: {
      title: "Reception Dashboard",
      features: [
        "Appointment scheduling",
        "Patient registration",
        "Billing management",
        "Follow-up tracking",
      ],
    },
    adminPanel: {
      title: "Admin Panel",
      features: [
        "Multi-branch management",
        "Staff management",
        "Analytics and reports",
        "Inventory management",
        "Package and service management",
      ],
    },
    patientExperience: {
      title: "Patient Experience",
      features: [
        "Faster appointments",
        "Better consultation records",
        "Organized treatment history",
        "Improved communication and follow-ups",
      ],
    },
  },

  technologies: {
    frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    database: ["PostgreSQL", "Redis"],
    infrastructure: ["AWS", "Docker", "Cloud Storage"],
    integrations: [
      "WhatsApp API",
      "Payment Gateway",
      "SMS & Notification Services",
      "AI Services",
    ],
  },

  outcome: {
    businessImpact: [
      "Built India's first dermatology-first practice management platform.",
      "Centralized clinic operations into one system.",
      "Reduced manual administrative work.",
      "Improved consultation and treatment workflows.",
      "Enabled secure management of clinical photographs and patient records.",
      "Created a scalable platform for single clinics and multi-location healthcare groups.",
      "Delivered a modern digital ecosystem for dermatologists and aesthetic clinics.",
    ],
  },

  keyTakeaway:
    "DOCCURE is not just a clinic management software. It's a complete digital operating system built specifically for dermatology and aesthetic practices.",
} as const;

export type doccure = typeof doccure;
