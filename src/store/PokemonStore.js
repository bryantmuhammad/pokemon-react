import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./UiStore";
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: null,
    isLoading: false,
    listPokemon: [],
  },
  reducers: {
    updatePokemon(state, action) {
      state.pokemon = action.payload;
    },
    updateIsLoading(state, action) {
      state.isLoading = !state.isLoading;
    },
    updateListPokemon: (state, action) => {
      state.listPokemon = action.payload;
    },
  },
});

export const getPokemonById = (pokemonId) => {
  return async (dispatch) => {
    try {
      dispatch(pokemonSlice.actions.updateIsLoading());
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
      );

      const data = await response.json();
      dispatch(pokemonSlice.actions.updatePokemon(data));
      dispatch(pokemonSlice.actions.updateIsLoading());
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchPokemon = (pokemonName = "", offset = 0) => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.setLoading());

      let endPoint = `https://pokeapi.co/api/v2/pokemon?limit=9}&offset=${offset}`;
      if (pokemonName) {
        endPoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
      }

      const response = await fetch(endPoint);

      if (!response.ok) {
        throw Error("Failed fetch pokemon");
      }
      const data = await response.json();

      dispatch(pokemonSlice.actions.updateListPokemon(data.results || data));
      dispatch(uiActions.setLoading());
    } catch (err) {
      dispatch(pokemonSlice.actions.updateListPokemon(false));
      dispatch(uiActions.setLoading());
    }
  };
};

export const pokemonActions = pokemonSlice.actions;
export default pokemonSlice.reducer;
