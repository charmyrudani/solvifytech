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

const docker = {
  slug: "docker-development",

  hero: {
    serviceName: "Docker",
    tagline: "DOCKER & CONTAINERIZATION SERVICES",
    title: "Accelerate development and streamline deployments with Docker containerization.",
    description: "Our Docker services help businesses achieve true 'build once, run anywhere' flexibility. By containerizing your applications, we eliminate environment inconsistencies, drastically reduce deployment times, and pave the way for scalable, microservices-based architectures.",
  },

  serviceOverview: {
    tag: "DOCKER CONTAINERIZATION SERVICES",
    title: "Modernize your infrastructure with container technology.",
    description: "At Solvifytech, we guide organizations through the transition from monolithic architectures to agile, containerized microservices. We handle Dockerization, registry management, and integration with powerful orchestration tools to ensure your software lifecycle is fast and reliable.",
    image: aiService,
    services: [
      {
            title: "Application Containerization",
            description: "Package your legacy or modern applications into lightweight, secure Docker containers for consistent deployment across any environment."
      },
      {
            title: "Microservices Architecture",
            description: "Deconstruct monolithic applications into decoupled, containerized microservices that can be developed and scaled independently."
      },
      {
            title: "Docker Compose for Local Dev",
            description: "Create complex, multi-container local development environments using Docker Compose, bringing parity between dev and production."
      },
      {
            title: "CI/CD Pipeline Integration",
            description: "Integrate Docker into your Jenkins, GitLab, or GitHub Actions pipelines for automated image building, testing, and deployment."
      },
      {
            title: "Container Security Auditing",
            description: "Implement image scanning, vulnerability management, and least-privilege runtime configurations to secure your container ecosystem."
      },
      {
            title: "Image Optimization",
            description: "Optimize Dockerfiles using multi-stage builds and minimal base images (like Alpine) to reduce image size and attack surface."
      },
      {
            title: "Kubernetes Readiness",
            description: "Prepare your Dockerized applications for orchestration by designing stateless containers and proper health-check endpoints."
      }
]
  },

  developmentTeam: {
    tag: "OUR DEVOPS & DOCKER EXPERTS",
    title: "Meet the engineers standardizing your deployments.",
    description: "Our DevOps engineers are experts in container lifecycle management, Linux namespaces, and automated delivery, ensuring your containers run securely and efficiently.",
    engineers: [
      {
        role: "Lead DevOps Engineer",
        name: "Daniel R.",
        experience: "11 years of experience",
        image: dev1,
        company: bbva,
        technologies: ["Docker","Kubernetes","Linux","Bash"],
        certifications: ["Docker Certified Associate (DCA)"],
      },
      {
        role: "Container Security Specialist",
        name: "Carlos M.",
        experience: "9 years of experience",
        image: dev2,
        company: johnson,
        technologies: ["Docker","Trivy","Sysdig","SELinux"],
        certifications: ["Certified Kubernetes Security Specialist (CKS)"],
      },
      {
        role: "CI/CD Automation Engineer",
        name: "Sophia L.",
        experience: "8 years of experience",
        image: dev3,
        company: adobe,
        technologies: ["Docker","GitHub Actions","GitLab CI","Python"],
        certifications: ["AWS Certified DevOps Engineer"],
      },
      {
        role: "Microservices Architect",
        name: "Michael T.",
        experience: "12 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: ["Docker Compose","Node.js","Go","gRPC"],
        certifications: ["Certified Kubernetes Administrator (CKA)"],
      },
      {
        role: "Cloud Infrastructure Engineer",
        name: "Emma K.",
        experience: "10 years of experience",
        image: dev5,
        company: motorolla,
        technologies: ["Docker","Terraform","AWS ECS","Fargate"],
        certifications: ["Google Professional Cloud Architect"],
      }
    ]
  },
  
  industriesSolutions: {
    tag: "DOCKER ACROSS INDUSTRIES",
    title: "Reliable deployments for mission-critical software.",
    description: "Containerization is industry-agnostic, providing the reliability and scalability required by modern digital businesses across all sectors.",
    industries: [
      {
            title: "Software & SaaS",
            description: "Rapid, reliable deployments for fast-moving product teams.",
            solutions: [
                  "Multi-tenant Microservices",
                  "Automated QA Environments",
                  "Zero-downtime Deployments",
                  "Local Dev Parity"
            ],
      image: industryImage,
      },
      {
            title: "Finance & Banking",
            description: "Secure, isolated execution environments for financial processing.",
            solutions: [
                  "Isolated Payment Gateways",
                  "Immutable Audit Logs",
                  "Secure Core Banking APIs",
                  "High-frequency Trading Bots"
            ],
      image: industryImage,
      },
      {
            title: "Healthcare",
            description: "Reliable and compliant processing of medical data.",
            solutions: [
                  "HIPAA-compliant Data Processing Containers",
                  "Isolated EMR Services",
                  "Telemedicine Microservices",
                  "Medical AI Model Inference"
            ],
      image: industryImage,
      },
      {
            title: "eCommerce",
            description: "Scale specific services independently during traffic spikes.",
            solutions: [
                  "Scalable Checkout Services",
                  "Independent Inventory APIs",
                  "Search Engine Containers",
                  "Promotion Microservices"
            ],
      image: industryImage,
      },
      {
            title: "Gaming & Entertainment",
            description: "Deploy lightweight, low-latency game servers globally.",
            solutions: [
                  "Containerized Game Servers",
                  "Matchmaking Microservices",
                  "Leaderboard Databases",
                  "Streaming Media Transcoders"
            ],
      image: industryImage,
      },
      {
            title: "Telecommunications",
            description: "Manage massive network functions virtually.",
            solutions: [
                  "Virtual Network Functions (VNF)",
                  "Billing Microservices",
                  "Customer Portal Containers",
                  "Real-time Analytics"
            ],
      image: industryImage,
      }
]
  },

  capabilities: {
    label: "DOCKER CAPABILITIES",
    title: "The containerization ecosystem.",
    description: "We utilize Docker alongside industry-leading orchestration platforms, registries, and security tools to provide a complete DevOps solution.",
    capabilities: [
      {
            title: "Container Runtime & Build",
            description: "The core tools for building containers.",
            tools: [
                  {
                        name: "Docker",
                        logo: "/images/tool-tech/docker.svg"
                  },
                  {
                        name: "Docker Compose",
                        logo: "/images/tool-tech/docker.svg"
                  },
                  {
                        name: "Buildx",
                        logo: "/images/tool-tech/docker.svg"
                  }
            ]
      },
      {
            title: "Orchestration & Cloud",
            description: "Managing containers at scale.",
            tools: [
                  {
                        name: "Kubernetes",
                        logo: "/images/tool-tech/kubernetes.svg"
                  },
                  {
                        name: "AWS ECS",
                        logo: "/images/tool-tech/ecs.svg"
                  },
                  {
                        name: "Docker Swarm",
                        logo: "/images/tool-tech/docker.svg"
                  }
            ]
      },
      {
            title: "CI/CD & Registries",
            description: "Automating the container lifecycle.",
            tools: [
                  {
                        name: "GitHub Actions",
                        logo: "/images/tool-tech/github-actions.svg"
                  },
                  {
                        name: "GitLab CI",
                        logo: "/images/tool-tech/gitlab.svg"
                  },
                  {
                        name: "Docker Hub / ECR",
                        logo: "/images/tool-tech/aws.svg"
                  }
            ]
      },
      {
            title: "Security & Monitoring",
            description: "Ensuring container health and safety.",
            tools: [
                  {
                        name: "Trivy",
                        logo: "/images/tool-tech/trivy.svg"
                  },
                  {
                        name: "Prometheus",
                        logo: "/images/tool-tech/prometheus.svg"
                  },
                  {
                        name: "Grafana",
                        logo: "/images/tool-tech/grafana.svg"
                  }
            ]
      }
]
  },
};

export default docker;
