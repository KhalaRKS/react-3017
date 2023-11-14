import { useContext } from 'react';
import './App.css';
import { AlumnosContext } from './context/alumnos';
import { EventoOnChange } from './eventos/evento_onchange';
import { Counter } from './useState/counter';

function App() {
  const {agregarAlumno, eliminarAlumno} = useContext(AlumnosContext)
  return (
    <div>
      <Counter/>
      Hola nucba!
      {/* <EventoOnChange/> */}
      {/* <EventoOnSubmit/> */}
      {/* <EventoOnClick/> */}
      {/* <EjemploUseEffect/> */}
      {/* <EjemploChildren >
        <div style={{width: '300px', height: '150px', backgroundColor:'blue'}}></div>
        <div  style={{width: '300px', height: '150px', backgroundColor:'red'}}></div>
        <div  style={{width: '300px', height: '150px', backgroundColor:'yellow'}}></div>
        
      </EjemploChildren> */}
      <EventoOnChange/>
    </div>
  )
}

export default App;
