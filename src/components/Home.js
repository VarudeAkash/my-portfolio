import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './styles/Home.css';
import photo from './photo.jpeg';

function Home() {
    const nameText = 'Akash Varude';
    const [typedName, setTypedName] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingDelay = 500;
        const eraseDelay = 2000;
        const typeSpeed = 100;
        const eraseSpeed = 50;

        let timeout;

        if (!isDeleting && typedName.length === 0) {
            timeout = setTimeout(() => {
                setTypedName(nameText.slice(0, 1));
            }, typingDelay);
        } else if (!isDeleting && typedName.length < nameText.length) {
            timeout = setTimeout(() => {
                setTypedName(nameText.slice(0, typedName.length + 1));
            }, typeSpeed);
        } else if (!isDeleting && typedName.length === nameText.length) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, eraseDelay);
        } else if (isDeleting && typedName.length > 0) {
            timeout = setTimeout(() => {
                setTypedName(nameText.slice(0, typedName.length - 1));
            }, eraseSpeed);
        } else if (isDeleting && typedName.length === 0) {
            setIsDeleting(false);
        }

        return () => clearTimeout(timeout);
    }, [typedName, isDeleting]);

    const handleScrollToContact = (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        document.getElementById('contact').scrollIntoView({
          behavior: 'smooth',
        });
      };
  return (
    <section id="home" className="home">
      <div className="home-content">
        <motion.div
          className="text-section"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="eyebrow"><Sparkles size={16} /> Associate Developer at SAP Labs India</div>
          <h1 className="intro-text">
            <span className="intro-prefix">Hi, I'm</span>
            <span className="name name-stage">
              <span className="name-reserve" aria-hidden="true">{nameText}</span>
              <span className="typing-name">{typedName}</span>
            </span>
          </h1>
            <p className="subtext">
            Software developer with an ML research foundation.
            </p>
            <div className="hero-focus-list" aria-label="Core focus areas">
              <span>Deep Learning</span>
              <span>NLP</span>
              <span>Computer Vision</span>
              <span>Backend Engineering</span>
              <span>Problem Solving</span>
            </div>

            <div className="hero-actions">
             <a href={`${process.env.PUBLIC_URL}/resume/akash-varude-resume.pdf`} className="hire-me-button" download>Download Resume <Download size={18} /></a>
             <a href="#contact" className="ghost-button" onClick={handleScrollToContact}>Contact Me <ArrowRight size={18} /></a>
             <a href="#projects" className="ghost-button">View Work</a>
            </div>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/akash-varude/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/VarudeAkash" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:akashvarude305@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="https://leetcode.com/u/akashvarude3205/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                <SiLeetcode />
              </a>
            </div>
        </motion.div>
        <motion.div
          className="image-section"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
        >
          <div className="portrait-shell">
            <img src={photo} alt="Akash Varude" className="profile-photo" />
            <div className="profile-panel">
              <div>
                <span>M.Tech CSE</span>
                <strong>IIT Kanpur</strong>
              </div>
              <div>
                <span>GATE CS</span>
                <strong>AIR 156</strong>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
