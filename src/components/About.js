import React from 'react';
import { motion } from 'framer-motion';
import './styles/About.css'; // Import the updated CSS file

function About() {
  const milestones = [
    {
      year: '2025 - Present',
      lines: ['Associate Developer working on production-grade backend and cloud systems.'],
    },
    {
      year: '2023 - 2025',
      lines: ['Completed M.Tech in Computer Science and Engineering at IIT Kanpur.', 'CPI: 9.14/10 | GATE CS AIR 156'],
    },
    {
      year: '2021',
      lines: ['Graduated with a B.Tech in Computer Science from MITAOE Pune.', 'CGPA: 9.64 | Department Rank 2'],
    },
    {
      year: '2017',
      lines: ['Completed Higher Secondary Education (HSC).', 'Percentage: 92.92%'],
    },
    {
      year: '2015',
      lines: ['Completed Secondary Education (SSC).', 'Percentage: 95.60%'],
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-content">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span>Signal</span>
          <h2>Education & Recognition</h2>
          <p>Academic foundations and competitive milestones that support the engineering work.</p>
        </motion.div>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <motion.div
              className="timeline-item"
              key={milestone.year}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.42, delay: index * 0.04, ease: 'easeOut' }}
            >
              <div className="timeline-item-content">
                <h3>{milestone.year}</h3>
                {milestone.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
