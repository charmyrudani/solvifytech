import { Paths } from "../../constants/route-paths.constants";

export const navbarData = [
  {
    key: "services",
    label: "Services",

    desktop: {
      title: "Services",
      subtitle: "Engineering digital products that scale with your business.",

      stats: [
        { value: "120+", label: "Active Clients" },
        { value: "98%", label: "Retention Rate" },
        { value: "9+", label: "Years Delivering" },
        { value: "250+", label: "Projects Shipped" },
      ],

      sections: [
        {
          title: "Top Services",
          links: [
            {
              label: "AI Development",
              path: `${Paths.services}/${Paths.aiDevelopment}`,
            },
            {
              label: "Shopify Development",
              path: `${Paths.services}/${Paths.shopifyDevelopment}`,
            },
            {
              label: "ERP Development",
              path: `${Paths.services}/${Paths.erpDevelopment}`,
            },
            {
              label: "Web Development",
              path: `${Paths.services}/${Paths.webDevelopment}`,
            },
            {
              label: "Mobile App Development",
              path: `${Paths.services}/${Paths.mobileAppDevelopment}`,
            },
            {
              label: "UI/UX Design",
              path: `${Paths.services}/${Paths.uiUxDesign}`,
            },
            {
              label: "Cloud & DevOps",
              path: `${Paths.services}/${Paths.cloudDevOps}`,
            },
          ],
        },

        {
          title: "AI & Automation",
          links: [
            {
              label: "AI Agents",
              path: `${Paths.services}/${Paths.aiAgents}`,
            },
            {
              label: "Chatbots",
              path: `${Paths.services}/${Paths.chatbots}`,
            },
            {
              label: "Workflow Automation",
              path: `${Paths.services}/${Paths.workflowAutomation}`,
            },
            {
              label: "OpenAI Integration",
              path: `${Paths.services}/${Paths.openaiIntegration}`,
            },
            {
              label: "n8n Automation",
              path: `${Paths.services}/${Paths.n8nAutomation}`,
            },
            {
              label: "WhatsApp Automation",
              path: `${Paths.services}/${Paths.whatsappAutomation}`,
            },
            {
              label: "AI Voice Bots",
              path: `${Paths.services}/${Paths.aiVoiceBots}`,
            },
          ],
        },

        {
          title: "Enterprise",
          links: [
            {
              label: "ERP Development",
              path: `${Paths.services}/${Paths.erpDevelopment}`,
            },
            {
              label: "CRM Systems",
              path: `${Paths.services}/${Paths.crmSystems}`,
            },
            {
              label: "SaaS Development",
              path: `${Paths.services}/${Paths.saasDevelopment}`,
            },
            {
              label: "Digital Transformation",
              path: `${Paths.services}/${Paths.digitalTransformation}`,
            },
            {
              label: "Business Intelligence",
              path: `${Paths.services}/${Paths.businessIntelligence}`,
            },
            {
              label: "Cloud Migration",
              path: `${Paths.services}/${Paths.cloudMigration}`,
            },
            {
              label: "DevOps Consulting",
              path: `${Paths.services}/${Paths.devOpsConsulting}`,
            },
          ],
        },

        {
          title: "Marketing",
          links: [
            {
              label: "SEO",
              path: `${Paths.services}/${Paths.seo}`,
            },
            {
              label: "LinkedIn Marketing",
              path: `${Paths.services}/${Paths.linkedinMarketing}`,
            },
            {
              label: "Google Ads",
              path: `${Paths.services}/${Paths.googleAds}`,
            },
            {
              label: "Social Media Marketing",
              path: `${Paths.services}/${Paths.socialMediaMarketing}`,
            },
            {
              label: "Email Marketing",
              path: `${Paths.services}/${Paths.emailMarketing}`,
            },
            {
              label: "Lead Generation",
              path: `${Paths.services}/${Paths.leadGeneration}`,
            },
          ],
        },
      ],
    },
  },

  {
    key: "solutions",
    label: "Solutions",

    desktop: {
      title: "Solutions",
      subtitle:
        "Modern technologies powering scalable digital products and enterprise solutions.",

      stats: [
        { value: "50+", label: "Modern Technologies" },
        { value: "Full-Stack", label: "Development Expertise" },
        { value: "Cloud-Native", label: "Architecture" },
        { value: "AI-Powered", label: "Solutions" },
      ],

      sections: [
        {
          title: "Top Technologies",
          grid: true,

          links: [
            {
              label: "AI Automation",
              path: `${Paths.technologies}/${Paths.aiAutomation}`,
            },
            {
              label: "AI",
              path: `${Paths.technologies}/${Paths.ai}`,
            },
            {
              label: "React JS",
              path: `${Paths.technologies}/${Paths.reactjs}`,
            },
            {
              label: "Next JS",
              path: `${Paths.technologies}/${Paths.nextjs}`,
            },
            {
              label: "TypeScript",
              path: `${Paths.technologies}/${Paths.typescript}`,
            },
            {
              label: "Node JS",
              path: `${Paths.technologies}/${Paths.nodejs}`,
            },
            {
              label: "PostgreSQL",
              path: `${Paths.technologies}/${Paths.postgresql}`,
            },
            {
              label: "AWS",
              path: `${Paths.technologies}/${Paths.aws}`,
            },
            {
              label: "Docker",
              path: `${Paths.technologies}/${Paths.docker}`,
            },
            {
              label: "Shopify",
              path: `${Paths.technologies}/${Paths.shopify}`,
            },
            {
              label: "React Native",
              path: `${Paths.technologies}/${Paths.reactNative}`,
            },
            {
              label: "Python",
              path: `${Paths.technologies}/${Paths.python}`,
            },
            {
              label: "MongoDB",
              path: `${Paths.technologies}/${Paths.mongodb}`,
            },
            {
              label: "WordPress",
              path: `${Paths.technologies}/${Paths.wordpress}`,
            },
            {
              label: "GraphQL",
              path: `${Paths.technologies}/${Paths.graphql}`,
            },
            {
              label: "Redis",
              path: `${Paths.technologies}/${Paths.redis}`,
            },
            {
              label: "Strapi",
              path: `${Paths.technologies}/${Paths.strapi}`,
            },
          ],
        },
      ],
    },
  },

  {
    key: "our-work",
    label: "Our Work",
    path: Paths.ourWork,
  },

  {
    key: "about-us",
    label: "About Us",

    desktop: {
      title: "About Us",

      subtitle: "Building innovative software, AI solutions, and digital experiences for businesses worldwide.",

      stats: [
        { value: "2022", label: "Founded" },
        { value: "120+", label: "Happy Clients" },
        { value: "250+", label: "Projects Delivered" },
        { value: "22+", label: "Technology Expert" },
      ],

      sections: [
        {
          title: "Inside SolvifyTech",

          links: [
            {
              label: "Contact Us",
              path: Paths.contactUs,
            },
            {
              label: "FAQs",
              path: `/${Paths.contactUs}#faq`,
            },
          ],
        },
      ],
    },
  },

  {
    key: "insights",
    label: "Insights",
    path: Paths.blog,
  },
];