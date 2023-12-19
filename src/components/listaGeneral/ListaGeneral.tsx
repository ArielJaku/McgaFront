import { useEffect, useState } from "react";
import './ListaGeneral.css'
import verdura from "../../models/verdura";

const ListaGeneral = () => {
const[verduras, setVerduras] = useState([])

useEffect(()=>{
  const getVerduras = async () => {
    const verdurasFromServer = await fetchVerduras()
    setVerduras(verdurasFromServer)
  }
  getVerduras();
},[])

async function fetchVerduras() {
    const res = await fetch('http://localhost:3000/')
    const data = await res.json()
    return data
}

const traerTodos = function() {
  return verduras as Array<verdura>
}

const verdurasParaMostrar : Array<verdura> = traerTodos()

  return (
    <div>
      <h3>Listado de Productos en Stock</h3>
      <table id="customers">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
            {verdurasParaMostrar.map( verdu =>(
              <tr key={verdu.nombre}>
                <td>{verdu.nombre}</td>
                <td>{verdu.tipo}</td>
                <td>${verdu.precio}</td>
                <td>{verdu.stock}</td>
              </tr>
              ))}
        </tbody>
      </table>     
    </div>
  )
}

export default ListaGeneral