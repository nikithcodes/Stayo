import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('stayo_token'));

  useEffect(() => {
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/user/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'projectId': 'your_project_id'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setUser(data.data);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'projectId': 'your_project_id'
        },
        body: JSON.stringify({ email, password, appType: 'bookingportals' })
      });

      const data = await response.json();
      
      if (response.ok) {
        setToken(data.token);
        setUser(data.data.user);
        localStorage.setItem('stayo_token', data.token);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'projectId': 'your_project_id'
        },
        body: JSON.stringify({ name, email, password, appType: 'bookingportals' })
      });

      const data = await response.json();
      
      if (response.ok) {
        setToken(data.token);
        setUser(data.data.user);
        localStorage.setItem('stayo_token', data.token);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('stayo_token');
  };

  return (
    <AuthContext.Provider value={{
      user,
      token,
      login,
      register,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
