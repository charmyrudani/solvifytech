import { FiArrowRight } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import tap1ce from '/images/our-work/tap1ce.webp'
import hgt from '/images/our-work/hgt.webp'
import ccl from '/images/our-work/ccl.webp'
import doccure from '/images/our-work/doccure.webp'
import winesOfNZ from '/images/our-work/wines-of-nz.webp'
import tataPlayFiber from '/images/our-work/tata-play-fiber.webp'
import marriott from '/images/our-work/marriott.webp'
import './our-work.css';
import { Paths } from "../../constants/route-paths.constants";
// import { winesOfNZ } from "../../data/case-study/winesOfNZ";

export default function OurWork() {
  const col1 = [
    { name: 'MARRIOT', img: marriott, hasLink: true, link: `/${Paths.ourWork}/${Paths.marriott}` },
    { name: 'GRAINGER', img: 'https://placehold.co/150x50/ffffff/000000?text=GRAINGER&font=montserrat' },
    // { name: 'arlo', img: 'https://placehold.co/120x60/ffffff/000000?text=arlo&font=montserrat', hasLink: true },
    // { name: 'AVIGILON', img: 'https://placehold.co/150x50/ffffff/000000?text=AVIGILON&font=montserrat', hasLink: true },
    { name: 'TATA PLAY FIBER', img: tataPlayFiber, hasLink: true, text: "BairesDev has been a great business partner, providing quality development resources to augment a High-performing and fast-moving development team.",  link: `/${Paths.ourWork}/${Paths.tataPlayFiber}` },
    { name: 'chime', img: 'https://placehold.co/120x50/ffffff/000000?text=chime&font=montserrat' },
    { name: 'ebay', img: 'https://placehold.co/120x50/ffffff/000000?text=ebay&font=montserrat' },
  ];

  const col2 = [
    { name: 'abbvie', img: 'https://placehold.co/150x50/ffffff/000000?text=abbvie&font=montserrat' },
    // { name: 'ACUMEN', img: 'https://placehold.co/150x50/ffffff/000000?text=ACUMEN&font=montserrat', hasLink: true },
    { name: 'DOCCURE', img: doccure, hasLink: true, text: "From our very first meeting with the team at BairesDev, we were confident that we'd selected the best partner.", link: `/${Paths.ourWork}/${Paths.doccure}` },
    { name: 'BBVA', img: 'https://placehold.co/120x50/ffffff/000000?text=BBVA&font=montserrat' },
    { name: 'BURGER KING', img: 'https://placehold.co/100x100/ffffff/000000?text=BURGER+KING&font=montserrat' },
    { name: 'WINES OF NZ', img: winesOfNZ, hasLink: true, text: "By working with BairesDev we were able to quickly augment our internal staff and find exactly what talent we were looking for.",  link: `/${Paths.ourWork}/${Paths.winesOfNZ}` },
  ];

  const col3 = [
    { name: 'tap1ce', img: tap1ce, hasLink: true, text: "We are extremely satisfied with their collaboration and achievement. We are happy to have given BairesDev a chance to earn our trust.", link: `/${Paths.ourWork}/${Paths.tap1ce}` },
    { name: 'Collective Creative Labs', img: ccl, hasLink: true, text: "Creating a new product is the fun part of programming, and the BairesDev team was great at it, but what wowed me was the curiosity and determination that drove their approach to QA.", link: `/${Paths.ourWork}/${Paths.collectiveCreativeLabs}` },
    { name: 'Hire Global Talent', img: hgt, hasLink: true,  link: `/${Paths.ourWork}/${Paths.hireGlobalTalent}`  },
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
      <div className="breadcrumbs">
        <GoHome size={20} />
        <span style={{ color: '#9ca3af' }}>{'>'}</span>
        <span>Our Clients</span>
      </div>

      <div className="hero-section">
        <div className="hero-text">
          <div className="subtitle-top">Our Clients</div>
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
                <div className="case-study-link">Case study <FiArrowRight /></div>
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
              <img src="https://images.unsplash.com/photo-1631522851493-27e69f8de6df?auto=format&fit=crop&q=80&w=600" alt="Rolls Royce" />
              <div className="ow-hero-overlay" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.9))' }}>
                <div className="hero-logo" style={{ fontFamily: 'serif', letterSpacing: '2px', fontSize: '28px' }}>ROLLS ROYCE</div>
                <div className="case-study-link">Case study <FiArrowRight /></div>
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