import React from 'react';

const cards = [
  {
    command: '// devops_support',
    title: 'DevOps & Release Management',
    desc: 'Coordinate multi-environment deployments, manage CI/CD pipelines, and own release sequencing across test, staging, and production.',
    tags: ['Jenkins', 'UrbanCode Deploy', 'GitLab CI/CD', 'Bitbucket'],
  },
  {
    command: '// platform_ops',
    title: 'Appian Platform Engineering',
    desc: 'Administer Appian workflow applications, manage user access and entitlements, and provide L1/L2 production support for enterprise systems.',
    tags: ['Appian', 'L1/L2 Support', 'Access Control', 'Incident Response'],
  },
  {
    command: '// application_dev',
    title: 'Application Development',
    desc: 'Build full-stack web applications with modern tooling. Comfortable across the stack from database schema to React UI.',
    tags: ['React', 'Node.js', 'SQL', 'Python', 'REST APIs'],
  },
];

const WhatIDo = () => {
  return (
    <section id="about">
      <div className="container">
        <p className="section-cmd">
          <span className="prompt">$</span> cat about.txt
        </p>
        <hr className="section-divider" />

        <div className="whatido-grid">
          {cards.map((card) => (
            <div className="whatido-card" key={card.command}>
              <p className="card-command">{card.command}</p>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
              <div>
                {card.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
