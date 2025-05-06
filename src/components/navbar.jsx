import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            Stayo
          </Link>

          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/hotels" className="nav-link">Hotels</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="profile-section">
            <Link to="/profile">
              <div className="avatar">
                <img className="avatar-img" src="/user.png" alt="Profile" />
                
              </div>
            </Link>
            <div className="auth-buttons">
              <button className="btn-outline">Sign In</button>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </div>
      </header>

      
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: white;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
          z-index: 50;
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1e3a8a;
          text-decoration: none;
        }

        .nav {
          display: none;
        }

        @media (min-width: 768px) {
          .nav {
            display: flex;
            align-items: center;
            gap: 32px;
          }
        }

        .nav-link {
          color: #4b5563;
          text-decoration: none;
        }

        .nav-link:hover {
          color: #065f46;
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .avatar {
          width: 40px;
          height: 40px;
          position: relative;
          overflow: hidden;
          border-radius: 50%;
          cursor: pointer;
          background-color: #065f46;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .avatar-fallback {
          color: white;
          font-weight: bold;
        }

        .auth-buttons {
          display: none;
        }

        @media (min-width: 768px) {
          .auth-buttons {
            display: block;
          }
        }

        .btn-outline {
          background: transparent;
          border: 1px solid #ccc;
          padding: 8px 16px;
          margin-right: 8px;
          cursor: pointer;
        }

        .btn-primary {
          background-color: #1e3a8a;
          color: white;
          border: none;
          padding: 8px 16px;
          cursor: pointer;
        }

        .btn-primary:hover {
          background-color: #1e40af;
        }
      `}</style>
    </>
  );
}


