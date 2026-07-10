import HeroSection from "./hero-section/hero-section"
import TechStack from "./tech-stack/tech-stack-section"
import TechMarquee from "./tech-stack/tech-marquee"
import TestimonialsSection from "./testimonials/testimonials-section"
import Insights from "./insights/insights"
import Team from "./team-members/team"
import ProjectProcess from "./project-process/project-process"
import HeroProjectBanner from "./hero-project-banner/hero-project-banner"

export default function Home() {
    return (
        <>
            <HeroSection />
            <TechStack />
            <TechMarquee />
            <TestimonialsSection />
            <ProjectProcess/>
            <Team/>
            <Insights />
            <HeroProjectBanner/>
        </>
    )
}