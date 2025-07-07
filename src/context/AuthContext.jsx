import React, { useState } from 'react';
import { AuthContext } from './AuthContextObject';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    try {
      setLoading(true);
      // Simulate login delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation
      if (email && password) {
        setUser({ email, name: email.split('@')[0] });
        return true;
      }
      throw new Error('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email, password, name) => {
    try {
      setLoading(true);
      // Simulate signup delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email && password && name) {
        setUser({ email, name });
        return true;
      }
      throw new Error('Invalid signup details');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider 
      value={{
        user,
        loading,
        login,
        signup,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
