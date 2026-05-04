import React from "react";

const Navbar = () => {
  return (
    <nav
      className="nes-container is-rounded with-title is-centered"
      id="navbarContainer"
    >
      <div className="title" id="navbarTitle">
        <a href="#hero">
          <h1 id="navbarName">Andre Diop</h1>
          <p>Software Developer · Appian · DevOps</p>
        </a>
      </div>
      <a href="#about" className="nes-btn">
        About
      </a>
      <a href="#skills" className="nes-btn is-primary">
        Skills
      </a>
      <a href="#projects" className="nes-btn is-success">
        Projects
      </a>
      <a href="#contact" className="nes-btn is-warning">
        Contact
      </a>
      <a
        className="nes-btn is-error"
        href={`${process.env.PUBLIC_URL}/resume.html`}
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
