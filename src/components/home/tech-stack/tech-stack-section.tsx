import { useEffect, useRef, useState } from "react"
import { color, techStackData, type TechStackCard } from "./tech-stack"
import "./tech-stack-section.css"

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

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
            <path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z" />
            <path d="M18 14L19.5 18.5L24 20L19.5 21.5L18 26L16.5 21.5L12 20L16.5 18.5L18 14Z" />
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
    <section ref={sectionRef} className="tech-stack-section py-5 bg-white position-relative">
      <div className="container">
        <div className="tech-stack-header d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
          <div className="title-area">
            <h2 className={`mb-0 animate-slide-up ${isVisible ? "is-visible" : ""}`}>
              Get full-stack coverage.<br />
              Unblock execution across the SDLC<span className="dot">.</span>
            </h2>
          </div>
          <div className="link-area">
            <a href="#" className={`everything-link d-inline-flex align-items-center gap-2 animate-slide-up ${isVisible ? "is-visible" : ""}`}>
              Everything we do
              <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="row g-4">
          {techStackData.map((card, idx) => (
            <div
              className={`col-12 col-md-6 col-lg-4 d-flex animate-slide-up-card ${isVisible ? "is-visible" : ""}`}
              key={card.id}
              style={{ "--card-idx": idx } as React.CSSProperties}
            >
              {/* <div 
                className="tech-card d-flex flex-column align-items-start p-5 w-100 h-100 rounded-4"
                data-category={card.id}
              > */}
              <div
                className="tech-card d-flex flex-column align-items-start p-5 w-100 h-100 rounded-4"
                style={
                  {
                    "--category-color": color,
                    "--category-border-light": `${color}30`,
                    "--category-bg-hover": `${color}10`,
                  } as React.CSSProperties
                }
              >
                <div className="card-header-flex mb-3 d-flex flex-row flex-md-column align-items-center align-items-md-start gap-3 w-100">
                  <div className="d-flex gap-3 align-items-center justify-content-center">

                    <div className="tech-icon d-flex align-items-center justify-content-center" style={{ backgroundColor: color }}>
                      {renderIcon(card.iconType)}
                    </div>
                    <h3 className="tech-title mt-0 md-3 mb-0">{card.title}</h3>

                  </div>
                </div>
                <p className="tech-desc mb-4">{card.description}</p>
                <div className="tech-tags d-flex flex-wrap gap-2 mt-auto">
                  {card.tags.map((tag, idx) => (
                    <a href="#" className="tech-tag px-3 py-1 rounded-2 text-decoration-none" key={idx}>
                      {tag}
                    </a>
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

