import "./insights.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Paths } from '../../../constants/route-paths.constants';
import { blogPosts } from '../../../data/blogs.data';

export default function Insights() {
  return (
    <section className="insights">
      <div className="insights-container">

        <div className="heading">
          <h2>Latest insights</h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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

            <Link
              to={`/${Paths.blog}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 20px',
                borderRadius: '50px',
                border: '1.5px solid #635bff',
                color: '#635bff',
                fontSize: '14px',
                fontWeight: '600',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              See all
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
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
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <Link to={`/${Paths.blog}/${post.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', width: '100%', height: '100%' }}>
                <div className="card">

                  <div className="image">
                    <img src={post.image} alt={post.title} />

                    <div className="labels">
                      <span className="badge-category">Article</span>
                      <span className={`badge-tag ${post.darkTag ? 'dark' : ''}`}>{post.tag}</span>
                    </div>
                  </div>

                  <div className="content">
                    <div className="title-wrapper">
                      <h3>{post.title}</h3>
                    </div>

                    <div className="author-time">
                      <p className="author">Solvify Tech</p>
                      <div className="time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="clock-icon">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}