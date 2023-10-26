import { useState } from 'react'
import './App.css'
import { Counter } from './conter'
import { Counter2 } from './conter_sin_reducer'
import { ContextoAlumnos } from './context/alumnos'
import { Listado } from './listado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextoAlumnos>
        <Listado/>
        <Counter/>
        <Counter2></Counter2>
    </ContextoAlumnos>
  )
}

export default App;
