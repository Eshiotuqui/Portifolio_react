import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useRef } from 'react';

// Componentes
import Navbar from './components/navbar/navbar';
import Home from './components/Home/Home';
import Curriculum from './components/curriculum/curriculum';
import Projetos from './components/projetos/projetos';
import Contato from './components/contato/contato';
import Header from './components/header/header';

// Pages
import Main from './pages/main/main';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Estado para controlar a sidebar

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Função para alternar a sidebar
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Função para fechar a sidebar ao selecionar um item de menu
  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <BrowserRouter>
        {/* Passa as funções para Navbar e Header */}
        <Navbar isSidebarVisible={isSidebarVisible} closeSidebar={closeSidebar} />
        <Header theme={theme} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} />
        <AnimatedRoutes theme={theme} toggleTheme={toggleTheme} closeSidebar={closeSidebar} />
      </BrowserRouter>
    </div>
  );
}

function AnimatedRoutes({ theme, toggleTheme, closeSidebar }) {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <div className="main">
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="fade"
          unmountOnExit
          nodeRef={nodeRef} // Usando a ref no CSSTransition
        >
          <div ref={nodeRef}> {/* Passando a ref diretamente ao elemento que será animado */}
            <Routes location={location}>
              <Route path="/" element={<Main theme={theme} toggleTheme={toggleTheme} />}>
                <Route index element={<Home theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="curriculum" element={<Curriculum theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="curriculum/skills" element={<Curriculum theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="curriculum/servicos" element={<Curriculum theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="projetos" element={<Projetos theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="contato" element={<Contato theme={theme} toggleTheme={toggleTheme} />} />
              </Route>
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
