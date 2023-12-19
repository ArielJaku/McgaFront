import "./BarraNavegacion.css"
import { Link } from 'react-router-dom'

const BarraNavegacion = () => {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="login">Iniciar Sesion</Link>
            <Link to="registrarse">Registrarse</Link>
            <Link to="listaModificar">Modificar Lista</Link>
            <Link to="agregar">Agregar Producto</Link>
            <Link to="nosotros">Nosotros</Link>
            <Link to="logout">Cerrar Sesion</Link>
        </nav>
    </div>
  )
}

export default BarraNavegacion