import "./insights.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const insights = [
  {
    image: "/images/blog1.png",
    category: "Article",
    tag: "CMS",
    title: "Why your website project is actually a content strategy problem",
    author: "Markus Schork",
    time: "14 min read",
    darkTag: false,
  },
  {
    image: "/images/blog2.png",
    category: "Article",
    tag: "AI + data",
    title: "AI in eCommerce: Start with the friction",
    author: "Markus Schork",
    time: "8 min read",
    darkTag: false,
  },
  {
    image: "/images/blog3.png",
    category: "Article",
    tag: "AI + data",
    title: "Fireside chat with Cost Plus Drugs: Building technology for mission-driven businesses",
    author: "Markus Schork",
    time: "12 min read",
    darkTag: true,
  },
  {
    image: "/images/blog4.png",
    category: "Article",
    tag: "Unified commerce",
    title: "Codal wins the 2026 Connected Commerce Award",
    author: "Markus Schork",
    time: "6 min read",
    darkTag: true,
  },
  {
    image: "/images/blog1.png",
    category: "Article",
    tag: "CMS",
    title: "Another Article",
    author: "Markus Schork",
    time: "10 min read",
    darkTag: false,
  },
];

export default function Insights() {
  return (
    <section className="insights">
      <div className="insights-container">

        <div className="heading">
          <h2>Latest insights</h2>

          <div className="custom-nav">
            <button className="prev" aria-label="Previous slide">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button className="next" aria-label="Next slide">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          spaceBetween={28}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1, },
            768: { slidesPerView: 2, },
            1100: { slidesPerView: 3, },
            1400: { slidesPerView: 4, },
          }}
        >
          {insights.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card">

                <div className="image">
                  <img src={item.image} alt={item.title} />

                  <div className="labels">
                    <span className="badge-category">{item.category}</span>
                    <span className={`badge-tag ${item.darkTag ? 'dark' : ''}`}>{item.tag}</span>
                  </div>
                </div>

                <div className="content">
                  <div className="title-wrapper">
                    <h3>{item.title}</h3>
                  </div>

                  <div className="author-time">
                    {item.author && <p className="author">{item.author}</p>}
                    {item.time && (
                      <div className="time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="clock-icon">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>{item.time}</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}