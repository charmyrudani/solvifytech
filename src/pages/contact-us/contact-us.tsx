import { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact-us.css';
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin, FiChevronDown } from 'react-icons/fi';
import logo from '/images/logo/solvify-tech-black.webp';

const faqData = [
  {
    q: "What kind of design services can I get with SolvifyTech?",
    a: "You can access a wide range of expert solutions, including branding, marketing materials, packaging, website design and development, interactive dashboards, and more—all tailored to your needs."
  },
  {
    q: "How does the process work, and is it flexible?",
    a: "We adapt to your requirements. Whether it's a fixed-price project or a dedicated team model, our process is highly flexible to ensure you get consistent quality without overhead."
  },
  {
    q: "Can I see examples of past work before committing?",
    a: "Yes! You can explore our portfolio on the website to check out previous projects and get an idea of our design quality and technical expertise."
  },
  {
    q: "How do I get started with my first project?",
    a: "You can book a free consultation call to discuss your needs or contact us directly to start outlining your requirements right away."
  },
  {
    q: "How fast will I receive deliverables?",
    a: "Turnaround times depend on the complexity of your request, but our goal is to deliver high-quality solutions quickly and efficiently to keep your workflow smooth."
  }
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    source: "",
    description: "",
    smsAgreement: false,
  });

  const handleChange = ( e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement > ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        {
          first_name: formData.firstName || "Not provided",
          last_name: formData.lastName || "Not provided",
          email: formData.email || "Not provided",
          phone: formData.phone || "Not provided",
          project_type: formData.projectType || "Not provided",
          source: formData.source || "Not provided",
          description: formData.description || "Not provided",
          sms: formData.smsAgreement ? "Yes" : "No",
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectType: "",
        source: "",
        description: "",
        smsAgreement: false,
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitError("Failed to send inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="contact-page">
      <div className="contact-main">
        <div className="contact-container">

          <div className="contact-right">
            <div className="contact-heading">
              <h1>LET'S CONNECT ON YOUR IDEAS TO BUILD YOUR BRAND</h1>
              <p>Let's start the conversation—share a bit about your project, and we'll reply with insights within a day.</p>
            </div>

            {isSubmitted ? (
              <div className="success-container">
                <div className="success-icon-wrapper">
                  <svg className="success-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="success-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                    <path className="success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                  </svg>
                </div>
                <h2>Thank You!</h2>
                <p>Your inquiry has been sent successfully. Our team will review your requirements and reach out to you within a business day.</p>
                <button
                  type="button"
                  className="reset-button"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="input-wrapper">
                    <label>First Name<span className="required">*</span></label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Please enter your first name"
                      required
                    />
                  </div>
                  <div className="input-wrapper">
                    <label>Last Name<span className="required">*</span></label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Please enter your last name"
                      required
                    />
                  </div>
                  <div className="input-wrapper">
                    <label>Email<span className="required">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Please enter your email"
                      required
                    />
                  </div>
                  <div className="input-wrapper phone-wrapper">
                    <label>Phone</label>
                    <div className="phone-input">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Please enter your phone number"
                      />
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <label>Project Type<span className="required">*</span></label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={formData.projectType === "" ? "placeholder-selected" : ""}
                      required
                    >
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
                    <select
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      className={formData.source === "" ? "placeholder-selected" : ""}
                      required
                    >
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
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Please enter your project description"
                    required
                  />
                </div>
                <div className="sms-agreement">
                  <label>
                    <input
                      type="checkbox"
                      name="smsAgreement"
                      checked={formData.smsAgreement}
                      onChange={handleChange}
                      required
                    />
                    <span>I agree to receive promotional SMS messages, including discounts, special offers, and updates, from SolvifyTech. Message frequency varies. You may opt-out by replying STOP or ask for more information by replying HELP. Message & data rates may apply. Your information is protected per our <Link to="/privacy-policy">privacy policy</Link>, so you can learn how your data is used.*</span>
                  </label>
                </div>

                {submitError && <div className="submit-error-msg">{submitError}</div>}

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            )}
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
              <button
                type="button"
                className="btn-light"
                onClick={() => { window.location.href = "tel:+919727326326"; }}
              >
                Book Free Consultation Call
              </button>

              <button
                type="button"
                className="btn-dark"
                onClick={() => {
                  window.open(
                    "https://wa.me/919727326326?text=Hi%20SolvifyTech,%20I'm%20interested%20in%20your%20services.",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Direct Chat to Executive
              </button>
            </div>
          </div>
        </div>
      </div>

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