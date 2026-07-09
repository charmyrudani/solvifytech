import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './hero-section.css';
import devin from '/images/tool-tech/devin.svg'
import cursor from '/images/tool-tech/cursor.svg'
import cody from '/images/tool-tech/cody.svg'
import copilot from '/images/tool-tech/copilot.svg'
import { GoHome } from 'react-icons/go';

const HeroSection = ({ data }: any) => {
  const hero = data.hero;
  const engineers = data.developmentTeam.engineers;

  const [formData, setFormData] = useState({ fullName: "", email: "", needs: "", });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  return (
    <>
      <section className="services-hero-container py-5">
        <div className="container">
          <nav className="services-breadcrumbs mb-5" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="breadcrumb-link home-icon-link">
                  <GoHome size={21} />
                </Link>
              </li>
              {/* <li className="breadcrumb-item text-muted">Services</li> */}
              <li className="breadcrumb-item active" aria-current="page">
                {hero.serviceName}
              </li>
            </ol>
          </nav>

          <div className="row g-5 align-items-stretch">
            <div className="col-12 col-lg-8 d-flex flex-column justify-content-between">
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

              <div className="d-flex flex-wrap gap-5 mt-4">
                <div className="engineer-showcase-wrapper">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={20}
                    slidesPerView={1}
                  >
                    {engineers?.map((e: any, index: number) => (
                      <SwiperSlide key={index}>
                        <div className="engineer-card">
                          <img src={e.image} alt={e.name} className="engineer-avatar" />
                          <div className="engineer-info">
                            <h3 className="engineer-role">{e.role}</h3>
                            <p className="engineer-name">{e.name}</p>
                            <p className="engineer-exp">{e.experience}</p>
                          </div>
                          <div className="engineer-client">
                            <span className="client-label"> Previous Client </span>
                            <img src={e.company} alt="company" className="client-logo" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="ai-tools-section border-0 pt-0">
                  <span className="ai-tools-title text-uppercase text-muted fw-bold mb-3 d-block">
                    AI Coding Tools We Use
                  </span>
                  <div className="ai-tools-row d-flex align-items-center gap-4">
                    <img src={devin} alt="Devin" className="ai-tool-logo" />
                    <img src={cursor} alt="Cursor" className="ai-tool-logo" />
                    <img src={cody} alt="Cody" className="ai-tool-logo" />
                    <img src={copilot} alt="Copilot" className="ai-tool-logo" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="contact-form-card p-4 ">
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