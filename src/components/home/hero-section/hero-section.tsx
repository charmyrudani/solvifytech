import "./hero-section.css"

export default function HeroSection() {
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
                      <path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z"/>
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
                <button className="hero-btn">
                  Schedule a Call
                </button>

                <div className="summary-card d-flex align-items-center gap-3">
                  <div className="summary-card-sparkle">
                    <svg className="summary-sparkle-svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 2L8.5 6.5L13 8L8.5 9.5L7 14L5.5 9.5L1 8L5.5 6.5L7 2Z"/>
                      <path d="M17 12L18 15L21 16L18 17L17 20L16 17L13 16L16 15L17 12Z"/>
                    </svg>
                  </div>
                  <div className="summary-card-text d-flex flex-column align-items-start">
                    <strong>Ask AI for a summary</strong>
                    <p>of BairesDev</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Wave at the Bottom */}
        <div className="hero-wave position-absolute bottom-0 start-0 w-100 overflow-hidden">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 C360,60 720,20 1080,60 C1260,75 1380,105 1440,120 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Endorsed Logos Section */}
      <section className="endorsed-section py-5 bg-white position-relative">
        <div className="container">
          <h2 className="endorsed-title text-center mb-5">
            Endorsed by engineers. Trusted by CTOs<span className="dot">.</span>
          </h2>
          
          <div className="logos-row d-flex flex-wrap justify-content-center align-items-start gap-4">
            {/* Salesforce */}
            <div className="logo-item">
              <svg className="logo-svg salesforce-logo" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.3 10c-.1 0-.2 0-.3.1C18.2 7.6 15.8 6 13 6c-2.4 0-4.5 1.2-5.7 3.1C7.1 9 6.8 9 6.5 9 4 9 2 11 2 13.5S4 18 6.5 18h12.8c2.1 0 3.7-1.6 3.7-3.7s-1.6-4.3-3.7-4.3z"/>
              </svg>
            </div>

            {/* Adobe */}
            <div className="logo-item">
              <svg className="logo-svg adobe-logo" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.5 3L22 19h-4.8l-2.4-5.5H9.7L7.3 19H2.5L10 3h4.5zm-2.4 4.5l-2.8 6.5h5.5l-2.7-6.5z"/>
              </svg>
            </div>

            {/* Johnson & Johnson */}
            <div className="logo-item jnj-logo">
              <span>Johnson & Johnson</span>
            </div>

            {/* Google */}
            <div className="logo-item has-subtext google-logo d-flex flex-column align-items-center">
              <div className="logo-wrapper">
                <span>Google</span>
              </div>
              <a href="#" className="subtext-link">Read case study</a>
            </div>

            {/* NextRoll */}
            <div className="logo-item has-subtext nextroll-logo d-flex flex-column align-items-center">
              <div className="logo-wrapper">
                <span>Next<strong>Roll</strong></span>
              </div>
              <a href="#" className="subtext-link testimonial-link d-flex align-items-center gap-1">
                Watch testimonial 
                <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </a>
            </div>

            {/* Pinterest */}
            <div className="logo-item has-subtext pinterest-logo d-flex flex-column align-items-center">
              <div className="logo-wrapper d-flex align-items-center gap-1">
                <svg className="pinterest-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.27 2.68 7.9 6.48 9.38-.09-.78-.18-1.98.04-2.83.2-.86 1.3-5.5 1.3-5.5s-.33-.66-.33-1.63c0-1.53.89-2.67 2-2.67.94 0 1.4.7 1.4 1.55 0 .95-.6 2.37-.92 3.69-.26 1.1.55 2 1.63 2 1.96 0 3.47-2.07 3.47-5.06 0-2.65-1.9-4.5-4.63-4.5-3.15 0-5 2.36-5 4.8 0 .95.36 1.97 1.8 2.14.2.02.23-.08.23-.2s-.08-.5-.1-.7c-.03-.13-.15-.17-.23-.23-.97-.46-1.6-1.9-1.6-3.08 0-3.44 2.5-6.62 7.23-6.62 3.8 0 6.74 2.7 6.74 6.32 0 3.77-2.38 6.8-5.68 6.8-1.1 0-2.16-.57-2.5-1.25l-.7 2.6c-.25.95-.92 2.14-1.37 2.87C9.87 21.87 10.9 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
                <span>Pinterest</span>
              </div>
              <a href="#" className="subtext-link">Read case study</a>
            </div>

            {/* Rolls-Royce */}
            <div className="logo-item rr-logo">
              <div className="rr-badge d-flex gap-1 line-height-1">
                <span>R</span>
                <span>R</span>
              </div>
            </div>

            {/* Motorola */}
            <div className="logo-item motorola-logo">
              <svg className="logo-svg" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 17.5c-1.2 0-2.5-1.7-3.3-3.6h1.7c.5 1 1 2 1.6 2s1.1-1 1.6-2h1.7c-.8 1.9-2.1 3.6-3.3 3.6zm-4.4-6c0-1.4 1.4-2.8 2.8-2.8.6 0 1.2.2 1.6.6.4-.4 1-.6 1.6-.6 1.4 0 2.8 1.4 2.8 2.8v1.6h-1.6v-1.6c0-.6-.6-1.2-1.2-1.2s-1.2.6-1.2 1.2v1.6H11v-1.6c0-.6-.6-1.2-1.2-1.2s-1.2.6-1.2 1.2v1.6H7.6v-1.6z"/>
              </svg>
            </div>

            {/* HP */}
            <div className="logo-item hp-logo">
              <div className="hp-badge d-flex align-items-center justify-content-center">
                <span>hp</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}