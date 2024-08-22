import React from 'react';
import './styles/About.css'; // Import the updated CSS file

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>My Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-item-content">
              <h3>2025</h3>
              <p>Expected Completion of M.Tech in Computer Science at IIT Kanpur.</p>
              <p>Current CGPA: 9.14</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-item-content">
              <h3>2023</h3>
              <p>Joined M.Tech in Computer Science at IIT Kanpur</p>
              <p>Gate Rank: AIR 156</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-item-content">
              <h3>2021</h3>
              <p>Graduated with a B.Tech in Computer Science from MITAOE Pune</p>
              <p>CGPA: 9.64</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-item-content">
              <h3>2017</h3>
              <p>Completed Higher Secondary Education (HSC)</p>
              <p>Percentage: 92.92</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-item-content">
              <h3>2017</h3>
              <p>Completed Secondary Education (SSC)</p>
              <p>Percentage: 95.60</p>
            </div>
          </div>
          {/* Add more timeline items as needed */}
        </div>
      </div>
    </section>
  );
}

export default About;
