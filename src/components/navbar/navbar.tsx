import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '/images/logo/solvify-tech-black.webp';
import './navbar.css';
import { Paths } from '../../constants/route-paths.constants';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveAccordion, setMobileActiveAccordion] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close menus when route changes
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setMobileActiveAccordion(null);
  }

  // Track scroll position to change background transparency or shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(null);
    }
  };

  const toggleMobileAccordion = (menu: string) => {
    if (mobileActiveAccordion === menu) {
      setMobileActiveAccordion(null);
    } else {
      setMobileActiveAccordion(menu);
    }
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''} ${activeDropdown ? 'menu-open' : ''}`}>
        <div className="navbar-container">
          {/* Logo Section */}
          <div className="navbar-logo-area">
            <Link to="/" className="navbar-logo-link" aria-label="BairesDev home">
              <img
                src={logo}
                alt="SolvifyTech"
                className="navbar-logo-img"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-navbar-nav" aria-label="BairesDev main navigation">
            <ul className="navbar-menu-list">
              {/* SERVICES DROPDOWN */}
              <li
                className="navbar-menu-item dropdown-trigger"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/services" className={`navbar-link-btn ${activeDropdown === 'services' ? 'active' : ''}`}>
                  Services
                  <svg className={`chevron-icon ${activeDropdown === 'services' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                </Link>

                {/* SERVICES MEGAMENU */}
                <div className={`megamenu-dropdown ${activeDropdown === 'services' ? 'visible' : ''}`}>
                  <div className="megamenu-inner-grid megamenu-services-grid">
                    {/* Left Panel */}
                    <div className="megamenu-left-panel">
                      <h3 className="megamenu-title">Services</h3>
                      <p className="megamenu-subtitle">
                        Get software development services, built around your needs:
                      </p>
                      <div className="megamenu-quick-links">
                        <Link to="/services" className="quick-link">Staff Augmentation</Link>
                        <Link to="/services" className="quick-link">Dedicated Teams</Link>
                        <Link to="/services" className="quick-link">Software Outsourcing</Link>
                        <Link to="/services" className="quick-link">AI Transformation</Link>
                      </div>
                      <div className="megamenu-case-study">
                        <img
                          src="https://assets.bairesdev.com//image/upload/c_limit,w_120/fl_sanitize/v1/www/core/rolls_royce_default_6583f2d285.svg"
                          alt="Rolls Royce"
                          className="case-study-client-logo"
                        />
                        <p className="case-study-description">
                          We built an app for real-time nuclear plant monitoring. <Link to="/our-work" className="case-study-link">Read case study.</Link>
                        </p>
                      </div>
                    </div>

                    <div className="megamenu-middle-panel">
                      <span className="megamenu-section-header">Top Services</span>
                      <div className="megamenu-links-list">
                        <Link to={`${Paths.services}/${Paths.aiDevelopment}`} className="grid-link">AI Development</Link>
                        <Link to={`${Paths.services}/${Paths.shopifyDevelopment}`} className="grid-link">Shopify Development</Link>
                        <Link to={`${Paths.services}/${Paths.erpDevelopment}`} className="grid-link">ERP Development</Link>
                        <Link to={`${Paths.services}/${Paths.webDevelopment}`} className="grid-link">Web Development</Link>
                        <Link to={`${Paths.services}/${Paths.appDevelopment}`} className="grid-link">App Development</Link>
                        <Link to={`${Paths.services}/${Paths.uiUxDesign}`} className="grid-link">UI/UX Design</Link>
                        <Link to={`${Paths.services}/${Paths.cloudDevOps}`} className="grid-link">Cloud & DevOps</Link>
                      </div>
                    </div>

                    <div className="megamenu-right-panel">
                      <span className="megamenu-section-header">AI & Automation</span>
                      <div className="megamenu-links-list">
                        <Link to={`${Paths.services}/${Paths.aiAgents}`} className="grid-link">AI Agents</Link>
                        <Link to={`${Paths.services}/${Paths.chatbots}`} className="grid-link">Chatbots</Link>
                        <Link to={`${Paths.services}/${Paths.workflowAutomation}`} className="grid-link">Workflow Automation</Link>
                        <Link to={`${Paths.services}/${Paths.openaiIntegration}`} className="grid-link">OpenAI Integration</Link>
                        <Link to={`${Paths.services}/${Paths.n8nAutomation}`} className="grid-link">n8n Automation</Link>
                        <Link to={`${Paths.services}/${Paths.whatsappAutomation}`} className="grid-link">WhatsApp Automation</Link>
                        <Link to={`${Paths.services}/${Paths.aiVoiceBots}`} className="grid-link">AI Voice Bots</Link>
                      </div>
                    </div><div className="megamenu-right-panel">
                      <span className="megamenu-section-header">Enterprise</span>
                      <div className="megamenu-links-list">
                        <Link to={`${Paths.services}/${Paths.erpDevelopment}`} className="grid-link">ERP Development</Link>
                        <Link to={`${Paths.services}/${Paths.crmSystems}`} className="grid-link">CRM Systems</Link>
                        <Link to={`${Paths.services}/${Paths.saasDevelopment}`} className="grid-link">SaaS Development</Link>
                        <Link to={`${Paths.services}/${Paths.digitalTransformation}`} className="grid-link">Digital Transformation</Link>
                        <Link to={`${Paths.services}/${Paths.businessIntelligence}`} className="grid-link">Business Intelligence</Link>
                        <Link to={`${Paths.services}/${Paths.cloudMigration}`} className="grid-link">Cloud Migration</Link>
                        <Link to={`${Paths.services}/${Paths.devOpsConsulting}`} className="grid-link">DevOps Consulting</Link>
                      </div>
                    </div><div className="megamenu-right-panel">
                      <span className="megamenu-section-header">Marketing</span>
                      <div className="megamenu-links-list">
                        <Link to={`${Paths.services}/${Paths.seo}`} className="grid-link">SEO</Link>
                        <Link to={`${Paths.services}/${Paths.linkedinMarketing}`} className="grid-link">LinkedIn Marketing</Link>
                        <Link to={`${Paths.services}/${Paths.googleAds}`} className="grid-link">Google Ads</Link>
                        <Link to={`${Paths.services}/${Paths.socialMediaMarketing}`} className="grid-link">Social Media Marketing</Link>
                        <Link to={`${Paths.services}/${Paths.emailMarketing}`} className="grid-link">Email Marketing</Link>
                        <Link to={`${Paths.services}/${Paths.leadGeneration}`} className="grid-link">Lead Generation</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* TECHNOLOGIES DROPDOWN */}
              <li
                className="navbar-menu-item dropdown-trigger"
                onMouseEnter={() => handleMouseEnter('technologies')}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/technologies" className={`navbar-link-btn ${activeDropdown === 'technologies' ? 'active' : ''}`}>
                  Technologies
                  <svg className={`chevron-icon ${activeDropdown === 'technologies' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                </Link>

                {/* TECHNOLOGIES MEGAMENU */}
                <div className={`megamenu-dropdown ${activeDropdown === 'technologies' ? 'visible' : ''}`}>
                  <div className="megamenu-inner-grid">
                    {/* Left Panel */}
                    <div className="megamenu-left-panel">
                      <h3 className="megamenu-title">Technologies</h3>
                      <p className="megamenu-subtitle">
                        Get experts in 100+ technologies. Cover any tech stack.
                      </p>
                      <div className="megamenu-quick-links">
                        <Link to="/technologies" className="quick-link">Hire Software Developers</Link>
                        <Link to="/technologies" className="quick-link">Top 1% Talent</Link>
                      </div>
                      <div className="megamenu-case-study">
                        <img
                          src="https://assets.bairesdev.com//image/upload/c_limit,w_120/fl_sanitize/v1/www/static/clientlogos/urban-outfitters_fjfyfq.svg"
                          alt="Urban Outfitters"
                          className="case-study-client-logo"
                        />
                        <p className="case-study-description">
                          We optimized website performance, leading to 38% increase in net profits. <Link to="/our-work" className="case-study-link">Read case study.</Link>
                        </p>
                      </div>
                    </div>

                    {/* Middle/Right Tech Grid (Extended layout) */}
                    <div className="megamenu-middle-panel w-full-grid">
                      <span className="megamenu-section-header">Top Technologies</span>
                      <div className="megamenu-links-grid grid-cols-3">
                        <Link to="/technologies" className="grid-link">.NET</Link>
                        <Link to="/technologies" className="grid-link">AI</Link>
                        <Link to="/technologies" className="grid-link">Angular</Link>
                        <Link to="/technologies" className="grid-link">AWS</Link>
                        <Link to="/technologies" className="grid-link">C#</Link>
                        <Link to="/technologies" className="grid-link">C++</Link>
                        <Link to="/technologies" className="grid-link">Django</Link>
                        <Link to="/technologies" className="grid-link">Golang</Link>
                        <Link to="/technologies" className="grid-link">Google Cloud</Link>
                        <Link to="/technologies" className="grid-link">Java</Link>
                        <Link to="/technologies" className="grid-link">JavaScript</Link>
                        <Link to="/technologies" className="grid-link">Kotlin</Link>
                        <Link to="/technologies" className="grid-link">Machine Learning</Link>
                        <Link to="/technologies" className="grid-link">Microsoft Azure</Link>
                        <Link to="/technologies" className="grid-link">Node.js</Link>
                        <Link to="/technologies" className="grid-link">PHP</Link>
                        <Link to="/technologies" className="grid-link">Power BI</Link>
                        <Link to="/technologies" className="grid-link">Python</Link>
                        <Link to="/technologies" className="grid-link">React</Link>
                        <Link to="/technologies" className="grid-link">Ruby</Link>
                        <Link to="/technologies" className="grid-link">Salesforce</Link>
                        <Link to="/technologies" className="grid-link">TypeScript</Link>
                        <Link to="/technologies" className="grid-link">Vue.js</Link>
                        <Link to="/technologies" className="grid-link">Xamarin</Link>
                      </div>
                      <Link to="/technologies" className="view-all-link">
                        <span>All Technologies</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              {/* INDUSTRIES DROPDOWN */}
              <li
                className="navbar-menu-item dropdown-trigger"
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/industries" className={`navbar-link-btn ${activeDropdown === 'industries' ? 'active' : ''}`}>
                  Industries
                  <svg className={`chevron-icon ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                </Link>

                {/* INDUSTRIES MEGAMENU */}
                <div className={`megamenu-dropdown ${activeDropdown === 'industries' ? 'visible' : ''}`}>
                  <div className="megamenu-inner-grid">
                    {/* Left Panel */}
                    <div className="megamenu-left-panel">
                      <h3 className="megamenu-title">Industries</h3>
                      <p className="megamenu-subtitle">
                        We've delivered 1,250+ projects across 130+ sectors. Experience in your industry? We have it.
                      </p>
                      <div className="megamenu-case-study">
                        <img
                          src="https://assets.bairesdev.com//image/upload/c_limit,w_120/fl_sanitize/v1/www/core/iqvia_default_6fe9d143af.svg"
                          alt="IQVIA"
                          className="case-study-client-logo"
                        />
                        <p className="case-study-description">
                          We scaled IQVIA's clinical research platforms with React. <Link to="/our-work" className="case-study-link">Read case study.</Link>
                        </p>
                      </div>
                    </div>

                    {/* Middle/Right Industry Grid */}
                    <div className="megamenu-middle-panel w-full-grid">
                      <span className="megamenu-section-header">All Industries</span>
                      <div className="megamenu-links-grid grid-cols-3">
                        <Link to="/industries" className="grid-link">Agriculture</Link>
                        <Link to="/industries" className="grid-link">Automotive</Link>
                        <Link to="/industries" className="grid-link">Aviation</Link>
                        <Link to="/industries" className="grid-link">Banking</Link>
                        <Link to="/industries" className="grid-link">Construction</Link>
                        <Link to="/industries" className="grid-link">Entertainment</Link>
                        <Link to="/industries" className="grid-link">Finance</Link>
                        <Link to="/industries" className="grid-link">Startups</Link>
                        <Link to="/industries" className="grid-link">Healthcare</Link>
                        <Link to="/industries" className="grid-link">Insurance</Link>
                        <Link to="/industries" className="grid-link">Martech</Link>
                        <Link to="/industries" className="grid-link">Oil and Gas</Link>
                        <Link to="/industries" className="grid-link">Real Estate</Link>
                        <Link to="/industries" className="grid-link">Retail</Link>
                        <Link to="/industries" className="grid-link">Supply Chain</Link>
                        <Link to="/industries" className="grid-link">Telecommunications</Link>
                        <Link to="/industries" className="grid-link">Transportation & Logistics</Link>
                        <Link to="/industries" className="grid-link">Travel & Hospitality</Link>
                      </div>
                      <Link to="/industries" className="view-all-link">
                        <span>All Industries</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              {/* ABOUT DROPDOWN */}
              <li
                className="navbar-menu-item dropdown-trigger"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/about" className={`navbar-link-btn ${activeDropdown === 'about' ? 'active' : ''}`}>
                  About
                  <svg className={`chevron-icon ${activeDropdown === 'about' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                </Link>

                {/* ABOUT MEGAMENU */}
                <div className={`megamenu-dropdown ${activeDropdown === 'about' ? 'visible' : ''}`}>
                  <div className="megamenu-inner-grid">
                    {/* Left Panel */}
                    <div className="megamenu-left-panel">
                      <h3 className="megamenu-title">About</h3>
                      <p className="megamenu-subtitle">
                        Since 2009, we've built software for companies of all types, from startups to Fortune 500 giants.
                      </p>
                      <div className="megamenu-case-study about-ceo">
                        <img
                          src="https://assets.bairesdev.com//image/upload/c_limit,w_100/dpr_auto/f_auto/q_auto/v1/www/staging/nacho_816ff45aee"
                          alt="CEO Nacho De Marco"
                          className="case-study-client-logo ceo-pic"
                        />
                        <p className="case-study-description">
                          Our CEO, speaking at the World Economic Forum at Davos 2025. <a href="https://press.bairesdev.com/bairesdev-joins-world-economic-forum/" target="_blank" rel="noopener noreferrer" className="case-study-link">Read more</a>
                        </p>
                      </div>
                    </div>

                    {/* Middle Column (Inside BairesDev) */}
                    <div className="megamenu-column">
                      <span className="megamenu-section-header">Inside BairesDev</span>
                      <div className="megamenu-links-list">
                        <Link to="/about" className="grid-link">Our Leadership Team</Link>
                        <Link to="/about" className="grid-link">Our Tech Talent</Link>
                        <Link to="/about" className="grid-link">Press Releases</Link>
                        <Link to="/about" className="grid-link">Contact Us</Link>
                        <Link to="/about" className="grid-link">FAQs</Link>
                      </div>
                      <Link to="/about" className="view-all-link no-mt">
                        <span>Our Story</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                        </svg>
                      </Link>
                    </div>

                    {/* Recognitions Column */}
                    <div className="megamenu-column">
                      <span className="megamenu-section-header">Recognitions</span>
                      <div className="megamenu-links-list">
                        <Link to="/about" className="grid-link">Awards</Link>
                        <Link to="/about" className="grid-link">Certifications</Link>
                      </div>
                    </div>

                    {/* Careers Column */}
                    <div className="megamenu-column">
                      <span className="megamenu-section-header">Careers</span>
                      <div className="megamenu-links-list">
                        <Link to="/about" className="grid-link">Working at BairesDev</Link>
                        <Link to="/about" className="grid-link">Job Opportunities</Link>
                        <Link to="/about" className="grid-link">Talent Referrals</Link>
                        <Link to="/about" className="grid-link">Our Circles Program</Link>
                        <Link to="/about" className="grid-link">Company Culture</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* OTHER FLAT LINKS */}
              <li className="navbar-menu-item">
                <NavLink to="/our-work" className={({ isActive }) => `navbar-link-btn flat-link ${isActive ? 'active' : ''}`}>
                  Our Work
                </NavLink>
              </li>

              <li className="navbar-menu-item">
                <NavLink to="/blog" className={({ isActive }) => `navbar-link-btn flat-link ${isActive ? 'active' : ''}`}>
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Right Header Actions */}
          <div className="navbar-actions-area">
            <Link to="/schedule-call" className="btn-schedule-call">
              Schedule a Call
            </Link>

            {/* Hamburger Button for Mobile */}
            <button
              type="button"
              className={`hamburger-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="hamburger-bar top-bar"></div>
              <div className="hamburger-bar middle-bar"></div>
              <div className="hamburger-bar bottom-bar"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Screen Overlay Backdrop for Desktop Dropdowns */}
      <div
        className={`navbar-desktop-backdrop ${activeDropdown ? 'visible' : ''}`}
        onMouseEnter={handleMouseLeave}
      ></div>

      {/* Mobile Slide-out Menu Panel */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <ul className="mobile-menu-list">
            {/* SERVICES ACCORDION */}
            <li className="mobile-menu-item">
              <button
                type="button"
                className={`mobile-accordion-toggle ${mobileActiveAccordion === 'services' ? 'active' : ''}`}
                onClick={() => toggleMobileAccordion('services')}
              >
                Services
                <svg className={`chevron-icon ${mobileActiveAccordion === 'services' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" width="18" height="18">
                  <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
              </button>
              <div className={`mobile-accordion-content ${mobileActiveAccordion === 'services' ? 'expanded' : ''}`}>
                <div className="mobile-sublinks-wrapper">
                  <span className="mobile-group-title">Main Services</span>
                  <Link to="/services" className="mobile-sublink">Staff Augmentation</Link>
                  <Link to="/services" className="mobile-sublink">Dedicated Teams</Link>
                  <Link to="/services" className="mobile-sublink">Software Outsourcing</Link>
                  <Link to="/services" className="mobile-sublink">AI Transformation</Link>

                  <span className="mobile-group-title mt-3">Top Solutions</span>
                  <Link to="/services" className="mobile-sublink">AI Development</Link>
                  <Link to="/services" className="mobile-sublink">Web Development</Link>
                  <Link to="/services" className="mobile-sublink">Mobile App Development</Link>
                  <Link to="/services" className="mobile-sublink">QA Testing & Automation</Link>
                  <Link to="/services/ux-design" className="mobile-sublink">UX/UI Design</Link>
                </div>
              </div>
            </li>

            {/* TECHNOLOGIES ACCORDION */}
            <li className="mobile-menu-item">
              <button
                type="button"
                className={`mobile-accordion-toggle ${mobileActiveAccordion === 'technologies' ? 'active' : ''}`}
                onClick={() => toggleMobileAccordion('technologies')}
              >
                Technologies
                <svg className={`chevron-icon ${mobileActiveAccordion === 'technologies' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" width="18" height="18">
                  <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
              </button>
              <div className={`mobile-accordion-content ${mobileActiveAccordion === 'technologies' ? 'expanded' : ''}`}>
                <div className="mobile-sublinks-wrapper">
                  <Link to="/technologies" className="mobile-sublink">Hire Software Developers</Link>
                  <Link to="/technologies" className="mobile-sublink">Top 1% Talent</Link>
                  <span className="mobile-group-title mt-3">Tech Stacks</span>
                  <Link to="/technologies" className="mobile-sublink">React</Link>
                  <Link to="/technologies" className="mobile-sublink">Node.js</Link>
                  <Link to="/technologies" className="mobile-sublink">Python</Link>
                  <Link to="/technologies" className="mobile-sublink">Java</Link>
                  <Link to="/technologies" className="mobile-sublink">.NET</Link>
                </div>
              </div>
            </li>

            {/* INDUSTRIES ACCORDION */}
            <li className="mobile-menu-item">
              <button
                type="button"
                className={`mobile-accordion-toggle ${mobileActiveAccordion === 'industries' ? 'active' : ''}`}
                onClick={() => toggleMobileAccordion('industries')}
              >
                Industries
                <svg className={`chevron-icon ${mobileActiveAccordion === 'industries' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" width="18" height="18">
                  <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
              </button>
              <div className={`mobile-accordion-content ${mobileActiveAccordion === 'industries' ? 'expanded' : ''}`}>
                <div className="mobile-sublinks-wrapper">
                  <Link to="/industries" className="mobile-sublink">Healthcare</Link>
                  <Link to="/industries" className="mobile-sublink">Finance</Link>
                  <Link to="/industries" className="mobile-sublink">Retail</Link>
                  <Link to="/industries" className="mobile-sublink">Telecommunications</Link>
                  <Link to="/industries" className="mobile-sublink">Startups</Link>
                </div>
              </div>
            </li>

            {/* ABOUT ACCORDION */}
            <li className="mobile-menu-item">
              <button
                type="button"
                className={`mobile-accordion-toggle ${mobileActiveAccordion === 'about' ? 'active' : ''}`}
                onClick={() => toggleMobileAccordion('about')}
              >
                About
                <svg className={`chevron-icon ${mobileActiveAccordion === 'about' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" width="18" height="18">
                  <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
              </button>
              <div className={`mobile-accordion-content ${mobileActiveAccordion === 'about' ? 'expanded' : ''}`}>
                <div className="mobile-sublinks-wrapper">
                  <Link to="/about" className="mobile-sublink">Our Leadership Team</Link>
                  <Link to="/about" className="mobile-sublink">Our Tech Talent</Link>
                  <Link to="/about" className="mobile-sublink">Press Releases</Link>
                  <Link to="/about" className="mobile-sublink">Contact Us</Link>
                  <Link to="/about" className="mobile-sublink">Working at BairesDev</Link>
                  <Link to="/about" className="mobile-sublink">Job Opportunities</Link>
                </div>
              </div>
            </li>

            {/* FLAT LINKS */}
            <li className="mobile-menu-item">
              <Link to="/our-work" className="mobile-flat-link">Our Work</Link>
            </li>
            <li className="mobile-menu-item">
              <Link to="/blog" className="mobile-flat-link">Blog</Link>
            </li>
          </ul>

          <div className="mobile-menu-footer">
            <Link to="/schedule-call" className="btn-mobile-schedule">
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
