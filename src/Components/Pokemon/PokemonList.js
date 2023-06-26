import React from "react";
import PokemonItem from "./PokemonItem";

function PokemonList({ pokemonList, toggleModal }) {
  return (
    <div className="flex flex-wrap px-10 sm:px-14 md:px-15 lg:px-52 py-4 justify-between">
      {Array.isArray(pokemonList) &&
        pokemonList.map((pokemon, index) => (
          <PokemonItem
            key={index}
            name={pokemon.name}
            url={pokemon.url}
            toggleModalHandler={toggleModal}
          />
        ))}

      {!Array.isArray(pokemonList) && (
        <PokemonItem
          name={pokemonList.name}
          pokemonDetail={pokemonList}
          toggleModalHandler={toggleModal}
        />
      )}
    </div>
  );
}

export default PokemonList;
