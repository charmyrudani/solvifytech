import { useEffect, useRef, useState } from "react"
import { color, techStackData, type TechStackCard } from "./tech-stack"
import "./tech-stack-section.css"
import { Link } from "react-router-dom"
import { FiMonitor, FiSmartphone, FiShield, FiCloud } from "react-icons/fi"
import { LuSparkles } from "react-icons/lu"
import { GrHostMaintenance } from "react-icons/gr"
import { FaFigma, FaRobot, FaSearch } from "react-icons/fa"

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

  const renderIcon = (type: TechStackCard["id"]) => {
    switch (type) {
      case "web-development":
        return <FiMonitor className="icon-svg" size={24} />
      case "custom-software":
        return <LuSparkles className="icon-svg" size={24} />
      case "app-development":
        return <FiSmartphone className="icon-svg" size={24} />
      case "digital-marketing":
        return <FiShield className="icon-svg" size={24} />
      case "it-consulting":
        return <FiCloud className="icon-svg" size={24} />
      case "maintenance-support":
        return <GrHostMaintenance className="icon-svg" size={22} />
      case "seo":
        return <FaSearch className="icon-svg" size={24} />
      case "ui-ux":
        return <FaFigma className="icon-svg" size={24} />
      case "ai-development-automation":
        return <FaRobot className="icon-svg" size={24}/>
    }
  }

  return (
    <section ref={sectionRef} className="tech-stack-section pt-4 bg-white position-relative">
      <div className="container">
        <div className="tech-stack-header d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 mt-3 mt-md-0 gap-3">
          <div className="title-area">
            <h2 className={`mb-0 ${isVisible ? "is-visible" : ""}`}>
              Everything You Need to Build and Scale Your Digital Product
            </h2>
            <p className="tech-subtitle mt-3">
              From initial strategy and product design to development, deployment and ongoing support, our specialists manage the complete digital product lifecycle.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {techStackData.map((card, idx) => (
            <div
              className={`col-12 col-md-6 col-lg-4 d-flex animate-slide-up-card ${isVisible ? "is-visible" : ""}`}
              key={card.id}
              style={{ "--card-idx": idx } as React.CSSProperties}
            >
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
                      {renderIcon(card.id)}
                    </div>
                    <h3 className="tech-title mt-0 md-3 mb-0">{card.title}</h3>

                  </div>
                </div>
                <p className="tech-desc mb-4">{card.description}</p>
                <div className="tech-tags d-flex flex-wrap gap-2 mt-auto">
                  {card.tags.map((tag, idx) => (
                    <Link to="#" className="tech-tag px-3 py-1 rounded-2 text-decoration-none" key={idx}>
                      {tag}
                    </Link>
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

