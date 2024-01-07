// Dans Footer.jsx
import React, { useState } from 'react';
import { useTheme } from '../../contexts/themeContext';

const Footer = () => {
  const [forceUpdate, setForceUpdate] = useState(0); // Variable d'état pour forcer la mise à jour
  const { toggleTheme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
    setForceUpdate(prev => prev + 1); // Mettre à jour la variable d'état pour forcer le rendu
  };

  return (
    <footer>
      <button onClick={handleToggleTheme}>Changer de thème</button>
      {/* Utilisez la variable d'état pour forcer le rendu */}
      <p>Force Update: {forceUpdate}</p>
    </footer>
  );
};

export default Footer;
