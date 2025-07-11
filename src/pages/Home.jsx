/*
 * Home.jsx
 *
 * Main landing page for the portfolio. Composes all major sections (Hero, About, Projects, Skills, Contact)
 * to provide a comprehensive overview of the developer's background and work.
 */

import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';

/**
 * Home
 *
 * Renders the primary sections of the portfolio in order. This is the default route for the site.
 */
function Home() {
  return (
    <>
      {/* Hero section: introduction and CTA */}
      <Hero />
      {/* About section: background and philosophy */}
      <About />
      {/* Projects section: featured work */}
      <Projects />
      {/* Skills section: technical proficiencies */}
      <Skills />
      {/* Contact section: get in touch form and info */}
      <Contact />
    </>
  );
}

export default Home;