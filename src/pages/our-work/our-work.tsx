import { FiArrowRight } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import tap1ce from '/images/our-work/tap1ce.webp'
import hgt from '/images/our-work/hgt.webp'
import ccl from '/images/our-work/ccl.webp'
import doccure from '/images/our-work/doccure.webp'
import winesOfNZ from '/images/our-work/wines-of-nz.webp'
import tataPlayFiber from '/images/our-work/tata-play-fiber.webp'
import marriott from '/images/our-work/marriott.webp'
import './our-work.css';
import { Paths } from "../../constants/route-paths.constants";

export default function OurWork() {
  const col1 = [
    { name: 'MARRIOT', img: marriott, hasLink: true, link: `/${Paths.ourWork}/${Paths.marriott}`, text: "Developed a custom-branded digital profile platform with seamless SSO authentication, enabling Marriott users to securely access personalized dashboards through a single login experience.", },
    { name: 'GRAINGER', img: 'https://placehold.co/150x50/ffffff/000000?text=GRAINGER&font=montserrat' },
    // { name: 'AVIGILON', img: 'https://placehold.co/150x50/ffffff/000000?text=AVIGILON&font=montserrat', hasLink: true },
    { name: 'TATA PLAY FIBER', img: tataPlayFiber, hasLink: true, text: "Built an enterprise-ready digital profile experience with custom branding, flexible layouts, and scalable architecture, allowing Tata Play Fiber to deliver personalized user experiences.", link: `/${Paths.ourWork}/${Paths.tataPlayFiber}` },
    { name: 'chime', img: 'https://placehold.co/120x50/ffffff/000000?text=chime&font=montserrat' },
    { name: 'ebay', img: 'https://placehold.co/120x50/ffffff/000000?text=ebay&font=montserrat' },
  ];

  const col2 = [
    { name: 'abbvie', img: 'https://placehold.co/150x50/ffffff/000000?text=abbvie&font=montserrat' },
    // { name: 'ACUMEN', img: 'https://placehold.co/150x50/ffffff/000000?text=ACUMEN&font=montserrat', hasLink: true },
    { name: 'DOCCURE', img: doccure, hasLink: true, text: "Engineered a comprehensive dermatology practice management platform featuring EMR, appointment scheduling, clinical imaging, billing, AI assistance, and multi-branch clinic management.", link: `/${Paths.ourWork}/${Paths.doccure}` },
    { name: 'BBVA', img: 'https://placehold.co/120x50/ffffff/000000?text=BBVA&font=montserrat' },
    { name: 'arlo', img: 'https://placehold.co/120x60/ffffff/000000?text=arlo&font=montserrat' },
    { name: 'WINES OF NZ', img: winesOfNZ, hasLink: true, text: "Created a controlled multi-vendor Shopify ecosystem with custom vendor portals, automated product synchronization, inventory management, and centralized operational workflows.", link: `/${Paths.ourWork}/${Paths.winesOfNZ}` },
  ];

  const col3 = [
    { name: 'tap1ce', img: tap1ce, hasLink: true, text: "Built a scalable digital networking platform featuring NFC business cards, QR sharing, customizable profiles, lead management, enterprise dashboards, and powerful third-party integrations.", link: `/${Paths.ourWork}/${Paths.tap1ce}` },
    { name: 'Collective Creative Labs', img: ccl, hasLink: true, text: "Developed a scalable headless CMS ecosystem with dynamic campaign pages, SEO optimization, and continuous platform enhancements to support long-term digital growth.", link: `/${Paths.ourWork}/${Paths.collectiveCreativeLabs}` },
    { name: 'Hire Global Talent', img: hgt, hasLink: true, link: `/${Paths.ourWork}/${Paths.hireGlobalTalent}`, text: "Designed a complete recruitment platform with dedicated portals for employers, candidates, and administrators, streamlining hiring workflows through role-based management.", },
    { name: 'care.com', img: 'https://placehold.co/120x50/ffffff/000000?text=care.com&font=montserrat' },
    // { name: 'CROPTRAK', img: 'https://placehold.co/150x50/ffffff/000000?text=CROPTRAK&font=montserrat', hasLink: true },
    // { name: 'enigma', img: 'https://placehold.co/120x50/ffffff/000000?text=enigma&font=montserrat', hasLink: true },
  ];

  const renderCard = (card: any, index: number) => {
    let logoContainerClass = 'card-logo-container';
    if (!card.text && !card.hasLink) logoContainerClass += ' center-all';
    else if (!card.text && card.hasLink) logoContainerClass += ' center-logo';
    else logoContainerClass += ' left-align';

    return (
      <div key={index} className="client-card">
        {card.hasLink && (
          <div className="card-top-link">
            <a href={card.link} className="card-link">
              See case study <FiArrowRight size={14} />
            </a>
          </div>
        )}
        <div className={logoContainerClass}>
          <img src={card.img} alt={card.name} className="card-logo" />
        </div>
        {card.text && (
          <div className="card-text">
            <span className="quote-mark">“ </span>
            {card.text}
            <span className="quote-mark"> ”</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="our-work-container">
      <nav className="breadcrumbs" aria-label="breadcrumb">
        <Link to="/" className="breadcrumb-home-link" aria-label="Home">
          <GoHome size={20} />
        </Link>
        <span className="breadcrumb-sep">{'>'}</span>
        <span className="breadcrumb-current">Our Work</span>
      </nav>

      <div className="hero-section">
        <div className="hero-text">
          <div className="subtitle-top">Our Work</div>
          <h1 className="hero-title">
            Over 10 Years of<br />Over Delivering<span className="dot">.</span>
          </h1>
          <p className="hero-description">
            500+ active clients and a 96%<br />
            retention rate, earned through AI-<br />
            augmented delivery that compounds<br />
            value across every engagement.
          </p>
        </div>

        <div className="hero-images-container">
          <div className="hero-col">
            <div className="hero-image-wrapper" style={{ height: '350px' }}>
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600" alt="Google" />
              <div className="ow-hero-overlay">
                <div className="hero-logo">Google</div>
                {/* <div className="case-study-link">Case study <FiArrowRight /></div> */}
              </div>
            </div>
            <div className="hero-image-wrapper" style={{ height: '220px' }}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="Urban" />
              <div className="ow-hero-overlay">
                <div className="hero-logo" style={{ fontSize: '24px' }}>URBAN</div>
              </div>
            </div>
          </div>
          <div className="hero-col right">
            <div className="hero-image-wrapper" style={{ height: '480px' }}>
              <img src="https://plus.unsplash.com/premium_photo-1661297460381-f75b8ae69a0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nexara Motors" />
              <div className="ow-hero-overlay" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.9))' }}>
                <div className="hero-logo" style={{ fontFamily: 'serif', letterSpacing: '3px', fontSize: '26px', textTransform: 'uppercase' }}>TATA PLAY FIBER</div>
                {/* <div className="case-study-link">Case study <FiArrowRight /></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clients-grid">
        <div className="clients-col">
          {col1.map((card, index) => renderCard(card, index))}
        </div>
        <div className="clients-col">
          {col2.map((card, index) => renderCard(card, index))}
        </div>
        <div className="clients-col">
          {col3.map((card, index) => renderCard(card, index))}
        </div>
      </div>
    </div>
  );
}