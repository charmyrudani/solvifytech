import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import './testimonials-section.css';
import testimonial from '/images/hero-section/testimonials_bg3.png'
import tap1ce from '/images/our-work/tap1ce.webp'
import comket from '/images/our-work/comket.webp'
import hgt from '/images/our-work/hgt.webp'
import alwaysCanada from '/images/our-work/always-canada.webp'
import winesOfNZ from '/images/our-work/wines-of-nz.webp'
import navkar from '/images/our-work/navkar.webp'
import { Link } from 'react-router-dom';
import { Paths } from '../../../constants/route-paths.constants';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

interface Testimonial {
  id: number;
  brandName: string;
  logo: string;
  quote: string;
  author?: string;
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
      brandName: 'Tap1ce',
      logo: tap1ce,
      quote: "Solvify Tech developed a modern NFC-powered digital profile platform that exceeded our expectations. Their team delivered a fast, secure, and intuitive solution with exceptional attention to detail and continuous support throughout the project.",
      author: 'Shreyan Ghandhi',
    },
    {
      id: 2,
      brandName: 'Comket Solutions',
      logo: comket,
      quote: "From planning to deployment, Solvify Tech demonstrated outstanding professionalism and technical expertise. They built a scalable business solution that streamlined our operations and significantly improved efficiency.",
      author: 'Jay Shah',
    },
    {
      id: 3,
      brandName: 'HGT',
      logo: hgt,
      quote: "The team at Solvify Tech consistently delivered high-quality development with excellent communication and timely execution. Their commitment to performance, reliability, and long-term support made them a trusted technology partner.",
      author: 'Vipin',
    },
    {
      id: 4,
      brandName: 'Always Canada Group',
      logo: alwaysCanada,
      quote: "Solvify Tech transformed our digital presence with a fast, responsive, and professionally designed platform. Their understanding of our business requirements and dedication to delivering quality results made the entire experience seamless.",
      // author: '',
    },
    {
      id: 5,
      brandName: 'Wines of New Zealand',
      logo: winesOfNZ,
      quote: "Working with Solvify Tech was an outstanding experience. They developed a premium digital solution that perfectly reflected our brand while ensuring exceptional performance, usability, and scalability. Their team was proactive, responsive, and committed to excellence throughout the project.",
      // author: 'Patrick Mee',
    },
    {
      id: 6,
      brandName: 'Navkar Group',
      logo: navkar,
      quote: "Tech delivered a premium digital experience that perfectly represents our brand. Their team combined modern design with powerful functionality, ensuring a seamless user experience while demonstrating professionalism, attention to detail, and commitment to quality.",
      // author: 'Patrick Mee',
    },
  ];

  return (
    <section ref={sectionRef} className="testimonials-section bg-white position-relative">
      <div className="container-fluid px-0">
        <div className="testimonials-main-layout">
          <div className={`testimonials-team-card animate-slide-up ${isVisible ? 'is-visible' : ''}`}>
            <div className="testimonials-img-container">
              <div className="orange-accent-line"></div>
              <img
                src={testimonial}
                alt="BairesDev Team Collaboration"
                className="team-photo"
              />
            </div>
          </div>

          <div className="testimonials-content-col">
            <div className={`testimonials-header animate-slide-up ${isVisible ? 'is-visible' : ''}`}>
              <h2 className="testimonials-title">
                Real Products. Real Business Results.
              </h2>
              <p className="testimonials-subtitle">
                See how we help businesses improve operations, launch new products and create measurable growth through technology.              
              </p>
              <div className="link-wrapper">
                <Link to={`/${Paths.ourWork}`} className="our-hits-link d-inline-flex align-items-center gap-2">
                  Our greatest hits
                  <span className="hits-arrow">→</span>
                </Link>
              </div>
            </div>

            <div className={`testimonials-slider-container animate-slide-up ${isVisible ? 'is-visible' : ''}`}>
              <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                navigation={{ prevEl: '.swiper-btn-prev', nextEl: '.swiper-btn-next', }}
                spaceBetween={24}
                slidesPerView="auto"
                grabCursor={true}
                className="testimonials-swiper"
                breakpoints={{
                  320: { slidesPerView: 1.15, spaceBetween: 16, },
                  576: { slidesPerView: 1.5, spaceBetween: 20, },
                  992: { slidesPerView: 2.2, spaceBetween: 24, },
                  1200: { slidesPerView: 2.5, spaceBetween: 24, },
                  1400: { slidesPerView: 3.2, spaceBetween: 24, }
                }}
              >
                {testimonials.map((t) => (
                  <SwiperSlide key={t.id} className="testimonial-slide-item">
                    <div className="testimonial-card rounded-4 p-4 p-md-5 d-flex flex-column justify-content-between h-100">
                      <div className="card-top-flex d-flex align-items-center justify-content-between mb-4">
                        <div >
                          <img src={t.logo} alt={t.brandName} className="brand-logo-wrapper" />
                        </div>
                      </div>

                      <div className="card-quote-wrapper mb-4">
                        <p className="testimonial-quote">
                          <span className="quote-mark">"</span>
                          {t.quote}
                        </p>
                      </div>

                      <div className="card-author-wrapper mt-auto">
                        <h4 className="author-name mb-1">{t.brandName}</h4>
                        <p className="author-role mb-0">{t.author}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className={`testimonials-nav-controls animate-slide-up ${isVisible ? 'is-visible' : ''}`}>
              <button className="nav-arrow swiper-btn-prev" aria-label="Previous slide">
                <FiArrowLeft className="nav-arrow-svg" size={22} />
              </button>
              <button className="nav-arrow swiper-btn-next" aria-label="Next slide">
                <FiArrowRight className="nav-arrow-svg" size={22} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
