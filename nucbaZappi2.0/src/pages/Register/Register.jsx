import React from 'react';
import { Formik } from 'formik';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginContainerStyled,
  LoginEmailStyled,
} from './RegisterStyles';
import {useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { setCurrentUser } from '../../redux/user/userSlice';
import { createUser } from '../../axios/axios-user';
import { registerInitialValues } from '../../formik/registerInitialValues';
import { registerValidationSchema } from '../../formik/registerValidationSchema';
const Register = () => {

  const {state} = useLocation()
  const dispatch = useDispatch()
  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
      initialValues={registerInitialValues}
      validationSchema={registerValidationSchema}
      onSubmit={async (values, actions) => {
        console.log(values);
        const user = await createUser(values.name, values.email, values.password)
        actions.resetForm();
        if(user){
          dispatch(setCurrentUser({
            ...user.usuario,
            token: user.token
          }))
        }
      }}
      >
        <Form>
          <LoginInput name={'name'} type='text' placeholder='Nombre' />
          <LoginInput name={'email'} type='text' placeholder='Email' />
          <LoginInput name={'password'} type='password' placeholder='Password' />
         
          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit type='submit'>
            Registrarte
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
