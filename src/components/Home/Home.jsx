import React from 'react';
import './home_styles.scss';

// Componentes
import Capa from './capa/capa';
import About from './about/about';

const Home = ({ theme, toggleTheme }) => {  
  return (
    <div className="home animated">
      {/* home */}
      <Capa theme={theme} toggleTheme={toggleTheme} />  
      
      {/* sobre */}
      <About />
    </div>
  );
};

export default Home;
