import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import '../legal/legal.css';

const sections = [
  { id: 'services', title: '1. Services' },
  { id: 'project-acceptance', title: '2. Project Acceptance' },
  { id: 'client-resp', title: '3. Client Responsibilities' },
  { id: 'project-timeline', title: '4. Project Timeline' },
  { id: 'change-requests', title: '5. Change Requests' },
  { id: 'payment-terms', title: '6. Payment Terms' },
  { id: 'no-refund', title: '7. No Refund Policy' },
  { id: 'intellectual-prop', title: '8. Intellectual Property' },
  { id: 'confidentiality', title: '9. Confidentiality' },
  { id: 'third-party', title: '10. Third-Party Services' },
  { id: 'warranty', title: '11. Warranty' },
  { id: 'maintenance', title: '12. Maintenance' },
  { id: 'seo-marketing', title: '13. SEO & Marketing Disclaimer' },
  { id: 'limitation-liability', title: '14. Limitation of Liability' },
  { id: 'project-abandonment', title: '15. Project Abandonment' },
  { id: 'account-suspension', title: '16. Account Suspension' },
  { id: 'force-majeure', title: '17. Force Majeure' },
  { id: 'governing-law', title: '18. Governing Law' },
  { id: 'jurisdiction', title: '19. Jurisdiction' },
  { id: 'severability', title: '20. Severability' },
  { id: 'entire-agreement', title: '21. Entire Agreement' },
  { id: 'contact-info', title: '22. Contact Information' }
];

