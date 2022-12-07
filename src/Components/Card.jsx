import React from "react";
import imagen from '../images/doctor.jpg'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

const Card = ({data}) => {
  const dentista = ({
    id: data.id,
    name: data.name,
    username: data.username
  })
  
  const addFav = () => {
    const dentistas = JSON.parse(localStorage.getItem("dentistas") || '[]')
      dentistas.push(dentista)
      localStorage.setItem("dentistas", JSON.stringify(dentistas))
      console.log(`dentista con id ${dentista.id} agregado`);
      console.log(dentistas);
  }
  
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src={imagen} alt=""/>
        <h5>{data.id}</h5>
        <Link to={'/'+data.id}><h4>{data.name}</h4></Link>
        <p>{data.username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton" id={data.id}><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></button>
    </div>
  );
};

export default Card;
