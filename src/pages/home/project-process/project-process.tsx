import './project-process.css';
import projectProcess from '/images/hero-section/project-process.webp';
import { Paths } from '../../../constants/route-paths.constants';
import { Link } from 'react-router-dom';
import { FiSearch, FiClipboard, FiPenTool, FiCode, FiCheckCircle, FiTrendingUp, } from 'react-icons/fi';

const processSteps = [
  {
    id: 1,
    step: 'STEP 1',
    title: 'Discovery and Consultation',
    description:
      'We learn about your business, users, challenges, objectives, budget, and timeline.',
    icon: FiSearch,
  },
  {
    id: 2,
    step: 'STEP 2',
    title: 'Solution Planning',
    description:
      'Our team defines the product scope, technical architecture, project roadmap, and delivery milestones.',
    icon: FiClipboard,
  },
  {
    id: 3,
    step: 'STEP 3',
    title: 'Design and Prototyping',
    description:
      'We create user flows, wireframes, and interactive designs before development begins.',
    icon: FiPenTool,
  },
  {
    id: 4,
    step: 'STEP 4',
    title: 'Agile Development',
    description:
      'Your product is developed in structured sprints with regular demonstrations, feedback, and progress updates.',
    icon: FiCode,
  },
  {
    id: 5,
    step: 'STEP 5',
    title: 'Testing and Launch',
    description:
      'We test performance, security, usability, and compatibility before deploying the final product.',
    icon: FiCheckCircle,
  },
  {
    id: 6,
    step: 'STEP 6',
    title: 'Support and Growth',
    description:
      'After launch, we monitor performance, fix issues, and continue improving the product as your business grows.',
    icon: FiTrendingUp,
  },
];

export default function ProjectProcess() {
  return (
    <section className="pp-section">
      <div className="container">
        <div className="pp-grid">
          <div className="pp-left">
            <h2 className="pp-heading">
              <span className="bold">Our process.</span>
              <br />
              Simple,
              <br />
              seamless,
              <br />
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
                {processSteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div className="pp-step" key={step.id}>
                      <div className="pp-step-icon">
                        <Icon size={20} />
                      </div>

                      <div className="pp-step-content">
                        <span className="pp-step-label">{step.step}</span>

                        <h3 className="pp-step-title">{step.title}</h3>

                        <p className="pp-step-desc">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pp-cta-container">
                <Link to={`/${Paths.contactUs}`} className="pp-cta-btn">
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}