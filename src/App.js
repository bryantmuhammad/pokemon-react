import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import PokemonList from "./Components/Pokemon/PokemonList";
import PokemonModal from "./Components/UI/PokemonModal";
import Pagination from "./Components/UI/Pagination";
import SkeletonPokemon from "./Components/Pokemon/SkeletonPokemon";
import PokemonForm from "./Components/Pokemon/PokemonForm";
import { fetchPokemon } from "./store/PokemonStore";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [modalIsShow, setModalIsShow] = useState(false);
  const [offset, setOffset] = useState(0);
  const [pokemonName, setPokemonName] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemon.listPokemon);
  const isLoading = useSelector((state) => state.ui.isLoading);

  useEffect(() => {
    dispatch(fetchPokemon(pokemonName, offset));

    fetchPokemon();
  }, [offset, pokemonName]);

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

  const changePokemonNameHandler = (pokemonName) => {
    setPokemonName(pokemonName);
  };

  console.log(pokemonList);
  return (
    <>
      <PokemonModal showModal={modalIsShow} toggleModal={toggleModalHandler} />
      <div className="w-full">
        <h3 className="font-bold text-5xl text uppercase text-center my-4">
          Pokedex
        </h3>
        <PokemonForm changeHandler={changePokemonNameHandler} />
        {isLoading && (
          <div className="flex flex-wrap px-10 sm:px-14 md:px-15 lg:px-52 py-4 justify-between">
            <SkeletonPokemon />
            <SkeletonPokemon />
            <SkeletonPokemon />
            <SkeletonPokemon />
            <SkeletonPokemon />
            <SkeletonPokemon />
            <SkeletonPokemon />
            <SkeletonPokemon />
            <SkeletonPokemon />
          </div>
        )}
        {!isLoading && Array.isArray(pokemonList) && (
          <>
            <PokemonList
              pokemonList={pokemonList}
              toggleModal={toggleModalHandler}
            />
            <Pagination offset={offset} changePage={changePageHandler} />
          </>
        )}
        {!isLoading &&
          !Array.isArray(pokemonList) &&
          typeof pokemonList === "object" && (
            <PokemonList
              pokemonList={pokemonList}
              toggleModal={toggleModalHandler}
            />
          )}

        {!isLoading && !pokemonList && (
          <h1 className="font-bold text-3xl text-center mt-12">
            Pokemon Not Found!
          </h1>
        )}
      </div>
    </>
  );
}

export default App;
