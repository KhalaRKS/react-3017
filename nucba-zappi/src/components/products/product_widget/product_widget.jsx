import React from 'react'
import { products } from '../../../data/products'
import { ProductCard } from '../product_card/product_card'
import { ProductosContainer, ProductosWrapper } from './styles'

export const ProductWidget = () => {
  return (
    <ProductosWrapper>
        <h2>Nuestro productos</h2>
        <ProductosContainer>
        {
            products.map((product) => <ProductCard key={product.id} {...product}/>)
        }
        </ProductosContainer>
        <div>
            <button>Ver más</button>
            <button>Ver menos</button>
        </div>
    </ProductosWrapper>
  )
}
