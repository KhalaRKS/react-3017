import Button from '@mui/material/Button';
import { useState } from 'react';
import estilos from './contador.module.css';
// En react todo lo que comience con la palabra use hace referencia a un hook
// EJ: useState , useEffect, useCallback, etc
// CustomHooks deben empezar con use también

export const Contador = ({myStyle}) => {
  // useState es el hook para definir estados.
  // estado: Variable que se puede alterar su valor y influir en el renderizado del componente.
  // función actualizadora: Función designada para actualizar el estado del componente
  console.log(estilos);
  //     count = {0}
  const [count, setCount] = useState(0);

  // const [plus, setplus] = useState(0)
  // const [minus, setminus] = useState(0)
  // const [nombre, setnombre] = useState(0)

  return count < 15 && 
    <Button variant="outlined" color="warning" className={estilos.fondo_negro} onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </Button>
};
