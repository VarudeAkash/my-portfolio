import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import './styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sendStatus, setSendStatus] = useState({
    state: 'idle',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (sendStatus.state !== 'idle') {
      setSendStatus({ state: 'idle', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendStatus({ state: 'sending', message: 'Sending your message...' });

    try {
      const response = await emailjs.send('service_qd0jzfc', 'template_6yyits1', formData, 'Ws7brVU9kIBkoezCR');
      console.log('Original message sent successfully:', response);

      try {
        const autoReplyResponse = await emailjs.send('service_qd0jzfc', 'template_i92f6uf', {
          email: formData.email,
          name: formData.name,
          message: formData.message
        }, 'Ws7brVU9kIBkoezCR');
        console.log('Auto-reply sent successfully:', autoReplyResponse);
      } catch (error) {
        console.error('Error sending auto-reply:', error);
      }

      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setSendStatus({
        state: 'success',
        message: 'Message sent. Thanks for reaching out, I will get back to you soon.'
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setSendStatus({
        state: 'error',
        message: 'Could not send the message right now. Please try again or email me directly.'
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <motion.div
          className="contact-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span>Contact</span>
          <h2>Let’s Build Something Useful</h2>
          <p>Reach out for developer roles, ML collaborations, research discussions, or technically ambitious projects.</p>
          <div className="contact-links">
            <a href="mailto:akashvarude305@gmail.com">akashvarude305@gmail.com</a>
            <a href="https://github.com/VarudeAkash" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/akash-varude/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://leetcode.com/u/akashvarude3205/" target="_blank" rel="noopener noreferrer">LeetCode</a>
          </div>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group message-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="submit-container">
            {sendStatus.message && (
              <p className={`form-status ${sendStatus.state}`} role="status">
                {sendStatus.message}
              </p>
            )}
            <button type="submit" className="submit-btn" disabled={sendStatus.state === 'sending'}>
              {sendStatus.state === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
