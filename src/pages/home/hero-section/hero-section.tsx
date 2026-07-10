import { useNavigate } from "react-router-dom";
import ccl from '/images/our-work/ccl.webp'
import tataPlayFiber from '/images/our-work/tata-play-fiber.webp'
import tap1ce from '/images/our-work/tap1ce.webp'
import winesofnz from '/images/our-work/wines-of-nz.webp'
import marriott from '/images/our-work/marriott.webp'
import vmc from '/images/our-work/vmc.svg'
import goodrich from '/images/our-work/goodrich.webp'
import "./hero-section.css"
import { Paths } from "../../../constants/route-paths.constants";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero position-relative w-100 overflow-hidden d-flex align-items-center">
        <div className="hero-overlay position-absolute start-0 top-0 w-100 h-100"></div>

        <div className="container position-relative z-2">
          <div className="row">
            <div className="col-12 col-lg-7 hero-content">
              <h1>
                Accelerate Your <br />
                Roadmap With Our <br />
                Vetted Nearshore <br />
                <span className="ai-engineers-text">
                  AI
                  <span className="sparkle-wrapper">
                    <svg className="sparkle-svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z" />
                    </svg>
                  </span>
                  {" "}Engineers
                </span>
              </h1>

              <p className="hero-subtitle">
                Access 4,000+ timezone-aligned, AI-augmented software engineers
                across 100+ technologies.
              </p>

              <div className="hero-actions d-flex flex-column align-items-start gap-3">
                <button className="hero-btn" onClick={() => navigate(`/${Paths.contactUs}`)}>
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-wave position-absolute bottom-0 start-0 w-100 overflow-hidden">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          </svg>
        </div>
      </section>

      <section className="endorsed-section py-5 my-5 bg-white position-relative">
        <div className="container">
          <h2 className="endorsed-title text-center mb-5">
            Endorsed by engineers. Trusted by CTOs<span className="dot">.</span>
          </h2>

          <div className="logos-row d-flex flex-wrap justify-content-center align-items-start gap-5">
            <div className="logo-item">
              <img className="logo-svg salesforce-logo" src={goodrich} alt="goodrich" />
            </div>
            <div className="logo-item">
              <img className="logo-svg salesforce-logo" src={ccl} alt="CCL" />
            </div>
            <div className="logo-item">
              <img className="logo-svg salesforce-logo" src={tataPlayFiber} alt="Tata Play Fiber" />
            </div>

            <div className="logo-item">
              <img className="logo-svg salesforce-logo" src={winesofnz} alt="Wines Of NZ" />
            </div>
            <div className="logo-item">
              <img className="logo-svg salesforce-logo" src={marriott} alt="Marriott" />
            </div>
            <div className="logo-item">
              <img className="logo-svg salesforce-logo" src={tap1ce} alt="Tap1ce" />
            </div>

            <div className="logo-item">
              <img className="logo-svg salesforce-logo" src={vmc} alt="VMC" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}