import React from 'react';

const CompassSection = () => {
  return (
    <section className="bg-pink-600 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center">
        <div className="md:w-1/3 py-20">
          <h1 className="text-4xl font-bold mb-4 md:mb-0 text-purple-900">THIS IS<br></br>COMPASS</h1>
        </div>
        <div className="md:w-2/3">
          <p className="text-lg mb-4 md:mb-0">
            Where Innovation Meets Immersion: Elevating Fan Experiences with Cutting-Edge Technology<br></br><br></br>
          </p>
          <p className="text-lg">
            Embrace Esports Heritage: Global Counter-Strike circuit rooted in the Middle East with Community and Gaming Culture at Core
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompassSection;
