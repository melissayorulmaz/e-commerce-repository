import React from 'react';

const TeamPage = () => {
  const imageUrl = "https://www.shutterstock.com/image-photo/beautiful-sexy-brunette-woman-tanned-600nw-1686851977.jpg";
  return (
    <div className="bg-white text-gray-800">
      <header className="container mx-auto px-4 py-5 flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-bold">Bandage</h1>
          <nav>
            <ul className="flex items-center space-x-4">
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#" className="hover:text-blue-500">Product</a></li>
              <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </nav>
          <div>
            <button className="text-blue-500 hover:text-blue-600">Login</button>
            <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Become a member</button>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">WHAT WE DO</h3>
          <h2 className="text-4xl md:text-9xl font-bold mb-2">Innovation tailored for you</h2>
          <div className="flex justify-center">
            <a href="#" className="text-blue-500 hover:underline">Home</a>
            <span className="mx-2">/</span>
            <a href="#" className="text-blue-500 hover:underline">Team</a>
          </div>
        </div>
      </header>
      <div className="container mx-auto flex">
        <div className="w-1/2">
          <img src={imageUrl} alt="Large Image" className="w-full h-auto" />
        </div>
        <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-2">
          <img src={imageUrl} alt="Image 1" className="w-full h-full" />
          <img src={imageUrl} alt="Image 2" className="w-full h-full" />
          <img src={imageUrl} alt="Image 3" className="w-full h-full" />
          <img src={imageUrl} alt="Image 4" className="w-full h-full" />
        </div>
      </div>
    </div>
    
  );
}

export default TeamPage;
