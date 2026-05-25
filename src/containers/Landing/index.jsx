import React, { useState, useEffect } from 'react';

const COMMAND = '$ whoami';

const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(COMMAND.slice(0, i));
      if (i === COMMAND.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero">
      <div className="container">
        <p className="hero-prompt">
          {displayed}
          {!done && <span className="cursor" />}
        </p>

        <h1 className="hero-name">Andre Diop</h1>
        <p className="hero-title">Software Developer</p>
        <p className="hero-employer">
          Fannie Mae <span className="muted">·</span> 2021–Present
        </p>

        <div className="hero-tags">
          {[
            'Appian', 'Jenkins', 'UrbanCode Deploy',
            'GitLab CI/CD', 'Bitbucket', 'Jira',
            'L1/L2 Production Support', 'SQL', 'Python', 'AWS',
          ].map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>

        <div className="hero-cta">
          <a
            className="btn"
            href={`${process.env.PUBLIC_URL}/resume.html`}
            target="_blank"
            rel="noreferrer"
          >
            view_resume.sh
          </a>
          <a className="btn secondary" href="#contact">
            contact --me
          </a>
        </div>

        {done && <span className="cursor" />}
      </div>
    </section>
  );
};

export default Hero;
