import React from 'react';
import Skills from '../../assets/skills.json';

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-cmd">
          <span className="prompt">$</span> ls -la skills/
        </p>
        <hr className="section-divider" />

        <div className="skills-block">
          {Skills.map((group) => (
            <div className="skill-row" key={group.category}>
              <span className="skill-category">{group.category}</span>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
