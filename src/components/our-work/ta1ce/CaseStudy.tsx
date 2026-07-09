// import { type JSX } from "react";
// import "./case-study.css";

// /* ------------------------------------------------------------------ */
// /*  Prop Types                                                          */
// /* ------------------------------------------------------------------ */

// export interface TechGroup {
//   heading: string;
//   items: string[];
// }

// export interface KeyFeature {
//   feature: string;
//   description: string;
// }

// export interface OutcomeItem {
//   title: string;
//   detail: string;
// }

// export interface HeroNumber {
//   value: string;
//   label: string;
// }

// export interface CaseStudyProps {
//   /* Hero */
//   title: string;
//   subtitle: string;
//   industry: string;
//   services: readonly string[];

//   /* Summary */
//   summaryDescription: string;
//   logoSrc?: string;

//   /* Challenge */
//   challengeTitle?: string;
//   challengeDescription: string;
//   challengeList: readonly string[];
//   challengeQuote?: string;

//   /* Solution */
//   solutionDescription: string;
//   whatWeBuilt: readonly string[];

//   /* Technologies */
//   techGroups: TechGroup[];
//   allTech: string[];

//   /* Features */
//   keyFeatures?: readonly KeyFeature[];

//   /* Outcome */
//   outcomeImage?: string;
//   outcomeDescription?: string;
//   outcomeItems: readonly OutcomeItem[];

//   /* CTA */
//   ctaHeading?: string;
//   ctaDescription?: string;
//   ctaButtonText?: string;
//   ctaButtonHref?: string;
// }

// /* ------------------------------------------------------------------ */
// /*  Color map for tech-card glows (extend as needed)                   */
// /* ------------------------------------------------------------------ */
// const defaultColorMap: Record<string, string> = {
//   Frontend: "#ff5a1f",
//   Backend: "#e04a15",
//   Database: "#ff7043",
//   Infrastructure: "#ff8a65",
//   Integrations: "#ffab91",
//   "Commerce Platform": "#ff6b35",
//   Authentication: "#ff4d00",
//   "Platform Engineering": "#ff9a76",
//   "Backend & CMS": "#e05a20",
//   "Additional Services": "#ffb399",
//   Security: "#ff6633",
//   Admin: "#ff8055",
//   Design: "#ffa07a",
// };

// /* ------------------------------------------------------------------ */
// /*  Component                                                           */
// /* ------------------------------------------------------------------ */

// export default function CaseStudy({
//   title,
//   subtitle,
//   industry,
//   services,
//   summaryDescription,
//   logoSrc,
//   challengeTitle = "The challenge",
//   challengeDescription,
//   challengeList,
//   challengeQuote,
//   solutionDescription,
//   whatWeBuilt,
//   techGroups,
//   allTech,
//   keyFeatures,
//   outcomeImage,
//   outcomeDescription,
//   outcomeItems,
//   ctaHeading = "Ready to build the next digital product?",
//   ctaDescription = "From SaaS platforms and client portals to AI-powered applications, Solvifytech helps businesses turn ideas into scalable digital products.",
//   ctaButtonText = "Let's build together",
//   ctaButtonHref = "#contact",
// }: CaseStudyProps): JSX.Element {
//   return (
//     <div className="cs-page">

//       {/* ── HERO ─────────────────────────────────────────────────── */}
//       <section className="cs-hero">
//         <div className="cs-hero-overlay" />
//         <div className="cs-hero-content">
//           <p className="cs-breadcrumb">Home &nbsp;›&nbsp; Our Clients &nbsp;›&nbsp; {title}</p>
//           <div className="cs-hero-grid">
//             <div>
//               <p className="cs-eyebrow">{title} Case Study · {industry}</p>
//               <h1>{subtitle}</h1>
//             </div>
//             <div className="cs-hero-form-card">
//               <p>Get this case study in PDF to your inbox.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── SUMMARY ──────────────────────────────────────────────── */}
//       <section className="cs-summary">
//         <div className="cs-summary-grid">
//           <div>
//             <p className="tap1ce-summary-title">
//               The summary<span className="dot">.</span>
//             </p>
//             <p className="tap1ce-summary-desc">{summaryDescription}</p>
//           </div>
//           {logoSrc && (
//             <div className="cs-logo-card">
//               <img className="cs-client-logo" src={logoSrc} alt={`${title} logo`} />
//             </div>
//           )}
//         </div>

//         <div className="cs-meta-bar mt-5">
//           <div>
//             <span className="cs-meta-label">Industry</span>
//             <div className="cs-pill-row">
//               {industry.split(" / ").map((ind) => (
//                 <span className="cs-pill" key={ind}>{ind}</span>
//               ))}
//             </div>
//           </div>
//           <div>
//             <span className="cs-meta-label">Services provided</span>
//             <div className="cs-pill-row">
//               {services.map((s) => (
//                 <span className="cs-pill" key={s}>{s}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── CHALLENGE ────────────────────────────────────────────── */}
//       <section className="cs-challenge">
//         <div className="cs-challenge-container">
//           <div className="cs-challenge-grid">
//             <div className="tap1ce-challenge-left">
//               <h2 className="tap1ce-challenge-title">
//                 {challengeTitle}<span className="dot">.</span>
//               </h2>
//               <div className="tap1ce-challenge-desc">
//                 <p>{challengeDescription}</p>
//                 {challengeList.length > 0 && (
//                   <>
//                     <p>The platform needed to support:</p>
//                     <ul className="cs-check-list">
//                       {challengeList.map((item) => (
//                         <li key={item}>{item}</li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//               </div>
//             </div>

