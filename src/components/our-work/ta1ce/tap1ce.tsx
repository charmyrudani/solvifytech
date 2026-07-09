// import { type JSX } from "react";
// import CaseStudy, { type TechGroup, type OutcomeItem } from "../CaseStudy";
// import { tap1ce } from "../../../data/case-study/tap1ce";
// import logoSrc from "/images/our-work/tap1ce.webp";
// import outcomeSrc from "/images/our-work/tap1ce-outcome.avif";

// const techGroups: TechGroup[] = [
//   { heading: "Frontend",       items: [...tap1ce.technologies.frontend] },
//   { heading: "Backend",        items: [...tap1ce.technologies.backend] },
//   { heading: "Database",       items: [...tap1ce.technologies.database] },
//   { heading: "Infrastructure", items: [...tap1ce.technologies.infrastructure] },
//   { heading: "Integrations",   items: [...tap1ce.technologies.integrations] },
// ];

// const allTech: string[] = [
//   ...tap1ce.technologies.frontend,
//   ...tap1ce.technologies.backend,
//   ...tap1ce.technologies.database,
//   ...tap1ce.technologies.infrastructure,
// ];

// const outcomeItems: OutcomeItem[] = tap1ce.outcome.businessImpact.map((impact) => ({
//   title: impact.replace(/\.$/, ""),
//   detail: "",
// }));

// export default function Tap1cePage(): JSX.Element {
//   return (
//     <CaseStudy
//       title={tap1ce.title}
//       subtitle={tap1ce.subtitle}
//       industry={tap1ce.industry}
//       services={tap1ce.services}
//       summaryDescription="Tap1ce set out to redefine professional networking by replacing the paper business card with a modern digital identity platform. We partnered with their team to design and build the entire product, from digital profiles to enterprise dashboards."
//       logoSrc={logoSrc}
//       challengeDescription={tap1ce.challenge.description}
//       challengeList={tap1ce.challenge.requirements}
//       challengeQuote={tap1ce.challenge.additionalNote}
//       solutionDescription={tap1ce.solution.description}
//       whatWeBuilt={tap1ce.solution.whatWeBuilt}
//       techGroups={techGroups}
//       allTech={allTech}
//       keyFeatures={tap1ce.keyFeatures.map((kf) => ({ feature: kf.feature, description: kf.description }))}
//       outcomeImage={outcomeSrc}
//       outcomeDescription="A scalable digital networking platform built for instant sharing, enterprise readiness, and long-term flexibility."
//       outcomeItems={outcomeItems}
//       ctaHeading={tap1ce.cta.heading}
//       ctaDescription={tap1ce.cta.description}
//       ctaButtonText={tap1ce.cta.buttonText}
//     />
//   );
// }
