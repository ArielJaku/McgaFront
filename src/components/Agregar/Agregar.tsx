import { useState } from "react";
import { useNavigate } from 'react-router';

const Agregar = () => {

const [nombre, setNombre] = useState("");
const [tipo, setTipo] = useState("");
const [precio, setPrecio] = useState("");
const [stock, setStock] = useState("");
const navigate = useNavigate();

let jsonData = {
            "nombre": nombre, 
            "tipo": tipo,
            "precio": precio,
            "stock" : stock
}

function handleClick() {
    try{
      fetch('http://localhost:3000/', {
      method: 'POST', 
      body: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(()=>{navigate('../listaModificar')})
    }catch(error){
        console.log(error)
    }   
  }

const cargarVerduraNueva = () => {
try {
    handleClick();
} catch {
    console.log("hubo un error al cargar la verdura");
}     
  
}

  return (
    <div>     
        <div>
            <label >Nombre</label>
            <input id = "Nombre" type = "text" placeholder = "nombre de la verdura" value = { nombre } onChange = { (e) => setNombre(e.target.value) }></input>
        </div>
        <div>
            <label>Tipo</label>
            <input id = "Tipo" type = "text" placeholder = "tipo de verdura" value = { tipo } onChange = { (e) => setTipo(e.target.value) }></input>
        </div>
        <div>
            <label>Precio</label>
            <input id = "Precio" type = "text" placeholder = "precio de la verdura" value = { precio } onChange = { (e) => setPrecio(e.target.value) }></input>
        </div>
        <div>
            <label>Stock</label>
            <input id = "Stock" type = "text" placeholder = "stock de la verdura" value = { stock } onChange = { (e) => setStock(e.target.value) }></input>
        </div>                       
        <div>
            <button onClick ={() => cargarVerduraNueva()}>Agregar</button>
        </div>                   
    </div>
  )
}

export default Agregar