export default function TermsConditions() {
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
      const yOffset = -140; // offset for sticky header / breathing room
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
          <li className="legal-breadcrumb-item legal-breadcrumb-current">Terms &amp; Conditions</li>
        </ol>
      </nav>

      <div className="legal-header-container">
        <span className="legal-subtitle">TERMS &amp; CONDITIONS</span>
        <h1 className="legal-page-title">
          Terms &amp; Conditions<span className="dot">.</span>
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
            These Terms &amp; Conditions govern all services provided by Solvify Tech.
          </p>
          <p>
            By engaging our services, making payments, signing quotations, approving proposals, or using our website, you agree to these Terms.
          </p>

          <section id="services" className="legal-section-block">
            <h2>1. Services</h2>
            <p>Solvify Tech provides professional services including but not limited to:</p>
            <ul>
              <li>Website Development</li>
              <li>Shopify Development</li>
              <li>ERP Development</li>
              <li>CRM Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Artificial Intelligence Solutions</li>
              <li>SaaS Development</li>
              <li>API Integration</li>
              <li>Cloud Services</li>
              <li>SEO</li>
              <li>Digital Marketing</li>
              <li>Technical Consulting</li>
              <li>Maintenance &amp; Support</li>
            </ul>
          </section>

          <section id="project-acceptance" className="legal-section-block">
            <h2>2. Project Acceptance</h2>
            <p>A project shall be considered confirmed only after:</p>
            <ul>
              <li>Proposal approval</li>
              <li>Quotation acceptance</li>
              <li>Initial payment received</li>
              <li>Written confirmation</li>
            </ul>
          </section>

          <section id="client-resp" className="legal-section-block">
            <h2>3. Client Responsibilities</h2>
            <p>The client agrees to provide:</p>
            <ul>
              <li>Complete project requirements</li>
              <li>Required content</li>
              <li>Images</li>
              <li>Logos</li>
              <li>Domain access</li>
              <li>Hosting access</li>
              <li>Third-party credentials</li>
              <li>Timely approvals</li>
            </ul>
            <p>Delays in providing information may result in revised delivery timelines.</p>
          </section>

          <section id="project-timeline" className="legal-section-block">
            <h2>4. Project Timeline</h2>
            <p>Estimated timelines are based on timely client responses.</p>
            <p>Any delay from the client's side automatically extends the delivery schedule.</p>
          </section>

          <section id="change-requests" className="legal-section-block">
            <h2>5. Change Requests</h2>
            <p>
              Any work outside the approved project scope shall be considered additional work and may incur additional charges.
            </p>
            <p>
              Major changes after design or development approval may require a revised quotation.
            </p>
          </section>

          <section id="payment-terms" className="legal-section-block">
            <h2>6. Payment Terms</h2>
            <p>Payments shall be made according to the agreed milestone schedule.</p>
            <p>Invoices must be paid within the agreed due date.</p>
            <p>Late payments may result in:</p>
            <ul>
              <li>Project suspension</li>
              <li>Delay in delivery</li>
              <li>Suspension of maintenance</li>
              <li>Additional charges</li>
            </ul>
          </section>

          <section id="no-refund" className="legal-section-block">
            <h2>7. No Refund Policy</h2>
            <p className="bold-text">ALL PAYMENTS MADE TO SOLVIFY TECH ARE FINAL AND NON-REFUNDABLE.</p>
            <p>No refunds shall be provided under any circumstances, including but not limited to:</p>
            <ul>
              <li>Change of business plans</li>
              <li>Project cancellation by the client</li>
              <li>Delay caused by the client</li>
              <li>Partial project completion</li>
              <li>Client dissatisfaction after approved milestones</li>
              <li>Change of technology preference</li>
              <li>Business closure</li>
              <li>Domain or hosting issues</li>
              <li>Third-party service failures</li>
            </ul>
            <p>
              Work begins immediately after project confirmation, involving allocation of technical resources, planning, design, development, and infrastructure costs. Therefore, all payments are strictly non-refundable.
            </p>
          </section>

          <section id="intellectual-prop" className="legal-section-block">
            <h2>8. Intellectual Property</h2>
            <p>Ownership of the final project shall transfer to the client only after full payment has been received.</p>
            <p>Until then:</p>
            <ul>
              <li>Source code remains the property of Solvify Tech.</li>
              <li>Design files remain our property.</li>
              <li>Internal frameworks remain proprietary.</li>
              <li>Reusable libraries remain our intellectual property.</li>
            </ul>
          </section>

          <section id="confidentiality" className="legal-section-block">
            <h2>9. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality regarding business information, technical documentation, trade secrets, and project materials.
            </p>
          </section>

          <section id="third-party" className="legal-section-block">
            <h2>10. Third-Party Services</h2>
            <p>
              We are not responsible for downtime, failures, pricing changes, or policy changes of third-party providers including hosting companies, payment gateways, domain registrars, APIs, Shopify, Google, Meta, AWS, or similar services.
            </p>
          </section>

          <section id="warranty" className="legal-section-block">
            <h2>11. Warranty</h2>
            <p>Unless otherwise agreed in writing:</p>
            <ul>
              <li>We provide a 30-day bug-fix warranty for software defects related to the delivered scope.</li>
              <li>New feature requests are not included under warranty.</li>
              <li>
                Warranty does not cover issues arising from third-party changes, unauthorized modifications, server misconfiguration, or misuse.
              </li>
            </ul>
          </section>

          <section id="maintenance" className="legal-section-block">
            <h2>12. Maintenance</h2>
            <p>Maintenance contracts are separate from project development.</p>
            <p>Support beyond the agreed maintenance period may incur additional charges.</p>
          </section>

          <section id="seo-marketing" className="legal-section-block">
            <h2>13. SEO &amp; Marketing Disclaimer</h2>
            <p>
              Search engine rankings, organic traffic, lead generation, conversion rates, and marketing performance cannot be guaranteed due to factors outside our control, including search engine algorithms and market competition.
            </p>
          </section>

          <section id="limitation-liability" className="legal-section-block">
            <h2>14. Limitation of Liability</h2>
            <p>
              Solvify Tech shall not be liable for any indirect, incidental, consequential, special, punitive, or business losses, including loss of profits, revenue, goodwill, or data arising from the use of our services.
            </p>
            <p>
              Our total liability shall not exceed the amount paid by the client for the specific project giving rise to the claim.
            </p>
          </section>

          <section id="project-abandonment" className="legal-section-block">
            <h2>15. Project Abandonment</h2>
            <p>
              If a client becomes unresponsive for more than 45 consecutive days, the project may be considered abandoned.
            </p>
            <p>
              Any reactivation may require additional charges and revised timelines.
            </p>
          </section>

          <section id="account-suspension" className="legal-section-block">
            <h2>16. Account Suspension</h2>
            <p>We reserve the right to suspend services for:</p>
            <ul>
              <li>Non-payment</li>
              <li>Abuse</li>
              <li>Illegal activities</li>
              <li>Violation of these Terms</li>
              <li>Security concerns</li>
            </ul>
          </section>

          <section id="force-majeure" className="legal-section-block">
            <h2>17. Force Majeure</h2>
            <p>
              Neither party shall be liable for delays caused by events beyond reasonable control, including natural disasters, internet outages, governmental actions, pandemics, war, cyberattacks, or labor disputes.
            </p>
          </section>

          <section id="governing-law" className="legal-section-block">
            <h2>18. Governing Law</h2>
            <p>These Terms shall be governed by the laws of India.</p>
          </section>

          <section id="jurisdiction" className="legal-section-block">
            <h2>19. Jurisdiction</h2>
            <p>
              Any dispute arising out of or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the competent courts located in Surat, Gujarat, India.
            </p>
            <p>
              Both parties expressly agree to submit to the exclusive jurisdiction of the courts at Surat.
            </p>
          </section>

          <section id="severability" className="legal-section-block">
            <h2>20. Severability</h2>
            <p>
              If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section id="entire-agreement" className="legal-section-block">
            <h2>21. Entire Agreement</h2>
            <p>
              These Terms, together with any signed proposal, quotation, statement of work, or service agreement, constitute the complete agreement between the parties.
            </p>
          </section>

          <section id="contact-info" className="legal-section-block">
            <h2>22. Contact Information</h2>
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
