import './hero-project-banner.css';
import { Link } from 'react-router-dom';
import { Paths } from '../../../constants/route-paths.constants';

export default function HeroProjectBanner() {
  return (
    <section className="hero-banner-section">
      <div className="container hero-banner-container">
        <div className="hb-left">
          <h2 className="hb-heading">
            Want to accelerate software<br />
            development at your company?<br />
            <span className="text-orange">See how we can help.</span>
          </h2>
          <Link to={`${Paths.contactUs}`} className="hb-cta-btn">Schedule a Call</Link>
        </div>
        
        <div className="hb-right">
          <div className="hb-image-wrapper">
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
               alt="Team collaborating on software development" 
             />
          </div>
        </div>
      </div>
    </section>
  );
}