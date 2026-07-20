import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '/images/logo/solvify-tech-black.webp';
import './navbar.css';
import { Paths } from '../../constants/route-paths.constants';
import { FaChevronDown } from 'react-icons/fa';
import { navbarData } from '../../data/navbar/navbar-data';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveAccordion, setMobileActiveAccordion] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setMobileActiveAccordion(null);
  };

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
          <div className="navbar-logo-area">
            <Link to="/" className="navbar-logo-link" aria-label="BairesDev home">
              <img src={logo} alt="SolvifyTech" className="navbar-logo-img" />
            </Link>
          </div>

          <nav className="desktop-navbar-nav" aria-label="BairesDev main navigation">
            <ul className="navbar-menu-list">
              {navbarData.map((menu) => {
                const hasDropdown = !!menu.desktop;
                const pathTarget = menu.key === 'services'
                  ? `/${Paths.services}`
                  : menu.key === 'solutions'
                  ? `/${Paths.technologies}`
                  : menu.key === 'about-us'
                  ? `/${Paths.contactUs}`
                  : menu.path;

                if (!hasDropdown) {
                  return (
                    <li key={menu.key} className="navbar-menu-item" onClick={closeMenu}>
                      <NavLink
                        to={pathTarget || '#'}
                        className={({ isActive }) => `navbar-link-btn flat-link ${isActive ? 'active' : ''}`}
                      >
                        {menu.label}
                      </NavLink>
                    </li>
                  );
                }

                return (
                  <li
                    key={menu.key}
                    className="navbar-menu-item dropdown-trigger"
                    onMouseEnter={() => handleMouseEnter(menu.key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={pathTarget || '#'}
                      className={`navbar-link-btn ${activeDropdown === menu.key ? 'active' : ''}`}
                      onClick={closeMenu}
                    >
                      {menu.label}
                      <FaChevronDown className={`chevron-icon ${activeDropdown === menu.key ? 'rotate-180' : ''}`} size={16}
                      />
                    </Link>

                    {menu.desktop && (
                      <div className={`megamenu-dropdown ${activeDropdown === menu.key ? 'visible' : ''}`} onClick={closeMenu} >
                        <div className={`megamenu-inner-grid ${menu.key === "services" ? "megamenu-services-grid" : ""}`} >
                          <div className="megamenu-left-panel">
                            <h3 className="megamenu-title">{menu.desktop.title}</h3>
                            <p className="megamenu-subtitle">{menu.desktop.subtitle}</p>
                            <div className="mm-stats-grid">
                              {menu.desktop.stats.map((stat, idx) => (
                                <div key={idx} className="mm-stat-card">
                                  <span className="mm-stat-value">
                                    {String(stat.value).includes("+") || String(stat.value).includes("%") ? (
                                      <>
                                        {String(stat.value).replace(/[+%]/, "")}
                                        <span className="mm-stat-unit">
                                          {String(stat.value).includes("+") ? "+" : "%"}{" "}
                                        </span>
                                      </>
                                    ) : (stat.value)}
                                  </span>
                                  <span className="mm-stat-label">{stat.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {menu.desktop.sections.map((section, sectionIdx) => (
                            <div
                              key={sectionIdx}
                              className={
                                menu.key === "services"
                                  ? sectionIdx === 0
                                    ? "megamenu-middle-panel"
                                    : "megamenu-right-panel"
                                  : (section as any).grid
                                    ? "megamenu-middle-panel w-full-grid"
                                    : "megamenu-column"
                              }
                            >
                              <span className="megamenu-section-header">{section.title}</span>
                              <div className={(section as any).grid ? "megamenu-links-grid grid-cols-3" : "megamenu-links-list"} >
                                {section.links.map((link) => (
                                  <Link key={link.path} to={link.path} className="grid-link">
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="navbar-actions-area">
            <Link to={`/${Paths.contactUs}`} className="btn-schedule-call"> Book a Discovery Call </Link>
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

      <div
        className={`navbar-desktop-backdrop ${activeDropdown ? 'visible' : ''}`}
        onMouseEnter={handleMouseLeave}
      ></div>

      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner" onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) closeMenu();
        }}>
          <ul className="mobile-menu-list">
            {navbarData.map((menu) => {
              if (menu.path) {
                return (
                  <li key={menu.key} className="mobile-menu-item">
                    <Link to={menu.path} className="mobile-flat-link"> {menu.label} </Link>
                  </li>
                );
              }

              return (
                <li key={menu.key} className="mobile-menu-item">
                  <button
                    type="button"
                    className={`mobile-accordion-toggle ${mobileActiveAccordion === menu.key ? 'active' : ''}`}
                    onClick={() => toggleMobileAccordion(menu.key)}
                  >
                    {menu.label}
                    <FaChevronDown className={`chevron-icon ${mobileActiveAccordion === menu.key ? 'rotate-180' : ''}`} size={18} />
                  </button>
                  <div className={`mobile-accordion-content ${mobileActiveAccordion === menu.key ? 'expanded' : ''}`}>
                    <div className="mobile-sublinks-wrapper">
                      {menu.desktop?.sections.map((section, idx) => (
                        <React.Fragment key={idx}>
                          <span className="mobile-group-title mt-2">{section.title}</span>
                          {section.links.map((link) => (
                            <Link key={link.path} to={link.path} className="mobile-sublink">
                              {link.label}
                            </Link>
                          ))}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mobile-menu-footer">
            <Link to={`/${Paths.contactUs}`} className="btn-mobile-schedule"> Schedule a Call </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;