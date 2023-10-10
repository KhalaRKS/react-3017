import { useState } from 'react';

// En react todo lo que comience con la palabra use hace referencia a un hook
// EJ: useState , useEffect, useCallback, etc
// CustomHooks deben empezar con use también

export const Contador = () => {
  // useState es el hook para definir estados.
  // estado: Variable que se puede alterar su valor y influir en el renderizado del componente.
  // función actualizadora: Función designada para actualizar el estado del componente

  //     count = {0}
  const [count, setCount] = useState(0);

  // const [plus, setplus] = useState(0)
  // const [minus, setminus] = useState(0)
  // const [nombre, setnombre] = useState(0)

  return count < 15 && 
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
};
