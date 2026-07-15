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

const ai = {
      slug: "ai-development",

      hero: {
            serviceName: "Artificial Intelligence",
            tagline: "CUSTOM AI DEVELOPMENT SERVICES",
            title: "Empower your business with custom Artificial Intelligence and Machine Learning solutions.",
            description: "Our AI development services help businesses unlock the value of their data through predictive modeling, computer vision, natural language processing, and generative AI. We build custom machine learning models and integrate intelligent features that drive innovation and competitive advantage.",
      },

      serviceOverview: {
            tag: "AI DEVELOPMENT SERVICES",
            title: "Solve complex challenges with bespoke AI algorithms.",
            description: "At Solvifytech, we design and train custom AI models tailored to your specific business use cases. From initial data strategy and model training to deployment and MLOps, we provide end-to-end AI engineering services.",
            image: aiService,
            services: [
                  {
                        title: "Machine Learning Modeling",
                        description: "Develop custom supervised, unsupervised, and reinforcement learning models to uncover hidden patterns in your data."
                  },
                  {
                        title: "Computer Vision",
                        description: "Build systems capable of understanding digital images and videos for facial recognition, defect detection, and medical imaging."
                  },
                  {
                        title: "Natural Language Processing (NLP)",
                        description: "Implement semantic search, sentiment analysis, text summarization, and named entity recognition."
                  },
                  {
                        title: "Generative AI Solutions",
                        description: "Fine-tune LLMs and diffusion models to generate text, code, images, and audio tailored to your domain."
                  },
                  {
                        title: "Predictive Analytics",
                        description: "Forecast sales, predict customer churn, and anticipate market trends with advanced statistical modeling."
                  },
                  {
                        title: "Recommendation Engines",
                        description: "Increase user engagement and sales by delivering highly personalized content and product recommendations."
                  },
                  {
                        title: "MLOps & Model Deployment",
                        description: "Ensure your AI models remain accurate and performant in production with automated retraining and monitoring pipelines."
                  }
            ]
      },

      developmentTeam: {
            tag: "OUR AI RESEARCHERS & ENGINEERS",
            title: "Meet the data scientists behind our AI breakthroughs.",
            description: "Our AI team consists of experienced data scientists, ML engineers, and researchers who excel at translating complex mathematical concepts into production-ready software systems.",
            engineers: [
                  {
                        role: "Principal Data Scientist",
                        name: "Daniel R.",
                        experience: "12 years of experience",
                        image: dev1,
                        company: bbva,
                        technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn"],
                        certifications: ["Google Professional Machine Learning Engineer"],
                  },
                  {
                        role: "Computer Vision Engineer",
                        name: "Carlos M.",
                        experience: "9 years of experience",
                        image: dev2,
                        company: johnson,
                        technologies: ["OpenCV", "PyTorch", "CUDA", "YOLO"],
                        certifications: ["NVIDIA Deep Learning Institute Certified"],
                  },
                  {
                        role: "NLP Researcher",
                        name: "Sophia L.",
                        experience: "8 years of experience",
                        image: dev3,
                        company: adobe,
                        technologies: ["Hugging Face", "Transformers", "Spacy", "Python"],
                        certifications: ["AWS Certified Machine Learning – Specialty"],
                  },
                  {
                        role: "MLOps Engineer",
                        name: "Michael T.",
                        experience: "10 years of experience",
                        image: dev4,
                        company: siriusxm,
                        technologies: ["Kubeflow", "MLflow", "Docker", "AWS SageMaker"],
                        certifications: ["Certified Kubernetes Administrator (CKA)"],
                  },
                  {
                        role: "AI Solutions Architect",
                        name: "Emma K.",
                        experience: "11 years of experience",
                        image: dev5,
                        company: motorolla,
                        technologies: ["Python", "Databricks", "Spark", "Azure ML"],
                        certifications: ["Microsoft Certified: Azure AI Engineer Associate"],
                  }
            ]
      },

      industriesSolutions: {
            tag: "AI SOLUTIONS ACROSS INDUSTRIES",
            title: "Transformative AI applications tailored to your sector.",
            description: "AI is reshaping every industry. We build domain-specific AI models that solve precise industry challenges, from algorithmic trading to personalized healthcare.",
            industries: [
                  {
                        title: "Healthcare",
                        description: "Leverage AI for better diagnostics, personalized medicine, and operational efficiency.",
                        solutions: [
                              "Medical Image Analysis",
                              "Disease Prediction Models",
                              "Drug Discovery Acceleration",
                              "Patient Risk Stratification"
                        ],
                        image: industryImage,
                  },
                  {
                        title: "Finance & Banking",
                        description: "Enhance security and decision-making with predictive AI models.",
                        solutions: [
                              "Algorithmic Trading",
                              "Credit Scoring Models",
                              "Real-time Fraud Detection",
                              "Customer Lifetime Value Prediction"
                        ],
      image: industryImage,
                  },
                  {
                        title: "eCommerce & Retail",
                        description: "Drive sales through intelligent personalization and forecasting.",
                        solutions: [
                              "Product Recommendation Engines",
                              "Demand Forecasting",
                              "Visual Search",
                              "Sentiment Analysis for Reviews"
                        ],
      image: industryImage,
                  },
                  {
                        title: "Manufacturing",
                        description: "Optimize production lines with computer vision and predictive maintenance.",
                        solutions: [
                              "Defect Detection via Computer Vision",
                              "Predictive Equipment Maintenance",
                              "Yield Optimization Models",
                              "Robotic Process Control"
                        ],
      image: industryImage,
                  },
                  {
                        title: "Agriculture",
                        description: "Increase yield and efficiency through precision agriculture AI.",
                        solutions: [
                              "Crop Health Monitoring",
                              "Yield Prediction",
                              "Automated Pest Detection",
                              "Weather Impact Forecasting"
                        ],
      image: industryImage,
                  },
                  {
                        title: "Media & Entertainment",
                        description: "Personalize content delivery and automate media production.",
                        solutions: [
                              "Content Recommendation",
                              "Automated Video Tagging",
                              "Deepfake Detection",
                              "Generative Art & Music"
                        ],
      image: industryImage,
                  }
            ]
      },

      capabilities: {
            label: "AI DEVELOPMENT CAPABILITIES",
            title: "The tech stack powering our AI solutions.",
            description: "We utilize state-of-the-art frameworks, hardware accelerators, and cloud platforms to train and deploy highly complex AI models.",
            capabilities: [
                  {
                        title: "Deep Learning Frameworks",
                        description: "Build complex neural networks for advanced AI tasks.",
                        tools: [
                              {
                                    name: "PyTorch",
                                    logo: "/images/tool-tech/pytorch.svg"
                              },
                              {
                                    name: "TensorFlow",
                                    logo: "/images/tool-tech/tensorflow.svg"
                              },
                              {
                                    name: "Keras",
                                    logo: "/images/tool-tech/keras.svg"
                              }
                        ]
                  },
                  {
                        title: "Data Processing",
                        description: "Process massive datasets efficiently.",
                        tools: [
                              {
                                    name: "Pandas",
                                    logo: "/images/tool-tech/pandas.svg"
                              },
                              {
                                    name: "Apache Spark",
                                    logo: "/images/tool-tech/spark.svg"
                              },
                              {
                                    name: "Databricks",
                                    logo: "/images/tool-tech/databricks.svg"
                              }
                        ]
                  },
                  {
                        title: "MLOps Platforms",
                        description: "Manage the complete machine learning lifecycle.",
                        tools: [
                              {
                                    name: "MLflow",
                                    logo: "/images/tool-tech/mlflow.svg"
                              },
                              {
                                    name: "Kubeflow",
                                    logo: "/images/tool-tech/kubeflow.svg"
                              },
                              {
                                    name: "AWS SageMaker",
                                    logo: "/images/tool-tech/sagemaker.svg"
                              }
                        ]
                  },
                  {
                        title: "NLP & Generative AI",
                        description: "Leverage the latest in language processing.",
                        tools: [
                              {
                                    name: "Hugging Face",
                                    logo: "/images/tool-tech/huggingface.svg"
                              },
                              {
                                    name: "OpenAI API",
                                    logo: "/images/tool-tech/openai.svg"
                              }
                        ]
                  }
            ]
      },
};

export default ai;
