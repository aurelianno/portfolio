/**
 * Skills Section Component
 * 
 * Displays technical skills organized by categories with progress bars and proficiency levels.
 * Features animated progress bars, interactive skill cards, and programming language indicators.
 * Organized in a responsive grid layout with additional technology sections.
 * 
 * @component
 * @returns {JSX.Element} Skills section with animated progress bars and skill categories
 */
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiGlobe, 
  FiGitBranch,
  FiLayers
} from 'react-icons/fi';

const Skills = () => {
  // Animation variants for container with staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  // Animation variants for individual items with fade-in and slide-up effect
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Skill categories with proficiency levels (0-100)
  const skillCategories = [
    {
      title: "Frontend",
      icon: FiCode,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Material-UI", level: 75 },
        { name: "Redux", level: 70 }
      ]
    },
    {
      title: "Backend",
      icon: FiServer,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "FastAPI", level: 70 },
        { name: "Flask", level: 65 },
        { name: "Socket.IO", level: 75 }
      ]
    },
    {
      title: "Database",
      icon: FiDatabase,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "Firebase", level: 70 },
        { name: "SQLAlchemy", level: 65 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: FiGitBranch,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Netlify", level: 80 },
        { name: "Render", level: 75 }
      ]
    }
  ];

  // Programming languages with color-coded indicators
  const languages = [
    { name: "JavaScript", color: "bg-yellow-400" },
    { name: "Python", color: "bg-blue-500" },
    { name: "Java", color: "bg-red-500" },
    { name: "C/C++", color: "bg-blue-600" },
    { name: "SQL", color: "bg-green-500" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 scroll-mt-20">
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
            <h2 className="text-4xl md:text-5xl font-bold text-black">Technical Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications from frontend to backend
            </p>
          </motion.div>

          {/* Programming languages with color-coded indicators */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h3 className="text-2xl font-semibold text-black">Programming Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-soft hover:shadow-medium transition-shadow duration-200"
                >
                  <div className={`w-3 h-3 rounded-full ${lang.color}`}></div>
                  <span className="font-medium text-gray-800">{lang.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills grid with animated progress bars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Category header with icon */}
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon className="w-6 h-6 text-black" />
                  <h3 className="text-xl font-semibold text-black">{category.title}</h3>
                </div>

                {/* Skills list with animated progress bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      
                      {/* Animated progress bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-black h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional technologies organized by category */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h3 className="text-2xl font-semibold text-black">Additional Technologies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <FiLayers className="w-8 h-8 text-black mx-auto mb-3" />
                <h4 className="font-semibold text-black mb-2">Frameworks & Libraries</h4>
                <p className="text-gray-600 text-sm">Bootstrap, Chart.js, Axios, Pandas, NumPy, Matplotlib</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <FiGlobe className="w-8 h-8 text-black mx-auto mb-3" />
                <h4 className="font-semibold text-black mb-2">Hosting & Deployment</h4>
                <p className="text-gray-600 text-sm">Netlify, Render, Firebase, MongoDB Atlas, GitHub Actions</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <FiCode className="w-8 h-8 text-black mx-auto mb-3" />
                <h4 className="font-semibold text-black mb-2">Development Tools</h4>
                <p className="text-gray-600 text-sm">PyCharm, IntelliJ, Eclipse, Redis, JWT Authentication</p>
              </div>
            </div>
          </motion.div>

          {/* Current learning focus */}
          <motion.div 
            variants={itemVariants}
            className="text-center bg-white p-8 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold text-black mb-4">Currently Exploring</h3>
            <p className="text-gray-600">
              Advanced React patterns, TypeScript, Cloud architecture (AWS), and modern testing frameworks
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;