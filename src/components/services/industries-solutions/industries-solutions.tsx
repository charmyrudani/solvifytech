import { useState } from "react";
import "./industries-solutions.css";
import { FaArrowRight } from "react-icons/fa";

export default function IndustriesSolutions({ data }: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = data.industries[activeIndex];

  return (
    <section className="is-section">
      <div className="container">
        <div className="is-header animate-fade-in-up">
          <span className="is-tag">{data.tag}</span>
          <h2 className="is-title">{data.title}</h2>
          <p className="is-description">{data.description}</p>
        </div>

        <div className="is-panel animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="is-sidebar">
            {data.industries.map((industry: any, index: number) => (
              <button
                key={index}
                className={`is-sidebar-item${activeIndex === index ? " is-sidebar-item--active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="is-sidebar-label">{industry.title}</span>
                {activeIndex === index && (
                  <span className="is-sidebar-arrow">
                    <FaArrowRight/>
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="is-detail" key={activeIndex}>
            <div className="is-detail-banner animate-fade-in">
              <div className="is-detail-content animate-slide-in-right">
                <h3 className="is-detail-industry-title">{activeIndustry.title}</h3>
                <p className="is-detail-industry-desc">{activeIndustry.description}</p>
              </div>
              <div className="is-detail-image-wrapper animate-slide-in-left">
                <div className="is-detail-image-gradient"></div>
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.title}
                  className="is-detail-image"
                />
              </div>
            </div>

            <div className="is-solutions animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <p className="is-solutions-heading">BUILD SOLUTIONS FOR:</p>
              <ul className="is-solutions-grid">
                {activeIndustry.solutions.map((solution: string, i: number) => (
                  <li key={i} className="is-solution-item animate-fade-in-up" style={{ animationDelay: `${0.15 + i * 0.04}s` }}>
                    <span className="is-solution-dot" />
                    <span className="is-solution-text">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}