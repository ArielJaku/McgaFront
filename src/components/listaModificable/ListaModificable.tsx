import { useEffect, useState } from 'react'
import Verdura from '../../models/verdura'
import './ListaModificable.css'
import { useNavigate } from 'react-router';
import verdura from '../../models/verdura';
import { getAuth } from 'firebase/auth';

const ListaModificable = () => {
const navigate = useNavigate();
const [verduras, setVerduras] = useState<Verdura[]>([])
const [notice, setNotice] = useState("");
const [nombre, setNombre] = useState("");
const [tipo, setTipo] = useState("");
const [precio, setPrecio] = useState("");
const [stock, setStock] = useState("");
const [idModificar, setIdModificar] = useState("");
const [idBorrar, setIdBorrar] = useState("");
const [abrirModal, setAbrirModal] = useState(false);

function validarSesion (){
  const tieneToken = localStorage.getItem('token');
  if(tieneToken === null){
    window.location.href = '/';
  }else{
    const log = getAuth();
    log.currentUser?.getIdToken().then((res : any)=>{
      if(res !== localStorage.getItem('token')){
        localStorage.removeItem('token')
        window.location.href = '/'
      }
    })
  }
}

validarSesion();

let jsonData = {
  "nombre": nombre, 
  "tipo": tipo,
  "precio": precio,
  "stock" : stock
}

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

const funcionBorrar = function(e : any){
  setAbrirModal(true);
  setIdBorrar(e);
}

const cancelarBorrar = function(){
  setAbrirModal(false);
}

const cancelarModificada = function(){
  setNotice("");
}
const funcionAgrecar = function(){
  navigate('../agregar')
}

function handleClick(e : string) {
  try{
    let id = e;
    fetch('http://localhost:3000/' + id, {
    method: 'DELETE',
  }).then(() => window.location.reload())
  }catch(error){
      console.log(error)
  }   
}

const funcionBorrar2 = function(){
  handleClick(idBorrar)
}

const funcionActualizar = function(e : verdura){
  let id = e._id;
  setNombre(e.nombre);
  setTipo(e.tipo);
  setPrecio(e.precio.toString());
  setStock(e.stock.toString());
  setIdModificar(id);
  setNotice("Modificar Verdura")
}

function handleClick2(e : any) {
  try{
    let id = e;
    fetch('http://localhost:3000/' + id, {
    method: 'PUT', 
    body: JSON.stringify(jsonData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => window.location.reload())
  }catch(error){
      console.log(error)
  }   
}

const cargarVerduraModificada = (e : any) => {
try {
  e = idModificar
  handleClick2(e)
  //setNotice("")
  //window.location.reload()
} catch {
  console.log("hubo un error al modificar la verdura");
}     
}

return (
    <div>
        { "" === notice && 
        <div>
          <div className='pruebita'>
        <h3>Listado de Productos</h3>
        <button onClick={() => funcionAgrecar()}>AGREGAR</button>
          </div>
          <div>
        <table id="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Accion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
            {verduras.map( verdura =>(
              <tr key={verdura._id}>                
                <td>{verdura.nombre}</td>
                <td>{verdura.tipo}</td>
                <td>{verdura.precio}</td>
                <td>{verdura.stock}</td>
                <td><button onClick={() => funcionActualizar(verdura)}>MODIFICAR</button></td>
                <td><button onClick={() => funcionBorrar(verdura._id)}>BORRAR</button></td>
              </tr>
            ))}
        </tbody>
        </table>
          </div>
        </div>}
        { "" !== notice && 
        <div >
          <h3>{notice}</h3>
          <h5>{idModificar}</h5>
          <div>
            <label >Nombre</label>
            <input id = "nombre" type = "text" placeholder = "Aca va el nombre" value = { nombre } onChange = { (e) => setNombre(e.target.value) }></input>
          </div>
          <div>
            <label>Tipo</label>
            <input id = "tipo" type = "text" placeholder = "aca va el tipo" value = { tipo } onChange = { (e) => setTipo(e.target.value) }></input>
          </div>
          <div>
            <label>Precio</label>
            <input id = "precio" type = "text" placeholder = "aca va el precio" value = { precio } onChange = { (e) => setPrecio(e.target.value) }></input>
          </div>
          <div>
            <label>Stock</label>
            <input id = "stock" type = "text" placeholder = "aca va el stock" value = { stock } onChange = { (e) => setStock(e.target.value) }></input>
          </div>                      
          <div>
            <button onClick ={(e) => cargarVerduraModificada(e)}>Modificar</button>
            <button onClick ={() => cancelarModificada()}>Cancelar</button>
          </div>     
        </div>}
        {abrirModal && 
        <div className='borrarModal'>
          <div className='modalcito'>
          <h4>ESTA SEGURO QUE QUIERE BORRAR ESTE PRODUCTO?</h4>
          <button onClick ={() => funcionBorrar2()}>Si</button>
          <button onClick ={() => cancelarBorrar()}>Cancelar</button>
          </div>
        </div>}
    </div>
  )
}

export default ListaModificable
