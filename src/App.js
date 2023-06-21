import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import PokemonList from "./Components/Pokemon/PokemonList";
import PokemonModal from "./Components/UI/PokemonModal";
import Pagination from "./Components/UI/Pagination";
import SkeletonPokemon from "./Components/Pokemon/SkeletonPokemon";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [modalIsShow, setModalIsShow] = useState(false);
  const [offset, setOffset] = useState(9);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading((prevState) => !prevState);

    const fetchPokemon = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=9}&offset=${offset}`
      );

      const data = await response.json();
      setPokemonList(data.results);
      setIsLoading((prevState) => !prevState);
    };

    fetchPokemon();
  }, [setPokemonList, offset]);

  const toggleModalHandler = () => {
    setModalIsShow((prevToggle) => !prevToggle);
  };

  const changePageHandler = (type) => {
    if (type === "increment") {
      setOffset((prevState) => prevState + 9);
    } else {
      setOffset((prevState) => prevState - 9);
    }
  };

  return (
    <>
      <PokemonModal showModal={modalIsShow} toggleModal={toggleModalHandler} />
      <div className="w-full">
        <h3 className="font-bold text-5xl text uppercase text-center my-4">
          Pokedex
        </h3>
        {isLoading && (
          <>
            <SkeletonPokemon />
            <SkeletonPokemon />
            <SkeletonPokemon />
            <SkeletonPokemon />
            <SkeletonPokemon />
            <SkeletonPokemon />
            <SkeletonPokemon />
            <SkeletonPokemon />
            <SkeletonPokemon />
          </>
        )}
        {!isLoading && (
          <PokemonList
            pokemonList={pokemonList}
            toggleModal={toggleModalHandler}
          />
        )}
        <Pagination offset={offset} changePage={changePageHandler} />
      </div>
    </>
  );
}

export default App;
