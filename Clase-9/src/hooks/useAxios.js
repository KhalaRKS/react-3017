import React, { useState } from 'react'
import { initialPokemon } from '../data/initialPokemon';
import axios from 'axios';

export const useAxios = () => {
    const [data, setData] = useState(initialPokemon);
    const [error, setError] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
  
    const handleSubmit = async (e, pokemon) => {
      e.preventDefault();
  
      setData(null)
      setError(false)
      setIsFetching(true)
  
      try {
        const selectedPokemon = pokemon.toLowerCase().trim()
  
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
          );
        setData(data)
  
      } catch (error) {
        setError("Pokemon no encontrado, busca bien...")
      }
  
      setIsFetching(false)
    }


  return {data, error,isFetching,handleSubmit}
}
