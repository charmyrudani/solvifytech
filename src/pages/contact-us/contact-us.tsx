import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact-us.css';
import logo from '/images/logo/solvify-tech-black.webp';

const faqData = [
  { q: "What kind of design services can I get with SolvifyTech?", a: "You can access a wide range of expert solutions, including branding, marketing materials, packaging, website design and development, interactive dashboards, and more—all tailored to your needs." },
  { q: "How does the process work, and is it flexible?", a: "We adapt to your requirements. Whether it's a fixed-price project or a dedicated team model, our process is highly flexible to ensure you get consistent quality without overhead." },
  { q: "Can I see examples of past work before committing?", a: "Yes! You can explore our portfolio on the website to check out previous projects and get an idea of our design quality and technical expertise." },
  { q: "How do I get started with my first project?", a: "You can book a free consultation call to discuss your needs or contact us directly to start outlining your requirements right away." },
  { q: "How fast will I receive deliverables?", a: "Turnaround times depend on the complexity of your request, but our goal is to deliver high-quality solutions quickly and efficiently to keep your workflow smooth." }
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
          <div className="contact-left">
            <div className="contact-logo">
              <img src={logo} alt="SolvifyTech" className="logo-image"/>
            </div>
            
            <p className="contact-intro-text">
              SolvifyTech is your trusted partner for digital transformation, offering expert solutions in web development, design, mobile apps, and beyond. Let's build something extraordinary together.
            </p>

            <div className="contact-divider"></div>

            <div className="contact-inquiries">
              <h4>Project inquiries</h4>
              <a href="mailto:contact@solvifytech.in" className="inquiry-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <p>contact@solvifytech.in</p>
              </a>
              <a href="tel:+919727326326" className="inquiry-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <p>+91 97273 26326</p>
              </a>
            </div>

            <div className="contact-buttons">
              <button className="btn-light">Book Free Consultation Call</button>
              <button className="btn-dark">Direct Chat to Executive</button>
            </div>
          </div>

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
                    <select defaultValue="IN">
                      <option value="IN">🇮🇳 +91</option>
                      <option value="US">🇺🇸 +1</option>
                      <option value="GB">🇬🇧 +44</option>
                    </select>
                    <input type="tel" placeholder="Enter your phone" />
                  </div>
                </div>
                <div className="input-wrapper">
                  <label>Project Type<span className="required">*</span></label>
                  <select defaultValue="">
                    <option value="" disabled>Select project type</option>
                    <option value="Graphics">Graphics</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="input-wrapper">
                  <label>How did you hear about us?<span className="required">*</span></label>
                  <select defaultValue="">
                    <option value="" disabled>Select an option</option>
                    <option value="Google">Google</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Referral">Referral</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Other">Other</option>
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
      <div className="faq-container">
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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
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