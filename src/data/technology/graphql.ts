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

const graphql = {
  slug: "graphql-development",

  hero: {
    serviceName: "GraphQL",
    tagline: "GRAPHQL API DEVELOPMENT SERVICES",
    title: "Design highly efficient, exact, and scalable APIs with GraphQL.",
    description: "Our GraphQL development services revolutionize how your applications request data. By allowing clients to request exactly what they need and nothing more, we eliminate over-fetching, aggregate multiple microservices into a single graph, and drastically improve frontend performance.",
  },

  serviceOverview: {
    tag: "GRAPHQL API SERVICES",
    title: "Unify your data sources into a single, powerful API.",
    description: "At Solvifytech, we architect and implement robust GraphQL layers over existing REST APIs, databases, and microservices. We focus on schema design, performance optimization (solving the N+1 problem), and securing your graph against malicious queries.",
    image: aiService,
    services: [
      {
            title: "GraphQL Schema Design",
            description: "Design intuitive, strongly typed, and scalable GraphQL schemas that perfectly model your business domain."
      },
      {
            title: "API Gateway & Federation",
            description: "Implement Apollo Federation to compose multiple distributed GraphQL microservices into a single, unified supergraph."
      },
      {
            title: "REST to GraphQL Migration",
            description: "Wrap legacy REST APIs in a GraphQL layer to provide modern frontends with efficient data querying capabilities."
      },
      {
            title: "Performance Optimization",
            description: "Solve the N+1 query problem using DataLoader, implement field-level caching, and optimize database resolvers."
      },
      {
            title: "GraphQL Security Auditing",
            description: "Secure your API against complex queries by implementing query depth limits, complexity analysis, and strict authorization rules."
      },
      {
            title: "Real-time Subscriptions",
            description: "Implement GraphQL Subscriptions over WebSockets for real-time data updates in chat apps, dashboards, and live feeds."
      },
      {
            title: "Frontend GraphQL Integration",
            description: "Integrate Apollo Client or URQL into your React/Next.js applications for seamless caching and state management."
      }
]
  },

  developmentTeam: {
    tag: "OUR GRAPHQL ARCHITECTS",
    title: "Meet the engineers designing efficient data layers.",
    description: "Our API architects deeply understand both backend data retrieval and frontend state management, allowing them to design GraphQL schemas that are a joy for developers to use.",
    engineers: [
      {
        role: "Lead GraphQL Architect",
        name: "Daniel R.",
        experience: "10 years of experience",
        image: dev1,
        company: bbva,
        technologies: ["GraphQL","Apollo Server","Node.js","TypeScript"],
        certifications: ["Apollo Graph Champion"],
      },
      {
        role: "API Federation Lead",
        name: "Carlos M.",
        experience: "11 years of experience",
        image: dev2,
        company: johnson,
        technologies: ["Apollo Federation","Go","Microservices","Docker"],
        certifications: ["AWS Certified Solutions Architect"],
      },
      {
        role: "Backend Resolver Engineer",
        name: "Sophia L.",
        experience: "8 years of experience",
        image: dev3,
        company: adobe,
        technologies: ["GraphQL","Prisma","PostgreSQL","DataLoader"],
        certifications: ["Certified API Specialist"],
      },
      {
        role: "Frontend Apollo Specialist",
        name: "Michael T.",
        experience: "7 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: ["Apollo Client","React","Next.js","URQL"],
        certifications: ["React Professional Certification"],
      },
      {
        role: "Security & Performance Analyst",
        name: "Emma K.",
        experience: "9 years of experience",
        image: dev5,
        company: motorolla,
        technologies: ["GraphQL Armor","Redis","Rate Limiting","Node.js"],
        certifications: ["Certified Web Security Professional"],
      }
    ]
  },
  
  industriesSolutions: {
    tag: "GRAPHQL ACROSS INDUSTRIES",
    title: "Efficient data delivery for complex applications.",
    description: "GraphQL excels in industries where applications must aggregate data from dozens of microservices and deliver it rapidly to mobile and web clients.",
    industries: [
      {
            title: "eCommerce & Omnichannel",
            description: "Unify product, inventory, and user data.",
            solutions: [
                  "Headless Commerce Supergraphs",
                  "Aggregated Product Search",
                  "Unified Customer Profiles",
                  "Real-time Inventory Subscriptions"
            ],
      image: industryImage,
      },
      {
            title: "Media & Streaming",
            description: "Deliver exact content payloads to diverse devices.",
            solutions: [
                  "Cross-platform Content APIs",
                  "Real-time Chat/Comments",
                  "Personalization Aggregation",
                  "Video Metadata APIs"
            ],
      image: industryImage,
      },
      {
            title: "Fintech & Banking",
            description: "Securely aggregate financial data from legacy systems.",
            solutions: [
                  "Unified Dashboard APIs",
                  "Secure Account Aggregation",
                  "Real-time Ticker Subscriptions",
                  "Microservice Orchestration"
            ],
      image: industryImage,
      },
      {
            title: "Travel & Hospitality",
            description: "Combine flights, hotels, and rentals into one request.",
            solutions: [
                  "Booking Aggregation APIs",
                  "Dynamic Pricing Queries",
                  "Unified Search Graphs",
                  "Real-time Availability"
            ],
      image: industryImage,
      },
      {
            title: "SaaS Platforms",
            description: "Flexible APIs for diverse customer integrations.",
            solutions: [
                  "Public Facing GraphQL APIs",
                  "Custom Webhook Subscriptions",
                  "Multi-tenant Data Access",
                  "Complex Reporting Queries"
            ],
      image: industryImage,
      },
      {
            title: "Social Networks",
            description: "Manage highly relational data efficiently.",
            solutions: [
                  "Graph-based Friend Recommendations",
                  "Real-time Feed Subscriptions",
                  "Nested Comment Queries",
                  "Activity Stream APIs"
            ],
      image: industryImage,
      }
]
  },

  capabilities: {
    label: "GRAPHQL CAPABILITIES",
    title: "The GraphQL ecosystem.",
    description: "We utilize the best tools in the GraphQL ecosystem for building, securing, and consuming graph APIs.",
    capabilities: [
      {
            title: "Server & Federation",
            description: "Building the backend API layer.",
            tools: [
                  {
                        name: "Apollo Server",
                        logo: "/images/tool-tech/apollo.svg"
                  },
                  {
                        name: "GraphQL Yoga",
                        logo: "/images/tool-tech/graphql.svg"
                  },
                  {
                        name: "Hasura",
                        logo: "/images/tool-tech/hasura.svg"
                  }
            ]
      },
      {
            title: "Frontend Clients",
            description: "Consuming GraphQL efficiently.",
            tools: [
                  {
                        name: "Apollo Client",
                        logo: "/images/tool-tech/apollo.svg"
                  },
                  {
                        name: "URQL",
                        logo: "/images/tool-tech/graphql.svg"
                  },
                  {
                        name: "Relay",
                        logo: "/images/tool-tech/react.svg"
                  }
            ]
      },
      {
            title: "Database Integration",
            description: "Resolving data quickly.",
            tools: [
                  {
                        name: "Prisma",
                        logo: "/images/tool-tech/prisma.svg"
                  },
                  {
                        name: "DataLoader",
                        logo: "/images/tool-tech/graphql.svg"
                  },
                  {
                        name: "PostgreSQL",
                        logo: "/images/tool-tech/postgresql.svg"
                  }
            ]
      },
      {
            title: "Testing & Tooling",
            description: "Ensuring API quality.",
            tools: [
                  {
                        name: "GraphQL Code Generator",
                        logo: "/images/tool-tech/graphql.svg"
                  },
                  {
                        name: "GraphiQL",
                        logo: "/images/tool-tech/graphql.svg"
                  },
                  {
                        name: "Jest",
                        logo: "/images/tool-tech/jest.svg"
                  }
            ]
      }
]
  },
};

export default graphql;
