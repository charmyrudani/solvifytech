import { Link, useNavigate } from 'react-router-dom';
import { navbarData } from '../../data/navbar/navbar-data';
import { SERVICES } from '../../data/services';
import { GoHome } from 'react-icons/go';
import { 
  FiLayers, FiCpu, FiBriefcase, FiTrendingUp,
  FiShoppingBag, FiGlobe, FiSmartphone, FiFeather, 
  FiCloud, FiUsers, FiMessageSquare, FiZap, FiLink, 
  FiSettings, FiMessageCircle, FiMic, FiGitPullRequest, 
  FiRotateCw, FiBarChart2, FiArrowUpRight, FiFileText, 
  FiSearch, FiLinkedin, FiTarget, FiShare2, FiMail, FiUserPlus 
} from 'react-icons/fi';
import './services-list-page.css';
import industryImage from '/images/hero-section/hero1.jpg';

const getCategoryIcon = (title: string) => {
  switch (title) {
    case 'Top Services':
      return <FiLayers className="slp-cat-icon" />;
    case 'AI & Automation':
      return <FiCpu className="slp-cat-icon" />;
    case 'Enterprise':
      return <FiBriefcase className="slp-cat-icon" />;
    case 'Marketing':
      return <FiTrendingUp className="slp-cat-icon" />;
    default:
      return <FiLayers className="slp-cat-icon" />;
  }
};

const getServiceIcon = (slug: string) => {
  switch (slug) {
    case 'ai-development':
      return <FiCpu />;
    case 'shopify-development':
      return <FiShoppingBag />;
    case 'erp-development':
      return <FiLayers />;
    case 'web-development':
      return <FiGlobe />;
    case 'mobile-app-development':
      return <FiSmartphone />;
    case 'ui-ux-design':
      return <FiFeather />;
    case 'cloud-devops':
      return <FiCloud />;
    case 'ai-agents':
      return <FiUsers />;
    case 'chatbots':
      return <FiMessageSquare />;
    case 'workflow-automation':
      return <FiZap />;
    case 'openai-integration':
      return <FiLink />;
    case 'n8n-automation':
      return <FiSettings />;
    case 'whatsapp-automation':
      return <FiMessageCircle />;
    case 'ai-voice-bots':
      return <FiMic />;
    case 'crm-systems':
      return <FiGitPullRequest />;
    case 'saas-development':
      return <FiLayers />;
    case 'digital-transformation':
      return <FiRotateCw />;
    case 'business-intelligence':
      return <FiBarChart2 />;
    case 'cloud-migration':
      return <FiArrowUpRight />;
    case 'devops-consulting':
      return <FiFileText />;
    case 'seo':
      return <FiSearch />;
    case 'linkedin-marketing':
      return <FiLinkedin />;
    case 'google-ads':
      return <FiTarget />;
    case 'social-media-marketing':
    case 'digital-marketing':
      return <FiShare2 />;
    case 'email-marketing':
      return <FiMail />;
    case 'lead-generation':
      return <FiUserPlus />;
    default:
      return <FiLayers />;
  }
};

export default function ServicesListPage() {
  const navigate = useNavigate();
  const servicesConfig = navbarData.find((item) => item.key === 'services');
  const sections = servicesConfig?.desktop?.sections || [];

  return (
    <div className="slp-page-container">
      <div className="slp-breadcrumbs-container">
        <div className="slp-breadcrumbs-content">
          <Link to="/" className="slp-breadcrumb-link slp-home-icon-link">
            <GoHome className="slp-breadcrumb-home-icon" />
          </Link>
          <span className="slp-breadcrumb-separator">&gt;</span>
          <span className="slp-breadcrumb-current">Services</span>
        </div>
      </div>

      <section className="slp-hero-section">
        <div className="slp-hero-container">
          <div className="slp-hero-text">
            <span className="slp-hero-subtitle">SOFTWARE DEVELOPMENT SERVICES</span>
            <h1 className="slp-hero-title">
              Tap into our end-to-end <span className="slp-highlight-orange">tech solutions.</span>
            </h1>
            <p className="slp-hero-description">
              Deploy fast, scalable, and secure software applications. Partner with the top tech experts to drive innovation, accelerate time-to-market, and scale your business with confidence.
            </p>
          </div>
          <div className="slp-hero-image-wrapper">
            <div className="slp-custom-shape-container">
              <img src={industryImage} alt="Software development solutions team working" className="slp-hero-img" />
              <div className="slp-shape-overlay-bubble"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="slp-grid-section">
        <div className="slp-grid-container">
          {sections.map((section: any, sectionIdx: number) => (
            <div key={section.title || sectionIdx} className="slp-category-group">
              <h2 className="slp-category-header">
                {getCategoryIcon(section.title)}
                {section.title}
              </h2>
              
              <div className="slp-cards-grid">
                {section.links.map((link: any, linkIdx: number) => {
                  const slug = link.path.split('/').pop() || '';
                  const serviceData = SERVICES[slug as keyof typeof SERVICES];
                  
                  const description =
                    serviceData?.hero?.description ||
                    serviceData?.serviceOverview?.description ||
                    "Expert solutions customized to streamline your operations, improve user experience, and support business growth.";
                  
                  return (
                    <div 
                      key={link.label || linkIdx} 
                      className="slp-service-card"
                      onClick={() => navigate(`/${link.path}`)}
                    >
                      <div className="slp-card-header-row">
                        <div className="slp-card-icon-box">
                          {getServiceIcon(slug)}
                        </div>
                        <h3 className="slp-service-card-title">
                          <Link 
                            to={`/${link.path}`} 
                            className="slp-service-card-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {link.label}
                          </Link>
                        </h3>
                      </div>
                      <p className="slp-service-card-description">{description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
