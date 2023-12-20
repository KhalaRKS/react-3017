import React from 'react'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
export const ProtectedRoute = ({children, redirectTo}) => {
    const {currentUser} = useSelector(state => state.user)
  return  currentUser ? (
    <>
    {children}
    </>
  ) : (
    <Navigate to={redirectTo} state={{redirectedFromCheckout: true}}/>
  )
}
