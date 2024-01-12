// AboutMe.js
import React from 'react';
import '../styles/AboutMeSkills.css';

const skillLevels = {
  Python: 90,
  Postgresql: 75,
  Node: 60,
  React: 50,
  Git: 80,
  Tensorflow: 75,
  Pytorch: 50,
  Pandas: 90,
  Numpy: 85,
  Matplotlib: 86,
  Docker: 60,
};

const AboutMeSkills = () => {
  return (
    <div className="AboutMeSkills">
      <h3>Technical Skills</h3>
      <ul className="SkillsList">
        {Object.entries(skillLevels).map(([skill, level]) => (
          <li key={skill}>
            <img 
              src={`/images/${skill}.png`} // Assuming you have an image with the name of the skill
              alt={`${skill.charAt(0).toUpperCase() + skill.slice(1)} Logo`} // Capitalize the first letter of the skill for the alt text
              className="SkillLogo"
            />
            <span>{skill.charAt(0).toUpperCase() + skill.slice(1)}</span> {/* Capitalize the first letter */}
            <div className="SkillProgress">
            <div
              className="SkillProgressInner"
              style={{ '--skill-level': `${level}%` }} // Inline style for width
            />
          </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default AboutMeSkills;
