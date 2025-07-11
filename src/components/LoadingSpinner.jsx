/**
 * LoadingSpinner Component
 * 
 * A reusable loading spinner with smooth animations and customizable styling.
 * Used for loading states, page transitions, and async operations.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.size - Size of the spinner ('sm', 'md', 'lg')
 * @param {string} props.color - Color of the spinner
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Loading spinner component
 */
import { motion } from 'framer-motion';

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'black', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    black: 'border-black',
    white: 'border-white',
    gray: 'border-gray-400'
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-t-transparent rounded-full ${colorClasses[color]}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default LoadingSpinner; 