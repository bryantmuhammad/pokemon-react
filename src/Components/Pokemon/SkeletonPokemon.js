import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonPokemon = () => {
  return (
    <div className="flex flex-wrap px-10 sm:px-14 md:px-15 lg:px-52 py-4 justify-center flex-col">
      <div className="shadow-md hover:shadow-2xl cursor-pointer border rounded-lg w-full md:w-1/4 h-40 pb-6 mr-2 mt-5 px-6">
        <SkeletonTheme baseColor="#313131" highlightColor="#525252  ">
          <div className="w-1/2 mx-auto text-center">
            <Skeleton circle width={50} height={50} duration={5} />
          </div>
          <div>
            <Skeleton />
          </div>
          <div>
            <Skeleton />
          </div>
          <div>
            <Skeleton />
          </div>
        </SkeletonTheme>
      </div>
    </div>
  );
};

export default SkeletonPokemon;
