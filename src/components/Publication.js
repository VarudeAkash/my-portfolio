import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './styles/Publication.css';

function Publication() {
  return (
    <section id="publication" className="publication-section">
      <motion.div
        className="publication-content"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="publication-kicker">Publication</div>
        <div className="publication-title">
          <span>2019</span>
          <h2>Classification of Online Pernicious Comments using Machine Learning</h2>
        </div>
        <p>
          Published in IJSRD, Volume 7, Issue 8. Built a multi-label toxic-comment
          classification system using classical machine-learning methods on 153,165 labeled comments.
        </p>
        <a href="https://ijsrd.com/Article.php?manuscript=IJSRDV7I80418" target="_blank" rel="noopener noreferrer">
          View Publication <ExternalLink size={16} />
        </a>
      </motion.div>
    </section>
  );
}

export default Publication;
