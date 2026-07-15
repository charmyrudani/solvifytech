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

const aiVoiceBots = {
      slug: "ai-voice-bots",

      hero: {
            serviceName: "AI Voice Bots",
            tagline: "AI VOICE BOT SERVICES",
            title: "Automate business calls with AI voice bots that provide faster responses and better customer experiences.",
            description: "Our AI voice bot solutions handle customer inquiries, appointment scheduling, lead qualification, and support calls using natural conversations. We help businesses reduce manual workloads while delivering consistent and scalable voice experiences."
      },

      serviceOverview: {
            tag: "AI VOICE BOT SERVICES",
            title: "Automate voice conversations with intelligent bots built for real business use.",
            description: "Our AI voice bot services help businesses handle calls, answer common questions, qualify leads, schedule appointments, and support customers through natural voice interactions. Solvifytech builds voice automation systems that improve response speed and reduce manual calling effort.",
            image: aiService,

            services: [
                  {
                        "title": "Custom AI Voice Bot Development",
                        "description": "We build AI voice bots that can handle calls, respond naturally, and support business conversations."
                  },
                  {
                        "title": "Customer Support Voice Bots",
                        "description": "We create voice bots that answer common questions and reduce pressure on support teams."
                  },
                  {
                        "title": "Lead Qualification Voice Bots",
                        "description": "We automate calling workflows to qualify leads and collect important information."
                  },
                  {
                        "title": "Appointment Booking Voice Bots",
                        "description": "We build voice bots that schedule appointments, confirm availability, and send reminders."
                  },
                  {
                        "title": "Call Automation Workflows",
                        "description": "We automate incoming and outgoing call processes for sales, support, and operations."
                  },
                  {
                        "title": "CRM Integration for Voice Bots",
                        "description": "We connect voice bots with your CRM to update customer data and call outcomes."
                  },
                  {
                        "title": "Voice Bot Monitoring & Optimization",
                        "description": "We monitor voice bot performance and improve scripts, flows, and response quality."
                  }
            ]
      },

      developmentTeam: {
            tag: "OUR VOICE AI SPECIALISTS",
            title: "Meet the experts crafting natural voice experiences.",
            description: "Building conversational voice agents requires a unique blend of speech recognition, natural language processing, and low-latency audio streaming. Our voice AI experts build systems that sound natural and respond instantly.",
            engineers: [
                  {
                        role: "Voice AI Architect",
                        name: "Kevin H.",
                        experience: "10 years of experience",
                        image: dev1,
                        technologies: ["WebRTC", "Python", "ElevenLabs"],
                        company: bbva,
                        certifications: ["Voice Interface Design", "Audio Processing"],
                  },
                  {
                        role: "Speech Recognition Eng.",
                        name: "Maria S.",
                        experience: "8 years of experience",
                        image: dev2,
                        technologies: ["Whisper", "Kaldi", "C++"],
                        company: johnson,
                        certifications: ["ASR Specialist", "ML Engineering"],
                  },
                  {
                        role: "Conversational Designer",
                        name: "John D.",
                        experience: "5 years of experience",
                        image: dev3,
                        technologies: ["Dialogflow", "Voiceflow", "Figma"],
                        company: adobe,
                        certifications: ["UX Design", "VUI Specialist"],
                  },
                  {
                        role: "Backend Engineer",
                        name: "Chris L.",
                        experience: "7 years of experience",
                        image: dev4,
                        technologies: ["Node.js", "WebSockets", "Redis"],
                        company: siriusxm,
                        certifications: ["Real-time Systems", "Backend Pro"],
                  },
                  {
                        role: "NLP Engineer",
                        name: "Rachel G.",
                        experience: "6 years of experience",
                        image: dev5,
                        technologies: ["Python", "NLTK", "OpenAI"],
                        company: motorolla,
                        certifications: ["Conversational AI", "Text-to-Speech Expert"],
                  },
            ]
      },

      industriesSolutions: {
            tag: "AI VOICE BOTS ACROSS INDUSTRIES",
            title: "Automate calls with AI voice bots built around real business conversations.",
            description: "AI voice bots help businesses handle calls faster, qualify leads, send reminders, and support customers. Solvifytech builds voice automation for industry-specific call flows.",
            industries: [
                  {
                        title: "Healthcare",
                        description: "We build voice bots for appointment reminders, patient queries, and clinic support.",
                        image: industryImage,
                        solutions: [
                              "Appointment reminder calls",
                              "Patient inquiry voice bots",
                              "Clinic support calling bots",
                              "Follow-up call automation",
                              "Doctor availability bots",
                              "Feedback calling bots"
                        ]
                  },
                  {
                        title: "Sales & Lead Teams",
                        description: "We create voice bots that qualify leads and collect customer details.",
                        image: industryImage,
                        solutions: [
                              "Lead qualification calling bots",
                              "Callback automation",
                              "Inquiry verification calls",
                              "Sales follow-up bots",
                              "CRM call update systems",
                              "Lead nurturing voice flows"
                        ]
                  },
                  {
                        title: "Real Estate",
                        description: "We automate site visit reminders, project inquiries, and buyer follow-ups.",
                        image: industryImage,
                        solutions: [
                              "Site visit reminder calls",
                              "Property inquiry voice bots",
                              "Buyer follow-up calls",
                              "Project information calling bots",
                              "Booking confirmation calls",
                              "CRM call logging"
                        ]
                  },
                  {
                        title: "Education",
                        description: "We build voice bots for admissions, course inquiries, and student reminders.",
                        image: industryImage,
                        solutions: [
                              "Admission inquiry calls",
                              "Fee reminder calls",
                              "Course information bots",
                              "Counselor callback automation",
                              "Class reminder bots",
                              "Lead qualification calls"
                        ]
                  },
                  {
                        title: "Customer Support",
                        description: "We automate common customer calls and route complex cases to human teams.",
                        image: industryImage,
                        solutions: [
                              "Support calling bots",
                              "Complaint routing flows",
                              "FAQ voice bots",
                              "Service status calls",
                              "Customer feedback calls",
                              "Human handoff systems"
                        ]
                  },
                  {
                        title: "Service Businesses",
                        description: "We create voice bots for bookings, reminders, and service confirmations.",
                        image: industryImage,
                        solutions: [
                              "Appointment booking calls",
                              "Booking confirmation bots",
                              "Service reminder calls",
                              "Technician visit confirmation",
                              "Payment reminder calls",
                              "CRM call update systems"
                        ]
                  },
            ]
      },

      capabilities: {
            label: "AI VOICE BOT CAPABILITIES",
            title: "We cover the AI voice bot stack and everything around it.",
            description: "We build AI voice bots for calling, lead qualification, reminders, booking, customer support, and follow-ups.",
            capabilities: [
                  {
                        "title": "Custom Voice Bots",
                        "description": "Build AI voice bots for business conversations.",
                        "tools": [
                              {
                                    "name": "Voice AI",
                                    "logo": "/images/tool-tech/voice-ai.svg"
                              },
                              {
                                    "name": "Speech-to-Text",
                                    "logo": "/images/tool-tech/speech-to-text.svg"
                              },
                              {
                                    "name": "Text-to-Speech",
                                    "logo": "/images/tool-tech/text-to-speech.svg"
                              }
                        ]
                  },
                  {
                        "title": "Lead Calling Automation",
                        "description": "Qualify leads and collect customer details.",
                        "tools": [
                              {
                                    "name": "CRM",
                                    "logo": "/images/tool-tech/crm.svg"
                              },
                              {
                                    "name": "Call Flows",
                                    "logo": "/images/tool-tech/call-flows.svg"
                              },
                              {
                                    "name": "Voice Agent",
                                    "logo": "/images/tool-tech/voice-agent.svg"
                              }
                        ]
                  },
                  {
                        "title": "Appointment Voice Bots",
                        "description": "Automate booking and reminder calls.",
                        "tools": [
                              {
                                    "name": "Calendar API",
                                    "logo": "/images/tool-tech/calendar-api.svg"
                              },
                              {
                                    "name": "CRM",
                                    "logo": "/images/tool-tech/crm.svg"
                              },
                              {
                                    "name": "Calling API",
                                    "logo": "/images/tool-tech/calling-api.svg"
                              }
                        ]
                  },
                  {
                        "title": "Support Voice Bots",
                        "description": "Answer common questions and route complex calls.",
                        "tools": [
                              {
                                    "name": "IVR",
                                    "logo": "/images/tool-tech/ivr.svg"
                              },
                              {
                                    "name": "AI Agent",
                                    "logo": "/images/tool-tech/ai-agent.svg"
                              },
                              {
                                    "name": "Knowledge Base",
                                    "logo": "/images/tool-tech/knowledge-base.svg"
                              }
                        ]
                  },
                  {
                        "title": "Call Analytics",
                        "description": "Track call results and improve scripts.",
                        "tools": [
                              {
                                    "name": "Call Logs",
                                    "logo": "/images/tool-tech/call-logs.svg"
                              },
                              {
                                    "name": "Transcripts",
                                    "logo": "/images/tool-tech/transcripts.svg"
                              },
                              {
                                    "name": "Analytics",
                                    "logo": "/images/tool-tech/analytics.svg"
                              }
                        ]
                  }
            ]
      }
};

export default aiVoiceBots;
