import React from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import "./PokemonModal.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#modalElement");

function PokemonModal({ showModal, toggleModal }) {
  const isLoading = useSelector((state) => state.pokemon.isLoading);
  const { pokemon } = useSelector((state) => state.pokemon);

  return (
    <div>
      <Modal
        isOpen={showModal}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="Modal w-3/4 md:w-1/3 border-2 border-slate-100 absolute px-5 py-5 bg-white shadow-lg"
      >
        {isLoading && (
          <>
            <div className="text-center mx-auto">
              <Skeleton circle={true} width={70} height={70} />
            </div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}

        {pokemon && !isLoading && (
          <>
            <img
              alt="Pokemon Image"
              src={pokemon.sprites.front_default}
              className="block mx-auto"
            />
            <div className="flex mt-2 gap-3 md:gap-2 ">
              <div className="font-semibold">Abilities :</div>
              <div>
                <ul>
                  {pokemon.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex mt-2 gap-3 md:gap-2 ">
              <div className="font-semibold">Height :</div>
              <div>
                <ul>{pokemon.height}</ul>
              </div>
            </div>
            <div className="flex mt-2 gap-3 md:gap-2 ">
              <div className="font-semibold">Weight :</div>
              <div>
                <ul>{pokemon.weight}</ul>
              </div>
            </div>
            <div className="flex mt-2 gap-4 md:gap-2 ">
              <div className="font-semibold w-36">Game Indices :</div>
              <div className="h-52 w-full overflow-y-scroll">
                <ul>
                  {pokemon.game_indices.map((game, index) => (
                    <li key={index}>{game.version.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}

export default PokemonModal;
