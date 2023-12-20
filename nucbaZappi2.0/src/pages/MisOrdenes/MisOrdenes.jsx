import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';
import CardsMisOrdenes from '../../components/MisOrdenes/CardsMisOrdenes';

import {
  MisOrdenesBtnContainerStyled,
  MisOrdenesContainerStyled,
  MisOrdenesPatternStyled,
  MisOrdenesTitleStyled,
} from './MisOrdenesStyles';

import {useSelector, useDispatch} from 'react-redux';
import { getOrders } from '../../axios/axios-orders';
import { clearError, fetchOrdersFail } from '../../redux/orders/ordersSlice';


const MisOrdenes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.user);
  const {orders, error} = useSelector(state => state.orders);

  useEffect(() => {
    if(!orders){
      getOrders(dispatch, currentUser)
    }
    if(!currentUser?.token){
      dispatch(fetchOrdersFail());
    }else{
      error && dispatch(clearError());
    }

  }, [currentUser, dispatch, error, orders])
  

  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>Mis órdenes</MisOrdenesTitleStyled>
        <CardsMisOrdenes />
        <MisOrdenesBtnContainerStyled>
          <Button onClick={() => navigate('/')}>Volver a comprar</Button>
        </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>
      <MisOrdenesPatternStyled
        src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648434/coding/NucbaZappi/Assets/Pattern_lt5uru.png'
        alt=''
      />
    </>
  );
};

export default MisOrdenes;
