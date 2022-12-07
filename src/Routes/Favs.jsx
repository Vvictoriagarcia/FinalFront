import React from "react";
import Card from "../Components/Card";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  let dentista = JSON.parse(localStorage.getItem("dentistas"))
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {dentista.map(item => <Card key={item.id} data={item}></Card> )}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
      
    </>
  );
};

export default Favs;
