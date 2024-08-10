import React from "react";

const Answer = ({ userAnswers, questions, currentQuestion }) => {
  console.log(userAnswers);

  const correctAns = userAnswers.filter((ans) => ans);

  console.log(correctAns);

  return (
    <div className="text-center ">
      <h1 className="text-2xl font-semibold text-center mt-1 pb-10">
        Total Numbers of questions is : {questions.length}{" "}
      </h1>
      <h1 className="text-[20px] font-medium bg-green-300 " >
        Your correct answer is {correctAns.length} out of {currentQuestion} till
        now.
      </h1>
    </div>
  );
};

export default Answer;
