import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import SplitText from '../components/animations/SplitText';
import BlurText from '../components/animations/BlurText';
import ScrollFloat from '../components/animations/ScrollFloat';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      title: 'Visit Our Office',
      content: '123 Travel Street\nMumbai, Maharashtra 400001\nIndia',
      icon: '📍'
    },
    {
      title: 'Call Us',
      content: '+91 98765 43210\nToll Free: 1800-123-456',
      icon: '📞'
    },
    {
      title: 'Email Us',
      content: 'info@stayoo.com\nsupport@stayoo.com',
      icon: '✉️'
    },
    {
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed',
      icon: '🕒'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <SplitText className="section-title">
              Contact Us
            </SplitText>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <BlurText 
              className="section-subtitle"
              delay={0.5}
            >
              We'd love to hear from you. Get in touch with our team.
            </BlurText>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '32px', marginBottom: '64px' }}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(51, 102, 255, 0.15)',
                  y: -10
                }}
              >
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <motion.div 
                    style={{ fontSize: '48px', marginBottom: '16px' }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {info.icon}
                  </motion.div>
                  <motion.h3 
                    className="card-title"
                    whileHover={{ color: '#3366ff' }}
                    transition={{ duration: 0.3 }}
                  >
                    {info.title}
                  </motion.h3>
                  <motion.p 
                    className="card-text" 
                    style={{ whiteSpace: 'pre-line' }}
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {info.content}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ScrollFloat>
                <motion.h3
                  whileHover={{ color: '#3366ff', scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Get In Touch
                </motion.h3>
              </ScrollFloat>
              
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h4>Ready to start your journey?</h4>
                <p>
                  Whether you have questions about bookings, need travel advice, or want to 
                  share feedback, our friendly team is here to help. We respond to all 
                  inquiries within 24 hours.
                </p>
              </motion.div>
              
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h4>Quick Response</h4>
                <p>
                  For urgent matters, call us directly. Our customer support team is 
                  available during business hours to assist you immediately.
                </p>
              </motion.div>
              
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h4>Social Media</h4>
                <p>
                  Follow us on social media for travel tips, special offers, and updates. 
                  You can also reach out to us through our social channels.
                </p>
                <div className="social-links" style={{ marginTop: '16px' }}>
                  <motion.a 
                    href="/" 
                    whileHover={{ scale: 1.2, color: '#3366ff' }}
                    transition={{ duration: 0.3 }}
                  >
                    Twitter
                  </motion.a>
                  <motion.a 
                    href="/" 
                    whileHover={{ scale: 1.2, color: '#3366ff' }}
                    transition={{ duration: 0.3 }}
                  >
                    Instagram
                  </motion.a>
                  <motion.a 
                    href="/" 
                    whileHover={{ scale: 1.2, color: '#3366ff' }}
                    transition={{ duration: 0.3 }}
                  >
                    Facebook
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            <motion.form 
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ color: '#3366ff' }}
              >
                Send us a message
              </motion.h3>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="form-label">Name</label>
                <motion.input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input" 
                  required 
                  whileFocus={{ scale: 1.02, borderColor: '#3366ff' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="form-label">Email</label>
                <motion.input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input" 
                  required 
                  whileFocus={{ scale: 1.02, borderColor: '#3366ff' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="form-label">Subject</label>
                <motion.input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input" 
                  required 
                  whileFocus={{ scale: 1.02, borderColor: '#3366ff' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="form-label">Message</label>
                <motion.textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input" 
                  rows="5" 
                  required 
                  whileFocus={{ scale: 1.02, borderColor: '#3366ff' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.button 
                type="submit" 
                className="btn btn-primary full-width"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 20px rgba(51, 102, 255, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <ScrollFloat>
            <SplitText className="section-title">
              Frequently Asked Questions
            </SplitText>
          </ScrollFloat>

          <motion.div 
            className="grid grid-2"
            style={{ marginTop: '64px', gap: '32px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              {
                question: 'How can I cancel my booking?',
                answer: 'You can cancel your booking through your account dashboard or by contacting our support team. Cancellation policies vary by property.'
              },
              {
                question: 'Is my payment information secure?',
                answer: 'Yes, we use industry-standard encryption and security measures to protect all payment information and personal data.'
              },
              {
                question: 'Do you offer group bookings?',
                answer: 'Yes, we offer special rates for group bookings. Contact our team for customized packages and pricing.'
              },
              {
                question: 'What if I need to modify my reservation?',
                answer: 'Most reservations can be modified through your account or by contacting us. Modification policies depend on the specific property.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="card-content">
                  <motion.h4 
                    className="card-title"
                    whileHover={{ color: '#3366ff' }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.question}
                  </motion.h4>
                  <motion.p 
                    className="card-text"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;