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

const postgresql = {
  slug: "postgresql-development",

  hero: {
    serviceName: "PostgreSQL",
    tagline: "POSTGRESQL DATABASE SERVICES",
    title: "Design, build, and optimize enterprise-grade relational databases with PostgreSQL.",
    description: "Our PostgreSQL database services deliver highly reliable, extensible, and performant data storage solutions. From complex relational schemas and geospatial data to massive data warehousing, we leverage the advanced features of PostgreSQL to ensure your data is secure, ACID-compliant, and lightning-fast.",
  },

  serviceOverview: {
    tag: "POSTGRESQL DATABASE SERVICES",
    title: "Harness the power of the world's most advanced open-source relational database.",
    description: "At Solvifytech, we provide comprehensive PostgreSQL engineering, covering database design, query optimization, clustering, and migration. We build data architectures that guarantee integrity and handle high-throughput analytical and transactional workloads.",
    image: aiService,
    services: [
      {
            title: "Database Architecture & Design",
            description: "Design normalized and highly optimized relational schemas tailored for performance and data integrity."
      },
      {
            title: "Performance Tuning & Optimization",
            description: "Identify bottlenecks through query plan analysis, implement proper indexing strategies, and tune PostgreSQL configurations."
      },
      {
            title: "High Availability & Replication",
            description: "Set up logical and physical streaming replication, connection pooling (PgBouncer), and automated failover clusters."
      },
      {
            title: "Database Migration",
            description: "Seamlessly migrate from Oracle, SQL Server, or MySQL to PostgreSQL with zero data loss and minimal downtime."
      },
      {
            title: "Geospatial Data with PostGIS",
            description: "Implement complex location-based queries, mapping, and spatial analytics using the powerful PostGIS extension."
      },
      {
            title: "Advanced JSONB Integration",
            description: "Combine the best of relational and NoSQL worlds by efficiently indexing and querying unstructured JSON data within PostgreSQL."
      },
      {
            title: "Data Warehousing & Analytics",
            description: "Structure PostgreSQL for OLAP workloads, implementing partitioning and materialized views for fast reporting."
      }
]
  },

  developmentTeam: {
    tag: "OUR POSTGRESQL DBAS",
    title: "Meet the experts guarding your data.",
    description: "Our Database Administrators and Data Engineers possess deep knowledge of PostgreSQL internals, MVCC, and advanced SQL, ensuring your databases perform optimally under heavy load.",
    engineers: [
      {
        role: "Lead Database Architect",
        name: "Daniel R.",
        experience: "14 years of experience",
        image: dev1,
        company: bbva,
        technologies: ["PostgreSQL","PostGIS","PgBouncer","Linux"],
        certifications: ["PostgreSQL Associate Certification"],
      },
      {
        role: "Performance Tuning DBA",
        name: "Carlos M.",
        experience: "10 years of experience",
        image: dev2,
        company: johnson,
        technologies: ["PostgreSQL","Query Optimization","PL/pgSQL","AWS RDS"],
        certifications: ["AWS Certified Database – Specialty"],
      },
      {
        role: "Data Migration Specialist",
        name: "Sophia L.",
        experience: "9 years of experience",
        image: dev3,
        company: adobe,
        technologies: ["PostgreSQL","Oracle","SQL Server","Flyway"],
        certifications: ["Oracle Certified Professional"],
      },
      {
        role: "Backend Data Engineer",
        name: "Michael T.",
        experience: "8 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: ["PostgreSQL","Prisma","TypeORM","Node.js"],
        certifications: ["Microsoft Certified: Azure Data Engineer"],
      },
      {
        role: "High Availability Specialist",
        name: "Emma K.",
        experience: "11 years of experience",
        image: dev5,
        company: motorolla,
        technologies: ["PostgreSQL","Patroni","HAProxy","Docker"],
        certifications: ["Certified Kubernetes Administrator (CKA)"],
      }
    ]
  },
  
  industriesSolutions: {
    tag: "POSTGRESQL ACROSS INDUSTRIES",
    title: "Reliable data storage for data-critical sectors.",
    description: "PostgreSQL's strict ACID compliance and extensibility make it the backbone for industries where data accuracy and advanced querying are paramount.",
    industries: [
      {
            title: "Finance & Banking",
            description: "Absolute data integrity for transactional systems.",
            solutions: [
                  "Ledger Databases",
                  "Fraud Detection Analytics",
                  "High-frequency Transaction Processing",
                  "Regulatory Reporting Databases"
            ],
      image: industryImage,
      },
      {
            title: "Healthcare",
            description: "Secure, compliant storage for complex medical records.",
            solutions: [
                  "EMR Databases",
                  "HIPAA-compliant Data Storage",
                  "Medical Research Data Warehouses",
                  "Patient Analytics Views"
            ],
      image: industryImage,
      },
      {
            title: "Logistics & Fleet Management",
            description: "Power location-aware applications with PostGIS.",
            solutions: [
                  "Real-time Fleet Tracking DB",
                  "Route Optimization Queries",
                  "Geofencing Systems",
                  "Supply Chain Data Modeling"
            ],
      image: industryImage,
      },
      {
            title: "SaaS & Multi-tenant",
            description: "Scalable architectures for growing enterprise tools.",
            solutions: [
                  "Row-level Security Implementations",
                  "Schema-per-tenant Architectures",
                  "Shared-database Scaling",
                  "Analytics Materialized Views"
            ],
      image: industryImage,
      },
      {
            title: "Government & Public Sector",
            description: "Handle massive demographic and geographic data securely.",
            solutions: [
                  "Urban Planning Spatial Databases",
                  "Census Data Warehouses",
                  "Secure Citizen Portals",
                  "Public Record Archives"
            ],
      image: industryImage,
      },
      {
            title: "eCommerce",
            description: "Manage complex catalogs and reliable checkout systems.",
            solutions: [
                  "Inventory Management DBs",
                  "JSONB Product Catalogs",
                  "Order Processing Transactions",
                  "Customer Data Platforms"
            ],
      image: industryImage,
      }
]
  },

  capabilities: {
    label: "POSTGRESQL CAPABILITIES",
    title: "The tools extending our database solutions.",
    description: "We utilize robust ORMs, migration tools, and cloud-managed services to build modern, reliable PostgreSQL architectures.",
    capabilities: [
      {
            title: "Cloud Managed PostgreSQL",
            description: "Deploy scalable databases on the cloud.",
            tools: [
                  {
                        name: "AWS RDS",
                        logo: "/images/tool-tech/aws.svg"
                  },
                  {
                        name: "Supabase",
                        logo: "/images/tool-tech/supabase.svg"
                  },
                  {
                        name: "Google Cloud SQL",
                        logo: "/images/tool-tech/gcp.svg"
                  }
            ]
      },
      {
            title: "ORMs & Query Builders",
            description: "Interface with databases efficiently from code.",
            tools: [
                  {
                        name: "Prisma",
                        logo: "/images/tool-tech/prisma.svg"
                  },
                  {
                        name: "Drizzle",
                        logo: "/images/tool-tech/drizzle.svg"
                  },
                  {
                        name: "TypeORM",
                        logo: "/images/tool-tech/typeorm.svg"
                  }
            ]
      },
      {
            title: "Extensions & Tools",
            description: "Supercharge PostgreSQL functionality.",
            tools: [
                  {
                        name: "PostGIS",
                        logo: "/images/tool-tech/postgis.svg"
                  },
                  {
                        name: "PgBouncer",
                        logo: "/images/tool-tech/pgbouncer.svg"
                  },
                  {
                        name: "Flyway",
                        logo: "/images/tool-tech/flyway.svg"
                  }
            ]
      },
      {
            title: "Analytics & BI",
            description: "Connect PostgreSQL to business intelligence.",
            tools: [
                  {
                        name: "Metabase",
                        logo: "/images/tool-tech/metabase.svg"
                  },
                  {
                        name: "Tableau",
                        logo: "/images/tool-tech/tableau.svg"
                  },
                  {
                        name: "Grafana",
                        logo: "/images/tool-tech/grafana.svg"
                  }
            ]
      }
]
  },
};

export default postgresql;
