import React, { useRef } from 'react';

export const CounterUseRef = () => {
  const contenedor = useRef(null);
  return (
    <div ref={contenedor}>
      <p>{0}</p>
      <button onClick={() => {}}>+</button>
      <button onClick={() => {}}>reset</button>
      <button onClick={() => {}}>-</button>
    </div>
  );
};
