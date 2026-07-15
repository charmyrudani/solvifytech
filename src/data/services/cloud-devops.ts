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

const cloudDevops = {
      slug: "cloud-devops",

      hero: {
            serviceName: "Cloud & DevOps",
            tagline: "CLOUD & DEVOPS SERVICES",
            title: "Build secure cloud infrastructure and modern DevOps pipelines that keep your applications fast, reliable, and scalable.",
            description: "We help businesses modernize their infrastructure with cloud deployment, automation, monitoring, CI/CD pipelines, and security best practices—ensuring faster releases, improved system reliability, and long-term operational efficiency."
      },

      serviceOverview: {
            tag: "CLOUD & DEVOPS SERVICES",
            title: "Build reliable cloud infrastructure that supports speed, scale, and security.",
            description: "Our cloud and DevOps services help businesses deploy, manage, and scale applications with better reliability and faster release cycles. Solvifytech supports cloud setup, automation, deployment pipelines, monitoring, and infrastructure optimization for growing digital products.",
            image: aiService,

            services: [
                  {
                        "title": "Cloud Infrastructure Setup",
                        "description": "We set up secure and scalable cloud environments for websites, apps, and platforms."
                  },
                  {
                        "title": "DevOps Pipeline Implementation",
                        "description": "We create development pipelines that make deployment faster, safer, and more reliable."
                  },
                  {
                        "title": "CI/CD Automation",
                        "description": "We automate code testing and deployment so your team can release updates confidently."
                  },
                  {
                        "title": "Server Deployment & Management",
                        "description": "We manage servers, hosting, configurations, monitoring, and performance optimization."
                  },
                  {
                        "title": "Cloud Migration Support",
                        "description": "We help move applications, websites, databases, and systems to the cloud."
                  },
                  {
                        "title": "Application Monitoring",
                        "description": "We set up monitoring systems to track uptime, errors, performance, and server health."
                  },
                  {
                        "title": "Security & Backup Configuration",
                        "description": "We configure backups, access control, SSL, firewalls, and better security practices."
                  }
            ]
      },

      developmentTeam: {
            tag: "OUR CLOUD & DEVOPS TEAM",
            title: "Meet the architects of scalable cloud infrastructure.",
            description: "Our Cloud & DevOps engineers build secure, resilient, and automated infrastructure. They ensure your applications are highly available, scalable, and deployed with zero downtime.",
            engineers: [
                  {
                        role: "Lead DevOps Engineer",
                        name: "Andrew L.",
                        experience: "12 years of experience",
                        image: dev1,
                        technologies: ["Kubernetes", "Terraform", "AWS"],
                        company: bbva,
                        certifications: ["AWS Solutions Architect", "CKA"],
                  },
                  {
                        role: "Cloud Security Arch.",
                        name: "Victoria C.",
                        experience: "9 years of experience",
                        image: dev2,
                        technologies: ["IAM", "Security Hub", "Python"],
                        company: johnson,
                        certifications: ["CISSP", "Cloud Security Expert"],
                  },
                  {
                        role: "SRE Specialist",
                        name: "Ryan M.",
                        experience: "7 years of experience",
                        image: dev3,
                        technologies: ["Datadog", "Prometheus", "Go"],
                        company: adobe,
                        certifications: ["Site Reliability Expert", "Incident Management"],
                  },
                  {
                        role: "CI/CD Engineer",
                        name: "Sophie H.",
                        experience: "6 years of experience",
                        image: dev4,
                        technologies: ["Jenkins", "GitHub Actions", "Docker"],
                        company: siriusxm,
                        certifications: ["DevOps Professional", "Automation Pro"],
                  },
                  {
                        role: "Cloud Architect",
                        name: "Justin K.",
                        experience: "15 years of experience",
                        image: dev5,
                        technologies: ["Azure", "GCP", "Linux"],
                        company: motorolla,
                        certifications: ["Azure Solutions Architect", "Google Cloud Pro"],
                  },
            ]
      },

      industriesSolutions: {
            tag: "CLOUD & DEVOPS ACROSS INDUSTRIES",
            title: "Build reliable infrastructure for modern digital products and business systems.",
            description: "Strong infrastructure keeps your digital products fast, secure, and stable. Solvifytech supports cloud setup, deployment automation, monitoring, backups, and DevOps systems.",
            industries: [
                  {
                        title: "SaaS Companies",
                        description: "We create cloud and DevOps systems for scalable SaaS platforms.",
                        image: industryImage,
                        solutions: [
                              "Cloud hosting setup",
                              "CI/CD pipeline",
                              "Staging environment",
                              "Auto-scaling setup",
                              "Monitoring dashboard",
                              "Backup configuration"
                        ]
                  },
                  {
                        title: "eCommerce",
                        description: "We improve store and application reliability during campaigns and high traffic.",
                        image: industryImage,
                        solutions: [
                              "Scalable hosting",
                              "Store performance setup",
                              "Campaign traffic support",
                              "CDN configuration",
                              "Uptime monitoring",
                              "Server optimization"
                        ]
                  },
                  {
                        title: "Healthcare",
                        description: "We support secure and reliable infrastructure for healthcare platforms and portals.",
                        image: industryImage,
                        solutions: [
                              "Secure cloud servers",
                              "Patient portal hosting",
                              "Backup configuration",
                              "Access control setup",
                              "Database security",
                              "Disaster recovery planning"
                        ]
                  },
                  {
                        title: "Enterprise Software",
                        description: "We manage infrastructure for ERP, CRM, and internal business platforms.",
                        image: industryImage,
                        solutions: [
                              "ERP server deployment",
                              "CRM hosting setup",
                              "Database server management",
                              "Deployment automation",
                              "Log management",
                              "Backup and recovery"
                        ]
                  },
                  {
                        title: "Mobile App Platforms",
                        description: "We manage backend infrastructure for mobile applications and APIs.",
                        image: industryImage,
                        solutions: [
                              "API hosting",
                              "Mobile backend deployment",
                              "Database setup",
                              "Load balancing",
                              "App monitoring",
                              "Server scaling"
                        ]
                  },
                  {
                        title: "Startups & Agencies",
                        description: "We help teams launch and manage digital products with practical DevOps foundations.",
                        image: industryImage,
                        solutions: [
                              "MVP deployment",
                              "Cloud environment setup",
                              "Git deployment workflow",
                              "Staging and production setup",
                              "Monitoring tools",
                              "Ongoing DevOps support"
                        ]
                  },
            ]
      },

      capabilities: {
            label: "CLOUD & DEVOPS CAPABILITIES",
            title: "We cover the cloud and DevOps stack and everything around it.",
            description: "We help businesses deploy, monitor, scale, and secure digital products with reliable cloud and DevOps practices.",
            capabilities: [
                  {
                        "title": "Cloud Infrastructure",
                        "description": "Set up cloud hosting for apps, websites, and platforms.",
                        "tools": [
                              {
                                    "name": "AWS",
                                    "logo": "/images/tool-tech/aws.svg"
                              },
                              {
                                    "name": "Google Cloud",
                                    "logo": "/images/tool-tech/google-cloud.svg"
                              },
                              {
                                    "name": "Azure",
                                    "logo": "/images/tool-tech/azure.svg"
                              },
                              {
                                    "name": "DigitalOcean",
                                    "logo": "/images/tool-tech/digitalocean.svg"
                              }
                        ]
                  },
                  {
                        "title": "CI/CD Pipelines",
                        "description": "Automate testing and deployment workflows.",
                        "tools": [
                              {
                                    "name": "GitHub Actions",
                                    "logo": "/images/tool-tech/github-actions.svg"
                              },
                              {
                                    "name": "GitLab CI",
                                    "logo": "/images/tool-tech/gitlab-ci.svg"
                              },
                              {
                                    "name": "Jenkins",
                                    "logo": "/images/tool-tech/jenkins.svg"
                              }
                        ]
                  },
                  {
                        "title": "Server Management",
                        "description": "Manage servers, hosting, SSL, backups, and security.",
                        "tools": [
                              {
                                    "name": "Linux",
                                    "logo": "/images/tool-tech/linux.svg"
                              },
                              {
                                    "name": "Nginx",
                                    "logo": "/images/tool-tech/nginx.svg"
                              },
                              {
                                    "name": "Apache",
                                    "logo": "/images/tool-tech/apache.svg"
                              },
                              {
                                    "name": "Cloudflare",
                                    "logo": "/images/tool-tech/cloudflare.svg"
                              }
                        ]
                  },
                  {
                        "title": "Monitoring & Logging",
                        "description": "Track uptime, errors, speed, and system health.",
                        "tools": [
                              {
                                    "name": "Grafana",
                                    "logo": "/images/tool-tech/grafana.svg"
                              },
                              {
                                    "name": "Sentry",
                                    "logo": "/images/tool-tech/sentry.svg"
                              },
                              {
                                    "name": "Datadog",
                                    "logo": "/images/tool-tech/datadog.svg"
                              },
                              {
                                    "name": "CloudWatch",
                                    "logo": "/images/tool-tech/cloudwatch.svg"
                              }
                        ]
                  },
                  {
                        "title": "Containerization",
                        "description": "Package and deploy applications reliably.",
                        "tools": [
                              {
                                    "name": "Docker",
                                    "logo": "/images/tool-tech/docker.svg"
                              },
                              {
                                    "name": "Kubernetes",
                                    "logo": "/images/tool-tech/kubernetes.svg"
                              }
                        ]
                  }
            ]
      }
};

export default cloudDevops;
