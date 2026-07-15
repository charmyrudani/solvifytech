import "./insights.css";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiClock } from "react-icons/fi";
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
                <FiArrowLeft size={20} />
              </button>
              <button className="next" aria-label="Next slide">
                <FiArrowRight size={20} />
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
              <FiArrowRight size={15} />
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
                        <FiClock className="clock-icon" size={14} />
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