import React, { useContext } from 'react';
import { AlumnosContext } from './context/alumnos';

export const Listado = () => {
  const value = useContext(AlumnosContext);
  return (
    <div>
      {value.alumnos.map((alumno) => (
        <p>{alumno}</p>
      ))}
      <button onClick={() => value.agregarAlumno("Messi")} >
        Agregar Alumno
      </button>
    </div>
  );
};
