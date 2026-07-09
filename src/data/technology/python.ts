import dev1 from '/images/hero-section/dev1.avif'
import dev2 from '/images/hero-section/dev2.avif'
import dev3 from '/images/hero-section/dev3.avif'
import dev4 from '/images/hero-section/dev4.avif'
import dev5 from '/images/hero-section/dev5.avif'
import bbva from '/images/hero-section/bbva.svg'
import johnson from '/images/hero-section/johnson.svg'
import adobe from '/images/hero-section/adobe.svg'
import siriusxm from '/images/hero-section/siriusxm.svg'
import motorolla from '/images/hero-section/motorolla.svg'
import industryImage from "/images/services/industry.png"
import aiService from '/images/services/ai-service.png';

const python = {
  slug: "python-development",

  hero: {
    serviceName: "Python",
    tagline: "PYTHON DEVELOPMENT SERVICES",
    title: "Build scalable web applications, data pipelines, and AI systems with Python.",
    description: "Our Python development services cover everything from robust backend APIs (Django/FastAPI) to complex data science and machine learning applications. Known for its readability and massive ecosystem, we leverage Python to deliver rapid prototypes and enterprise-grade software solutions.",
  },

  serviceOverview: {
    tag: "PYTHON DEVELOPMENT SERVICES",
    title: "Versatile, high-performance solutions powered by Python.",
    description: "At Solvifytech, we utilize Python's versatility to solve complex business problems. Whether you need a secure enterprise web application, automated data extraction, or a custom AI model, our Python experts deliver clean, maintainable, and highly efficient code.",
    image: aiService,
    services: [
      {
            title: "Web Application Development",
            description: "Build secure, scalable backend architectures using powerful frameworks like Django, Flask, and FastAPI."
      },
      {
            title: "Data Engineering & ETL",
            description: "Design robust data pipelines to extract, transform, and load (ETL) massive datasets into data warehouses using Airflow and Pandas."
      },
      {
            title: "Machine Learning & AI",
            description: "Develop predictive models, natural language processing (NLP) tools, and computer vision applications using PyTorch and scikit-learn."
      },
      {
            title: "Automation & Scripting",
            description: "Automate repetitive business processes, server management tasks, and infrastructure provisioning with Python scripts."
      },
      {
            title: "Web Scraping & Data Extraction",
            description: "Build resilient web scrapers and crawlers using Scrapy and Selenium to gather competitive intelligence and market data."
      },
      {
            title: "RESTful & GraphQL APIs",
            description: "Develop high-performance microservices and APIs with asynchronous Python (asyncio) for lightning-fast response times."
      },
      {
            title: "Legacy System Migration",
            description: "Modernize outdated PHP, Ruby, or older Python 2 codebases by migrating them to modern, secure Python 3 architectures."
      }
]
  },

  developmentTeam: {
    tag: "OUR PYTHON ENGINEERS",
    title: "Meet the experts mastering the Python ecosystem.",
    description: "Our team spans full-stack web developers, data scientists, and automation engineers, all united by a deep understanding of Pythonic design patterns and performance optimization.",
    engineers: [
      {
        role: "Lead Python Architect",
        name: "Daniel R.",
        experience: "12 years of experience",
        image: dev1,
        company: bbva,
        technologies: ["Python","Django","PostgreSQL","Docker"],
        certifications: ["PCAP – Certified Associate in Python Programming"],
      },
      {
        role: "Data Engineer",
        name: "Carlos M.",
        experience: "9 years of experience",
        image: dev2,
        company: johnson,
        technologies: ["Python","Apache Airflow","Spark","AWS"],
        certifications: ["AWS Certified Data Analytics"],
      },
      {
        role: "Machine Learning Engineer",
        name: "Sophia L.",
        experience: "8 years of experience",
        image: dev3,
        company: adobe,
        technologies: ["Python","TensorFlow","PyTorch","Scikit-learn"],
        certifications: ["Google Professional Machine Learning Engineer"],
      },
      {
        role: "Backend API Specialist",
        name: "Michael T.",
        experience: "7 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: ["FastAPI","Asyncio","Redis","Celery"],
        certifications: ["Certified API Developer"],
      },
      {
        role: "Automation & Scraping Lead",
        name: "Emma K.",
        experience: "10 years of experience",
        image: dev5,
        company: motorolla,
        technologies: ["Python","Scrapy","Selenium","BeautifulSoup"],
        certifications: ["PCEP – Certified Entry-Level Python Programmer"],
      }
    ]
  },
  
  industriesSolutions: {
    tag: "PYTHON ACROSS INDUSTRIES",
    title: "Driving innovation in data-heavy industries.",
    description: "Python is the undisputed king of data science and AI, making it the perfect choice for industries relying on complex analytics and rapid backend development.",
    industries: [
      {
            title: "Finance & Quantitative Trading",
            description: "High-performance analytics and algorithmic trading.",
            solutions: [
                  "Algorithmic Trading Bots",
                  "Risk Analysis Models",
                  "Automated Financial Reporting",
                  "Fraud Detection Pipelines"
            ],
      image: industryImage,
      },
      {
            title: "Healthcare & Biotech",
            description: "Processing massive genomic datasets and medical research.",
            solutions: [
                  "Genomic Data Processing",
                  "Predictive Diagnostics",
                  "Medical Image Analysis (OpenCV)",
                  "EHR Backend Systems"
            ],
      image: industryImage,
      },
      {
            title: "Media & Entertainment",
            description: "Powering content recommendation and media processing.",
            solutions: [
                  "Recommendation Engines",
                  "Automated Video Transcoding",
                  "Content Scraping & Aggregation",
                  "Digital Asset Management Backends"
            ],
      image: industryImage,
      },
      {
            title: "eCommerce & Retail",
            description: "Dynamic pricing and customer behavior analytics.",
            solutions: [
                  "Dynamic Pricing Algorithms",
                  "Inventory Forecasting",
                  "Customer Segmentation Models",
                  "Competitor Price Scraping"
            ],
      image: industryImage,
      },
      {
            title: "Logistics & Supply Chain",
            description: "Optimizing routes and analyzing supply chain efficiency.",
            solutions: [
                  "Route Optimization Algorithms",
                  "Predictive Maintenance Models",
                  "Supply Chain Analytics Dashboards",
                  "Automated Dispatch Systems"
            ],
      image: industryImage,
      },
      {
            title: "Education & EdTech",
            description: "Building robust learning platforms and student analytics.",
            solutions: [
                  "LMS Backends (Django)",
                  "Student Performance Prediction",
                  "Automated Grading Scripts",
                  "Interactive Coding Environments"
            ],
      image: industryImage,
      }
]
  },

  capabilities: {
    label: "PYTHON CAPABILITIES",
    title: "The diverse Python technology stack.",
    description: "From high-performance web frameworks to state-of-the-art machine learning libraries, we utilize the best of the Python ecosystem.",
    capabilities: [
      {
            title: "Web Frameworks",
            description: "Building secure and fast backend systems.",
            tools: [
                  {
                        name: "Django",
                        logo: "/images/tool-tech/django.svg"
                  },
                  {
                        name: "FastAPI",
                        logo: "/images/tool-tech/fastapi.svg"
                  },
                  {
                        name: "Flask",
                        logo: "/images/tool-tech/flask.svg"
                  }
            ]
      },
      {
            title: "Data Science & AI",
            description: "Extracting value from data.",
            tools: [
                  {
                        name: "Pandas",
                        logo: "/images/tool-tech/pandas.svg"
                  },
                  {
                        name: "PyTorch",
                        logo: "/images/tool-tech/pytorch.svg"
                  },
                  {
                        name: "TensorFlow",
                        logo: "/images/tool-tech/tensorflow.svg"
                  }
            ]
      },
      {
            title: "Data Engineering",
            description: "Moving and transforming big data.",
            tools: [
                  {
                        name: "Apache Airflow",
                        logo: "/images/tool-tech/airflow.svg"
                  },
                  {
                        name: "Celery",
                        logo: "/images/tool-tech/celery.svg"
                  },
                  {
                        name: "PySpark",
                        logo: "/images/tool-tech/spark.svg"
                  }
            ]
      },
      {
            title: "Web Scraping",
            description: "Automated data extraction tools.",
            tools: [
                  {
                        name: "Scrapy",
                        logo: "/images/tool-tech/scrapy.svg"
                  },
                  {
                        name: "Selenium",
                        logo: "/images/tool-tech/selenium.svg"
                  },
                  {
                        name: "Beautiful Soup",
                        logo: "/images/tool-tech/python.svg"
                  }
            ]
      }
]
  },
};

export default python;
