import React, { useRef, useState } from 'react'

export const EventoOnSubmit = () => {
    const [nombre, setNombre] = useState('')
    const inputName = useRef(null)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setNombre(inputName.current.value)
        console.log('Enviaste el formulario!');
    }
  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
        <label htmlFor="name">Nombre:{nombre}</label>
        <input type="text" name='name'ref={inputName}/>
        <input type="submit" value="Enviar" />
    </form>
  )
}
