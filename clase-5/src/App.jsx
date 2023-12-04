import { useContext, useRef } from 'react';
import './App.css';
import { AlumnosContext } from './context/alumnos';
import { EventoOnChange } from './eventos/evento_onchange';
import { Counter } from './useState/counter';
import { MenuContext } from './context/menu';

function App() {
  const {agregarAlumno, eliminarAlumno} = useContext(AlumnosContext)
  const {closeMenuOnScroll,menuState, handleToggleMenu} = useContext(MenuContext)
  window.addEventListener("scroll", closeMenuOnScroll);

  const onScroll = () => {
    closeMenuOnScroll()
  }
  console.log(menuState);
  return (
    <div onScroll={() => closeMenuOnScroll()} style={{height: '1000px'}}>
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
      <div>
        <button onClick={() => handleToggleMenu()}>{menuState === 0 ? 'Abrir menu' : 'Cerrar menu'}</button>
      </div>
      <EventoOnChange/>
    </div>
  )
}

export default App;
