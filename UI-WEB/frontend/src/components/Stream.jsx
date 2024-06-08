import React from "react";
import showImage1 from "../Images/show1.jpg";
import showImage2 from "../Images/show2.jpg";
import showImage3 from "../Images/show3.jpg";

const Stream = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-10 px-5">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Discover Other Streams
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <img
              src={showImage1}
              alt="Stream 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Stram 1</h3>
            <p className="text-gray-300">Description</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <img
              src={showImage2}
              alt="Stream 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Stream 2</h3>
            <p className="text-gray-300">Description</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <img
              src={showImage3}
              alt="Stream 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Stream 3</h3>
            <p className="text-gray-300">Description</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stream;
