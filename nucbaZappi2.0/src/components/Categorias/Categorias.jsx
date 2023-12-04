import React from 'react';

import Categoria from './Categoria';
import { CategoriasContainer } from './CategoriasStyles';
// import { Categories } from '../../data/Categories';
import {useSelector} from 'react-redux'
const Categorias = () => {
  const categories = useSelector(state => state.categories.categories)

  return (
    <CategoriasContainer>
      {categories.map((categoria) =><Categoria
      key={categoria.id}
      {...categoria}
      />)
     }
     
    </CategoriasContainer>
  );
};

export default Categorias;
