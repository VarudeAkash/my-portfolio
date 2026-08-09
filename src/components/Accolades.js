import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, GraduationCap } from 'lucide-react';
import './styles/Accolades.css';

function Accolades() {
  const blocks = [
    {
      icon: <Award size={22} />,
      title: 'Achievements',
      items: [
        { text: 'Reliance Foundation Postgraduate Scholar 2024, selected among top 100 postgraduate students across India.', link: 'https://drive.google.com/file/d/1CvmydurauYB2gkgCOcO_ke7rWZIMLjZz/view?usp=sharing' },
        { text: 'GATE CS 2023 AIR 156 among 75,680 candidates.', link: 'https://drive.google.com/file/d/1J3GYreA3K7lm8yF5rxQiRN03If6d7wFa/view?usp=sharing' },
        { text: 'GATE CS 2022 AIR 605 among 77,257 candidates.', link: 'https://drive.google.com/file/d/1PexFJ4P7pXV-BpKDyM2UrqWqO-kjvZ4H/view?usp=sharing' },
        { text: 'Department Rank 2 and Academic Excellence Award in B.Tech at MITAOE Pune.', link: 'https://drive.google.com/file/d/16x4U--idvK1kmkqkF0iMBrK2yx3odu5o/view?usp=sharing' },
        { text: 'Finalist, Smart India Hackathon 2019 Software Edition.', link: 'https://drive.google.com/file/d/1HdofY44Bwk0PQ-MxmMFkd_6aoNKD2EI0/view?usp=sharing' },
      ],
    },
    {
      icon: <Users size={22} />,
      title: 'Responsibilities',
      items: [
        { text: 'Student Guide, Institute Counselling Services, IIT Kanpur, mentoring incoming students.' },
        { text: 'Teaching Assistant for CS667: Introduction to IoT and Industrial Applications.' },
        { text: 'Teaching Assistant for ESC111/112: Fundamentals of Computing.' },
      ],
    },
    {
      icon: <GraduationCap size={22} />,
      title: 'Certifications',
      items: [
        { text: 'Computer Vision: Object Detection with OpenCV and Python, Coursera.', link: 'https://drive.google.com/file/d/1LQgjVIu8zYGzD8nIcof1FHqn1zAdCjCo/view?usp=sharing' },
        { text: 'Convolutional Neural Networks, Coursera.', link: 'https://drive.google.com/file/d/1w0Y0dztgUBDuY22FUNpCjyh8wqp0ZmuD/view?usp=sharing' },
        { text: 'Introduction to Data Science in Python, Coursera.', link: 'https://drive.google.com/file/d/1vyAWuEWBitsgKQJVPvrMd3hcTDmVfweg/view?usp=sharing' },
        { text: 'Neural Networks and Deep Learning, Coursera.', link: 'https://drive.google.com/file/d/1gpdc6oS1qVEHVJLWc-ZkJ6StOlyhRNzM/view?usp=sharing' },
        { text: 'Introduction to Machine Learning, NPTEL.', link: 'https://drive.google.com/file/d/18NDfgcEejHqJcpWv4VPGkpaPSmj0x26j/view?usp=sharing' },
        { text: 'Project Management for Managers, NPTEL, Top 5%.', link: 'https://drive.google.com/file/d/1KAaGVPG8gETYFp5JpHsvZcPSG8iaCKV_/view?usp=sharing' },
      ],
    },
  ];

  return (
    <section id="accolades" className="accolades-section">
      <div className="accolades-content">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span>Beyond Projects</span>
          <h2>Recognition, Teaching & Certifications</h2>
          <p>Useful credibility signals without making the main experience section feel crowded.</p>
        </motion.div>

        <div className="accolades-grid">
          {blocks.map((block, index) => (
            <motion.article
              className="accolade-card"
              key={block.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.42, delay: index * 0.04, ease: 'easeOut' }}
            >
              <div className="accolade-icon">{block.icon}</div>
              <div className="accolade-body">
                <h3>{block.title}</h3>
                <ul>
                  {block.items.map((item) => (
                    <li key={item.text}>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
                      ) : (
                        item.text
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Accolades;
