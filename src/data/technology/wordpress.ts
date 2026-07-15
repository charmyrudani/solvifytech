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

const wordpress = {
  slug: "wordpress-development",

  hero: {
    serviceName: "WordPress",
    tagline: "WORDPRESS DEVELOPMENT SERVICES",
    title: "Build powerful, custom, and highly scalable content platforms with WordPress.",
    description: "Our WordPress development services deliver custom themes, bespoke plugins, and headless CMS architectures. We transform the world's most popular CMS into a secure, high-performance platform tailored exactly to your enterprise, publishing, or eCommerce needs.",
  },

  serviceOverview: {
    tag: "WORDPRESS DEVELOPMENT SERVICES",
    title: "Custom web experiences powered by the ultimate CMS.",
    description: "At Solvifytech, we don't just use pre-built templates. We engineer custom WordPress solutions from the ground up, focusing on security, Core Web Vitals performance, and intuitive authoring experiences via the Gutenberg block editor.",
    image: aiService,
    services: [
      {
            title: "Custom Theme Development",
            description: "Design and code bespoke WordPress themes from scratch using modern frontend tools (Tailwind CSS, Webpack) for pixel-perfect brand representation."
      },
      {
            title: "Headless WordPress",
            description: "Decouple your CMS using the WP REST API or WPGraphQL to power lightning-fast frontends built with Next.js or React."
      },
      {
            title: "Custom Plugin Development",
            description: "Extend WordPress functionality by developing custom, secure PHP plugins tailored to your specific business logic and integrations."
      },
      {
            title: "WooCommerce Development",
            description: "Build and scale custom eCommerce stores using WooCommerce, complete with bespoke payment gateways and ERP integrations."
      },
      {
            title: "Enterprise Migration",
            description: "Securely migrate massive content repositories from legacy CMS platforms (Drupal, Sitecore, Joomla) to a streamlined WordPress architecture."
      },
      {
            title: "Performance & Security Optimization",
            description: "Audit and optimize your WordPress site for speed (caching, CDN) and fortify it against vulnerabilities and brute-force attacks."
      },
      {
            title: "Gutenberg Block Development",
            description: "Create custom React-based Gutenberg blocks to give your editorial team complete, yet brand-safe, control over page layouts."
      }
]
  },

  developmentTeam: {
    tag: "OUR WORDPRESS EXPERTS",
    title: "Meet the engineers mastering the WP ecosystem.",
    description: "Our WordPress team consists of full-stack developers who deeply understand WordPress Core, modern PHP, and the React ecosystem required for modern Gutenberg and headless development.",
    engineers: [
      {
        role: "Lead WordPress Architect",
        name: "Daniel R.",
        experience: "12 years of experience",
        image: dev1,
        company: bbva,
        technologies: ["WordPress Core","PHP 8","MySQL","WP-CLI"],
        certifications: ["Zend Certified PHP Engineer"],
      },
      {
        role: "Headless WP Lead",
        name: "Carlos M.",
        experience: "9 years of experience",
        image: dev2,
        company: johnson,
        technologies: ["WPGraphQL","Next.js","React","Node.js"],
        certifications: ["React Professional Certification"],
      },
      {
        role: "Custom Theme Developer",
        name: "Sophia L.",
        experience: "8 years of experience",
        image: dev3,
        company: adobe,
        technologies: ["Tailwind CSS","JavaScript","Sass","Webpack"],
        certifications: ["Front-End Web Developer"],
      },
      {
        role: "WooCommerce Specialist",
        name: "Michael T.",
        experience: "10 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: ["WooCommerce","Stripe API","PHP","Redis"],
        certifications: ["Certified WooCommerce Expert"],
      },
      {
        role: "Security & Ops Engineer",
        name: "Emma K.",
        experience: "11 years of experience",
        image: dev5,
        company: motorolla,
        technologies: ["Linux","Nginx","Cloudflare","Docker"],
        certifications: ["AWS Certified SysOps Administrator"],
      }
    ]
  },
  
  industriesSolutions: {
    tag: "WORDPRESS ACROSS INDUSTRIES",
    title: "Versatile content platforms for every sector.",
    description: "From high-traffic news publishers to secure corporate portals, our custom WordPress solutions adapt to diverse industry requirements.",
    industries: [
      {
            title: "Media & Publishing",
            description: "High-performance setups for massive traffic spikes.",
            solutions: [
                  "High-availability Caching",
                  "Custom Editorial Workflows",
                  "Paywall Integrations",
                  "Automated Syndication"
            ],
      image: industryImage,
      },
      {
            title: "eCommerce & Retail",
            description: "Scalable storefronts powered by WooCommerce.",
            solutions: [
                  "Custom Product Configurator",
                  "Subscription Management",
                  "B2B Wholesale Portals",
                  "Advanced Shipping Logic"
            ],
      image: industryImage,
      },
      {
            title: "Education & eLearning",
            description: "Robust platforms for online courses (LMS).",
            solutions: [
                  "LearnDash Integrations",
                  "Student Membership Portals",
                  "Interactive Course Builders",
                  "Video Hosting Integration"
            ],
      image: industryImage,
      },
      {
            title: "Corporate & B2B",
            description: "Secure, professional websites for lead generation.",
            solutions: [
                  "CRM Integrations (Salesforce)",
                  "Multilingual Networks (Multisite)",
                  "Custom Lead Capture",
                  "Investor Relations Portals"
            ],
      image: industryImage,
      },
      {
            title: "Non-Profits",
            description: "Engaging platforms to drive donations and awareness.",
            solutions: [
                  "Donation Gateway Integrations",
                  "Event Management Systems",
                  "Volunteer Portals",
                  "Impact Dashboards"
            ],
      image: industryImage,
      },
      {
            title: "Real Estate",
            description: "Property listing portals with advanced search.",
            solutions: [
                  "IDX/MLS Integrations",
                  "Advanced Property Search",
                  "Interactive Map Plotting",
                  "Agent Directories"
            ],
      image: industryImage,
      }
]
  },

  capabilities: {
    label: "WORDPRESS CAPABILITIES",
    title: "Modernizing the WordPress stack.",
    description: "We utilize modern development workflows, cloud hosting, and headless APIs to bring WordPress into the modern web era.",
    capabilities: [
      {
            title: "Core & Backend",
            description: "The foundation of WordPress development.",
            tools: [
                  {
                        name: "WordPress",
                        logo: "/images/tool-tech/wordpress.svg"
                  },
                  {
                        name: "PHP",
                        logo: "/images/tool-tech/php.svg"
                  },
                  {
                        name: "MySQL",
                        logo: "/images/tool-tech/mysql.svg"
                  }
            ]
      },
      {
            title: "Headless & APIs",
            description: "Decoupling the CMS for modern frontends.",
            tools: [
                  {
                        name: "WPGraphQL",
                        logo: "/images/tool-tech/graphql.svg"
                  },
                  {
                        name: "Next.js",
                        logo: "/images/tool-tech/nextjs.svg"
                  },
                  {
                        name: "REST API",
                        logo: "/images/tool-tech/rest-api.svg"
                  }
            ]
      },
      {
            title: "eCommerce",
            description: "Building scalable online stores.",
            tools: [
                  {
                        name: "WooCommerce",
                        logo: "/images/tool-tech/woocommerce.svg"
                  },
                  {
                        name: "Stripe",
                        logo: "/images/tool-tech/stripe.svg"
                  }
            ]
      },
      {
            title: "Hosting & Ops",
            description: "Ensuring speed and security.",
            tools: [
                  {
                        name: "WP Engine",
                        logo: "/images/tool-tech/wpengine.svg"
                  },
                  {
                        name: "Cloudflare",
                        logo: "/images/tool-tech/cloudflare.svg"
                  },
                  {
                        name: "Redis",
                        logo: "/images/tool-tech/redis.svg"
                  }
            ]
      }
]
  },
};

export default wordpress;
