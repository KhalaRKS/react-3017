import { createSlice } from '@reduxjs/toolkit'
import { initialPokemon } from '../data/initialPokemon'

const initialState = {
    data: initialPokemon,
    isLoading: false,
    error: false
}


export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        isFetching: (state)=> {
            return {
                ...state,
                isLoading: true,
                isError: false,
                data: '',
            }
        },
        success: (state, action) => {
            return {
                ...state,
                data: action.payload,
                error: false,
                isLoading: false
            }
        },
        isError: (state) => {
            return {
                ...state,
                error: 'Pokemon no encontra, busca bien....',
                data: '',
                isLoading: false,
            }
        }
    }
})


export const {isFetching, success, isError} = pokemonSlice.actions

export default pokemonSlice.reducer