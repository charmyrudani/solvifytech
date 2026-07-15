import React from "react";
import { FiTarget, FiLayers, FiMessageSquare, FiUsers, FiCpu } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import "./why-choose-us.css";

interface ChoiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function WhyChooseUs() {
  const choices: ChoiceItem[] = [
    {
      id: "business-first",
      num: "01",
      title: "Business-First Thinking",
      description: "We recommend technology based on your business objectives—not trends or unnecessary complexity.",
      icon: <FiTarget size={24} />,
    },
    {
      id: "end-to-end",
      num: "02",
      title: "End-to-End Expertise",
      description: "Strategy, design, development, testing, deployment and support are managed by one accountable team.",
      icon: <FiLayers size={24} />,
    },
    {
      id: "communication",
      num: "03",
      title: "Transparent Communication",
      description: "Receive regular updates, sprint demonstrations and clear visibility into progress, priorities and risks.",
      icon: <FiMessageSquare size={24} />,
    },
    {
      id: "flexible",
      num: "04",
      title: "Flexible Engagement",
      description: "Choose a dedicated team, fixed-scope project or ongoing development support based on your needs.",
      icon: <FiUsers size={24} />,
    },
    {
      id: "scalable",
      num: "05",
      title: "Scalable Engineering",
      description: "Our solutions are designed for performance, security, maintainability and future growth.",
      icon: <FiCpu size={24} />,
    },
    {
      id: "partnership",
      num: "06",
      title: "Long-Term Partnership",
      description: "We continue supporting and improving your product after its initial launch.",
      icon: <FaHandshake size={24} />
    },
  ];

  return (
    <section className="why-choose-section">
      <div className="container why-choose-container">
        <div className="section-header text-center">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="section-title">
            Why Businesses Choose <span className="text-highlight">Solvifytech</span>
          </h2>
          <p className="section-subtitle">
            We combine strategic thinking, engineering excellence, and customer-first values to deliver premium digital products.
          </p>
        </div>

        <div className="choices-grid">
          {choices.map((item) => (
            <div className="choice-card" key={item.id}>
              <div className="card-top">
                <div className="icon-wrapper">
                  {item.icon}
                </div>
                <span className="card-number">{item.num}</span>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
