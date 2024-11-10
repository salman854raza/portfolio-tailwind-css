import React from 'react';
import './skills.css';

const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML', 'CSS'];

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
