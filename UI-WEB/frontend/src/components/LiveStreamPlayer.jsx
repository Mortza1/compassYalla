import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";

const LiveStreamPlayer = () => {
  const [quiz, setQuiz] = useState({});
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [currentSummary, setCurrentSummary] = useState("");
  const questionsList = [
    {
      question: "Who won the Nobel Peace Prize in 2017?",
      options: ["Nelson Mandela", "Malala Yousafzai"]
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn"]
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag"]
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

    return () => {
      clearInterval(quizIntervalId);
      clearInterval(summaryIntervalId);
    };
  }, []);

  return (
    <>
      <div className="video w-full h-[450px] bg-[#1B1431] flex justify-around items-center">
        <iframe
          title="Twitch Stream"
          src="https://player.twitch.tv/?channel=valorant&parent=localhost"
          width="640" height="360" frameborder="8" scrolling="no" allowfullscreen
        ></iframe>
        <div className="quiz w-[30%] h-[360px] border rounded-[20px] flex-col items-center">
          <div className="title text-center text-white text-[19px] font-bold pt-3">Quiz</div>
          <div className="title text-center text-white text-[20px] font-bold pt-3">{quiz.question}</div>
          <div className="options gap-4 pt-6">
            {quiz.options && quiz.options.map((option, index) => (
              <div key={index} className="bg-gray-200 rounded-[15px] py-6 mx-5 my-4 text-center hover:bg-yellow-500">{option}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="summ bg-[#1B1431] w-full h-[450px]">
        <div className="title flex justify-center text-white font-bold text-[35px]">
          10 minutes recap
        </div>
        <div className="title w-full text-center px-9 py-8 flex justify-center text-white font-regular text-[20px]">
          {currentSummary}
        </div>
      </div>
      <Cards />
    </>
  );
};

export default LiveStreamPlayer;
