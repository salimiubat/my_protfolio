// AuthContext.js
import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const login = async (username, password) => {
    try {
      // Make a request to the server to authenticate the user
      const requestBody = JSON.stringify({ username, password });
      console.log('Request Body:', requestBody);
      const response = await fetch('http://127.0.0.1:8000/api/users/token/', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:requestBody,
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      // Assuming the server responds with a token
      const { token } = await response.json();

      // Store the token securely (e.g., in localStorage)
      localStorage.setItem('token', token);

      // Update the token state
      setToken(token);

      // Redirect or update state as needed
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  const logout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');

    // Update the token state
    setToken(null);

    // Redirect or update state as needed
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  // If context is not found, provide a default value (empty object)
  if (!context) {
    console.warn('useAuth is being used outside of AuthProvider, providing a default context.');
    return { login: () => {}, logout: () => {} };
  }

  return context;
};

export { AuthProvider, useAuth };
