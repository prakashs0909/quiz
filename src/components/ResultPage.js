import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { Link } from "react-router-dom";

const ResultPage = () => {
  const { score, questions, setScore, setCurrentQuestion } = useContext(QuizContext);

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">Quiz Completed!</h1>
      <p className="text-lg">Your Score: {score} / {questions.length * 4}</p>
      <Link to="/" onClick={resetQuiz}>
        <button className="mt-5 px-6 py-2 bg-green-500 text-white rounded">Play Again</button>
      </Link>
    </div>
  );
};

export default ResultPage;
