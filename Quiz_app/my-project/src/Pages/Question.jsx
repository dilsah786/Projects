import React from "react";

const Question = ({ question, onAnswerClick }) => {
  console.log(question);
  console.log(question.answerOptions);
  return (

  <div>
    <h1 className="font-bold text-3xl text-center pt-4 mb-2">Let's start the Quiz</h1>
    <div className="border-2 border-black rounded-md text-center mt-10">
      <h1 className="text-3xl p-4 font-bold"> {question.question} </h1>
      <ul className="grid grid-cols-2 gap-4 p-4">
        {question.answerOptions?.map((opt, ind) => {
          return (
            <li
              key={ind}
              onClick={() => onAnswerClick(opt.isCorrect)}
              className="bg-gray-300 rounded-md p-4 cursor-pointer font-medium hover:text-2xl hover:transition-all "
            >
              {" "}
              {opt.text}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  </div>
  );
};

export default Question;
