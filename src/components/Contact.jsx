import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatusMessage('');

    const accessKey = process.env.REACT_APP_FORM_SUBMISSION_KEY;
    if (!accessKey) {
      setStatusMessage('Form submission key is not configured.');
      setSending(false);
      return;
    }

    const payload = {
      ...formData,
      access_key: accessKey
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then((res) => res.json());

      if (res.success) {
        setStatusMessage('Message sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage(res.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submit error:', error);
      setStatusMessage('Unable to send email. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-form">
            <form onSubmit={onSubmit}>
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
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>
              {statusMessage && <p className="form-status">{statusMessage}</p>}
            </form>
          </div>
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p><strong>Address:</strong> Operating in the DFW Area</p>
            <p><strong>Phone:</strong> (469) 427-4311</p>
            <p><strong>Email:</strong> info@mercuryaccounting.com</p>
            <p><strong>Hours:</strong> Monday - Friday: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;