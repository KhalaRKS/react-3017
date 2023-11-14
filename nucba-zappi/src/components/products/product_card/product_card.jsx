import React from 'react'
import { Button } from '../../button/button'
import { ProductoCard } from './styles'

export const ProductCard = ({img, title, desc, price}) => {
  return (
    <ProductoCard>
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{desc}</p>
        <div>
            <p>${price}</p>
            <Button>Agregar</Button>
        </div>
    </ProductoCard>
  )
}
