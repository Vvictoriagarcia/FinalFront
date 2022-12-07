import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { ContextGlobal, useContextGlobal } from './utils/global.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {

  const {theme, handleChangeTheme} = useContextGlobal(ContextGlobal)
  return (
    
    <nav className={"nav " + theme.className} >
      <div className='dhOdonto'>
        <h1><span>D</span>H Odonto</h1>
      </div>
      <div className='links'>
      <Link to="/"><li>Home</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
      <Link to="/favs"><li>Favs</li></Link>
      <button onClick={handleChangeTheme}><FontAwesomeIcon icon={faMoon}></FontAwesomeIcon></button>
      </div>
      
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    
      
    </nav>
  )
}

export default Navbar