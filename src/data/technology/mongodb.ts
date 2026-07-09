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

const mongodb = {
  slug: "mongodb-development",

  hero: {
    serviceName: "MongoDB",
    tagline: "MONGODB NoSQL DATABASE SERVICES",
    title: "Build highly flexible, scalable, and document-driven applications with MongoDB.",
    description: "Our MongoDB development services empower businesses to manage massive volumes of unstructured data with ease. As the leading NoSQL database, MongoDB provides the agility to iterate quickly, scale horizontally, and power modern real-time web and mobile applications.",
  },

  serviceOverview: {
    tag: "MONGODB DATABASE SERVICES",
    title: "Unlock the agility of document-oriented data storage.",
    description: "At Solvifytech, we design MongoDB architectures tailored for high-speed read/write operations and schema flexibility. Whether you are building a real-time IoT platform, a complex content management system, or a high-traffic eCommerce catalog, our database experts deliver optimized NoSQL solutions.",
    image: aiService,
    services: [
      {
            title: "Schema Design & Data Modeling",
            description: "Design optimized, document-oriented data models that balance normalization and denormalization for peak query performance."
      },
      {
            title: "MongoDB Atlas Cloud Integration",
            description: "Deploy, manage, and scale fully managed MongoDB clusters globally using MongoDB Atlas across AWS, Azure, or GCP."
      },
      {
            title: "Performance Tuning & Aggregation",
            description: "Optimize slow queries through proper indexing strategies and build complex data pipelines using the Aggregation Framework."
      },
      {
            title: "High Availability & Sharding",
            description: "Implement replica sets for automated failover and configure horizontal sharding to distribute massive datasets across multiple servers."
      },
      {
            title: "NoSQL Database Migration",
            description: "Seamlessly migrate data from relational databases (SQL) or older NoSQL systems to MongoDB with minimal downtime."
      },
      {
            title: "Real-time Data Sync",
            description: "Utilize MongoDB Change Streams to build reactive, real-time applications like chat apps, live dashboards, and IoT monitors."
      },
      {
            title: "Node.js & MEAN/MERN Stack Development",
            description: "Integrate MongoDB seamlessly with Express, React/Angular, and Node.js to build lightning-fast full-stack web applications."
      }
]
  },

  developmentTeam: {
    tag: "OUR MONGODB DBAS & DEVELOPERS",
    title: "Meet the experts in NoSQL architecture.",
    description: "Our team consists of certified MongoDB developers and administrators who excel at unstructured data modeling, distributed systems scaling, and full-stack JavaScript integration.",
    engineers: [
      {
        role: "Lead NoSQL Architect",
        name: "Daniel R.",
        experience: "11 years of experience",
        image: dev1,
        company: bbva,
        technologies: ["MongoDB","MongoDB Atlas","Sharding","Node.js"],
        certifications: ["MongoDB Certified DBA"],
      },
      {
        role: "MERN Stack Lead",
        name: "Carlos M.",
        experience: "9 years of experience",
        image: dev2,
        company: johnson,
        technologies: ["MongoDB","Express.js","React","Node.js"],
        certifications: ["MongoDB Certified Developer"],
      },
      {
        role: "Data Pipeline & Aggregation Expert",
        name: "Sophia L.",
        experience: "8 years of experience",
        image: dev3,
        company: adobe,
        technologies: ["MongoDB Aggregation","Python","PyMongo","Kafka"],
        certifications: ["AWS Certified Data Analytics"],
      },
      {
        role: "Cloud Database Engineer",
        name: "Michael T.",
        experience: "10 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: ["MongoDB Atlas","AWS","Terraform","Security"],
        certifications: ["AWS Certified Solutions Architect"],
      },
      {
        role: "Database Migration Specialist",
        name: "Emma K.",
        experience: "7 years of experience",
        image: dev5,
        company: motorolla,
        technologies: ["MongoDB","PostgreSQL","Mongoose","ETL Tools"],
        certifications: ["Certified Database Migration Expert"],
      }
    ]
  },
  
  industriesSolutions: {
    tag: "MONGODB ACROSS INDUSTRIES",
    title: "Flexible data solutions for dynamic business needs.",
    description: "MongoDB's schema-less nature makes it ideal for industries dealing with rapidly changing data structures, massive scale, and real-time analytics.",
    industries: [
      {
            title: "eCommerce & Retail",
            description: "Manage complex, highly variable product catalogs.",
            solutions: [
                  "Polymorphic Product Catalogs",
                  "Real-time Inventory Systems",
                  "User Personalization Engines",
                  "Shopping Cart Session Storage"
            ],
      image: industryImage,
      },
      {
            title: "Internet of Things (IoT)",
            description: "Ingest and analyze massive streams of sensor data.",
            solutions: [
                  "High-velocity Sensor Data Ingestion",
                  "Time-series Data Analysis",
                  "Device State Management",
                  "Real-time Alerting Dashboards"
            ],
      image: industryImage,
      },
      {
            title: "Media & Content Management",
            description: "Store rich, hierarchical content and metadata.",
            solutions: [
                  "Headless CMS Backends",
                  "Digital Asset Management",
                  "User Comment Trees",
                  "Content Recommendation Data"
            ],
      image: industryImage,
      },
      {
            title: "Gaming",
            description: "Scale globally to support millions of concurrent players.",
            solutions: [
                  "Player Profile Management",
                  "Real-time Leaderboards",
                  "Matchmaking Data Storage",
                  "In-game Telemetry Analytics"
            ],
      image: industryImage,
      },
      {
            title: "Finance & Fintech",
            description: "Flexible ledgers for emerging financial products.",
            solutions: [
                  "Cryptocurrency Trade Logs",
                  "User Activity Audit Trails",
                  "Fraud Detection Feature Stores",
                  "Open Banking Data Aggregation"
            ],
      image: industryImage,
      },
      {
            title: "Logistics",
            description: "Track complex, ever-changing shipment states.",
            solutions: [
                  "Real-time Geo-tracking (Geospatial Queries)",
                  "Dynamic Route Logs",
                  "Fleet Telemetry Storage",
                  "Event-driven Supply Chain Logs"
            ],
      image: industryImage,
      }
]
  },

  capabilities: {
    label: "MONGODB CAPABILITIES",
    title: "The tools integrating with MongoDB.",
    description: "We utilize official drivers, robust ORM/ODMs, and cloud management tools to build secure and efficient MongoDB solutions.",
    capabilities: [
      {
            title: "Cloud & Management",
            description: "Deploying and managing MongoDB at scale.",
            tools: [
                  {
                        name: "MongoDB Atlas",
                        logo: "/images/tool-tech/mongodb.svg"
                  },
                  {
                        name: "MongoDB Compass",
                        logo: "/images/tool-tech/mongodb.svg"
                  },
                  {
                        name: "Ops Manager",
                        logo: "/images/tool-tech/mongodb.svg"
                  }
            ]
      },
      {
            title: "Drivers & ODMs",
            description: "Interfacing with MongoDB from code.",
            tools: [
                  {
                        name: "Mongoose (Node.js)",
                        logo: "/images/tool-tech/mongoose.svg"
                  },
                  {
                        name: "PyMongo (Python)",
                        logo: "/images/tool-tech/python.svg"
                  },
                  {
                        name: "Prisma (NoSQL)",
                        logo: "/images/tool-tech/prisma.svg"
                  }
            ]
      },
      {
            title: "Advanced Features",
            description: "Leveraging MongoDB's powerful native features.",
            tools: [
                  {
                        name: "Change Streams",
                        logo: "/images/tool-tech/mongodb.svg"
                  },
                  {
                        name: "Aggregation Framework",
                        logo: "/images/tool-tech/mongodb.svg"
                  },
                  {
                        name: "Atlas Search (Lucene)",
                        logo: "/images/tool-tech/mongodb.svg"
                  }
            ]
      },
      {
            title: "Full-Stack Ecosystem",
            description: "Building end-to-end applications.",
            tools: [
                  {
                        name: "Node.js",
                        logo: "/images/tool-tech/nodejs.svg"
                  },
                  {
                        name: "React (MERN)",
                        logo: "/images/tool-tech/react.svg"
                  },
                  {
                        name: "GraphQL",
                        logo: "/images/tool-tech/graphql.svg"
                  }
            ]
      }
]
  },
};

export default mongodb;
