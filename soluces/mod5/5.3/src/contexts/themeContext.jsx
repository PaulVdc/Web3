// src/context/themeContext.jsx
import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light'); // 'light' par défaut

  const setDarkTheme = () => {
    setCurrentTheme('dark');
  };

  const setLightTheme = () => {
    setCurrentTheme('light');
  };


// Dans themeContext.jsx
const toggleTheme = () => {
  console.log('toggleTheme a été appelé');
  setCurrentTheme((prevTheme) => {
    console.log('Changement de thème en cours'); // Pour le débogage
    return prevTheme === 'light' ? 'dark' : 'light';
  });
};



  const getCurrentThemeDetails = () => {
    return currentTheme === 'dark'
      ? {
          backgroundColor: '#1a1a1a',
          primaryTextColor: '#ffffff',
          secondaryTextColor: '#aaaaaa',
          linkColor: '#007bff',
        }
      : {
          backgroundColor: '#ffffff',
          primaryTextColor: '#000000',
          secondaryTextColor: '#666666',
          linkColor: '#007bff',
        };
  };

  const themeContextValue = {
    setDarkTheme,
    setLightTheme,
    toggleTheme,
    getCurrentThemeDetails,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
