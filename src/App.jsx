import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './pages/Home';




function Hotels() {
  return <h1 style={{ paddingTop: "100px", textAlign: "center" }}>Browse Our Hotels</h1>;
}

function About() {
  return <h1 style={{ paddingTop: "100px", textAlign: "center" }}>About Us</h1>;
}

function Contact() {
  return <h1 style={{ paddingTop: "100px", textAlign: "center" }}>Contact Page</h1>;
}

function Profile() {
  return <h1 style={{ paddingTop: "100px", textAlign: "center" }}>Your Profile</h1>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

