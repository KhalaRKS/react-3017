import React from 'react';

import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';

import { CheckoutDatosStyled, Formik, Form } from './CheckoutFormStyles';
import { checkoutInitialValues } from '../../../formik/initialValue';
import { checkoutValidationSchema } from '../../../formik/validationSchema';
import { createOrder } from '../../../axios/axios-orders';
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { clearCart } from '../../../redux/cart/cartSlice';

import Loader from '../../UI/Loader/Loader'
const CheckoutForm = ({cartItems, price, shippingCost}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {currentUser} = useSelector(state => state.user)
const handleSubmit = async (values) => {
  const orderData = {
    items: cartItems,
    price: price,
    shippingCost: shippingCost,
    total: price + shippingCost,
    shippingDetails: {...values}
  }
  console.log(currentUser);
  try {
    await createOrder(orderData, dispatch, currentUser);
    navigate('/felicitaciones')
    dispatch(clearCart());
  } catch (error) {
    alert('Error al crear la orden.')
  }
}
  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
      initialValues={checkoutInitialValues}
      validationSchema={checkoutValidationSchema}
      onSubmit={handleSubmit}
      >
        {({isSubmitting}) =>
        <Form>
          <Input
          name='name'
            htmlFor='nombre'
            type='text'
            id='nombre'
            placeholder='Tu nombre'
          >
            Nombre
          </Input>
          <Input
          name={'cellphone'}
            htmlFor='celular'
            type='text'
            id='celular'
            placeholder='Tu celular'
          >
            Celular
          </Input>
          <Input
          name={'location'}
            htmlFor='localidad'
            type='text'
            id='localidad'
            placeholder='Tu localidad'
          >
            Localidad
          </Input>
          <Input
          name={'address'}
            htmlFor='direccion'
            type='text'
            id='dirección'
            placeholder='Tu dirección'
          >
            Dirección
          </Input>
          <div>
          {isSubmitting ? <Loader/> :
            <Submit disabled={!cartItems.length}>
            'Iniciar Pedido'
            </Submit>
           }
          </div>
        </Form>
        }
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
