import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './pages/home/home.tsx';
import './App.css';
import { Paths } from './constants/route-paths.constants';
import ServicePage from './pages/service-page/service-page.tsx';
import TechnologyPage from './pages/technology-page/technology-page.tsx';
import ServicesListPage from './pages/services-list-page/services-list-page.tsx';
import TechnologiesListPage from './pages/technologies-list-page/technologies-list-page.tsx';
import ContactUs from './pages/contact-us/contact-us.tsx';
import Blog from './pages/blog/blog.tsx';
import BlogDetail from './pages/blog/blog-detail/blog-detail.tsx';
import OurWork from './pages/our-work/our-work.tsx';
import CaseStudyPage from './components/our-work/case-study.tsx';
import PrivacyPolicy from './pages/privacy-policy/privacy-policy.tsx';
import TermsConditions from './pages/terms-conditions/terms-conditions.tsx';
import NotFound from './pages/not-found/not-found.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={`${Paths.services}`} element={<ServicesListPage />} />
          <Route path={`${Paths.services}/:serviceId`} element={<ServicePage />} />
          <Route path={`${Paths.technologies}`} element={<TechnologiesListPage />} />
          <Route path={`${Paths.technologies}/:technologyId`} element={<TechnologyPage />} />
          <Route path={`${Paths.contactUs}`} element={<ContactUs />} />
          <Route path={`${Paths.blog}`} element={<Blog />} />
          <Route path={`${Paths.blog}/:blogId`} element={<BlogDetail />} />
          <Route path={`${Paths.ourWork}`} element={<OurWork />} />
          <Route path={`${Paths.ourWork}/:casestudyId`} element={<CaseStudyPage />} />
          <Route path={Paths.privacyPolicy} element={<PrivacyPolicy />} />
          <Route path={Paths.termsConditions} element={<TermsConditions />} />
          <Route path="portfolio" element={<Navigate to={`/${Paths.ourWork}`} replace />} />
          <Route path="about-us" element={<Navigate to={`/${Paths.contactUs}`} replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 