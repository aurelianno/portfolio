/**
 * About Section Component
 * 
 * Displays personal information, professional highlights, and current status.
 * Features staggered animations and interactive highlight cards with hover effects.
 * Organized in a two-column layout with text content and visual highlights.
 * 
 * @component
 * @returns {JSX.Element} About section with animated content and professional highlights
 */
import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  // Animation variants for container with staggered children
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

  // Professional highlights with icons and descriptions
  const highlights = [
    {
      icon: FiCode,
      title: "Clean Code",
      description: "Writing maintainable, efficient code with modern best practices and scalable architecture."
    },
    {
      icon: FiUsers,
      title: "Client-Focused",
      description: "Direct collaboration with clients to understand goals and deliver solutions that exceed expectations."
    },
    {
      icon: FiTrendingUp,
      title: "Continuous Learning",
      description: "Staying current with emerging technologies while running my own business."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main container with scroll-triggered animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-16"
        >
          {/* Section header with title and subtitle */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about creating efficient, scalable solutions that bridge innovative design with robust functionality
            </p>
          </motion.div>

          {/* Two-column layout: text content and highlights */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column: Personal and professional description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a full-stack developer with a passion for creating web applications that solve real-world problems. 
                I hold a Bachelor's in Computer Science with a focus in Software Engineering from Arizona State University, 
                and I run my own software consulting business, <strong>Ceballos Digital Solutions</strong>.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My approach combines technical expertise with strong problem-solving skills and direct client collaboration. 
                I believe in writing clean, maintainable code and staying current with emerging technologies to deliver 
                solutions that not only meet today's needs but scale for tomorrow's growth.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                From building real-time multiplayer applications to developing comprehensive task management platforms, 
                I enjoy tackling complex challenges and turning ideas into functional, user-friendly applications.
              </p>
            </motion.div>

            {/* Right column: Interactive highlight cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <highlight.icon className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Current status section with education and business information */}
          <motion.div 
            variants={itemVariants}
            className="text-center bg-white p-8 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-black mb-4">Status</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <strong>Education:</strong> B.S. in Computer Science (Software Engineering) from Arizona State University
              </div>
              <div>
                <strong>Building:</strong> Custom web solutions through Ceballos Digital Solutions
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;