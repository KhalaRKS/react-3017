import React, { createContext, useState } from 'react';

const initState = {
  notas: [],
  alumnos: [],
  agregarAlumno: () => {},
  eliminarAlumno: () => {},
};

export const AlumnosContext = createContext(initState);

const { Provider } = AlumnosContext;

export const ContextoAlumnos = ({ children }) => {
  const [alumnos, setAlumnos] = useState(['Pepe', 'agustin', 'Ramiro']);
  const [notas, setNotas] = useState([]);

  const agregarAlumno = (alumno) =>
    setAlumnos((alumnos) => [...alumnos, alumno]);
  const eliminarAlumno = (alumnoBuscado) =>
    setAlumnos(alumnos.filter((alumno) => alumno != alumnoBuscado));

  return (
    <Provider value={{ alumnos, notas, agregarAlumno, eliminarAlumno }}>
      {children}{' '}

    </Provider>
  );
};
