import React from 'react';

import { BorderDecoration, CardCategoria } from './CategoriasStyles';
import {useDispatch, useSelector} from 'react-redux'
import {setCategory } from '../../redux/categories/categoriesSlice';

export const Categoria = ({img, title, category}) => {
  const selectedCategory = useSelector( state => state.categories.selectedCategory)
  const dispatch = useDispatch();

  return (
    <CardCategoria
      selected={category === selectedCategory}
      onClick={() => dispatch(setCategory(category))}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={img}
        alt={category}
      />
      <h2>{title}</h2>
      <BorderDecoration></BorderDecoration>
    </CardCategoria>
  );
};

export default Categoria;
