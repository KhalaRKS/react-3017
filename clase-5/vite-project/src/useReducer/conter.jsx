import React, { useContext, useReducer } from 'react';
import { AlumnosContext } from '../context/alumnos';

//              state   {type: "increment"}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return state = 0
    
        default:
            break;
    }
}


export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, 0)
    const {alumnos, eliminarAlumno} =  useContext(AlumnosContext)




  return (
    <div>
        {/* <button onClick={() => dispatch({type: "increment"})}>sumar</button>
        <button onClick={() => dispatch({type: "decrement"})}>restar</button>
        <button onClick={() => dispatch({type: "reset"})}>reset</button>
        <p>{state}</p> */}
        <div>
            <h1>Alumnos!</h1>
            {
                alumnos.map((alumno) => <p>{alumno}</p>)
            }
            <button onClick={() => eliminarAlumno("Messi")}>
                Eliminar alumno
            </button>
        </div>
        </div>

  )
}
