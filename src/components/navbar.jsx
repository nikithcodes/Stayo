import React from 'react';

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        {/* Left side: App logo */}
        <div className="navbar-logo">
          <img src="./../../logo1.png" alt="App Logo" className="logo" />
        </div>

        {/* Right side: Navigation links and user logo */}
        <div className="navbar-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#hotels" className="nav-link">Hotels</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
          
        </div>
        <img src="./../../user.png" alt="User" className="user-logo" />
      </div>

<style jsx>{`
  /* Navbar container */
  .navbar {
    display: flex;
    justify-content: space-between; /* Ensures proper spacing between logo, links, and user logo */
    align-items: center;
    padding: 15px 30px;
    background: transparent; /* Matches the website background */
    box-shadow: none; /* Removes shadow for a seamless look */
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  /* Logo styling */
  .navbar-logo {
    flex: 1; /* Pushes the logo to the left */
  }

  .navbar-logo img {
    height: 70px; /* Increased height for a bigger logo */
    transition: transform 0.3s ease;
  }

  .navbar-logo img:hover {
    transform: scale(1.1);
  }

  /* Navigation links container */
  .navbar-links {
    display: flex;
    align-items: center;
    gap: 25px; /* Adds space between the links */
    flex: 2; /* Centers the links in the middle */
    margin-left: 4cm; /* Moves the links 4cm to the right */
  }

  /* Navigation links styling */
  .nav-link {
    color: #333; /* Matches the website's text color */
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Arial', sans-serif;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .nav-link:hover {
    color: #007bff;
    transform: translateY(-3px);
  }

  /* User logo styling */
  .user-logo {
    cursor: pointer;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #333; /* Matches the website's text color */
    margin-left: 30px; /* Adds space between the nav links and the user logo */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .user-logo:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .logo {
    border-radius: 50%;
  }
`}</style>
    </div>
  );
}
