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

const reactjs = {
  slug: "reactjs-development",

  hero: {
    serviceName: "React.js",
    tagline: "REACT.JS DEVELOPMENT SERVICES",
    title: "Build dynamic, highly interactive, and performant user interfaces with React.js.",
    description: "Our React.js development services help businesses create rich, engaging single-page applications (SPAs) and complex web platforms. We leverage React's component-based architecture to deliver scalable frontend solutions that offer native-like user experiences and rapid rendering speeds.",
  },

  serviceOverview: {
    tag: "REACT.JS DEVELOPMENT SERVICES",
    title: "Deliver flawless user experiences with cutting-edge frontend architecture.",
    description: "At Solvifytech, we specialize in building complex, interactive React applications. From real-time data dashboards to massive eCommerce storefronts, our React experts ensure your application is fast, accessible, and easily maintainable through modular design.",
    image: aiService,
    services: [
      {
            title: "Custom SPA Development",
            description: "Build lightning-fast Single Page Applications that load instantly and provide seamless navigation without page reloads."
      },
      {
            title: "UI/UX Component Library Creation",
            description: "Develop a custom, reusable component library integrated with Storybook to ensure brand consistency across all your digital products."
      },
      {
            title: "Complex State Management",
            description: "Implement robust state management architectures using Redux Toolkit, Zustand, or Context API for predictable data flow."
      },
      {
            title: "React Migration Services",
            description: "Securely migrate legacy Angular, Vue, or jQuery applications to modern React.js architecture with minimal downtime."
      },
      {
            title: "Progressive Web Apps (PWA)",
            description: "Enhance your React applications with offline capabilities, push notifications, and app-like performance on mobile devices."
      },
      {
            title: "Frontend Performance Optimization",
            description: "Audit and optimize existing React apps by implementing lazy loading, memoization, and optimal rendering strategies."
      },
      {
            title: "API Integration",
            description: "Seamlessly connect your React frontend with REST APIs, GraphQL, and WebSockets for real-time data updates."
      }
]
  },

  developmentTeam: {
    tag: "OUR REACT.JS ENGINEERS",
    title: "Meet the frontend experts crafting beautiful user interfaces.",
    description: "Our React.js developers are obsessed with performance, accessibility, and clean code. They excel at translating complex design systems into pixel-perfect, responsive components.",
    engineers: [
      {
        role: "Senior Frontend Engineer",
        name: "Daniel R.",
        experience: "8 years of experience",
        image: dev1,
        company: bbva,
        technologies: ["React.js","Redux","TypeScript","Tailwind CSS"],
        certifications: ["Meta Front-End Developer Professional Certificate"],
      },
      {
        role: "UI Architecture Lead",
        name: "Carlos M.",
        experience: "10 years of experience",
        image: dev2,
        company: johnson,
        technologies: ["React.js","Storybook","Framer Motion","CSS-in-JS"],
        certifications: ["Certified Web Accessibility Specialist (WAS)"],
      },
      {
        role: "Performance Specialist",
        name: "Sophia L.",
        experience: "7 years of experience",
        image: dev3,
        company: adobe,
        technologies: ["React.js","Webpack","Vite","Web Vitals"],
        certifications: ["Google Mobile Web Specialist"],
      },
      {
        role: "State Management Expert",
        name: "Michael T.",
        experience: "9 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: ["React.js","Zustand","React Query","GraphQL"],
        certifications: ["GraphQL Developer Certification"],
      },
      {
        role: "Full-Stack Frontend Engineer",
        name: "Emma K.",
        experience: "11 years of experience",
        image: dev5,
        company: motorolla,
        technologies: ["React.js","Node.js","Jest","Cypress"],
        certifications: ["AWS Certified Developer – Associate"],
      }
    ]
  },
  
  industriesSolutions: {
    tag: "REACT.JS ACROSS INDUSTRIES",
    title: "Interactive interfaces tailored for every industry.",
    description: "React's flexibility makes it the perfect choice for diverse applications, from high-frequency trading dashboards to media-rich entertainment platforms.",
    industries: [
      {
            title: "eCommerce & Retail",
            description: "Build ultra-fast storefronts that drive conversions.",
            solutions: [
                  "Custom Storefronts",
                  "Dynamic Shopping Carts",
                  "Real-time Inventory UI",
                  "Product Configurators"
            ],
      image: industryImage,
      },
      {
            title: "Finance & Banking",
            description: "Develop secure and responsive financial dashboards.",
            solutions: [
                  "Real-time Trading Dashboards",
                  "Personal Finance Portfolios",
                  "Interactive Data Visualizations",
                  "Secure Banking Portals"
            ],
      image: industryImage,
      },
      {
            title: "Healthcare",
            description: "Create accessible portals for patients and doctors.",
            solutions: [
                  "Patient Portals",
                  "Telemedicine Video Interfaces",
                  "Interactive Anatomical Models",
                  "EMR Dashboards"
            ],
      image: industryImage,
      },
      {
            title: "Media & Entertainment",
            description: "Deliver rich, engaging media experiences.",
            solutions: [
                  "Video Streaming Interfaces",
                  "Interactive News Portals",
                  "Social Media Feeds",
                  "Music Player UIs"
            ],
      image: industryImage,
      },
      {
            title: "Travel & Hospitality",
            description: "Build complex booking and reservation systems.",
            solutions: [
                  "Interactive Booking Engines",
                  "Dynamic Pricing Calendars",
                  "Interactive Maps",
                  "Customer Review Platforms"
            ],
      image: industryImage,
      },
      {
            title: "SaaS & Enterprise",
            description: "Develop complex enterprise tools with rich interactions.",
            solutions: [
                  "Admin Dashboards",
                  "Project Management Boards (Kanban)",
                  "Analytics Interfaces",
                  "CRM Frontends"
            ],
      image: industryImage,
      }
]
  },

  capabilities: {
    label: "REACT.JS CAPABILITIES",
    title: "The frontend ecosystem powering our React applications.",
    description: "We utilize the modern React ecosystem, including state-of-the-art build tools, styling libraries, and testing frameworks to ensure enterprise-grade quality.",
    capabilities: [
      {
            title: "Core Technologies",
            description: "The foundation of our React development.",
            tools: [
                  {
                        name: "React",
                        logo: "/images/tool-tech/react.svg"
                  },
                  {
                        name: "TypeScript",
                        logo: "/images/tool-tech/typescript.svg"
                  },
                  {
                        name: "Vite",
                        logo: "/images/tool-tech/vite.svg"
                  }
            ]
      },
      {
            title: "State & Data Management",
            description: "Managing complex application state effectively.",
            tools: [
                  {
                        name: "Redux",
                        logo: "/images/tool-tech/redux.svg"
                  },
                  {
                        name: "React Query",
                        logo: "/images/tool-tech/react-query.svg"
                  },
                  {
                        name: "Zustand",
                        logo: "/images/tool-tech/zustand.svg"
                  }
            ]
      },
      {
            title: "Styling & UI",
            description: "Creating pixel-perfect, responsive designs.",
            tools: [
                  {
                        name: "Tailwind CSS",
                        logo: "/images/tool-tech/tailwind.svg"
                  },
                  {
                        name: "Styled Components",
                        logo: "/images/tool-tech/styled-components.svg"
                  },
                  {
                        name: "Material UI",
                        logo: "/images/tool-tech/mui.svg"
                  }
            ]
      },
      {
            title: "Testing",
            description: "Ensuring reliability and preventing regressions.",
            tools: [
                  {
                        name: "Jest",
                        logo: "/images/tool-tech/jest.svg"
                  },
                  {
                        name: "React Testing Library",
                        logo: "/images/tool-tech/react-testing-library.svg"
                  },
                  {
                        name: "Cypress",
                        logo: "/images/tool-tech/cypress.svg"
                  }
            ]
      }
]
  },
};

export default reactjs;
