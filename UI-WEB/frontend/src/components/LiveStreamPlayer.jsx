// The api which takes returns summary and a quiz is implemented in the pythonBack folder. However, due to
// lack of a valid source of a audio stream, it hasn't been applied. This can be fixed if the company
// provides with thier audio stream.


import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import Streams from "../components/Stream";

const LiveStreamPlayer = () => {
  const [quiz, setQuiz] = useState({});
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [currentSummary, setCurrentSummary] = useState("");
  const [timer, setTimer] = useState(600); // Initialize timer to 600 seconds

  const questionsList = [
    {
      question: "Who was the MVP in the last match?",
      options: ["Answer 1", "Answer 2"]
    },
    {
      question: "What stretegy did team A use?",
      options: ["A", "B"]
    },
    {
      question: "What kind of skin does this player has?",
      options: ["Black", "StocK"]
    }
  ];
  const summaryTexts = [
    "Team A, consisting of seasoned veterans...",
    "As the round began, Team A swiftly secured...",
    "Meanwhile, Team B, despite their initial confusion..."
    // Add more summary texts as needed
  ];

  const generateNewQuiz = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * questionsList.length);
    } while (usedQuestions.includes(randomIndex));
    
    const selectedQuestion = questionsList[randomIndex];
    setQuiz(selectedQuestion);
    setUsedQuestions([...usedQuestions, randomIndex]); // Mark this question as used
  };

  const generateNewSummary = () => {
    const randomIndex = Math.floor(Math.random() * summaryTexts.length);
    setCurrentSummary(summaryTexts[randomIndex]);
  };

  useEffect(() => {
    generateNewQuiz();
    generateNewSummary();

    const quizIntervalId = setInterval(generateNewQuiz, 180000);
    const summaryIntervalId = setInterval(generateNewSummary, 30000);

    const timerId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(timerId);
      }
    }, 1000);

    return () => {
      clearInterval(quizIntervalId);
      clearInterval(summaryIntervalId);
      clearInterval(timerId);
    };
  }, []);


  return (
    <>
      <div className="video w-full h-[450px] bg-[#1B1431] flex justify-around items-center">
      <div class="rounded-[12px] overflow-hidden h-[360px] w-[640px]">
      <iframe
        title="Twitch Stream"
        src="https://player.twitch.tv/?channel=compass_cs2&parent=localhost"
        width="640" height="360" frameborder="0" scrolling="no" allowfullscreen
        class="w-full h-full"
      ></iframe>
    </div>

        <div className={`quiz w-[30%] h-[360px] border rounded-[20px] flex-col items-center  ${timer <= 60? 'animate-borderChange' : ''}`}>
          <div className="title text-center text-white text-[19px] font-bold pt-3">Quiz</div>
          <div className="title text-center text-white text-[20px] font px-2 pt-3">{quiz.question}</div>
          <div className="options gap-4 pt-6">
            {quiz.options && quiz.options.map((option, index) => (
              <div key={index} className="bg-gray-200 rounded-[15px] py-6 mx-5 my-4 text-center hover:bg-yellow-500">{option}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="summ bg-[#1B1431] w-full min-h-[200px]">
        <div className="title flex justify-center text-white font text-[35px]">
          10 minutes recap
        </div>
        <div className="title w-full text-center px-9 py-8 flex justify-center text-white font-regular text-[20px]">
          {currentSummary}
        </div>
      </div>
      <Cards />
      <Streams />
    </>
  );
};

export default LiveStreamPlayer;
