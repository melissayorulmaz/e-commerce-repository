import React from 'react';

const FilterSide = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white border border-gray-300">
      <div className="text-center">
        <span className="text-sm font-semibold text-gray-700">Showing all 12 results</span>
      </div>
      <div className="flex items-center ml-1">
        <span className="text-sm font-semibold text-gray-700 mr-1">Views:</span>
        {/* Icons container */}
        <div className="flex">
          <button className="mr-1">
            <img src="https://cdn-icons-png.freepik.com/512/58/58477.png" alt="Grid View" className="w-5 h-5" />
          </button> {/* Grid view icon */}
          <button>
            <img src="https://static.thenounproject.com/png/1054393-200.png" alt="List View" className="w-5 h-5" />
          </button> {/* List view icon */}
        </div>
      </div>
      <div className="flex items-center ml-1">
        <div className="relative">
          <select className="outline-none border border-gray-300 rounded px-1 py-1 text-sm cursor-pointer">
            <option>Popularity</option>
            <option>Price</option>
            <option>Newest</option>
          </select>
        </div>
        <button className="ml-1 bg-blue-500 text-white px-3 py-1 rounded">Filter</button>
      </div>
    </div>
  );
};

export default FilterSide;
