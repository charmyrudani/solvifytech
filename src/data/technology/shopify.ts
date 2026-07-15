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

const shopify = {
  slug: "shopify-development",

  hero: {
    serviceName: "Shopify",
    tagline: "SHOPIFY eCommerce DEVELOPMENT",
    title: "Build high-converting, scalable eCommerce storefronts with Shopify and Shopify Plus.",
    description: "Our Shopify development services empower brands to create stunning, highly customized online stores. From custom theme development and seamless platform migrations to advanced headless commerce architectures, we deliver eCommerce solutions that drive sales and scale globally.",
  },

  serviceOverview: {
    tag: "SHOPIFY DEVELOPMENT SERVICES",
    title: "Elevate your retail brand with bespoke eCommerce experiences.",
    description: "At Solvifytech, we specialize in end-to-end Shopify solutions for growing merchants and enterprise brands on Shopify Plus. We focus on conversion rate optimization (CRO), lightning-fast performance, and deep integrations with your existing ERP and CRM systems.",
    image: aiService,
    services: [
      {
            title: "Custom Shopify Theme Development",
            description: "Design and build pixel-perfect, highly responsive custom themes from scratch utilizing Shopify Liquid, HTML5, and Tailwind CSS."
      },
      {
            title: "Shopify Plus Enterprise Solutions",
            description: "Leverage the power of Shopify Plus with B2B wholesale channels, advanced checkout customization, and Shopify Scripts."
      },
      {
            title: "Headless Commerce Development",
            description: "Decouple your frontend using Next.js, Remix, or React (Hydrogen) for ultimate performance and omnichannel content delivery."
      },
      {
            title: "eCommerce Migration Services",
            description: "Securely migrate your product catalogs, customer data, and order history from Magento, WooCommerce, or BigCommerce to Shopify."
      },
      {
            title: "Custom Shopify App Development",
            description: "Build private or public Shopify apps using Node.js and React to add unique features or integrate third-party APIs."
      },
      {
            title: "ERP & CRM Integration",
            description: "Seamlessly connect your Shopify store with systems like NetSuite, Salesforce, and custom warehouse management systems (WMS)."
      },
      {
            title: "Conversion Rate Optimization (CRO)",
            description: "Audit your store's user experience, implement A/B testing, and optimize page load speeds to maximize revenue."
      }
]
  },

  developmentTeam: {
    tag: "OUR SHOPIFY EXPERTS",
    title: "Meet the eCommerce specialists driving brand growth.",
    description: "Our team of certified Shopify developers, UI/UX designers, and eCommerce strategists know what it takes to build stores that not only look beautiful but perform exceptionally well under high traffic.",
    engineers: [
      {
        role: "Lead Shopify Architect",
        name: "Daniel R.",
        experience: "9 years of experience",
        image: dev1,
        company: bbva,
        technologies: ["Shopify Plus","Liquid","Hydrogen","Next.js"],
        certifications: ["Shopify Plus Partner Certified"],
      },
      {
        role: "Custom Theme Developer",
        name: "Carlos M.",
        experience: "7 years of experience",
        image: dev2,
        company: johnson,
        technologies: ["Liquid","Tailwind CSS","JavaScript","Alpine.js"],
        certifications: ["Shopify Theme Developer Certification"],
      },
      {
        role: "Shopify App Developer",
        name: "Sophia L.",
        experience: "8 years of experience",
        image: dev3,
        company: adobe,
        technologies: ["Node.js","React","GraphQL","Polaris"],
        certifications: ["AWS Certified Developer"],
      },
      {
        role: "eCommerce Integration Specialist",
        name: "Michael T.",
        experience: "10 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: ["REST API","Webhooks","NetSuite","Python"],
        certifications: ["Certified API Specialist"],
      },
      {
        role: "CRO & Performance Analyst",
        name: "Emma K.",
        experience: "6 years of experience",
        image: dev5,
        company: motorolla,
        technologies: ["Google Analytics","Hotjar","Optimizely","Lighthouse"],
        certifications: ["Google Analytics Individual Qualification"],
      }
    ]
  },
  
  industriesSolutions: {
    tag: "SHOPIFY ACROSS RETAIL SECTORS",
    title: "Tailored eCommerce solutions for every brand.",
    description: "Whether you're selling digital goods, luxury apparel, or complex B2B manufacturing parts, we build Shopify stores tailored to your specific buyer journey.",
    industries: [
      {
            title: "Fashion & Apparel",
            description: "Immersive, visual-first shopping experiences.",
            solutions: [
                  "Lookbook Integrations",
                  "Advanced Variant Selectors",
                  "Virtual Try-on Features",
                  "Global Localization"
            ],
      image: industryImage,
      },
      {
            title: "Health & Beauty",
            description: "Subscription-driven models and personalized recommendations.",
            solutions: [
                  "ReCharge Subscription Integration",
                  "Custom Skincare Quizzes",
                  "Loyalty Programs",
                  "Ingredient Glossaries"
            ],
      image: industryImage,
      },
      {
            title: "Food & Beverage",
            description: "Complex shipping and local delivery logistics.",
            solutions: [
                  "Local Delivery Routing",
                  "Perishable Goods Shipping",
                  "Wholesale B2B Portals",
                  "Recipe Integrations"
            ],
      image: industryImage,
      },
      {
            title: "Electronics & Gadgets",
            description: "Detailed technical specifications and comparison tools.",
            solutions: [
                  "Product Comparison Engines",
                  "Interactive 3D Models",
                  "Bundle Builders",
                  "Warranty Management"
            ],
      image: industryImage,
      },
      {
            title: "Home & Furniture",
            description: "Handling oversized shipping and augmented reality.",
            solutions: [
                  "AR Furniture Placement",
                  "Custom Shipping Calculators",
                  "Fabric Swatch Requests",
                  "Room Builders"
            ],
      image: industryImage,
      },
      {
            title: "B2B & Wholesale",
            description: "Custom pricing tiers and bulk ordering flows.",
            solutions: [
                  "Custom Price Lists",
                  "Quick Order Forms",
                  "Net30 Payment Terms",
                  "Sales Rep Portals"
            ],
      image: industryImage,
      }
]
  },

  capabilities: {
    label: "SHOPIFY CAPABILITIES",
    title: "The tools powering modern Shopify storefronts.",
    description: "We utilize the latest Shopify frameworks, headless architectures, and top-tier ecosystem apps to build world-class eCommerce experiences.",
    capabilities: [
      {
            title: "Shopify Frameworks",
            description: "The core technologies for building on Shopify.",
            tools: [
                  {
                        name: "Shopify Liquid",
                        logo: "/images/tool-tech/shopify.svg"
                  },
                  {
                        name: "Hydrogen",
                        logo: "/images/tool-tech/react.svg"
                  },
                  {
                        name: "Oxygen",
                        logo: "/images/tool-tech/shopify.svg"
                  }
            ]
      },
      {
            title: "App Development",
            description: "Building custom functionality for merchants.",
            tools: [
                  {
                        name: "Node.js",
                        logo: "/images/tool-tech/nodejs.svg"
                  },
                  {
                        name: "React (Polaris)",
                        logo: "/images/tool-tech/react.svg"
                  },
                  {
                        name: "GraphQL",
                        logo: "/images/tool-tech/graphql.svg"
                  }
            ]
      },
      {
            title: "Frontend & Styling",
            description: "Creating blazing-fast, beautiful themes.",
            tools: [
                  {
                        name: "Tailwind CSS",
                        logo: "/images/tool-tech/tailwind.svg"
                  },
                  {
                        name: "Alpine.js",
                        logo: "/images/tool-tech/alpinejs.svg"
                  },
                  {
                        name: "Vite",
                        logo: "/images/tool-tech/vite.svg"
                  }
            ]
      },
      {
            title: "Key Integrations",
            description: "Connecting your store to powerful SaaS tools.",
            tools: [
                  {
                        name: "Klaviyo",
                        logo: "/images/tool-tech/klaviyo.svg"
                  },
                  {
                        name: "ReCharge",
                        logo: "/images/tool-tech/recharge.svg"
                  },
                  {
                        name: "Algolia",
                        logo: "/images/tool-tech/algolia.svg"
                  }
            ]
      }
]
  },
};

export default shopify;
