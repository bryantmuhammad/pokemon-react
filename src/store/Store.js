import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./PokemonStore";
import uiReducer from "./UiStore";

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    ui: uiReducer,
  },
});

export default store;
