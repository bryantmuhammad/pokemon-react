import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: null,
    isLoading: false,
  },
  reducers: {
    updatePokemon(state, action) {
      state.pokemon = action.payload;
    },
    updateIsLoading(state, action) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const fetchPokemon = (pokemonId) => {
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
export const pokemonActions = pokemonSlice.actions;

export default pokemonSlice.reducer;
