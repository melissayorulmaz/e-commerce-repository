import React from "react";

const FilterSide = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white border border-gray-300 max-w-[1050px] mx-auto my-8">
      <div className="text-center mb-4 sm:mb-0">
        <span className="text-h6 font-semibold text-second-text-color">
          Showing all 12 results
        </span>
      </div>
      <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
        <span className="text-h6 font-semibold text-second-text-color">
          Views:
        </span>
        <div className="flex">
          <button className="mr-1">
            <img
              src="https://cdn-icons-png.freepik.com/512/58/58477.png"
              alt="Grid View"
              className="w-5 h-5"
            />
          </button>
          <button>
            <img
              src="https://static.thenounproject.com/png/1054393-200.png"
              alt="List View"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center">
        <div className="relative mb-4 sm:mb-0 sm:mr-2">
          <select className="outline-none border border-gray-300 rounded px-1 py-1 text-sm cursor-pointer">
            <option>Popularity</option>
            <option>Price</option>
            <option>Newest</option>
          </select>
        </div>
        <button className="btn-blue">Filter</button>
      </div>
    </div>
  );
};

export default FilterSide;
