// src/components/Sponsors.jsx
import React from 'react';
// Adjusted imports to go back 3 folders
import sponsor1 from '../Images/sponsor1.png';
import sponsor2 from '../Images/sponsor2.png';
import sponsor3 from '../Images/sponsor3.png';
import sponsor4 from '../Images/sponsor4.png';
import sponsor5 from '../Images/sponsor5.png';


const Sponsors = () => {
  const sponsors = [
    sponsor1,
    sponsor2,
    sponsor3,
    sponsor4,
    sponsor5,
  ];
  
  return (
      <section id="sponsors" className="bg-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-black">Our Partners</h2>
          <div className="flex flex-row justify-center items-center">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="w-1/2 sm:w-1/4 lg:w-1/5 p-4">
                <img src={sponsor} alt={`Sponsor ${index + 1}`} className="mx-auto h-20" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Sponsors;
