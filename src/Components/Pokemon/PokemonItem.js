import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemonById, pokemonActions } from "../../store/PokemonStore";

function PokemonItem({
  name,
  url = false,
  toggleModalHandler,
  pokemonDetail = false,
}) {
  const dispatch = useDispatch();
  let pokemonId = "";
  if (!pokemonDetail) {
    let pattern = /\/\d+/g;
    pokemonId = pattern.exec(url)[0];
    pokemonId = pokemonId.replace("/", "");
  } else {
    pokemonId = pokemonDetail.id;
  }

  const srcImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  const clickHandler = () => {
    if (!pokemonDetail) {
      dispatch(getPokemonById(pokemonId));
    } else {
      dispatch(pokemonActions.updatePokemon(pokemonDetail));
    }
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
