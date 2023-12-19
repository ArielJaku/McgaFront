import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";



const Registrarse = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notice, setNotice] = useState("");
  const FuncionRegistrarse = async (e : any) => {
    e.preventDefault();
    if (password === confirmPassword) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("El usuario ah sido registrado")
            navigate("/");
        } catch {
            setNotice("Ocurrio un error por favor intente de nuevo");
        }     
    } else {
        setNotice("Las contraseñas no coinciden");
    }
};

  return (
        <div>
            <div >
                <form>
                    { "" !== notice && <div>{ notice }</div>}
                    <div>
                        <label >Ingresar un email</label>
                        <input type = "text" placeholder = "nombre@ejemplo.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type = "password" placeholder = "Contraseña" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>
                    </div>
                    <div>
                        <label>Confirmar Contraseña</label>
                        <input type = "password" placeholder = "Confirmar Contraseña" value = { confirmPassword } onChange = { (e) => setConfirmPassword(e.target.value) }></input>
                    </div>                    
                    <div>
                        <button type = "submit" onClick = {(e) => FuncionRegistrarse(e)}>Registrarse</button>
                    </div>
                    <div>
                        <span>volver a pagina principal<Link to = "/">Click here.</Link></span>
                    </div>                    
                </form>
            </div>
        </div>
  )
}

export default Registrarse