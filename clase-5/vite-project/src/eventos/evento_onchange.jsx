import React, { useState } from 'react'

export const EventoOnChange = () => {
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
    </form>
  )
}
