import React from "react";

const Cards = () => {
  return (
    <>
      <div className="w-full bg-[#1B1431] py-10 px-5">
        <h3 className="text-white text-5xl mb-2 text-center">Prizes Won</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-600 bg-opacity-50 p-8 rounded-lg h-[300px]">
            <h3 className="text-white text-2xl">Card 1</h3>
            <p className="text-white">This is the first card.</p>
          </div>
          <div className="bg-gray-600 bg-opacity-50 p-8 rounded-lg h-[300px]">
            <h3 className="text-white text-2xl">Card 2</h3>
            <p className="text-white">This is the second card.</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-600 bg-opacity-50 p-6 rounded-lg h-[250px]">
            <h3 className="text-white text-xl">Card 3</h3>
            <p className="text-white">This is the third card.</p>
          </div>
          <div className="bg-gray-600 bg-opacity-50 p-6 rounded-lg h-[250px]">
            <h3 className="text-white text-xl">Card 4</h3>
            <p className="text-white">This is the fourth card.</p>
          </div>
          <div className="bg-gray-600 bg-opacity-50 p-6 rounded-lg h-[250px]">
            <h3 className="text-white text-xl">Card 5</h3>
            <p className="text-white">This is the fifth card.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
