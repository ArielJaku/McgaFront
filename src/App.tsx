import Logo from '/LogoVerdu.png'
import './App.css'
import BarraNavegacion from './components/barraNavegacion/BarraNavegacion'
import { Route, Routes } from 'react-router-dom'
import ListaGeneral from './components/listaGeneral/ListaGeneral'
import Nosotros from './components/Nosotros/Nosotros'
import Registrarse from './components/registrarse/Registrarse'
import ListaModificable from './components/listaModificable/ListaModificable'
import Agregar from './components/Agregar/Agregar'
import Logout from './components/Logout/Logout'
import Login from './components/Login/Login'
function App() {
  return (
    <>
      <div>
      <a href="#">
          <img src={Logo} className="logo" alt="logo" />
        </a>
      </div>
      <h1>La Verduleria</h1>
      <div>
      <BarraNavegacion/>
        <Routes>
          <Route path="/" element={ <ListaGeneral/> } />
          <Route path="nosotros" element={ <Nosotros/> } />
          <Route path="login" element={ <Login/> } />
          <Route path="registrarse" element={ <Registrarse/> } />
          <Route path="listaModificar" element={ <ListaModificable/> } />
          <Route path="agregar" element={ <Agregar/> } />
          <Route path="logout" element={ <Logout/> } />
        </Routes>
      </div> 
    </>
  )
}

export default App