//             {challengeQuote && (
//               <aside className="tap1ce-challenge-right">
//                 <div className="cs-challenge-quote">
//                   <p>{challengeQuote}</p>
//                 </div>
//               </aside>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ── SOLUTION ─────────────────────────────────────────────── */}
//       <section className="cs-solution">
//         <div className="cs-solution-container">
//           <h2 className="cs-solution-title">The solution.</h2>
//           <p className="cs-solution-description">{solutionDescription}</p>
//           <div className="cs-built-card">
//             <h3>What we built</h3>
//             <ul>
//               {whatWeBuilt.map((item) => (
//                 <li key={item}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* ── TECHNOLOGIES ─────────────────────────────────────────── */}
//       <section className="cs-tech-band">
//         <div className="cs-tech-orb cs-tech-orb-1" />
//         <div className="cs-tech-orb cs-tech-orb-2" />

//         <div className="cs-tech-band-inner">
//           <div className="cs-tech-header">
//             <span className="cs-tech-eyebrow">Stack &amp; Infrastructure</span>
//             <h2 className="cs-tech-title">
//               All technologies used<span className="dot">.</span>
//             </h2>
//             <p className="cs-tech-subtitle">
//               A modern, production-grade stack chosen for performance, scalability, and developer experience.
//             </p>
//           </div>

//           <div className="cs-tech-marquee-wrap">
//             <div className="cs-tech-marquee">
//               {[...allTech, ...allTech].map((t, i) => (
//                 <span className="cs-tech-marquee-pill" key={`${t}-${i}`}>{t}</span>
//               ))}
//             </div>
//           </div>

//           <div className="cs-tech-cards-grid">
//             {techGroups.map((g) => (
//               <div className="cs-tech-card" key={g.heading}>
//                 <div className="cs-tech-card-body">
//                   <h4 className="cs-tech-card-heading">{g.heading}</h4>
//                   <div className="cs-tech-card-pills">
//                     {g.items.map((item) => (
//                       <span className="cs-tech-card-pill" key={item}>{item}</span>
//                     ))}
//                   </div>
//                 </div>
//                 <div
//                   className="cs-tech-card-glow"
//                   style={{ background: defaultColorMap[g.heading] ?? "#ff5a1f" }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── KEY FEATURES (optional) ──────────────────────────────── */}
//       {keyFeatures && keyFeatures.length > 0 && (
//         <section className="cs-features">
//           <h2 className="cs-features-title">
//             Key features<span className="dot">.</span>
//           </h2>
//           <div className="cs-feature-grid">
//             {keyFeatures.map((f, i) => (
//               <div className="cs-feature-item" key={f.feature}>
//                 <span className="cs-feature-num">{String(i + 1).padStart(2, "0")}</span>
//                 <h4 className="cs-feature-name">{f.feature}</h4>
//                 <p className="cs-feature-desc">{f.description}</p>
//                 <div className="cs-feature-arrow">&#8599;</div>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* ── OUTCOME ──────────────────────────────────────────────── */}
//       <section className="cs-outcome">
//         <div className="cs-outcome-inner">
//           {outcomeImage && (
//             <div className="cs-outcome-media">
//               <img src={outcomeImage} alt={`${title} outcome`} className="cs-outcome-img" />
//               <div className="cs-outcome-badge">
//                 <span className="cs-outcome-badge-dot" />
//                 Live platform
//               </div>
//             </div>
//           )}
//           <div className="cs-outcome-content">
//             <span className="cs-outcome-eyebrow">Results</span>
//             <h2 className="cs-outcome-title">
//               The outcome<span className="dot">.</span>
//             </h2>
//             {outcomeDescription && (
//               <p className="cs-outcome-desc">{outcomeDescription}</p>
//             )}
//             <ul className="cs-outcome-list">
//               {outcomeItems.map((o) => (
//                 <li key={o.title} className="cs-outcome-item">
//                   <span className="cs-outcome-dot" />
//                   <div>
//                     <strong>{o.title}</strong>
//                     <span>{o.detail}</span>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* ── CTA ──────────────────────────────────────────────────── */}
//       <section className="cs-cta">
//         <div className="cs-cta-text">
//           <h2>{ctaHeading}</h2>
//           <p>{ctaDescription}</p>
//           <a className="cs-cta-button" href={ctaButtonHref}>{ctaButtonText}</a>
//         </div>
//       </section>

//     </div>
//   );
// }
