/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './hero-section.css';
import { AiFillHome } from 'react-icons/ai';

const HeroSection = ({ data }:any ) => {
  const hero = data.hero;
  // const { serviceId } = useParams();  
  
  const [formData, setFormData] = useState({ fullName: "", email: "", needs: "", });
  const [formSubmitted, setFormSubmitted] = useState(false);
  // const [currentSlide, setCurrentSlide] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ fullName: '', email: '', needs: '' });
      }, 5000);
    }
  };

  // const renderToolIcon = (type: string) => {
  //   switch (type) {
  //     case 'cursor':
  //       return (
  //         <svg className="tool-logo-svg" viewBox="0 0 24 24" fill="currentColor">
  //           <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" />
  //         </svg>
  //       );
  //     case 'tabnine':
  //       return (
  //         <svg className="tool-logo-svg tabnine-logo" viewBox="0 0 24 24" fill="currentColor">
  //           <path d="M4 2h16v4H4V2zm2 6h12v4H6V8zm4 6h4v4h-4v-4zm-6 6h16v2H4v-2z" />
  //         </svg>
  //       );
  //     case 'openai':
  //       return (
  //         <svg className="tool-logo-svg" viewBox="0 0 24 24" fill="currentColor">
  //           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  //         </svg>
  //       );
  //     case 'copilot':
  //       return (
  //         <svg className="tool-logo-svg" viewBox="0 0 24 24" fill="currentColor">
  //           <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
  //         </svg>
  //       );
  //     default:
  //       return null;
  //   }
  // };

  // const renderClientLogo = (client: string) => {
  //   switch (client.toLowerCase()) {
  //     case 'ibm':
  //       return (
  //         <div className="client-logo-badge ibm-badge">
  //           <span>I</span><span>B</span><span>M</span>
  //         </div>
  //       );
  //     case 'instructure':
  //       return (
  //         <div className="client-logo-badge instructure-badge">
  //           <span className="instructure-icon">▲</span> INSTRUCTURE
  //         </div>
  //       );
  //     case 'bbva':
  //       return (
  //         <div className="client-logo-badge bbva-badge">
  //           <span>BBVA</span>
  //         </div>
  //       );
  //     default:
  //       return <span>{client}</span>;
  //   }
  // };

  // const STATIC_TOOLS = [
  //   { name: 'Cursor', iconType: 'cursor' },
  //   { name: 'Tabnine', iconType: 'tabnine' },
  //   { name: 'ChatGPT', iconType: 'openai' },
  //   { name: 'GitHub Copilot', iconType: 'copilot' }
  // ];
  
  return (
    <>
      <section className="services-hero-container py-5">
        <div className="container">
          <nav className="services-breadcrumbs mb-5" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="breadcrumb-link home-icon-link">
                  <AiFillHome size={21} />
                </Link>
              </li>
              <li className="breadcrumb-item text-muted">Services</li>
              <li className="breadcrumb-item active" aria-current="page"> 
                {hero.serviceName}
              </li>
            </ol>
          </nav>

          <div className="row g-5 align-items-stretch">
            <div className="col-12 col-lg-7 d-flex flex-column justify-content-between">
              <div className="services-hero-text">
                <span className="services-hero-tag text-uppercase fw-bold tracking-wider">
                  {hero.tagline}
                </span>
                <h1 className="services-hero-title mt-2 mb-3">
                  {hero.title}
                </h1>
                <p className="services-hero-desc text-muted mb-4">
                  {hero.description}
                </p>
              </div>

              {/* <div className="engineer-showcase-wrapper mb-4">
                <div className="engineer-card p-3 d-flex align-items-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120"
                    alt="engineername"
                    className="engineer-avatar me-3"
                  />
                  <div className="flex-grow-1">
                    <div className="engineer-header d-flex justify-content-between align-items-baseline">
                      <span className="engineer-role text-muted fw-semibold">AI developemnt</span>
                      <span className="client-label">Previous Client</span>
                    </div>
                    <div className="engineer-details d-flex justify-content-between align-items-center mt-1">
                      <div>
                        <h4 className="engineer-name mb-0">Engineer Name</h4>
                        <p className="engineer-exp text-muted mb-0">10+ years exp</p>
                      </div>
                      <div className="client-logo-wrapper">
                        {renderClientLogo("ibm")}
                      </div> 
                    </div>
                  </div>
                </div>

                <div className="slider-dots d-flex gap-1 mt-2">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`dot-btn ${currentSlide === index ? 'active' : ''}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="ai-tools-section">
                <span className="ai-tools-title text-uppercase text-muted fw-bold">
                  AI Coding Tools We Use
                </span>
                <div className="ai-tools-row d-flex align-items-center gap-4 mt-3">
                  {STATIC_TOOLS.map((tool, idx) => (
                    <div key={idx} className="ai-tool-item d-flex align-items-center" title={tool.name}>
                      {renderToolIcon(tool.iconType)}
                    </div>
                  ))}
                </div>
              </div> */}
            </div>

            <div className="col-12 col-lg-5">
              <div className="contact-form-card p-4 p-md-5">
                <h3 className="form-title mb-4 fw-bold">
                  Get expert help for your {hero.serviceName} project
                </h3>

                {formSubmitted ? (
                  <div className="alert alert-success text-center py-4 my-3" role="alert">
                    <svg className="success-checkmark mb-3" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <h4 className="fw-bold">Request Received!</h4>
                    <p className="mb-0 text-muted">
                      Thank you, <strong>{formData.fullName}</strong>. Our expert team will reach out to you shortly at <strong>{formData.email}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <div className="form-group">
                      <input
                        type="text"
                        id="fullName"
                        className="form-control"
                        placeholder="Full name"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="name@company.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        id="needs"
                        className="form-control"
                        placeholder="Tell us about your needs."
                        rows={4}
                        value={formData.needs}
                        onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-submit-project w-100 py-3 mt-2 fw-semibold">
                      Jump-start Your Project
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
