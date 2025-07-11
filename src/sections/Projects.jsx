/**
 * Projects Section Component
 * 
 * Displays a curated selection of featured projects with detailed descriptions, technology stacks,
 * and interactive links. Features responsive grid layout with hover animations and project screenshots.
 * Includes both featured and regular projects with different visual treatments.
 * 
 * @component
 * @returns {JSX.Element} Projects section with animated project cards and interactive elements
 */
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiDatabase, FiServer, FiGlobe } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import cdsScreenshot from '../assets/images/portfolio_ss.png';
import tasktrackerScreenshot from '../assets/images/tasktracker+_ss.png';

const Projects = () => {
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

  // Project data with metadata, links, and technology stacks
  const projects = [
    {
      title: "Ceballos Digital Solutions",
      description: "A software freelancing company helping businesses build their online presence and develop custom software solutions. Complete business website with modern design and client-focused messaging.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
      links: {
        live: "https://ceballosdigitalsolutions.com"
      },
      icon: FiGlobe,
      featured: true
    },
    {
      title: "TaskTracker+",
      description: "Comprehensive task management platform with team collaboration, role-based access control, and advanced analytics. Features real-time updates, task assignments, performance tracking, and interactive dashboards with detailed insights and productivity metrics.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "JWT Auth", "Docker", "Chart.js", "Socket.IO"],
      links: {
        live: "#",
        github: "https://github.com/aurelianno",
        ios: "coming-soon",
        android: "coming-soon"
      },
      icon: FiCode,
      featured: true
    },
    {
      title: "Blackjack & Poker App",
      description: "Multiplayer card game platform with real-time gameplay using WebSockets. Implements core game logic, user authentication, session tracking, and responsive UI for interactive gaming experience.",
      tech: ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "Material-UI", "JWT"],
      links: {
        live: "#",
        github: "https://github.com/aurelianno",
        ios: "coming-soon",
        android: "coming-soon"
      },
      icon: FiServer,
      featured: false
    },
    {
      title: "FastAPI Business Data Service",
      description: "Backend service for importing and querying business-symptom data using modern Python technologies. Features robust API design, database migrations, and efficient data processing capabilities.",
      tech: ["FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "Python", "REST API"],
      links: {
        github: "https://github.com/aurelianno/advinow-interview-challenge"
      },
      icon: FiDatabase,
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main container with scroll-triggered animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-16"
        >
          {/* Section header with title and description */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work spanning full-stack applications, business solutions, and backend services
            </p>
          </motion.div>

          {/* Projects grid with responsive layout */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`group relative bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''
                }`}
              >
                {/* Project content with metadata and links */}
                <div className="p-8 space-y-6">
                  {/* Project header with icon and featured badge */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <project.icon className="w-8 h-8 text-black" />
                      <h3 className="text-2xl font-semibold text-black">{project.title}</h3>
                    </div>
                    {project.featured && (
                      <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Project description */}
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>

                  {/* Technology stack with styled tags */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-black uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive project links with platform-specific styling */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {/* Live demo link with conditional styling */}
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-2 px-6 py-2 rounded-full transition-colors text-sm ${
                           project.title === 'Ceballos Digital Solutions'
                             ? 'bg-black text-white hover:bg-gray-800'
                             : 'border-2 border-black text-black hover:bg-black hover:text-white'
                         }`}
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span>{project.title === 'Ceballos Digital Solutions' ? 'Visit Website' : 'View Live Demo'}</span>
                      </motion.a>
                    )}

                    {/* iOS app link */}
                    {project.links.ios && (
                      <motion.button
                        onClick={() => project.links.ios === 'coming-soon' ? null : window.open(project.links.ios, '_blank')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-2 px-6 py-2 rounded-full transition-colors text-sm ${
                          project.links.ios === 'coming-soon' 
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                            : 'border-2 border-black text-black hover:bg-black hover:text-white'
                        }`}
                        disabled={project.links.ios === 'coming-soon'}
                      >
                        <FaApple className="w-4 h-4" />
                        <span>{project.links.ios === 'coming-soon' ? 'Coming Soon' : 'Try on iOS'}</span>
                      </motion.button>
                    )}

                    {/* Android app link */}
                    {project.links.android && (
                      <motion.button
                        onClick={() => project.links.android === 'coming-soon' ? null : window.open(project.links.android, '_blank')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-2 px-6 py-2 rounded-full transition-colors text-sm ${
                          project.links.android === 'coming-soon' 
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                            : 'border-2 border-black text-black hover:bg-black hover:text-white'
                        }`}
                        disabled={project.links.android === 'coming-soon'}
                      >
                        <FaGooglePlay className="w-4 h-4" />
                        <span>{project.links.android === 'coming-soon' ? 'Coming Soon' : 'Try on Android'}</span>
                      </motion.button>
                    )}
                    
                    {/* GitHub repository link */}
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 border-2 border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors text-sm"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span>View Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Featured project screenshot with hover effects */}
                {project.featured && (
                  <div className="hidden lg:flex bg-gray-100 items-center justify-center overflow-hidden">
                    <motion.img 
                      src={
                        project.title === 'Ceballos Digital Solutions' ? cdsScreenshot :
                        project.title === 'TaskTracker+' ? tasktrackerScreenshot : ''
                      } 
                      alt={`${project.title} screenshot`}
                      className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Call-to-action for additional projects */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-600 mb-6">Want to see more of my work?</p>
            <motion.a
              href="https://github.com/aurelianno"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors"
            >
              <FiGithub className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;