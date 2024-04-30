import React from 'react';

export const clothsPicturesData = [
    {
      imageUrl: "https://st3.depositphotos.com/12982378/16213/i/1600/depositphotos_162137418-stock-photo-shopaholic.jpg",
      category: "CLOTHS",
      items: "5 items"
    }
  ];
  
  const ClothsItems = () => {
    return (
      <div className="flex flex-wrap justify-center items-center">
        {clothsPicturesData.map((data, index) => (
          <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-pink-200">
            <img className="w-full" src={data.imageUrl} alt={data.category} />
            <div className="px-6 py-4">
              <h6 className="font-bold text-lg mb-2">{data.category}</h6>
              <h6 className="text-gray-700 text-base">{data.items}</h6>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default ClothsItems;