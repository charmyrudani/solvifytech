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

const aws = {
  slug: "aws-development",

  hero: {
    serviceName: "AWS",
    tagline: "AWS CLOUD SERVICES",
    title: "Architect, deploy, and scale resilient cloud infrastructures with Amazon Web Services.",
    description: "Our AWS development and consulting services help businesses migrate to the cloud, build serverless applications, and optimize cloud spend. We leverage the full spectrum of AWS services to create highly available, secure, and infinitely scalable architectures tailored to your enterprise goals.",
  },

  serviceOverview: {
    tag: "AWS CLOUD SERVICES",
    title: "Unlock the full potential of the world's leading cloud platform.",
    description: "At Solvifytech, our certified AWS architects design cloud-native solutions that drive innovation. Whether you need a simple 'lift and shift' migration, a complex microservices architecture via EKS, or a serverless backend using Lambda, we deliver robust cloud solutions.",
    image: aiService,
    services: [
      {
            title: "Cloud Architecture Design",
            description: "Design Well-Architected Framework-compliant infrastructures that balance performance, security, and cost-efficiency."
      },
      {
            title: "Serverless Application Development",
            description: "Build scalable, zero-maintenance backends using AWS Lambda, API Gateway, DynamoDB, and Step Functions."
      },
      {
            title: "Cloud Migration Strategy",
            description: "Seamlessly migrate on-premise applications and databases to AWS with minimal downtime and risk."
      },
      {
            title: "DevOps & CI/CD Pipelines",
            description: "Automate software delivery and infrastructure provisioning using AWS CodePipeline, CloudFormation, and Terraform."
      },
      {
            title: "Data Lakes & Analytics",
            description: "Construct massive data lakes using S3, Glue, Athena, and Redshift to process and analyze big data effectively."
      },
      {
            title: "Cloud Security & Compliance",
            description: "Implement strict IAM policies, network security (VPC, WAF), and continuous compliance monitoring for enterprise data."
      },
      {
            title: "Cost Optimization & Auditing",
            description: "Audit your AWS environment to identify idle resources, optimize reserved instances, and significantly reduce cloud spend."
      }
]
  },

  developmentTeam: {
    tag: "OUR CERTIFIED AWS ARCHITECTS",
    title: "Meet the experts building your cloud foundation.",
    description: "Our team consists of highly certified AWS professionals, DevOps engineers, and cloud security specialists who have successfully navigated complex enterprise cloud transformations.",
    engineers: [
      {
        role: "Principal Cloud Architect",
        name: "Daniel R.",
        experience: "12 years of experience",
        image: dev1,
        company: bbva,
        technologies: ["AWS","Terraform","EKS","Serverless"],
        certifications: ["AWS Certified Solutions Architect – Professional"],
      },
      {
        role: "Serverless Engineer",
        name: "Carlos M.",
        experience: "9 years of experience",
        image: dev2,
        company: johnson,
        technologies: ["AWS Lambda","DynamoDB","Node.js","API Gateway"],
        certifications: ["AWS Certified Developer – Associate"],
      },
      {
        role: "DevOps & Automation Lead",
        name: "Sophia L.",
        experience: "10 years of experience",
        image: dev3,
        company: adobe,
        technologies: ["AWS CodePipeline","CloudFormation","Docker","Linux"],
        certifications: ["AWS Certified DevOps Engineer – Professional"],
      },
      {
        role: "Cloud Security Specialist",
        name: "Michael T.",
        experience: "11 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: ["AWS IAM","GuardDuty","WAF","KMS"],
        certifications: ["AWS Certified Security – Specialty"],
      },
      {
        role: "Data Cloud Engineer",
        name: "Emma K.",
        experience: "8 years of experience",
        image: dev5,
        company: motorolla,
        technologies: ["Amazon Redshift","AWS Glue","Athena","Python"],
        certifications: ["AWS Certified Data Analytics – Specialty"],
      }
    ]
  },
  
  industriesSolutions: {
    tag: "AWS CLOUD ACROSS INDUSTRIES",
    title: "Scalable cloud solutions for every vertical.",
    description: "AWS provides the global infrastructure required to meet the unique compliance, latency, and scalability demands of diverse industries.",
    industries: [
      {
            title: "Healthcare & Life Sciences",
            description: "HIPAA-compliant cloud architectures for sensitive data.",
            solutions: [
                  "Genomic Data Processing",
                  "Secure Patient Portals",
                  "Telehealth Infrastructure",
                  "Medical Image Storage (S3)"
            ],
      image: industryImage,
      },
      {
            title: "Finance & Fintech",
            description: "Highly secure, PCI-DSS compliant financial systems.",
            solutions: [
                  "High-Frequency Trading Infra",
                  "Fraud Detection (SageMaker)",
                  "Secure Core Banking APIs",
                  "Automated Compliance Auditing"
            ],
      image: industryImage,
      },
      {
            title: "Media & Entertainment",
            description: "Global content delivery and massive storage solutions.",
            solutions: [
                  "Video Streaming (CloudFront)",
                  "Media Transcoding (Elemental)",
                  "Massive Media Archives",
                  "Low-latency Gaming Servers"
            ],
      image: industryImage,
      },
      {
            title: "eCommerce & Retail",
            description: "Infinitely scalable storefronts to handle Black Friday traffic.",
            solutions: [
                  "Serverless Checkout APIs",
                  "Personalization Engines",
                  "Global Content Delivery",
                  "Inventory Data Lakes"
            ],
      image: industryImage,
      },
      {
            title: "Manufacturing & IoT",
            description: "Connect and analyze thousands of factory sensors.",
            solutions: [
                  "AWS IoT Core Integration",
                  "Predictive Maintenance ML",
                  "Supply Chain Analytics",
                  "Edge Computing (Greengrass)"
            ],
      image: industryImage,
      },
      {
            title: "Public Sector",
            description: "GovCloud solutions for strict regulatory environments.",
            solutions: [
                  "Secure Citizen Services",
                  "Disaster Recovery Systems",
                  "Open Data Portals",
                  "FedRAMP Compliant Hosting"
            ],
      image: industryImage,
      }
]
  },

  capabilities: {
    label: "AWS CAPABILITIES",
    title: "Mastering the AWS ecosystem.",
    description: "We utilize the most advanced AWS services alongside industry-standard Infrastructure as Code tools to deliver robust cloud environments.",
    capabilities: [
      {
            title: "Compute & Serverless",
            description: "Run code at any scale without managing servers.",
            tools: [
                  {
                        name: "AWS Lambda",
                        logo: "/images/tool-tech/lambda.svg"
                  },
                  {
                        name: "Amazon EC2",
                        logo: "/images/tool-tech/ec2.svg"
                  },
                  {
                        name: "AWS Fargate",
                        logo: "/images/tool-tech/fargate.svg"
                  }
            ]
      },
      {
            title: "Containers & Orchestration",
            description: "Deploy and manage containerized applications.",
            tools: [
                  {
                        name: "Amazon EKS",
                        logo: "/images/tool-tech/eks.svg"
                  },
                  {
                        name: "Amazon ECS",
                        logo: "/images/tool-tech/ecs.svg"
                  },
                  {
                        name: "Docker",
                        logo: "/images/tool-tech/docker.svg"
                  }
            ]
      },
      {
            title: "Databases & Storage",
            description: "Purpose-built databases for every workload.",
            tools: [
                  {
                        name: "Amazon RDS",
                        logo: "/images/tool-tech/rds.svg"
                  },
                  {
                        name: "Amazon DynamoDB",
                        logo: "/images/tool-tech/dynamodb.svg"
                  },
                  {
                        name: "Amazon S3",
                        logo: "/images/tool-tech/s3.svg"
                  }
            ]
      },
      {
            title: "Infrastructure as Code",
            description: "Automate and version-control your cloud.",
            tools: [
                  {
                        name: "Terraform",
                        logo: "/images/tool-tech/terraform.svg"
                  },
                  {
                        name: "AWS CloudFormation",
                        logo: "/images/tool-tech/cloudformation.svg"
                  },
                  {
                        name: "AWS CDK",
                        logo: "/images/tool-tech/cdk.svg"
                  }
            ]
      }
]
  },
};

export default aws;
