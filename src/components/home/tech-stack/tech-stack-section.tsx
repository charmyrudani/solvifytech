import { techStackData, type TechStackCard } from "./tech-stack"
import "./tech-stack.css"

export default function TechStack() {
  const renderIcon = (type: TechStackCard["iconType"]) => {
    switch (type) {
      case "frontend":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <path d="M10 8l-2 2 2 2" />
            <path d="M14 8l2 2-2 2" />
          </svg>
        )
      case "backend":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 5c0 1.66 4 3 9 3s9-1.34 9-3" />
            <path d="M3 5c0-1.66 4-3 9-3s9 1.34 9 3" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        )
      case "ai":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
            <path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z"/>
            <path d="M18 14L19.5 18.5L24 20L19.5 21.5L18 26L16.5 21.5L12 20L16.5 18.5L18 14Z"/>
          </svg>
        )
      case "mobile":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        )
      case "qa":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 11l2 2 4-4" />
          </svg>
        )
      case "cloud":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          </svg>
        )
    }
  }

  return (
    <section className="tech-stack-section py-5 bg-white position-relative">
      <div className="container">
        <div className="tech-stack-header d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
          <div className="title-area">
            <h2 className="mb-0">
              Get full-stack coverage.<br />
              Unblock execution across the SDLC<span className="dot">.</span>
            </h2>
          </div>
          <div className="link-area">
            <a href="#" className="everything-link d-inline-flex align-items-center gap-2">
              Everything we do 
              <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="row g-4">
          {techStackData.map((card) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={card.id}>
              <div className="tech-card d-flex flex-column align-items-start p-5 w-100 h-100 rounded-4">
                <div className="tech-icon d-flex align-items-center justify-content-center" style={{ backgroundColor: card.color }}>
                  {renderIcon(card.iconType)}
                </div>
                <h3 className="tech-title mt-4 mb-2">{card.title}</h3>
                <p className="tech-desc mb-4">{card.description}</p>
                <div className="tech-tags d-flex flex-wrap gap-2 mt-auto">
                  {card.tags.map((tag, idx) => (
                    <span className="tech-tag px-3 py-1 rounded-2" key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
