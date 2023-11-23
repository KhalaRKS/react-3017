
import axios from 'axios'
import {isFetching, success, isError} from '../slices/pokemonSlice'
export const getPokemons = (e, pokemon) => async (dispatch) => {
    e.preventDefault();
    dispatch(isFetching())


    try {
      const selectedPokemon = pokemon.toLowerCase().trim()

      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
        );
     
        dispatch(success(data))
    } catch (error) {
        dispatch(isError())
    }
}