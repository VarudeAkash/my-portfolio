import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Make sure you're using the correct package
import './styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the original email
    emailjs.send('your_service_id', 'your_template_id', formData, 'your_user_id')
      .then((response) => {
        console.log('Original message sent successfully:', response);

        // Send the auto-reply
        emailjs.send('your_service_id', 'auto_reply_template_id', {
          to_email: formData.email, // Use the user's email address
          name: formData.name,
          message: formData.message
        }, 'your_user_id')
        .then((response) => {
          console.log('Auto-reply sent successfully:', response);
        })
        .catch((error) => {
          console.error('Error sending auto-reply:', error);
        });

        // Clear the form data
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
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
            <button type="submit" className="submit-btn">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
