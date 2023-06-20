import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import PokemonList from "./Components/Pokemon/PokemonList";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0"
      );

      const data = await response.json();
      setPokemonList(data.results);
    };

    fetchPokemon();
  }, [setPokemonList]);

  console.log(pokemonList);

  return (
    <div className="w-full">
      <h3 className="font-bold text-5xl text uppercase text-center my-4">
        Pokedex
      </h3>
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
}

export default App;
