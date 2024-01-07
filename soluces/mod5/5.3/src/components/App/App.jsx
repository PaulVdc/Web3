// src/components/App/App.jsx
import React from 'react';
import { ThemeProvider } from '../../contexts/themeContext'; // Importez le ThemeProvider
import AddOpinions from '../AddOpinion/AddOpinion';
import ListOpinions from '../ListOpinions/ListOpinions';
import Footer from '../Footer/Footer'; // Importez le composant Footer si nécessaire

const App = () => {
  return (
    <ThemeProvider> 
      <div>
        <ListOpinions />
        <AddOpinions />
        <Footer /> 
      </div>
    </ThemeProvider> 
  );
};

export default App;
