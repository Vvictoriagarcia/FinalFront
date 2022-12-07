import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  const [data, setData] = useState({})


  useEffect(() => {
    axios(url).then(res => setData(res.data))
  })


  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  // const result = data?.find(data => data.id === params.id)
  
  
  
  return (
    <div className='detail'>
    
      <h1>Detail Dentist </h1>
      <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Phone</td>
        <td>Website</td>

      </tr>
      <tr>
    
    <td>{data.name}</td>

    <td>{data.email}</td>

    <td>{data.phone}</td>

    <td>{data.website}</td>


  </tr>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail