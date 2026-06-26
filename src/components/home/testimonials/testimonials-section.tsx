import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import './testimonials-section.css';

// Testimonial details interface
interface Testimonial {
  id: number;
  brandName: string;
  logo: React.ReactNode;
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      brandName: 'Rolls-Royce',
      logo: (
        <svg viewBox="0 0 160 36" className="brand-logo-svg rolls-royce-logo" fill="currentColor">
          <rect x="0" y="3" width="22" height="30" rx="3" fill="#181c24" />
          <text x="6" y="19" fontFamily="serif" fontSize="12" fill="#fff" fontWeight="bold">R</text>
          <text x="11" y="28" fontFamily="serif" fontSize="12" fill="#fff" fontWeight="bold">R</text>
          <text x="32" y="24" fontFamily="'Outfit', sans-serif" fontSize="17" fontWeight="700" fill="#181c24" letterSpacing="-0.3">Rolls-Royce</text>
        </svg>
      ),
      quote: "Repeat Business is the best testament to a team's ability to perform, and I have no hesitation in hiring them again. BairesDev's pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum towards achieving our objectives.",
      author: 'Brad Mabry',
      role: 'Product Manager at Rolls Royce',
    },
    {
      id: 2,
      brandName: 'IQVIA',
      logo: (
        <svg viewBox="0 0 160 36" className="brand-logo-svg iqvia-logo" fill="currentColor">
          <rect x="0" y="11" width="18" height="2.5" fill="#0072C6" />
          <rect x="3" y="16.5" width="15" height="2.5" fill="#0072C6" />
          <rect x="0" y="22" width="18" height="2.5" fill="#0072C6" />
          <rect x="5" y="27.5" width="13" height="2.5" fill="#0072C6" />
          <text x="24" y="27" fontFamily="'Outfit', sans-serif" fontSize="22" fontWeight="700" fill="#0072C6" letterSpacing="-0.5">IQVIA</text>
        </svg>
      ),
      quote: "BairesDev provides amazing development and design resourcing, along with best in class account management support. We were able to speed up product and design and delivery while reducing our costs. BairesDev has been hands down the best vendor decision my team has made.",
      author: 'Adam Isley',
      role: 'Director of Digital Strategy',
    },
    {
      id: 3,
      brandName: 'INSTRUCTURE',
      logo: (
        <svg viewBox="0 0 160 36" className="brand-logo-svg instructure-logo" fill="currentColor">
          <path d="M4,12 L10,15 L7,22 L1,19 Z" fill="#E05A47" />
          <path d="M10,15 L16,12 L18,19 L12,22 Z" fill="#F8A825" />
          <path d="M7,22 L12,22 L10,29 L5,29 Z" fill="#0096BE" />
          <text x="24" y="24" fontFamily="'Outfit', sans-serif" fontSize="14" fontWeight="800" fill="#13556E" letterSpacing="0.8">INSTRUCTURE</text>
        </svg>
      ),
      quote: "BairesDev is a trustworthy, knowledgeable, and adaptable development partner. They also know how to push back and ask questions when appropriate, which is a cornerstone of our corporate culture and really adds value.",
      author: 'Matt Mecham',
      role: 'Program Manager',
    },
    {
      id: 4,
      brandName: 'NextRoll',
      logo: (
        <svg viewBox="0 0 160 36" className="brand-logo-svg nextroll-logo" fill="currentColor">
          <path d="M4,18 C4,12.5 8.5,8 14,8 C18,8 20.5,10.5 22,13.5 L17.5,16 C16.5,14.5 15,13.5 13.5,13.5 C11,13.5 9,15.5 9,18 C9,20.5 11,22.5 13.5,22.5 C16,22.5 17,21 18.5,19.5 L23,21.5 C21,25 17.5,28 13.5,28 C8.5,28 4,23.5 4,18 Z" fill="#D81B60" />
          <text x="28" y="24" fontFamily="'Outfit', sans-serif" fontSize="19" fontWeight="700" fill="#181c24" letterSpacing="-0.5">NextRoll</text>
        </svg>
      ),
      quote: "By seamlessly integrating with our internal team, they helped us achieve key milestones while maintaining the same standard expected of our own employees. Their agile engineering methods, reliability, and responsiveness have strengthened the partnership.",
      author: 'Patrick Mee',
      role: 'VP of Engineering',
    },
    {
      id: 5,
      brandName: 'NextRoll',
      logo: (
        <svg viewBox="0 0 160 36" className="brand-logo-svg nextroll-logo" fill="currentColor">
          <path d="M4,18 C4,12.5 8.5,8 14,8 C18,8 20.5,10.5 22,13.5 L17.5,16 C16.5,14.5 15,13.5 13.5,13.5 C11,13.5 9,15.5 9,18 C9,20.5 11,22.5 13.5,22.5 C16,22.5 17,21 18.5,19.5 L23,21.5 C21,25 17.5,28 13.5,28 C8.5,28 4,23.5 4,18 Z" fill="#D81B60" />
          <text x="28" y="24" fontFamily="'Outfit', sans-serif" fontSize="19" fontWeight="700" fill="#181c24" letterSpacing="-0.5">NextRoll</text>
        </svg>
      ),
      quote: "By seamlessly integrating with our internal team, they helped us achieve key milestones while maintaining the same standard expected of our own employees. Their agile engineering methods, reliability, and responsiveness have strengthened the partnership.",
      author: 'Patrick Mee',
      role: 'VP of Engineering',
    },{
      id: 6,
      brandName: 'NextRoll',
      logo: (
        <svg viewBox="0 0 160 36" className="brand-logo-svg nextroll-logo" fill="currentColor">
          <path d="M4,18 C4,12.5 8.5,8 14,8 C18,8 20.5,10.5 22,13.5 L17.5,16 C16.5,14.5 15,13.5 13.5,13.5 C11,13.5 9,15.5 9,18 C9,20.5 11,22.5 13.5,22.5 C16,22.5 17,21 18.5,19.5 L23,21.5 C21,25 17.5,28 13.5,28 C8.5,28 4,23.5 4,18 Z" fill="#D81B60" />
          <text x="28" y="24" fontFamily="'Outfit', sans-serif" fontSize="19" fontWeight="700" fill="#181c24" letterSpacing="-0.5">NextRoll</text>
        </svg>
      ),
      quote: "By seamlessly integrating with our internal team, they helped us achieve key milestones while maintaining the same standard expected of our own employees. Their agile engineering methods, reliability, and responsiveness have strengthened the partnership.",
      author: 'Patrick Mee',
      role: 'VP of Engineering',
    },
  ];

  return (
    <section ref={sectionRef} className="testimonials-section bg-white position-relative">
      <div className="container-fluid px-0">
        <div className="testimonials-main-layout">
          {/* Left Column: Overlapping Background Team Photo */}
          <div className={`testimonials-team-card animate-slide-up ${isVisible ? 'is-visible' : ''}`}>
            <div className="testimonials-img-container">
              <div className="orange-accent-line"></div>
              <img 
                src="/src/assets/image/testimonials_bg1.png" 
                alt="BairesDev Team Collaboration" 
                className="team-photo"
              />
            </div>
          </div>

          {/* Right Column: Title block and Swiper block */}
          <div className="testimonials-content-col">
            <div className={`testimonials-header animate-slide-up ${isVisible ? 'is-visible' : ''}`}>
              <h2 className="testimonials-title">
                We've stopped counting. Over <br />
                500 brands count on us<span className="orange-dot">.</span>
              </h2>
              <p className="testimonials-subtitle">
                1,200+ projects executed successfully and an average relationship of over 3 years.
              </p>
              <div className="link-wrapper">
                <a href="#" className="our-hits-link d-inline-flex align-items-center gap-2">
                  Our greatest hits 
                  <span className="hits-arrow">→</span>
                </a>
              </div>
            </div>

            {/* Carousel Slider */}
            <div className={`testimonials-slider-container animate-slide-up ${isVisible ? 'is-visible' : ''}`}>
              <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                navigation={{
                  prevEl: '.swiper-btn-prev',
                  nextEl: '.swiper-btn-next',
                }}
                spaceBetween={24}
                slidesPerView="auto"
                grabCursor={true}
                className="testimonials-swiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1.15,
                    spaceBetween: 16,
                  },
                  576: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  992: {
                    slidesPerView: 2.2,
                    spaceBetween: 24,
                  },
                  1200: {
                    slidesPerView: 2.5,
                    spaceBetween: 24,
                  },
                  1400: {
                    slidesPerView: 3.2,
                    spaceBetween: 24,
                  }
                }}
              >
                {testimonials.map((t) => (
                  <SwiperSlide key={t.id} className="testimonial-slide-item">
                    <div className="testimonial-card rounded-4 p-4 p-md-5 d-flex flex-column justify-content-between h-100">
                      {/* Top section: Logo + arrow link */}
                      <div className="card-top-flex d-flex align-items-center justify-content-between mb-4">
                        <div className="brand-logo-wrapper">
                          {t.logo}
                        </div>
                        <div className="arrow-circle-link">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="card-arrow-icon">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </div>
                      </div>

                      {/* Middle section: Quote */}
                      <div className="card-quote-wrapper mb-4">
                        <p className="testimonial-quote">
                          <span className="quote-mark">"</span>
                          {t.quote}
                        </p>
                      </div>

                      {/* Bottom section: Author */}
                      <div className="card-author-wrapper mt-auto">
                        <h4 className="author-name mb-1">{t.author}</h4>
                        <p className="author-role mb-0">{t.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Navigation buttons */}
            <div className={`testimonials-nav-controls animate-slide-up ${isVisible ? 'is-visible' : ''}`}>
              <button className="nav-arrow swiper-btn-prev" aria-label="Previous slide">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="nav-arrow-svg">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button className="nav-arrow swiper-btn-next" aria-label="Next slide">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="nav-arrow-svg">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
