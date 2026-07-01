import { useParams } from "react-router-dom";
import { getService } from "../../data/services/service-helper";
import HeroSection from "../../components/services/hero-section/hero-section";
import ServiceOverview from "../../components/services/service-overview/service-overview";
import DevelopmentTeam from "../../components/services/development-team/development-team";
import IndustriesSolutions from "../../components/services/industries-solutions/industries-solutions";
import AIExperts from "../../components/services/ai-experts/ai-experts";
import Capabilities from "../../components/services/capabilities/capabilities";

export default function ServicePage() {
    const { serviceId } = useParams();

    const data = getService(serviceId!);

    if (!data) {
        return <h1>Service Not Found</h1>;
    }

    return (
        <>
            <HeroSection data={data} />
            <ServiceOverview data={data.serviceOverview} />
            <DevelopmentTeam data={data.developmentTeam}/>
            <IndustriesSolutions data={data.industriesSolutions}/>
            <AIExperts/>
            <Capabilities data={data.capabilities} />
        </>
    );
}