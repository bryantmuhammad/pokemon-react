import React from "react";

function Pagination({ offset, changePage }) {
  let page = 1;

  if (offset !== 0) {
    page = offset / 9 + 1;
  }

  const incrementHandler = () => {
    changePage("increment");
  };
  const decrementHandler = () => {
    changePage("decrement");
  };

  return (
    <div className="bg-white p-4 flex items-center flex-wrap">
      <nav aria-label="Page navigation" className="mx-auto">
        <ul className="inline-flex space-x-2">
          {offset === 0 ? (
            ""
          ) : (
            <li>
              <button
                onClick={decrementHandler}
                className="flex items-center justify-center w-10 h-10 text-black transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-gray-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"></path>
                </svg>
              </button>
            </li>
          )}

          <li>
            <button className="w-10 h-10 text-black transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-gray-200">
              {page}
            </button>
          </li>

          <li>
            <button
              onClick={incrementHandler}
              className="flex items-center justify-center w-10 h-10 text-black transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
