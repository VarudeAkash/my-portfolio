import React from 'react';
import './styles/Projects.css'; // Import the CSS file for styling

function Projects() {
  const projectData = [
    {
      title: 'Intelligent Exercise Recognition and Counting Band with IMU Sensors',
      description: 'A brief description of Project 1',
      image: '../../public/Images/2.png',  // Replace with actual image path
      githubLink: 'https://github.com/VarudeAkash/CS724-Sensing-Communications-and-Networking-for-Smart-Wireless-Devices/tree/main/Project',
    },
    {
      title: 'RoBERTa Enhanced MahaHate Classification',
      description: 'A brief description of Project 2.',
      image: '/public/Images/2.png', // Replace with actual image path
      githubLink: 'https://github.com/VarudeAkash/CS689-Computational-Linguistic-for-Indian-Languages/tree/main/Project',
    },
    {
        title: 'Audio Aura: Music Data Analysis and Visualization',
        description: 'A brief description of Project 3.',
        image: 'Images/1.jpg',  // Replace with actual image path
        githubLink: 'https://github.com/VarudeAkash/CS661-BIG-DATA-VISUAL-ANALYTICS/tree/main/CS661_Project',
      },
      {
        title: 'Advance Explorations in Machine Learning',
        description: 'A brief description of Project 4.',
        image: '/Images/1.jpg',  // Replace with actual image path
        githubLink: 'https://github.com/VarudeAkash/CS771-Introduction-to-Machine-Learning/tree/main/project',
      },
      {
        title: 'Image Synthesis using Generative Adverserial Networks',
        description: 'A brief description of Project 5.',
        image: '/src/components/Images/1.jpg',  // Replace with actual image path
        githubLink: 'https://github.com/VarudeAkash/Image-Synthesis-Using-GAN',
      },
      {
        title: 'Computational Linguistics in Indian Language',
        description: 'A brief description of Project 1.',
        image: '/images/1.jpg',  // Replace with actual image path
        githubLink: 'https://github.com/VarudeAkash/CS689--Computational-Linguistic-for-Indian-Languages/tree/main/Projects',
      }
    // Add more projects here...
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
