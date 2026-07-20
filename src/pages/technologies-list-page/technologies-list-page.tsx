import { Link, useNavigate } from 'react-router-dom';
import { navbarData } from '../../data/navbar/navbar-data';
import { TECHNOLOGY } from '../../data/technology';
import { Paths } from '../../constants/route-paths.constants';
import { GoHome } from 'react-icons/go';
import { 
  FiMonitor, FiDatabase, FiCloud, 
  FiGlobe, FiCode, FiActivity, FiCpu 
} from 'react-icons/fi';
import { 
  FaReact, FaNodeJs, FaAws, FaDocker, 
  FaShopify, FaMobileAlt, FaPython, FaWordpress 
} from 'react-icons/fa';
import './technologies-list-page.css';
import industryImage from '/images/hero-section/hero5.png';

// Category Header Icon Mapper
const getCategoryIcon = (title: string) => {
  if (title.includes('Frontend')) {
    return <FiMonitor className="tlp-cat-icon" />;
  } else if (title.includes('Backend') || title.includes('Database')) {
    return <FiDatabase className="tlp-cat-icon" />;
  } else {
    return <FiCloud className="tlp-cat-icon" />;
  }
};

// Technology Card Icon Mapper
const getTechIcon = (slug: string) => {
  switch (slug) {
    case 'reactjs':
      return <FaReact />;
    case 'nextjs':
      return <FiGlobe />;
    case 'typescript':
      return <FiCode />;
    case 'nodejs':
      return <FaNodeJs />;
    case 'postgresql':
      return <FiDatabase />;
    case 'aws':
      return <FaAws />;
    case 'docker':
      return <FaDocker />;
    case 'shopify':
      return <FaShopify />;
    case 'react-native':
      return <FaMobileAlt />;
    case 'python':
      return <FaPython />;
    case 'mongodb':
      return <FiDatabase />;
    case 'wordpress':
      return <FaWordpress />;
    case 'graphql':
      return <FiActivity />;
    case 'redis':
      return <FiDatabase />;
    case 'strapi':
      return <FiDatabase />;
    case 'ai':
    case 'ai-automation':
      return <FiCpu />;
    default:
      return <FiCode />;
  }
};

export default function TechnologiesListPage() {
  const navigate = useNavigate();
  const solutionsConfig = navbarData.find((item) => item.key === 'solutions');
  const allTechLinks = solutionsConfig?.desktop?.sections?.[0]?.links || [];

  const techCategories = [
    {
      title: 'Frontend & Mobile Development',
      slugs: ['reactjs', 'nextjs', 'typescript', 'react-native', 'shopify', 'wordpress', 'strapi'],
    },
    {
      title: 'Backend & Database Systems',
      slugs: ['nodejs', 'python', 'postgresql', 'mongodb', 'redis', 'graphql'],
    },
    {
      title: 'AI, Automation & Cloud DevOps',
      slugs: ['ai', 'ai-automation', 'aws', 'docker'],
    },
  ];

  return (
    <div className="tlp-page-container">
      {/* Breadcrumbs */}
      <div className="tlp-breadcrumbs-container">
        <div className="tlp-breadcrumbs-content">
          <Link to="/" className="tlp-breadcrumb-link tlp-home-icon-link">
            <GoHome className="tlp-breadcrumb-home-icon" />
          </Link>
          <span className="tlp-breadcrumb-separator">&gt;</span>
          <span className="tlp-breadcrumb-current">Technologies</span>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="tlp-hero-section">
        <div className="tlp-hero-container">
          <div className="tlp-hero-text">
            <span className="tlp-hero-subtitle">OUR TECHNOLOGICAL EXPERTISE</span>
            <h1 className="tlp-hero-title">
              Scale your business with <span className="tlp-highlight-orange">cutting-edge tech.</span>
            </h1>
            <p className="tlp-hero-description">
              We leverage the latest frameworks, tools, and languages to build secure, scalable, and resilient software. Explore our stack and partner with the best-in-class engineers to grow your organization.
            </p>
          </div>
          <div className="tlp-hero-image-wrapper">
            <div className="tlp-custom-shape-container">
              <img src={industryImage} alt="Cutting edge technology stack" className="tlp-hero-img" />
              <div className="tlp-shape-overlay-bubble"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Grid Section */}
      <section className="tlp-grid-section">
        <div className="tlp-grid-container">
          {techCategories.map((category, catIdx) => (
            <div key={category.title || catIdx} className="tlp-category-group">
              <h2 className="tlp-category-header">
                {getCategoryIcon(category.title)}
                {category.title}
              </h2>
              
              <div className="tlp-cards-grid">
                {category.slugs.map((slug) => {
                  const techData = TECHNOLOGY[slug as keyof typeof TECHNOLOGY];
                  const matchingNavbarLink = allTechLinks.find(
                    (link: any) => link.path.split('/').pop() === slug
                  );
                  
                  const label = techData?.hero?.serviceName || matchingNavbarLink?.label || slug;
                  const description =
                    techData?.hero?.description ||
                    techData?.serviceOverview?.description ||
                    "Premium software engineering services powered by modern architecture and industry best practices.";
                  
                  return (
                    <div 
                      key={slug} 
                      className="tlp-tech-card"
                      onClick={() => navigate(`/${Paths.technologies}/${slug}`)}
                    >
                      <div className="tlp-card-header-row">
                        <div className="tlp-card-icon-box">
                          {getTechIcon(slug)}
                        </div>
                        <h3 className="tlp-tech-card-title">
                          <Link 
                            to={`/${Paths.technologies}/${slug}`} 
                            className="tlp-tech-card-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {label}
                          </Link>
                        </h3>
                      </div>
                      <p className="tlp-tech-card-description">{description}</p>
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
