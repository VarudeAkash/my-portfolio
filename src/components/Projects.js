import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './styles/Projects.css';
import dataImage from './Images/1.jpg';
import sensorImage from './Images/2.png';

function Projects() {
  const tabs = useMemo(() => [
    {
      id: 'all',
      label: 'All Projects',
      intro: 'A scan of my GitHub-linked work across NLP, ML, data analytics, software development, and applied sensing.',
    },
    {
      id: 'nlp',
      label: 'Advanced NLP',
      intro: 'Indian-language NLP projects covering classification, NER, Unicode normalization, tokenization, and translation evaluation.',
    },
    {
      id: 'ml',
      label: 'ML Foundations',
      intro: 'Machine-learning projects focused on zero-shot learning, kernel methods, clustering, and dimensionality reduction.',
    },
    {
      id: 'data',
      label: 'Data Analytics',
      intro: 'Data exploration and visualization work with interactive analysis interfaces.',
    },
    {
      id: 'software',
      label: 'Software Development',
      intro: 'Full-stack and production-style engineering projects with APIs, authentication, and user workflows.',
    },
    {
      id: 'applied',
      label: 'Applied ML',
      intro: 'Applied machine-learning systems using signals, sensors, and generated data.',
    },
  ], []);

  const projects = [
    {
      category: 'nlp',
      title: 'MaHate: Marathi Hate Speech Classification',
      description: 'MahaRoBERTa-based classification with lexical features for Marathi hate speech, offensive language, and profanity.',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/VarudeAkash/CS689-Computational-Linguistic-for-Indian-Languages/tree/main/Project',
        },
      ],
    },
    {
      category: 'nlp',
      title: 'Computational Linguistics for Indian Languages',
      description: 'A-grade CS689 project collection covering Marathi linguistic pipelines, Indic models, and translation evaluation.',
      links: [
        {
          label: 'Project collection',
          href: 'https://github.com/VarudeAkash/CS689--Computational-Linguistic-for-Indian-Languages/tree/main/Projects',
        },
        {
          label: 'Unicode Correction',
          href: 'https://github.com/VarudeAkash/CS689--Computational-Linguistic-for-Indian-Languages/tree/main/Projects/Multilingual%20Unicode%20Correction%20and%20Feature%20Extraction',
        },
        {
          label: 'Named Entity Recognition',
          href: 'https://github.com/VarudeAkash/CS689--Computational-Linguistic-for-Indian-Languages/tree/main/Projects/Named%20Entity%20Recognition%20for%20Indic%20Languages',
        },
        {
          label: 'Machine Translation Analysis',
          href: 'https://github.com/VarudeAkash/CS689--Computational-Linguistic-for-Indian-Languages/tree/main/Projects/Cross-Lingual%20Machine%20Translation%20Analysis',
        },
      ],
    },
    {
      category: 'ml',
      title: 'Advanced Explorations in Machine Learning',
      description: 'CS771 project collection covering zero-shot classification, kernel regression, K-Means, PCA, and t-SNE experiments.',
      links: [
        {
          label: 'Project collection',
          href: 'https://github.com/VarudeAkash/CS771-Introduction-to-Machine-Learning/tree/554625e1054cea437998df033c36b901d0ec5d83/project',
        },
        {
          label: 'Zero-Shot Classification',
          href: 'https://github.com/VarudeAkash/CS771-Introduction-to-Machine-Learning/tree/554625e1054cea437998df033c36b901d0ec5d83/project/Zero-Shot%20Classification%20through%20Attribute-Driven%20Prototype%20Estimation',
        },
        {
          label: 'Kernel Regression and Clustering',
          href: 'https://github.com/VarudeAkash/CS771-Introduction-to-Machine-Learning/tree/554625e1054cea437998df033c36b901d0ec5d83/project/Advanced%20Regression%20and%20Clustering%20Analysis%20Using%20Kernel%20Methods',
        },
      ],
    },
    {
      category: 'applied',
      title: 'Image Synthesis using Generative Adversarial Networks',
      description: 'GAN training on Fashion MNIST and CelebA with PyTorch, label smoothing, feature scaling, and generated-sample monitoring.',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/VarudeAkash/Image-Synthesis-Using-GAN',
        },
      ],
    },
    {
      category: 'data',
      title: 'Audio Aura: Music Data Analysis and Visualization',
      description: 'Streamlit analytics app using Pandas, Plotly, and Matplotlib for music trends, sentiment cues, genre exploration, and optimized dataset handling.',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/VarudeAkash/CS661-BIG-DATA-VISUAL-ANALYTICS/tree/main/CS661_Project',
        },
      ],
    },
    {
      category: 'software',
      title: 'CollegeMART',
      description: 'MERN buy-and-sell platform for IIT Kanpur students with product listings, authentication, and REST APIs.',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/VarudeAkash/CollegeMART',
        },
      ],
    },
    {
      category: 'applied',
      title: 'Exercise Recognition and Counting Band with IMU Sensors',
      description: 'Wearable motion-understanding project using IMU data for CNN-based exercise classification, repetition counting, and anomaly detection.',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/VarudeAkash/CS724-Sensing-Communications-and-Networking-for-Smart-Wireless-Devices/tree/main/Project',
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState('all');
  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  const visibleProjects = activeTab === 'all'
    ? projects
    : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span>Project Archive</span>
        <h2>Projects by Track</h2>
        <p>Switch tracks to scan the work by problem type, with GitHub links kept directly beside the relevant project.</p>
      </motion.div>

      <div className="project-tabs" role="tablist" aria-label="Project categories">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls="project-tab-panel"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="projects-layout" aria-label="Tabbed projects">
        <motion.div
          className="projects-visual"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img src={sensorImage} alt="" className="visual-main" />
          <img src={dataImage} alt="" className="visual-float" />
          <span>{activeTabData?.label}</span>
        </motion.div>

        <div className="project-index" id="project-tab-panel" role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
            >
              <p className="project-tab-intro">{activeTabData?.intro}</p>
              {visibleProjects.map((project, index) => (
                <article className="project-row" key={project.title}>
                  <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="project-copy">
                    <span className="project-meta">{tabs.find((tab) => tab.id === project.category)?.label}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-links" aria-label={`${project.title} GitHub links`}>
                      {project.links.map((link) => (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>
                          <FaGithub /> {link.label} <ExternalLink size={13} />
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Projects;
