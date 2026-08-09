import React from 'react';
import { motion } from 'framer-motion';
import './styles/Experience.css';

function Experience() {
  const roles = [
    {
      title: 'Associate Developer',
      organization: 'SAP Labs India',
      period: "Jul'25 - Present",
      duration: '1+ year',
      summary: 'Working on enterprise data-platform engineering with a focus on backend reliability, deployment automation, authentication, and distributed metadata workflows.',
      highlights: [
        'Built CI/CD automation around deployment validation and tenant provisioning workflows using GitHub Actions and Helm.',
        'Extended secure authentication and credential flows with X.509, mTLS, technical clients, and Vault-backed secrets.',
        'Worked across SQL parsing, semantic validation, metadata handling, privilege enforcement, and rollback paths for platform features.',
      ],
      tags: ['Backend', 'Cloud', 'CI/CD', 'Distributed Systems'],
    },
    {
      title: 'Senior Student Research Associate',
      organization: 'Center for Developing Intelligent Systems, IIT Kanpur',
      period: "Mar'24 - May'25",
      duration: '1 year',
      summary: 'Worked on applied deep learning research involving visual and temporal pattern matching, from data collection to model training and deployment.',
      highlights: [
        'Developed Siamese neural-network pipelines for image and sequence-based verification tasks.',
        'Built a Jetpack Compose Android app for structured data collection and a Flask service for model inference.',
        'Trained PyTorch models with contrastive and angular-margin objectives for discriminative representation learning.',
      ],
      tags: ['Deep Learning', 'Computer Vision', 'PyTorch', 'Android'],
    },
    {
      title: 'Research Associate',
      organization: 'IIT Hyderabad',
      period: 'Research Experience',
      duration: '6 months',
      summary: 'Worked on continual learning research, focusing on model adaptation across tasks while reducing forgetting.',
      highlights: [
        'Explored continual-learning strategies for retaining previously learned knowledge while adapting to new data.',
        'Worked on experiment analysis and documentation around model performance across sequential learning settings.',
      ],
      tags: ['Continual Learning', 'Machine Learning', 'Research'],
    },
    {
      title: 'Software Engineer',
      organization: 'Apisero Global Integration Solutions Pvt. Ltd.',
      period: "Jan'21 - Jun'21",
      duration: '6 months',
      summary: 'Started professional software engineering work before moving into graduate study and research at IIT Kanpur.',
      highlights: [
        'Worked on enterprise integration and software engineering assignments.',
      ],
      tags: ['Software Engineering', 'Integration', 'Backend'],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-content">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="experience-lead">
            <strong>4+</strong>
            <div>
              <h2>Years across development, research, and applied machine learning</h2>
              <p>SAP development, IIT Kanpur research, IIT Hyderabad research, and early software engineering work.</p>
            </div>
          </div>
        </motion.div>
        <div className="experience-list">
          {roles.map((role) => (
            <motion.article
              className="experience-card"
              key={`${role.title}-${role.organization}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <div className="experience-header">
                <span className="experience-duration">{role.duration}</span>
                <div>
                  <h3>{role.title}</h3>
                  <p className="experience-org">{role.organization}</p>
                </div>
                <span className="experience-period">{role.period}</span>
              </div>
              <div className="experience-body">
                <p className="experience-summary">{role.summary}</p>
                <ul className="experience-highlights">
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="experience-tags">
                  {role.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
