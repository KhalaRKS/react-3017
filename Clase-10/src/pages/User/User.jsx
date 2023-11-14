import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useLocation } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { Button } from '../Login/Login';

const User = () => {
  const location = useLocation()
  const name = location.state.username
  const pw = location.state.password
  const { handleLogout } = useContext(AuthContext);

  return (
    <div>
      <h1>Bienvenido {name}</h1>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </div>
  );
};

export default User;
