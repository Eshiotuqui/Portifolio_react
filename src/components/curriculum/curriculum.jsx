import './curriculum_style.scss';

// Componentes
import Jornada from './components_curriculum/jornada/jornada';
import Skills from './components_curriculum/skills/skills';
import Servicos from './components_curriculum/servicos/servicos';
import Footer from '../footer/footer';


const Curriculum = () => {
  return (
    <>
      {/* Sempre renderiza todas as seções */}
      <Jornada />
      <Skills />
      <Servicos />
      <Footer />
    </>
  );
}

export default Curriculum;
