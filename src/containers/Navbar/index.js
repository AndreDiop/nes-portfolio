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
          <p>Software Developer</p>
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
        href="https://drive.google.com/file/d/1ijNElXMM7rsAbjqAI2iX8OoL5N1QE24Z/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
