import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { pokemonActions, fetchPokemon } from "../../store/PokemonStore";

function PokemonItem({ name, url, toggleModalHandler }) {
  let pattern = /\/\d+/g;
  let pokemonId = pattern.exec(url)[0];
  pokemonId = pokemonId.replace("/", "");
  const srcImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(fetchPokemon(pokemonId));
    toggleModalHandler();
  };

  return (
    <>
      <div
        className="shadow-md hover:shadow-2xl cursor-pointer border rounded-lg w-full md:w-1/4 h-40 pb-6 mr-2 mt-5"
        onClick={clickHandler}
      >
        <div className="bg-blob-image">
          <img alt="test" src={srcImage} className="block mx-auto" />
        </div>
        <p className="text-center font-normal">#{pokemonId}</p>
        <p className="text-center font-semibold text-lg uppercase">{name}</p>
      </div>
    </>
  );
}

export default PokemonItem;
