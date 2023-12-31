import { useContext, useRef, useState } from 'react';
import { AlumnosContext } from '../context/alumnos';

export const Counter = () => {
  const {alumnos} = useContext(AlumnosContext)
  const [counter, setCounter] = useState(0);
  const contenedor = useRef(null)


  const handleClick = () =>{
setCounter(prev => prev+ 1)
  }

  return (
    <>  
      {counter < 10 && (
        <div ref={contenedor}>
          <p>{counter}</p>
          <button onClick={handleClick}>+</button>
          <button onClick={() => setCounter(0)}>reset</button>
          <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
          <p>{alumnos.join(' - ')}</p>
        </div>
      )}
      </>
  );
};
