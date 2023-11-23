import { useEffect, useState } from "react";
import GlobalStyles from "./Styles/GlobalStyles";
import { MyAppStyled } from "./AppStyles";
import { initialPokemon } from "./data/initialPokemon";

import Search from "./components/search/Search";
import Pokemon from "./components/PokemonCard/card/Card";
import axios from "axios";
import Loader from "./components/loader/Loader";
import { useAxios } from "./hooks/useAxios";
import { useSelector } from "react-redux";

function App() {
  const {data, error, isLoading,} = useSelector(state => state.pokemon);

  return (
    <>
      <MyAppStyled>
        <Search/>
        {isLoading && <Loader />}
        {error && <h2 style={{color : '#F24C24'}}>{error}</h2>}
        {data && <Pokemon {...data} />}
      </MyAppStyled>
      <GlobalStyles />
    </>
  );
}

export default App;
