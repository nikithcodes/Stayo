import React from 'react';
import Navbar from '../components/Navbar';
import SplitText from '../components/animations/SplitText';
import { useAuth } from '../contexts/AuthContext';

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
        <Navbar />
        <div style={{ paddingTop: '96px', paddingBottom: '48px' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <SplitText className="section-title">
              Please Login
            </SplitText>
            <p style={{ color: '#666666' }}>You need to be logged in to view your profile.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Navbar />
      <div style={{ paddingTop: '96px', paddingBottom: '48px' }}>
        <div className="container">
          <SplitText className="section-title">
            {`Welcome, ${user?.name}!`}
          </SplitText>
          <p style={{ color: '#666666', marginBottom: '16px' }}>Email: {user?.email}</p>
          <p style={{ color: '#666666' }}>
            This page will show your booking history, profile settings, and account management options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;