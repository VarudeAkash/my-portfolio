import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Fingerprint, PenLine, Smartphone } from 'lucide-react';
import './styles/Research.css';

function Research() {
  const thesisHighlights = [
    {
      icon: <PenLine size={20} />,
      title: 'Signature Verification',
      text: 'Built static and dynamic signature-verification systems using Siamese networks, BiLSTM + Attention, and contrastive representation learning.',
    },
    {
      icon: <Fingerprint size={20} />,
      title: 'Fingerprint Matching',
      text: 'Designed minutiae extraction and matching pipelines evaluated on 5,112 FVC2000 fingerprint pairs, achieving 96% accuracy.',
    },
    {
      icon: <Brain size={20} />,
      title: 'Handwriting Recognition',
      text: 'Trained a CNN character-recognition model on 372,450 character images, reaching 99.3% accuracy.',
    },
    {
      icon: <Smartphone size={20} />,
      title: 'End-to-End System',
      text: 'Built Android data collection and Flask inference workflows to connect model research with usable verification pipelines.',
    },
  ];

  return (
    <section id="research" className="research-section">
      <div className="research-content">
        <motion.div
          className="research-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="section-label">M.Tech Thesis</span>
          <h2>Towards Revocable Biometrics</h2>
          <p>
            Research at the Center for Developing Intelligent Systems, IIT Kanpur, guided by
            Prof. Nisheeth Srivastava. The work explores learning-based verification systems
            across signatures, fingerprints, and handwriting.
          </p>
        </motion.div>

        <div className="research-grid">
          {thesisHighlights.map((item, index) => (
            <motion.article
              className="research-card"
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
            >
              <div className="research-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
