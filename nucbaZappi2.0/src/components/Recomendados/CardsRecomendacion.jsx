import React from 'react';

import CardRecomendacion from './CardRecomendacion';
import { useSelector } from 'react-redux'
import { CardsContainer } from './CardsRecomendacionStyled';
// import { recommended } from '../../data/Recommended';

const CardsRecomendacion = () => {
  const recommended = useSelector(state => state.recommended.recommended)

  
  return (
    <CardsContainer gridLength={recommended.length}>
      {
       recommended.map((recomendacion) => <CardRecomendacion key={'reco'+recomendacion.id} {...recomendacion} />)
      }
      
    </CardsContainer>
  );
};

export default CardsRecomendacion;
