import { useParams } from "react-router-dom";
import HeroSection from "../../components/services/hero-section/hero-section";
import ServiceOverview from "../../components/services/service-overview/service-overview";
import DevelopmentTeam from "../../components/services/development-team/development-team";
import IndustriesSolutions from "../../components/services/industries-solutions/industries-solutions";
import AIExperts from "../../components/services/ai-experts/ai-experts";
import Capabilities from "../../components/services/capabilities/capabilities";
import ProjectBanner from "../../components/services/project-banner/project-banner";
import { getTechnology } from "../../data/technology/service-helper";

export default function TechnologyPage() {
    const { technologyId } = useParams();

    const data = getTechnology(technologyId!);

    if (!data) {
        return <h1>Technology Not Found</h1>;
    }

    return (
        <>
            <HeroSection data={data} />
            <ServiceOverview data={data.serviceOverview} />
            <DevelopmentTeam data={data.developmentTeam} serviceName={data.hero.serviceName} />
            <IndustriesSolutions data={data.industriesSolutions}/>
            <AIExperts/>
            <Capabilities data={data.capabilities} />
            <ProjectBanner data={data.hero}/>
        </>
    );
}