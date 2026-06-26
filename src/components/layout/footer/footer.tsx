import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

interface FooterLink {
  name: string;
  url: string;
}

interface FooterLinkSection {
  title: string;
  links: FooterLink[];
}

export const footerData: FooterLinkSection[] = [
  {
    title: 'Company & Offerings',
    links: [
      { name: 'About Us', url: 'https://www.bairesdev.com/about/' },
      { name: 'Methodologies', url: 'https://www.bairesdev.com/methodologies/' },
      { name: 'Technologies', url: 'https://www.bairesdev.com/technologies/' },
      { name: 'Certifications', url: 'https://www.bairesdev.com/about/certifications-and-partnerships/' },
      { name: 'Diversity', url: 'https://www.bairesdev.com/diversity-inclusion/' },
      { name: 'Social Responsibility', url: 'https://www.bairesdev.com/csr/' },
      { name: 'Senior Advisor Program', url: 'https://applicants.bairesdev.com/files/bairesdev-advisory-program.pdf' }
    ]
  },
  {
    title: 'Services & Teams',
    links: [
      { name: 'Software Development Services', url: 'https://www.bairesdev.com/software-development-services/' },
      { name: 'Software Development Solutions', url: 'https://www.bairesdev.com/solutions/' },
      { name: 'Dedicated Software Development Teams', url: 'https://www.bairesdev.com/software-development-services/software-dedicated-team/' },
      { name: 'Staff Augmentation', url: 'https://www.bairesdev.com/staff-augmentation/' },
      { name: 'Software Development Outsourcing', url: 'https://www.bairesdev.com/software-development-services/software-outsourcing/' }
    ]
  },
  {
    title: 'Resources & Insights',
    links: [
      { name: 'Case Studies', url: 'https://www.bairesdev.com/clients/' },
      { name: 'AI Learning Hub', url: 'https://www.bairesdev.com/resources/artificial-intelligence/' },
      { name: 'Blog', url: 'https://www.bairesdev.com/blog/' },
      { name: 'Press', url: 'https://www.bairesdev.com/press/' },
      { name: 'Industries Insights', url: 'https://www.bairesdev.com/industries/' },
      { name: 'Technology Resource Center', url: 'https://www.bairesdev.com/tech-resource-center/' },
      { name: 'Client Referral Program', url: 'https://www.bairesdev.com/referral-partners/' },
      { name: 'Fellows Program', url: 'https://www.bairesdev.com/fellows/' },
      { name: 'Partners Program', url: 'https://www.bairesdev.com/partners/aws' }
    ]
  },
  {
    title: 'Careers',
    links: [
      { name: 'Careers', url: 'https://www.bairesdev.com/join-us/' },
      { name: 'Job Opportunities', url: 'https://talent.bairesdev.com/' },
      { name: 'Talent Referrals', url: 'https://www.bairesdev.com/referrals-program/' },
      { name: 'Associate Program', url: 'https://www.bairesdev.com/careers/associate-program/' }
    ]
  }
];

const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    if (openSection === title) {
      setOpenSection(null);
    } else {
      setOpenSection(title);
    }
  };

  return (
    <footer className="baires-footer">
      <div className="container">
        {/* Footer Top Links Grid */}
        <div className="footer-top-grid">
          {footerData.map((section) => (
            <div key={section.title} className="footer-grid-col">
              <h4 
                className="footer-col-title d-flex justify-content-between align-items-center"
                onClick={() => toggleSection(section.title)}
              >
                <span>{section.title}</span>
                <span className="accordion-chevron d-md-none">
                  <svg 
                    className={`chevron-svg ${openSection === section.title ? 'rotated' : ''}`} 
                    viewBox="0 0 24 24" 
                    width="18" 
                    height="18"
                  >
                    <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                </span>
              </h4>
              <ul className={`footer-links-list ${openSection === section.title ? 'expanded' : ''}`}>
                {section.links.map((link) => (
                  <li key={link.name} className="footer-link-item">
                    {link.url.startsWith('http') ? (
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.url}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Col */}
          <div className="footer-grid-col contact-col">
            <h4 className="footer-col-title">Get in touch.</h4>
            <div className="footer-contact-actions">
              <a href="https://www.bairesdev.com/start/basic-details/" target="_blank" rel="noopener noreferrer" className="footer-cta-btn">
                Schedule a Call
              </a>
              <a href="https://www.bairesdev.com/contact-us/" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                Contact Us
              </a>
              <a href="tel:+14084782739" className="footer-phone-number">
                +1 (408) 478-2739
              </a>
            </div>
            
            <p className="footer-newsletter-desc mt-4">
              Get insights from the experts on building and scaling technology teams.
            </p>
          </div>
        </div>

        {/* Footer Bottom Area */}
        <div className="footer-bottom-area d-flex flex-column flex-md-row justify-content-between align-items-center">
          {/* Copyright & Legal Links */}
          <div className="footer-legal-container d-flex flex-column flex-md-row align-items-center gap-3">
            <span className="copyright-text">© BairesDev 2009 - 2026. All rights reserved.</span>
            <span className="legal-divider d-none d-md-inline">|</span>
            <div className="footer-legal-links d-flex gap-3">
              <a href="https://www.bairesdev.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              <a href="https://www.bairesdev.com/terms-conditions/" target="_blank" rel="noopener noreferrer">Terms of Service</a>
              <a href="https://www.bairesdev.com/do-not-sell-my-personal-information/" target="_blank" rel="noopener noreferrer">Do Not Sell My Info</a>
            </div>
          </div>

          {/* Social Follow */}
          <div className="footer-social-container d-flex align-items-center gap-3 mt-4 mt-md-0">
            <span className="follow-us-text">Follow us.</span>
            <div className="footer-social-icons d-flex gap-2">
              <a href="https://www.linkedin.com/company/bairesdev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/bairesdev/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7c4.78-.75 8.44-4.9 8.44-9.9 0-5.53-4.5-10.02-10-10.02z"/>
                </svg>
              </a>
              <a href="https://x.com/bairesdev/" target="_blank" rel="noopener noreferrer" aria-label="Twitter (X)" className="social-icon-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/bairesdev/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m8.4 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/BairesDevSolutions/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
