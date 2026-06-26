export interface TechStackCard {
  id: string;
  title: string;
  description: string;
  iconType: "frontend" | "backend" | "ai" | "mobile" | "qa" | "cloud";
  tags: string[];
  color: string;
}

export const techStackData: TechStackCard[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Build fast, responsive, and scalable websites tailored to your business goals.",
    iconType: "frontend",
    tags: ["React", "Next.js", "HTML", "CSS", "JavaScript", "Web Apps"],
    color: "#e65100",
  },
  {
    id: "app-development",
    title: "App Development",
    description:
      "Develop intuitive Android, iOS, and cross-platform mobile applications.",
    iconType: "mobile",
    tags: ["Android", "iOS", "Flutter", "React Native", "Mobile Apps"],
    color: "#0284c7",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "Deliver scalable software solutions designed around your unique business needs.",
    iconType: "backend",
    tags: ["CRM", "ERP", "Enterprise", "Automation", "SaaS", "API"],
    color: "#212121",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "Design intuitive, user-focused interfaces that deliver exceptional digital experiences.",
    iconType: "ai",
    tags: ["UI Design", "UX Research", "Wireframes", "Figma", "Prototyping"],
    color: "#1565c0",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Grow your brand with strategic digital marketing that drives engagement and conversions.",
    iconType: "qa",
    tags: ["Social Media", "Google Ads", "Content Marketing", "Branding"],
    color: "#0f766e",
  },
  {
    id: "seo",
    title: "SEO",
    description:
      "Improve your search rankings and increase organic traffic with proven SEO strategies.",
    iconType: "cloud",
    tags: ["On-Page SEO", "Technical SEO", "Keyword Research", "Link Building"],
    color: "#16a34a",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    description:
      "Provide expert technology consulting to accelerate digital transformation.",
    iconType: "backend",
    tags: ["Strategy", "Cloud", "Architecture", "Technology Consulting"],
    color: "#7c3aed",
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    description:
      "Keep your applications secure, updated, and running smoothly with ongoing support.",
    iconType: "qa",
    tags: ["Bug Fixes", "Monitoring", "Updates", "Security", "24/7 Support"],
    color: "#ea580c",
  },
];