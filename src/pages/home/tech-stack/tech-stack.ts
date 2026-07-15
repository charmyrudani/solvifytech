export interface TechStackCard {
  id: string;
  title: string;
  description: string;
  tags: string[];
  // color: string;
}

export const color = "#1565c0";

export const techStackData: TechStackCard[] = [
  {
    id: "ai-development-automation",
    title: "AI Development & Automation",
    description: "Build intelligent applications and automate repetitive business processes using AI agents, machine learning and workflow automation.",
    tags: ["AI Agents", "AI Integrations", "Workflow Automation", "Generative AI"],
    // color: "#ea580c",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Deliver scalable software solutions designed around your unique business needs.",
    tags: ["CRM", "ERP", "Enterprise", "Automation", "SaaS", "API"],
    // color: "#212121",
  },
  {
    id: "app-development",
    title: "Mobile App Development",
    description: "Develop intuitive Android, iOS, and cross-platform mobile applications.",
    tags: ["Android", "iOS", "Flutter", "React Native", "Mobile Apps"],
    // color: "#0284c7",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Build fast, responsive, and scalable websites tailored to your business goals.",
    tags: ["React", "Next.js", "HTML", "CSS", "JavaScript", "Web Apps"],
    // color: "#e65100",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Design intuitive, user-focused interfaces that deliver exceptional digital experiences.",
    tags: ["UI Design", "UX Research", "Wireframes", "Figma", "Prototyping"],
    // color: "#1565c0",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Grow your brand with strategic digital marketing that drives engagement and conversions.",
    tags: ["Social Media", "Google Ads", "Content Marketing", "Branding"],
    // color: "#0f766e",
  },
  {
    id: "seo",
    title: "SEO",
    description: "Improve your search rankings and increase organic traffic with proven SEO strategies.",
    tags: ["On-Page SEO", "Technical SEO", "Keyword Research", "Link Building"],
    // color: "#16a34a",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    description: "Provide expert technology consulting to accelerate digital transformation.",
    tags: ["Strategy", "Cloud", "Architecture", "Technology Consulting"],
    // color: "#7c3aed",
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    description: "Keep your applications secure, updated, and running smoothly with ongoing support.",
    tags: ["Bug Fixes", "Monitoring", "Updates", "Security", "24/7 Support"],
    // color: "#ea580c",
  },

];