import React from 'react';
import './styles/Navbar.css'; // Ensure this path is correct

function Navbar() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <button type="button" onClick={() => scrollToSection('home')}>Home</button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToSection('experience')}>Experience</button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToSection('research')}>Research</button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToSection('skills')}>Skills</button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToSection('about')}>About</button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToSection('projects')}>Projects</button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToSection('accolades')}>More</button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToSection('contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
