import HeroSection from "./hero-section/hero-section"
import TechStack from "./tech-stack/tech-stack-section"
import TechMarquee from "./tech-stack/tech-marquee"
import TestimonialsSection from "./testimonials/testimonials-section"
import Insights from "./insights/insights"
import Team from "./team-members/team"

export default function Home() {
    return (
        <>
            <HeroSection />
            <TechStack />
            <TechMarquee />
            <TestimonialsSection />
            <Insights />
            <Team/>
        </>
    )
}