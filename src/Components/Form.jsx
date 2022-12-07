import React from "react";
import { useState } from "react";


const Form = () => {
  const [usuario , setUsuario] = useState({
    nombre: '',
    email:''
  })
  const [gracias, setGracias] = useState()
  const handleChange =(e)=>{
    setUsuario({...usuario, [e.target.name]:e.target.value})
  }
  const [mensaje, setMensaje] = useState()
  const validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
  const onClick = (e) => {
    e.preventDefault()
    setGracias(`Gracias ${usuario.nombre}, nos contactaremos cuanto antes via mail`)
    if(validarEmail.test(usuario.email) && usuario.nombre.length >= 5 ){
      setMensaje()
    }else {
      setMensaje(`Por favor verifique su informacion nuevamente`)
    }
  }
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <input type="text" name="nombre" id="" placeholder="nombre completo" onChange={handleChange}/>
        <input type="email" name="email" id="" placeholder= "email" onChange={handleChange}/>
        <button onClick={onClick}>Enviar</button>
      </form>
      <p>{mensaje}</p>
      <h3>{gracias}</h3>
    </div>
  );
};

export default Form;
