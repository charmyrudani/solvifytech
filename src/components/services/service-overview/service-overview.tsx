import { useState, useRef } from "react";
import "./service-overview.css";

function AccordionItem({ service, isActive, onClick }: any) {
  const contentRef = useRef<any>(null);

  return (
    <div className={`so-accordion-item ${isActive ? "so-accordion-item--active" : ""}`}>
      <button
        className="so-accordion-trigger"
        onClick={onClick}
        aria-expanded={isActive}
      >
        <span className="so-accordion-bar" />
        <span className="so-accordion-trigger-title">{service.title}</span>
      </button>

      <div
        className="so-accordion-collapse"
        style={{
          maxHeight: isActive
            ? `${contentRef.current?.scrollHeight ?? 1000}px`
            : "0px",
        }}
      >
        <div className="so-accordion-body" ref={contentRef}>
          {service.description.split("\n\n").map((paragraph: any, i: any) => (
            <p key={i} className="so-accordion-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServiceOverview({ data }: any) {
  const [activeIndex, setActiveIndex] = useState<any>(0);

  if (!data) return null;

  const toggle = (index: any) => {
    setActiveIndex((prev: any) => (prev === index ? -1 : index));
  };

  return (
    <section className="so-section">
      <div className="container">
        <div className="so-grid">
          <div className="so-left">
            <span className="so-tag">{data.tag}</span>
            <h2 className="so-title">{data.title}</h2>
            <p className="so-description">{data.description}</p>
            {data.image && (
              <div className="so-image-wrap">
                <img src={data.image} alt={data.title} className="so-image" />
              </div>
            )}
          </div>

          <div className="so-right">
            <div className="so-accordion-list">
              {data.services?.map((service: any, index: any) => (
                <AccordionItem
                  key={index}
                  service={service}
                  isActive={index === activeIndex}
                  onClick={() => toggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}