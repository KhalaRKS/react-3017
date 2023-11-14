import React, { useContext, useState } from 'react'
import { AlumnosContext } from '../context/alumnos'

export const EventoOnChange = () => {
  const {agregarAlumno}=useContext(AlumnosContext)
    const [nombre, setNombre] = useState('')

    const handleChange = (e) =>{
        setNombre(e.target.value) // esto cambio
        console.log(nombre); // esto se eejecuta
    }
    
    console.log(nombre); // nuevo valor
  return (
    <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" name='name' value={nombre} onChange={handleChange}/>
        <button onClick={(e) => { e.preventDefault(); agregarAlumno(nombre)}}>Agregar alumno</button>
    </form>
  )
}
