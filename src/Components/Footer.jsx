import React from 'react'
import "../index.css"
import imagen from  "../images/DH.png"
import facebook from '../images/ico-facebook.png'
import instagram from '../images/ico-instagram.png'
import whatsapp from '../images/ico-whatsapp.png'
import tiktok from '../images/ico-tiktok.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className='logo'> 
        <img src={imagen} alt='DH-logo' />
      </div>
      <div className='apps'>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={whatsapp} alt="whatsapp" />
        <img src={tiktok} alt="tiktok" />
      </div>
    </footer>
  )
}

export default Footer
