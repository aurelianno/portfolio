/**
 * NotFound Page Component
 * 
 * Enhanced 404 error page with animations, better styling, and navigation options.
 * Provides a user-friendly experience when users encounter broken links.
 * 
 * @component
 * @returns {JSX.Element} Styled 404 page with navigation options
 */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center space-y-8 max-w-md"
      >
        {/* 404 Number */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-bold gradient-text">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-black">Page Not Found</h2>
        </motion.div>

        {/* Error Message */}
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-600 leading-relaxed"
        >
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </motion.p>

        {/* Navigation Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2"
            >
              <FiHome className="w-4 h-4" />
              <span>Go Home</span>
            </motion.button>
          </Link>
          
          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center space-x-2"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </motion.button>
        </motion.div>

        {/* Additional Help */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500 mb-4">
            Need help? Feel free to get in touch:
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="mailto:ceballos4@outlook.com"
              className="text-black hover:text-gray-600 transition-colors font-medium"
            >
              ceballos4@outlook.com
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound; 