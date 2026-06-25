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
    id: "frontend",
    title: "Front-End Development",
    description: "Build modern frontends designed for performance, accessibility, and scale.",
    iconType: "frontend",
    tags: ["Front-End", "Web Development", "React", "Angular"],
    color: "#e65100"
  },
  {
    id: "backend",
    title: "Back-End Development",
    description: "Develop secure, scalable backends that perform reliably under load.",
    iconType: "backend",
    tags: ["Back-End", "Database", "Go", ".NET", "Java", "Node.js"],
    color: "#212121"
  },
  {
    id: "ai",
    title: "AI and Machine Learning",
    description: "Deploy trustworthy AI solutions that create real business value.",
    iconType: "ai",
    tags: ["AI", "Machine Learning", "Data Science", "LLMs", "Generative AI", "Python"],
    color: "#1565c0"
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Create seamless native and cross-platform mobile apps that users love.",
    iconType: "mobile",
    tags: ["Mobile", "iOS", "Android", "React Native", "Flutter", "Swift"],
    color: "#0284c7"
  },
  {
    id: "qa",
    title: "QA and Testing",
    description: "Ensure software reliability, security, and performance at every stage.",
    iconType: "qa",
    tags: ["QA", "Testing", "Automation", "Selenium", "Cypress", "Performance Testing"],
    color: "#0f766e"
  },
  {
    id: "cloud",
    title: "Cloud Computing & DevOps",
    description: "Build and scale reliable cloud architectures with automated pipelines.",
    iconType: "cloud",
    tags: ["Cloud", "DevOps", "AWS", "Azure", "Docker", "Kubernetes"],
    color: "#16a34a"
  }
];
