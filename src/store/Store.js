import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./PokemonStore";

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;
