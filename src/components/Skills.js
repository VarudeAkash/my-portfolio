import React from 'react';
import { motion } from 'framer-motion';
import './styles/Skills.css';

function Skills() {
  const groups = [
    {
      title: 'Programming & Tools',
      items: ['C', 'C++', 'Python', 'SQL', 'JavaScript', 'Git', 'Linux', 'GitHub Actions', 'Helm', 'LaTeX'],
      level: 92,
    },
    {
      title: 'ML / Data Stack',
      items: ['PyTorch', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'OpenCV', 'scikit-learn', 'Matplotlib', 'Plotly'],
      level: 90,
    },
    {
      title: 'Web & Backend',
      items: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'HTML', 'Bootstrap'],
      level: 84,
    },
    {
      title: 'Interest Areas',
      items: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'System Design', 'OOP', 'Web Development'],
      level: 88,
    },
  ];

  const courses = [
    'Introduction to Machine Learning',
    'Computational Linguistics for Indian Languages',
    'Program Analysis, Verification and Testing',
    'Design and Analysis of Algorithms',
    'Big Data Visual Analytics',
    'Deep Learning',
    'Pattern Recognition',
    'Operating Systems',
    'Computer Networks',
    'Database Management Systems',
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span>Skills</span>
          <h2>Technical Stack</h2>
          <p>Grouped by how I actually use them: engineering, machine learning, backend work, and research.</p>
        </motion.div>

        <div className="skills-layout">
          <div className="skill-rows">
            {groups.map((group, index) => (
              <motion.div
                className="skill-row"
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.42, delay: index * 0.04, ease: 'easeOut' }}
              >
                <div className="skill-row-top">
                  <h3>{group.title}</h3>
                  <span>{group.level}%</span>
                </div>
                <div className="skill-bar" aria-hidden="true">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${group.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 + index * 0.06, ease: 'easeOut' }}
                  />
                </div>
                <p>{group.items.join(' / ')}</p>
              </motion.div>
            ))}
          </div>

          <motion.aside
            className="courses-card"
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3>Relevant Courses</h3>
            <div className="course-list">
              {courses.map((course) => (
                <span key={course}>{course}</span>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

export default Skills;
