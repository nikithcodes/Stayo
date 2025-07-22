import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import SplitText from '../components/animations/SplitText';
import BlurText from '../components/animations/BlurText';
import ScrollFloat from '../components/animations/ScrollFloat';
import GradientText from '../components/animations/GradientText';

const About = () => {
  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '500+', label: 'Partner Hotels' },
    { number: '50+', label: 'Destinations' }
  ];

  const features = [
    {
      title: 'Best Price Guarantee',
      description: 'We ensure you get the best deals on accommodations worldwide.',
      icon: '💰'
    },
    {
      title: '24/7 Customer Support',
      description: 'Our dedicated team is always here to help you with your travel needs.',
      icon: '🎧'
    },
    {
      title: 'Instant Booking',
      description: 'Book your perfect stay in just a few clicks with instant confirmation.',
      icon: '⚡'
    },
    {
      title: 'Secure Payments',
      description: 'Your payment information is always safe and secure with us.',
      icon: '🔒'
    }
  ];

  const aboutImages = [
    'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    'https://images.unsplash.com/photo-1500673922987-e212871fec22'
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
              About Stayo
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
              Your trusted partner in creating extraordinary travel experiences
            </BlurText>
          </motion.div>
        </div>
      </section>

      {/* Story Section with Images */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <ScrollFloat>
              <motion.h2 
                style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '24px' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <GradientText>Our Story</GradientText>
              </motion.h2>
            </ScrollFloat>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.p 
                style={{ fontSize: '18px', marginBottom: '20px' }}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                Founded with a vision to revolutionize travel booking, Stayo has become a leading platform 
                connecting travelers with their perfect accommodations. We believe that finding the right 
                place to stay should be simple, reliable, and inspiring.
              </motion.p>

              <motion.img
                src={aboutImages[0]}
                alt="Beautiful hotel interior"
                className="about-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
              
              <motion.p 
                style={{ fontSize: '18px', marginBottom: '20px' }}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our platform offers a carefully curated selection of accommodations, from cozy boutique 
                hotels to luxurious resorts, ensuring that every traveler finds their ideal stay. We 
                work tirelessly to provide the best prices, exceptional service, and unforgettable experiences.
              </motion.p>

              <motion.img
                src={aboutImages[1]}
                alt="Beautiful travel destination"
                className="about-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              />
              
              <motion.p 
                style={{ fontSize: '18px', marginBottom: '20px' }}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                At Stayo, we understand that travel is about creating memories, discovering new places, 
                and experiencing different cultures. That's why we're committed to making your journey 
                seamless from the moment you start planning until you return home.
              </motion.p>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="about-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 5,
                  y: -10
                }}
              >
                <motion.span 
                  className="stat-number"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.number}
                </motion.span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <ScrollFloat>
            <SplitText className="section-title">
              Why Choose Stayo?
            </SplitText>
          </ScrollFloat>

          <motion.div 
            className="features-grid" 
            style={{ marginTop: '64px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateX: 5,
                  y: -8
                }}
              >
                <motion.div 
                  className="feature-icon"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3 
                  style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}
                  whileHover={{ color: '#7c3aed' }}
                  transition={{ duration: 0.3 }}
                >
                  <GradientText>{feature.title}</GradientText>
                </motion.h3>
                <motion.p 
                  style={{ color: '#666666', lineHeight: '1.6' }}
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <ScrollFloat>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
            >
              <SplitText className="section-title">
                Our Mission
              </SplitText>
              <motion.p 
                style={{ fontSize: '20px', lineHeight: '1.8', marginTop: '32px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                To make travel accessible, enjoyable, and memorable for everyone by providing 
                a seamless booking experience, competitive prices, and exceptional customer service. 
                We strive to connect travelers with their perfect accommodations while supporting 
                local communities and promoting sustainable tourism.
              </motion.p>
            </motion.div>
          </ScrollFloat>
        </div>
      </section>
    </div>
  );
};

export default About;