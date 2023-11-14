import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import Product from '../pages/Product/Product';
import Products from '../pages/Products/Products';
import User from '../pages/User/User';
// Context
import { useContext } from 'react';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import AuthContext, { AuthProvider } from '../context/AuthContext';

const Routes = () => {
  // Context
  const isAuth = useContext(AuthContext);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <ReactDomRoutes>
            <Route path='/' element={<Home />} />
            {/* Rutas anidadas */}
            <Route path='products'> 
              <Route index element={<Products />} />
              <Route path=':product' element={<Product />} />
            </Route>

            {/* <Route path='login' element={<Login />} /> */}
            {!isAuth && <Route path='login' element={<Login />} />}
            <Route
              path='usuario/:username'
              element={
                <ProtectedRoute redirectTo={'/login'}>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route
              path='/usuario'
              element={
                <ProtectedRoute redirectTo={'/login'}>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<p>Error</p>} />
          </ReactDomRoutes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;
