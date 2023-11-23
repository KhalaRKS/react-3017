import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { useDispatch } from "react-redux";
import { SearchFormStyled, InputStyled, ButtonStyled } from "./SearchStyles";
import { getPokemons } from "../../utils/getPokemons";

const Search = ( {submit}) => {
  const [pokemon, setPokemon] = useState('')
  const dispatch = useDispatch();
  return (
    <SearchFormStyled
      onSubmit={(e) => {
        dispatch(getPokemons(e,pokemon))
        setPokemon('')
      }}
    >
      <InputStyled placeholder="Search" value={pokemon} onChange={(e) =>setPokemon(e.target.value)}/>

      <ButtonStyled type="submit" disabled={!pokemon}>
        <ImSearch size="20" color="#c1c0c9" />
      </ButtonStyled>
    </SearchFormStyled>
  );
};

export default Search;
