// CSS
import './App.css'

// ROUTER
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

// COMPONENTES
import Navbar from './components/navbar/navbar'

// PAGES
import Home from './pages/Home'
function App() {


  return (
     <div className='App'>
         <BrowserRouter>
         <Navbar/>
             <div className='main'>
                <Routes>
                    <Route path="/"  element={<Home/>}/>
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
