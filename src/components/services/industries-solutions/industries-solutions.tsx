import { useState } from "react";
import "./industries-solutions.css";
import { FaArrowRight } from "react-icons/fa";

export default function IndustriesSolutions({ data }: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = data.industries[activeIndex];

  const renderDetail = (industry: any, keyVal: any) => (
    <div className="is-detail" key={keyVal}>
      <div className="is-detail-banner animate-fade-in">
        <div className="is-detail-content animate-slide-in-right">
          <h3 className="is-detail-industry-title">{industry.title}</h3>
          <p className="is-detail-industry-desc">{industry.description}</p>
        </div>
        <div className="is-detail-image-wrapper animate-slide-in-left">
          <div className="is-detail-image-gradient"></div>
          <img
            src={industry.image}
            alt={industry.title}
            className="is-detail-image"
          />
        </div>
      </div>

      <div className="is-solutions animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
        <p className="is-solutions-heading">BUILD SOLUTIONS FOR:</p>
        <ul className="is-solutions-grid">
          {industry.solutions.map((solution: string, i: number) => (
            <li key={i} className="is-solution-item animate-fade-in-up" style={{ animationDelay: `${0.15 + i * 0.04}s` }}>
              <span className="is-solution-dot" />
              <span className="is-solution-text">{solution}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

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
              <div key={index} className="is-sidebar-item-wrapper">
                <button
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
                {activeIndex === index && (
                  <div className="is-mobile-detail-container">
                    {renderDetail(industry, index)}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="is-desktop-detail-container">
            {renderDetail(activeIndustry, activeIndex)}
          </div>
        </div>
      </div>
    </section>
  );
}