import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

// Authentication -> Logeada -> Ingreso con su usuario
const ProtectedRoute = ({ children, redirectTo }) => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;



// Nosotros como programadores, decidimos quien puede ver el contenido de esa ruta