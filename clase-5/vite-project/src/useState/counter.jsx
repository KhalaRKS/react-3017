import { useRef, useState } from 'react';

export const Counter = () => {
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
        </div>
      )}
      </>
  );
};
