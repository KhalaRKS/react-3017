import { Routes as ReactDomRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Felicitaciones from '../pages/Felicitaciones/Felicitaciones';
import Resumen from '../pages/Resumen/Resumen';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Checkout from '../pages/Checkout/Checkout';
import MisOrdenes from '../pages/MisOrdenes/MisOrdenes';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route
        path='/mis-ordenes'
        element={
          <ProtectedRoute redirectTo={'/login'}>
            <MisOrdenes />
          </ProtectedRoute>
        }
      />
      <Route path='/felicitaciones' element={<Felicitaciones />} />
      <Route
        path='/resumen/:orderId'
        element={
          <ProtectedRoute redirectTo={'/login'}>
            <Resumen />
          </ProtectedRoute>
        }
      />

      <Route
        path='/checkout'
        element={
          <ProtectedRoute redirectTo={'/register'}>
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route path='*' element={<PageNotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
