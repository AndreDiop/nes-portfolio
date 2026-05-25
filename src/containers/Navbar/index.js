import React from 'react';

const Navbar = () => {
  return (
    <nav id="navbar">
      <a className="nav-brand" href="#hero">
        <span className="prompt">&gt;</span> andre-diop
      </a>
      <div className="nav-links">
        <a href="#about">about</a>
        <a href="#experience">experience</a>
        <a href="#skills">skills</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
        <a
          className="nav-resume"
          href={`${process.env.PUBLIC_URL}/resume.html`}
          target="_blank"
          rel="noreferrer"
        >
          resume →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
