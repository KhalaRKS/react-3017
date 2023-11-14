import { useRef, useState } from 'react'

// CustomHook
export const EventoOnClick = () => {
    const [nombre, setNombre] = useState('')
    const inputName = useRef(null)

    const handleClick = () => {
        setNombre(inputName.current.value)
        console.log('Enviaste el formulario!');
    }
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
        <label htmlFor="name">Nombre:{nombre}</label>
        <input type="text" name='name'ref={inputName}/>
        <button onClick={handleClick}>Enviar</button>
    </div>
  )
}
