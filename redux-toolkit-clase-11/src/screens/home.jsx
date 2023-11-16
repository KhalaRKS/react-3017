import React, { useEffect, useState } from 'react'
import { Button } from '../components/button'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../store/slices/counterSlice';
import { darkTheme, lightTheme } from '../store/slices/themeSlice';
import { addUser } from '../store/slices/userSlice';

export const Home = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme.value)
    const user = useSelector(state => state.user)
    const [name, setName] = useState('')
    const [dni, setDni] = useState('')
    
  return (
    <div>
        <h1 style={{color:`${theme !== 'dark' ? 'black' : 'white'}`}}>Hola nuevo usuario</h1>
        <p style={{color:`${theme !== 'dark' ? 'black' : 'white'}`}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sequi error a voluptate sit reprehenderit accusantium culpa, provident voluptatem commodi fugit excepturi inventore? Numquam suscipit repellendus, laudantium error cumque ipsam.</p>
        <Button text='+' onClick={() => dispatch(increment())} />
        <Button text='reset' onClick={() => dispatch(reset())} />
        <Button text='-' onClick={() => dispatch(decrement())} />
        <Button text='Cambiar tema' onClick={() => theme === 'dark' ?  dispatch (lightTheme()): dispatch (darkTheme())} />

        <div>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <input type="text" onChange={(e) => setDni(e.target.value)}/>
            <Button text='Agregar usuario' onClick={() => dispatch(addUser({name,dni}))} />
            <p style={{background: 'red', fontSize: '24px'}}>{user.name + ' DNI: ' + user.dni}</p>
        </div>
  </div>
  )
}
