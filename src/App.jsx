// CSS
import './App.css'

// ROUTER
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

// COMPONENTES
import Navbar from './components/navbar/navbar'

function App() {


  return (
     <div className='App'>
         <BrowserRouter>
         <Navbar/>
             <div className='container'>
                <Routes>
                    <Route path="/"/>
                    <Route path="/sobre"/>
                    <Route path="/jornada"/>
                    <Route path="/skills"/>
                    <Route path="/servicos"/>
                    <Route path="/contato"/>
                </Routes>
             </div>
         </BrowserRouter>
     </div>
  )
}

export default App
