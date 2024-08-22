import React from 'react';
import './styles/Projects.css'; // Import the CSS file for styling

function Projects() {
  const projectData = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      image: '/images/1.jpg',  // Replace with actual image path
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      image: '/images/2.png', // Replace with actual image path
      githubLink: 'https://github.com/yourusername/project2',
    },
    {
        title: 'Project 1',
        description: 'A brief description of Project 1.',
        image: '/images/1.jpg',  // Replace with actual image path
        githubLink: 'https://github.com/yourusername/project1',
      },
      {
        title: 'Project 1',
        description: 'A brief description of Project 1.',
        image: '/images/1.jpg',  // Replace with actual image path
        githubLink: 'https://github.com/yourusername/project1',
      },
      {
        title: 'Project 1',
        description: 'A brief description of Project 1.',
        image: '/images/1.jpg',  // Replace with actual image path
        githubLink: 'https://github.com/yourusername/project1',
      },
      {
        title: 'Project 1',
        description: 'A brief description of Project 1.',
        image: '/images/1.jpg',  // Replace with actual image path
        githubLink: 'https://github.com/yourusername/project1',
      },
      {
        title: 'Project 1',
        description: 'A brief description of Project 1.',
        image: '/images/1.jpg',  // Replace with actual image path
        githubLink: 'https://github.com/yourusername/project1',
      },
      {
        title: 'Project 1',
        description: 'A brief description of Project 1.',
        image: '/images/1.jpg',  // Replace with actual image path
        githubLink: 'https://github.com/yourusername/project1',
      },
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
