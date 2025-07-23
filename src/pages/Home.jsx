import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './../components/Navbar';
import SplitText from '../components/animations/SplitText';
import BlurText from '../components/animations/BlurText';
import GradientText from '../components/animations/GradientText';
import ScrollFloat from '../components/animations/ScrollFloat';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/hotels?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const popularDestinations = [
    {
      name: 'Mumbai',
      image: '/mumbai.avif',
      hotels: '2,500+ hotels'
    },
    {
      name: 'Delhi',
      image: '/delhi.avif',
      hotels: '3,200+ hotels'
    },
    {
      name: 'Bangalore',
      image: 'bangalore.avif',
      hotels: '1,800+ hotels'
    },
    {
      name: 'Goa',
      image: 'goa.avif',
      hotels: '900+ hotels'
    }
  ];

  const topHotels = [
    {
      name: 'The Oberoi Mumbai',
      location: 'Marine Drive, Mumbai',
      price: '₹25,000',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625'
    },
    {
      name: 'ITC Grand Central',
      location: 'Parel, Mumbai',
      price: '₹18,000',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742'
    },
    {
      name: 'Le Meridien',
      location: 'Connaught Place, Delhi',
      price: '₹22,000',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b'
    }
  ];

  return (
    <div className="app">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SplitText 
              className="hero-title"
              delay={0.5}
            >
              Discover Your Perfect Stay
            </SplitText>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <BlurText 
              className="hero-subtitle"
              delay={1.2}
            >
              Find and book accommodations around the world
            </BlurText>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="search-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <div className="search-form">
              <input
                type="text"
                placeholder="Where are you going?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input location-input"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <input
                type="date"
                placeholder="dd/mm/yyyy"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="search-input date-input"
              />
              <input
                type="date"
                placeholder="dd/mm/yyyy"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="search-input date-input"
              />
              <input
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="search-input guests-input"
              />
              <button 
                onClick={handleSearch}
                className="search-btn"
              >
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <ScrollFloat>
              <SplitText className="section-title">
                Popular Destinations
              </SplitText>
            </ScrollFloat>
            <a href="/hotels" className="view-all-link">View All</a>
          </div>

          <div className="grid grid-4">
            {popularDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card"
                onClick={() => navigate(`/hotels?search=${destination.name}`)}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="card-image"
                />
                <div className="card-content">
                  <h3 className="card-title">{destination.name}</h3>
                  <p className="card-text">{destination.hotels}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Rated Hotels */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <ScrollFloat>
              <SplitText className="section-title">
                Top Rated Hotels
              </SplitText>
            </ScrollFloat>
            <a href="/hotels" className="view-all-link">View All</a>
          </div>

          <div className="grid grid-3">
            {topHotels.map((hotel, index) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="card"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="card-image"
                />
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">{hotel.name}</h3>
                    <span className="rating-badge">
                      ★ {hotel.rating}
                    </span>
                  </div>
                  <p className="card-text">{hotel.location}</p>
                  <div className="card-footer">
                    <span className="card-price">
                      {hotel.price}
                    </span>
                    <button className="btn btn-secondary">View Details</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        {/* <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>
                <GradientText>Stayo</GradientText>
              </h3>
              <p>
                Your gateway to extraordinary travel experiences around the world.
              </p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/hotels">Hotels</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Support</h3>
              <ul>
                <li><a href="/">Help Center</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="/">Twitter</a>
                <a href="/">Instagram</a>
                <a href="/">Facebook</a>
              </div>
            </div>
          </div> */}
          <div className="footer-bottom">
            <p>&copy; 2025 Stayo. All rights reserved.</p>
          </div>
        
      </footer>
    </div>
  );
};

export default Home;




