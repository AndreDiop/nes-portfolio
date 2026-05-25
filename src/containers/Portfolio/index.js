import React from 'react';
import Works from '../../assets/data.json';

const Portfolio = () => {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-cmd">
          <span className="prompt">$</span> ls projects/
        </p>
        <hr className="section-divider" />

        <div className="projects-block">
          {Works.map((project) => (
            <div className="project-row" key={project.id}>
              <span className="project-name">{project.name}/</span>
              <span className="project-desc">{project.projectInfo}</span>
              <span className="project-stack">
                {[project.tech1, project.tech2, project.tech3]
                  .filter(Boolean)
                  .join(' · ')}
              </span>
              <a
                className="project-link"
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
              >
                github ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
