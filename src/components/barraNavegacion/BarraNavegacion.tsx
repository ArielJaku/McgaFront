import "./BarraNavegacion.css"
import { Link } from 'react-router-dom'

const BarraNavegacion = () => {
  let tieneToken : boolean = false;
  if(localStorage.getItem('token') !== null){
    tieneToken = true;
  }
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            {!tieneToken && <Link to="login">Iniciar Sesion</Link>}
            {!tieneToken && <Link to="registrarse">Registrarse</Link>}
            <Link to="listaModificar">Modificar Lista</Link>
            <Link to="agregar">Agregar Producto</Link>
            <Link to="nosotros">Nosotros</Link>
            {tieneToken &&<Link to="logout">Cerrar Sesion</Link>}
        </nav>
    </div>
  )
}

export default BarraNavegacion