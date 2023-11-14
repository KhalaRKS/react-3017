import React, { useEffect, useState } from 'react'

export const EjemploUseEffect = () => {
    const [nombre, setNombre] = useState('')
    const [counter, setCounter] = useState(0)


    useEffect(() => {
        setTimeout(() =>{
            setNombre('Nancy')
        }, 5000)
    }, [])

    // useEffect(() => {
    //     console.log(nombre);
    // })
    useEffect(() => {
       if(nombre == 'Nancy') console.log("Hola " + nombre);
    }, [nombre])

    useEffect(() => {
        console.log(`El contador ahora es ${counter}`);
    }, [nombre])

    useEffect(() => {
        setTimeout(() =>{
            setNombre('Nancy')
        }, 5000)
    }, [])

    
  return (
    <div>
        {nombre == null ? <p>Cargando...</p> : <h1>Hola {nombre}</h1>}
        <p>{counter}</p>
        <button onClick={() => setCounter(prev => prev + 1)}>+</button>
        <button onClick={() => setNombre()}>borrar componente</button>
    </div>
  )
}
