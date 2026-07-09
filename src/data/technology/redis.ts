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

const redis = {
  slug: "redis-development",

  hero: {
    serviceName: "Redis",
    tagline: "REDIS IN-MEMORY DATABASE SERVICES",
    title: "Supercharge your application performance with Redis in-memory data structures.",
    description: "Our Redis development services help eliminate database bottlenecks. By leveraging Redis for ultra-fast caching, real-time message brokering, and high-speed session management, we ensure your applications deliver sub-millisecond response times at massive scale.",
  },

  serviceOverview: {
    tag: "REDIS DEVELOPMENT SERVICES",
    title: "Unleash sub-millisecond latency for your critical data.",
    description: "At Solvifytech, we implement Redis far beyond simple key-value caching. We utilize its advanced data structures (Hashes, Sets, Sorted Sets, Streams) to build real-time leaderboards, rate limiters, pub/sub messaging systems, and geospatial indexes.",
    image: aiService,
    services: [
      {
            title: "High-Performance Caching",
            description: "Implement intelligent caching layers to dramatically reduce database load and improve API response times for read-heavy applications."
      },
      {
            title: "Session & State Management",
            description: "Build scalable, centralized session stores for load-balanced microservices and distributed web applications."
      },
      {
            title: "Real-time Pub/Sub & Streams",
            description: "Architect robust message brokers and event streaming pipelines for chat applications, live notifications, and IoT data."
      },
      {
            title: "Leaderboards & Counting",
            description: "Utilize Redis Sorted Sets to build highly efficient, real-time leaderboards, rate limiters, and real-time analytics counters."
      },
      {
            title: "Redis Cluster & High Availability",
            description: "Design and deploy highly available Redis Clusters with automatic partitioning and Sentinel for automatic failover."
      },
      {
            title: "RedisSearch & Secondary Indexing",
            description: "Implement RedisSearch for lightning-fast full-text search, auto-complete suggestions, and complex secondary indexing in-memory."
      },
      {
            title: "Geospatial Data Processing",
            description: "Use Redis Geo commands to build real-time location-based features like ride-hailing dispatch or nearby store locators."
      }
]
  },

  developmentTeam: {
    tag: "OUR REDIS EXPERTS",
    title: "Meet the engineers obsessed with speed.",
    description: "Our backend engineers and systems architects possess deep expertise in memory management, data structure selection, and distributed caching strategies.",
    engineers: [
      {
        role: "Lead Performance Architect",
        name: "Daniel R.",
        experience: "12 years of experience",
        image: dev1,
        company: bbva,
        technologies: ["Redis","Redis Cluster","Node.js","C++"],
        certifications: ["Redis Certified Developer"],
      },
      {
        role: "Real-time Systems Engineer",
        name: "Carlos M.",
        experience: "9 years of experience",
        image: dev2,
        company: johnson,
        technologies: ["Redis Pub/Sub","Redis Streams","Go","WebSockets"],
        certifications: ["AWS Certified Solutions Architect"],
      },
      {
        role: "Caching Strategy Specialist",
        name: "Sophia L.",
        experience: "10 years of experience",
        image: dev3,
        company: adobe,
        technologies: ["Redis","Memcached","Varnish","Python"],
        certifications: ["Certified Data Engineer"],
      },
      {
        role: "High Availability DBA",
        name: "Michael T.",
        experience: "11 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: ["Redis Sentinel","Linux","HAProxy","Docker"],
        certifications: ["Linux Foundation Certified Engineer"],
      },
      {
        role: "Search & Analytics Lead",
        name: "Emma K.",
        experience: "8 years of experience",
        image: dev5,
        company: motorolla,
        technologies: ["RedisSearch","RedisJSON","Elasticsearch","TypeScript"],
        certifications: ["Certified Search Specialist"],
      }
    ]
  },
  
  industriesSolutions: {
    tag: "REDIS ACROSS INDUSTRIES",
    title: "Real-time data for high-velocity industries.",
    description: "When milliseconds matter, Redis is the critical infrastructure component for delivering real-time experiences and handling massive traffic spikes.",
    industries: [
      {
            title: "Gaming",
            description: "Powering real-time multiplayer experiences.",
            solutions: [
                  "Global Real-time Leaderboards",
                  "Player Session Management",
                  "Matchmaking Queues",
                  "In-game Chat (Pub/Sub)"
            ],
      image: industryImage,
      },
      {
            title: "eCommerce & Flash Sales",
            description: "Handling extreme traffic without database crashes.",
            solutions: [
                  "High-speed Shopping Carts",
                  "Inventory Lock Management",
                  "Flash Sale Caching",
                  "Session Clustering"
            ],
      image: industryImage,
      },
      {
            title: "Media & Streaming",
            description: "Delivering content and metadata instantly.",
            solutions: [
                  "Video Metadata Caching",
                  "Real-time Viewer Analytics",
                  "Live Stream Chat",
                  "Content Recommendation Caching"
            ],
      image: industryImage,
      },
      {
            title: "Finance & Fintech",
            description: "Ultra-low latency for financial data.",
            solutions: [
                  "Real-time Fraud Prevention (Rate Limiting)",
                  "Stock Ticker Pub/Sub",
                  "High-speed Market Data Caching",
                  "Idempotent Transaction Locks"
            ],
      image: industryImage,
      },
      {
            title: "Logistics & Delivery",
            description: "Tracking assets in real-time.",
            solutions: [
                  "Geospatial Driver Tracking",
                  "Real-time Route Updates",
                  "Dispatch Queues",
                  "Live ETA Calculations"
            ],
      image: industryImage,
      },
      {
            title: "AdTech",
            description: "Millisecond bidding and analytics.",
            solutions: [
                  "Real-time Bidding (RTB) Caching",
                  "Ad Impression Counters",
                  "User Profile Lookups",
                  "Campaign Budget Rate Limiting"
            ],
      image: industryImage,
      }
]
  },

  capabilities: {
    label: "REDIS CAPABILITIES",
    title: "Extending the power of Redis.",
    description: "We utilize the full Redis Stack, including advanced modules and managed cloud providers, to solve complex performance challenges.",
    capabilities: [
      {
            title: "Redis Modules",
            description: "Extending Redis functionality.",
            tools: [
                  {
                        name: "RedisSearch",
                        logo: "/images/tool-tech/redis.svg"
                  },
                  {
                        name: "RedisJSON",
                        logo: "/images/tool-tech/redis.svg"
                  },
                  {
                        name: "RedisTimeSeries",
                        logo: "/images/tool-tech/redis.svg"
                  }
            ]
      },
      {
            title: "Managed Cloud",
            description: "Deploying highly available Redis.",
            tools: [
                  {
                        name: "Redis Enterprise",
                        logo: "/images/tool-tech/redis.svg"
                  },
                  {
                        name: "AWS ElastiCache",
                        logo: "/images/tool-tech/aws.svg"
                  },
                  {
                        name: "Azure Cache",
                        logo: "/images/tool-tech/azure.svg"
                  }
            ]
      },
      {
            title: "Backend Integrations",
            description: "Connecting your apps to Redis.",
            tools: [
                  {
                        name: "Node.js (ioredis)",
                        logo: "/images/tool-tech/nodejs.svg"
                  },
                  {
                        name: "Python (redis-py)",
                        logo: "/images/tool-tech/python.svg"
                  },
                  {
                        name: "Spring Data Redis",
                        logo: "/images/tool-tech/java.svg"
                  }
            ]
      },
      {
            title: "Use Cases",
            description: "Solving specific architectural patterns.",
            tools: [
                  {
                        name: "Pub/Sub Messaging",
                        logo: "/images/tool-tech/redis.svg"
                  },
                  {
                        name: "Distributed Locks",
                        logo: "/images/tool-tech/redis.svg"
                  },
                  {
                        name: "Job Queues (BullMQ)",
                        logo: "/images/tool-tech/redis.svg"
                  }
            ]
      }
]
  },
};

export default redis;
