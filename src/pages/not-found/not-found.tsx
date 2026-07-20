import { Link, useNavigate } from 'react-router-dom';
import { FiHome, FiLayers, FiBriefcase, FiMail, FiArrowLeft } from 'react-icons/fi';
import './not-found.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="nf-page-container">
      <div className="nf-decor-blur-1"></div>
      <div className="nf-decor-blur-2"></div>

      <div className="nf-content-wrapper">
        <div className="nf-hero-area">
          <div className="nf-huge-badge">404</div>
          <h1 className="nf-main-heading"> Page Not Found </h1>
          <p className="nf-subheading">
            The page you are looking for has either drifted into cyberspace or never existed in the first place. Don't worry, we've mapped out some quick routes back.
          </p>

          <div className="nf-primary-actions">
            <button onClick={() => navigate(-1)} className="nf-btn-back">
              <FiArrowLeft className="nf-btn-icon" /> Go Back
            </button>
            <Link to="/" className="nf-btn-home">
              <FiHome className="nf-btn-icon" /> Take Me Home
            </Link>
          </div>
        </div>

        <div className="nf-destination-section">
          <h3 className="nf-dest-title">Or explore one of our popular destinations:</h3>
          <div className="nf-dest-grid">
            <Link to="/" className="nf-dest-card">
              <div className="nf-dest-icon-box">
                <FiHome />
              </div>
              <div className="nf-dest-info">
                <h4>Homepage</h4>
                <p>Return to the main landing page and start fresh.</p>
              </div>
            </Link>

            <Link to="/services" className="nf-dest-card">
              <div className="nf-dest-icon-box">
                <FiLayers />
              </div>
              <div className="nf-dest-info">
                <h4>Our Services</h4>
                <p>Discover our AI development, web, & mobile capabilities.</p>
              </div>
            </Link>

            <Link to="/our-work" className="nf-dest-card">
              <div className="nf-dest-icon-box">
                <FiBriefcase />
              </div>
              <div className="nf-dest-info">
                <h4>Our Work</h4>
                <p>Browse our client success stories and case studies.</p>
              </div>
            </Link>

            <Link to="/contact-us" className="nf-dest-card">
              <div className="nf-dest-icon-box">
                <FiMail />
              </div>
              <div className="nf-dest-info">
                <h4>Get in Touch</h4>
                <p>Have questions? Reach out to our team directly.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
