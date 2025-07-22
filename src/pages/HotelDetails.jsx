
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SplitText from '../components/animations/SplitText';

const HotelDetails = () => {
  const { hotelId } = useParams();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Navbar />
      <div style={{ paddingTop: '96px', paddingBottom: '48px' }}>
        <div className="container">
          <SplitText className="section-title">
            Hotel Details Page
          </SplitText>
          <p style={{ color: '#666666' }}>Hotel ID: {hotelId}</p>
          <p style={{ color: '#666666', marginTop: '16px' }}>
            This page will show detailed hotel information, room options, amenities, and booking functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;