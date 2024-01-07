// Par exemple, dans ListOpinions.jsx
import React from 'react';
import { useTheme } from '../../contexts/themeContext';

const ListOpinions = () => {
  const { getCurrentThemeDetails } = useTheme();
  const themeDetails = getCurrentThemeDetails();

  return (
    <div style={{ backgroundColor: themeDetails.backgroundColor, color: themeDetails.primaryTextColor }}>
      
    </div>
  );
};

export default ListOpinions;
