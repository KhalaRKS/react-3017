import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginContainerStyled,
  LoginEmailStyled,
} from './LoginStyles';
import { loginInitialValues } from '../../formik/loginInitialValues';
import { loginValidationSchema } from '../../formik/loginValidationSchema';
import { loginUser } from '../../axios/axios-user';
import {useDispatch, useSelector} from 'react-redux'
import { setCurrentUser } from '../../redux/user/userSlice';
import { useRedirect } from '../../hooks/useRedirect';

const Login = () => {
  const dispatch = useDispatch()
  useRedirect('/')
  const handleSubmit = async (values) => {
    const user = await loginUser(values.email, values.password);
    if(user){
      console.log(user);
      dispatch((setCurrentUser({
        ...user.usuario,
        token: user.token
      })))
    }
  }
  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Formik
      initialValues={loginInitialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
      >
        <Form>
          <LoginInput name={'email'} type='text' placeholder='Email' />
          <LoginInput name={'password'} type='password' placeholder='Password' />
          <Link to='/forgot-password'>
          </Link>
          <Link to='/register'>
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>
          <Submit>
            Ingresar
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
