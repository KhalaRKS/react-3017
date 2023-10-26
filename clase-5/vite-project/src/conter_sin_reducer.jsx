import React, { useState } from 'react';

export const Counter2 = () => {
    const [counter, setCounter] = useState(0);


  return (
    <div>
        <button onClick={() => setCounter((counter) => counter + 1)}>sumar</button>
        <button onClick={() => setCounter((counter) => counter - 1)}>restar</button>
        <button onClick={() => setCounter(0)}>reset</button>
        <p>{counter}</p>
    </div>
  )
}
