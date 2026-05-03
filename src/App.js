import React from "react";
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Landing from "./containers/Landing";
import Contact from "./containers/Contact";
import Skills from "./containers/Skills";
import "./App.css";

function App() {
  return (
    <div id="app">
      <Navbar />
      <section id="hero">
        <Landing />
      </section>
      <div className="nes-container is-rounded" id="mainContainer">
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
