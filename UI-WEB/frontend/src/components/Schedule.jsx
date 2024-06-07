import React, { useState } from 'react';

// Map team names to their corresponding logo paths
const teamLogos = {
  "FaZe": "../assets/faze.png",
  "SAW": "../assets/saw.png",
  "Natus Vincere": "../assets/natusvincere.png",
  "Astralis": "../assets/astralis.png",
  "Vitality": "../assets/vitality.png",
  "Virtus.pro": "../assets/virtuspro.png",
  "Spirit": "../assets/spirit.png",
  "G2": "../assets/g2.png",
};

const scheduleData = {
  "Wed 12 Jun": [
    { time: "15:00", match: "OPENING MATCH 1", group: "GROUP A", team1: "FaZe", team2: "SAW" },
    { time: "17:30", match: "OPENING MATCH 2", group: "GROUP A", team1: "Natus Vincere", team2: "Astralis" },
    { time: "20:00", match: "OPENING MATCH 1", group: "GROUP B", team1: "Vitality", team2: "Virtus.pro" },
    { time: "22:30", match: "OPENING MATCH 2", group: "GROUP B", team1: "Spirit", team2: "G2" },
  ],
  "Thu 13 Jun": [
    { time: "15:00", match: "ELIMINATION MATCH", group: "GROUP A", team1: "Natus Vincere", team2: "SAW" },
    { time: "17:30", match: "WINNERS MATCH", group: "GROUP A", team1: "FaZe", team2: "Astralis" },
    { time: "20:00", match: "ELIMINATION MATCH", group: "GROUP B", team1: "Spirit", team2: "Virtus pro" },
    { time: "22:30", match: "WINNERS MATCH", group: "GROUP B", team1: "G2", team2: "Vitality" },
  ],
  "Fri 14 Jun": [
    { time: "19:00", match: "QUARTER FINAL 1", group: "PLAYOFFS", team1: "Vitality", team2: "Astralis" },
    { time: "22:00", match: "QUARTER FINAL 2", group: "PLAYOFFS", team1: "Spirit", team2: "Natus Vincere" },
  ],
};

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Wed 12 Jun");

  return (
    <section className="bg-gray-900 text-gray-400 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4">SCHEDULE</h1>
        <div className="flex mb-4 overflow-x-auto">
          {Object.keys(scheduleData).map(day => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 mr-2 rounded ${
                selectedDay === day ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-400'
              } hover:bg-gray-600 hover:text-white focus:outline-none whitespace-nowrap`}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          {scheduleData[selectedDay].map((match, index) => (
            <div key={index} className="flex justify-between items-center py-4 border-b border-gray-700">
              <div className="text-xl w-24">{match.time}</div>
              <div className="text-left flex-grow">
                <div className="text-base font-semibold">{match.match}</div>
                <div className="text-sm text-gray-500">{match.group}</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <img src={teamLogos[match.team1]} alt={match.team1} className="h-8 mr-2" />
                  <span className="text-lg">{match.team1}</span>
                </div>
                <span className="text-lg font-semibold mx-2">VS</span>
                <div className="flex items-center">
                  <img src={teamLogos[match.team2]} alt={match.team2} className="h-8 mr-2" />
                  <span className="text-lg">{match.team2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
