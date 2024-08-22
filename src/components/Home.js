import React from 'react';
import Typing from 'react-typing-effect';
import './styles/Home.css'; // Import the updated CSS file
import photo from './photo.jpeg'; // Import the image
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Home() {
    const handleScrollToContact = (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        document.getElementById('contact').scrollIntoView({
          behavior: 'smooth',
        });
      };
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="text-section">
          <h1 className="intro-text">
            Hi, I'm <span className="name"><Typing text={['Akash Varude']} speed={100} eraseSpeed={50} typingDelay={500} eraseDelay={2000} /></span>
          </h1>
            <p className="subtext">
            pursuing M.Tech in CSE from
            <span className="subtext-iiit-kanpur">IIT Kanpur</span>
            </p>

            {/* Social Media Icons */}
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/akash-varude/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/VarudeAkash" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>

              <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>

            {/* Hire Me Button */}
             <a href="#contact" className="hire-me-button" onClick={handleScrollToContact}>Hire Me</a>
        </div>
        <div className="image-section">
          {/* Add your fancy photo here */}
          <img src={photo} alt="Akash Varude" className="profile-photo" />
        </div>
      </div>
    </section>
  );
}

export default Home;
