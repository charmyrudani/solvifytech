import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './components/home/home';
import { ServicesPage, TechnologiesPage, IndustriesPage, AboutPage, OurWorkPage, BlogPage, ScheduleCallPage,
} from './components/pages/stub-pages';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="technologies" element={<TechnologiesPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="our-work" element={<OurWorkPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="schedule-call" element={<ScheduleCallPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

