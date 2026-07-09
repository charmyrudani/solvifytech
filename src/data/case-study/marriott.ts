import marriottimg from '/images/our-work/marriott.webp'

export const marriott = {
  title: "Marriott",
  image: marriottimg,
  subtitle: "Custom Digital Profile Theme with SSO-Based Portal Access",
  industry: "Hospitality",
  services: [
    "Custom Theme Development",
    "SSO Integration",
    "Portal Development",
    "Enterprise Profile Customization",
  ],

  challenge: {
    description:
      "Marriott required a custom digital profile experience that matched their brand and internal workflow. The standard profile setup was not enough because their users needed a branded dashboard experience with secure login access.",
    coreRequirement:
      "One login should give users access to both their account and their custom Tap1ce profile dashboard.",
  },

  solution: {
    description:
      "Solvifytech developed a custom Marriott theme and integrated an SSO-based login flow. Once a Marriott user logs into their account, they are automatically authenticated into their dashboard without needing to log in again separately.",
    whatWeBuilt: [
      "Custom Marriott digital profile theme",
      "Brand-specific profile layout",
      "Custom dashboard experience",
      "SSO login integration",
      "Auto-login dashboard access",
      "Secure authentication flow",
      "Role-based access structure",
      "Custom profile sections",
      "Enterprise-ready portal architecture",
    ],
  },

  technologies: {
    frontend: ["React.js", "Next.js"],
    backend: ["Node.js", "REST APIs"],
    authentication: [
      "SSO Authentication",
      "JWT / Token-Based Authentication",
      "Role-Based Access Control",
    ],
    platformEngineering: ["Custom Theme Engine"],
  },

  outcome: {
    businessImpact: [
      "Marriott received a custom-branded digital profile system.",
      "Users can access their dashboard through one secure login.",
      "The login experience became seamless and professional.",
      "Tap1ce became more enterprise-ready for large hospitality clients.",
      "The platform can now support custom themes plus SSO-based portal access for future enterprise customers.",
    ],
  },
} as const;

export type Marriott = typeof marriott;