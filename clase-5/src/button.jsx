import React from 'react'
import { ButtonStyled } from './Styled'

export const Button = ({text, onClick}) => {
  return (
    <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
  )
}