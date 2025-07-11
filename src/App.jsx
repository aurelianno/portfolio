/*
 * App.jsx
 *
 * Main application component for the portfolio site. Handles routing, layout, and global behaviors such as smooth scrolling.
 * Uses React Router for page navigation and includes persistent Header and Footer components.
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

/**
 * App
 *
 * Root component that sets up routing and global layout. Applies smooth scrolling behavior
 * and ensures consistent structure across all pages.
 */
function App() {
  useEffect(() => {
    // Enable smooth scrolling for the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle hash navigation (for smooth scrolling to sections)
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial hash if present

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <Router>
      {/* Main layout: header, routed content, and footer */}
      <div className="w-full flex flex-col min-h-screen bg-white text-black">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;