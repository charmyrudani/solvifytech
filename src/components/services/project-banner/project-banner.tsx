import './project-banner.css';
import { FaArrowRight } from "react-icons/fa";

export default function ProjectBanner({ data }: any) {
    if (!data) return null;

    return (
        <section className="project-banner-section">
            <div className="container">
                <h2 className="project-banner-title">
                    {/* See why the biggest names in tech choose our {data.serviceName} services. */}
                    Curious how we’d approach your {data.serviceName} project?
                </h2>
                <button className="project-banner-btn">
                    Let's Discuss Your Project <span className="ms-2"><FaArrowRight />
                    </span>
                </button>
            </div>
        </section>
    );
}