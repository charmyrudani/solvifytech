import './hero-project-banner.css';
import { Link } from 'react-router-dom';
import { Paths } from '../../../constants/route-paths.constants';

export default function HeroProjectBanner() {
  return (
    <section className="hero-banner-section">
      <div className="container hero-banner-container">
        <div className="hb-left">
          <h2 className="hb-heading">
            Have a Product Idea or Business Challenge?<br />
            <span className="banner-subtitle">Let’s explore how the right combination of software, AI and automation can move your business forward.</span>
          </h2>
          <div className="hb-btn-group mt-5">
            <Link to={Paths.contactUs} className="hb-cta-btn">
              Book a Free Discovery Call
            </Link>

            <a href="mailto:hello@solvifytech.in" className="hb-email-btn">
              Email Us at hello@solvifytech.in
            </a>
          </div>
        </div>

        <div className="hb-right">
          <div className="hb-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Team collaborating on software development"
            />
          </div>
        </div>
      </div>
    </section>
  );
}