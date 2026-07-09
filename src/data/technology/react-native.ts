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

const reactNative = {
  slug: "react-native-development",

  hero: {
    serviceName: "React Native",
    tagline: "REACT NATIVE MOBILE DEVELOPMENT",
    title: "Build truly native iOS and Android applications from a single codebase.",
    description: "Our React Native development services help businesses launch high-performance mobile applications faster and more cost-effectively. By leveraging JavaScript and React, we deliver seamless, cross-platform mobile experiences that look, feel, and perform like pure native apps.",
  },

  serviceOverview: {
    tag: "REACT NATIVE DEVELOPMENT SERVICES",
    title: "Accelerate your mobile strategy with cross-platform excellence.",
    description: "At Solvifytech, we specialize in building complex, feature-rich React Native applications. Whether you need a consumer-facing app, an internal enterprise tool, or integration with native device hardware, our experts bridge the gap between web technologies and native mobile performance.",
    image: aiService,
    services: [
      {
            title: "Cross-Platform App Development",
            description: "Build and deploy applications for both iOS and Android simultaneously, reducing development time and maintenance costs by up to 40%."
      },
      {
            title: "Custom UI/UX Mobile Design",
            description: "Design intuitive, gesture-driven mobile interfaces that adhere strictly to Apple's Human Interface Guidelines and Google's Material Design."
      },
      {
            title: "Native Module Integration",
            description: "Develop custom bridging modules in Swift, Objective-C, Java, or Kotlin to access specialized device hardware like Bluetooth, NFC, or advanced cameras."
      },
      {
            title: "App Migration to React Native",
            description: "Rewrite legacy Cordova, Ionic, or sluggish native applications into performant, modern React Native codebases."
      },
      {
            title: "Mobile App Testing & QA",
            description: "Implement automated mobile testing using Detox and Appium to ensure your app functions flawlessly across thousands of device types."
      },
      {
            title: "Over-The-Air (OTA) Updates",
            description: "Integrate Expo EAS or CodePush to deliver critical bug fixes and feature updates instantly to users without waiting for App Store approvals."
      },
      {
            title: "App Store Deployment & ASO",
            description: "Handle the entire submission process for the Apple App Store and Google Play Store, optimizing for discoverability."
      }
]
  },

  developmentTeam: {
    tag: "OUR MOBILE ENGINEERS",
    title: "Meet the experts bridging web and mobile.",
    description: "Our React Native developers have deep roots in both React.js and native mobile development, allowing them to solve complex performance bottlenecks and hardware integration challenges.",
    engineers: [
      {
        role: "Lead Mobile Architect",
        name: "Daniel R.",
        experience: "10 years of experience",
        image: dev1,
        company: bbva,
        technologies: ["React Native","Swift","Objective-C","TypeScript"],
        certifications: ["Apple Certified iOS Developer"],
      },
      {
        role: "Cross-Platform Developer",
        name: "Carlos M.",
        experience: "8 years of experience",
        image: dev2,
        company: johnson,
        technologies: ["React Native","Expo","Redux","Reanimated"],
        certifications: ["Meta React Native Professional"],
      },
      {
        role: "Android/Java Specialist",
        name: "Sophia L.",
        experience: "9 years of experience",
        image: dev3,
        company: adobe,
        technologies: ["React Native","Kotlin","Java","Android Studio"],
        certifications: ["Google Associate Android Developer"],
      },
      {
        role: "Mobile UI/UX Animator",
        name: "Michael T.",
        experience: "7 years of experience",
        image: dev4,
        company: siriusxm,
        technologies: ["React Native","Framer Motion","Lottie","Skia"],
        certifications: ["UI/UX Design Specialization"],
      },
      {
        role: "Mobile QA Automation",
        name: "Emma K.",
        experience: "8 years of experience",
        image: dev5,
        company: motorolla,
        technologies: ["Detox","Appium","Jest","Bitrise (CI/CD)"],
        certifications: ["ISTQB Certified Tester"],
      }
    ]
  },
  
  industriesSolutions: {
    tag: "REACT NATIVE ACROSS INDUSTRIES",
    title: "Mobile solutions reaching users wherever they are.",
    description: "From on-demand delivery to secure fintech wallets, React Native powers top-tier mobile applications across every industry.",
    industries: [
      {
            title: "On-Demand & Delivery",
            description: "Real-time tracking and complex mapping applications.",
            solutions: [
                  "Driver/Rider Apps",
                  "Real-time GPS Tracking",
                  "Push Notification Routing",
                  "In-app Chat"
            ],
      image: industryImage,
      },
      {
            title: "Finance & Fintech",
            description: "Secure, biometric-enabled mobile banking apps.",
            solutions: [
                  "Mobile Wallets",
                  "Biometric Auth (FaceID)",
                  "Real-time Stock Tickers",
                  "Secure Document Scanning"
            ],
      image: industryImage,
      },
      {
            title: "Healthcare & Fitness",
            description: "Wearable integrations and telehealth video apps.",
            solutions: [
                  "Telehealth Video Calls",
                  "Apple Health/Google Fit Sync",
                  "Bluetooth Medical Device Integration",
                  "Workout Trackers"
            ],
      image: industryImage,
      },
      {
            title: "eCommerce & Retail",
            description: "Seamless mobile shopping with Apple/Google Pay.",
            solutions: [
                  "Mobile Storefronts",
                  "One-Tap Checkout (Apple Pay)",
                  "AR Product Previews",
                  "Loyalty Card Wallets"
            ],
      image: industryImage,
      },
      {
            title: "Social Media",
            description: "Media-heavy feeds and real-time interactions.",
            solutions: [
                  "Endless Scrolling Feeds",
                  "Live Video Streaming",
                  "Complex Image Filters",
                  "Real-time Messaging"
            ],
      image: industryImage,
      },
      {
            title: "Travel & Hospitality",
            description: "Offline-first apps for travelers on the go.",
            solutions: [
                  "Offline Maps & Guides",
                  "Mobile Boarding Passes",
                  "Hotel Room Key Integrations",
                  "Itinerary Planners"
            ],
      image: industryImage,
      }
]
  },

  capabilities: {
    label: "REACT NATIVE CAPABILITIES",
    title: "The tools powering our mobile apps.",
    description: "We utilize the rich React Native ecosystem alongside robust backend services to deliver complete mobile solutions.",
    capabilities: [
      {
            title: "Mobile Frameworks",
            description: "The foundation of our mobile development.",
            tools: [
                  {
                        name: "React Native",
                        logo: "/images/tool-tech/react.svg"
                  },
                  {
                        name: "Expo",
                        logo: "/images/tool-tech/expo.svg"
                  },
                  {
                        name: "TypeScript",
                        logo: "/images/tool-tech/typescript.svg"
                  }
            ]
      },
      {
            title: "Native Languages",
            description: "Bridging to native device capabilities.",
            tools: [
                  {
                        name: "Swift",
                        logo: "/images/tool-tech/swift.svg"
                  },
                  {
                        name: "Kotlin",
                        logo: "/images/tool-tech/kotlin.svg"
                  },
                  {
                        name: "Java",
                        logo: "/images/tool-tech/java.svg"
                  }
            ]
      },
      {
            title: "Animation & UI",
            description: "Creating fluid, 60fps mobile interfaces.",
            tools: [
                  {
                        name: "Reanimated",
                        logo: "/images/tool-tech/react.svg"
                  },
                  {
                        name: "Lottie",
                        logo: "/images/tool-tech/lottie.svg"
                  },
                  {
                        name: "React Navigation",
                        logo: "/images/tool-tech/react.svg"
                  }
            ]
      },
      {
            title: "Mobile Backend (mBaaS)",
            description: "Powering mobile apps with scalable cloud services.",
            tools: [
                  {
                        name: "Firebase",
                        logo: "/images/tool-tech/firebase.svg"
                  },
                  {
                        name: "Supabase",
                        logo: "/images/tool-tech/supabase.svg"
                  },
                  {
                        name: "AWS Amplify",
                        logo: "/images/tool-tech/aws.svg"
                  }
            ]
      }
]
  },
};

export default reactNative;
