import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from './footer/footer';
import ScrollToTop from './scroll-to-top';
import './layout.css';

const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
