/**
 * Hero Section Component
 * 
 * The main landing section featuring the developer's name, title, and call-to-action buttons.
 * Implements staggered animations using Framer Motion for a polished entrance effect.
 * Includes social media links and a scroll indicator for enhanced user experience.
 * 
 * @component
 * @returns {JSX.Element} Hero section with animated content and interactive elements
 */
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Hero = () => {
  /**
   * Smooth scrolls to the specified section on the page
   * @param {string} sectionId - ID of the target section element
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants for container with staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  // Animation variants for individual items with fade-in and slide-up effect
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white scroll-mt-20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main content container with staggered animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Name and title with large typography */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-black">
              Aureliano Ceballos
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-light">
              Full-Stack Developer
            </h2>
          </motion.div>

          {/* Professional description with responsive text sizing */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            I create efficient, scalable web solutions that bridge the gap between 
            innovative design and robust functionality. Passionate about clean code 
            and exceptional user experiences.
          </motion.p>

          {/* Call-to-action buttons with hover animations */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Primary CTA - View Projects */}
            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View My Work
            </motion.button>
            
            {/* Secondary CTA - Contact */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Get In Touch
            </motion.button>

            {/* Resume Download */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-black hover:text-black transition-colors"
            >
              <FiDownload className="w-4 h-4" />
              <span>Resume</span>
            </motion.a>
          </motion.div>

          {/* Social media links with hover animations */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: FiGithub, href: 'https://github.com/aurelianno', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/aureliano-ceballos-17b085186/', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:ceballos4@outlook.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-black transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Animated scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center mx-auto"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;