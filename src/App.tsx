import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './pages/home/home.tsx';
import './App.css';
import { Paths } from './constants/route-paths.constants';
import ServicePage from './pages/service-page/service-page.tsx';
import TechnologyPage from './pages/technology-page/technology-page.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={`${Paths.services}/:serviceId`} element={<ServicePage />} />
          <Route path={`${Paths.technologies}/:technologyId`} element={<TechnologyPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 