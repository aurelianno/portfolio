/*
 * Header.jsx
 *
 * Main navigation bar for the portfolio site. Handles scroll-based highlighting, smooth section navigation,
 * and responsive mobile menu. Uses Framer Motion for animation and react-icons for iconography.
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiCode, FiAward, FiMail, FiMenu, FiX } from 'react-icons/fi';

/**
 * Header
 *
 * Renders the top navigation bar with animated transitions, active section highlighting,
 * and a responsive mobile menu. Updates active section based on scroll position.
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Tracks if user has scrolled past threshold
  const [activeSection, setActiveSection] = useState('home'); // Currently active section for highlight
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu open state

  useEffect(() => {
    // Handle scroll effects and update active section
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Dynamically determine which section is active based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Smoothly scrolls to the specified section and closes mobile menu if open.
   * @param {string} sectionId - The DOM id of the section to scroll to.
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  // Navigation items for both desktop and mobile
  const navItems = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'about', label: 'About', icon: FiUser },
    { id: 'projects', label: 'Projects', icon: FiCode },
    { id: 'skills', label: 'Skills', icon: FiAward },
    { id: 'contact', label: 'Contact', icon: FiMail },
  ];

  return (
    <>
      {/* Animated header with scroll-based background */}
      <motion.header
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo button scrolls to top */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-black hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              AC
            </motion.button>

            {/* Desktop navigation links */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu open button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black hover:text-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMenu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Animated mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 pt-16">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 text-2xl font-medium text-gray-700 hover:text-black transition-colors"
                >
                  <item.icon className="w-6 h-6" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
            <motion.button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiX className="w-8 h-8" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;