// ProjectsSection.js
import React from 'react';
import '../styles/ProjectsSection.css';

const projects = [
  {
    title: "Quality of Experience Prediction Trends for Live Video Streaming Events",
    description: "Implemented deep learning architecture to predict quality of experience, including data preprocessing and EDA.",
    tools: "Deep Learning, Python",
    href: "https://github.com/sofman65/Quality-of-Experience-Trend-Prediction-in-Real-Streaming-Data.git" 
  },
  {
    title: "Binary Classification Model for HEDNO Datathon - Power Theft Detection",
    description: "Developed a Q-learning based model to classify power theft incidents with data preprocessing, feature engineering, and model validation.",
    tools: "Reinforcement-Learning, Python",
    href: "https://github.com/sofman65/Hedno_Datathon_PowerTheft_Detection.git" 
  },
  {
    title: "Stock Market Index Trend and ROI Prediction - Time Series Forecasting ",
    description: "Analyzed stock market data and applied LSTM for trend prediction with extensive EDA and Sequential Regression Modeling.",
    tools: "ML & AI, Python",
    href: "https://github.com/sofman65/Stock-Trend-Prediction-Project-in-CSI-300-Index.git" 
  },
  {
    title: "Natural Language Processing (NLP) for Sentiment Analysis",
    description: "Conducted sentiment analysis on Efood restaurant reviews using various ML techniques and Deep Learning Methods with a Multi-layer Perceptron Classifier.",
    tools: "ML & AI, Python",
    href: "https://github.com/sofman65/Machine_Learning_Projects/blob/main/Sentiment_Analysis_in_IMDB_Reviews.ipynb" 
  },
  
];



const ProjectsSection = () => {
  return (
    <section id="projects" className="ProjectsSection">
      <h2>Projects</h2>
      <div className="ProjectsList">
        {projects.map((project, index) => (
          <div key={index} className="ProjectCard">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="ProjectTools">{project.tools}</p>
            {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer">View Project</a>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
