import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// COMPONENTES
import Navbar from './components/navbar/navbar';
import Home from './components/Home/Home';
import Skills from "./components/skills/Skills"

// PAGES
import Main from './pages/main/main';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes theme={theme} toggleTheme={toggleTheme} />
      </BrowserRouter>
    </div>
  );
}

function AnimatedRoutes({ theme, toggleTheme }) {
  const location = useLocation(); // Agora useLocation está dentro do BrowserRouter

  return (
    <div className="main">
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={300} 
          classNames="fade" 
          unmountOnExit
        >
          <Routes location={location}>
            <Route path="/" element={<Main theme={theme} toggleTheme={toggleTheme} />}>
              <Route index element={<Home theme={theme} toggleTheme={toggleTheme} />} />
              <Route path="skills" element={<Skills theme={theme} toggleTheme={toggleTheme}/>}/>
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
