import './curriculum_style.scss'

// Componentes
import Jornada from './components_curriculum/jornada/jornada'
import Skills from './components_curriculum/skills/skills'
import Servicos from './components_curriculum/servicos/servicos'

const curriculum = () => {
  return (
    <>
        {/* Jornada */}
            <Jornada/>

        {/* Habilidades */}
            <Skills/>

        {/* Serviços */}
            <Servicos/>

    </>
  )
}



export default curriculum