import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './hero-section.css';
import emailjs from "@emailjs/browser";
import devin from '/images/tool-tech/devin.svg'
import cursor from '/images/tool-tech/cursor.svg'
import cody from '/images/tool-tech/cody.svg'
import copilot from '/images/tool-tech/copilot.svg'
import { GoHome } from 'react-icons/go';
import { FiCheckCircle } from 'react-icons/fi';
import { developmentTeam } from '../../../data/development-team/development-team';

const HeroSection = ({ data }: any) => {
  const hero = data.hero;
  const engineers = developmentTeam.engineers;

  const [formData, setFormData] = useState({ fullName: "", email: "", needs: "", });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TECHNOLOGY_TEMPLATE_ID,
        {
          full_name: formData.fullName,
          email: formData.email,
          needs: formData.needs,
          service_name: hero.serviceName,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setFormSubmitted(true);

      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          needs: "",
        });
      }, 5000);
    } catch (error) {
      console.error(error);
      alert("Failed to send inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
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
              <li className="breadcrumb-item active" aria-current="page">
                {hero.serviceName}
              </li>
            </ol>
          </nav>

          <div className="row g-5 align-items-stretch">
            <div className="hs-hero col-12 col-lg-8 d-flex flex-column justify-content-between">
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
                            <span className="client-label"> Previous Project </span>
                            <img src={e.project} alt="project" className="client-logo" />
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
              <div className="contact-form-card p-4">
                 <h3 className="form-title mb-4 fw-bold">
                      Get expert help for your {hero.serviceName} project
                    </h3>
                {formSubmitted ? (
                  <div className="thank-you-container text-center py-5 d-flex flex-column align-items-center justify-content-center" role="alert">
                    <div className="success-icon-wrapper mb-4">
                      <FiCheckCircle className="success-checkmark" size={64} />
                    </div>
                    <h3 className="thank-you-title fw-bold mb-3">Request Received!</h3>
                    <p className="thank-you-text text-muted mb-0">
                      Thank you, <strong className="text-dark">{formData.fullName}</strong>. Our expert team will reach out to you shortly at <strong className="text-dark">{formData.email}</strong>.
                    </p>
                  </div>
                ) : (
                  <>                   
                    <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                      <div className="form-group">
                        <input
                          type="text"
                          id="fullName"
                          className="form-control"
                          placeholder="Full name"
                          required
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
                          value={formData.needs}
                          onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        className="btn btn-submit-project w-100 py-3 mt-2 fw-semibold d-flex align-items-center justify-content-center gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span>Sending...</span>
                          </>
                        ) : (
                          "Jump-start Your Project"
                        )}
                      </button>
                    </form>
                  </>
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