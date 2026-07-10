import './project-process.css';
import projectProcess from '/images/hero-section/project-process.webp'
import { FiPhoneCall, FiUsers, FiActivity } from 'react-icons/fi';
import { Paths } from '../../../constants/route-paths.constants';
import { Link } from 'react-router-dom';

export default function ProjectProcess() {
  return (
    <section className="pp-section">
      <div className="container">
        <div className="pp-grid">
          
          <div className="pp-left">
            <h2 className="pp-heading">
              <span className="bold">Our process.</span><br />
              Simple,<br />
              seamless,<br />
              streamlined<span className="dot">.</span>
            </h2>
            <div className="pp-image-wrapper">
              <img 
                src={projectProcess} 
                alt="Professional team working in office" 
                className="pp-image" 
              />
            </div>
          </div>

          <div className="pp-right">
            <div className="pp-right-content">
              <div className="pp-timeline-line"></div>
              
              <div className="pp-timeline">
                
                <div className="pp-step">
                  <div className="pp-step-icon">
                    <FiPhoneCall size={20} />
                  </div>
                  <div className="pp-step-content">
                    <span className="pp-step-label">STEP 1</span>
                    <h3 className="pp-step-title">Join exploration call.</h3>
                    <p className="pp-step-desc">
                      Tell us more about your business on a discovery call. We'll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help.
                    </p>
                  </div>
                </div>

                <div className="pp-step">
                  <div className="pp-step-icon">
                    <FiUsers size={20} />
                  </div>
                  <div className="pp-step-content">
                    <span className="pp-step-label">STEP 2</span>
                    <h3 className="pp-step-title">Discuss solution and team structure.</h3>
                    <p className="pp-step-desc">
                      In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team.
                    </p>
                  </div>
                </div>

                <div className="pp-step">
                  <div className="pp-step-icon">
                    <FiActivity size={20} />
                  </div>
                  <div className="pp-step-content">
                    <span className="pp-step-label">STEP 3</span>
                    <h3 className="pp-step-title">Get started and track performance.</h3>
                    <p className="pp-step-desc">
                      Once we've agreed on milestones, we'll immediately get to work. We'll track progress, report updates, and continuously adapt to your needs.
                    </p>
                  </div>
                </div>
                
              </div>

              <div className="pp-cta-container">
                <Link to={`/${Paths.contactUs}`} className="pp-cta-btn">Schedule a Call</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}