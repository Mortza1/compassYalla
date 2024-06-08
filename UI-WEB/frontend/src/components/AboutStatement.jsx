import React from 'react'

const AboutStatement = () => {
    return (
        <section className="w-full bg-yellow-500 text-black p-8">
          <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center">
            <div className="md:w-1/3 py-20">
              <h1 className="text-4xl font-bold mb-4 md:mb-0 text-black text-center">ABOUT <br></br>YALLA<br></br>E-SPORTS</h1>
            </div>
            <div className="md:w-2/3 text-black">
              <p className="text-lg mb-4 md:mb-0">
                IN 2016, A GROUP OF AVID GAMERS UNITED TO TRANSFORM THEIR PASSION INTO A PROFESSIONAL VENTURE, GIVING BIRTH TO YALLA E-SPORTS<br></br><br></br>
              </p>
              <p className="text-lg">
                TODAY, A PROMINENT NAME IN THE MIDDLE EAST'S GAMING AND E-SPORTS SCENE WITH A CLEAR GOAL SINCE DAY ONE; PAVE THE WAY FOR GAMING TO THRIVE IN THE REGION, FOR OUR PARTNERS AND PLAYERS ALIKE.
              </p>
            </div>
          </div>
        </section>
      );
    };

export default AboutStatement