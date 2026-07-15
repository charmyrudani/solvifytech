import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { Paths } from '../../../constants/route-paths.constants';

interface FooterLink {
  name: string;
  url: string;
}

interface FooterLinkSection {
  title: string;
  links: FooterLink[];
}

const footerData: FooterLinkSection[] = [
  {
    title: 'Services & Enterprise',
    links: [
      { name: 'ERP Development', url: `/${Paths.services}/${Paths.erpDevelopment}` },
      { name: 'Web Development', url: `/${Paths.services}/${Paths.webDevelopment}` },
      { name: 'Mobile App Development', url: `/${Paths.services}/${Paths.mobileAppDevelopment}` },
      { name: 'Shopify Development', url: `/${Paths.services}/${Paths.shopifyDevelopment}` },
      { name: 'UI/UX Design', url: `/${Paths.services}/${Paths.uiUxDesign}` },
      { name: 'Cloud and DevOps', url: `/${Paths.services}/${Paths.cloudDevOps}` },
      { name: 'SaaS Product Development', url: `/${Paths.services}/${Paths.saasDevelopment}` },
    ]
  },
  {
    title: 'Solutions',
    links: [
      { name: 'AI Automation', url: `/${Paths.technologies}/${Paths.aiAutomation}` },
      { name: 'Next JS Development', url: `/${Paths.technologies}/${Paths.nextjs}` },
      { name: 'Redis Development', url: `/${Paths.technologies}/${Paths.redis}` },
      { name: 'MongoDB Development', url: `/${Paths.technologies}/${Paths.mongodb}` },
      { name: 'Strapi Development', url: `/${Paths.technologies}/${Paths.strapi}` },
      { name: 'Wordpress Development', url: `/${Paths.technologies}/${Paths.wordpress}` },
      { name: 'AI Development', url: `/${Paths.technologies}/${Paths.ai}` },
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'Our Work', url: `/${Paths.ourWork}` },
      { name: 'Contact Us', url: `/${Paths.contactUs}` },
      { name: 'FAQs', url: `/${Paths.contactUs}#faq` },
      { name: 'Insights', url: `/${Paths.blog}` },
    ]
  },
  {
    title: 'Technologies',
    links: [
      { name: 'React JS', url: `/${Paths.technologies}/${Paths.reactjs}` },
      { name: 'Node JS', url: `/${Paths.technologies}/${Paths.nodejs}` },
      { name: 'Python', url: `/${Paths.technologies}/${Paths.python}` },
      { name: 'Shopify', url: `/${Paths.technologies}/${Paths.shopify}` },
      { name: 'AWS', url: `/${Paths.technologies}/${Paths.aws}` },
      { name: 'Open AI', url: `/${Paths.services}/${Paths.openaiIntegration}` },
      { name: 'N8N', url: `/${Paths.services}/${Paths.n8nAutomation}` },
    ]
  },
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
        <div className="footer-top-grid">
          {footerData.map((section) => (
            <div key={section.title} className="footer-grid-col">
              <h4
                className="footer-col-title d-flex justify-content-between align-items-center"
                onClick={() => toggleSection(section.title)}
              >
                <span>{section.title}</span>
                <span className="accordion-chevron d-md-none">
                  <FaChevronDown
                    className={`chevron-svg ${openSection === section.title ? 'rotated' : ''}`}
                    size={18}
                  />
                </span>
              </h4>
              <ul className={`footer-links-list ${openSection === section.title ? 'expanded' : ''}`}>
                {section.links.map((link) => (
                  <li key={link.name} className="footer-link-item">
                    {link.url.startsWith('http') ? (
                      <Link to={link.url} target="_blank" rel="noopener noreferrer">
                        {link.name}
                      </Link>
                    ) : (
                      <Link to={link.url}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-grid-col contact-col">
            <div>
              <h4 className="footer-col-title">Let’s build something valuable.</h4>
              <div className="footer-contact-actions">
                <Link to={`/${Paths.contactUs}`} target="_blank" rel="noopener noreferrer" className="footer-cta-btn">
                  Book a Discovery Call
                </Link>
                <a href="mailto:hello@solvifytech.in" className="footer-phone-number">
                  hello@solvifytech.in
                </a>
              </div>
              <p className="footer-address mt-4">
                C2-410 IT Park, Mota Varachha Main Road, Surat, Gujarat 39500
              </p>
              <p className="footer-newsletter-desc mt-3">
                Get insights from the experts on building and scaling technology teams.
              </p>
            </div>
            <div className="footer-social-container d-flex flex-column align-items-start gap-3 mt-md-5 mt-2">
              <span className="follow-us-text">Follow us.</span>
              <div className="footer-social-icons d-flex gap-2">

                <Link
                  to="#"
                  onClick={() => window.open("https://in.linkedin.com/company/solvifytechsurat", "_blank")}
                  className="social-icon-btn"
                >
                  <FaLinkedinIn />
                </Link>

                <Link
                  to="#"
                  onClick={() => window.open("https://www.instagram.com/solvify.tech/", "_blank")}
                  className="social-icon-btn"
                >
                  <FaInstagram />
                </Link>

                <Link
                  to="#"
                  onClick={() => window.open("https://www.facebook.com/people/Solvify-Tech/61578673480015/", "_blank")}
                  className="social-icon-btn"
                >
                  <FaFacebookF />
                </Link>

                <Link
                  to="#"
                  onClick={() => window.open("https://wa.me/919727326326", "_blank")}
                  className="social-icon-btn"
                >
                  <FaWhatsapp />
                </Link>

              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="footer-legal-container d-flex flex-column flex-md-row align-items-center gap-3">
            <span className="copyright-text">© SolvifyTech 2026. All rights reserved.</span>
            <span className="legal-divider d-none d-md-inline">|</span>
            <div className="footer-legal-links d-flex gap-3">
              <Link to={`/${Paths.privacyPolicy}`}>Privacy Policy</Link>
              <Link to={`/${Paths.termsConditions}`}>Terms &amp; Conditions</Link>
              <Link to="#" rel="noopener noreferrer">Do Not Sell My Info</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;