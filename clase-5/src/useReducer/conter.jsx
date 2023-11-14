// const {alumnos, eliminarAlumno} =  useContext(AlumnosContext)
import React, { useReducer } from 'react';
const initialState = 0
const initialState = {
    name: 'Pepe',
    surname: 'Rodriguez',
    dni: '4210'
}
//state   {type: "increment"}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            break;
    }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <button onClick={() => dispatch({type: "increment"})}>sumar</button>
        <button onClick={() => dispatch({type: "decrement"})}>restar</button>
        <button onClick={() => dispatch({type: "reset"})}>reset</button>
        <p>{state}</p>
        {/* <div>
            <h1>Alumnos!</h1>
            {
                alumnos.map((alumno) => <p>{alumno}</p>)
            }
            <button onClick={() => eliminarAlumno("Messi")}>
                Eliminar alumno
            </button>
        </div> */}
        </div>

  )
}
