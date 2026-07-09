import { useParams, Link } from "react-router-dom";
import { CASESTUDY } from "../../data/case-study/index";
import "./case-study.css";
import { Paths } from "../../constants/route-paths.constants";
import outcomeImg from '/images/our-work/outcome.png';
import { GoHome } from 'react-icons/go';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CaseStudyData = any;

const LABEL_MAP: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  infrastructure: "Infrastructure",
  integrations: "Integrations",
  commercePlatform: "Commerce Platform",
  authentication: "Authentication",
  platformEngineering: "Platform Engineering",
  backendAndCMS: "Backend & CMS",
  additionalServices: "Additional Services",
  security: "Security",
  admin: "Admin",
  design: "Design",
};

const COLOR_MAP: Record<string, string> = {
  Frontend: "#ff5a1f",
  Backend: "#e04a15",
  Database: "#ff7043",
  Infrastructure: "#ff8a65",
  Integrations: "#ffab91",
  "Commerce Platform": "#ff6b35",
  Authentication: "#ff4d00",
  "Platform Engineering": "#ff9a76",
  "Backend & CMS": "#e05a20",
  "Additional Services": "#ffb399",
  Security: "#ff6633",
  Admin: "#ff8055",
  Design: "#ffa07a",
};

/* ─── Display component — receives whole data object as prop ── */
function CaseStudy({ data }: { data: CaseStudyData }) {
  const {
    image,
    title,
    subtitle,
    industry,
    services,
    challenge,
    solution,
    technologies,
    outcome,
    keyFeatures,
    heroNumbers,
    workflow,
    platformEcosystem,
    keyTakeaway,
    metrics,
    quote,
    ongoingPartnership,
  } = data;

  // Challenge: pick whichever list field exists
  const challengeList: string[] =
    challenge.requirements ??
    challenge.painPoints ??
    challenge.keyProblems ??
    challenge.targetAudience ??
    [];

  // Challenge quote: pick whichever string field exists
  const challengeQuote: string =
    challenge.additionalNote ??
    challenge.coreNeed ??
    challenge.coreRequirement ??
    challenge.constraint ??
    challenge.coreChallenge ??
    challenge.coreGoal ??
    "";

  // Solution list: pick whichever list field exists
  const whatWeBuilt: string[] =
    solution.whatWeBuilt ?? solution.whatWeDelivered ?? [];

  // Technologies: convert object to array of { heading, items }
  const techGroups = Object.entries(technologies).map(([key, items]) => ({
    heading: LABEL_MAP[key] ?? key,
    items: items as string[],
  }));
  const allTech = techGroups.flatMap((g) => g.items);

  // Outcome impacts
  const impacts: string[] = outcome.businessImpact ?? [];

  // Industry pills
  const industryPills: string[] = industry.split(" / ");

  return (
    <div className="cs-page">

      {/* HERO */}
      <section className="cs-hero">
        <div className="cs-hero-overlay" />
        <div className="cs-hero-content">
          <nav className="bd-breadcrumb-nav cs-custom-breadcrumb" aria-label="breadcrumb">
            <ol className="bd-breadcrumb-list">
              <li className="bd-breadcrumb-item">
                <Link to="/" className="bd-breadcrumb-link" aria-label="Home">
                  <GoHome size={20} />
                </Link>
              </li>
              <li className="bd-breadcrumb-item">
                <Link to={`/${Paths.ourWork}`} className="bd-breadcrumb-link">Our Work</Link>
              </li>
              <li className="bd-breadcrumb-item bd-breadcrumb-current">
                {title}
              </li>
            </ol>
          </nav>
          <div className="cs-hero-grid">
            <div>
              <p className="cs-eyebrow">{title} Case Study · {industry}</p>
              <h1>{subtitle}</h1>
            </div>
            {/* <div className="cs-hero-form-card">
              <p>Get this case study in PDF to your inbox.</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* HERO NUMBERS — tap1ce */}
      {heroNumbers && heroNumbers.length > 0 && (
        <section className="cs-hero-numbers">
          <div className="cs-hero-numbers-inner">
            {heroNumbers.map((stat: { value: string; label: string }) => (
              <div className="cs-hero-stat" key={stat.label}>
                <span className="cs-hero-stat-value">{stat.value}</span>
                <span className="cs-hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SUMMARY */}
      <section className="cs-summary">
        <div className="cs-summary-grid">
          <div>
            <p className="tap1ce-summary-title">
              The summary<span className="dot">.</span>
            </p>
            <p className="tap1ce-summary-desc">{solution.description}</p>
          </div>
          <div className="cs-logo-card">
              <img src={image} alt={title} height={92}/>
          </div>
        </div>

        <div className="cs-meta-bar mt-5">
          <div>
            <span className="cs-meta-label">Industry</span>
            <div className="cs-pill-row">
              {industryPills.map((ind: string) => (
                <span className="cs-pill" key={ind}>{ind}</span>
              ))}
            </div>
          </div>
          <div>
            <span className="cs-meta-label">Services provided</span>
            <div className="cs-pill-row">
              {services.map((s: string) => (
                <span className="cs-pill" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="cs-challenge">
        <div className="cs-challenge-container">
          <div className="cs-challenge-grid">
            <div className="tap1ce-challenge-left">
              <h2 className="tap1ce-challenge-title">
                The challenge<span className="dot">.</span>
              </h2>
              <div className="tap1ce-challenge-desc">
                <p>{challenge.description}</p>
                {challengeList.length > 0 && (
                  <>
                    <p>Key requirements:</p>
                    <ul className="cs-check-list">
                      {challengeList.map((item: string) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {challengeQuote && (
              <aside className="tap1ce-challenge-right">
                <div className="cs-challenge-quote">
                  <p>{challengeQuote}</p>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="cs-solution">
        <div className="cs-solution-container">
          <h2 className="cs-solution-title">The solution.</h2>
          <p className="cs-solution-description">{solution.description}</p>
          {whatWeBuilt.length > 0 && (
            <div className="cs-built-card">
              <h3>What we built</h3>
              <ul>
                {whatWeBuilt.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* USER ROLES — only for hire-global-talent */}
          {solution.userRoles && (
            <div className="cs-user-roles">
              {Object.values(solution.userRoles as Record<string, { title: string; capabilities: readonly string[] }>).map(
                (role) => (
                  <div className="cs-role-card" key={role.title}>
                    <h3 className="cs-role-title">{role.title}</h3>
                    <ul className="cs-role-list">
                      {role.capabilities.map((cap: string) => (
                        <li key={cap}>
                          <span className="cs-role-check">✓</span>
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* WORKFLOW — wines-of-nz */}
      {workflow && (
        <section className="cs-workflow">
          <div className="cs-workflow-inner">
            <h2 className="cs-workflow-title">The Workflow<span className="dot">.</span></h2>
            <div className="cs-workflow-grid">
              {workflow.productManagement && (
                <div className="cs-workflow-lane">
                  <h3 className="cs-workflow-lane-title">Product Management</h3>
                  <div className="cs-workflow-steps">
                    {workflow.productManagement.map((step: string, i: number) => (
                      <div className="cs-workflow-step" key={step}>
                        <div className="cs-workflow-step-badge">{String(i + 1).padStart(2, "0")}</div>
                        <span>{step}</span>
                        {i < workflow.productManagement.length - 1 && <div className="cs-workflow-arrow">↓</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {workflow.orderFlow && (
                <div className="cs-workflow-lane">
                  <h3 className="cs-workflow-lane-title">Order Flow</h3>
                  <div className="cs-workflow-steps">
                    {workflow.orderFlow.map((step: string, i: number) => (
                      <div className="cs-workflow-step" key={step}>
                        <div className="cs-workflow-step-badge">{String(i + 1).padStart(2, "0")}</div>
                        <span>{step}</span>
                        {i < workflow.orderFlow.length - 1 && <div className="cs-workflow-arrow">↓</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* PLATFORM ECOSYSTEM — doccure */}
      {platformEcosystem && (
        <section className="cs-ecosystem">
          <div className="cs-ecosystem-inner">
            <h2 className="cs-ecosystem-title">The Platform Ecosystem<span className="dot">.</span></h2>
            <div className="cs-ecosystem-grid">
              {Object.values(platformEcosystem as Record<string, { title: string; features: readonly string[] }>).map((portal) => (
                <div className="cs-ecosystem-card" key={portal.title}>
                  <h3 className="cs-ecosystem-card-title">{portal.title}</h3>
                  <ul className="cs-ecosystem-list">
                    {portal.features.map((f: string) => (
                      <li key={f}>
                        <span className="cs-ecosystem-dot" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TECHNOLOGIES */}
      <section className="cs-tech-band">
        <div className="cs-tech-orb cs-tech-orb-1" />
        <div className="cs-tech-orb cs-tech-orb-2" />
        <div className="cs-tech-band-inner">
          <div className="cs-tech-header">
            <span className="cs-tech-eyebrow">Stack &amp; Infrastructure</span>
            <h2 className="cs-tech-title">
              All technologies used<span className="dot">.</span>
            </h2>
            <p className="cs-tech-subtitle">
              A modern, production-grade stack chosen for performance, scalability, and developer experience.
            </p>
          </div>

          <div className="cs-tech-marquee-wrap">
            <div className="cs-tech-marquee">
              {[...allTech, ...allTech].map((t: string, i: number) => (
                <span className="cs-tech-marquee-pill" key={`${t}-${i}`}>{t}</span>
              ))}
            </div>
          </div>

          <div className="cs-tech-cards-grid">
            {techGroups.map((g) => (
              <div className="cs-tech-card" key={g.heading}>
                <div className="cs-tech-card-body">
                  <h4 className="cs-tech-card-heading">{g.heading}</h4>
                  <div className="cs-tech-card-pills">
                    {g.items.map((item: string) => (
                      <span className="cs-tech-card-pill" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div
                  className="cs-tech-card-glow"
                  style={{ background: COLOR_MAP[g.heading] ?? "#ff5a1f" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES — only shown when data has keyFeatures */}
      {keyFeatures && keyFeatures.length > 0 && (
        <section className="cs-features">
          <h2 className="cs-features-title">
            Key features<span className="dot">.</span>
          </h2>
          <div className="cs-feature-grid">
            {keyFeatures.map((f: { feature: string; description: string }, i: number) => (
              <div className="cs-feature-item" key={f.feature}>
                <span className="cs-feature-num">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="cs-feature-name">{f.feature}</h4>
                <p className="cs-feature-desc">{f.description}</p>
                {/* <div className="cs-feature-arrow">&#8599;<  /div> */}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ONGOING PARTNERSHIP — CCL */}
      {ongoingPartnership && (
        <section className="cs-partnership">
          <div className="cs-partnership-inner">
            <div className="cs-partnership-content">
              <h2 className="cs-partnership-title">Our Partnership Continues<span className="dot">.</span></h2>
              <p className="cs-partnership-desc">{ongoingPartnership.description}</p>
              <ul className="cs-partnership-list">
                {ongoingPartnership.activities.map((activity: string) => (
                  <li key={activity}>
                    <span className="cs-partnership-check">✓</span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* OUTCOME */}
      <section className="cs-outcome">
        <div className="cs-outcome-inner d-flex">
          <div>
            <img src={outcomeImg} alt="Outcome" height={422}/>
          </div>
          <div className="cs-outcome-content" style={{ gridColumn: "1 / -1" }}>
            <span className="cs-outcome-eyebrow">Results</span>
            <h2 className="cs-outcome-title">
              The outcome<span className="dot">.</span>
            </h2>
            <p className="cs-outcome-desc">
              Real business results delivered through engineering excellence.
            </p>
            <ul className="cs-outcome-list">
              {impacts.map((impact: string) => (
                <li key={impact} className="cs-outcome-item">
                  <span className="cs-outcome-dot" />
                  <div>
                    <strong>{impact}</strong>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* KEY TAKEAWAY — tata-play-fiber, wines-of-nz, doccure */}
      {keyTakeaway && (
        <section className="cs-takeaway">
          <div className="cs-takeaway-inner">
            <span className="cs-takeaway-eyebrow">Key Takeaway</span>
            <blockquote className="cs-takeaway-quote">{keyTakeaway}</blockquote>
          </div>
        </section>
      )}

      {/* FEATURED METRICS — wines-of-nz */}
      {metrics && metrics.length > 0 && (
        <section className="cs-metrics">
          <div className="cs-metrics-inner">
            <h2 className="cs-metrics-title">Featured Metrics<span className="dot">.</span></h2>
            <div className="cs-metrics-grid">
              {metrics.map((m: { metric: string; result: string }) => (
                <div className="cs-metric-card" key={m.metric}>
                  <span className="cs-metric-result">{m.result}</span>
                  <span className="cs-metric-label">{m.metric}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL QUOTE — wines-of-nz */}
      {quote && (
        <section className="cs-final-quote">
          <div className="cs-final-quote-inner">
            <span className="cs-final-quote-mark">&ldquo;</span>
            <p className="cs-final-quote-text">{quote}</p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cs-cta">
        <div className="cs-cta-text">
          <h2>Ready to build the next digital product?</h2>
          <p>
            From SaaS platforms and client portals to AI-powered applications,
            Solvifytech helps businesses turn ideas into scalable digital products.
          </p>
          <a className="cs-cta-button" href={`/${Paths.contactUs}`}>Let's build together</a>
        </div>
      </section>

    </div>
  );
}

/* ─── Page wrapper — useParams → lookup → pass data as prop ── */
export default function CaseStudyPage() {
  const { casestudyId } = useParams<{ casestudyId: string }>();
  const slug = casestudyId ?? "tap1ce";
  const data = CASESTUDY[slug as keyof typeof CASESTUDY];

  if (!data) {
    return (
      <div style={{ padding: "120px 24px", textAlign: "center" }}>
        <h1>Case study not found</h1>
        <p>No case study found for <strong>{slug}</strong>.</p>
      </div>
    );
  }

  return <CaseStudy data={data} />;
}
