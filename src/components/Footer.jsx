/**
 * Footer Component
 * 
 * Displays the site footer with brand information, navigation links, social media connections,
 * and contact details. Features smooth scrolling navigation and animated social media icons.
 * 
 * @component
 * @returns {JSX.Element} Footer component with responsive grid layout
 */
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  // Get current year for copyright display
  const currentYear = new Date().getFullYear();

  // Social media links configuration with icons and metadata
  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/aurelianno", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/aureliano-ceballos-17b085186/", label: "LinkedIn" },
    { icon: FiMail, href: "mailto:ceballos4@outlook.com", label: "Email" }
  ];

  // Navigation links for smooth scrolling to page sections
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  /**
   * Smooth scrolls to the specified section on the page
   * @param {string} sectionId - CSS selector for the target section
   */
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content with responsive grid layout */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section - Spans 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-4 pr-8">
            <h3 className="text-2xl font-bold">Aureliano Ceballos</h3>
            <p className="text-gray-300 leading-relaxed">
              Full-Stack Developer passionate about creating efficient, scalable solutions that bridge innovative design with robust functionality.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-wider uppercase">Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media and Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-wider uppercase">Connect</h4>
            {/* Animated social media icons with hover effects */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            {/* Contact information with clickable email and phone */}
             <div className="pt-2 text-gray-300">
                <a href="mailto:ceballos4@outlook.com" className="hover:text-white transition-colors block">ceballos4@outlook.com</a>
                <a href="tel:602-316-4018" className="hover:text-white transition-colors block">602-316-4018</a>
            </div>
          </div>
        </div>

        {/* Copyright notice with dynamic year */}
        <div className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Aureliano Ceballos. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;