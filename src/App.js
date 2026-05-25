import React from 'react';
import Navbar from './containers/Navbar';
import Hero from './containers/Landing';
import WhatIDo from './containers/WhatIDo';
import Experience from './containers/Experience';
import Skills from './containers/Skills';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';
import Footer from './containers/Footer';
import './App.css';

function App() {
  return (
    <div id="app">
      <Navbar />
      <Hero />
      <WhatIDo />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
<Footer />
    </div>
  );
}

export default App;
