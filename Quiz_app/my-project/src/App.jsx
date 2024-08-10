import questions from "./Constant/questions.json";
import Answer from "./Pages/Answer";
import Question from "./Pages/Question";
import { useState } from "react";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  console.log(userAnswers);

  function handleNextQuestion(isCorrect) {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  }

  return (
    <div className="bg-cyan-500 min-h-[100vh] mt--10">
      <div className="w-4/5 m-auto">
        <h1>
          {currentQuestion < questions.length ? (
            <Question
              question={questions[currentQuestion]}
              onAnswerClick={handleNextQuestion}
            />
          ) : (
            <h1 className="text-3xl font-bold text-center pt-10">
              You have completed the test
            </h1>
          )}

          {currentQuestion === questions.length && (
            <Answer
              userAnswers={userAnswers}
              questions={questions}
              currentQuestion={currentQuestion}
            />
          )}
        </h1>
      </div>
    </div>
  );
}
