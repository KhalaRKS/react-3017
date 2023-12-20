import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
export const useRedirect = (redirectTo) => {
    const {currentUser} = useSelector(state => state.user)
    const navigate = useNavigate()
    useEffect(() => {
        if(currentUser != null){
            console.log(currentUser);
            navigate(redirectTo)
        }
    }, [currentUser])
    
  return {

  }
}
