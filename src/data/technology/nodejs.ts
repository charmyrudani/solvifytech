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
// import powerBI from "/images/tool-tech/powerbi.png"
import aiService from '/images/services/ai-service.png';

const nodejs = {
  slug: "nodejs-development",

  hero: {
    serviceName: "Node.js",
    tagline: "NODE.JS DEVELOPMENT SERVICES",
    title:
      "Build scalable, secure, and lightning-fast backend applications with Node.js.",
    description:
      "Our Node.js development services help startups and enterprises build high-performance backend systems that power modern web applications, mobile apps, SaaS platforms, and enterprise software. We create scalable architectures, secure APIs, and cloud-ready solutions designed for long-term business growth.",
  },

  serviceOverview: {
    tag: "NODE.JS DEVELOPMENT SERVICES",
    title:
      "Deliver high-performance backend solutions powered by Node.js.",
    description:
      "At Solvifytech, we develop robust Node.js applications that handle high traffic, real-time communication, and complex business logic. Whether you're building APIs, enterprise platforms, SaaS products, or cloud-native applications, our Node.js experts deliver secure, scalable, and maintainable backend solutions.",

    image: aiService,

    services: [
      {
        title: "Custom Node.js Application Development",
        description:
          "We build custom backend applications tailored to your business requirements using modern Node.js architecture and best development practices.",
      },
      {
        title: "REST API Development",
        description:
          "Develop fast, secure, and scalable REST APIs that connect web applications, mobile apps, and third-party platforms seamlessly.",
      },
      {
        title: "Real-Time Application Development",
        description:
          "Create real-time chat systems, live dashboards, collaborative platforms, and notification services using Socket.io and WebSockets.",
      },
      {
        title: "Microservices Development",
        description:
          "Build modular microservices architectures that improve scalability, deployment flexibility, and long-term maintainability.",
      },
      {
        title: "Backend for Web & Mobile Apps",
        description:
          "Develop secure backend systems for React, Angular, Vue, Flutter, and React Native applications with optimized API performance.",
      },
      {
        title: "Cloud-Native Backend Development",
        description:
          "Build cloud-ready Node.js applications that integrate seamlessly with AWS, Azure, Google Cloud, Docker, and Kubernetes.",
      },
      {
        title: "Application Maintenance & Optimization",
        description:
          "Optimize existing Node.js applications for better performance, scalability, security, and long-term reliability.",
      },
    ],
  },

  developmentTeam: {
    tag: "OUR NODE.JS DEVELOPMENT TEAM",
    title: "Meet the Node.js experts behind our high-performance backend solutions.",
    description:
      "Our Node.js specialists build scalable backend systems, secure APIs, microservices, and cloud-native applications for businesses of every size. From architecture planning to deployment, our engineers focus on performance, reliability, and long-term scalability.",

    engineers: [
      {
        role: "Senior Node.js Developer",
        name: "Daniel R.",
        experience: "10 years of experience",
        image: dev1,
        company: bbva,
        technologies: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Redis",
          "Docker",
        ],
        certifications: [
          "AWS Certified Developer – Associate",
          "Node.js Application Developer Certification",
        ],
      },

      {
        role: "Backend Solution Architect",
        name: "Carlos M.",
        experience: "13 years of experience",
        image: dev2,
        company: johnson,
        technologies: [
          "Node.js",
          "NestJS",
          "AWS",
          "Kubernetes",
          "Terraform",
        ],
        certifications: [
          "AWS Certified Solutions Architect – Professional",
          "Google Professional Cloud Architect",
        ],
      },

      {
        role: "API Integration Specialist",
        name: "Sophia L.",
        experience: "9 years of experience",
        image: dev3,
        company: adobe,
        technologies: [
          "Express.js",
          "REST API",
          "GraphQL",
          "PostgreSQL",
          "Swagger",
        ],
        certifications: [
          "Postman API Fundamentals",
          "OpenAPI Specification Professional",
        ],
      },

      {
        role: "Real-Time Application Engineer",
        name: "Michael T.",
        experience: "8 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: [
          "Socket.io",
          "WebSockets",
          "Redis",
          "Node.js",
          "RabbitMQ",
        ],
        certifications: [
          "Redis Certified Developer",
          "Docker Certified Associate",
        ],
      },

      {
        role: "Cloud Backend Engineer",
        name: "Emma K.",
        experience: "11 years of experience",
        image: dev5,
        company: motorolla,
        technologies: [
          "Node.js",
          "Docker",
          "Kubernetes",
          "CI/CD",
          "Azure",
        ],
        certifications: [
          "Microsoft Certified: Azure Developer Associate",
          "Certified Kubernetes Administrator (CKA)",
        ],
      },
    ],
  },
  industriesSolutions: {
    tag: "NODE.JS DEVELOPMENT ACROSS INDUSTRIES",
    title:
      "Scalable Node.js solutions tailored for modern business applications.",
    description:
      "Every industry has unique backend requirements. Our Node.js development team builds secure, scalable, and high-performance applications that streamline operations, improve customer experiences, and support business growth across multiple industries.",

    industries: [
      {
        title: "Healthcare",
        description:
          "Develop secure healthcare platforms that manage patient records, appointments, and telemedicine services.",
        image: industryImage,
        solutions: [
          "Hospital Management Systems",
          "Electronic Medical Records (EMR)",
          "Appointment Booking APIs",
          "Telemedicine Platforms",
          "Healthcare Mobile Backend",
          "Patient Notification Systems",
          "HIPAA-ready Backend Solutions",
        ],
      },

      {
        title: "Finance & Banking",
        description:
          "Build secure financial applications with reliable transaction processing and regulatory compliance.",
        image: industryImage,
        solutions: [
          "Digital Banking Platforms",
          "Payment Gateway Integration",
          "Loan Management Systems",
          "Financial Reporting APIs",
          "Investment Dashboards",
          "Fraud Detection Backend",
          "Secure Authentication Services",
        ],
      },

      {
        title: "eCommerce & Retail",
        description:
          "Develop scalable backend systems for online stores, marketplaces, and omnichannel commerce.",
        image: industryImage,
        solutions: [
          "Product Management APIs",
          "Shopping Cart Services",
          "Order Processing Systems",
          "Inventory Management",
          "Payment Integration",
          "Customer Account Backend",
          "Recommendation Engine APIs",
        ],
      },

      {
        title: "Education",
        description:
          "Build learning platforms with secure backend services for students, teachers, and institutions.",
        image: industryImage,
        solutions: [
          "Learning Management Systems",
          "Online Examination Platforms",
          "Student Information Systems",
          "Video Streaming Backend",
          "Course Management APIs",
          "Attendance Systems",
          "Student Performance Analytics",
        ],
      },

      {
        title: "Manufacturing",
        description:
          "Develop backend systems that optimize production, inventory, and operational workflows.",
        image: industryImage,
        solutions: [
          "Production Monitoring",
          "Inventory Management",
          "Supply Chain APIs",
          "Machine Monitoring Dashboard",
          "Quality Control Systems",
          "Warehouse Automation",
          "Operational Analytics",
        ],
      },

      {
        title: "Logistics & Transportation",
        description:
          "Create scalable logistics platforms that manage fleets, deliveries, and real-time tracking.",
        image: industryImage,
        solutions: [
          "Fleet Management",
          "Shipment Tracking APIs",
          "Route Optimization",
          "Warehouse Management",
          "Driver Management System",
          "Delivery Notification Service",
          "Logistics Analytics Dashboard",
        ],
      },
    ],
  },

  capabilities: {
    label: "NODE.JS DEVELOPMENT CAPABILITIES",
    title: "Everything you need to build scalable Node.js backend applications.",
    description:
      "Our Node.js developers use modern backend technologies, cloud platforms, databases, and DevOps tools to build secure, scalable, and enterprise-grade applications.",

    capabilities: [
      {
        title: "Backend Frameworks",
        description:
          "Develop robust backend applications using modern Node.js frameworks.",
        tools: [
          {
            name: "Node.js",
            logo: "/images/tool-tech/nodejs.svg",
          },
          {
            name: "Express.js",
            logo: "/images/tool-tech/express.svg",
          },
          {
            name: "NestJS",
            logo: "/images/tool-tech/nestjs.svg",
          },
          {
            name: "Fastify",
            logo: "/images/tool-tech/fastify.svg",
          },
        ],
      },

      {
        title: "Database Development",
        description:
          "Design scalable, secure, and high-performance database architectures.",
        tools: [
          {
            name: "MongoDB",
            logo: "/images/tool-tech/mongodb.svg",
          },
          {
            name: "PostgreSQL",
            logo: "/images/tool-tech/postgresql.svg",
          },
          {
            name: "MySQL",
            logo: "/images/tool-tech/mysql.svg",
          },
          {
            name: "Redis",
            logo: "/images/tool-tech/redis.svg",
          },
          {
            name: "Firebase",
            logo: "/images/tool-tech/firebase.svg",
          },
        ],
      },

      {
        title: "API Development",
        description:
          "Create secure, scalable, and well-documented APIs for every application.",
        tools: [
          {
            name: "REST API",
            logo: "/images/tool-tech/rest-api.svg",
          },
          {
            name: "GraphQL",
            logo: "/images/tool-tech/graphql.svg",
          },
          {
            name: "Swagger",
            logo: "/images/tool-tech/swagger.svg",
          },
          {
            name: "Postman",
            logo: "/images/tool-tech/postman.svg",
          },
        ],
      },

      {
        title: "Authentication & Security",
        description:
          "Implement enterprise-grade authentication and application security.",
        tools: [
          {
            name: "JWT",
            logo: "/images/tool-tech/jwt.svg",
          },
          {
            name: "OAuth",
            logo: "/images/tool-tech/oauth.svg",
          },
          {
            name: "Passport.js",
            logo: "/images/tool-tech/passport.svg",
          },
          {
            name: "bcrypt",
            logo: "/images/tool-tech/bcrypt.svg",
          },
        ],
      },

      {
        title: "Real-Time Applications",
        description:
          "Build highly interactive applications with live communication capabilities.",
        tools: [
          {
            name: "Socket.io",
            logo: "/images/tool-tech/socketio.svg",
          },
          {
            name: "WebSockets",
            logo: "/images/tool-tech/websocket.svg",
          },
          {
            name: "Redis Pub/Sub",
            logo: "/images/tool-tech/redis.svg",
          },
          {
            name: "RabbitMQ",
            logo: "/images/tool-tech/rabbitmq.svg",
          },
        ],
      },

      {
        title: "Cloud & DevOps",
        description:
          "Deploy and manage scalable Node.js applications on modern cloud infrastructure.",
        tools: [
          {
            name: "AWS",
            logo: "/images/tool-tech/aws.svg",
          },
          {
            name: "Docker",
            logo: "/images/tool-tech/docker.svg",
          },
          {
            name: "Kubernetes",
            logo: "/images/tool-tech/kubernetes.svg",
          },
          {
            name: "GitHub Actions",
            logo: "/images/tool-tech/github-actions.svg",
          },
          {
            name: "Azure",
            logo: "/images/tool-tech/azure.svg",
          },
        ],
      },

      {
        title: "ORM & Database Tools",
        description:
          "Simplify database management with modern ORM technologies.",
        tools: [
          {
            name: "Prisma",
            logo: "/images/tool-tech/prisma.svg",
          },
          {
            name: "Sequelize",
            logo: "/images/tool-tech/sequelize.svg",
          },
          {
            name: "TypeORM",
            logo: "/images/tool-tech/typeorm.svg",
          },
          {
            name: "Mongoose",
            logo: "/images/tool-tech/mongoose.svg",
          },
        ],
      },
    ],
  },
};

export default nodejs;