// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import PocketBase from 'pocketbase';

// Créez une instance de PocketBase
const pb = new PocketBase('http://127.0.0.1:8090');

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const admin = pb.authStore.model;
      if (admin) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    // Vérifiez si le token est présent dans le local storage
    const token = pb.authStore.token;
    if (token) {
      pb.authStore.loadFromCookie(); // Chargez le token depuis le cookie
      checkAuth();
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      await pb.admins.authWithPassword(email, password);
      document.cookie = pb.authStore.exportToCookie({ httpOnly: false }); // Stockez le token dans le cookie
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
      throw error;
    }
  };

  const logout = () => {
    pb.authStore.clear();
    document.cookie = pb.authStore.exportToCookie({ httpOnly: false }); // Supprimez le token du cookie
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
