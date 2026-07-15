import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import '../legal/legal.css';

const sections = [
  { id: 'info-collect', title: '1. Information We Collect' },
  { id: 'use-info', title: '2. How We Use Your Information' },
  { id: 'cookies', title: '3. Cookies' },
  { id: 'data-protection', title: '4. Data Protection' },
  { id: 'third-party', title: '5. Third-Party Services' },
  { id: 'data-sharing', title: '6. Data Sharing' },
  { id: 'data-retention', title: '7. Data Retention' },
  { id: 'client-content', title: '8. Client Content' },
  { id: 'children-privacy', title: '9. Children\'s Privacy' },
  { id: 'intl-clients', title: '10. International Clients' },
  { id: 'changes-policy', title: '11. Changes to This Policy' },
  { id: 'contact', title: '12. Contact' }
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -140; // offset for header / breathing room
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="legal-page">
      <nav className="legal-breadcrumbs" aria-label="breadcrumb">
        <ol className="legal-breadcrumb-list">
          <li className="legal-breadcrumb-item">
            <Link to="/" className="legal-breadcrumb-link home-icon-link" aria-label="Home">
              <GoHome size={18} />
            </Link>
          </li>
          <li className="legal-breadcrumb-item legal-breadcrumb-current">Privacy Policy</li>
        </ol>
      </nav>

      <div className="legal-header-container">
        <span className="legal-subtitle">OUR PRIVACY POLICY</span>
        <h1 className="legal-page-title">
          Privacy Policy<span className="dot">.</span>
        </h1>
        <p className="legal-page-effective">Effective Date: July 15, 2026</p>
      </div>

      <div className="legal-layout-grid">
        <aside className="legal-sidebar">
          <ul className="legal-toc-list">
            {sections.map((sec) => (
              <li key={sec.id} className="legal-toc-item">
                <a
                  href={`#${sec.id}`}
                  className={`legal-toc-link ${activeSection === sec.id ? 'active' : ''}`}
                  onClick={(e) => handleTocClick(e, sec.id)}
                >
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <main className="legal-body-content">
          <p>
            Welcome to Solvify Tech ("Company", "we", "our", or "us"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or communicate with us.
          </p>

          <section id="info-collect" className="legal-section-block">
            <h2>1. Information We Collect</h2>
            <p>We may collect the following information:</p>
            
            <span className="bold-text">Personal Information</span>
            <ul>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Company Name</li>
              <li>Billing Address</li>
              <li>GST Information (if applicable)</li>
              <li>Payment Information</li>
              <li>Project Requirements</li>
              <li>Support Requests</li>
            </ul>

            <span className="bold-text">Technical Information</span>
            <ul>
              <li>IP Address</li>
              <li>Browser Type</li>
              <li>Operating System</li>
              <li>Device Information</li>
              <li>Cookies</li>
              <li>Analytics Data</li>
              <li>Website Usage Statistics</li>
            </ul>
          </section>

          <section id="use-info" className="legal-section-block">
            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide our services</li>
              <li>Respond to inquiries</li>
              <li>Create project proposals</li>
              <li>Manage client accounts</li>
              <li>Improve our services</li>
              <li>Send invoices</li>
              <li>Provide technical support</li>
              <li>Send important service updates</li>
              <li>Prevent fraud and misuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section id="cookies" className="legal-section-block">
            <h2>3. Cookies</h2>
            <p>
              Our website may use cookies and similar technologies to improve user experience, analyze website traffic, remember preferences, and enhance security.
            </p>
            <p>
              Users may disable cookies through their browser settings, though some website features may not function properly.
            </p>
          </section>

          <section id="data-protection" className="legal-section-block">
            <h2>4. Data Protection</h2>
            <p>
              We implement industry-standard administrative, technical, and physical safeguards to protect your information from unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p>
              While we strive to protect your data, no internet transmission or storage system can be guaranteed as completely secure.
            </p>
          </section>

          <section id="third-party" className="legal-section-block">
            <h2>5. Third-Party Services</h2>
            <p>We may use trusted third-party services including but not limited to:</p>
            <ul>
              <li>Payment Gateways</li>
              <li>Google Analytics</li>
              <li>Cloud Hosting Providers</li>
              <li>CRM Platforms</li>
              <li>Email Service Providers</li>
              <li>Project Management Tools</li>
            </ul>
            <p>These providers process data according to their own privacy policies.</p>
          </section>

          <section id="data-sharing" className="legal-section-block">
            <h2>6. Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal information.</p>
            <p>Information may only be shared:</p>
            <ul>
              <li>With authorized employees</li>
              <li>With trusted service providers</li>
              <li>When required by law</li>
              <li>To protect our legal rights</li>
              <li>During business restructuring if applicable</li>
            </ul>
          </section>

          <section id="data-retention" className="legal-section-block">
            <h2>7. Data Retention</h2>
            <p>
              Client information may be retained for accounting, taxation, legal compliance, contractual obligations, and future support requirements unless deletion is requested and legally permissible.
            </p>
          </section>

          <section id="client-content" className="legal-section-block">
            <h2>8. Client Content</h2>
            <p>
              All confidential information shared by clients remains confidential. Project files, source code, documents, credentials, and business information are handled with appropriate security measures.
            </p>
          </section>

          <section id="children-privacy" className="legal-section-block">
            <h2>9. Children's Privacy</h2>
            <p>
              Our services are intended for businesses and individuals above the age of 18. We do not knowingly collect information from minors.
            </p>
          </section>

          <section id="intl-clients" className="legal-section-block">
            <h2>10. International Clients</h2>
            <p>
              For international projects, data may be processed in India or other jurisdictions where our infrastructure or service providers operate.
            </p>
          </section>

          <section id="changes-policy" className="legal-section-block">
            <h2>11. Changes to This Policy</h2>
            <p>
              We reserve the right to modify this Privacy Policy at any time. Updated versions become effective immediately upon publication on our website.
            </p>
          </section>

          <section id="contact" className="legal-section-block">
            <h2>12. Contact</h2>
            <p>
              Solvify Tech<br />
              Email: hello@solvifytech.in<br />
              Website: https://solvifytech.in
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
