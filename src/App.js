// App.js
import React from 'react';
import './App.css'; // Import global CSS
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Research from './components/Research';
import Skills from './components/Skills';
import About from './components/About';
import Publication from './components/Publication';
import Projects from './components/Projects';
import Accolades from './components/Accolades';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Experience />
      <Research />
      <Skills />
      <About />
      <Publication />
      <Projects />
      <Accolades />
      <Contact />
    </div>
  );
}

export default App;
