
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, login, register, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(loginForm.email, loginForm.password);
      setIsLoginOpen(false);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(registerForm.name, registerForm.email, registerForm.password);
      setIsRegisterOpen(false);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo">
            Stayo
          </Link>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/hotels">Hotels</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="auth-buttons">
            {isAuthenticated ? (
              <>
                <Link to="/user" className="btn btn-secondary">
                  Hi, {user?.name}
                </Link>
                <button onClick={handleLogout} className="btn btn-primary">
                  Logout
                </button>
              </>
            ) : (
              <>
                <button onClick={() => setIsLoginOpen(true)} className="btn btn-secondary" style={{border:"none"}}>
                  Login
                </button>
                <button onClick={() => setIsRegisterOpen(true)} className="btn btn-primary">
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="modal-overlay" onClick={() => setIsLoginOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2 className="modal-title">Login to Stayo</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {isRegisterOpen && (
        <div className="modal-overlay" onClick={() => setIsRegisterOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2 className="modal-title">Join Stayo</h2>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={registerForm.name}
                  onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={registerForm.email}
                  onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  value={registerForm.password}
                  onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;

