import React, { useRef } from "react";

const PokemonForm = ({ changeHandler }) => {
  const pokemonRef = useRef();

  const changePokemonHandler = (event) => {
    const pokemonName = pokemonRef.current.value;
    changeHandler(pokemonName);
  };

  return (
    <div className="w-1/2 mx-auto text-center">
      <input
        className="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        ref={pokemonRef}
        placeholder="Find Pokemon"
      />

      <button
        onClick={changePokemonHandler}
        className="bg-gray-300 font-bold py-2 mt-2 px-4 ml-2 rounded text-gray-700"
      >
        Search
      </button>
    </div>
  );
};

export default PokemonForm;
