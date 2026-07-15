import { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact-us.css';
import { FiMail, FiPhone, FiMapPin, FiChevronDown } from 'react-icons/fi';
import logo from '/images/logo/solvify-tech-black.webp';

const faqData = [
  { q: "What kind of design services can I get with SolvifyTech?", a: "You can access a wide range of expert solutions, including branding, marketing materials, packaging, website design and development, interactive dashboards, and more—all tailored to your needs." },
  { q: "How does the process work, and is it flexible?", a: "We adapt to your requirements. Whether it's a fixed-price project or a dedicated team model, our process is highly flexible to ensure you get consistent quality without overhead." },
  { q: "Can I see examples of past work before committing?", a: "Yes! You can explore our portfolio on the website to check out previous projects and get an idea of our design quality and technical expertise." },
  { q: "How do I get started with my first project?", a: "You can book a free consultation call to discuss your needs or contact us directly to start outlining your requirements right away." },
  { q: "How fast will I receive deliverables?", a: "Turnaround times depend on the complexity of your request, but our goal is to deliver high-quality solutions quickly and efficiently to keep your workflow smooth." }
];

const projectTypes = [
  "Website Development",
  "Mobile App Development",
  "Custom Software",
  "ERP & CRM",
  "AI & Automation",
  "Shopify & E-commerce",
  "UI/UX & Graphics",
  "Digital Marketing",
  "Branding",
  "Other",
];

const inquirySources = [
  "Google",
  "Social Media",
  "Referral",
  "Advertisement",
  "Other",
];

export default function ContactUs() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="contact-page">
      {/* Contact Section */}
      <div className="contact-main">
        <div className="contact-container">


          <div className="contact-right">
            <div className="contact-heading">
              <h1>LET'S CONNECT ON YOUR IDEAS TO BUILD YOUR BRAND</h1>
              <p>Let's start the conversation—share a bit about your project, and we'll reply with insights within a day.</p>
            </div>

            <form className="contact-form">
              <div className="form-grid">
                <div className="input-wrapper">
                  <label>First Name<span className="required">*</span></label>
                  <input type="text" placeholder="Enter your first name" />
                </div>
                <div className="input-wrapper">
                  <label>Last Name<span className="required">*</span></label>
                  <input type="text" placeholder="Enter your last name" />
                </div>
                <div className="input-wrapper">
                  <label>Email<span className="required">*</span></label>
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="input-wrapper phone-wrapper">
                  <label>Phone</label>
                  <div className="phone-input">
                    {/* <select defaultValue="IN">
                      <option value="IN">🇮🇳 +91</option>
                      <option value="US">🇺🇸 +1</option>
                      <option value="GB">🇬🇧 +44</option>
                    </select> */}
                    <input type="tel" placeholder="Enter your phone" />
                  </div>
                </div>
                
                <div className="input-wrapper">
                  <label>Project Type<span className="required">*</span></label>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select project type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}> {type} </option>
                    ))}
                  </select>
                </div>

                <div className="input-wrapper">
                  <label>How did you hear about us?<span className="required">*</span></label>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select an option
                    </option>
                    {inquirySources.map((source) => (
                      <option key={source} value={source}> {source} </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="textarea-wrapper">
                <label>Brief Project description<span className="required">*</span></label>
                <textarea placeholder="What's on your mind"></textarea>
              </div>

              <div className="sms-agreement">
                <label>
                  <input type="checkbox" />
                  <span>I agree to receive promotional SMS messages, including discounts, special offers, and updates, from SolvifyTech. Message frequency varies. You may opt-out by replying STOP or ask for more information by replying HELP. Message & data rates may apply. Your information is protected per our <Link to="/privacy-policy">privacy policy</Link>, so you can learn how your data is used.*</span>
                </label>
              </div>

              <button type="button" className="submit-button">Submit</button>
            </form>
          </div>
          <div className="contact-left">
            <div className="contact-logo">
              <img src={logo} alt="SolvifyTech" className="logo-image" />
            </div>

            <p className="contact-intro-text">
              SolvifyTech is your trusted partner for digital transformation, offering expert solutions in web development, design, mobile apps, and beyond. Let's build something extraordinary together.
            </p>

            <div className="contact-divider"></div>

            <div className="contact-inquiries">
              <h4>Project inquiries</h4>
              <a href="mailto:contact@solvifytech.in" className="inquiry-item">
                <FiMail size={20} />
                <p>contact@solvifytech.in</p>
              </a>
              <a href="tel:+919727326326" className="inquiry-item">
                <FiPhone size={20} />
                <p>+91 97273 26326</p>
              </a>
              <div className="inquiry-item ">
                <FiMapPin size={20} />
                <p>C2-410 IT Park, Mota Varachha Main Road, Surat, Gujarat 39500</p>
              </div>
            </div>

            <div className="contact-buttons">
              <button className="btn-light">Book Free Consultation Call</button>
              <button className="btn-dark">Direct Chat to Executive</button>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps Section */}
      <div className="next-steps-container">
        <h2>WHAT ARE THE NEXT STEPS?</h2>
        <div className="steps-grid">
          <div className="step-card">
            <h3>Step 1: Initial Consultation</h3>
            <p>Once we receive your inquiry, we'll reach out to schedule a call to understand your needs and goals in detail.</p>
          </div>
          <div className="step-card">
            <h3>Step 2: Project Scoping</h3>
            <p>Our team will work with you to outline the project scope, timelines, and deliverables to ensure we're aligned on every detail.</p>
          </div>
          <div className="step-card">
            <h3>Step 3: Proposal and Agreement</h3>
            <p>We'll provide a customized proposal with project phases, cost estimates, and timelines for your review.</p>
          </div>
          <div className="step-card">
            <h3>Step 4: Project Kick-off</h3>
            <p>After approval, we'll assemble the best team for your project and begin transforming your vision into a reality.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="faq-container">
        <div className="faq-left">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-right mt-5">
          {faqData.map((faq, i) => (
            <div className="faq-item" key={i}>
              <div className="faq-question" onClick={() => toggleFaq(i)}>
                <p>{faq.q}</p>
                <div
                  className="faq-icon"
                  style={{
                    transform: openFaqIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <FiChevronDown size={24} />
                </div>
              </div>
              {openFaqIndex === i && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}