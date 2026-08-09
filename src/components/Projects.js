import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './styles/Projects.css'; // Import the CSS file for styling
import dataImage from './Images/1.jpg';
import sensorImage from './Images/2.png';

function Projects() {
  const projectData = [
    {
      title: 'MaHate: Marathi Hate Speech Classification',
      description: 'MahaRoBERTa-based classification with lexical features for Marathi hate speech, offensive language, and profanity.',
      meta: 'NLP / Transformers',
      image: sensorImage,
      githubLink: 'https://github.com/VarudeAkash/CS689-Computational-Linguistic-for-Indian-Languages/tree/main/Project',
    },
      {
        title: 'CollegeMART',
        description: 'MERN buy-and-sell platform for IIT Kanpur students with product listings, authentication, and REST APIs.',
        meta: 'Full Stack',
        image: dataImage,
        githubLink: 'https://github.com/VarudeAkash/CollegeMART',
      },
      {
        title: 'Image Synthesis using Generative Adversarial Networks',
        description: 'GAN training on Fashion MNIST and CelebA with PyTorch, label smoothing, feature scaling, and generated-sample monitoring.',
        meta: 'Generative AI',
        image: dataImage,
        githubLink: 'https://github.com/VarudeAkash/Image-Synthesis-Using-GAN',
      },
      {
        title: 'Advanced Machine Learning',
        description: 'Zero-shot classification, kernel methods, clustering, PCA, and t-SNE experiments across high-dimensional datasets.',
        meta: 'ML Foundations',
        image: dataImage,
        githubLink: 'https://github.com/VarudeAkash/CS771-Introduction-to-Machine-Learning/tree/main/project',
      },
      {
        title: 'Exercise Recognition with IMU Sensors',
        description: 'Wearable motion understanding with CNN-based classification, repetition counting, and anomaly detection.',
        meta: 'Applied ML / Sensors',
        image: sensorImage,
        githubLink: 'https://github.com/VarudeAkash/CS724-Sensing-Communications-and-Networking-for-Smart-Wireless-Devices/tree/main/Project',
      }
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span>Selected Work</span>
        <h2>Projects That Show Range</h2>
        <p>Language, vision, generative modeling, full-stack engineering, and sensor intelligence.</p>
      </motion.div>
      <div className="projects-layout" aria-label="Selected projects">
        <motion.div
          className="projects-visual"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img src={sensorImage} alt="" className="visual-main" />
          <img src={dataImage} alt="" className="visual-float" />
          <span>Selected engineering and ML work</span>
        </motion.div>

        <div className="project-index">
          {projectData.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-row"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.42, delay: index * 0.04, ease: 'easeOut' }}
            >
              <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="project-copy">
                <span className="project-meta">{project.meta}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-action">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub <ExternalLink size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
