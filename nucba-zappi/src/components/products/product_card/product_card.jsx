import React from 'react'

export const ProductCard = ({img, title, desc, price}) => {
  return (
    <div>
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{desc}</p>
        <div>
            <p>${price}</p>
            <button>Agregar</button>
        </div>
    </div>
  )
}
