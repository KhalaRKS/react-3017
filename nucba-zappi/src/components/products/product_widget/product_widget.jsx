import React from 'react'
import { products } from '../../../data/products'
import { ProductCard } from '../product_card/product_card'

export const ProductWidget = () => {
  return (
    <div>
        <h2>Nuestro productos</h2>
        <div>
        {
            products.map((product) => <ProductCard key={product.id} {...product}/>)
        }
        </div>
        <div>
            <button>Ver más</button>
            <button>Ver menos</button>
        </div>
    </div>
  )
}
