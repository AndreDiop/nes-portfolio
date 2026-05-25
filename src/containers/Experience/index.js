import React from 'react';

const bullets = [
  'Coordinate application releases across test, staging, and production environments using Jenkins and UrbanCode Deploy, partnering with release managers to ensure zero-disruption rollouts on business-critical mortgage processing systems.',
  'Own sequencing and validation of database schema changes across multi-environment pipelines, preventing deployment failures caused by out-of-order SQL script execution.',
  'Serve as L1/L2 production support for Appian applications — triaging incidents, isolating root causes, and escalating critical issues to minimize downtime on enterprise financial systems.',
  'Administer Appian user access and entitlements, enforcing least-privilege access controls across production and non-production environments.',
  'Operate and maintain CI/CD toolchain (GitLab, Bitbucket, Jenkins, UCD, Jira) to manage branching strategies, track releases, and sustain deployment pipeline health.',
  'Drive process improvements reducing manual deployment overhead through runbook creation, documentation, and incremental automation initiatives.',
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-cmd">
          <span className="prompt">$</span> cat experience.txt
        </p>
        <hr className="section-divider" />

        <div className="exp-block">
          <div className="exp-header">
            <div>
              <p className="exp-company">Fannie Mae</p>
              <p className="exp-role">Software Developer · Appian / DevOps Support</p>
              <p className="exp-location">Reston, VA</p>
            </div>
            <span className="exp-date">2021–Present</span>
          </div>

          <ul className="exp-bullets">
            {bullets.map((b, i) => (
              <li key={i}>
                <span className="bullet-marker">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
