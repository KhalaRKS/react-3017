import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';

import { ProductosContainer } from './CardsProductosStyles';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';
// import { Products } from '../../data/Products';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { INITIAL_LIMIT } from '../../utils';
import { TotalProducts } from '../../data';
const CardsProductos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);
  let products = useSelector(state => state.products.products);

  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );

  const totalProducts = useSelector(state => state.products.totalProducts);

  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] };
  }

  useEffect(() => {
    setLimit(INITIAL_LIMIT);
  }, [selectedCategory]);

  return (
    <>
      <ProductosContainer>
        {Object.entries(products).map(([, comidas]) =>
          comidas.map(comida => {
            if (limit >= comida.id || selectedCategory) {
              return <CardProducto {...comida} key={comida.id} />;
            }
            return <></>;
          })
        )}
      </ProductosContainer>
      {!selectedCategory && (
        <ButtonContainerStyled>
          <Button
            onClick={e => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
            secondary='true'
            disabled={INITIAL_LIMIT === limit}
          >
            <span>Ver menos</span>
          </Button>
          <Button onClick={e =>setLimit(prevLimit => prevLimit + INITIAL_LIMIT)} disabled={TotalProducts <= limit}>
            Ver más
          </Button>
        </ButtonContainerStyled>
      )}
    </>
  );
};

export default CardsProductos;
