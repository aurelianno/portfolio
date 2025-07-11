/**
 * Contact Section Component
 * 
 * Provides contact information and a functional contact form with validation and submission handling.
 * Features real-time form validation, loading states, and success/error feedback using Formspree integration.
 * Includes contact details, social media links, and animated form interactions.
 * 
 * @component
 * @returns {JSX.Element} Contact section with form and contact information
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, 
  FiGithub, 
  FiLinkedin, 
  FiPhone, 
  FiMapPin, 
  FiSend,
  FiCheckCircle,
  FiAlertCircle
} from 'react-icons/fi';

const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  /**
   * Validates form fields and sets error messages
   * @returns {boolean} True if form is valid, false otherwise
   */
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handles form submission to Formspree service
   * @param {Event} e - Form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch("https://formspree.io/f/mpwrjqyw", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Formspree failed...', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Handles form field changes and clears validation errors
   * @param {Event} e - Input change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

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

  // Contact information with icons and clickable links
  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "ceballos4@outlook.com",
      href: "mailto:ceballos4@outlook.com"
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "602-316-4018",
      href: "tel:602-316-4018"
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Phoenix, Arizona",
      href: null
    }
  ];

  // Social media links with icons and URLs
  const socialLinks = [
    {
      icon: FiGithub,
      label: "GitHub",
      href: "https://github.com/aurelianno"
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aureliano-ceballos-17b085186/"
    },
    {
      icon: FiMail,
      label: "Email",
      href: "mailto:ceballos4@outlook.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-20">
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
            <h2 className="text-4xl md:text-5xl font-bold text-black">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm actively seeking new opportunities in software engineering. If you're looking for a passionate developer to join your team, let's connect.
            </p>
          </motion.div>

          {/* Two-column layout: contact info and form */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left column: Contact information and social links */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-black mb-6">Let's Connect</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  My goal is to leverage my skills in a challenging role that encourages continuous learning and growth. I'm eager to contribute to innovative projects and collaborate with experienced developers. If you have a role that seems like a good fit, please don't hesitate to get in touch.
                </p>
              </div>

              {/* Contact details with hover animations */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-black hover:text-gray-600 transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-black font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social media links with hover effects */}
              <div>
                <h4 className="text-lg font-semibold text-black mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right column: Contact form with validation */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name and email fields in responsive grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`} 
                      placeholder="Your full name" 
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-1 animate-fade-in">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`} 
                      placeholder="your.email@example.com" 
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1 animate-fade-in">{errors.email}</p>}
                  </div>
                </div>
                
                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    className={`input-field ${errors.subject ? 'border-red-500 focus:ring-red-500' : ''}`} 
                    placeholder="What's this about?" 
                  />
                  {errors.subject && <p className="text-red-600 text-sm mt-1 animate-fade-in">{errors.subject}</p>}
                </div>
                
                {/* Message textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows={5} 
                    className={`input-field resize-vertical ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`} 
                    placeholder="Tell me about your project..." 
                  />
                  {errors.message && <p className="text-red-600 text-sm mt-1 animate-fade-in">{errors.message}</p>}
                </div>
                
                {/* Submit button with loading state */}
                <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }} className={`w-full flex items-center justify-center space-x-2 px-8 py-3 rounded-lg font-medium transition-colors ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800'}`}>
                  {isSubmitting ? (
                    <>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
                
                {/* Success/error feedback with animations */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className={`flex items-center space-x-3 p-4 mt-4 rounded-lg border ${submitStatus === 'success' ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200'}`}>
                      {submitStatus === 'success' ? <FiCheckCircle className="w-5 h-5" /> : <FiAlertCircle className="w-5 h-5" />}
                      <span>
                        {submitStatus === 'success' 
                          ? 'Message sent! I\'ll get back to you soon.'
                          : 'Something went wrong. Please try again.'}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;