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

const devopsConsulting = {
      slug: "devops-consulting",

      hero: {
            serviceName: "DevOps Consulting",
            tagline: "DEVOPS CONSULTING SERVICES",
            title: "Accelerate software delivery with modern DevOps practices built for speed, stability, and continuous growth.",
            description: "Our DevOps consulting services help businesses streamline development, automate deployments, strengthen infrastructure, and improve system reliability. We build practical DevOps strategies that enable faster releases and more resilient applications."
      },

      serviceOverview: {
            tag: "DEVOPS CONSULTING SERVICES",
            title: "Improve development speed, deployment quality, and system reliability.",
            description: "Our DevOps consulting services help businesses build better deployment processes, automate releases, improve infrastructure, and reduce downtime. Solvifytech supports teams with practical DevOps systems that make software delivery faster and more reliable.",
            image: aiService,

            services: [
                  {
                        "title": "DevOps Strategy & Consulting",
                        "description": "We review your development and deployment process and create a practical improvement plan."
                  },
                  {
                        "title": "CI/CD Pipeline Setup",
                        "description": "We set up automated pipelines that make testing and deployment faster."
                  },
                  {
                        "title": "Deployment Automation",
                        "description": "We automate deployments to reduce manual errors and improve release confidence."
                  },
                  {
                        "title": "Infrastructure Optimization",
                        "description": "We improve hosting, servers, cloud setup, and environments."
                  },
                  {
                        "title": "Cloud DevOps Implementation",
                        "description": "We implement DevOps practices across cloud platforms."
                  },
                  {
                        "title": "Monitoring & Logging Setup",
                        "description": "We set up monitoring tools to track errors, uptime, performance, and system health."
                  },
                  {
                        "title": "Security & Backup Planning",
                        "description": "We help plan backups, access control, environment security, and recovery processes."
                  }
            ]
      },

      developmentTeam: {
            tag: "OUR DEVOPS CONSULTANTS",
            title: "Meet the strategists transforming software delivery.",
            description: "Our DevOps consulting team analyzes your current development pipelines and introduces best practices, automation, and cultural shifts to accelerate your software delivery lifecycle.",
            engineers: [
                  {
                        role: "Principal DevOps Consultant",
                        name: "Alan S.",
                        experience: "16 years of experience",
                        image: dev1,
                        technologies: ["Docker", "GitOps", "ArgoCD"],
                        company: bbva,
                        certifications: ["Enterprise DevOps", "Agile Coach"],
                  },
                  {
                        role: "Automation Architect",
                        name: "Diana P.",
                        experience: "10 years of experience",
                        image: dev2,
                        technologies: ["Ansible", "Chef", "Puppet"],
                        company: johnson,
                        certifications: ["Infrastructure as Code", "Automation Expert"],
                  },
                  {
                        role: "Release Manager",
                        name: "Victor H.",
                        experience: "9 years of experience",
                        image: dev3,
                        technologies: ["Jenkins", "Bamboo", "Jira"],
                        company: adobe,
                        certifications: ["Release Management", "ITIL"],
                  },
                  {
                        role: "Security & Compliance",
                        name: "Nina K.",
                        experience: "8 years of experience",
                        image: dev4,
                        technologies: ["SonarQube", "Trivy", "Vault"],
                        company: siriusxm,
                        certifications: ["DevSecOps", "Security Auditor"],
                  },
                  {
                        role: "Cloud Cost Optimizer",
                        name: "Louis C.",
                        experience: "7 years of experience",
                        image: dev5,
                        technologies: ["AWS Cost Explorer", "FinOps", "Python"],
                        company: motorolla,
                        certifications: ["FinOps Practitioner", "Cloud Economics"],
                  },
            ]
      },

      industriesSolutions: {
            tag: "DEVOPS CONSULTING ACROSS INDUSTRIES",
            title: "Improve how your teams build, deploy, and manage software.",
            description: "DevOps helps teams release updates faster, reduce errors, and keep systems stable. Solvifytech supports deployment automation, monitoring, cloud practices, and infrastructure improvement.",
            industries: [
                  {
                        title: "SaaS Companies",
                        description: "We set up DevOps systems that support frequent releases and scalable growth.",
                        image: industryImage,
                        solutions: [
                              "CI/CD pipeline",
                              "Cloud deployment setup",
                              "Staging environment",
                              "Production release workflow",
                              "Monitoring dashboard",
                              "Auto-scaling setup"
                        ]
                  },
                  {
                        title: "Software Teams",
                        description: "We improve development workflows, deployments, testing, and environments.",
                        image: industryImage,
                        solutions: [
                              "Deployment automation",
                              "Version control workflow",
                              "Release pipeline",
                              "Testing automation setup",
                              "Environment management",
                              "Developer workflow improvement"
                        ]
                  },
                  {
                        title: "eCommerce",
                        description: "We help online businesses maintain uptime and performance during traffic spikes.",
                        image: industryImage,
                        solutions: [
                              "Performance monitoring",
                              "Scalable deployment",
                              "Backup systems",
                              "Server optimization",
                              "Campaign readiness setup",
                              "Rollback workflow"
                        ]
                  },
                  {
                        title: "Enterprise Platforms",
                        description: "We support ERP, CRM, and internal systems with reliable deployment practices.",
                        image: industryImage,
                        solutions: [
                              "Server setup",
                              "Release automation",
                              "Logging system",
                              "Infrastructure management",
                              "Database backup workflow",
                              "Monitoring dashboard"
                        ]
                  },
                  {
                        title: "Mobile App Products",
                        description: "We manage backend deployment, API monitoring, and app infrastructure.",
                        image: industryImage,
                        solutions: [
                              "Backend deployment",
                              "API monitoring",
                              "Database backup",
                              "Cloud support",
                              "Server scaling",
                              "App backend logs"
                        ]
                  },
                  {
                        title: "Startups",
                        description: "We help startups launch and manage products with practical DevOps foundations.",
                        image: industryImage,
                        solutions: [
                              "MVP deployment",
                              "Cloud setup",
                              "Staging server",
                              "Monitoring tools",
                              "Git workflow",
                              "Launch support"
                        ]
                  },
            ]
      },

      capabilities: {
            label: "DEVOPS CONSULTING CAPABILITIES",
            title: "We cover the DevOps stack and everything around it.",
            description: "We help teams improve deployment, automation, infrastructure, monitoring, security, and software delivery reliability.",
            capabilities: [
                  {
                        "title": "DevOps Strategy",
                        "description": "Review current workflows and improve delivery process.",
                        "tools": [
                              {
                                    "name": "Git",
                                    "logo": "/images/tool-tech/git.svg"
                              },
                              {
                                    "name": "CI/CD",
                                    "logo": "/images/tool-tech/ci/cd.svg"
                              },
                              {
                                    "name": "Release Planning",
                                    "logo": "/images/tool-tech/release-planning.svg"
                              }
                        ]
                  },
                  {
                        "title": "CI/CD Setup",
                        "description": "Automate testing, builds, and deployments.",
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
                        "title": "Infrastructure Management",
                        "description": "Configure cloud servers and environments.",
                        "tools": [
                              {
                                    "name": "AWS",
                                    "logo": "/images/tool-tech/aws.svg"
                              },
                              {
                                    "name": "GCP",
                                    "logo": "/images/tool-tech/gcp.svg"
                              },
                              {
                                    "name": "Docker",
                                    "logo": "/images/tool-tech/docker.svg"
                              },
                              {
                                    "name": "Kubernetes",
                                    "logo": "/images/tool-tech/kubernetes.svg"
                              }
                        ]
                  },
                  {
                        "title": "Monitoring & Logging",
                        "description": "Track uptime, errors, and system health.",
                        "tools": [
                              {
                                    "name": "Sentry",
                                    "logo": "/images/tool-tech/sentry.svg"
                              },
                              {
                                    "name": "Grafana",
                                    "logo": "/images/tool-tech/grafana.svg"
                              },
                              {
                                    "name": "CloudWatch",
                                    "logo": "/images/tool-tech/cloudwatch.svg"
                              }
                        ]
                  },
                  {
                        "title": "Security & Backup",
                        "description": "Improve access, backup, and recovery planning.",
                        "tools": [
                              {
                                    "name": "SSL",
                                    "logo": "/images/tool-tech/ssl.svg"
                              },
                              {
                                    "name": "Firewall",
                                    "logo": "/images/tool-tech/firewall.svg"
                              },
                              {
                                    "name": "Backups",
                                    "logo": "/images/tool-tech/backups.svg"
                              },
                              {
                                    "name": "IAM",
                                    "logo": "/images/tool-tech/iam.svg"
                              }
                        ]
                  }
            ]
      }
};

export default devopsConsulting;
