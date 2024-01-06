// App.js or Portfolio.js
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ProjectsSection from './components/ProjectsSection';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <Header />
      <AboutMe />
       <ProjectsSection />
        <Blog />
  <ContactForm /> 
      {/* More components can be added as needed */}
    </div>
  );
}

export default Portfolio;

