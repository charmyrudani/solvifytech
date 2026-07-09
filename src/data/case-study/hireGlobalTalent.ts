export const hireGlobalTalent = {
  title: "Hire Global Talent",
  subtitle:
    "Building a Complete Hiring Portal for Employers, Candidates & Admin Teams",
  industry: "Recruitment / Staffing",
  services: [
    "Hiring Portal Development",
    "Admin Panel",
    "Employer Portal",
    "Candidate Portal",
    "Backend Development",
    "Workflow Automation",
  ],

  challenge: {
    description:
      "Hire Global Talent needed more than a marketing website. They needed a complete hiring platform where employers, candidates, and the internal admin team could manage the full recruitment workflow in one place.",
    coreChallenge:
      "The main challenge was to replace manual hiring coordination with a structured digital system.",
  },

  solution: {
    description:
      "Solvifytech designed and developed a custom hiring portal with three major user roles.",
    userRoles: {
      adminPanel: {
        title: "Admin Panel",
        capabilities: [
          "Manage employers",
          "Manage candidates",
          "Review job applications",
          "Track hiring status",
          "Approve or reject profiles",
          "Manage job listings",
          "Monitor platform activity",
        ],
      },
      employerPortal: {
        title: "Employer Portal",
        capabilities: [
          "Register company profile",
          "Post job requirements",
          "View candidate applications",
          "Shortlist candidates",
          "Track hiring progress",
          "Communicate with admin team",
        ],
      },
      candidatePortal: {
        title: "Candidate Portal",
        capabilities: [
          "Create candidate profile",
          "Upload resume and documents",
          "Apply for job opportunities",
          "Track application status",
          "Update skills and work experience",
          "Manage profile details",
        ],
      },
    },
  },

  technologies: {
    frontend: ["React.js", "Next.js"],
    backend: ["Node.js", "REST APIs"],
    database: ["Database Management"],
    security: ["Authentication System", "Role-Based Access Control"],
    admin: ["Admin Dashboard"],
    design: ["Responsive UI"],
  },

  outcome: {
    businessImpact: [
      "Centralized hiring operations",
      "Better employer and candidate experience",
      "Faster application management",
      "Reduced manual coordination",
      "Clear role-based workflow",
      "Scalable platform for recruitment growth",
    ],
  },
} as const;

export type hireGlobalTalent = typeof hireGlobalTalent;
