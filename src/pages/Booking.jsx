
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './../components/Navbar';
import SplitText from '../components/animations/SplitText';

const Booking = () => {
  const { hotelId } = useParams();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Navbar />
      <div style={{ paddingTop: '96px', paddingBottom: '48px' }}>
        <div className="container">
          <SplitText className="section-title">
            Booking Page
          </SplitText>
          <p style={{ color: '#666666' }}>Hotel ID: {hotelId}</p>
          <p style={{ color: '#666666', marginTop: '16px' }}>
            This page will handle the booking process with guest details, payment options, and UPI integration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
