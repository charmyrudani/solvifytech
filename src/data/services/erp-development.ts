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

const erpDevelopment = {
      slug: "erp-development",

      hero: {
            serviceName: "ERP Development",
            tagline: "ERP DEVELOPMENT SERVICES",
            title: "Bring every department together with custom ERP solutions that simplify operations and improve business control.",
            description: "We develop scalable ERP systems that centralize your business processes, automate daily operations, and provide real-time visibility across finance, inventory, HR, sales, and production—helping your team work smarter from a single platform."
      },

      serviceOverview: {
            tag: "ERP DEVELOPMENT SERVICES",
            title: "Build connected business systems that simplify operations and improve control.",
            description: "Our ERP development services help businesses manage sales, inventory, finance, HR, purchase, production, and operations from one centralized system. Solvifytech builds custom ERP solutions that match your business process instead of forcing your team to adjust to rigid software.",
            image: aiService,

            services: [
                  {
                        "title": "Custom ERP Development",
                        "description": "We build ERP systems designed around your actual business operations, not fixed software limitations."
                  },
                  {
                        "title": "Inventory Management Systems",
                        "description": "We help you track stock, material movement, purchases, sales, and warehouse activity from one place."
                  },
                  {
                        "title": "Sales & Purchase Modules",
                        "description": "We create modules to manage quotations, orders, purchase requests, vendor bills, and approvals."
                  },
                  {
                        "title": "Finance & Billing Automation",
                        "description": "We automate invoices, payments, expenses, financial reports, and billing workflows."
                  },
                  {
                        "title": "HR & Payroll Management",
                        "description": "We develop systems to manage employees, attendance, salary, leaves, and HR processes."
                  },
                  {
                        "title": "ERP Reporting Dashboards",
                        "description": "We create dashboards that give business owners clear visibility into operations and performance."
                  },
                  {
                        "title": "ERP Integration & Support",
                        "description": "We connect ERP with websites, CRMs, accounting tools, WhatsApp, and third-party platforms."
                  }
            ]
      },

      developmentTeam: {
            tag: "OUR ERP DEVELOPMENT TEAM",
            title: "Meet the engineers building enterprise backbones.",
            description: "Enterprise Resource Planning requires deep business logic and robust architecture. Our team customizes and develops ERP solutions that unify your finance, supply chain, and operations.",
            engineers: [
                  {
                        role: "ERP Solutions Architect",
                        name: "Omar D.",
                        experience: "15 years of experience",
                        image: dev1,
                        technologies: ["SAP", "Oracle", "Java"],
                        company: bbva,
                        certifications: ["ERP Architecture", "Enterprise Systems"],
                  },
                  {
                        role: "Backend Developer",
                        name: "Julia S.",
                        experience: "9 years of experience",
                        image: dev2,
                        technologies: ["C#", ".NET", "SQL Server"],
                        company: johnson,
                        certifications: ["Backend Engineering", "Microsoft Certified"],
                  },
                  {
                        role: "Business Process Analyst",
                        name: "Frank W.",
                        experience: "11 years of experience",
                        image: dev3,
                        technologies: ["BPMN", "Visio", "Jira"],
                        company: adobe,
                        certifications: ["Business Process", "Lean Six Sigma"],
                  },
                  {
                        role: "Database Engineer",
                        name: "Grace K.",
                        experience: "8 years of experience",
                        image: dev4,
                        technologies: ["PostgreSQL", "MongoDB", "Redis"],
                        company: siriusxm,
                        certifications: ["Database Administration", "Performance Tuning"],
                  },
                  {
                        role: "Frontend Developer",
                        name: "Leo H.",
                        experience: "6 years of experience",
                        image: dev5,
                        technologies: ["Angular", "TypeScript", "SCSS"],
                        company: motorolla,
                        certifications: ["UI Development", "Frontend Pro"],
                  },
            ]
      },

      industriesSolutions: {
            tag: "ERP DEVELOPMENT ACROSS INDUSTRIES",
            title: "Build ERP systems around how your business actually operates.",
            description: "ERP systems should match your business process, not force your team into fixed software. Solvifytech develops ERP platforms for operations, inventory, sales, finance, HR, vendors, and reporting.",
            industries: [
                  {
                        title: "Manufacturing",
                        description: "We build ERP systems for production, stock, purchase, vendors, and quality tracking.",
                        image: industryImage,
                        solutions: [
                              "Production planning module",
                              "Inventory management system",
                              "Purchase order workflow",
                              "Vendor management portal",
                              "Quality control tracking",
                              "Material issue system",
                              "Manufacturing reports dashboard"
                        ]
                  },
                  {
                        title: "Real Estate & Construction",
                        description: "We create ERP systems for projects, material purchase, site operations, and vendor billing.",
                        image: industryImage,
                        solutions: [
                              "Project management ERP",
                              "Material challan module",
                              "Vendor billing system",
                              "Site expense tracking",
                              "Purchase approval workflow",
                              "Contractor management portal",
                              "Project progress dashboard"
                        ]
                  },
                  {
                        title: "Retail & Distribution",
                        description: "We develop ERP systems to manage inventory, orders, branches, and sales.",
                        image: industryImage,
                        solutions: [
                              "Stock management ERP",
                              "Order management system",
                              "Branch inventory tracking",
                              "Distributor management",
                              "Billing and invoice module",
                              "Warehouse dashboard",
                              "Daily sales reports"
                        ]
                  },
                  {
                        title: "Healthcare & Hospitals",
                        description: "We build ERP systems to manage hospital admin, billing, staff, and departments.",
                        image: industryImage,
                        solutions: [
                              "Hospital admin ERP",
                              "Patient billing module",
                              "Staff management system",
                              "Department-wise reporting",
                              "Appointment tracking system",
                              "Pharmacy inventory module",
                              "Hospital operations dashboard"
                        ]
                  },
                  {
                        title: "Logistics & Import-Export",
                        description: "We create ERP systems for shipments, customs, billing, customers, and documents.",
                        image: industryImage,
                        solutions: [
                              "Shipment tracking ERP",
                              "Import-export document system",
                              "Customer shipment portal",
                              "Invoice and billing module",
                              "Customs document tracking",
                              "Delivery status dashboard",
                              "Operations workflow automation"
                        ]
                  },
                  {
                        title: "Education Institutes",
                        description: "We build ERP systems for admissions, students, fees, staff, and academic operations.",
                        image: industryImage,
                        solutions: [
                              "Student management system",
                              "Admission inquiry module",
                              "Fee collection system",
                              "Attendance tracking",
                              "Staff management portal",
                              "Parent communication system",
                              "Institute reporting dashboard"
                        ]
                  },
            ]
      },

      capabilities: {
            label: "ERP DEVELOPMENT CAPABILITIES",
            title: "We cover the ERP stack and everything around it.",
            description: "We build custom ERP systems that connect departments, automate operations, and give business owners better visibility across daily processes.",
            capabilities: [
                  {
                        "title": "Custom ERP Modules",
                        "description": "Build ERP modules based on your business process.",
                        "tools": [
                              {
                                    "name": "Sales",
                                    "logo": "/images/tool-tech/sales.svg"
                              },
                              {
                                    "name": "Purchase",
                                    "logo": "/images/tool-tech/purchase.svg"
                              },
                              {
                                    "name": "Inventory",
                                    "logo": "/images/tool-tech/inventory.svg"
                              },
                              {
                                    "name": "Finance",
                                    "logo": "/images/tool-tech/finance.svg"
                              },
                              {
                                    "name": "HR",
                                    "logo": "/images/tool-tech/hr.svg"
                              }
                        ]
                  },
                  {
                        "title": "Inventory & Stock Management",
                        "description": "Track stock, materials, warehouses, and movement.",
                        "tools": [
                              {
                                    "name": "Stock Ledger",
                                    "logo": "/images/tool-tech/stock-ledger.svg"
                              },
                              {
                                    "name": "Barcode",
                                    "logo": "/images/tool-tech/barcode.svg"
                              },
                              {
                                    "name": "Warehouse Dashboard",
                                    "logo": "/images/tool-tech/warehouse-dashboard.svg"
                              }
                        ]
                  },
                  {
                        "title": "Finance & Billing",
                        "description": "Manage invoices, expenses, payments, and reports.",
                        "tools": [
                              {
                                    "name": "Billing Module",
                                    "logo": "/images/tool-tech/billing-module.svg"
                              },
                              {
                                    "name": "GST",
                                    "logo": "/images/tool-tech/gst.svg"
                              },
                              {
                                    "name": "Payment Tracking",
                                    "logo": "/images/tool-tech/payment-tracking.svg"
                              }
                        ]
                  },
                  {
                        "title": "Reports & Dashboards",
                        "description": "Give leadership clear visibility into business performance.",
                        "tools": [
                              {
                                    "name": "Admin Dashboard",
                                    "logo": "/images/tool-tech/admin-dashboard.svg"
                              },
                              {
                                    "name": "KPI Reports",
                                    "logo": "/images/tool-tech/kpi-reports.svg"
                              },
                              {
                                    "name": "Analytics",
                                    "logo": "/images/tool-tech/analytics.svg"
                              }
                        ]
                  },
                  {
                        "title": "ERP Integrations",
                        "description": "Connect ERP with CRM, website, WhatsApp, accounting, and APIs.",
                        "tools": [
                              {
                                    "name": "REST API",
                                    "logo": "/images/tool-tech/rest-api.svg"
                              },
                              {
                                    "name": "Webhooks",
                                    "logo": "/images/tool-tech/webhooks.svg"
                              },
                              {
                                    "name": "WhatsApp API",
                                    "logo": "/images/tool-tech/whatsapp-api.svg"
                              }
                        ]
                  }
            ]
      }
};

export default erpDevelopment;
