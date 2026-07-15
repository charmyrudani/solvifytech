import { Link } from 'react-router-dom';
import './project-banner.css';
import { FaArrowRight } from "react-icons/fa";
import { Paths } from '../../../constants/route-paths.constants';

export default function ProjectBanner({ data }: any) {
    if (!data) return null;

    return (
        <section className="project-banner-section">
            <div className="container">
                <h2 className="project-banner-title">
                    Curious how we’d approach your {data.serviceName} project?
                </h2>
                <Link to={Paths.contactUs} className="project-banner-btn">
                    Let's Discuss Your Project <span className="ms-2"><FaArrowRight /></span>
                </Link>
            </div>
        </section>
    );
}